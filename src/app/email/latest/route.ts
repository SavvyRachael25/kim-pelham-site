import { NextResponse } from 'next/server';

/**
 * GET /email/latest
 *
 * Always redirects to the current week's Pelham Post.
 *
 * Why this exists: Kim's "Pelham Post review" calendar block is a weekly
 * recurring event, and a recurring event carries ONE description. A hardcoded
 * issue URL in it is correct for exactly one week and wrong every week after.
 * (It was pointing at the October 6 issue on every instance, including the
 * ones in November.) The event now links here instead, so the link is right
 * forever without anyone editing the calendar.
 *
 * The Post goes out Tuesday. Kim reviews Monday. So:
 *   Tuesday           -> today's issue (she may click it the morning it sends)
 *   any other day     -> the next Tuesday's issue
 * Wednesday through Sunday therefore point at the UPCOMING issue, which is the
 * one being built, not the one that already went out.
 *
 * Issues live at /email/pelham-post-YYYY-MM-DD.html and are built before the
 * Monday review, so by the time Kim clicks, the file is there. If it 404s, the
 * issue is late, which is worth knowing.
 *
 * Exceptions: when one week's issue moves off Tuesday, add it to OVERRIDES
 * below with the Pacific dates that should point at it. Every other date
 * falls back to the upcoming-Tuesday rule.
 */

export const dynamic = 'force-dynamic';

/** Pacific dates (inclusive, YYYY-MM-DD) that point at a non-Tuesday issue. */
const OVERRIDES: Array<{ from: string; to: string; issue: string }> = [
  // Week of October 12, 2026: Kim films for American Dream TV on Monday,
  // so the Post goes out Thursday, October 15 instead of Tuesday.
  { from: '2026-10-12', to: '2026-10-15', issue: '2026-10-15' },
];

function pacificToday(now = new Date()): { y: number; m: number; d: number; iso: string } {
  // Read "today" in Pacific, not in the server's zone. en-CA gives YYYY-MM-DD.
  const pacific = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);

  const part = (t: string) => pacific.find((p) => p.type === t)?.value ?? '';
  const y = Number(part('year'));
  const m = Number(part('month'));
  const d = Number(part('day'));
  const iso = `${part('year')}-${part('month')}-${part('day')}`;
  return { y, m, d, iso };
}

function upcomingTuesdayPacific(now = new Date()): string {
  const { y, m, d } = pacificToday(now);

  // Anchor at noon UTC so no daylight-saving shift can roll the date.
  const today = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  const dow = today.getUTCDay(); // 0 Sun ... 2 Tue
  const ahead = dow === 2 ? 0 : (2 - dow + 7) % 7;
  today.setUTCDate(today.getUTCDate() + ahead);

  return today.toISOString().slice(0, 10);
}

function issueDateFor(now = new Date()): string {
  const { iso } = pacificToday(now);
  const override = OVERRIDES.find((o) => iso >= o.from && iso <= o.to);
  return override ? override.issue : upcomingTuesdayPacific(now);
}

export async function GET(): Promise<NextResponse> {
  const date = issueDateFor();
  return NextResponse.redirect(
    `https://thepelhamgroupnw.com/email/pelham-post-${date}.html`,
    302, // never cache a "latest" pointer as permanent
  );
}
