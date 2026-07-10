import type { Metadata } from 'next';

const TITLE =
  'Concierge Condo Case Study · Under Contract, Owners Out of State | Kim Pelham';
const DESC =
  'A real Pelham Group concierge case study, now under contract, closing July 30. Two homeowners moved out of state mid-prep. Kim Pelham and her crew handled paint, flooring, hardware, refinishing, staging, and listing photography. 60 before and after photos, the full timeline, the concierge process, and an 8-question FAQ.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'condo concierge service Snohomish County',
    'pre-sale prep Everett',
    'home staging Snohomish County',
    'out of state home sale Washington',
    'Pelham Group concierge',
    'condo before after',
    'pre-listing renovation case study',
    'sell condo from out of state',
    'Kim Pelham',
    'The Pelham Group NW',
    'Snohomish County real estate broker',
    'concierge real estate Snohomish',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  creator: 'Kim Pelham',
  publisher: 'The Pelham Group NW',
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/case-study/concierge-condo',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/og/case-study-concierge-condo.jpg',
        width: 1200,
        height: 630,
        alt: 'Concierge condo case study by Kim Pelham. The staged living room: sage accent wall, marble herringbone fireplace surround with the fire lit, large peony art, sliding glass door to the patio.',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://thepelhamgroupnw.com/og/case-study-concierge-condo.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/case-study/concierge-condo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  // GEO hints (used by some specialized search engines, harmless elsewhere)
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Snohomish County',
    'geo.position': '47.9785;-122.2098',
    ICBM: '47.9785, -122.2098',
  },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
