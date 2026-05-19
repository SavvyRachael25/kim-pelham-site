/*
  registry.jsx — template registry.
  Each template file calls registerTemplate({...}) at module load.
  The shell reads window.PELHAM_TEMPLATES to build the sidebar
  and renders the active template inside a scaled viewport.
*/

window.PELHAM_TEMPLATES = window.PELHAM_TEMPLATES || [];
window.PELHAM_GROUPS = window.PELHAM_GROUPS || [
  { id: "email",     label: "Email",       sub: "Gmail-compatible HTML, 600px" },
  { id: "ig-feed",   label: "Instagram Feed",  sub: "1080 × 1350 portrait" },
  { id: "ig-story",  label: "Instagram Story", sub: "1080 × 1920 vertical" },
  { id: "fb",        label: "Facebook",    sub: "1200 × 628 horizontal" },
  { id: "linkedin",  label: "LinkedIn",    sub: "1200 × 628 + 6-card carousel" },
  { id: "reels",     label: "Reels & Cover",   sub: "1080 × 1920" },
  { id: "meta-ad",   label: "Meta Ad Creative", sub: "Paid placements" },
  { id: "blog",      label: "Blog & Pages", sub: "Next.js routes, 1200px" },
  { id: "print",     label: "Print",       sub: "8.5 × 11 in" },
  { id: "script",    label: "Video Scripts", sub: "Shot list documents" },
];

window.registerTemplate = function (def) {
  // de-dupe (in case a file reloads)
  const existing = window.PELHAM_TEMPLATES.findIndex(t => t.id === def.id);
  if (existing >= 0) {
    window.PELHAM_TEMPLATES[existing] = def;
  } else {
    window.PELHAM_TEMPLATES.push(def);
  }
  // notify shell if it's already mounted
  window.dispatchEvent(new CustomEvent("pelham-template-registered", { detail: def }));
};
