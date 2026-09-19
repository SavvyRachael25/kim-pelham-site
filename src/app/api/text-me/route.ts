import { NextRequest, NextResponse } from 'next/server';
import { sendOpsAlert } from '@/lib/ops-alerts';

/**
 * POST /api/text-me
 *
 * The one-field ask (TextMeAsk): a cell number from a seller post or the
 * homepage. Nothing else is collected on purpose; Kim gets the name and the
 * house when the photos arrive by text.
 *
 * Flow:
 *   1. Validate (10+ digits; honeypot empty)
 *   2. Upsert contact in GHL tagged text-me, text-me-<page>, sms-opted-in
 *      (leaving a number to be texted is the consent), plus UTM tags
 *   3. Note: which page, when
 *   4. Enroll explicitly in the first-reply workflow. Two workflows exist:
 *      the normal one, and the "out until November 30" one used while Kim is
 *      out after surgery (November 13 to 27, 2026). The route picks by date so
 *      nothing needs editing in GHL while she is out.
 *   5. Mirror to Follow Up Boss (Kim works there)
 *   6. Alert Kim + Rachael
 *
 * Testing: utmSource "internal-test" skips the FUB mirror and the alert.
 *
 * Env required: GHL_API_TOKEN, GHL_LOCATION_ID. Optional: PELHAM_WEBHOOK_SECRET.
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

// "Text-me: first reply from Kim"
const FIRST_REPLY_WORKFLOW_ID = 'ba3c1e79-b52d-42ee-a49c-ffab13e7cc6d';
// "Text-me: first reply (out until Nov 30)"
const FIRST_REPLY_SURGERY_WORKFLOW_ID = '9d16b276-0d38-44c8-97e4-9e905f27d8df';

// Kim's surgery is November 13, 2026; she is out about two weeks. Pacific time.
const SURGERY_WINDOW_START = Date.parse('2026-11-13T00:00:00-08:00');
const SURGERY_WINDOW_END = Date.parse('2026-11-28T00:00:00-08:00');

function inSurgeryWindow(now = Date.now()): boolean {
  return now >= SURGERY_WINDOW_START && now < SURGERY_WINDOW_END;
}

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

interface TextMePayload {
  phone: string;
  page: string;        // slug of the page the ask sat on, e.g. first-72-hours, home
  website?: string;    // honeypot, must stay empty
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export async function POST(req: NextRequest) {
  let body: TextMePayload;
  try {
    body = (await req.json()) as TextMePayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend it worked.
  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const phone = (body.phone || '').trim();
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) {
    return NextResponse.json({ error: 'That number looks short. Ten digits, please.' }, { status: 400 });
  }

  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[text-me] Missing GHL_API_TOKEN or GHL_LOCATION_ID');
    return NextResponse.json({ error: 'Something went wrong on our end. Text Kim directly at 425-250-9422.' }, { status: 500 });
  }

  const page = slug(body.page || 'unknown') || 'unknown';
  const { utmSource, utmMedium, utmCampaign, utmContent } = body;
  const isTest = utmSource === 'internal-test';
  const surgery = inSurgeryWindow();

  const tags = ['text-me', `text-me-${page}`, 'sms-opted-in'];
  if (surgery) tags.push('text-me-surgery-window');
  if (utmSource) tags.push(`utm-source-${slug(utmSource)}`);
  if (utmMedium) tags.push(`utm-medium-${slug(utmMedium)}`);
  if (utmCampaign) tags.push(`utm-campaign-${slug(utmCampaign)}`);
  if (utmContent) tags.push(`utm-content-${slug(utmContent)}`);

  const headers = {
    Authorization: `Bearer ${GHL_API_TOKEN}`,
    'Content-Type': 'application/json',
    Version: GHL_API_VERSION,
  };

  const ghlPayload: Record<string, unknown> = {
    phone,
    locationId: GHL_LOCATION_ID,
    source: `text-me-${page}`,
    tags,
  };

  let ghlRes: Response;
  try {
    ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, { method: 'POST', headers, body: JSON.stringify(ghlPayload) });
  } catch (err) {
    console.error('[text-me] Network error calling GHL:', (err as Error).message);
    return NextResponse.json({ error: "That didn't go through. Text Kim directly at 425-250-9422." }, { status: 502 });
  }
  if (!ghlRes.ok) {
    console.error(`[text-me] GHL ${ghlRes.status}:`, (await ghlRes.text().catch(() => '(no body)')).slice(0, 600));
    return NextResponse.json({ error: "That didn't go through. Text Kim directly at 425-250-9422." }, { status: 502 });
  }

  let ghlContactId: string | undefined;
  try {
    const data = (await ghlRes.json()) as { contact?: { id?: string } };
    ghlContactId = data.contact?.id;
  } catch {
    // non-fatal
  }

  if (ghlContactId) {
    const noteLines = [
      `Text-me ask from /${page === 'home' ? '' : 'blog/' + page}`,
      `Submitted: ${new Date().toISOString()}`,
      surgery ? 'Enrolled in the out-until-Nov-30 reply; answer after November 30.' : null,
      utmSource || utmMedium || utmCampaign || utmContent
        ? `Source: ${[utmSource, utmMedium, utmCampaign, utmContent].filter(Boolean).join(' / ')}`
        : null,
    ].filter(Boolean);
    try {
      await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/notes`, { method: 'POST', headers, body: JSON.stringify({ body: noteLines.join('\n') }) });
    } catch {
      // non-fatal
    }

    // Explicit enrollment. A tag that arrives with the contact on upsert does
    // NOT fire the tag-added trigger (verified 2026-08-30 on the guide gate).
    const workflowId = surgery ? FIRST_REPLY_SURGERY_WORKFLOW_ID : FIRST_REPLY_WORKFLOW_ID;
    try {
      const r = await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/workflow/${workflowId}`, { method: 'POST', headers, body: JSON.stringify({}) });
      if (!r.ok) console.error(`[text-me] workflow enroll ${r.status}:`, (await r.text().catch(() => '')).slice(0, 300));
    } catch (err) {
      console.error('[text-me] workflow enroll failed (non-fatal):', (err as Error).message);
    }
  }

  if (ghlContactId && !isTest) {
    const webhookSecret = process.env.PELHAM_WEBHOOK_SECRET?.trim();
    const proto = req.headers.get('x-forwarded-proto') ?? 'https';
    const host = req.headers.get('host') ?? 'thepelhamgroupnw.com';
    try {
      await fetch(`${proto}://${host}/api/sync/ghl-to-fub`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(webhookSecret ? { 'X-Pelham-Webhook-Secret': webhookSecret } : {}) },
        body: JSON.stringify({ contact_id: ghlContactId, firstName: '', lastName: '', email: '', phone, source: ghlPayload.source, tags }),
      });
    } catch (err) {
      console.error('[text-me] FUB sync failed (non-fatal):', (err as Error).message);
    }

    try {
      await sendOpsAlert({
        apiToken: GHL_API_TOKEN,
        locationId: GHL_LOCATION_ID,
        summary: `Text-me lead: ${phone} from /${page === 'home' ? '' : 'blog/' + page}. ${surgery ? 'They got the out-until-Nov-30 text.' : 'They got your first text; watch for their photos.'}`,
      });
    } catch {
      // non-fatal
    }
  }

  return NextResponse.json({ ok: true });
}
