'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function CommunityPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        {/* Hero Section */}
        <section
          style={{
            background: `linear-gradient(135deg, var(--color-forest) 0%, #1f3823 100%)`,
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 20px',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(196, 162, 101, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(196, 162, 101, 0.08) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 400,
                color: 'var(--color-cream)',
                marginBottom: '16px',
              }}
            >
              Community Hub
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'rgba(248, 245, 240, 0.9)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Local Insights, Market Intelligence & Neighborhood Stories
            </p>
          </div>
        </section>

        {/* More Than a Broker Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '24px',
              }}
            >
              More Than a Broker—A Neighbor
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '20px',
              }}
            >
              I've built my career on understanding the communities I serve. It's not about closing deals—it's about building relationships and being a trusted voice in Snohomish County. Whether you're a first-time buyer, a family looking to upsize, or a senior ready for your next chapter, I'm here as your neighbor, your advocate, and your partner.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
              }}
            >
              Through The Pelham Group NW, I've created a community-focused real estate practice that blends local expertise with strategic market intelligence. My goal is to help you make informed decisions that honor both your financial interests and your quality of life.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Stat 1 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 400,
                    color: 'var(--color-clay)',
                    marginBottom: '12px',
                  }}
                >
                  14
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-forest)',
                  }}
                >
                  Years of Experience
                </h3>
              </div>

              {/* Stat 2 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 400,
                    color: 'var(--color-clay)',
                    marginBottom: '12px',
                  }}
                >
                  100%
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-forest)',
                  }}
                >
                  Individualized Service
                </h3>
              </div>

              {/* Stat 3 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 400,
                    color: 'var(--color-clay)',
                    marginBottom: '12px',
                  }}
                >
                  5
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-forest)',
                  }}
                >
                  Counties Served
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Local Events Section */}
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
              Local Events & Education
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Event 1 */}
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
                  Snohomish County Fair
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-clay)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Annual
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Connect with the community and discover what makes Snohomish County special. Look for The Pelham Group booth!
                </p>
              </div>

              {/* Event 2 */}
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
                  First-Time Buyer Workshops
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-clay)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Quarterly
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Learn the ins and outs of purchasing your first home. From pre-approval to closing, we demystify the process.
                </p>
              </div>

              {/* Event 3 */}
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
                  Senior Downsizing Seminars
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-clay)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Monthly
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Navigate the next chapter with confidence. We discuss lifestyle options, financial planning, and timelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships Section */}
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
              Strategic Partnerships
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Partnership 1 */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  SMART Building Solutions
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Pre-sale repairs and coordinated improvements
                </p>
              </div>

              {/* Partnership 2 */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Professional Photography
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Stunning visual storytelling for listings
                </p>
              </div>

              {/* Partnership 3 */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Home Staging Specialists
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Expert presentation and buyer connection
                </p>
              </div>

              {/* Partnership 4 */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Market Analysis & Data
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Data-driven insights and competitive pricing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Communities Section */}
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
              Featured Communities
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Community 1 */}
              <div
                style={{
                  padding: '40px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  Everett Waterfront
                </h3>
              </div>

              {/* Community 2 */}
              <div
                style={{
                  padding: '40px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  Mill Creek
                </h3>
              </div>

              {/* Community 3 */}
              <div
                style={{
                  padding: '40px',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                  }}
                >
                  Snohomish Downtown
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '24px',
              }}
            >
              Let's Build Something Together
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
              Whether you're new to the area or a longtime resident, I'd love to hear about your real estate aspirations.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: 'var(--color-clay)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
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
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
