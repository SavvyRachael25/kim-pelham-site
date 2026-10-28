import type { Metadata } from 'next';
import { FAQS, MUSE_URL } from './faqs';

const TITLE = 'Filming The American Dream TV at The Muse in Everett | The Pelham Group NW';
const DESC =
  'Kim Pelham filmed her first two segments for The American Dream TV: The Muse Whiskey & Coffee in the 1923 Weyerhaeuser Building on the Everett waterfront, then 100+ Women Who Care About Snohomish County, where Project Girl Mentoring Program in Lynnwood was the winner.';
const URL = 'https://thepelhamgroupnw.com/blog/american-dream-tv-the-muse-everett';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'The American Dream TV Snohomish County',
    'Kim Pelham American Dream TV',
    'The Muse Whiskey & Coffee Everett',
    'Weyerhaeuser Building Everett',
    '100+ Women Who Care About Snohomish County',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'The Pelham Group NW',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/blog/adtv-muse-2026-10/kim-adtv-muse-5110.jpg',
        width: 900,
        height: 1600,
        alt: 'Kim Pelham on camera for The American Dream TV on the Everett waterfront',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: URL,
  },
};

const IMG = 'https://thepelhamgroupnw.com/images/blog/adtv-muse-2026-10/kim-adtv-muse-5110.jpg';
const REEL = 'https://www.instagram.com/reel/DehqDRJvXst/';

export default function AdtvMuseLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Filming The American Dream TV at The Muse in Everett',
    description: DESC,
    image: { '@type': 'ImageObject', url: IMG, width: 900, height: 1600 },
    datePublished: '2026-10-22T15:00:00-07:00',
    dateModified: '2026-10-22T15:00:00-07:00',
    author: {
      '@type': 'Person',
      '@id': 'https://thepelhamgroupnw.com/#kim',
      name: 'Kim Pelham',
      url: 'https://thepelhamgroupnw.com/about',
      jobTitle: 'Real Estate Broker',
      sameAs: ['https://www.linkedin.com/in/kimpelham/', 'https://www.instagram.com/pelhamgroupnw/'],
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://thepelhamgroupnw.com/#organization',
      name: 'The Pelham Group NW',
      sameAs: ['https://www.facebook.com/PelhamGroupNW'],
    },
    url: URL,
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    articleSection: 'Community Spotlight',
    keywords:
      'The American Dream TV, Snohomish County, Everett, The Muse Whiskey & Coffee, Weyerhaeuser Building, Everett waterfront, 100+ Women Who Care About Snohomish County, Kim Pelham',
    inLanguage: 'en-US',
    video: {
      '@type': 'VideoObject',
      name: 'Shoot day at The Muse Whiskey & Coffee',
      description: 'Kim Pelham filming The American Dream TV at The Muse Whiskey & Coffee in Everett, Washington.',
      thumbnailUrl: IMG,
      uploadDate: '2026-10-15T12:04:40-07:00',
      embedUrl: `${REEL}embed`,
      url: REEL,
    },
    about: [
      {
        '@type': 'LocalBusiness',
        name: 'The Muse Whiskey & Coffee',
        url: MUSE_URL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '615 Millwright Loop N',
          addressLocality: 'Everett',
          addressRegion: 'WA',
          postalCode: '98201',
          addressCountry: 'US',
        },
      },
      { '@type': 'Organization', name: '100+ Women Who Care About Snohomish County' },
      { '@type': 'TVSeries', name: 'The American Dream TV' },
    ],
    contentLocation: { '@type': 'Place', name: 'Everett, Washington' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thepelhamgroupnw.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'Filming The American Dream TV at The Muse in Everett', item: URL },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
