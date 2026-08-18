import type { Metadata } from 'next';

const TITLE = 'Buyer Love Letters Can Cost You: How I Protect Sellers From Fair Housing Risk | Kim Pelham';
const DESC =
  'Buyer love letters can expose home sellers to Fair Housing liability. Snohomish County broker Kim Pelham explains the risk in plain English and walks through her anonymized offer-review process: nine offers, no letters forwarded, and a clean $30,000-over-ask selection.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'buyer love letters real estate',
    'fair housing home seller liability',
    'multiple offers how to choose',
    'selling a house Snohomish County',
    'Washington fair housing protected classes',
    'Kim Pelham broker',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Buyer Love Letters Can Cost You: How I Protect Sellers From Fair Housing Risk',
    description:
      'The anonymized offer-review process broker Kim Pelham uses so sellers choose the strongest offer, not the most persuasive letter.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/kim-with-laptop.jpg',
        width: 1200,
        height: 630,
        alt: 'Broker Kim Pelham reviewing offers on a laptop',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/buyer-love-letters-fair-housing-snohomish',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['fair housing', 'multiple offers', 'seller strategy', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/buyer-love-letters-fair-housing-snohomish',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
