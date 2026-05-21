import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/analytics?range=7d|30d|90d
 *
 * Proxies Umami Cloud API. Server-side only — the UMAMI_API_KEY
 * is never exposed to the browser.
 *
 * Required env vars (set in Vercel project settings):
 *   UMAMI_API_KEY     — bearer key from cloud.umami.is/settings/api-keys
 *   UMAMI_WEBSITE_ID  — defaults to the Pelham site id if unset
 *
 * Returns a single JSON payload with:
 *   stats        — totals (pageviews, visitors, visits, bounces, totaltime)
 *   timeseries   — daily pageviews + sessions for charting
 *   topPages     — top URLs by pageviews
 *   topReferrers — top referrer hostnames
 *   topCountries — top countries by sessions
 *   range        — the requested window
 *   generatedAt  — ISO timestamp
 */

const UMAMI_BASE = 'https://api.umami.is/v1';
const DEFAULT_WEBSITE_ID = '3fc3eb60-38d2-41b2-a52e-511704cb8fcf';

type Range = '7d' | '30d' | '90d';

function rangeToWindow(range: Range): { startAt: number; endAt: number } {
  const endAt = Date.now();
  const days = range === '7d' ? 7 : range === '90d' ? 90 : 30;
  const startAt = endAt - days * 24 * 60 * 60 * 1000;
  return { startAt, endAt };
}

async function umamiFetch(
  path: string,
  apiKey: string,
  params: Record<string, string | number>
) {
  const qs = new URLSearchParams(
    Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))
  );
  const url = `${UMAMI_BASE}${path}?${qs.toString()}`;
  const res = await fetch(url, {
    headers: {
      'x-umami-api-key': apiKey,
      accept: 'application/json',
    },
    // Don't cache: the dashboard wants live numbers.
    cache: 'no-store',
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Umami ${path} failed: ${res.status} ${body.slice(0, 200)}`);
  }
  return res.json();
}

export async function GET(req: NextRequest) {
  const apiKey = process.env.UMAMI_API_KEY;
  const websiteId = process.env.UMAMI_WEBSITE_ID ?? DEFAULT_WEBSITE_ID;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          'UMAMI_API_KEY is not set. Add it to Vercel project env vars and redeploy.',
      },
      { status: 503 }
    );
  }

  const rawRange = req.nextUrl.searchParams.get('range') ?? '30d';
  const range: Range =
    rawRange === '7d' || rawRange === '90d' ? rawRange : '30d';
  const { startAt, endAt } = rangeToWindow(range);

  const common = { startAt, endAt };
  const unit = range === '7d' ? 'hour' : 'day';

  try {
    const [stats, timeseries, topPages, topReferrers, topCountries] =
      await Promise.all([
        umamiFetch(`/websites/${websiteId}/stats`, apiKey, common),
        umamiFetch(`/websites/${websiteId}/pageviews`, apiKey, {
          ...common,
          unit,
          timezone: 'America/Los_Angeles',
        }),
        umamiFetch(`/websites/${websiteId}/metrics`, apiKey, {
          ...common,
          type: 'url',
          limit: 10,
        }),
        umamiFetch(`/websites/${websiteId}/metrics`, apiKey, {
          ...common,
          type: 'referrer',
          limit: 10,
        }),
        umamiFetch(`/websites/${websiteId}/metrics`, apiKey, {
          ...common,
          type: 'country',
          limit: 10,
        }),
      ]);

    return NextResponse.json({
      range,
      generatedAt: new Date().toISOString(),
      stats,
      timeseries,
      topPages,
      topReferrers,
      topCountries,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Unknown Umami fetch error';
    console.error('[api/analytics]', message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
