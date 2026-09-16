// Compile finite object lifetimes into consecutive, independently editable slides.
import assert from 'node:assert/strict';
import { randomUUID, randomInt } from 'node:crypto';

export const EXPECTED_COUNTS = Object.freeze({
  narrativeSlides: 48, authoredCompositions: 48, physicalSlides: 53,
  presentationStates: 54, internalClicks: 1, morphTransitions: 0, advances: 53,
});

export function statesOf(objects) {
  return [...new Set([0, ...objects.flatMap(o => [o.start, ...(o.end < 99 ? [o.end] : [])])])]
    .sort((a, b) => a - b);
}

export function selectedSlide(info, selection) {
  if (!selection) return true;
  const keys = selection.split(',').map(key => key.replace(/^\d+/, n => n.padStart(2, '0')));
  return keys.includes(info.sourceKey || info.key) || keys.includes(info.key);
}

export function buildCounts(authored, expanded) {
  const presentationStates = expanded.reduce((n, s) => n + s.states.length, 0);
  return {
    narrativeSlides: new Set(authored.map(s => s.source)).size,
    authoredCompositions: authored.length,
    physicalSlides: expanded.length,
    presentationStates,
    internalClicks: presentationStates - expanded.length,
    morphTransitions: expanded.filter(s => s.morph).length,
    advances: presentationStates - 1,
  };
}

export function expandStates(authoredProto, authoredMap) {
  assert.equal(authoredProto.slides.length, authoredMap.length);
  const proto = structuredClone(authoredProto);
  proto.slides = [];
  const map = [];
  let elementId = 0;
  for (const [i, source] of authoredMap.entries()) {
    const original = authoredProto.slides[i];
    assert.equal(original.elements.length, source.objects.length, `${source.key}: element count`);
    assert.equal(new Set(source.objects.map(o => o.name)).size, source.objects.length, `${source.key}: duplicate names`);
    for (const obj of source.objects) {
      assert.ok(Number.isInteger(obj.start) && obj.start >= 0 && obj.start < obj.end && obj.end <= 99,
        `${source.key}/${obj.name}: invalid lifetime`);
    }
    const states = statesOf(source.objects);
    const boundaries = [...new Set([0, ...source.objects.filter(o => o.end < 99).map(o => o.end)])]
      .sort((a, b) => a - b);
    for (const [segment, start] of boundaries.entries()) {
      const end = boundaries[segment + 1] ?? 99;
      const originalStates = states.filter(n => n >= start && n < end);
      const key = segment === 0 ? source.key : `${source.key}-c${start}`;
      const slide = structuredClone(original);
      slide.id = randomUUID();
      slide.creationId = String(randomInt(1, 0xFFFFFFFF));
      slide.index = map.length;
      delete slide.timing;
      delete slide.transition;
      slide.elements = [];
      const objects = [];
      for (const [j, obj] of source.objects.entries()) {
        if (obj.end <= start || obj.start >= end) continue;
        const element = structuredClone(original.elements[j]);
        element.id = String(++elementId);
        element.creationId = `{${randomUUID().toUpperCase()}}`;
        slide.elements.push(element);
        objects.push({ ...obj, id: element.id, sourceId: obj.id,
          start: obj.start <= start ? 0 : originalStates.indexOf(obj.start), end: 99 });
      }
      const info = {
        ...source, key, sourceKey: source.key, narrativeNumber: source.source,
        authoredIndex: i + 1, slideIndex: map.length + 1, physicalIndex: map.length + 1,
        stateInterval: { start, end: originalStates.at(-1) },
        states: originalStates.map((originalState, click) => ({ click, originalState })),
        morph: segment === 0 && source.morph, objects,
      };
      const body = slide.notesSlide?.elements.find(e => e.placeholderType === 'body');
      assert.ok(body, `${key}: missing speaker notes`);
      // Notes have their own identity. Keep the cleaned talk track and its formatting.
      slide.notesSlide.id = randomUUID();
      proto.slides.push(slide);
      map.push(info);
    }
  }
  validateExpansion(authoredProto, authoredMap, proto, map);
  return { proto, map, counts: buildCounts(authoredMap, map) };
}

function content(element) {
  const { id, creationId, ...rest } = element;
  return rest;
}

export function validateExpansion(authoredProto, authoredMap, expandedProto, expandedMap) {
  const ids = new Set();
  const visited = [];
  for (const [i, info] of expandedMap.entries()) {
    const slide = expandedProto.slides[i];
    assert.ok(!ids.has(slide.id), `${info.key}: duplicate slide ID`);
    ids.add(slide.id);
    const original = authoredProto.slides[info.authoredIndex - 1];
    const source = authoredMap[info.authoredIndex - 1];
    assert.ok(info.objects.every(o => o.end === 99), `${info.key}: remaining exit`);
    assert.ok(!info.morph || info.key === info.sourceKey, `${info.key}: Morph on continuation`);
    const originalBody = original.notesSlide.elements.find(e => e.placeholderType === 'body');
    assert.deepEqual(slide.notesSlide.elements.find(e => e.placeholderType === 'body').paragraphs, originalBody.paragraphs);
    for (const { click, originalState } of info.states) {
      const before = original.elements.filter((e, j) => source.objects[j].start <= originalState && source.objects[j].end > originalState);
      const after = slide.elements.filter((e, j) => info.objects[j].start <= click);
      assert.deepEqual(after.map(content), before.map(content), `${info.key}: state ${originalState} content/order/geometry`);
      visited.push(`${source.key}:${originalState}`);
    }
    for (const element of slide.elements) {
      assert.ok(!ids.has(element.creationId), `${info.key}: duplicate object creation ID`);
      ids.add(element.creationId);
    }
  }
  assert.deepEqual(visited, authoredMap.flatMap(s => statesOf(s.objects).map(n => `${s.key}:${n}`)), 'State sequence changed');
}
