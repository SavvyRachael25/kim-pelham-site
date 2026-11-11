import type { Metadata } from 'next';

// Sign-up page for The Pelham Post. The comment-to-DM automation on Kim's
// Instagram and Facebook sends people here. Tags newsletter-signup, which
// starts the 3-email welcome series (PP Newsletter Welcome workflow).
export const metadata: Metadata = {
  title: 'Get The Pelham Post | Kim Pelham, The Pelham Group NW',
  description: 'The Pelham Post is Kim Pelham’s email from Snohomish County: the market in plain numbers, a local pick, and a note from Lucy, the office dog.',
  alternates: { canonical: 'https://thepelhamgroupnw.com/pelham-post' },
  openGraph: {
    title: 'Get The Pelham Post',
    description: 'The market in plain numbers, a local pick, and a note from Lucy, the office dog.',
    images: [{ url: 'https://thepelhamgroupnw.com/images/lucy-jump.jpg', width: 1040, height: 693, alt: 'Lucy the office dog clearing an agility hurdle' }],
    url: 'https://thepelhamgroupnw.com/pelham-post',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
