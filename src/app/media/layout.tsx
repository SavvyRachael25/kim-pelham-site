import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media & Awards | Kim Pelham Real Estate Press & Recognition',
  description:
    "Best of Snohomish County 2024. Best of Zillow. 5-star reviews. See Kim Pelham's press coverage, awards, and recognition as a top Snohomish County real estate broker.",
  openGraph: {
    title: 'Media & Awards | Kim Pelham Real Estate Press & Recognition',
    description:
      "Best of Snohomish County 2024. Best of Zillow. 5-star reviews. See Kim Pelham's press coverage, awards, and recognition as a top Snohomish County real estate broker.",
    images: ['/images/best-of-snoco-2024-no-background.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/media',
  },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
