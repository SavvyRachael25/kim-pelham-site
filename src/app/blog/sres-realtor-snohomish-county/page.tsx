'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

export default function SresRealtorSnohomishCountyPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="What to Look For in a Senior Move Specialist for the Big Transition"
          subtitle="By Kim Pelham - April 2026 - 7 min read"
          image="/images/kim-with-door-cropped.jpg"
          imageAlt="Kim Pelham helping seniors downsize in Snohomish County"
        />

        {/* Article Content */}
        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            {/* AEO Opening — Bold Direct Answer */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
                fontWeight: 700,
              }}
            >
              A senior move specialist is a real estate broker who focuses on later-life moves: downsizing after decades in a home, selling a parent&apos;s house, and coordinating the estate, family, and timing questions that come with all of it. If you&apos;re searching for that kind of help in Snohomish County, you already understand that this transition is different. It is.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '32px',
              }}
            >
              I&apos;m Kim Pelham, a licensed real estate broker with The Pelham Group NW and a Senior Move Specialist. I&apos;ve guided more than 30 senior transitions across Snohomish County, from Snohomish to Lake Stevens to Mill Creek. What I do is not just sell a home. It&apos;s help a family close one chapter and step carefully into the next one.
            </p>

            {/* Stat Callout Box */}
            <div style={{
              background: 'var(--color-cream)',
              borderLeft: '4px solid var(--color-clay)',
              padding: '24px 28px',
              borderRadius: '0 4px 4px 0',
              margin: '0 0 40px 0',
            }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-forest)', margin: '0 0 6px 0', lineHeight: 1 }}>
                $380,000+
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0 0 8px 0', lineHeight: 1.6 }}>
                The average Snohomish County senior homeowner has more than $380,000 in home equity to unlock. That equity funds retirement, care, and the next chapter. The right broker helps you access it strategically, not just quickly.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#595959', margin: 0 }}>
                Based on Snohomish County median home values and average senior homeowner tenure
              </p>
            </div>

            {/* Section: A Quick Word on Credentials, Including SRES */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '40px',
              }}
            >
              A Quick Word on Credentials, Including SRES
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              You may run into the term SRES (Seniors Real Estate Specialist) while you research. It is a designation from the National Association of Realtors, and brokers whose brokerages belong to NAR can earn it through specialized coursework. I want to be straightforward with you: I do not hold the SRES designation. My brokerage, Katrina Eileen Real Estate, is not a NAR member, so that designation is not available to me. What I bring instead is the thing the coursework is trying to approximate: years of sitting at kitchen tables with seniors and their families, helping them downsize, sell a parent&apos;s home, and navigate estate transitions from the first conversation to the last box.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Whatever the letters after a broker&apos;s name, the knowledge that matters covers the full spectrum of senior housing options: aging in place with modifications, independent living communities, assisted living, memory care, and continuing care retirement communities. A broker without this background may not even know the right questions to ask. They&apos;ll focus on the sale. A senior move specialist focuses on the destination.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              It also means understanding reverse mortgage basics in meaningful depth, because many seniors are weighing whether to sell outright or explore a reverse mortgage to stay in place. A broker who knows this ground can help you understand the tradeoffs and refer you to the right specialists before you commit to anything. It means lifecycle planning, thinking about the next 5 to 10 years rather than just the next 90 days. And it means taking the emotional dynamics of these transitions seriously, because the feelings involved are real and they affect decisions in ways that pure financial logic cannot explain.
            </p>

            {/* Section: The Part Nobody Talks About */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '48px',
              }}
            >
              The Part Nobody Talks About: It&apos;s Emotional
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              I want to say this plainly, because most real estate content glosses over it: leaving a home you&apos;ve lived in for 30 years is hard. It&apos;s not just logistics. It&apos;s identity. That house is where your kids grew up, where holidays happened, where your life unfolded room by room. Selling it is not a transaction. It&apos;s a goodbye.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              I have sat at kitchen tables with clients who started crying before we got to the paperwork. I have watched couples disagree about timing because one person was ready and one was not. I have seen adult children and their parents have entirely different visions for what comes next. None of this is unusual. None of it is a problem. It&apos;s what happens when the decision is real and the stakes are high.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              My job is to hold space for that. To move at your pace, not the market&apos;s pace. To make sure that when the time comes to sign, you feel clear and ready, not pushed or rushed. This is the dimension of the work that no license exam covers, and the brokers who do it well take it seriously.
            </p>

            {/* Section: Four Things a Senior Move Specialist Does That a Typical Broker Doesn't */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '48px',
              }}
            >
              Four Things a Senior Move Specialist Does That a Typical Broker Doesn&apos;t
            </h2>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '28px',
              }}
            >
              1. Walk the new home before the move
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Before my clients move into their new place, I walk the floor plan with them and think through it practically. Where will the furniture go? Are the hallways wide enough for a walker if needed? Is the laundry on the main floor? These are not things a standard broker is trained to notice. I have caught potential problems before moving day more times than I can count, saving clients a very difficult situation.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '28px',
              }}
            >
              2. Coordinate estate sales, donations, and junk removal
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Decades of life accumulates into a houseful of furniture, collections, and belongings. Many of my clients have no idea how to handle all of it. I keep a trusted network of estate sale professionals, donation coordinators, and junk removal services specifically for this. You should not have to research and vet all of this on your own in the middle of an already stressful move. That&apos;s part of what you get when you work with a senior move specialist.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '28px',
              }}
            >
              3. Know which Snohomish County neighborhoods actually work for 55+
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Not every neighborhood that looks nice on Zillow is the right fit for this life stage. Proximity to medical facilities, walkability, low-maintenance housing, community programming, and HOA services all matter. I know which pockets of Snohomish County check those boxes and which ones look appealing but require more car dependency or upkeep than most seniors want. That local knowledge is not something you can get from a search algorithm.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '16px',
                marginTop: '28px',
              }}
            >
              4. Understand reverse mortgage implications before pricing
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              If there is an existing reverse mortgage on the home, the sale process has specific requirements that affect timing and net proceeds. A broker who has not worked these sales before may not recognize the complications until late in the transaction. I know what to look for and work with reverse mortgage specialists early so nothing surprises you at the closing table.
            </p>

            {/* Section: Realistic Downsizing Timeline */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '48px',
              }}
            >
              The Realistic Downsizing Timeline
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              When families ask me how long this will take, my honest answer is three to six months. That timeline is not padded. It reflects what the process actually requires when it is done well.
            </p>

            <div style={{
              background: 'var(--color-cream)',
              padding: '28px 32px',
              borderRadius: '4px',
              margin: '0 0 32px 0',
            }}>
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--color-border)' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 6px 0' }}>Month 1: Decisions</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>What to keep. What to give to family. What to sell. What to donate. This month feels slow but it&apos;s foundational. Rushing it causes regret later.</p>
              </div>
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--color-border)' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 6px 0' }}>Months 2 to 3: List and Sell</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>Preparing the home, professional photography, pricing, listing, showings, offer review, and closing. In a healthy Snohomish County market, well-priced homes move in this window.</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 6px 0' }}>Months 4 to 6: Find and Close on the Next Home</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>Whether that&apos;s a smaller single-family home, a 55+ community, a condo, or a move closer to family, this phase includes touring, deciding, negotiating, and closing. Done right, you arrive at the new place feeling settled, not just relocated.</p>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Families who try to compress this into four or five weeks almost always feel the strain. The homes are not properly prepared, the decisions are not fully thought through, and the emotional weight gets compacted into an impossible window. Give yourself the time to do this at a human pace.
            </p>

            {/* Section: Best Snohomish County Neighborhoods for 55+ */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '48px',
              }}
            >
              Best Snohomish County Neighborhoods for 55+
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '28px',
              }}
            >
              After more than 30 senior transitions in this county, I have strong opinions about where people land happily versus where they land and quietly wish they had looked harder. Here are three areas I recommend most often.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '12px',
                marginTop: '24px',
              }}
            >
              Lake Stevens: Newer homes, quieter pace, lower maintenance
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '28px',
              }}
            >
              Lake Stevens has seen significant new construction over the past decade, which means clients who move there are often getting newer systems, better insulation, and single-story floor plans designed with modern accessibility in mind. The area is quieter than the urban core, traffic is manageable, and the lake itself gives the community a genuine sense of place. For seniors who want a true low-maintenance lifestyle without moving into a managed community, Lake Stevens is worth a serious look.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '12px',
                marginTop: '24px',
              }}
            >
              Mill Creek: Walkable town center, HOA services, medical access
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '28px',
              }}
            >
              Mill Creek is one of the most practical choices in the county for this life stage. The town center is genuinely walkable, with restaurants, coffee shops, and services within easy reach. HOA-managed properties handle the exterior maintenance that becomes a burden as you get older. Providence Regional Medical Center is close, and the broader network of medical specialists along the Highway 9 corridor makes healthcare access genuinely convenient. Mill Creek tends to attract active seniors who still want community energy around them.
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-clay)',
                marginBottom: '12px',
                marginTop: '24px',
              }}
            >
              Snohomish: Historic charm, strong community, slower rhythm
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '32px',
              }}
            >
              The city of Snohomish has a warmth to it that is hard to manufacture. The historic downtown is full of antique shops, local restaurants, and community events that draw people out of their homes and into connection with neighbors. For seniors who are worried about isolation, this community structure matters. The pace is slower and more intentional. If your clients value character over convenience, Snohomish earns a conversation.
            </p>

            {/* Pull Quote */}
            <blockquote style={{
              borderLeft: '3px solid var(--color-clay)',
              margin: '40px 0',
              padding: '20px 28px',
              background: 'rgba(184,132,92,0.06)',
              borderRadius: '0 4px 4px 0',
            }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 400, fontStyle: 'italic', color: 'var(--color-forest)', margin: 0, lineHeight: 1.6 }}>
                &ldquo;What I do with senior clients is not really real estate. It&apos;s life planning that happens to include real estate. The home sale is one piece. The rest of it is helping someone figure out who they want to be in this next chapter, and making sure the place they land actually supports that.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-clay)', marginTop: '10px', display: 'block' }}>
                Kim Pelham, Real Estate Broker, The Pelham Group NW
              </cite>
            </blockquote>

            {/* Section: Questions to Ask Before Hiring */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '20px',
                marginTop: '48px',
              }}
            >
              Questions to Ask Before You Hire
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              A title or designation tells you a broker has been exposed to the material. What it does not tell you is whether they are the right person for your family. Here are five questions worth asking before you decide, whoever you interview.
            </p>

            <div style={{ marginBottom: '12px' }}>
              {[
                {
                  q: 'How many senior transitions have you personally guided in this county?',
                  a: 'Look for genuine experience, not just the credential. Someone who has done 5 senior transitions is meaningfully different from someone who has done 35. Ask them to describe a few.'
                },
                {
                  q: 'Do you have a network of estate sale coordinators and senior move managers?',
                  a: 'A broker who has done this work consistently will have trusted names they refer to regularly. Vague answers here are a signal.'
                },
                {
                  q: 'How do you handle it when a client is emotionally not ready to move forward?',
                  a: 'Their answer tells you everything about their patience and how they balance the business side with the human side. You want someone who will wait for you, not push you.'
                },
                {
                  q: 'Can you walk us through what the first month working with you looks like?',
                  a: 'A good senior move specialist will have a clear, calm process they can explain without consulting a brochure. You should feel organized just hearing them describe it.'
                },
                {
                  q: 'What neighborhoods in Snohomish County do you recommend for someone in my situation, and why?',
                  a: 'If they give you a thoughtful, specific answer grounded in your actual priorities, that is a good sign. If they hand you a list without asking about your lifestyle first, keep looking.'
                }
              ].map(({ q, a }, i) => (
                <div
                  key={i}
                  style={{
                    padding: '20px 24px',
                    marginBottom: '16px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    backgroundColor: i % 2 === 0 ? '#fff' : 'var(--color-cream)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 8px 0' }}>
                    {i + 1}. {q}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <section style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.375rem', color: 'var(--color-clay)', margin: '0 0 6px 0' }}>common questions</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: 'var(--color-forest)', margin: '0 0 32px 0' }}>
                Frequently Asked Questions
              </h2>

              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0' }}>
                  What does SRES stand for in real estate?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
                  SRES stands for Seniors Real Estate Specialist, a National Association of Realtors designation that requires 12 or more hours of specialized training in senior housing options, reverse mortgages, downsizing psychology, and estate coordination. It is designed for brokers at NAR-member brokerages who work with clients aged 50 and older on major housing transitions.
                </p>
              </div>

              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0' }}>
                  Do I need an SRES realtor to downsize?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
                  No. The designation is one signal that a broker has done coursework on senior housing topics, but it is not required, and experienced senior-focused brokers also work outside NAR-member brokerages, where the designation is not available. What matters most is whether the broker can coordinate the full transition, not just the sale: thinking through reverse mortgage implications, connecting you with estate sale coordinators, and knowing which neighborhoods will actually serve your lifestyle. Ask about real transitions they have guided, not just the letters after their name.
                </p>
              </div>

              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0' }}>
                  What qualifications does an SRES realtor have?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
                  An SRES has completed at least 12 hours of NAR-accredited training covering senior housing options, reverse mortgage basics, estate coordination, and the emotional dynamics of downsizing. Maintaining the designation also requires ongoing continuing education. Beyond coursework, the strongest SRES brokers bring real, hands-on experience guiding actual families through these transitions.
                </p>
              </div>

              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0' }}>
                  How long does senior downsizing take in Washington state?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
                  Realistically, three to six months. The first month covers decisions about what to keep, sell, or donate. The following one to two months handle listing and selling the current home. The final one to two months cover finding and closing on the next place. Rushing any of these stages creates overwhelm. A good senior move specialist helps you pace the process so it stays manageable.
                </p>
              </div>

              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 10px 0' }}>
                  What is the difference between a senior move specialist and a regular realtor?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
                  A regular broker is trained to list and sell homes. A senior move specialist, whether they learned through SRES coursework or through years of doing the work, manages a life transition that happens to involve real estate. That means understanding reverse mortgage implications, coordinating estate sales and donations, walking through the new home floor plan before the move, and knowing which neighborhoods in Snohomish County have the amenities and medical access that 55+ buyers actually need.
                </p>
              </div>
            </section>

            {/* Related Posts Section */}
            <section style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '32px',
                }}
              >
                Related Articles
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <Link
                  href="/blog/senior-downsizing"
                  style={{
                    padding: '24px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-cream)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    Senior Downsizing: A Compassionate Guide to Your Next Chapter
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    Senior Real Estate
                  </p>
                </Link>

                <Link
                  href="/blog/first-72-hours"
                  style={{
                    padding: '24px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-cream)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '8px',
                    }}
                  >
                    The First 72 Hours: Why They Make or Break Your Home Sale
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    Selling Strategy
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section style={{ marginTop: '80px', padding: '40px', backgroundColor: 'var(--color-cream)', borderRadius: '4px', textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '16px',
                }}
              >
                Downsizing isn&apos;t just real estate. It&apos;s life planning.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  color: 'var(--color-text)',
                  marginBottom: '24px',
                  lineHeight: '1.6',
                }}
              >
                If you or someone you love is thinking about a senior transition in Snohomish County, I would love to have an honest conversation about what that process looks like and how I can help make it less overwhelming.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '16px 40px',
                  backgroundColor: 'var(--color-clay)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a0743d';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-clay)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Let&apos;s Talk
              </Link>
            </section>

            {/* Back to Blog Link */}
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                marginTop: '40px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-clay)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-forest)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-clay)';
              }}
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
