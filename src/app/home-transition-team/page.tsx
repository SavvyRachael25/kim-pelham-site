'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
import KimCaresNote from '@/components/KimCaresNote';

const PILLARS = [
  {
    eyebrow: 'repairs and prep',
    title: 'Licensed contractors, coordinated for you',
    body: 'Roof, electrical, plumbing, paint, flooring, hardware, refinishing. The Home Transition Team works with licensed, insured contractors across the region, led in partnership with SMART Building Services, the general contracting company run by Kim\'s husband Brien. One point of contact. And when cash is tight before a sale, payment for pre-sale repairs can defer until closing.',
    href: '/home-repair',
    linkLabel: 'How home repairs work',
  },
  {
    eyebrow: 'staging and selling',
    title: 'In-house staging and a broker who prices honestly',
    body: 'Psychology-driven staging with Kim\'s own inventory, professional listing photography, Matterport 3D tours, and a pricing strategy built from closed comps, not a Zestimate. The result across Kim\'s listings: a 102.3% average sale-to-list ratio, above the Snohomish County market average.',
    href: '/sellers',
    linkLabel: 'The full 6-step selling process',
  },
  {
    eyebrow: 'seniors and families',
    title: 'SRES-certified transition support',
    body: 'Downsizing after decades in a home. Selling a parent\'s house from out of state. Coordinating an estate sale, a move to assisted living, or a family split across time zones. Kim is a Seniors Real Estate Specialist (SRES), certified by the National Association of Realtors for exactly these transitions, and she has walked alongside dozens of Snohomish County families through them.',
    href: '/senior-services',
    linkLabel: 'Senior services in detail',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Kim made selling my moms home easy and the staging was amazing! I really think the staging was the cherry on top that helped the home sell quickly in a slower market.',
    name: 'Michelle Guerra',
    context: 'Sold her mother\'s home with the Home Transition Team',
  },
  {
    quote:
      'Kim Pelham and team helped sell our father\'s house. They were magnificent! Highly recommend.',
    name: 'Jeff Rowley',
    context: 'Family estate sale, Snohomish County',
  },
];

const faqs = [
  {
    question: 'What is the Home Transition Team?',
    answer:
      'The Home Transition Team is The Pelham Group NW\'s all-under-one-roof service for people whose move involves more than a sign in the yard: repairs, staging, selling, and senior transition support, coordinated by one team. Kim Pelham handles the real estate and staging. Licensed, insured contractors (in partnership with SMART Building Services) handle the work on the home. Families get one point of contact instead of five vendors.',
  },
  {
    question: 'Can repairs really be paid at closing instead of upfront?',
    answer:
      'In most cases, yes. For pre-sale repairs and prep on a home the team is listing, payment can defer until the home closes, so sellers are not writing checks before the sale proceeds arrive. Scope and terms are agreed in writing before any work starts.',
  },
  {
    question: 'We live out of state and need to sell a family home in Snohomish County. Can you handle it without us flying back?',
    answer:
      'Yes. This is one of the most common Home Transition Team jobs. The owners approve scope and budget once at the start, the team runs the entire prep (paint, flooring, hardware, refinishing, staging, photography), and the owners approve the finished listing photos at the end. A recent condo went from keys to listing-ready in about three weeks with zero round trips by the sellers. The full case study with 64 before and after photos is at thepelhamgroupnw.com/case-study/concierge-condo.',
  },
  {
    question: 'What does SRES mean and why does it matter?',
    answer:
      'SRES stands for Seniors Real Estate Specialist, a National Association of Realtors certification for brokers who work with clients over 50: estate transitions, downsizing, the timing of a move, reverse-mortgage basics, and the family conversations that come with all of it. Kim Pelham is SRES-certified and has 17 years of Snohomish County experience.',
  },
  {
    question: 'How do we start?',
    answer:
      'A free in-home consultation. Kim walks the home, gives an honest read on what it would sell for today and what work (if any) is worth doing, and lays out the timeline. No pressure to list. Text or call Kim directly at (425) 250-9422.',
  },
];

export default function HomeTransitionTeamPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="One team for the whole transition."
          subtitle="Repairs, staging, selling, and senior support, coordinated under one roof."
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="A warm, staged interior prepared for sale."
          subtitleStyle="body"
        />

        {/* AEO opener */}
        <section style={{ padding: '56px 24px 8px', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
              Most moves are not just a sale. They are a repair list, a staging project, a
              timeline, and sometimes the hardest family conversation of the decade. The
              Pelham Group NW Home Transition Team exists so one call covers all of it:
              licensed contractors, in-house staging, professional listing marketing, and
              SRES-certified guidance for seniors and their families, led by a broker with
              17 years in Snohomish County. When needed, payment for pre-sale repairs can
              defer until closing.
            </p>
          </div>
        </section>

        {/* THE THREE PILLARS */}
        <section style={{ padding: '56px 24px 72px', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {PILLARS.map((p) => (
              <div
                key={p.title}
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-clay)',
                  borderRadius: 8,
                  padding: '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem', color: 'var(--color-clay)', margin: '0 0 8px 0', lineHeight: 1.1 }}>
                  {p.eyebrow}
                </p>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 12px 0', lineHeight: 1.25 }}>
                  {p.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem', color: '#555', lineHeight: 1.7, margin: '0 0 18px 0', flex: 1 }}>
                  {p.body}
                </p>
                <Link href={p.href} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-forest)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  {p.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF: case study band */}
        <section style={{ padding: '64px 24px', background: 'var(--color-forest)' }}>
          <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: 'var(--color-clay-light, #E5C29A)', margin: '0 0 10px 0', lineHeight: 1.1 }}>
              see the whole thing, start to finish,
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--color-cream)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              The owners moved out of state. The team did the rest.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'rgba(248,245,240,0.85)', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              Paint, flooring, hardware, refinishing, staging, and listing photography on an
              Everett condo, with the owners a thousand miles away. Sixty-four before and
              after photos, room by room.
            </p>
            <Link
              href="/case-study/concierge-condo"
              style={{ display: 'inline-block', background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', padding: '13px 26px', borderRadius: 4, textDecoration: 'none' }}
            >
              See the case study →
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS (real Google reviews) */}
        <section style={{ padding: '72px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: 'var(--color-clay)', margin: '0 0 20px 0', lineHeight: 1.1, textAlign: 'center' }}>
              from families who handed us the keys,
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-clay)', borderRadius: 6, padding: '26px 28px', margin: 0 }}>
                  <blockquote style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--color-text)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-forest)', margin: 0 }}>{t.name}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#777', margin: '2px 0 0 0' }}>{t.context} · 5-star Google review</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '24px 0 0 0' }}>
              5.0 stars across 41 Google reviews.{' '}
              <Link href="/testimonials" style={{ color: 'var(--color-forest)' }}>Read them all</Link>.
            </p>
          </div>
        </section>

        {/* FAQ (FAQPage schema auto-emitted) */}
        <FAQSection title="Home Transition Team, common questions" faqs={faqs} backgroundColor="var(--color-cream)" />

        {/* CTA */}
        <section style={{ padding: '72px 24px 88px', background: '#fff' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.5rem', color: 'var(--color-clay)', margin: '0 0 10px 0', lineHeight: 1.1 }}>
              start with a conversation,
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Free in-home consultation. Honest numbers. No pressure.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: '#555', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              Kim walks the home, tells you what it would sell for today and what work is
              actually worth doing, and lays out the timeline. Lots of families use it as a
              sanity check. Walking alongside you is the whole job.
            </p>
            <p style={{ margin: 0 }}>
              <a
                href="sms:+14252509422"
                style={{ display: 'inline-block', background: 'var(--color-forest)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', marginRight: 12 }}
              >
                Text Kim: (425) 250-9422
              </a>
              <Link
                href="/contact"
                style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-forest)', textDecoration: 'underline', textUnderlineOffset: 3, padding: '14px 4px' }}
              >
                Or send a message
              </Link>
            </p>
          </div>
        </section>

        <KimCaresNote />
      </main>
      <Footer />
    </>
  );
}
