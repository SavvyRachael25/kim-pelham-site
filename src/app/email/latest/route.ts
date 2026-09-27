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
 */

export const dynamic = 'force-dynamic';

function upcomingTuesdayPacific(now = new Date()): string {
  // Read "today" in Pacific, not in the server's zone. en-CA gives YYYY-MM-DD.
  const pacific = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  }).formatToParts(now);

  const part = (t: string) => pacific.find((p) => p.type === t)?.value ?? '';
  const y = Number(part('year'));
  const m = Number(part('month'));
  const d = Number(part('day'));

  // Anchor at noon UTC so no daylight-saving shift can roll the date.
  const today = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  const dow = today.getUTCDay(); // 0 Sun ... 2 Tue
  const ahead = dow === 2 ? 0 : (2 - dow + 7) % 7;
  today.setUTCDate(today.getUTCDate() + ahead);

  return today.toISOString().slice(0, 10);
}

export async function GET(): Promise<NextResponse> {
  const date = upcomingTuesdayPacific();
  return NextResponse.redirect(
    `https://thepelhamgroupnw.com/email/pelham-post-${date}.html`,
    302, // never cache a "latest" pointer as permanent
  );
}
