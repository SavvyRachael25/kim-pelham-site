'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  handwritten: {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '1.75rem',
    color: 'var(--color-clay)',
    margin: '40px 0 18px',
    lineHeight: 1.1,
  } as const,
  pullQuote: {
    fontFamily: 'var(--font-heading)',
    fontStyle: 'italic',
    fontSize: '1.5rem',
    color: 'var(--color-forest)',
    borderLeft: '4px solid var(--color-clay)',
    paddingLeft: '24px',
    margin: '32px 0',
    lineHeight: 1.45,
  } as const,
  signOff: {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '2.5rem',
    color: 'var(--color-forest)',
    margin: '48px 0 0',
    lineHeight: 1,
  } as const,
  byline: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#777',
    margin: '6px 0 0',
    lineHeight: 1.5,
  } as const,
  ctaBox: {
    background: 'var(--color-cream)',
    border: '1px solid var(--color-border)',
    borderRadius: 8,
    padding: '28px 32px',
    margin: '48px 0 0',
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '12px 22px',
    borderRadius: 4,
    textDecoration: 'none',
    marginTop: '14px',
  } as const,
};

export default function MovingWithAdhdPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Moving With ADHD: Why It Feels So Hard, and What Actually Helps"
          subtitle="By Kim Pelham, with ADHD coach Stephanie Galindo · July 6, 2026 · 6 min read"
          image="/images/hero-03-porch-connection.jpg"
          imageAlt="Two neighbors talking on a front porch in warm light."
        />

        <article style={{ padding: '72px 20px 96px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>

            <p style={{ ...styles.bodyP, fontWeight: 600, color: 'var(--color-forest)' }}>
              This is the first conversation in my Community Spotlight series, and it starts with a question
              I hear in some form every single month: why does moving feel so impossible? I sat down with
              Stephanie Galindo, an ADHD coach here in Snohomish County, and she gave me the best answer I
              have ever heard.
            </p>

            <p style={styles.bodyP}>
              Stephanie and I met years ago in a local women&apos;s networking group, the kind where people
              actually root for each other. Her work centers on people with ADHD, and she came to it the way
              the best coaches do: through her own story. Shame, she told me, was the thing she was meant to
              erase from people&apos;s lives, because she had carried so much of it herself.
            </p>

            <p style={styles.handwritten}>
              there is no box called normal
            </p>

            <p style={styles.bodyP}>
              The first thing Stephanie reframed for me is the idea of neurotypes as boxes. There is no ADHD
              box, autism box, and normal box, she explained. There is a huge range of human neurology, and
              a society that changed faster than our brains did. For most of human history, our brains were
              well matched to the lives we lived. Then, in a few hundred years, the expectations flipped:
              sit down, be quiet, manage forty open browser tabs of obligations. Only certain neurotypes
              find that an easy lift.
            </p>

            <div style={styles.pullQuote}>
              &ldquo;I don&apos;t consider the ADHD itself to be disabling so much as the way society&apos;s
              expectations are built. That is what disables people who are not neurotypical.&rdquo;
            </div>

            <p style={styles.bodyP}>
              And the shame piece runs deeper than most people realize. Kids with ADHD get corrected far
              more often than their peers, so many absorb the message that something is wrong with them.
              Stephanie calls that shame the water they swim in. Here is the part that stopped me: shame
              measurably decreases executive function and working memory. The very skills you need to
              manage ADHD are the ones shame takes away. Her work starts with what she calls unshaming, and
              everything else follows from there.
            </p>

            <p style={styles.handwritten}>
              why moving hits an ADHD brain so hard
            </p>

            <p style={styles.bodyP}>
              Here is where her world and mine collide. Stephanie says people usually manage their ADHD
              fine until one more thing happens: postpartum, menopause, a health scare, an overwhelming
              season. And one of the biggest &ldquo;one more things&rdquo; on her list is moving.
            </p>

            <p style={styles.bodyP}>
              The reason is beautifully specific. An ADHD brain spends years building pathways for daily
              life: where things live, which drawer, which route, which routine. Those pathways were
              expensive to build, and a move erases all of them at once. Suddenly every small step requires
              active thinking. Which box. Which room. Where did I put it. Add the decision fatigue of
              choosing what to do with every single object you own, and the load gets enormous.
            </p>

            <div style={styles.pullQuote}>
              &ldquo;Moving takes months. It is not just the act of doing it. It is all the lead-up of
              stress, and then the settling back in can take up to a year.&rdquo;
            </div>

            <p style={styles.bodyP}>
              Up to a year to feel like yourself again. Nobody tells you that. If you have ever moved and
              wondered why you were still living out of boxes and running on fumes months later, you were
              not failing. You were rebuilding every pathway at once.
            </p>

            <p style={styles.handwritten}>
              a tool you can try right now
            </p>

            <p style={styles.bodyP}>
              Stephanie keeps what she calls an ADHD first aid kit: four nervous system regulation tools for
              the moments when you are too worked up to think. She taught me one on the spot. Take a pen or
              your phone, hold it in one hand, and pass it rhythmically back and forth across the middle of
              your body, hand to hand. She explained that anxiety tends to overactivate one part of the
              brain, and crossing the midline like this forces other parts to light up. It untethers you
              from the spiral just enough to think about what you would like to do next, instead of sitting
              in a bundle of anxiety. Simple, free, and you can do it in the car before a showing.
            </p>

            <p style={styles.bodyP}>
              She also shared a piece of brain chemistry I keep thinking about. ADHD conversations usually
              revolve around dopamine, the chemical that gives you the oomph to act. But serotonin and
              oxytocin, the connection chemicals, can drive action too. That is why body doubling works:
              having another person in the room while you pack or sort leans on connection instead of
              dopamine you may not have that day. Packing with a friend is not a crutch. It is chemistry.
            </p>

            <p style={styles.handwritten}>
              where her work meets mine
            </p>

            <p style={styles.bodyP}>
              Stephanie said something in our conversation that I will carry for a long time: that I take
              care of my clients emotionally while walking them through the sale, and that this is where
              her work and mine connect. It is the whole reason the Home Transition Team exists. The
              downsizing decisions, the packing, the repairs, the staging, even cleaning out the
              refrigerator: we built the team to carry the load that a move dumps on a person all at once.
              After hearing Stephanie explain what that load does to an ADHD brain, I understand better
              than ever why the families who need us most are the ones who feel stuck.
            </p>

            <p style={styles.bodyP}>
              One more thing worth passing along. If you suspect you have ADHD but have never been
              diagnosed, Stephanie&apos;s take is refreshingly practical: if a tool is accommodating to
              people with ADHD, it will probably help you too. Borrow freely. Add ease to your life
              wherever you find it.
            </p>

            <p style={styles.handwritten}>
              why a broker has a conversation series
            </p>

            <p style={styles.bodyP}>
              Community Spotlight is new, so here is the why. After 17 years of selling homes here, I know
              that nobody moves because of a house. They move because life changed. And the people who help
              them through it, the coaches, the lenders, the contractors, the small business owners, are
              the ones who make Snohomish County work. They deserve a bigger spotlight, and I learn
              something every single time. About once a month, I sit down with one of them for twenty
              minutes, no script, and we just talk. If you know someone who belongs in this series, tell
              me. I am keeping a list.
            </p>

            <p style={styles.handwritten}>
              find stephanie
            </p>

            <p style={styles.bodyP}>
              Stephanie Galindo coaches at{' '}
              <a href="https://adhdwithstephanie.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>
                adhdwithstephanie.com
              </a>
              , where you can also find her nervous system regulation toolkit. She runs a weekly coaching
              cohort built around exactly the unshaming work she described to me: a small group that meets
              every Monday and starts the week with acceptance instead of a to-do list. Her approach is
              called Shame-Free ADHD, and after an hour with her, I can tell you the name is the whole
              philosophy. Clips from our full conversation are rolling out on my social channels now.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem', color: 'var(--color-clay)', margin: '0 0 6px 0', lineHeight: 1.1 }}>
                if the ADHD part hit home,
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                Go see Stephanie.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', margin: 0, lineHeight: 1.65 }}>
                She coaches entrepreneurs and professionals with ADHD, completely shame-free, and her site has
                the free nervous system toolkit she mentioned in our conversation. Tell her Kim sent you.
              </p>
              <a
                href="https://adhdwithstephanie.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.ctaButton}
              >
                Visit adhdwithstephanie.com →
              </a>
            </div>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem', color: 'var(--color-clay)', margin: '0 0 6px 0', lineHeight: 1.1 }}>
                if moving is your &ldquo;one more thing,&rdquo;
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                The Home Transition Team carries the load.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', margin: 0, lineHeight: 1.65 }}>
                Downsizing decisions, packing, repairs, staging, and the sale itself, handled by one team so
                you are not rebuilding every pathway alone. No pitch, no pressure. Just real help.
              </p>
              <Link href="/home-transition-team" style={styles.ctaButton}>
                Meet the team →
              </Link>
            </div>

            <p style={styles.signOff}>Always, Kim</p>
            <p style={styles.byline}>
              Kim Pelham, Designated Broker, The Pelham Group NW · 17 years in Snohomish County · <a href="tel:+14252509422" style={{ color: 'var(--color-clay)' }}>425.250.9422</a>
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
