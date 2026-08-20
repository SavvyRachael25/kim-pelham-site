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
    question: 'Can I sell my Washington house without being there?',
    answer:
      'Yes, entirely. Listing paperwork and closing documents can be signed electronically or with a notary where you live, tours and walkthroughs happen over video, and your broker coordinates everything at the house. I completed my eleventh fully remote transaction back in 2020, before video tours were normal, and the process has only gotten smoother since.',
  },
  {
    question: 'How do repairs and cleanouts get done if I am out of state?',
    answer:
      'Through one point of contact. My Home Transition Team coordinates the cleanout, pre-sale repairs through SMART Building Services, and staging, and you get a written job progress update from me every week plus video as the work happens. Repairs are normally paid as the work is completed, and if a seller needs it, payment can be deferred until closing, which matters when the equity is in the house.',
  },
  {
    question: 'How do I sell a parent’s home in Washington if I live in another state?',
    answer:
      'This is a large part of my practice as a Senior Move Specialist. The process combines the remote-selling logistics with estate realities: sorting decades of belongings, paperwork, and family decisions on a timeline that respects what you are carrying. Start slow, get the documents in order, and use one coordinator rather than five vendors across three time zones.',
  },
  {
    question: 'Do I need to fly out for closing?',
    answer:
      'Usually not. Washington closings run through escrow, and out-of-state sellers typically sign with a notary local to them or electronically where permitted. Funds arrive by wire. Many of my out-of-state sellers never set foot in Washington during the sale.',
  },
  {
    question: 'How do I know what is happening with the house day to day?',
    answer:
      'You should never have to wonder. My out-of-state sellers get scheduled video walkthroughs, photo updates at every milestone (cleanout, repairs, staging, photography), and my cell number, 425-250-9422, which I answer.',
  },
];

export default function OutOfStateSellerPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Selling a Snohomish County Home From Out of State"
          subtitle="By Kim Pelham · August 18, 2026 · 7 min read"
          image="/images/arlington/arlington-01.jpg"
          imageAlt="A Snohomish County home sold by The Pelham Group NW"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Back in 2020 I closed my eleventh fully remote transaction, and I had been doing them long before video tours were fashionable. Today, selling a Snohomish County home from Boise or Phoenix or New York is not a workaround. It is a normal, well-worn process, if your broker has actually worn it. Here is what it looks like when it is done right.
            </p>

            <h2 style={styles.h2}>Why people sell from a distance</h2>
            <p style={styles.bodyP}>
              Three stories walk through my door again and again: you moved for work and the house did not sell before you left; you inherited a family home and you live states away; or you are helping a parent transition to assisted living from a distance. That last one is the heart of my{' '}
              <Link href="/senior-services" style={styles.link}>
                Senior Move practice
              </Link>
              , and it deserves its own gentleness. In every case the mechanics are the same, and the mechanics are solved.
            </p>

            <h2 style={styles.h2}>The remote process, step by step</h2>
            <p style={styles.bodyP}>
              First, the paperwork: listing agreements and disclosures sign electronically. Second, the house: my Home Transition Team handles the cleanout, the pre-sale repairs (through SMART Building Services, normally paid as the work is completed, and deferred to closing if a seller needs that), and the staging. You get a job progress update from me every week, with video of every stage, so you are looking at progress rather than imagining it. Third, the market: professional photography, a full property page, and the same preparation playbook that produced results like{' '}
              <Link href="/blog/mukilteo-full-price-sale-cooling-market" style={styles.link}>
                the Mukilteo full-price sale
              </Link>
              . Fourth, the close: escrow runs the transaction, you sign with a notary where you live, and the proceeds arrive by wire.
            </p>

            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                The real difference between a smooth remote sale and a stressful one is the number of phone numbers you have to manage. Out-of-state sellers juggling a handyman, a hauler, a cleaner, a stager, and an agent across time zones burn out fast. One point of contact is not a luxury at a distance. It is the whole game.
              </p>
            </div>

            <h2 style={styles.h2}>What to ask a broker before you hire remotely</h2>
            <p style={styles.bodyP}>
              Ask how many remote transactions they have actually completed. Ask who physically checks on the house and how often. Ask how you will hear about progress. Ask how repairs get paid when you cannot walk the aisles of the hardware store yourself. And ask who answers the phone when something needs a decision at 8 PM your time. My answers: 16 remote deals to date, me and my team on site, a written progress update every week, repairs paid as the work is completed with deferral to closing available if you need it, and me on the phone, at 425-250-9422. The rest of the interview checklist is in{' '}
              <Link href="/blog/questions-to-ask-listing-agent-snohomish" style={styles.link}>
                my questions-to-ask guide
              </Link>
              .
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Selling from a distance?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                Start with a free home equity report on the Washington property, and I will walk you through the whole remote process on one call.
              </p>
              <Link href="/sellers" style={styles.ctaButton}>
                Get your free home equity report
              </Link>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
                Or call or text me directly: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
              </p>
            </div>
          </div>
        </article>

        <FAQSection title="Out-of-state seller questions" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
