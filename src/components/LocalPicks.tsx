'use client';

import Image from 'next/image';

const picks = [
  {
    id: 1,
    image: '/lifestyle/loft-coffee-bar.webp',
    title: 'Loft Coffee Bar, Everett',
    description: "Old building, better espresso. My kind of place.",
  },
  {
    id: 2,
    image: '/lifestyle/jl-barbecue.jpg',
    title: 'J&L Barbecue, Everett',
    description: "Best barbecue around, and the cornbread is amazing. Get the takeout.",
  },
  {
    id: 3,
    image: '/lifestyle/baby-seal-dinghy.jpg',
    title: 'Everett Marina',
    description: "We've lived at the marina for 12 years. It never gets old.",
  },
];

interface PickCardProps {
  pick: (typeof picks)[0];
}

function PickCard({ pick }: PickCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden',
        }}
      >
        <Image
          src={pick.image}
          alt={pick.title}
          fill
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: '0 0 12px 0',
          }}
        >
          {pick.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '22px',
            color: '#595959',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {pick.description}
        </p>
      </div>
    </div>
  );
}

export default function LocalPicks() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '22px',
              color: '#B8845C',
              margin: '0 0 8px 0',
            }}
          >
            what I'm loving locally
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '40px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: 0,
            }}
          >
            Kim's Local Picks
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {picks.map((pick) => (
            <PickCard key={pick.id} pick={pick} />
          ))}
        </div>
      </div>
    </section>
  );
}
