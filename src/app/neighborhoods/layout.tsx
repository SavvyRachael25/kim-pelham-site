import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snohomish County Neighborhoods | Everett, Bothell, Mill Creek & More',
  description:
    "Explore Snohomish County's most desirable neighborhoods with local expert Kim Pelham. From Everett's waterfront to Bothell's main street  -  find your perfect community.",
  openGraph: {
    title: 'Snohomish County Neighborhoods | Everett, Bothell, Mill Creek & More',
    description:
      "Explore Snohomish County's most desirable neighborhoods with local expert Kim Pelham. From Everett's waterfront to Bothell's main street  -  find your perfect community.",
    images: ['/images/neighborhood-01-everett-marina.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/neighborhoods',
  },
};

export default function NeighborhoodsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
