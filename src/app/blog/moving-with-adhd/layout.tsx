import type { Metadata } from 'next';

const TITLE = 'Moving With ADHD: Why It Feels So Hard, and What Actually Helps | The Pelham Group NW';
const DESC =
  'Moving erases every pathway an ADHD brain spent years building, and settling in can take up to a year. ADHD coach Stephanie Galindo joins Kim Pelham to explain the shame connection, a nervous system tool you can try today, why body doubling works, and how to make a move survivable.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'moving with ADHD',
    'ADHD and moving house',
    'why is moving so hard with ADHD',
    'ADHD coach Snohomish County',
    'Stephanie Galindo ADHD coach',
    'executive function moving',
    'downsizing with ADHD',
    'Home Transition Team Snohomish County',
    'Community Spotlight Kim Pelham',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/blog/moving-with-adhd',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kim Pelham, The Pelham Group NW.',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/moving-with-adhd',
  },
};

export default function MovingWithAdhdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
