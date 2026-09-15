import fs from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

// Preserve previous decks without overwriting an existing archived revision.
export async function archivePreviousDecks(currentOutput) {
  await fs.access(currentOutput);
  const directory = path.dirname(currentOutput);
  const archive = path.join(directory, 'archive');
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const olderDecks = entries.filter(entry => entry.isFile()
    && /\.pptx$/i.test(entry.name)
    && !entry.name.startsWith('~$')
    && entry.name !== path.basename(currentOutput));
  if (!olderDecks.length) return;
  await fs.mkdir(archive, { recursive: true });
  for (const entry of olderDecks) {
    const source = path.join(directory, entry.name);
    const { name, ext } = path.parse(entry.name);
    for (let suffix = 0; ; suffix++) {
      const destination = path.join(archive, suffix ? `${name}-${suffix}${ext}` : entry.name);
      try {
        await fs.copyFile(source, destination, constants.COPYFILE_EXCL);
      } catch (error) {
        if (error.code === 'EEXIST') continue;
        throw error;
      }
      await fs.unlink(source);
      break;
    }
  }
}
