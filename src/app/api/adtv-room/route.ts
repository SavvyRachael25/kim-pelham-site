import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/adtv-room
 *
 * The QR landing (/tv) from an ADTV shoot. One field: a cell number. The
 * promise on the card is one text now (so they know it worked) and one in
 * December with the link. Nothing else.
 *
 * Flow:
 *   1. Validate (10+ digits; honeypot empty)
 *   2. Upsert contact in GHL tagged adtv-room, adtv-room-<event>, sms-opted-in
 *   3. Note: which room, when
 *   4. Enroll explicitly in the receipt workflow ("ADTV room: link-when-it-airs receipt")
 *   5. Mirror to Follow Up Boss (Kim calls the room in December)
 *
 * No per-scan alert to Kim: a room of 175 would be 175 texts. Rachael pulls the
 * list by tag. The December link text is a separate workflow Rachael fires.
 *
 * Env required: GHL_API_TOKEN, GHL_LOCATION_ID. Optional: PELHAM_WEBHOOK_SECRET.
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';
// "ADTV room: link-when-it-airs receipt"
const RECEIPT_WORKFLOW_ID = '86a91cf2-90b2-45a3-9425-c3748fddd5a9';

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

interface RoomPayload {
  phone: string;
  event?: string;      // e.g. 100women (from the card's ?e=)
  website?: string;    // honeypot
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export async function POST(req: NextRequest) {
  let body: RoomPayload;
  try {
    body = (await req.json()) as RoomPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const phone = (body.phone || '').trim();
  if (phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ error: 'That number looks short. Ten digits, please.' }, { status: 400 });
  }

  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[adtv-room] Missing GHL_API_TOKEN or GHL_LOCATION_ID');
    return NextResponse.json({ error: 'Something went wrong on our end. Text Kim at 425-250-9422.' }, { status: 500 });
  }

  const event = slug(body.event || 'unknown') || 'unknown';
  const { utmSource, utmMedium, utmCampaign } = body;
  const isTest = utmSource === 'internal-test';

  const tags = ['adtv-room', `adtv-room-${event}`, 'sms-opted-in'];
  if (utmSource) tags.push(`utm-source-${slug(utmSource)}`);
  if (utmMedium) tags.push(`utm-medium-${slug(utmMedium)}`);
  if (utmCampaign) tags.push(`utm-campaign-${slug(utmCampaign)}`);

  const headers = {
    Authorization: `Bearer ${GHL_API_TOKEN}`,
    'Content-Type': 'application/json',
    Version: GHL_API_VERSION,
  };

  let ghlRes: Response;
  try {
    ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ phone, locationId: GHL_LOCATION_ID, source: `adtv-room-${event}`, tags }),
    });
  } catch (err) {
    console.error('[adtv-room] Network error calling GHL:', (err as Error).message);
    return NextResponse.json({ error: "That didn't go through. Text Kim at 425-250-9422 and she will add you by hand." }, { status: 502 });
  }
  if (!ghlRes.ok) {
    console.error(`[adtv-room] GHL ${ghlRes.status}:`, (await ghlRes.text().catch(() => '(no body)')).slice(0, 600));
    return NextResponse.json({ error: "That didn't go through. Text Kim at 425-250-9422 and she will add you by hand." }, { status: 502 });
  }

  let ghlContactId: string | undefined;
  try {
    const data = (await ghlRes.json()) as { contact?: { id?: string } };
    ghlContactId = data.contact?.id;
  } catch {
    // non-fatal
  }

  if (ghlContactId) {
    try {
      await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/notes`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ body: `ADTV room scan: ${event}\nSubmitted: ${new Date().toISOString()}\nPromised: the segment link by text the day it is up.` }),
      });
    } catch {
      // non-fatal
    }
    try {
      const r = await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/workflow/${RECEIPT_WORKFLOW_ID}`, { method: 'POST', headers, body: JSON.stringify({}) });
      if (!r.ok) console.error(`[adtv-room] workflow enroll ${r.status}:`, (await r.text().catch(() => '')).slice(0, 300));
    } catch (err) {
      console.error('[adtv-room] workflow enroll failed (non-fatal):', (err as Error).message);
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
        body: JSON.stringify({ contact_id: ghlContactId, firstName: '', lastName: '', email: '', phone, source: `adtv-room-${event}`, tags }),
      });
    } catch (err) {
      console.error('[adtv-room] FUB sync failed (non-fatal):', (err as Error).message);
    }
  }

  return NextResponse.json({ ok: true });
}
