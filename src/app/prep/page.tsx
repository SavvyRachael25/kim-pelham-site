import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import FAQSection from '@/components/FAQSection';

/**
 * /prep: the pre-listing concierge offer.
 *
 * Structure follows a proven marketing-page sequence: hero with one primary
 * action, what is handled, how it works, a mid-page call to action, proof,
 * what it costs, then FAQs. Built in the site's own inline-style system rather
 * than a template's classes so it matches every other page.
 *
 * Copy guardrails (business-model.md): staging is CHARGED and kept affordable,
 * never free. The differentiator is no monthly furniture rental fee. Repair
 * payment is normally made as work completes, deferred only if a seller needs it.
 */

const s = {
  h2: { fontFamily: 'var(--font-heading)', fontSize: '2.3rem', fontWeight: 400, color: 'var(--color-forest)', lineHeight: 1.12, marginBottom: '14px' } as const,
  eyebrow: { fontFamily: 'var(--font-handwritten)', fontSize: '1.5rem', color: 'var(--color-clay)', marginBottom: '6px' } as const,
  label: { fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-clay)', marginBottom: '10px' } as const,
  body: { fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--color-text)', marginBottom: '16px' } as const,
  wrap: { maxWidth: '1120px', margin: '0 auto', padding: '0 24px' } as const,
};

const handled = [
  { t: 'The prep and repairs', d: 'Paint, flooring, hardware, surrounds, lighting, and the repairs a buyer would flag anyway. Our own crew does the work, so it is one point of contact instead of five vendors who do not talk to each other.' },
  { t: 'The staging', d: 'I stage in house, myself, occupied homes included. Most staging companies will not take those on. You do not have to move out of your own house to show well.' },
  { t: 'The move', d: 'If getting out is part of the problem, that is handled too. This is the piece most sellers are quietly dreading, especially families sorting through decades of a life.' },
  { t: 'The sale', d: 'The same person who prepped your house lists it. Every week we review showings and feedback together and adjust. That is a conversation, not a report you never receive.' },
];

const steps = [
  { t: 'We walk the house together', d: 'I tell you what actually moves the number and what does not. Plenty of houses need less than people expect, and I will say so rather than sell you work you do not need.' },
  { t: 'You get one scope and one price', d: 'Repairs, remodeling, and staging in a single plan with the timeline attached. No chasing three bids and hoping they line up.' },
  { t: 'The crew works, I stage it', d: 'You keep living there if you want to. We work around you, not the other way around.' },
  { t: 'It goes on the market and I sell it', d: 'Photography, listing, showings, feedback, and the weekly conversation about all of it until it closes.' },
];

const faqs = [
  { question: 'Do you charge for staging?', answer: 'Yes. I charge for staging and I keep it affordable, because staging is not my profit center. It is how the house sells. What I do not charge is a monthly furniture rental fee, and staging companies commonly bill $800 to $2,000 a month for the furniture alone.' },
  { question: 'What does the prep cost?', answer: 'It depends on the house: the size, how much furniture needs to come in, and the logistics. That is why the first step is walking it together. You get one scope and one number before anything starts.' },
  { question: 'What if I cannot pay for repairs up front?', answer: 'Say so early. Payment on repairs is normally made as the work is completed, and it can be deferred until closing when a seller needs that. It is an option, not the standard arrangement, and it is a straightforward conversation.' },
  { question: 'Can you stage a house I am still living in?', answer: 'Yes, and I do it often. Occupied staging is work most staging companies refuse. You do not have to move out or put your life in storage to get the house shown well.' },
  { question: 'What if I live out of state?', answer: 'That is a normal week here. Two homeowners moved out of state and their condo went on the market anyway. They could not fly back for paint, flooring, hardware, lighting, or staging, so we took the keys and ran all of it. Out-of-state sellers get weekly progress updates.' },
  { question: 'Do I have to use you as the broker to get the prep work?', answer: 'The prep and the sale are one service. That is the whole point of it: the person who got the house ready is the person answering for how it sells.' },
];

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>

        {/* Hero: one problem, one action */}
        <section style={{ backgroundColor: 'var(--color-cream)', padding: '72px 0 64px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ ...s.wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <p style={s.eyebrow}>before it goes on the market,</p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.3rem, 4.6vw, 3.5rem)', fontWeight: 700, lineHeight: 1.04, color: 'var(--color-forest)', marginBottom: '18px' }}>
                Your house needs work first. <em style={{ color: 'var(--color-clay)', fontStyle: 'italic', fontWeight: 600 }}>You should not have to manage five vendors to get it done.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.3rem', lineHeight: 1.5, color: 'var(--color-text-light)', marginBottom: '26px' }}>
                Repairs, remodeling, staging, and the move, handled by one person who is also the broker selling it.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-forest)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none' }}>
                  Book a walk-through
                </Link>
                <a href="tel:+14252509422" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: 'var(--color-clay)', textDecoration: 'none', padding: '14px 8px' }}>
                  Or call 425-250-9422, I answer my own phone
                </a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <Image src="/images/kim-with-client-on-couch.jpg" alt="Kim Pelham talking through a plan with a client" width={1024} height={683} priority
                style={{ width: '100%', height: 'auto', aspectRatio: '3 / 2', objectFit: 'cover', borderRadius: '6px', display: 'block', border: '3px solid var(--color-clay)' }} />
            </div>
          </div>
        </section>

        {/* What is handled */}
        <section style={{ backgroundColor: '#fff', padding: '72px 0 56px' }}>
          <div style={s.wrap}>
            <p style={s.label}>What is handled</p>
            <h2 style={s.h2}>Four things, one person.</h2>
            <p style={{ ...s.body, maxWidth: '52rem' }}>
              Most sellers are quoted by a general contractor, a stager, a handyman, a mover, and a broker, and then left to make those five schedules agree. That coordination is the actual work, and it is the part I take off your plate.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px', marginTop: '30px' }}>
              {handled.map((h) => (
                <div key={h.t} style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '26px 24px' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--color-forest)', marginBottom: '8px' }}>{h.t}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem', lineHeight: 1.7, color: 'var(--color-text)', margin: 0 }}>{h.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ backgroundColor: 'var(--color-cream)', padding: '68px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={s.wrap}>
            <p style={s.eyebrow}>how it goes,</p>
            <h2 style={s.h2}>Four steps, one phone number.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '26px', marginTop: '28px' }}>
              {steps.map((st, i) => (
                <div key={st.t}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-clay)', color: 'var(--color-clay)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '12px' }}>{i + 1}</div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-forest)', marginBottom: '6px', lineHeight: 1.2 }}>{st.t}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem', lineHeight: 1.7, color: 'var(--color-text)', margin: 0 }}>{st.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section style={{ backgroundColor: '#fff', padding: '72px 0 60px' }}>
          <div style={{ ...s.wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '44px', alignItems: 'center' }}>
            <div>
              <p style={s.label}>What it looks like in practice</p>
              <h2 style={{ ...s.h2, fontSize: '2rem' }}>They could not fly back. It went on the market anyway.</h2>
              <p style={s.body}>
                Two homeowners moved out of state. Their condo still needed paint, flooring, hardware, surrounds, lighting, and staging, and they could not be in town for any of it. They handed over the keys. We ran the prep, staged the unit ourselves, and got it listed without making them get on a plane.
              </p>
              <p style={{ ...s.body, marginBottom: 0 }}>
                <Link href="/condo-concierge" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>Read the whole case study &rarr;</Link>
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
              {[
                { v: '102.3%', l: 'Average sale-to-list ratio' },
                { v: '17', l: 'Years in real estate' },
                { v: '$0', l: 'Monthly furniture rental fee' },
                { v: '2', l: 'Active buyers at a time, max' },
              ].map((k) => (
                <div key={k.l} style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px 18px' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '2rem', color: 'var(--color-forest)', lineHeight: 1, margin: 0 }}>{k.v}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--color-text-light)', marginTop: '7px', lineHeight: 1.45 }}>{k.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What it costs, told straight */}
        <section style={{ backgroundColor: 'var(--color-forest)', color: 'var(--color-cream)', padding: '66px 0' }}>
          <div style={s.wrap}>
            <p style={{ ...s.label, color: '#D4A07A' }}>What it costs</p>
            <h2 style={{ ...s.h2, color: 'var(--color-cream)', fontSize: '2.1rem' }}>Told straight, before you ask.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '24px' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.75, opacity: 0.92, marginBottom: '14px' }}>
                  <strong>Staging is charged, and I keep it affordable.</strong> It is not my profit center. What I do not charge is a monthly furniture rental fee, and staging companies commonly bill $800 to $2,000 a month for the furniture alone. On a house that takes three months to sell, that difference is real money.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.75, opacity: 0.92, margin: 0 }}>
                  <strong>Price depends on the house.</strong> Its size, how much furniture has to come in, and the logistics. You get one number before anything begins.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.75, opacity: 0.92, marginBottom: '14px' }}>
                  <strong>Repairs are normally paid as the work is completed.</strong> If cash before closing is the problem, say so at the walk-through. Payment can be deferred until closing when a seller needs that.
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.5, color: '#D4A07A', margin: 0 }}>
                  This spring, every one of my listings but one sold at full price, and two sold over asking.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '32px', paddingTop: '26px', borderTop: '1px solid rgba(248,245,240,0.22)', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none' }}>
                Book a walk-through
              </Link>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem', opacity: 0.85 }}>
                No obligation, and I will tell you if your house needs less than you think.
              </span>
            </div>
          </div>
        </section>

        <FAQSection title="Questions sellers actually ask" faqs={faqs} backgroundColor="#fff" />
      </main>
      <Footer />
    </>
  );
}
