'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '18px', color: '#B8845C', marginBottom: '8px' }}>
          meet your agent
        </p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 700, color: '#2C2C2C', marginBottom: '40px' }}>
          The Realtor Next Door
        </h2>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: '260px', height: '260px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '4px solid #F0EDE7', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <Image
              src="/images/kim-pelham-headshot.jpg"
              alt="Kim Pelham"
              width={260}
              height={260}
              style={{ objectFit: 'cover', objectPosition: 'center 20%', width: '100%', height: '100%' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: '300px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>
              I&apos;m not the agent who shows up in a Mercedes with a designer bag. I&apos;m the one who shows up in boots because I just walked your crawl space. I&apos;ve lived in Snohomish County at three different chapters of my life — I know which streets flood in November, which coffee shops are worth the wait, and which neighborhoods still have that small-town feel.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>
              When you work with me, you get someone who answers her own phone, stages your home with her own hands, and fights for every dollar because she remembers what it felt like to stretch for that first mortgage.
            </p>
            <Link href="/about" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600, color: '#B8845C', textDecoration: 'underline' }}>
              Read More About Kim →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
