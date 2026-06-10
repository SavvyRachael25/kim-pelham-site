'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const SITE = 'https://thepelhamgroupnw.com';

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
    sub: 'Daily Herald readers\' choice. First place 2024, finalist 2023.',
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
    award: [
      'Best Realtor, Best of Snohomish County 2024 (Daily Herald readers\' choice)',
      'Best of Snohomish County 2023 finalist',
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
  };

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

      <main>
        <InnerHero
          title="Press, Recognition & Published Work"
          subtitle="Featured in the Daily Herald. First Place Best Realtor in the Best of Snohomish County 2024. Best of Zillow Premier Agent. Published author. 17 years building a reputation in this county, one client at a time."
          image="/images/neighborhood-03-snohomish-historic.jpg"
          imageAlt="Historic Snohomish neighborhood"
          subtitleStyle="body"
        />

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
