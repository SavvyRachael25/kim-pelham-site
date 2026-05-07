import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waterfront or view? Two Snohomish homes under $1M, May 2026 | The Pelham Group NW',
  description: 'A $899,900 high-bank Puget Sound waterfront in Marysville vs. a $975,000 view-first remodel in Mukilteo. How to think about the trade-offs at the sub-$1M price point in Snohomish County.',
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/waterfront-or-view-under-1m-may-2026',
  },
  openGraph: {
    title: 'Waterfront or view? Two Snohomish homes under $1M',
    description: '$899,900 Marysville waterfront vs. $975,000 Mukilteo view-first remodel. How to choose at sub-$1M in Snohomish County.',
    url: 'https://thepelhamgroupnw.com/blog/waterfront-or-view-under-1m-may-2026',
    images: ['/images/blog-waterfront-or-view-og.jpg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waterfront or view? Two Snohomish homes under $1M',
    description: '$899,900 Marysville waterfront vs. $975,000 Mukilteo view-first remodel. How to choose at sub-$1M in Snohomish County.',
    images: ['/images/blog-waterfront-or-view-og.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
