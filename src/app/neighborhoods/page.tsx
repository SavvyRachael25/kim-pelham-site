'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

interface NeighborhoodCard {
  id: number;
  name: string;
  description: string;
  image: string;
  size: 'regular' | 'large' | 'featured';
  rotation: number;
}

const neighborhoods: NeighborhoodCard[] = [
  {
    id: 1,
    name: 'Everett',
    description: 'Waterfront community with vibrant downtown, excellent schools, and strong family appeal',
    image: '/images/neighborhood-01-everett-marina.jpg', // TODO: photo from Kim — her own Everett photos
    size: 'featured',
    rotation: -2,
  },
  {
    id: 2,
    name: 'Bothell',
    description: 'Tech hub community with modern amenities, beautiful parks, and innovative spirit',
    image: '/images/property-03-lake-stevens-waterfront.jpg', // TODO: Bothell Old Town area photo
    size: 'regular',
    rotation: 1.5,
  },
  {
    id: 3,
    name: 'Snohomish',
    description: 'Historic charm meets modern convenience with antique shops, fine dining, and natural beauty',
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    size: 'regular',
    rotation: -1,
  },
  {
    id: 4,
    name: 'Mill Creek',
    description: 'Planned community with excellent schools, extensive trails, and beautiful home options',
    image: '/images/property-02-mill-creek-home.jpg',
    size: 'regular',
    rotation: 2,
  },
  {
    id: 5,
    name: 'Lake Stevens',
    description: 'Waterfront living with recreational opportunities, stunning views, and peaceful surroundings',
    image: '/images/property-03-lake-stevens-waterfront.jpg', // TODO: new Lake Stevens photo — current one is wrong
    size: 'regular',
    rotation: -1.5,
  },
  {
    id: 6,
    name: 'Marysville',
    description: 'Growing community with affordability, access to nature, and strong sense of community',
    image: '/images/neighborhood-03-snohomish-historic.jpg', // TODO: new Marysville photo — current one is wrong
    size: 'regular',
    rotation: 1,
  },
];

const comingSoonNeighborhoods = [
  {
    id: 7,
    name: 'Monroe',
    description: 'Gateway to the Skykomish Valley — farms, river views, and room to breathe',
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    rotation: -1,
  },
  {
    id: 8,
    name: 'Edmonds',
    description: 'Waterfront charm, arts district, and ferry views — one of the most livable small cities in Washington',
    image: '/images/neighborhood-01-everett-marina.jpg',
    rotation: 1.5,
  },
  {
    id: 9,
    name: 'Arlington',
    description: 'Small-town feel with big outdoor access — foothills, rivers, and a tight-knit community',
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    rotation: -0.5,
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main style={{ backgroundColor: '#F8F5F0' }}>
        <InnerHero
          title="Neighborhoods"
          subtitle="Discover the vibrant communities I know and love"
          image="/images/neighborhood-01-everett-marina.jpg"
          imageAlt="Everett marina and waterfront in Snohomish County"
        />

        {/* Intro Section */}
        <section
          style={{
            padding: '3rem 2rem',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E8E3DA',
          }}
        >
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: '0',
                lineHeight: 1.2,
              }}
            >
              The Communities I Serve,
              <br />
              <span style={{ color: '#2F5233' }}>Inside & Out</span>
            </h2>
          </div>
        </section>

        {/* Neighborhoods Grid - Bento Style */}
        <section
          style={{
            padding: '3rem 2rem',
            backgroundColor: '#F8F5F0',
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
            }}
          >
            <div
              className="neigh-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                gridAutoRows: '300px',
              }}
            >
              {neighborhoods.map((neighborhood, index) => (
                <article
                  key={neighborhood.id}
                  className="neigh-card"
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transform: `rotate(${neighborhood.rotation}deg)`,
                    transition: 'all 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 4px 12px rgba(44, 44, 44, 0.12)',
                    backgroundColor: '#FFFFFF',
                    gridColumn: index === 0 ? 'span 2' : 'span 1',
                    gridRow: index === 0 ? 'span 2' : 'span 1',
                    minHeight: index === 0 ? '620px' : '300px',
                    '--hover-lift': '0 12px 24px rgba(44, 44, 44, 0.2)',
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = 'rotate(0deg) translateY(-8px)';
                    el.style.boxShadow = 'var(--hover-lift)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = `rotate(${neighborhood.rotation}deg)`;
                    el.style.boxShadow = '0 4px 12px rgba(44, 44, 44, 0.12)';
                  }}
                >
                  {/* Image Background */}
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    sizes={
                      index === 0
                        ? '(max-width: 768px) 100vw, 50vw'
                        : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    }
                  />

                  {/* Overlay Gradient */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.35) 55%, transparent 100%)',
                      transition: 'all 0.3s ease',
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '2rem',
                      color: '#F8F5F0',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: index === 0 ? 'clamp(2rem, 5vw, 2.5rem)' : 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: '0 0 1rem 0',
                        lineHeight: 1.1,
                      }}
                    >
                      {neighborhood.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: index === 0 ? '1rem' : '0.95rem',
                        margin: '0 0 1.5rem 0',
                        lineHeight: 1.5,
                        opacity: 0.95,
                      }}
                    >
                      {neighborhood.description}
                    </p>

                    <Link
                      href={`/neighborhoods/${neighborhood.name.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#F8F5F0',
                        textDecoration: 'none',
                        paddingBottom: '0.5rem',
                        borderBottom: '2px solid #F8F5F0',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        width: 'fit-content',
                      }}
                    >
                      Explore →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Tiles */}
            <div style={{ marginTop: '2rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '20px',
                  color: '#B8845C',
                  margin: '0 0 16px 0',
                }}
              >
                coming soon
              </p>
              <div
                className="neigh-cs-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem',
                  gridAutoRows: '220px',
                }}
              >
                {comingSoonNeighborhoods.map((neighborhood) => (
                  <article
                    key={neighborhood.id}
                    className="neigh-cs-card"
                    style={{
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transform: `rotate(${neighborhood.rotation}deg)`,
                      boxShadow: '0 4px 12px rgba(44, 44, 44, 0.12)',
                      backgroundColor: '#FFFFFF',
                      opacity: 0.75,
                      minHeight: '220px',
                    }}
                  >
                    <Image
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      fill
                      style={{ objectFit: 'cover', filter: 'grayscale(40%)' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)',
                      }}
                    />
                    {/* Coming Soon badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        backgroundColor: '#B8845C',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: '2px',
                      }}
                    >
                      Coming Soon
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '2rem',
                        color: '#F8F5F0',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          margin: '0 0 0.5rem 0',
                          lineHeight: 1.1,
                        }}
                      >
                        {neighborhood.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          margin: '0 0 0.75rem 0',
                          lineHeight: 1.5,
                          opacity: 0.85,
                        }}
                      >
                        {neighborhood.description}
                      </p>
                      <Link
                        href={`/neighborhoods/${neighborhood.name.toLowerCase().replace(/\s+/g, '-')}`}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'rgba(248,245,240,0.8)',
                          textDecoration: 'none',
                          paddingBottom: '0.3rem',
                          borderBottom: '1px solid rgba(248,245,240,0.45)',
                          display: 'inline-block',
                          transition: 'all 0.3s ease',
                          width: 'fit-content',
                        }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: '0 0 1.5rem 0',
              }}
            >
              Ready to Explore?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: '#2C2C2C',
                margin: '0 0 2.5rem 0',
                lineHeight: 1.6,
              }}
            >
              Whether you're drawn to waterfront living, historic charm, or a planned community with top-rated schools, I'd love to help you find your perfect neighborhood match.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/contact"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#2F5233',
                  padding: '0.875rem 2rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 0.3s ease',
                }}
              >
                Start a Conversation
              </Link>
              <Link
                href="/properties"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#B8845C',
                  padding: '0.875rem 2rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 0.3s ease',
                }}
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        /* Mobile: uniform card heights, disable rotation */
        @media (max-width: 768px) {
          .neigh-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 260px !important;
          }
          .neigh-card {
            grid-column: 1 !important;
            grid-row: span 1 !important;
            min-height: 260px !important;
            max-height: 260px !important;
            transform: rotate(0deg) !important;
          }
          .neigh-cs-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 260px !important;
          }
          .neigh-cs-card {
            min-height: 260px !important;
            max-height: 260px !important;
            transform: rotate(0deg) !important;
          }
        }
      `}</style>
    </>
  );
}
