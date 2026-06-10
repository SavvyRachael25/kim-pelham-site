import type { Metadata } from 'next';

const TITLE =
  'Snohomish County Real Estate Blog · Seller Strategy, Market Reports & Senior Guides | Kim Pelham';
const DESC =
  'Snohomish County real estate insights from broker Kim Pelham. Pre-sale renovation strategy, monthly NWMLS market reports, senior and estate transitions, and neighborhood buyer guides for Everett, Mill Creek, Bothell, Lake Stevens, Marysville, and Mukilteo. 17 years experience, 102.3% average sale-to-list ratio.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Snohomish County real estate',
    'Snohomish County housing market',
    'pre-sale renovation',
    'home staging',
    'Mill Creek real estate',
    'Everett homes for sale',
    'Bothell broker',
    'Lake Stevens market',
    'Mukilteo real estate',
    'SRES Snohomish County',
    'senior real estate specialist',
    'NWMLS market report',
    'Kim Pelham',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  creator: 'Kim Pelham',
  publisher: 'The Pelham Group NW',
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/blog',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/hero-02-warm-kitchen.jpg',
        width: 1200,
        height: 630,
        alt: 'The Pelham Group NW Blog. Snohomish County real estate insights.',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://thepelhamgroupnw.com/images/hero-02-warm-kitchen.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
