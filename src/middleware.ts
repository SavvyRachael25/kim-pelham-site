import { NextRequest, NextResponse } from 'next/server';

/**
 * Two jobs.
 *
 * 1. Canonical-host guard. Vercel serves this app on preview domains like
 *    kim-pelham-site.vercel.app as well as on thepelhamgroupnw.com. Those
 *    copies are fully crawlable (robots.txt says Allow: /) and a canonical
 *    tag is only a hint, so Google can and does index the duplicate. Any
 *    request whose host is not the real domain now gets a hard
 *    X-Robots-Tag: noindex, nofollow. Flagged by a ChatGPT visibility audit
 *    Kim forwarded 2026-10-01, verified the same day.
 *
 * 2. HTTP Basic Auth gate for /dashboard.
 *
 * Reads DASHBOARD_PASSWORD from env. Any username is accepted; only the
 * password is checked. Returns 401 with WWW-Authenticate so the browser
 * shows the native credentials prompt.
 *
 * To rotate the password: update DASHBOARD_PASSWORD in Vercel project
 * env vars and redeploy. The browser caches credentials per realm, so a
 * realm change also forces a re-prompt.
 */

const REALM = 'Pelham Dashboard';

function unauthorized() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });
}

const CANONICAL_HOST = 'thepelhamgroupnw.com';

/** Everything except the real domain gets noindexed. Localhost is left alone. */
function noindexIfNotCanonical(req: NextRequest, res: NextResponse): NextResponse {
  const host = (req.headers.get('host') ?? '').toLowerCase().split(':')[0];
  const isCanonical = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;
  const isLocal = host === 'localhost' || host === '127.0.0.1';
  if (!isCanonical && !isLocal) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return res;
}

export function middleware(req: NextRequest) {
  // Non-canonical hosts: noindex and carry on. Runs before the dashboard gate
  // so preview deploys of every path are covered, not just /dashboard.
  if (!req.nextUrl.pathname.startsWith('/dashboard') && !req.nextUrl.pathname.startsWith('/api/analytics')) {
    return noindexIfNotCanonical(req, NextResponse.next());
  }

  const expected = process.env.DASHBOARD_PASSWORD;
  if (!expected) {
    // If the env var isn't set, fail closed — the dashboard is private
    // tooling and should never serve without a configured password.
    return new NextResponse(
      'Dashboard is not configured. Set DASHBOARD_PASSWORD in Vercel env vars.',
      { status: 503 }
    );
  }

  const header = req.headers.get('authorization') ?? '';
  if (header.toLowerCase().startsWith('basic ')) {
    const encoded = header.slice(6).trim();
    try {
      const decoded = atob(encoded);
      const idx = decoded.indexOf(':');
      const password = idx >= 0 ? decoded.slice(idx + 1) : '';
      if (password === expected) {
        return noindexIfNotCanonical(req, NextResponse.next());
      }
    } catch {
      // fall through to 401
    }
  }

  return unauthorized();
}

export const config = {
  // Gate the dashboard page AND its API. Matches /dashboard, /dashboard/*,
  // /api/analytics, /api/analytics/* — nothing else on the site is touched.
  // The dashboard gate needs /dashboard and /api/analytics. The canonical-host
  // guard needs everything else, so match all paths except static assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
