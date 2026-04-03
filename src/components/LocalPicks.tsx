'use client';

import Image from 'next/image';

const picks = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop',
    title: 'Narrative Coffee, Everett',
    description: 'My Tuesday morning ritual. The oat milk latte is unreal.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop',
    title: 'The Loft, Mill Creek',
    description: 'Best brunch spot for new homeowners to celebrate closing.',
  },
  {
    id: 3,
    image: '/images/neighborhood-01-everett-marina.jpg',
    title: 'Jetty Island, Everett',
    description: 'Free ferry in summer. Kids love it. Adults love it more.',
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
          style={{
            objectFit: 'cover',
          }}
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
            fontSize: '15px',
            color: '#9B9B9B',
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
              fontSize: '18px',
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
