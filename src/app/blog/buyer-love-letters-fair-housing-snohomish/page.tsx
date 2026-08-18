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
    question: 'What is a buyer love letter in real estate?',
    answer:
      'A buyer love letter is a personal note a buyer sends with an offer, explaining why they love the home and often sharing details about themselves and their family, sometimes with photos. They are meant to be persuasive, and that is exactly the problem: they persuade with personal characteristics instead of offer terms.',
  },
  {
    question: 'Are buyer love letters illegal in Washington State?',
    answer:
      'There is no Washington law banning buyer love letters as of this writing. Oregon passed the first restriction in the country and a federal court blocked it, and Washington lawmakers have considered limits without passing them. Legal is not the same as safe: the Fair Housing risk falls on the seller who reads a letter and then makes a choice a rejected buyer believes was influenced by a protected characteristic.',
  },
  {
    question: 'What are the protected classes in Washington State housing law?',
    answer:
      'Washington law protects against housing discrimination based on characteristics including race, color, national origin, citizenship or immigration status, creed or religion, sex, sexual orientation, gender identity, marital status, familial status (having children), disability, and military or veteran status. Love letters routinely reveal several of these without anyone intending it.',
  },
  {
    question: 'How should a seller choose between multiple offers?',
    answer:
      'On the merits, with the identities set aside: price, earnest money, down payment and financing strength, closing timeline, contingencies (inspection waived or not), and the likelihood the sale actually closes. My process puts every offer on a spreadsheet identified only by number, so my sellers compare terms, not families.',
  },
  {
    question: 'Does refusing to read love letters hurt the sale price?',
    answer:
      'In my experience, no. The strongest offer is strong on paper. On the nine-offer sale where I first formalized this process, my seller selected an offer $30,000 over asking with a $150,000 down payment and a free month of rent-back, chosen purely from the numbers. The letter-writers who lost did not lose to a story. They lost to terms.',
  },
];

export default function BuyerLoveLettersPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Buyer Love Letters Can Cost You: How I Protect Sellers From Fair Housing Risk"
          subtitle="By Kim Pelham · August 18, 2026 · 7 min read"
          image="/images/kim-with-laptop.jpg"
          imageAlt="Broker Kim Pelham reviewing offers on a laptop"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Most home sellers have no idea that fair housing law applies to them. It does. The moment you choose one buyer over another, you are making a decision the law cares about, and the charming letter that came stapled to an offer is the easiest way to get that decision wrong. Here is the risk in plain English, and the process I use so my sellers never have to worry about it.
            </p>

            <h2 style={styles.h2}>The problem with love letters</h2>
            <p style={styles.bodyP}>
              In a competitive market, buyers write personal letters to sellers: why they love the home, what their life would look like in it, often with a family photo attached. It feels harmless and usually comes from a sweet place. But those letters almost always reveal characteristics that Washington law protects: whether the buyer has children, their religion, their national origin, their marital status, and more.
            </p>
            <p style={styles.bodyP}>
              Sellers rarely discriminate on purpose. They pick the buyer who reminds them of themselves, or the family they feel for. The trouble is that warmth toward one buyer is, by definition, a preference against the others, and if a rejected buyer believes a protected characteristic tipped the scales, the seller owns that legal exposure. Not the buyer. Not the letter. The seller.
            </p>

            <h2 style={styles.h2}>Where the law actually stands</h2>
            <p style={styles.bodyP}>
              There is no Washington ban on love letters as of this writing. Oregon passed the country&apos;s first restriction and a federal court blocked it on free-speech grounds. Washington lawmakers have considered limits and have not passed them. So the letters keep coming, and the safest practice is not a statute. It is a process that keeps the letters from influencing the decision at all.
            </p>

            <h2 style={styles.h2}>My process: numbers, not names</h2>
            <p style={styles.bodyP}>
              A while back I listed a home that drew nine offers from buyers of every background, several with heartfelt letters and family photos attached. Here is exactly what I did, and what I do on every multiple-offer sale since.
            </p>
            <p style={styles.bodyP}>
              I put every offer on a single spreadsheet and assigned each buyer a number. No names, no letters forwarded, no photos. My seller evaluated nine rows of terms:
            </p>
            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: '12px' }}>1. The merits of the offer: price, earnest money, down payment, closing date, inspection kept or waived.</p>
              <p style={{ ...styles.bodyP, marginBottom: '12px' }}>2. The likelihood the sale actually closes.</p>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>3. The financial strength of the buyer.</p>
            </div>
            <p style={styles.bodyP}>
              The offer my seller chose was $30,000 over asking with a $150,000 down payment, and I negotiated a one-month rent-back at no cost, which mattered because his next home in another state was not ready yet. He picked it knowing the buyer only as a number. No exposure, no second-guessing, and objectively the best terms on the table.
            </p>

            <h2 style={styles.h2}>What this means if you are selling</h2>
            <p style={styles.bodyP}>
              Ask any agent you interview how they handle multiple offers and buyer letters. If the answer is a shrug, that is an answer too. My job is not just producing offers, it is protecting you through the decision, which is the part of the sale with the most quiet liability. It is one of the{' '}
              <Link href="/blog/questions-to-ask-listing-agent-snohomish" style={styles.link}>
                questions I think every seller should ask before hiring a listing agent
              </Link>
              . And if your home draws one offer instead of nine, the preparation conversation matters more; that story is in{' '}
              <Link href="/blog/mukilteo-full-price-sale-cooling-market" style={styles.link}>
                my Mukilteo full-price case study
              </Link>
              .
            </p>
            <p style={{ ...styles.bodyP, fontSize: '0.95rem', fontStyle: 'italic' }}>
              I am a real estate broker, not an attorney, and this post is general information rather than legal advice. For legal questions about a specific situation, talk to a real estate attorney.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Thinking about selling?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                Start with a free home equity report, and get a broker who protects you through the whole decision, not just the listing.
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

        <FAQSection title="Love letters and multiple offers: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
