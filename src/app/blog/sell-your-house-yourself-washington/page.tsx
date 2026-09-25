'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import TextMeAsk from '@/components/TextMeAsk';

/*
  Written from Kim's own words on the September 24, 2026 call (transcript in
  Kim/calls/). Voice model is the Daily Herald post: short sentences, plain
  words, her exclamation points, "That's all I got for now."

  PENDING KIM: the seller quote is real but unattributed. She approves it, or
  it comes out.
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
};

export default function SellYourHouseYourselfPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Can You Sell Your House Yourself in Washington?"
          subtitle="By Kim Pelham · September 29, 2026 · 4 min read"
          image="/images/kim-with-client-on-couch.jpg"
          imageAlt="Kim Pelham talking with a client at home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={styles.bodyP}>
              Yes. And I will help you do it, which surprises people.
            </p>

            <p style={styles.bodyP}>
              Most agents will tell you not to sell your own house. I am not going to do that. Sometimes it is the right
              call. You already have a buyer. It is a family sale. You have done it before and you are not afraid of the
              paperwork. In those cases you should not be paying a full commission, and I would rather help you than watch
              you do it alone.
            </p>

            <p style={styles.bodyP}>
              So here is how it actually works, and the one thing about Washington that almost nobody knows until they are
              already in it.
            </p>

            <h2 style={styles.h2}>The thing about Zillow</h2>

            <p style={styles.bodyP}>
              If you sold a house by owner a few years ago, you probably put it on Zillow yourself. You cannot do that
              here any more.
            </p>

            <p style={styles.bodyP}>
              Zillow is a member of our MLS now, and in Washington State that means they do not take for sale by owner
              listings. Other states still allow it. Ours does not. So the biggest website buyers use, the one everybody
              searches first, is closed to you unless your house is in the MLS.
            </p>

            <p style={styles.bodyP}>
              I have watched people find this out on day two, after the sign is already in the yard. It is not a small
              thing. It is most of your buyers.
            </p>

            <h2 style={styles.h2}>What I can do instead</h2>

            <p style={styles.bodyP}>
              I have two ways to help, and neither one is a full listing.
            </p>

            <p style={styles.bodyP}>
              <strong>Paperwork only, 1%.</strong> If you already have your buyer and you just do not want to handle the
              contracts, the disclosures, the deadlines and the closing, I will do all of that part. You found the buyer.
              You keep the rest.
            </p>

            <p style={styles.bodyP}>
              <strong>A limited service listing.</strong> This is an a la carte menu. You pick what you want. It can be as
              little as getting the house into the MLS so it shows up on Zillow and everywhere else, or you can add pieces
              on: photography, a lockbox, a sign, showing help, staging. You pay for the parts you choose, up front, and
              you do the rest yourself.
            </p>

            <p style={styles.bodyP}>
              Both of these are real services with real paperwork behind them, and they go through my brokerage, Katrina
              Eileen, the same as any other transaction.
            </p>

            <TextMeAsk
              question="Thinking about selling it yourself?"
              page="sell-your-house-yourself-washington"
            />

            <h2 style={styles.h2}>What usually happens</h2>

            <p style={styles.bodyP}>
              I will tell you honestly what I see, because I just went through it again this month.
            </p>

            <p style={styles.bodyP}>
              A family I have worked with before wanted to sell their house themselves. They had done it once already,
              with his dad&rsquo;s house, when his dad was moving into assisted living. That one went fine. I did the
              paperwork for 1% and they handled the rest.
            </p>

            <p style={styles.bodyP}>
              This time it was their own house, and it was harder. They could not get on Zillow. So we put it up as a
              limited service listing. They held their own open house. They got a couple of showings and then it went
              quiet. They have a deadline, because they are retiring and moving out of state, and she was getting really
              stressed about it.
            </p>

            <p style={styles.bodyP}>
              The market is the reason. It is not three years ago. Buyers have a lot of choices right now and they are
              being careful, and a house that is not presented well just gets scrolled past.
            </p>

            <p style={styles.bodyP}>
              So we started over. We cancelled the limited listing and I took it on properly. I staged it, which was a
              light stage because half their furniture is already in Idaho. Professional photos. A 3D tour. And we
              relaunched it.
            </p>

            <p style={styles.bodyP}>She came home and saw the staging and said this:</p>

            <blockquote style={styles.quote}>
              &ldquo;I love the decor. It&rsquo;s crazy how it changes the whole dynamics of the house.&rdquo;
              <cite style={styles.cite}>The seller, after the first walk-through</cite>
            </blockquote>

            <p style={styles.bodyP}>
              That is the part that is hard to explain before you see it. Your house is set up for living in. It is not
              set up for selling. Those are two completely different things, and it is not about your taste. It is about
              how a stranger moves through a room.
            </p>

            <h2 style={styles.h2}>One more thing we changed, and it matters</h2>

            <p style={styles.bodyP}>
              The first time around they were not offering to pay the buyer&rsquo;s agent. When we relaunched, they were.
            </p>

            <p style={styles.bodyP}>
              Here is why that matters more than people expect. A buyer cannot finance their agent&rsquo;s commission. It
              is not part of the loan. So if you do not offer it, that is two and a half to three percent that the buyer
              has to come up with in cash, on top of a down payment, on top of closing costs.
            </p>

            <p style={styles.bodyP}>
              Houses are expensive and rates are over 7% right now. Ask a buyer to find another twenty thousand dollars in
              cash and they will not argue with you. They will just go look at the house down the street that does offer
              it. In this market there are plenty of those.
            </p>

            <h2 style={styles.h2}>So should you do it yourself?</h2>

            <p style={styles.bodyP}>
              If you have the buyer already, yes, and call me for the 1% and keep your money.
            </p>

            <p style={styles.bodyP}>
              If you need to find a buyer, go in knowing that Zillow is closed to you, that your house has to look better
              than it does right now, and that what you save on commission you may hand back in price and time on market.
              Some people do it well. I have seen it.
            </p>

            <p style={styles.bodyP}>
              And if you start down that road and it stops working, call me then. That is not a failure. It is just
              information, and we can switch it over in a few days.
            </p>

            <p style={styles.bodyP}>That&rsquo;s all I got for now.</p>

            <p style={{ ...styles.bodyP, fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: 'var(--color-clay)' }}>
              Kim
            </p>

            <p style={{ ...styles.bodyP, fontSize: '1rem' }}>
              Questions about your own place? Text or call me at{' '}
              <a href="tel:+14252509422" style={{ ...styles.link, fontWeight: 600 }}>425-250-9422</a>. I answer my own
              phone. Or read{' '}
              <Link href="/blog/first-72-hours" style={styles.link}>what the first 72 hours of a listing look like</Link>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
