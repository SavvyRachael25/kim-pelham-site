/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the headless-Chromium packages out of the bundler — they ship
  // platform binaries that must be required at runtime, not webpacked.
  // Used by /api/listing-status-change to screenshot Studio templates.
  experimental: {
    serverComponentsExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
  },
  images: {
    /*
      LCP optimization (per AEO audit 2026-05-13/14, mobile LCP measured
      at 12.4-12.5s, target under 2.5s):

      1. Enable AVIF first, WebP fallback. AVIF is ~30% smaller than WebP
         for photo content like the hero aerial shot.
      2. Cap deviceSizes at 1600px. Our source images are at most 1600px
         wide (hero is 1600x893 post-compression), so generating 1920/3840
         variants just upscales the source and wastes bytes.
      3. Tighter imageSizes for non-fill images.
    */
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/properties/1406-potlatch-beach-road-tulalip',
        destination: '/properties/1406-potlatch-beach-road-marysville',
        permanent: true,
      },
      {
        source: '/blog/potlatch-beach-road-tulalip-waterfront',
        destination: '/blog/potlatch-beach-road-marysville-waterfront',
        permanent: true,
      },
      /*
        Legacy WordPress URLs (GA 7/17-8/13: the 404 page was the top "page"
        with 251 views / 96% bounce — old-site URLs still indexed and linked
        around the web were dying here). Map every known old path to its
        closest live equivalent. NOTE: '/listings' must stay EXACT-match only,
        the new site serves photo assets under /listings/<mls>/photos/.
      */
      { source: '/insights', destination: '/blog', permanent: true },
      { source: '/insights/:slug*', destination: '/blog', permanent: true },
      { source: '/about-kim', destination: '/about', permanent: true },
      { source: '/listings', destination: '/properties', permanent: true },
      { source: '/properties-2', destination: '/properties', permanent: true },
      { source: '/home-valuation', destination: '/sellers', permanent: true },
      { source: '/testimonials-2', destination: '/testimonials', permanent: true },
      { source: '/photo-gallery', destination: '/staging', permanent: true },
      { source: '/book', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      // Legacy WordPress date-based post permalinks (2018-2021 blog, recovered
      // via Wayback 2026-08-18). Exact per-slug 301s first (recovered posts
      // rebuilt at new homes, see Kim/wayback-recovery/republish-plan.md),
      // then a catch-all that keeps any undiscovered old URL out of the 404 leak.
      { source: '/2021/01/08/home-staging-4-year-anniversary', destination: '/blog/staging-occupied-homes-nine-years', permanent: true },
      { source: '/2020/10/22/discrimination-liabilities-when-selling-your-house', destination: '/blog/buyer-love-letters-fair-housing-snohomish', permanent: true },
      { source: '/2018/09/03/choosing-the-right-real-estate-agent-to-sell-your-home', destination: '/blog/questions-to-ask-listing-agent-snohomish', permanent: true },
      { source: '/2020/03/10/a-team-effort-to-find-the-perfect-home', destination: '/blog/down-payment-assistance-snohomish-county', permanent: true },
      { source: '/2020/10/10/eleventh-sale-made-over-the-internet', destination: '/blog/selling-home-from-out-of-state-washington', permanent: true },
      { source: '/2018/11/07/remodeling-without-permits', destination: '/blog/unpermitted-work-selling-snohomish-county', permanent: true },
      { source: '/2019/02/20/6-steps-to-buying-your-home', destination: '/blog/buying-a-home-snohomish-county-steps', permanent: true },
      { source: '/2019/08/08/summer-home-buying-tips', destination: '/blog/buying-a-home-snohomish-county-steps', permanent: true },
      { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*', destination: '/blog', permanent: true },
      // Old staging portfolio pages and category archives
      { source: '/portfolios/:slug*', destination: '/staging', permanent: true },
      { source: '/portfolios_category/:slug*', destination: '/staging', permanent: true },
      { source: '/search-mls', destination: '/properties', permanent: true },
    ];
  },
  /*
    Subdomain: templates.thepelhamgroupnw.com
    ─────────────────────────────────────────
    The Brand Studio (Pelham Content Flywheel) lives at public/studio/.
    Requests to templates.thepelhamgroupnw.com are internally rewritten
    to /studio/* so the studio serves at the root of that subdomain.

    Setup steps for the subdomain (one-time):
      1. In Vercel dashboard → kim-pelham-site → Settings → Domains:
         add `templates.thepelhamgroupnw.com`
      2. Vercel will tell you the CNAME value (something like cname.vercel-dns.com)
      3. In your DNS provider (where thepelhamgroupnw.com is registered):
         add CNAME record:  templates → cname.vercel-dns.com
      4. Wait ~5-15 min for HTTPS cert provisioning
      5. Subdomain is live, this rewrite handles the rest
  */
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'templates.thepelhamgroupnw.com' }],
        destination: '/studio/index.html',
      },
      {
        source: '/:path+',
        has: [{ type: 'host', value: 'templates.thepelhamgroupnw.com' }],
        destination: '/studio/:path+',
      },
    ];
  },
  async headers() {
    return [
      {
        // Keep the brand studio out of Google's index — internal tooling only
        source: '/studio/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

export default nextConfig;
