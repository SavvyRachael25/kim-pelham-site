import type { Metadata } from 'next';

const TITLE = 'Buying a Home in Snohomish County: The Real Order of Operations | Kim Pelham';
const DESC =
  'The order of operations for buying a home in Snohomish County in 2026, from broker Kim Pelham: real budget first, pre-approval before touring, an agent who caps their client load, offer strategy in a higher-inventory market, and what actually happens between accepted offer and keys.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'steps to buying a home Snohomish County',
    'how to buy a house Washington 2026',
    'home buying process Everett WA',
    'pre-approval before house hunting',
    'first time home buyer Snohomish',
    'Kim Pelham broker',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Buying a Home in Snohomish County: The Real Order of Operations',
    description:
      'Budget, pre-approval, agent, search, offer, close. The order matters more than the checklist.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/lifestyle-01-farmers-market.jpg',
        width: 1200,
        height: 630,
        alt: 'A Snohomish County farmers market on a summer morning',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/buying-a-home-snohomish-county-steps',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Buyer Guides',
    tags: ['home buying', 'buyer guide', 'Snohomish County', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/buying-a-home-snohomish-county-steps',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
