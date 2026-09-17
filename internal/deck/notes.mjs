import assert from 'node:assert/strict';

// Export the podium copy. Timing, evidence, and rehearsal guidance stay in Markdown.
export function speakerNoteParagraphs(markdown) {
  const track = markdown.split(/^## Talk track[ \t]*\r?$/m)[1]?.split(/^## /m)[0];
  assert.ok(track, 'Missing talk track');
  // Preserve the native notes body while intentionally exporting no podium copy.
  if (track.trim() === '<!-- intentionally blank -->') return [{ runs: [{ run: '' }] }];
  const lines = track.trim().split('\n');
  const end = lines.findIndex(line => /\bAdvance to\b|\bSection 4 begins\./.test(line));
  assert.ok(end >= 0, 'Missing slide advance or closing handoff');
  const text = lines.slice(0, end + 1).join('\n')
    .replace(/\s+at\s+\[\d+:\d{2}\]/g, '')
    .replace(/\[\d+:\d{2}\][ \t]*/g, '')
    .trim();
  const paragraphs = [];
  function add(runs) {
    if (paragraphs.length) paragraphs.push({ runs: [{ run: '' }] });
    paragraphs.push({ runs });
  }
  for (const block of text.split(/\n\s*\n/)) {
    let content = block;
    const cue = content.match(/^Build (\d+)(?:, ([^.\n]+))?\.(?:\s+|$)/);
    if (cue) {
      const label = `BUILD ${cue[1]}${cue[2] ? `: ${cue[2].toUpperCase()}` : ''}`;
      add([{ run: label, textStyle: { bold: true } }]);
      content = content.slice(cue[0].length);
    }
    if (!content) continue;
    add(content.split(/(\*\*[\s\S]*?\*\*)/).filter(Boolean).map(part => ({
      run: (part.startsWith('**') ? part.slice(2, -2) : part).replace(/`/g, ''),
      textStyle: { bold: part.startsWith('**') },
    })));
  }
  return paragraphs;
}
