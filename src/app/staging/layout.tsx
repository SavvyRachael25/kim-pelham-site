import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Staging Services | Sell Faster & for More in Snohomish County',
  description:
    'Professional home staging by Kim Pelham helps Snohomish County sellers maximize value. Staged homes sell faster and closer to asking price  -  here\'s how Kim does it.',
  openGraph: {
    title: 'Home Staging Services | Sell Faster & for More in Snohomish County',
    description:
      'Professional home staging by Kim Pelham helps Snohomish County sellers maximize value. Staged homes sell faster and closer to asking price  -  here\'s how Kim does it.',
    images: ['/images/staging-01-living-room.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/staging',
  },
};

export default function StagingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
