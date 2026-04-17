import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Home in Snohomish County | 102.03% Sale-to-List Ratio',
  description:
    "Kim Pelham's 6-step selling system consistently achieves 102.03% sale-to-list ratio vs. the 100.2% NWMLS market average. Serving Everett, Bothell, Mill Creek & more.",
  openGraph: {
    title: 'Sell Your Home in Snohomish County | 102.03% Sale-to-List Ratio',
    description:
      "Kim Pelham's 6-step selling system consistently achieves 102.03% sale-to-list ratio vs. the 100.2% NWMLS market average. Serving Everett, Bothell, Mill Creek & more.",
    images: ['/images/kim-headshot-msh.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/sellers',
  },
};

export default function SellersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
