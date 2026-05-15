'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import FAQSection from '@/components/FAQSection';

export default function PelhamPostAprilWeek4() {
  const h2Style = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.65rem',
    color: '#1C1917',
    marginTop: '48px',
    marginBottom: '16px',
    lineHeight: 1.2,
    scrollMarginTop: '100px',
  } as const;

  const pStyle = { marginBottom: '20px' } as const;

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 50vw, 540px)' }}>
          <Image
            src="/images/potlatch-brien-sunset-golden.jpg"
            alt="Golden sunset over Puget Sound from 1406 Potlatch Beach Road, Marysville WA, April 2026"
            fill
            priority
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
            sizes="100vw"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '36px',
              left: '32px',
              right: '32px',
              maxWidth: '780px',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: '#B8845C',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '5px 10px',
                  borderRadius: '3px',
                }}
              >
                The Pelham Post
              </span>
              <span
                style={{
                  backgroundColor: 'rgba(248,245,240,0.15)',
                  color: '#F8F5F0',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Market Read · April 24, 2026
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.15,
                textShadow: '0 2px 16px rgba(0,0,0,0.55)',
              }}
            >
              The Snohomish Market Is Slower, But Still Moving When Priced Right
            </h1>
          </div>
        </div>

        {/* Article body */}
        <article
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: 'clamp(32px, 5vw, 64px) clamp(20px, 5vw, 32px)',
            fontFamily: 'var(--font-body)',
            color: '#2A2724',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          {/* TL;DR, the speakable summary for voice search and AEO */}
          <div
            id="tldr"
            style={{
              backgroundColor: '#F8F5F0',
              borderLeft: '4px solid #2F5233',
              padding: '24px 28px',
              marginBottom: '36px',
              borderRadius: '0 4px 4px 0',
            }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: '#2F5233', margin: '0 0 8px 0', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
              The short version
            </p>
            <p style={{ margin: 0, color: '#1C1917', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Snohomish County inventory jumped 51.8% year over year in March 2026, giving buyers more to choose from. Snohomish still has only 2.04 months of supply, second tightest in the state. Pace has cooled a bit, and well-priced homes are still finding offers in days. A balanced market is 4 to 6 months. We are not there yet.
            </p>
          </div>

          {/* Opening story */}
          <p style={{ fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '24px', color: '#1C1917' }}>
            I put a listing active on Monday. By this week it already had multiple offers on the table and is going over asking.
          </p>
          <p style={pStyle}>
            That is what I am seeing on the ground. The market is a little slower than it was last spring, and you have more inventory to look at, but well-priced homes are still moving fast. If you have been waiting for the picture to clarify before you make a move, this is the picture.
          </p>

          {/* Market data */}
          <h2 id="market-data" style={h2Style}>What the Snohomish and King County data actually says</h2>

          <p style={pStyle}>
            Snohomish County active listings jumped <strong>51.8%</strong> year over year in March 2026, one of the biggest increases anywhere in Washington state. On paper, that sounds like a buyer market is forming.
          </p>
          <p style={pStyle}>
            We are still at <strong>2.04 months of inventory</strong> in Snohomish, the second tightest market in Washington. A balanced market is 4 to 6 months, so even with the inventory growth, the supply side is well below balanced.
          </p>
          <p style={pStyle}>
            What actually happened is this: mortgage rates stuck above 6.5% have slowed the <em>buying</em> side of the equation. Homes linger a bit longer on the market than they did last spring. Average days on market in Snohomish County ticked up from 7 in March 2025 to 10 in March 2026. A small shift, but real.
          </p>
          <p style={pStyle}>
            On the supply side, the well-priced and well-staged homes are still meeting active buyers in days. The pace has slowed a bit. The fundamentals still favor sellers who price to the comps.
          </p>

          <div
            style={{
              backgroundColor: '#F8F5F0',
              borderLeft: '4px solid #B8845C',
              padding: '24px 28px',
              margin: '32px 0',
              borderRadius: '0 4px 4px 0',
            }}
          >
            <p style={{ margin: 0, fontStyle: 'italic', color: '#3D3D3D' }}>
              <strong style={{ color: '#2F5233' }}>Snohomish County median sales price (March 2026):</strong> $738,000<br />
              <strong style={{ color: '#2F5233' }}>King County median sales price (March 2026):</strong> $859,618<br />
              <strong style={{ color: '#2F5233' }}>Snohomish months of inventory:</strong> 2.04<br />
              <strong style={{ color: '#2F5233' }}>Snohomish inventory growth YoY:</strong> +51.8%<br />
              <span style={{ fontSize: '0.85rem', color: '#6B6B6B' }}>Source: Northwest Multiple Listing Service monthly market snapshot, March 2026.</span>
            </p>
          </div>

          {/* Why it matters section */}
          <h2 id="pricing-strategy" style={h2Style}>The two things that still matter: price and presentation</h2>

          <p style={pStyle}>
            Price and presentation. That is it. Priced to the comps and staged well, homes in Snohomish and King Counties are still finding offers in days. Priced above the comps, they tend to take longer and often see a price adjustment before the right offer comes.
          </p>
          <p style={pStyle}>
            This is not theoretical. I had this exact scenario play out in Arlington recently. The seller wanted to list at $630,000. I recommended $625,000. They went with $630,000. We got no action. Dropped to $625,000 and it sold almost immediately. A $5,000 swing was the difference between sitting for weeks and getting an offer in days.
          </p>
          <p style={pStyle}>
            Buyers are doing their homework. They have Zillow, Redfin, the MLS, and their own spreadsheets, and they know what a home is worth before they walk in. Pricing close to the comps from day one is showing up in faster offers. Pricing well above the comps is showing up in longer days on market and eventual adjustments.
          </p>

          {/* Featured listing */}
          <h2 id="featured-listing" style={h2Style}>Featured listing: 1406 Potlatch Beach Road, Marysville</h2>

          <p style={pStyle}>
            My current featured listing is a 3-bedroom, 2-bathroom high-bank waterfront at <strong>$799,900</strong>. West-facing lot, 1,662 square feet of livable space on a third of an acre, built in 1925 with good bones and a deck that faces the sunset. MLS #2504310.
          </p>
          <p style={pStyle}>
            The view is the whole thing. The sunset photo at the top of this post was taken on a phone from the property deck. Not a drone. Not staging. Just Tuesday evening.
          </p>
          <p style={pStyle}>
            For context, comparable Seattle waterfront on Puget Sound typically starts at $3 million. This is the same Sound, the same sunsets, at roughly a third of the price. If you have been priced out of Seattle waterfront, this is the listing to look at.
          </p>

          <div style={{ margin: '28px 0' }}>
            <Link
              href="/properties/1406-potlatch-beach-road-marysville"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: '#2F5233',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                letterSpacing: '1px',
              }}
            >
              See the full listing
            </Link>
          </div>

          {/* Open house */}
          <h2 id="open-house" style={h2Style}>Open house Saturday: 1914 122nd Place SE, Everett</h2>

          <p style={pStyle}>
            <strong>Saturday, April 25, from 1 to 3 PM.</strong> Single-family home in Everett, 3 bed, 2 bath, 1,944 square feet, on a 10,000 square foot lot. One block from Silver Lake. Listed at $750,000. Built in 1969 with good bones and a recently updated kitchen. MLS #2509462.
          </p>
          <p style={pStyle}>
            Walk the block before you tour. You will feel the neighborhood faster that way. Coffee will be on.
          </p>
          <p style={pStyle}>
            <a
              href="https://www.zillow.com/homedetails/1914-122nd-Pl-SE-Everett-WA-98208/38520066_zpid/"
              style={{ color: '#2F5233', fontWeight: 600, textDecoration: 'underline' }}
            >
              See the Zillow listing
            </a>
            {' '}or text Kim at{' '}
            <a href="tel:+14252509422" style={{ color: '#2F5233', fontWeight: 600, textDecoration: 'underline' }}>425-250-9422</a>
            {' '}with questions.
          </p>

          {/* Local pick */}
          <h2 id="local-pick" style={h2Style}>Local pick: J&amp;L Barbecue, Snohomish County</h2>

          <p style={pStyle}>
            If you are touring the open house Saturday and need a post-walkthrough meal,{' '}
            <a href="https://jandlbbqsnohomish.com/" style={{ color: '#2F5233', fontWeight: 600, textDecoration: 'underline' }}>
              J&amp;L Barbecue
            </a>
            {' '}does real Texas-style smoked meats out of three locations in Snohomish, Everett, and Monroe. Pulled pork, brisket, tri tip, pork ribs. Closed Mondays and Tuesdays, so Saturday is the move.
          </p>

          {/* On the fence */}
          <h2 id="on-the-fence" style={h2Style}>If you are on the fence</h2>

          <p style={pStyle}>
            If you have been thinking about selling, you have not missed the window. You have just entered a market that rewards being prepared. Pricing strategy, staging, and presentation matter more right now than they have in years.
          </p>
          <p style={pStyle}>
            If you have been thinking about buying, there is more inventory on the market in Snohomish County than there has been in a long time. More options. More room to negotiate. The well-priced homes are still competitive, and you have more choices than you did six months ago.
          </p>
          <p style={pStyle}>
            Either way, the move is to talk through your specific situation, not to react to a headline. Text or call me and I will give you a real read on your neighborhood. No pressure and no pitch.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: '48px',
              padding: '32px 28px',
              backgroundColor: '#2F5233',
              borderRadius: '6px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: '#F8F5F0',
                margin: '0 0 20px 0',
                lineHeight: 1.3,
              }}
            >
              Thinking about making a move?
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%20read%20your%20April%20market%20update%20and%20wanted%20to%20chat."
                style={{
                  display: 'inline-block',
                  padding: '14px 32px',
                  backgroundColor: '#B8845C',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                Text Kim
              </a>
              <a
                href="tel:+14252509422"
                style={{
                  display: 'inline-block',
                  padding: '12px 30px',
                  backgroundColor: 'transparent',
                  color: '#F8F5F0',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  textDecoration: 'none',
                  border: '2px solid #F8F5F0',
                }}
              >
                Call Kim
              </a>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(248,245,240,0.8)', margin: '20px 0 0 0' }}>
              (425) 250-9422 · hello@thepelhamgroupnw.com
            </p>
          </div>
        </article>

        {/* FAQ, AEO gold */}
        <section id="faq">
          <FAQSection
            title="Snohomish Real Estate Market: Frequently Asked Questions"
            faqs={[
              {
                question: 'Is the Snohomish County real estate market slowing down in April 2026?',
                answer:
                  'Inventory in Snohomish County jumped 51.8% year over year in March 2026, which is one of the biggest increases in Washington. Average days on market ticked up from 7 days a year ago to 10 days now. The pace has cooled a bit, but the market remains seller-friendly: Snohomish still has only 2.04 months of supply, the second tightest market in Washington. Well-priced and well-staged homes are still finding offers in days.',
              },
              {
                question: 'What is the median home price in Snohomish County right now?',
                answer:
                  'The median sales price for homes sold in Snohomish County in March 2026 was $738,000, per Northwest MLS data. That is the third highest in the NWMLS service area, behind San Juan County ($1,075,000) and King County ($859,618).',
              },
              {
                question: 'What is the median home price in King County in April 2026?',
                answer:
                  'The median sales price for homes sold in King County in March 2026 was $859,618, the second highest in Washington state. King County inventory has grown year over year, but the market remains competitive for well-priced homes.',
              },
              {
                question: 'Are homes in Snohomish County getting multiple offers in 2026?',
                answer:
                  'Yes. Well-priced and well-staged homes in Snohomish County are still receiving multiple offers and often selling over asking, even as overall inventory has increased. A recent Kim Pelham listing went active Monday and had multiple offers on the table by the end of the same week, going over asking. The key variables are price accuracy and presentation quality.',
              },
              {
                question: 'What does months of inventory mean in real estate?',
                answer:
                  'Months of inventory is how long it would take to sell every active listing at the current sales pace. A balanced market is 4 to 6 months. Under 4 is a seller market. Over 6 is a buyer market. Snohomish County sits at 2.04 months in March 2026, which is a strong seller market despite rising inventory counts.',
              },
              {
                question: 'Is now a good time to sell a home in Snohomish County?',
                answer:
                  'If you have been thinking about selling, you have not missed the window. Snohomish County still favors sellers at 2.04 months of supply, well below the 4 to 6 months considered balanced. Pricing strategy and presentation matter more now than a year ago. Homes priced to the comps and prepared well are still finding offers in days.',
              },
              {
                question: 'How much waterfront home can I buy in Marysville under a million dollars?',
                answer:
                  'Marysville waterfront on Puget Sound is priced dramatically lower than comparable Seattle waterfront. Kim Pelham currently has 1406 Potlatch Beach Road listed at $799,900, a 3-bedroom 2-bathroom high-bank waterfront home on a third of an acre. Seattle waterfront with comparable Sound views typically starts at $3 million and up.',
              },
              {
                question: 'Who should I contact to buy or sell a home in Everett, Snohomish, or Marysville?',
                answer:
                  'Kim Pelham of The Pelham Group NW is a real estate broker serving Snohomish, King, Pierce, and Skagit Counties. Kim can be reached by text or call at 425-250-9422, by email at hello@thepelhamgroupnw.com, or through the contact form at thepelhamgroupnw.com.',
              },
            ]}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
