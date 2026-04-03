'use client';

import Link from 'next/link';

const testimonials = [
  {
    stars: 5,
    text: "Kim didn't just help us find a house — she helped us find our home...",
    author: 'Sarah & Michael P.',
    location: 'Bought in Mill Creek',
  },
  {
    stars: 5,
    text: 'She goes way above and beyond with staging...',
    author: 'Lisa R.',
    location: 'Sold in Bothell',
  },
  {
    stars: 5,
    text: 'Kim was very professional and got a great price for my condo...',
    author: 'Susanne T.',
    location: 'Sold in Everett',
  },
];

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      style={{
        minWidth: '350px',
        backgroundColor: '#FFFFFF',
        padding: '32px',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        scrollSnapAlign: 'start',
      }}
    >
      {/* Stars */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
        {[...Array(testimonial.stars)].map((_, i) => (
          <span key={i} style={{ fontSize: '18px', color: '#FFD700' }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: '#2C2C2C',
          lineHeight: 1.8,
          margin: '0 0 24px 0',
          fontStyle: 'italic',
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Author */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 700,
          color: '#2C2C2C',
          margin: '0 0 4px 0',
        }}
      >
        {testimonial.author}
      </p>

      {/* Location */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: '#9B9B9B',
          margin: 0,
        }}
      >
        {testimonial.location}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#F8F5F0',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '48px',
            paddingLeft: '24px', paddingRight: '24px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '40px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: 0,
            }}
          >
            What Clients Say
          </h2>
          <Link href="/testimonials">
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
              Read More Reviews
            </span>
          </Link>
        </div>

        {/* Carousel */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: '16px',
            marginBottom: '-16px',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style>{`
        ::-webkit-scrollbar {
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #E8E3DA;
        }
        ::-webkit-scrollbar-thumb {
          background: #B8845C;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
