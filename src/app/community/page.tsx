'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import InnerHero from '@/components/InnerHero';
import ScrollProgress from '@/components/ScrollProgress';

const stats = [
  { number: '14', label: 'Years serving Snohomish County', note: 'deep roots, not just a zip code' },
  { number: '6', label: 'Neighborhoods Kim calls home turf', note: 'Everett, Bothell, Mill Creek + more' },
  { number: '2', label: 'Buyers max — ever', note: "you're not a number here" },
  { number: '47+', label: 'Five-star reviews', note: 'Zillow & Google combined' },
];

const events = [
  {
    cadence: 'Quarterly',
    title: 'First-Time Buyer Workshops',
    description:
      'The real talk nobody gives you. Pre-approval, offer strategy, inspection red flags, and what happens at closing — demystified in 90 minutes.',
    cta: { label: 'Learn more', href: '/buyers' },
  },
  {
    cadence: 'Monthly',
    title: 'Senior Downsizing Seminars',
    description:
      'Moving from a family home to the next chapter is a big deal. These free seminars cover timelines, lifestyle options, estate planning basics, and how to make it feel less overwhelming.',
    cta: { label: 'Senior services', href: '/senior-services' },
  },
  {
    cadence: 'Annual',
    title: 'Snohomish County Fair',
    description:
      'Come find The Pelham Group NW booth, say hi, grab a card, and pick up a copy of the neighborhood market report. Kim loves meeting neighbors.',
    cta: null,
  },
];

const partnerships = [
  {
    icon: '🔨',
    title: 'SMART Building Solutions',
    description: 'Pre-sale repairs and coordinated improvements — so you sell for more without the contractor stress.',
  },
  {
    icon: '📸',
    title: 'Professional Photography',
    description: 'Every listing gets high-quality photography. Buyers fall in love online before they ever walk through the door.',
  },
  {
    icon: '🪑',
    title: 'Home Staging Specialists',
    description: 'Kim handles staging herself or works with specialists — depending on what the home needs to shine.',
  },
  {
    icon: '📊',
    title: 'Hyper-Local Market Data',
    description: 'Pricing backed by data, not gut feeling. Comparables, absorption rates, and neighborhood-level trends.',
  },
];

const neighborhoods = [
  {
    name: 'Everett',
    tagline: 'The heart of it all',
    image: '/images/neighborhood-01-everett-marina.jpg',
    href: '/neighborhoods/everett',
  },
  {
    name: 'Bothell',
    tagline: 'Main Street vibes',
    image: '/images/neighborhood-02-bothell-main-street.jpg',
    href: '/neighborhoods/bothell',
  },
  {
    name: 'Mill Creek',
    tagline: 'Tucked in the trees',
    image: '/images/property-02-mill-creek-home.jpg',
    href: '/neighborhoods/mill-creek',
  },
  {
    name: 'Snohomish',
    tagline: 'Small-town charm',
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    href: '/neighborhoods/snohomish',
  },
  {
    name: 'Lake Stevens',
    tagline: 'Waterfront living',
    image: '/images/property-03-lake-stevens-waterfront.jpg',
    href: '/neighborhoods/lake-stevens',
  },
  {
    name: 'Marysville',
    tagline: 'Room to grow',
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    href: '/neighborhoods/marysville',
  },
];

export default function CommunityPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Community"
          subtitle="Your neighbor in real estate — not just your agent"
          image="/images/lifestyle-01-farmers-market.jpg"
          imageAlt="Local community event in Snohomish County"
        />

        {/* Intro */}
        <section style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 12px 0',
                }}
              >
                more than a transaction
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: '0 0 24px 0',
                  lineHeight: 1.2,
                }}
              >
                I'm your neighbor first.
                <br />
                <span style={{ color: '#2F5233' }}>Broker second.</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  color: '#2C2C2C',
                  lineHeight: 1.8,
                  marginBottom: '16px',
                }}
              >
                I've built my career on understanding the communities I serve — not just the market data, but the streets, the schools, the coffee shops, and the people. Snohomish County is my home. I live here, shop here, and raise my family here.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  color: '#2C2C2C',
                  lineHeight: 1.8,
                }}
              >
                When you work with me, you're not getting a salesperson who learned your neighborhood from a spreadsheet. You're getting someone who knows the difference between the good side of the street and the great side.
              </p>
            </div>

            {/* Stat callout */}
            <div
              style={{
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
                padding: '48px 40px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1rem',
                  color: '#B8845C',
                  margin: '0 0 16px 0',
                }}
              >
                my policy, my promise
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#2F5233',
                  lineHeight: 1,
                  margin: '0 0 8px 0',
                }}
              >
                2
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: '#2C2C2C',
                  margin: '0 0 16px 0',
                }}
              >
                Buyers. Maximum. Always.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Most agents juggle 20+ clients. I cap mine at two buyers at any given time — so you get my full attention, not a callback from an assistant.
              </p>
            </div>
          </div>

          {/* Mobile responsive style */}
          <style>{`
            @media (max-width: 768px) {
              .community-intro-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* Stats Bar */}
        <section
          style={{
            padding: '64px 24px',
            backgroundColor: '#2F5233',
          }}
        >
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
            }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.25rem',
                    fontWeight: 700,
                    color: '#B8845C',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#F8F5F0',
                    margin: '0 0 4px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '0.9rem',
                    color: 'rgba(248,245,240,0.6)',
                    margin: 0,
                  }}
                >
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Neighborhoods */}
        <section style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '56px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                }}
              >
                places I know & love
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                The Communities I Serve
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {neighborhoods.map((n, idx) => (
                <Link
                  key={idx}
                  href={n.href}
                  style={{ textDecoration: 'none' }}
                  aria-label={`Explore ${n.name} — ${n.tagline}`}
                >
                  <article
                    style={{
                      position: 'relative',
                      height: '220px',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
                      if (overlay) overlay.style.backgroundColor = 'rgba(47,82,51,0.75)';
                    }}
                    onMouseLeave={(e) => {
                      const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
                      if (overlay) overlay.style.backgroundColor = 'rgba(0,0,0,0.45)';
                    }}
                  >
                    <Image
                      src={n.image}
                      alt={`${n.name} neighborhood`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="card-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.45)',
                        transition: 'background-color 0.3s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          margin: '0 0 4px 0',
                          lineHeight: 1.1,
                        }}
                      >
                        {n.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-handwritten)',
                          fontSize: '1rem',
                          color: 'rgba(248,245,240,0.85)',
                          margin: 0,
                        }}
                      >
                        {n.tagline}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link
                href="/neighborhoods"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#2F5233',
                  textDecoration: 'none',
                  borderBottom: '2px solid #2F5233',
                  paddingBottom: '2px',
                }}
              >
                View all neighborhoods →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Events */}
        <section style={{ padding: '96px 24px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '56px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                }}
              >
                free & open to all
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Events & Education
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {events.map((event, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #E8E3DA',
                    borderRadius: '4px',
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#2F5233',
                      backgroundColor: 'rgba(47,82,51,0.08)',
                      padding: '4px 12px',
                      borderRadius: '2px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      width: 'fit-content',
                    }}
                  >
                    {event.cadence}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: '#2C2C2C',
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: '#555',
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {event.description}
                  </p>
                  {event.cta && (
                    <Link
                      href={event.cta.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#B8845C',
                        textDecoration: 'none',
                        borderBottom: '1px solid #B8845C',
                        width: 'fit-content',
                        paddingBottom: '1px',
                      }}
                    >
                      {event.cta.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partnerships */}
        <section style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '56px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                }}
              >
                the team behind the team
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Strategic Partners
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
              }}
            >
              {partnerships.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '32px 28px',
                    backgroundColor: '#F8F5F0',
                    border: '1px solid #E8E3DA',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      marginBottom: '16px',
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#2C2C2C',
                      margin: '0 0 10px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: '#555',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: '96px 24px',
            backgroundColor: '#2F5233',
          }}
        >
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.1rem',
                color: '#B8845C',
                marginBottom: '12px',
              }}
            >
              no pressure, just real talk
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: 700,
                color: '#F8F5F0',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Let's Be Neighbors.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'rgba(248,245,240,0.8)',
                lineHeight: 1.8,
                marginBottom: '40px',
              }}
            >
              Whether you're thinking about buying, selling, or just want the honest truth about the market — I'm happy to have that conversation.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A07550';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B8845C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
