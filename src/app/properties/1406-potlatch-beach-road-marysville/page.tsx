'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const details = [
  { label: 'Bedrooms', value: '3 + 2 Bonus Rooms' },
  { label: 'Bathrooms', value: '2 (3/4 baths)' },
  { label: 'Sq Footage', value: '1,662 sqft' },
  { label: 'Lot Size', value: '0.36 acres (50\u2032 \u00d7 221\u2032)' },
  { label: 'Waterfront', value: '50\u2032 High-Bank, Puget Sound' },
  { label: 'Views', value: 'Sound, Bay, Olympics, Mt. Rainier' },
  { label: 'Style', value: 'Tri-Level + Loft' },
  { label: 'Year Built', value: '1925' },
  { label: 'Heating / Cooling', value: 'Ductless Mini-Split + Baseboard' },
  { label: 'Fireplace', value: 'Yes (main level)' },
  { label: 'Hot Tub', value: 'Yes (indoor spa)' },
  { label: 'Garage', value: 'Detached + 2 off-street' },
  { label: 'Exterior', value: 'Wood Siding' },
  { label: 'Roof', value: '30-yr Architectural (newer)' },
  { label: 'Annual Taxes', value: '$7,152' },
  { label: 'MLS', value: '#2504310' },
];

export default function PotlatchPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero image */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 55vw, 600px)' }}>
          <Image
            src="/images/potlatch-brien-sunset-golden.jpg"
            alt="Golden sunset over Puget Sound from 1406 Potlatch Beach Road, Marysville WA waterfront property"
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
                backgroundColor: '#2F5233',
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
              Active Listing &middot; Showings by Appointment
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
              1406 Potlatch Beach Road
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
              }}
            >
              Marysville, WA 98271 &nbsp;|&nbsp; Snohomish County
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
            MLS #2504310
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
                $799,900
              </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { label: 'Bed', value: '3' },
                { label: 'Bath', value: '2' },
                { label: 'Sqft', value: '1,662' },
                { label: 'Acres', value: '0.36' },
                { label: 'Built', value: '1925' },
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

        {/* Showings-by-appointment banner. Replaces the past-date open-house section. */}
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
              Showings by Appointment
            </p>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Catch the sunset on your schedule
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.92)',
                margin: 0,
              }}
            >
              1406 Potlatch Beach Road, Marysville WA 98271 &nbsp;&middot;&nbsp; Weekday evenings + weekends
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27d%20like%20to%20schedule%20a%20showing%20at%201406%20Potlatch%20Beach%20Road."
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
                Text Kim to Schedule
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1406+Potlatch+Beach+Road+Marysville+WA+98271"
                target="_blank"
                rel="noopener noreferrer"
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
                Get Directions
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
              Quick Property Facts &mdash; MLS# 2504310
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
                { term: 'Price', def: '$799,900' },
                { term: 'Bedrooms', def: '3 + 2 Bonus Rooms' },
                { term: 'Bathrooms', def: '2 Ensuite' },
                { term: 'Square Feet', def: '1,662' },
                { term: 'Lot Size', def: '0.36 Acres' },
                { term: 'Year Built', def: '1925' },
                { term: 'MLS#', def: '2504310' },
                { term: 'Status', def: 'Active' },
                { term: 'Waterfront', def: '50 ft High-Bank Puget Sound' },
                { term: 'View', def: 'Sound, Islands, Olympic Mountains' },
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
            <div className="potlatch-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: '8px' }}>
              {[
                { src: '/images/potlatch-02-exterior.jpg', alt: 'Exterior front, white home with wraparound porch and mature garden', col: '1 / 2', row: '1 / 3' },
                { src: '/images/potlatch-brien-sunset-golden.jpg', alt: 'Golden sunset over Puget Sound from 1406 Potlatch Beach Road', col: '2 / 3', row: '1 / 2' },
                { src: '/images/potlatch-05-windows-view.jpg', alt: 'Floor-to-ceiling windows with Sound views from living room', col: '3 / 4', row: '1 / 2' },
                { src: '/images/potlatch-04-living-room.jpg', alt: 'Living room with water views and modern finishes', col: '2 / 3', row: '2 / 3' },
                { src: '/images/potlatch-06-interior.jpg', alt: 'Interior detail, natural light throughout', col: '3 / 4', row: '2 / 3' },
              ].map((photo) => (
                <div key={photo.src} style={{ position: 'relative', gridColumn: photo.col, gridRow: photo.row, borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Tour */}
        <section style={{ padding: '64px 24px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '22px',
                color: '#B8845C',
                margin: '0 0 10px 0',
              }}
            >
              catch the view
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: '0 0 32px 0',
              }}
            >
              The View
            </h2>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/BekwRDZCUK0"
                title="Waterfront Views · 1406 Potlatch Beach Road, Marysville WA"
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
          </div>
        </section>

        {/* Description + Details */}
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
            className="potlatch-layout"
          >
            {/* Description */}
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
                High-Bank Waterfront on Puget Sound
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
                Wake each morning to sweeping Sound vistas and end your days with unforgettable sunsets from this meticulously maintained high-bank waterfront retreat. A full wall of sliding glass doors opens to fresh ocean breezes and ever-changing coastal scenery. The flexible layout offers three bedrooms plus two bonus rooms, perfect for creative space, remote work, or hosting guests. Architectural charm runs through multiple levels with a loft perched above the living room. Two ensuite bedrooms each have their own 3/4 bath, and the bright kitchen features upgraded stainless appliances and a high-end induction range, all positioned to take in the view.
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
                Outside, the fully fenced and beautifully landscaped yard is a private retreat. On summer evenings, watch orcas feed on ghost shrimp below while bald eagles soar overhead. Gather in the gazebo for sunset cocktails, then slip into the indoor hot tub for a little stargazing. On clear days, Mt. Rainier anchors the southern horizon and the Olympic Mountains rise to the west across the water. Recent updates include a 30-year architectural roof, Andersen windows and doors, and exterior paint in 2023. Ductless mini-split heating and A/C keeps every season comfortable.
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
                Naval Station Everett and Boeing Paine Field are both within 20 minutes. Seattle is approximately 40 minutes south without traffic. For buyers who have been looking for waterfront access at a price that doesn't require selling everything else, this one is worth a serious look. Property is on deeded land.
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
                "The sunsets from this property are genuinely something else. I have sold a lot of waterfront homes and this view stops you cold every time."
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
                  href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%201406%20Potlatch%20Beach%20Road."
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
            {/* GEO neighborhood context — natural language for AI answer engines */}
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
              Potlatch Beach Road sits on the western shoreline of Snohomish County, on the Puget Sound side of Marysville (98271). Residents get easy access to Marysville&#39;s growing downtown while living in one of the most scenic waterfront pockets in the region. The Tulalip Resort Casino and Outlets at Tulalip are less than 10 minutes away. Everett, home to Naval Station Everett and Boeing Paine Field, is roughly 15 minutes south. Seattle is approximately 40 minutes south on I-5 without traffic, making this a genuinely livable waterfront address in Snohomish County rather than a pure vacation property.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { label: 'Everett (Naval Station, Boeing)', distance: '~15 min' },
                { label: 'Marysville', distance: '~10 min' },
                { label: 'Seattle', distance: '~40 min via I-5' },
                { label: 'Paine Field (PAE)', distance: '~20 min' },
                { label: 'Tulalip Resort Casino', distance: '~5 min' },
                { label: 'Tulalip Outlets', distance: '~8 min' },
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
              About 1406 Potlatch Beach Road
            </h2>
            {[
              {
                q: 'Are there showings or open houses at 1406 Potlatch Beach Road?',
                a: 'Showings are by appointment. Text or call Kim Pelham at (425) 250-9422 to schedule a walk-through, weekday evenings and weekends both work. The sunsets here are best seen in person; pick a time that catches one.',
              },
              {
                q: 'How much is 1406 Potlatch Beach Road?',
                a: '1406 Potlatch Beach Road is listed at $799,900. This includes 1,662 square feet, 3 bedrooms plus 2 bonus rooms, 2 bathrooms, and 50 feet of high-bank Puget Sound waterfront on 0.36 acres. MLS# 2504310.',
              },
              {
                q: 'How many bedrooms does 1406 Potlatch Beach Road have?',
                a: 'The home has 3 bedrooms plus 2 bonus rooms, for 5 flexible rooms total. Two bedrooms are ensuites with private 3/4 bathrooms. The bonus rooms work well as a home office, creative studio, or guest space.',
              },
              {
                q: 'Is 1406 Potlatch Beach Road waterfront?',
                a: 'Yes. The property sits on 50 feet of high-bank Puget Sound waterfront in Marysville, WA. Views take in the Sound, nearby islands, the Olympic Mountains to the west, and Mt. Rainier to the south on clear days.',
              },
              {
                q: 'Who is the listing agent for 1406 Potlatch Beach Road?',
                a: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW in Snohomish County, WA. Kim has 17+ years of experience and can be reached at (425) 250-9422.',
              },
              {
                q: 'What school district is 1406 Potlatch Beach Road in?',
                a: '1406 Potlatch Beach Road is in the Marysville School District in Snohomish County, Washington.',
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
              Interested in This Property?
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
              Text or call Kim directly to set up a time to walk through, ask questions, or get current price and disclosure details.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%201406%20Potlatch%20Beach%20Road."
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
          .potlatch-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .potlatch-gallery {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: unset !important;
            grid-auto-rows: 160px;
          }
          .potlatch-gallery > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </>
  );
}
