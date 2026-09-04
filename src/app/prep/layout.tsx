import type { Metadata } from 'next';

const TITLE = 'Get Your House Ready to Sell | Repairs, Staging, and the Move | Kim Pelham';
const DESC =
  'Repairs, remodeling, staging, and the move, handled by one person who is also the broker selling your home. Affordable staging with no monthly furniture rental fee, in Snohomish County.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['pre-listing repairs Snohomish County', 'home staging Everett WA', 'get house ready to sell', 'concierge home prep', 'stage occupied home Everett'],
  openGraph: {
    title: 'Your house needs work first. You should not have to manage five vendors.',
    description: 'Repairs, staging, and the move, handled by one person who is also the broker selling it.',
    images: [{ url: 'https://thepelhamgroupnw.com/images/kim-with-client-on-couch.jpg', width: 1024, height: 683, alt: 'Kim Pelham with a client' }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/prep',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/prep' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
