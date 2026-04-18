'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
import { neighborhoods } from '@/data/neighborhoods';

export default function NeighborhoodSlugPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const neighborhood = neighborhoods[slug];

  if (!neighborhood) {
    return (
      <>
        <ScrollProgress />
        <Nav />
        <main style={{ padding: '120px 24px', textAlign: 'center', minHeight: '60vh' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              color: '#2F5233',
              marginBottom: '16px',
            }}
          >
            Neighborhood Not Found
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#555',
              marginBottom: '32px',
            }}
          >
            We don&apos;t have a page for that neighborhood yet.
          </p>
          <Link
            href="/neighborhoods"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: '#2F5233',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            View All Neighborhoods
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const {
    name,
    description,
    paragraphs,
    image,
    imageAlt,
    priceRange,
    schools,
    commute,
    faqs,
    isComingSoon,
    nearbyNeighborhoods,
  } = neighborhood;

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        {/* Hero */}
        <InnerHero
          title={`${name} Homes for Sale`}
          subtitle={description}
          image={image}
          imageAlt={imageAlt}
        />

        {/* Intro section */}
        <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#2C2C2C',
                  fontWeight: 300,
                  marginBottom: idx < paragraphs.length - 1 ? '24px' : '0',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section style={{ padding: '56px 24px', backgroundColor: '#2F5233' }}>
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              justifyContent: 'center',
            }}
          >
            {[
              { label: 'Price Range', value: priceRange },
              { label: 'Schools', value: schools },
              { label: 'Commute', value: commute },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', flex: '1 1 220px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#F8F5F0',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#B8845C',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon banner */}
        {isComingSoon && (
          <section
            style={{
              padding: '48px 24px',
              backgroundColor: '#F8F5F0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                border: '2px solid #B8845C',
                borderRadius: '8px',
                padding: '48px 40px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#B8845C',
                  marginBottom: '16px',
                }}
              >
                Coming Soon
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#2F5233',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                Listings Arriving Shortly
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  color: '#555',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                I&apos;m building out my {name} listings page now. Contact me for early access to
                available homes in this area before they hit the market.
              </p>
              <Link
                href="/contact"
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
                Contact Kim for Early Access
              </Link>
            </div>
          </section>
        )}

        {/* FAQ section */}
        <FAQSection backgroundColor="#F8F5F0" faqs={faqs} />

        {/* Nearby neighborhoods */}
        {nearbyNeighborhoods.length > 0 && (
          <section style={{ padding: '60px 24px', backgroundColor: '#FFFFFF' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#2F5233',
                  marginBottom: '32px',
                }}
              >
                Explore Nearby Neighborhoods
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                {nearbyNeighborhoods.map((nearbySlug) => {
                  const nearbyData = neighborhoods[nearbySlug];
                  if (!nearbyData) return null;
                  return (
                    <Link
                      key={nearbySlug}
                      href={`/neighborhoods/${nearbySlug}`}
                      style={{
                        display: 'inline-block',
                        padding: '10px 22px',
                        backgroundColor: '#2F5233',
                        color: '#F8F5F0',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        borderRadius: '100px',
                        textDecoration: 'none',
                        letterSpacing: '0.3px',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      {nearbyData.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA section */}
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
              Ready to find your home in {name}?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: '#F8F5F0',
                opacity: 0.9,
                lineHeight: 1.7,
                marginBottom: '40px',
              }}
            >
              I&apos;ve been selling real estate in {name} and across Snohomish County for 17+
              years. Let&apos;s talk about what you&apos;re looking for.
            </p>
            <Link
              href="/contact"
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
              Talk to Kim
            </Link>
            <div style={{ marginTop: '24px' }}>
              <Link
                href="/neighborhoods"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: '#F8F5F0',
                  opacity: 0.7,
                  textDecoration: 'none',
                }}
              >
                Back to All Neighborhoods
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
