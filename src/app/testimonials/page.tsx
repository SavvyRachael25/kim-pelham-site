'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import Link from 'next/link';

// Testimonials data removed — all entries were placeholder/fabricated. See FIX 6 (audit 4/16/26).
// Replace with real verified Google reviews when available.

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

      {/* Testimonials — empty state pending verified Google reviews */}
      <section
        style={{
          flex: 1,
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ textAlign: 'center', padding: '60px 24px', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: '#B8845C', marginBottom: '16px' }}>
            Loading verified Google reviews
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
            Kim has 40+ verified reviews on Google. Check back shortly, or read them directly.
          </p>
          <a
            href="https://www.google.com/search?q=pelham+group+nw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              backgroundColor: '#2F5233',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Read Google Reviews
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: '#F8F5F0',
          padding: '60px 20px',
          textAlign: 'center',
          borderTop: '1px solid #E8E3DA',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 400,
              color: '#2C2C2C',
              margin: '0 0 20px 0',
              letterSpacing: '0.5px',
            }}
          >
            Have a Story to Share?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#666666',
              marginBottom: '30px',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6,
            }}
          >
            We'd love to hear about your experience. Share your story on Google Reviews and help other families discover the support they need.
          </p>
          <Link
            href="https://www.google.com/search?q=pelham+group&oq=pelham+group&aqs=chrome..69i57j69i60l3j69i59j0.2783j0j7&sourceid=chrome&ie=UTF-8#lrd=0x549aab241dc769eb:0xa9019d38c1325de7,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#2F5233',
              color: '#FFFFFF',
              padding: '14px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid #2F5233',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a3a1a';
              e.currentTarget.style.borderColor = '#1a3a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2F5233';
              e.currentTarget.style.borderColor = '#2F5233';
            }}
          >
            Leave a Review on Google
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
