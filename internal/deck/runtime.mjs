// The runner supplies these paths to each staged build step.
import fs from 'node:fs';
import path from 'node:path';

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is missing. Run node internal/deck/build.mjs instead.`);
  return value;
}

export const ROOT = required('DECK_ROOT');
export const BUILD = required('DECK_BUILD_DIR');
export const FINAL = required('DECK_OUTPUT');
export const PYTHON = required('RUNTIME_PYTHON');
export const SKILL = required('PRESENTATIONS_SKILL_DIR');

export const consolasFonts = [
  ['DECK_CONSOLAS_REGULAR', 'Consola.ttf'],
  ['DECK_CONSOLAS_BOLD', 'Consolab.ttf'],
].map(([variable, filename]) => {
  const candidates = process.env[variable] ? [process.env[variable]] : [
    path.join('/Applications/Microsoft PowerPoint.app/Contents/Resources/DFonts', filename),
    path.join(process.env.WINDIR || 'C:/Windows', 'Fonts', filename.toLowerCase()),
  ];
  const found = candidates.find(candidate => fs.existsSync(candidate));
  if (!found) throw new Error(`Consolas font file not found. Set ${variable} to the ${filename} path.`);
  return found;
});

export function registerFonts(GlobalFonts) {
  for (const file of consolasFonts) {
    if (!GlobalFonts.registerFromPath(file)) throw new Error(`Could not register font: ${file}`);
  }
}
