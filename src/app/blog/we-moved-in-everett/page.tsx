'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  handwritten: {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '1.75rem',
    color: 'var(--color-clay)',
    margin: '40px 0 18px',
    lineHeight: 1.1,
  } as const,
  pullQuote: {
    fontFamily: 'var(--font-heading)',
    fontStyle: 'italic',
    fontSize: '1.5rem',
    color: 'var(--color-forest)',
    borderLeft: '4px solid var(--color-clay)',
    paddingLeft: '24px',
    margin: '32px 0',
    lineHeight: 1.45,
  } as const,
  signOff: {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '2.5rem',
    color: 'var(--color-forest)',
    margin: '48px 0 0',
    lineHeight: 1,
  } as const,
  byline: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#777',
    margin: '6px 0 0',
    lineHeight: 1.5,
  } as const,
  ctaBox: {
    background: 'var(--color-cream)',
    border: '1px solid var(--color-border)',
    borderRadius: 8,
    padding: '28px 32px',
    margin: '48px 0 0',
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '12px 22px',
    borderRadius: 4,
    textDecoration: 'none',
    marginTop: '14px',
  } as const,
};

export default function WeMovedPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="We Moved. A Quick Note From the New Spot."
          subtitle="By Kim Pelham · June 12, 2026 · 3 min read"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="A warm interior, soft light through a window."
        />

        <article style={{ padding: '72px 20px 96px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>

            <p style={{ ...styles.bodyP, fontWeight: 600, color: 'var(--color-forest)' }}>
              We moved. After weeks of waiting on the lease, the keys finally landed and Brien and I are settling into the new Everett office.
            </p>

            <p style={styles.bodyP}>
              Same county, same coffee order, slightly fewer boxes by the hour. I will send the full new address as soon as the sign is on the door, but the work has not skipped a beat. Phones still ring to me. Email still lands in the same place. We are showing and listing on the same schedule we always do.
            </p>

            <p style={styles.handwritten}>
              the window
            </p>

            <p style={styles.bodyP}>
              There is a window in the new place that looks straight out at the mountains. I keep catching myself just standing in front of it. Coffee gets cold. I do not even mind.
            </p>

            <p style={styles.bodyP}>
              I have been a Snohomish County broker for seventeen years and I forget, sometimes, that this is where I live. Not the listing photos. The actual mountains. The actual sky.
            </p>

            <div style={styles.pullQuote}>
              You pack up a corner you have stood in for years and suddenly you see how much of it was just memory holding things in place.
            </div>

            <p style={styles.handwritten}>
              moving is humbling
            </p>

            <p style={styles.bodyP}>
              Even when you do it for a living. You realize how much paper you have collected. How many handwritten notes from past clients you saved in a drawer because you could not throw them out. The card from the family who sent their daughter off to college from the home you helped them buy. The one from the seller who said we were the only ones who did not try to sell her on us, we just listened.
            </p>

            <p style={styles.bodyP}>
              All of that goes in a box. The box comes to the new place. The note tacks back up on a different wall. Same plan, new room, mountains in the window.
            </p>

            <p style={styles.handwritten}>
              what stays the same
            </p>

            <p style={styles.bodyP}>
              The thing about a move is that almost nothing about the work changes. The market still needs careful pricing. Sellers still need someone to walk through the project with them. Buyers still need someone who knows what 1990s wiring looks like and what a marine-deck rebuild really costs. I am still that person.
            </p>

            <p style={styles.bodyP}>
              Walking alongside our buyers and sellers, one home at a time. That part does not move.
            </p>

            <p style={styles.bodyP}>
              If you were trying to reach me this past week and the answer came a few hours later than it usually does, that was a couple of boxes between us, not a change in how we work. Thank you for the grace. We are back at full speed.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem', color: 'var(--color-clay)', margin: '0 0 6px 0', lineHeight: 1.1 }}>
                speaking of fresh starts,
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                The concierge condo case study just went live.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', margin: 0, lineHeight: 1.65 }}>
                64 before-and-after photos. Two homeowners across the country. One condo on the market right now. The full story of how we got it listing-ready without the owners on site.
              </p>
              <Link href="/case-study/concierge-condo" style={styles.ctaButton}>
                See the case study →
              </Link>
            </div>

            <p style={styles.signOff}>Always, Kim</p>
            <p style={styles.byline}>
              Kim Pelham, Designated Broker, The Pelham Group NW · 17 years in Snohomish County · <a href="tel:+14252509422" style={{ color: 'var(--color-clay)' }}>425.250.9422</a>
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
