import type { Metadata } from 'next';
import { reviews } from '@/data/reviews';

export const metadata: Metadata = {
  title: 'Client Reviews | 20 Five-Star Google Reviews | Kim Pelham',
  description:
    'Read 20 verified five-star Google reviews from Kim Pelham\u2019s clients across Snohomish County. Everett, Bothell, Mill Creek, Lake Stevens, Marysville, and more.',
  openGraph: {
    title: 'Client Reviews | Kim Pelham, The Pelham Group NW',
    description:
      'Read 20 verified five-star Google reviews from Kim Pelham\u2019s clients across Snohomish County.',
    images: ['/images/hero-03-porch-connection.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/testimonials',
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The Pelham Group NW',
    url: 'https://thepelhamgroupnw.com',
    telephone: '+14252509422',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Everett',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '20',
      bestRating: '5',
      worstRating: '5',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
      reviewBody: r.text,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Client Reviews', item: 'https://thepelhamgroupnw.com/testimonials' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
