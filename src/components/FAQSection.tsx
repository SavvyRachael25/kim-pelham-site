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
  /**
   * Emit FAQPage JSON-LD schema alongside the visible Q&A. Default true.
   * AI engines (ChatGPT, Perplexity, Google AI Overviews) lift verbatim
   * answers from FAQPage schema, so this should stay on unless there's
   * a duplicate-schema concern on a given page.
   */
  emitSchema?: boolean;
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  faqs,
  backgroundColor = '#FFFFFF',
  emitSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = emitSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor,
      }}
    >
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
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
                {/*
                  Render the answer in the DOM at all times (visually
                  collapsed when not open) so SEO/AEO crawlers can read it.
                  Previously this was a conditional render (`isOpen && ...`)
                  which meant the answer text only entered the DOM after
                  a user click — invisible to bots. Audit (Savvy AEO,
                  2026-05-13) flagged this as the cause of Citability 35.
                */}
                <div
                  style={{
                    padding: isOpen ? '0 28px 24px' : '0 28px 0',
                    borderTop: isOpen ? '1px solid #F0EDE7' : 'none',
                    maxHeight: isOpen ? '2000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, padding 0.2s ease',
                  }}
                  aria-hidden={!isOpen}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#555555',
                      margin: isOpen ? '16px 0 0 0' : '0',
                    }}
                  >
                    {faq.answer.split(/(\bhttps?:\/\/[^\s)]+)/g).map((part, i) =>
                      /^https?:\/\//.test(part) ? (
                        <a
                          key={i}
                          href={part}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#B8845C', textDecoration: 'underline' }}
                        >
                          {part}
                        </a>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
