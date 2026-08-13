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
