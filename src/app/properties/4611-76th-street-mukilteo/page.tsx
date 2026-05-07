'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const details = [
  { label: 'Bedrooms', value: '4 + Office' },
  { label: 'Bedroom Layout', value: 'Two upstairs, two downstairs' },
  { label: 'Bathrooms', value: '2.25' },
  { label: 'Sq Footage', value: '2,605 sqft (per MLS)' },
  { label: 'Lot Size', value: '10,454 sqft fenced corner lot' },
  { label: 'Style', value: '1976 NW Contemporary, fully remodeled' },
  { label: 'Year Built', value: '1976' },
  { label: 'View Feature', value: 'Half-wall removed in office for view-from-desk' },
  { label: 'Decks', value: 'Three (Olympic Mountain views)' },
  { label: 'Kitchen', value: 'Quartz, Fisher & Paykel appliances' },
  { label: 'Downstairs', value: 'Family room, wet bar (microwave), 3rd + 4th bed, bath' },
  { label: 'Hot Tub', value: 'Yes' },
  { label: 'Gas Grill Hookup', value: 'Plumbed on the main deck' },
  { label: 'RV Parking', value: 'Yes' },
  { label: 'Walkability', value: '1-min walk to Japanese Gulch trails' },
  { label: 'Annual Taxes', value: '$6,423' },
  { label: 'MLS', value: '#NWM2513590' },
];

export default function MukilteoPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero image — Olympic sunset is the money shot */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 55vw, 600px)' }}>
          <Image
            src="/images/mukilteo-03-olympic-sunset.jpg"
            alt="Olympic Mountains sunset view from 4611 76th Street SW — Mukilteo WA multi-gen home"
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
              New Listing &middot; Showings by Appointment
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
              4611 76th Street SW
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
              }}
            >
              Mukilteo, WA 98275 &nbsp;|&nbsp; Snohomish County
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
            MLS #NWM2513590
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
                $975,000
              </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { label: 'Bed', value: '4+Office' },
                { label: 'Bath', value: '2.25' },
                { label: 'Sqft', value: '2,605' },
                { label: 'Lot', value: '10,454' },
                { label: 'Built', value: '1976' },
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

        {/* Showings by Appointment banner — replaces Open House since this is post-Mother's-Day pivot */}
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
              Walk it whenever works for you
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.92)',
                margin: 0,
              }}
            >
              4611 76th Street SW, Mukilteo WA 98275 &nbsp;&middot;&nbsp; Weekday evenings + weekends
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27d%20like%20to%20schedule%20a%20showing%20at%204611%2076th%20Street%20SW%20in%20Mukilteo."
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
                href="https://www.google.com/maps/dir/?api=1&destination=4611+76th+Street+SW+Mukilteo+WA+98275"
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

        {/* AEO Quick Info */}
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
              Quick Property Facts &mdash; MLS# NWM2513590
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
                { term: 'Price', def: '$975,000' },
                { term: 'Bedrooms', def: '4 + Office' },
                { term: 'Bathrooms', def: '2.25' },
                { term: 'Square Feet', def: '2,605 (per MLS)' },
                { term: 'Lot Size', def: '10,454 sqft' },
                { term: 'Year Built', def: '1976 (fully remodeled)' },
                { term: 'MLS#', def: 'NWM2513590' },
                { term: 'Status', def: 'Active' },
                { term: 'Multi-Gen', def: 'Full downstairs kitchenette' },
                { term: 'View', def: 'Olympic Mountains' },
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
            <div className="mukilteo-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: '8px' }}>
              {[
                { src: '/images/mukilteo-01-front-exterior.jpg', alt: 'Front exterior — 4611 76th Street SW Mukilteo with RV parking', col: '1 / 2', row: '1 / 3' },
                { src: '/images/mukilteo-04-great-room.jpg', alt: 'Open-concept great room with kitchen, dining, and living', col: '2 / 3', row: '1 / 2' },
                { src: '/images/mukilteo-05-kitchen-view.jpg', alt: 'Kitchen with bay window, quartz counters, and Sound view', col: '3 / 4', row: '1 / 2' },
                { src: '/images/mukilteo-08-upper-deck.jpg', alt: 'Upper deck with patio set, gas grill, and French doors', col: '2 / 3', row: '2 / 3' },
                { src: '/images/mukilteo-10-hot-tub.jpg', alt: 'Hot tub on side deck with Sound view', col: '3 / 4', row: '2 / 3' },
              ].map((photo) => (
                <div key={photo.src} style={{ position: 'relative', gridColumn: photo.col, gridRow: photo.row, borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
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
            className="mukilteo-layout"
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
                Remodeled around the view.
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
                It&rsquo;s a 1976 NW Contemporary that someone took down to the studs and rebuilt for the view. The Olympic Mountains sit on the horizon to the west, and the previous owner remodeled this house so you&rsquo;d see them from everywhere that mattered &mdash; the kitchen, the great room, the primary bedroom, all three decks. They even cut half a wall in the office so the view comes in from your desk while you work from home. That&rsquo;s the kind of detail you don&rsquo;t get unless someone really lived here.
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
                The remodel itself is full top-to-bottom: quartz counters, Fisher &amp; Paykel appliances, a walk-in primary closet, fresh flooring, fresh fixtures. Two bedrooms upstairs, two more downstairs along with a family room, a wet bar (microwave only, no cooktop), and a full bath &mdash; so the lower level holds its own when you have adult kids landing back home, a long-term guest, or you simply want multi-generational space without renovating to get there.
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
                Outside, three decks wrap the upper level &mdash; one off the primary bedroom, one off the kitchen with a gas grill hookup plumbed in, one with the hot tub. The corner lot is fenced, 10,454 sqft, with a rose garden that&rsquo;s been here longer than I&rsquo;ve been selling houses in Snohomish County. RV parking off the driveway. One-minute walk to the Japanese Gulch trail system. Mukilteo ferry, Boeing Paine Field, and the Mukilteo Speedway corridor are all within five minutes. Built 1976, fully remodeled. All measurements per MLS.
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
                &ldquo;The previous owner remodeled this house around the view &mdash; even cut half a wall in the office so you can see the Olympics from your desk. That&rsquo;s the kind of thoughtful detail you only get when someone really lived here.&rdquo;
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
                  href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%204611%2076th%20Street%20SW%20in%20Mukilteo."
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
              4611 76th Street SW sits in the established Mukilteo neighborhood between Mukilteo Speedway and the Japanese Gulch greenbelt &mdash; a one-minute walk to the trailhead. The address is in the Mukilteo School District, with Boeing Paine Field five minutes away, the Mukilteo ferry to Whidbey Island ten minutes west, and downtown Edmonds twenty minutes south. Seattle is roughly 30 minutes south on I-5 outside of rush hour, and the Sounder commuter rail runs out of Mukilteo Station for an easier daily commute. This is a livable address in Snohomish County for buyers who want trees, trails, and ferry access without giving up a real connection to the metro.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { label: 'Japanese Gulch Trails', distance: '~1 min walk' },
                { label: 'Boeing Paine Field (PAE)', distance: '~5 min' },
                { label: 'Mukilteo Speedway / Shops', distance: '~3 min' },
                { label: 'Mukilteo Ferry to Whidbey', distance: '~10 min' },
                { label: 'Edmonds (downtown + ferry)', distance: '~20 min' },
                { label: 'Seattle (via I-5)', distance: '~30 min' },
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

        {/* Visible FAQ */}
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
              About 4611 76th Street SW
            </h2>
            {[
              {
                q: 'How much is 4611 76th Street SW in Mukilteo?',
                a: '4611 76th Street SW is listed at $975,000. The home offers 2,605 square feet, 4 bedrooms plus an office, 2.25 bathrooms, and a full downstairs kitchenette on a 10,454 sqft fenced corner lot in Mukilteo, WA 98275. MLS# NWM2513590.',
              },
              {
                q: 'What makes 4611 76th Street SW special?',
                a: 'The previous owner remodeled the house around the view. The Olympic Mountains sit to the west, and the home is positioned and reconfigured so you see them from the kitchen, great room, primary bedroom, and all three decks. They even cut half a wall in the office so the view comes through your workspace. Top-to-bottom remodel inside (quartz, Fisher & Paykel appliances, walk-in primary closet) plus a multi-generational layout downstairs.',
              },
              {
                q: 'Can 4611 76th Street SW work for multi-generational living?',
                a: 'Yes. The lower level has the 3rd and 4th bedrooms, a family room, a full bath, and a wet bar with a microwave (no cooktop) — so it can comfortably hold an adult child landing back home, a long-term guest, or a parent moving in. It is not a fully separate ADU, but it gives independent living space without needing to renovate.',
              },
              {
                q: 'How many bedrooms does 4611 76th Street SW have?',
                a: 'The home has 4 bedrooms plus an office (5 flexible rooms total). Two bedrooms upstairs and two downstairs. Per MLS measurements.',
              },
              {
                q: 'Are there showings or open houses at 4611 76th Street SW?',
                a: 'Showings are by appointment. Text or call Kim Pelham at (425) 250-9422 to schedule a walk-through. Times are flexible — weekday evenings and weekends both work.',
              },
              {
                q: 'Who is the listing agent for 4611 76th Street SW?',
                a: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate in Snohomish County, WA. Kim has 17+ years of experience and can be reached at (425) 250-9422.',
              },
              {
                q: 'What school district is 4611 76th Street SW in?',
                a: '4611 76th Street SW is in the Mukilteo School District in Snohomish County, Washington.',
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
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%204611%2076th%20Street%20SW%20in%20Mukilteo."
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
          .mukilteo-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .mukilteo-gallery {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: unset !important;
            grid-auto-rows: 160px;
          }
          .mukilteo-gallery > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </>
  );
}
