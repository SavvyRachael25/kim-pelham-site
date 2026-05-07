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

  const tags = normalizeTags(ghl.tags);

  const fub: Record<string, unknown> = {
    firstName: fName || 'Lead',
    lastName: lName || '',
    source: ghl.source ? String(ghl.source) : 'Pelham Website / Chat',
    assignedUserId: kimUserId,
    tags: ['synced-from-ghl', ...tags],
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

  const incomingTags = normalizeTags(body.tags);

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
