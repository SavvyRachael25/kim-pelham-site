import type { Metadata } from 'next';

const TITLE = 'Kim Pelham on The American Dream TV: Nominate a Snohomish County Home, Business, or Nonprofit';
const DESC =
  'Kim Pelham is hosting Snohomish County segments on The American Dream TV, a two-time Emmy-nominated, Telly Award-winning lifestyle show. Nominate a home with a story, a business worth knowing, or a nonprofit doing real work. It does not need to be for sale.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['American Dream TV Snohomish County', 'Kim Pelham American Dream TV', 'nominate home TV show Everett', 'Snohomish County TV feature', 'ADTV host Everett WA'],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Kim Pelham is hosting on The American Dream TV',
    description: 'Nominate a Snohomish County home, business, or nonprofit for the show. It does not need to be for sale.',
    images: [{ url: 'https://thepelhamgroupnw.com/images/neighborhood-01-everett-marina.jpg', width: 1200, height: 630, alt: 'The Everett waterfront' }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/adtv',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/adtv' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
