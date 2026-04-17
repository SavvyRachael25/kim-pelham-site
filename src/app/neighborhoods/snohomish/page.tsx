'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const stats = [
  { label: 'Median Home Price', value: '$605K–$770K', sub: '2025 range' },
  { label: 'Avg Days on Market', value: '12–34 days', sub: 'faster than county avg' },
  { label: 'Population', value: '~12,000', sub: 'small city, big personality' },
  { label: 'Commute to Seattle', value: '35–50 min', sub: 'via I-5 or US-2' },
];

const insiderFacts = [
  { title: 'Snohomish is literally the Antique Capital of the Northwest', body: 'First Street downtown has over 400 antique dealers  -  not exaggerated, not a marketing slogan. People drive from Oregon, BC, and Eastern Washington specifically to shop here. If you buy a house in Snohomish, you will develop opinions about antiques whether you intended to or not.' },
  { title: 'You can kayak from your neighborhood on a Sunday morning', body: 'The Snohomish River runs right through town. Pilchuck Park has kayak and canoe launch access. The Snohomish Estuary and the surrounding sloughs are a birding and paddling destination. This is an actual lifestyle, not a brochure claim.' },
  { title: 'The Centennial Trail ends (or starts) here  -  30+ miles of paved trail', body: 'The Centennial Trail runs from Snohomish north to Arlington  -  31.5 miles of paved, multi-use trail through Snohomish County. Cyclists, runners, inline skaters. If you live in Snohomish, you are steps from one of the great regional trails in the Pacific Northwest.' },
  { title: 'Victorian homes from the 1880s are still standing  -  and livable', body: 'Snohomish was settled in the 1850s and is one of the oldest towns in Snohomish County. The historic district has lovingly maintained late-19th-century homes. If you want actual character instead of "craftsman-inspired" new builds, this is where you look.' },
  { title: 'The drive home goes through actual farmland', body: 'Snohomish sits at the edge of the Snohomish River valley  -  and the valley is still actively farmed. U-pick farms, farm stands, Thomas Family Farm, Hopewell Farm. The Sunday drive for produce isn\'t even a drive; it\'s the commute home.' },
  { title: 'The Oxford Saloon has been open since 1900  -  and it\'s supposedly haunted', body: 'One of the oldest continually-operating bars in Washington state. The Oxford Saloon is a full bar and restaurant with a well-documented ghost history (Ghost Adventures has filmed here). It\'s the kind of place that makes a neighborhood feel like it has layers.' },
];

export default function SnohomishPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Snohomish, WA"
          subtitle="The Antique Capital of the Northwest  -  and the most charming city in the county"
          image="/images/neighborhood-03-snohomish-historic.jpg"
          imageAlt="Historic downtown First Street in Snohomish, WA"
        />

        {/* Intro */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>
              The Honest Take on Snohomish
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              People who buy in Snohomish didn&apos;t just buy a house  -  they bought a whole vibe. This is the city that has the most personality in Snohomish County, and the buyers it attracts know exactly what they want: character, community, outdoor access, and the kind of downtown you can actually walk to.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              Snohomish is small  -  about 12,000 people  -  but it punches way above its weight. First Street is a genuine destination. The river is right there. The Centennial Trail is accessible. The school district is above average. And the homes? You can find 1880s Victorians next to contemporary builds, all on tree-lined streets that look like someone designed them for a movie.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              The commute is the honest caveat. Snohomish is about 35–50 minutes to Seattle without traffic  -  US-2 and I-5 are your routes, and rush hour adds meaningful time. Most buyers here are hybrid or remote workers, or they&apos;ve decided the lifestyle trade-off is worth it. Many say it&apos;s the best decision they ever made.
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
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#555555' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insider Facts */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '12px' }}>
              What Insiders Know About Snohomish
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#666', marginBottom: '48px', lineHeight: 1.6 }}>
              The stuff your Zillow search won&apos;t tell you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {insiderFacts.map((fact, idx) => (
                <div key={fact.title} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px', alignItems: 'start' }}>
                  <div aria-hidden="true" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2F5233', color: '#F8F5F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{String(idx + 1).padStart(2, '0')}</div>
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
              The Snohomish School District serves the city and surrounding area, with 19 schools and about 9,400 students. The district earns above-average ratings for Snohomish County  -  4-year graduation rate of 91%, solid academic programming, and a district that Niche ranks as one of the better mid-size districts in the county.
            </p>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Snohomish School District Highlights</div>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: '#2C2C2C', paddingLeft: '20px', margin: 0 }}>
                <li><strong>Snohomish High School</strong>  -  strong academic record; 91% 4-year graduation rate</li>
                <li><strong>19 schools</strong> serving approximately 9,400 students</li>
                <li>Above-average test scores for Snohomish County</li>
                <li>Highly rated by Niche among mid-size county districts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '40px' }}>Who Snohomish Is Right For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Remote and hybrid workers', desc: 'Most Snohomish buyers aren\'t commuting to Seattle five days a week. If you\'re hybrid or fully remote, the lifestyle trade-off is completely worth it.' },
                { title: 'Character buyers', desc: 'If you\'ve ruled out "craftsman-inspired" new construction and want a home with actual history  -  Victorian, Craftsman, Foursquare  -  Snohomish is where you look.' },
                { title: 'Outdoor lifestyle people', desc: 'Kayaking, the Centennial Trail, Lord Hill Regional Park, farm stands  -  Snohomish is for people who want to use their weekends, not just watch them from a deck.' },
                { title: 'People who want "somewhere"', desc: 'Snohomish feels like a place. It has an identity. Buyers who want to belong to a real community  -  not just a zip code  -  choose this city.' },
                { title: 'Families who value schools + lifestyle together', desc: 'Solid schools, safe neighborhoods, small-town community, and outdoor access. Snohomish offers a balance that\'s genuinely hard to replicate.' },
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
            { question: 'Is Snohomish WA a good place to live?', answer: 'For the right buyer  -  absolutely one of the best in Snohomish County. It offers something most suburbs can\'t replicate: genuine character, historic downtown, walkable First Street, river access, Centennial Trail at your doorstep, and above-average schools. The caveat is the commute  -  Snohomish rewards hybrid and remote workers most.' },
            { question: 'What is there to do in Snohomish WA?', answer: 'More than people expect. Antique shopping on First Street (400+ dealers), kayaking the Snohomish River from Pilchuck Park, cycling the 31-mile Centennial Trail, hiking Lord Hill Regional Park (1,400 acres), visiting U-pick farms in the Snohomish Valley, and dining/drinking in the historic downtown corridor. The Oxford Saloon has been open since 1900.' },
            { question: 'How far is Snohomish from Seattle?', answer: 'About 30 miles north of Seattle  -  typically 35–50 minutes without traffic via I-5 or US-2. The reality in rush hour is 55–75 minutes depending on the route. Most residents who commute to Seattle either go during off-peak hours or do 2–3 days per week max.' },
            { question: 'Are homes in Snohomish expensive?', answer: 'Relative to other Snohomish County cities, Snohomish is mid-range. Median home prices run $605K–$770K, which is significantly above Marysville but meaningfully below Mill Creek and Bothell. Historic homes in the city core can run higher due to their character and location.' },
            { question: 'What zip code is Snohomish WA?', answer: 'The primary zip codes are 98290 (city of Snohomish and immediate area) and 98291 (another Snohomish area code). Some rural properties east of the city use 98296 (Woodinville area zip that overlaps into south Snohomish County). When in doubt, confirm the school district at the specific address.' },
          ]}
        />

        {/* CTA */}
        <section style={{ padding: '80px 20px', backgroundColor: '#2F5233', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 400, color: '#F8F5F0', marginBottom: '20px' }}>Snohomish Calling Your Name?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#F8F5F0', opacity: 0.9, lineHeight: 1.7, marginBottom: '40px' }}>
              I know the historic district, the pockets near the river, and which streets the locals actually want to live on. Let&apos;s find the right fit.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8845C', color: '#FFFFFF', padding: '16px 48px', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              Let&apos;s Talk Snohomish
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
