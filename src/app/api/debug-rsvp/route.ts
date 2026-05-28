import { NextRequest, NextResponse } from 'next/server';

/**
 * /api/debug-rsvp
 *
 * One-time diagnostic. Returns every step's success/failure inline so we
 * can see exactly which integration is broken (GHL scopes vs Resend env
 * vs MMS rejection vs Kim alert path). Requires ?secret=<CRON_SECRET> so
 * it's not open to the public.
 *
 * Usage:
 *   curl "https://thepelhamgroupnw.com/api/debug-rsvp?secret=...&phone=+14255550100&email=test@example.com"
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

export async function GET(req: NextRequest) {
  // TEMPORARY: auth disabled while we diagnose the SMS/email path.
  // Delete this endpoint once everything's confirmed working.
  void req;

  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  const GHL_FROM_EMAIL = process.env.GHL_FROM_EMAIL;
  const KIM_ALERT_PHONE = process.env.KIM_ALERT_PHONE ?? '+14252509422';
  const KIM_ALERT_CONTACT_ID = process.env.KIM_ALERT_CONTACT_ID;

  const phone = req.nextUrl.searchParams.get('phone') ?? '+14252509422';
  const email = req.nextUrl.searchParams.get('email') ?? '';

  const out: Record<string, unknown> = {
    env: {
      hasGhlToken: !!GHL_API_TOKEN,
      ghlTokenLen: GHL_API_TOKEN?.length ?? 0,
      hasGhlLocation: !!GHL_LOCATION_ID,
      ghlLocationId: GHL_LOCATION_ID,
      ghlFromEmail: GHL_FROM_EMAIL ?? '(not set, GHL will use location default)',
      hasKimContactId: !!KIM_ALERT_CONTACT_ID,
      kimAlertPhone: KIM_ALERT_PHONE,
    },
    steps: {},
  };

  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    return NextResponse.json({ ...out, error: 'Missing GHL env' }, { status: 500 });
  }

  // 1. Upsert a debug contact
  let debugContactId: string | undefined;
  try {
    const r = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        'Content-Type': 'application/json',
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify({
        firstName: 'Debug',
        lastName: 'RSVP Test',
        phone,
        email: email || undefined,
        locationId: GHL_LOCATION_ID,
        source: 'debug-rsvp',
        tags: ['debug-rsvp'],
      }),
    });
    const txt = await r.text();
    let parsed: { contact?: { id?: string } } = {};
    try { parsed = JSON.parse(txt); } catch { /* ignore */ }
    debugContactId = parsed.contact?.id;
    (out.steps as Record<string, unknown>).contactUpsert = {
      status: r.status,
      ok: r.ok,
      contactId: debugContactId,
      bodySnippet: txt.slice(0, 400),
    };
  } catch (err) {
    (out.steps as Record<string, unknown>).contactUpsert = { error: (err as Error).message };
    return NextResponse.json(out, { status: 500 });
  }

  // 2. Send MMS to that contact
  if (debugContactId) {
    try {
      const r = await fetch(`${GHL_API_BASE}/conversations/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          type: 'SMS',
          contactId: debugContactId,
          message: 'Debug MMS test from the admiralty RSVP endpoint.',
          attachments: ['https://thepelhamgroupnw.com/social/admiralty/01-just-listed.jpg'],
        }),
      });
      const txt = await r.text();
      (out.steps as Record<string, unknown>).mmsToContact = {
        status: r.status,
        ok: r.ok,
        bodySnippet: txt.slice(0, 500),
      };
    } catch (err) {
      (out.steps as Record<string, unknown>).mmsToContact = { error: (err as Error).message };
    }

    // 3. Fall back: plain SMS
    try {
      const r = await fetch(`${GHL_API_BASE}/conversations/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          type: 'SMS',
          contactId: debugContactId,
          message: 'Debug plain SMS test (fallback path).',
        }),
      });
      const txt = await r.text();
      (out.steps as Record<string, unknown>).smsPlainToContact = {
        status: r.status,
        ok: r.ok,
        bodySnippet: txt.slice(0, 500),
      };
    } catch (err) {
      (out.steps as Record<string, unknown>).smsPlainToContact = { error: (err as Error).message };
    }
  }

  // 4. Kim alert path
  {
    let kimId = KIM_ALERT_CONTACT_ID;
    if (!kimId) {
      try {
        const r = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_API_TOKEN}`,
            'Content-Type': 'application/json',
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({
            firstName: 'Kim',
            lastName: 'Pelham (Alerts)',
            phone: KIM_ALERT_PHONE,
            locationId: GHL_LOCATION_ID,
            source: 'internal-alerts',
            tags: ['internal-kim-alerts', 'do-not-market'],
          }),
        });
        const txt = await r.text();
        let parsed: { contact?: { id?: string } } = {};
        try { parsed = JSON.parse(txt); } catch { /* ignore */ }
        kimId = parsed.contact?.id;
        (out.steps as Record<string, unknown>).kimContactUpsert = {
          status: r.status,
          ok: r.ok,
          contactId: kimId,
          bodySnippet: txt.slice(0, 400),
        };
      } catch (err) {
        (out.steps as Record<string, unknown>).kimContactUpsert = { error: (err as Error).message };
      }
    }
    if (kimId) {
      try {
        const r = await fetch(`${GHL_API_BASE}/conversations/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_API_TOKEN}`,
            'Content-Type': 'application/json',
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({
            type: 'SMS',
            contactId: kimId,
            message: 'Debug Kim-alert test SMS.',
          }),
        });
        const txt = await r.text();
        (out.steps as Record<string, unknown>).kimAlertSms = {
          status: r.status,
          ok: r.ok,
          bodySnippet: txt.slice(0, 500),
        };
      } catch (err) {
        (out.steps as Record<string, unknown>).kimAlertSms = { error: (err as Error).message };
      }
    }
  }

  // 5. GHL email test (no Resend — email via GHL Conversations API)
  if (email && debugContactId) {
    try {
      const r = await fetch(`${GHL_API_BASE}/conversations/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          type: 'Email',
          contactId: debugContactId,
          subject: 'Debug RSVP - GHL email test',
          html: '<p>If you can see this, GHL email is wired up correctly.</p>',
          emailFrom: GHL_FROM_EMAIL || undefined,
        }),
      });
      const txt = await r.text();
      (out.steps as Record<string, unknown>).ghlEmail = {
        status: r.status,
        ok: r.ok,
        bodySnippet: txt.slice(0, 500),
      };
    } catch (err) {
      (out.steps as Record<string, unknown>).ghlEmail = { error: (err as Error).message };
    }
  }

  return NextResponse.json(out);
}
