import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Selling a Parent's Home in Washington: The Estate Process | Kim Pelham",
  description: "Selling a parent's home in Washington is rarely just a transaction. A Senior Move Specialist walks Snohomish County families through probate, siblings, and logistics.",
  openGraph: {
    title: "Selling a Parent's Home in Washington",
    description: "Selling a parent's home in Washington is rarely just a transaction. A Senior Move Specialist walks Snohomish County families through probate, siblings, and logistics.",
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/selling-parents-home-washington-estate-sale' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
