'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    image: '/images/hero-02-warm-kitchen.jpg',
    title: 'First-Time Buyers: 5 Things I Wish Someone Had Told Me',
    excerpt:
      'After 14 years of walking first-time buyers through Snohomish County, these are the things that make the biggest difference.',
    date: 'March 2026',
    category: 'Buying',
  },
  {
    id: 2,
    image: '/images/staging-01-living-room.jpg',
    title: 'Why Staging Still Matters (Even in a Hot Market)',
    excerpt:
      'I stage every listing myself — here\'s why it\'s still the best investment you\'ll make before listing.',
    date: 'February 2026',
    category: 'Selling',
  },
  {
    id: 3,
    image: '/images/neighborhood-03-snohomish-historic.jpg',
    title: 'Snohomish County Market Update: What Sellers Need to Know',
    excerpt:
      'Inventory is shifting. Here\'s what the numbers look like neighborhood by neighborhood — and what it means for your home.',
    date: 'January 2026',
    category: 'Market Update',
  },
];

export default function BlogPreview() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#F8F5F0',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '18px',
                color: '#B8845C',
                margin: '0 0 8px 0',
              }}
            >
              from the blog
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
              Stories & Community
            </h2>
          </div>
          <Link href="/blog">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#B8845C',
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#A07550';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B8845C';
              }}
            >
              View All Posts →
            </span>
          </Link>
        </div>

        {/* Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                {/* Category badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#2F5233',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '2px',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: '#9B9B9B',
                    margin: '0 0 8px 0',
                  }}
                >
                  {post.date}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#2C2C2C',
                    margin: '0 0 12px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#6B6B6B',
                    margin: '0 0 16px 0',
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#B8845C',
                  }}
                >
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
