import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Kim Pelham | Snohomish County Real Estate Broker',
  description:
    'Meet Kim Pelham  -  Snohomish County real estate broker and your trusted guide in Everett, Bothell, Mill Creek, and beyond. 17 years in real estate. 102.3% sale-to-list ratio.',
  openGraph: {
    title: 'About Kim Pelham | Snohomish County Real Estate Broker',
    description:
      'Meet Kim Pelham  -  Snohomish County real estate broker and your trusted guide in Everett, Bothell, Mill Creek, and beyond. 17 years in real estate. 102.3% sale-to-list ratio.',
    images: ['/images/kim-headshot-msh.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
