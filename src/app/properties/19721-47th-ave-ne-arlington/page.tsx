'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const details = [
  { label: 'Bedrooms', value: '3' },
  { label: 'Bathrooms', value: '2' },
  { label: 'Sq Footage', value: '1,624 sqft' },
  { label: 'Property Type', value: 'Single Family Residence' },
  { label: 'County', value: 'Snohomish' },
  { label: 'City', value: 'Arlington, WA' },
  { label: 'ZIP', value: '98223' },
  { label: 'MLS', value: '#2492864' },
  { label: 'Status', value: 'Just Back on Market' },
];

export default function ArlingtonPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero image */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 55vw, 600px)' }}>
          <Image
            src="/images/arlington/arlington-01.jpg"
            alt="19721 47th Ave NE, Arlington WA — exterior front of single family home"
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
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              right: '32px',
              color: '#FFFFFF',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#B8845C',
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: '3px',
                marginBottom: '12px',
              }}
            >
              Just Back on Market
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 6px 0',
                lineHeight: 1.1,
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              19721 47th Avenue NE
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
              }}
            >
              Arlington, WA 98223 &nbsp;|&nbsp; Snohomish County
            </p>
          </div>
          <p
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '16px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}
          >
            MLS #2492864
          </p>
        </div>

        {/* Price + quick stats bar */}
        <section style={{ backgroundColor: '#2F5233', padding: '28px 24px' }}>
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#B8845C',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  margin: '0 0 4px 0',
                }}
              >
                Listed Price
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#F8F5F0',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                $625,000
              </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { label: 'Bed', value: '3' },
                { label: 'Bath', value: '2' },
                { label: 'Sqft', value: '1,624' },
                { label: 'Type', value: 'SFH' },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: '#F8F5F0', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'rgba(248,245,240,0.55)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

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
                whiteSpace: 'nowrap',
              }}
            >
              Contact Kim
            </Link>
          </div>
        </section>

        {/* Back on Market banner */}
        <section
          style={{
            backgroundColor: '#B8845C',
            padding: '24px',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                margin: 0,
              }}
            >
              Just Back on Market
            </p>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Buyer financing fell through. Your second chance.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.92)',
                margin: 0,
              }}
            >
              Same home. Same price. Faster move-in window for the next buyer.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%2019721%2047th%20Ave%20NE%20Arlington."
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  backgroundColor: '#2F5233',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
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
                  padding: '10px 24px',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.85)',
                }}
              >
                Call (425) 250-9422
              </a>
            </div>
          </div>
        </section>

        {/* AEO Quick Info — semantic dl/dt/dd for answer engines */}
        <section style={{ padding: '32px 24px', backgroundColor: '#F8F5F0', borderBottom: '1px solid #E8E3DA' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#B8845C',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                margin: '0 0 20px 0',
              }}
            >
              Quick Property Facts &mdash; MLS# 2492864
            </h2>
            <dl
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                gap: '16px 24px',
                margin: 0,
              }}
            >
              {[
                { term: 'Price', def: '$625,000' },
                { term: 'Bedrooms', def: '3' },
                { term: 'Bathrooms', def: '2' },
                { term: 'Square Feet', def: '1,624' },
                { term: 'Property Type', def: 'Single Family' },
                { term: 'City', def: 'Arlington, WA' },
                { term: 'County', def: 'Snohomish' },
                { term: 'ZIP', def: '98223' },
                { term: 'MLS#', def: '2492864' },
                { term: 'Status', def: 'Back on Market' },
              ].map((item) => (
                <div key={item.term}>
                  <dt
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '4px',
                    }}
                  >
                    {item.term}
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.975rem',
                      fontWeight: 600,
                      color: '#2C2C2C',
                      margin: 0,
                    }}
                  >
                    {item.def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Photo gallery */}
        <section style={{ padding: '40px 24px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="arlington-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: '8px' }}>
              {[
                { src: '/images/arlington/arlington-02.jpg', alt: '19721 47th Ave NE Arlington — interior living area', col: '1 / 2', row: '1 / 3' },
                { src: '/images/arlington/arlington-03.jpg', alt: '19721 47th Ave NE Arlington — kitchen / dining', col: '2 / 3', row: '1 / 2' },
                { src: '/images/arlington/arlington-04.jpg', alt: '19721 47th Ave NE Arlington — bedroom', col: '3 / 4', row: '1 / 2' },
                { src: '/images/arlington/arlington-05.jpg', alt: '19721 47th Ave NE Arlington — bathroom', col: '2 / 3', row: '2 / 3' },
                { src: '/images/arlington/arlington-06.jpg', alt: '19721 47th Ave NE Arlington — additional interior view', col: '3 / 4', row: '2 / 3' },
              ].map((photo) => (
                <div key={photo.src} style={{ position: 'relative', gridColumn: photo.col, gridRow: photo.row, borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description */}
        <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 380px',
              gap: '60px',
              alignItems: 'start',
            }}
            className="arlington-layout"
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '22px',
                  color: '#B8845C',
                  margin: '0 0 10px 0',
                }}
              >
                about this home
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: '0 0 32px 0',
                  lineHeight: 1.2,
                }}
              >
                3 Bed, 2 Bath Single Family in North Snohomish County
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#2C2C2C',
                  marginBottom: '24px',
                  fontWeight: 300,
                }}
              >
                19721 47th Avenue NE is a 1,624 square foot single family home in Arlington, Washington — three bedrooms, two bathrooms, in the 98223 ZIP that covers most of the Arlington area in north Snohomish County. The home went under contract recently and is now back on the market because the previous buyer&apos;s financing did not come together. Nothing about the home changed. The buyer&apos;s lender did. That happens, and when it does the next buyer usually wins on timing.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#2C2C2C',
                  marginBottom: '24px',
                  fontWeight: 300,
                }}
              >
                Arlington sits roughly 50 minutes north of Seattle and 25 minutes north of Everett via I-5. It is a town with a real downtown, an active general aviation airport, the Stillaguamish River running through it, and quick access to the Cascades for weekend hiking and skiing. For buyers priced out of King County or even south Snohomish, north Snohomish County is where the math still works — a single family detached home under $650K that sits on its own land, with a manageable commute corridor when needed.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#2C2C2C',
                  marginBottom: '40px',
                  fontWeight: 300,
                }}
              >
                Showings are easy to schedule and disclosures are ready to send. Text or call Kim directly for current status, financing options, and to walk through. Cleanly priced inventory in north Snohomish moves fast — even after a delay like this one, especially after a delay like this one.
              </p>

              {/* Kim's note */}
              <blockquote
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.4rem',
                  color: '#2F5233',
                  fontStyle: 'italic',
                  lineHeight: 1.65,
                  margin: '0 0 40px 0',
                  paddingLeft: '24px',
                  borderLeft: '3px solid #B8845C',
                }}
              >
                &ldquo;The home is solid. The first deal didn&apos;t close because of the buyer&apos;s loan, not anything on the property. If you&apos;ve been watching for the right home in Arlington under $650K, this is your window.&rdquo;
                <footer
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#B8845C',
                    fontStyle: 'normal',
                    marginTop: '10px',
                  }}
                >
                  Kim Pelham, The Pelham Group NW
                </footer>
              </blockquote>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%2019721%2047th%20Ave%20NE%20Arlington."
                  style={{
                    display: 'inline-block',
                    padding: '16px 40px',
                    backgroundColor: '#B8845C',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
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
                    padding: '14px 38px',
                    backgroundColor: 'transparent',
                    color: '#2F5233',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                    border: '2px solid #2F5233',
                  }}
                >
                  Call Kim
                </a>
              </div>
            </div>

            {/* Details sidebar */}
            <div
              style={{
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '6px',
                padding: '36px 32px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#B8845C',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  margin: '0 0 24px 0',
                }}
              >
                Property Details
              </h3>
              <dl style={{ margin: 0 }}>
                {details.map((d, idx) => (
                  <div
                    key={d.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: '12px 0',
                      borderBottom: idx < details.length - 1 ? '1px solid #E8E3DA' : 'none',
                      gap: '16px',
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: '#888',
                        flexShrink: 0,
                      }}
                    >
                      {d.label}
                    </dt>
                    <dd
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#2C2C2C',
                        margin: 0,
                        textAlign: 'right',
                      }}
                    >
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E8E3DA' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: '#888',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0',
                  }}
                >
                  Listed by Kim Pelham, The Pelham Group NW. Contact for current price, disclosures, and showing availability.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '13px 0',
                    backgroundColor: '#2F5233',
                    color: '#F8F5F0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  Contact Kim
                </Link>
                <a
                  href="tel:14252509422"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '10px',
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.25rem',
                    color: '#B8845C',
                    textDecoration: 'none',
                  }}
                >
                  (425) 250-9422
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location section */}
        <section style={{ padding: '64px 24px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2C2C2C',
                marginBottom: '32px',
              }}
            >
              Location &amp; Area
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#2C2C2C',
                marginBottom: '32px',
                fontWeight: 300,
                maxWidth: '740px',
              }}
            >
              Arlington is in north Snohomish County, set between the Stillaguamish River and the foothills of the Cascades. The downtown core has working restaurants, the Stillaguamish Eagle Festival every winter, and a community that knows itself. Arlington Municipal Airport is one of the most active general aviation airports in the state. For commuters, I-5 access is straightforward — Everett is about 25 minutes south, Seattle is around 50 minutes without traffic. For weekends, Mt. Pilchuck and the North Cascades trailheads are 30 to 60 minutes east. This is a part of Snohomish County where buyers actually get land, a real house, and a town with character — at price points that have largely moved out of reach further south.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { label: 'Downtown Arlington', distance: '~5 min' },
                { label: 'Smokey Point / shopping', distance: '~8 min' },
                { label: 'Marysville', distance: '~15 min' },
                { label: 'Everett', distance: '~25 min via I-5' },
                { label: 'Seattle', distance: '~50 min via I-5' },
                { label: 'Mt. Pilchuck trailhead', distance: '~45 min' },
              ].map((loc) => (
                <div
                  key={loc.label}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '20px 24px',
                    borderRadius: '4px',
                    border: '1px solid #E8E3DA',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#2C2C2C' }}>
                    {loc.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#2F5233',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {loc.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visible FAQ — mirrors FAQPage JSON-LD for AEO/GEO */}
        <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '22px',
                color: '#B8845C',
                margin: '0 0 10px 0',
              }}
            >
              common questions
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: '0 0 48px 0',
              }}
            >
              About 19721 47th Ave NE, Arlington
            </h2>
            {[
              {
                q: 'How much is 19721 47th Ave NE, Arlington WA?',
                a: '19721 47th Avenue NE, Arlington WA 98223 is listed at $625,000. The home offers 3 bedrooms, 2 bathrooms, and 1,624 square feet. MLS# 2492864.',
              },
              {
                q: 'Why is 19721 47th Ave NE back on the market?',
                a: 'The previous buyer backed out — financing fell through before close. The home is now back on the market in Arlington, WA. This kind of price-and-condition reset usually means the next buyer gets in faster and cleaner. Contact Kim Pelham at (425) 250-9422 for current status, disclosures, and showings.',
              },
              {
                q: 'How many bedrooms does 19721 47th Ave NE have?',
                a: '19721 47th Avenue NE has 3 bedrooms and 2 bathrooms across 1,624 square feet of living space.',
              },
              {
                q: 'Who is the listing agent for 19721 47th Ave NE, Arlington?',
                a: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW in Snohomish County, WA. Kim has 17+ years of experience and can be reached at (425) 250-9422.',
              },
              {
                q: 'What city and county is 19721 47th Ave NE in?',
                a: '19721 47th Avenue NE is in Arlington, WA 98223, in Snohomish County. Arlington sits in north Snohomish County, roughly 50 minutes north of Seattle and 25 minutes north of Everett via I-5.',
              },
            ].map((item, idx, arr) => (
              <div
                key={item.q}
                style={{
                  padding: '28px 0',
                  borderTop: '1px solid #E8E3DA',
                  borderBottom: idx === arr.length - 1 ? '1px solid #E8E3DA' : 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#2F5233',
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: '#2C2C2C',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: '80px 24px',
            backgroundColor: '#2F5233',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#F8F5F0',
                marginBottom: '20px',
              }}
            >
              Ready to See It?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'rgba(248,245,240,0.9)',
                lineHeight: 1.7,
                marginBottom: '40px',
              }}
            >
              Text or call Kim directly to schedule a walkthrough, ask questions, or get current price and disclosure details. Showings are quick to set up.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%2019721%2047th%20Ave%20NE%20Arlington."
                style={{
                  display: 'inline-block',
                  padding: '16px 48px',
                  backgroundColor: '#B8845C',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
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
                  padding: '14px 46px',
                  backgroundColor: 'transparent',
                  color: 'rgba(248,245,240,0.95)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  textDecoration: 'none',
                  border: '2px solid rgba(248,245,240,0.95)',
                }}
              >
                Call Kim
              </a>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a
                href="tel:+14252509422"
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.4rem',
                  color: 'rgba(248,245,240,0.75)',
                  textDecoration: 'none',
                }}
              >
                (425) 250-9422
              </a>
            </div>
            <div style={{ marginTop: '24px' }}>
              <Link
                href="/properties"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(248,245,240,0.5)',
                  textDecoration: 'none',
                }}
              >
                Back to All Properties
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .arlington-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .arlington-gallery {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: unset !important;
            grid-auto-rows: 160px;
          }
          .arlington-gallery > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </>
  );
}
