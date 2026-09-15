#!/usr/bin/env node
// Rebuild the deck from versioned authoring code. Generated files stay separate.
import fs from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { archivePreviousDecks } from './archive.mjs';
import { EXPECTED_COUNTS } from './expand.mjs';

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(sourceDir, '../..');
const help = `Rebuild Beyond the Coding Agent.

Usage: node internal/deck/build.mjs [--output output/NAME.pptx] [--slides 08,08b]

The default output has a unique timestamp. Existing files are never overwritten.
After a successful build into output/, older decks move into output/archive/.
--slides limits PNG previews to the listed source slide keys; the PPTX stays complete.
Build sources, intermediate files, PNG previews, and validation logs are kept in
.deck-build/run-*/. See internal/deck/README.md for dependencies and update guidance.
`;

function parseArgs(args) {
  const options = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') { options.help = true; continue; }
    if (!['--output', '--slides'].includes(arg)) throw new Error(`Unknown option: ${arg}`);
    if (!args[i + 1] || args[i + 1].startsWith('--')) throw new Error(`Missing value for ${arg}`);
    options[arg.slice(2)] = args[++i];
  }
  if (options.slides && !/^\d{2}b?(,\d{2}b?)*$/.test(options.slides)) {
    throw new Error('--slides must be comma-separated source keys, for example 08,08b.');
  }
  return options;
}

async function exists(file) {
  return fs.access(file).then(() => true, () => false);
}

async function discoverSkill() {
  if (process.env.PRESENTATIONS_SKILL_DIR) return path.resolve(process.env.PRESENTATIONS_SKILL_DIR);
  const codexDir = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
  const parent = path.join(codexDir, 'plugins/cache/openai-primary-runtime/presentations');
  const versions = await fs.readdir(parent).catch(() => []);
  for (const version of versions.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))) {
    const candidate = path.join(parent, version, 'skills/presentations');
    if (await exists(path.join(candidate, 'container_tools/artifact_tool_utils.mjs'))) return candidate;
  }
  throw new Error('Presentations skill not found. Install the Presentations plugin or set PRESENTATIONS_SKILL_DIR.');
}

async function filesBelow(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(file) : entry.isFile() ? [file] : [];
  }));
  return nested.flat().sort();
}

async function hashes(files) {
  const entries = await Promise.all(files.map(async file => [
    path.relative(root, file), createHash('sha256').update(await fs.readFile(file)).digest('hex'),
  ]));
  return Object.fromEntries(entries);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) { console.log(help); return; }

  const bundled = path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies');
  const node = process.env.RUNTIME_NODE || path.join(bundled, 'node/bin/node');
  const python = process.env.RUNTIME_PYTHON || path.join(bundled, 'python/bin/python3');
  const modules = process.env.RUNTIME_NODE_MODULES || path.join(bundled, 'node/node_modules');
  const skill = await discoverSkill();
  for (const [name, file] of [['RUNTIME_NODE', node], ['RUNTIME_PYTHON', python], ['RUNTIME_NODE_MODULES', modules]]) {
    if (!await exists(file)) throw new Error(`${name} not found at ${file}. Set ${name} to the path from load_workspace_dependencies.`);
  }
  const checkPython = spawnSync(python, ['-c', 'import lxml.etree'], { encoding: 'utf8' });
  if (checkPython.status !== 0) throw new Error(`The selected Python needs lxml. ${checkPython.stderr || checkPython.error || ''}`);

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const output = path.resolve(root, options.output || `output/beyond-the-coding-agent-${stamp}.pptx`);
  const relative = path.relative(root, output);
  if (relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative) || !relative.endsWith('.pptx')) {
    throw new Error('--output must be a .pptx path inside this repository.');
  }
  const scratchFromOutput = path.relative(path.dirname(output), path.join(root, '.deck-build'));
  if (!scratchFromOutput || (scratchFromOutput !== '..' && !scratchFromOutput.startsWith(`..${path.sep}`) && !path.isAbsolute(scratchFromOutput))) {
    throw new Error('Choose an output directory separate from the build scratch space, for example output/revision.pptx.');
  }
  if (await exists(output)) throw new Error(`Output already exists: ${output}. Choose a new filename.`);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.mkdir(path.join(root, '.deck-build'), { recursive: true });
  const build = await fs.mkdtemp(path.join(root, '.deck-build/run-'));
  await fs.symlink(modules, path.join(build, 'node_modules'), process.platform === 'win32' ? 'junction' : 'dir');
  for (const name of ['author.mjs', 'expand.mjs', 'package.py', 'render.mjs', 'finalize.mjs', 'runtime.mjs']) {
    await fs.copyFile(path.join(sourceDir, name), path.join(build, name), constants.COPYFILE_EXCL);
  }
  const env = {
    ...process.env, DECK_ROOT: root, DECK_BUILD_DIR: build, DECK_OUTPUT: output,
    RUNTIME_NODE: node, RUNTIME_PYTHON: python, RUNTIME_NODE_MODULES: modules,
    PRESENTATIONS_SKILL_DIR: skill, SLIDES: options.slides || '',
  };
  console.log(`Build directory: ${build}`);
  const inputs = (await Promise.all(['slides', 'research', 'style', 'internal/deck', 'internal/renders']
    .map(dir => filesBelow(path.join(root, dir))))).flat();
  inputs.push(path.join(root, 'internal/profile-320.webp'));
  const manifest = {
    builtAt: new Date().toISOString(), output: relative, previewSlides: options.slides || 'all',
    runtime: { node, python, modules, skill }, inputs: await hashes(inputs),
  };
  await fs.writeFile(path.join(build, 'build-manifest.json'), JSON.stringify(manifest, null, 2));

  function run(label, command, args, logName) {
    console.log(label);
    const result = spawnSync(command, args, { cwd: root, env, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
    return fs.writeFile(path.join(build, logName), `${result.stdout || ''}${result.stderr || ''}`).then(() => {
      if (result.error || result.status !== 0) {
        throw new Error(`${label} failed. See ${path.join(build, logName)}\n${result.error || result.stderr?.slice(-4000) || result.stdout?.slice(-4000)}`);
      }
    });
  }

  await run('Authoring slides...', node, [path.join(build, 'author.mjs')], 'author.log');
  const meta = JSON.parse(await fs.readFile(path.join(build, 'build-map.json'), 'utf8'));
  if (options.slides) {
    const keys = new Set(meta.map(slide => slide.key));
    for (const key of options.slides.split(',')) if (!keys.has(key)) throw new Error(`Unknown source slide key: ${key}`);
  }
  await run('Adding native click builds and Morph transitions...', python, [path.join(build, 'package.py')], 'package.log');
  await run('Rendering presentation states and editing views...', node, [path.join(build, 'render.mjs')], 'render.log');
  const warnings = JSON.parse(await fs.readFile(path.join(build, 'fit-warnings.json'), 'utf8'));
  if (warnings.length) throw new Error(`Text-fit review required: ${path.join(build, 'fit-warnings.json')}`);
  await run('Validating and finalizing the PPTX...', node, [path.join(build, 'finalize.mjs')], 'finalize.log');
  manifest.finalSha256 = createHash('sha256').update(await fs.readFile(output)).digest('hex');
  manifest.counts = EXPECTED_COUNTS;
  manifest.slideCount = EXPECTED_COUNTS.physicalSlides;
  await fs.writeFile(path.join(build, 'build-manifest.json'), JSON.stringify(manifest, null, 2));
  if (path.dirname(output) === path.join(root, 'output')) await archivePreviousDecks(output);
  console.log(`Saved ${output}\nStates: ${path.join(build, 'renders')}\nEditing views: ${path.join(build, 'physical-renders')}\nValidation: ${path.join(build, 'validation.json')}`);
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
