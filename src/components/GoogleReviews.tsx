'use client';

interface Review {
  name: string;
  text: string;
  date: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Chi Okafor',
    text: "Kim was a pleasure to work with. I outreached her and within the same hour placed an offer on a home and it got accepted within 20 mins as a result of her clever tactic. She worked with me to make seller demands — communicated effectively and I got the result I wanted. The aftercare was also amazing. Certainly a royal memorable experience. Thank you Kim!",
    date: '11 months ago',
    rating: 5,
  },
  {
    name: 'Christina Rawlinson',
    text: "Kim has been my realtor in 2 sales and 2 purchases. She walked me through buying my first home and was super helpful in educating me on the process. We hit some bumps with my mom's health and she was so patient and understanding. I feel so blessed to have had her there. She's quality people.",
    date: '2024',
    rating: 5,
  },
  {
    name: 'Michelle Guerra',
    text: "Kim made selling my mom's home easy and the staging was amazing! I really think the staging was the cherry on top that helped the home sell quickly in a slower market/time of year. Thank you for all the help and guidance!",
    date: '5 months ago',
    rating: 5,
  },
  {
    name: 'Monica Hubinette',
    text: "Kim has a great breadth of knowledge and has helped so many of my friends buy or sell their home. She always comes highly recommended. I love that she is able to stage your home and has the ability to fix any issue/problems with the home you are trying to sell. I would not hesitate asking for her help!",
    date: '2020',
    rating: 5,
  },
  {
    name: 'Mark Neuhauser',
    text: "From the beginning Kim was great. Prompt to respond, quick to start the conversation and jumped on things immediately. We were moving from out of state. She made us feel like we were working with a kind and knowledgeable human right from the start — not just an agent.",
    date: '2022',
    rating: 5,
  },
  {
    name: 'Kathy Miller',
    text: "I was in a difficult situation and wanted to move from my three-story house to a rambler style. Kim from the Pelham Group jumped in and started helping me find a place that met my criteria. This did not take a few months. It took years. And she never gave up on me.",
    date: 'March 2026',
    rating: 5,
  },
  {
    name: 'Jeff Rowley',
    text: "Kim Pelham and team helped sell our father's house. They were magnificent! Highly recommend.",
    date: '2024',
    rating: 5,
  },
  {
    name: 'Jim Flores',
    text: "The best! It was a pleasure working with Kim. Could not be happier with the service she provided me. Everything ran smoothly from beginning to end. Great job Kim!",
    date: '2019',
    rating: 5,
  },
  {
    name: 'Fawn Morgan',
    text: "Working with Kim Pelham has been nothing short of inspiring. Kim is the kind of real estate professional every client hopes to have by their side — knowledgeable, compassionate, and truly committed to serving others.",
    date: '10 months ago',
    rating: 5,
  },
  {
    name: 'Nichole Magnuson',
    text: "We were nervous about buying and selling at the same time but Kim handled every detail without us ever feeling pressured or in doubt of things working out. We got what we asked for from our house and actually got the house we had been hoping for.",
    date: '2023',
    rating: 5,
  },
  {
    name: 'Daniel Bayla',
    text: "Kim is simply AMAZING! She helped my family save a ton on a great home in an outstanding neighborhood. Her negotiation skills allowed my family to spend the saved money on things that are important to us — we negotiated $70k off the purchase price!",
    date: '2020',
    rating: 5,
  },
  {
    name: 'Alex Sorge',
    text: "Kim and her team really helped guide my wife and I through the home buying process. They made everything easy.",
    date: '2022',
    rating: 5,
  },
  {
    name: 'Candi Kidd',
    text: "Beyond impressed by Kim! We had a very complicated real estate need — purchasing a Christmas tree farm business and home on the same property. Kim held our hand the entire way. We could have NEVER done it without her.",
    date: '2020',
    rating: 5,
  },
  {
    name: 'Melody Moore',
    text: "Kim is a top-notch professional! I found Kim online while doing a Google search for realtors in our area. Without looking at her existing reviews, I cold called her and explained our more complicated situation. Within a few minutes I knew she was the right person for the job.",
    date: '2020',
    rating: 5,
  },
  {
    name: 'Barbara Blakistone',
    text: "Kim stayed on top of the process and that meant a lot to me in this sizzling hot market. She told me things to change in my house for the best buyer appeal and followed the selling process from the moment of listing all the way through closing.",
    date: '2021',
    rating: 5,
  },
  {
    name: 'Wendy Porter',
    text: "I've had friends use Kim Pelham for their real estate needs, so she came with wonderful, verifiable reviews. I knew when I needed a Realtor she would be my first choice — and she did not disappoint. She is a gem.",
    date: '2023',
    rating: 5,
  },
  {
    name: 'D Graham',
    text: "Kim was great to work with when selling our mom's home. She was thoughtful and professional, making a hard situation go as smoothly as possible. We were very grateful for her expertise in staging and pricing.",
    date: '2024',
    rating: 5,
  },
  {
    name: 'Laura Giordano',
    text: "Kim worked with our family for months, patiently guiding us toward our dream home. She worked around the clock — communicating with brokers, helping us secure contractors, and advocating for us every step of the way.",
    date: '2021',
    rating: 5,
  },
  {
    name: 'Jeannie Forrest',
    text: "Kim Pelham is a skilled professional. I quickly realized she was a 'cut above' her peers in the industry. Kim represents her clients with a business strategy that is both thoughtful and highly effective.",
    date: '2018',
    rating: 5,
  },
  {
    name: 'Jennifer Perry',
    text: "Kim has been a dream to work with. She is extremely professional and really understands the market. She taught us a lot about staging our home — the cards she puts together showing buyers how to see the potential of the home are truly impressive.",
    date: '2020',
    rating: 5,
  },
];

// Split into two rows
const row1 = reviews.slice(0, 10);
const row2 = reviews.slice(10);

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? '#F5A623' : '#E0E0E0'} aria-hidden="true">
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
        <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google review" role="img">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
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
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#2C2C2C', margin: 0 }}>
          {review.name}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', margin: 0 }}>
          {review.date}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction = 'left', speed = 40 }: { reviews: Review[]; direction?: 'left' | 'right'; speed?: number }) {
  const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight';
  const doubled = [...reviews, ...reviews];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{ display: 'flex', gap: '20px', animation: `${animName} ${speed}s linear infinite`, width: 'max-content' }}>
        {doubled.map((review, idx) => <ReviewCard key={idx} review={review} />)}
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section style={{ width: '100%', backgroundColor: '#F8F5F0', padding: '80px 0', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 48px', padding: '0 24px' }}>
        <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '22px', color: '#B8845C', margin: '0 0 8px 0' }}>
          what clients are saying
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: 700, color: '#2C2C2C', margin: 0 }}>
            40 Five-Star Google Reviews
          </h2>
          <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Dual scrolling rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <MarqueeRow reviews={row1} direction="left" speed={55} />
        <MarqueeRow reviews={row2} direction="right" speed={48} />
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
