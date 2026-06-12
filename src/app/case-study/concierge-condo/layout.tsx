import type { Metadata } from 'next';

const TITLE =
  'Concierge Condo Case Study · Out-of-State Owners, Top-Dollar Sale | Kim Pelham';
const DESC =
  'A real Pelham Group concierge case study: two homeowners moved out of state mid-prep, and we still got them top dollar for their condo. Before and after photos, the full timeline, and what we actually did to bridge the distance. By Kim Pelham, The Pelham Group NW, Snohomish County.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'condo concierge service',
    'pre-sale prep Snohomish County',
    'home staging Everett',
    'out of state home sale',
    'Pelham Group concierge',
    'condo before after',
    'pre-listing renovation case study',
    'Kim Pelham',
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/case-study/concierge-condo',
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/hero-02-warm-kitchen.jpg',
        width: 1200,
        height: 630,
        alt: 'Concierge condo case study by Kim Pelham, The Pelham Group NW',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://thepelhamgroupnw.com/images/hero-02-warm-kitchen.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/case-study/concierge-condo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
