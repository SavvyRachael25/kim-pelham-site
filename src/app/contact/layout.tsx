import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Kim Pelham | Snohomish County Real Estate Broker',
  description:
    'Ready to buy or sell in Snohomish County? Contact Kim Pelham at (425) 250-9422. Serving Everett, Bothell, Mill Creek, Snohomish, Lake Stevens, and Marysville.',
  openGraph: {
    title: 'Contact Kim Pelham | Snohomish County Real Estate Broker',
    description:
      'Ready to buy or sell in Snohomish County? Contact Kim Pelham at (425) 250-9422. Serving Everett, Bothell, Mill Creek, Snohomish, Lake Stevens, and Marysville.',
    images: ['/images/kim-headshot-msh.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
