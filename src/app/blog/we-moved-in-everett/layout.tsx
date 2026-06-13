import type { Metadata } from 'next';

const TITLE = 'We Moved. A Note from Kim. | The Pelham Group NW';
const DESC =
  'After weeks of waiting on the lease, the keys finally landed. A short letter from Kim Pelham about settling into the new Everett office, what stays the same, and a window that looks straight at the mountains.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Kim Pelham office move',
    'The Pelham Group NW Everett',
    'Pelham Group new office',
    'Snohomish County real estate broker',
    'Kim Pelham letter',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/blog/we-moved-in-everett',
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
    canonical: 'https://thepelhamgroupnw.com/blog/we-moved-in-everett',
  },
};

export default function MovedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
