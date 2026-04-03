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
    id: '1',
    title: 'The First 72 Hours: Why They Make or Break Your Home Sale',
    slug: 'first-72-hours',
    excerpt:
      'Discover why the first three days after listing are crucial to your home\'s success. Learn about preparation, staging, photography, pricing strategy, and more.',
    date: '2026-03-15',
    category: 'Selling Tips',
  },
  {
    id: '2',
    title: 'Senior Downsizing: A Compassionate Guide to Your Next Chapter',
    slug: 'senior-downsizing',
    excerpt:
      'Navigate the emotional and practical aspects of downsizing. We share insights on timing, community options, and creating your ideal lifestyle.',
    date: '2026-02-28',
    category: 'Lifestyle',
  },
  {
    id: '3',
    title: 'The Psychology of Home Staging: Why Buyers Fall in Love',
    slug: 'staging-psychology',
    excerpt:
      'Understanding buyer psychology is key to successful staging. Learn the science behind creating emotional connections in your home.',
    date: '2026-02-10',
    category: 'Home Staging',
  },
  {
    id: '4',
    title: 'Understanding Your Sale-to-List Ratio (And Why Kim\'s Is 104.4%)',
    slug: 'sale-to-list-ratio',
    excerpt:
      'What does a 104.4% sale-to-list ratio mean, and why does it matter for sellers? Explore the metrics that predict your real estate success.',
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
                      color: '#9B9B9B',
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
