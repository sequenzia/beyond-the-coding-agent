import test from 'node:test';
import assert from 'node:assert/strict';
import { expandStates, selectedSlide } from './expand.mjs';

test('replacement boundaries preserve states, rebase reveals, and keep Morph only on entry', () => {
  const objects = [
    { id:'1', name:'!!paired-image', start:0, end:99, kind:'image', effect:'fade', duration:200 },
    { id:'2', name:'old', start:0, end:3, kind:'text', effect:'appear' },
    { id:'3', name:'new', start:3, end:7, kind:'table', effect:'appear' },
    { id:'4', name:'addition', start:5, end:7, kind:'text', effect:'fade', duration:300 },
    { id:'5', name:'last', start:7, end:99, kind:'text', effect:'appear' },
  ];
  const paragraphs = [{runs:[{text:'BUILD 2',textStyle:{bold:true}}]},
    {runs:[{text:'Complete talk track. [your story]'}]}];
  const original = {slides:[{id:'source', index:0, elements:objects.map(o => ({id:o.id,name:o.name,bbox:{xEmu:42},paragraphs})),
    notesSlide:{id:'notes',elements:[{placeholderType:'body',paragraphs}]}}]};
  const map = [{key:'12b',source:12,slideIndex:1,morph:true,objects}];
  const before = structuredClone(original);
  const result = expandStates(original,map);
  assert.deepEqual(original,before, 'do not mutate the authored model');
  assert.deepEqual(result.map.map(s => s.key),['12b','12b-c3','12b-c7']);
  assert.deepEqual(result.map.map(s => s.morph),[true,false,false]);
  assert.deepEqual(result.map[1].states,[{click:0,originalState:3},{click:1,originalState:5}]);
  assert.equal(result.map[1].objects.find(o => o.name==='addition').start,1);
  assert.equal(result.map[1].objects.find(o => o.name==='addition').duration,300);
  assert.ok(result.map.every(s => s.objects[0].name==='!!paired-image'));
  assert.ok(result.map.every(s => s.objects.every(o => o.end===99)));
  for (const slide of result.proto.slides) {
    assert.deepEqual(slide.notesSlide.elements[0].paragraphs, paragraphs);
  }
  assert.ok(result.map.every(s => selectedSlide(s,'12,12b')));
  assert.equal(selectedSlide(result.map[1],'13'),false);
  assert.equal(result.counts.presentationStates,4);
  assert.equal(result.counts.advances,3);
  assert.equal(result.counts.internalClicks,1);
});

test('invalid lifetimes fail before export', () => {
  assert.throws(() => expandStates({slides:[{elements:[{}]}]},[
    {key:'01',objects:[{name:'invalid',start:2,end:1}]}
  ]),/invalid lifetime/);
});
