'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import Link from 'next/link';
import { reviews } from '@/data/reviews';

function ClayStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? '#B8845C' : '#E0D8CE'} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <ScrollProgress />

      <InnerHero
        title="What My Clients Say"
        subtitle="Real experiences from real families"
        image="/images/hero-03-porch-connection.jpg"
        imageAlt="Happy family on home porch"
      />

      {/* Aggregate rating bar */}
      <section style={{ backgroundColor: '#2F5233', padding: '40px 24px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '22px', color: '#B8845C', margin: '0 0 4px 0' }}>
              verified Google reviews
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: 700, color: '#F8F5F0', lineHeight: 1 }}>
                5.0
              </span>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#B8845C" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(248,245,240,0.65)', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  20 reviews
                </p>
              </div>
            </div>
          </div>

          <div style={{ width: '1px', height: '60px', backgroundColor: 'rgba(248,245,240,0.2)' }} aria-hidden="true" />

          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Best of Zillow', icon: '🏆' },
              { label: 'Best of Snohomish County 2024', icon: '★' },
              { label: 'SRES Certified', icon: '✓' },
            ].map(({ label, icon }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '20px', color: '#B8845C', margin: '0 0 4px 0' }}>
                  {icon}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: '#F8F5F0', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section style={{ padding: '72px 24px 80px', backgroundColor: '#F8F5F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}>
            {reviews.map((review, idx) => (
              <article
                key={idx}
                style={{
                  backgroundColor: '#FDFBF8',
                  borderRadius: '4px',
                  padding: '32px 28px 28px 24px',
                  boxShadow: '0 1px 8px rgba(47,40,30,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  border: '1px solid #EAE4DA',
                  borderLeftWidth: '3px',
                  borderLeftColor: '#B8845C',
                }}
              >
                {/* Stars + Google G */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <ClayStars rating={review.rating} />
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google review" role="img" style={{ opacity: 0.4 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16.5px',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#3A3226',
                  lineHeight: 1.8,
                  margin: 0,
                  flexGrow: 1,
                }}>
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Name + date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '4px' }}>
                  <p style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '21px',
                    color: '#B8845C',
                    margin: 0,
                    lineHeight: 1,
                  }}>
                    {review.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: '#A89880',
                    margin: 0,
                  }}>
                    {review.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '64px 24px',
        textAlign: 'center',
        borderTop: '1px solid #E8E3DA',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '22px',
            color: '#B8845C',
            margin: '0 0 8px 0',
          }}>
            had a great experience?
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 400,
            color: '#2C2C2C',
            margin: '0 0 16px 0',
          }}>
            Share Your Story
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#666',
            lineHeight: 1.7,
            marginBottom: '32px',
          }}>
            Your review helps other Snohomish County families find the support they need.
          </p>
          <Link
            href="https://www.google.com/search?q=pelham+group&oq=pelham+group&aqs=chrome..69i57j69i60l3j69i59j0.2783j0j7&sourceid=chrome&ie=UTF-8#lrd=0x549aab241dc769eb:0xa9019d38c1325de7,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#2F5233',
              color: '#F8F5F0',
              padding: '16px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3d6b42'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F5233'; }}
          >
            Leave a Google Review
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
