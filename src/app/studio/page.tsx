'use client';

import Link from 'next/link';
import {
  StudioHeader,
  pageStyle,
  shellStyle,
  eyebrowStyle,
  h1Style,
  h2Style,
  h3Style,
  bodyStyle,
  cardStyle,
  buttonStyle,
} from './shared';

/*
  Community Spotlight series home.
  Lists every conversation and explains the series. Guests get links
  to their own conversation pages; this page is the front door.
  See the audience note in shared.tsx before editing copy.
*/

interface ConversationEntry {
  number: number;
  guest: string;
  guestRole: string;
  recorded: string;
  summary: string;
  href: string;
}

const CONVERSATIONS: ConversationEntry[] = [
  {
    number: 1,
    guest: 'Stephanie Galindo',
    guestRole: 'ADHD coach · ADHD with Stephanie · adhdwithstephanie.com',
    recorded: 'Recorded June 26, 2026',
    summary:
      'Kim and Stephanie on the human side of a big move: stress, anxiety, and why moving is an executive-function marathon. Stephanie brings the mindset tools, Kim brings 17 years of walking people through it.',
    href: '/studio/stephanie-and-kim',
  },
];

const WHY_CARDS: { title: string; body: string }[] = [
  {
    title: 'People hire the person they feel they already know',
    body: 'Nobody hires a broker, or a coach, off a 30-second clip. They hire the person they trust. That quality is invisible in a headshot and undeniable in a 20-minute conversation. A recorded conversation is that trust, packaged, working while you sleep.',
  },
  {
    title: 'One hour becomes a month of content',
    body: 'From one sitting we get 8 to 12 short clips, 2 to 3 blog posts, newsletter material, Google Business posts, and quote graphics, for both people on the recording. The hard part is already done. Everything on these pages came out of an hour already spent.',
  },
  {
    title: 'Every conversation is a two-way introduction',
    body: 'Kim’s audience meets the guest. The guest’s audience meets Kim. Both walk away with a month of content and a working relationship on the record. Over ten conversations, that adds up to a real network of local professionals who know each other, trust each other, and send people to each other.',
  },
  {
    title: 'AI search runs on your words',
    body: 'When someone asks Google or ChatGPT "should I renovate before selling in Snohomish County," the answers get lifted from real people answering real questions in their own words. Every transcript we publish feeds that machine with your voice instead of someone else’s.',
  },
  {
    title: 'Nobody local can copy this',
    body: 'No other Snohomish County broker has a conversation series. Best Realtor 2023 and 2024 plus a show is a position nobody can catch up to quickly. And media begets media: the Daily Herald features people who are already producing.',
  },
];

const GUEST_STEPS: { step: string; detail: string }[] = [
  {
    step: 'Say yes',
    detail: 'A short intake form, then we book twenty minutes on your calendar. That is the whole ask.',
  },
  {
    step: 'Have a conversation',
    detail: 'Recorded remotely on Riverside, no scripts, no prep. Rachael runs the tech and edits herself out. It feels like coffee with Kim, because that is what it is.',
  },
  {
    step: 'Get everything',
    detail: 'Your own page like the ones below: the full video, short clips, captions written for your channels, and the transcript. All yours to use on your own marketing, forever.',
  },
];

export default function StudioPage() {
  return (
    <div style={pageStyle}>
      <StudioHeader />

      <div style={shellStyle}>
        {/* Hero */}
        <section style={{ padding: '64px 0 24px', maxWidth: 720 }}>
          <div style={eyebrowStyle}>A series by Kim Pelham</div>
          <h1 style={h1Style}>Community Spotlight</h1>
          <p style={{ ...bodyStyle, fontSize: 17, margin: 0 }}>
            Real conversations with the people who make Snohomish County work: coaches, inspectors, lenders,
            small business owners, past clients, neighbors. One relaxed 20-minute recording becomes a month
            of content for everyone in the room. Each conversation gets its own page below, shared by Kim
            and her guest.
          </p>
        </section>

        {/* Why Kim is doing this, in her words */}
        <section style={{ padding: '40px 0 8px' }}>
          <div style={{ ...cardStyle, maxWidth: 720, padding: '32px 36px', borderLeft: '4px solid var(--color-clay)' }}>
            <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: 26, color: 'var(--color-clay)', marginBottom: 14 }}>
              why I&apos;m doing this
            </div>
            <p style={{ ...bodyStyle, fontSize: 15.5, marginTop: 0 }}>
              After 17 years of selling homes, I know the truth: nobody moves because of a house. They
              move because life changed. And the people who help them through it, the coaches, the lenders,
              the contractors, the small business owners, are the ones who make this county work. They
              deserve a bigger spotlight, and honestly, I learn something every single time.
            </p>
            <p style={{ ...bodyStyle, fontSize: 15.5 }}>
              So here is how it works. About once a month I sit down with someone for twenty minutes, no
              script, and we just talk. My team turns that one conversation into clips, an article, and
              ready-to-post content for both of us. My guest gets everything we make, free, to use however
              they like. I get to introduce my people to theirs. That is the whole model.
            </p>
            <p style={{ ...bodyStyle, fontSize: 15.5, marginBottom: 0 }}>
              It costs my guest twenty minutes and nothing else. If you know someone I should sit down with,
              I am keeping a list.
            </p>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: 30, color: 'var(--color-forest)', margin: '18px 0 0' }}>
              Always, Kim
            </p>
          </div>
        </section>

        {/* Conversations */}
        <section style={{ padding: '40px 0' }}>
          <div style={eyebrowStyle}>The conversations</div>
          <h2 style={h2Style}>Every recording, one page each</h2>
          <div style={{ display: 'grid', gap: 16, maxWidth: 780 }}>
            {CONVERSATIONS.map((c) => (
              <div key={c.href} style={cardStyle}>
                <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-clay)', fontWeight: 700, marginBottom: 8 }}>
                  Conversation No. {c.number} · {c.recorded}
                </div>
                <h3 style={{ ...h3Style, fontSize: 24, marginBottom: 4 }}>{c.guest} x Kim Pelham</h3>
                <div style={{ fontSize: 13.5, color: 'var(--color-text-muted)', marginBottom: 10 }}>{c.guestRole}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-light)', margin: '0 0 16px' }}>
                  {c.summary}
                </p>
                <Link href={c.href} style={buttonStyle}>
                  Open this conversation
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why */}
        <section style={{ padding: '40px 0' }}>
          <div style={eyebrowStyle}>The honest answer</div>
          <h2 style={h2Style}>Why we record conversations</h2>
          <p style={{ ...bodyStyle, maxWidth: 720, marginTop: 0 }}>
            A fair question, so here is the plain answer. This is not a marketing channel. It is a content
            factory and a relationship engine that happens to be a good conversation, and it works the same
            way for everyone in the room.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginTop: 20,
            }}
          >
            {WHY_CARDS.map((card, i) => (
              <div key={card.title} style={cardStyle}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 30,
                    fontWeight: 700,
                    color: 'var(--color-clay)',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={h3Style}>{card.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-light)', margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* For future guests */}
        <section style={{ padding: '24px 0 8px' }}>
          <div style={eyebrowStyle}>Thinking about being a guest?</div>
          <h2 style={h2Style}>How it works</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {GUEST_STEPS.map((s, i) => (
              <div key={s.step} style={cardStyle}>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-clay)',
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Step {i + 1}
                </div>
                <h3 style={h3Style}>{s.step}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-light)', margin: 0 }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <section style={{ marginTop: 48, borderTop: '1px solid var(--color-border)', paddingTop: 28 }}>
          <p style={{ ...bodyStyle, fontSize: 15, margin: 0, maxWidth: 720 }}>
            Know someone who belongs in this series? A trade partner, a past client, a local business worth
            talking about? Tell Kim, or text Rachael, and we will take it from there. One recording a month
            is the target.
          </p>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: 24, color: 'var(--color-forest)', marginTop: 16 }}>
            The Savvy Digital Co.
          </p>
        </section>
      </div>
    </div>
  );
}
