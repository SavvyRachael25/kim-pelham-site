import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call with Kim Pelham | 30 Minutes, Snohomish County Real Estate',
  description:
    'Pick a time and Kim Pelham will call you. Thirty minutes on the phone about selling, buying, downsizing, or what your Snohomish County home is worth. No pressure, no script.',
  openGraph: {
    title: 'Book a Call with Kim Pelham',
    description:
      'Thirty minutes on the phone about selling, buying, downsizing, or what your home is worth. Pick a time and Kim will call you.',
    images: ['/images/kim-by-water.jpg'],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/book',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/book',
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
