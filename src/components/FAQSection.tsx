'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  backgroundColor?: string;
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs, backgroundColor = '#FFFFFF' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 400,
            textAlign: 'center',
            margin: '0 0 60px 0',
            color: '#2C2C2C',
            letterSpacing: '0.5px',
          }}
        >
          {title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #E8E3DA',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  transition: 'box-shadow 0.2s ease',
                  boxShadow: isOpen ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '24px 28px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#2C2C2C',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: '1.25rem',
                      color: '#B8845C',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 24px',
                      borderTop: '1px solid #F0EDE7',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: '#555555',
                        margin: '16px 0 0 0',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
