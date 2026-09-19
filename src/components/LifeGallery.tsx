import Image from 'next/image';
import Link from 'next/link';

/*
  LifeGallery: real photos only. Kim, Brien, Lucy, the boat, the road.
  Every image here came from Kim's own phone or her press shoot. Do not
  add stock or generated images to this grid; the whole point is that it
  is her. Captions are her words where we have them.
*/

const photos = [
  {
    src: '/images/life/kim-brien-lucy-mount-finley.jpg',
    alt: 'Kim, Brien and Lucy at the top of Mount Finley with the Skagit River valley behind them',
    caption: 'we could spot our property from the mountaintop. really cool.',
    span: 2,
  },
  {
    src: '/images/life/the-road-back.jpg',
    alt: 'A one-lane forest road seen over the hood of the car',
    caption: 'the long way back.',
    span: 1,
  },
  {
    src: '/images/life/seal-on-the-dock.jpg',
    alt: 'A harbor seal lying on the dock at the marina',
    caption: 'Mom called it a seal.',
    span: 1,
  },
  {
    src: '/images/life/brien-lucy-truck.jpg',
    alt: 'Brien in the truck with Lucy in the back seat',
    caption: 'Brien and Lucy.',
    span: 1,
  },
  {
    src: '/images/life/heron-anacortes.jpg',
    alt: 'A great blue heron on the rocks at Anacortes',
    caption: 'Anacortes.',
    span: 1,
  },
  {
    src: '/images/life/lucy-and-buddy.jpg',
    alt: 'Lucy and Buddy lying on a gravel beach',
    caption: 'Lucy and Buddy.',
    span: 2,
  },
  {
    src: '/images/life/muse-everett.jpg',
    alt: 'Muse coffee bar in Everett with a coffee cup on the flower planter',
    caption: 'Muse, in Everett. my pick.',
    span: 1,
  },
];

export default function LifeGallery() {
  return (
    <section
      aria-label="Kim, Brien and Lucy"
      style={{ background: '#2F5233', padding: '72px 24px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.5rem',
            color: '#D4A07A',
            margin: '0 0 8px 0',
            lineHeight: 1,
          }}
        >
          the real ones,
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 600,
            color: '#F8F5F0',
            margin: '0 0 14px 0',
            lineHeight: 1.1,
          }}
        >
          I Live Here Too
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(248,245,240,0.85)',
            maxWidth: '560px',
            margin: '0 0 40px 0',
            lineHeight: 1.65,
          }}
        >
          Brien, Lucy, the boat, and wherever the road goes. These are from my phone, not a stock site.
        </p>

        <div
          className="life-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gridAutoRows: '220px',
            gap: '14px',
          }}
        >
          {photos.map((p) => (
            <figure
              key={p.src}
              className={p.span === 2 ? 'life-span-2' : undefined}
              style={{
                position: 'relative',
                margin: 0,
                gridColumn: p.span === 2 ? 'span 2' : 'span 1',
                borderRadius: '6px',
                overflow: 'hidden',
                background: '#24412a',
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <figcaption
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '28px 14px 12px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))',
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1.15rem',
                  color: '#F8F5F0',
                  lineHeight: 1.2,
                }}
              >
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.98rem',
            color: 'rgba(248,245,240,0.8)',
            margin: '32px 0 0 0',
          }}
        >
          More of this every week in The Pelham Post.{' '}
          <Link href="/about" style={{ color: '#D4A07A', fontWeight: 700 }}>
            More about me &rarr;
          </Link>
        </p>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .life-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; grid-auto-rows: 170px !important; }
          .life-span-2 { grid-column: span 2 !important; }
        }
      `}</style>
    </section>
  );
}
