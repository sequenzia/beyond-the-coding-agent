// Regenerates every diagram variant and render from the base landscape SVG.
// Usage: node internal/build-diagrams.mjs [--full-only|--closing-only]
// --full-only updates map-full.png without writing other variants or renders.
// --closing-only updates the closing recap variant and its render only.
// Needs Node and Google Chrome. Writes the -closing variant beside the base,
// highlight states and mini-map variants to internal/generated/, PNGs to internal/renders/.
// Values come from style/design-brief.md sections 8 and 34.

import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, existsSync, statSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const basePath = join(here, 'anatomy-of-an-agentic-ai-system-landscape.svg');
const closingPath = join(here, 'anatomy-of-an-agentic-ai-system-landscape-closing.svg');
const genDir = join(here, 'generated');
const renderDir = join(here, 'renders');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const args = process.argv.slice(2);
if (args.length > 1 || (args.length === 1 && !['--full-only', '--closing-only'].includes(args[0]))) {
  throw new Error('Usage: node internal/build-diagrams.mjs [--full-only|--closing-only]');
}
const fullOnly = args[0] === '--full-only';
const closingOnly = args[0] === '--closing-only';

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

// 1. Closing recap: preserve the base's anatomy and label sizes, reflow its rows
// below a native title/key, and color components using the same area map as the minis.
const closingRows = {
  identity: [374, 80], security: [374, 80], data: [374, 80],
  goal: [642, 104], model: [642, 104], harness: [578, 226],
  orchestration: [634, 46], tools: [634, 46],
  context: [688, 46], guardrails: [688, 46],
  instructions: [742, 46], verification: [742, 46], stop: [642, 104],
  observability: [918, 80], evaluations: [918, 80], governance: [918, 80],
};
const areas = {
  models: { color: C.blue, tint: '#13223f', boxes: ['model'] },
  context: { color: C.pink, tint: '#2b1b2c', boxes: ['context', 'instructions', 'data'] },
  tools: { color: C.pink, tint: '#2b1b2c', boxes: ['tools'] },
  orchestration: { color: C.pink, tint: '#2b1b2c', boxes: ['orchestration'] },
  evals: { color: C.green, tint: '#122926', boxes: ['verification', 'evaluations'] },
  operating: { color: C.amber, tint: '#302819', boxes: ['identity', 'security', 'guardrails', 'observability', 'governance'] },
};
const componentAreas = Object.fromEntries(Object.values(areas).flatMap(a => a.boxes.map(id => [id, a])));
let closing = base.replace(/  <g id="title">[\s\S]*?<\/g>\n/, '')
  .replace(/    <text [^>]*font-size="24"[^>]*>[^<]*<\/text>\n/g, '')
  .replace('x="40" y="80" width="1840" height="970"', 'x="40" y="312" width="1840" height="708"')
  .replace('x="72" y="288" width="1776" height="574"', 'x="72" y="472" width="1776" height="370"')
  .replace('x="450" y="362" width="1050" height="472"', 'x="450" y="530" width="1050" height="292"')
  .replaceAll('y1="620"', 'y1="694"').replaceAll('y2="620"', 'y2="694"');
closing = closing.replace(/<rect id="box-([a-z-]+)"[^>]*\/>/g, (tag, id) => {
  const [y, h] = closingRows[id];
  tag = tag.replace(/ y="[\d.]+"/, ` y="${y}"`).replace(/ height="[\d.]+"/, ` height="${h}"`);
  const a = componentAreas[id];
  if (!a) return tag;
  return tag.replace(/ fill="[^"]*"/, ` fill="${a.tint}"`)
    .replace(/ stroke="[^"]*"| stroke-width="[^"]*"/g, '')
    .replace('/>', ` stroke="${a.color}" stroke-width="4"/>`);
});
const closingBaselines = {
  'Per-run services': 355,
  'Identity &amp; Access Management': 424, Security: 424, 'External Data &amp; Retrieval': 424,
  'One run': 514, Agent: 568, Goal: 704, Model: 704, '+': 709, Harness: 616,
  Orchestration: 666, Tools: 666, 'Context and memory': 720, Guardrails: 720,
  Instructions: 774, Verification: 774,
  'Run until': 670, 'a stopping': 700, 'condition is met': 730,
  'Across runs': 899, Observability: 968, Evaluations: 968, Governance: 968,
};
closing = closing.replace(/<text ([^>]*)>([^<]*)<\/text>/g, (tag, attrs, label) => {
  if (!(label in closingBaselines)) throw new Error(`closing layout has no baseline for ${label}`);
  return tag.replace(/ y="[\d.]+"/, ` y="${closingBaselines[label]}"`)
    .replace(/fill="#1064f8"/, `fill="${C.primary}"`);
});
writeFileSync(closingPath, closing);
if (closingOnly) {
  await render(closingPath, join(renderDir, 'map-closing.png'), 1920, 1080, 2);
  console.log('wrote closing SVG and map-closing.png');
  process.exit(0);
}

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

const full = { 'map-full': basePath, 'map-closing': closingPath, 'map-model': stateFiles.model, 'map-harness': stateFiles.harness, 'map-per-run': stateFiles['per-run'], 'map-across-runs': stateFiles['across-runs'] };
for (const [name, p] of Object.entries(full)) await render(p, join(renderDir, `${name}.png`), 1920, 1080, 2);
for (const [state, p] of Object.entries(miniFiles)) await render(p, join(renderDir, `mini-${state}.png`), 160, 90, 4);
console.log(`wrote ${closingPath.split('/').pop()}, ${Object.keys(stateFiles).length} highlight states, ${Object.keys(miniFiles).length} mini variants, ${Object.keys(full).length + Object.keys(miniFiles).length} renders`);
