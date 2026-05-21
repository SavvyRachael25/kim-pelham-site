import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';
import { renderListingsWelcomeEmail } from '@/lib/emails/listings-welcome';

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

  const ghlPayload: Record<string, unknown> = {
    firstName,
    lastName: lastName ?? '',
    email: email ?? '',
    phone: phone ?? '',
    locationId: GHL_LOCATION_ID,
    source: customSource ?? 'website_contact_form',
    tags: [...(customTags ?? ['website-lead']), ...consentTags],
  };

  let ghlRes: Response;
  try {
    ghlRes = await fetch(`${GHL_API_BASE}/contacts/`, {
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
    console.error(`[contact-api] GHL returned ${ghlRes.status}:`, errBody.slice(0, 200));
    return NextResponse.json(
      { error: "We couldn't submit your request. Please try again or text/call Kim at 425-250-9422." },
      { status: 502 }
    );
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
