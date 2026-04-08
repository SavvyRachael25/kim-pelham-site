'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const stats = [
  { label: 'Median Home Price', value: '~$1.1M', sub: 'mid-2025' },
  { label: 'Avg Days on Market', value: '15–20 days', sub: 'competitive market' },
  { label: 'School District', value: 'Northshore SD', sub: 'top 10 in Washington' },
  { label: 'Commute to Bellevue', value: '20–30 min', sub: 'via I-405' },
];

const insiderFacts = [
  { title: 'The school district is genuinely why people move here  -  and it\'s worth the price', body: 'Northshore School District is ranked #10 in all of Washington state. North Creek High School is top 25. If you have kids and you\'re choosing between Bothell and somewhere $200K cheaper, you are paying for the school district. Many buyers decide it\'s worth every dollar.' },
  { title: 'Woodinville wine country is literally 10 minutes away', body: 'Over 100 wineries and tasting rooms  -  and you can get to most of them without getting on a highway. If you appreciate weekend wine culture without a three-hour round trip, this is not an accident that Bothell homeowners talk about constantly.' },
  { title: 'The county line runs through the middle of the city  -  and it matters', body: 'Bothell straddles King and Snohomish Counties. Zip code 98021 (Canyon Park area, northeast Bothell) is Snohomish County. Zip 98011 is King County. Both feed into the same Northshore School District, but the tax structure and some services differ. Know which side of the line you\'re buying on.' },
  { title: 'The Sammamish River Trail is a 10-mile linear gem right through the city', body: 'It runs from Bothell Landing to Marymoor Park in Redmond  -  flat, paved, and heavily used. Cyclists, runners, families with strollers. It\'s the kind of amenity that sounds basic until you\'re using it on a Tuesday and realize you haven\'t driven anywhere all day.' },
  { title: 'McMenamins Anderson School is a hotel inside a converted junior high', body: 'Yes, really. The old Anderson Junior High was converted into a boutique hotel with multiple restaurants, a soaking pool, movie theater, and art throughout. It\'s one of the most distinctive local venues in all of Snohomish County and it\'s in downtown Bothell.' },
  { title: 'Canyon Park (98021) is where the growth is happening', body: 'University of Washington Bothell campus, tech office parks, newer apartment buildings, and proximity to Redmond via Canyon Road  -  the northeast Bothell / Canyon Park area is the upside zip code. Established homeowners are here. New buyers are coming fast.' },
];

export default function BothellPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Bothell, WA"
          subtitle="Top-ranked schools, revitalized downtown, Eastside access without Eastside prices"
          image="/images/neighborhood-02-bothell-main-street.jpg"
          imageAlt="Bothell downtown Main Street with Sammamish River in background"
        />

        {/* Intro */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>
              The Honest Take on Bothell
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              Bothell has become one of the most desirable addresses in Snohomish County  -  and the price reflects it. When I talk to buyers who are relocating from the Eastside or coming from King County, Bothell is usually the city that keeps coming up. The reasons are consistent: Northshore School District, the revitalized downtown, and the ability to get to Bellevue or Redmond in 20–30 minutes without going through Seattle.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              The median home price here sits around $1.1M. That&apos;s not a typo, and it&apos;s not going to surprise anyone who has been shopping the Eastside. But for what King County would charge you for a similar home in a comparable location, Bothell still represents real value  -  especially when you factor in lot sizes and the quality of the school district.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              This is a competitive market. Homes move fast. If you&apos;re serious about Bothell, you need someone who knows the inventory and can move quickly. That&apos;s what I&apos;m here for.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '60px 20px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 400, color: '#2C2C2C', textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Market Snapshot
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {stats.map((s) => (
                <div key={s.label} style={{ backgroundColor: '#FFFFFF', padding: '28px 24px', borderRadius: '6px', textAlign: 'center', border: '1px solid #E8E3DA' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '8px' }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: '#2C2C2C', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#555555' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insider Facts */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '12px' }}>
              What Insiders Know About Bothell
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#666', marginBottom: '48px', lineHeight: 1.6 }}>
              The stuff your Zillow search won&apos;t tell you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {insiderFacts.map((fact, idx) => (
                <div key={fact.title} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px', alignItems: 'start' }}>
                  <div aria-hidden="true" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2F5233', color: '#F8F5F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{String(idx + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', fontWeight: 700, color: '#2C2C2C', marginBottom: '8px' }}>{fact.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: '#555555', margin: 0 }}>{fact.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schools */}
        <section style={{ padding: '80px 20px', backgroundColor: '#F8F5F0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>Schools: The Full Picture</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              The Northshore School District is the single most-cited reason families move to Bothell. It&apos;s ranked #10 in Washington state out of 247 districts. North Creek High School sits in the top 25 high schools in the entire state. If school quality is a priority  -  not just a preference, but an actual priority  -  Bothell is the answer.
            </p>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Northshore School District Highlights</div>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: '#2C2C2C', paddingLeft: '20px', margin: 0 }}>
                <li><strong>North Creek High School</strong>  -  ranked top 25 in Washington state</li>
                <li><strong>Woodinville High School</strong>  -  ranked top 20 in Washington state</li>
                <li><strong>Inglemoor High School</strong>  -  ranked top 40 in Washington state</li>
                <li><strong>Bothell High School</strong>  -  ranked top 60 in Washington state</li>
                <li>District: 39 schools, 63% math proficiency, 75% reading proficiency</li>
                <li>Ranked #10 out of 247 school districts in Washington state</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '40px' }}>Who Bothell Is Right For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Tech workers (Eastside access)', desc: 'Microsoft, Amazon, and dozens of tech companies in Redmond and Bellevue are 20–30 minutes away. This is the suburban pick for Eastside workers who want more space.' },
                { title: 'School-first families', desc: 'If Northshore SD is non-negotiable, you\'re in Bothell. Full stop. The school district drives a meaningful portion of this market.' },
                { title: 'Wine and outdoors people', desc: 'Woodinville wine country, the Sammamish River Trail, Bothell Landing Park  -  weekend quality of life here is genuinely high.' },
                { title: 'Move-up buyers from south Snohomish County', desc: 'Buyers upgrading from Lynnwood, Kenmore, or south Everett often land in Bothell. It\'s the step up without leaving the county.' },
                { title: 'Downtown lifestyle seekers', desc: 'Bothell\'s revitalized Main Street has real walkability  -  restaurants, cafes, the river. If you want urban energy without urban density, this works.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '24px', backgroundColor: '#F8F5F0', borderRadius: '6px', border: '1px solid #E8E3DA' }}>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 700, color: '#2F5233', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          backgroundColor="#F8F5F0"
          faqs={[
            { question: 'Is Bothell in King County or Snohomish County?', answer: 'Both. Bothell straddles the county line. Zip code 98011 is King County; zip code 98021 (Canyon Park area, northeast Bothell) is Snohomish County. Both fall within the Northshore School District, so school quality isn\'t affected. Property taxes and some county services differ between the two sides.' },
            { question: 'What is the Northshore School District rating?', answer: 'Northshore School District is ranked #10 out of 247 school districts in Washington state. North Creek High School is consistently top 25 in the state. This is the primary reason families choose Bothell over comparable cities.' },
            { question: 'Is Bothell expensive to live in?', answer: 'Yes, relatively. Median home prices in Bothell are around $1.1M as of 2025  -  some of the highest in Snohomish County. But compared to equivalent homes in King County cities at similar distance from Bellevue or Seattle, Bothell still represents value. Families consistently cite schools and lifestyle as justifying the price.' },
            { question: 'How far is Bothell from Microsoft and Amazon?', answer: 'Bothell to Microsoft\'s Redmond campus: approximately 20 minutes via I-405 without traffic. To Amazon\'s Seattle headquarters: 30–40 minutes via I-405 or SR-522 to the University District, then downtown. Many Bothell residents at Amazon specifically commute to the Eastside office campuses.' },
            { question: 'What neighborhoods in Bothell are best for families?', answer: 'The Canyon Park area (zip 98021) and North Bothell feed into North Creek High School  -  the most in-demand school in the district. The Shelby Creek, North Creek, and Canyon Park neighborhoods specifically offer newer construction, good trail access, and proximity to the UW Bothell campus.' },
          ]}
        />

        {/* CTA */}
        <section style={{ padding: '80px 20px', backgroundColor: '#2F5233', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 400, color: '#F8F5F0', marginBottom: '20px' }}>Interested in Bothell?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#F8F5F0', opacity: 0.9, lineHeight: 1.7, marginBottom: '40px' }}>
              This market moves fast. Let&apos;s get you set up with current listings and talk about which neighborhoods fit your priorities.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8845C', color: '#FFFFFF', padding: '16px 48px', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              Let&apos;s Talk Bothell
            </Link>
            <div style={{ marginTop: '24px' }}>
              <Link href="/neighborhoods" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#F8F5F0', opacity: 0.7, textDecoration: 'none' }}>
                ← Back to All Neighborhoods
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
