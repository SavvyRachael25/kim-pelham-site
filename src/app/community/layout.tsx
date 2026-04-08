import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snohomish County Community | Kim Pelham Local Real Estate',
  description:
    "Kim Pelham is more than a broker — she's a Snohomish County neighbor. Discover local picks, community events, and why she loves serving this region.",
  openGraph: {
    title: 'Snohomish County Community | Kim Pelham Local Real Estate',
    description:
      "Kim Pelham is more than a broker — she's a Snohomish County neighbor. Discover local picks, community events, and why she loves serving this region.",
    images: ['/images/lifestyle-01-farmers-market.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/community',
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
