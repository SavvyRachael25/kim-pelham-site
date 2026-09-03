/*
  Resend welcome email for the pre-listing playbook lead magnet.
  ──────────────────────────────────────────────────────────────
  Delivers the PDF via a download link (Resend's attachment limit is
  4 MB and the PDF is ~11 MB, so a link is the only reliable path).

  Plain-HTML template using inline styles so it renders correctly in
  Gmail/Outlook/iOS Mail without a CSS pipeline. Brand tokens are
  duplicated from globals.css (forest/clay/cream + Cormorant + Inter +
  Caveat).

  The exported function name and signature are kept as
  `renderListingsWelcomeEmail` so /api/contact does not need to change
  its import. The popup pivoted from buyer first-look to seller
  pre-listing playbook on 2026-05-21; this template was rewritten in
  the same pass.

  Sender: hello@thepelhamgroupnw.com (requires the domain to be verified
  in Resend before send goes through).
*/

const FOREST = '#2F5233';
const CLAY = '#B8845C';
const CREAM = '#F8F5F0';
const CREAM_DARK = '#F0EDE7';
const TEXT = '#2C2C2C';
const MUTED = '#666';
const PDF_PATH = '/lead-magnets/PrelistingGuide_PelhamGroup_2026.pdf';
const PDF_URL = `https://thepelhamgroupnw.com${PDF_PATH}`;

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

  const subject = 'Your pre-listing playbook from Kim';

  const text = [
    greeting,
    '',
    "As promised, here's the pre-listing playbook. It's the guide I walk every seller through before we go live on MLS.",
    '',
    `Download it here: ${PDF_URL}`,
    '',
    "Inside: pricing strategy, the eight-week timeline, staging room by room, repairs prioritized by ROI, what to expect on the journey, and the negotiation prep I do before every offer comes in.",
    '',
    "Read at your own pace. When you're ready to talk through your timeline or just bounce ideas around, reply to this email or text me at 425-250-9422. I work with a maximum of two active buyers at a time, so I actually have room to talk.",
    '',
    'Always,',
    'Kim',
    '',
    'Kim Pelham · The Pelham Group NW',
    'WA Broker #119262 · NWMLS Broker #103153',
    'Brokered by Katrina Eileen Real Estate',
    '3201 Smith Ave Ste 406, Everett WA 98201',
    '',
    'You received this email because you requested the pre-listing playbook at thepelhamgroupnw.com.',
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
    Your pre-listing playbook is here. Pricing, staging, repairs, timeline.
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
            Your pre-listing playbook is here.
          </h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:18px 40px 8px 40px;font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:${TEXT};">
          <p style="margin:0 0 14px 0;">${greeting}</p>
          <p style="margin:0 0 14px 0;">
            As promised, here&rsquo;s the pre-listing playbook. It&rsquo;s the guide I walk every seller through before we go live on MLS.
          </p>
        </td></tr>

        <!-- Big CTA -->
        <tr><td align="center" style="padding:6px 40px 20px 40px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr><td bgcolor="${FOREST}" style="border-radius:4px;">
              <a href="${PDF_URL}" target="_blank" rel="noopener" style="display:inline-block;padding:14px 28px;font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;font-weight:600;color:${CREAM};text-decoration:none;letter-spacing:0.01em;">
                Download the playbook (PDF) &rarr;
              </a>
            </td></tr>
          </table>
          <p style="margin:8px 0 0 0;font-family:Inter,Helvetica,Arial,sans-serif;font-size:12px;color:${MUTED};">PDF &middot; opens in a new tab</p>
        </td></tr>

        <!-- What's inside -->
        <tr><td style="padding:0 40px 8px 40px;font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:${TEXT};">
          <p style="margin:0 0 8px 0;font-weight:600;color:${FOREST};">What&rsquo;s inside:</p>
          <ul style="margin:0 0 14px 22px;padding:0;color:${TEXT};">
            <li>Pricing strategy that hits 102.3% sale-to-list</li>
            <li>The eight-week timeline I walk every seller through</li>
            <li>Staging room by room</li>
            <li>Repairs prioritized by ROI, what to skip</li>
            <li>What to expect on the journey, week by week</li>
            <li>Negotiation prep I do before every offer comes in</li>
          </ul>
          <p style="margin:0 0 14px 0;">
            Read at your own pace. When you&rsquo;re ready to talk through your timeline or just bounce ideas around, reply to this email or text me at <a href="sms:+14252509422" style="color:${FOREST};text-decoration:underline;">425.250.9422</a>. I work with a maximum of two active buyers at a time, so I actually have room to talk.
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
          <p style="margin:0 0 12px 0;">3201 Smith Ave Ste 406, Everett WA 98201</p>
          <p style="margin:0;color:#9a948a;font-size:11px;">
            You received this email because you requested the pre-listing playbook at <a href="https://thepelhamgroupnw.com" style="color:#9a948a;text-decoration:underline;">thepelhamgroupnw.com</a>. Reply STOP to opt out of texts.
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
