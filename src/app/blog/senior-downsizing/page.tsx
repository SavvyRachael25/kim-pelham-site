'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function SeniorDownsizingPage() {
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
              Senior Downsizing: A Compassionate Guide to Your Next Chapter
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
              <span>February 28, 2026</span>
              <span>7 min read</span>
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
              Downsizing isn't about losing memories or stepping backward—it's about gaining freedom. In my years working with Snohomish County retirees, I've seen how the right move at the right time can transform this chapter of life into something truly exciting. Whether you're selling the family home or exploring new living options, this guide will help you navigate one of life's most meaningful decisions with clarity and confidence.
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
              Why Seniors Are Choosing to Downsize
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
              The reasons are deeply personal and beautifully practical. Many of my clients tell me they're tired of maintaining a four-bedroom house they don't need, with a yard that requires constant attention. There's the financial advantage too—selling a fully-appreciated home can generate significant capital, whether that's for travel, healthcare, or creating a legacy for your children.
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
              But there's something else, something less tangible: freedom. Freedom from the worry of home repairs, from the isolation of living alone in a large house, from the physical demands of maintenance. Downsizing allows you to focus on what matters most in this phase of life—relationships, experiences, and peace of mind.
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
              The Emotional Side of Letting Go
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
              Let's be honest: this isn't just a transaction. Your home has stories. It's where your children grew up, where you hosted countless holidays, where life happened. When I work with downsizing clients, we never skip past the emotion. That would be disrespectful to everything that home has meant.
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
              I encourage my clients to take photographs of meaningful spaces and objects before they go. Some create photo albums or even small videos documenting the home's history. This creates closure while honoring the memories. One client took photos of each room and wrote a note about what that space meant to her family—it became a treasure for her grandchildren to read someday.
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
              Practical Steps to Prepare Your Home for Sale
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
              When it's time to list, presenting your home effectively is essential. But downsizing homes require a slightly different approach. Buyers are often younger families who might see your home as "dated" if the décor feels stuck in a previous era. This is where thoughtful staging makes a tremendous difference.
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
              I recommend decluttering aggressively. Remove personal items, family photos, and collections that make the space feel smaller or overly specific. Open closets, clear countertops, and make rooms feel spacious and move-in ready. Fresh paint in neutral tones, updated lighting, and clean landscaping can add years of appeal to an older home. The goal is to help buyers envision themselves in the space, not wonder about your history in it.
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
              Choosing Your Next Home: Location and Lifestyle
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
              Snohomish County offers wonderful options for downsizing. Some clients move to active adult communities designed with their needs in mind—no stairs, community activities, built-in social networks. Others prefer smaller single-level homes or condos in town where they can walk to restaurants and shops. A few even explore the broader Pacific Northwest, using the equity from their home sale to move closer to family or their dream retirement destination.
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
              The key is thinking beyond square footage. Consider proximity to healthcare, walkability, community offerings, and whether you want to be in town or in a quieter setting. Think about future needs too—will this home work in five or ten years? The best downsize moves aren't just about right now; they're about the next chapter you're building.
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
              Making the Financial Numbers Work
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
              For many retirees, the financial aspect of downsizing is significant. Your home represents one of your largest assets. Understanding the tax implications, transaction costs, and how the proceeds fit into your retirement plan is crucial. While I'm not a financial advisor, I always encourage my downsizing clients to have a conversation with their accountant and financial advisor before selling.
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
              What I can tell you is that selling strategically—with proper pricing, staging, and marketing—ensures you capture the full value of your home. In a market where a well-presented home in Snohomish County can exceed its asking price, the difference between a mediocre sale and an excellent one can be substantial. This is where experience matters.
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
              Your Downsizing Timeline: Moving at Your Pace
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
              There's no standard timeline for downsizing. Some clients sell their home and move within a few months. Others prefer to take their time, finding the perfect next space before letting go of the old one. Some even rent temporarily while they decide what's next. The best timeline is the one that feels right for you, not what feels rushed or pressured.
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
                  href="/blog/staging-psychology"
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
                    The Psychology of Home Staging
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    Home Staging
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
                Ready to Explore Your Downsizing Options?
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
                Let's talk about what this next chapter could look like and how we can make it happen on your terms.
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
