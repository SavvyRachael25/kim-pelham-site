import type { Metadata } from 'next';

const TITLE =
  'The Home Transition Team | One Team for the Whole Move | Kim Pelham, The Pelham Group NW';
const DESC =
  'Repairs, staging, selling, and senior transition support under one roof. The Pelham Group NW Home Transition Team handles the entire move: licensed contractors, in-house staging, SRES-certified guidance for seniors and their families, and a broker who has walked alongside Snohomish County for 17 years. Payment for repairs can defer until closing.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'home transition team',
    'senior move Snohomish County',
    'selling a parents home Everett',
    'estate sale real estate Snohomish',
    'home repairs before selling',
    'defer repairs until closing',
    'SRES Snohomish County',
    'downsizing help Everett',
    'concierge real estate Snohomish',
    'Kim Pelham Home Transition Team',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/home-transition-team',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/og/case-study-concierge-condo.jpg',
        width: 1200,
        height: 630,
        alt: 'A staged living room prepared by the Pelham Group Home Transition Team.',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/home-transition-team',
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Snohomish County',
  },
};

export default function HomeTransitionTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
