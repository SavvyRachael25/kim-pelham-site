import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Sale Home Repair Coordination | Kim Pelham Snohomish County',
  description:
    'Kim Pelham coordinates pre-sale repairs and improvements so you get top dollar without the hassle. Trusted contractors, honest advice, real results in Snohomish County.',
  openGraph: {
    title: 'Pre-Sale Home Repair Coordination | Kim Pelham Snohomish County',
    description:
      'Kim Pelham coordinates pre-sale repairs and improvements so you get top dollar without the hassle. Trusted contractors, honest advice, real results in Snohomish County.',
    images: ['/images/property-01-everett-home-exterior.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/home-repair',
  },
};

export default function HomeRepairLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
