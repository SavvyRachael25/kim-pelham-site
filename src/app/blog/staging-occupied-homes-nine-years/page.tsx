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
    question: 'Can you stage a home while the owners are still living in it?',
    answer:
      'Yes, that is my specialty. I have staged occupied homes in Snohomish County since 2017. I work with your existing furniture wherever possible, add pieces where they earn their keep, and design around real life: kids, pets, and all. Most large staging companies decline occupied homes; I built my staging practice around them.',
  },
  {
    question: 'How much does home staging cost with The Pelham Group NW?',
    answer:
      'It depends on the size of the house, how much furniture we need to bring in, and the logistics of the job. I almost always charge for staging, and I keep the cost low. The big difference from a staging company: I do not charge a monthly rental fee, which commonly runs $800 to $2,000 a month and is where most of a staging budget disappears on a listing that takes a while to sell.',
  },
  {
    question: 'Does staging actually increase the sale price?',
    answer:
      'On my very first staged listing, a South Everett condo that had sat two months with two showings and no offers, a roughly $1,200 stage preceded a sale in five days at $5,000 above the previous asking price. Across all my listings, my average sale-to-list ratio is 102.3%, against a Snohomish County average of 100.2%. Staging is one of the working parts behind that number.',
  },
  {
    question: 'What is the psychology behind home staging?',
    answer:
      'Buyers decide emotionally in the first moments of a tour, then justify the decision afterward. Staging tells a buyer how to live in a room: soothing tones in the primary suite so it feels like a retreat, energy and color in the living spaces, and one memorable detail so your home stands out after a long day of touring. It also draws the eye away from things you cannot affordably change.',
  },
  {
    question: 'Do I need to move my furniture out for staging?',
    answer:
      'Usually not. I use as much of your existing furniture as possible and blend in staging pieces where they matter. That keeps costs down and keeps your home livable while it is on the market, which matters because you still have to be somewhere while buyers tour.',
  },
];

export default function StagingOccupiedHomesPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Nine Years of Staging Homes People Still Live In"
          subtitle="By Kim Pelham · August 18, 2026 · 7 min read"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="A warm staged kitchen in a Snohomish County home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              In January 2017, I staged my first listing: a South Everett condo that had been on the market for two months with exactly two showings and zero offers. After staging, it sold in five days for $5,000 above the previous asking price. The stage cost about $1,200. Nine years later, staging occupied homes is still the heart of how I sell houses, and this post is the why and the how.
            </p>

            <h2 style={styles.h2}>The dirty secret of the staging industry</h2>
            <p style={styles.bodyP}>
              Most people do not know this: the majority of big staging companies will not stage your home if you are living in it. They do not want their inventory mixing with your dog, your cat, and your kids. Vacant homes are easier for them. But here is the thing: if you have dogs, cats, and kids, yours is exactly the kind of home that benefits most from staging, because you are selling a house that looks lived in to buyers who are shopping photos that look like magazines.
            </p>
            <p style={styles.bodyP}>
              Marketing your home starts with staging and photography. If your home does not look good online, buyers scroll past it and never book the showing. So the first job is making your home photograph like the homes buyers save and revisit. The second job happens in person.
            </p>

            <h2 style={styles.h2}>Staging is psychology, not decoration</h2>
            <p style={styles.bodyP}>
              Buyers do not choose a house on a spreadsheet. They decide emotionally in the first moments of a tour, then spend the rest of the visit building the case for the decision they already made. My staging is designed for that moment. I want a buyer comfortable enough to sit down on the couch and picture their own family living there.
            </p>
            <p style={styles.bodyP}>
              In the primary suite, I use soothing tones to create the feeling of a retreat, an oasis away from the world. In the living spaces, I use bursts of color and larger artwork to create energy. And I always place one memorable detail, something a little quirky, so that after a long day of touring, your home is the one they remember. I have had buyers reference a single decorative piece weeks later. That is not an accident.
            </p>
            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                Good staging also does quiet defensive work: it draws the buyer&apos;s eye away from the scuffed paint or the dated tile you did not have the budget to replace. Presentation cannot fix everything, but it decides what buyers notice first.
              </p>
            </div>

            <h2 style={styles.h2}>What nine years of this looks like in the numbers</h2>
            <p style={styles.bodyP}>
              Across my listings, my average sale-to-list ratio is 102.3%, against a Snohomish County average of 100.2%. Staging is not the only reason (pricing and preparation carry their share), but it is a working part of that number on every single listing. You can see the machinery in action in my case study of{' '}
              <Link href="/blog/mukilteo-full-price-sale-cooling-market" style={styles.link}>
                the Mukilteo home that sold at full price in a cooling market
              </Link>
              , and in the market context from{' '}
              <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                this summer&apos;s inventory jump
              </Link>
              . When buyers have more homes to choose from, prepared homes win and generic ones sit.
            </p>

            <h2 style={styles.h2}>How I price staging</h2>
            <p style={styles.bodyP}>
              I almost always charge for staging, and I keep the cost low on purpose. What it costs depends on the size of the house, how much furniture we need to bring in, and the logistics of the job. The part that surprises people: unlike a staging company, I do not charge a monthly rental fee, which is where most staging budgets quietly go to die at $800 to $2,000 a month. I use your existing furniture wherever it works, add pieces where they earn their keep, and design within what you actually have. My staging practice exists to serve my listings. It is not a profit center, and that is a deliberate choice I made nine years ago.
            </p>
            <p style={styles.bodyP}>
              Staging also works alongside the rest of my{' '}
              <Link href="/home-transition-team" style={styles.link}>
                Home Transition Team
              </Link>
              : if the honest answer is that your home needs paint or flooring before it needs throw pillows, we handle that first, and if needed, payment for pre-sale repairs can be deferred until closing.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Wondering what staging would do for your home?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                Start with a free home equity report and an honest conversation about what your home needs (and what it does not).
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

        <FAQSection title="Staging questions I hear every week" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
