'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

export default function HomeRepairPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Home Repair Services"
          subtitle="Pre-sale repair coordination so your home shows its absolute best"
          image="/images/property-01-everett-home-exterior.jpg"
          imageAlt="Home exterior in Everett"
        />

        {/* Introduction Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '24px',
              }}
            >
              Maximize Your Home's Value
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '20px',
              }}
            >
              Strategic repairs and improvements can be the difference between a home that sits on the market and one that sells quickly at top dollar. But home improvement projects can be stressful, costly, and time-consuming - especially when you're trying to prepare for a sale.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
              }}
            >
              That's where The Pelham Group NW's home repair services come in. I partner with trusted professionals to handle everything from minor cosmetic updates to significant structural improvements. Our goal is simple: position your home to attract buyers and command the best price possible.
            </p>
          </div>
        </section>

        {/* Home Transition Team Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '24px',
              }}
            >
              Pelham Group NW Home Transition Team
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '20px',
              }}
            >
              The Pelham Group NW Home Transition Team works with a trusted network of licensed, insured contractors across the region. Whether your home needs roof repairs, electrical updates, plumbing fixes, or interior work, we have the expertise and reliability to get it done right.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
              }}
            >
              Our team understands the real estate market. They know which repairs have the highest ROI, and they prioritize work that will make your home more attractive and valuable to buyers.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              Services We Provide
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Service 1 */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '16px',
                  }}
                >
                  Targeted Improvements
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    marginBottom: '16px',
                  }}
                >
                  We assess your home's condition and identify which repairs and updates will have the greatest impact on buyer appeal and home value. Not every fix is necessary - we prioritize strategically.
                </p>
                <ul
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    paddingLeft: '20px',
                  }}
                >
                  <li>Interior and exterior painting</li>
                  <li>Flooring updates</li>
                  <li>Deck repairs</li>
                  <li>Roof repair or replacement</li>
                  <li>Kitchen and bathroom updates</li>
                  <li>Electrical and plumbing updates</li>
                  <li>Structural repairs</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '16px',
                  }}
                >
                  Contractor Coordination
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    marginBottom: '16px',
                  }}
                >
                  I handle all the logistics. From scheduling to quality assurance, I manage the entire process so you don't have to. This means coordinated work, timely completion, and professional results.
                </p>
                <ul
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    paddingLeft: '20px',
                  }}
                >
                  <li>Work scheduling</li>
                  <li>Quality inspections</li>
                  <li>Timeline management</li>
                  <li>Professional coordination</li>
                  <li>Documentation</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '16px',
                  }}
                >
                  Concierge Program
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    marginBottom: '16px',
                  }}
                >
                  Most repairs are paid upfront as work is completed, using Kim's trusted trade partner network. This means no contractor stress for you, just results.
                </p>
                <ul
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    paddingLeft: '20px',
                  }}
                >
                  <li>Trusted trade partner network</li>
                  <li>Transparent pricing</li>
                  <li>Licensed professionals</li>
                  <li>Guaranteed quality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              How It Works
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Step 1 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 400,
                    margin: '0 auto 20px',
                  }}
                >
                  1
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Assessment
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  We conduct a detailed inspection of your home to identify repairs and improvements that will maximize value and appeal.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 400,
                    margin: '0 auto 20px',
                  }}
                >
                  2
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Coordination
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  I schedule contractors, oversee the work, ensure quality standards, and manage timelines so you can focus on other things.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 400,
                    margin: '0 auto 20px',
                  }}
                >
                  3
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--color-forest)',
                    marginBottom: '12px',
                  }}
                >
                  Completion
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  All work is completed before listing. Your home is market-ready and priced to perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '40px',
              }}
            >
              Why This Approach Works
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  &#10003;
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    Trusted Trade Partners
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                    }}
                  >
                    Work is completed through Kim's established trade partner network, contractors who deliver quality results on time.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  &#10003;
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    Market Expertise
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                    }}
                  >
                    I only recommend repairs that will genuinely improve buyer appeal and increase your sale price.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  &#10003;
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    Professional Quality
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                    }}
                  >
                    The Pelham Group NW Home Transition Team brings licensed, insured contractors who do quality work on time and on budget.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  &#10003;
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    Peace of Mind
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                    }}
                  >
                    You can focus on moving forward while I handle the details. Your home is prepared for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          faqs={[
            {
              question: "Who does the actual work?",
              answer: "Pelham Group NW Home Transition Team works with a trusted network of licensed, insured contractors across the region.",
            },
            {
              question: "How do I know which repairs are worth doing?",
              answer: "Kim evaluates your home strategically and only recommends repairs that will meaningfully impact your sale price or speed. She won't suggest expensive renovations with a low return on investment  -  every recommendation is based on what Snohomish County buyers are actually looking for.",
            },
            {
              question: "How long does the repair process take before I can list?",
              answer: "Most pre-sale repair projects are completed within 2 to 4 weeks depending on scope. Kim manages the entire timeline to ensure your home is market-ready as efficiently as possible.",
            },
            {
              question: "Do I have to pay for repairs out of pocket?",
              answer: "Most repairs are paid upfront as work is completed. For qualifying listings, pay-at-closing arrangements are available on a case-by-case basis, ask Kim.",
            },
          ]}
        />

        {/* Deferred Payment Note */}
        <section style={{ padding: '40px 20px', backgroundColor: 'var(--color-cream)', borderTop: '1px solid #E8E3DA' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                fontStyle: 'italic',
              }}
            >
              Deferred payment options available when needed, ask Kim about pay-at-closing arrangements for qualifying listings.
            </p>
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
              Ready to Maximize Your Home's Value?
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
              Let's schedule a consultation to assess your home and discuss which repairs and improvements will have the greatest impact on your sale.
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
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
