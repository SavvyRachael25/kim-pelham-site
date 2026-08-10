'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FeaturedListing from '@/components/FeaturedListing';

// Fabricated property cards removed (audit 4/16/26). Use real MLS data when available.

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

        {/* MLS Banner */}
        <section
          style={{
            backgroundColor: '#2F5233',
            padding: '1.25rem 2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', color: '#F8F5F0', margin: '0 0 0.75rem 0', fontSize: '1rem' }}>
            Looking for the full MLS search? Browse all available listings on Kim's profile.
          </p>
          <a
            href="https://community.katrinaeileen.com/team/kim-pelham"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#FFFFFF',
              backgroundColor: '#B8845C',
              padding: '0.65rem 1.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Search All Listings →
          </a>
        </section>

        {/* Featured listing: 3520 192nd Pl SE, Bothell */}
        <FeaturedListing variant="wide" />

        {/* Search all listings prompt */}
        <section
          style={{
            padding: '3rem 2rem',
            backgroundColor: '#F8F5F0',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '20px 24px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
              Browse every active NWMLS listing through Kim&rsquo;s search portal.
            </p>
            <a
              href="https://community.katrinaeileen.com/team/kim-pelham"
              target="_blank"
              rel="noopener noreferrer"
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
              }}
            >
              Search All Listings →
            </a>
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
              <a
                href="https://kim.katrinaeileen.com/seller"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
