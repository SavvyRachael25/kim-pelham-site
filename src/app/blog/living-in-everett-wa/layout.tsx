import type { Metadata } from 'next';

const TITLE = 'Living in Everett, WA: A Home Buyer\'s Guide | Kim Pelham';
const DESC =
  'What it is actually like to buy a home in Everett, Washington: dated market numbers and what they do and do not mean, housing types, transit and commuting, parks and waterfront, schools, and the property-level questions to investigate before you make an offer.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'living in Everett WA',
    'moving to Everett Washington',
    'Everett WA home buyers guide',
    'Everett housing market',
    'Everett WA schools',
    'Everett commute Seattle Sounder',
    'relocating to Snohomish County',
    'Kim Pelham',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Living in Everett, WA: A Home Buyer’s Guide',
    description:
      'Market numbers with dates attached, transit and commuting, parks, schools, and the property-level questions to investigate before buying in Everett.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/neighborhood-01-everett-marina.jpg',
        width: 1200,
        height: 630,
        alt: 'The Everett marina on Port Gardner Bay',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/living-in-everett-wa',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-30T09:00:00-07:00',
    modifiedTime: '2026-08-30T09:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Neighborhood Guides',
    tags: ['Everett', 'neighborhood guide', 'buyers', 'relocation', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/living-in-everett-wa',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
