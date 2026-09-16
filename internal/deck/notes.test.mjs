import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { speakerNoteParagraphs } from './notes.mjs';

const text = paragraphs => paragraphs.map(p => p.runs.map(r => r.run).join('')).join('\n');

test('notes keep formatted speech and cues through the advance, without timing or appendices', () => {
  const paragraphs = speakerNoteParagraphs(`# Slide\nBeat 1. Time 1:00.\n\n## Talk track

[0:00] **Must say.** Use \`/model\`.

[0:10] Build 2, the harness. Keep this description.

[0:20] **[your story #3]** Keep the story slot.

[0:50] Hold. Advance to slide 4 at [1:00].

Cut first: extra detail.

## Sources
Research §1 https://example.com

## Open items
None.
`);
  assert.equal(text(paragraphs), 'Must say. Use /model.\n\nBUILD 2: THE HARNESS\n\nKeep this description.\n\n[your story #3] Keep the story slot.\n\nHold. Advance to slide 4.');
  assert.equal(paragraphs[0].runs[0].textStyle.bold, true);
  assert.equal(paragraphs[2].runs[0].textStyle.bold, true);
  assert.equal(paragraphs[6].runs[0].textStyle.bold, true);
});

test('all narrative slides end at their advance or Q&A handoff and preserve build cues', async () => {
  let count = 0;
  for (const section of [1, 2, 3]) {
    const directory = new URL(`../../slides/section-${section}/`, import.meta.url);
    for (const file of (await fs.readdir(directory)).filter(name => name.endsWith('.md'))) {
      const markdown = await fs.readFile(new URL(file, directory), 'utf8');
      const paragraphs = speakerNoteParagraphs(markdown);
      const plain = text(paragraphs);
      assert.doesNotMatch(plain, /\[\d+:\d{2}\]|^## |Research links|^Source slide|^Narrative slide|^Beat \d|^Cut first:|^Cuttable|^Backup/m, file);
      assert.match(plain.split('\n').at(-1), /Advance to|Section 4 begins\. The slide stays\./, file);
      const track = markdown.split('## Talk track')[1].split('\n## ')[0];
      const cues = [...track.matchAll(/^\[\d+:\d{2}\] Build (\d+)/gm)].map(m => m[1]);
      const headings = paragraphs.filter(p => /^BUILD \d/.test(p.runs[0].run));
      assert.deepEqual(headings.map(p => p.runs[0].run.match(/^BUILD (\d+)/)[1]), cues, file);
      for (const heading of headings) assert.equal(heading.runs[0].textStyle.bold, true, file);
      const staticCues = [...track.matchAll(/^\[\d+:\d{2}\] \*\*([A-Z][A-Z -]+)\*\*$/gm)].map(m => m[1]);
      for (const cue of staticCues) {
        const paragraph = paragraphs.find(p => p.runs.map(r => r.run).join('') === cue);
        assert.ok(paragraph, `${file}: missing ${cue}`);
        assert.equal(paragraph.runs[0].textStyle.bold, true, `${file}: ${cue}`);
      }
      if (section === 2) assert.doesNotMatch(plain, /\[your story #2\]/, file);
      if (file.startsWith('43-')) assert.match(plain, /Autonomy is earned by evals, one step at a time\. Advance to slide 44 on the last word\.$/);
      if (file.startsWith('45-')) assert.doesNotMatch(plain, /Backup for questions|Do I need to learn/);
      count++;
    }
  }
  assert.equal(count, 45);
});

test('missing talk tracks and handoffs fail rather than silently losing presenter content', () => {
  assert.throws(() => speakerNoteParagraphs('## Sources\nNo track.'), /Missing talk track/);
  assert.throws(() => speakerNoteParagraphs('## Talk track\nUnfinished.'), /Missing slide advance/);
});
