'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Properties() {
  const [hovered, setHovered] = useState(false);

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
              featured listing
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

        {/* Featured Potlatch Road Card */}
        <Link
          href="/properties/1406-potlatch-beach-road-tulalip"
          style={{ textDecoration: 'none', display: 'block', maxWidth: '900px', margin: '0 auto' }}
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
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
            className="potlatch-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Image side */}
            <div style={{ position: 'relative', minHeight: '340px' }}>
              <Image
                src="/images/potlatch-02-exterior.jpg"
                alt="1406 Potlatch Beach Road exterior — waterfront home in Tulalip, WA"
                fill
                quality={90}
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
                New Listing
              </div>
            </div>

            {/* Content side */}
            <div style={{ padding: '40px 40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#B8845C',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    margin: '0 0 10px 0',
                  }}
                >
                  Tulalip, WA 98271
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    fontWeight: 700,
                    color: '#2C2C2C',
                    margin: '0 0 6px 0',
                    lineHeight: 1.2,
                  }}
                >
                  1406 Potlatch Beach Road
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 700,
                    color: '#2F5233',
                    margin: '0 0 24px 0',
                  }}
                >
                  $950,000
                </p>

                {/* Stats */}
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { label: 'Bed', value: '3' },
                    { label: 'Bath', value: '1' },
                    { label: 'Sqft', value: '1,662' },
                    { label: 'Acres', value: '0.36' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#2C2C2C', lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#2F5233',
                    margin: '0 0 16px 0',
                    lineHeight: 1.4,
                  }}
                >
                  A $3 million view for under a million.
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: '#555',
                    lineHeight: 1.65,
                    margin: '0 0 20px 0',
                  }}
                >
                  High-bank waterfront on Puget Sound. Sweeping Sound vistas, sunsets over the Olympics, 0.36 acres. Seattle waterfront starts at $3M. This one is $950K. Same water, 35 miles north.
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '19px',
                    color: '#B8845C',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  The sunsets here stop you cold every time
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    backgroundColor: '#B8845C',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .potlatch-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
