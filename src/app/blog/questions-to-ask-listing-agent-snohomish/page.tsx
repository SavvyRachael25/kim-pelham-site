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
    question: 'What is a good sale-to-list ratio for a listing agent?',
    answer:
      'Sale-to-list ratio is the final sale price divided by the asking price, averaged across an agent’s sales. In Snohomish County the average is around 100.2%, meaning homes sell almost exactly at asking. My listings average 102.3%. Ask any agent you interview for their number and how they got it.',
  },
  {
    question: 'Should staging be included when I hire a listing agent?',
    answer:
      'Ask directly: who stages, what does it cost, and does it work for an occupied home? Many agents refer you to an outside stager and the bill is yours. I stage my listings myself, in-house, including homes people are still living in. I almost always charge for staging and I keep the cost low. The price depends on the size of the house, how much furniture we bring in, and the logistics. Unlike a staging company, I do not charge a monthly rental fee, which commonly runs $800 to $2,000 a month.',
  },
  {
    question: 'What should I ask about pre-sale repairs?',
    answer:
      'Ask who coordinates the work, whether the agent has real contractors behind them, and whether you must pay before closing. My Home Transition Team handles pre-sale repairs through SMART Building Services. Repairs are normally paid as the work is completed, and if needed, payment can be deferred until closing, which matters when the equity is in the house rather than the bank account.',
  },
  {
    question: 'How many clients should a listing agent take at once?',
    answer:
      'There is no rule, which is why you should ask. High-volume teams may hand your listing to an assistant after the signature. I cap my active buyers at two and keep my listing load where I can personally run every showing plan, staging day, and negotiation.',
  },
  {
    question: 'What happens if my home does not sell?',
    answer:
      'Ask this before you list, because the answer reveals how the agent thinks. My own listings sell, and my history does not include expired listings. The reason is the weekly rhythm: every week we review the number of showings, read the feedback, and make adjustments based on what the feedback is actually telling us. If market prices are trending downward, a price correction may be necessary. What we work hard to avoid is chasing the market down. That is a conversation I have with my clients every week, not a conversation that starts after a listing has stalled.',
  },
];

const QUESTIONS: Array<{ q: string; a: string }> = [
  {
    q: '1. What is your average sale-to-list ratio, and how do you get it?',
    a: 'Every agent will say they get top dollar. Numbers end the debate. Mine is 102.3% of list price across my sales, against a county average around 100.2%. The follow-up matters just as much: the how. For me it is pricing honestly, preparing completely, and staging every listing. An agent who cannot explain their number is quoting a slogan.',
  },
  {
    q: '2. Who stages my home, and what will it cost me?',
    a: 'This one sorts the field fast. Most agents refer staging out, and most staging companies decline occupied homes. I stage in-house, including homes with kids and dogs still living in them, nine years of it. I almost always charge for staging and I keep the cost low, because it is not a profit center for me. What it costs depends on the size of the house, how much furniture we bring in, and the logistics of the job. The number that matters most: I do not charge a monthly rental fee, and that fee is commonly $800 to $2,000 a month with a staging company.',
  },
  {
    q: '3. Who handles repairs before we list, and when do I pay?',
    a: 'Homes earn more when the fix-list is done before photos. Ask whether the agent has actual contractors behind them or just a phone number, and what the payment terms are. Through my Home Transition Team, pre-sale repairs run through SMART Building Services. Repairs are normally paid as the work is completed, and if a seller needs it, payment can be deferred until the sale closes.',
  },
  {
    q: '4. How will you handle multiple offers, and buyer letters?',
    a: 'Fair housing liability lands on sellers, and buyer love letters are the usual door it walks through. I review offers on an anonymized spreadsheet, numbers instead of names, so my sellers pick the strongest terms with zero exposure. If an agent has never thought about this, they are learning on your sale.',
  },
  {
    q: '5. How many clients do you carry at once?',
    a: 'You are hiring attention, so ask how much of it you get. I cap active buyers at two, and I keep my listing count where I personally run the staging, the launch, and the negotiation. If a team answers the phone for the agent, ask who negotiates when it counts.',
  },
  {
    q: '6. How will you price my home, and what happens if the market disagrees?',
    a: 'Pricing is a strategy conversation, not a compliment contest. Beware the agent who quotes the highest number to win the listing. Ask how they pick a price band, and what the plan is if showings stall. My answer is the weekly review: showing counts, buyer feedback, and the adjustments that feedback calls for. A price correction is on the table when the market is genuinely trending down, and the thing we avoid is chasing the market downward.',
  },
  {
    q: '7. What does your marketing actually include?',
    a: 'Photos and the NWMLS are table stakes. Ask what else, specifically. My listings get staging, professional photography, a property page on this site with full schema for search and AI assistants, Google Business posts, and my weekly Pelham Post to a cleaned list of more than a thousand local readers. Syndication matters too, and it is worth asking which portals an agent actually shows up on. My listings carry through to Homes.com, where the listing agent is the contact on the page rather than a paid advertiser, so the person a buyer reaches is me.',
  },
  {
    q: '8. Who will I actually talk to for the next sixty days?',
    a: 'Simple question, revealing answer. With me it is me: my cell, 425-250-9422, and I answer it. Ask every agent you interview who picks up when the inspection response is due at 9 PM.',
  },
];

export default function QuestionsListingAgentPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Questions to Ask Before You Hire a Listing Agent in Snohomish County"
          subtitle="By Kim Pelham · August 18, 2026 · 8 min read"
          image="/images/kim-with-client-on-couch.jpg"
          imageAlt="Kim Pelham talking with a client at home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Choosing a listing agent is the highest-leverage decision in your sale, and most sellers make it after one conversation that the agent controlled. Flip that. Walk in with questions that have measurable answers, and make every agent you interview go on the record. Here are the eight I would ask, and since fair is fair, my own answers to each one.
            </p>
            <p style={styles.bodyP}>
              Context for why these questions matter more right now: Snohomish County buyers have far more choice than a year ago (inventory was up 36.6% year over year in July), which punishes casual listings. The full picture is in{' '}
              <Link href="/blog/snohomish-county-inventory-jump-august-2026" style={styles.link}>
                my August market post
              </Link>
              .
            </p>

            {QUESTIONS.map((item) => (
              <div key={item.q}>
                <h2 style={styles.h2}>{item.q}</h2>
                <p style={styles.bodyP}>{item.a}</p>
              </div>
            ))}

            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                One more tell that is not a question: does the agent talk you toward the highest listing price, or toward the strongest sale? Those are different skills. The first one wins listings. The second one is in{' '}
                <Link href="/blog/mukilteo-full-price-sale-cooling-market" style={styles.link}>
                  my Mukilteo case study
                </Link>
                , at full price in a cooling market.
              </p>
            </div>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Interview me first, or interview me last
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                Either way, come armed. Start with a free home equity report so every conversation begins from your real number.
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

        <FAQSection title="Hiring a listing agent: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
