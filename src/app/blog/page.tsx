'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '9',
    title: 'A $3 Million View for Under a Million — Potlatch Beach Road, Tulalip',
    slug: 'potlatch-beach-road-tulalip-waterfront',
    excerpt:
      'Seattle waterfront costs $3M+. This Puget Sound high-bank waterfront in Tulalip is under $1M. Same Sound, same sunsets, radically different price tag. Here is why.',
    date: '2026-04-17',
    category: 'Featured Listing',
  },
  {
    id: '8',
    title: 'The Everett Neighborhoods That Flood in November (And 3 That Don\'t)',
    slug: 'everett-neighborhoods-buyers-guide',
    excerpt:
      '17 years and 50+ Everett homes sold. Here is what I actually know about the neighborhoods — which most people won\'t tell you until you ask.',
    date: '2026-04-17',
    category: 'Buyer Guide',
  },
  {
    id: '7',
    title: 'SRES Realtor: What It Means and Why Seniors Choose One',
    slug: 'sres-realtor-snohomish-county',
    excerpt:
      'SRES stands for Seniors Real Estate Specialist. Here is what the credential actually covers, why it matters for downsizing, and what to ask before you hire.',
    date: '2026-04-17',
    category: 'Senior Services',
  },
  {
    id: '6',
    title: 'Why Staging Beats Price Cuts: A Data-Driven Case',
    slug: 'staging-beats-price-cuts',
    excerpt:
      'A 3% price reduction on a $600K home costs $18,000. Professional staging costs $500-2,000. The math strongly favors staging. Here is why.',
    date: '2026-04-17',
    category: 'Home Staging',
  },
  {
    id: '5',
    title: 'How to Sell 5% Above Market Value in Snohomish County',
    slug: 'sell-above-market-value',
    excerpt:
      'My 102.03% sale-to-list ratio is not luck. It is the result of a specific staging and pricing framework applied to every listing. Here is how it works.',
    date: '2026-04-17',
    category: 'Selling Tips',
  },
  {
    id: '1',
    title: 'The First 72 Hours: Why They Make or Break Your Home Sale',
    slug: 'first-72-hours',
    excerpt:
      'The first three days after listing are the highest-value hours of your entire sale. Here is how to make sure yours count.',
    date: '2026-03-15',
    category: 'Selling Tips',
  },
  {
    id: '2',
    title: 'Senior Downsizing: A Compassionate Guide to Your Next Chapter',
    slug: 'senior-downsizing',
    excerpt:
      'Navigate the emotional and practical aspects of downsizing with a broker who has been through it 30+ times with Snohomish County families.',
    date: '2026-02-28',
    category: 'Senior Services',
  },
  {
    id: '3',
    title: 'The Psychology of Home Staging: Why Buyers Fall in Love',
    slug: 'staging-psychology',
    excerpt:
      'Buyers decide in 90 seconds. Staging is how you win those 90 seconds. Here is the neuroscience behind what actually works.',
    date: '2026-02-10',
    category: 'Home Staging',
  },
  {
    id: '4',
    title: 'Understanding Your Sale-to-List Ratio (And Why Kim\'s Is 102.03%)',
    slug: 'sale-to-list-ratio',
    excerpt:
      'The most useful number for evaluating a real estate broker, and most sellers never ask about it. Here is what it means and how to use it.',
    date: '2026-01-25',
    category: 'Market Insights',
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Stories & Insights"
          subtitle="Real estate wisdom from Snohomish County"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="Warm kitchen interior in Snohomish County home"
        />

        {/* Blog Posts Grid */}
        <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
            }}
          >
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card"
                style={{
                  padding: '32px',
                  border: '1px solid #E8E3DA',
                  borderRadius: '6px',
                  backgroundColor: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(47, 82, 51, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      backgroundColor: '#B8845C',
                      padding: '5px 10px',
                      borderRadius: '3px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: '#767676',
                    }}
                  >
                    {formatDate(post.date)}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#2F5233',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B8845C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#2F5233';
                    }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: '#555',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#B8845C',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2F5233';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8845C';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Read More <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 24px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#2F5233',
                marginBottom: '24px',
              }}
            >
              Ready to Take the Next Step?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: '40px',
              }}
            >
              Whether you're buying, selling, or just exploring your options, I'm here to help.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A07550';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B8845C';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .blog-card {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </>
  );
}
