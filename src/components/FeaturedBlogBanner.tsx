'use client';

import Image from 'next/image';
import Link from 'next/link';

/*
  FeaturedBlogBanner — homepage editorial banner pointing at the
  most important blog article (currently the Pre-Sale Renovation
  ROI playbook piece). Mirrors the visual weight of FeaturedListing
  wide so swapping it in does not break the homepage rhythm.
*/

const FEATURED = {
  slug: 'pre-sale-renovation-roi-snohomish-2026',
  category: 'Seller Strategy',
  date: 'June 9, 2026',
  readTime: '9 min read',
  title: 'Should You Renovate Before Selling? A 2026 ROI Reality Check',
  hook:
    'The 2024 Cost vs Value Report shows which pre-sale improvements actually recoup their cost (garage doors at 194%) and which lose money (upscale kitchens at 38%). Here is the broker-on-the-ground breakdown.',
  hero: '/images/hero-02-warm-kitchen.jpg',
  heroAlt: 'Warm staged kitchen photographed for listing',
};

export default function FeaturedBlogBanner() {
  return (
    <section
      aria-label="Featured blog post"
      style={{
        background: '#F8F5F0',
        padding: '64px 24px',
        borderTop: '1px solid #E8E3DA',
        borderBottom: '1px solid #E8E3DA',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '40px',
          alignItems: 'center',
        }}
        className="featured-blog-grid"
      >
        <Link
          href={`/blog/${FEATURED.slug}`}
          style={{
            position: 'relative',
            display: 'block',
            height: 'clamp(280px, 40vw, 440px)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          }}
        >
          <Image
            src={FEATURED.hero}
            alt={FEATURED.heroAlt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: '#B8845C',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '3px',
            }}
          >
            From the Blog
          </div>
        </Link>

        <div>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.4rem',
              color: '#B8845C',
              margin: '0 0 8px 0',
              lineHeight: 1,
            }}
          >
            this week from Kim
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#B8845C',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 14px 0',
            }}
          >
            {FEATURED.category} &middot; {FEATURED.date} &middot; {FEATURED.readTime}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 500,
              color: '#2F5233',
              margin: '0 0 18px 0',
              lineHeight: 1.18,
            }}
          >
            <Link
              href={`/blog/${FEATURED.slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {FEATURED.title}
            </Link>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.02rem',
              color: '#4a4a4a',
              lineHeight: 1.65,
              margin: '0 0 28px 0',
              maxWidth: '520px',
            }}
          >
            {FEATURED.hook}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              href={`/blog/${FEATURED.slug}`}
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              Read the article
            </Link>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'transparent',
                color: '#2F5233',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '4px',
                textDecoration: 'none',
                border: '2px solid #2F5233',
              }}
            >
              Browse all articles &rarr;
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .featured-blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
