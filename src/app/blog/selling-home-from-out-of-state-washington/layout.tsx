import type { Metadata } from 'next';

const TITLE = 'Selling a Snohomish County Home From Out of State | Kim Pelham';
const DESC =
  'How to sell a Washington home when you live somewhere else, from broker Kim Pelham, who completed her eleventh fully remote transaction back in 2020: video walkthroughs, remote signing, coordinated repairs and staging through one point of contact, and closing without a flight.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'sell house from out of state',
    'selling a home remotely Washington',
    'out of state seller Snohomish County',
    'sell parents house from another state',
    'remote real estate closing Washington',
    'Kim Pelham broker Everett',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Selling a Snohomish County Home From Out of State',
    description:
      'Video walkthroughs, remote signing, one point of contact for repairs and staging, and a closing that does not require a flight.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/arlington/arlington-01.jpg',
        width: 1200,
        height: 630,
        alt: 'A Snohomish County home sold by The Pelham Group NW',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/selling-home-from-out-of-state-washington',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['out of state sellers', 'remote selling', 'estate sales', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/selling-home-from-out-of-state-washington',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
