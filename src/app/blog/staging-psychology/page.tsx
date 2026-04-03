'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function StagingPsychologyPage() {
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
            padding: '80px 20px',
            minHeight: '300px',
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
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                color: 'var(--color-cream)',
                marginBottom: '24px',
              }}
            >
              The Psychology of Home Staging: Why Buyers Fall in Love
            </h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'rgba(248, 245, 240, 0.8)',
              }}
            >
              <span>By Kim Pelham</span>
              <span>February 10, 2026</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Home staging isn't about deception or creating a fairy tale. It's about removing the barriers between a buyer's imagination and their vision of home. When I work with clients to stage their homes, I'm not just arranging furniture—I'm shaping emotions. And when it comes to real estate, emotions drive decisions that change lives.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '40px',
              }}
            >
              The Neuroscience of First Impressions
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Research shows that buyers make 90% of their decision about a home within the first 90 seconds of walking in. That's not enough time to logically evaluate square footage or construction details. What is being evaluated is how the space makes them feel. This is pure emotion and psychology at work.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              When a buyer enters a home, their brain is processing multiple sensory inputs simultaneously: light, smell, color, scale, and arrangement. If those inputs feel cohesive and welcoming, the buyer's amygdala—the emotional center of the brain—responds positively. They relax. They smile. They imagine themselves in the space. This is when love begins. It's not a logical exercise; it's a visceral one.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '40px',
              }}
            >
              The Power of Lightness and Space
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Clutter isn't just visually distracting. It's cognitively taxing. When a buyer walks into an overstuffed room filled with personal items, knickknacks, and furniture, their brain is working overtime trying to process all the information. This mental strain reads as stress. Unconsciously, they feel trapped rather than welcome.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              When we stage a home, we remove 30-50% of personal items and furniture. Yes, this makes rooms look larger—but more importantly, it gives the buyer's brain space to breathe. Suddenly, they can see themselves in the space. They can envision their own furniture, their own family moments. The home becomes a canvas for their dreams, not a museum of yours.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '40px',
              }}
            >
              The Silent Language of Color and Light
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Color and lighting communicate before anything else. Bright, natural light is universally perceived as welcoming and healthy. Dark, dim interiors trigger subtle anxiety. This is evolutionary—our brains associate light with safety and darkness with threat.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              When staging Snohomish County homes, I always focus on maximizing natural light. Open curtains, trim tree branches that block windows, and add strategic mirrors to reflect light throughout the space. For color, neutral tones—soft whites, warm grays, gentle beiges—create a sense of calm and allow buyers to project their own style onto the space. Bold, personal colors, while beautiful, can feel limiting. Staged homes should feel like a blank canvas, not someone else's statement.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '40px',
              }}
            >
              Creating Narrative Rooms
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Every room needs a story. A bedroom becomes a sanctuary—serene, with clean lines and a cozy but uncluttered aesthetic. A living room becomes a gathering place—comfortable seating arranged for conversation, warm lighting that says "spend time here." A kitchen becomes the heart of the home—clean, organized, with a little touch of life (fresh flowers, fresh fruit in a bowl).
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              When buyers can see themselves gathering with family in the living room, or starting their morning in that bright kitchen, or relaxing in that peaceful bedroom, the home transforms from a property into a lifestyle. That emotional connection is what tips the scale from "interested" to "in love." And when buyers fall in love, they don't just make an offer—they make a strong one.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '40px',
              }}
            >
              The Scent and Sensory Experience
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Don't underestimate the power of smell. The olfactory sense is directly connected to memory and emotion. When a home smells fresh and clean—not over-perfumed, but genuinely fresh—it signals care and cleanliness. Fresh coffee brewing, fresh-cut flowers, or the subtle scent of lavender can create positive associations.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '40px',
              }}
            >
              I always tell my clients: clean the home thoroughly, bake fresh bread or cookies before a showing, and crack a window. The combination of cleanliness, the aroma of baked goods, and fresh air creates a warm, welcoming emotional experience that registers deeply in a buyer's brain. These aren't tricks—they're honest ways to show your home at its absolute best.
            </p>

            {/* Related Posts Section */}
            <section style={{ marginTop: '80px', paddingTop: '40px', borderTop: `1px solid var(--color-border)` }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '32px',
                }}
              >
                Related Articles
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <Link
                  href="/blog/first-72-hours"
                  style={{
                    padding: '24px',
                    border: `1px solid var(--color-border)`,
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-cream)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    The First 72 Hours
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    Lifestyle
                  </p>
                </Link>

                <Link
                  href="/blog/sale-to-list-ratio"
                  style={{
                    padding: '24px',
                    border: `1px solid var(--color-border)`,
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-cream)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    Understanding Sale-to-List Ratio
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    Market Insights
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section style={{ marginTop: '80px', padding: '40px', backgroundColor: 'var(--color-cream)', borderRadius: '4px', textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '16px',
                }}
              >
                Ready to Stage Your Home to Sell?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  color: 'var(--color-text)',
                  marginBottom: '24px',
                  lineHeight: '1.6',
                }}
              >
                Let's create an emotional connection between your home and the right buyers. Contact me to discuss a staging strategy for your sale.
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
                Start a Conversation
              </Link>
            </section>

            {/* Back to Blog Link */}
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                marginTop: '40px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
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
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
