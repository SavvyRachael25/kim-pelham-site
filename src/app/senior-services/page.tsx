'use client';

import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: 'H',
    title: 'Real Estate Expertise for Seniors',
    description:
      'Navigate downsizing, upsizing, or relocation with a broker who understands your unique needs and timeline.',
  },
  {
    id: 2,
    icon: 'C',
    title: 'Home Care Assistance',
    description:
      'From coordination to hands-on support, we help you find and manage quality home care services.',
  },
  {
    id: 3,
    icon: 'D',
    title: 'Daily Assistance and Errands',
    description:
      'Help with shopping, appointments, home maintenance coordination, and daily tasks that can feel overwhelming.',
  },
  {
    id: 4,
    icon: 'M',
    title: 'Medical Equipment and Supplies',
    description:
      'Navigate the complex world of medical devices and supplies with expert guidance and coordination.',
  },
  {
    id: 5,
    icon: 'F',
    title: 'Financial Guidance for Seniors',
    description:
      'Expert advice on budgeting, managing resources, and understanding financial options in retirement.',
  },
  {
    id: 6,
    icon: 'T',
    title: 'Help with Financial Tasks',
    description:
      'Assistance with bill payment, tax preparation coordination, insurance navigation, and financial record management.',
  },
  {
    id: 7,
    icon: 'L',
    title: 'Legal Support for Seniors',
    description:
      'Guidance on wills, trusts, power of attorney, and connections to trusted legal professionals.',
  },
  {
    id: 8,
    icon: 'E',
    title: 'Comprehensive Estate Planning',
    description:
      'Help organizing assets, distributing possessions, and creating a clear plan for your legacy.',
  },
];

interface ApproachItem {
  title: string;
  description: string;
}

const approachItems: ApproachItem[] = [
  {
    title: 'No-Cost Consultation',
    description:
      'We start with a conversation—no pressure, no obligation. We listen and understand your unique situation.',
  },
  {
    title: 'Customized Services',
    description: "Every senior's needs are different. We build a service plan tailored specifically to you.",
  },
  {
    title: 'Expert Coordination',
    description:
      'We connect you with trusted professionals and coordinate all services, so you have one trusted point of contact.',
  },
];

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Schedule Consultation',
    description:
      'Call or email to book a no-pressure conversation about your needs, timeline, and goals.',
  },
  {
    number: '02',
    title: 'Develop Your Plan',
    description:
      'Together, we create a customized roadmap addressing your specific priorities and concerns.',
  },
  {
    number: '03',
    title: 'Ongoing Support',
    description: 'We remain your trusted advisor, coordinating services and adapting as your needs evolve.',
  },
];

export default function SeniorServicesPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <ScrollProgress />

      {/* Hero Section with Background Image */}
      <section
        style={{
          position: 'relative',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          color: '#F8F5F0',
        }}
      >
        <Image
          src="/images/senior-services-01-key-handoff.jpg"
          alt="Senior receiving keys to new home"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          quality={90}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '700px',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 400,
              margin: '0 0 20px 0',
              letterSpacing: '0.5px',
            }}
          >
            Comprehensive Senior Concierge Services
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              margin: 0,
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            Tailored real estate and life services for seniors and their families
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: '#2C2C2C',
            fontFamily: 'var(--font-body)',
            margin: '0 0 30px 0',
            fontWeight: 300,
          }}
        >
          Life transitions can feel overwhelming—especially when they involve major decisions about your home, finances, and
          future. Whether you're downsizing, relocating, managing a household, or planning your legacy, you don't have to do it
          alone.
        </p>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: '#2C2C2C',
            fontFamily: 'var(--font-body)',
            margin: 0,
            fontWeight: 300,
          }}
        >
          We offer comprehensive, personalized support tailored to your unique needs. And we start with a no-cost consultation to
          understand what matters most to you.
        </p>
      </section>

      {/* Services Grid */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 400,
              textAlign: 'center',
              margin: '0 0 60px 0',
              color: '#2C2C2C',
              letterSpacing: '0.5px',
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '40px',
            }}
          >
            {services.map((service) => (
              <article
                key={service.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '8px',
                  border: '1px solid #E8E3DA',
                  display: 'flex',
                  gap: '20px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#B8845C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E8E3DA';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '60px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#2F5233',
                    color: '#F8F5F0',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      margin: '0 0 12px 0',
                      color: '#2C2C2C',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: '#666666',
                      fontFamily: 'var(--font-body)',
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Personalized Approach */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 400,
            textAlign: 'center',
            margin: '0 0 60px 0',
            color: '#2C2C2C',
            letterSpacing: '0.5px',
          }}
        >
          Our Personalized Approach
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {approachItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#F8F5F0',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '2rem',
                }}
              >
                {idx === 0 && '💬'}
                {idx === 1 && '⚙️'}
                {idx === 2 && '🤝'}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  margin: '0 0 15px 0',
                  color: '#2C2C2C',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#666666',
                  fontFamily: 'var(--font-body)',
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 400,
              textAlign: 'center',
              margin: '0 0 60px 0',
              color: '#2C2C2C',
              letterSpacing: '0.5px',
            }}
          >
            Getting Started
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '8px',
                  border: '1px solid #E8E3DA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: '#B8845C',
                    margin: 0,
                    opacity: 0.3,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    margin: '0 0 10px 0',
                    color: '#2C2C2C',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#666666',
                    fontFamily: 'var(--font-body)',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connecting Line Visual (Optional) */}
          <div
            style={{
              marginTop: '40px',
              height: '4px',
              backgroundColor: '#2F5233',
              borderRadius: '2px',
              maxWidth: '200px',
              margin: '40px auto 0',
              opacity: 0.2,
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#2F5233',
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(79, 101, 65, 0.3) 0%, transparent 50%), linear-gradient(135deg, #2F5233 0%, #1a3a1a 100%)',
          color: '#F8F5F0',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: 400,
              margin: '0 0 20px 0',
              letterSpacing: '0.5px',
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              margin: '0 0 40px 0',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              opacity: 0.95,
            }}
          >
            Schedule your no-cost consultation today. Let's talk about your needs, your timeline, and how we can support you
            through this important chapter of your life.
          </p>
          <Link
            href="#contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#B8845C',
              color: '#FFFFFF',
              padding: '14px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid #B8845C',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A67349';
              e.currentTarget.style.borderColor = '#A67349';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8845C';
              e.currentTarget.style.borderColor = '#B8845C';
            }}
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
