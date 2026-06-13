import type { Metadata } from 'next';

const TITLE = 'Kim Cares: Accessibility at The Pelham Group NW | Kim Pelham';
const DESC =
  'How Kim Pelham and The Pelham Group NW approach accessibility. The brand-matched widget on every page (text size, contrast, readable font, motion controls, larger cursor) plus the Kim Cares line: text Kim directly any time the site is not working for you.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Kim Pelham accessibility',
    'accessible real estate website Snohomish',
    'WCAG Snohomish realtor',
    'low-vision house search',
    'Kim Cares accessibility',
    'SRES senior real estate Snohomish County',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://thepelhamgroupnw.com/accessibility',
    siteName: 'The Pelham Group NW',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/accessibility',
  },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
