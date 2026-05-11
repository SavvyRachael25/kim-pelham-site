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
    "Kim Pelham is a Snohomish County real estate broker serving Everett, Bothell, Snohomish, Mill Creek, Lake Stevens & Marysville WA. 17+ years of experience, 102.3% sale-to-list ratio, and a two-buyer-max policy.",
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
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://thepelhamgroupnw.com/#agent",
                  "name": "Kim Pelham",
                  "description": "Snohomish County real estate broker with 17+ years of experience. Specializing in residential buying, selling, staging, and senior transitions across Everett, Bothell, Mill Creek, and the greater Snohomish County area.",
                  "url": "https://thepelhamgroupnw.com",
                  "telephone": "+14252509422",
                  "image": "https://thepelhamgroupnw.com/images/kim-headshot-msh.jpg",
                  "jobTitle": "Real Estate Broker",
                  "knowsAbout": ["residential real estate", "home buying", "home selling", "home staging", "senior real estate transitions", "Snohomish County real estate market"],
                  "award": ["Best of Snohomish County 2024", "Best of Zillow"],
                  "hasCredential": "SRES - Senior Real Estate Specialist",
                  "areaServed": [
                    {"@type": "City", "name": "Everett", "addressRegion": "WA"},
                    {"@type": "City", "name": "Bothell", "addressRegion": "WA"},
                    {"@type": "City", "name": "Mill Creek", "addressRegion": "WA"},
                    {"@type": "City", "name": "Snohomish", "addressRegion": "WA"},
                    {"@type": "City", "name": "Lake Stevens", "addressRegion": "WA"},
                    {"@type": "City", "name": "Marysville", "addressRegion": "WA"},
                    {"@type": "City", "name": "Mukilteo", "addressRegion": "WA"}
                  ],
                  "memberOf": {
                    "@type": "Organization",
                    "name": "The Pelham Group NW"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://thepelhamgroupnw.com/#business",
                  "name": "Kim Pelham - The Pelham Group NW",
                  "description": "Full-service real estate brokerage serving Snohomish County, WA",
                  "url": "https://thepelhamgroupnw.com",
                  "telephone": "+14252509422",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Everett",
                    "addressRegion": "WA",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 47.9790,
                    "longitude": -122.2021
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "40",
                    "bestRating": "5"
                  },
                  "sameAs": [
                    "https://www.zillow.com/profile/kimpelham",
                    "https://community.katrinaeileen.com/team/kim-pelham"
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
