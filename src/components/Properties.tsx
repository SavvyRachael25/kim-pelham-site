'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Listing = {
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  city: string;
  address: string;
  price: string;
  stats: { label: string; value: string }[];
  tagline: string;
  body: string;
  handwritten: string;
};

const listings: Listing[] = [
  {
    href: '/properties/1406-potlatch-beach-road-tulalip',
    image: '/images/potlatch-02-exterior.jpg',
    imageAlt: '1406 Potlatch Beach Road exterior — waterfront home in Marysville, WA',
    badge: 'New Listing',
    city: 'Marysville, WA 98271',
    address: '1406 Potlatch Beach Road',
    price: '$899,900',
    stats: [
      { label: 'Bed', value: '3' },
      { label: 'Bath', value: '2' },
      { label: 'Sqft', value: '1,662' },
      { label: 'Acres', value: '0.36' },
    ],
    tagline: 'A $3 million view for under a million.',
    body: 'High-bank waterfront on Puget Sound. Sweeping Sound vistas, sunsets over the Olympics, 0.36 acres. Seattle waterfront starts at $3M. This one is $899K. Same water, 35 miles north.',
    handwritten: 'The sunsets here stop you cold every time',
  },
  {
    href: '/properties/4611-76th-street-mukilteo',
    image: '/images/mukilteo-01-front-exterior.jpg',
    imageAlt: '4611 76th Street SW exterior — Olympic Mountain view home in Mukilteo, WA',
    badge: 'New Listing',
    city: 'Mukilteo, WA 98275',
    address: '4611 76th Street SW',
    price: '$975,000',
    stats: [
      { label: 'Bed', value: '4+Office' },
      { label: 'Bath', value: '2.25' },
      { label: 'Sqft', value: '2,605' },
      { label: 'Lot', value: '10,454' },
    ],
    tagline: 'Remodeled around the view.',
    body: 'Fully remodeled 1976 NW Contemporary positioned for the Olympic Mountains. Three decks, quartz kitchen, walk-in primary, hot tub, RV parking. The previous owner even cut half a wall in the office so you can see the view while you work.',
    handwritten: 'Showings by appointment — walk it whenever works',
  },
];

function PropertyCard({ listing }: { listing: Listing }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={listing.href}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
      <div
        style={{
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: hovered ? '0 16px 40px rgba(47,82,51,0.14)' : '0 4px 16px rgba(0,0,0,0.10)',
          transition: 'all 0.3s ease',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E8E3DA',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            quality={88}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Featured badge */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: '#2F5233',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '3px',
              zIndex: 10,
            }}
          >
            {listing.badge}
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: '32px 32px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#B8845C',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                margin: '0 0 10px 0',
              }}
            >
              {listing.city}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: '0 0 6px 0',
                lineHeight: 1.2,
              }}
            >
              {listing.address}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 700,
                color: '#2F5233',
                margin: '0 0 22px 0',
              }}
            >
              {listing.price}
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '20px',
                flexWrap: 'wrap',
              }}
            >
              {listing.stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#2C2C2C', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#2F5233',
                margin: '0 0 14px 0',
                lineHeight: 1.4,
              }}
            >
              {listing.tagline}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: '#555',
                lineHeight: 1.65,
                margin: '0 0 18px 0',
              }}
            >
              {listing.body}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '18px',
                color: '#B8845C',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {listing.handwritten}
            </p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '11px 26px',
                backgroundColor: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
                borderRadius: '4px',
                transition: 'background 0.2s',
              }}
            >
              View Listing Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Properties() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '22px',
                color: '#B8845C',
                margin: '0 0 8px 0',
              }}
            >
              featured listings
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '40px',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: 0,
              }}
            >
              Featured Properties
            </h2>
          </div>
          <Link href="/properties">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#B8845C',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              View All Listings
            </span>
          </Link>
        </div>

        {/* Two-card grid */}
        <div
          className="properties-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {listings.map((l) => (
            <PropertyCard key={l.href} listing={l} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .properties-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
