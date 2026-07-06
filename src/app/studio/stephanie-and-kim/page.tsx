'use client';

import {
  Clip,
  ClipSection,
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
  ghostButtonStyle,
} from '../shared';

/*
  Conversation No. 1 — Stephanie Galindo x Kim Pelham.
  This page belongs to BOTH of them and both get the link.
  See the audience note in shared.tsx before editing copy.
*/

const CLIPS: Clip[] = [
  {
    slug: 'beyond-the-boxes',
    title: 'Beyond the Boxes',
    duration: 'About 1 minute',
    videoSrc: '/podcast/episode-02/adhd-beyond-the-boxes.mp4',
    downloadName: 'community-spotlight-stephanie-kim-beyond-the-boxes.mp4',
    description:
      'Stephanie reframes the whole idea of "normal" brains: there is no ADHD box, autism box, and neurotypical box. There is a huge range of neurology, and a world that only recently started demanding everyone sit down and be quiet.',
    captionGroups: [
      {
        label: 'For Kim’s channels',
        captions: [
          {
            platform: 'Instagram / TikTok',
            note: 'Post as a Reel. Tag Stephanie so she can share it back.',
            text: `There is no one right way for a brain to work.

That is the first thing Stephanie Galindo taught me when we sat down for the first conversation in my Community Spotlight series. Stephanie is a local ADHD coach (find her at adhdwithstephanie.com), and this minute reframed how I think about the boxes we ask people to live inside.

Full conversation coming soon. If you know someone in Snohomish County doing work worth talking about, I want to hear about them.

#SnohomishCounty #CommunitySpotlight #ADHD #Neurodivergent #PelhamGroupNW`,
          },
          {
            platform: 'Facebook',
            note: 'Warmer and longer works here. Tag ADHD with Stephanie.',
            text: `I started something new and I am a little excited about it.

It is called Community Spotlight: real conversations with the people who make Snohomish County what it is. First up is Stephanie Galindo, an ADHD coach whose work I really admire. Her whole approach is called Shame-Free ADHD, which tells you a lot about her. You can find her at adhdwithstephanie.com.

In this clip she explains something that stuck with me: there is no ADHD box, autism box, and "normal" box. There is just a huge range of human neurology, and a modern world that suddenly expects everyone to sit down and be quiet.

The full conversation is coming soon. And if there is someone local you think I should sit down with next, tell me. I am keeping a list.

Always, Kim`,
          },
          {
            platform: 'LinkedIn',
            note: 'Lead with the professional angle.',
            text: `Moving is one of the biggest executive-function challenges most adults ever face. Nobody talks about it that way.

So I sat down with Stephanie Galindo, an ADHD coach here in Snohomish County who works with entrepreneurs and professionals, for the first conversation in my Community Spotlight series. In this clip she makes a point I keep coming back to: neurodivergence is not a set of boxes, it is a range. The world changed faster than our brains did.

After 17 years of walking people through moves, I can tell you the emotional and cognitive load is real. Featuring the local experts who help people carry it felt like the right place to start this series.

Full conversation coming soon. Find Stephanie at adhdwithstephanie.com.`,
          },
          {
            platform: 'Google Business Profile',
            note: 'Short and plain. No hashtags needed.',
            text: `New from Kim: the first conversation in her Community Spotlight series, featuring Stephanie Galindo of ADHD with Stephanie, a local ADHD coach. They talk about the human side of a big move, including stress, anxiety, and why there is no one right way for a brain to work. The full conversation is coming soon. Have a question about buying or selling in Snohomish County? Kim answers her own phone.`,
          },
        ],
      },
      {
        label: 'For Stephanie’s channels',
        captions: [
          {
            platform: 'Instagram / TikTok',
            note: 'Written in your voice, Stephanie. Use it as is or make it yours.',
            text: `There is no ADHD box, autism box, and "normal" box. There is a huge range of human neurology, and a modern world that suddenly expects everyone to sit down and be quiet.

I got to unpack this with Kim Pelham of The Pelham Group NW for the first conversation in her Community Spotlight series. We talked about the human side of a big move: the stress, the anxiety, and why moving is one of the biggest executive-function challenges most adults ever face.

Full conversation coming soon. Thank you for the invitation, Kim. More shame-free ADHD tools at adhdwithstephanie.com.

@pelhamgroupnw #ADHD #Neurodivergent #ADHDCoach #ShameFreeADHD #SnohomishCounty`,
          },
          {
            platform: 'LinkedIn / Facebook',
            note: 'The coaching-audience angle.',
            text: `Neurodivergence is not a set of boxes. It is a range, and the world changed faster than our brains did.

I sat down with Kim Pelham of The Pelham Group NW for her new Community Spotlight series to talk about something we both see every day from different sides: big life transitions, and the stress and executive-function load that comes with them. Moving is a perfect example. It is dozens of decisions, deadlines, and disruptions stacked on top of a person's normal life, and nobody warns you about that part.

This clip is one minute from that conversation. The full version is coming soon. If the freeze-procrastination-panic loop sounds familiar, that is exactly what I help people with at adhdwithstephanie.com.`,
          },
        ],
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
  {
    slug: 'real-estate-ds',
    title: 'The Real Estate D’s',
    duration: 'About 45 seconds',
    videoSrc: '/podcast/episode-02/real-estate-ds.mp4',
    downloadName: 'community-spotlight-kim-real-estate-ds.mp4',
    description:
      'Kim’s Double D commercial, on the record at last. The people selling their houses all have a D: divorcing, downsizing, departing the area, debt, diamonds, diapers. Pure Kim, and secretly the best referral ask she has ever made.',
    captionGroups: [
      {
        label: 'For Kim’s channels',
        captions: [
          {
            platform: 'Instagram / TikTok',
            note: 'Post as a Reel. This one is built to be shared.',
            text: `Have you heard my Double D commercial?

No, not that kind. I am talking about the people who are actually selling their houses. They are divorcing, downsizing, departing the area, dealing with debt. Maybe they have diamonds because they just got married, or diapers because the family grew.

These are the people selling homes. So when you hear somebody with a D, send them my way. I can help with all of their D's.

#SnohomishCounty #RealEstate #TheRealtorNextDoor #PelhamGroupNW`,
          },
          {
            platform: 'Facebook',
            note: 'Her database will love this one. Great referral post.',
            text: `My friends have heard this bit for years. Now it is on the record.

The people who sell their houses all have a D. Divorcing. Downsizing. Departing the area. Debt. Diamonds, because they just got married. Diapers, because the family just grew.

If someone in your world has a D right now, I would love to help them through it. Moving is hard enough without doing it alone, and helping people through their D is genuinely what I do all day.

Always, Kim`,
          },
          {
            platform: 'Google Business Profile',
            note: 'Short and plain, referral angle.',
            text: `Kim's famous Double D commercial made it onto the record during her Community Spotlight conversation. The short version: the people selling homes are divorcing, downsizing, departing the area, dealing with debt, celebrating diamonds, or buying diapers. If someone you know has a D, Kim can help with all of them. She answers her own phone: 425-250-9422.`,
          },
        ],
      },
    ],
    transcript: [
      {
        speaker: 'Kim Pelham',
        text: 'Have you heard my Double D commercial? What do you think of when I say double D, triple D, six or seven D’s? Oh my god, ladies, I am not talking about giant bras. I am talking about the people who are moving, the people who are actually selling their house.',
      },
      {
        speaker: 'Kim Pelham',
        text: 'They are dead, they are divorcing, they’re downsizing, they’re departing the area, they have debt, they might have diamonds because they just got married. Or maybe they have diapers because they got new kids. These are the people who are selling their houses. So when you hear somebody who’s got a D, refer them to me, because I can help them with all their D’s.',
      },
    ],
  },
];

const WHY_FOR_BOTH: { title: string; body: string }[] = [
  {
    title: 'People hire the person they feel they already know',
    body: 'Nobody hires a broker, or a coach, off a 30-second clip. They hire the person they trust. Kim, that means a future seller spending twenty minutes with your actual voice before ever calling you. Stephanie, that means a potential client hearing how you actually think before ever booking a session. A recorded conversation is that trust, packaged, working for both of you while you sleep.',
  },
  {
    title: 'One hour became a month of content for each of you',
    body: 'From this one sitting: 8 to 12 short clips, blog and newsletter material, quote graphics, and captions ready to paste. Same source, two sets of channels. Neither of you has to make content this month. You already did, on June 26, in one conversation.',
  },
  {
    title: 'You introduced your audiences to each other',
    body: 'Kim’s audience meets Stephanie. Stephanie’s audience meets Kim. When either of you posts a clip and tags the other, both of you reach people you could never have reached alone, with a warm introduction instead of an ad. That is the whole engine, and it only works because the conversation was real.',
  },
  {
    title: 'AI search runs on your words now',
    body: 'When someone asks Google or ChatGPT about the stress of moving, or ADHD and big life transitions, the answers get lifted from real people answering real questions in their own words. The transcript from your hour feeds that machine with both of your voices instead of someone else’s.',
  },
];

const QUOTE_GRAPHICS: { src: string; download: string; label: string }[] = [
  {
    src: '/podcast/episode-02/graphics/quote-moving-takes-months.jpg',
    download: 'community-spotlight-stephanie-quote-moving-takes-months.jpg',
    label: 'Moving takes months',
  },
  {
    src: '/podcast/episode-02/graphics/quote-societys-expectations.jpg',
    download: 'community-spotlight-stephanie-quote-societys-expectations.jpg',
    label: 'Society’s expectations',
  },
  {
    src: '/podcast/episode-02/graphics/quote-no-boxes.jpg',
    download: 'community-spotlight-stephanie-quote-no-boxes.jpg',
    label: 'No boxes',
  },
];

const STILL_COMING: string[] = [
  'More short clips as the full session gets cut (target: 8 to 12 from this one hour)',
  'A feature in The Pelham Post newsletter',
];

export default function StephanieAndKimPage() {
  return (
    <div style={pageStyle}>
      <StudioHeader backLink />

      <div style={shellStyle}>
        {/* Hero */}
        <section style={{ padding: '64px 0 24px', maxWidth: 720 }}>
          <div style={eyebrowStyle}>Community Spotlight · Conversation No. 1 · Recorded June 26, 2026</div>
          <h1 style={h1Style}>Stephanie and Kim, this page is yours</h1>
          <p style={{ ...bodyStyle, fontSize: 17, margin: 0 }}>
            Everything from your conversation lands here as it gets cut: clips, ready-to-paste captions,
            downloads, and the transcript. You both get the same link because you both own this content.
            Post whatever you like, whenever you like, and tag each other when you do.
          </p>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginTop: 16 }}>
            Stephanie Galindo · ADHD coach ·{' '}
            <a
              href="https://adhdwithstephanie.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-clay)', fontWeight: 600 }}
            >
              adhdwithstephanie.com
            </a>
            {'  ·  '}
            Kim Pelham · The Realtor Next Door ·{' '}
            <a href="https://thepelhamgroupnw.com/" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>
              thepelhamgroupnw.com
            </a>
          </p>
        </section>

        {/* Why, addressed to both */}
        <section style={{ padding: '40px 0' }}>
          <div style={eyebrowStyle}>Worth saying out loud</div>
          <h2 style={h2Style}>What that one hour is actually doing</h2>
          <p style={{ ...bodyStyle, maxWidth: 720, marginTop: 0 }}>
            You sat down, you talked for twenty minutes, and it felt like a good conversation. Here is what
            it becomes from here, for both of you.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginTop: 20,
            }}
          >
            {WHY_FOR_BOTH.map((card, i) => (
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

        {/* Clips */}
        <section style={{ padding: '48px 0 0' }}>
          <div style={eyebrowStyle}>Ready to post</div>
          <h2 style={h2Style}>The clips</h2>
          <p style={{ ...bodyStyle, maxWidth: 720, marginTop: 0, marginBottom: 32 }}>
            Everything here is edited and captioned. What you see is what posts. Pick your platform, copy the
            caption, download the video, and go. More clips join this page as the full session gets cut.
          </p>
          {CLIPS.map((clip) => (
            <ClipSection key={clip.slug} clip={clip} />
          ))}
        </section>

        {/* Full conversation */}
        <section style={{ paddingTop: 48 }}>
          <div style={eyebrowStyle}>The whole thing</div>
          <h2 style={h2Style}>The full conversation</h2>
          <p style={{ ...bodyStyle, maxWidth: 720, marginTop: 0, marginBottom: 20 }}>
            The edited episode runs about 17 minutes. Watch it right here, listen to the audio version,
            download either one for your own archives, and grab the complete transcript.
          </p>
          <div style={{ maxWidth: 720, marginBottom: 20 }}>
            <div
              style={{
                position: 'relative',
                paddingTop: '56.25%',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: 'var(--color-dark)',
              }}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/BzL3k8fXcyc"
                title="Community Spotlight No. 1: Stephanie Galindo and Kim Pelham"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </div>
          <div style={{ ...cardStyle, maxWidth: 720 }}>
            <audio
              controls
              preload="metadata"
              src="/podcast/episode-02/full-episode-audio.m4a"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
              <a
                href="/podcast/episode-02/full-episode-audio.m4a"
                download="community-spotlight-01-stephanie-and-kim-audio.m4a"
                style={buttonStyle}
              >
                Download the audio
              </a>
              <a
                href="/podcast/episode-02/full-episode-transcript.txt"
                download="community-spotlight-01-stephanie-and-kim-transcript.txt"
                style={ghostButtonStyle}
              >
                Download the transcript
              </a>
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', margin: '14px 0 0' }}>
              The transcript is the auto-generated one from the recording session, so expect a few rough
              edges. Good enough to quote from; tell Rachael if you want a cleaned-up version.
            </p>
          </div>
        </section>

        {/* Quote graphics */}
        <section style={{ paddingTop: 48 }}>
          <div style={eyebrowStyle}>Ready to post</div>
          <h2 style={h2Style}>The quote graphics</h2>
          <p style={{ ...bodyStyle, maxWidth: 720, marginTop: 0, marginBottom: 24 }}>
            Three of Stephanie&apos;s best lines from the conversation, set in the Pelham brand and sized
            1080x1350 for Instagram, Facebook, and LinkedIn. Download and post them like any photo. They
            pair well with a caption from above, or stand alone.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
              maxWidth: 900,
            }}
          >
            {QUOTE_GRAPHICS.map((g) => (
              <div key={g.src} style={{ ...cardStyle, padding: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={`Pull-quote graphic: ${g.label}`}
                  style={{ width: '100%', display: 'block', borderRadius: 8, border: '1px solid var(--color-border)' }}
                />
                <a
                  href={g.src}
                  download={g.download}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'var(--color-clay)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 13.5,
                    padding: '10px 0',
                    borderRadius: 2,
                    textDecoration: 'none',
                    marginTop: 12,
                  }}
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Still coming */}
        <section style={{ paddingTop: 36 }}>
          <div style={{ ...cardStyle, borderLeft: '4px solid var(--color-clay)', marginBottom: 16 }}>
            <h3 style={{ ...h3Style, marginBottom: 8 }}>Already done: the blog post</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--color-text-light)', margin: 0 }}>
              The conversation is now a full article on Kim&apos;s site:{' '}
              <a href="/blog/moving-with-adhd" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>
                Moving With ADHD: Why It Feels So Hard, and What Actually Helps
              </a>
              . It leads with Stephanie&apos;s story, links to adhdwithstephanie.com, and is written to be
              the page search engines and AI assistants find when someone asks why moving with ADHD is so
              hard. Share it anywhere you like.
            </p>
          </div>
          <div style={{ ...cardStyle, background: 'var(--color-cream-dark)' }}>
            <h3 style={{ ...h3Style, marginBottom: 12 }}>Still coming from this one hour</h3>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {STILL_COMING.map((item) => (
                <li key={item} style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--color-text-light)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer note */}
        <section style={{ marginTop: 48, borderTop: '1px solid var(--color-border)', paddingTop: 28 }}>
          <p style={{ ...bodyStyle, fontSize: 15, margin: 0, maxWidth: 720 }}>
            Kim, if you would rather stay hands-off, everything here also gets scheduled through your regular
            content calendar, and nothing posts without you seeing it first. Stephanie, post as much or as
            little as you like. It is your content too. Questions, edits, a moment you want clipped that we
            missed? Text Rachael and it happens.
          </p>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: 24, color: 'var(--color-forest)', marginTop: 16 }}>
            The Savvy Digital Co.
          </p>
        </section>
      </div>
    </div>
  );
}
