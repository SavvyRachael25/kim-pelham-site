'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  h2: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 400,
    color: 'var(--color-forest)',
    marginBottom: '20px',
    marginTop: '48px',
  } as const,
  callout: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
  } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '40px 32px',
    borderRadius: '8px',
    margin: '48px 0 0',
    textAlign: 'center' as const,
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-clay)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 28px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '16px',
  } as const,
  link: { color: 'var(--color-clay)' } as const,
};

const faqs = [
  {
    question: 'Is there down payment assistance in Snohomish County?',
    answer:
      'Yes. Washington State Housing Finance Commission (WSHFC) programs work throughout the state, including all of Snohomish County. The main ones are the Home Advantage down payment assistance second mortgage, the need-based Opportunity program, and the Covenant Homeownership Program. Details and current terms live at wshfc.org.',
  },
  {
    question: 'How does the WSHFC Home Advantage down payment loan work?',
    answer:
      'It is a second mortgage that covers down payment funds, paired with a Home Advantage first mortgage. It carries 0% interest and payments are deferred for 30 years, so it typically comes due when you sell, refinance, or pay off the home. Income limits and current terms are on wshfc.org and change periodically.',
  },
  {
    question: 'What is the Covenant Homeownership Program in Washington?',
    answer:
      'A state program created in 2023 that provides down payment and closing cost assistance as a 0% interest loan for eligible first-time buyers who meet specific eligibility criteria tied to Washington’s history of racially restrictive housing covenants. A 2025 amendment allows loan forgiveness after five years in certain circumstances. Eligibility rules are specific, so check wshfc.org/covenant.',
  },
  {
    question: 'Do I have to take a class to get down payment assistance?',
    answer:
      'Yes. WSHFC programs require completing a Commission-sponsored homebuyer education class before you buy. It is a real requirement, and honestly a useful few hours, especially for first-time buyers.',
  },
  {
    question: 'Can down payment assistance be combined with seller concessions?',
    answer:
      'Often, yes, and this is where a broker earns their keep. Seller contributions toward closing costs can stack with assistance programs and can also buy down your interest rate. On one purchase I negotiated, a seller credit plus lender help bought the rate down substantially for a buyer who had started with almost nothing saved.',
  },
];

export default function DownPaymentAssistancePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Down Payment Assistance in Snohomish County: What Actually Exists in 2026"
          subtitle="By Kim Pelham · August 18, 2026 · 7 min read"
          image="/images/hero-03-porch-connection.jpg"
          imageAlt="A front porch of a Snohomish County home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Years ago, a young father called me in a bad spot. His family had unexpectedly lost their housing, and he had about $2,000 to his name for a down payment and closing costs. A few months later he was holding keys to his own place. Not because of magic: because Washington has real down payment assistance programs, and because a good lender and a seller credit can stack on top of them. This post is the map I wish every renter in Snohomish County had.
            </p>

            <h2 style={styles.h2}>The big one: WSHFC Home Advantage</h2>
            <p style={styles.bodyP}>
              The Washington State Housing Finance Commission (WSHFC) runs the state&apos;s main assistance programs, and they work everywhere in Snohomish County. Home Advantage pairs a first mortgage with a down payment assistance second mortgage at 0% interest, with payments deferred for 30 years. In practice, the assistance typically comes due when you sell or refinance, not out of your monthly budget. Income limits apply and terms change, so treat{' '}
              <a href="https://wshfc.org/buyers/downpayment.htm" style={styles.link} target="_blank" rel="noopener noreferrer">
                wshfc.org
              </a>{' '}
              as the source of truth.
            </p>

            <h2 style={styles.h2}>The need-based one: Opportunity</h2>
            <p style={styles.bodyP}>
              WSHFC&apos;s Opportunity program serves lower-income buyers with a smaller deferred second mortgage at a low rate, with eligibility based on income and need (veterans get a simplified path). It is the program that most often surprises people who assumed they earned too little to buy.
            </p>

            <h2 style={styles.h2}>The newest one: Covenant Homeownership</h2>
            <p style={styles.bodyP}>
              Created by the state in 2023, the Covenant Homeownership Program provides down payment and closing cost help as a 0% interest loan for eligible first-time buyers, with eligibility criteria tied to Washington&apos;s documented history of racially restrictive housing covenants. A 2025 amendment added loan forgiveness after five years in certain circumstances. The eligibility rules are specific, so read{' '}
              <a href="https://wshfc.org/covenant/" style={styles.link} target="_blank" rel="noopener noreferrer">
                wshfc.org/covenant
              </a>{' '}
              or ask a participating lender whether you qualify.
            </p>

            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                One requirement across WSHFC programs: a Commission-sponsored homebuyer education class, completed before you buy. Plan for it early; it is a few hours, not a few weeks.
              </p>
            </div>

            <h2 style={styles.h2}>How the stack actually wins</h2>
            <p style={styles.bodyP}>
              Here is what people miss: assistance programs are one layer. Seller concessions are another, and they are negotiable, especially in a market where{' '}
              <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                buyers have a third more homes to choose from
              </Link>
              . On that purchase I mentioned, we negotiated a seller contribution toward closing costs, the family stepped in with the down payment once a home was actually under contract, and the lender used the remaining credit to buy the interest rate down. Every layer mattered. The buyer who thinks assistance is the whole strategy leaves money on the table; the buyer whose broker negotiates all three layers gets a payment they can live with.
            </p>
            <p style={styles.bodyP}>
              If you are earlier in the process, start with{' '}
              <Link href="/blog/buying-a-home-snohomish-county-steps" style={styles.link}>
                my order-of-operations guide to buying in Snohomish County
              </Link>
              . And a plain-language disclaimer: I am a broker, not a lender. Program terms, limits, and availability change; confirm current details with WSHFC and a participating loan officer before you plan around them.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Not sure what you could qualify for?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                I will connect you with lenders who actually work these programs, and I take a maximum of two active buyers at a time, so you get me at every step.
              </p>
              <Link href="/buyers" style={styles.ctaButton}>
                Start the conversation
              </Link>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
                Or call or text me directly: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
              </p>
            </div>
          </div>
        </article>

        <FAQSection title="Down payment assistance: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
