import type { Metadata } from 'next';
import { FAQS } from './faqs';

const URL = 'https://thepelhamgroupnw.com/blog/assumable-mortgage-washington';
const IMG = 'https://thepelhamgroupnw.com/images/kim-with-client-on-couch.jpg';
const TITLE = 'Assumable Loan in Washington: How First-Time Buyers Got 5.125% | Kim Pelham';
const HEADLINE = 'Assumable Loans in Washington: How My Buyers Got 5.125%';
const DESC =
  'An assumable mortgage in Washington, start to finish: Kim Pelham’s first-time buyers took over the seller’s VA loan at 5.125% while new loans were at 7.49%. Payment $2756 instead of $3100 on a $455,000 home. Which loans are assumable (FHA, VA, USDA) and the catch.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'assumable loan',
    'assumable mortgage Washington',
    'assumable VA loan',
    'assumable loan Snohomish County',
    'FHA assumable loan Washington',
    'VA loan assumption Washington',
    'take over seller low interest rate',
    'buy a house pay less than rent Washington',
    'first time home buyer Everett',
    'Kim Pelham',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    images: [{ url: IMG, width: 1024, height: 683, alt: 'Kim Pelham talking with a client at home' }],
    type: 'article',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-10-01T09:00:00-07:00',
    modifiedTime: '2026-10-28T09:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Buyer Strategy',
    tags: ['assumable loan', 'assumable mortgage', 'FHA', 'VA loan', 'first time buyer', 'interest rates', 'Snohomish County'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [IMG],
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function AssumableLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: HEADLINE,
    description: DESC,
    image: { '@type': 'ImageObject', url: IMG, width: 1024, height: 683 },
    datePublished: '2026-10-01T09:00:00-07:00',
    dateModified: '2026-10-28T09:00:00-07:00',
    author: {
      '@type': 'Person',
      '@id': 'https://thepelhamgroupnw.com/#kim',
      name: 'Kim Pelham',
      url: 'https://thepelhamgroupnw.com/about',
      jobTitle: 'Real Estate Broker',
      sameAs: ['https://www.linkedin.com/in/kimpelham/'],
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://thepelhamgroupnw.com/#organization',
      name: 'The Pelham Group NW',
      sameAs: ['https://www.facebook.com/PelhamGroupNW'],
    },
    url: URL,
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    articleSection: 'Buyer Strategy',
    keywords:
      'assumable loan, assumable mortgage, FHA assumption, VA loan assumption, USDA, interest rates, first time buyer, Snohomish County, King County, Washington',
    inLanguage: 'en-US',
    about: [
      { '@type': 'Place', name: 'Snohomish County, Washington' },
      { '@type': 'Thing', name: 'Assumable mortgage' },
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
      {children}
    </>
  );
}
