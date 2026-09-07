import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Snohomish County Buyers Actually Want in 2026 | Kim Pelham',
  description: 'Buyers in Mill Creek, Bothell and Lake Stevens are more selective and value-conscious than in 2021. What they actually want, from 17 years of reading buyer feedback.',
  openGraph: {
    title: 'What Buyers in Mill Creek, Bothell and Lake Stevens Actually Want in 2026',
    description: 'Buyers in Mill Creek, Bothell and Lake Stevens are more selective and value-conscious than in 2021. What they actually want, from 17 years of reading buyer feedback.',
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/what-buyers-want-snohomish-county-2026' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
