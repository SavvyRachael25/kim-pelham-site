'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function SaleToListRatioPage() {
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
              Understanding Your Sale-to-List Ratio (And Why Kim's Is 104.4%)
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
              <span>January 25, 2026</span>
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
              If you've looked at my marketing materials or heard me speak about my business, you've probably seen the number: 104.4%. That's my average sale-to-list ratio—the percentage of your home's asking price that it actually sells for. It's not a coincidence or luck. It's a direct reflection of strategy, preparation, and genuine expertise. In this article, I want to break down what this metric means, why it matters, and how you can achieve similar results when you sell your Snohomish County home.
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
              What is Sale-to-List Ratio and Why It Matters
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
              Your sale-to-list ratio is simple math: the final sale price divided by the asking price, multiplied by 100. If your home lists at $500,000 and sells for $520,000, your ratio is 104%. A ratio above 100% means you sold above asking price. Below 100% means you sold below asking price.
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
              This metric is powerful because it reveals two things: first, how well your home was positioned and presented to the market, and second, the strength of buyer demand for your property. A high sale-to-list ratio isn't luck—it's evidence of strategic pricing, excellent marketing, proper staging, and expert negotiation. In a competitive market like ours, every percentage point above 100% represents additional thousands of dollars in your pocket.
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
              The Market Reality for Snohomish County Homes
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
              Snohomish County real estate is competitive but intelligent. We're not experiencing the wild bidding wars of some hot markets, but we're also not in a buyer's paradise. The market rewards homes that are well-prepared and strategically priced. It punishes overpriced homes, homes with poor photos, and homes that feel neglected or cluttered.
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
              The local average sale-to-list ratio hovers around 99-100%, depending on the sub-market and time of year. This means most homes either sell at asking price or slightly below. When a home sells at 104%—consistently—it signals something special. That home is positioned right. The marketing is working. Buyers see it and want it. That's what my clients experience again and again.
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
              The Three Pillars of Achieving a Strong Ratio
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
              A strong sale-to-list ratio doesn't happen by accident. It's built on three foundational elements that work together to create market success.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '24px',
              }}
            >
              Pillar One: Strategic Pricing
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Many sellers think pricing high is smart—it gives room to negotiate down. This is actually counterproductive. When you price a home too high, you've already lost the most active and motivated buyers. They stop showing up. Your home sits, creating the impression of weakness. Then, weeks later, you price it lower than you would have if you'd priced right initially.
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
              Strategic pricing means listing your home where it will generate maximum interest from qualified buyers without leaving money on the table. I analyze comparable sales, current market days, buyer demand patterns, and your home's unique strengths to find that sweet spot. Price too low, and you're giving away equity. Price strategically, and you attract multiple offers that drive the final sale price up. This is where expertise matters.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '24px',
              }}
            >
              Pillar Two: Visual Excellence
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Professional photography and video are non-negotiable. Studies consistently show that homes with excellent photos and video tours receive 24% more inquiries and sell faster. But it's more than just pretty pictures. It's about showing your home in the best possible light—literally. We stage during optimal lighting, use drone photography to show the property's setting, and create virtual tours that let buyers walk through your home at their own pace.
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
              Then there's the physical staging—the thoughtful arrangement of furniture, the decluttering, the fresh paint, the landscaping. This is where professional staging consultants earn their fee. My clients consistently see homes sell faster and for higher prices when they've invested in professional staging. The return on that investment is often 5-15 times the cost.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '24px',
              }}
            >
              Pillar Three: Strategic Marketing and Offer Management
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Getting the right buyers to see your home is critical. This means targeted advertising on the platforms where buyers are searching, open houses that attract serious interest, and agent-to-agent communication about your property. I use data about buyer behavior and interest patterns to drive the right traffic to your listing.
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
              Then comes offer management. When you get multiple offers (which strong pricing and marketing make possible), how you manage them matters tremendously. I guide clients through counteroffers, negotiate contingencies, and help them choose the strongest offer. This is where a skilled agent's experience translates directly to money in your pocket.
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
              What Your Sale-to-List Ratio Tells You
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
              When you're interviewing agents, ask about their sale-to-list ratio. If an agent says they consistently achieve 104%, that's a meaningful differentiator. It suggests they know how to price homes right, they know how to market them effectively, and they know how to negotiate on behalf of their clients.
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
              But don't just take the number at face value. Ask what kinds of homes achieve that ratio. Is it primarily luxury homes, which might sell above asking more frequently? Is it homes in competitive neighborhoods? Understanding the context matters. My 104.4% average comes from homes across diverse price points, neighborhoods, and property types throughout Snohomish County—because I apply the same strategic approach to every listing, regardless of price.
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
              Your Path to a Strong Sale Price
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
              If you're getting ready to sell, remember: your sale-to-list ratio starts the moment you list your home. It's determined by how it's priced, presented, and marketed. There's no magic here, just strategy and expertise applied consistently. I'd love to discuss how we can work together to achieve your best possible outcome. That 104.4% represents real dollars, real returns, and real success for my clients. Let's make it happen for you.
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
                  href="/blog/senior-downsizing"
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
                    Senior Downsizing
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
                Ready to Maximize Your Sale Price?
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
                Let's talk about your home's potential and how strategic pricing and marketing can help you achieve the best possible result.
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
