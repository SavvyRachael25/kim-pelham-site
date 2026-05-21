import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/sync/ghl-to-fub
 *
 * Webhook receiver for the Kim Pelham GHL location. Triggered by a GHL workflow
 * on every contact-created event.
 *
 * Pipeline:
 *   1. Verify shared-secret header (X-Pelham-Webhook-Secret) — rejects randos
 *   2. Skip internal/system contacts (tagged "internal-notifications")
 *   3. Skip contacts already mirrored from FUB (tagged "synced-from-fub")
 *   4. Map GHL fields → FUB shape
 *   5. POST to FUB People API, assigned to Kim (user id 9 in Katrina Eileen FUB)
 *   6. If GHL contact has a message, attach as a FUB note
 *   7. Add a "lead captured" structured note for Kim's audit trail
 *   8. Return 200 to GHL so the workflow doesn't retry
 *
 * Auto-response email to the lead is handled by the GHL workflow itself
 * (Send Email action), NOT by this route. Reasoning:
 *   - Kim's GHL already has email sender infrastructure for Riley's newsletter
 *   - One sending source = one place to manage deliverability + audit logs
 *   - Avoids adding a third-party email dependency (Resend, SendGrid, etc.)
 *
 * Env vars (all required):
 *   FUB_API_KEY                  — FUB API key (HTTP Basic, key is username)
 *   FUB_KIM_USER_ID              — Kim's FUB user id (default: 9)
 *   PELHAM_WEBHOOK_SECRET        — shared secret matching the GHL workflow header
 */

const FUB_API_BASE = 'https://api.followupboss.com/v1';
const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

/*
  Hydrate the GHL contact from GHL's API using the contact id from the
  webhook payload. GHL workflows can be configured to send any subset
  of fields, so to guarantee we have tags (and any future custom fields)
  we re-fetch the full record. Returns the original payload unchanged
  if the fetch fails — the route is best-effort.
*/
async function hydrateGhlContact(
  body: GHLContactPayload,
  ghlToken: string
): Promise<GHLContactPayload> {
  const contactId =
    (typeof body.contact_id === 'string' && body.contact_id) ||
    (typeof body.id === 'string' && body.id) ||
    undefined;
  if (!contactId || !ghlToken) return body;
  try {
    const res = await fetch(`${GHL_API_BASE}/contacts/${contactId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ghlToken}`,
        Version: GHL_API_VERSION,
        Accept: 'application/json',
      },
    });
    if (!res.ok) {
      console.warn(`[ghl-to-fub] hydrate fetch returned ${res.status}, falling back to webhook payload`);
      return body;
    }
    const data = (await res.json()) as { contact?: Record<string, unknown> };
    const c = data.contact;
    if (!c) return body;
    // GHL returns the full record as `contact` — merge into our shape,
    // letting the freshly-fetched values overwrite anything sparser from
    // the workflow webhook.
    return {
      ...body,
      ...c,
      tags: (c.tags as string[] | string | undefined) ?? body.tags,
      email: (c.email as string | undefined) ?? body.email,
      phone: (c.phone as string | undefined) ?? body.phone,
      firstName: (c.firstName as string | undefined) ?? body.firstName ?? body.first_name,
      lastName: (c.lastName as string | undefined) ?? body.lastName ?? body.last_name,
      source: (c.source as string | undefined) ?? body.source,
    };
  } catch (err) {
    console.warn('[ghl-to-fub] hydrate fetch threw, falling back:', (err as Error).message);
    return body;
  }
}

interface GHLContactPayload {
  contact_id?: string;
  id?: string;
  first_name?: string;
  firstName?: string;
  last_name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source?: string;
  tags?: string[] | string;
  message?: string;
  full_name?: string;
  fullName?: string;
  name?: string;
  [key: string]: unknown;
}

function pickFirst<T>(...vals: (T | undefined | null | '')[]): T | undefined {
  for (const v of vals) if (v) return v as T;
  return undefined;
}

function normalizeTags(t: unknown): string[] {
  const isJunk = (s: string) => {
    const v = s.trim().toLowerCase();
    return !v || v === 'null' || v === 'undefined' || v === 'none';
  };
  const keep = (s: string) => !isJunk(s);
  if (Array.isArray(t)) return t.map(String).filter(keep);
  if (typeof t === 'string') return t.split(',').map((s) => s.trim()).filter(keep);
  return [];
}

/*
  GHL → FUB tag mapping.
  ─────────────────────
  GHL tags are kebab-case (e.g. `prelisting-guide`). FUB tags use Title
  Case to match the rest of Kim's CRM taxonomy. This map handles the
  rename so FUB smart lists can filter on human-readable tag names.

  Also derives high-intent tags like `Engaged Core` so a single FUB
  smart list can capture every lead-magnet/popup/form submission
  regardless of which specific magnet they came from.
*/
const GHL_TO_FUB_TAG: Record<string, string> = {
  'prelisting-guide': 'Pre-Listing Playbook',
  'listings-first-look': 'Listings First Look',
  'seller-lead': 'Seller Lead',
  'buyer-lead': 'Buyer Lead',
  'newsletter-signup': 'Newsletter Subscriber',
  'website-lead': 'Website Lead',
  'consent-marketing': 'SMS Marketing Consent',
  'consent-transactional': 'SMS Transactional Consent',
};

const ENGAGED_CORE_TRIGGERS = new Set([
  'prelisting-guide',
  'listings-first-look',
  'seller-lead',
  'buyer-lead',
  'home-value-request',
  'staging-gallery-request',
  'newsletter-signup',
]);

function mapTagsForFub(ghlTags: string[]): string[] {
  const mapped = new Set<string>();
  for (const tag of ghlTags) {
    const fubTag = GHL_TO_FUB_TAG[tag] ?? tag;
    mapped.add(fubTag);
  }
  // Derived: any lead from a high-intent source gets bucketed into
  // Engaged Core so Kim's nurture campaign can target one smart list.
  if (ghlTags.some((t) => ENGAGED_CORE_TRIGGERS.has(t))) {
    mapped.add('Engaged Core');
  }
  return [...mapped];
}

function fubAuthHeader(apiKey: string) {
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`;
}

function buildFubPayload(ghl: GHLContactPayload, kimUserId: number) {
  const firstName = pickFirst(ghl.first_name, ghl.firstName) ?? '';
  const lastName = pickFirst(ghl.last_name, ghl.lastName) ?? '';
  let fName = firstName;
  let lName = lastName;
  if (!fName && !lName) {
    const full = pickFirst(ghl.full_name, ghl.fullName, ghl.name) ?? '';
    if (full) {
      const idx = full.indexOf(' ');
      if (idx === -1) fName = full;
      else { fName = full.slice(0, idx); lName = full.slice(idx + 1); }
    }
  }

  const rawTags = normalizeTags(ghl.tags);
  const fubTags = mapTagsForFub(rawTags);

  const fub: Record<string, unknown> = {
    firstName: fName || 'Lead',
    lastName: lName || '',
    source: ghl.source ? String(ghl.source) : 'Pelham Website / Chat',
    assignedUserId: kimUserId,
    tags: ['Synced from GHL', ...fubTags],
  };

  if (ghl.email) fub.emails = [{ value: String(ghl.email), type: 'home' }];
  if (ghl.phone) fub.phones = [{ value: String(ghl.phone), type: 'mobile' }];

  return { fub, firstName: fName || 'Lead', lastName: lName || '' };
}

async function postFubNote(apiKey: string, personId: number, subject: string, body: string) {
  return fetch(`${FUB_API_BASE}/notes`, {
    method: 'POST',
    headers: {
      Authorization: fubAuthHeader(apiKey),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ personId, subject, body }),
  });
}

export async function POST(req: NextRequest) {
  const FUB_API_KEY = process.env.FUB_API_KEY?.trim();
  const PELHAM_WEBHOOK_SECRET = process.env.PELHAM_WEBHOOK_SECRET?.trim();
  const FUB_KIM_USER_ID = parseInt(process.env.FUB_KIM_USER_ID?.trim() ?? '9', 10);

  if (!FUB_API_KEY) {
    console.error('[ghl-to-fub] FUB_API_KEY missing');
    return NextResponse.json({ error: 'Server config error' }, { status: 500 });
  }

  if (PELHAM_WEBHOOK_SECRET) {
    const provided = req.headers.get('x-pelham-webhook-secret');
    if (provided !== PELHAM_WEBHOOK_SECRET) {
      console.warn('[ghl-to-fub] Webhook secret mismatch — rejecting');
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  } else {
    console.warn('[ghl-to-fub] PELHAM_WEBHOOK_SECRET not set — running unauthenticated (NOT recommended)');
  }

  let body: GHLContactPayload;
  try {
    body = (await req.json()) as GHLContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // Re-fetch the full contact from GHL using its id so we always have
  // the latest tags / fields regardless of how the GHL workflow webhook
  // is configured. Falls back to the webhook payload if GHL is down.
  const GHL_TOKEN = process.env.GHL_API_TOKEN?.trim() ?? '';
  body = await hydrateGhlContact(body, GHL_TOKEN);

  // Diagnostics: log what arrived (post-hydrate) so we can see exactly
  // what tags GHL is giving us. Counts only, no PII.
  const hydratedTags = normalizeTags(body.tags);
  console.log(
    '[ghl-to-fub] inbound',
    JSON.stringify({
      hasId: !!(body.contact_id || body.id),
      hasEmail: !!body.email,
      hasPhone: !!body.phone,
      tagCount: hydratedTags.length,
      tagsPreview: hydratedTags.slice(0, 12),
      source: body.source ?? null,
    })
  );

  const incomingTags = hydratedTags;

  if (incomingTags.includes('internal-notifications') || incomingTags.includes('do-not-market')) {
    return NextResponse.json({ skipped: true, reason: 'internal contact' }, { status: 200 });
  }

  if (incomingTags.includes('synced-from-fub')) {
    return NextResponse.json({ skipped: true, reason: 'mirrored-from-fub' }, { status: 200 });
  }

  const { fub: fubPayload } = buildFubPayload(body, FUB_KIM_USER_ID);

  // 1. Create the contact in FUB
  let fubRes: Response;
  try {
    fubRes = await fetch(`${FUB_API_BASE}/people`, {
      method: 'POST',
      headers: {
        Authorization: fubAuthHeader(FUB_API_KEY),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(fubPayload),
    });
  } catch (err) {
    console.error('[ghl-to-fub] Network error calling FUB:', (err as Error).message);
    return NextResponse.json({ error: 'FUB upstream network error' }, { status: 502 });
  }

  if (!fubRes.ok) {
    const errBody = await fubRes.text().catch(() => '(no body)');
    console.error(`[ghl-to-fub] FUB returned ${fubRes.status}:`, errBody.slice(0, 300));
    return NextResponse.json({ error: 'FUB upstream error', status: fubRes.status }, { status: 502 });
  }

  let newPersonId: number | undefined;
  try {
    const data = (await fubRes.clone().json()) as { id?: number };
    newPersonId = data.id;
  } catch {
    // non-fatal
  }

  // 2. Best-effort: attach the lead's typed message as a FUB note
  if (body.message && newPersonId) {
    try {
      await postFubNote(FUB_API_KEY, newPersonId, 'Inbound message from website / GHL', String(body.message));
    } catch (err) {
      console.error('[ghl-to-fub] Failed to attach inbound-message note:', (err as Error).message);
    }
  }

  // 3. Always: add a structured "lead captured" audit note
  if (newPersonId) {
    try {
      const ghlId = pickFirst(body.contact_id, body.id);
      const lines: string[] = [
        'Lead captured via website / GHL chat widget.',
        `Source: ${body.source ?? 'unknown'}`,
        body.email ? `Email: ${body.email}` : '',
        body.phone ? `Phone: ${body.phone}` : '',
        ghlId ? `GHL contact id: ${ghlId}` : '',
        `Captured: ${new Date().toISOString()}`,
        '',
        'Auto-response email is handled by the GHL workflow (Send Email action).',
      ].filter(Boolean);
      await postFubNote(FUB_API_KEY, newPersonId, 'Website lead — auto-captured', lines.join('\n'));
    } catch (err) {
      console.error('[ghl-to-fub] Failed to add audit note:', (err as Error).message);
    }
  }

  return NextResponse.json({ success: true, fubId: newPersonId ?? null }, { status: 200 });
}

// Optional: allow GHL to do a GET ping to confirm the URL is alive
export async function GET() {
  return NextResponse.json(
    { status: 'ok', endpoint: '/api/sync/ghl-to-fub', method: 'POST' },
    { status: 200 }
  );
}
