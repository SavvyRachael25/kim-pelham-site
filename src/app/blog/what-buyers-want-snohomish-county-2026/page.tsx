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

export default function WhatBuyersWantPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="What Buyers in Mill Creek, Bothell & Lake Stevens Actually Want in 2026"
          subtitle="By Kim Pelham · June 9, 2026 · 9 min read"
          image="/images/property-03-lake-stevens-waterfront.jpg"
          imageAlt="A Lake Stevens home with mountain view"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Snohomish County buyers in 2026 are more selective, more patient, and more value-conscious than the buyers of 2021. They are looking for move-in-ready condition (not just clean, but actually updated), strong school districts, walkable proximity to coffee and groceries, real outdoor space, and energy-efficient mechanicals. The dealbreakers are the obvious ones: tired finishes, hidden repair surprises, and homes that feel priced for last year. For sellers, the takeaway is simple: present your home like the prepared buyer expects it to be, or price for the buyer who wants to do the work themselves. Trying to do both at once almost always means time on market and price reductions.
            </p>

            <p style={styles.bodyP}>
              I have been writing offers and reading buyer feedback for 17 years, and in Snohomish County since 2015. The 2026 buyer is a real, specific person, and understanding what they actually want is the difference between a 14-day-to-contract listing and a 90-day-on-market price-reduction spiral. Here is what I am seeing on the ground in Mill Creek, Bothell, Lake Stevens, Everett, Marysville, and Mukilteo, supplemented by the national-level data from the{' '}
              <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                National Association of Realtors research center
              </a>
              .
            </p>

            <h2 style={styles.h2}>Who the 2026 Snohomish County buyer actually is</h2>
            <p style={styles.bodyP}>
              Roughly three buyer profiles are doing most of the moving in the county right now:
            </p>

            <h3 style={styles.h3}>The trade-up family (35 to 45 years old)</h3>
            <p style={styles.bodyP}>
              They bought their first home in 2018 to 2021. They have equity. They are looking for more space, better schools, and a yard. Their budget is typically $700K to $1.1M. They are the largest single buyer group in Snohomish County right now, and they are concentrated in Mill Creek, Bothell, north Bothell into Mill Creek, parts of Lake Stevens, and parts of Marysville.
            </p>

            <h3 style={styles.h3}>The relocating tech or healthcare worker (28 to 40 years old)</h3>
            <p style={styles.bodyP}>
              Often moving from out of state for a job at Amazon, Microsoft, Boeing, Providence, or one of the smaller PNW tech employers. They tend to be cash-strong, value-conscious, comparison-heavy, and willing to look across multiple sub-markets. They are paying particular attention to commute, schools (even if their kids are young), and finish level. They will not buy a home that needs work.
            </p>

            <h3 style={styles.h3}>The downsizer (55 to 70 years old)</h3>
            <p style={styles.bodyP}>
              Often selling a larger home elsewhere in Snohomish or King County and moving into a smaller, lower-maintenance home with single-level or mostly-single-level living. They want move-in-ready, accessible (no stairs into the home, wide doorways, accessible primary suite), and walkable or close to family. Budget varies enormously. They are concentrated in Mill Creek, Mukilteo, and pockets of Bothell.
            </p>

            <h2 style={styles.h2}>The 9 things they are looking for (ranked by what actually closes deals)</h2>

            <h3 style={styles.h3}>1. Move-in-ready condition</h3>
            <p style={styles.bodyP}>
              The single biggest factor in 2026. Buyers do not want to do work. They do not want to coordinate contractors. They do not want a paint project the first weekend they own the home. They want to move in, set up the bedrooms, order takeout, and live in their new home from day one. Updated kitchens, updated baths, fresh paint, clean flooring, and good lighting are the baseline.
            </p>

            <h3 style={styles.h3}>2. Functional, current kitchen</h3>
            <p style={styles.bodyP}>
              The kitchen is still where the buying decision lives. Counter space, current cabinets (paint or replace), updated lighting, working appliances, and an open feel toward the living areas. Buyers will overlook a dated bath. They will not overlook a dated kitchen.
            </p>

            <h3 style={styles.h3}>3. Real outdoor space</h3>
            <p style={styles.bodyP}>
              Post-pandemic, buyers care about outdoor space more than they used to. A flat usable backyard, a deck or patio, a covered area for the rainy 6 months a year. A view (water, mountains, greenbelt) is a real premium in Mukilteo, parts of Mill Creek, and Lake Stevens. Even modest outdoor space, well-presented, helps.
            </p>

            <h3 style={styles.h3}>4. Schools (still, even for buyers without kids)</h3>
            <p style={styles.bodyP}>
              The Mill Creek elementary feeders. The Northshore district lines. The Lake Stevens district. The reputable Mukilteo School District. Buyers know which schools they want, and they price homes accordingly even before they have children. Resale value lives in the school zone.
            </p>

            <h3 style={styles.h3}>5. Energy efficiency and mechanical age</h3>
            <p style={styles.bodyP}>
              Younger buyers in particular are paying attention to heat pump vs gas furnace, water heater age, attic insulation, window age, and electrical panel capacity (for EV charging). A 5-year-old heat pump and 200-amp panel is a real selling feature in 2026. A 25-year-old furnace and 100-amp panel is a real objection.
            </p>

            <h3 style={styles.h3}>6. Walkability (or driveability) to daily life</h3>
            <p style={styles.bodyP}>
              The Mill Creek Town Center radius commands a premium because buyers can walk to coffee, dinner, and groceries. The Bothell downtown waterfront similar. Buyers will pay more per square foot for proximity to walkable daily life than for almost any other neighborhood feature.
            </p>

            <h3 style={styles.h3}>7. Storage and a real garage</h3>
            <p style={styles.bodyP}>
              A two-car garage is the floor. Three is a real premium in family-oriented sub-markets. Built-in storage, mudroom, walk-in pantry, and bonus storage matter more than they used to as families consolidate into single homes.
            </p>

            <h3 style={styles.h3}>8. A flexible work-from-home space</h3>
            <p style={styles.bodyP}>
              Pandemic-era work patterns have stuck. A real home office (not just a corner in the bedroom) is still being valued. A bonus room that could be an office, a true den, or a finished basement room all read as a feature, not a bonus.
            </p>

            <h3 style={styles.h3}>9. Single-level or accessible primary suite</h3>
            <p style={styles.bodyP}>
              For downsizers and aging-in-place buyers, the primary suite on the main level is increasingly non-negotiable. A two-story home with the primary upstairs is a smaller buyer pool than a similar home with the primary on the main floor.
            </p>

            <h2 style={styles.h2}>The dealbreakers (in order of frequency)</h2>

            <h3 style={styles.h3}>1. Visible deferred maintenance</h3>
            <p style={styles.bodyP}>
              Stained ceilings, peeling caulk in the bathroom, soft spots in the bathroom floor, gutters full of debris, a roof past its rated life. Each of these signals to the buyer &quot;there is more we cannot see.&quot; The mental cost of fixing them is always larger than the actual cost.
            </p>

            <h3 style={styles.h3}>2. Dated kitchen with no upgrade plan</h3>
            <p style={styles.bodyP}>
              A 1995 oak kitchen with original tile, original appliances, and original everything. Buyers will not picture themselves cooking dinner there.
            </p>

            <h3 style={styles.h3}>3. Smells</h3>
            <p style={styles.bodyP}>
              Pet, cigarette, mold, cooking. Buyers walk in, notice within 6 seconds, and mentally decline the home before they have seen the second bedroom. Smells need to be addressed before photography, not before showings.
            </p>

            <h3 style={styles.h3}>4. Aspirational pricing</h3>
            <p style={styles.bodyP}>
              A home priced 8 to 15 percent above the supportable comp set. Buyers see the price, compare it mentally to other listings in the same range, and skip the showing. The home that sits the longest on the market in 2026 is almost always the home that started 10 percent too high.
            </p>

            <h3 style={styles.h3}>5. Bad photos</h3>
            <p style={styles.bodyP}>
              80% of buyers decide whether to come see your home based on the listing photos. Phone snapshots, dim lighting, cluttered rooms, fish-eye distortion. Bad photos are a self-inflicted dealbreaker. Professional listing photography is the single highest-ROI marketing decision a seller can make.
            </p>

            <h2 style={styles.h2}>What this means for sellers in each sub-market</h2>

            <h3 style={styles.h3}>Mill Creek</h3>
            <p style={styles.bodyP}>
              The trade-up family buyer dominates here. Schools, current kitchen, real backyard, walkable to Town Center. Move-in-ready presentation is essential. Aspirational pricing is punished. Well-prepared homes in the right sub-neighborhoods continue to attract multiple offers.
            </p>

            <h3 style={styles.h3}>Bothell</h3>
            <p style={styles.bodyP}>
              The relocating tech worker buyer dominates here. Sophisticated, comparison-heavy, expecting recently-updated finishes. They are comparing your Bothell home to similar homes in Kirkland and Woodinville, and they have done the math. Presentation needs to be at Eastside standard.
            </p>

            <h3 style={styles.h3}>Lake Stevens and Marysville</h3>
            <p style={styles.bodyP}>
              More price-sensitive buyer pool. New construction is the main competitor. Existing homes need to feel intentionally prepared (not just clean) to compete. Outdoor space and yard size are real differentiators here, more so than in Mill Creek or Bothell.
            </p>

            <h3 style={styles.h3}>Everett</h3>
            <p style={styles.bodyP}>
              The most varied buyer pool in the county. North Everett buyers are different from Silver Lake buyers are different from View Ridge buyers. Sub-neighborhood knowledge matters a lot here. First-time buyers are still active in the under-$650K range, and they are looking for move-in-ready more than they are looking for upside.
            </p>

            <h3 style={styles.h3}>Mukilteo</h3>
            <p style={styles.bodyP}>
              The downsizer and view-buyer market. Single-level living, accessible primary suites, and views command premiums. Less rate-sensitive than the rest of the county because more buyers are paying cash or close to it.
            </p>

            <h2 style={styles.h2}>How a seller uses this</h2>
            <p style={styles.bodyP}>
              Three concrete moves any seller can make based on what 2026 buyers want:
            </p>

            <ol style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '14px' }}>
                <b>Be honest about your buyer pool.</b> Which of the three buyer profiles is most likely to buy your home? What do they specifically want? Price and prep for that buyer, not for a buyer pool that does not exist.
              </li>
              <li style={{ marginBottom: '14px' }}>
                <b>Address the dealbreakers before listing.</b> If your home has smells, dated kitchen, deferred maintenance, or any obvious objections, fix them before the photos, not after the first 30 days of zero offers.
              </li>
              <li style={{ marginBottom: '14px' }}>
                <b>Match the presentation to the expected price.</b> A $1.1M home in Mill Creek is expected to show like a $1.1M home. A $600K home in Everett is held to a different bar. Match your presentation to where you are pricing.
              </li>
            </ol>

            <h2 style={styles.h2}>The work I do with sellers around buyer expectations</h2>
            <p style={styles.bodyP}>
              When I take a listing, the first conversation is not about price, it is about presentation. We walk the home with 2026 buyer expectations in mind, identify the 3 to 6 changes that will move the price up by more than they cost, and decide whether to do that work or price for the as-is buyer pool. Both paths work. The wrong path is to do half of the work and price as if you did all of it.
            </p>

            <p style={styles.bodyP}>
              For qualifying homes, I coordinate the entire prep through my concierge plan, with costs paid at closing so there is no out-of-pocket spend during the prep phase. The home shows the way 2026 buyers expect, and the family does not have to manage a single contractor along the way.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Get the free Pre-Sale Renovation Playbook
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                28 pages of what 2026 Snohomish County buyers want, what moves the price, and how the concierge plan works.
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
                <Link href="/blog/snohomish-cooling-market-sellers-2026" style={{ color: 'var(--color-clay)' }}>
                  The Snohomish County Cooling Market in 2026
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/everett-neighborhoods-buyers-guide" style={{ color: 'var(--color-clay)' }}>
                  An Everett Neighborhoods Buyer&apos;s Guide
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/staging-psychology" style={{ color: 'var(--color-clay)' }}>
                  The Psychology of Staging
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>Buyer trends described are based on the broker&apos;s 17 years of real estate experience, including work as a Snohomish County broker since 2015, supplemented by general industry research. NAR data and other published research informs but does not directly drive specific dollar values or neighborhood premiums noted here. Past performance is not a guarantee of future results. Kim Pelham is a licensed real estate broker in Washington State, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
