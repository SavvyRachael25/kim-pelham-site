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
};

export default function CoolingMarketPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="The Snohomish County Cooling Market in 2026: What Sellers in Mill Creek, Bothell & Everett Need to Know"
          subtitle="By Kim Pelham · June 9, 2026 · 10 min read"
          image="/images/hero-01-aerial-neighborhood.jpg"
          imageAlt="An aerial view of Snohomish County neighborhoods"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              The Snohomish County housing market in 2026 is cooler than it was in 2021 and 2022, but it is not a buyer&apos;s market and it is not a crash. Active listings are up substantially year over year, months of inventory has climbed into the 2-to-3-month range, and the median sale price is hovering near flat or slightly down from a year ago. For sellers, this means three things: pricing has to be honest from day one, presentation matters more than it did two years ago, and the brokers who prepare and price homes carefully are still getting full or above-asking offers. The brokers who treat 2026 like 2022 are watching their listings sit.
            </p>

            <p style={styles.bodyP}>
              I have been a Snohomish County broker for 17 years, through the 2008 downturn, the 2013 recovery, the 2019 stretch, the 2020-to-2022 frenzy, and the gradual normalization since. What is happening now is not a panic, and it is not a flatline. It is a market returning to a more normal shape, where preparation and pricing matter more than location alone. Here is what the data shows, what I see on the ground in Everett, Mill Creek, Bothell, Lake Stevens, Marysville, and Mukilteo, and what sellers should do about it.
            </p>

            <h2 style={styles.h2}>What the NWMLS numbers actually show</h2>
            <p style={styles.bodyP}>
              The{' '}
              <a href="https://www.nwmls.com/statistics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                Northwest Multiple Listing Service
              </a>{' '}
              publishes a monthly Snohomish County statistical report. Across the most recent months I am watching:
            </p>

            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <b>Active listings</b> have risen meaningfully year over year. More homes are on the market for buyers to choose from.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Months of inventory</b> is in the 2-to-3-month range. Under 4 months is still considered a seller&apos;s market, but it is no longer the under-1-month market we saw in 2021.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Median sale price</b> is roughly flat or slightly down year over year. This is the headline that has been making sellers nervous.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Days on market</b> is up modestly from the same months last year. Buyers are taking longer to decide.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Sale-to-list ratio</b> for the county is hovering closer to 99 to 100% on average, down from the well-above-asking averages of 2021. Well-prepared listings still beat that handily.
              </li>
            </ul>

            <p style={styles.bodyP}>
              I update the specific monthly numbers in my{' '}
              <Link href="/blog/snohomish-market-may-2026" style={{ color: 'var(--color-clay)' }}>
                monthly Snohomish County market reports
              </Link>
              . The Seattle Times also publishes{' '}
              <a href="https://www.seattletimes.com/seattle-news/real-estate/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                regular Pacific Northwest housing coverage
              </a>{' '}
              if you want a wider regional read.
            </p>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0', lineHeight: 1.7 }}>
                <b>The headline:</b> Snohomish County is in a balanced market with a slight seller tilt. Prices are stable to slightly soft. Inventory is up. Buyers have more leverage than they did two years ago, but they are still buying, and prepared homes are still selling at or above asking.
              </p>
            </div>

            <h2 style={styles.h2}>Why this is happening (and why you should not panic)</h2>
            <p style={styles.bodyP}>
              A few forces are converging:
            </p>

            <h3 style={styles.h3}>Mortgage rates are higher than the 2021 low</h3>
            <p style={styles.bodyP}>
              The 30-year fixed mortgage has been hovering in the 6.2% to 6.7% range. That is dramatically higher than the sub-3% rates that powered the 2021 frenzy, and it directly affects how much house buyers can afford. A buyer who could afford $800K at 2.8% can afford closer to $590K at 6.5%, all else equal. That is not a market collapse, but it is a real ceiling on what buyers will pay.
            </p>

            <h3 style={styles.h3}>The pent-up demand from 2020-2022 has thinned out</h3>
            <p style={styles.bodyP}>
              A lot of people who were going to buy in the next five years bought during the pandemic. That pulled buyers forward. Now the remaining pool is more selective, more patient, and more sensitive to value.
            </p>

            <h3 style={styles.h3}>Sellers who locked in 2.8% are not eager to move</h3>
            <p style={styles.bodyP}>
              The rate-lock effect. If you have a 2.8% mortgage and moving would mean trading it for a 6.5% mortgage, you are unlikely to move unless you have a strong personal reason. This has kept supply lower than it otherwise would be, which is part of why prices are not falling further.
            </p>

            <h2 style={styles.h2}>What this means for sellers in 2026</h2>
            <p style={styles.bodyP}>
              The strategy in a cooling market is almost the opposite of the strategy in a hot market. In 2021, you could list a dated home for an aggressive price, get multiple offers in 48 hours, and let competition push the final number higher. In 2026, the same listing sits, the price chases the market down, and the seller ends up netting less than they would have if they had priced honestly and presented well from day one.
            </p>

            <h3 style={styles.h3}>1. Price honestly from day one</h3>
            <p style={styles.bodyP}>
              The price-cut spiral is real. Homes that get one cut at 21 days, another at 45, and another at 70 typically sell for less than homes priced correctly the first week. The 21-day window after listing is when buyer interest is highest. Wasting that window on an aspirational price is the single most common, most expensive mistake I see sellers make in 2026.
            </p>

            <h3 style={styles.h3}>2. Prepare the home before the photos</h3>
            <p style={styles.bodyP}>
              Buyers in 2026 are looking at listings online before they ever set foot in your home. The photos are the listing. A dated, dim, cluttered photo set will lose you 80% of your potential buyer pool before you even know they were interested. I cover this in detail in my{' '}
              <Link href="/blog/pre-sale-renovation-roi-snohomish-2026" style={{ color: 'var(--color-clay)' }}>
                Pre-Sale Renovation ROI guide
              </Link>
              .
            </p>

            <h3 style={styles.h3}>3. Stage, even if you think you do not need to</h3>
            <p style={styles.bodyP}>
              Vacant homes feel smaller. Lived-in homes feel like someone else&apos;s. Staging helps buyers picture themselves in the home, which is what every offer is built on.{' '}
              <Link href="/blog/staging-beats-price-cuts" style={{ color: 'var(--color-clay)' }}>
                Staging almost always beats a price cut
              </Link>
              , because staging changes the perception of the home, where a price cut just signals weakness.
            </p>

            <h3 style={styles.h3}>4. Plan for a longer go-to-contract window</h3>
            <p style={styles.bodyP}>
              In 2021, you accepted an offer in three days. In 2026, you might accept one in fifteen days, or thirty. That is normal. Plan for it. Do not panic at day 21 and slash the price. If your home is presented well and priced honestly, the right buyer is coming.
            </p>

            <h3 style={styles.h3}>5. Expect some bumps</h3>
            <p style={styles.bodyP}>
              I made a short video about this recently. Most transactions in a cooling market have a bump, sometimes a small one, sometimes a bigger one. Inspections come back with more requests. Appraisals come back tighter. Buyers ask for credits they would not have asked for in 2021. Your broker&apos;s job is to walk you through every one of those moments and find a creative solution. That is where experience matters more than ever.
            </p>

            <h2 style={styles.h2}>What this means for buyers in 2026</h2>
            <p style={styles.bodyP}>
              You have more leverage than buyers had in 2021. You have time to look at homes more than once. You have room to negotiate on price, inspection items, and closing credits. You are not going to be in a 17-offer multiple-offer situation on most homes.
            </p>

            <p style={styles.bodyP}>
              You still need to be ready. The well-prepared, well-priced homes (the homes I am listing this year) still go fast and often above asking. The dated, overpriced homes sit. If you find a home you love that has been freshly prepared and is priced fairly, do not assume you have a month to think about it. You probably have a week.
            </p>

            <h2 style={styles.h2}>The neighborhoods I am watching most closely</h2>

            <h3 style={styles.h3}>Mill Creek</h3>
            <p style={styles.bodyP}>
              Mill Creek remains one of the most resilient sub-markets in Snohomish County. Buyers love the schools, the walkability of the Town Center, and the proximity to both Seattle and Bellevue employment. Inventory has loosened modestly, but well-prepared homes here continue to attract competitive offers.
            </p>

            <h3 style={styles.h3}>Bothell</h3>
            <p style={styles.bodyP}>
              Bothell straddles King and Snohomish counties, which means Bothell buyers are often comparing your home to similar homes in Kirkland and Woodinville. Presentation matters more here than almost anywhere else in the county. The 405-corridor commute is back to pre-pandemic levels, which has helped this market.
            </p>

            <h3 style={styles.h3}>Everett</h3>
            <p style={styles.bodyP}>
              Everett is the largest sub-market and the most varied. North Everett, Boeing-area, Silver Lake, View Ridge, and Bayside all behave differently. The Everett waterfront and Port-of-Everett area continues to attract investor and second-home interest. Single-family homes under $700K are the deepest buyer pool in the county.
            </p>

            <h3 style={styles.h3}>Lake Stevens and Marysville</h3>
            <p style={styles.bodyP}>
              The growth corridor. New construction, lake access in pockets, and more affordable price points than Mill Creek or Bothell. These markets have softened slightly more than the rest of the county on price, but they are still moving steadily. Buyers here are typically more price-sensitive, which makes honest pricing and good presentation even more important.
            </p>

            <h3 style={styles.h3}>Mukilteo</h3>
            <p style={styles.bodyP}>
              Mukilteo is the boutique market. Smaller inventory, view homes that command a real premium, and buyers who tend to be older or more established financially. Less affected by rate-driven affordability pressure than the rest of the county.
            </p>

            <h2 style={styles.h2}>What I tell my own clients</h2>
            <p style={styles.bodyP}>
              When a seller calls me in 2026, I tell them three things. First, this is still a fine market to sell in. The headlines you read about a cooling market do not mean your home will not sell. They mean preparation and pricing matter more than they used to. Second, the strategy that worked in 2021 will lose you money in 2026. We are going to do this the 2026 way. Third, my concierge plan exists exactly for this market: I prep your home, manage the updates, stage it with my own hands, and you pay at closing. No money out of pocket, no contractor-management stress, and the home shows the way it needs to show in 2026.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Get the free Pre-Sale Renovation Playbook
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                28 pages on prepping your home for a 2026 sale. What to fix, what to skip, and how the concierge plan works.
              </p>
              <Link href="/listwithkim" style={styles.ctaButton}>
                Send me the Playbook
              </Link>
            </div>

            <h2 style={styles.h2}>Related reading</h2>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/pre-sale-renovation-roi-snohomish-2026" style={{ color: 'var(--color-clay)' }}>
                  Should You Renovate Before Selling? A 2026 ROI Reality Check
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/snohomish-market-may-2026" style={{ color: 'var(--color-clay)' }}>
                  Snohomish County, May 2026: The Market Got More Honest This Month
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/staging-beats-price-cuts" style={{ color: 'var(--color-clay)' }}>
                  Why Staging Almost Always Beats a Price Cut
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/sale-to-list-ratio" style={{ color: 'var(--color-clay)' }}>
                  Understanding Your Sale-to-List Ratio (And Why Mine Is 102.3%)
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>Market statistics described above are drawn from NWMLS Snohomish County monthly reports and are subject to change month to month. Past performance is not a guarantee of future results. Kim Pelham is a licensed real estate broker in Washington State, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
