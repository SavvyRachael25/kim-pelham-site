import { NextRequest, NextResponse } from 'next/server';
import { sendOpsAlert } from '@/lib/ops-alerts';

/**
 * /api/admiralty-reminder
 *
 * Fires SMS reminders to every contact tagged `admiralty-rsvp`. Triggered
 * by Vercel Cron on two schedules (see vercel.json):
 *   - Friday May 29, 9:00 AM PT  → day-before reminder
 *   - Saturday May 30, 10:00 AM PT → day-of reminder
 *
 * Stage is passed via the `stage` query param (`day-before` | `day-of`).
 *
 * Vercel Cron requests are signed with the CRON_SECRET header. We require
 * the same secret on manual triggers so the endpoint isn't open to anyone.
 *
 * Env required:
 *   GHL_API_TOKEN, GHL_LOCATION_ID
 *   CRON_SECRET (any random string; set the same value in Vercel project env)
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

const MESSAGES: Record<string, { body: (firstName: string) => string; media: string }> = {
  'day-before': {
    body: (n) =>
      `Hi ${n}, tomorrow's the day. Open house 1 to 3 PM at 11706 Admiralty Way Unit B in Everett. Reply Y if you're still planning to come, N if plans changed, R if you'd rather schedule a private tour. Kim`,
    media: 'https://thepelhamgroupnw.com/social/admiralty/02-open-house.jpg',
  },
  'day-of': {
    body: (n) =>
      `Good morning ${n}. Open house today, 1 to 3 PM, 11706 Admiralty Way Unit B in Everett. Text me when you're 10 minutes out so I can flag you parking. Kim`,
    media: 'https://thepelhamgroupnw.com/social/admiralty/02-open-house.jpg',
  },
};

export async function GET(req: NextRequest) {
  return handle(req);
}
export async function POST(req: NextRequest) {
  return handle(req);
}

async function handle(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  const CRON_SECRET = process.env.CRON_SECRET;

  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    return NextResponse.json({ error: 'Missing GHL env' }, { status: 500 });
  }

  // Vercel Cron sets `Authorization: Bearer <CRON_SECRET>`. Accept that
  // OR a `?secret=` query param OR `x-cron-secret` header so it's
  // straightforward to test manually too.
  const auth = req.headers.get('authorization') ?? '';
  const headerSecret = req.headers.get('x-cron-secret') ?? '';
  const urlSecret = req.nextUrl.searchParams.get('secret') ?? '';
  if (!CRON_SECRET) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 });
  }
  const presented = auth.replace(/^Bearer\s+/i, '') || headerSecret || urlSecret;
  if (presented !== CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const stage = req.nextUrl.searchParams.get('stage') ?? 'day-of';
  const cfg = MESSAGES[stage];
  if (!cfg) {
    return NextResponse.json({ error: `Unknown stage: ${stage}` }, { status: 400 });
  }

  // Page through GHL contacts tagged admiralty-rsvp (use search endpoint)
  // GHL v2 contact search: POST /contacts/search with filter on tags.
  const contacts: { id: string; firstName?: string; phone?: string; tags?: string[] }[] = [];
  let page = 1;
  const PAGE_SIZE = 100;
  // Cap at 10 pages (~1000 contacts) for safety
  while (page <= 10) {
    let res: Response;
    try {
      res = await fetch(`${GHL_API_BASE}/contacts/search`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          page,
          pageLimit: PAGE_SIZE,
          filters: [
            {
              field: 'tags',
              operator: 'contains',
              value: 'admiralty-rsvp',
            },
          ],
        }),
      });
    } catch (err) {
      console.error('[admiralty-reminder] GHL search threw:', (err as Error).message);
      break;
    }
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      console.error(`[admiralty-reminder] search ${res.status}:`, t.slice(0, 300));
      break;
    }
    const data = (await res.json().catch(() => ({}))) as {
      contacts?: { id: string; firstName?: string; phone?: string; tags?: string[] }[];
      total?: number;
    };
    const batch = data.contacts ?? [];
    contacts.push(...batch);
    if (batch.length < PAGE_SIZE) break;
    page += 1;
  }

  let sent = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const c of contacts) {
    // Skip if already reminded for this stage (idempotent — tag carries it)
    const reminderTag = `reminder-${stage}-sent`;
    if (c.tags?.includes(reminderTag)) {
      skipped += 1;
      continue;
    }
    if (!c.phone) {
      skipped += 1;
      continue;
    }
    const firstName = c.firstName?.trim() ? c.firstName : 'there';
    const message = cfg.body(firstName);

    try {
      let smsRes = await fetch(`${GHL_API_BASE}/conversations/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          type: 'SMS',
          contactId: c.id,
          message,
          attachments: [cfg.media],
        }),
      });
      if (!smsRes.ok) {
        // Retry as plain SMS in case MMS was rejected
        const mmsErr = await smsRes.text().catch(() => '');
        smsRes = await fetch(`${GHL_API_BASE}/conversations/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_API_TOKEN}`,
            'Content-Type': 'application/json',
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({ type: 'SMS', contactId: c.id, message }),
        });
        if (!smsRes.ok) {
          const t = await smsRes.text().catch(() => '');
          errors.push(`${c.id} MMS:${mmsErr.slice(0, 60)} SMS:${smsRes.status}:${t.slice(0, 60)}`);
          continue;
        }
      }
      sent += 1;
      // Tag as sent so the cron is safe to re-fire
      await fetch(`${GHL_API_BASE}/contacts/${c.id}/tags`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({ tags: [reminderTag] }),
      }).catch(() => {});
    } catch (err) {
      errors.push(`${c.id} threw: ${(err as Error).message}`);
    }
  }

  // Operational ping to Kim + Rachael so they know the cron ran
  try {
    const stageLabel = stage === 'day-before' ? 'Friday reminder' : 'Saturday day-of';
    const summary = `Admiralty ${stageLabel} sent: ${sent}/${contacts.length} contacts (skipped ${skipped}${errors.length ? `, ${errors.length} errors` : ''})`;
    await sendOpsAlert({ apiToken: GHL_API_TOKEN, locationId: GHL_LOCATION_ID, summary });
  } catch {
    /* non-fatal */
  }

  return NextResponse.json({
    stage,
    found: contacts.length,
    sent,
    skipped,
    errors: errors.slice(0, 20),
  });
}
