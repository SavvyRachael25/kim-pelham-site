import type { Metadata } from 'next';

const TITLE = 'That Unpermitted Remodel: What It Means When You Sell in Snohomish County | Kim Pelham';
const DESC =
  'Selling a Snohomish County home with unpermitted work? Broker Kim Pelham explains how Washington seller disclosure (Form 17) treats it, what buyers and lenders actually do, and the honest options: disclose and price, correct retroactively, or fix it first through her repair team.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'unpermitted work selling house Washington',
    'sell house unpermitted addition Snohomish County',
    'Form 17 seller disclosure Washington',
    'unpermitted remodel disclosure',
    'retroactive permit Snohomish County',
    'Kim Pelham broker',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'That Unpermitted Remodel: What It Means When You Sell in Snohomish County',
    description:
      'How unpermitted work plays at sale time, and the three honest ways to handle it.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/hero-02-warm-kitchen.jpg',
        width: 1200,
        height: 630,
        alt: 'A remodeled kitchen in a Snohomish County home',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/unpermitted-work-selling-snohomish-county',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['unpermitted work', 'seller disclosure', 'pre-sale repairs', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/unpermitted-work-selling-snohomish-county',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
