import type { Metadata } from "next";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";
import IntroAnimation from "@/components/IntroAnimation";
import Analytics from "@/components/Analytics";
import MobileListingsPopup from "@/components/MobileListingsPopup";
import ListingsLeadPopup from "@/components/ListingsLeadPopup";
import OpenHouseBanner from "@/components/OpenHouseBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";

/*
  LCP optimization: self-host the three brand fonts via next/font/google.
  next/font downloads the woff2 files at build time, serves them from the
  same origin (no extra DNS + TLS handshakes), and injects preload tags
  with `font-display: swap` automatically. Replaces the external <link>
  to fonts.googleapis.com which was render-blocking on slow 4G.
*/
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwritten",
  display: "swap",
  // Was preload:false as an LCP optimization, but the swap-in delay made
  // every handwritten accent across the site render in the system cursive
  // fallback (Snell Roundhand on Mac, Comic Sans on Windows, ugly either
  // way) for the first 200-400ms. Caveat IS the brand. Preload it.
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://thepelhamgroupnw.com"
  ),
  title: "Kim Pelham | Snohomish County Real Estate Broker | Everett, Bothell, Mill Creek WA",
  description:
    "Kim Pelham is a Snohomish County real estate broker based in Everett, WA, serving Bothell, Snohomish, Mill Creek, Lake Stevens, Marysville and Mukilteo. 17 years of experience. 102.3% sale-to-list ratio versus 100.2% NWMLS market average. Maximum two active buyers at a time. Best of Snohomish County 2023 and 2024.",
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
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${inter.variable} ${caveat.variable}`}
    >
      <head>
        {/*
          Fonts are now handled by next/font/google (see top of this file).
          That gives us:
            - Self-hosted woff2 served from the same origin as HTML
            - Automatic <link rel="preload"> for the primary subsets
            - font-display: swap baked in
          Net effect: no render-blocking external stylesheet, faster LCP.

          The hero image preload was removed because Next.js Image with
          `priority` auto-injects a more accurate <link rel="preload">
          (with imagesrcset for the actual served variants), which made
          the manual preload here a double-fetch of the source JPG.
        */}
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
                  "description": "Kim Pelham is a Snohomish County real estate broker with 17 years of experience and a 102.3% sale-to-list ratio. She works with a maximum of two active buyers at a time and is a Senior Real Estate Specialist (SRES). Best of Snohomish County 2023 and 2024.",
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
                  "identifier": {
                    "@type": "PropertyValue",
                    "propertyID": "Wikidata",
                    "value": "Q139812411"
                  },
                  "sameAs": [
                    "https://www.wikidata.org/wiki/Q139812411",
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
                  "description": "Kim Pelham is a Snohomish County real estate broker based in Everett, WA. 17 years of experience, 102.3% sale-to-list ratio versus the 100.2% NWMLS market average, and a maximum of two active buyers at a time. Services include residential buying, listing and selling, in-house home staging, and senior real estate transitions across Everett, Bothell, Snohomish, Mill Creek, Lake Stevens, Marysville and Mukilteo.",
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
                      "name": "Washington State Department of Licensing Real Estate Broker License Lookup",
                      "url": "https://professionals.dol.wa.gov/s/license-lookup"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "The Daily Herald Best of Snohomish County",
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
                  "makesOffer": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Home Listing & Sale",
                        "description": "Full-service home selling in Snohomish County. Pricing strategy, in-house staging, professional photography with Matterport 3D tours, full digital and physical marketing, and negotiation. 102.3% average sale-to-list ratio.",
                        "url": "https://thepelhamgroupnw.com/sellers",
                        "areaServed": "Snohomish County, WA",
                        "provider": { "@id": "https://thepelhamgroupnw.com/#business" }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Buyer Representation",
                        "description": "Snohomish County buyer agent services including search, evaluation, offer strategy, and closing. Two-client-max policy means every property walk is in person with Kim Pelham.",
                        "url": "https://thepelhamgroupnw.com/buyers",
                        "areaServed": "Snohomish County, WA",
                        "provider": { "@id": "https://thepelhamgroupnw.com/#business" }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "In-House Home Staging",
                        "description": "Psychology-driven home staging done in-house by Kim Pelham, included with every Pelham Group NW listing. No outsourced staging fees. Designed to create emotional attachment between buyers and the home.",
                        "url": "https://thepelhamgroupnw.com/staging",
                        "areaServed": "Snohomish County, WA",
                        "provider": { "@id": "https://thepelhamgroupnw.com/#business" }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Senior Real Estate Specialist (SRES) Services",
                        "description": "Senior moves and downsizing concierge service. Coordinates move timeline, staging, donation logistics, document handling, and family communication. Kim Pelham holds the SRES designation from the National Association of Realtors.",
                        "url": "https://thepelhamgroupnw.com/senior-services",
                        "areaServed": "Snohomish County, WA",
                        "provider": { "@id": "https://thepelhamgroupnw.com/#business" }
                      }
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://thepelhamgroupnw.com/#organization",
                  "name": "The Pelham Group NW",
                  "legalName": "The Pelham Group NW",
                  "url": "https://thepelhamgroupnw.com",
                  "logo": "https://thepelhamgroupnw.com/images/kim-headshot-msh.jpg",
                  "founder": { "@id": "https://thepelhamgroupnw.com/#kim" },
                  "member": { "@id": "https://thepelhamgroupnw.com/#kim" },
                  "areaServed": [
                    {"@type": "AdministrativeArea", "name": "Snohomish County, WA"},
                    {"@type": "AdministrativeArea", "name": "King County, WA"},
                    {"@type": "AdministrativeArea", "name": "Pierce County, WA"},
                    {"@type": "AdministrativeArea", "name": "Skagit County, WA"}
                  ],
                  "parentOrganization": {
                    "@type": "Organization",
                    "name": "Katrina Eileen Real Estate",
                    "url": "https://katrinaeileen.com"
                  },
                  "identifier": {
                    "@type": "PropertyValue",
                    "propertyID": "Wikidata",
                    "value": "Q139813050"
                  },
                  "sameAs": [
                    "https://www.wikidata.org/wiki/Q139813050",
                    "https://www.facebook.com/PelhamGroupNW",
                    "https://www.instagram.com/pelhamgroupnw/",
                    "https://www.linkedin.com/in/kimpelham/",
                    "https://www.youtube.com/channel/UCfDuJ0P0qccTvYOKbR4AZWA",
                    "https://www.google.com/search?q=The+Pelham+Group+NW+Everett+WA"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://thepelhamgroupnw.com/#website",
                  "url": "https://thepelhamgroupnw.com",
                  "name": "The Pelham Group NW",
                  "description": "Kim Pelham, Snohomish County real estate broker. 17 years experience, 102.3% sale-to-list ratio, maximum two active buyers at a time.",
                  "publisher": { "@id": "https://thepelhamgroupnw.com/#organization" },
                  "inLanguage": "en-US"
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
                      "name": "Washington State Department of Licensing Real Estate Broker License Lookup",
                      "url": "https://professionals.dol.wa.gov/s/license-lookup"
                    },
                    {
                      "@type": "CreativeWork",
                      "name": "The Daily Herald Best of Snohomish County",
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
                  "identifier": {
                    "@type": "PropertyValue",
                    "propertyID": "Wikidata",
                    "value": "Q139813050"
                  },
                  "sameAs": [
                    "https://www.wikidata.org/wiki/Q139813050",
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
        <OpenHouseBanner />
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
        {/* Site-wide listings lead-magnet popup — name + phone, captures first-look list */}
        <ListingsLeadPopup />
        {/* Brand-matched accessibility widget — floating bottom-left, settings persist */}
        <AccessibilityWidget />
        {/* Analytics & attribution — gated on env vars, no-op until configured */}
        <Analytics />
        {/* Vercel Analytics — first-party traffic + Web Vitals, no config needed */}
        <VercelAnalytics />
        {/* Umami — privacy-friendly product analytics, cookieless */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="3fc3eb60-38d2-41b2-a52e-511704cb8fcf"
          strategy="afterInteractive"
        />
        {/* Microsoft Clarity — session replay + heatmaps, project x209s3f534 */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x209s3f534");`}
        </Script>
        {/* Meta Pixels — fires to both Savvy and Pelham ad accounts */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '426526406973253');
          fbq('init', '1360835299238719');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=426526406973253&ev=PageView&noscript=1"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1360835299238719&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
