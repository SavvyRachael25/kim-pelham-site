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
  list: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
    paddingLeft: '24px',
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
    question: 'How do I keep my home show-ready while still living in it?',
    answer:
      'Handle little things as you go instead of cleaning the whole house before every showing. Small habits make the difference: make the bed when you get up, put clothes away when you take them off, load dishes straight into the dishwasher, and reset each room for one minute before you leave it. A minute here and there prevents a 20-minute whole-house pickup later.',
  },
  {
    question: 'How long does it take to get a staged home ready for a showing?',
    answer:
      'If you have been doing small resets throughout the day, preparing for a showing is mostly a quick final walk-through. Each item on the final checklist takes 30 seconds to 2 minutes: beds and bedroom floors, bathroom counters and towels, kitchen counters and dishes, garbage out, living areas straightened, lights on, blinds open, and one last look on your way out the door.',
  },
  {
    question: 'What is the biggest time-saver when living in a staged home?',
    answer:
      'The "Don\'t Put It Down, Put It Away" rule. Most showing preparation comes from picking up things that were left out earlier. Whenever possible, put something where it belongs the first time. Thirty seconds now can save several minutes later.',
  },
  {
    question: 'What should I do about pets before a showing?',
    answer:
      'Keep leashes, toys, treats, and supplies together in one basket or cabinet so they tuck away quickly. Keep food and water areas clean, stay ahead of litter boxes and pet waste, and take pets with you during showings whenever possible. Buyers notice pet odors much more quickly than the people who live in the home do.',
  },
  {
    question: 'Should I use air fresheners before a showing?',
    answer:
      'No. Fresh, clean air is best, so avoid strong air fresheners or fragrances. Do a quick odor and temperature check before you leave: take out kitchen and bathroom garbage that can create odors you may no longer notice, and make sure the home is at a comfortable temperature.',
  },
];

export default function LivingInAStagedHomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Living in a Staged Home"
          subtitle="By Kim Pelham · August 20, 2026 · 6 min read"
          image="/images/mukilteo-04-great-room.jpg"
          imageAlt="A staged great room in a Snohomish County home"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              Simple habits that keep your home show-ready without taking over your life.
            </p>
            <p style={styles.bodyP}>
              Living in a home while it&apos;s on the market can be stressful. You&apos;re still working, cooking, getting ready in the morning, managing family life, and preparing to move at the same time.
            </p>
            <p style={styles.bodyP}>
              Here are some suggested steps to help keep the home show-ready. The easiest approach is to handle little things as you go rather than having to clean up the entire house before a showing. Here are some simple habits that can make a big difference.
            </p>

            <h2 style={styles.h2}>Bedroom</h2>
            <p style={styles.bodyP}>
              <b>Make the bed as soon as you get up (less than 1 minute).</b> Get out of bed, turn around, pull or flip the covers back into place, straighten the pillows, and you&apos;re done. It doesn&apos;t have to be perfect. It just needs to look neat.
            </p>
            <p style={styles.bodyP}>
              <b>Put clothes away immediately (1 minute).</b> When you get undressed: dirty clothes go in the hamper, clean clothes go in the closet or drawer, and shoes go in the closet. Taking a minute now saves 10 minutes of picking things up later.
            </p>
            <p style={styles.bodyP}>
              <b>Keep nightstands clear (30 seconds).</b> Glasses, medications, charging cords, books and other personal items can quickly make a room look cluttered. Give them a drawer, basket or other designated spot.
            </p>

            <h2 style={styles.h2}>Bathroom</h2>
            <p style={styles.bodyP}>
              <b>Use a personal-care basket (1 minute).</b> Keep the things you use every day (toothbrush, toothpaste, makeup, hair products, medications) together in a basket or small bin under the sink. When you&apos;re getting ready, pull out the basket and put it on the counter. When you&apos;re finished, everything goes back into the basket and under the sink. One trip instead of putting away a dozen individual items.
            </p>
            <p style={styles.bodyP}>
              <b>Quick counter check (30 seconds).</b> Wipe the counter and sink, straighten the hand towel and close the toilet lid.
            </p>
            <p style={styles.bodyP}>
              <b>Hang towels neatly (15 seconds).</b> A neatly hung towel makes the entire bathroom look more put together.
            </p>

            <h2 style={styles.h2}>Kitchen</h2>
            <p style={styles.bodyP}>
              <b>Use the dishwasher instead of the sink (30 seconds).</b> Rather than setting a dirty dish in the sink &quot;for later,&quot; rinse it and put it directly into the dishwasher.
            </p>
            <p style={styles.bodyP}>
              <b>Clear the counters as you go (1 to 2 minutes).</b> Food, mail, grocery bags and everyday items can accumulate quickly. Put them away when you&apos;re finished with them rather than creating a cleanup project for later.
            </p>
            <p style={styles.bodyP}>
              <b>Do a quick kitchen reset after meals (3 to 5 minutes).</b> Load the dishwasher, wipe the counters and table, and put food away. The kitchen is now essentially ready for a showing.
            </p>

            <h2 style={styles.h2}>Living Areas</h2>
            <p style={styles.bodyP}>
              <b>The one-minute room reset.</b> Before leaving a room: straighten pillows, fold or put away blankets, take cups and dishes to the kitchen, and pick up anything that doesn&apos;t belong there. A minute here and there can prevent a 20-minute whole-house pickup later.
            </p>
            <p style={styles.bodyP}>
              <b>Have a home for everyday clutter.</b> Use an attractive basket, drawer or cabinet for remotes, chargers, paperwork, toys and other things you use regularly. You don&apos;t need to stop living in your home. Everyday items just need an easy place to disappear when a showing is scheduled.
            </p>

            <h2 style={styles.h2}>Entry and Shoes</h2>
            <p style={styles.bodyP}>
              <b>Shoes go away when they come off (30 seconds).</b> Keep the pair you&apos;re currently wearing accessible and put the others in the closet.
            </p>
            <p style={styles.bodyP}>
              <b>Keep the entry clear (1 minute).</b> Mail, packages, bags, coats and other items tend to collect near the door. Putting them away as you come in keeps one of the first areas buyers see looking clean and welcoming.
            </p>

            <h2 style={styles.h2}>Pets</h2>
            <p style={styles.bodyP}>
              <b>Create one spot for pet supplies (1 to 2 minutes).</b> Keep leashes, toys, treats and other supplies together in a basket or cabinet so they can be quickly tucked away.
            </p>
            <p style={styles.bodyP}>
              Keep food and water areas clean, and stay ahead of litter boxes and pet waste. Buyers notice pet odors much more quickly than people who live in the home do.
            </p>

            <h2 style={styles.h2}>The &quot;Don&apos;t Put It Down, Put It Away&quot; Rule</h2>
            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                This is probably the biggest time-saver of all. Most showing preparation comes from having to pick up things that were left out earlier. Whenever possible, put something where it belongs the first time. 30 seconds now can save several minutes later.
              </p>
            </div>

            <h2 style={styles.h2}>When a Showing Is Scheduled: The Final Check</h2>
            <p style={styles.bodyP}>
              If you&apos;ve been doing the small resets throughout the day, preparing for a showing should mostly be a quick final walk-through. The goal is to make the home feel clean, bright and welcoming when buyers arrive.
            </p>
            <ul style={styles.list}>
              <li><b>Make the beds and check bedroom floors</b> (1 to 2 minutes). Straighten pillows and make sure clothes, shoes and personal items are put away.</li>
              <li><b>Reset the bathrooms</b> (1 minute). Clear the counters, straighten towels and close toilet lids.</li>
              <li><b>Clear the kitchen</b> (1 to 2 minutes). Put dishes in the dishwasher, clear and wipe the counters and sink, and tuck away dish soap, sponges and cleaning supplies.</li>
              <li><b>Take out the garbage</b> (1 to 2 minutes). Kitchen and bathroom garbage can create odors that you may no longer notice because you live in the home.</li>
              <li><b>Straighten the living areas</b> (1 minute). Fluff pillows, straighten throws, push in chairs and put away anything that has wandered from its staged location.</li>
              <li><b>Check the floors</b> (1 to 2 minutes if needed). Quickly sweep or vacuum any obvious crumbs, dirt or pet hair.</li>
              <li><b>Tuck away personal items and valuables</b> (1 minute). Put away medications, jewelry, paperwork, mail, chargers and other private items.</li>
              <li><b>Handle pet items</b> (1 minute). Put away toys, food bowls, beds and litter boxes when practical, and take pets with you whenever possible.</li>
              <li><b>Check the entry</b> (30 seconds). Pick up shoes, packages, bags or anything else near the front door. Remember, this is the buyer&apos;s first impression.</li>
              <li><b>Turn on ALL the lights</b> (1 minute). Turn on lamps, overhead lights, under-cabinet lighting and other interior lights. A well-lit home feels brighter and more inviting.</li>
              <li><b>Open the blinds and curtains</b> (1 minute). Let in as much natural light as possible and straighten blinds so they look neat.</li>
              <li><b>Do a quick odor and temperature check</b> (30 seconds). Fresh, clean air is best. Avoid strong air fresheners or fragrances, and make sure the home is at a comfortable temperature.</li>
              <li><b>One last walk-through on your way out</b> (1 minute). Look at the home as though you are the buyer walking in for the first time. The little things that need attention will usually catch your eye immediately.</li>
            </ul>

            <h2 style={styles.h2}>One Last Thought</h2>
            <p style={styles.bodyP}>
              Your home does not have to look perfect every minute of every day. You still have to live there.
            </p>
            <p style={styles.bodyP}>
              The goal is simply to create small habits that make it easy to return the house to its staged condition. A few 30-second and one-minute tasks throughout the day can mean the difference between scrambling before every showing and simply doing a quick walk-through before heading out the door.
            </p>
            <p style={styles.bodyP}>
              And remember: this is temporary. Every showing is one more opportunity to find the buyer who will allow you to move on to your next home.
            </p>
            <p style={styles.bodyP}>
              If you&apos;re wondering how a home gets staged around real life in the first place, that story is here:{' '}
              <Link href="/blog/staging-occupied-homes-nine-years" style={styles.link}>
                Nine Years of Staging Homes People Still Live In
              </Link>
              .
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Thinking about selling and dreading the showings?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                I stage my listings myself, including occupied homes, and I hand every seller this exact plan. Start with a free home equity report and an honest conversation.
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

        <FAQSection title="Living in a staged home: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
