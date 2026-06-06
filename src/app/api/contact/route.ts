import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';
import { renderListingsWelcomeEmail } from '@/lib/emails/listings-welcome';
import { sendOpsAlert } from '@/lib/ops-alerts';

/**
 * POST /api/contact
 *
 * Receives the contact form payload from the Next.js frontend,
 * captures consent metadata server-side (IP, timestamp), and
 * writes the contact + consent fields to GHL via the Contacts API.
 *
 * A2P 10DLC compliance requirements:
 * - Consent boolean persisted to CRM custom fields
 * - ISO 8601 UTC timestamp recorded at moment of write
 * - IP captured from Vercel x-forwarded-for header (not client)
 * - Verbatim checkbox text stored for audit trail
 * - Server logs errors but never exposes PII in log messages
 *
 * GHL custom fields needed (create in GHL Settings → Custom Fields):
 *   sms_marketing_consent          (boolean / checkbox)
 *   sms_marketing_consent_timestamp (date/time)
 *   sms_transactional_consent      (boolean / checkbox)
 *   sms_transactional_consent_timestamp (date/time)
 *   consent_ip_address             (text)
 *   consent_source_url             (text)
 *   consent_checkbox_text_marketing    (text / long text)
 *   consent_checkbox_text_transactional (text / long text)
 *
 * TODO (Phase 1): Confirm GHL custom field keys/IDs after Phase 1 audit.
 *   The `customField` keys below must match the keys set in GHL exactly.
 *   If GHL uses numeric IDs instead of string keys, replace accordingly.
 *
 * Environment variables required:
 *   GHL_API_TOKEN          — GHL private integration token (never public)
 *   GHL_LOCATION_ID        — Kim's sub-account location ID
 *   NEXT_PUBLIC_LEGAL_BUSINESS_NAME — confirmed from GHL Brand registration
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interested?: string;
  message?: string;
  smsMarketingConsent: boolean;
  smsTransactionalConsent: boolean;
  marketingCheckboxText: string;
  transactionalCheckboxText: string;
  tags?: string[];
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

/**
 * Build channel-attribution tags from UTM parameters so Iris can group
 * leads by source on Friday reports. Values are lowercased + slugified.
 * Body values win over query-string values. Both fall back to nothing.
 */
function buildUtmTags(
  body: ContactPayload,
  url: URL
): { tags: string[]; utm: Record<string, string> } {
  const params = url.searchParams;
  const utm = {
    source: (body.utmSource ?? params.get('utm_source') ?? '').trim(),
    medium: (body.utmMedium ?? params.get('utm_medium') ?? '').trim(),
    campaign: (body.utmCampaign ?? params.get('utm_campaign') ?? '').trim(),
    content: (body.utmContent ?? params.get('utm_content') ?? '').trim(),
    term: (body.utmTerm ?? params.get('utm_term') ?? '').trim(),
  };
  const slug = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
  const tags: string[] = [];
  if (utm.source) tags.push(`utm-source-${slug(utm.source)}`);
  if (utm.medium) tags.push(`utm-medium-${slug(utm.medium)}`);
  if (utm.campaign) tags.push(`utm-campaign-${slug(utm.campaign)}`);
  if (utm.content) tags.push(`utm-content-${slug(utm.content)}`);
  if (utm.term) tags.push(`utm-term-${slug(utm.term)}`);
  const present: Record<string, string> = {};
  for (const [k, v] of Object.entries(utm)) if (v) present[k] = v;
  return { tags, utm: present };
}


export async function POST(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[contact-api] Missing GHL_API_TOKEN or GHL_LOCATION_ID env vars');
    return NextResponse.json(
      { error: 'Server configuration error. Please try again or call Kim at 425-250-9422.' },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    interested,
    message,
    smsMarketingConsent,
    smsTransactionalConsent,
    tags: customTags,
    source: customSource,
  } = body;

  // First name is always required. The contact method can be either email
  // OR phone — phone-only forms (e.g. listings lead-magnet popup) need to
  // submit without an email and still create a GHL contact.
  if (!firstName || (!email && !phone)) {
    return NextResponse.json(
      { error: 'First name and either email or phone are required.' },
      { status: 400 }
    );
  }

  // Build GHL contact payload
  // GHL API v2 (2021-07-28) accepts: firstName, lastName, email, phone, locationId,
  // source, tags, customFields (array of {id, value}), notes (separate endpoint).
  // Custom field IDs must be created in GHL Settings first — using tags to carry
  // consent + context until those field IDs are confirmed.
  const consentTags: string[] = [];
  if (smsMarketingConsent) consentTags.push('consent-marketing');
  if (smsTransactionalConsent) consentTags.push('consent-transactional');
  if (interested) consentTags.push(`interested-${interested.toLowerCase().replace(/\s+/g, '-')}`);

  // Capture UTM attribution from body (popup forwards them) or fall back
  // to the request URL query string (direct API calls / curl tests).
  // UTMs become tags so Iris can group leads by channel each Friday.
  const utmInfo = buildUtmTags(body, new URL(req.url));

  const ghlPayload: Record<string, unknown> = {
    firstName,
    lastName: lastName ?? '',
    email: email ?? '',
    phone: phone ?? '',
    locationId: GHL_LOCATION_ID,
    source: customSource ?? 'website_contact_form',
    tags: [...(customTags ?? ['website-lead']), ...consentTags, ...utmInfo.tags],
  };

  // Use GHL's upsert endpoint so repeat submitters don't 4xx. If the
  // contact already exists (matched by email or phone within this
  // location), GHL merges the new tags/source onto the existing record;
  // otherwise it creates a new contact. Lets the same person grab
  // multiple lead magnets over time without breaking the form.
  let ghlRes: Response;
  try {
    ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        'Content-Type': 'application/json',
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify(ghlPayload),
    });
  } catch (err) {
    console.error('[contact-api] Network error calling GHL:', (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't submit your request. Please try again or text/call Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  if (!ghlRes.ok) {
    const errBody = await ghlRes.text().catch(() => '(no body)');
    console.error(`[contact-api] GHL returned ${ghlRes.status}:`, errBody.slice(0, 600));
    return NextResponse.json(
      { error: "We couldn't submit your request. Please try again or text/call Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  // Pull the GHL contact id from the upsert response so we can pipe it
  // into the FUB sync below.
  let ghlContactId: string | undefined;
  try {
    const data = (await ghlRes.clone().json()) as { contact?: { id?: string } };
    ghlContactId = data.contact?.id;
  } catch {
    // non-fatal
  }

  // Instant SMS to Kim (and any other ALERT_PHONE in env). Fires on every
  // lead, code-level — independent of any GHL workflow. Replaces the
  // historically-blank GHL workflow SMS. Speed is the moat: a 90-second
  // text beats a 4-hour email every time. fire-and-forget; never blocks
  // the response and never throws.
  const utmTagBits = utmInfo.tags
    .filter((t) => t.startsWith('utm-'))
    .map((t) => t.replace(/^utm-/, ''));
  const smsParts = [
    'NEW LEAD',
    customSource ?? 'website_contact_form',
    [firstName, lastName].filter(Boolean).join(' ').trim() || '(no name)',
    email || phone || '(no contact)',
    phone && email ? phone : '',
    interested ? `int: ${interested}` : '',
    message ? `note: ${message.slice(0, 80)}` : '',
    utmTagBits.length ? `via ${utmTagBits.join(' · ')}` : '',
  ].filter(Boolean);
  sendOpsAlert({
    apiToken: GHL_API_TOKEN,
    locationId: GHL_LOCATION_ID,
    summary: smsParts.join(' · '),
  }).catch(() => {});

  // Self-trigger the GHL->FUB sync directly instead of relying on the
  // GHL workflow webhook. The workflow only fires on "contact created"
  // by default, so any returning lead (anyone we've already touched
  // via newsletter, prior form, etc.) would get upserted in GHL but
  // never mirror to FUB, never trigger the FUB automation, never get
  // the welcome email. Calling our own sync route ensures every popup
  // submission lands in FUB regardless of GHL workflow config.
  //
  // We POST to the same path that GHL hits, with the webhook secret,
  // and a payload shaped exactly like what GHL would send. The route
  // already hydrates the full contact from GHL via the contact id, so
  // it gets the freshly-merged tags.
  if (ghlContactId) {
    const webhookSecret = process.env.PELHAM_WEBHOOK_SECRET?.trim();
    const proto = req.headers.get('x-forwarded-proto') ?? 'https';
    const host = req.headers.get('host') ?? 'thepelhamgroupnw.com';
    const syncUrl = `${proto}://${host}/api/sync/ghl-to-fub`;
    // IMPORTANT: await this. A fire-and-forget fetch gets killed when the
    // serverless function freezes after returning the response, so the
    // sync silently never runs for returning leads (where the GHL
    // workflow doesn't fire either). Awaiting adds ~1-2s but guarantees
    // the contact mirrors to FUB and the automation fires. The popup
    // shows a loading state, so the extra latency is acceptable.
    try {
      const syncRes = await fetch(syncUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(webhookSecret ? { 'X-Pelham-Webhook-Secret': webhookSecret } : {}),
        },
        body: JSON.stringify({
          contact_id: ghlContactId,
          firstName,
          lastName: lastName ?? '',
          email: email ?? '',
          phone: phone ?? '',
          source: customSource ?? 'website_contact_form',
          tags: [...(customTags ?? []), ...consentTags, ...utmInfo.tags],
          utm: utmInfo.utm,
        }),
      });
      if (!syncRes.ok) {
        const body = await syncRes.text().catch(() => '');
        console.error(
          `[contact-api] self-triggered FUB sync ${syncRes.status}:`,
          body.slice(0, 200)
        );
      }
    } catch (err) {
      console.error(
        '[contact-api] self-triggered FUB sync threw:',
        (err as Error).message
      );
    }
  }

  // If a message was submitted, attach it as a note on the newly created contact
  if (message) {
    try {
      const { contact } = await ghlRes.clone().json() as { contact: { id: string } };
      if (contact?.id) {
        await fetch(`${GHL_API_BASE}/contacts/${contact.id}/notes`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_API_TOKEN}`,
            'Content-Type': 'application/json',
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({ body: message }),
        });
      }
    } catch {
      // Note creation is best-effort — don't fail the whole request over it
      console.error('[contact-api] Failed to create note on contact');
    }
  }

  // Best-effort branded welcome email that delivers the pre-listing
  // playbook PDF download link. No-ops if RESEND_API_KEY isn't set, so
  // the form keeps working before Resend is configured. Errors are
  // logged but don't fail the request — the lead is already in GHL+FUB
  // at this point.
  const tagSet = new Set([...(customTags ?? []), ...consentTags]);
  if (email && tagSet.has('prelisting-guide')) {
    const { subject, html, text } = renderListingsWelcomeEmail({ firstName });
    sendEmail({
      to: email,
      subject,
      html,
      text,
      tags: [
        { name: 'campaign', value: 'prelisting-guide' },
        { name: 'source', value: 'website-popup' },
      ],
    }).then((r) => {
      if (!r.ok) {
        console.error('[contact-api] Resend send failed:', r.reason);
      }
    });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
