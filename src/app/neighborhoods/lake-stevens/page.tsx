'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

const stats = [
  { label: 'Median Home Price', value: '$662K–$715K', sub: '2025 range' },
  { label: 'Avg Days on Market', value: '~19 days', sub: 'very competitive' },
  { label: 'School District', value: 'Lake Stevens SD', sub: '#2 in Snohomish County' },
  { label: 'Commute to Everett', value: '10–15 min', sub: 'via US-2' },
];

const insiderFacts = [
  { title: 'Lake Stevens is the largest lake in Snohomish County  -  and it\'s warm', body: 'The lake itself sits at the center of the city\'s identity. Multiple public beach access points, a boat launch at Lundeen Park, summer swimming that feels more like a Midwest lake town than Western Washington. The water warms up enough to actually swim in  -  which is not true of Puget Sound. If you want actual lake life, this is the real deal.' },
  { title: 'Lake Stevens is one of the fastest-growing cities in WA state', body: 'The city has grown 40%+ in population over the past decade. That growth means new construction inventory, newer schools being built, improving retail and services, and an infrastructure investment cycle actively in progress. Early buyers have consistently seen appreciation outpace the county average.' },
  { title: 'The school district is ranked #2 in all of Snohomish County', body: 'Lake Stevens School District is Niche-ranked #2 in the county  -  above Everett, Snohomish, and Marysville. Lake Stevens High School is rated A- with a 9/10 college readiness score from GreatSchools. For families who want top-tier schools without the Mill Creek or Bothell price tag, Lake Stevens is one of the most underrated moves in the county.' },
  { title: 'US-2 goes all the way to Stevens Pass ski resort', body: 'Lake Stevens sits on the US-2 corridor, which heads east through Monroe, Sultan, and Skykomish to Stevens Pass ski area. That means winter skiing, summer hiking in the Cascades, and easy access to the mountain communities is baked into your geography. The trade-off is that US-2 through the Trestle is a chokepoint in rush hour  -  a real one.' },
  { title: 'The Centennial Trail runs through the city  -  30+ miles to Snohomish', body: 'Lake Stevens is the northern gateway to the Centennial Trail, which connects south through Marysville and all the way to Snohomish. Cyclists and runners use it regularly. You can bike to Snohomish city without getting on a road.' },
  { title: 'New construction here offers the best $/sq ft in the area', body: 'Lake Stevens has seen significant new construction activity throughout the 2010s and 2020s. That means buyers can often find 2015–2022 construction with modern layouts, energy-efficient systems, and larger garages at prices that would buy you a 1980s house in Mill Creek or a fixer in Snohomish. The value calculation is compelling.' },
];

export default function LakeStevensPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Lake Stevens, WA"
          subtitle="Largest lake in the county, #2-ranked schools, and the best new construction value in Snohomish"
          image="/images/neighborhood-lake-stevens-aerial.jpg"
          imageAlt="Lake Stevens WA aerial view of the lake and surrounding community"
        />

        {/* Intro */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2F5233', marginBottom: '24px' }}>
              The Honest Take on Lake Stevens
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              Lake Stevens is the most underrated city in Snohomish County  -  and the buyers who figure that out early have done well. You get the largest lake in the county, the #2-ranked school district in the county, meaningful new construction inventory, and prices that are $200K–$400K below Bothell and Mill Creek. The trade-off is a commute that depends heavily on US-2 traffic.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C', marginBottom: '20px' }}>
              This is a city that&apos;s actively growing  -  population up 40%+ over the past decade. That growth brings improving retail, better restaurant options, newer schools, and infrastructure investment. The buyers I&apos;ve worked with here are primarily families with kids who did the school district math and remote workers who want actual waterfront and outdoor access without paying waterfront prices.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#2C2C2C' }}>
              The honest caveat: US-2 through the Trestle is a real bottleneck in rush hour. The 10-minute drive to Everett can become 25–35 minutes when it backs up. People who love Lake Stevens have made peace with this  -  or they commute off-peak.
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
              What Insiders Know About Lake Stevens
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
              Lake Stevens School District is ranked <strong>#2 in Snohomish County</strong> by Niche  -  above Everett, Snohomish, and Marysville school districts. Lake Stevens High School holds an A- rating with a 9/10 college readiness score from GreatSchools. This is consistently one of the most underappreciated facts about Lake Stevens real estate.
            </p>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Lake Stevens School District</div>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: '#2C2C2C', paddingLeft: '20px', margin: 0 }}>
                <li><strong>Lake Stevens High School</strong>  -  A- (Niche), 9/10 college readiness (GreatSchools)</li>
                <li><strong>Ranked #2</strong> school district in Snohomish County (Niche)</li>
                <li>16 schools serving approximately 9,800 students</li>
                <li>Strong CTE (Career &amp; Technical Education) programming</li>
                <li>Actively expanding facilities to keep pace with city growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, color: '#2C2C2C', marginBottom: '40px' }}>Who Lake Stevens Is Right For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Value-focused families who want top schools', desc: 'The #2 school district in the county at $400K below Bothell pricing is not a small thing. Families who do this math and don\'t need the Northshore brand specifically often land here.' },
                { title: 'Waterfront lifestyle buyers', desc: 'Actual swimming lake, paddleboards, kayaks, summer evenings at the beach. This is a real lifestyle, not a marketing pitch.' },
                { title: 'Remote workers who want mountain access', desc: 'Lake life + Stevens Pass ski access via US-2 + work from home = a genuinely attractive quality-of-life combination for the right buyer.' },
                { title: 'New construction buyers', desc: 'More 2010s–2020s construction here than almost anywhere in the county. If you want modern layouts and energy efficiency without a custom-build price, Lake Stevens has inventory.' },
                { title: 'Growing families moving up from apartments', desc: 'This is a "first real house" city for a lot of buyers. Young families, young couples buying their first home  -  the combination of price, schools, and lifestyle draws them.' },
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
            { question: 'Is Lake Stevens WA a good place to live?', answer: 'For families and outdoor enthusiasts, Lake Stevens consistently ranks among the best value propositions in Snohomish County. You get the #2-ranked school district in the county, the largest lake, proximity to the Cascades, and meaningful new construction inventory  -  all at prices $200K–$400K below comparable school-quality suburbs.' },
            { question: 'Can you swim in Lake Stevens WA?', answer: 'Yes  -  and this is notable in Western Washington. The lake warms up enough in summer for genuine swimming, unlike Puget Sound or most regional lakes. Lundeen Park and Cavalero Beach Park both have public beach access and swimming areas. The lake is also popular for boating, paddleboarding, and kayaking.' },
            { question: 'What is the commute from Lake Stevens to Everett?', answer: '10–15 minutes on a normal day via US-2 East. However, the US-2 Trestle through Everett is a known bottleneck during rush hour  -  that 10-minute drive can stretch to 25–35 minutes on a bad morning. Most Lake Stevens residents plan their commute schedule around the Trestle timing or work with a hybrid schedule.' },
            { question: 'How are the schools in Lake Stevens WA?', answer: 'Lake Stevens School District is ranked #2 in Snohomish County by Niche. Lake Stevens High School carries an A- rating with a 9/10 college readiness score from GreatSchools. This is significantly better than what its prices imply, making it one of the most undervalued school district relative to home cost in the entire county.' },
            { question: 'Is Lake Stevens WA growing?', answer: 'Yes, substantially. The city\'s population has grown over 40% in the past decade and it\'s among the fastest-growing cities in Snohomish County. This growth brings improving retail and restaurants, new school construction, infrastructure investment, and continued appreciation pressure on home values.' },
          ]}
        />

        {/* CTA */}
        <section style={{ padding: '80px 20px', backgroundColor: '#2F5233', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 400, color: '#F8F5F0', marginBottom: '20px' }}>Lake Stevens Has Your Attention?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#F8F5F0', opacity: 0.9, lineHeight: 1.7, marginBottom: '40px' }}>
              I know the lakefront streets, the school boundaries, and which neighborhoods are positioned for the next wave of growth. Let&apos;s dig in.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8845C', color: '#FFFFFF', padding: '16px 48px', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              Let&apos;s Talk Lake Stevens
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
