import type { Metadata } from "next";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import "./globals.css";
import IntroAnimation from "@/components/IntroAnimation";
import Analytics from "@/components/Analytics";
import MobileListingsPopup from "@/components/MobileListingsPopup";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://thepelhamgroupnw.com"
  ),
  title: "Kim Pelham | Snohomish County Real Estate Broker | Everett, Bothell, Mill Creek WA",
  description:
    "Kim Pelham is a Snohomish County real estate broker based in Everett, WA, serving Bothell, Snohomish, Mill Creek, Lake Stevens, Marysville and Mukilteo. 17 years of experience. 102.3% sale-to-list ratio versus 100.2% NWMLS market average. Maximum two active clients at a time. Best of Snohomish County 2023 and 2024.",
  openGraph: {
    title: "Kim Pelham | Snohomish County Real Estate Broker",
    description:
      "Snohomish County real estate broker helping buyers and sellers in Everett, Bothell, Mill Creek, Snohomish, Lake Stevens and Marysville WA.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Kim Pelham | Snohomish County Real Estate Broker" }],
    type: "website",
    url: "https://thepelhamgroupnw.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Pelham | Snohomish County Real Estate Broker",
    description: "Your trusted Pacific Northwest real estate broker. 17+ years experience. 102.3% sale-to-list ratio.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*
          AEO/LCP: explicit preload for the hero image. Next.js Image with
          priority already injects a preload, but the audit (Savvy AEO,
          2026-05-13) flagged mobile LCP at 50/100. Belt-and-suspenders
          preload here pushes the hero into the browser's prefetch queue
          before any other resource is parsed.
        */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-01-aerial-neighborhood.jpg"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://thepelhamgroupnw.com/#kim",
                  "name": "Kim Pelham",
                  "givenName": "Kim",
                  "familyName": "Pelham",
                  "description": "Kim Pelham is a Snohomish County real estate broker with 17 years of experience and a 102.3% sale-to-list ratio. She works with a maximum of two active clients at a time and is a Senior Real Estate Specialist (SRES). Best of Snohomish County 2023 and 2024.",
                  "url": "https://thepelhamgroupnw.com/about",
                  "mainEntityOfPage": "https://thepelhamgroupnw.com/about",
                  "image": "https://thepelhamgroupnw.com/images/kim-headshot-msh.jpg",
                  "telephone": "+14252509422",
                  "email": "hello@thepelhamgroupnw.com",
                  "jobTitle": "Real Estate Broker",
                  "knowsLanguage": "en",
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "certification",
                      "name": "Senior Real Estate Specialist (SRES)"
                    }
                  ],
                  "homeLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Snohomish County",
                      "addressRegion": "WA",
                      "addressCountry": "US"
                    }
                  },
                  "worksFor": { "@id": "https://thepelhamgroupnw.com/#business" },
                  "sameAs": [
                    "https://www.facebook.com/PelhamGroupNW",
                    "https://www.instagram.com/pelhamgroupnw/",
                    "https://www.linkedin.com/in/kimpelham/",
                    "https://www.youtube.com/channel/UCfDuJ0P0qccTvYOKbR4AZWA",
                    "https://www.zillow.com/profile/kimpelham",
                    "https://community.katrinaeileen.com/team/kim-pelham"
                  ]
                },
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://thepelhamgroupnw.com/#agent",
                  "name": "Kim Pelham",
                  "alternateName": "Kim Pelham, The Pelham Group NW",
                  "description": "Kim Pelham is a Snohomish County real estate broker based in Everett, WA. 17 years of experience, 102.3% sale-to-list ratio versus the 100.2% NWMLS market average, and a maximum of two active clients at a time. Services include residential buying, listing and selling, in-house home staging, and senior real estate transitions across Everett, Bothell, Snohomish, Mill Creek, Lake Stevens, Marysville and Mukilteo.",
                  "url": "https://thepelhamgroupnw.com",
                  "mainEntityOfPage": "https://thepelhamgroupnw.com",
                  "telephone": "+14252509422",
                  "email": "hello@thepelhamgroupnw.com",
                  "image": "https://thepelhamgroupnw.com/images/kim-headshot-msh.jpg",
                  "jobTitle": "Real Estate Broker",
                  "priceRange": "$$$",
                  "currenciesAccepted": "USD",
                  "paymentAccepted": "Cash, Check, Wire Transfer",
                  "knowsAbout": [
                    "residential real estate",
                    "home buying",
                    "home selling",
                    "home staging",
                    "senior real estate transitions",
                    "downsizing",
                    "waterfront property",
                    "Snohomish County real estate market",
                    "Everett real estate",
                    "Mukilteo waterfront",
                    "Mill Creek family homes"
                  ],
                  "award": [
                    "Best of Snohomish County 2023",
                    "Best of Snohomish County 2024",
                    "Best of Zillow"
                  ],
                  "hasCredential": "SRES - Senior Real Estate Specialist",
                  "areaServed": [
                    {"@type": "City", "name": "Everett", "addressRegion": "WA"},
                    {"@type": "City", "name": "Bothell", "addressRegion": "WA"},
                    {"@type": "City", "name": "Mill Creek", "addressRegion": "WA"},
                    {"@type": "City", "name": "Snohomish", "addressRegion": "WA"},
                    {"@type": "City", "name": "Lake Stevens", "addressRegion": "WA"},
                    {"@type": "City", "name": "Marysville", "addressRegion": "WA"},
                    {"@type": "City", "name": "Mukilteo", "addressRegion": "WA"},
                    {"@type": "AdministrativeArea", "name": "Snohomish County", "addressRegion": "WA"}
                  ],
                  "memberOf": {
                    "@type": "Organization",
                    "name": "Northwest Multiple Listing Service (NWMLS)"
                  },
                  "parentOrganization": {
                    "@type": "Organization",
                    "name": "Katrina Eileen Real Estate"
                  },
                  "citation": [
                    {
                      "@type": "CreativeWork",
                      "name": "NWMLS Market Statistics",
                      "url": "https://www.nwmls.com/discover/news-and-statistics/"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "Washington State Department of Licensing — Real Estate Broker License Lookup",
                      "url": "https://professionals.dol.wa.gov/s/license-lookup"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "The Daily Herald — Best of Snohomish County",
                      "url": "https://www.heraldnet.com/"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "Google Business Profile",
                      "url": "https://www.google.com/search?q=The+Pelham+Group+NW+Everett+WA"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Sources & Citations",
                      "url": "https://thepelhamgroupnw.com/sources"
                    }
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://thepelhamgroupnw.com/#business",
                  "name": "The Pelham Group NW",
                  "alternateName": "Kim Pelham - The Pelham Group NW",
                  "description": "The Pelham Group NW is a Snohomish County real estate practice led by broker Kim Pelham. Services include residential listing and selling, buyer representation, in-house home staging, and senior real estate transitions. 17 years of experience, 102.3% average sale-to-list ratio.",
                  "url": "https://thepelhamgroupnw.com",
                  "telephone": "+14252509422",
                  "email": "hello@thepelhamgroupnw.com",
                  "image": "https://thepelhamgroupnw.com/images/kim-headshot-msh.jpg",
                  "priceRange": "$$$",
                  "currenciesAccepted": "USD",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2815 Baker Ave, Suite 201",
                    "addressLocality": "Everett",
                    "addressRegion": "WA",
                    "postalCode": "98201",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 47.9785,
                    "longitude": -122.2098
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                      "opens": "08:00",
                      "closes": "20:00",
                      "description": "By appointment, including evenings and weekends."
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "40",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "founder": { "@id": "https://thepelhamgroupnw.com/#kim" },
                  "employee": { "@id": "https://thepelhamgroupnw.com/#kim" },
                  "areaServed": [
                    {"@type": "City", "name": "Everett", "addressRegion": "WA"},
                    {"@type": "City", "name": "Bothell", "addressRegion": "WA"},
                    {"@type": "City", "name": "Mill Creek", "addressRegion": "WA"},
                    {"@type": "City", "name": "Snohomish", "addressRegion": "WA"},
                    {"@type": "City", "name": "Lake Stevens", "addressRegion": "WA"},
                    {"@type": "City", "name": "Marysville", "addressRegion": "WA"},
                    {"@type": "City", "name": "Mukilteo", "addressRegion": "WA"},
                    {"@type": "AdministrativeArea", "name": "Snohomish County", "addressRegion": "WA"}
                  ],
                  "citation": [
                    {
                      "@type": "CreativeWork",
                      "name": "NWMLS Market Statistics",
                      "url": "https://www.nwmls.com/discover/news-and-statistics/"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "Washington State Department of Licensing — Real Estate Broker License Lookup",
                      "url": "https://professionals.dol.wa.gov/s/license-lookup"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "The Daily Herald — Best of Snohomish County",
                      "url": "https://www.heraldnet.com/"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "Google Business Profile",
                      "url": "https://www.google.com/search?q=The+Pelham+Group+NW+Everett+WA"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Sources & Citations",
                      "url": "https://thepelhamgroupnw.com/sources"
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com/PelhamGroupNW",
                    "https://www.instagram.com/pelhamgroupnw/",
                    "https://www.linkedin.com/in/kimpelham/",
                    "https://www.youtube.com/channel/UCfDuJ0P0qccTvYOKbR4AZWA",
                    "https://www.zillow.com/profile/kimpelham",
                    "https://community.katrinaeileen.com/team/kim-pelham",
                    "https://www.google.com/search?q=The+Pelham+Group+NW+Everett+WA"
                  ]
                }
              ]
            })
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <IntroAnimation>
          <div id="main-content">{children}</div>
        </IntroAnimation>
        {/* GHL Chat Widget — Kim Pelham branded widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e29c13141137f36a3cd275"
          strategy="afterInteractive"
        />
        {/* Mobile-only listings promo popup — auto-shows after 4s, links to /properties */}
        <MobileListingsPopup />
        {/* Analytics & attribution — gated on env vars, no-op until configured */}
        <Analytics />
        {/* Vercel Analytics — first-party traffic + Web Vitals, no config needed */}
        <VercelAnalytics />
      </body>
    </html>
  );
}
