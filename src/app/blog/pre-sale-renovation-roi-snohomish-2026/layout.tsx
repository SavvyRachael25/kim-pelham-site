import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Should You Renovate Before Selling? A 2026 ROI Check | Kim Pelham',
  description: 'Most Snohomish County sellers do not need a kitchen remodel. They need four targeted updates that pay back at closing: paint, lighting, flooring, and staging.',
  openGraph: {
    title: 'Should You Renovate Before Selling Your Snohomish County Home?',
    description: 'Most Snohomish County sellers do not need a kitchen remodel. They need four targeted updates that pay back at closing: paint, lighting, flooring, and staging.',
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/pre-sale-renovation-roi-snohomish-2026' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
