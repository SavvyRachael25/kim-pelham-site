import type { Metadata } from 'next';

const TITLE = 'Nine Years of Staging Homes People Still Live In | Kim Pelham';
const DESC =
  'Broker Kim Pelham has staged occupied homes in Snohomish County since 2017. Why big staging companies say no to your dog, your cat, and your kids, the psychology behind staging that sells, and the $1,200 stage that returned $5,000 on her very first project.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'home staging Snohomish County',
    'occupied home staging',
    'staging while living in your home',
    'home staging Everett WA',
    'staging ROI',
    'staging psychology',
    'Kim Pelham staging',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Nine Years of Staging Homes People Still Live In',
    description:
      'Why most staging companies refuse occupied homes, and why Kim Pelham built her staging practice around them. The psychology, the process, and the numbers.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/hero-02-warm-kitchen.jpg',
        width: 1200,
        height: 630,
        alt: 'A warm staged kitchen in a Snohomish County home',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/staging-occupied-homes-nine-years',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-18T08:00:00-07:00',
    modifiedTime: '2026-08-18T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['staging', 'occupied homes', 'seller strategy', 'Kim Pelham'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/staging-occupied-homes-nine-years',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
