import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/admiralty-rsvp
 *
 * Open-house RSVP capture for 11706 Admiralty Way Unit B, Everett (MLS #2528831).
 *
 * Flow:
 *   1. Validate payload (firstName + email or phone required)
 *   2. Upsert contact in GHL with tags: admiralty-rsvp, open-house-may-30,
 *      source-<utmSource> (or 'website-rsvp' fallback)
 *   3. Attach a GHL note carrying "Who's coming" + free-text notes
 *   4. Self-trigger FUB sync (mirrors contact + tags)
 *   5. Send branded RSVP confirmation email via Resend (best-effort)
 *
 * Downstream automation: a GHL workflow listens for the `admiralty-rsvp` tag
 * and runs the SMS sequence (immediate confirm, Friday reminder, Saturday
 * morning reminder, Sunday recap). See ghl-open-house-funnel.md for specs.
 *
 * Env required:
 *   GHL_API_TOKEN, GHL_LOCATION_ID
 *   RESEND_API_KEY (optional — email no-ops without it)
 *   PELHAM_WEBHOOK_SECRET (optional — used for FUB sync)
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';
const LISTING_URL =
  'https://thepelhamgroupnw.com/properties/11706-admiralty-way-unit-b-everett';
const MAP_URL =
  'https://www.google.com/maps/dir/?api=1&destination=11706+Admiralty+Way+B+Everett+WA+98204';

// Kim's personal mobile gets a hot-lead alert on every RSVP. Same pattern as
// the Devon hot-lead SMS. Requires either KIM_ALERT_CONTACT_ID (preferred,
// avoids polluting the lead pipeline with Kim's own number) or
// KIM_ALERT_PHONE (fallback: upserts an internal "Kim Pelham Alerts" contact).
async function notifyKim(opts: {
  apiToken: string;
  locationId: string;
  summary: string;
}): Promise<void> {
  const { apiToken, locationId, summary } = opts;
  let contactId = process.env.KIM_ALERT_CONTACT_ID?.trim();
  const kimPhone = process.env.KIM_ALERT_PHONE?.trim() ?? '+14252509422';

  // Fallback: upsert an internal alert contact for Kim
  if (!contactId) {
    try {
      const upRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          firstName: 'Kim',
          lastName: 'Pelham (Alerts)',
          phone: kimPhone,
          locationId,
          source: 'internal-alerts',
          tags: ['internal-kim-alerts', 'do-not-market'],
        }),
      });
      if (upRes.ok) {
        const data = (await upRes.json()) as { contact?: { id?: string } };
        contactId = data.contact?.id;
      } else {
        console.error('[admiralty-rsvp] Kim alert upsert failed:', upRes.status);
      }
    } catch (err) {
      console.error('[admiralty-rsvp] Kim alert upsert threw:', (err as Error).message);
    }
  }

  if (!contactId) {
    console.error('[admiralty-rsvp] Kim alert: no contactId, skipping');
    return;
  }

  try {
    const res = await fetch(`${GHL_API_BASE}/conversations/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify({
        type: 'SMS',
        contactId,
        message: summary,
      }),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      console.error(`[admiralty-rsvp] Kim alert SMS ${res.status}:`, t.slice(0, 300));
    }
  } catch (err) {
    console.error('[admiralty-rsvp] Kim alert SMS threw:', (err as Error).message);
  }
}

interface RsvpPayload {
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  bringing?: string;
  notes?: string;
  smsConsent: boolean;
  consentText: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export async function POST(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[admiralty-rsvp] Missing GHL_API_TOKEN or GHL_LOCATION_ID');
    return NextResponse.json(
      { error: 'Server configuration error. Please text Kim at 425-250-9422.' },
      { status: 500 }
    );
  }

  let body: RsvpPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { firstName, lastName, email, phone, bringing, notes, smsConsent, consentText, utmSource, utmMedium, utmCampaign, utmContent } = body;

  if (!firstName || (!email && !phone)) {
    return NextResponse.json(
      { error: 'First name and either email or phone are required.' },
      { status: 400 }
    );
  }

  // Build tag set
  const sourceSlug = (utmSource && utmSource.trim())
    ? utmSource.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-')
    : 'website-rsvp';
  const tags = [
    'admiralty-rsvp',
    'open-house-may-30',
    `source-${sourceSlug}`,
    'mls-2528831',
  ];
  if (smsConsent) tags.push('consent-transactional');
  if (bringing) tags.push(`bringing-${bringing.toLowerCase().replace(/\s+/g, '-')}`);

  // Source field — combined for GHL's source attribute
  const ghlSource = `admiralty-open-house-${sourceSlug}`;

  const ghlPayload: Record<string, unknown> = {
    firstName,
    lastName: lastName ?? '',
    email: email ?? '',
    phone: phone ?? '',
    locationId: GHL_LOCATION_ID,
    source: ghlSource,
    tags,
  };

  // 1) Upsert contact
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
    console.error('[admiralty-rsvp] Network error calling GHL:', (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't save your RSVP. Please text Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  if (!ghlRes.ok) {
    const errBody = await ghlRes.text().catch(() => '(no body)');
    console.error(`[admiralty-rsvp] GHL ${ghlRes.status}:`, errBody.slice(0, 600));
    return NextResponse.json(
      { error: "We couldn't save your RSVP. Please text Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  // 2) Extract contact id, attach note with bringing + free-text + UTM context
  let ghlContactId: string | undefined;
  try {
    const data = (await ghlRes.clone().json()) as { contact?: { id?: string } };
    ghlContactId = data.contact?.id;
  } catch {
    // non-fatal
  }

  if (ghlContactId) {
    const noteLines: string[] = ['Open house RSVP · 11706 Admiralty Way Unit B · May 30, 1-3 PM'];
    if (bringing) noteLines.push(`Bringing: ${bringing}`);
    if (notes) noteLines.push(`Notes: ${notes}`);
    if (utmSource || utmMedium || utmCampaign || utmContent) {
      noteLines.push(
        `Source: ${[utmSource, utmMedium, utmCampaign, utmContent].filter(Boolean).join(' / ')}`
      );
    }
    if (smsConsent) noteLines.push(`SMS consent: yes · "${consentText.slice(0, 200)}"`);

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
    } catch (err) {
      console.error('[admiralty-rsvp] Note attach failed (non-fatal):', (err as Error).message);
    }

    // Immediate MMS confirmation via GHL Conversations API.
    // Outbound from the Pelham GHL number (425-472-3623). Includes the branded
    // Just-Listed card so the recipient gets price/specs/MLS visually instead
    // of just a wall of text. Falls back to SMS if attachments are rejected.
    if (smsConsent && phone) {
      const greeting = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      const smsBody = `Hi ${greeting}, this is Kim Pelham. Got your RSVP for Saturday 1 to 3 PM at 11706 Admiralty Way Unit B in Everett. Anything you want me to have ready for you? Reply here, this comes straight to me. Kim`;
      const mediaUrl = 'https://thepelhamgroupnw.com/social/admiralty/01-just-listed.jpg';
      try {
        const smsRes = await fetch(`${GHL_API_BASE}/conversations/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_API_TOKEN}`,
            'Content-Type': 'application/json',
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({
            type: 'SMS',
            contactId: ghlContactId,
            message: smsBody,
            attachments: [mediaUrl],
          }),
        });
        if (!smsRes.ok) {
          const t = await smsRes.text().catch(() => '');
          console.error(`[admiralty-rsvp] MMS send ${smsRes.status}:`, t.slice(0, 300));
          // Retry as plain SMS in case the attachment was the blocker
          try {
            await fetch(`${GHL_API_BASE}/conversations/messages`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${GHL_API_TOKEN}`,
                'Content-Type': 'application/json',
                Version: GHL_API_VERSION,
              },
              body: JSON.stringify({
                type: 'SMS',
                contactId: ghlContactId,
                message: smsBody,
              }),
            });
          } catch {
            /* swallow — already logged */
          }
        }
      } catch (err) {
        console.error('[admiralty-rsvp] SMS send threw (non-fatal):', (err as Error).message);
      }
    }

    // 3) Self-trigger FUB sync (mirrors to FUB)
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
          email: email ?? '',
          phone: phone ?? '',
          source: ghlSource,
          tags,
        }),
      });
    } catch (err) {
      console.error('[admiralty-rsvp] FUB sync failed (non-fatal):', (err as Error).message);
    }
  }

  // 4) Hot-lead alert to Kim's personal mobile (425-250-9422)
  // Fire-and-forget — never block the form response on this
  {
    const parts = [
      `NEW Admiralty RSVP: ${firstName}${lastName ? ' ' + lastName : ''}`,
      phone ? `Phone ${phone}` : null,
      email ? `Email ${email}` : null,
      bringing ? `Bringing ${bringing}` : null,
      notes ? `Note: ${notes.slice(0, 80)}` : null,
      utmSource ? `via ${utmSource}` : null,
    ].filter(Boolean);
    notifyKim({
      apiToken: GHL_API_TOKEN,
      locationId: GHL_LOCATION_ID,
      summary: parts.join(' · '),
    }).catch(() => {});
  }

  // 5) RSVP confirmation email via GHL Conversations API (no Resend dep)
  if (email && ghlContactId) {
    const greeting = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const html = renderRsvpEmail({ firstName: greeting });
    try {
      const emailRes = await fetch(`${GHL_API_BASE}/conversations/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          type: 'Email',
          contactId: ghlContactId,
          subject: "You're on the list for Saturday's open house",
          html,
          emailFrom: process.env.GHL_FROM_EMAIL?.trim() || undefined,
        }),
      });
      if (!emailRes.ok) {
        const t = await emailRes.text().catch(() => '');
        console.error(`[admiralty-rsvp] GHL email ${emailRes.status}:`, t.slice(0, 300));
      }
    } catch (err) {
      console.error('[admiralty-rsvp] GHL email threw:', (err as Error).message);
    }
  }

  return NextResponse.json({ ok: true });
}

// Branded confirmation email body
function renderRsvpEmail({ firstName }: { firstName: string }): string {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>You're on the list</title></head>
<body style="margin:0;padding:0;background:#F8F5F0;font-family:Arial,Helvetica,sans-serif;color:#2C2C2C;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F5F0;">
  <tr><td align="center" style="padding:24px 16px;">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border:1px solid #E8E3DA;border-radius:6px;overflow:hidden;">
      <tr><td>
        <img src="https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/hero-living-fireplace.jpg" alt="11706 Admiralty Way Unit B, Everett WA" width="560" style="width:100%;display:block;">
      </td></tr>
      <tr><td style="background:#2F5233;padding:28px 24px;text-align:center;">
        <p style="margin:0;font-family:Georgia,'Cormorant Garamond',serif;font-style:italic;font-size:18px;color:#B8845C;">walk it with me</p>
        <h1 style="margin:6px 0 0 0;font-family:Georgia,'Cormorant Garamond',serif;font-size:34px;color:#F8F5F0;">Saturday, May 30</h1>
        <p style="margin:6px 0 0 0;font-size:15px;color:#F8F5F0;">1:00 PM to 3:00 PM</p>
      </td></tr>
      <tr><td style="padding:32px 28px;">
        <p style="margin:0 0 14px 0;font-size:16px;">Hi ${firstName},</p>
        <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;">You're on the list for the open house at <strong>11706 Admiralty Way Unit B in Everett</strong>. Walk through, ask questions, no pitch.</p>
        <p style="margin:0 0 22px 0;font-size:15px;line-height:1.7;">If your plans change, just reply to this email or text me at 425-250-9422.</p>
        <p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#B8845C;letter-spacing:1px;text-transform:uppercase;">What to expect on site</p>
        <ul style="margin:0 0 22px 0;padding-left:18px;font-size:14px;line-height:1.7;">
          <li>Disclosures, inspection summary, and HOA docs printed in the kitchen</li>
          <li>Ground-floor entry, all one level, parking right by the front door</li>
          <li>Me, ready to answer the unsexy questions about the building, the HOA, and the comps</li>
          <li>Bring whoever has a vote in your decision</li>
        </ul>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="padding:0 6px 0 0;"><a href="${MAP_URL}" style="display:inline-block;padding:12px 22px;background:#2F5233;color:#F8F5F0;text-decoration:none;font-size:14px;font-weight:600;border-radius:4px;">Get Directions</a></td>
            <td style="padding:0 0 0 6px;"><a href="${LISTING_URL}" style="display:inline-block;padding:12px 22px;background:#B8845C;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:600;border-radius:4px;">See the Listing</a></td>
          </tr>
        </table>
        <p style="margin:32px 0 6px 0;font-size:14px;">Always,</p>
        <p style="margin:0;font-family:Georgia,'Cormorant Garamond',serif;font-style:italic;font-size:22px;color:#2F5233;">Kim</p>
        <p style="margin:0;font-size:12px;color:#777;">Kim Pelham · The Pelham Group NW · 425-250-9422</p>
      </td></tr>
      <tr><td style="padding:18px 24px;background:#F8F5F0;border-top:1px solid #E8E3DA;text-align:center;">
        <p style="margin:0;font-size:11px;color:#777;line-height:1.5;">Brokered by Katrina Eileen Real Estate · WA Broker #119262 · NWMLS #2528831 · Equal Housing Opportunity</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

