import { NextRequest, NextResponse } from 'next/server';

/**
 * HTTP Basic Auth gate for /dashboard.
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

export function middleware(req: NextRequest) {
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
        return NextResponse.next();
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
  matcher: ['/dashboard/:path*', '/dashboard', '/api/analytics/:path*', '/api/analytics'],
};
