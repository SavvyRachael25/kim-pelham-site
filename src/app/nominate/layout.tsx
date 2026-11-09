import type { Metadata } from 'next';

// Best of Snohomish County 2026 nominations (The Daily Herald), Nov 2 to Nov 23.
// The SMS and the Pelham Post link here. Swap the copy to "vote" on Dec 11.
export const metadata: Metadata = {
  title: 'Nominate Kim for Best of Snohomish County | The Pelham Group NW',
  description: 'Nominate Kim Pelham for Real Estate Agent in The Daily Herald Best of Snohomish County. Nominations are open through November 23, 2026.',
  alternates: { canonical: 'https://thepelhamgroupnw.com/nominate' },
  openGraph: {
    title: 'Would you nominate me for Best of Snohomish County?',
    description: 'It takes about a minute. Nominations are open through November 23.',
    images: [{ url: 'https://thepelhamgroupnw.com/images/kim-by-water.jpg', width: 1024, height: 683, alt: 'Kim Pelham on the Everett waterfront' }],
    url: 'https://thepelhamgroupnw.com/nominate',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
