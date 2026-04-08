import type { Metadata } from "next";
import "./globals.css";
import IntroAnimation from "@/components/IntroAnimation";

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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <IntroAnimation>
          <div id="main-content">{children}</div>
        </IntroAnimation>
      </body>
    </html>
  );
}
