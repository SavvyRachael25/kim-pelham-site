import { NextRequest, NextResponse } from 'next/server';
import { sendOpsAlert } from '@/lib/ops-alerts';

/**
 * POST /api/guide-request
 *
 * Gated lead-magnet capture for Kim's designed guides.
 *
 * Flow:
 *   1. Validate payload (firstName + email required)
 *   2. Upsert contact in GHL with tags: lead-magnet, guide-<slug>,
 *      plus UTM attribution tags so Iris can group by channel
 *   3. Attach a note recording which guide and where it came from
 *   4. Mirror into Follow Up Boss via /api/sync/ghl-to-fub (Kim works in FUB)
 *   5. Alert Kim + Rachael
 *   5. Return the download URL so the browser can hand over the PDF immediately
 *
 * Downstream automation: a GHL workflow listens for the `guide-<slug>` tag and
 * emails the PDF plus a short follow-up sequence. The immediate download here
 * is the courtesy copy; the workflow email is what puts it in their inbox.
 *
 * The ARTICLE stays public and indexed. Only the designed PDF is gated.
 *
 * Env required: GHL_API_TOKEN, GHL_LOCATION_ID
 * Env optional: PELHAM_WEBHOOK_SECRET (shared secret for the FUB sync hop)
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

/** Guides that may be requested. Add new guides here as they ship. */
const GUIDES: Record<string, { title: string; file: string }> = {
  'living-in-everett': {
    title: 'Living in Everett, WA: A Home Buyer’s Guide',
    file: '/guides/living-in-everett/living-in-everett-guide.pdf',
  },
};

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

interface GuidePayload {
  guide: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  timeline?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export async function POST(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[guide-request] Missing GHL_API_TOKEN or GHL_LOCATION_ID');
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please text Kim at 425-250-9422.' },
      { status: 500 }
    );
  }

  let body: GuidePayload;
  try {
    body = (await req.json()) as GuidePayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const guideKey = (body.guide || '').trim();
  const guide = GUIDES[guideKey];
  if (!guide) {
    return NextResponse.json({ error: 'Unknown guide.' }, { status: 400 });
  }

  const firstName = (body.firstName || '').trim();
  const email = (body.email || '').trim();
  if (!firstName || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Please add your first name and a valid email.' },
      { status: 400 }
    );
  }

  const { lastName, phone, timeline, utmSource, utmMedium, utmCampaign, utmContent } = body;

  const tags = ['lead-magnet', `guide-${guideKey}`];
  if (timeline) tags.push(`timeline-${slug(timeline)}`);
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
    source: utmSource ? `guide-${guideKey}-${slug(utmSource)}` : `guide-${guideKey}`,
    tags,
  };

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
    console.error('[guide-request] Network error calling GHL:', (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't send the guide. Please text Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  if (!ghlRes.ok) {
    const errBody = await ghlRes.text().catch(() => '(no body)');
    console.error(`[guide-request] GHL ${ghlRes.status}:`, errBody.slice(0, 600));
    return NextResponse.json(
      { error: "We couldn't send the guide. Please text Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  let ghlContactId: string | undefined;
  try {
    const data = (await ghlRes.clone().json()) as { contact?: { id?: string } };
    ghlContactId = data.contact?.id;
  } catch {
    // non-fatal
  }

  if (ghlContactId) {
    const noteLines = [`Guide request: ${guide.title}`];
    if (timeline) noteLines.push(`Timeline: ${timeline}`);
    if (utmSource || utmMedium || utmCampaign || utmContent) {
      noteLines.push(
        `Source: ${[utmSource, utmMedium, utmCampaign, utmContent].filter(Boolean).join(' / ')}`
      );
    }
    try {
      await fetch(`${GHL_API_BASE}/contacts/${ghlContactId}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({ body: noteLines.join('\n') }),
      });
    } catch {
      // non-fatal
    }
  }

  // Mirror into Follow Up Boss. Kim works out of FUB, so a lead that only
  // exists in GHL is invisible to her. Best-effort: never block the download.
  if (ghlContactId) {
    const webhookSecret = process.env.PELHAM_WEBHOOK_SECRET?.trim();
    const proto = req.headers.get('x-forwarded-proto') ?? 'https';
    const host = req.headers.get('host') ?? 'thepelhamgroupnw.com';
    try {
      await fetch(`${proto}://${host}/api/sync/ghl-to-fub`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(webhookSecret ? { 'X-Pelham-Webhook-Secret': webhookSecret } : {}),
        },
        body: JSON.stringify({
          contact_id: ghlContactId,
          firstName,
          lastName: lastName ?? '',
          email,
          phone: phone ?? '',
          source: ghlPayload.source,
          tags,
        }),
      });
    } catch (err) {
      console.error('[guide-request] FUB sync failed (non-fatal):', (err as Error).message);
    }
  }

  // Alert Kim + Rachael. Best-effort: never block the download on this.
  try {
    await sendOpsAlert({
      apiToken: GHL_API_TOKEN,
      locationId: GHL_LOCATION_ID,
      summary: `Guide request: ${firstName} ${lastName ?? ''} (${email}${phone ? ', ' + phone : ''}) downloaded "${guide.title}"${timeline ? ` · timeline: ${timeline}` : ''}`,
    });
  } catch {
    // non-fatal
  }

  return NextResponse.json({ ok: true, downloadUrl: guide.file });
}
