'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/*
  Private analytics dashboard for Kim.
  ─────────────────────────────────────
  Pulls live Umami stats via /api/analytics, which proxies the Umami
  Cloud API server-side (the UMAMI_API_KEY never reaches the browser).
  Brand tokens come from globals.css (--color-forest, --color-clay, etc).

  Not linked from the public nav. URL: /dashboard. noindex/nofollow is
  set in layout.tsx, robots.txt also disallows /dashboard.
*/

type Range = '7d' | '30d' | '90d';

type MetricRow = { x: string; y: number };
type StatBucket = { value: number; prev?: number };

type AnalyticsPayload = {
  range: Range;
  generatedAt: string;
  stats: {
    pageviews: StatBucket;
    visitors: StatBucket;
    visits: StatBucket;
    bounces: StatBucket;
    totaltime: StatBucket;
  };
  timeseries: { pageviews: { x: string; y: number }[]; sessions: { x: string; y: number }[] };
  topPages: MetricRow[];
  topReferrers: MetricRow[];
  topCountries: MetricRow[];
  error?: string;
};

const RANGES: { id: Range; label: string }[] = [
  { id: '7d', label: 'Last 7 days' },
  { id: '30d', label: 'Last 30 days' },
  { id: '90d', label: 'Last 90 days' },
];

function formatNumber(n: number | undefined): string {
  if (n === undefined || n === null || Number.isNaN(n)) return '—';
  return new Intl.NumberFormat('en-US').format(Math.round(n));
}

function formatDuration(seconds: number | undefined): string {
  if (!seconds || Number.isNaN(seconds)) return '—';
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function bounceRate(stats: AnalyticsPayload['stats'] | undefined): string {
  if (!stats) return '—';
  const v = stats.visits?.value ?? 0;
  const b = stats.bounces?.value ?? 0;
  if (v === 0) return '—';
  return `${((b / v) * 100).toFixed(1)}%`;
}

function delta(curr: number | undefined, prev: number | undefined): string {
  if (curr === undefined || prev === undefined || prev === 0) return '';
  const pct = ((curr - prev) / prev) * 100;
  const sign = pct >= 0 ? '+' : '';
  return `${sign}${pct.toFixed(1)}%`;
}

function Sparkline({ data }: { data: { x: string; y: number }[] }) {
  if (!data || data.length === 0) {
    return <div style={{ height: 80, color: 'var(--color-text-faint)' }}>No data yet</div>;
  }
  const w = 600;
  const h = 80;
  const max = Math.max(...data.map((d) => d.y), 1);
  const step = data.length > 1 ? w / (data.length - 1) : 0;
  const points = data
    .map((d, i) => `${i * step},${h - (d.y / max) * h}`)
    .join(' ');
  const area = `0,${h} ${points} ${w},${h}`;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      style={{ width: '100%', height: 80, display: 'block' }}
    >
      <polygon points={area} fill="var(--color-clay)" opacity="0.15" />
      <polyline
        points={points}
        fill="none"
        stroke="var(--color-clay)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MetricTable({ title, rows }: { title: string; rows: MetricRow[] }) {
  return (
    <div style={cardStyle}>
      <h3 style={cardTitleStyle}>{title}</h3>
      {rows && rows.length > 0 ? (
        <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {rows.slice(0, 10).map((r, i) => (
            <li
              key={`${r.x}-${i}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                padding: '8px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--color-border)',
                fontSize: 14,
              }}
            >
              <span
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  color: 'var(--color-text)',
                }}
              >
                {r.x || '(direct)'}
              </span>
              <span style={{ color: 'var(--color-text-light)', fontVariantNumeric: 'tabular-nums' }}>
                {formatNumber(r.y)}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <p style={{ color: 'var(--color-text-faint)', fontSize: 14 }}>Nothing here yet.</p>
      )}
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid var(--color-border)',
  borderRadius: 12,
  padding: 20,
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
};

const cardTitleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: 12,
  fontFamily: 'var(--font-heading)',
  fontSize: 18,
  fontWeight: 600,
  color: 'var(--color-forest)',
};

const statValueStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 36,
  fontWeight: 600,
  color: 'var(--color-forest)',
  lineHeight: 1.1,
  fontVariantNumeric: 'tabular-nums',
};

const statLabelStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-text-muted)',
  marginBottom: 6,
};

export default function DashboardPage() {
  const [range, setRange] = useState<Range>('30d');
  const [data, setData] = useState<AnalyticsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/api/analytics?range=${range}`, { cache: 'no-store' })
      .then(async (r) => {
        const body = await r.json();
        if (!r.ok) throw new Error(body.error ?? `HTTP ${r.status}`);
        return body;
      })
      .then((body) => {
        if (!cancelled) setData(body);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [range]);

  return (
    <main
      style={{
        background: 'var(--color-cream)',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 8,
          }}
        >
          <div>
            <p style={{ ...statLabelStyle, marginBottom: 4 }}>The Pelham Group NW</p>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 40,
                fontWeight: 600,
                color: 'var(--color-forest)',
                margin: 0,
              }}
            >
              Site analytics
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {RANGES.map((r) => (
              <button
                key={r.id}
                onClick={() => setRange(r.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  border: '1px solid var(--color-border)',
                  background:
                    r.id === range ? 'var(--color-forest)' : '#fff',
                  color: r.id === range ? '#fff' : 'var(--color-text)',
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--color-text-muted)', marginBottom: 32, fontSize: 14 }}>
          Live data from Umami Cloud. Updated on each page load.
          {data?.generatedAt &&
            ` Last refreshed ${new Date(data.generatedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT.`}
        </p>

        {/* Error */}
        {error && (
          <div
            style={{
              ...cardStyle,
              borderColor: '#d9534f',
              background: '#fff7f6',
              marginBottom: 24,
            }}
          >
            <h3 style={{ ...cardTitleStyle, color: '#a02622' }}>Could not load analytics</h3>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-light)' }}>{error}</p>
            <p style={{ marginTop: 12, fontSize: 13, color: 'var(--color-text-muted)' }}>
              If this is the first deploy, confirm <code>UMAMI_API_KEY</code> is set in Vercel
              project env vars and redeploy.
            </p>
          </div>
        )}

        {/* Stat row */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={cardStyle}>
            <div style={statLabelStyle}>Pageviews</div>
            <div style={statValueStyle}>
              {loading ? '…' : formatNumber(data?.stats?.pageviews?.value)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
              {delta(data?.stats?.pageviews?.value, data?.stats?.pageviews?.prev) || ' '}
            </div>
          </div>
          <div style={cardStyle}>
            <div style={statLabelStyle}>Unique visitors</div>
            <div style={statValueStyle}>
              {loading ? '…' : formatNumber(data?.stats?.visitors?.value)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
              {delta(data?.stats?.visitors?.value, data?.stats?.visitors?.prev) || ' '}
            </div>
          </div>
          <div style={cardStyle}>
            <div style={statLabelStyle}>Sessions</div>
            <div style={statValueStyle}>
              {loading ? '…' : formatNumber(data?.stats?.visits?.value)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
              {delta(data?.stats?.visits?.value, data?.stats?.visits?.prev) || ' '}
            </div>
          </div>
          <div style={cardStyle}>
            <div style={statLabelStyle}>Bounce rate</div>
            <div style={statValueStyle}>{loading ? '…' : bounceRate(data?.stats)}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>&nbsp;</div>
          </div>
          <div style={cardStyle}>
            <div style={statLabelStyle}>Avg time on site</div>
            <div style={statValueStyle}>
              {loading
                ? '…'
                : formatDuration(
                    (data?.stats?.totaltime?.value ?? 0) /
                      Math.max(data?.stats?.visits?.value ?? 1, 1)
                  )}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>&nbsp;</div>
          </div>
        </section>

        {/* Timeseries */}
        <section style={{ ...cardStyle, marginBottom: 24 }}>
          <h3 style={cardTitleStyle}>Pageviews over time</h3>
          <Sparkline data={data?.timeseries?.pageviews ?? []} />
        </section>

        {/* Tables */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <MetricTable title="Top pages" rows={data?.topPages ?? []} />
          <MetricTable title="Top referrers" rows={data?.topReferrers ?? []} />
          <MetricTable title="Top countries" rows={data?.topCountries ?? []} />
        </section>

        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', textAlign: 'center' }}>
          Powered by{' '}
          <a
            href="https://cloud.umami.is"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-clay)' }}
          >
            Umami
          </a>
          . Privacy-friendly, cookieless. ·{' '}
          <Link href="/" style={{ color: 'var(--color-clay)' }}>
            Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
