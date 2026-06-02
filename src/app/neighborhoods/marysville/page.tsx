'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const stats = [
  { label: 'Median Home Price', value: '$655K to $675K', sub: '2025 range' },
  { label: 'Population', value: '~73,000', sub: '2nd largest city in county' },
  { label: 'Lot Sizes', value: 'Larger lots', sub: 'vs south Snohomish County' },
  { label: 'Commute to Everett', value: '15 to 20 min', sub: 'via I-5' },
];

const insiderFacts = [
  { title: 'The Tulalip Resort is a genuine regional destination  -  and it\'s literally next door', body: 'The Tulalip Resort Casino is a full resort  -  hotel, spa, multiple restaurants, entertainment, concerts. The Seattle Premium Outlets (Tulalip) next door draws shoppers from all over the Pacific Northwest. Marysville residents don\'t drive to a destination; they live near one. Property values near the Tulalip corridor reflect the economic engine it represents.' },
  { title: 'The Hibulb Cultural Center is one of the best museums in the state  -  almost nobody from Seattle knows it exists', body: 'The Hibulb Cultural Center is an award-winning museum documenting the history and culture of the Tulalip and Snohomish peoples. It won a National Trust for Historic Preservation award. If you move to Marysville, you will find out about this museum and you will feel bad about all the years you didn\'t know it was here.' },
  { title: 'Marysville has the best price-per-square-foot in the county for single-family homes', body: 'You get more house for your money in Marysville than anywhere else in Snohomish County with comparable city infrastructure. The trade-off is a longer commute to Seattle and a school district that is honestly below average. If you\'re not tied to top schools and you need maximum space for your budget, the math here is genuinely different.' },
  { title: 'Tulalip Bay and Mission Beach give you Puget Sound access', body: 'Ebey Waterfront and Mission Beach sit right on Puget Sound  -  scenic walks, salt air, views to the Olympic Mountains. This is not marketing language: standing at Mission Beach on a clear day with the Olympics across the water is a legitimate Pacific Northwest experience. Marysville has Puget Sound access that the southern Snohomish County suburbs don\'t.' },
  { title: 'Smokey Point (north Marysville) is essentially a different city', body: 'The Smokey Point area at the north end of Marysville (near the I-5/88th Street NE exit) has newer construction, different demographics, and a distinctly suburban feel compared to the historic downtown core. Many buyers who say "I don\'t want Marysville" actually mean they don\'t want the older parts of central Marysville  -  they haven\'t seen Smokey Point.' },
  { title: 'The Marysville Opera House hosts Seattle Opera  -  and charges $15', body: 'The Marysville Opera House is a legitimate performing arts venue that regularly hosts Seattle Opera productions, touring shows, and concerts. Ticket prices are a fraction of Seattle venues. This is the kind of thing that makes long-time residents evangelical about the city.' },
];

export default function MarysvillePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Marysville, WA"
          subtitle="The best value in Snohomish County  -  and more going on than most people realize"
          image="/images/neighborhood-marysville-aerial.jpg"
          imageAlt="Marysville WA aerial view with Puget Sound and Tulalip Bay"
        />

        {/* Intro */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>
              The Honest Take on Marysville
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              I&apos;m going to be straight with you about Marysville. The school district is below average  -  that&apos;s the honest caveat for families where school quality is a primary driver. Marysville School District scores below the county average on test metrics, and I won&apos;t pretend otherwise.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              But here&apos;s what&apos;s also true: Marysville is the second-largest city in Snohomish County, it has the best home value (dollars per square foot) of any major city in the county, it sits on Puget Sound with real waterfront access, the Tulalip Resort is right there, the historic downtown has genuine character, and the Smokey Point corridor in the north is growing fast with newer construction that looks nothing like what people picture when they hear "Marysville."
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              For first-time buyers, retirees, buyers who will send kids to private school, and buyers who just need maximum space for their budget  -  Marysville makes a lot of sense. The buyers who move here usually become its biggest advocates.
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
              What Insiders Know About Marysville
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
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>Schools: The Honest Picture</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              I won&apos;t sugarcoat this: <strong>Marysville School District scores below county averages</strong>  -  27% math proficiency and 41% reading proficiency. For families where public school quality is a top-three decision factor, I will typically recommend Lake Stevens, Snohomish, Bothell, or Mill Creek instead.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              That said  -  the district does offer something distinctive: a robust indigenous education program serving 1,200+ students with language instruction in Lushootseed (Tulalip tribal language), Japanese, Spanish, ASL, and French. For families connected to the Tulalip community or who value this cultural programming, it&apos;s a genuine differentiator.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              Many Marysville families supplement with private schools, charter options, or homeschool hybrid programs. This is part of the honest conversation you need to have before buying here.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '40px' }}>Who Marysville Is Right For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Value-first buyers', desc: 'Best price-per-square-foot in Snohomish County. If maximum space for your budget is the goal, the math here is different than anywhere else.' },
                { title: 'Retirees and downsizers', desc: 'Quieter pace, larger lots, Puget Sound access, Tulalip Resort nearby. Baby Boomers make up 36% of Marysville\'s population for a reason.' },
                { title: 'Private school families', desc: 'If your children will attend private school or a school choice program, Marysville\'s public school limitations become irrelevant and the value calculation becomes very compelling.' },
                { title: 'Waterfront lifestyle seekers', desc: 'Tulalip Bay and Mission Beach on Puget Sound. If you want Sound access without paying Mukilteo or Edmonds prices, Marysville is the move.' },
                { title: 'First-time buyers with a budget', desc: 'Under $700K for a real house with a real yard. For buyers who need to stay at a lower price point, Marysville offers more home than any other comparably-sized city in the county.' },
                { title: 'Tulalip community and tribal members', desc: 'The Tulalip Reservation and Tribe are a foundational part of Marysville\'s identity and economy. The community around the reservation has strong roots and real connection.' },
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
            { question: 'Is Marysville WA a good place to live?', answer: 'Depends entirely on your priorities. For value buyers, retirees, families using private schools, and people who want waterfront access and more space  -  yes, absolutely. For families who prioritize public school district performance above everything else, other Snohomish County cities will serve you better. The honest answer is that Marysville is underappreciated by people who haven\'t visited Smokey Point or stood at Mission Beach.' },
            { question: 'How are the schools in Marysville WA?', answer: 'Below county average in standardized test scores  -  27% math proficiency and 41% reading proficiency. This is the honest answer. The district does offer a distinctive indigenous language education program and serves a diverse community. Families prioritizing academic metrics typically consider Lake Stevens, Bothell, or Mill Creek instead.' },
            { question: 'What is Marysville WA known for?', answer: 'Several things: the Tulalip Resort Casino and Seattle Premium Outlets (major regional destinations), the Hibulb Cultural Center (award-winning museum), Mission Beach and Tulalip Bay waterfront access, the Marysville Opera House, and being Snohomish County\'s second-largest city with some of the best home value in the region.' },
            { question: 'How far is Marysville from Everett?', answer: 'About 10 to 15 miles north of Everett\'s center  -  typically a 15 to 20 minute drive via I-5 without traffic. Rush hour can extend this to 30 to 40 minutes on southbound I-5. The commute to Seattle is approximately 45 to 55 minutes without traffic, 60 to 75 minutes in peak hours.' },
            { question: 'Is Marysville WA safe?', answer: 'Like most large cities, Marysville has variation by area. The Smokey Point corridor in north Marysville and the neighborhoods adjacent to the Tulalip Resort area are generally safer and more suburban in character. Older parts of central Marysville near downtown have higher property crime rates. As with any city, I can pull address-specific data for any property you\'re seriously considering.' },
          ]}
        />

        {/* CTA */}
        <section style={{ padding: '80px 20px', backgroundColor: '#2F5233', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 400, color: '#F8F5F0', marginBottom: '20px' }}>Marysville Worth a Closer Look?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#F8F5F0', opacity: 0.9, lineHeight: 1.7, marginBottom: '40px' }}>
              I&apos;ll give you the real picture  -  which neighborhoods to target, which to avoid, and how to make the most of your budget here.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8845C', color: '#FFFFFF', padding: '16px 48px', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              Let&apos;s Talk Marysville
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
