import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy a Home in Snohomish County | Kim Pelham Real Estate',
  description:
    "Expert buyer representation in Everett, Bothell, Mill Creek & Snohomish. Kim Pelham's 4-step process gets you into the right home at the right price. 17+ years experience.",
  openGraph: {
    title: 'Buy a Home in Snohomish County | Kim Pelham Real Estate',
    description:
      "Expert buyer representation in Everett, Bothell, Mill Creek & Snohomish. Kim Pelham's 4-step process gets you into the right home at the right price. 17+ years experience.",
    images: ['/images/kim-with-client-on-couch.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/buyers',
  },
};

export default function BuyersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
