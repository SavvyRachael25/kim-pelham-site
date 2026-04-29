'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import FAQSection from '@/components/FAQSection';

export default function PotlatchBlogPost() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 50vw, 540px)' }}>
          <Image
            src="/images/potlatch-03-sound-view.jpg"
            alt="Puget Sound view from 1406 Potlatch Beach Road, Tulalip WA — sweeping water vista"
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
              background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
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
                Featured Listing
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
                Waterfront
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.15,
                textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              }}
            >
              A $3 Million View for Under a Million
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                margin: '10px 0 0 0',
              }}
            >
              Potlatch Beach Road, Tulalip WA — same Sound, same sunsets, different price tag
            </p>
          </div>
        </div>

        {/* Article body */}
        <article style={{ padding: '72px 24px 80px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {/* Byline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '48px',
                paddingBottom: '24px',
                borderBottom: '1px solid #E8E3DA',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, color: '#2C2C2C', margin: 0 }}>
                  Kim Pelham
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888', margin: 0 }}>
                  The Pelham Group NW &nbsp;·&nbsp; April 17, 2026
                </p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <Link
                  href="/properties/1406-potlatch-beach-road-tulalip"
                  style={{
                    display: 'inline-block',
                    padding: '9px 20px',
                    backgroundColor: '#B8845C',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  View Listing
                </Link>
              </div>
            </div>

            {/* Opening */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              If you want Puget Sound waterfront in Seattle, Edmonds, or Mukilteo, start your budget at $2 million. For actual high-bank Sound views with sunsets over the Olympics, plan on $3 million plus. That is just the market. The water is beautiful and the price reflects it.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              1406 Potlatch Beach Road in Tulalip is listed at $899,900. It is high-bank waterfront on Puget Sound. The views are sweeping. The sunsets are the kind that stop you mid-sentence. It is 35 miles north of Seattle on the same water.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              The price difference is not a quality difference. It is a zip code difference. And for buyers who have been priced out of Sound waterfront their entire lives, that distinction matters a lot.
            </p>

            {/* Embedded video tour — same one shown on the listing page */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                margin: '0 0 32px 0',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/BekwRDZCUK0"
                title="Waterfront Views — 1406 Potlatch Beach Road, Marysville WA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '20px',
                color: '#B8845C',
                textAlign: 'center',
                margin: '0 0 36px 0',
              }}
            >
              the sunset reel — see why the price feels like a typo
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#2F5233',
                margin: '48px 0 20px 0',
                lineHeight: 1.2,
              }}
            >
              The Property
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              1406 Potlatch Beach Road is a 1,662-square-foot, 1.5-story home built in 1925. Three bedrooms, one bath, 0.36 acres, detached garage, wood and lap siding that has aged the way good Pacific Northwest construction does. This is not a McMansion with a water view stitched on. This is a character home with a century of history and the kind of bones that do not get built anymore.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              The waterfront is high-bank, which means you get the sweeping views without the flood risk of a low-bank property. The lot drops to Puget Sound below you. On clear days you can see across the water. In the evenings the sky behind the Olympics turns colors that feel like something a painter made up. The previous owners have kept this property in exceptional condition. When I walked through it, the word that kept coming to mind was <em>loved</em>.
            </p>

            {/* Kim's pull quote */}
            <blockquote
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.5rem',
                color: '#2F5233',
                fontStyle: 'italic',
                lineHeight: 1.6,
                margin: '40px 0',
                paddingLeft: '28px',
                borderLeft: '3px solid #B8845C',
              }}
            >
              "I have sold a lot of waterfront homes. The sunsets from this property stop you cold every single time."
            </blockquote>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#2F5233',
                margin: '48px 0 20px 0',
                lineHeight: 1.2,
              }}
            >
              The Neighborhood
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              Tulalip sits at the edge of Snohomish County, north of Everett on the Puget Sound shore. The Tulalip Tribes govern substantial surrounding land, which means the natural buffer you see today is not going anywhere. That is genuinely unusual for waterfront communities in the greater Seattle region. Most shoreline in the metro is either built up or actively being developed. Tulalip has a different character: quieter, less trafficked, more removed from the suburban churn that defines most of western Washington.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              Everett is 15 to 20 minutes south on I-5. Naval Station Everett and Boeing Paine Field are both within practical commute distance. Seattle is 40 to 50 minutes without traffic. The Tulalip Resort Casino and Tulalip Outlets are nearby for dining and retail. This is not the community for buyers who need to be 10 minutes from Pike Place Market. It is exactly the right community for buyers who want to come home to a view that reminds them why they moved to the Pacific Northwest in the first place.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#2F5233',
                margin: '48px 0 20px 0',
                lineHeight: 1.2,
              }}
            >
              The Investment Case for Waterfront
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              Let me put some numbers next to this. Comparable Sound waterfront in Edmonds, 30 miles south, starts at $1.5M and quickly reaches $3M to $4M for properties with similar views and lot sizes. Mukilteo waterfront is similarly priced. Shoreline on the Sound runs $2M plus. Buyers from King County who have been priced out of waterfront access for their entire real estate lives suddenly find themselves doing math they thought was impossible when they look at Tulalip.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              Waterfront inventory in Snohomish County is genuinely limited. The county has Sound shoreline, lake shoreline on Stevens Lake and Lake Goodwin, and river access throughout, but high-bank Puget Sound waterfront at under $1M is not something that appears on the market regularly. When it does, the buyers who are paying attention move quickly. The buyers who are not paying attention ask me six months later why they missed it.
            </p>

            {/* Property specs card */}
            <div
              style={{
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '6px',
                padding: '36px 32px',
                margin: '48px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#B8845C',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  margin: '0 0 20px 0',
                }}
              >
                1406 Potlatch Beach Road — Property Snapshot
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                  gap: '20px',
                }}
              >
                {[
                  { label: 'Price', value: '$899,900' },
                  { label: 'Beds', value: '3' },
                  { label: 'Baths', value: '1' },
                  { label: 'Sqft', value: '1,662' },
                  { label: 'Lot', value: '0.36 acres' },
                  { label: 'Built', value: '1925' },
                  { label: 'Type', value: 'High-Bank Waterfront' },
                  { label: 'Location', value: 'Tulalip, WA 98271' },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 4px 0' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#2C2C2C', margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E8E3DA' }}>
                <Link
                  href="/properties/1406-potlatch-beach-road-tulalip"
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    backgroundColor: '#2F5233',
                    color: '#F8F5F0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  View Full Listing Details
                </Link>
              </div>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#2F5233',
                margin: '48px 0 20px 0',
                lineHeight: 1.2,
              }}
            >
              Who This Home Is Right For
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              I am not trying to sell this home to everyone. The right buyer here is someone who has been watching the Seattle metro waterfront market and knows exactly how rare this price point is. They probably work in Everett or Marysville, or they are on a hybrid schedule with two or three Seattle days per week. They have been living inland and they want to wake up to water. They understand that 1,662 square feet with a view like this is not a compromise, it is a trade they are happy to make.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '28px',
                fontWeight: 300,
              }}
            >
              This also makes an exceptional primary residence for buyers in their 50s or 60s who are done with suburban sprawl and want their next chapter to feel like an upgrade in every direction. The quiet, the views, the character of a 1925 home that has aged beautifully, the proximity to Everett without the Everett traffic. I have worked with many clients in exactly this situation and this property hits a lot of their criteria simultaneously.
            </p>

            {/* CTA before FAQ */}
            <div
              style={{
                backgroundColor: '#2F5233',
                borderRadius: '6px',
                padding: '40px 36px',
                margin: '56px 0 0 0',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#F8F5F0',
                  margin: '0 0 12px 0',
                }}
              >
                Interested in This Property?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'rgba(248,245,240,0.85)',
                  lineHeight: 1.65,
                  margin: '0 0 28px 0',
                }}
              >
                Contact Kim Pelham at The Pelham Group NW for showings, current pricing, and disclosures.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '14px 32px',
                    backgroundColor: '#B8845C',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  Contact Kim
                </Link>
                <Link
                  href="/properties/1406-potlatch-beach-road-tulalip"
                  style={{
                    display: 'inline-block',
                    padding: '14px 32px',
                    backgroundColor: 'transparent',
                    color: '#F8F5F0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                    border: '2px solid rgba(248,245,240,0.35)',
                  }}
                >
                  View Full Listing
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <FAQSection
          backgroundColor="#F8F5F0"
          faqs={[
            {
              question: 'What is the average home price on Potlatch Beach Road?',
              answer:
                'Potlatch Beach Road waterfront homes in Tulalip, WA typically list in the $800K to $1.2M range depending on lot size, condition, and water access type. High-bank waterfront properties with sweeping Sound views command a premium compared to non-waterfront homes in the same ZIP code. For current pricing on active listings, contact Kim Pelham at The Pelham Group NW.',
            },
            {
              question: 'How far is Tulalip from Seattle?',
              answer:
                'Tulalip is approximately 35 miles north of Seattle. The drive via I-5 takes about 40 to 50 minutes without traffic. During weekday rush hour, expect 60 to 75 minutes southbound. Tulalip is much closer to Everett, about 15 to 20 minutes south on I-5, which makes it very practical for buyers working in the Snohomish County employment corridor.',
            },
            {
              question: 'Is Tulalip a good place to buy waterfront property?',
              answer:
                'Yes, and it is significantly undervalued compared to waterfront alternatives south of it. Comparable Sound views in Edmonds, Mukilteo, or Shoreline would cost $2M to $4M. Tulalip delivers similar water frontage and sunsets at a fraction of that price. The Tulalip Tribes maintain significant surrounding land, which acts as a natural buffer protecting the area from development pressure. Buyers who prioritize views and value over zip code prestige consistently find Tulalip compelling.',
            },
            {
              question: 'What are the property taxes in Tulalip WA?',
              answer:
                'Property tax rates in Tulalip (ZIP 98271, Snohomish County) run approximately 0.9% to 1.1% of assessed value annually. On a $899,900 property, expect roughly $8,100 to $9,900 per year. Snohomish County property taxes are generally lower than King County rates for comparable assessed values. Verify current figures for any specific parcel with the Snohomish County Assessor at snohomishcountywa.gov.',
            },
          ]}
        />

        {/* Back to blog */}
        <section style={{ padding: '56px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link
              href="/blog"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#2F5233',
                textDecoration: 'none',
              }}
            >
              Back to Blog
            </Link>
            <Link
              href="/properties/1406-potlatch-beach-road-tulalip"
              style={{
                display: 'inline-block',
                padding: '12px 28px',
                backgroundColor: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              View the Full Listing
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
