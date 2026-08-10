'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const PHOTO = '/listings/2558328-bothell/photos';

const HERO = {
  src: `${PHOTO}/dsc05986.jpg`,
  alt: 'Front exterior of 3520 192nd Pl SE, Bothell WA, a 2016 two-story home in Village at Brookshire',
};

// Curated, ordered gallery (photos 2 through 22). Hero shows above the fold.
const gallery = [
  { src: `${PHOTO}/dsc05849.jpg`, alt: 'Kitchen with quartz island, white cabinets, and stainless steel appliances at 3520 192nd Pl SE, Bothell' },
  { src: `${PHOTO}/dsc05852.jpg`, alt: 'Kitchen with island and refrigerator at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05831.jpg`, alt: 'Living room with electric fireplace at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05846.jpg`, alt: 'Living room open to the kitchen at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05789.jpg`, alt: 'Bright open great room with soaring ceilings at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05882.jpg`, alt: 'Dining area off the kitchen at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05888.jpg`, alt: 'Dining area opening to the covered patio at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05699.jpg`, alt: 'Primary bedroom at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05702.jpg`, alt: 'Primary bedroom with dresser at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05762.jpg`, alt: 'Primary bath with double vanity at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05717.jpg`, alt: 'Primary bath with soaking tub and glass shower at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05771.jpg`, alt: 'Primary walk-in closet at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05798.jpg`, alt: 'Upstairs loft and flex space at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05669.jpg`, alt: 'Secondary bedroom at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05675.jpg`, alt: 'Secondary bedroom at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05660.jpg`, alt: 'Full bathroom with double vanity at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05645.jpg`, alt: 'Home office or den at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05783.jpg`, alt: 'Laundry room at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05923.jpg`, alt: 'Covered back patio at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05932.jpg`, alt: 'Rear exterior of the home at 3520 192nd Pl SE, Bothell WA' },
  { src: `${PHOTO}/dsc05941.jpg`, alt: 'Fully fenced backyard at 3520 192nd Pl SE, Bothell WA' },
];

const details = [
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '2.5' },
  { label: 'Square Feet', value: '2,453 sqft (per NWMLS)' },
  { label: 'Lot Size', value: '3,907 sqft, fully fenced' },
  { label: 'Year Built', value: '2016' },
  { label: 'Rooms', value: '13' },
  { label: 'Style', value: 'Two-story, north-facing' },
  { label: 'Neighborhood', value: 'Village at Brookshire' },
  { label: 'Main Level Flooring', value: 'Durable laminate' },
  { label: 'Living Room', value: 'New carpet (2024), electric fireplace' },
  { label: 'Kitchen', value: 'Quartz counters, subway tile, stainless steel, walk-in pantry' },
  { label: 'Upstairs', value: 'Loft / flex room, laundry with utility sink' },
  { label: 'Primary Suite', value: 'Five-piece bath, custom walk-in closet organizer' },
  { label: 'Cooling', value: 'Central A/C' },
  { label: 'Outdoor', value: 'Covered patio, low-maintenance yard' },
  { label: 'Parking', value: 'Up to 4 vehicles plus guest parking' },
  { label: 'Inspection', value: 'Pre-inspection complete' },
  { label: 'School District', value: 'Northshore' },
  { label: 'NWMLS', value: '#2558328' },
];

const faq = [
  {
    q: 'How much is 3520 192nd Pl SE in Bothell?',
    a: '3520 192nd Pl SE is listed at $1,150,000. It is a 4-bedroom, 2.5-bathroom, 2,453 sqft home built in 2016 in the Village at Brookshire neighborhood of Bothell, WA 98012. NWMLS #2558328.',
  },
  {
    q: 'What makes 3520 192nd Pl SE special?',
    a: 'Soaring ceilings and abundant natural light over an open floor plan, a kitchen with quartz countertops, subway tile backsplash, stainless steel appliances, and an oversized walk-in pantry, plus an upstairs loft that works as a media room, home office, or hobby space. The primary suite has a spa-inspired five-piece bath and a custom walk-in closet organizer, and there is an upstairs laundry room with a utility sink. The home is pre-inspected and move-in ready.',
  },
  {
    q: 'How many bedrooms and bathrooms does 3520 192nd Pl SE have?',
    a: '4 bedrooms and 2.5 bathrooms across 2,453 square feet and 13 rooms total, per NWMLS measurements. All four bedrooms are generously sized, and the primary suite includes a five-piece bath.',
  },
  {
    q: 'Is 3520 192nd Pl SE still available?',
    a: 'Yes. 3520 192nd Pl SE was listed on July 23, 2026 and is active and for sale at $1,150,000. To book a private showing, text or call Kim Pelham at (425) 250-9422.',
  },
  {
    q: 'What school district is 3520 192nd Pl SE in?',
    a: '3520 192nd Pl SE is served by the award-winning Northshore School District.',
  },
  {
    q: 'What are the lot size and year built for 3520 192nd Pl SE?',
    a: 'The home was built in 2016 on a 3,907 sqft lot. The backyard is fully fenced and low-maintenance with a covered patio.',
  },
  {
    q: 'What parking comes with 3520 192nd Pl SE?',
    a: 'There is parking for up to four vehicles, plus abundant guest parking. A community park and playground sit at the end of the street.',
  },
  {
    q: 'Who is the listing agent for 3520 192nd Pl SE?',
    a: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate. Kim has 17+ years of experience and can be reached at (425) 250-9422 or kim@thepelhamgroupnw.com. WA Broker #119262.',
  },
];

export default function BothellPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextPhoto = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );
  const prevPhoto = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero image, front exterior */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 55vw, 600px)' }}>
          <Image
            src={HERO.src}
            alt={HERO.alt}
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
              For Sale &middot; Move-In Ready &middot; Pre-Inspected
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
              3520 192nd Pl SE
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
              }}
            >
              Bothell, WA 98012 &nbsp;|&nbsp; Village at Brookshire
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
            NWMLS #2558328
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
                $1,150,000
              </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { label: 'Bed', value: '4' },
                { label: 'Bath', value: '2.5' },
                { label: 'Sqft', value: '2,453' },
                { label: 'Per Sqft', value: '$481' },
                { label: 'Built', value: '2016' },
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

        {/* Book a showing banner */}
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
              Available Now
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
              Listed at $1,150,000, move-in ready
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.92)',
                margin: 0,
              }}
            >
              3520 192nd Pl SE is on the market now. The pre-inspection is complete, so you can tour it with the big questions already answered. Text or call Kim to book a private showing.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27d%20like%20to%20book%20a%20showing%20at%203520%20192nd%20Pl%20SE%20in%20Bothell."
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
                Book a Showing
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
              Quick Property Facts &middot; NWMLS #2558328
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
                { term: 'Price', def: '$1,150,000' },
                { term: 'Bedrooms', def: '4' },
                { term: 'Bathrooms', def: '2.5' },
                { term: 'Square Feet', def: '2,453 (per NWMLS)' },
                { term: 'Lot Size', def: '3,907 sqft' },
                { term: 'Year Built', def: '2016' },
                { term: 'Rooms', def: '13' },
                { term: 'NWMLS#', def: '2558328' },
                { term: 'Status', def: 'Active / For Sale' },
                { term: 'Neighborhood', def: 'Village at Brookshire' },
                { term: 'School District', def: 'Northshore' },
                { term: 'Parking', def: 'Up to 4 + guest' },
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
            <div
              className="bothell-gallery"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '220px', gap: '8px' }}
            >
              {gallery.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(idx)}
                  aria-label={`View photo: ${photo.alt}`}
                  style={{
                    position: 'relative',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    background: '#F0EDE7',
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 480px) 100vw, (max-width: 700px) 50vw, 33vw"
                  />
                </button>
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
            className="bothell-layout"
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
                Built in 2016, open and full of light.
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
                This is a north-facing home in the Village at Brookshire neighborhood, built in 2016 and laid out around soaring ceilings and abundant natural light. The main level runs on an open floor plan with durable laminate flooring, and the living room, where the electric fireplace sits, was given new carpet in 2024. It reads bright and connected the moment you step in.
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
                The kitchen is the working heart of the main floor: quartz countertops, a subway tile backsplash, stainless steel appliances, and an oversized walk-in pantry that holds a lot more than it looks like it should. Upstairs, a loft and family room gives you a flexible second gathering space that works as a media room, a home office, or a hobby space. All four bedrooms are generously sized, and the primary suite carries a spa-inspired five-piece bath plus a custom walk-in closet organizer. The upstairs laundry room, with its own utility sink, keeps that chore where the clothes already are.
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
                Outside, the backyard is fully fenced and low-maintenance with a covered patio, so the outdoor time comes without the weekend upkeep. Central A/C keeps the whole house comfortable through summer, there is parking for up to four vehicles plus abundant guest parking, and a community park and playground sit at the end of the street. The home is in the award-winning Northshore School District. The pre-inspection is already complete, so it is move-in ready. All measurements per NWMLS.
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
                &ldquo;It is already pre-inspected, so you can walk it knowing the big questions are answered. The five-piece primary bath and that walk-in pantry are the two spots people tend to linger.&rdquo;
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
                  href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27d%20like%20to%20book%20a%20showing%20at%203520%20192nd%20Pl%20SE%20in%20Bothell."
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
                  Book a Showing
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
                  Listed by Kim Pelham, The Pelham Group NW (brokered by Katrina Eileen Real Estate). Text or call to book a private showing or request disclosures.
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
              3520 192nd Pl SE sits in the Village at Brookshire neighborhood in Bothell. The home faces north, and a community park and playground sit at the end of the street, an easy walk from the front door. It is served by the award-winning Northshore School District.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { label: 'School District', value: 'Northshore (award-winning)' },
                { label: 'Community Park & Playground', value: 'End of the street' },
                { label: 'Neighborhood', value: 'Village at Brookshire' },
                { label: 'Orientation', value: 'North-facing' },
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
                      textAlign: 'right',
                    }}
                  >
                    {loc.value}
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
              About 3520 192nd Pl SE
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
              Come See It
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
              Photos give you the shape of it, but the light and the ceilings are something you feel in person. Text or call Kim directly to book a private showing or to ask about the pre-inspection, the disclosures, or anything in the spec sheet.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href="sms:+14252509422?&body=Hi%20Kim%2C%20I%27d%20like%20to%20book%20a%20showing%20at%203520%20192nd%20Pl%20SE%20in%20Bothell."
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
                Book a Showing
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
                Equal Housing Opportunity. The Pelham Group NW, brokered by Katrina Eileen Real Estate. WA Broker #119262. NWMLS #2558328.
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Property photo viewer"
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(20,18,15,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'transparent',
              border: 'none',
              color: '#F8F5F0',
              fontSize: '2rem',
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.35)',
              border: 'none',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '1.6rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &lsaquo;
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(92vw, 1200px)',
              height: 'min(80vh, 820px)',
            }}
          >
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              quality={90}
              style={{ objectFit: 'contain' }}
              sizes="92vw"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.35)',
              border: 'none',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '1.6rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            &rsaquo;
          </button>
          <p
            style={{
              position: 'absolute',
              bottom: '20px',
              left: 0,
              right: 0,
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'rgba(248,245,240,0.75)',
              margin: 0,
              padding: '0 24px',
            }}
          >
            {gallery[lightbox].alt} &middot; {lightbox + 1} / {gallery.length}
          </p>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .bothell-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .bothell-gallery {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 200px !important;
          }
        }
        @media (max-width: 480px) {
          .bothell-gallery {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 240px !important;
          }
        }
      `}</style>
    </>
  );
}
