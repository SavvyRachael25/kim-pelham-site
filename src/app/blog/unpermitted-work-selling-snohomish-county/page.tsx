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
    question: 'Do I have to disclose unpermitted work when selling a house in Washington?',
    answer:
      'Washington sellers complete the Seller Disclosure Statement (commonly called Form 17), which asks directly about alterations and whether required permits were obtained. Answering honestly is not optional, and concealing known unpermitted work can create liability that follows you well past closing. When in doubt, disclose and let pricing do the negotiating.',
  },
  {
    question: 'What kind of work usually requires a permit in Snohomish County?',
    answer:
      'As a rule of thumb: structural changes, additions, converted spaces, and most electrical and plumbing work require permits, while purely cosmetic updates (paint, flooring, cabinets) generally do not. The specifics depend on your jurisdiction (the county or your city). Snohomish County Planning and Development Services and your city permit office are the authoritative sources.',
  },
  {
    question: 'Will unpermitted work stop my home from selling?',
    answer:
      'Usually not, but it changes the conversation. Buyers may negotiate the price, ask for corrections, or in some cases lenders and insurers may take issue with significant unpermitted spaces (like a converted garage counted as living area). The homes that get hurt worst are the ones where it surfaces as a surprise mid-transaction. Fronting the issue keeps you in control.',
  },
  {
    question: 'Can unpermitted work be permitted after the fact?',
    answer:
      'Often yes. Jurisdictions have processes for retroactive permits, which typically involve inspection and sometimes opening up work so it can be examined. Whether that is worth doing before listing depends on the scope, the timeline, and the price impact. That math is exactly the conversation to have during a pre-listing walkthrough.',
  },
  {
    question: 'Are cities getting better at spotting unpermitted work?',
    answer:
      'In my experience, yes, and sellers should plan for it. I suspect some jurisdictions are now using automated tools to compare listing details against county tax records, because the mismatches are getting caught faster than they used to be. Everett is where I have seen it most: several homes red-tagged for obvious unpermitted changes, usually extra bathrooms, added kitchens, and detached accessory dwelling units. That is my own observation from the field rather than a published policy, but it is one more reason to sort this out before the listing goes live instead of after.',
  },
  {
    question: 'Should I fix unpermitted work before listing or sell as-is?',
    answer:
      'It depends on what the work is, what correcting it costs, and what the market will pay either way. Sometimes a modest correction through my repair team protects far more value than it costs. Repairs are normally paid as the work is completed, and if a seller needs it, payment can be deferred until closing. Sometimes honest disclosure and smart pricing is the better trade. I walk sellers through both numbers before we decide.',
  },
];

export default function UnpermittedWorkPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="That Unpermitted Remodel: What It Means When You Sell in Snohomish County"
          subtitle="By Kim Pelham · August 18, 2026 · 7 min read"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="A remodeled kitchen in a Snohomish County home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Somebody finished that basement. Somebody wired that shop, plumbed that extra bathroom, or turned that garage into a bedroom. Maybe it was you, maybe it was three owners ago. Either way, when it is time to sell, the question arrives: was it permitted? Here is how unpermitted work actually plays at sale time in Snohomish County, without the scare tactics.
            </p>

            <h2 style={styles.h2}>The disclosure is not optional</h2>
            <p style={styles.bodyP}>
              Washington sellers fill out the Seller Disclosure Statement, the famous Form 17, and it asks about alterations and whether required permits were obtained. You answer to the best of your knowledge, and honestly. Concealing known unpermitted work is the one genuinely bad option on the menu: it can surface in inspection anyway, it poisons the negotiation when it does, and it can follow you legally after closing. Every other path is manageable. That one is not.
            </p>

            <h2 style={styles.h2}>What actually requires a permit</h2>
            <p style={styles.bodyP}>
              Rule of thumb: structure, additions, electrical, and plumbing generally require permits; paint, flooring, and cabinets generally do not. The details vary by jurisdiction, and in Snohomish County that means Planning and Development Services for unincorporated areas or your city&apos;s permit office. If you are not sure what applies to your project history, that is a lookup worth doing before the buyer&apos;s inspector does it for you.
            </p>

            <h2 style={styles.h2}>What buyers, lenders, and inspectors do with it</h2>
            <p style={styles.bodyP}>
              Most unpermitted work does not kill a sale. It gets priced. A buyer may ask for a credit, a correction, or simply accept it with eyes open. The complications concentrate in the bigger stuff: converted spaces marketed as living area can draw questions from appraisers and lenders, and significant unpermitted systems make inspectors slow down. The pattern I have seen across my years of selling: the damage comes from surprise, not from the work itself. A seller who fronts the issue keeps control of the story and the price.
            </p>

            <p style={styles.bodyP}>
              One more thing worth knowing in 2026: these mismatches are surfacing faster than they used to. My own suspicion, based on what I am seeing rather than on any published policy, is that some jurisdictions are now running automated comparisons between listing details and county tax records. Everett is where I have watched it happen most. I have seen several homes there get red-tagged for obvious unpermitted changes, most often extra bathrooms, added kitchens, and detached accessory dwelling units. If your listing is going to describe a fourth bathroom that the tax record has never heard of, assume someone is going to notice, and decide how you want that conversation to go before it starts.
            </p>

            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                Your three honest options: disclose and price it in, pursue a retroactive permit where the jurisdiction allows it, or correct the work before listing. Which one wins is arithmetic, not philosophy, and it is exactly what a pre-listing walkthrough is for.
              </p>
            </div>

            <h2 style={styles.h2}>Where my team changes the math</h2>
            <p style={styles.bodyP}>
              This is a spot where my{' '}
              <Link href="/home-transition-team" style={styles.link}>
                Home Transition Team
              </Link>{' '}
              earns its name. Pre-sale corrections run through SMART Building Services with licensed contractors. The work is normally paid as it is completed, and if a seller needs it, payment can be deferred until closing. Either way, the fix gets weighed against the price impact before anyone swings a hammer. Sometimes the answer is a correction. Sometimes it is disclosure, smart pricing, and the preparation playbook from{' '}
              <Link href="/blog/staging-occupied-homes-nine-years" style={styles.link}>
                my staging practice
              </Link>
              . The point is choosing on numbers instead of anxiety.
            </p>
            <p style={{ ...styles.bodyP, fontSize: '0.95rem', fontStyle: 'italic' }}>
              General information, not legal advice; permit requirements are jurisdiction-specific and change. Confirm specifics with Snohomish County Planning and Development Services or your city permit office, and talk to a real estate attorney for legal questions.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Not sure what that old remodel means for your sale?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                Get the free pre-listing walkthrough. I will tell you plainly whether it is a disclosure, a permit, or a repair, and what each path is worth.
              </p>
              <Link href="/sellers" style={styles.ctaButton}>
                Book your pre-listing walkthrough
              </Link>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
                Or call or text me directly: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
              </p>
            </div>
          </div>
        </article>

        <FAQSection title="Unpermitted work: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
