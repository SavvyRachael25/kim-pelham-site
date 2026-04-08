'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

interface PropertyCard {
  id: number;
  status: 'ACTIVE' | 'PENDING' | 'JUST SOLD';
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

const properties: PropertyCard[] = [
  {
    id: 1,
    status: 'ACTIVE',
    price: 895000,
    address: '3824 Grand Ave SE, Everett',
    beds: 4,
    baths: 3,
    sqft: 2850,
    image: '/images/property-01-everett-home-exterior.jpg',
  },
  {
    id: 2,
    status: 'ACTIVE',
    price: 675000,
    address: '1247 Pine St, Snohomish',
    beds: 3,
    baths: 2,
    sqft: 1920,
    image: '/images/hero-02-warm-kitchen.jpg',
  },
  {
    id: 3,
    status: 'PENDING',
    price: 1275000,
    address: '5612 Bellwood Way NE, Bothell',
    beds: 5,
    baths: 4,
    sqft: 3400,
    image: '/images/hero-02-warm-kitchen.jpg',
  },
  {
    id: 4,
    status: 'PENDING',
    price: 545000,
    address: '702 Cedar Ln, Marysville',
    beds: 3,
    baths: 2,
    sqft: 1650,
    image: '/images/hero-02-warm-kitchen.jpg',
  },
  {
    id: 5,
    status: 'JUST SOLD',
    price: 2100000,
    address: '928 Harbour Crest Dr, Mukilteo',
    beds: 5,
    baths: 4,
    sqft: 4200,
    image: '/images/hero-02-warm-kitchen.jpg',
  },
  {
    id: 6,
    status: 'JUST SOLD',
    price: 785000,
    address: '4455 Lakewood Dr, Lake Stevens',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: '/images/property-03-lake-stevens-waterfront.jpg',
  },
];

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'ACTIVE':
      return '#B8845C';
    case 'PENDING':
      return '#2F5233';
    case 'JUST SOLD':
      return '#666666';
    default:
      return '#2C2C2C';
  }
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

export default function PropertiesPage() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main style={{ backgroundColor: '#F8F5F0' }}>
        <InnerHero
          title="Featured Properties"
          subtitle="Discover your next home in Snohomish County"
          image="/images/property-02-mill-creek-home.jpg"
          imageAlt="Beautiful home in Mill Creek"
        />

        {/* Filter Bar */}
        <section
          style={{
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E8E3DA',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Status Tabs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['All', 'Active', 'Pending', 'Sold'].map((tab) => (
                <button
                  key={tab}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    backgroundColor: tab === 'All' ? '#2F5233' : 'transparent',
                    color: tab === 'All' ? '#F8F5F0' : '#2C2C2C',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontWeight: tab === 'All' ? 600 : 400,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dropdowns */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <select
                style={{
                  padding: '0.75rem 1rem',
                  border: '1px solid #E8E3DA',
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#2C2C2C',
                }}
              >
                <option>Location</option>
                <option>Everett</option>
                <option>Snohomish</option>
                <option>Bothell</option>
                <option>Marysville</option>
                <option>Lake Stevens</option>
                <option>Mukilteo</option>
              </select>
              <select
                style={{
                  padding: '0.75rem 1rem',
                  border: '1px solid #E8E3DA',
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#2C2C2C',
                }}
              >
                <option>Price Range</option>
                <option>Under $500K</option>
                <option>$500K - $750K</option>
                <option>$750K - $1M</option>
                <option>$1M - $1.5M</option>
                <option>$1.5M+</option>
              </select>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section
          style={{
            padding: '3rem 2rem',
            backgroundColor: '#F8F5F0',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {properties.map((property) => (
              <article
                key={property.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(44, 44, 44, 0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    overflow: 'hidden',
                    backgroundColor: '#E8E3DA',
                  }}
                >
                  <Image
                    src={property.image}
                    alt={property.address}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Status Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: getStatusColor(property.status),
                      color: property.status === 'JUST SOLD' ? '#F8F5F0' : '#F8F5F0',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {property.status}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Price */}
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#2F5233',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {formatPrice(property.price)}
                  </p>

                  {/* Address */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#2C2C2C',
                      margin: '0 0 1rem 0',
                    }}
                  >
                    {property.address}
                  </h2>

                  {/* Specs Row */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #E8E3DA',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          color: '#666666',
                          margin: '0 0 0.25rem 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Beds
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#2C2C2C',
                          margin: '0',
                        }}
                      >
                        {property.beds}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          color: '#666666',
                          margin: '0 0 0.25rem 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Baths
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#2C2C2C',
                          margin: '0',
                        }}
                      >
                        {property.baths}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          color: '#666666',
                          margin: '0 0 0.25rem 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Sqft
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#2C2C2C',
                          margin: '0',
                        }}
                      >
                        {(property.sqft / 1000).toFixed(1)}K
                      </p>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={`/properties/${property.id}`}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#2F5233',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      paddingTop: '0.5rem',
                      borderTop: '2px solid #2F5233',
                      display: 'inline-block',
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Sections */}
        <section
          style={{
            padding: '3rem 2rem',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* CTA 1 */}
            <article
              style={{
                backgroundColor: '#F8F5F0',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #E8E3DA',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: '0 0 1rem 0',
                }}
              >
                Looking for something specific?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#2C2C2C',
                  margin: '0 0 1.5rem 0',
                  lineHeight: 1.6,
                }}
              >
                Can't find the perfect property? Let me know what you're looking for and I'll help you discover homes that match your vision.
              </p>
              <Link
                href="/contact"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#2F5233',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 0.3s ease',
                }}
              >
                Start Your Search
              </Link>
            </article>

            {/* CTA 2 */}
            <article
              style={{
                backgroundColor: '#F8F5F0',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #E8E3DA',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: '0 0 1rem 0',
                }}
              >
                What's Your Home Worth?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#2C2C2C',
                  margin: '0 0 1.5rem 0',
                  lineHeight: 1.6,
                }}
              >
                Curious about your home's current market value? Get a complimentary analysis and see how your property compares.
              </p>
              <Link
                href="/valuation"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#B8845C',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 0.3s ease',
                }}
              >
                Get Valuation
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
