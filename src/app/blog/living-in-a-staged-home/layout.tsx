import type { Metadata } from 'next';

const TITLE = 'Living in a Staged Home: Simple Habits That Keep It Show-Ready | Kim Pelham';
const DESC =
  'Keeping your home show-ready while you live in it does not mean constantly cleaning. Broker and home stager Kim Pelham shares the room-by-room 30-second habits that keep a staged home ready for any showing, plus the final walk-through checklist she gives every seller.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'living in a staged home',
    'keep home show-ready',
    'showing preparation checklist',
    'selling a home while living in it',
    'home staging Snohomish County',
    'showing checklist',
    'Kim Pelham staging',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Living in a Staged Home: Simple Habits That Keep It Show-Ready',
    description:
      'The room-by-room 30-second habits that keep a staged home ready for any showing, plus the final walk-through checklist Kim Pelham gives every seller.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/mukilteo-04-great-room.jpg',
        width: 1200,
        height: 630,
        alt: 'A staged great room in a Snohomish County home',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/living-in-a-staged-home',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-20T18:00:00-07:00',
    modifiedTime: '2026-08-20T18:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['staging', 'showings', 'seller strategy', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/living-in-a-staged-home',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
