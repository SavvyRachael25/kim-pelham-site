import type { Metadata } from 'next';

const TITLE =
  'The Concierge Condo Case Study | Kim Pelham · The Pelham Group NW';
const DESC =
  'A short form unlocks the full case study: how Kim Pelham and her crew prepped an Everett condo, top to bottom, while the owners were already out of state. Built for HOA owners thinking about their own move.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/condo-concierge',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/case-studies/mathis-condo/after/19.jpg',
        width: 1200,
        height: 900,
        alt: 'An Everett condo living room after Kim Pelham\'s pre-sale concierge work',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://thepelhamgroupnw.com/case-studies/mathis-condo/after/01.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/condo-concierge',
  },
  // Gated funnel: don't burn indexing budget here. The public case study is the canonical SEO target.
  robots: {
    index: false,
    follow: true,
  },
};

export default function CondoConciergeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
