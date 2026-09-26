import type { MetadataRoute } from 'next';

/*
  Home screen install. Kim's clients add the site to a phone and get the KP
  monogram rather than a screenshot of the page. Icon sources live in
  public/icon-source.html so the set can be re-rendered if the brand shifts.
*/
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kim Pelham · The Pelham Group NW',
    short_name: 'Kim Pelham',
    description:
      'Snohomish County real estate with Kim Pelham. Listings, neighborhood guides, and a broker who answers her own phone.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F5F0',
    theme_color: '#2F5233',
    orientation: 'portrait',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
