'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const bodyP: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '1.125rem',
  color: 'var(--color-text)',
  lineHeight: '1.8',
  marginBottom: '24px',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '2rem',
  fontWeight: 400,
  color: 'var(--color-forest)',
  marginBottom: '20px',
  marginTop: '40px',
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.5rem',
  fontWeight: 500,
  color: 'var(--color-text)',
  marginBottom: '12px',
  marginTop: '32px',
};

export default function WaterfrontOrViewPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Waterfront or view? Two Snohomish homes under $1M"
          subtitle="By Kim Pelham — May 6, 2026 — 7 min read"
          image="/images/potlatch-brien-sunset-golden.jpg"
          imageAlt="Sunset over Puget Sound from Marysville waterfront home in the Tulalip area"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...bodyP, fontWeight: 700 }}>
              Two of my current listings sit just under the million-dollar mark in Snohomish County, and they answer the same question two completely different ways. One is a high-bank Puget Sound waterfront in Marysville at $899,900. The other is a fully remodeled view-first home in Mukilteo at $975,000. If you&rsquo;re shopping in this price band, this is the trade-off that actually matters.
            </p>

            <div
              style={{
                background: 'var(--color-cream)',
                borderLeft: '4px solid var(--color-clay)',
                padding: '24px 28px',
                borderRadius: '0 4px 4px 0',
                margin: '0 0 40px 0',
              }}
            >
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                Side-by-side at a glance
              </p>
              <p style={{ ...bodyP, fontSize: '1rem', marginBottom: '8px' }}>
                <strong>1406 Potlatch Beach Road, Marysville:</strong> $899,900 · 50&prime; high-bank waterfront on Puget Sound · 3 bed + 2 bonus rooms · 1,662 sqft · 0.36 acres · MLS# 2504310
              </p>
              <p style={{ ...bodyP, fontSize: '1rem', margin: 0 }}>
                <strong>4611 76th Street SW, Mukilteo:</strong> $975,000 · Olympic Mountain view, view-first remodel · 4 bed + office · 2,605 sqft · 10,454 sqft fenced corner lot · MLS# NWM2513590
              </p>
            </div>

            <h2 style={h2Style}>Two homes, same budget, very different lifestyles</h2>

            <p style={bodyP}>
              At $899,900 and $975,000, you&rsquo;re looking at houses with similar mortgages but completely different daily experiences. Waterfront and view sound like the same kind of luxury until you live with each one. They&rsquo;re not. The maintenance schedule is different. The insurance is different. The commute is different. What you do on a Saturday morning is different. Below is what I&rsquo;d tell a buyer of mine, sitting at a coffee shop, when they ask which one to walk first.
            </p>

            <h3 style={h3Style}>The Marysville waterfront — $899,900</h3>

            <p style={bodyP}>
              <Link href="/properties/1406-potlatch-beach-road-tulalip">1406 Potlatch Beach Road</Link> in Marysville (98271) sits on 50 feet of high-bank Puget Sound frontage about 35 miles north of Seattle. The view is the Sound itself, then the Olympic Mountains across the water, then sunsets that stop you cold every evening. Three bedrooms plus two bonus rooms, two bathrooms (both ensuite), 1,662 square feet on a 0.36-acre lot. The 1925 build was meticulously maintained &mdash; new architectural roof, Andersen windows, exterior paint in 2023, ductless mini-split heating and cooling. There&rsquo;s an indoor hot tub, a gazebo for sunset cocktails, and the kind of yard where you watch eagles overhead while orcas feed below.
            </p>

            <p style={bodyP}>
              The number that gets people&rsquo;s attention is the comparison: equivalent waterfront in Seattle starts around $3 million. This is the same Sound, 35 miles north, for under a million.
            </p>

            <p style={bodyP}>
              <strong>Who this fits:</strong> someone whose Saturday morning is a kayak or a coffee on the deck. Someone who&rsquo;ll trade a longer commute for sound-of-water-on-rocks every day. Someone who likes that the home is older and lower-square-footage but sits on land that simply isn&rsquo;t made anymore.
            </p>

            <h3 style={h3Style}>The Mukilteo view-first remodel — $975,000</h3>

            <p style={bodyP}>
              <Link href="/properties/4611-76th-street-mukilteo">4611 76th Street SW</Link> is a 1976 NW Contemporary that the previous owner remodeled around the Olympic Mountain view. The Olympics sit on the western horizon across Puget Sound, and the home is positioned so the kitchen, great room, primary bedroom, and all three decks catch them. The detail I keep telling people about: the previous owner cut half a wall in the office so the view comes in from your desk while you work from home. That&rsquo;s the kind of thing you only do when you really live somewhere.
            </p>

            <p style={bodyP}>
              The remodel itself is full top-to-bottom inside &mdash; quartz counters, Fisher &amp; Paykel appliances, walk-in primary closet, fresh flooring, fresh fixtures. Two bedrooms upstairs, two more downstairs along with a family room, a wet bar (microwave, no cooktop), and a full bath, so the lower level holds its own when you&rsquo;ve got an adult kid landing back home or a parent moving in. RV parking, gas grill hookup on the main deck, hot tub on the side deck, fenced corner lot, mature rose garden, one-minute walk to the Japanese Gulch trail system. Mukilteo ferry to Whidbey is ten minutes west; Boeing Paine Field is five minutes inland.
            </p>

            <p style={bodyP}>
              <strong>Who this fits:</strong> someone who wants the view but not the maintenance burden of waterfront. A family that needs the four bedrooms and an office. Someone whose work-from-home life would actually be transformed by being able to look up and see the Olympics.
            </p>

            <h2 style={h2Style}>How to think about waterfront vs. view</h2>

            <p style={bodyP}>
              When buyers come to me trying to decide, here are the four trade-offs I walk them through.
            </p>

            <h3 style={h3Style}>1. Maintenance and insurance</h3>
            <p style={bodyP}>
              Waterfront homes carry real costs that view-only homes don&rsquo;t. Bulkhead inspections, salt-air corrosion on metal fixtures, higher home insurance premiums, sometimes flood riders depending on elevation. Potlatch is high-bank waterfront so flood risk is lower than low-bank, but you&rsquo;re still paying carrier rates for being on the Sound. Mukilteo is a standard residential lot &mdash; insurance is whatever a comparable inland home would cost, and there&rsquo;s no shoreline obligation.
            </p>

            <h3 style={h3Style}>2. Daily life</h3>
            <p style={bodyP}>
              The waterfront experience is more immersive and more isolated. Your nearest neighbor matters more because the lots are typically larger and the road is quieter. Your weekend is shaped by the water &mdash; tides, weather windows, whether to put the kayak in. The view experience from a Mukilteo home is honestly almost as visually stunning (those Olympic sunsets are the same sunsets) but the daily-life context is different. You&rsquo;re in a residential neighborhood with sidewalks, neighbors, a school district, kids on bikes. Trader Joe&rsquo;s is five minutes away.
            </p>

            <h3 style={h3Style}>3. Resale</h3>
            <p style={bodyP}>
              True waterfront in Snohomish County is a finite, irreplaceable inventory class. There are only so many feet of Puget Sound shoreline, and they&rsquo;re not making more. That tends to support resale values regardless of broader market cycles. View homes are more correlated with their neighborhood &mdash; if the surrounding values move, the view home moves with them. Both are good resale stories at this price point. Waterfront has a slightly thinner buyer pool but a more stable floor.
            </p>

            <h3 style={h3Style}>4. Financing</h3>
            <p style={bodyP}>
              Most lenders treat both like standard residential mortgages at this price point. The Potlatch waterfront is on deeded land (not leased, not condominium) which is the case that makes financing easy. If you&rsquo;re putting 20% down on either, you&rsquo;re looking at a comparable monthly payment within a few hundred dollars. Property taxes are different &mdash; Potlatch annual taxes are $7,152, Mukilteo is $6,423.
            </p>

            <h2 style={h2Style}>Three questions to ask yourself</h2>
            <p style={bodyP}>
              If you&rsquo;re sitting with the decision, these are the questions that actually surface what you want.
            </p>

            <ol style={{ ...bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '16px' }}>
                <strong>Where do you want to be on a Saturday morning at 9 a.m.?</strong> If the answer is &ldquo;outside, in the water or on the deck, with a coffee, ignoring my phone,&rdquo; that&rsquo;s a waterfront answer. If the answer involves the trail system, the farmer&rsquo;s market, the school pickup, neighbors waving &mdash; that&rsquo;s a view-home answer.
              </li>
              <li style={{ marginBottom: '16px' }}>
                <strong>How many bedrooms do you actually need?</strong> Potlatch is 3+2 bonus rooms (so 5 flex rooms total, but the &ldquo;bonus&rdquo; rooms are smaller). Mukilteo is 4 bedrooms plus a real office, with a fully separate downstairs that lives like a second residence. If you&rsquo;ve got family situations &mdash; aging parents, returning college kids, long-term guests &mdash; Mukilteo&rsquo;s downstairs is hard to replicate at this price.
              </li>
              <li style={{ marginBottom: '16px' }}>
                <strong>Are you a maintenance-tolerant or maintenance-averse buyer?</strong> Be honest. Waterfront rewards the maintenance-tolerant. View-from-an-inland-lot rewards the maintenance-averse. Both are valid. Just know which one you are before you fall in love with a sunset.
              </li>
            </ol>

            <h2 style={h2Style}>The honest answer most of the time</h2>
            <p style={bodyP}>
              Most of my buyers walk both before they decide. The right answer is whichever one feels right when you stand in it &mdash; and it&rsquo;s rarely the one you predicted on paper. That&rsquo;s the value of getting in person. Photos help, but neither of these homes really makes sense until you stand on the deck and watch the sun set over the Olympics.
            </p>

            <p style={bodyP}>
              If you want to walk one or both this week, text or call me at <a href="tel:+14252509422" style={{ color: 'var(--color-forest)' }}>(425) 250-9422</a>. Showings are by appointment, and I keep my schedule flexible &mdash; weekday evenings and weekends both work. I&rsquo;ll meet you at either house, walk the property with you, and answer real questions about the trade-offs. No pressure either direction.
            </p>

            <div
              style={{
                background: 'var(--color-cream)',
                borderRadius: '6px',
                padding: '32px',
                margin: '40px 0 0',
                textAlign: 'center',
              }}
            >
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: 'var(--color-clay)', margin: '0 0 12px 0' }}>
                see them both
              </p>
              <p style={{ ...bodyP, marginBottom: '24px' }}>
                Both listings are active and showing by appointment.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/properties/1406-potlatch-beach-road-tulalip"
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: '#2F5233',
                    color: '#F8F5F0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  Potlatch waterfront →
                </Link>
                <Link
                  href="/properties/4611-76th-street-mukilteo"
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: '#B8845C',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  Mukilteo view home →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
