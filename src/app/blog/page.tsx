'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

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
        {/* Hero Section */}
        <section
          style={{
            background: `linear-gradient(135deg, var(--color-forest) 0%, #1f3823 100%)`,
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 20px',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(196, 162, 101, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(196, 162, 101, 0.08) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 400,
                color: 'var(--color-cream)',
                marginBottom: '16px',
              }}
            >
              Blog
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'rgba(248, 245, 240, 0.9)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Real Estate Insights from Snohomish County
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  style={{
                    padding: '40px',
                    border: `1px solid var(--color-border)`,
                    borderRadius: '4px',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s',
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
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#fff',
                        backgroundColor: 'var(--color-clay)',
                        padding: '6px 12px',
                        borderRadius: '3px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '16px',
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
                        e.currentTarget.style.color = 'var(--color-clay)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-forest)';
                      }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.7',
                      marginBottom: '24px',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: '#999',
                      }}
                    >
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-clay)',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-forest)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-clay)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      Read More <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '24px',
              }}
            >
              Ready to Take the Next Step?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
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
                backgroundColor: 'var(--color-clay)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a0743d';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-clay)';
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
    </>
  );
}
