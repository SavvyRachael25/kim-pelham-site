import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Properties | Kim Pelham Snohomish County Real Estate',
  description:
    "Browse featured listings in Everett, Bothell, Mill Creek, Snohomish, and Lake Stevens. View full MLS search on Kim's Katrina Eileen profile.",
  openGraph: {
    title: 'Featured Properties | Kim Pelham Snohomish County Real Estate',
    description:
      "Browse featured listings in Everett, Bothell, Mill Creek, Snohomish, and Lake Stevens. View full MLS search on Kim's Katrina Eileen profile.",
    images: ['/images/property-01-everett-home-exterior.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/properties',
  },
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
