import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Move Specialist Snohomish County: What to Look For When Downsizing | Kim Pelham',
  description: 'What a senior move specialist actually does, what the SRES designation covers, and what to ask before you hire. Kim Pelham has guided 30+ senior transitions in Snohomish County.',
  openGraph: {
    title: 'What to Look For in a Senior Move Specialist for the Big Transition',
    description: 'What a senior move specialist actually does, what the SRES designation covers, and what to ask before you hire. Kim Pelham has guided 30+ senior transitions in Snohomish County.',
    images: ['/images/kim-with-door-cropped.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/sres-realtor-snohomish-county' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does SRES stand for in real estate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SRES stands for Seniors Real Estate Specialist, a designation awarded by the National Association of Realtors. Earning it requires 12 or more hours of specialized training in senior housing options, reverse mortgages, downsizing psychology, and lifecycle planning. It is specifically designed for real estate professionals who work with clients aged 50 and older navigating major housing transitions."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need an SRES realtor to downsize?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The SRES designation signals that a broker has done coursework on senior housing topics, but it is not required, and experienced senior-focused brokers also work outside NAR-member brokerages, where the designation is not available. What matters most is whether the broker coordinates the full transition, not just the sale: reverse mortgage implications, estate sale coordination, and knowing which neighborhoods actually work for a 55+ lifestyle. Ask about real transitions they have guided."
                }
              },
              {
                "@type": "Question",
                "name": "What qualifications does an SRES realtor have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An SRES has completed at least 12 hours of NAR-accredited training covering senior housing options (independent living, assisted living, continuing care), reverse mortgage basics, estate coordination, and the emotional dynamics of downsizing. Maintaining the designation also requires continuing education. Beyond coursework, the best SRES brokers bring hands-on experience guiding actual families through these transitions."
                }
              },
              {
                "@type": "Question",
                "name": "How long does senior downsizing take in Washington state?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Realistically, three to six months from the decision to close. The first month is typically spent making decisions about what to keep, donate, sell, or discard. The next one to two months covers listing and selling the current home. The final one to two months is finding and closing on the new home or community. Rushing any of these stages leads to overwhelm and regret. A good senior move specialist helps you pace the process so it feels manageable."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between a senior move specialist and a regular realtor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A regular broker is trained to list and sell homes. A senior move specialist, whether trained through SRES coursework or through years of doing the work, manages a life transition that happens to involve real estate. The differences are practical: understanding reverse mortgage implications before making any pricing or timing recommendations, coordinating estate sales and donation pickups, walking through the new home floor plan before the move to make sure it works for the client's mobility and lifestyle, and knowing which neighborhoods in Snohomish County have the amenities, medical access, and community that 55+ buyers actually need."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
