import type { Metadata } from 'next';

const TITLE = 'Down Payment Assistance in Snohomish County: What Actually Exists in 2026 | Kim Pelham';
const DESC =
  'Washington State down payment assistance in 2026, explained by Snohomish County broker Kim Pelham: WSHFC Home Advantage, the Opportunity program, and the Covenant Homeownership Program, plus the homebuyer education requirement and how a buyer with $2,000 once became a homeowner.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'down payment assistance Washington State',
    'down payment assistance Snohomish County',
    'WSHFC Home Advantage',
    'Covenant Homeownership Program',
    'first time home buyer Snohomish County',
    'zero down home loan Washington',
    'Kim Pelham broker',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Down Payment Assistance in Snohomish County: What Actually Exists in 2026',
    description:
      'The real Washington DPA programs, who qualifies, and the story of a buyer who started with $2,000.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/hero-03-porch-connection.jpg',
        width: 1200,
        height: 630,
        alt: 'A front porch of a Snohomish County home',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/down-payment-assistance-snohomish-county',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Buyer Guides',
    tags: ['down payment assistance', 'first-time buyers', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/down-payment-assistance-snohomish-county',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
