'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

export default function MediaPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="In the Media"
          subtitle="Industry recognition"
          image="/images/neighborhood-03-snohomish-historic.jpg"
          imageAlt="Historic Snohomish neighborhood"
        />

        {/* Featured Press Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              Featured Press
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Press Item 1 */}
              <article
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '24px',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  2026
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                    marginTop: '12px',
                  }}
                >
                  Top 10 Brokers to Watch
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Snohomish County Business Journal
                </p>
              </article>

              {/* Press Item 2 */}
              <article
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '24px',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  2025
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                    marginTop: '12px',
                  }}
                >
                  How One Broker is Changing Senior Real Estate Services
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Everett Herald
                </p>
              </article>

              {/* Press Item 3 */}
              <article
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '24px',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  Mar 2025
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                    marginTop: '12px',
                  }}
                >
                  The Real Estate Pros You Need to Know: Top 3 Realtors in Snohomish County
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Everett Herald / HeraldNet
                </p>
              </article>

              {/* Press Item 4 */}
              <article
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '24px',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  2025
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                    marginTop: '12px',
                  }}
                >
                  The Art of Home Staging: Kim Pelham's 6-Step System
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Pacific Northwest Magazine
                </p>
              </article>

              {/* Press Item 5 */}
              <article
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '24px',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  2025
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                    marginTop: '12px',
                  }}
                >
                  Kim Pelham: Presence, Perspective, Purpose
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Real Producers Magazine
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              Awards & Recognition
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '32px',
              }}
            >
              {/* Award 1 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#fff',
                    }}
                  >
                    ★
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  14 Years of Excellence
                </h3>
              </div>

              {/* Award 2 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 400,
                      color: '#fff',
                    }}
                  >
                    104.4%
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  Sale-to-List Ratio
                </h3>
              </div>

              {/* Award 3 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#fff',
                    }}
                  >
                    ★★★★★
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  5-Star Google Reviews
                </h3>
              </div>

              {/* Award 4 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: '#fff',
                      textAlign: 'center',
                      padding: '8px',
                    }}
                  >
                    SRES
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  Senior Real Estate Specialist
                </h3>
              </div>

              {/* Award 5 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      color: '#fff',
                      textAlign: 'center',
                      padding: '8px',
                    }}
                  >
                    6-STEP SYSTEM
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  Pelham Advantage System Creator
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              Speaking Engagements
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Speaking 1 */}
              <div
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Snohomish County Real Estate Summit
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Keynote speaker discussing market trends and innovation in residential real estate
                </p>
              </div>

              {/* Speaking 2 */}
              <div
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Pacific Northwest Women in Real Estate
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Panel participant sharing insights on leadership and business growth for women in real estate
                </p>
              </div>

              {/* Speaking 3 */}
              <div
                style={{
                  padding: '32px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-cream)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Everett Chamber of Commerce
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Speaker covering home preparation and investment strategies for local business leaders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* As Seen In Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
              }}
            >
              As Seen In
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  padding: '24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                Snohomish County Business Journal
              </div>
              <div
                style={{
                  padding: '24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                Everett Herald
              </div>
              <div
                style={{
                  padding: '24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                Pacific Northwest Magazine
              </div>
              <div
                style={{
                  padding: '24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                Real Producers Magazine
              </div>
              <div
                style={{
                  padding: '24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                HeraldNet
              </div>
            </div>
          </div>
        </section>

        {/* Press Kit Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '24px',
              }}
            >
              Press Kit
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '40px',
              }}
            >
              Interested in featuring Kim Pelham or The Pelham Group NW? Download our press kit with photos, biography, and key statistics.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{
                  padding: '16px 40px',
                  backgroundColor: 'var(--color-clay)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a0743d';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-clay)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Download Press Kit
              </button>
            </div>

            <div style={{ marginTop: '60px', padding: '32px', backgroundColor: 'var(--color-cream)', borderRadius: '4px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '16px',
                }}
              >
                Media Inquiries
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--color-text)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                For media inquiries, interviews, or speaking engagement requests:
              </p>
              <a
                href="mailto:hello@thepelhamgroupnw.com"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  color: 'var(--color-clay)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-forest)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-clay)';
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
