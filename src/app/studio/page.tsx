'use client';

import { useState } from 'react';
import Link from 'next/link';

/*
  The Community Spotlight Studio (private, shared with guests).
  ──────────────────────────────────────────────────────────────
  Every Community Spotlight recording lands here as ready-to-post
  assets: clip previews, per-platform captions with copy buttons,
  and direct downloads. Also carries the "why we record" explainer.

  AUDIENCE NOTE: Kim AND her guests both get this link. Every word
  on this page must read well to a guest (e.g. Stephanie). Keep the
  strategy framing two-way ("partnership", "introduction"), never
  extractive ("referral engine", "borrowed audience"). The blunt
  internal version of the strategy lives in Rachael's emails to Kim,
  not here.

  Not linked from the public nav. URL: /studio. noindex/nofollow is
  set in layout.tsx, robots.txt also disallows /studio/.

  Brand tokens come from globals.css (--color-forest, --color-clay, etc).
  New episodes: append to EPISODES below, drop assets in /public/podcast/.
*/

// ---------------- Types ----------------

interface Caption {
  platform: string;
  note: string;
  text: string;
}

interface Clip {
  slug: string;
  title: string;
  duration: string;
  videoSrc: string;
  downloadName: string;
  description: string;
  captions: Caption[];
  transcript: { speaker: string; text: string }[];
}

interface Episode {
  number: number;
  guest: string;
  guestRole: string;
  guestBusiness: string;
  recorded: string;
  summary: string;
  clips: Clip[];
  stillComing: string[];
}

// ---------------- Episode data ----------------

const EPISODES: Episode[] = [
  {
    number: 1,
    guest: 'Stephanie Galindo',
    guestRole: 'ADHD and mindset coach',
    guestBusiness: 'Stephanie Galindo Coaching',
    recorded: 'Recorded June 26, 2026',
    summary:
      'Your first Community Spotlight conversation. Kim and Stephanie talk about the human side of a big move: stress, anxiety, and why moving is an executive-function marathon. Stephanie brings the mindset tools, Kim brings the lived experience of walking people through it.',
    clips: [
      {
        slug: 'beyond-the-boxes',
        title: 'Beyond the Boxes',
        duration: 'About 1 minute',
        videoSrc: '/podcast/episode-02/adhd-beyond-the-boxes.mp4',
        downloadName: 'pelham-spotlight-stephanie-beyond-the-boxes.mp4',
        description:
          'Stephanie reframes the whole idea of "normal" brains: there is no ADHD box, autism box, and neurotypical box. There is a huge range of neurology, and a world that only recently started demanding everyone sit down and be quiet.',
        captions: [
          {
            platform: 'Instagram / TikTok',
            note: 'Post as a Reel. Tag Stephanie if she shares her handle.',
            text: `There is no one right way for a brain to work.

That is the first thing Stephanie Galindo taught me when we sat down for the first conversation in my Community Spotlight series. Stephanie is a local ADHD and mindset coach, and this minute reframed how I think about the boxes we ask people to live inside.

Full conversation coming soon. If you know someone in Snohomish County doing work worth talking about, I want to hear about them.

#SnohomishCounty #CommunitySpotlight #ADHD #Neurodivergent #PelhamGroupNW`,
          },
          {
            platform: 'Facebook',
            note: 'Warmer and longer works here. Tag Stephanie Galindo Coaching.',
            text: `I started something new and I am a little excited about it.

It is called Community Spotlight: real conversations with the people who make Snohomish County what it is. First up is Stephanie Galindo, an ADHD and mindset coach whose work I really admire.

In this clip she explains something that stuck with me: there is no ADHD box, autism box, and "normal" box. There is just a huge range of human neurology, and a modern world that suddenly expects everyone to sit down and be quiet.

The full conversation is coming soon. And if there is someone local you think I should sit down with next, tell me. I am keeping a list.

Always, Kim`,
          },
          {
            platform: 'LinkedIn',
            note: 'Lead with the professional angle.',
            text: `Moving is one of the biggest executive-function challenges most adults ever face. Nobody talks about it that way.

So I sat down with Stephanie Galindo, an ADHD and mindset coach here in Snohomish County, for the first conversation in my Community Spotlight series. In this clip she makes a point I keep coming back to: neurodivergence is not a set of boxes, it is a range. The world changed faster than our brains did.

After 17 years of walking people through moves, I can tell you the emotional and cognitive load is real. Featuring the local experts who help people carry it felt like the right place to start this series.

Full conversation coming soon.`,
          },
          {
            platform: 'Google Business Profile',
            note: 'Short and plain. No hashtags needed.',
            text: `New from Kim: the first conversation in her Community Spotlight series, featuring Stephanie Galindo, a local ADHD and mindset coach. They talk about the human side of a big move, including stress, anxiety, and why there is no one right way for a brain to work. The full conversation is coming soon. Have a question about buying or selling in Snohomish County? Kim answers her own phone.`,
          },
          {
            platform: 'For Stephanie’s channels',
            note: 'Written in your voice, Stephanie. Use it as is or make it yours.',
            text: `There is no ADHD box, autism box, and "normal" box. There is a huge range of human neurology, and a modern world that suddenly expects everyone to sit down and be quiet.

I got to unpack this with Kim Pelham of The Pelham Group NW for the first conversation in her Community Spotlight series. We talked about the human side of a big move: the stress, the anxiety, and why moving is one of the biggest executive-function challenges most adults ever face.

Full conversation coming soon. Thank you for the invitation, Kim.

@pelhamgroupnw #ADHD #Neurodivergent #ADHDCoach #SnohomishCounty`,
          },
        ],
        transcript: [
          {
            speaker: 'Stephanie Galindo',
            text: 'There isn’t ADHD and autism and neurotypical as these different boxes. We all have different neurology. Our neurology is completely different for different people, and there’s this huge range of how people operate and how their brain chemicals function.',
          },
          {
            speaker: 'Stephanie Galindo',
            text: 'What happens, though, is that our society has changed very, very rapidly in the last few hundred years, so what is expected of people is vastly different than what used to be expected. People used to be very well adapted to an agriculture-based lifestyle, and before that to hunter-gatherer expectations of how their brain would operate, and that worked well for people. Now we’re expecting people to sit down and be quiet, and there are only specific neurotypes where that is an easy lift.',
          },
          {
            speaker: 'Stephanie Galindo',
            text: 'That’s kind of the box we’ve put around neurotypical. And at this point, anyone who is neurodivergent is anyone who lives outside of that box.',
          },
        ],
      },
    ],
    stillComing: [
      'More short clips as the full session gets cut (target: 8 to 12 from this one hour)',
      'A blog post for thepelhamgroupnw.com built from the transcript',
      'A feature in The Pelham Post newsletter',
      'Pull-quote graphics for Instagram and LinkedIn',
      'The full video, audio-only version, and complete transcript, for both Kim and Stephanie',
    ],
  },
];

// ---------------- Why we do this ----------------

const WHY_CARDS: { title: string; body: string }[] = [
  {
    title: 'People hire the person they feel they already know',
    body: 'Nobody hires a broker, or a coach, off a 30-second clip. They hire the person they trust. Kim’s reviews say it over and over: "she listened," "she never sold us." That quality is invisible in a listing photo and undeniable in a 20-minute conversation. A recorded conversation is that skill, packaged, working while you sleep.',
  },
  {
    title: 'One hour becomes a month of content',
    body: 'From one sitting we get 8 to 12 short clips, 2 to 3 blog posts, newsletter material, Google Business posts, and quote graphics, for both people on the recording. The hard part is already done. Everything on this page came out of an hour already spent.',
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

const HOW_TO_STEPS: { step: string; detail: string }[] = [
  {
    step: 'Watch the clip',
    detail: 'Everything here has been edited and captioned. What you see is what posts.',
  },
  {
    step: 'Copy a caption',
    detail: 'Pick the platform you want, tap Copy, and it lands on your clipboard ready to paste.',
  },
  {
    step: 'Download and post',
    detail: 'The download button saves the video to your phone or computer. Post it wherever you like, whenever you like.',
  },
];

// ---------------- Styles ----------------

const pageStyle: React.CSSProperties = {
  background: 'var(--color-cream)',
  minHeight: '100vh',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-body)',
};

const shellStyle: React.CSSProperties = {
  maxWidth: 1060,
  margin: '0 auto',
  padding: '0 24px 96px',
};

const eyebrowStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-clay)',
  fontWeight: 700,
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 34,
  fontWeight: 700,
  color: 'var(--color-forest)',
  margin: '8px 0 16px',
  lineHeight: 1.15,
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid var(--color-border)',
  borderRadius: 12,
  padding: 24,
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  background: 'var(--color-clay)',
  color: '#fff',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 15,
  padding: '12px 24px',
  borderRadius: 2,
  border: 0,
  cursor: 'pointer',
  textDecoration: 'none',
};

const ghostButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: 'transparent',
  color: 'var(--color-forest)',
  border: '1px solid var(--color-forest)',
};

// ---------------- Components ----------------

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      style={{
        ...buttonStyle,
        background: copied ? 'var(--color-forest)' : 'var(--color-clay)',
        fontSize: 13,
        padding: '8px 16px',
      }}
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
    >
      {copied ? 'Copied' : 'Copy caption'}
    </button>
  );
}

function CaptionCard({ caption }: { caption: Caption }) {
  return (
    <div style={{ ...cardStyle, padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--color-forest)' }}>{caption.platform}</div>
          <div style={{ fontSize: 12.5, color: 'var(--color-text-muted)', marginTop: 2 }}>{caption.note}</div>
        </div>
        <CopyButton text={caption.text} />
      </div>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          fontSize: 14,
          lineHeight: 1.7,
          color: 'var(--color-text-light)',
          background: 'var(--color-cream)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          padding: 14,
          margin: 0,
        }}
      >
        {caption.text}
      </p>
    </div>
  );
}

function ClipSection({ clip }: { clip: Clip }) {
  const [showTranscript, setShowTranscript] = useState(false);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
      {/* Video preview */}
      <div style={{ flex: '0 1 300px', minWidth: 260 }}>
        <video
          controls
          preload="metadata"
          src={clip.videoSrc}
          style={{
            width: '100%',
            borderRadius: 12,
            border: '1px solid var(--color-border)',
            background: 'var(--color-dark)',
            display: 'block',
          }}
        />
        <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
          <a href={clip.videoSrc} download={clip.downloadName} style={buttonStyle}>
            Download this clip
          </a>
          <button style={ghostButtonStyle} onClick={() => setShowTranscript((v) => !v)}>
            {showTranscript ? 'Hide transcript' : 'Read transcript'}
          </button>
        </div>
      </div>

      {/* Clip details + captions */}
      <div style={{ flex: '1 1 460px', minWidth: 300 }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 26,
            fontWeight: 700,
            color: 'var(--color-forest)',
            margin: '0 0 4px',
          }}
        >
          {clip.title}
        </h3>
        <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12 }}>{clip.duration}</div>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-light)', marginTop: 0 }}>
          {clip.description}
        </p>

        {showTranscript && (
          <div style={{ ...cardStyle, padding: 20, marginBottom: 20, background: 'var(--color-cream-dark)' }}>
            {clip.transcript.map((line, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.7, margin: i === 0 ? 0 : '12px 0 0' }}>
                <strong style={{ color: 'var(--color-forest)' }}>{line.speaker}:</strong>{' '}
                <span style={{ color: 'var(--color-text-light)' }}>{line.text}</span>
              </p>
            ))}
          </div>
        )}

        <div style={{ display: 'grid', gap: 16 }}>
          {clip.captions.map((c) => (
            <CaptionCard key={c.platform} caption={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------- Page ----------------

export default function StudioPage() {
  return (
    <div style={pageStyle}>
      {/* Top bar */}
      <header
        style={{
          background: 'var(--color-forest)',
          padding: '18px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--color-cream)',
            textDecoration: 'none',
          }}
        >
          The Pelham Group NW
        </Link>
        <span
          style={{
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-clay-light)',
            fontWeight: 700,
          }}
        >
          Content Studio · Private
        </span>
      </header>

      <div style={shellStyle}>
        {/* Hero */}
        <section style={{ padding: '64px 0 24px', maxWidth: 720 }}>
          <div style={eyebrowStyle}>Community Spotlight</div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--color-forest)',
              margin: '10px 0 16px',
              lineHeight: 1.12,
            }}
          >
            Your Content Studio
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--color-text-light)', margin: 0 }}>
            One conversation in, a month of content out. This page is where everything from the Community
            Spotlight recordings lands, for Kim and for her guests: preview the clips, copy a caption,
            download, and post. Everything here is yours to use on your own channels.
          </p>
        </section>

        {/* Why */}
        <section style={{ padding: '40px 0' }}>
          <div style={eyebrowStyle}>The honest answer</div>
          <h2 style={h2Style}>Why we record conversations</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--color-text-light)', maxWidth: 720, marginTop: 0 }}>
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
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    margin: '0 0 8px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-light)', margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Episodes */}
        {EPISODES.map((ep) => (
          <section key={ep.number} style={{ padding: '48px 0' }}>
            <div style={eyebrowStyle}>
              Conversation No. {ep.number} · {ep.recorded}
            </div>
            <h2 style={h2Style}>{ep.guest}</h2>
            <p style={{ fontSize: 14, color: 'var(--color-text-muted)', margin: '0 0 12px' }}>
              {ep.guestRole} · {ep.guestBusiness}
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--color-text-light)', maxWidth: 720, marginTop: 0, marginBottom: 32 }}>
              {ep.summary}
            </p>

            {ep.clips.map((clip) => (
              <ClipSection key={clip.slug} clip={clip} />
            ))}

            {/* Guest package note */}
            <div style={{ ...cardStyle, marginTop: 36, borderLeft: '4px solid var(--color-clay)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  margin: '0 0 8px',
                }}
              >
                {ep.guest.split(' ')[0]}, this is your package too
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--color-text-light)', margin: 0 }}>
                Everything above is yours to use on your own marketing: download any clip, grab the caption
                written for your channels (or write your own), and post whenever you like. When you share,
                tag Kim at @pelhamgroupnw so she can share it back. Your full video, audio-only version, and
                complete transcript will land on this page as soon as the edit is finished.
              </p>
            </div>

            {/* Still coming */}
            <div style={{ ...cardStyle, marginTop: 36, background: 'var(--color-cream-dark)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  margin: '0 0 12px',
                }}
              >
                Still coming from this one hour
              </h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {ep.stillComing.map((item) => (
                  <li key={item} style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--color-text-light)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* How to use */}
        <section style={{ padding: '24px 0 8px' }}>
          <div style={eyebrowStyle}>Three steps, two minutes</div>
          <h2 style={h2Style}>How to use this page</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {HOW_TO_STEPS.map((s, i) => (
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
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    margin: '0 0 6px',
                  }}
                >
                  {s.step}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-light)', margin: 0 }}>{s.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-muted)', marginTop: 20, maxWidth: 720 }}>
            Kim, if you would rather stay hands-off, that works too. Everything here gets scheduled through
            your regular content calendar, and nothing posts without you seeing it first. Guests, post as
            much or as little as you like. It is your content too.
          </p>
        </section>

        {/* Footer note */}
        <section style={{ marginTop: 48, borderTop: '1px solid var(--color-border)', paddingTop: 28 }}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-light)', margin: 0, maxWidth: 720 }}>
            Have a guest in mind for the next conversation? A trade partner, a past client, a local business
            you love? Text Rachael and we will take it from there. One recording a month is the target. It is
            the least effort, highest yield hour in this whole plan.
          </p>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: 24, color: 'var(--color-forest)', marginTop: 16 }}>
            The Savvy Digital Co.
          </p>
        </section>
      </div>
    </div>
  );
}
