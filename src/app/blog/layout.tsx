import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Kim Pelham Snohomish County Insights',
  description:
    'Expert real estate advice for buyers and sellers in Snohomish County. Kim Pelham shares market insights, staging tips, and local guides for the Pacific Northwest.',
  openGraph: {
    title: 'Real Estate Blog | Kim Pelham Snohomish County Insights',
    description:
      'Expert real estate advice for buyers and sellers in Snohomish County. Kim Pelham shares market insights, staging tips, and local guides for the Pacific Northwest.',
    images: ['/images/hero-02-warm-kitchen.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
