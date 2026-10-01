'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import TextMeAsk from '@/components/TextMeAsk';

/*
  Buyer education, written 2026-10-01 at Rachael's direction ("buyer assumable
  loans - education"). The idea is Kim's own, from her Oct 1 email: "mobile home
  buyer to condo to home, buy with assumable loan pay less than rent."

  Every lending fact here was verified 2026-10-01 against multiple independent
  sources: FHA, VA and USDA are assumable, conventional conforming loans are not
  (due-on-sale clause), a non-veteran may assume a VA loan but the seller's
  entitlement stays tied unless a veteran substitutes, and the buyer must cover
  the gap between balance and price.

  The payment figures are LABELLED ILLUSTRATIVE on purpose. They are not a real
  deal and must not be presented as one.

  PENDING KIM: she closed an assumption at 4048 37th Ave S, Seattle on
  2026-09-30. The real numbers are better than any example, but publishing them
  needs her confirmation of the loan type, the assumed rate, the balance, how the
  buyer covered the gap, and whether the clients are comfortable. Until then this
  post carries no claim about that deal. See Kim/assumable-4048-questions.md.
*/

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
  quote: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.35rem',
    lineHeight: '1.6',
    color: 'var(--color-forest)',
  } as const,
  cite: {
    display: 'block',
    marginTop: '12px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    fontStyle: 'normal',
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
        <InnerHero
          title="Can I Take Over the Seller&rsquo;s Mortgage?"
          subtitle="By Kim Pelham · October 1, 2026 · 6 min read"
          image="/images/kim-with-client-on-couch.jpg"
          imageAlt="Kim Pelham talking with a client at home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={styles.bodyP}>
              The 30-year average is 7.28% this week. It was 6.34% a year ago. On the county median that is about
              $4,356 a year more for the same house at the same price, and I am not going to pretend that is nothing.
            </p>

            <p style={styles.bodyP}>
              There is one legal way around it, and most buyers have never heard of it. You do not get a new loan at
              all. You take over the one the seller already has, at the rate they got.
            </p>

            <p style={styles.bodyP}>
              It is called an assumption. It is real, it is not a loophole, and it does not work on most houses. Here
              is the honest version.
            </p>

            <h2 style={styles.h2}>Which loans can be taken over</h2>

            <p style={styles.bodyP}>
              Only government-backed ones. That is the whole rule, and it decides everything else.
            </p>

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
                  <td style={styles.td}>Lender approval, and you qualify under current FHA guidelines</td>
                </tr>
                <tr>
                  <td style={styles.td}>VA</td>
                  <td style={styles.td}><strong>Yes</strong></td>
                  <td style={styles.td}>Lender and VA approval. You do not have to be a veteran</td>
                </tr>
                <tr>
                  <td style={styles.td}>USDA</td>
                  <td style={styles.td}><strong>Yes</strong></td>
                  <td style={styles.td}>Lender and USDA approval, plus their income and property rules</td>
                </tr>
                <tr>
                  <td style={styles.td}>Conventional</td>
                  <td style={styles.td}><strong>No</strong></td>
                  <td style={styles.td}>Due-on-sale clause. The balance gets paid off when the house sells</td>
                </tr>
              </tbody>
            </table>

            <p style={styles.bodyP}>
              So the first question on any house you love is not what it costs. It is what kind of loan is on it.
            </p>

            <h2 style={styles.h2}>The catch nobody mentions</h2>

            <p style={styles.bodyP}>
              You assume the <em>balance</em>, not the price. The seller&rsquo;s equity does not come along for the
              ride. You have to cover the difference between what they still owe and what you are paying them.
            </p>

            <p style={styles.bodyP}>
              Here is what that actually looks like. These numbers are an illustration, not a specific house:
            </p>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>A $650,000 house</th>
                  <th style={styles.th}>Monthly</th>
                  <th style={styles.th}>Cash in</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>New conventional loan, 20% down, at 7.28%</td>
                  <td style={styles.td}>$3,558</td>
                  <td style={styles.td}>$130,000</td>
                </tr>
                <tr>
                  <td style={styles.td}>Assume a $350,000 FHA loan at 3.25%, cover the rest in cash</td>
                  <td style={styles.td}><strong>$1,523</strong></td>
                  <td style={styles.td}>$300,000</td>
                </tr>
                <tr>
                  <td style={styles.td}>Assume it, 20% down, finance the rest of the gap as a second at 8%</td>
                  <td style={styles.td}><strong>$2,945</strong></td>
                  <td style={styles.td}>$130,000</td>
                </tr>
              </tbody>
            </table>

            <p style={styles.bodyP}>
              Look at the middle row and then look at the cash column. $1,523 a month is a wonderful number and almost
              nobody has $300,000 sitting there. That row is why people hear about assumptions and then never do one.
            </p>

            <p style={styles.bodyP}>
              The third row is the real one. Same cash as a normal purchase, and the payment still lands about $613 a
              month under the conventional loan. That is $7,300 a year, on the same house, for doing the paperwork
              differently.
            </p>

            <div style={styles.quote}>
              The assumption is not free money. It is a smaller loan at a much better rate, plus a second loan at
              today&rsquo;s rate on the rest. Whether that wins depends entirely on how big the gap is.
            </div>

            <h2 style={styles.h2}>If it is a VA loan, read this part twice</h2>

            <p style={styles.bodyP}>
              You do not have to be a veteran to assume a VA loan. That part surprises people and it is true.
            </p>

            <p style={styles.bodyP}>
              But the seller&rsquo;s VA entitlement stays tied up in that loan unless the person assuming it is a
              veteran who substitutes their own. In plain terms: a seller who lets a non-veteran assume their VA loan
              may not be able to use their VA benefit on the house they buy next, possibly for years.
            </p>

            <p style={styles.bodyP}>
              I have seen that detail surface late, and it is a miserable conversation to have at that point. If you
              are assuming a VA loan, it belongs in the first conversation, not the last one.
            </p>

            <h2 style={styles.h2}>How you actually find one</h2>

            <p style={styles.bodyP}>
              They are almost never advertised. A few listings mention it in the remarks. Most do not, usually because
              nobody asked.
            </p>

            <p style={styles.bodyP}>
              So you work backwards. Houses bought or refinanced between about 2020 and early 2022 are the ones
              carrying the low rates. Your agent asks the listing agent two questions: what kind of loan is on it, and
              would the seller consider an assumption. That is it. Most agents never ask, which is exactly why there is
              room here.
            </p>

            <p style={styles.bodyP}>
              One timing warning. The servicer processes an assumption, not a local loan officer, and servicers are not
              built for speed. Plan on longer than a normal closing and write it into the contract. If a seller has to
              be out in three weeks, this is not the house.
            </p>

            <h2 style={styles.h2}>Where this really matters</h2>

            <p style={styles.bodyP}>
              If you are renting and doing the math every January on whether this is the year, an assumption is the
              one structure that can put a payment in reach that a new loan cannot. It is also how people move up a
              step at a time: out of a mobile home into a condo, out of a condo into a house, each time keeping a
              payment they can actually carry.
            </p>

            <p style={styles.bodyP}>
              And there are more candidates right now than there have been in years. There are{' '}
              <strong>3,071 active listings in Snohomish County</strong> as of this week, against 424 in March 2024.
              Sellers are negotiating again. A seller sitting on a 3% FHA loan and ninety days of market time has a
              reason to listen.
            </p>

            <h2 style={styles.h2}>What I would do first</h2>

            <p style={styles.bodyP}>
              Talk to a lender before you fall in love with a house, because an assumption has to be underwritten like
              any other loan and you want to know what you qualify for on both paths. Then send me the houses you
              like. I will find out what loan is on each one, which is a phone call, and we will know in a day whether
              there is anything there.
            </p>

            <p style={styles.bodyP}>
              And when you do find one, the house is usually older, because the low-rate years skew that way. That is
              the part I am not worried about. My husband Brien is a general contractor, and his company SMART Building
              Services is the other half of how we work. He will walk it with you and tell you what the roof and the
              kitchen actually cost before you write the offer, not after.
            </p>

            <TextMeAsk
              page="assumable-mortgage"
              question="Send me a house you like and I will find out what loan is on it. Leave your number and I will text you back."
            />

            <p style={styles.note}>
              This is general information from a real estate broker, not lending advice, and nothing here is an offer
              of credit. Assumption rules are set by FHA, the VA, USDA and the loan servicer, and they change. Your
              lender and the servicer decide what is possible on a specific loan. Rate figures are Freddie Mac&rsquo;s
              Primary Mortgage Market Survey for the week of October 1, 2026. The payment examples above are
              illustrations only and are not a specific property or a quote.
            </p>

            <p style={styles.bodyP}>
              <Link href="/blog/down-payment-assistance-snohomish-county" style={styles.link}>
                If this is your first house, read the down payment assistance piece next
              </Link>
              . There is help in this state that most people never hear about, and it stacks with everything above.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
