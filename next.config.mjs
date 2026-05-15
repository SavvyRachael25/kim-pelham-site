/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
