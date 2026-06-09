/* ad-concepts.jsx — the four loss-aversion lead-gen concepts, rendered per
   format. Uses primitives from ad-kit.jsx (on window). Image-slot ids are
   shared per concept across formats, so dropping one before/after pair fills
   every size at once. Exports all concept components to window. */

const adCSS = {
  frame: { position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'var(--color-cream)' },
  serif: 'var(--font-heading)',
};

/* Real campaign photography. The living-room fireplace pair is the one true
   matched before→after (same Snohomish County room, dated → prepped & staged);
   it carries every literal before/after in the set. */
const PHOTO = {
  livingBefore: 'assets/ba-living-before.jpg',
  livingAfter:  'assets/ba-living-after.jpg',
};

function AdFrame({ w, h, children, style }) {
  return <div style={{ ...adCSS.frame, width: w, height: h, ...style }}>{children}</div>;
}

/* numbered step used in the concierge concept */
function Step({ n, children, fs = 22 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{
        flex: '0 0 auto', width: fs * 1.9, height: fs * 1.9, borderRadius: 999,
        background: 'var(--color-clay)', color: 'var(--color-cream)',
        display: 'grid', placeItems: 'center', fontFamily: adCSS.serif, fontWeight: 700, fontSize: fs * 0.95,
      }}>{n}</span>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: fs, color: 'var(--color-cream)' }}>{children}</span>
    </div>
  );
}

/* ============================================================ CONCEPT A
   "Don't list as-is and leave $40,000 on the table." (kitchen pair) */

function A_head(scale = 1) {
  return (
    <React.Fragment>
      <div className="eyebrow" style={{ fontSize: 16 * scale, letterSpacing: '0.18em', marginBottom: 16 * scale }}>
        Pre-Sale Concierge · Snohomish County
      </div>
      <h1 style={{ fontSize: 62 * scale, lineHeight: 1.08, margin: 0, color: 'var(--color-forest)' }}>
        Don&rsquo;t list as-is and leave<br />
        <span style={{ color: 'var(--color-clay)' }}>$40,000</span>{' '}
        <span className="squiggle">on the table.</span>
      </h1>
      <p style={{ fontSize: 19 * scale, lineHeight: 1.5, color: 'var(--color-text-light)', margin: `${20 * scale}px 0 0`, maxWidth: 900 * scale }}>
        Homes I prep before listing sell at <b style={{ color: 'var(--color-forest)' }}>102.3% of list</b> &mdash;
        versus 100.2% countywide. The right updates pay for themselves.
      </p>
    </React.Fragment>
  );
}

function A_Square() {
  return (
    <AdFrame w={1080} h={1350}>
      <div style={{ padding: '60px 56px 30px' }}>
        <div className="eyebrow" style={{ fontSize: 15, letterSpacing: '0.18em', marginBottom: 16 }}>Pre-Sale Concierge · Snohomish County</div>
        <h1 style={{ fontSize: 64, lineHeight: 1.06, margin: 0, color: 'var(--color-forest)' }}>
          Don&rsquo;t leave <span style={{ color: 'var(--color-clay)' }}>$40,000</span>{' '}
          <span className="squiggle">on the table.</span>
        </h1>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={30} style={{ position: 'absolute', top: -20, left: 44, zIndex: 6 }}>before &rarr; after</StickyTag>
        <BeforeAfter beforeId="kitchen-before" afterId="kitchen-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={17} chipSize={86} style={{ height: '100%' }} />
      </div>
      <CtaBar h={150} pillFs={21} />
    </AdFrame>
  );
}

function A_Story() {
  return (
    <AdFrame w={1080} h={1920}>
      <div style={{ padding: '84px 72px 30px' }}>
        <Wordmark size={30} />
        <div style={{ marginTop: 44 }}>{A_head(1.18)}</div>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={38} style={{ position: 'absolute', top: -26, left: 60, zIndex: 6 }}>before &rarr; after</StickyTag>
        <BeforeAfter beforeId="kitchen-before" afterId="kitchen-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={22} chipSize={108} style={{ height: '100%' }} />
      </div>
      <div className="green-textured" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '30px 40px' }}>
        <StatChip num="102.3%" label="sale-to-list" numFs={48} labelFs={17} />
        <span style={{ width: 1, height: 46, background: 'rgba(248,245,240,0.25)' }} />
        <StatChip num="176" label="homes sold" numFs={48} labelFs={17} />
        <span style={{ width: 1, height: 46, background: 'rgba(248,245,240,0.25)' }} />
        <StatChip num="17 yrs" label="in real estate" numFs={48} labelFs={17} />
      </div>
      <CtaBar h={210} pillFs={26} title="The Pre-Sale Renovation Playbook" sub="free · kim@thepelhamgroupnw.com" />
    </AdFrame>
  );
}

function A_Landscape() {
  return (
    <AdFrame w={1200} h={628} style={{ flexDirection: 'row' }}>
      <div style={{ flex: '0 0 56%', padding: '46px 44px', display: 'flex', flexDirection: 'column' }}>
        <Wordmark size={24} />
        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <div className="eyebrow" style={{ fontSize: 13, letterSpacing: '0.18em', marginBottom: 12 }}>Pre-Sale Concierge</div>
          <h1 style={{ fontSize: 46, lineHeight: 1.04, margin: 0, color: 'var(--color-forest)' }}>
            Don&rsquo;t leave <span style={{ color: 'var(--color-clay)' }}>$40,000</span>{' '}
            <span className="squiggle">on the table.</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--color-text-light)', margin: '14px 0 0', maxWidth: 540 }}>
            Homes I prep sell at <b style={{ color: 'var(--color-forest)' }}>102.3% of list</b> &mdash; vs 100.2% countywide.
          </p>
        </div>
        <span className="cta-pill" style={{ fontSize: 16, padding: '12px 20px', alignSelf: 'flex-start' }}>
          <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#F8F5F0" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><polyline points="7 11 12 16 17 11" /><path d="M5 20h14" /></svg>
          Download the free Playbook
        </span>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <BeforeAfter beforeId="kitchen-before" afterId="kitchen-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} dir="stack" tagFs={14} chipSize={64} style={{ height: '100%' }} />
      </div>
    </AdFrame>
  );
}

function A_Pin() {
  return (
    <AdFrame w={1000} h={1500}>
      <div style={{ padding: '64px 56px 26px' }}>
        <Wordmark size={26} />
        <div style={{ marginTop: 34 }}>
          <div className="eyebrow" style={{ fontSize: 15, letterSpacing: '0.18em', marginBottom: 14 }}>Pre-Sale Concierge · Snohomish County</div>
          <h1 style={{ fontSize: 60, lineHeight: 1.05, margin: 0, color: 'var(--color-forest)' }}>
            List as-is, and you could leave <span style={{ color: 'var(--color-clay)' }}>$40,000</span>{' '}
            <span className="squiggle">on the table.</span>
          </h1>
        </div>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={32} style={{ position: 'absolute', top: -22, left: 44, zIndex: 6 }}>before &rarr; after</StickyTag>
        <BeforeAfter beforeId="kitchen-before" afterId="kitchen-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={18} chipSize={92} style={{ height: '100%' }} />
      </div>
      <div style={{ padding: '28px 56px', background: 'var(--color-cream-dark)', borderTop: '1px solid var(--color-border)' }}>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--color-text-light)', margin: 0 }}>
          Homes I prep before listing sell at <b style={{ color: 'var(--color-forest)' }}>102.3% of list</b> &mdash; the right updates pay for themselves.
        </p>
      </div>
      <CtaBar h={150} pillFs={20} />
    </AdFrame>
  );
}

/* ============================================================ CONCEPT B
   "Your house isn't dated. It's underpriced." — full-bleed after (living) */

function B_Square() {
  return (
    <AdFrame w={1080} h={1350}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Slot id="living-after" src={PHOTO.livingAfter} label="drop AFTER photo (full-bleed)" />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.04) 34%, rgba(26,26,26,0.34) 64%, rgba(26,26,26,0.9) 100%)' }} />
      <div style={{ position: 'absolute', top: 52, left: 52, right: 52, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Wordmark size={26} dark />
        <span className="eyebrow on-dark" style={{ fontSize: 14, letterSpacing: '0.2em', marginTop: 8 }}>Pre-Sale Strategy</span>
      </div>
      <div className="polaroid" style={{ position: 'absolute', top: 170, right: 56, width: 262, transform: 'rotate(3deg)', zIndex: 3 }}>
        <div className="pol-img" style={{ height: 208 }}><Slot id="living-before" src={PHOTO.livingBefore} label="drop BEFORE" /></div>
        <div className="pol-cap" style={{ fontSize: 26 }}>before</div>
      </div>
      <div style={{ position: 'absolute', left: 52, right: 52, bottom: 142 }}>
        <h1 style={{ fontSize: 74, lineHeight: 1.02, margin: 0, color: 'var(--color-cream)' }}>
          Your house isn&rsquo;t dated.<br /><span style={{ color: 'var(--color-clay-light)' }}>It&rsquo;s underpriced.</span>
        </h1>
      </div>
      <div style={{ position: 'absolute', left: 52, right: 52, bottom: 50 }}>
        <span className="cta-pill" style={{ fontSize: 20, padding: '14px 24px' }}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#F8F5F0" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><polyline points="7 11 12 16 17 11" /><path d="M5 20h14" /></svg>
          Download the free Playbook
        </span>
      </div>
    </AdFrame>
  );
}

function B_Landscape() {
  return (
    <AdFrame w={1200} h={628} style={{ flexDirection: 'row' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <Slot id="living-after" src={PHOTO.livingAfter} label="drop AFTER photo" />
        <span className="ba-tag after" style={{ position: 'absolute', left: 18, bottom: 18, fontSize: 14 }}>After</span>
        <div className="polaroid" style={{ position: 'absolute', top: 22, left: 22, width: 168, transform: 'rotate(-3deg)' }}>
          <div className="pol-img" style={{ height: 120 }}><Slot id="living-before" src={PHOTO.livingBefore} label="before" /></div>
          <div className="pol-cap" style={{ fontSize: 20 }}>before</div>
        </div>
      </div>
      <div style={{ flex: '0 0 48%', padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--color-cream)' }}>
        <Wordmark size={22} />
        <div className="eyebrow" style={{ fontSize: 13, letterSpacing: '0.18em', margin: '26px 0 12' }}>Pre-Sale Strategy</div>
        <h1 style={{ fontSize: 44, lineHeight: 1.03, margin: 0, color: 'var(--color-forest)' }}>
          Your house isn&rsquo;t dated.<br /><span style={{ color: 'var(--color-clay)' }}>It&rsquo;s underpriced.</span>
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--color-text-light)', margin: '14px 0 22', maxWidth: 480 }}>
          The right updates move your price more than a cut ever will. I manage all of it.
        </p>
        <span className="cta-pill" style={{ fontSize: 16, padding: '12px 20px', alignSelf: 'flex-start' }}>
          <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#F8F5F0" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><polyline points="7 11 12 16 17 11" /><path d="M5 20h14" /></svg>
          Download the free Playbook
        </span>
      </div>
    </AdFrame>
  );
}

/* ============================================================ CONCEPT C
   "I prep your home. You don't lift a finger." — done-for-you concierge
   (exterior pair) — forest */

function C_Square() {
  return (
    <AdFrame w={1080} h={1350}>
      <div className="green-textured" style={{ padding: '58px 56px 46px' }}>
        <Wordmark size={26} dark />
        <div className="eyebrow on-dark" style={{ fontSize: 15, letterSpacing: '0.2em', margin: '34px 0 16' }}>The Concierge Difference</div>
        <h1 style={{ fontSize: 58, lineHeight: 1.06, margin: 0, color: 'var(--color-cream)' }}>
          I prep your home to sell.<br /><span style={{ color: 'var(--color-clay-light)' }}>You don&rsquo;t lift a finger.</span>
        </h1>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={30} style={{ position: 'absolute', top: -20, left: 44, zIndex: 6 }}>I prep it myself</StickyTag>
        <BeforeAfter beforeId="ext-before" afterId="ext-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={17} chipSize={86} style={{ height: '100%' }} />
      </div>
      <CtaBar h={150} pillFs={21} />
    </AdFrame>
  );
}

function C_Story() {
  return (
    <AdFrame w={1080} h={1920}>
      <div className="green-textured" style={{ padding: '84px 72px 44px' }}>
        <Wordmark size={30} dark />
        <div className="eyebrow on-dark" style={{ fontSize: 17, letterSpacing: '0.2em', margin: '44px 0 16' }}>The Concierge Difference</div>
        <h1 style={{ fontSize: 74, lineHeight: 1.04, margin: 0, color: 'var(--color-cream)' }}>
          I prep your home.<br /><span style={{ color: 'var(--color-clay-light)' }}>You don&rsquo;t lift a finger.</span>
        </h1>
        <p style={{ fontSize: 24, lineHeight: 1.5, color: 'rgba(248,245,240,0.85)', margin: '20px 0 0', maxWidth: 820 }}>
          Don&rsquo;t list a dated home and discount it for someone else&rsquo;s remodel. I plan the updates, manage my crew, and stage it myself &mdash; start to finish.
        </p>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={36} style={{ position: 'absolute', top: -24, left: 60, zIndex: 6 }}>I prep it myself</StickyTag>
        <BeforeAfter beforeId="ext-before" afterId="ext-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={22} chipSize={108} style={{ height: '100%' }} />
      </div>
      <div className="green-textured" style={{ padding: '40px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Step n="1" fs={27}>We make the plan together</Step>
        <Step n="2" fs={27}>My trusted crew does the work</Step>
        <Step n="3" fs={27}>Your home hits the market</Step>
      </div>
      <CtaBar h={210} pillFs={26} title="The Pre-Sale Renovation Playbook" sub="free · kim@thepelhamgroupnw.com" />
    </AdFrame>
  );
}

/* ============================================================ CONCEPT D
   Proof / NoteFromKim — real numbers (bath pair) */

function D_NoteBlock({ scale = 1 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 26 * scale }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="eyebrow" style={{ fontSize: 14 * scale, letterSpacing: '0.18em', marginBottom: 12 * scale }}>The Pelham track record</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 * scale, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: adCSS.serif, fontWeight: 700, fontSize: 56 * scale, color: 'var(--color-forest)' }}>102.3%</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 18 * scale, color: 'var(--color-text-muted)' }}>avg sale-to-list &mdash; vs 100.2% countywide</span>
        </div>
        <p style={{ fontSize: 18 * scale, lineHeight: 1.55, color: 'var(--color-text-light)', margin: `${14 * scale}px 0 0`, maxWidth: 640 * scale }}>
          The right prep is the difference between selling at list and selling above it. That&rsquo;s what a planned prep buys you &mdash; not luck.
        </p>
        <div style={{ fontFamily: 'var(--font-handwritten)', color: 'var(--color-clay)', fontSize: 32 * scale, marginTop: 10 * scale }}>&mdash; Kim</div>
      </div>
    </div>
  );
}

function D_Square() {
  return (
    <AdFrame w={1080} h={1350}>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={30} style={{ position: 'absolute', top: 24, left: 44, zIndex: 6 }}>real numbers</StickyTag>
        <BeforeAfter beforeId="bath-before" afterId="bath-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={17} chipSize={86} style={{ height: '100%' }} />
      </div>
      <div style={{ padding: '36px 56px 32px', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: adCSS.serif, fontWeight: 700, fontSize: 64, color: 'var(--color-forest)', lineHeight: 1 }}>102.3%</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--color-text-muted)' }}>avg sale-to-list &mdash; vs 100.2% countywide</span>
      </div>
      <CtaBar h={150} pillFs={21} />
    </AdFrame>
  );
}

function D_Pin() {
  return (
    <AdFrame w={1000} h={1500}>
      <div style={{ padding: '60px 56px 22px' }}>
        <Wordmark size={26} />
        <h1 style={{ fontSize: 56, lineHeight: 1.04, margin: '30px 0 0', color: 'var(--color-forest)' }}>
          The right prep sells at <span className="squiggle">102.3% of list.</span>
        </h1>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <StickyTag fs={32} style={{ position: 'absolute', top: -22, left: 44, zIndex: 6 }}>before &rarr; after</StickyTag>
        <BeforeAfter beforeId="bath-before" afterId="bath-after" beforeSrc={PHOTO.livingBefore} afterSrc={PHOTO.livingAfter} tagFs={18} chipSize={92} style={{ height: '100%' }} />
      </div>
      <div style={{ padding: '30px 56px', background: 'var(--color-cream-dark)', borderTop: '1px solid var(--color-border)' }}>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--color-text-light)', margin: 0 }}>
          Homes I prep before listing sell at <b style={{ color: 'var(--color-forest)' }}>102.3% of list</b> &mdash; vs 100.2% countywide. The free <b style={{ color: 'var(--color-forest)' }}>Pre-Sale Renovation Playbook</b> shows exactly which updates earn it.
        </p>
      </div>
      <CtaBar h={150} pillFs={20} />
    </AdFrame>
  );
}

Object.assign(window, {
  A_Square, A_Story, A_Landscape, A_Pin,
  B_Square, B_Landscape,
  C_Square, C_Story,
  D_Square, D_Pin,
});
