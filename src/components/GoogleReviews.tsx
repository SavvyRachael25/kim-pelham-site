'use client';

/**
 * GoogleReviews — Infinite dual-row scrolling review cards.
 *
 * To update with real reviews: replace the `reviews` array below.
 * Each entry needs: name, text, date (display string), rating (1–5).
 */

interface Review {
  name: string;
  text: string;
  date: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Sarah M.',
    text: "Kim was absolutely incredible throughout our entire home buying process. She knew every neighborhood in Snohomish County and helped us find exactly what we were looking for. She answered every call and text promptly — felt like she was our own personal advocate.",
    date: 'March 2026',
    rating: 5,
  },
  {
    name: 'James & Linda T.',
    text: "We've worked with several agents over the years. Kim is in a completely different league. Her two-buyer policy means she's actually focused on YOU. We got our dream home in Mill Creek and she staged it beautifully when we later sold.",
    date: 'February 2026',
    rating: 5,
  },
  {
    name: 'Derek R.',
    text: "Kim sold our Everett home for over asking price in 4 days. Her staging was stunning — she did it herself and made our house look like something out of a magazine. We walked away with more than we expected.",
    date: 'January 2026',
    rating: 5,
  },
  {
    name: 'Michelle K.',
    text: "As a first-time buyer, the whole process felt overwhelming. Kim broke everything down, never made me feel rushed, and was honest about every property. She's a real neighbor, not just a salesperson. I can't recommend her enough.",
    date: 'December 2025',
    rating: 5,
  },
  {
    name: 'Robert & Carol P.',
    text: "Kim specializes in senior transitions and it shows. She understood exactly what we needed as we downsized — patient, kind, and thorough. She found us a perfect home in Lake Stevens. We're so grateful.",
    date: 'November 2025',
    rating: 5,
  },
  {
    name: 'Amanda W.',
    text: "She answers her own phone. That alone sets her apart. Add in her market knowledge of Bothell and Mill Creek, and her staging work — she's genuinely the best in the area. Closed in 21 days.",
    date: 'October 2025',
    rating: 5,
  },
  {
    name: 'Tony & Grace L.',
    text: "Kim has an incredible eye for staging. Our home sold in the first weekend with multiple offers. She knew exactly what buyers in Snohomish County were looking for and positioned our home perfectly.",
    date: 'September 2025',
    rating: 5,
  },
  {
    name: 'Brittany S.',
    text: "I was relocating from out of state and Kim made the entire process seamless. She sent videos, answered all my questions, and negotiated hard for me. I felt taken care of every step of the way.",
    date: 'August 2025',
    rating: 5,
  },
  {
    name: 'Phil & Karen O.',
    text: "After 30 years in our Marysville home, we were nervous about selling. Kim held our hand through every step. Her compassion and expertise made something daunting actually feel manageable. What a gem.",
    date: 'July 2025',
    rating: 5,
  },
  {
    name: 'Natalie G.',
    text: "Kim found us a home in Snohomish that checked literally every box — before it even hit Zillow. Her network is unreal. We weren't competing with anyone. Just solid, professional, proactive work.",
    date: 'June 2025',
    rating: 5,
  },
];

// Split reviews into two rows for the dual marquee
const row1 = reviews.slice(0, 5);
const row2 = reviews.slice(5);

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? '#F5A623' : '#E0E0E0'}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '6px',
        padding: '24px 28px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        width: '340px',
        minWidth: '340px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        border: '1px solid #F0EBE3',
      }}
    >
      {/* Stars + Google logo row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StarRating rating={review.rating} />
        {/* Google "G" mark */}
        <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google review" role="img">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: '#3A3A3A',
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
          // Clamp to 4 lines
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } as React.CSSProperties}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer name + date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 600,
            color: '#2C2C2C',
            margin: 0,
          }}
        >
          {review.name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#999',
            margin: 0,
          }}
        >
          {review.date}
        </p>
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  reviews: Review[];
  direction?: 'left' | 'right';
  speed?: number;
}

function MarqueeRow({ reviews, direction = 'left', speed = 40 }: MarqueeRowProps) {
  const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight';
  const doubled = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          animation: `${animName} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#F8F5F0',
        padding: '80px 0',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 48px', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '18px',
            color: '#B8845C',
            margin: '0 0 8px 0',
          }}
        >
          what clients are saying
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '40px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: 0,
            }}
          >
            40 Google Reviews
          </h2>
          <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#595959',
            }}
          >
            5.0 average
          </span>
        </div>
      </div>

      {/* Dual scrolling rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <MarqueeRow reviews={row1} direction="left" speed={45} />
        <MarqueeRow reviews={row2} direction="right" speed={38} />
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
