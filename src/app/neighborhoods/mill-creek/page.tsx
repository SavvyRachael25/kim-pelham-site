'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const stats = [
  { label: 'Median Home Price', value: '$925K–$1.09M', sub: '2025 range' },
  { label: 'Avg Days on Market', value: '22–39 days', sub: 'hot homes sell faster' },
  { label: 'Notable School', value: 'Jackson HS', sub: '5-star rated, top 30 in WA' },
  { label: 'Commute to Seattle', value: '35–45 min', sub: 'via I-5' },
];

const insiderFacts = [
  { title: 'Getting a kid into Henry M. Jackson High School is the whole game', body: 'Jackson HS is 5-star rated, top 30 in Washington state, and the reason many families choose Mill Creek over every other option. If your child feeds into Jackson through the Heatherwood Middle School pipeline, you are getting one of the best public school experiences in the state. This is not marketing  -  it\'s why homes in specific Mill Creek subdivisions command a premium over identical homes a mile away.' },
  { title: '23 miles of trails run directly through the community', body: 'The original 1970s planned community design embedded a trail network through the entire city  -  connecting neighborhoods, parks, and the Town Center. People use them. Every day. Families, runners, cyclists, dog walkers. It\'s the amenity that turns into a lifestyle, and it\'s what makes Mill Creek feel more livable than comparable-priced Eastside suburbs.' },
  { title: 'The whole city was originally built around a golf course', body: 'Mill Creek was designed in 1972 as Washington state\'s first modern planned city, centered around the Mill Creek Country Club and Golf Course. The course still runs through the middle of the residential areas  -  which means some home lots back up to fairways, and the landscaping throughout the city reflects that original design vision.' },
  { title: 'Mill Creek is one of the most diverse suburbs in the Seattle metro', body: 'About 25% of residents were born outside the U.S.  -  well above the county average. The community has a significant South Asian and East Asian population, particularly in the tech-worker demographic. If you\'re relocating from a major metro and want a suburb that actually reflects the world you came from, Mill Creek is notable.' },
  { title: 'Mill Creek Town Center is a real town center, not a strip mall', body: 'Restaurants, a grocery store, a hardware store, medical offices, coffee shops  -  all in a walkable mixed-use center that draws residents from the surrounding neighborhoods. On a Friday evening it has genuine energy. This is rare for suburban Snohomish County and it\'s a meaningful quality-of-life difference.' },
  { title: 'Over 53% of adults here have a college degree', body: 'More tech/math workers per capita than 95% of U.S. cities. The community is highly educated, high-income, and competitive in the real estate sense  -  this is an area where homes are well-maintained, HOAs are active, and the neighbors have strong opinions about curb appeal.' },
];

export default function MillCreekPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Mill Creek, WA"
          subtitle="The planned community that actually worked  -  and the schools that seal the deal"
          image="/images/property-02-mill-creek-home.jpg"
          imageAlt="Mill Creek WA home with tree-lined street"
        />

        {/* Intro */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>
              The Honest Take on Mill Creek
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              Mill Creek is what happens when planned community development is actually done well. Originally designed in 1972 around a golf course with a genuine trail network built into the bones of the city, Mill Creek has aged into one of the most consistently desirable addresses in Snohomish County. The streets are tree-named (Spruce, Cedar, Alder), the parks appear around corners, and the Town Center actually draws people out of their houses on a weekend.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              The conversation about Mill Creek always comes back to one thing: <strong>Henry M. Jackson High School</strong>. Five-star rated. Top 30 in Washington state. The feeder pipeline through Heatherwood Middle is the reason families with school-age children choose Mill Creek over Bothell, Everett, or anywhere else in the county at this price point. When I work with buyers who have kids, the school boundary map is the first thing we look at.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              Homes here range from $925K to well over $1M. In exchange, you get some of the best-maintained suburban streets in the region, a real trail network, and a community that takes quality seriously. It earns its price.
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
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888888' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insider Facts */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '12px' }}>
              What Insiders Know About Mill Creek
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
              Mill Creek falls within the Everett School District  -  specifically feeding into the <strong>Henry M. Jackson High School</strong> cluster, which is a different tier of performance than the broader Everett SD average. Jackson is 5-star rated with 82.57% ELA proficiency and a 82.7% graduation rate  -  numbers that put it solidly in the top tier of public high schools in Washington state.
            </p>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Mill Creek School Cluster</div>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: '#2C2C2C', paddingLeft: '20px', margin: 0 }}>
                <li><strong>Henry M. Jackson High School</strong>  -  5-star rated, top 30 in WA, 82.57% ELA proficiency</li>
                <li><strong>Heatherwood Middle School</strong>  -  primary feeder into Jackson HS</li>
                <li><strong>Mill Creek Elementary</strong>  -  neighborhood anchor school</li>
                <li>School boundary is the key metric  -  not all Mill Creek addresses feed into Jackson. Verify the boundary before you make an offer.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '40px' }}>Who Mill Creek Is Right For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { title: 'School-first families', desc: 'Jackson HS is one of the top 30 high schools in WA state. If academic outcomes are the #1 driver of your home search, Mill Creek (with a Jackson boundary address) is the answer in Snohomish County.' },
                { title: 'Tech workers who need trail access', desc: 'High proportion of tech and math workers already live here. 23 miles of trails + Town Center walkability = the suburb that rewards a hybrid work lifestyle.' },
                { title: 'Move-up buyers who want "done"', desc: 'Buyers coming from Lynnwood, Bothell, or south Snohomish who want a polished, established neighborhood where the infrastructure already exists.' },
                { title: 'International buyers and relocators', desc: '25% of residents born outside the U.S. The community is diverse and international buyers consistently choose Mill Creek for schools, safety, and established community feel.' },
                { title: 'Buyers who want the trail lifestyle built in', desc: 'Not all suburbs have trail access woven into the fabric of the community. Mill Creek does. If you run, bike, or walk daily, these 23 miles are in your front yard.' },
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
            { question: 'Is Mill Creek WA a good place to live?', answer: 'Consistently rated one of the best places to live in Snohomish County. The combination of top-tier schools, an embedded trail network, a genuine Town Center, and well-maintained neighborhoods makes it the benchmark suburb that other Snohomish County cities get compared to.' },
            { question: 'What school district is Mill Creek WA in?', answer: 'Mill Creek falls within the Everett School District, but specifically feeds into the Henry M. Jackson High School cluster  -  which performs dramatically above the Everett SD average. Jackson is 5-star rated and top 30 in Washington state. Always confirm the school boundary at the specific address you\'re considering, as district assignment depends on exact location.' },
            { question: 'How much does a home cost in Mill Creek WA?', answer: 'Median home prices in Mill Creek run $925K–$1.09M in 2025. Entry-level homes (smaller or older construction) can be found in the $750K–$900K range. Premium homes backing up to the golf course or on the larger lots can exceed $1.5M. The premium reflects the school district and planned community infrastructure.' },
            { question: 'Does Mill Creek WA have an HOA?', answer: 'Many subdivisions in Mill Creek have HOAs, though not all. The planned community structure means there are design standards throughout the city even in non-HOA areas. When you\'re seriously considering a property, I\'ll pull the specific HOA information, dues, and CC&Rs as part of the due diligence process.' },
            { question: 'How far is Mill Creek WA from Seattle?', answer: 'Mill Creek is about 20 miles north of Seattle  -  typically 35–45 minutes via I-5 without traffic, 50–70 minutes during rush hour. To Bellevue via I-405, the drive is typically 25–35 minutes. Mill Creek\'s central location between the two makes it appealing for households where one person commutes each direction.' },
          ]}
        />

        {/* CTA */}
        <section style={{ padding: '80px 20px', backgroundColor: '#2F5233', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 400, color: '#F8F5F0', marginBottom: '20px' }}>Mill Creek Is On Your List?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#F8F5F0', opacity: 0.9, lineHeight: 1.7, marginBottom: '40px' }}>
              I know which subdivisions feed into Jackson and which don&apos;t, which streets back up to the golf course, and what to watch for. Let&apos;s find the right address.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8845C', color: '#FFFFFF', padding: '16px 48px', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              Let&apos;s Talk Mill Creek
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
