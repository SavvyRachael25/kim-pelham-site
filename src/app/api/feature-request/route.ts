import { NextRequest, NextResponse } from 'next/server';
import { sendOpsAlert } from '@/lib/ops-alerts';

/**
 * POST /api/feature-request
 *
 * ADTV nomination capture ("nominate a home, a business, or a nonprofit for the show").
 * This is the lead spine of the ADTV launch campaign.
 *
 * Flow:
 *   1. Validate payload (firstName + email + type required; honeypot must be empty)
 *   2. Upsert contact in GHL tagged adtv-nominee, adtv-<type>, adtv-own (if it is theirs),
 *      plus UTM attribution tags
 *   3. Attach a note with the nomination details (what, where, why, relationship)
 *   4. Enroll explicitly in the thank-you workflow (tag-added triggers do NOT fire on
 *      creation-time tags; verified 2026-08-30 on the guide gate)
 *   5. Mirror to Follow Up Boss (Kim works there)
 *   6. Alert Kim + Rachael (home nominations are the ones Kim calls)
 *
 * Testing: utmSource "internal-test" skips the FUB mirror and the alert so a QA run
 * never texts Kim or creates a FUB person. The GHL contact + workflow still run.
 *
 * Env required: GHL_API_TOKEN, GHL_LOCATION_ID. Optional: PELHAM_WEBHOOK_SECRET.
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';
// "ADTV Nomination - thank you"
const THANKS_WORKFLOW_ID = 'fddaa6a5-0167-4ee5-9245-7ee2ead5a5d9';

const TYPES = new Set(['home', 'business', 'nonprofit']);

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

interface FeaturePayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  type: string;            // home | business | nonprofit
  name?: string;           // what is it
  city?: string;           // where
  why?: string;            // the story
  relationship?: string;   // mine | neighbor | friend | i-run-it | other
  website?: string;        // honeypot, must stay empty
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export async function POST(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[feature-request] Missing GHL_API_TOKEN or GHL_LOCATION_ID');
    return NextResponse.json({ error: 'Something went wrong on our end. Please text Kim at 425-250-9422.' }, { status: 500 });
  }

  let body: FeaturePayload;
  try { body = (await req.json()) as FeaturePayload; }
  catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  // Honeypot: bots fill every field.
  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName || '').trim();
  const email = (body.email || '').trim();
  const type = (body.type || '').trim().toLowerCase();
  if (!firstName || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Please add your first name and a valid email.' }, { status: 400 });
  }
  if (!TYPES.has(type)) {
    return NextResponse.json({ error: 'Please pick a home, a business, or a nonprofit.' }, { status: 400 });
  }

  const { lastName, phone, name, city, why, relationship, utmSource, utmMedium, utmCampaign, utmContent } = body;
  const isTest = (utmSource || '').toLowerCase() === 'internal-test';

  const tags = ['adtv-nominee', `adtv-${type}`];
  if (relationship && /^(mine|i-run-it)$/.test(slug(relationship))) tags.push('adtv-own');
  if (utmSource) tags.push(`utm-source-${slug(utmSource)}`);
  if (utmMedium) tags.push(`utm-medium-${slug(utmMedium)}`);
  if (utmCampaign) tags.push(`utm-campaign-${slug(utmCampaign)}`);
  if (utmContent) tags.push(`utm-content-${slug(utmContent)}`);

  const ghlPayload: Record<string, unknown> = {
    firstName,
    lastName: lastName ?? '',
    email,
    phone: phone ?? '',
    locationId: GHL_LOCATION_ID,
    source: utmSource ? `adtv-nomination-${slug(utmSource)}` : 'adtv-nomination',
    tags,
  };

  let ghlRes: Response;
  try {
    ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${GHL_API_TOKEN}`, 'Content-Type': 'application/json', Version: GHL_API_VERSION },
      body: JSON.stringify(ghlPayload),
    });
  } catch (err) {
    console.error('[feature-request] Network error calling GHL:', (err as Error).message);
    return NextResponse.json({ error: "We couldn't save your nomination. Please text Kim at 425-250-9422." }, { status: 502 });
  }
  if (!ghlRes.ok) {
    const errBody = await ghlRes.text().catch(() => '(no body)');
    console.error(`[feature-request] GHL ${ghlRes.status}:`, errBody.slice(0, 600));
    return NextResponse.json({ error: "We couldn't save your nomination. Please text Kim at 425-250-9422." }, { status: 502 });
  }

  let ghlContactId: string | undefined;
  try {
    const data = (await ghlRes.clone().json()) as { contact?: { id?: string } };
    ghlContactId = data.contact?.id;
  } catch { /* non-fatal */ }

  const headers = { Authorization: `Bearer ${GHL_API_TOKEN}`, 'Content-Type': 'application/json', Version: GHL_API_VERSION };

  if (ghlContactId) {
    // Note with the nomination itself. This is what Kim reads before she calls.
    const lines = [
      `ADTV nomination: ${type.toUpperCase()}`,
      name ? `What: ${name}` : null,
      city ? `Where: ${city}` : null,
      relationship ? `Relationship: ${relationship}` : null,
      why ? `Why: ${why}` : null,
      (utmSource || utmMedium || utmCampaign || utmContent) ? `Source: ${[utmSource, utmMedium, utmCampaign, utmContent].filter(Boolean).join(' / ')}` : null,
    ].filter(Boolean);
    try {
      await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/notes`, { method: 'POST', headers, body: JSON.stringify({ body: lines.join('\n') }) });
    } catch { /* non-fatal */ }

    // Explicit enrollment in the thank-you workflow.
    try {
      const r = await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/workflow/${THANKS_WORKFLOW_ID}`, { method: 'POST', headers, body: JSON.stringify({}) });
      if (!r.ok) console.error(`[feature-request] workflow enroll ${r.status}:`, (await r.text().catch(() => '')).slice(0, 300));
    } catch (err) { console.error('[feature-request] workflow enroll failed (non-fatal):', (err as Error).message); }

    // Mirror to FUB.
    if (!isTest) {
      const webhookSecret = process.env.PELHAM_WEBHOOK_SECRET?.trim();
      const proto = req.headers.get('x-forwarded-proto') ?? 'https';
      const host = req.headers.get('host') ?? 'thepelhamgroupnw.com';
      try {
        await fetch(`${proto}://${host}/api/sync/ghl-to-fub`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...(webhookSecret ? { 'X-Pelham-Webhook-Secret': webhookSecret } : {}) },
          body: JSON.stringify({ contact_id: ghlContactId, firstName, lastName: lastName ?? '', email, phone: phone ?? '', source: ghlPayload.source, tags }),
        });
      } catch (err) { console.error('[feature-request] FUB sync failed (non-fatal):', (err as Error).message); }
    }
  }

  if (!isTest) {
    try {
      await sendOpsAlert({
        apiToken: GHL_API_TOKEN,
        locationId: GHL_LOCATION_ID,
        summary: `ADTV nomination (${type}${tags.includes('adtv-own') ? ', THEIR OWN' : ''}): ${firstName} ${lastName ?? ''} (${email}${phone ? ', ' + phone : ''}) nominated ${name || 'unnamed'}${city ? ' in ' + city : ''}.${why ? ' Why: ' + why.slice(0, 140) : ''}`,
      });
    } catch { /* non-fatal */ }
  }

  return NextResponse.json({ ok: true });
}
