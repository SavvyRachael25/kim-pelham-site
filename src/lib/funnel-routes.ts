/*
  Funnel-route guard. Any route that lives in this set should NOT see the
  site-wide marketing popups (ConciergeCondoPopup, MobileConciergeCondoPopup),
  the IntroAnimation, or any other interruption that competes with the
  funnel's own lead-capture form. The visitor came here for one specific thing.

  Match is true if the current pathname is exactly one of the listed routes
  OR starts with one of the listed prefixes (so /case-study/anything wins).
*/

const FUNNEL_PATHS_EXACT = new Set<string>([
  '/adtv', // ADTV nomination landing page: one ask, no competing popups
  '/book', // booking calendar: one ask, no competing popups
  '/book-adtv', // ADTV booking calendar: one ask, no competing popups
  '/prep', // pre-listing concierge offer: one ask, no competing popups
  '/listwithkim',
  '/condo-concierge',
  '/tv', // the QR landing from the ADTV shoot: one field, no competing popups
  '/', // the homepage carries the text-me ask under the hero (2026-09-19); the condo popup landed on top of it
  // The nine seller posts carry the text-me ask mid-article (2026-09-19).
  // The condo popup competed with it; the article is the funnel now.
  '/blog/first-72-hours',
  '/blog/how-much-is-my-home-worth-snohomish-county',
  '/blog/pre-sale-renovation-roi-snohomish-2026',
  '/blog/staging-beats-price-cuts',
  '/blog/sale-to-list-ratio',
  '/blog/questions-to-ask-listing-agent-snohomish',
  '/blog/snohomish-cooling-market-sellers-2026',
  '/blog/sell-above-market-value',
  '/blog/living-in-a-staged-home',
]);

const FUNNEL_PATH_PREFIXES = ['/case-study/'];

export function isFunnelRoute(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  // Strip a trailing slash so /listwithkim/ also matches /listwithkim.
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (FUNNEL_PATHS_EXACT.has(path)) return true;
  return FUNNEL_PATH_PREFIXES.some((p) => path.startsWith(p));
}
