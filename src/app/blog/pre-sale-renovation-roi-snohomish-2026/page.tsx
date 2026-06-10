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
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    margin: '24px 0 32px',
  } as const,
  th: {
    textAlign: 'left' as const,
    borderBottom: '2px solid var(--color-forest)',
    padding: '12px 10px',
    color: 'var(--color-forest)',
    fontWeight: 700,
  } as const,
  td: {
    borderBottom: '1px solid var(--color-border)',
    padding: '12px 10px',
    color: 'var(--color-text)',
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

export default function PreSaleRenovationROIPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Should You Renovate Before Selling Your Snohomish County Home? A 2026 ROI Reality Check"
          subtitle="By Kim Pelham · June 9, 2026 · 9 min read"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="A staged kitchen photographed for listing"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* AEO opener */}
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              In Snohomish County in 2026, most sellers do not need a kitchen remodel before listing. They need three to four targeted updates that almost always pay back at closing: paint, lighting, flooring repairs, and professional staging. The national 2024 Cost vs Value Report finds that exterior projects (garage door replacement, manufactured stone veneer, steel entry door) recoup 96% to 194% of their cost on average, while interior remodels (major kitchen, primary suite addition) recoup just 38% to 56%. The lesson is simple: spend where buyers see, skip where they do not.
            </p>

            <p style={styles.bodyP}>
              I have been a Snohomish County broker for 17 years. Every year I walk dozens of sellers through this exact decision: which updates to make before listing, which to leave alone, and how to pay for the ones that move the needle. This guide pulls together the national ROI data, the local NWMLS market reality, and what I see actually happen on listings in Everett, Mill Creek, Bothell, Lake Stevens, Marysville, and Mukilteo.
            </p>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-forest)', margin: '0 0 6px 0', lineHeight: 1 }}>
                102.3%
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0 0 8px 0', lineHeight: 1.6 }}>
                Average sale-to-list ratio for homes I have prepped and staged before listing, versus a Snohomish County market average closer to 99 to 100% in recent months. The right pre-sale prep does not just attract buyers, it shifts the negotiation.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#595959', margin: 0 }}>
                Source: Kim Pelham verified transaction data. Market average from{' '}
                <a href="https://www.nwmls.com/statistics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                  NWMLS monthly statistics
                </a>
                .
              </p>
            </div>

            <h2 style={styles.h2}>The 2024 Cost vs Value report: what the data actually says</h2>
            <p style={styles.bodyP}>
              Every year, the{' '}
              <a href="https://www.jlconline.com/cost-vs-value/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                Cost vs Value Report
              </a>{' '}
              (now published by JLC, formerly Remodeling Magazine) surveys real estate professionals across the country to estimate how much of a renovation project is recouped at sale. The 2024 edition tells a clear story: high-visibility exterior projects pay back the best, and major interior remodels almost never recoup their full cost.
            </p>

            <h3 style={styles.h3}>Top recouped projects nationally (2024)</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Project</th>
                  <th style={styles.th}>Avg recouped</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Garage door replacement</td>
                  <td style={styles.td}>194%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Manufactured stone veneer</td>
                  <td style={styles.td}>153%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Steel entry door replacement</td>
                  <td style={styles.td}>188%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Minor kitchen remodel (mid-range)</td>
                  <td style={styles.td}>96%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Vinyl siding replacement</td>
                  <td style={styles.td}>80%</td>
                </tr>
              </tbody>
            </table>

            <p style={styles.bodyP}>
              Notice the pattern. The top recouped projects are not glamorous. A new garage door is not a story you tell at dinner. But buyers see it from the curb, and it signals a home that has been maintained. That signal moves the price.
            </p>

            <h3 style={styles.h3}>Bottom recouped projects nationally (2024)</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Project</th>
                  <th style={styles.th}>Avg recouped</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Major upscale kitchen remodel</td>
                  <td style={styles.td}>38%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Primary suite addition</td>
                  <td style={styles.td}>43%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Upscale bathroom addition</td>
                  <td style={styles.td}>45%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Backyard patio</td>
                  <td style={styles.td}>56%</td>
                </tr>
              </tbody>
            </table>

            <p style={styles.bodyP}>
              For every $1,000 you spend on an upscale kitchen remodel right before listing, you can expect to get back about $380 at closing. For every $1,000 you spend on a new garage door, you can expect about $1,940. The math is not subtle.
            </p>

            <h2 style={styles.h2}>What this means for Snohomish County specifically</h2>
            <p style={styles.bodyP}>
              National ROI averages are a starting point, not a finishing line. The local market shapes what actually moves. Right now, the{' '}
              <a href="https://www.nwmls.com/statistics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                NWMLS Snohomish County
              </a>{' '}
              market is sitting at roughly 2.2 months of inventory, with active listings up substantially year over year and the median sale price slightly below where it was a year ago. That is what a market in transition looks like. It is not a crash. It is not a frenzy. It is a market where prepared homes still sell, and unprepared homes sit.
            </p>

            <p style={styles.bodyP}>
              In a market like this, the homes that suffer most are the ones priced as if it is still 2022 and presented as if it is still 2018. Buyers in 2026 have time. They have options. They will pass on a tired listing that needs work, and they will pay full asking (or above) for a home that has been thoughtfully prepared.{' '}
              <Link href="/blog/snohomish-cooling-market-sellers-2026" style={{ color: 'var(--color-clay)' }}>
                I wrote more about the cooling market here.
              </Link>
            </p>

            <h2 style={styles.h2}>The Pelham Group concierge approach to pre-sale renovation</h2>
            <p style={styles.bodyP}>
              I do not believe every seller needs to renovate before listing. Sometimes the right move is paint, a deep clean, and beautiful staging. Sometimes it is replacing the carpet and updating the lighting. And sometimes it is genuinely a full kitchen and bathroom refresh, because the home is otherwise lovely but stuck in an era buyers do not connect with.
            </p>

            <p style={styles.bodyP}>
              The honest answer depends on the home, the neighborhood, and the buyer pool. So I do a focused walkthrough first. I look at what comparable homes are doing at list. I look at what buyers in that micro-market are actually paying for. Then I tell you what is worth doing and what is not.
            </p>

            <p style={styles.bodyP}>
              For qualifying homes, I also coordinate the entire renovation: I plan it, manage my own vetted local crew, stage it with my own hands, and finance the cost so you do not have to pay anything out of pocket. The cost of the agreed updates and staging is paid from your proceeds at closing. That is the Pelham concierge plan, and it exists because most sellers do not want to be a project manager and they do not want a contractor in their phone. They want their home prepared, photographed, and sold.
            </p>

            <h2 style={styles.h2}>Four updates that almost always pay back in our market</h2>

            <h3 style={styles.h3}>1. Paint, inside and out</h3>
            <p style={styles.bodyP}>
              The fastest, cheapest, highest-leverage change you can make. A neutral interior palette (warm whites and soft greiges) gives buyers a clean canvas. A refreshed exterior paint job, even just trim and front door, reads as a maintained home. Cost: $3,000 to $8,000 for most homes. Recouped: typically more than 100% in our market.
            </p>

            <h3 style={styles.h3}>2. Lighting upgrades</h3>
            <p style={styles.bodyP}>
              Dated brass fixtures and dim 1990s recessed cans make every other update look worse. Swapping a dozen fixtures for current finishes (warm matte black, brushed brass, simple modern shapes) changes the entire feel of a home for under $2,500. Listing photos benefit even more than walkthroughs, and listing photos are where buyers decide whether to come see your home at all.
            </p>

            <h3 style={styles.h3}>3. Targeted flooring repairs or replacement</h3>
            <p style={styles.bodyP}>
              You do not need to replace all of the flooring in your home. You usually need to address the worst rooms. Worn carpet in the primary bedroom or living areas is a deal-breaker for many buyers. Refinishing real hardwood (if you have it) or replacing the worst-shape rooms with quality LVP keeps the budget reasonable while removing the biggest objection. Cost: highly variable, but usually $4,000 to $12,000 for the targeted approach.
            </p>

            <h3 style={styles.h3}>4. Professional staging</h3>
            <p style={styles.bodyP}>
              Empty homes feel smaller than they are. Lived-in homes are full of the seller&apos;s story, not the buyer&apos;s. Professional staging (which I do myself, with my own pieces, for my listings) helps buyers imagine themselves in the home. Staged homes typically sell faster and closer to asking. The{' '}
              <a href="https://www.realtor.com/advice/sell/why-staged-homes-sell-faster/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                National Association of Realtors
              </a>{' '}
              has been publishing data on this for years, and the local Snohomish County experience matches.
            </p>

            <h2 style={styles.h2}>Three projects to skip (in 2026, in this market)</h2>

            <h3 style={styles.h3}>1. A full upscale kitchen remodel right before listing</h3>
            <p style={styles.bodyP}>
              Unless your kitchen is genuinely unusable (failed appliances, water damage, original 1970s cabinets with no buyer market), do not gut your kitchen at the last minute. A targeted refresh (paint cabinets, new hardware, new lighting, current backsplash) costs a fraction of a remodel and shows beautifully in photos.
            </p>

            <h3 style={styles.h3}>2. Adding a room or square footage</h3>
            <p style={styles.bodyP}>
              Primary suite additions and bonus room conversions recoup well under 50% nationally. They are also slow, expensive, and disruptive. If you have the square footage already, do not add more. If you do not, price accordingly.
            </p>

            <h3 style={styles.h3}>3. Custom landscaping or hardscaping</h3>
            <p style={styles.bodyP}>
              Backyard patios, outdoor kitchens, and elaborate landscaping recoup around 50% to 60%. Maintained landscaping (mulch, edging, healthy lawn, trimmed shrubs) is essential. New landscaping is rarely worth it.
            </p>

            <h2 style={styles.h2}>How to think about the financing</h2>
            <p style={styles.bodyP}>
              The hardest part for many sellers is not deciding what to update, it is coming up with the cash to do it. That is where the Pelham concierge plan changes the math. For qualifying homes, I front the cost of the agreed updates and staging, and you pay at closing from your sale proceeds. No money out of pocket. No financing application. No risk of doing work and then having the market shift.
            </p>

            <p style={styles.bodyP}>
              This is not for every home, and it is not the only way to do this. Some sellers prefer to pay as they go. Some have the cash on hand. Some homes need so little that it is a small budget regardless. The point of the concierge approach is to remove the cash-flow excuse from the decision, so the only question left is the right one: which updates make sense for this home, in this market, right now.
            </p>

            <h2 style={styles.h2}>The free guide that walks you through this</h2>
            <p style={styles.bodyP}>
              I put together a 28-page guide called The Pre-Sale Renovation Playbook. It is the same conversation I would have with you over coffee if you were thinking about listing in the next six months. It walks through the 9 updates that pay you back the most in our market, the money-pits to skip, the concierge plan in detail, a realistic 3-week timeline, real Snohomish County before-and-afters, and a printable pre-listing walkthrough checklist for your home this weekend.
            </p>

            <p style={styles.bodyP}>
              It is free. There is no obligation. I keep two active clients at a time, so I would rather start a real relationship than chase a quick sale.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Get the free Pre-Sale Renovation Playbook
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                28 pages, Snohomish County edition. What to fix, what to skip, and how the concierge plan works.
              </p>
              <Link href="/listwithkim" style={styles.ctaButton}>
                Send me the Playbook
              </Link>
            </div>

            <h2 style={styles.h2}>Related reading</h2>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/sale-to-list-ratio" style={{ color: 'var(--color-clay)' }}>
                  Understanding Your Sale-to-List Ratio (And Why Mine Is 102.3%)
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/staging-beats-price-cuts" style={{ color: 'var(--color-clay)' }}>
                  Why Staging Almost Always Beats a Price Cut
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/staging-psychology" style={{ color: 'var(--color-clay)' }}>
                  The Psychology of Staging: Why Your Brain Believes a Staged Home Is Worth More
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/sell-above-market-value" style={{ color: 'var(--color-clay)' }}>
                  How Snohomish County Homes Sell Above Market Value
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>The percentages from the 2024 Cost vs Value Report reflect national averages and are not a guarantee of returns in your specific market or on your specific home. Concierge cost-fronting is offered for qualifying listings, subject to agreement. Kim Pelham is a licensed real estate broker in Washington State, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
