import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mukilteo's most undercovered move: the multi-gen split-entry",
  description: 'Inside 4611 76th St SW: a $975K Mukilteo split-entry with a downstairs in-law setup, Olympic views, and the math behind a 102.03% sale-to-list ratio.',
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/blog-mukilteo-multigen-may2026',
  },
  openGraph: {
    title: "Mukilteo's most undercovered move: the multi-gen split-entry",
    description: 'Inside 4611 76th St SW: a $975K Mukilteo split-entry with a downstairs in-law setup, Olympic views, and the math behind a 102.03% sale-to-list ratio.',
    url: 'https://thepelhamgroupnw.com/blog/blog-mukilteo-multigen-may2026',
    images: ['/images/hero-01-aerial-neighborhood.jpg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mukilteo's most undercovered move: the multi-gen split-entry",
    description: 'Inside 4611 76th St SW: a $975K Mukilteo split-entry with a downstairs in-law setup, Olympic views, and the math behind a 102.03% sale-to-list ratio.',
    images: ['/images/hero-01-aerial-neighborhood.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
