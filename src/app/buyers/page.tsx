'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '@/components/InnerHero';
import { useEffect, useRef, useState } from 'react';

export default function BuyersPage() {
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
        title="Find Your Dream Home"
        subtitle="Expert guidance for maximizing your buying power"
        image="/images/hero-03-porch-connection.jpg"
        imageAlt="Welcoming home porch in Snohomish County"
      />

      {/* ========== INTRO ========== */}
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
            margin: '0 0 32px 0',
          }}
        >
          Your Trusted Buying Partner
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: '#2C2C2C',
            lineHeight: 1.8,
            margin: '0 0 24px 0',
            textAlign: 'center',
          }}
        >
          Buying a home can feel overwhelming. Between mortgage pre-approval,
          house hunting, making offers, and closing—there are a thousand details
          that need to go right. That's where I come in.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: '#2C2C2C',
            lineHeight: 1.8,
            margin: 0,
            textAlign: 'center',
          }}
        >
          I'll guide you through every step, answer your questions without the
          jargon, and help you make decisions that serve your future—not the
          commission.
        </p>
      </section>

      {/* ========== MAX 2 BUYERS PROMISE ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div
          ref={(el) => setItemRef('promise', el)}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '60px 40px',
            backgroundColor: '#FFFFFF',
            border: '3px solid #2F5233',
            borderRadius: '4px',
            opacity: visibleItems['promise'] ? 1 : 0,
            transform: visibleItems['promise']
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '32px',
              fontWeight: 700,
              color: '#2F5233',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            Our Max 2 Buyers Promise
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: '#2C2C2C',
              lineHeight: 1.8,
              margin: '0 0 16px 0',
            }}
          >
            I only take on 2 buyers at a time. Not 10. Not 5. Two.
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
            This means you get my full attention. I'm not distracted by other
            transactions, I'm not juggling multiple closings, and I'm not
            checking my phone while we're viewing homes. You're my focus, and
            you deserve that.
          </p>
        </div>
      </section>

      {/* ========== 4-STEP JOURNEY ========== */}
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
            Your 4-Step Buying Journey
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
                step: 1,
                title: 'Pre-Approval',
                desc: "Get clarity on your budget and show sellers you're serious.",
              },
              {
                step: 2,
                title: 'Property Search',
                desc: "I'll find homes that match your needs and your vision.",
              },
              {
                step: 3,
                title: 'Submit Offers',
                desc: 'Strategic offers that win—without leaving money on the table.',
              },
              {
                step: 4,
                title: 'Close & Move In',
                desc: "I'll guide you to the finish line with confidence.",
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
                  backgroundColor: '#F8F5F0',
                  border: '1px solid #E8E3DA',
                  borderRadius: '4px',
                  textAlign: 'center',
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

      {/* ========== CASE STUDY: TAYLOR ========== */}
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
            Success Stories
          </h2>

          <div
            ref={(el) => setItemRef('taylor', el)}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
              alignItems: 'center',
              opacity: visibleItems['taylor'] ? 1 : 0,
              transform: visibleItems['taylor']
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <div>
              <Image
                src="/images/buyers-01-success-story.jpg"
                alt="Taylor's success story - first-time home buyer"
                width={350}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Taylor's Story
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: '#2C2C2C',
                  lineHeight: 1.8,
                  margin: '0 0 20px 0',
                }}
              >
                Taylor was a first-time buyer with only $2,000 for a down payment.
                Most agents told her it wasn't possible. We found creative ways to
                strengthen her offer, negotiated help from the seller, and closed
                on a beautiful home in Everett—exactly where she wanted to be.
              </p>
              <blockquote
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '18px',
                  color: '#2F5233',
                  fontStyle: 'italic',
                  margin: '24px 0',
                  paddingLeft: '24px',
                  borderLeft: '3px solid #B8845C',
                }}
              >
                Kim didn't just help me buy a house. She believed I could do it
                when I didn't believe in myself.
              </blockquote>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: '#555',
                  margin: 0,
                }}
              >
                — Taylor, Everett Homeowner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KEY BENEFITS ========== */}
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
            What You Get When You Work With Me
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
                My Full Attention
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
                No juggling 10 buyers. No divided focus. Just you, me, and your
                home search.
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
                Market Expertise
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
                I know the neighborhoods, the schools, the growth patterns, and
                where values are headed.
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
                Clear Communication
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
                I explain what's happening without the real estate jargon. You
                always know where you stand.
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
                I've built relationships with inspectors, lenders, and other
                professionals who deliver results.
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
                Your Best Interests
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
                I recommend homes and strategies that make sense for you—not just
                for my commission.
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
                Peace of Mind
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
                Buying a home is a big deal. You'll know exactly what to expect
                at each step.
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
          Ready to Start{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            Your Home Search?
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
          Let's find your next home together.
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
            Schedule a Free Consultation
          </button>
        </Link>
      </section>

      <Footer />
      <ScrollProgress />
    </main>
  );
}
