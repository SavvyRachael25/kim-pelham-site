'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';
import InnerHero from '@/components/InnerHero';
import { useEffect, useRef, useState } from 'react';

export default function SellersPage() {
  const [mounted, setMounted] = useState(false);
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for reveal animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = Object.keys(itemRefs.current).find(
            (k) => itemRefs.current[k] === entry.target
          );
          if (key) {
            setVisibleItems((prev) => ({ ...prev, [key]: true }));
          }
        }
      });
    }, observerOptions);

    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setItemRef = (key: string, el: HTMLDivElement | null) => {
    itemRefs.current[key] = el;
  };

  return (
    <main>
      <Nav />

      <InnerHero
        title="Sell Your Home for More"
        subtitle="104.4% sale-to-list ratio vs 97.98% market average"
        image="/images/property-01-everett-home-exterior.jpg"
        imageAlt="Beautiful home exterior in Everett"
      />

      {/* ========== PROVEN TRACK RECORD ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 700,
            color: '#2F5233',
            textAlign: 'center',
            margin: '0 0 40px 0',
          }}
        >
          Proven Track Record
        </h2>

        <div
          ref={(el) => setItemRef('trackrecord', el)}
          style={{
            padding: '40px',
            backgroundColor: '#F8F5F0',
            border: '2px solid #2F5233',
            borderRadius: '4px',
            textAlign: 'center',
            opacity: visibleItems['trackrecord'] ? 1 : 0,
            transform: visibleItems['trackrecord']
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: '#2C2C2C',
              lineHeight: 1.8,
              margin: '0 0 20px 0',
            }}
          >
            On average, homes in Snohomish County sell for 97.98% of the listing
            price.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '32px',
              fontWeight: 700,
              color: '#B8845C',
              margin: '0 0 20px 0',
            }}
          >
            My clients see 104.4%
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: '#2C2C2C',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            That's an average of <strong>$32,000 more</strong> on a $1M home. For
            smaller homes, it still matters. And it adds up fast.
          </p>
        </div>
      </section>

      {/* ========== 6-STEP PROVEN SYSTEM ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 700,
              color: '#2F5233',
              textAlign: 'center',
              margin: '0 0 60px 0',
            }}
          >
            My 6-Step Proven System
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                step: 1,
                title: 'Identify Repairs',
                desc: 'Strategic inspection to pinpoint repairs that add the most value.',
              },
              {
                step: 2,
                title: 'Staging Assessment',
                desc: 'Professional staging consultation to highlight your home\'s strengths.',
              },
              {
                step: 3,
                title: 'Staging Execution',
                desc: 'We execute the staging plan to create emotional buyer connection.',
              },
              {
                step: 4,
                title: 'Professional Photography',
                desc: 'Studio-quality photos that make buyers want to see your home in person.',
              },
              {
                step: 5,
                title: 'Online Marketing',
                desc: 'Strategic digital placement on the right platforms for your market.',
              },
              {
                step: 6,
                title: 'Quality Marketing Materials',
                desc: 'Premium brochures, virtual tours, and print pieces that sell.',
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                ref={(el) => setItemRef(`step${item.step}`, el)}
                style={{
                  opacity: visibleItems[`step${item.step}`] ? 1 : 0,
                  transform: visibleItems[`step${item.step}`]
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${idx * 0.1}s`,
                  padding: '40px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E3DA',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#B8845C',
                    marginBottom: '16px',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#2F5233',
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: '#2C2C2C',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THE SELLING PROCESS ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 700,
              color: '#2F5233',
              textAlign: 'center',
              margin: '0 0 60px 0',
            }}
          >
            The Selling Process
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                title: 'Strategic Price Positioning',
                desc: 'Data-driven pricing strategy that attracts serious buyers without leaving money on the table.',
              },
              {
                title: 'Expert Guidance',
                desc: 'I guide you through inspections, appraisals, and negotiations with clear explanations.',
              },
              {
                title: 'Multiple Offer Mastery',
                desc: 'When multiple offers come in, I help you choose the right one for your situation.',
              },
              {
                title: 'Closing with Confidence',
                desc: 'I handle the closing details so you can focus on your next chapter.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={(el) => setItemRef(`process${idx}`, el)}
                style={{
                  opacity: visibleItems[`process${idx}`] ? 1 : 0,
                  transform: visibleItems[`process${idx}`]
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${idx * 0.1}s`,
                  padding: '40px',
                  backgroundColor: '#F8F5F0',
                  border: '1px solid #E8E3DA',
                  borderRadius: '4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#2F5233',
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: '#2C2C2C',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SELLER TESTIMONIALS ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 700,
              color: '#2F5233',
              textAlign: 'center',
              margin: '0 0 60px 0',
            }}
          >
            Seller Stories
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            <div
              ref={(el) => setItemRef('test1', el)}
              style={{
                opacity: visibleItems['test1'] ? 1 : 0,
                transform: visibleItems['test1']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '18px',
                  color: '#2F5233',
                  fontStyle: 'italic',
                  margin: '0 0 20px 0',
                  lineHeight: 1.7,
                }}
              >
                Kim's staging and marketing strategy sold our Seattle home in just
                5 days for over 104% asking. She understood our timeline and made
                it happen.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: '#555',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                — Martinez F., Seattle
              </p>
            </div>

            <div
              ref={(el) => setItemRef('test2', el)}
              style={{
                opacity: visibleItems['test2'] ? 1 : 0,
                transform: visibleItems['test2']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.1s',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '18px',
                  color: '#2F5233',
                  fontStyle: 'italic',
                  margin: '0 0 20px 0',
                  lineHeight: 1.7,
                }}
              >
                We were nervous selling our home, but Kim walked us through
                everything. She even negotiated repairs after inspection that
                saved us thousands.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: '#555',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                — David & Susan C., Everett
              </p>
            </div>

            <div
              ref={(el) => setItemRef('test3', el)}
              style={{
                opacity: visibleItems['test3'] ? 1 : 0,
                transform: visibleItems['test3']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '18px',
                  color: '#2F5233',
                  fontStyle: 'italic',
                  margin: '0 0 20px 0',
                  lineHeight: 1.7,
                }}
              >
                Kim's network of contractors and inspectors made our whole
                experience smooth. The photos and staging got so many comments
                from buyers.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: '#555',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                — Jennifer B., Mill Creek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU GET ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 700,
              color: '#2F5233',
              textAlign: 'center',
              margin: '0 0 60px 0',
            }}
          >
            What You Get When You Sell With Me
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            <div
              ref={(el) => setItemRef('benefit1', el)}
              style={{
                opacity: visibleItems['benefit1'] ? 1 : 0,
                transform: visibleItems['benefit1']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                padding: '40px',
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Proven Marketing Plan
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Professional photography, staging, online marketing, and print
                materials all designed to get your home noticed.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('benefit2', el)}
              style={{
                opacity: visibleItems['benefit2'] ? 1 : 0,
                transform: visibleItems['benefit2']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.1s',
                padding: '40px',
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Data-Driven Pricing
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Market analysis that positions your home to attract the right
                buyers and maximize your sale price.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('benefit3', el)}
              style={{
                opacity: visibleItems['benefit3'] ? 1 : 0,
                transform: visibleItems['benefit3']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
                padding: '40px',
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Expert Negotiation
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                I handle the tough conversations so you don't have to. I negotiate
                repairs, timelines, and contingencies.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('benefit4', el)}
              style={{
                opacity: visibleItems['benefit4'] ? 1 : 0,
                transform: visibleItems['benefit4']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.3s',
                padding: '40px',
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Trusted Network
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                From inspectors to contractors, I have a network of professionals
                who deliver results.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('benefit5', el)}
              style={{
                opacity: visibleItems['benefit5'] ? 1 : 0,
                transform: visibleItems['benefit5']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.4s',
                padding: '40px',
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Transparent Communication
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                You'll always know what's happening, why, and what comes next.
                No surprises.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('benefit6', el)}
              style={{
                opacity: visibleItems['benefit6'] ? 1 : 0,
                transform: visibleItems['benefit6']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.5s',
                padding: '40px',
                backgroundColor: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Close on Your Timeline
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Whether you need a quick sale or extra time, I work with the
                timeline that makes sense for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section
        className="green-textured"
        style={{
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: 700,
            color: '#F8F5F0',
            margin: '0 0 24px 0',
            lineHeight: 1.2,
            position: 'relative',
            display: 'inline-block',
          }}
        >
          Ready to Sell{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            Your Home?
            <svg
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '100%',
                height: '12px',
              }}
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 10 Q 50 2 100 10 T 200 10"
                stroke="#B8845C"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '20px',
            color: '#B8845C',
            margin: '32px 0 40px 0',
          }}
        >
          Get your free home valuation today.
        </p>

        <Link href="/contact">
          <button
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 600,
              padding: '16px 32px',
              backgroundColor: '#B8845C',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              display: 'inline-block',
              marginRight: '12px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A07550';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8845C';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
            }}
          >
            Get Home Valuation
          </button>
        </Link>

        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '16px',
            color: '#F8F5F0',
            opacity: 0.9,
            margin: '24px 0 0 0',
          }}
        >
          Or call me directly —{' '}
          <a
            href="tel:+1234567890"
            style={{
              color: '#F8F5F0',
              textDecoration: 'underline',
              fontWeight: 600,
            }}
          >
            (123) 456-7890
          </a>
        </p>
      </section>

      <Footer />
      <ScrollProgress />
    </main>
  );
}
