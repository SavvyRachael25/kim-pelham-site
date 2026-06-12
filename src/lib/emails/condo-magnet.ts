/*
  Resend welcome emails for the condo-concierge gated funnel.
  ──────────────────────────────────────────────────────────────
  Two variants the visitor picks on the gate at /condo-concierge:

  1. playbook       — auto-delivers the Pre-Sale Renovation Playbook
                      PDF link (the 28-page concierge guide that lives
                      at /playbook.pdf).
  2. equity-report  — acknowledges the request and tells the lead Kim
                      will hand-build their report within 48 hours.
                      No PDF, since this is a real, Kim-built deliverable.

  Both emails:
    - Sit inside the same forest/clay/cream brand frame
    - Link back to the public case study so the lead can revisit
    - Sign off "Always, Kim" (Pelham brand rule)
    - Use no em dashes anywhere (Savvy global brand rule)

  Plain-HTML template using inline styles so it renders correctly in
  Gmail/Outlook/iOS Mail without a CSS pipeline. Brand tokens duplicated
  from globals.css.
*/

const FOREST = '#2F5233';
const CLAY = '#B8845C';
const CREAM = '#F8F5F0';
const CREAM_DARK = '#F0EDE7';
const TEXT = '#2C2C2C';
const MUTED = '#666';
const PLAYBOOK_URL = 'https://thepelhamgroupnw.com/playbook.pdf';
const CASE_STUDY_URL = 'https://thepelhamgroupnw.com/case-study/concierge-condo';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

type CondoMagnet = 'playbook' | 'equity-report';

function shellHtml(opts: {
  subject: string;
  greeting: string;
  bodyHtml: string;
}): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>${escapeHtml(opts.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${TEXT};line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${CREAM};padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:8px;max-width:600px;width:100%;border:1px solid #e8e3da;">
        <tr><td style="padding:32px 36px 8px;">
          <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:18px;color:${CLAY};">a quick note,</span>
        </td></tr>
        <tr><td style="padding:0 36px 22px;">
          <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:24px;color:${FOREST};line-height:1.2;">${escapeHtml(opts.subject)}</h1>
        </td></tr>

        <tr><td style="padding:0 36px 8px;">
          <p style="margin:0;font-size:15.5px;color:${TEXT};line-height:1.7;">${opts.greeting}</p>
        </td></tr>

        ${opts.bodyHtml}

        <tr><td style="padding:24px 36px 0;border-top:1px solid #e8e3da;">
          <p style="margin:0 0 4px;font-size:15px;color:${TEXT};">Always,</p>
          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:22px;color:${FOREST};">Kim</p>
        </td></tr>

        <tr><td style="padding:18px 36px 28px;">
          <p style="margin:0;font-size:12px;color:${MUTED};line-height:1.55;">
            Kim Pelham &middot; The Pelham Group NW<br>
            WA Broker #119262 &middot; NWMLS Broker #103153<br>
            Brokered by Katrina Eileen Real Estate<br>
            2815 Baker Ave Suite 103, Everett WA 98201
          </p>
          <p style="margin:14px 0 0;font-size:11px;color:${MUTED};line-height:1.55;">
            You received this email because you requested the concierge condo case study at thepelhamgroupnw.com.
            Reply STOP to opt out of texts. Unsubscribe from email: hello@thepelhamgroupnw.com
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function renderCondoMagnetEmail(opts: {
  firstName?: string;
  magnet: CondoMagnet;
}): { subject: string; html: string; text: string } {
  const name = (opts.firstName ?? '').trim();
  const greeting = name ? `Hi ${escapeHtml(name)},` : 'Hi there,';
  const greetingPlain = name ? `Hi ${name},` : 'Hi there,';

  if (opts.magnet === 'playbook') {
    const subject = 'Your Pre-Sale Renovation Playbook from Kim';

    const text = [
      greetingPlain,
      '',
      "Thank you for asking for the Playbook. Here it is.",
      '',
      `Download it here: ${PLAYBOOK_URL}`,
      '',
      "This is the same 28-page guide I walk every concierge client through before we start. The updates that pay you back, the money-pits to skip, the 3-week timeline, and real Snohomish County before-and-afters.",
      '',
      `If you want the full case study that goes with it (the one we sent you the postcard about), it lives here: ${CASE_STUDY_URL}`,
      '',
      "Read at your own pace. When you are ready to talk through your own home, reply to this email or text me at 425-250-9422. I keep my schedule tight on purpose, so the answer when you reach out is a real one.",
      '',
      'Always,',
      'Kim',
      '',
      'Kim Pelham · The Pelham Group NW',
      'WA Broker #119262 · NWMLS Broker #103153',
      'Brokered by Katrina Eileen Real Estate',
    ].join('\n');

    const bodyHtml = `
      <tr><td style="padding:0 36px 18px;">
        <p style="margin:0 0 16px;font-size:15.5px;color:${TEXT};line-height:1.7;">
          Thank you for asking for the Playbook. Here it is.
        </p>
      </td></tr>

      <tr><td style="padding:0 36px 22px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr><td align="center" style="background:${CREAM_DARK};border-radius:8px;padding:24px 20px;">
            <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:18px;color:${FOREST};">28 pages, free, no obligation.</p>
            <a href="${PLAYBOOK_URL}" style="display:inline-block;background:${CLAY};color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:6px;">
              Download the Playbook
            </a>
            <p style="margin:14px 0 0;font-size:12px;color:${MUTED};">Or copy/paste: ${PLAYBOOK_URL}</p>
          </td></tr>
        </table>
      </td></tr>

      <tr><td style="padding:0 36px 18px;">
        <p style="margin:0;font-size:15.5px;color:${TEXT};line-height:1.7;">
          This is the same guide I walk every concierge client through. The updates that pay you back, the money-pits to skip, the 3-week timeline, and real Snohomish County before-and-afters.
        </p>
      </td></tr>

      <tr><td style="padding:0 36px 22px;">
        <p style="margin:0;font-size:15.5px;color:${TEXT};line-height:1.7;">
          Want the full case study that goes with it (the one we sent you the postcard about)?
          <a href="${CASE_STUDY_URL}" style="color:${CLAY};font-weight:600;">Read it here.</a>
        </p>
      </td></tr>

      <tr><td style="padding:0 36px 24px;">
        <p style="margin:0;font-size:15.5px;color:${TEXT};line-height:1.7;">
          When you are ready to talk through your own home, reply to this email or text me at <a href="tel:+14252509422" style="color:${FOREST};font-weight:600;">425.250.9422</a>. I keep my schedule tight on purpose, so the answer when you reach out is a real one.
        </p>
      </td></tr>
    `;

    return { subject, html: shellHtml({ subject, greeting, bodyHtml }), text };
  }

  // ---------------- Equity Report variant ----------------
  const subject = 'Your Home Equity Report, coming from Kim';

  const text = [
    greetingPlain,
    '',
    "Thank you for asking for the Home Equity Report. I am going to hand-build yours and email it back to you within 48 hours.",
    '',
    "It is not a Zestimate. I pull recent closed comps inside a half mile of your home, adjust for square footage, lot, finish, and condition, and write you a tight value range with a short note on what would move the number if you decided to do any pre-sale prep.",
    '',
    "If you gave me your home address on the form, you are already in the queue. If not, no problem. Just reply to this email with the address (or just the street, if you would rather) and I will get started.",
    '',
    "While you wait, here is the full case study from the postcard, with all 60 before and after photos:",
    CASE_STUDY_URL,
    '',
    "And here is the Pre-Sale Renovation Playbook, the 28-page guide I walk every concierge client through before we start:",
    PLAYBOOK_URL,
    '',
    "Always,",
    "Kim",
    '',
    'Kim Pelham · The Pelham Group NW',
    'WA Broker #119262 · NWMLS Broker #103153',
    'Brokered by Katrina Eileen Real Estate',
  ].join('\n');

  const bodyHtml = `
    <tr><td style="padding:0 36px 18px;">
      <p style="margin:0 0 16px;font-size:15.5px;color:${TEXT};line-height:1.7;">
        Thank you for asking for the Home Equity Report. I am going to hand-build yours and email it back to you within 48 hours.
      </p>
      <p style="margin:0 0 16px;font-size:15.5px;color:${TEXT};line-height:1.7;">
        It is not a Zestimate. I pull recent closed comps inside a half mile of your home, adjust for square footage, lot, finish, and condition, and write you a tight value range with a short note on what would move the number if you decided to do any pre-sale prep.
      </p>
      <p style="margin:0;font-size:15.5px;color:${TEXT};line-height:1.7;">
        If you gave me your home address on the form, you are already in the queue. If not, no problem. Just reply to this email with the address (or just the street, if you would rather) and I will get started.
      </p>
    </td></tr>

    <tr><td style="padding:0 36px 18px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${CREAM_DARK};border-radius:8px;">
        <tr><td style="padding:20px 22px;">
          <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:17px;color:${FOREST};">while you wait,</p>
          <p style="margin:0 0 12px;font-size:14.5px;color:${TEXT};line-height:1.65;">
            The full case study from the postcard, all 60 before and after photos:
          </p>
          <p style="margin:0 0 18px;">
            <a href="${CASE_STUDY_URL}" style="color:${CLAY};font-weight:600;font-size:14.5px;">Read the case study &rarr;</a>
          </p>
          <p style="margin:0 0 12px;font-size:14.5px;color:${TEXT};line-height:1.65;">
            The Pre-Sale Renovation Playbook, the 28-page guide I use with every concierge client:
          </p>
          <p style="margin:0;">
            <a href="${PLAYBOOK_URL}" style="color:${CLAY};font-weight:600;font-size:14.5px;">Download the Playbook &rarr;</a>
          </p>
        </td></tr>
      </table>
    </td></tr>

    <tr><td style="padding:0 36px 24px;">
      <p style="margin:0;font-size:15.5px;color:${TEXT};line-height:1.7;">
        Questions in the meantime? Reply to this email or text me at <a href="tel:+14252509422" style="color:${FOREST};font-weight:600;">425.250.9422</a>.
      </p>
    </td></tr>
  `;

  return { subject, html: shellHtml({ subject, greeting, bodyHtml }), text };
}
