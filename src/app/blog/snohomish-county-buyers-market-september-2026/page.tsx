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

export default function BuyersMarketSeptember2026Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Snohomish County Has 39% More Homes for Sale. Is It a Buyer's Market Yet?"
          subtitle="By Kim Pelham · September 15, 2026 · 7 min read"
          image="/images/neighborhood-lake-stevens-aerial.jpg"
          imageAlt="An aerial view of homes around Lake Stevens in Snohomish County"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              At the end of August there were 39.3% more homes for sale in Snohomish County than a year earlier. That is the second largest jump of any county in the Northwest MLS. Closed sales across the region fell 7.6%. So a lot of people are asking me the same question, and it is a fair one: is this finally a buyer&apos;s market?
            </p>

            <p style={styles.bodyP}>
              Short answer: not by the textbook. Longer answer below, because the textbook is not the thing that decides whether your house sells or what you pay for the next one.
            </p>

            <h2 style={styles.h2}>What August actually said</h2>
            <p style={styles.bodyP}>
              These come from the NWMLS market snapshot released September 3, 2026. I&apos;m quoting them exactly because the rounding is where the spin usually sneaks in.
            </p>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <b>Snohomish County inventory: up 39.3% year over year.</b> Only Wahkiakum County, which is tiny, grew faster.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Snohomish County median sale price: $724,500.</b> Third highest in the state behind San Juan and King.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Across all 27 NWMLS counties:</b> 24,675 active listings versus 20,219 a year ago. Closed sales down 7.6% to 5,861. Median price down 2.3% to $635,000.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Months of inventory, regionwide: 4.21.</b> It was 3.19 in August 2025.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Showings spread out.</b> Total scheduled showings fell 3.2%, but 11.4% more listings got at least one. Buyers are looking at more houses, not fewer.
              </li>
            </ul>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0', lineHeight: 1.7 }}>
                <b>The short version:</b> supply grew faster than demand, and buyers spread their attention across more homes. That is a balanced market that leans toward buyers. It is not a buyer&apos;s market, and it is a long way from a crash.
              </p>
            </div>

            <h2 style={styles.h2}>Why it is not a buyer&apos;s market yet</h2>
            <p style={styles.bodyP}>
              The rule of thumb most brokers use: under four months of inventory favors sellers, four to six is balanced, over six favors buyers. The region just crossed from 3.19 months to 4.21. That is the bottom edge of balanced. Snohomish County grew inventory faster than the region, so we are probably a little further along that line than the average, but nowhere near six.
            </p>
            <p style={styles.bodyP}>
              The other reason is price. A true buyer&apos;s market shows up in the median, and ours is $724,500. Regionwide prices eased 2.3%. That&apos;s a pause, not a discount.
            </p>
            <p style={styles.bodyP}>
              What buyers have gained is not cheap houses. It is time and choice. Two years ago you saw a house Saturday and wrote an offer Sunday night or lost it. Now you can see it twice, bring your dad, and ask for the inspection items. That&apos;s a real change and I don&apos;t want to undersell it. It just isn&apos;t the same thing as prices falling.
            </p>

            <h2 style={styles.h2}>The part everyone is skipping: rates</h2>
            <p style={styles.bodyP}>
              Sales fell 7.6% in a month when buyers had 4,400 more homes to pick from. More choice, fewer sales. That only happens when something is holding buyers back, and here it's the mortgage rate. On September 10, MarketWatch reported the 30-year fixed had crossed 7%, the first time in over a year. Steven Bourassa at the Washington Center for Real Estate Research said the same thing in the NWMLS release: high rates put a damper on August, and he expects upward pressure to continue.
            </p>
            <p style={styles.bodyP}>
              So the inventory number and the sales number are telling one story, not two. Homes are stacking up because the people who want them are waiting on a payment they can live with.
            </p>

            <h2 style={styles.h2}>If you&apos;re buying</h2>
            <p style={styles.bodyP}>
              Use the time. Tour more than you think you need to, because the comparison is what teaches you what a fair price looks like on a given street. Negotiate on the things that cost sellers less than a price cut: closing credits, repairs, a rate buydown, a longer close. And get pre-approved at today&apos;s rate, not the one you are hoping for. If rates drop, you refinance. If they don&apos;t, you already own the house.
            </p>

            <h2 style={styles.h2}>If you&apos;re selling</h2>
            <p style={styles.bodyP}>
              Your buyer has 39% more options than last year&apos;s buyer did, and they are touring most of them. So the bar for condition and pricing went up. Homes that are priced on the comps and ready on day one are still selling. I wrote in August about a Mukilteo house that closed at full list price in this exact market, and the reason was not luck. It was preparation.
            </p>
            <p style={styles.bodyP}>
              The homes that sit are the ones priced on what the neighbor got in 2022, or listed with the deferred maintenance still on the to-do list. In a tight market buyers forgave that. Not now.
            </p>
            <p style={styles.bodyP}>
              And if you are wondering whether to wait for spring: I can&apos;t tell you where rates will be in March. Nobody honest can. What I can tell you is that there are fewer serious buyers right now and they are less distracted, and a well prepared house in a quieter market gets more attention per showing, not less.
            </p>

            <h2 style={styles.h2}>What I&apos;m watching</h2>
            <p style={styles.bodyP}>
              The Federal Reserve meets in mid September. Bourassa expects a short-term rate increase, which would not help mortgage rates. The September NWMLS snapshot comes out in early October, and the number I care about is whether Snohomish County inventory keeps growing at this pace or starts to level off. If it levels, this is the new normal. If it keeps climbing into winter, with rates still over 7% and the sellers who listed in August starting to cut prices to get out before the holidays, then the buyer&apos;s market question gets a different answer, and I&apos;ll write that one too.
            </p>
            <p style={styles.bodyP}>
              Either way, the honest read for September is the same as it was in August, just with bigger numbers behind it. Buyers have room. Sellers have to earn the sale. Neither side gets to coast.
            </p>

            <p style={{ ...styles.bodyP, fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: 'var(--color-forest)', marginTop: '40px' }}>
              Always, Kim
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Want the read on your street, not the county?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                Thirty minutes on the phone. Pick a time and I will call you. No pressure, no script.
              </p>
              <a href="https://thepelhamgroupnw.com/book" style={styles.ctaButton}>
                Book a call with Kim
              </a>
            </div>

            <h2 style={styles.h2}>Related reading</h2>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                  Snohomish County Inventory Just Jumped 36.6%: What It Means If You Are Buying or Selling
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/mukilteo-full-price-sale-cooling-market" style={styles.link}>
                  How a Mukilteo Home Sold for Full Price in a Cooling Market
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/what-buyers-want-snohomish-county-2026" style={styles.link}>
                  What Buyers Want in Snohomish County in 2026
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>Market statistics above come from the Northwest Multiple Listing Service August 2026 Market Snapshot, published September 3, 2026, and the MarketWatch mortgage rate report of September 10, 2026. They are subject to change month to month. Past performance is not a guarantee of future results. Kim Pelham is a licensed real estate broker in Washington State, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>

        {/* Visible FAQ mirrors the FAQPage JSON-LD emitted in layout.tsx.
            emitSchema is off here to avoid duplicate FAQPage schema. */}
        <FAQSection
          title="Buyer's market or not, frequently asked"
          backgroundColor="#F8F5F0"
          emitSchema={false}
          faqs={[
            {
              question: 'Is Snohomish County a buyer\'s market in 2026?',
              answer:
                'Not by the standard definition. As of August 2026 the NWMLS region had 4.21 months of inventory, which is the low end of balanced (four to six months). A buyer\'s market usually means six months or more. Snohomish County inventory grew 39.3% year over year, faster than the region, so the county leans toward buyers more than most, but the median sale price was still $724,500. Buyers have more choice and more negotiating room than in 2024 or 2025. They do not have falling prices.',
            },
            {
              question: 'How many more homes are for sale in Snohomish County?',
              answer:
                'At the end of August 2026, active listings in Snohomish County were up 39.3% compared with August 2025, according to the Northwest Multiple Listing Service. That was the second largest increase of the 27 counties NWMLS tracks. Across the whole NWMLS area, active listings rose to 24,675 from 20,219, about 4,400 more homes on the market.',
            },
            {
              question: 'Are home prices dropping in Snohomish County?',
              answer:
                'Slightly at the regional level, not meaningfully at the county level. The NWMLS-wide median sale price fell 2.3% year over year to $635,000 in August 2026. Snohomish County\'s median was $724,500, the third highest in the service area. More inventory has slowed price growth, but it has not produced discounts.',
            },
            {
              question: 'Should I wait until spring to sell my house in Snohomish County?',
              answer:
                'Nobody can promise where mortgage rates will be in March 2027. What is true right now is that there are fewer active buyers, they are less rushed, and a prepared, honestly priced home in a quieter market gets more attention per showing. Broker Kim Pelham\'s advice is to price on current comparable sales, finish the deferred maintenance before listing, and stage the home, whether you list in September or wait for spring.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
