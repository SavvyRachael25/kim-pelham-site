'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const PHOTO = '/listings/2528831-admiralty/photos';

const details = [
  { label: 'Bedrooms', value: '2' },
  { label: 'Bathrooms', value: '1.75 (one full, one three-quarter)' },
  { label: 'Square Feet', value: '1,140 sqft (per NWMLS)' },
  { label: 'Type', value: 'End-unit condo, ground floor, all one level' },
  { label: 'Year Built', value: '1989 (interior remodeled 2024)' },
  { label: 'Living Room', value: 'Wood-burning fireplace, mosaic tile surround' },
  { label: 'Flooring', value: 'New LVP throughout' },
  { label: 'Appliances', value: 'New, all included' },
  { label: 'Heating / Cooling', value: 'Wall furnace + wall A/C' },
  { label: 'Smart Home', value: 'Smart thermostat, smart light switches, modern outlets' },
  { label: 'Lighting', value: 'Recessed LED throughout' },
  { label: 'Primary Suite', value: 'Ensuite bath, walk-in closet' },
  { label: 'Outdoor', value: 'Slider to private patio, lawn beyond' },
  { label: 'Parking', value: '1-car detached garage, 1 assigned, guest parking' },
  { label: 'Roof', value: 'HOA maintained' },
  { label: 'HOA', value: '$533 / month' },
  { label: 'Annual Taxes', value: '$3,277' },
  { label: 'School District', value: 'Mukilteo School District' },
  { label: 'NWMLS', value: '#2528831' },
];

const faq = [
  {
    q: 'How much is 11706 Admiralty Way Unit B in Everett?',
    a: '11706 Admiralty Way Unit B is listed at $375,000. The home is a 2-bedroom, 1.75-bathroom, 1,140 sqft end-unit condo on the ground floor in Everett, WA 98204. NWMLS #2528831.',
  },
  {
    q: 'What makes 11706 Admiralty Way Unit B special?',
    a: 'It is an end-unit on the ground floor, so the home is all one level with no shared upstairs neighbor. The unit was recently remodeled with new LVP flooring, designer paint, new appliances, smart thermostat, smart light switches, modernized outlets, and recessed LED throughout. The living room has a wood-burning fireplace with mosaic tile surround. The primary suite has an ensuite bath and walk-in closet. Slider opens to a private patio with lawn beyond.',
  },
  {
    q: 'How many bedrooms and bathrooms does 11706 Admiralty Way Unit B have?',
    a: '2 bedrooms and 1.75 bathrooms (one full, one three-quarter). Total square footage is 1,140 per NWMLS measurements.',
  },
  {
    q: 'When is the open house at 11706 Admiralty Way Unit B?',
    a: 'The next open house is Saturday, May 30, 2026 from 1:00 PM to 3:00 PM. Walk through, no appointment needed. Hosted by Kim Pelham, The Pelham Group NW. Text Kim at (425) 250-9422 if you plan to come, or to schedule a private showing.',
  },
  {
    q: 'What is the HOA and what are the taxes at 11706 Admiralty Way Unit B?',
    a: 'The HOA is $533 per month. Annual property taxes are $3,277. The HOA maintains the roof, exterior, and common areas.',
  },
  {
    q: 'What school district is 11706 Admiralty Way Unit B in?',
    a: '11706 Admiralty Way Unit B is in the Mukilteo School District in Snohomish County, Washington.',
  },
  {
    q: 'What parking comes with 11706 Admiralty Way Unit B?',
    a: 'The unit comes with a detached 1-car garage plus an assigned outdoor stall and access to guest parking on the property.',
  },
  {
    q: 'How far is 11706 Admiralty Way Unit B from Boeing and the freeways?',
    a: 'About 5 minutes to Boeing Paine Field, easy access to I-5, I-405, and Hwy 2. The future Lynnwood and Everett Link light rail stations are also nearby.',
  },
  {
    q: 'Who is the listing agent for 11706 Admiralty Way Unit B?',
    a: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate. Kim has 17+ years of experience in Snohomish County and can be reached at (425) 250-9422 or kim@thepelhamgroupnw.com.',
  },
];

export default function AdmiraltyPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero image, exterior */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 55vw, 600px)' }}>
          <Image
            src={`${PHOTO}/exterior-back.jpg`}
            alt="Back exterior of 11706 Admiralty Way Unit B, Everett WA, ground-floor end-unit condo with private patio and lawn"
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
              background:
                'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
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
              New Listing &middot; Active &middot; Open Sat May 30
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
              11706 Admiralty Way, Unit B
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
              }}
            >
              Everett, WA 98204 &nbsp;|&nbsp; Snohomish County
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
            NWMLS #2528831
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
                $375,000
              </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { label: 'Bed', value: '2' },
                { label: 'Bath', value: '1.75' },
                { label: 'Sqft', value: '1,140' },
                { label: 'Per Sqft', value: '$329' },
                { label: 'Built', value: '1989' },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: '#F8F5F0',
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      color: 'rgba(248,245,240,0.55)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginTop: '4px',
                    }}
                  >
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

        {/* Open House banner */}
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
              Open House This Saturday
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
              Saturday, May 30 &middot; 1:00 PM to 3:00 PM
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.92)',
                margin: 0,
              }}
            >
              11706 Admiralty Way Unit B, Everett WA 98204 &nbsp;&middot;&nbsp; No appointment needed
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20planning%20to%20stop%20by%20the%20Admiralty%20Way%20open%20house%20Saturday."
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
                Text Kim You&apos;re Coming
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=11706+Admiralty+Way+B+Everett+WA+98204"
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

        {/* AEO Quick Property Facts */}
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
              Quick Property Facts &middot; NWMLS #2528831
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
                { term: 'Price', def: '$375,000' },
                { term: 'Bedrooms', def: '2' },
                { term: 'Bathrooms', def: '1.75' },
                { term: 'Square Feet', def: '1,140 (per NWMLS)' },
                { term: 'Year Built', def: '1989 (remodeled 2024)' },
                { term: 'NWMLS#', def: '2528831' },
                { term: 'Status', def: 'Active' },
                { term: 'Type', def: 'Condo, end-unit, ground floor' },
                { term: 'HOA', def: '$533 / mo' },
                { term: 'Taxes', def: '$3,277 / yr' },
                { term: 'Parking', def: '1-car garage + assigned' },
                { term: 'School District', def: 'Mukilteo' },
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
            <div className="admiralty-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: '8px' }}>
              {[
                { src: `${PHOTO}/hero-living-fireplace.jpg`, alt: 'Living room with wood-burning fireplace and mosaic tile surround at 11706 Admiralty Way Unit B, Everett', col: '1 / 2', row: '1 / 3' },
                { src: `${PHOTO}/kitchen.jpg`, alt: 'Refreshed kitchen with new appliances at 11706 Admiralty Way Unit B, Everett WA', col: '2 / 3', row: '1 / 2' },
                { src: `${PHOTO}/primary-bedroom.jpg`, alt: 'Primary bedroom with new LVP flooring at 11706 Admiralty Way Unit B, Everett', col: '3 / 4', row: '1 / 2' },
                { src: `${PHOTO}/slider-to-patio.jpg`, alt: 'Slider to private patio with lawn beyond at 11706 Admiralty Way Unit B', col: '2 / 3', row: '2 / 3' },
                { src: `${PHOTO}/patio-wicker.jpg`, alt: 'Private patio with wicker chairs at 11706 Admiralty Way Unit B, Everett', col: '3 / 4', row: '2 / 3' },
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
            className="admiralty-layout"
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
                Recently remodeled. Ground floor. All one level.
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
                It is the end unit on the ground floor, which means the whole home is on one level
                with no upstairs neighbor and an extra window or two from being on the corner. The
                living room has a wood-burning fireplace with a mosaic tile surround. New LVP runs
                through the whole unit, the walls were freshly painted in a soft designer palette,
                and the appliances are new.
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
                The remodel went deeper than cosmetics. The outlets were updated, recessed LED was
                added throughout, and the home now runs on a smart thermostat with smart light
                switches. The primary suite has an ensuite bath and a walk-in closet, and the
                slider opens to a private patio with lawn beyond.
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
                Parking is generous for a condo at this price: a detached 1-car garage, an
                assigned outdoor stall, and access to guest parking. The HOA maintains the roof and
                the exterior. The address is in the Mukilteo School District. Boeing is about
                five minutes away, the future light rail is nearby, and I-5, I-405, and Hwy 2 are
                all easy on. All measurements per NWMLS.
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
                &ldquo;Ground floor, end unit, all one level. For a first-time buyer or someone
                downsizing into something low-maintenance, that combination at this price is
                rarer than it sounds.&rdquo;
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
                  href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%2011706%20Admiralty%20Way%20Unit%20B."
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
            <aside
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
                    <dt style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#888', flexShrink: 0 }}>
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
                  Listed by Kim Pelham, The Pelham Group NW (brokered by Katrina Eileen Real Estate). Contact for disclosures and showing availability.
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
            </aside>
          </div>
        </section>

        {/* Location + Area */}
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
              11706 Admiralty Way sits in southwest Everett, between Boeing Paine Field
              and the I-5 corridor, inside the Mukilteo School District. Boeing&rsquo;s main
              campus is about five minutes away. The future Lynnwood and Everett Link light
              rail stations bring transit closer, and I-5, I-405, and Hwy 2 are all an easy
              on. The Mukilteo ferry to Whidbey is about fifteen minutes west. For a buyer
              who commutes to Boeing, works hybrid into Seattle, or simply wants the freeway
              for weekend trips, the location reads well across all three patterns.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { label: 'Boeing Paine Field (PAE)', distance: '~5 min' },
                { label: 'Future Light Rail (Lynnwood / Everett Link)', distance: 'Nearby' },
                { label: 'I-5 on-ramp', distance: '~5 min' },
                { label: 'Mukilteo Ferry to Whidbey', distance: '~15 min' },
                { label: 'Downtown Everett', distance: '~12 min' },
                { label: 'Seattle (via I-5, non-peak)', distance: '~30 min' },
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
              About 11706 Admiralty Way Unit B
            </h2>
            {faq.map((item, idx, arr) => (
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
              Come Walk It
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
              Photos help, but the ground-floor end-unit layout is something you feel when you
              stand in it. Text or call Kim directly to set up a private tour or to ask about
              the HOA, the disclosures, or anything in the spec sheet.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27m%20interested%20in%2011706%20Admiralty%20Way%20Unit%20B."
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
            <div style={{ marginTop: '20px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'rgba(248,245,240,0.5)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Equal Housing Opportunity. The Pelham Group NW, brokered by Katrina Eileen Real Estate. WA Broker #119262. NWMLS #2528831.
              </p>
            </div>
            <div style={{ marginTop: '20px' }}>
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
          .admiralty-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .admiralty-gallery {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: unset !important;
            grid-auto-rows: 200px !important;
            grid-auto-flow: dense !important;
          }
          .admiralty-gallery > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 480px) {
          .admiralty-gallery {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 240px !important;
          }
        }
      `}</style>
    </>
  );
}
