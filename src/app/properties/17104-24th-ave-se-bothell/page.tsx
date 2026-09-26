'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import TextMeAsk from '@/components/TextMeAsk';

/*
  17104 24th Ave SE, Bothell. NWMLS #2585165, listed 2026-09-24 at $715,000.

  Facts verified against the NWMLS feed on 2026-09-25. PHOTOS PENDING: drop the
  shoot into public/listings/2585165-bothell/photos and fill `gallery` below.
  The gallery block does not render while the array is empty, so the page is
  honest rather than broken until they land.
*/

const PHOTO = '/listings/2585165-bothell/photos';

const gallery: { src: string; alt: string }[] = [
  { src: `${PHOTO}/02.jpg`, alt: 'Front entry and garden beds at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/01.jpg`, alt: 'Front of the single-level rambler with a wide flat lawn at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/04.jpg`, alt: 'Living room with hardwood floors and a wall of windows at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/06.jpg`, alt: 'Living room looking toward the front door at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/11.jpg`, alt: 'Dining area off the kitchen with built-in shelving at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/10.jpg`, alt: 'Oak kitchen with stainless appliances and generous counter space at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/12.jpg`, alt: 'Kitchen with gas range, tile backsplash and window over the sink at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/13.jpg`, alt: 'Kitchen with dishwasher and full-height cabinets at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/17.jpg`, alt: 'Family room with a stone fireplace and built-ins at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/15.jpg`, alt: 'Family room with slider out to the deck at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/14.jpg`, alt: 'Remodeled bath with a tiled walk-in shower at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/19.jpg`, alt: 'Primary bedroom with windows to the yard at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/21.jpg`, alt: 'Second bedroom at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/23.jpg`, alt: 'Third room, currently set up as an office, at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/25.jpg`, alt: 'Laundry and utility area at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/27.jpg`, alt: 'Deck with hot tub at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/28.jpg`, alt: 'Covered gazebo and outdoor dining on the deck at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/34.jpg`, alt: 'Fully fenced back yard with a shed at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/31.jpg`, alt: 'Back of the house and the deck at 17104 24th Ave SE, Bothell WA' },
  { src: `${PHOTO}/30.jpg`, alt: 'The lot from the back fence line at 17104 24th Ave SE, Bothell WA' },
];

const OPEN_HOUSE = { day: 'Saturday', date: 'September 26', time: '11 AM to 1 PM' };

const details = [
  { label: 'Price', value: '$715,000' },
  { label: 'Bedrooms', value: '3' },
  { label: 'Bathrooms', value: '1' },
  { label: 'Square Feet', value: '1,240 sqft (per NWMLS)' },
  { label: 'Lot Size', value: '7,405 sqft' },
  { label: 'Year Built', value: '1977' },
  { label: 'Style', value: 'Single level' },
  { label: 'Flooring', value: 'Laminate' },
  { label: 'Windows', value: 'Updated' },
  { label: 'Bath', value: 'Beautifully remodeled' },
  { label: 'City', value: 'Bothell, WA 98012' },
  { label: 'NWMLS', value: '#2585165' },
];

export default function Listing17104Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        {/* Open house band */}
        <section style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '18px 20px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.95rem', letterSpacing: '0.04em' }}>
            <strong>Open house {OPEN_HOUSE.day}, {OPEN_HOUSE.date}</strong>, {OPEN_HOUSE.time}. Come by, I will be there.
          </p>
        </section>

        <section style={{ background: '#fff', padding: '56px 20px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.5rem', color: 'var(--color-clay)', margin: '0 0 6px' }}>just listed,</p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 8px', lineHeight: 1.1 }}>
              17104 24th Ave SE
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--color-text-light)', margin: '0 0 18px' }}>
              Bothell, WA 98012
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-forest)', margin: '0 0 8px' }}>
              $715,000
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text)', margin: '0 0 32px' }}>
              3 bed &middot; 1 bath &middot; 1,240 sqft &middot; built 1977 &middot; 7,405 sqft lot
            </p>

            <Image
              src={`${PHOTO}/00.jpg`}
              alt="Front of 17104 24th Ave SE, Bothell WA, a single-level home with an attached two-car garage"
              width={1697}
              height={1131}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', marginBottom: '28px' }}
            />

            {gallery.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '40px' }}>
                {gallery.map((p) => (
                  <Image key={p.src} src={p.src} alt={p.alt} width={800} height={600}
                    style={{ width: '100%', height: 'auto', borderRadius: '6px', display: 'block' }} />
                ))}
              </div>
            )}

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 400, color: 'var(--color-forest)', margin: '0 0 16px' }}>
              About this home
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-text)', marginBottom: '20px' }}>
              A single-level three bedroom on a quiet street in Bothell, kept immaculately and genuinely move-in ready.
              Laminate flooring, updated windows, a lot of natural light, and a bath that has been beautifully remodeled.
              Seven thousand square feet of lot, which is more yard than most houses at this price in this area.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-text)', marginBottom: '32px' }}>
              The sellers are retiring and moving out of state. They cared for this house for a long time and it shows
              in the places people do not usually bother with.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', background: 'var(--color-border)', border: '1px solid var(--color-border)', marginBottom: '40px' }}>
              {details.map((d) => (
                <div key={d.label} style={{ background: '#fff', padding: '14px 18px' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-clay)', fontWeight: 700 }}>{d.label}</p>
                  <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)' }}>{d.value}</p>
                </div>
              ))}
            </div>

            <TextMeAsk question="Want to see it before Saturday?" page="17104-24th-ave-se-bothell" />

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-light)', marginTop: '32px' }}>
              Listed by Kim Pelham, The Pelham Group NW, brokered by Katrina Eileen Real Estate. Call or text{' '}
              <a href="tel:+14252509422" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>425-250-9422</a>. See{' '}
              <Link href="/properties" style={{ color: 'var(--color-clay)' }}>all current listings</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
