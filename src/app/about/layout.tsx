import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Kim Pelham | 14-Year Snohomish County Real Estate Expert',
  description:
    'Meet Kim Pelham — Snohomish County native, real estate broker, and your trusted guide in Everett, Bothell, Mill Creek, and beyond. 14 years. 104.4% sale-to-list ratio.',
  openGraph: {
    title: 'About Kim Pelham | 14-Year Snohomish County Real Estate Expert',
    description:
      'Meet Kim Pelham — Snohomish County native, real estate broker, and your trusted guide in Everett, Bothell, Mill Creek, and beyond. 14 years. 104.4% sale-to-list ratio.',
    images: ['/images/kim-headshot-msh.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
