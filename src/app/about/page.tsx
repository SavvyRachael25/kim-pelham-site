'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {
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

      {/* ========== HERO ========== */}
      <section
        className="green-textured"
        style={{
          padding: '120px 24px',
          textAlign: 'center',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: 700,
            color: '#F8F5F0',
            margin: '0 0 24px 0',
            lineHeight: 1.2,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          About Kim
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '24px',
            color: '#B8845C',
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.1s',
          }}
        >
          Presence, Perspective & Purpose in Real Estate
        </p>
      </section>

      {/* ========== KIM'S STORY ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Image with Polaroid effect */}
          <div
            ref={(el) => setItemRef('polaroid', el)}
            style={{
              opacity: visibleItems['polaroid'] ? 1 : 0,
              transform: visibleItems['polaroid']
                ? 'translateX(0)'
                : 'translateX(-40px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <div className="polaroid" style={{ transform: 'rotate(-3deg)' }}>
              <Image
                src="/images/about-01-approachable-headshot-env.jpg"
                alt="Kim Pelham - Real estate broker and Snohomish County native"
                width={300}
                height={350}
                style={{ objectFit: 'cover' }}
              />
              <p className="polaroid-caption">a day in my neighborhood</p>
            </div>
          </div>

          {/* Bio Text */}
          <div
            ref={(el) => setItemRef('bio', el)}
            style={{
              opacity: visibleItems['bio'] ? 1 : 0,
              transform: visibleItems['bio']
                ? 'translateX(0)'
                : 'translateX(40px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 700,
                color: '#2F5233',
                margin: '0 0 24px 0',
                lineHeight: 1.2,
              }}
            >
              14 Years of Intentional Service
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: '#2C2C2C',
                lineHeight: 1.8,
                margin: '0 0 20px 0',
              }}
            >
              I've spent 14 years helping families navigate one of their biggest
              decisions. Three of those years were in commercial property
              management, which taught me the business side of real estate. But
              my heart is in residential transactions—the stories, the dreams, the
              fresh starts.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: '#2C2C2C',
                lineHeight: 1.8,
                margin: '0 0 20px 0',
              }}
            >
              I'm a PNW native: childhood through second grade in the Seattle area,
              Bothell from 1996–2002, and Everett since 2015. This isn't just where
              I work. It's where I raise my family, where my kids go to school, and
              where I actually know my neighbors.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: '#2C2C2C',
                lineHeight: 1.8,
              }}
            >
              That matters. Because when I'm helping you buy or sell, I'm not just
              moving numbers around. I'm part of this community too.
            </p>
          </div>
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section
        style={{
          padding: '60px 24px',
          backgroundColor: '#2F5233',
          color: '#F8F5F0',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center',
          }}
        >
          <div
            ref={(el) => setItemRef('stat1', el)}
            style={{
              opacity: visibleItems['stat1'] ? 1 : 0,
              transform: visibleItems['stat1']
                ? 'translateY(0)'
                : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '48px',
                fontWeight: 700,
                color: '#B8845C',
                margin: 0,
              }}
            >
              104.4%
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: '#F8F5F0',
                margin: '8px 0 0 0',
                opacity: 0.9,
              }}
            >
              Average sale-to-list ratio
            </p>
          </div>

          <div
            ref={(el) => setItemRef('stat2', el)}
            style={{
              opacity: visibleItems['stat2'] ? 1 : 0,
              transform: visibleItems['stat2']
                ? 'translateY(0)'
                : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.1s',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '48px',
                fontWeight: 700,
                color: '#B8845C',
                margin: 0,
              }}
            >
              $3.2M+
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: '#F8F5F0',
                margin: '8px 0 0 0',
                opacity: 0.9,
              }}
            >
              Homes sold
            </p>
          </div>

          <div
            ref={(el) => setItemRef('stat3', el)}
            style={{
              opacity: visibleItems['stat3'] ? 1 : 0,
              transform: visibleItems['stat3']
                ? 'translateY(0)'
                : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '48px',
                fontWeight: 700,
                color: '#B8845C',
                margin: 0,
              }}
            >
              14+
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: '#F8F5F0',
                margin: '8px 0 0 0',
                opacity: 0.9,
              }}
            >
              Years of experience
            </p>
          </div>
        </div>
      </section>

      {/* ========== THREE PILLARS ========== */}
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
            The Three Pillars
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
              ref={(el) => setItemRef('pillar1', el)}
              style={{
                opacity: visibleItems['pillar1'] ? 1 : 0,
                transform: visibleItems['pillar1']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Presence
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
                Being fully engaged. When we're working together, you have my
                full attention—no juggling multiple clients, no divided focus. I'm
                here, present, and invested in your outcome.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('pillar2', el)}
              style={{
                opacity: visibleItems['pillar2'] ? 1 : 0,
                transform: visibleItems['pillar2']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.1s',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Perspective
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
                Market insights rooted in real data. I live here, I know the
                neighborhoods, and I understand where the market's heading. You
                get clarity, not guesswork.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('pillar3', el)}
              style={{
                opacity: visibleItems['pillar3'] ? 1 : 0,
                transform: visibleItems['pillar3']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E3DA',
                borderRadius: '4px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 16px 0',
                }}
              >
                Purpose
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
                Serving your best interests, not my commission. My job is to help
                you make the right decision for your situation, even if that
                decision surprises me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6-STEP MARKETING SYSTEM ========== */}
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
            My 6-Step Marketing System
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
                title: 'Strategic Repairs',
                desc: 'We identify and prioritize repairs that add real value, not surface cosmetics.',
              },
              {
                step: 2,
                title: 'Psychology-Driven Staging',
                desc: 'Professional staging that helps buyers envision their future in your home.',
              },
              {
                step: 3,
                title: 'Professional Photography',
                desc: "High-quality photos that showcase your home's best features.",
              },
              {
                step: 4,
                title: 'Targeted Digital Marketing',
                desc: 'Strategic online placement to reach qualified buyers in your market.',
              },
              {
                step: 5,
                title: 'Premium Print Materials',
                desc: 'Thoughtfully designed brochures and materials that elevate your listing.',
              },
              {
                step: 6,
                title: 'Strategic Pricing & Negotiation',
                desc: 'Data-driven pricing and expert negotiation to maximize your return.',
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

      {/* ========== WHAT SETS KIM APART ========== */}
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
            What Sets Kim Apart
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
              ref={(el) => setItemRef('apart1', el)}
              style={{
                opacity: visibleItems['apart1'] ? 1 : 0,
                transform: visibleItems['apart1']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #B8845C',
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
                Senior Concierge Service
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
                I handle the details so you don't have to. From inspections to
                closing, I'm your point person.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('apart2', el)}
              style={{
                opacity: visibleItems['apart2'] ? 1 : 0,
                transform: visibleItems['apart2']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.1s',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #B8845C',
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
                Limited Client Approach
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
                I cap myself at 2 buyers max at any time. This isn't a numbers game
                for me.
              </p>
            </div>

            <div
              ref={(el) => setItemRef('apart3', el)}
              style={{
                opacity: visibleItems['apart3'] ? 1 : 0,
                transform: visibleItems['apart3']
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #B8845C',
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
                SMART Building Partnership
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
                I work with trusted local contractors and inspectors who deliver
                real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMMUNITY ROOTS ========== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E8E3DA',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 700,
              color: '#2F5233',
              margin: '0 0 32px 0',
            }}
          >
            Built on Community Roots
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: '#2C2C2C',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            This isn't just my business. It's my home. I know the neighborhoods,
            the schools, the coffee shops, and the growth patterns. When you work
            with me, you're working with someone who genuinely cares about this
            community and your place in it.
          </p>
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
          Ready to Write{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            Your Next Chapter?
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
          Let's talk about what's next.
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
