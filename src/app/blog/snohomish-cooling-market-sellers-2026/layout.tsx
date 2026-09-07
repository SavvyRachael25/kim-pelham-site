import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Snohomish County Cooling Market in 2026 | Kim Pelham',
  description: "Snohomish County in 2026 is cooler than 2021, but it is not a buyer's market and not a crash. What rising inventory actually means for sellers, from 17 years of cycles.",
  openGraph: {
    title: 'The Snohomish County Cooling Market in 2026',
    description: "Snohomish County in 2026 is cooler than 2021, but it is not a buyer's market and not a crash. What rising inventory actually means for sellers, from 17 years of cycles.",
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/snohomish-cooling-market-sellers-2026' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
