import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/sync/ghl-to-fub
 *
 * Webhook receiver for the Kim Pelham GHL location. Triggered by a GHL workflow
 * on every contact-created (and optionally contact-updated) event.
 *
 * Pipeline:
 *   1. Verify shared-secret header (X-Pelham-Webhook-Secret) — rejects randos
 *   2. Skip internal/system contacts (tagged "internal-notifications")
 *   3. Skip contacts already mirrored from FUB (tagged "synced-from-fub")
 *   4. Map GHL fields → FUB shape
 *   5. POST to FUB People API, assigned to Kim (user id 9 in Katrina Eileen FUB)
 *   6. If GHL contact has notes/message, attach as a FUB note
 *   7. Return 200 to GHL so the workflow doesn't retry
 *
 * Why one-way (GHL → FUB) instead of two-way:
 *   - All inbound leads land in GHL first (chat widget, Instagram DMs, future SMS)
 *   - Kim's day-to-day workflow is FUB — so FUB needs the leads
 *   - The reverse direction (FUB → GHL) is only needed if Kim manually adds a
 *     contact in FUB that needs SMS/email automation in GHL. Defer to Phase 2.
 *
 * Env vars (all required):
 *   FUB_API_KEY                  — FUB API key (HTTP Basic, key is username)
 *   FUB_KIM_USER_ID              — Kim's FUB user id (default: 9)
 *   PELHAM_WEBHOOK_SECRET        — shared secret matching the GHL workflow header
 */

const FUB_API_BASE = 'https://api.followupboss.com/v1';

interface GHLContactPayload {
  // GHL workflow webhooks pass whatever fields the workflow maps. Common shape:
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
  // Allow unknown extras
  [key: string]: unknown;
}

function pickFirst<T>(...vals: (T | undefined | null | '')[]): T | undefined {
  for (const v of vals) if (v) return v as T;
  return undefined;
}

function normalizeTags(t: unknown): string[] {
  if (Array.isArray(t)) return t.map(String).filter(Boolean);
  if (typeof t === 'string') return t.split(',').map((s) => s.trim()).filter(Boolean);
  return [];
}

function buildFubPayload(ghl: GHLContactPayload, kimUserId: number) {
  const firstName = pickFirst(ghl.first_name, ghl.firstName) ?? '';
  const lastName = pickFirst(ghl.last_name, ghl.lastName) ?? '';
  // If first/last weren't set but a fullName was, split on first whitespace
  let fName = firstName;
  let lName = lastName;
  if (!fName && !lName) {
    const full = pickFirst(ghl.full_name, ghl.fullName) ?? '';
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

  if (ghl.email) {
    fub.emails = [{ value: String(ghl.email), type: 'home' }];
  }
  if (ghl.phone) {
    fub.phones = [{ value: String(ghl.phone), type: 'mobile' }];
  }

  return fub;
}

export async function POST(req: NextRequest) {
  const FUB_API_KEY = process.env.FUB_API_KEY?.trim();
  const PELHAM_WEBHOOK_SECRET = process.env.PELHAM_WEBHOOK_SECRET?.trim();
  const FUB_KIM_USER_ID = parseInt(process.env.FUB_KIM_USER_ID?.trim() ?? '9', 10);

  if (!FUB_API_KEY) {
    console.error('[ghl-to-fub] FUB_API_KEY missing');
    return NextResponse.json({ error: 'Server config error' }, { status: 500 });
  }

  // Verify webhook secret — rejects requests not coming from the GHL workflow
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

  // Skip system/internal contacts
  if (incomingTags.includes('internal-notifications') || incomingTags.includes('do-not-market')) {
    return NextResponse.json({ skipped: true, reason: 'internal contact' }, { status: 200 });
  }

  // Skip contacts already mirrored from FUB (avoid sync loops)
  if (incomingTags.includes('synced-from-fub')) {
    return NextResponse.json({ skipped: true, reason: 'mirrored-from-fub' }, { status: 200 });
  }

  const fubPayload = buildFubPayload(body, FUB_KIM_USER_ID);

  // POST to FUB People API
  let fubRes: Response;
  try {
    fubRes = await fetch(`${FUB_API_BASE}/people`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
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

  // Best-effort: attach the message as a FUB note
  if (body.message) {
    try {
      const fubData = (await fubRes.clone().json()) as { id?: number };
      if (fubData?.id) {
        await fetch(`${FUB_API_BASE}/notes`, {
          method: 'POST',
          headers: {
            Authorization: `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            personId: fubData.id,
            subject: 'Inbound message from website / GHL',
            body: String(body.message),
          }),
        });
      }
    } catch (err) {
      console.error('[ghl-to-fub] Failed to attach FUB note:', (err as Error).message);
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

// Optional: allow GHL to do a GET ping to confirm the URL is alive
export async function GET() {
  return NextResponse.json(
    { status: 'ok', endpoint: '/api/sync/ghl-to-fub', method: 'POST' },
    { status: 200 }
  );
}
