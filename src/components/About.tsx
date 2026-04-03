'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Handwritten label */}
        <p className="about-label">meet your agent</p>

        {/* Heading */}
        <h2 className="about-heading">
          The Realtor{' '}
          <span className="about-underline-wrap">
            Next Door
            <svg className="about-squiggle" viewBox="0 0 200 20" preserveAspectRatio="none">
              <path
                d="M 0 10 Q 50 2 100 10 T 200 10"
                stroke="#B8845C"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Content row: photo left, text right */}
        <div className="about-row">
          {/* Photo */}
          <div className="about-photo-col">
            <div className="about-photo-frame">
              <Image
                src="/images/kim-pelham-headshot.jpg"
                alt="Kim Pelham, Associate Broker"
                width={280}
                height={210}
                quality={85}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <p className="about-photo-caption">Kim Pelham, Associate Broker</p>
          </div>

          {/* Text */}
          <div className="about-text-col">
            <p className="about-body">
              I'm not the agent who shows up in a Mercedes with a designer bag. I'm the one who
              shows up in boots because I just walked your crawl space. I've lived in Snohomish
              County at three different chapters of my life — I know which streets flood in
              November, which coffee shops are worth the wait, and which neighborhoods still have
              that small-town feel.
            </p>

            <p className="about-body">
              When you work with me, you get someone who answers her own phone, stages your home
              with her own hands, and fights for every dollar because she remembers what it felt
              like to stretch for that first mortgage.
            </p>

            <Link href="/about" className="about-read-more">
              Read More About Kim →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          width: 100%;
          background-color: #FFFFFF;
          padding: 60px 24px;
        }
        .about-container {
          max-width: 960px;
          margin: 0 auto;
        }
        .about-label {
          font-family: var(--font-handwritten);
          font-size: 18px;
          color: #B8845C;
          margin: 0 0 12px 0;
        }
        .about-heading {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 700;
          color: #2C2C2C;
          margin: 0 0 32px 0;
          line-height: 1.2;
        }
        .about-underline-wrap {
          position: relative;
          display: inline-block;
        }
        .about-squiggle {
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 10px;
        }
        .about-row {
          display: flex;
          gap: 36px;
          align-items: flex-start;
        }
        .about-photo-col {
          flex-shrink: 0;
          width: 220px;
        }
        .about-photo-frame {
          width: 220px;
          height: 165px;
          background-color: #F8F5F0;
          padding: 5px;
          box-shadow: 3px 6px 14px rgba(0,0,0,0.1);
          transform: rotate(-2deg);
          overflow: hidden;
        }
        .about-photo-caption {
          font-family: var(--font-handwritten);
          font-size: 13px;
          color: #9B9B9B;
          margin-top: 10px;
          text-align: center;
        }
        .about-text-col {
          flex: 1;
          min-width: 0;
        }
        .about-body {
          font-family: var(--font-body);
          font-size: 15px;
          color: #2C2C2C;
          line-height: 1.75;
          margin: 0 0 16px 0;
        }
        .about-read-more {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: #B8845C;
          text-decoration: underline;
          transition: color 0.3s ease;
          display: inline-block;
          margin-top: 4px;
        }
        .about-read-more:hover {
          color: #A07550;
        }
        @media (max-width: 640px) {
          .about-row {
            flex-direction: column;
            align-items: center;
          }
          .about-photo-col {
            width: 200px;
          }
          .about-photo-frame {
            width: 200px;
            height: 150px;
          }
          .about-heading {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
