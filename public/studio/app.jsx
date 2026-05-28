/*
  app.jsx — Shell controller.
  Owns: sidebar rendering, active template selection, zoom/fit,
  tweak state, and rendering the active template into #stage.

  Templates are functions of (tweaks, listing) that return a React tree
  sized to their declared (width × height). The shell wraps the tree in
  a fixed-size div and applies transform: scale() so it fits the viewport.
*/

const { useState, useEffect, useMemo, useRef, useCallback } = React;

/* Persisted tweak defaults — these are the live values. */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "listingCity": "MUKILTEO",
  "listingAddress": "4611 76th Street SW",
  "listingPrice": "$975,000",
  "listingOldPrice": "$1,049,000",
  "listingBeds": "4 + Office",
  "listingBaths": "2.25",
  "listingSqft": "2,605",
  "listingMls": "2287416",
  "listingHook": "Remodeled around the Olympic Mountain view.",
  "openHouseDay": "SATURDAY",
  "openHouseDate": "May 23",
  "openHouseTime": "12 – 3 PM",
  "statBigNumber": "102.3%",
  "statBigLabel": "Sale-to-List Ratio",
  "headlineNewsletter": "Mukilteo is moving, here is what I am watching",
  "complianceVisibility": "subtle",
  "accentColor": "#B8845C",
  "forestColor": "#2F5233",
  /* Photo slots — empty by default so we fall back to DEFAULT_LISTING images.
     Override per-listing via URL params: ?photoExterior=https://...&photoInterior=https://... */
  "listingLot": "",
  "listingCityShort": "",
  "listingPriceShort": "",
  "listingFeature": "",
  "listingDescription": "",
  "listingSpecSheetJson": "",
  "listingValueProps": "",
  "openHouseTagline": "",
  "photoExterior": "",
  "photoHero": "",
  "photoInterior": "",
  "photoView": "",
  "photoLiving": "",
  "photoPorch": ""
}/*EDITMODE-END*/;

/* ---------- Sidebar ---------- */

function Sidebar({ templates, groups, activeId, onPick, query, onQuery }) {
  const filtered = useMemo(() => {
    if (!query) return templates;
    const q = query.toLowerCase();
    return templates.filter(t =>
      t.id.toLowerCase().includes(q) ||
      t.name.toLowerCase().includes(q) ||
      (t.tags || []).some(tag => tag.toLowerCase().includes(q))
    );
  }, [templates, query]);

  useEffect(() => {
    document.getElementById("tpl-count").textContent =
      `${filtered.length} template${filtered.length === 1 ? "" : "s"}`;
  }, [filtered.length]);

  return (
    <>
      {groups.map(g => {
        const items = filtered.filter(t => t.group === g.id);
        if (items.length === 0) return null;
        return (
          <div className="group" key={g.id}>
            <div className="group-head">
              <span className="label">{g.label}</span>
              <span className="sub">{g.sub}</span>
            </div>
            <div className="group-list">
              {items.map(t => (
                <button
                  key={t.id}
                  className={"tpl-item" + (activeId === t.id ? " active" : "")}
                  onClick={() => onPick(t.id)}>
                  <span className="name">{t.name}</span>
                  <span className="dims">{t.width} × {t.height}{t.tier ? ` · T${t.tier}` : ""}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ---------- Stage ---------- */

function Stage({ template, tweaks, zoom, onAutoZoom }) {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);

  // Auto-fit: compute scale based on available wrapper size.
  useEffect(() => {
    if (!template) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const compute = () => {
      const padX = 80, padY = 80;
      const aw = wrap.clientWidth - padX;
      const ah = wrap.clientHeight - padY;
      const sx = aw / template.width;
      const sy = ah / template.height;
      const s = Math.min(sx, sy, 1);
      onAutoZoom(s);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [template?.id]);

  if (!template) {
    return (
      <div className="stage-wrap" ref={wrapRef}>
        <div className="empty">
          Pick a template
          <div className="sub">36 templates across 10 surfaces</div>
        </div>
      </div>
    );
  }

  const Comp = template.render;
  const surfaceBg = template.surfaceBg || "#fff";
  const noShadow = template.noShadow === true;

  const scaledW = template.width * zoom;
  const scaledH = template.height * zoom;

  return (
    <div className="stage-wrap" ref={wrapRef}>
      {/* Use CSS `zoom` for scaling — transform is being suppressed somewhere in this
          environment. zoom is widely supported and shrinks both layout box and visual. */}
      <div ref={stageRef}
        style={{
          width: template.width, height: template.height,
          zoom: zoom,
          flexShrink: 0,
        }}>
        <div className={"stage-frame" + (noShadow ? " no-shadow" : "")}
          style={{ width: template.width, height: template.height, background: surfaceBg, overflow: "hidden" }}>
          <Comp tweaks={tweaks} listing={makeListing(tweaks)} />
        </div>
      </div>
    </div>
  );
}

function makeListing(t) {
  // Coalesce: a slot only overrides DEFAULT_LISTING if the URL/tweak value is non-empty.
  const pick = (v, fallback) => (v && String(v).trim() !== "" ? v : fallback);
  // Spec sheet: JSON-encoded array of [key,val] pairs, falls back to DEFAULT_LISTING.specSheet
  let specSheet = DEFAULT_LISTING.specSheet;
  if (t.listingSpecSheetJson && t.listingSpecSheetJson.trim() !== "") {
    try { specSheet = JSON.parse(t.listingSpecSheetJson); }
    catch (e) { console.warn("[brand-studio] listingSpecSheetJson invalid, using default", e); }
  }
  return {
    ...DEFAULT_LISTING,
    cityShort: pick(t.listingCityShort, t.listingCity),
    city: t.listingCity ? `${t.listingCity}, WA` : DEFAULT_LISTING.city,
    address: t.listingAddress,
    price: t.listingPrice,
    priceShort: pick(t.listingPriceShort, DEFAULT_LISTING.priceShort),
    oldPrice: t.listingOldPrice,
    beds: t.listingBeds,
    baths: t.listingBaths,
    sqft: t.listingSqft,
    lot: pick(t.listingLot, DEFAULT_LISTING.lot),
    mls: t.listingMls,
    hook: t.listingHook,
    feature: pick(t.listingFeature, DEFAULT_LISTING.feature),
    description: pick(t.listingDescription, DEFAULT_LISTING.description),
    specSheet: specSheet,
    valueProps: pick(t.listingValueProps, DEFAULT_LISTING.valueProps),
    openHouseTagline: pick(t.openHouseTagline, DEFAULT_LISTING.openHouseTagline),
    exterior: pick(t.photoExterior, DEFAULT_LISTING.exterior),
    hero: pick(t.photoHero, pick(t.photoExterior, DEFAULT_LISTING.hero)),
    view: pick(t.photoView, DEFAULT_LISTING.view),
    interior: pick(t.photoInterior, DEFAULT_LISTING.interior),
    living: pick(t.photoLiving, DEFAULT_LISTING.living),
    porch: pick(t.photoPorch, DEFAULT_LISTING.porch),
    openHouse: {
      day: t.openHouseDay,
      date: t.openHouseDate,
      time: t.openHouseTime,
    },
  };
}

/* ---------- Tweaks panel ---------- */

function PelhamTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Featured listing (Mukilteo)" />
      <TweakText  label="City"     value={t.listingCity}    onChange={v => setTweak('listingCity', v)} />
      <TweakText  label="Address"  value={t.listingAddress} onChange={v => setTweak('listingAddress', v)} />
      <TweakText  label="Price"    value={t.listingPrice}   onChange={v => setTweak('listingPrice', v)} />
      <TweakText  label="Old price"value={t.listingOldPrice}onChange={v => setTweak('listingOldPrice', v)} />
      <TweakText  label="Beds"     value={t.listingBeds}    onChange={v => setTweak('listingBeds', v)} />
      <TweakText  label="Baths"    value={t.listingBaths}   onChange={v => setTweak('listingBaths', v)} />
      <TweakText  label="Sqft"     value={t.listingSqft}    onChange={v => setTweak('listingSqft', v)} />
      <TweakText  label="MLS #"    value={t.listingMls}     onChange={v => setTweak('listingMls', v)} />
      <TweakText  label="Hook"     value={t.listingHook}    onChange={v => setTweak('listingHook', v)} />

      <TweakSection label="Open house" />
      <TweakText  label="Day"  value={t.openHouseDay}  onChange={v => setTweak('openHouseDay', v)} />
      <TweakText  label="Date" value={t.openHouseDate} onChange={v => setTweak('openHouseDate', v)} />
      <TweakText  label="Time" value={t.openHouseTime} onChange={v => setTweak('openHouseTime', v)} />

      <TweakSection label="Stat card" />
      <TweakText  label="Big number" value={t.statBigNumber} onChange={v => setTweak('statBigNumber', v)} />
      <TweakText  label="Label"      value={t.statBigLabel}  onChange={v => setTweak('statBigLabel', v)} />

      <TweakSection label="Newsletter headline" />
      <TweakText  label="Headline" value={t.headlineNewsletter}
                  onChange={v => setTweak('headlineNewsletter', v)} />

      <TweakSection label="Brand palette" />
      <TweakColor label="Accent (Clay)" value={t.accentColor}
        options={["#B8845C", "#9C6E4A", "#C99B6F", "#7A5A3E", "#D97757"]}
        onChange={v => setTweak('accentColor', v)} />
      <TweakColor label="Primary (Forest)" value={t.forestColor}
        options={["#2F5233", "#1F3A24", "#3D6B42", "#1B4332", "#274E13"]}
        onChange={v => setTweak('forestColor', v)} />

      <TweakSection label="Compliance footer" />
      <TweakRadio label="Visibility" value={t.complianceVisibility}
        options={["subtle", "visible"]}
        onChange={v => setTweak('complianceVisibility', v)} />
    </TweaksPanel>
  );
}

/* ---------- App ---------- */

/*
  AGENT PROTOCOL — Brand Studio mode
  ─────────────────────────────────
  Any TWEAK_DEFAULTS key can be overridden via URL query string.
  Also accepts ?template=<id> to auto-select, and ?ui=clean to hide chrome.

  Examples:
    ?template=meta-ad-price-drop&listingCity=MARYSVILLE&listingPrice=$799,900
    ?template=email-newsletter&openHouseDay=SUNDAY&openHouseTime=1-3 PM
    ?template=meta-ad-open-house-drive&listingAddress=1406 Potlatch Beach Road&ui=clean

  Agent rendering protocol:
    1. Build URL with template id + slot values
    2. Headless Chrome navigates, waits 3s for hydration
    3. Screenshot at native template dimensions (read t.width × t.height from registry)
    4. Crop / upload / ship
*/
function parseUrlOverrides(defaults) {
  if (typeof window === "undefined") return { tweakOverrides: {}, template: null, ui: null };
  const params = new URLSearchParams(window.location.search);
  const tweakOverrides = {};
  let template = null;
  let ui = null;
  const knownKeys = new Set(Object.keys(defaults));
  for (const [k, v] of params.entries()) {
    if (k === "template") { template = v; continue; }
    if (k === "ui") { ui = v; continue; }
    // Pass any matching default key through. Unknown keys are merged too,
    // so templates can read custom slots if they want to.
    tweakOverrides[k] = v;
    if (!knownKeys.has(k)) {
      // Soft warning in console for unknown keys (helps agent debugging)
      console.info(`[brand-studio] URL slot "${k}" not in TWEAK_DEFAULTS, passing through anyway`);
    }
  }
  return { tweakOverrides, template, ui };
}

const URL_OVERRIDES = parseUrlOverrides(TWEAK_DEFAULTS);
const INITIAL_TWEAKS = { ...TWEAK_DEFAULTS, ...URL_OVERRIDES.tweakOverrides };

function App() {
  const [tick, setTick] = useState(0);
  const [activeId, setActiveId] = useState(URL_OVERRIDES.template);
  const [query, setQuery] = useState("");
  const [t, setTweak] = useTweaks(INITIAL_TWEAKS);
  const [zoom, setZoom] = useState(1);
  const [autoZoom, setAutoZoom] = useState(1);
  const [zoomMode, setZoomMode] = useState("fit"); // 'fit' or 'manual'

  // ui=clean hides the shell chrome (sidebar + toolbar) so headless-Chrome screenshots
  // capture ONLY the template at its native dimensions. Used by agents post-render.
  useEffect(() => {
    if (URL_OVERRIDES.ui === "clean") {
      document.body.classList.add("ui-clean");
      const css = document.createElement("style");
      css.textContent = `
        body.ui-clean .sidebar, body.ui-clean .toolbar { display: none !important; }
        body.ui-clean .shell { grid-template-columns: 0 1fr; }
        body.ui-clean .stage-wrap { padding: 0 !important; align-items: flex-start !important; justify-content: flex-start !important; }
        body.ui-clean .stage-frame { box-shadow: none !important; }
      `;
      document.head.appendChild(css);
    }
  }, []);

  // Wire up search input + zoom buttons via refs (they live in the static HTML chrome)
  useEffect(() => {
    const s = document.getElementById("search");
    const onInput = e => setQuery(e.target.value);
    s.addEventListener("input", onInput);
    return () => s.removeEventListener("input", onInput);
  }, []);

  useEffect(() => {
    const bind = (id, fn) => document.getElementById(id).addEventListener("click", fn);
    bind("zoom-in",  () => { setZoomMode("manual"); setZoom(z => Math.min(2, +(z + 0.1).toFixed(2))); });
    bind("zoom-out", () => { setZoomMode("manual"); setZoom(z => Math.max(0.1, +(z - 0.1).toFixed(2))); });
    bind("zoom-fit", () => { setZoomMode("fit"); });
  }, []);

  // Late-registered templates
  useEffect(() => {
    const handler = () => setTick(x => x + 1);
    window.addEventListener("pelham-template-registered", handler);
    // initial tick to pick up sync-registered templates
    setTick(1);
    return () => window.removeEventListener("pelham-template-registered", handler);
  }, []);

  const templates = window.PELHAM_TEMPLATES;
  const groups = window.PELHAM_GROUPS;

  // First-template auto-pick (or validate URL-supplied template id)
  useEffect(() => {
    if (templates.length === 0) return;
    if (!activeId) {
      setActiveId(templates[0].id);
      return;
    }
    // If a URL-supplied template id doesn't match any registered template
    // once templates have all loaded, fall back to first + warn agent.
    const found = templates.find(x => x.id === activeId);
    if (!found && tick > 0) {
      console.warn(`[brand-studio] template "${activeId}" not found. Falling back to first.`);
      setActiveId(templates[0].id);
    }
  }, [tick, activeId]);

  const active = templates.find(x => x.id === activeId);
  const activeGroup = active && groups.find(g => g.id === active.group);
  const effectiveZoom = zoomMode === "fit" ? autoZoom : zoom;

  // Sync DOM chrome with active template
  useEffect(() => {
    if (active) {
      document.getElementById("tpl-name").textContent = active.name;
      document.getElementById("tpl-meta").textContent = active.note ? "— " + active.note : "";
      document.getElementById("crumb-group").textContent = activeGroup?.label || "";
      document.getElementById("crumb-tier").textContent = active.tier ? `tier ${active.tier}` : "";
    }
    document.getElementById("zoom-val").textContent = Math.round(effectiveZoom * 100) + "%";
  }, [active?.id, activeGroup?.id, effectiveZoom]);

  // Render sidebar into its DOM slot
  const sidebarPortal = document.getElementById("groups");
  const rightPane = document.getElementById("right");

  // Mount sidebar list
  useEffect(() => {
    // we'll re-render via React inside #groups
  }, []);

  // Apply tweak colors to CSS vars (cosmetic — most templates read from props)
  useEffect(() => {
    document.documentElement.style.setProperty('--color-clay', t.accentColor);
    document.documentElement.style.setProperty('--color-forest', t.forestColor);
  }, [t.accentColor, t.forestColor]);

  // Build merged tweaks for templates
  const tweaks = { ...t, C_clay: t.accentColor, C_forest: t.forestColor };

  return (
    <>
      {ReactDOM.createPortal(
        <Sidebar templates={templates} groups={groups}
          activeId={activeId} onPick={setActiveId}
          query={query} onQuery={setQuery} />,
        sidebarPortal
      )}
      {ReactDOM.createPortal(
        <Stage template={active} tweaks={tweaks} zoom={effectiveZoom} onAutoZoom={setAutoZoom} />,
        rightPane
      )}
      <PelhamTweaks t={t} setTweak={setTweak} />
    </>
  );
}

// Mount once DOM is ready and (most importantly) all template scripts have run
function mount() {
  // Clear the empty placeholder DOM that the static HTML shipped with.
  // The React Stage replaces it entirely.
  const oldWrap = document.getElementById("stage-wrap");
  if (oldWrap) oldWrap.remove();

  const host = document.createElement("div");
  document.body.appendChild(host);
  ReactDOM.createRoot(host).render(<App />);
}

// Defer mount slightly so Babel-transformed template files finish executing
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setTimeout(mount, 50));
} else {
  setTimeout(mount, 50);
}
