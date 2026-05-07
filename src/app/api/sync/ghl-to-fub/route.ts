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
 *   7. Add a "lead captured" structured note for Kim's audit trail (always)
 *   8. Send auto-response email via Resend (if RESEND_API_KEY is set)
 *   9. Return 200 to GHL so the workflow doesn't retry
 *
 * Why one-way (GHL → FUB) instead of two-way:
 *   - All inbound leads land in GHL first (chat widget, Instagram DMs, future SMS)
 *   - Kim's day-to-day workflow is FUB — so FUB needs the leads
 *   - The reverse direction (FUB → GHL) is only needed if Kim manually adds a
 *     contact in FUB that needs SMS/email automation in GHL. Defer to Phase 2.
 *
 * Env vars:
 *   FUB_API_KEY                  — FUB API key (HTTP Basic, key is username) [required]
 *   FUB_KIM_USER_ID              — Kim's FUB user id (default: 9)
 *   PELHAM_WEBHOOK_SECRET        — shared secret matching the GHL workflow header [required]
 *   RESEND_API_KEY               — Resend API key for the auto-response email [optional]
 *   RESEND_FROM_ADDRESS          — Verified Resend sender (default: "Kim Pelham <kim@thepelhamgroupnw.com>")
 *   RESEND_REPLY_TO              — Reply-to header (default: "kim@thepelhamgroupnw.com")
 *   AUTO_RESPONSE_SUBJECT        — Auto-response subject line (default below)
 *   AUTO_RESPONSE_BODY           — Auto-response email body, supports {{firstName}} merge token
 */

const FUB_API_BASE = 'https://api.followupboss.com/v1';
const RESEND_API_BASE = 'https://api.resend.com';

const DEFAULT_AUTO_RESPONSE_SUBJECT = 'Got your message — Kim Pelham';

const DEFAULT_AUTO_RESPONSE_BODY = `Hi {{firstName}},

Thanks for reaching out through my website. Your message landed in my inbox and I'll get back to you the same day, usually within a couple of hours unless I'm in a showing.

If something is time-sensitive — a property hitting the market this weekend, a question about an offer deadline, anything that can't wait — text or call me directly at (425) 250-9422. I keep my phone on me.

A quick note on what I do, in case it's useful while you wait: I work with families across Snohomish County who are figuring out their next chapter. That might be a first home, a downsize after the kids leave, a relocation for work, or selling the house your kids grew up in. Whatever it is, I'm walking alongside you for the whole thing — pricing, prep, photos, showings, negotiations, and the closing table.

If you want to keep poking around in the meantime, a few useful pages on my site:

  · Current listings: https://thepelhamgroupnw.com/properties
  · About me: https://thepelhamgroupnw.com/about
  · Market data + neighborhood guides: https://thepelhamgroupnw.com/blog

Talk soon.

Kim Pelham
The Pelham Group NW
Brokered by Katrina Eileen Real Estate
(425) 250-9422
Kim@ThePelhamGroupNW.com
`;

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

async function sendResendEmail(opts: {
  apiKey: string;
  from: string;
  replyTo: string;
  to: string;
  subject: string;
  text: string;
}) {
  return fetch(`${RESEND_API_BASE}/emails`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: opts.from,
      to: opts.to,
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
    }),
  });
}

export async function POST(req: NextRequest) {
  const FUB_API_KEY = process.env.FUB_API_KEY?.trim();
  const PELHAM_WEBHOOK_SECRET = process.env.PELHAM_WEBHOOK_SECRET?.trim();
  const FUB_KIM_USER_ID = parseInt(process.env.FUB_KIM_USER_ID?.trim() ?? '9', 10);
  const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
  const RESEND_FROM_ADDRESS = (process.env.RESEND_FROM_ADDRESS ?? 'Kim Pelham <kim@thepelhamgroupnw.com>').trim();
  const RESEND_REPLY_TO = (process.env.RESEND_REPLY_TO ?? 'kim@thepelhamgroupnw.com').trim();
  const AUTO_RESPONSE_SUBJECT = (process.env.AUTO_RESPONSE_SUBJECT ?? DEFAULT_AUTO_RESPONSE_SUBJECT).trim();
  const AUTO_RESPONSE_BODY = (process.env.AUTO_RESPONSE_BODY ?? DEFAULT_AUTO_RESPONSE_BODY);

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

  const { fub: fubPayload, firstName: leadFirstName } = buildFubPayload(body, FUB_KIM_USER_ID);

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

  // Pull the new FUB id for downstream calls
  let newPersonId: number | undefined;
  try {
    const data = (await fubRes.clone().json()) as { id?: number };
    newPersonId = data.id;
  } catch {
    // non-fatal
  }

  // 2. Best-effort: attach the lead's message as a FUB note
  if (body.message && newPersonId) {
    try {
      await postFubNote(FUB_API_KEY, newPersonId, 'Inbound message from website / GHL', String(body.message));
    } catch (err) {
      console.error('[ghl-to-fub] Failed to attach inbound-message note:', (err as Error).message);
    }
  }

  // 3. Always: add a structured "lead captured" note so Kim has audit context
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
        'Auto-response email queued — verify it landed in the lead\'s inbox.',
      ].filter(Boolean);
      await postFubNote(FUB_API_KEY, newPersonId, 'Website lead — auto-captured', lines.join('\n'));
    } catch (err) {
      console.error('[ghl-to-fub] Failed to add audit note:', (err as Error).message);
    }
  }

  // 4. Best-effort: send auto-response email to the lead via Resend
  if (RESEND_API_KEY && body.email) {
    try {
      const personalizedBody = AUTO_RESPONSE_BODY.replace(/{{\s*firstName\s*}}/gi, leadFirstName);
      const r = await sendResendEmail({
        apiKey: RESEND_API_KEY,
        from: RESEND_FROM_ADDRESS,
        replyTo: RESEND_REPLY_TO,
        to: String(body.email),
        subject: AUTO_RESPONSE_SUBJECT,
        text: personalizedBody,
      });
      if (!r.ok) {
        const errTxt = await r.text().catch(() => '(no body)');
        console.error(`[ghl-to-fub] Resend returned ${r.status}:`, errTxt.slice(0, 200));
      } else if (newPersonId) {
        // Log the successful send as a FUB note so Kim sees it on the contact
        await postFubNote(
          FUB_API_KEY,
          newPersonId,
          'Auto-response email sent',
          `Sent to ${body.email}\nSubject: ${AUTO_RESPONSE_SUBJECT}\nVia: Resend → ${RESEND_FROM_ADDRESS}`,
        );
      }
    } catch (err) {
      console.error('[ghl-to-fub] Resend send failed:', (err as Error).message);
    }
  } else if (!RESEND_API_KEY) {
    console.info('[ghl-to-fub] RESEND_API_KEY not set — skipping auto-response email');
  } else if (!body.email) {
    console.info('[ghl-to-fub] No email on payload — skipping auto-response');
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
