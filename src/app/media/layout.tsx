import type { Metadata } from 'next';

const TITLE = 'Press, Recognition & Published Work | Kim Pelham · The Pelham Group NW';
const DESC =
  'Kim Pelham in the press: featured in The Daily Herald, First Place Best Realtor in the Best of Snohomish County in 2023 and 2024 (back-to-back Daily Herald readers\' choice), Best of Zillow Premier Agent, SRES certified, and published author of Six-Word Lessons on Selling Your Home in Seattle. 17 years building a Snohomish County reputation, one client at a time.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Kim Pelham press',
    'Best Realtor Snohomish County',
    'Best of Snohomish County 2023',
    'Best of Snohomish County 2024',
    'Daily Herald real estate',
    'Best of Zillow Premier Agent',
    'Six-Word Lessons Pelham',
    'Snohomish County real estate broker',
    'The Pelham Group NW',
    'SRES Snohomish',
    'real estate author',
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/media',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/best-of-snoco-2024-no-background.png',
        width: 1200,
        height: 630,
        alt: 'Best of Snohomish County 2024 First Place Best Realtor Kim Pelham',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://thepelhamgroupnw.com/images/best-of-snoco-2024-no-background.png'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/media',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
