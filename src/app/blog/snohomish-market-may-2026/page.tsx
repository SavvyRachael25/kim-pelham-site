'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import FAQSection from '@/components/FAQSection';

export default function SnohomishMarketMay2026() {
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

  const linkStyle = {
    color: '#B8845C',
    textDecoration: 'underline',
  } as const;

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 50vw, 540px)' }}>
          <Image
            src="/images/potlatch-brien-sunset-golden.jpg"
            alt="Puget Sound sunset over Snohomish County waterfront, May 2026 market update"
            fill
            priority
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
            sizes="(max-width: 640px) 768px, (max-width: 1024px) 1024px, 1600px"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)',
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
                Market Read · May 15, 2026
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#FFFFFF',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: 1.15,
                margin: 0,
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              Snohomish County, May 2026: The Market Got More Honest This Month
            </h1>
          </div>
        </div>

        {/* Article body */}
        <article
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '56px 24px 80px',
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            lineHeight: 1.75,
            color: '#3F3A36',
          }}
        >
          <p style={pStyle} id="tldr">
            Active listings in Snohomish County jumped{' '}
            <strong>58.2% year over year</strong> in April, and the May data is
            telling the same story. That one number is doing a lot of heavy
            lifting in my conversations with sellers right now, because it
            changes how a house needs to be prepped and priced. I&apos;ve been
            selling homes here for 17 years, and this is the most &ldquo;back
            to fundamentals&rdquo; market I&apos;ve worked since rates started
            climbing in 2022.
          </p>

          <h2 style={h2Style} id="market-data">
            What the data actually says
          </h2>

          <p style={pStyle}>
            Per the{' '}
            <a
              href="https://www.nwrealtor.com/2026/05/07/nwmls-april-2026-market-report/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              April 2026 NWMLS market report
            </a>{' '}
            (the most recent county-level release as of early May 2026), new
            listings in Snohomish County rose to 1,636, up 31.4% year over
            year, and total homes for sale climbed to 2,456. That pushed months
            of inventory to <strong>2.2 months, up from 1.6</strong>. We are
            still technically in seller-leaning territory (a balanced market is
            roughly 4 to 6 months), but the gap between &ldquo;seller&apos;s
            market&rdquo; and &ldquo;balanced&rdquo; is shrinking fast.
          </p>

          <p style={pStyle}>A few more numbers worth sitting with:</p>

          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>
              The average sale price across all property types came in at
              $787,838, down 3.8% year over year, and the median sale price
              landed near $750,000 per{' '}
              <a
                href="https://www.themadronagroup.com/snohomish-county-housing-market/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                NWMLS data summarized by The Madrona Group
              </a>
              .
            </li>
            <li style={{ marginBottom: '12px' }}>
              Sales Activity Intensity (the share of listings going pending
              within 30 days) dropped to 49.0% from 54.9% the prior month.
              Translation: fewer homes are flying off the shelf in the first
              month.
            </li>
            <li style={{ marginBottom: '12px' }}>
              The 30-year fixed mortgage rate averaged 6.36% the week of May
              14, 2026, down from 6.81% a year earlier, per the{' '}
              <a
                href="https://www.freddiemac.com/pmms"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Freddie Mac Primary Mortgage Market Survey
              </a>
              . Better than 2024, but monthly payments still hurt because home
              prices held steady.
            </li>
          </ul>

          <p style={pStyle}>
            So the headline isn&apos;t a crash. It&apos;s a recalibration. More
            homes to choose from, slightly softer prices, rates that have
            stopped climbing but haven&apos;t dropped enough to flood the
            market with buyers.
          </p>

          <h2 style={h2Style}>What this means if you&apos;re selling</h2>

          <p style={pStyle}>
            Here is the part I want you to read twice: in a market with 58%
            more competing inventory, presentation and pricing strategy are not
            optional anymore. They are the entire game.
          </p>

          <p style={pStyle}>
            My personal NWMLS-recorded sale-to-list ratio over the trailing 12
            months is <strong>102.3%</strong>. The Snohomish County NWMLS
            average is 100.2%. That 2.1-point spread (yes, on a $900,000 house,
            that&apos;s roughly $18,900 in your pocket) does not come from luck
            or vibes. It comes from pricing a home where buyers will fight for
            it instead of where the seller wishes it were worth, and from
            prepping a home so it photographs and shows like the best house in
            its price band. In a 1.6-month inventory market, you could get away
            with skipping that work. In a 2.2-month market with prices easing,
            you cannot.
          </p>

          <p style={pStyle}>
            Practical read for sellers right now: if you&apos;re listing in the
            next 60 days, plan for a real prep window (paint, light staging,
            professional photography, drone, video) and price to invite
            multiple offers rather than chase the top of the comp range. The
            homes that are sitting are the ones that priced for last
            spring&apos;s market. The homes that are selling at or above list
            are the ones that priced for this one.
          </p>

          <h2 style={h2Style}>What this means if you&apos;re buying</h2>

          <p style={pStyle}>
            You finally have room to breathe. With 2,456 homes on the market
            countywide and rates roughly{' '}
            <strong>45 basis points lower than this time last year</strong>{' '}
            (per{' '}
            <a
              href="https://www.freddiemac.com/pmms"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Freddie Mac PMMS
            </a>
            ), you have something buyers in 2021, 2022, and most of 2023 did
            not: time, options, and the ability to write an offer that
            isn&apos;t a desperation bid.
          </p>

          <p style={pStyle}>
            That said, &ldquo;more inventory&rdquo; does not mean
            &ldquo;buyers&apos; market.&rdquo; We are still well under the 4 to
            6 months of supply that defines balance, per{' '}
            <a
              href="https://www.nwmls.com/real-estate-news/monthly-market-snapshot/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              NWMLS monthly snapshots
            </a>
            . The well-prepped, well-priced homes in Mukilteo, Edmonds, Mill
            Creek, Marysville waterfront, and Lake Stevens are still moving in
            under three weeks with multiple offers. The tired ones are sitting
            60 plus days and chopping price. Your job is to know which is which
            before you write.
          </p>

          <p style={pStyle}>
            A note on rate strategy: if you find the right house at 6.36%, buy
            it. You can refinance a rate. You cannot refinance the house you
            didn&apos;t get.
          </p>

          <h2 style={h2Style}>Where I&apos;m working right now</h2>

          <p style={pStyle}>
            I&apos;m currently carrying two active listings, which is by
            design. My two-clients-max policy is the reason the 102.3% number
            exists:
          </p>

          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>
              <Link
                href="/properties/1406-potlatch-beach-road-marysville"
                style={linkStyle}
              >
                <strong>1406 Potlatch Beach Road, Marysville, $899,900.</strong>
              </Link>{' '}
              Puget Sound high-bank waterfront. One of the rarer view setups
              I&apos;ve represented this year.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link
                href="/properties/4611-76th-street-mukilteo"
                style={linkStyle}
              >
                <strong>4611 76th Street SW, Mukilteo, $975,000.</strong>
              </Link>{' '}
              Olympic Mountain view, fully remodeled, the kind of finish level
              the May buyer pool is actively hunting for.
            </li>
          </ul>

          <p style={pStyle}>Both are priced for this market, not last year&apos;s.</p>

          <h2 style={h2Style}>The closing thought</h2>

          <p style={pStyle}>
            May 2026 is not scary. It&apos;s just more honest than the last few
            springs were. The buyers who win this market will be the ones who
            move when the right house shows up, and the sellers who win it will
            be the ones who treat prep and pricing like the strategic decisions
            they are.
          </p>

          <p style={pStyle}>
            If you want my read on what all of this means for your specific
            address (your block, your school district, your timeline), text me.
            I&apos;ll pull the comps and tell you straight.
          </p>

          <p
            style={{
              marginTop: '40px',
              marginBottom: '8px',
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.5rem',
              color: '#2F5233',
            }}
          >
            Always, Kim
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: '#666',
            }}
          >
            Kim Pelham · The Pelham Group NW · Best of Snohomish County 2023 and 2024
          </p>

          <p
            style={{
              marginTop: '32px',
              padding: '16px 20px',
              backgroundColor: '#F8F5F0',
              borderLeft: '3px solid #B8845C',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: '#555',
              fontStyle: 'italic',
            }}
          >
            Sources:{' '}
            <a
              href="https://www.nwrealtor.com/2026/05/07/nwmls-april-2026-market-report/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              NWMLS April 2026 Report
            </a>
            ,{' '}
            <a
              href="https://www.nwmls.com/real-estate-news/monthly-market-snapshot/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              NWMLS Monthly Snapshot
            </a>
            ,{' '}
            <a
              href="https://www.themadronagroup.com/snohomish-county-housing-market/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Madrona Group Snohomish data
            </a>
            ,{' '}
            <a
              href="https://www.freddiemac.com/pmms"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Freddie Mac PMMS
            </a>
            . Full citation breakdown at{' '}
            <Link href="/sources" style={linkStyle}>
              thepelhamgroupnw.com/sources
            </Link>
            .
          </p>
        </article>

        {/* FAQ section pulls answers verbatim from the FAQPage schema */}
        <FAQSection
          title="May 2026 Snohomish market, frequently asked"
          backgroundColor="#F8F5F0"
          faqs={[
            {
              question:
                'What is happening in the Snohomish County real estate market in May 2026?',
              answer:
                'The Snohomish County market is recalibrating. Active listings rose 58.2% year over year to 2,456 in April 2026 per the NWMLS market report (https://www.nwrealtor.com/2026/05/07/nwmls-april-2026-market-report/). Months of inventory climbed from 1.6 to 2.2. Average sale price softened 3.8% year over year to $787,838. The 30-year fixed mortgage rate averaged 6.36% the week of May 14, 2026, per Freddie Mac PMMS (https://www.freddiemac.com/pmms). Well-priced, well-prepped homes are still selling at or above list, while overpriced or under-prepped listings are sitting 60 plus days.',
            },
            {
              question: 'What is the median home price in Snohomish County in May 2026?',
              answer:
                'The median sale price in Snohomish County is approximately $750,000 in the most recent NWMLS data, with average sale price at $787,838, down 3.8% year over year. Prices have softened modestly from the spring 2025 peak.',
            },
            {
              question:
                'Is the Snohomish County market a buyers market or sellers market in May 2026?',
              answer:
                'Snohomish County is still seller-leaning but the gap is narrowing. Months of inventory at 2.2 is well under the 4 to 6 months that define a balanced market, so it remains a sellers market by the technical definition. However the 58.2% year over year jump in active listings means sellers can no longer assume any home will sell on presentation alone. Pricing strategy and prep work are now the main variables that determine whether a home gets multiple offers or sits.',
            },
            {
              question: 'What is the average mortgage rate in May 2026?',
              answer:
                'The 30-year fixed mortgage rate averaged 6.36% the week of May 14, 2026, per the Freddie Mac Primary Mortgage Market Survey (https://www.freddiemac.com/pmms). That is down approximately 45 basis points from 6.81% one year earlier.',
            },
            {
              question: 'Is now a good time to sell a home in Snohomish County?',
              answer:
                "Yes for sellers who are willing to prep and price strategically. The market still favors sellers with 2.2 months of inventory, but the buyer pool has more options than a year ago. Kim Pelham's personal sale-to-list ratio of 102.3% versus the Snohomish County NWMLS average of 100.2% comes from disciplined pricing and presentation, not from market lift. Sellers who plan a real prep window (paint, staging, professional photography) and price for multiple offers are still winning. Sellers who skip those steps or price to last year's comps are sitting.",
            },
            {
              question: 'Should I buy a home in Snohomish County right now?',
              answer:
                'May 2026 is the most buyer-friendly Snohomish County market in three years. With 2,456 active listings, you have real choice. With rates at 6.36% (down 45 basis points YoY), monthly payments are slightly better than a year ago. The well-prepped homes in Mukilteo, Edmonds, Mill Creek, Marysville waterfront, and Lake Stevens are still moving in under three weeks, so the right house at the right price still requires decisiveness. But the desperate-bid era is over.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
