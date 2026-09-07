import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Is My Home Worth in Snohomish County? | Kim Pelham',
  description: 'A Zestimate is a starting point, not a price. How a Snohomish County broker of 17 years actually values a home: comps, adjustments, and what public estimates miss.',
  openGraph: {
    title: 'How Much Is My Home Worth in Snohomish County?',
    description: 'A Zestimate is a starting point, not a price. How a Snohomish County broker of 17 years actually values a home: comps, adjustments, and what public estimates miss.',
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/how-much-is-my-home-worth-snohomish-county' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
