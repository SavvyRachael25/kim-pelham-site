'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: 'BUYER' | 'SELLER' | 'SENIOR SERVICES';
  location: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Kim didn't just help us find a house — she helped us find our home. Her knowledge of the Eastside communities, her patience with our long search, and her honesty throughout the process made all the difference.",
    name: 'Sarah & Michael P.',
    role: 'BUYER',
    location: 'Mill Creek',
    bgColor: '#FFFFFF',
  },
  {
    id: 2,
    quote:
      "Kim's staging and marketing strategy was incredible. We listed our home expecting a long process, but it sold $45,000 over asking in just eight days. Her expertise is truly exceptional.",
    name: 'Robert K.',
    role: 'SELLER',
    location: 'Everett',
    bgColor: '#F8F5F0',
  },
  {
    id: 3,
    quote:
      'After 40 years in our home, downsizing felt overwhelming. Kim coordinated everything with such care and professionalism. She treated us like family, not just clients.',
    name: 'Margaret & Tom L.',
    role: 'SENIOR SERVICES',
    location: 'Snohomish',
    bgColor: '#FFFFFF',
  },
  {
    id: 4,
    quote:
      "As a first-time buyer, I felt nervous about the whole process. Kim walked me through every step, answered all my questions patiently, and negotiated $12,000 off the asking price.",
    name: 'Jennifer W.',
    role: 'BUYER',
    location: 'Bothell',
    bgColor: '#F8F5F0',
  },
  {
    id: 5,
    quote:
      "Our waterfront home is our most prized possession. Kim's strategic pricing and marketing got us a 104% sale-to-list ratio.",
    name: 'David & Lisa M.',
    role: 'SELLER',
    location: 'Lake Stevens',
    bgColor: '#FFFFFF',
  },
  {
    id: 6,
    quote:
      "When my husband passed, I had no idea how to handle the estate sale. Kim was there for every step—compassionate, thorough, and completely trustworthy.",
    name: 'Helen R.',
    role: 'SENIOR SERVICES',
    location: 'Marysville',
    bgColor: '#F8F5F0',
  },
  {
    id: 7,
    quote:
      'We relocated from California with three kids and had no idea which neighborhoods would be the best fit. Kim knew every area intimately.',
    name: 'The N. Family',
    role: 'BUYER',
    location: 'Lynnwood',
    bgColor: '#FFFFFF',
  },
  {
    id: 8,
    quote:
      "Our 1970s rambler was dated and tired. Kim's photography and staging completely transformed how buyers saw the home. It sold in just five days.",
    name: 'Brian & Amanda S.',
    role: 'SELLER',
    location: 'Shoreline',
    bgColor: '#F8F5F0',
  },
];

const getRoleBadgeColor = (role: string): string => {
  switch (role) {
    case 'BUYER':
      return '#B8845C'; // clay
    case 'SELLER':
      return '#2F5233'; // forest
    case 'SENIOR SERVICES':
      return '#9B9B9B'; // muted
    default:
      return '#2C2C2C';
  }
};

export default function TestimonialsPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <ScrollProgress />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#2F5233',
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(79, 101, 65, 0.3) 0%, transparent 50%), linear-gradient(135deg, #2F5233 0%, #1a3a1a 100%)',
          color: '#F8F5F0',
          padding: '80px 20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 400,
              margin: '0 0 20px 0',
              letterSpacing: '0.5px',
            }}
          >
            What My Clients Say
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              margin: 0,
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            Real experiences from real families
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section
        style={{
          flex: 1,
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              style={{
                backgroundColor: testimonial.bgColor,
                padding: '40px',
                borderRadius: '8px',
                border: '1px solid #E8E3DA',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  fontSize: '4rem',
                  color: '#B8845C',
                  lineHeight: 1,
                  opacity: 0.3,
                }}
              >
                "
              </div>

              <blockquote
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#2C2C2C',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                }}
              >
                {testimonial.quote}
              </blockquote>

              <div style={{ borderTop: '1px solid #E8E3DA', paddingTop: '20px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#2C2C2C',
                    margin: '0 0 8px 0',
                  }}
                >
                  {testimonial.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: getRoleBadgeColor(testimonial.role),
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {testimonial.role}
                  </span>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: '#666666',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
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
            href="https://g.co/kgs"
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
