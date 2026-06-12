/*
  Funnel-route guard. Any route that lives in this set should NOT see the
  site-wide marketing popups (ListingsLeadPopup, MobileListingsPopup), the
  IntroAnimation, or any other interruption that competes with the funnel's
  own lead-capture form. The visitor came here for one specific thing.

  Match is true if the current pathname is exactly one of the listed routes
  OR starts with one of the listed prefixes (so /case-study/anything wins).
*/

const FUNNEL_PATHS_EXACT = new Set<string>([
  '/listwithkim',
  '/condo-concierge',
]);

const FUNNEL_PATH_PREFIXES = ['/case-study/'];

export function isFunnelRoute(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  // Strip a trailing slash so /listwithkim/ also matches /listwithkim.
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (FUNNEL_PATHS_EXACT.has(path)) return true;
  return FUNNEL_PATH_PREFIXES.some((p) => path.startsWith(p));
}
