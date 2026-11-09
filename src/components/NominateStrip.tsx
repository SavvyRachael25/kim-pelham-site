'use client';

// Homepage strip for Best of Snohomish County nominations.
// Hides itself after Nov 23, 2026, 11:59 PM Pacific (Nov 24, 07:59 UTC).

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ENDS = Date.parse('2026-11-24T07:59:00Z');

export default function NominateStrip() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(Date.now() < ENDS);
  }, []);
  if (!show) return null;
  return (
    <section style={{ backgroundColor: '#2F5233', padding: '12px 16px', textAlign: 'center' }}>
      <Link href="/nominate" style={{ color: '#F8F5F0', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
        Best of Snohomish County nominations are open through November 23.{' '}
        <span style={{ color: '#E5C29A', fontWeight: 700, borderBottom: '1.5px solid #E5C29A' }}>Nominate me &rarr;</span>
      </Link>
    </section>
  );
}
