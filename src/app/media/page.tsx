'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const SITE = 'https://thepelhamgroupnw.com';

// ---------------- Featured video ----------------
const FEATURED_VIDEO = {
  id: 'jpE0S64ky7w',
  title: "Think You Can't Afford to Sell Your Home? Watch This First",
  description:
    'Kim walks through the most common worry she hears from Snohomish County sellers, that they cannot afford the prep work it takes to list well, and the concierge plan that handles every update with payment deferred to closing.',
  uploadDate: '2025-09-01',
};

// ---------------- Kim's socials ----------------
interface Social {
  name: string;
  handle: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'zillow';
}

const socials: Social[] = [
  { name: 'Instagram', handle: '@pelhamgroupnw', url: 'https://www.instagram.com/pelhamgroupnw/', icon: 'instagram' },
  { name: 'Facebook', handle: 'PelhamGroupNW', url: 'https://www.facebook.com/PelhamGroupNW/', icon: 'facebook' },
  { name: 'LinkedIn', handle: 'kimpelham', url: 'https://www.linkedin.com/in/kimpelham/', icon: 'linkedin' },
  { name: 'YouTube', handle: 'The Pelham Group NW', url: 'https://www.youtube.com/channel/UCfDuJ0P0qccTvYOKbR4AZWA', icon: 'youtube' },
  { name: 'Zillow', handle: 'kimpelham', url: 'https://www.zillow.com/profile/kimpelham', icon: 'zillow' },
];

function SocialIcon({ icon }: { icon: Social['icon'] }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'currentColor' };
  switch (icon) {
    case 'instagram':
      return (
        <svg {...common} aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="1.75" d="M2 7.5C2 4.46243 4.46243 2 7.5 2H16.5C19.5376 2 22 4.46243 22 7.5V16.5C22 19.5376 19.5376 22 16.5 22H7.5C4.46243 22 2 19.5376 2 16.5V7.5Z" />
          <circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17.5" cy="6.5" r="1.1" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />
        </svg>
      );
    case 'zillow':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2 2 10v2h3v9h5v-6h4v6h5v-9h3v-2L12 2z" />
        </svg>
      );
  }
}

// ---------------- Confirmed press ----------------
interface PressItem {
  outlet: string;
  outletShort: string;
  date: string; // ISO
  headline: string;
  description: string;
  quote?: string;
  url: string;
}

const press: PressItem[] = [
  {
    outlet: 'The Daily Herald',
    outletShort: 'Daily Herald',
    date: '2025-03-14',
    headline: 'The real estate pros you need to know: Top 3 realtors in Snohomish County',
    description:
      "Kim is named one of the top three real estate professionals in Snohomish County. The piece highlights her interior-design background, the way she combines positioning, renovation, and staging to maximize sale proceeds, and her First Place finish in the 2024 Best Of Snohomish County contest.",
    quote:
      'Helping people find not just houses, but homes, places where memories are made, dreams take shape, and futures are built, is my passion.',
    url: 'https://www.heraldnet.com/2025/03/14/the-real-estate-pros-you-need-to-know-top-3-realtors-in-snohomish-county/',
  },
];

// ---------------- Awards ----------------
interface Award {
  title: string;
  sub: string;
  year?: string;
  image?: string;
  imageAlt?: string;
  stat?: string;
}

const awards: Award[] = [
  {
    title: 'Best Realtor, Best of Snohomish County',
    sub: 'Daily Herald readers\' choice. First Place back to back, 2023 and 2024.',
    year: '2023 & 2024',
    image: '/images/best-of-snoco-2024-no-background.png',
    imageAlt: 'Best of Snohomish County 2024',
  },
  {
    title: 'Best of Zillow Premier Agent',
    sub: 'Top tier of Zillow Premier Agents for client satisfaction and responsiveness.',
    image: '/images/best-of-zillow-portrait.jpg',
    imageAlt: 'Best of Zillow',
  },
  {
    title: 'Sale-to-List Ratio',
    sub: 'Average across closed listings vs 100.2% NWMLS county average.',
    stat: '102.3%',
  },
  {
    title: 'Closed Transactions',
    sub: 'Across Snohomish and King County over a 17-year career.',
    stat: '176',
  },
  {
    title: 'SRES Certified',
    sub: 'Seniors Real Estate Specialist credential awarded by the National Association of Realtors.',
    stat: 'SRES',
  },
  {
    title: '5-Star Verified Reviews',
    sub: 'Across Google and Zillow, from sellers and buyers across the county.',
    stat: '40+',
  },
];

// ---------------- Speaking topics (what Kim speaks on, not specific engagements) ----------------
const speakingTopics = [
  {
    topic: 'Pre-Sale Renovation Strategy',
    detail:
      'The updates that actually pay back at closing, the money-pits to skip, and how a focused 3-week prep can move a sale price by 5 to 10 percent in the Snohomish County market.',
  },
  {
    topic: 'The Psychology of Home Staging',
    detail:
      'Why buyers decide in 90 seconds, what staging actually changes in the buyer brain, and the staging mistakes that quietly cost sellers tens of thousands at the closing table.',
  },
  {
    topic: 'Senior Real Estate Transitions',
    detail:
      'Walking families through downsizing, aging-in-place decisions, and estate sales. SRES-informed framework that respects both grief and good outcomes.',
  },
  {
    topic: 'Reading the Snohomish County Market',
    detail:
      'A broker-on-the-ground read on NWMLS data: inventory, days on market, sale-to-list, and what it means for sellers and buyers in Mill Creek, Bothell, Everett, Lake Stevens, and Mukilteo.',
  },
];

// ---------------- FAQ — emits FAQPage JSON-LD via FAQSection ----------------
const mediaFAQs = [
  {
    question: 'Has Kim Pelham been featured in the press?',
    answer:
      'Yes. Kim was profiled in The Daily Herald on March 14, 2025, in "The real estate pros you need to know: Top 3 realtors in Snohomish County," which highlighted her interior-design background and her back-to-back First Place finishes in the Daily Herald\'s Best of Snohomish County contest in 2023 and 2024. She is also a Best of Zillow Premier Agent.',
  },
  {
    question: 'What awards has Kim Pelham won?',
    answer:
      'Kim won First Place Best Realtor in the Daily Herald Best of Snohomish County in both 2023 and 2024 (back-to-back readers\' choice), and is a Best of Zillow Premier Agent. She is SRES (Seniors Real Estate Specialist) certified by the National Association of Realtors and holds a 102.3% average sale-to-list ratio across 176 closed transactions versus a 100.2% NWMLS county average.',
  },
  {
    question: 'Is Kim Pelham a published author?',
    answer:
      'Yes. Kim is the author of Six-Word Lessons on Selling Your Home in Seattle: 100 Lessons to Maximize the Results of Your Sale (Pacelli Publishing, December 2017, ISBN 9781933750712), part of the long-running Six-Word Lessons series. The book is a practical seller\'s guide distilled into one hundred six-word lessons.',
  },
  {
    question: 'How do I book Kim Pelham for a speaking engagement?',
    answer:
      'Email hello@thepelhamgroupnw.com or call the office at (425) 213-8761. Kim speaks on four core topics: pre-sale renovation strategy, the psychology of home staging, senior real estate transitions, and reading the Snohomish County market. Each topic is broker-on-the-ground, with named-entity examples and specific NWMLS data.',
  },
  {
    question: 'Where can journalists get a press kit?',
    answer:
      'A downloadable press kit (hi-res headshots, full bio, story angles, named sources, and verified statistics) is available on the /media page of thepelhamgroupnw.com. For interview requests or custom story-angle support, email hello@thepelhamgroupnw.com and a response typically follows within 24 hours.',
  },
  {
    question: 'What is the Best of Snohomish County award?',
    answer:
      'Best of Snohomish County is the annual readers\' choice awards run by The Daily Herald (HeraldNet), the largest daily newspaper in Snohomish County. Categories cover business, dining, lifestyle, and professional services. Kim won First Place Best Realtor in both 2023 and 2024, back to back.',
  },
  {
    question: 'What credentials does Kim Pelham hold?',
    answer:
      'Kim is a licensed Washington State real estate broker (17 years of experience), brokered by Katrina Eileen Real Estate, and SRES (Seniors Real Estate Specialist) certified by the National Association of Realtors. She is also Best of Zillow recognized and has a published-author credit with Pacelli Publishing.',
  },
  {
    question: 'What cities does Kim Pelham serve?',
    answer:
      'Kim serves the full Snohomish County market with primary focus on Everett, Mill Creek, Bothell, Snohomish, Lake Stevens, Marysville, and Mukilteo. She is licensed in Washington State and has closed transactions across Snohomish and parts of King County over a 17-year career.',
  },
];

function formatDate(iso: string): string {
  const date = new Date(iso + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function MediaPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kim Pelham',
    url: SITE,
    image: `${SITE}/images/kim-pelham-headshot.jpg`,
    jobTitle: 'Real Estate Broker',
    worksFor: { '@type': 'RealEstateAgent', name: 'Katrina Eileen Real Estate' },
    // AggregateRating intentionally NOT on the Person schema.
    // Google flagged "Invalid object type for field <parent_node>" in GSC
    // because Review rich results only accept LocalBusiness/Organization/
    // Product/Service/etc. as parents (not Person). The site-wide
    // AggregateRating lives on the RealEstateAgent schema in the root
    // layout.tsx, which is the supported parent for review snippets.
    award: [
      'Best Realtor, Best of Snohomish County 2023 (Daily Herald readers\' choice)',
      'Best Realtor, Best of Snohomish County 2024 (Daily Herald readers\' choice, back-to-back)',
      'Best of Zillow Premier Agent',
      'SRES (Seniors Real Estate Specialist), National Association of Realtors',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'SRES (Seniors Real Estate Specialist)',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'National Association of Realtors' },
      },
    ],
    knowsAbout: [
      'Pre-sale renovation',
      'Home staging',
      'Senior real estate transitions',
      'Snohomish County housing market',
    ],
    subjectOf: press.map((p) => ({
      '@type': 'NewsArticle',
      headline: p.headline,
      url: p.url,
      datePublished: p.date,
      publisher: { '@type': 'NewsMediaOrganization', name: p.outlet },
    })),
    sameAs: socials.map((s) => s.url),
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: FEATURED_VIDEO.title,
    description: FEATURED_VIDEO.description,
    thumbnailUrl: `https://img.youtube.com/vi/${FEATURED_VIDEO.id}/maxresdefault.jpg`,
    uploadDate: FEATURED_VIDEO.uploadDate,
    contentUrl: `https://youtu.be/${FEATURED_VIDEO.id}`,
    embedUrl: `https://www.youtube.com/embed/${FEATURED_VIDEO.id}`,
    creator: { '@type': 'Person', name: 'Kim Pelham', url: SITE },
    publisher: { '@type': 'RealEstateAgent', name: 'The Pelham Group NW', url: SITE },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Media & Press', item: `${SITE}/media` },
    ],
  };

  // Top-level NewsArticle references (in addition to Person.subjectOf) so search
  // engines that prefer flat Article schemas can pick them up directly.
  const newsArticleSchemas = press.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: p.headline,
    url: p.url,
    datePublished: p.date,
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: p.outlet,
      url: 'https://www.heraldnet.com/',
    },
    about: { '@type': 'Person', name: 'Kim Pelham', url: SITE },
    mentions: [{ '@type': 'Person', name: 'Kim Pelham', url: SITE }],
  }));

  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'Six-Word Lessons on Selling Your Home in Seattle',
    alternateName: '100 Lessons to Maximize the Results of Your Sale',
    author: { '@type': 'Person', name: 'Kim Pelham' },
    inLanguage: 'en-US',
    isbn: '9781933750712',
    bookFormat: 'https://schema.org/Paperback',
    datePublished: '2017-12-07',
    numberOfPages: 200,
    publisher: { '@type': 'Organization', name: 'Pacelli Publishing' },
    bookSeries: 'The Six-Word Lessons Series',
  };

  return (
    <>
      <ScrollProgress />
      <Nav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {newsArticleSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main>
        <InnerHero
          title="Press, Recognition & Published Work"
          subtitle="Featured in the Daily Herald. First Place Best Realtor in the Best of Snohomish County back-to-back in 2023 and 2024. Best of Zillow Premier Agent. Published author. 17 years building a reputation in this county, one client at a time."
          image="/images/neighborhood-03-snohomish-historic.jpg"
          imageAlt="Historic Snohomish neighborhood"
          subtitleStyle="body"
        />

        {/* AEO opener — direct answer paragraph */}
        <section style={{ background: 'var(--color-cream)', padding: '40px 24px 32px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.06rem', lineHeight: 1.7, color: 'var(--color-text)', margin: 0 }}>
              <b>What this page is.</b> A working press kit for journalists, producers, and event hosts. Every claim links to a verifiable source. Kim Pelham is a Washington-licensed real estate broker (17 years) with The Pelham Group NW, brokered by Katrina Eileen Real Estate. She holds a 102.3% average sale-to-list ratio across 176 closings, is SRES certified, was First Place Best Realtor in the Daily Herald&apos;s Best of Snohomish County in 2023 and 2024 (back to back), and is the author of <i>Six-Word Lessons on Selling Your Home in Seattle</i> (Pacelli Publishing, 2017).
            </p>
          </div>
        </section>

        {/* AS FEATURED IN strip */}
        <section
          aria-label="Outlets and recognition"
          style={{
            background: 'var(--color-cream)',
            padding: '36px 24px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }} className="featured-in-strip">
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-faint)' }}>
              As featured in
            </span>
            <span className="featured-in-mark">The Daily Herald</span>
            <span className="featured-in-mark">HeraldNet</span>
            <span className="featured-in-mark">Best of Snohomish County</span>
            <span className="featured-in-mark">Zillow Premier Agent</span>
            <span className="featured-in-mark">Pacelli Publishing</span>
          </div>
        </section>

        {/* FEATURED ARTICLE — Daily Herald centerpiece */}
        <section style={{ padding: '88px 24px 64px', background: '#fff' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                Featured Coverage
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 36px', lineHeight: 1.12, maxWidth: 720 }}>
              In the press, on the page, on the shelf.
            </h2>

            {press.map((item) => (
              <article
                key={item.url}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 10,
                  overflow: 'hidden',
                  background: '#fff',
                  display: 'grid',
                  gridTemplateColumns: '1.05fr 1fr',
                  marginBottom: 28,
                  boxShadow: '0 14px 36px rgba(47, 82, 51, 0.06)',
                }}
                className="press-card"
              >
                <div style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320, position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 500, color: 'var(--color-cream)', letterSpacing: '0.02em' }}>
                      {item.outlet}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.55)' }}>
                      {formatDate(item.date)}
                    </div>
                  </div>
                  {item.quote ? (
                    <div style={{ marginTop: 'auto' }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 56, color: 'var(--color-clay-light, #d4a07a)', lineHeight: 0.6, marginBottom: 8 }} aria-hidden="true">
                        &ldquo;
                      </span>
                      <blockquote style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(18px, 1.6vw, 22px)', color: 'var(--color-cream)', lineHeight: 1.4, margin: 0, padding: 0 }}>
                        {item.quote}
                      </blockquote>
                      <div style={{ marginTop: 16, fontFamily: 'var(--font-handwritten)', fontSize: 20, color: 'var(--color-clay-light, #d4a07a)' }}>
                        Kim Pelham
                      </div>
                    </div>
                  ) : null}
                </div>
                <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 18px', lineHeight: 1.18 }}>
                      {item.headline}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'var(--color-text-light)', lineHeight: 1.65, margin: '0 0 26px' }}>
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-body)',
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: 'var(--color-clay)',
                      textDecoration: 'none',
                      borderBottom: '2px solid var(--color-clay)',
                      paddingBottom: 3,
                      alignSelf: 'flex-start',
                    }}
                  >
                    Read on {item.outletShort} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-faint)', lineHeight: 1.6, margin: '14px 0 0', textAlign: 'center', fontStyle: 'italic' }}>
              For interviews, speaking requests, or story ideas, see the press kit section below.
            </p>
          </div>
        </section>

        {/* FEATURED VIDEO — embed of the most-watched Kim piece */}
        <section style={{ padding: '88px 24px', background: '#fff', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                On video
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 22px', lineHeight: 1.15, maxWidth: 720 }}>
              {FEATURED_VIDEO.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.06rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 720 }}>
              {FEATURED_VIDEO.description}
            </p>

            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(26,26,26,0.20)',
                background: '#000',
              }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO.id}?rel=0&modestbranding=1`}
                title={FEATURED_VIDEO.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>

            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a
                href={`https://youtu.be/${FEATURED_VIDEO.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--color-clay)',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--color-clay)',
                  paddingBottom: 2,
                }}
              >
                Watch on YouTube <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCfDuJ0P0qccTvYOKbR4AZWA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  textDecoration: 'none',
                }}
              >
                Subscribe to the channel <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* PUBLISHED AUTHOR — book spread */}
        <section style={{ padding: '88px 24px', background: 'var(--color-cream)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                Published Author
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 56, alignItems: 'center' }} className="book-spread">
              <div style={{ position: 'relative', aspectRatio: '967 / 1500', borderRadius: 4, overflow: 'hidden', boxShadow: '0 30px 60px rgba(26,26,26,0.18), 0 8px 18px rgba(26,26,26,0.12)', transform: 'rotate(-1.4deg)', background: '#000' }}>
                <Image src="/images/press/six-word-lessons-cover.jpg" alt="Six-Word Lessons on Selling Your Home in Seattle by Kim Pelham, book cover" fill priority sizes="(max-width: 900px) 240px, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.15 }}>
                  Six-Word Lessons on Selling Your Home in Seattle
                </h3>
                <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(17px, 1.6vw, 20px)', color: 'var(--color-text-light)', margin: '0 0 22px', lineHeight: 1.4 }}>
                  100 Lessons to Maximize the Results of Your Sale
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: '0 0 20px' }}>
                  Kim&apos;s practical seller&apos;s guide, distilled into a hundred six-word lessons. Short enough to read in a single evening. Useful enough to keep on the kitchen counter through your sale. Part of the long-running Six-Word Lessons series.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', margin: '0 0 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-faint)' }}>
                  <span><b style={{ color: 'var(--color-text)' }}>Published:</b> December 2017</span>
                  <span><b style={{ color: 'var(--color-text)' }}>Publisher:</b> Pacelli Publishing</span>
                  <span><b style={{ color: 'var(--color-text)' }}>ISBN:</b> 9781933750712</span>
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a
                    href="https://www.amazon.com/-/es/Kim-Pelham/dp/1933750715"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'var(--color-clay)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 14.5,
                      padding: '12px 22px',
                      borderRadius: 4,
                      textDecoration: 'none',
                    }}
                  >
                    Find the book <span aria-hidden="true">↗</span>
                  </a>
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'transparent',
                      color: 'var(--color-forest)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 14.5,
                      padding: '12px 22px',
                      borderRadius: 4,
                      textDecoration: 'none',
                      border: '2px solid var(--color-forest)',
                    }}
                  >
                    Request a signed copy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS — magazine grid */}
        <section style={{ padding: '88px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                  Earned, not bought
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.12, maxWidth: 720 }}>
                Awards and Recognition
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'var(--color-text-light)', lineHeight: 1.6, margin: 0, maxWidth: 720 }}>
                Reader-voted, peer-recognized, and statistically verifiable. Every claim on this page is sourced and citable.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '36px 28px',
                    background: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    borderTop: '3px solid var(--color-clay)',
                  }}
                >
                  {award.image ? (
                    <div style={{ position: 'relative', width: 90, height: 100 }}>
                      <Image src={award.image} alt={award.imageAlt || award.title} fill style={{ objectFit: 'contain' }} sizes="90px" />
                    </div>
                  ) : (
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: award.stat && award.stat.length > 4 ? 36 : 56, fontWeight: 700, color: 'var(--color-clay)', lineHeight: 1, whiteSpace: 'nowrap' }}>
                      {award.stat}
                    </div>
                  )}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 19, fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 6px', lineHeight: 1.25 }}>
                      {award.title}
                    </h3>
                    {award.year ? (
                      <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-clay)', marginBottom: 8 }}>
                        {award.year}
                      </span>
                    ) : null}
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-light)', lineHeight: 1.55, margin: 0 }}>
                      {award.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPEAKING TOPICS — what Kim speaks on, not specific engagements */}
        <section style={{ padding: '88px 24px', background: 'var(--color-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                  For producers, editors and event hosts
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.12, maxWidth: 720 }}>
                Speaking topics
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'var(--color-text-light)', lineHeight: 1.6, margin: 0, maxWidth: 720 }}>
                Four subject areas Kim is comfortable speaking on with little prep, with broker-on-the-ground specifics and named-entity examples.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
              {speakingTopics.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '32px 28px',
                    background: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    borderLeft: '4px solid var(--color-forest)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: 22, color: 'var(--color-clay)', marginBottom: 8 }}>
                    topic 0{idx + 1}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.2 }}>
                    {item.topic}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-text-light)', lineHeight: 1.65, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — FAQPage JSON-LD emitted by FAQSection automatically */}
        <FAQSection
          title="Common Press & Media Questions"
          faqs={mediaFAQs}
          backgroundColor="#fff"
        />

        {/* WHERE TO FIND KIM — socials */}
        <section style={{ padding: '72px 24px', background: 'var(--color-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                  Find Kim
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.15, maxWidth: 720 }}>
                Where Kim shows up online.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'var(--color-text-light)', lineHeight: 1.6, margin: 0, maxWidth: 720 }}>
                Snohomish County market reads, new listings, behind the scenes of staging days, and short pieces with Kim and Brien. Pick your channel.
              </p>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 14,
              }}
            >
              {socials.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} (${s.handle}), opens in a new tab`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '16px 18px',
                      background: '#fff',
                      border: '1px solid var(--color-border)',
                      borderRadius: 8,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                    }}
                    className="social-card"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 6,
                        background: 'var(--color-forest)',
                        color: 'var(--color-cream)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: '0 0 auto',
                      }}
                    >
                      <SocialIcon icon={s.icon} />
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-faint)' }}>
                        {s.name}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-body)',
                          fontSize: 14.5,
                          fontWeight: 600,
                          color: 'var(--color-forest)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {s.handle}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRESS KIT + DIRECT CONTACT */}
        <section style={{ padding: '88px 24px 96px', background: '#fff' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }} className="presskit-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                  Press Kit & Media Contact
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 38px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 18px', lineHeight: 1.15 }}>
                Featuring Kim or The Pelham Group?
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: '0 0 28px' }}>
                The press kit includes hi-res headshots, the full bio, story angles, named sources, and verified statistics. Reach out and we will send everything you need within 24 hours.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a
                  href="/press/kim-pelham-press-kit.pdf"
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'var(--color-forest)',
                    color: 'var(--color-cream)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 15,
                    padding: '14px 24px',
                    borderRadius: 4,
                    textDecoration: 'none',
                  }}
                >
                  Download the press kit <span aria-hidden="true">↓</span>
                </a>
                <a
                  href="mailto:hello@thepelhamgroupnw.com?subject=Press%20inquiry"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: 'var(--color-forest)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 15,
                    padding: '14px 24px',
                    borderRadius: 4,
                    textDecoration: 'none',
                    border: '2px solid var(--color-forest)',
                  }}
                >
                  Email Kim directly
                </a>
              </div>
            </div>

            <aside style={{ padding: '28px 28px', background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: 10 }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 14px', lineHeight: 1.25 }}>
                Direct media contact
              </h3>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)', display: 'block', marginBottom: 2 }}>Email</span>
                  <a href="mailto:hello@thepelhamgroupnw.com" style={{ color: 'var(--color-clay)', textDecoration: 'none', fontWeight: 600 }}>
                    hello@thepelhamgroupnw.com
                  </a>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)', display: 'block', marginBottom: 2 }}>Office</span>
                  <a href="tel:+14252138761" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
                    (425) 213-8761
                  </a>
                </div>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)', display: 'block', marginBottom: 2 }}>Mobile</span>
                  <a href="tel:+14252509422" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
                    (425) 250-9422
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .social-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(47, 82, 51, 0.10);
          border-color: var(--color-clay) !important;
        }
        .featured-in-mark {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 17px;
          color: var(--color-forest);
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        @media (max-width: 900px) {
          .press-card { grid-template-columns: 1fr !important; }
          .book-spread { grid-template-columns: 1fr !important; gap: 36px !important; }
          .book-spread > div:first-child { max-width: 240px; margin: 0 auto; }
          .presskit-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 720px) {
          .featured-in-strip { gap: 16px !important; justify-content: flex-start !important; }
          .featured-in-mark { font-size: 15px; }
        }
      `}</style>
    </>
  );
}
