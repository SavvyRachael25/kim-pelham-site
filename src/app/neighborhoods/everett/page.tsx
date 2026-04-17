'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const stats = [
  { label: 'Median Home Price', value: '$548K–$635K', sub: '2025 range' },
  { label: 'Avg Days on Market', value: '37 days', sub: 'late 2025' },
  { label: 'Population', value: '113,000+', sub: 'largest in county' },
  { label: 'Commute to Seattle', value: '30–45 min', sub: 'via I-5' },
];

const insiderFacts = [
  { title: 'Jetty Island is a local treasure  -  and it\'s free', body: 'A 2-mile natural sand barrier island accessible by free ferry from the Port of Everett marina every summer. Warm, shallow water perfect for kids. Most Seattle people have never heard of it. Everett locals consider it their secret.' },
  { title: 'That building you can see from I-5 is the world\'s largest by volume', body: 'The Boeing Everett factory is genuinely one of the most extraordinary things in Washington state. It\'s so big it generates its own weather inside. If you\'re moving here for aerospace, you\'re in the right zip code.' },
  { title: 'The Sounder train goes straight to Seattle  -  no parking, no highway stress', body: 'Many Everett homeowners build their commute around the Sounder North line. Hop on at Everett Station, arrive at King Street Station in downtown Seattle. On a bad traffic day, it might be the only thing that keeps you sane.' },
  { title: 'Silver Lake is the sleeper neighborhood nobody talks about', body: 'Tucked at the south end of Everett near the King County line, Silver Lake has access to the actual lake, quieter streets, and strong proximity to Mill Creek pricing without the Mill Creek price tag. Ask Kim about this one.' },
  { title: 'The waterfront is in the middle of a serious glow-up', body: 'Portside, Grand Avenue Park, the marina district  -  the Everett waterfront is mid-transformation and property values in that corridor are moving accordingly. Early is better.' },
  { title: 'Part of Everett feeds into the Mukilteo School District', body: 'The southwest chunk of Everett (roughly the area near Airport Road) falls in the Mukilteo School District rather than Everett SD. Mukilteo SD is consistently rated higher. This matters when you\'re shopping addresses.' },
];

export default function EverettPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Everett, WA"
          subtitle="Where waterfront living meets real-world affordability"
          image="/images/neighborhood-01-everett-marina.jpg"
          imageAlt="Everett marina and waterfront, Snohomish County WA"
        />

        {/* Intro */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>
              The Honest Take on Everett
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              Everett is the most misunderstood city in Snohomish County. People drive through it on I-5 and see Boeing and big-box stores, and they keep going. That&apos;s their loss. Because once you get off the highway and actually explore  -  the marina, Jetty Island, the neighborhoods tucked above the water in North Everett, the revitalized 2nd Street corridor  -  Everett starts to make a lot of sense.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              This is the most affordable entry point in Snohomish County for buyers coming from Seattle or King County. Median home prices run $100K–$300K below Bothell and Mill Creek, and you still get Sounder access, good schools in the right pockets, and a city that&apos;s clearly investing in itself. The waterfront is actively revitalizing. The timing is good.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              I&apos;ve sold a lot of homes in Everett. I know which neighborhoods hold value, which ones are up-and-coming, and which ones to avoid. If you want a real conversation about it, I&apos;m happy to have it.
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
              What Insiders Know About Everett
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
              Everett School District serves most of the city and rates about a 6/10 on GreatSchools. Perfectly solid for many families  -  above average for the region. But here&apos;s the insider move: the southwest portion of Everett (near Airport Road and the south end of the city) feeds into the <strong>Mukilteo School District</strong>, which rates significantly higher.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              When I&apos;m working with buyers who have kids, I always show them the school boundary maps first. The address matters more than the city limits. Two houses a block apart can be in different districts.
            </p>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '28px', marginTop: '8px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Notable Schools</div>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: '#2C2C2C', paddingLeft: '20px', margin: 0 }}>
                <li><strong>Tambark Creek Elementary</strong>  -  ranked 14th in all of Washington state</li>
                <li><strong>Henry M. Jackson High School</strong> (Mill Creek area)  -  5-star rated, top 30 in WA</li>
                <li>Everett School District: 30 schools, above-average test scores for the region</li>
                <li>Mukilteo School District (SW Everett addresses): consistently higher ratings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's right for */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '40px' }}>Who Everett Is Right For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { title: 'First-time buyers', desc: 'Best entry point in Snohomish County. You can own a home here for what renting a 2-bedroom costs in Seattle.' },
                { title: 'Boeing/aerospace workers', desc: 'Paine Field and the Boeing Everett plant are right here. If you work in aerospace, this is home base.' },
                { title: 'Commuters who use the train', desc: 'Sounder North + Everett Station = no driving to Seattle. A rare and genuinely underrated advantage.' },
                { title: 'Waterfront lifestyle seekers', desc: 'Port Gardner Bay, the marina, Jetty Island  -  this city has more waterfront access than anywhere else in the county.' },
                { title: 'Investors', desc: 'Rental demand is strong, affordability is real, and the city is actively improving. The math works here.' },
                { title: 'Military families', desc: 'Naval Station Everett is right here. Proximity, community, and good value for the housing allowance.' },
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
            { question: 'Is Everett a good place to buy a home in 2025?', answer: 'Yes  -  it remains one of the most affordable cities in the Seattle metro with the least-appreciated upside. The waterfront revitalization, Paine Field commercial service expansion, and Naval Station presence create stable long-term demand. For first-time buyers or investors, the entry price and growth trajectory make a strong case.' },
            { question: 'What are the best neighborhoods in Everett to buy a home?', answer: 'North Everett (especially near Rucker Ave and Grand Ave) has charming older homes with water views. Silver Lake in south Everett is the sleeper pick  -  lake access at sub-Mill-Creek prices. The waterfront/marina corridor is actively improving. For newer construction, southeast Everett neighborhoods near the Mill Creek border offer good value.' },
            { question: 'Does Everett flood? What are the natural hazard concerns?', answer: 'Most of Everett proper is not in a high-risk flood zone. Low-lying areas near the Snohomish River delta to the east and some waterfront-adjacent areas carry more risk. A good inspection and flood zone check during due diligence covers this.' },
            { question: 'How is the commute from Everett to Seattle?', answer: '30–45 minutes by car on I-5 without traffic; 60–75+ minutes during weekday rush hour. The Sounder commuter train is the alternative  -  Everett to Seattle King Street Station with no highway stress. Many residents build their week around the train schedule.' },
            { question: 'What is the crime rate in Everett, WA?', answer: 'Like most large cities, Everett has variation by neighborhood. The downtown area has had issues with property crime that the city has been actively addressing. Residential neighborhoods  -  particularly north Everett, Silver Lake, and the east/southeast areas  -  are notably safer. Always ask me to pull specific neighborhood-level data for any address you\'re seriously considering.' },
          ]}
        />

        {/* CTA */}
        <section style={{ padding: '80px 20px', backgroundColor: '#2F5233', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 400, color: '#F8F5F0', marginBottom: '20px' }}>Thinking About Everett?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#F8F5F0', opacity: 0.9, lineHeight: 1.7, marginBottom: '40px' }}>
              I know every pocket of this city. Let&apos;s talk about which neighborhoods match what you&apos;re looking for.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8845C', color: '#FFFFFF', padding: '16px 48px', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              Let&apos;s Talk Everett
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
