'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

// pressItems removed — all entries were unconfirmed. See FIX 5 (audit 4/16/26).

const awards = [
  {
    image: '/images/best-of-snoco-2024-no-background.png',
    imageAlt: 'Best of Snohomish County 2024',
    title: 'Best of Snohomish County',
    sub: '2024',
    hasImage: true,
  },
  {
    image: '/images/best-of-zillow-portrait.jpg',
    imageAlt: 'Best of Zillow',
    title: 'Best of Zillow',
    sub: 'Premier Agent',
    hasImage: true,
  },
  {
    stat: '102.03%',
    title: 'Sale-to-List Ratio',
    sub: 'vs 100.2% NWMLS avg.',
    hasImage: false,
  },
  {
    stat: '14',
    statSuffix: 'yrs',
    title: 'Years in Snohomish County',
    sub: 'Deep local roots',
    hasImage: false,
  },
  {
    stat: '5★',
    title: 'Zillow & Google Reviews',
    sub: '47+ verified reviews',
    hasImage: false,
  },
];

const speakingItems = [
  {
    title: 'Snohomish County Real Estate Summit',
    topic: 'Market Trends & Innovation',
    detail: 'Keynote on the future of residential real estate in the Pacific Northwest',
  },
  {
    title: 'Pacific Northwest Women in Real Estate',
    topic: 'Leadership & Business Growth',
    detail: 'Panel participant on building a values-driven real estate practice',
  },
  {
    title: 'Everett Chamber of Commerce',
    topic: 'Home Preparation & Investment',
    detail: 'Speaker on pre-sale strategy and return-maximizing renovations',
  },
];

// publications list removed — entries were unconfirmed. See FIX 5 (audit 4/16/26).

export default function MediaPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="In the Media"
          subtitle="Press, awards & industry recognition"
          image="/images/neighborhood-03-snohomish-historic.jpg"
          imageAlt="Historic Snohomish neighborhood"
        />

        {/* Press Articles */}
        <section style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Section header */}
            <div style={{ marginBottom: '64px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                }}
              >
                press & features
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
                Featured Coverage
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: '#555',
                lineHeight: 1.7,
              }}
            >
              Additional press coming soon. For media inquiries, contact Kim at{' '}
              <a href="mailto:hello@thepelhamgroupnw.com" style={{ color: '#2F5233' }}>
                hello@thepelhamgroupnw.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '64px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                }}
              >
                earned, not bought
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
                Awards & Recognition
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '24px',
              }}
            >
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: 'center',
                    padding: '32px 20px',
                    backgroundColor: '#F8F5F0',
                    border: '1px solid #E8E3DA',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  {award.hasImage ? (
                    <div style={{ position: 'relative', width: '72px', height: '80px' }}>
                      <Image
                        src={award.image!}
                        alt={award.imageAlt!}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: award.stat && award.stat.length > 4 ? '1.75rem' : '2.5rem',
                        fontWeight: 700,
                        color: '#B8845C',
                        lineHeight: 1,
                      }}
                      aria-label={award.stat}
                    >
                      {award.stat}
                      {award.statSuffix && (
                        <span style={{ fontSize: '1rem', marginLeft: '2px' }}>{award.statSuffix}</span>
                      )}
                    </div>
                  )}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#2C2C2C',
                        margin: '0 0 4px 0',
                        lineHeight: 1.3,
                      }}
                    >
                      {award.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: '#767676',
                        margin: 0,
                      }}
                    >
                      {award.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking */}
        <section style={{ padding: '96px 24px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '64px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                }}
              >
                sharing the knowledge
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
                Speaking Engagements
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {speakingItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #E8E3DA',
                    borderRadius: '4px',
                    padding: '32px',
                    borderTop: '3px solid #2F5233',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#B8845C',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {item.topic}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: '#2C2C2C',
                      margin: '0 0 12px 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.925rem',
                      color: '#555',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.1rem',
                color: '#B8845C',
                marginBottom: '8px',
              }}
            >
              for journalists & producers
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: 700,
                color: '#2C2C2C',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Press Kit & Media Inquiries
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: '#2C2C2C',
                lineHeight: 1.8,
                marginBottom: '40px',
              }}
            >
              Interested in featuring Kim or The Pelham Group NW? We're happy to provide hi-res photos, a full biography, key stats, and story angles. Just reach out.
            </p>
            <a
              href="mailto:hello@thepelhamgroupnw.com?subject=Press%20Kit%20Request"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: '#2F5233',
                color: '#F8F5F0',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                marginBottom: '48px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3d6b42';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2F5233';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Request Press Kit
            </a>

            <div
              style={{
                padding: '32px',
                backgroundColor: '#F8F5F0',
                borderRadius: '4px',
                border: '1px solid #E8E3DA',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#2C2C2C',
                  marginBottom: '8px',
                }}
              >
                Direct Media Contact
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#555',
                  lineHeight: 1.6,
                  marginBottom: '12px',
                }}
              >
                For interviews, speaking requests, or story ideas:
              </p>
              <a
                href="mailto:hello@thepelhamgroupnw.com"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#B8845C',
                  textDecoration: 'none',
                }}
              >
                hello@thepelhamgroupnw.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
