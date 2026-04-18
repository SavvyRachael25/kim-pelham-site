'use client';

import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
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

      <InnerHero
        title="Psychology-Driven Staging"
        subtitle="We maximize your home's appeal  -  staging that sells faster and for more"
        image="/images/kim-with-client-on-couch.jpg"
        imageAlt="Beautiful staged living room"
      />

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
          Staging isn't about decoration - it's about psychology. Every piece of furniture, every color choice, every lighting
          adjustment is designed to help buyers envision themselves in your home. Professional staging removes distractions,
          highlights your home's best features, and creates an emotional connection that translates directly to higher offers
          and faster sales. Staging also distracts from any flaws the home has — which can actually save sellers money, because the home doesn't have to be 100% perfect when it's staged.
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
                for months. Few showings. Fewer offers. The homeowner grew anxious - was something wrong with the house? Or the
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
                They came to Kim. She transformed the home in 2 weeks - removing clutter, reimagining layouts, and creating
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

      {/* Featured Story */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* TODO: story photo — Kim to provide if available */}
        <blockquote
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.375rem',
            color: '#2F5233',
            fontStyle: 'italic',
            lineHeight: 1.7,
            margin: '0 0 24px 0',
            paddingLeft: '24px',
            borderLeft: '3px solid #B8845C',
          }}
        >
          "I took a house that had been listed for 69 days and the listing was canceled. I staged it, and it sold in 3 days for $5,000 more than the canceled price."
        </blockquote>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#555',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Understanding the psychological impact of staging is what helps a house sell faster and for more money.
        </p>
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
                'Not all brokers understand the psychological aspect of staging.',
            },
            {
              title: 'Ask About Selling Strategy',
              description:
                'Before listing, ask your broker: "Will they stage? Will they take magazine-quality photos?" How a broker presents your home matters as much as the price.',
            },
            {
              title: 'Staging Results in Higher Offers',
              description: "Staged homes sell 30–50% faster and typically 3–8% higher than non-staged homes. In my experience, staging is one of the highest-ROI investments a seller can make — you'll typically make 2–5× what you invest.",
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

      <FAQSection
        backgroundColor="#FFFFFF"
        faqs={[
          {
            question: "Does staging really make a difference in sale price?",
            answer: "Absolutely. Staged homes sell 30–50% faster and consistently for more money. Buyers make emotional decisions first and logical decisions second. When a home is staged well, buyers can picture themselves living there  -  and that emotional connection translates directly to stronger offers.",
          },
          {
            question: "How much does professional staging cost?",
            answer: "The cost varies based on your home's size and what's needed. For Kim's clients, staging is built into her selling strategy  -  she'll walk you through exactly what's involved and what the expected return on investment is at your consultation.",
          },
          {
            question: "Will Kim be staging my home herself?",
            answer: "Most of the time, yes — Kim personally stages with inventory from her own collection. For vacant homes where more furniture is needed than Kim's inventory can cover, Kim partners with a trusted staging company to round out the look. Either way, you get Kim's eye and her psychology-driven approach.",
          },
          {
            question: "Do I need to move my furniture out for staging?",
            answer: "Not necessarily. Kim evaluates your existing furniture and decor, and stages around what you have  -  removing what doesn't serve the space and repositioning or supplementing what does. Partial or full staging recommendations depend on your specific home.",
          },
          {
            question: "What rooms are most important to stage?",
            answer: "Living rooms, kitchens, and master bedrooms have the highest impact on buyers. Entryways and outdoor spaces also matter significantly for first impressions. Kim stages all key areas  -  not just the ones that photograph well.",
          },
        ]}
      />

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
            href="/contact"
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
