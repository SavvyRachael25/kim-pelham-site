import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Staging Services | Sell Faster & for More in Snohomish County',
  description:
    'Professional home staging by Kim Pelham helps Snohomish County sellers maximize value. Staged homes sell faster and closer to asking price  -  here\'s how Kim does it.',
  openGraph: {
    title: 'Home Staging Services | Sell Faster & for More in Snohomish County',
    description:
      'Professional home staging by Kim Pelham helps Snohomish County sellers maximize value. Staged homes sell faster and closer to asking price  -  here\'s how Kim does it.',
    images: ['/images/staging-01-living-room.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/staging',
  },
};

export default function StagingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thepelhamgroupnw.com" },
              { "@type": "ListItem", "position": 2, "name": "Home Staging Services", "item": "https://thepelhamgroupnw.com/staging" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What happens during a home staging consultation with Kim Pelham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kim walks through the home room by room, takes before photos, and creates a staging plan. The plan covers what to remove, what to reposition, and what to add. Consultation cost is $200-400. Optional hands-on implementation runs $500-2,000 depending on the size and condition of the home. Most clients earn back 10-15x their staging investment in their final sale price."
                }
              },
              {
                "@type": "Question",
                "name": "How is home staging different from hiring an interior decorator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A decorator designs for the person living there. A stager designs for the buyer who has never seen the home before. Kim stages for buyer psychology, not aesthetics. She removes personality, neutralizes taste, and creates spaces where buyers mentally move themselves in. Kim has staged 200+ Snohomish County homes and does it herself, not outsourced."
                }
              },
              {
                "@type": "Question",
                "name": "Can you stage a home while I am still living in it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Occupied staging is the most common scenario Kim handles. She works around your schedule and your life, decluttering and repositioning what you have, removing what does not serve the space, and adding key pieces from her inventory. You do not have to move out or disrupt your daily routine significantly."
                }
              },
              {
                "@type": "Question",
                "name": "What if I cannot afford professional home staging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A $200 consultation gets you a detailed room-by-room plan you can execute yourself. Most clients complete 80% of the work on their own with the right guidance. Kim also offers flexible arrangements for sellers who need to defer staging costs until closing. Do not skip staging because of cost. A $300 consultation that earns you $8,000 more is a good investment."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to re-stage if my home does not sell quickly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually not. If a well-staged home is not getting offers after 3 weeks, the problem is almost always price or marketing reach, not the staging. Kim will diagnose the issue honestly. In rare cases, a staging refresh helps if the home has been shown many times and buyers have given specific feedback."
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
