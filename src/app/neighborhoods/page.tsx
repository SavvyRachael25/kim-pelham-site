'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

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
    image: '/images/neighborhood-01-everett-marina.jpg',
    size: 'featured',
    rotation: -2,
  },
  {
    id: 2,
    name: 'Bothell',
    description: 'Tech hub community with modern amenities, beautiful parks, and innovative spirit',
    image: '/images/neighborhood-02-bothell-main-street.jpg',
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
    image: '/images/property-03-lake-stevens-waterfront.jpg',
    size: 'regular',
    rotation: -1.5,
  },
  {
    id: 6,
    name: 'Marysville',
    description: 'Growing community with affordability, access to nature, and strong sense of community',
    image: '/images/hero-03-porch-connection.jpg',
    size: 'regular',
    rotation: 1,
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main style={{ backgroundColor: '#F8F5F0' }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232F5233' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundColor: '#2F5233',
            color: '#F8F5F0',
            padding: 'clamp(3rem, 8vw, 6rem) 2rem',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 700,
              margin: '0 0 1rem 0',
              letterSpacing: '-0.02em',
            }}
          >
            Neighborhoods
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              margin: '0',
              opacity: 0.95,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Discover the vibrant communities I know and love
          </p>
        </section>

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
              Six Communities,
              <br />
              <span style={{ color: '#2F5233' }}>Infinite Possibilities</span>
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
                        'linear-gradient(135deg, rgba(47, 82, 51, 0.6) 0%, rgba(184, 132, 92, 0.4) 100%)',
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
                      href={`/neighborhoods/${neighborhood.id}`}
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
    </>
  );
}
