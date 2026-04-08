import type { Metadata } from "next";
import "./globals.css";
import IntroAnimation from "@/components/IntroAnimation";
import NewsletterPopup from "@/components/NewsletterPopup";

export const metadata: Metadata = {
  title: "Kim Pelham | Snohomish County Real Estate Broker | Everett, Bothell, Mill Creek WA",
  description:
    "Kim Pelham is a Snohomish County real estate broker serving Everett, Bothell, Snohomish, Mill Creek, Lake Stevens & Marysville WA. 14 years of experience, 104.4% sale-to-list ratio, and a two-buyer-max policy.",
  openGraph: {
    title: "Kim Pelham | Snohomish County Real Estate Broker",
    description:
      "Snohomish County real estate broker helping buyers and sellers in Everett, Bothell, Mill Creek, Snohomish, Lake Stevens and Marysville WA.",
    images: ["/images/hero-01-aerial-neighborhood.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Pelham | Snohomish County Real Estate Broker",
    description: "Your trusted Pacific Northwest real estate broker. 14 years experience. 104.4% sale-to-list ratio.",
    images: ["/images/kim-headshot-msh.jpg"],
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
                  "@id": "https://kim-pelham-site.vercel.app/#agent",
                  "name": "Kim Pelham",
                  "description": "Snohomish County real estate broker with 14 years of experience. Specializing in residential buying, selling, staging, and senior transitions across Everett, Bothell, Mill Creek, and the greater Snohomish County area.",
                  "url": "https://kim-pelham-site.vercel.app",
                  "telephone": "+14252509422",
                  "image": "https://kim-pelham-site.vercel.app/images/kim-headshot-msh.jpg",
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
                  "@id": "https://kim-pelham-site.vercel.app/#business",
                  "name": "Kim Pelham - The Pelham Group NW",
                  "description": "Full-service real estate brokerage serving Snohomish County, WA",
                  "url": "https://kim-pelham-site.vercel.app",
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
                    "reviewCount": "47",
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
        <NewsletterPopup />
      </body>
    </html>
  );
}
