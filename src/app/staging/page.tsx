'use client';

import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';

interface Room {
  name: string;
}

const rooms: Room[] = [
  { name: 'Living Rooms' },
  { name: 'Dining Rooms' },
  { name: 'Kitchens' },
  { name: 'Master Bedrooms' },
  { name: 'Bathrooms' },
  { name: 'Outdoor Spaces' },
  { name: 'Entryways' },
  { name: 'Accent Styling' },
];

export default function StagingPage() {
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
          src="/images/staging-01-living-room.jpg"
          alt="Beautiful staged living room"
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
            Psychology-Driven Staging
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
            We maximize your home's appeal — staging that sells faster and for more
          </p>
        </div>
      </section>

      {/* Intro Paragraph */}
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
            margin: 0,
            fontWeight: 300,
          }}
        >
          Staging isn't about decoration—it's about psychology. Every piece of furniture, every color choice, every lighting
          adjustment is designed to help buyers envision themselves in your home. Professional staging removes distractions,
          highlights your home's best features, and creates an emotional connection that translates directly to higher offers
          and faster sales.
        </p>
      </section>

      {/* Tale of Two Brokers Card Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            padding: '60px',
            borderRadius: '8px',
            border: '1px solid #E8E3DA',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 400,
              margin: '0 0 30px 0',
              color: '#2C2C2C',
              letterSpacing: '0.5px',
            }}
          >
            Tale of Two Brokers
          </h2>

          <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: '#666666',
                  textTransform: 'uppercase',
                  margin: '0 0 15px 0',
                }}
              >
                The Traditional Approach
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#2C2C2C',
                  fontFamily: 'var(--font-body)',
                  margin: 0,
                }}
              >
                A homeowner listed with a traditional broker. The listing was decent, but uninspired. The home sat on the market
                for months. Few showings. Fewer offers. The homeowner grew anxious—was something wrong with the house? Or the
                strategy?
              </p>
            </div>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: '#2F5233',
                  textTransform: 'uppercase',
                  margin: '0 0 15px 0',
                }}
              >
                The Kim Pelham Difference
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#2C2C2C',
                  fontFamily: 'var(--font-body)',
                  margin: 0,
                }}
              >
                They came to Kim. She transformed the home in 2 weeks—removing clutter, reimagining layouts, and creating
                spaces buyers could emotionally connect with. Within 5 days of the restaged listing, they had multiple offers.
                The home sold $10,000 above listing price.
              </p>
            </div>
          </div>

          <div
            style={{
              paddingTop: '30px',
              borderTop: '1px solid #E8E3DA',
              fontSize: '0.95rem',
              color: '#666666',
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
            }}
          >
            The difference? A broker who understands that selling a home is about more than listing photos.
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '1100px',
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
          Key Takeaways
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          {[
            {
              title: 'Select Your Broker Carefully',
              description:
                'Not all brokers understand staging. Choose someone who views it as a core part of your selling strategy.',
            },
            {
              title: 'Ask About Selling Strategy',
              description:
                'Before listing, discuss how your broker plans to present your home. Will they stage? How will they market?',
            },
            {
              title: 'Staging Results in Higher Offers',
              description: "On average, staged homes sell 300% faster and for more money. This is not a luxury—it's a smart investment.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F8F5F0',
                padding: '40px',
                borderRadius: '8px',
                border: '1px solid #E8E3DA',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  margin: 0,
                  color: '#2C2C2C',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
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

      {/* Staging by Room */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
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
            Staging by Room
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {rooms.map((room, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '30px 20px',
                  borderRadius: '8px',
                  border: '1px solid #E8E3DA',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2F5233';
                  e.currentTarget.style.color = '#F8F5F0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#2C2C2C';
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    margin: 0,
                    color: 'inherit',
                  }}
                >
                  {room.name}
                </p>
              </div>
            ))}
          </div>
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: 400,
              margin: '0 0 20px 0',
              letterSpacing: '0.5px',
            }}
          >
            Ready to Stage Your Home?
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
            Let's talk about your home's potential. Schedule a consultation today to learn how strategic staging can help you
            sell faster and for more.
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
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
