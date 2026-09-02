'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import FAQSection from '@/components/FAQSection';
import NominationForm from '@/components/NominationForm';

const styles = {
  bodyP: { fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '20px' } as const,
  h2: { fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 400, color: 'var(--color-forest)', marginBottom: '16px', marginTop: '8px' } as const,
  eyebrow: { fontFamily: 'var(--font-handwritten)', fontSize: '1.5rem', color: 'var(--color-clay)', marginBottom: '6px' } as const,
  card: { background: '#fff', border: '1px solid #E8E3DA', borderRadius: '8px', padding: '26px 24px' } as const,
  cardH: { fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-forest)', marginBottom: '8px' } as const,
  cardP: { fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 } as const,
};

const faqs = [
  { question: 'Does the home need to be for sale?', answer: 'No. Most of the homes on the show are not for sale. The show is about the people and places that make a community, not about listings.' },
  { question: 'Does it cost anything to be featured?', answer: 'No. Being featured on a segment never costs the homeowner, the business, or the nonprofit anything.' },
  { question: 'Who decides what gets featured?', answer: 'Kim chooses segments with the show’s producers. Not every nomination airs. If something is not a fit for this season, it stays on the list for the next one.' },
  { question: 'Can I nominate my own home or business?', answer: 'Yes. Many of the best segments start with an owner who is proud of the place. Just say it is yours on the form.' },
  { question: 'What happens after I nominate something?', answer: 'Kim reads every nomination herself. If it looks like a fit, she reaches out to the owner to talk about filming, and if you nominated someone else’s place she checks with you first. Home nominators hear from her within a few days.' },
  { question: 'When does it air?', answer: 'Snohomish County segments film in October 2026. Air dates come from the network after editing, and Kim shares them with everyone who nominated.' },
];

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '72px 20px 56px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '48px', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: '#D4A07A', marginBottom: '8px' }}>something new,</p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.02, marginBottom: '18px' }}>
                I am hosting on <em style={{ color: '#D4A07A', fontStyle: 'italic', fontWeight: 600 }}>The American Dream TV</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.35rem', lineHeight: 1.4, opacity: 0.92, marginBottom: '22px' }}>
                A two-time Emmy-nominated, Telly Award-winning lifestyle show about the people and places that make a community. I am filming Snohomish County this fall, and I am looking for stories.
              </p>
              <a href="#nominate" style={{ display: 'inline-block', background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none' }}>Nominate a home, a business, or a nonprofit</a>
            </div>
            <div style={{ background: '#fff', borderRadius: '10px', padding: '22px 26px' }}>
              <Image src="/images/adtv-emmy-logo.png" alt="The American Dream TV, Emmy nominated" width={640} height={200} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
          </div>
          <div style={{ maxWidth: '1100px', margin: '40px auto 0', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '2.5px', textTransform: 'uppercase', opacity: 0.7, marginBottom: '12px' }}>As seen on</p>
            <div style={{ background: '#fff', borderRadius: '8px', padding: '14px 18px' }}>
              <Image src="/images/adtv-as-seen-on.png" alt="Prime Video, YouTube, Tubi, Fire TV, Apple TV, Roku, CNBC, Bloomberg Television" width={2048} height={139} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* What I am looking for */}
        <section style={{ padding: '72px 20px 40px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={styles.eyebrow}>what I am looking for,</p>
            <h2 style={styles.h2}>Three kinds of stories.</h2>
            <p style={{ ...styles.bodyP, maxWidth: '52rem' }}>
              Each segment is a few minutes of television about one place and the people behind it. I get to pick the places. That is where you come in.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', margin: '28px 0 8px' }}>
              <div style={styles.card}>
                <p style={styles.cardH}>A home with a story</p>
                <p style={styles.cardP}>A view, a history, a renovation, a house people slow down to look at. Waterfront, a hundred years old, or built by hand. It does not need to be for sale.</p>
              </div>
              <div style={styles.card}>
                <p style={styles.cardH}>A business worth knowing</p>
                <p style={styles.cardP}>The showroom, the restaurant, the shop, the maker. The places that make a town feel like itself and deserve a wider audience.</p>
              </div>
              <div style={styles.card}>
                <p style={styles.cardH}>A nonprofit doing real work</p>
                <p style={styles.cardP}>The people quietly holding the county together. If you know one, I want to meet them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nominate */}
        <section id="nominate" style={{ padding: '32px 20px 72px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: '40px', alignItems: 'start' }}>
            <div>
              <p style={styles.eyebrow}>how this works,</p>
              <h2 style={styles.h2}>I read every one myself.</h2>
              <p style={styles.bodyP}>Tell me what it is, where it is, and why. If it looks like a fit for this season, I reach out to whoever owns it to talk about filming. If it is not yours, I check with you first. If it is yours, expect a call from me within a few days.</p>
              <p style={styles.bodyP}>Not every nomination airs, and being featured never costs anyone anything. What does not fit this season stays on my list for the next one.</p>
              <p style={styles.bodyP}>First up this fall: the waterfront you did not know you could afford, a few doors down from a family who bought their second house on the same street.</p>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                Questions? Call or text me at <a href="tel:+14252509422" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>425-250-9422</a>. I answer my own phone.
              </p>
            </div>
            <NominationForm />
          </div>
        </section>

        {/* Kim strip */}
        <section style={{ padding: '56px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '150px minmax(0, 1fr)', gap: '28px', alignItems: 'center' }}>
            <Image src="/images/kim-headshot-msh.jpg" alt="Kim Pelham" width={150} height={150} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', border: '3px solid var(--color-clay)' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', color: 'var(--color-forest)', marginBottom: '6px' }}>Kim Pelham</p>
              <p style={{ ...styles.bodyP, marginBottom: '10px' }}>
                Real estate broker and home stager, 17 years in real estate and a Snohomish County broker since 2015, brokered by Katrina Eileen Real Estate. Voted Best of Snohomish County two years in a row, Best of Zillow, and now a host on The American Dream TV.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-text-light)', margin: 0 }}>
                <Link href="/about" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>More about Kim</Link>
              </p>
            </div>
          </div>
        </section>

        <FAQSection title="Nominating for the show: quick answers" faqs={faqs} backgroundColor="#fff" />
      </main>
      <Footer />
    </>
  );
}
