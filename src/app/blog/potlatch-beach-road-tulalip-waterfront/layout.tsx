import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A $3 Million View for Under a Million — Potlatch Beach Road, Tulalip | Kim Pelham',
  description:
    'Seattle waterfront costs $3M+. This Puget Sound waterfront in Tulalip is under $1M. Same Sound, same sunsets, different price tag. 1406 Potlatch Beach Road — listed by Kim Pelham, The Pelham Group NW.',
  openGraph: {
    title: 'A $3 Million View for Under a Million — Potlatch Beach Road, Tulalip',
    description:
      'Seattle waterfront costs $3M+. This Puget Sound waterfront in Tulalip is under $1M. Same Sound, same sunsets, different price tag.',
    images: [{ url: '/images/potlatch-01-aerial.jpg', width: 1536, height: 1152 }],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
  },
};

export default function PotlatchBlogLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'A $3 Million View for Under a Million — Potlatch Beach Road, Tulalip',
    description:
      'Seattle waterfront costs $3M+. This Puget Sound high-bank waterfront in Tulalip is under $1M. Same Sound, same sunsets, radically different price tag. Here is the full story on 1406 Potlatch Beach Road.',
    image: 'https://thepelhamgroupnw.com/images/property-03-lake-stevens-waterfront.jpg',
    datePublished: '2026-04-17',
    dateModified: '2026-04-17',
    author: {
      '@type': 'Person',
      name: 'Kim Pelham',
      url: 'https://thepelhamgroupnw.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Pelham Group NW',
      url: 'https://thepelhamgroupnw.com',
    },
    url: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
    mainEntityOfPage: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
    keywords: [
      'Potlatch Beach Road',
      'Tulalip waterfront homes',
      'Snohomish County waterfront',
      'homes for sale Tulalip WA',
      'Puget Sound waterfront',
      'Kim Pelham',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the average home price on Potlatch Beach Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Potlatch Beach Road waterfront homes in Tulalip, WA typically list in the $800K to $1.2M range depending on lot size, condition, and water access type. High-bank waterfront properties like 1406 Potlatch Beach Road with sweeping Sound views command a premium compared to non-waterfront homes in the same ZIP code. For current pricing on active listings, contact Kim Pelham at The Pelham Group NW.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Tulalip from Seattle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tulalip is approximately 35 miles north of Seattle. The drive via I-5 takes about 40 to 50 minutes without traffic. During weekday rush hour, expect 60 to 75 minutes southbound. Tulalip is much closer to Everett, about 15 to 20 minutes south on I-5, which makes it practical for buyers working in the Snohomish County employment corridor.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tulalip a good place to buy waterfront property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, and it is significantly undervalued compared to waterfront alternatives south of it. Comparable Sound views in Edmonds, Mukilteo, or Shoreline would cost $2M to $4M. Tulalip delivers similar water frontage and sunsets at a fraction of the price. The community is quiet, the Tulalip Tribe maintains significant surrounding land, and the Tulalip Bay estuary provides genuine natural surroundings. Buyers who prioritize views and value over zip code prestige consistently find Tulalip compelling.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the property taxes in Tulalip WA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property tax rates in Tulalip (ZIP 98271, Snohomish County) run approximately 0.9% to 1.1% of assessed value annually. On a $899,900 property, expect roughly $8,100 to $9,900 per year. Snohomish County property taxes are generally lower than King County rates for comparable assessed values. For precise current tax figures on a specific parcel, verify with the Snohomish County Assessor at snohomishcountywa.gov.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thepelhamgroupnw.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Waterfront Living on Potlatch Beach Road',
        item: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
      },
    ],
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
