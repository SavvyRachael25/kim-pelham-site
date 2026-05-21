/*
  Resend welcome email for the listings-first-look popup.
  ───────────────────────────────────────────────────────
  Plain-HTML template using inline styles so it renders correctly in
  Gmail/Outlook/iOS Mail without a CSS pipeline. Brand tokens are
  duplicated from globals.css (forest/clay/cream + Cormorant + Inter +
  Caveat) because email clients won't load Google Fonts on iOS.

  Sender: hello@thepelhamgroupnw.com (requires the domain to be verified
  in Resend before send goes through).
*/

const FOREST = '#2F5233';
const CLAY = '#B8845C';
const CREAM = '#F8F5F0';
const CREAM_DARK = '#F0EDE7';
const TEXT = '#2C2C2C';
const MUTED = '#666';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderListingsWelcomeEmail(opts: { firstName?: string }): {
  subject: string;
  html: string;
  text: string;
} {
  const name = (opts.firstName ?? '').trim();
  const greeting = name ? `Hi ${escapeHtml(name)},` : 'Hi there,';

  const subject = "You're on my first-look list";

  const text = [
    greeting,
    '',
    "Quick note to confirm: you're on my first-look list for Snohomish County listings.",
    '',
    "When a new home is about to hit the market, I'll text you the morning it goes live, before it shows up on Zillow or Redfin. Two or three texts a month, no spam, reply STOP any time.",
    '',
    "If you want to chat about your timeline or a specific neighborhood, just reply to this email or text me at 425-250-9422. I work with a maximum of two active clients at a time, so I actually have room to talk.",
    '',
    'Always,',
    'Kim',
    '',
    'Kim Pelham · The Pelham Group NW',
    'WA Broker #119262 · NWMLS Broker #103153',
    'Brokered by Katrina Eileen Real Estate',
    '2815 Baker Ave Suite 103, Everett WA 98201',
    '',
    'You received this email because you signed up at thepelhamgroupnw.com.',
    'Reply STOP to opt out of texts. Unsubscribe from email: hello@thepelhamgroupnw.com',
  ].join('\n');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM_DARK};font-family:Inter,Helvetica,Arial,sans-serif;color:${TEXT};">
  <span style="display:none;visibility:hidden;mso-hide:all;font-size:1px;color:${CREAM_DARK};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    On the first-look list. Texts the morning a new listing goes live, before Zillow or Redfin.
  </span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${CREAM_DARK};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:${CREAM};border-radius:6px;box-shadow:0 6px 24px rgba(0,0,0,0.06);overflow:hidden;">
        <!-- Gradient accent bar -->
        <tr><td style="height:6px;background:linear-gradient(90deg,${FOREST} 0%,${CLAY} 100%);font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- Header -->
        <tr><td style="padding:32px 40px 8px 40px;">
          <p style="margin:0 0 4px 0;font-family:'Caveat',cursive;font-size:18px;color:${CLAY};letter-spacing:0.01em;">a note from Kim</p>
          <h1 style="margin:0;font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:30px;line-height:1.18;color:${FOREST};">
            You&rsquo;re on the first-look list.
          </h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:18px 40px 8px 40px;font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:${TEXT};">
          <p style="margin:0 0 14px 0;">${greeting}</p>
          <p style="margin:0 0 14px 0;">Quick note to confirm: you&rsquo;re on my first-look list for Snohomish County.</p>
          <p style="margin:0 0 14px 0;">
            When a new home is about to hit the market, I&rsquo;ll text you the morning it goes live, before it shows up on Zillow or Redfin. Two or three texts a month, no spam, reply STOP any time.
          </p>
          <p style="margin:0 0 14px 0;">
            If you want to chat about your timeline or a specific neighborhood, just reply to this email or text me at <a href="sms:+14252509422" style="color:${FOREST};text-decoration:underline;">425.250.9422</a>. I work with a maximum of two active clients at a time, so I actually have room to talk.
          </p>
        </td></tr>

        <!-- Signature -->
        <tr><td style="padding:6px 40px 8px 40px;">
          <p style="margin:0;font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;color:${TEXT};">Always,</p>
          <p style="margin:0;font-family:'Caveat',cursive;font-size:34px;line-height:1;color:${CLAY};">Kim</p>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:18px 40px 0 40px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="border-top:1px solid #E8E3DA;font-size:0;line-height:0;">&nbsp;</td></tr>
          </table>
        </td></tr>

        <!-- Compliance footer -->
        <tr><td style="padding:18px 40px 32px 40px;font-family:Inter,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">
          <p style="margin:0 0 6px 0;font-weight:600;color:${TEXT};">Kim Pelham &middot; The Pelham Group NW</p>
          <p style="margin:0 0 6px 0;">Equal Housing Opportunity. Brokered by Katrina Eileen Real Estate.</p>
          <p style="margin:0 0 6px 0;">WA Broker #119262 &middot; NWMLS Broker #103153</p>
          <p style="margin:0 0 12px 0;">2815 Baker Ave Suite 103, Everett WA 98201</p>
          <p style="margin:0;color:#9a948a;font-size:11px;">
            You received this email because you signed up at <a href="https://thepelhamgroupnw.com" style="color:#9a948a;text-decoration:underline;">thepelhamgroupnw.com</a>. Reply STOP to opt out of texts.
            To unsubscribe from email, reply UNSUBSCRIBE or email <a href="mailto:hello@thepelhamgroupnw.com" style="color:#9a948a;text-decoration:underline;">hello@thepelhamgroupnw.com</a>.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
}
