import type { Metadata } from 'next';

const TITLE =
  'Common Questions about Buying or Selling in Snohomish County | Kim Pelham';
const DESC =
  'Plain-English answers to the questions buyers and sellers in Snohomish County actually ask Kim Pelham. Pricing, staging, the concierge service, SRES senior moves, out-of-state sales, and how to reach Kim directly.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Snohomish County real estate FAQ',
    'Kim Pelham questions',
    'Pelham Group concierge service',
    'how much is my home worth Snohomish',
    'sell home from out of state Washington',
    'senior real estate Snohomish',
    'SRES Snohomish County',
    'Daily Herald Best Realtor',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/faq',
    siteName: 'The Pelham Group NW',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
