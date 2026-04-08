import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews | Kim Pelham Snohomish County Real Estate',
  description:
    'Read real reviews from buyers and sellers who worked with Kim Pelham in Everett, Bothell, Mill Creek, and across Snohomish County. 5-star experience every time.',
  openGraph: {
    title: 'Client Reviews | Kim Pelham Snohomish County Real Estate',
    description:
      'Read real reviews from buyers and sellers who worked with Kim Pelham in Everett, Bothell, Mill Creek, and across Snohomish County. 5-star experience every time.',
    images: ['/images/kim-headshot-msh.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/testimonials',
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
