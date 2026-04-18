import type { Metadata } from 'next';
import { neighborhoods, neighborhoodSlugs } from '@/data/neighborhoods';

export function generateStaticParams() {
  return neighborhoodSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoods[slug];

  if (!neighborhood) {
    return {
      title: 'Neighborhood Not Found | Kim Pelham | The Pelham Group NW',
    };
  }

  const { name, image } = neighborhood;

  return {
    title: `${name} Homes for Sale | Kim Pelham | The Pelham Group NW`,
    description: `Looking for homes in ${name}, WA? Kim Pelham with The Pelham Group NW specializes in ${name} real estate. 17+ years experience, 102% sale-to-list ratio. Call (425) 250-9422.`,
    openGraph: {
      title: `${name} Homes for Sale | Kim Pelham | The Pelham Group NW`,
      description: `Looking for homes in ${name}, WA? Kim Pelham with The Pelham Group NW specializes in ${name} real estate. 17+ years experience, 102% sale-to-list ratio. Call (425) 250-9422.`,
      images: [{ url: image }],
      type: 'website',
      url: `https://thepelhamgroupnw.com/neighborhoods/${slug}`,
    },
    alternates: {
      canonical: `https://thepelhamgroupnw.com/neighborhoods/${slug}`,
    },
  };
}

export default async function NeighborhoodSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = neighborhoods[slug];

  if (!neighborhood) {
    return <>{children}</>;
  }

  const { name, description, faqs, geo, zipCodes } = neighborhood;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thepelhamgroupnw.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Neighborhoods',
        item: 'https://thepelhamgroupnw.com/neighborhoods',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: name,
        item: `https://thepelhamgroupnw.com/neighborhoods/${slug}`,
      },
    ],
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${name}, WA`,
    description: description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.lat,
      longitude: geo.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: name,
      addressRegion: 'WA',
      postalCode: zipCodes[0],
      addressCountry: 'US',
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Snohomish County',
      containedInPlace: {
        '@type': 'State',
        name: 'Washington',
      },
    },
    url: `https://thepelhamgroupnw.com/neighborhoods/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      {children}
    </>
  );
}
