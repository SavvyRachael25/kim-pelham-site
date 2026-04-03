'use client';

import Image from 'next/image';

const neighborhoods = [
  {
    id: 1,
    image: '/images/neighborhood-01-everett-marina.jpg',
    title: 'Everett — the heart of it all',
    rotation: -4,
    colSpan: 4,
  },
  {
    id: 2,
    image: '/images/neighborhood-02-bothell-main-street.jpg',
    title: 'Bothell — Main Street vibes',
    rotation: 2,
    colSpan: 4,
  },
  {
    id: 3,
    image: '/images/property-02-mill-creek-home.jpg',
    title: 'Mill Creek — tucked in the trees',
    rotation: -3,
    colSpan: 4,
  },
  {
    id: 4,
    image: '/images/property-03-lake-stevens-waterfront.jpg',
    title: 'Lake Stevens — waterfront living',
    rotation: 3,
    colSpan: 4,
  },
  {
    id: 5,
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    title: 'Snohomish — small-town charm',
    rotation: -2,
    colSpan: 4,
  },
  {
    id: 6,
    image: '/images/lifestyle-01-farmers-market.jpg',
    title: 'Marysville — room to grow',
    rotation: 2,
    colSpan: 4,
  },
];

export default function NeighborhoodsPinboard() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#F8F5F0',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '18px',
              color: '#B8845C',
              margin: '0 0 8px 0',
            }}
          >
            places I know & love
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '40px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 16px 0',
            }}
          >
            Explore the Neighborhoods
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#9B9B9B',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            Each neighborhood in Snohomish County has its own personality. These are the places I
            know like the back of my hand.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            perspective: '1000px',
          }}
        >
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.id}
              style={{
                gridColumn: `span ${neighborhood.colSpan}`,
                position: 'relative',
                aspectRatio: '2/2.4',
                backgroundColor: '#FFFFFF',
                padding: '8px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                transform: `rotate(${neighborhood.rotation}deg)`,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(${neighborhood.rotation}deg) translateY(-4px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${neighborhood.rotation}deg)`;
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.title}
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Caption */}
              <p
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {neighborhood.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridColumn"] {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gridColumn"] {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
