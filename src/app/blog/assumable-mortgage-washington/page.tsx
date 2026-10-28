'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import TextMeAsk from '@/components/TextMeAsk';
import FAQSection from '@/components/FAQSection';
import { FAQS } from './faqs';

// Source: the Oct 6, 2026 Pelham Post, Kim's words (typos only). Savvy text is third person and factual.

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
  link: { color: 'var(--color-clay)' } as const,
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    margin: '28px 0',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
  } as const,
  th: {
    textAlign: 'left' as const,
    padding: '12px 14px',
    borderBottom: '2px solid var(--color-forest)',
    color: 'var(--color-forest)',
    fontWeight: 600,
  } as const,
  td: {
    padding: '12px 14px',
    borderBottom: '1px solid #E8E3DA',
    verticalAlign: 'top' as const,
  } as const,
  caption: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: 'var(--color-text)',
    opacity: 0.7,
    margin: '-12px 0 24px',
  } as const,
  note: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    opacity: 0.75,
    lineHeight: '1.7',
    borderTop: '1px solid #E8E3DA',
    paddingTop: '20px',
    marginTop: '48px',
  } as const,
};

export default function AssumableMortgagePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        {/* TODO(Kim): H1 is a placeholder. Her Oct 6 subject was "How my buyers got 5.125% with an Assumed Loan". */}
        <InnerHero
          title="Assumable Loans in Washington: How My Buyers Got 5.125%"
          subtitle="By Kim Pelham · October 2026 · 3 min read"
          image="/images/kim-with-client-on-couch.jpg"
          imageAlt="Kim Pelham talking with a client at home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ ...styles.h2, marginTop: 0 }}>My buyers just got 5.125% with a loan payment less than their rent.</h2>

            <p style={styles.bodyP}>
              Everybody else will be signing at 7.49% this week. These first-time buyers did not have to buy down their
              interest rate. They took over the seller&rsquo;s existing loan. What&rsquo;s interesting about this
              transaction is that this home was not advertised as having an assumable loan. I inquired about the type of
              loan, learning it was VA, and then created the opportunity for my buyers to assume the loan.
            </p>
            <p style={styles.caption}>7.49%: Freddie Mac 30-year average, week of Oct 5, 2026.</p>

            <p style={styles.bodyP}>
              If a seller has an FHA, VA or USDA loan, a buyer can step into it at the rate the seller got instead of
              today&rsquo;s rate. Conventional loans cannot be assumed.
            </p>

            <p style={styles.bodyP}>
              For my buyers, their house payment will be $2756 instead of $3100 on a $455,000 home. Their current rent is
              $3000, so they will be buying a house for less than their monthly rent!
            </p>

            <h2 style={styles.h2}>How a loan assumption works</h2>

            <p style={styles.bodyP}>
              The buyers have to pay the difference between the purchase price of $455,000 and the loan balance of
              $407,000 which equals $48,000. They had $60k for a down payment, so this totally fit their budget.
            </p>

            <p style={styles.bodyP}>
              So, the catch to loan assumptions is finding assumable loans that have a balance that fits the
              buyer&rsquo;s down payment budget. A bonus is that the buyer will save thousands on loan origination fees,
              so they may have more buying power than they thought.
            </p>

            <h2 style={styles.h2}>Which loans can be assumed</h2>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Loan type</th>
                  <th style={styles.th}>Assumable?</th>
                  <th style={styles.th}>What it takes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>FHA</td>
                  <td style={styles.td}><strong>Yes</strong></td>
                  <td style={styles.td}>Lender approval; the buyer qualifies under current FHA guidelines</td>
                </tr>
                <tr>
                  <td style={styles.td}>VA</td>
                  <td style={styles.td}><strong>Yes</strong></td>
                  <td style={styles.td}>Lender and VA approval. The buyer does not have to be a veteran</td>
                </tr>
                <tr>
                  <td style={styles.td}>USDA</td>
                  <td style={styles.td}><strong>Yes</strong></td>
                  <td style={styles.td}>Lender and USDA approval, plus USDA income and property rules</td>
                </tr>
                <tr>
                  <td style={styles.td}>Conventional</td>
                  <td style={styles.td}><strong>No</strong></td>
                  <td style={styles.td}>Due-on-sale clause; the balance is paid off when the house sells</td>
                </tr>
              </tbody>
            </table>

            <h2 style={styles.h2}>VA loans and the seller&rsquo;s entitlement</h2>

            <p style={styles.bodyP}>
              A non-veteran can assume a VA loan. The seller&rsquo;s VA entitlement stays tied to that loan unless a
              veteran buyer substitutes their own. A seller who lets a non-veteran assume their VA loan may not be able to
              use their VA benefit on the next house they buy, possibly for years.
            </p>

            <TextMeAsk page="assumable-mortgage" question="Does that house have an assumable loan?" />

            <p style={styles.note}>
              This is general information from a real estate broker, not lending advice, and nothing here is an offer
              of credit. Assumption rules are set by FHA, the VA, USDA and the loan servicer, and they change. The
              lender and the servicer decide what is possible on a specific loan. The 7.49% rate is Freddie Mac&rsquo;s
              Primary Mortgage Market Survey 30-year average for the week of October 5, 2026.
            </p>

            <p style={styles.bodyP}>
              <Link href="/blog/down-payment-assistance-snohomish-county" style={styles.link}>
                Next: down payment assistance in Snohomish County
              </Link>
            </p>
          </div>
        </article>
        {/* Visible FAQ mirrors the FAQPage JSON-LD emitted in layout.tsx.
            emitSchema is off here to avoid duplicate FAQPage schema. */}
        <FAQSection title="Questions buyers ask" faqs={FAQS} emitSchema={false} backgroundColor="#FBF7F1" />
      </main>
      <Footer />
    </>
  );
}
