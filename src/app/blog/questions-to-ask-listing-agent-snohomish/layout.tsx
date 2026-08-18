import type { Metadata } from 'next';

const TITLE = 'Questions to Ask Before You Hire a Listing Agent in Snohomish County | Kim Pelham';
const DESC =
  'Eight questions that separate listing agents in Snohomish County, with broker Kim Pelham answering each one on the record: sale-to-list ratio, staging costs, who does the repairs, how multiple offers get handled, and what happens if the home does not sell.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'questions to ask a listing agent',
    'how to choose a realtor to sell your home',
    'hire listing agent Snohomish County',
    'interviewing real estate agents',
    'sale to list ratio',
    'Kim Pelham broker Everett',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Questions to Ask Before You Hire a Listing Agent in Snohomish County',
    description:
      'Eight questions that separate listing agents, answered on the record by broker Kim Pelham.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/kim-with-client-on-couch.jpg',
        width: 1200,
        height: 630,
        alt: 'Kim Pelham talking with a client at home',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/questions-to-ask-listing-agent-snohomish',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['hiring an agent', 'seller strategy', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/questions-to-ask-listing-agent-snohomish',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
