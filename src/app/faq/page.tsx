'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
import { reviewStats, GOOGLE_REVIEW_URL } from '@/data/reviews';

const faqs = [
  {
    question: 'How much is my home worth in Snohomish County right now?',
    answer:
      "The honest answer is a tight range, not a single number. Kim Pelham builds a free Home Equity Report inside 48 hours, with a range based on recent closed comps within a half mile of your address, adjusted for your specific finish and condition. Not a Zestimate. Request one at thepelhamgroupnw.com/condo-concierge or text Kim directly at (425) 250-9422.",
  },
  {
    question: 'Should I renovate before selling, or list as-is?',
    answer:
      "Most Snohomish sellers do not need a kitchen remodel. They need four to five targeted updates that almost always pay back: paint, lighting, flooring repairs, hardware, and professional staging. The 2024 Cost vs Value Report finds exterior projects (garage door, stone veneer, steel door) recoup 96 to 194 percent of cost, while interior gut remodels recoup just 38 to 56 percent. The Pre-Sale Renovation Playbook walks through the math in detail. Free at thepelhamgroupnw.com/listwithkim.",
  },
  {
    question: 'How long do homes sit on the market in Snohomish County?',
    answer:
      "Median days on market in Snohomish County in 2026 ranges from a few days for cleanly-priced inventory under 750K to several weeks at the upper end of the market. Pelham Group listings average a 102.3 percent sale-to-list ratio, well above the Snohomish County average of 99 to 100 percent in recent months, because of the staging and prep done before the photos.",
  },
  {
    question: 'What is the Pelham Group concierge service?',
    answer:
      "A full pre-sale prep handled by Kim's in-house crew so the seller does not have to juggle five vendors. It covers planning, paint, flooring, hardware, refinishing, lighting tune-ups, full Pelham Group staging, and professional listing photography. The owner approves scope and budget once at the front, then approves photos at the end. The Mathis condo case study at thepelhamgroupnw.com/case-study/concierge-condo shows the entire concierge process end to end.",
  },
  {
    question: 'Can Kim manage a sale if I am out of state?',
    answer:
      "Yes. The Mathis condo was a full concierge prep with the owners across the country, no round trips required. Kim took the keys, ran the work, and got the unit on the market. Same process for any out-of-state seller: one point of contact (Kim), one approval at the front for scope and budget, one approval at the end for the listing photos.",
  },
  {
    question: 'Who is Kim Pelham and what credentials does she hold?',
    answer:
      "Kim Pelham is the Designated Broker of The Pelham Group NW, brokered by Katrina Eileen Real Estate. 17 years of full-time real estate experience, and a Snohomish County broker since 2015. Best Realtor in The Daily Herald's Best of Snohomish County readers' choice back-to-back in 2023 and 2024. Featured in The Daily Herald's top three Snohomish brokers in 2025. Published author of Six-Word Lessons on Selling Your Home in Seattle.",
  },
  {
    question: 'What is a Senior Move Specialist and why does it matter?',
    answer:
      "A Senior Move Specialist is a broker who focuses on the moves that come later in life: estate sales, the timing of a move, accessibility, and the conversations that come with selling a parent's home or downsizing yourself. Kim has spent years helping seniors and families through exactly these transitions. More at thepelhamgroupnw.com/senior-services.",
  },
  {
    question: 'How do I leave Kim a review, or read what past clients have said?',
    answer:
      `Kim has ${reviewStats.total} five-star Google reviews (${reviewStats.averageRating} average) from real Pelham clients. Read them at thepelhamgroupnw.com/testimonials. If you have worked with Kim and want to leave a review yourself, the direct link is ${GOOGLE_REVIEW_URL}.`,
  },
  {
    question: 'Where is the Pelham Group office and how can I reach Kim directly?',
    answer:
      "The office is at 3201 Smith Ave Ste 409, Everett, WA 98201. Kim's direct mobile is (425) 250-9422. Office hours are 9 to 6, Monday through Saturday. Showings are scheduled by appointment, including evenings and weekends.",
  },
  {
    question: 'What areas does Kim serve?',
    answer:
      "Snohomish County primarily, including Everett, Mukilteo, Mill Creek, Bothell, Lake Stevens, Marysville, Snohomish, Arlington, and Lynnwood. Also serves greater Seattle, King County, Skagit County, and Pierce County for past clients moving within the region.",
  },
  {
    question: 'How does the free in-home consultation work?',
    answer:
      "Kim comes to your home, walks the property with you, and gives you an honest read on what it would sell for today, what (if anything) would be worth doing before listing, and the timeline that makes sense. No pressure to list with her. Lots of sellers use it as a sanity check. Schedule at thepelhamgroupnw.com/contact or text Kim at (425) 250-9422.",
  },
];

const styles = {
  introBox: {
    background: 'var(--color-cream)',
    border: '1px solid var(--color-border)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '28px 32px',
    borderRadius: 6,
    margin: '0 0 40px',
  } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '40px 32px',
    borderRadius: 8,
    textAlign: 'center' as const,
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-clay)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '13px 26px',
    borderRadius: 4,
    textDecoration: 'none',
    marginTop: '16px',
  } as const,
};

export default function FAQPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Questions Buyers and Sellers Actually Ask"
          subtitle="Plain answers from Kim, in the order they usually come up."
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="A warm interior with soft natural light."
          subtitleStyle="body"
        />

        <section style={{ padding: '64px 24px 16px', background: '#fff' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={styles.introBox}>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: 1.7 }}>
                The questions below come up over and over again in first conversations with sellers and buyers across Snohomish County. The answers are written the same way Kim would give them on the phone. If yours is not here, text or call <a href="tel:+14252509422" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>(425) 250-9422</a> and Kim will get back to you the same day.
              </p>
            </div>
          </div>
        </section>

        <FAQSection
          title="Common questions, answered"
          faqs={faqs}
          backgroundColor="#fff"
        />

        <section style={{ padding: '24px 24px 96px', background: '#fff' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.5rem', color: 'var(--color-clay-light, #E5C29A)', margin: '0 0 8px 0', lineHeight: 1.1 }}>
                still wondering about something?
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 600, color: 'var(--color-cream)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                Just call Kim.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(248,245,240,0.85)', margin: '0 0 6px 0', lineHeight: 1.65 }}>
                Direct mobile: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)', textDecoration: 'underline', fontWeight: 600 }}>(425) 250-9422</a>
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(248,245,240,0.75)', margin: 0 }}>
                Text any time. Showings, valuations, just talking through what makes sense. No pressure to list.
              </p>
              <Link href="/contact" style={styles.ctaButton}>
                Or send a message →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
