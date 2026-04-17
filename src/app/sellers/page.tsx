'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
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
        subtitle="102.03% sale-to-list ratio vs. 100.2% NWMLS market average"
        image="/images/kim-with-door.jpg"
        imageAlt="Kim Pelham helping sellers"
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
            On average, homes sell for 100.2% of the listing price in the NWMLS
            market.
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
            My clients see 102.03%
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
                title: 'Strategy Session',
                desc: 'Identify the repairs and upgrades that will add the most value and help your home sell quickly.',
              },
              {
                step: 2,
                title: 'Concierge Service',
                desc: 'We help you make the repairs. The Pelham Group NW Home Transition Team coordinates everything.',
              },
              {
                step: 3,
                title: 'Staging',
                desc: 'Professional staging — psychology-driven, magazine quality.',
              },
              {
                step: 4,
                title: 'Professional Photography + Matterport 3D Tours',
                desc: 'Studio-quality photos and immersive Matterport 3D tours that make buyers want to see your home in person.',
              },
              {
                step: 5,
                title: 'Online Marketing',
                desc: 'Strategic digital placement on the right platforms for your market.',
              },
              {
                step: 6,
                title: 'Marketing Materials',
                desc: 'Flyers, feature cards throughout the home, laminated feature cards in the yard, and walking tours on larger properties.',
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

      {/* ========== OVERCOMING THE BUMPS ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 700,
              color: '#2F5233',
              textAlign: 'center',
              margin: '0 0 40px 0',
            }}
          >
            Overcoming the Bumps
          </h2>
          <div
            style={{
              padding: '40px',
              backgroundColor: '#F8F5F0',
              border: '2px solid #2F5233',
              borderRadius: '4px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: '#2C2C2C',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Most transactions have a bump — sometimes small, sometimes large. My job is to get you over the bump with the least stress possible. A big bump can tank a sale, but over 17+ years I've learned that step by step, never giving up, almost always gets us through.
            </p>
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
      {/* TODO: Rachael to replace with real Google review content */}
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

          <div style={{ textAlign: 'center', padding: '40px 24px', background: '#F8F5F0', borderRadius: '4px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', lineHeight: 1.7, margin: '0 0 16px 0' }}>
              Seller stories coming soon — Kim has 40+ Google reviews.
            </p>
            <a
              href="https://www.google.com/search?q=pelham+group+nw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2F5233', fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'underline' }}
            >
              See them all on Google
            </a>
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
          Or call me directly  - {' '}
          <a
            href="tel:+14252509422"
            style={{
              color: '#F8F5F0',
              textDecoration: 'underline',
              fontWeight: 600,
            }}
          >
            (425) 250-9422
          </a>
        </p>
      </section>

      <FAQSection
        faqs={[
          {
            question: "How does Kim determine the right listing price for my home?",
            answer: "Kim conducts a comprehensive Comparative Market Analysis (CMA) using recent sales, active listings, and current market trends specific to your neighborhood. She combines data with her firsthand knowledge of what buyers are actually paying  -  not just what homes are listed for.",
          },
          {
            question: "Do I need to stage my home before listing?",
            answer: "Kim's staging approach is a core part of her selling strategy, not an optional add-on. Staged homes sell significantly faster and for more money. Kim handles the staging process for you  -  from decluttering and furniture arrangement to styling  -  so your home makes a powerful first impression.",
          },
          {
            question: "How long will it take to sell my home?",
            answer: "With Kim's full marketing system, well-priced homes in Snohomish County typically go under contract within 1–2 weeks. Her average sale-to-list ratio is 102.03%, meaning her clients consistently sell above asking price.",
          },
          {
            question: "What if my home needs repairs before I can list?",
            answer: "Kim coordinates pre-sale repairs through the Pelham Group NW Home Transition Team. She'll identify which repairs will actually move the needle on your sale price and skip the ones that won't. Deferred payment options are available for qualifying listings — ask Kim about pay-at-closing arrangements.",
          },
          {
            question: "What are your commission fees?",
            answer: "Kim will walk you through all costs and fees in your first consultation so there are no surprises. Her goal is to maximize your net proceeds  -  not just your sale price.",
          },
        ]}
      />

      <Footer />
      <ScrollProgress />
    </main>
  );
}
