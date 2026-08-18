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
    question: 'Do I need 20% down to buy a home in Snohomish County?',
    answer:
      'No. Twenty percent avoids mortgage insurance, but conventional loans go far lower, FHA lower still, and Washington runs real down payment assistance programs through WSHFC. What you need is a real number from a lender, not a rule of thumb from the internet.',
  },
  {
    question: 'Should I get pre-approved before looking at homes?',
    answer:
      'Yes, and before falling in love with anything. Pre-approval tells you your actual budget, signals sellers that your offer is real, and in a competitive moment it is the difference between your offer being read and being set aside. Most listing agents expect it.',
  },
  {
    question: 'How long does it take to buy a house in Washington?',
    answer:
      'Once your offer is accepted, a financed purchase typically closes in roughly 30 to 45 days depending on loan type and terms. The search itself is the variable: in the current Snohomish County market, with inventory up sharply year over year, buyers finally have time to compare rather than sprint.',
  },
  {
    question: 'What happens after my offer is accepted?',
    answer:
      'Earnest money gets deposited, inspections happen on the contingency timeline in your offer, the lender orders an appraisal, and escrow coordinates title and closing paperwork. You do a final walkthrough near closing, sign, fund, and record. Then keys. A good agent runs this timeline so nothing expires quietly.',
  },
  {
    question: 'Why does Kim Pelham only take two active buyers at a time?',
    answer:
      'Because searching for a home is a contact sport, and you deserve your broker in person at every walk-through, answering the phone when the listing you love hits the market. Two families get all of me; ten would get a scheduling app.',
  },
];

export default function BuyingStepsPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Buying a Home in Snohomish County: The Real Order of Operations"
          subtitle="By Kim Pelham · August 18, 2026 · 8 min read"
          image="/images/lifestyle-01-farmers-market.jpg"
          imageAlt="A Snohomish County farmers market on a summer morning"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Every home-buying checklist has the same six items. What the checklists never tell you is that the order is the strategy. Buyers who tour first and finance later fall in love with homes they cannot win. Buyers who run the steps in the right order walk into every showing already knowing their number. Here is the order, tuned to how Snohomish County actually works in 2026.
            </p>

            <h2 style={styles.h2}>Step 1: Your real budget, before anyone else&apos;s opinion</h2>
            <p style={styles.bodyP}>
              Start with your monthly life, not a purchase price. What payment fits alongside the childcare, the truck, the retirement contributions you refuse to skip? Lenders will look at your income, your debts, and your savings; you should look at your actual Tuesday. Check your credit report early and fix what is wrong on it, because your score prices your loan. And know that down payments are more flexible than folklore says; if savings are the obstacle,{' '}
              <Link href="/blog/down-payment-assistance-snohomish-county" style={styles.link}>
                Washington&apos;s assistance programs
              </Link>{' '}
              are real and I have watched them turn renters into owners.
            </p>

            <h2 style={styles.h2}>Step 2: Pre-approval, before touring, always</h2>
            <p style={styles.bodyP}>
              Talk to a lender before you tour anything you could love. Pre-approval turns your budget from a guess into a letter, and sellers treat offers with letters differently. It also surfaces problems while they are cheap to fix, months before they can cost you a house.
            </p>

            <h2 style={styles.h2}>Step 3: Choose your agent like it matters, because it does</h2>
            <p style={styles.bodyP}>
              Interview like you are hiring, because you are. Ask how many clients they carry (I cap active buyers at two, so my buyers get me in person at every showing), how they write winning offers, and how they will tell you a house is wrong for you even when it would be an easy commission. A buyer&apos;s agent who never talks you out of anything is a salesperson, not an advisor.
            </p>

            <h2 style={styles.h2}>Step 4: Search with this market&apos;s rules, not 2021&apos;s</h2>
            <p style={styles.bodyP}>
              Snohomish County inventory was up 36.6% year over year in July, and average days on market stretched to 28. Translation: you can breathe. Compare homes, revisit favorites, and look hard at listings sitting past three weeks, where negotiating room lives. The full market picture is in{' '}
              <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                my inventory-jump post
              </Link>
              , and my{' '}
              <Link href="/blog/everett-neighborhoods-buyers-guide" style={styles.link}>
                Everett neighborhoods guide
              </Link>{' '}
              covers where to point the search.
            </p>

            <h2 style={styles.h2}>Step 5: The offer is terms, not just price</h2>
            <p style={styles.bodyP}>
              Sellers weigh the whole offer: earnest money, financing strength, closing date, contingencies. In today&apos;s market you can usually keep your inspection contingency, and you should want to. A well-built offer at an honest price beats a reckless one at a flashy price, especially when the listing broker is comparing likelihood-to-close across a spreadsheet, which is exactly{' '}
              <Link href="/blog/buyer-love-letters-fair-housing-snohomish" style={styles.link}>
                how the good ones do it
              </Link>
              .
            </p>

            <h2 style={styles.h2}>Step 6: Accepted offer to keys</h2>
            <p style={styles.bodyP}>
              Under contract, the clock starts: earnest money deposits, the inspection happens inside its contingency window, the appraisal comes back, and escrow assembles the closing. You will do a final walkthrough, sign with a notary, and fund. Then the county records, and the keys are yours. My job in this stretch is keeping every deadline loud, because contingency dates do not send reminders.
            </p>

            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                The whole game in one sentence: know your number before you fall in love, and bring an agent with enough room on their plate to fight for you. Everything else is paperwork with deadlines.
              </p>
            </div>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Ready to start, or just ready to ask questions?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                I take a maximum of two active buyers at a time. If I have room, you get all of me. If I do not, I will tell you honestly and put you first in line.
              </p>
              <Link href="/buyers" style={styles.ctaButton}>
                See how I work with buyers
              </Link>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
                Or call or text me directly: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
              </p>
            </div>
          </div>
        </article>

        <FAQSection title="Home buying: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
