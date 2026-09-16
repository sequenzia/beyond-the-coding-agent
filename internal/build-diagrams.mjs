// Regenerates every diagram variant and render from the base landscape SVG.
// Usage: node internal/build-diagrams.mjs [--full-only]
// --full-only updates map-full.png without writing other variants or renders.
// Needs Node and Google Chrome. Writes the -yours variant beside the base,
// highlight states and mini-map variants to internal/generated/, PNGs to internal/renders/.
// Values come from style/design-brief.md section 8.

import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, existsSync, statSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const basePath = join(here, 'anatomy-of-an-agentic-ai-system-landscape.svg');
const yoursPath = join(here, 'anatomy-of-an-agentic-ai-system-landscape-yours.svg');
const genDir = join(here, 'generated');
const renderDir = join(here, 'renders');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const args = process.argv.slice(2);
if (args.length > 1 || (args.length === 1 && args[0] !== '--full-only')) {
  throw new Error('Usage: node internal/build-diagrams.mjs [--full-only]');
}
const fullOnly = args[0] === '--full-only';

const C = {
  bg: '#14161c', primary: '#fffcf5', secondary: '#adaca9',
  pink: '#f948be', blue: '#1064f8', green: '#01b66d', amber: '#fdad00',
};
const base = readFileSync(basePath, 'utf8');

// Renders through headless Chrome, which resolves system Helvetica.
mkdirSync(renderDir, { recursive: true });
// Chrome writes the screenshot within seconds and then keeps running for its updater service,
// so the launch is asynchronous: wait for the PNG to land and stop growing, then stop Chrome.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function render(svgPath, pngPath, width, height, scale) {
  const profile = mkdtempSync(join(tmpdir(), 'diagram-chrome-'));
  rmSync(pngPath, { force: true });
  const child = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${profile}`, `--force-device-scale-factor=${scale}`, `--window-size=${width},${height}`,
    `--screenshot=${resolve(pngPath)}`, `file://${resolve(svgPath)}`,
  ], { stdio: 'ignore' });
  const deadline = Date.now() + 60000;
  let lastSize = -1;
  let stable = 0;
  while (Date.now() < deadline) {
    await sleep(250);
    if (!existsSync(pngPath)) continue;
    const size = statSync(pngPath).size;
    if (size > 0 && size === lastSize) { if (++stable >= 2) break; } else { stable = 0; lastSize = size; }
  }
  child.kill('SIGTERM');
  await sleep(300);
  child.kill('SIGKILL');
  rmSync(profile, { recursive: true, force: true });
  if (!existsSync(pngPath)) throw new Error(`render timed out: ${pngPath}`);
}

if (fullOnly) {
  await render(basePath, join(renderDir, 'map-full.png'), 1920, 1080, 2);
  console.log('wrote map-full.png');
  process.exit(0);
}

// Every rect with a box- id: geometry the variants need.
const boxes = {};
for (const m of base.matchAll(/<rect id="box-([a-z-]+)" x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)"/g)) {
  boxes[m[1]] = { x: +m[2], y: +m[3], w: +m[4], h: +m[5] };
}
const need = ['identity', 'security', 'data', 'goal', 'model', 'harness', 'orchestration', 'tools', 'context', 'guardrails', 'instructions', 'verification', 'stop', 'observability', 'evaluations', 'governance'];
for (const id of need) if (!boxes[id]) throw new Error(`base SVG has no rect id="box-${id}"`);

// 1. The -yours variant: amber badges on every box except Goal. The Harness container gets none;
// its six boxes carry theirs, and a container badge collides with the Agent description.
function badge(id, label) {
  const b = boxes[id];
  const textW = label.length * 14.4; // 24 unit Bold Helvetica, about 0.6 em per glyph
  const w = Math.round(textW + 32);
  const x = b.x + b.w - 8 - w;
  const y = b.y - 18;
  const cx = x + w / 2;
  return `    <rect x="${x}" y="${y}" width="${w}" height="36" rx="18" fill="${C.amber}"/>\n` +
         `    <text x="${cx}" y="${b.y + 8.5}" text-anchor="middle" font-size="24" font-weight="700" fill="${C.bg}">${label}</text>`;
}
const badgeIds = need.filter((id) => id !== 'goal' && id !== 'harness');
const badges = badgeIds.map((id) => badge(id, id === 'model' ? 'yours to select' : 'yours')).join('\n');
let yours = base.replace('Anatomy of an Agentic AI System</text>', 'Anatomy of an Agentic AI System: every box is yours</text>');
yours = yours.replace('</svg>', `  <g id="badges">\n${badges}\n  </g>\n</svg>`);
writeFileSync(yoursPath, yours);

// 2. Highlight states: every layer group except the named one at opacity 0.3.
mkdirSync(genDir, { recursive: true });
const groups = ['title', 'platform', 'per-run', 'one-run', 'goal', 'agent', 'model', 'plus', 'harness', 'stop', 'arrows', 'across-runs'];
const states = { model: ['model'], harness: ['harness'], 'per-run': ['per-run'], 'across-runs': ['across-runs'] };
const stateFiles = {};
for (const [name, keep] of Object.entries(states)) {
  let svg = base;
  for (const g of groups) {
    if (keep.includes(g)) continue;
    svg = svg.replace(`<g id="${g}">`, `<g id="${g}" opacity="0.3">`);
  }
  const p = join(genDir, `landscape-${name}.svg`);
  writeFileSync(p, svg);
  stateFiles[name] = p;
}

// 3. Mini-map variants: text-free, respaced, one state per area plus all.
const mini = Object.fromEntries(Object.entries(boxes)
  .filter(([id]) => id !== 'harness')
  .map(([id, b]) => [id, [b.x, b.y, b.w, b.h]]));
// Keep the compact layout's wider gaps while following the base's vertical positions.
for (const row of [['identity', 'security', 'data'], ['observability', 'evaluations', 'governance']]) {
  row.forEach((id, col) => { mini[id] = [72 + col * 608, boxes[id].y, 560, 100]; });
}
const miniRows = [['orchestration', 'tools'], ['context', 'guardrails'], ['instructions', 'verification']];
miniRows.forEach((row, index) => {
  row.forEach((id, col) => {
    mini[id] = [boxes.harness.x + 17 + col * 368, boxes.harness.y + 84 + index * 106, 328, 80];
  });
});
const areas = {
  models: { color: C.blue, boxes: ['model'] },
  context: { color: C.pink, boxes: ['context', 'instructions', 'data'] },
  tools: { color: C.pink, boxes: ['tools'] },
  orchestration: { color: C.pink, boxes: ['orchestration'] },
  evals: { color: C.green, boxes: ['verification', 'evaluations'] },
  operating: { color: C.amber, boxes: ['identity', 'security', 'guardrails', 'observability', 'governance'] },
};
function miniSvg(state) {
  const lit = {};
  const names = state === 'all' ? Object.keys(areas) : [state];
  for (const a of names) for (const b of areas[a].boxes) lit[b] = areas[a].color;
  const outline = `fill="none" stroke="${C.secondary}" stroke-width="18"`;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="160" height="90">\n`;
  s += `  <rect width="1920" height="1080" fill="${C.bg}"/>\n`;
  s += `  <rect x="${boxes.harness.x}" y="${boxes.harness.y}" width="${boxes.harness.w}" height="${boxes.harness.h}" rx="20" ${outline}/>\n`;
  for (const [id, [x, y, w, h]] of Object.entries(mini)) {
    s += lit[id]
      ? `  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${lit[id]}"/>\n`
      : `  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" ${outline}/>\n`;
  }
  return s + '</svg>\n';
}
const miniFiles = {};
for (const state of [...Object.keys(areas), 'all']) {
  const p = join(genDir, `mini-${state}.svg`);
  writeFileSync(p, miniSvg(state));
  miniFiles[state] = p;
}

const full = { 'map-full': basePath, 'map-yours': yoursPath, 'map-model': stateFiles.model, 'map-harness': stateFiles.harness, 'map-per-run': stateFiles['per-run'], 'map-across-runs': stateFiles['across-runs'] };
for (const [name, p] of Object.entries(full)) await render(p, join(renderDir, `${name}.png`), 1920, 1080, 2);
for (const [state, p] of Object.entries(miniFiles)) await render(p, join(renderDir, `mini-${state}.png`), 160, 90, 4);
console.log(`wrote ${yoursPath.split('/').pop()}, ${Object.keys(stateFiles).length} highlight states, ${Object.keys(miniFiles).length} mini variants, ${Object.keys(full).length + Object.keys(miniFiles).length} renders`);
