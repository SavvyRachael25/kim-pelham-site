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
  quote: {
    background: 'var(--color-cream)',
    padding: '28px 32px',
    borderRadius: '8px',
    margin: '32px 0',
    fontFamily: 'var(--font-body)',
    fontSize: '1.1rem',
    color: 'var(--color-text)',
    lineHeight: 1.8,
    fontStyle: 'italic' as const,
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

export default function MukilteoFullPriceSalePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="How a Mukilteo Home Sold for Full Price in a Cooling Market"
          subtitle="By Kim Pelham · August 17, 2026 · 8 min read"
          image="/images/mukilteo-01-front-exterior.jpg"
          imageAlt="The front exterior of 4611 76th Street SW in Mukilteo, a remodeled NW Contemporary home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              On July 10, 2026, my listing at{' '}
              <Link href="/properties/4611-76th-street-mukilteo" style={styles.link}>
                4611 76th Street SW in Mukilteo
              </Link>{' '}
              (NWMLS #2513590) closed at its full $975,000 list price after 39 days on market. It closed in a July when Snohomish County inventory was up 36.6% year over year and buyers had more homes to compare than they have had in years. I want to walk you through how that happened, because none of it was luck, and all of it is repeatable.
            </p>

            <p style={styles.bodyP}>
              I write case studies like this one because &quot;full price in a cooling market&quot; sounds like a slogan until you see the working parts. There were exactly two: honest pricing and full preparation. That is the whole recipe. The rest of this post is what those two things looked like in practice.
            </p>

            <h2 style={styles.h2}>The backdrop: a market full of choices</h2>
            <p style={styles.bodyP}>
              Context matters here. In July 2026, the number of homes for sale in Snohomish County was 36.6% higher than the year before, and the average home was taking 28 days to sell. Buyers were comparing more homes, negotiating harder, and walking away from listings with condition issues or wishful pricing. I broke the county numbers down in{' '}
              <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                my August market post
              </Link>{' '}
              if you want the full picture.
            </p>
            <p style={styles.bodyP}>
              In that environment, a full-price sale is not the default outcome. It is the result of decisions made weeks before the listing ever went live.
            </p>

            <h2 style={styles.h2}>The home: remodeled, and presented like it</h2>
            <p style={styles.bodyP}>
              The house itself gave us plenty to work with: a fully remodeled NW Contemporary positioned for Olympic Mountain views, with three decks, a quartz kitchen, a walk-in primary, a hot tub, and RV parking. Homes like this one are why Mukilteo holds its value. But a good house does not sell itself in a market with this much inventory. Buyers in July 2026 had seen too many good houses to be impressed by good alone.
            </p>
            <p style={styles.bodyP}>
              So we treated the listing like a launch, not a posting.
            </p>

            <h2 style={styles.h2}>Decision one: price it honestly</h2>
            <p style={styles.bodyP}>
              We priced the home at $975,000 based on what comparable homes were actually selling for, not on what we hoped a bidding war might produce. In a cooling market, an ambitious price is not a negotiating strategy. It is a signal to every buyer comparing your home against three others that they should keep comparing.
            </p>
            <p style={styles.bodyP}>
              An honest price does the opposite. It tells prepared buyers that this is a serious listing from a seller who understands the market. And when the right buyer arrived, there was no gap to argue over. The home was worth its price, the buyer could see it, and it closed at that price.
            </p>

            <h2 style={styles.h2}>Decision two: prepare everything before the photos</h2>
            <p style={styles.bodyP}>
              My preparation process is the same on every listing: prep the home, stage it, and photograph it professionally, in that order, before it goes live. For sellers who need more help, my{' '}
              <Link href="/home-transition-team" style={styles.link}>
                Home Transition Team
              </Link>{' '}
              covers repairs, staging, and selling as one coordinated effort, so nothing falls on the homeowner to manage alone.
            </p>
            <p style={styles.bodyP}>
              On this home, that meant refreshing the house before it ever met a camera, then{' '}
              <Link href="/staging" style={styles.link}>
                staging
              </Link>{' '}
              it so buyers walking through could feel the life the house makes possible: coffee on the deck facing the Olympics, guests spread across three levels, the hot tub on a cold clear night. Staging is not decoration. It is translation. It turns square footage into a next chapter that buyers can picture themselves living.
            </p>

            <h2 style={styles.h2}>What the sellers said</h2>
            <p style={styles.bodyP}>
              I will let my sellers describe the experience in their own words. From Dana Murphy-Love&apos;s public Google review:
            </p>
            <div style={styles.quote}>
              &quot;We utilized her concierge service with her contractor recommendation to refresh our home to get it ready for sale as well as professional staging... We were able to sell fairly quickly in a down market.&quot;
            </div>
            <p style={styles.bodyP}>
              That is the model working as intended: the preparation handled, the home presented fully, and a sale at full price in a market where that outcome has become the exception.
            </p>

            <h2 style={styles.h2}>What 39 days actually means</h2>
            <p style={styles.bodyP}>
              I want to be honest about the timeline, because it is part of the lesson. This home took 39 days to sell, against a county average of 28. In the frenzy years, 39 days would have felt like an emergency. It is not. It is what patience looks like when a home is priced correctly.
            </p>
            <p style={styles.bodyP}>
              The pressure at day 25 or 30 of a listing is real. This is the moment when many sellers cut the price, and when a price cut often costs more than the waiting would have. Because the price was honest and the presentation was complete, we could hold with confidence. The home did not need to become cheaper. It needed to meet its buyer. On day 39, it did, at the full $975,000.
            </p>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0', lineHeight: 1.7 }}>
                <b>The takeaway:</b> in a cooling market, full price is still available. It goes to the sellers who price to the market on day one and present the home completely before the first photo. It does not go to sellers who price high and hope.
              </p>
            </div>

            <h2 style={styles.h2}>If your home is next</h2>
            <p style={styles.bodyP}>
              Every home and every street is different, and I would never promise you a specific outcome. What I can promise is the process: an honest read of your home&apos;s value, a preparation plan that fits your situation and budget, and someone walking alongside you from the first conversation to the closing table. If selling is part of your next chapter, that process is where it starts.
            </p>

            <p style={{ ...styles.bodyP, fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: 'var(--color-forest)', marginTop: '40px' }}>
              Always, Kim
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Curious what your home could sell for?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                Call or text me at (425) 250-9422 and I will give you an honest read on your home, your timing, and what preparation would actually pay off.
              </p>
              <a href="tel:+14252509422" style={styles.ctaButton}>
                Call Kim at (425) 250-9422
              </a>
            </div>

            <h2 style={styles.h2}>Related reading</h2>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                  Snohomish County Inventory Just Jumped 36.6%: What It Means If You&apos;re Buying or Selling
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/properties/4611-76th-street-mukilteo" style={styles.link}>
                  See the sold listing: 4611 76th Street SW, Mukilteo
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/staging" style={styles.link}>
                  How I Stage Homes to Sell
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/home-transition-team" style={styles.link}>
                  The Home Transition Team: Repairs, Staging, and Selling, Handled
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>Sale details reflect NWMLS listing #2513590, closed July 10, 2026. Market statistics reflect July 2026 Snohomish County data and are subject to change. Every home and market situation is different, and past results are not a guarantee of future outcomes. Kim Pelham is a licensed real estate broker in Washington State, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>

        {/* Visible FAQ mirrors the FAQPage JSON-LD emitted in layout.tsx.
            emitSchema is off here to avoid duplicate FAQPage schema. */}
        <FAQSection
          title="Full-price sales in a cooling market, frequently asked"
          backgroundColor="#F8F5F0"
          emitSchema={false}
          faqs={[
            {
              question: 'What makes a home sell for full price in a slow market?',
              answer:
                'Two things, working together: honest pricing and complete preparation. Pricing to actual comparable sales (not to hope) tells serious buyers the listing is worth their attention, and full preparation (repairs, staging, professional photography, all before the listing goes live) makes the home compare well against the growing number of alternatives. Broker Kim Pelham used exactly this approach on 4611 76th Street SW in Mukilteo, which sold at its full $975,000 list price on July 10, 2026, while Snohomish County inventory was up 36.6% year over year.',
            },
            {
              question: 'Is 39 days on market a long time in Snohomish County?',
              answer:
                'It is slightly longer than the July 2026 county average of 28 days, and that is not a problem when the pricing is right. The Mukilteo home at 4611 76th Street SW took 39 days and still closed at its full $975,000 list price. When a home is priced honestly and presented completely, a longer timeline means the home is waiting for its buyer, not that something is wrong. The costly mistake is panic-cutting the price in week three or four.',
            },
            {
              question: 'Does staging really help a home sell?',
              answer:
                'In a market with more inventory, staging is one of the main ways a home separates itself from the competition. Buyers comparing several similar homes respond to the one they can picture living in. Kim Pelham stages and professionally photographs every listing before it goes live, and her Home Transition Team can also handle repairs and preparation for sellers who need the full service. The seller of the Mukilteo home wrote in a public review that they used the concierge service, contractor recommendation, and professional staging, and were able to sell fairly quickly in a down market.',
            },
            {
              question: 'What is the Home Transition Team?',
              answer:
                'The Home Transition Team is Kim Pelham\'s coordinated model for getting a home ready to sell: repairs, staging, and the sale itself, managed as one effort instead of three separate projects the homeowner has to run. It exists for sellers who do not have the time, energy, or contractor contacts to prepare a home on their own, and it is the process behind recent full-price sales in Mukilteo and Arlington.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
