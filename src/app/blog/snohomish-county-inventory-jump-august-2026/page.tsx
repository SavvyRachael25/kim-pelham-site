'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  h2: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 400,
    color: 'var(--color-forest)',
    marginBottom: '20px',
    marginTop: '48px',
  } as const,
  h3: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 500,
    color: 'var(--color-forest)',
    marginBottom: '14px',
    marginTop: '32px',
  } as const,
  callout: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
  } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '40px 32px',
    borderRadius: '8px',
    margin: '48px 0 0',
    textAlign: 'center' as const,
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-clay)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 28px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '16px',
  } as const,
  link: {
    color: 'var(--color-clay)',
  } as const,
};

export default function InventoryJumpAugust2026Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Snohomish County Inventory Just Jumped 36.6%: What It Means If You're Buying or Selling"
          subtitle="By Kim Pelham · August 17, 2026 · 8 min read"
          image="/images/hero-01-aerial-neighborhood.jpg"
          imageAlt="An aerial view of Snohomish County neighborhoods"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              The July 2026 numbers are in, and here is the one that matters: the number of homes for sale in Snohomish County in July was up 36.6% compared with the same month last year. Average days on market ticked up to 28, from 25 a year ago. That is not a crash, and it is not a fire sale. It is a market where buyers finally have real choices, and where the difference between a home that sells and a home that sits comes down to pricing and presentation.
            </p>

            <p style={styles.bodyP}>
              I have been a broker in Snohomish County since 2015, with 17 years in real estate overall, and I want to walk you through what this inventory jump actually means in practice. Not the headline version. The version I see in living rooms, at open houses, and at the negotiating table every week.
            </p>

            <h2 style={styles.h2}>The July numbers, in plain English</h2>
            <p style={styles.bodyP}>
              Two data points tell the story:
            </p>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <b>Homes for sale: up 36.6% year over year.</b> A buyer shopping this July had roughly a third more homes to consider than a buyer shopping last July.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Average days on market: 28, up from 25 last year.</b> Homes are taking a few days longer to sell on average. Not months longer. Days.
              </li>
            </ul>

            <p style={styles.bodyP}>
              Put those together and you get a picture of a market that is loosening, not collapsing. Homes are still selling. They are just selling into a more crowded field, to buyers who can afford to be pickier than they have been in years.
            </p>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0', lineHeight: 1.7 }}>
                <b>The short version:</b> more homes on the market means buyers are comparing more and overlooking less. Condition problems and ambitious pricing that got a pass in a tight market do not get a pass now. Well-priced, well-presented homes still sell quickly. Everything else waits.
              </p>
            </div>

            <h2 style={styles.h2}>What a 36.6% inventory jump actually changes</h2>
            <p style={styles.bodyP}>
              When inventory rises this much, the shift is less about price and more about behavior. Buyers walk into a showing having already toured three comparable homes that week. They are comparing your kitchen to the one they saw on Tuesday. They notice the deferred maintenance, because the house down the street does not have any. And they are far less willing to overlook a price that was set on hope rather than on comparable sales.
            </p>
            <p style={styles.bodyP}>
              Buyers also have more room to negotiate than they have had in years. Inspection responses, closing credits, timelines: all of it is back on the table. In 2021, asking for repairs could cost you the house. In 2026, it is a normal part of the conversation.
            </p>

            <h2 style={styles.h2}>If you are selling: the bar went up, not the door closed</h2>
            <p style={styles.bodyP}>
              Here is what I want every seller to hear: this is still a market where prepared homes sell at full price. I know because I am selling them.
            </p>
            <p style={styles.bodyP}>
              On July 10, 2026, my{' '}
              <Link href="/properties/4611-76th-street-mukilteo" style={styles.link}>
                Mukilteo listing at 4611 76th Street SW
              </Link>{' '}
              closed at its full $975,000 list price after 39 days on market. In May, my Arlington listing sold at its full $625,000 list price. Neither of those happened by accident, and neither happened because the market was doing sellers any favors. They happened because both homes were priced honestly from day one and presented at their absolute best before the first photo was taken.
            </p>
            <p style={styles.bodyP}>
              Across my listings, my average sale-to-list ratio is 102.3%, against a county average of 100.2%. That two-point gap is the measurable value of preparation and honest pricing. On a $750,000 home, it is worth roughly $15,000.
            </p>

            <h3 style={styles.h3}>Three things I would do before listing right now</h3>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <b>Price to the market you are in, not the one you remember.</b> The first weeks of a listing are when buyer attention peaks. I wrote about why in{' '}
                <Link href="/blog/first-72-hours" style={styles.link}>
                  The First 72 Hours
                </Link>
                , and it matters more now than it did when I wrote it.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Fix the things buyers will compare.</b> With a third more inventory, your home is being measured against its neighbors in a way it was not last year. Small condition issues now carry real weight.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Present it fully: prep, staging, professional photography.</b> The homes winning in this market look ready the moment they hit the search results. My{' '}
                <Link href="/sellers" style={styles.link}>
                  seller process
                </Link>{' '}
                is built around exactly this.
              </li>
            </ul>

            <h2 style={styles.h2}>If you are buying: this is your best window in years</h2>
            <p style={styles.bodyP}>
              More homes to choose from, a few more days to decide, and real room to negotiate. That is a meaningful change from the market that burned out so many buyers over the past few years. You can tour a home twice. You can write an offer with an inspection contingency and not feel reckless. You can compare.
            </p>
            <p style={styles.bodyP}>
              One honest caution: the well-priced, well-presented homes still move quickly. If a home has been prepared properly and priced to its comps, you are not the only one who noticed. My current{' '}
              <Link href="/properties/3520-192nd-pl-se-bothell" style={styles.link}>
                Bothell listing in the Village at Brookshire
              </Link>
              , listed at $1,150,000, is a good example of what a fully prepared home looks like in this market. When you find that home, be ready to act with confidence, not panic.
            </p>

            <h2 style={styles.h2}>What I am telling my own clients</h2>
            <p style={styles.bodyP}>
              Whether you are on the buying side or the selling side, the story of this market is the same: the fundamentals are back. Preparation, honest pricing, and patience are being rewarded. Shortcuts are being punished, gently but consistently.
            </p>
            <p style={styles.bodyP}>
              If a move is part of your next chapter, this is a market you can work with. It just asks you to do it thoughtfully. That is what I am here for: walking alongside you through the numbers, the prep, and the negotiation, so the decision you make is a clear-eyed one.
            </p>

            <p style={{ ...styles.bodyP, fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: 'var(--color-forest)', marginTop: '40px' }}>
              Always, Kim
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Wondering what this market means for your home?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                Call or text me at (425) 250-9422 for a straight answer about your street, your timing, and your numbers. No pressure, no script.
              </p>
              <a href="tel:+14252509422" style={styles.ctaButton}>
                Call Kim at (425) 250-9422
              </a>
            </div>

            <h2 style={styles.h2}>Related reading</h2>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/mukilteo-full-price-sale-cooling-market" style={styles.link}>
                  How a Mukilteo Home Sold for Full Price in a Cooling Market
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/first-72-hours" style={styles.link}>
                  The First 72 Hours: Why They Make or Break Your Home Sale
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/sellers" style={styles.link}>
                  How I Help Sellers in Snohomish County
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>Market statistics above reflect July 2026 Snohomish County data and are subject to change month to month. Past performance is not a guarantee of future results. Kim Pelham is a licensed real estate broker in Washington State, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>

        {/* Visible FAQ mirrors the FAQPage JSON-LD emitted in layout.tsx.
            emitSchema is off here to avoid duplicate FAQPage schema. */}
        <FAQSection
          title="Snohomish County inventory, frequently asked"
          backgroundColor="#F8F5F0"
          emitSchema={false}
          faqs={[
            {
              question: 'Is now a bad time to sell a home in Snohomish County?',
              answer:
                'No, but it is a less forgiving one. Homes for sale in Snohomish County were up 36.6% in July 2026 compared with a year earlier, so buyers are comparing more homes and overlooking less. Well-priced, well-presented homes are still selling quickly and at strong prices. Broker Kim Pelham\'s listings average a 102.3% sale-to-list ratio versus the 100.2% county average, and her recent Mukilteo and Arlington listings both sold at full list price in 2026. The homes that struggle are the ones priced ambitiously or listed without preparation.',
            },
            {
              question: 'How long do homes take to sell in Snohomish County right now?',
              answer:
                'In July 2026, homes in Snohomish County averaged 28 days on market, up from 25 days in July 2025. That average covers a wide range: well-prepared, honestly priced homes often sell faster, while overpriced or under-prepped listings can sit well past the average.',
            },
            {
              question: 'What does rising inventory mean for buyers in Snohomish County?',
              answer:
                'More choice and more negotiating room. With 36.6% more homes for sale than a year ago, buyers can tour homes more than once, compare options, and negotiate on price, inspection items, and timelines in a way that was rarely possible during the tight-market years. The one caution: well-priced, well-presented homes still sell quickly, so buyers should be ready to move with confidence when the right home appears.',
            },
            {
              question: 'Do homes still sell for full price in Snohomish County?',
              answer:
                'Yes. On July 10, 2026, Kim Pelham\'s Mukilteo listing at 4611 76th Street SW sold at its full $975,000 list price after 39 days on market, and her Arlington listing sold at its full $625,000 list price on May 29, 2026. Both sales came from the same approach: honest pricing from day one plus full preparation, staging, and professional photography before listing.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
