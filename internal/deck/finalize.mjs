import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT as workspaceDir, BUILD as build, FINAL, PYTHON, SKILL } from './runtime.mjs';
import assert from 'node:assert/strict';
import { buildCounts, EXPECTED_COUNTS } from './expand.mjs';
const skill=path.join(SKILL,'container_tools');
const { finalizePresentation }=await import(pathToFileURL(path.join(skill,'artifact_tool_utils.mjs')).href);
const meta=JSON.parse(await fs.readFile(path.join(build,'native-build-map.json'),'utf8'));
const authored=JSON.parse(await fs.readFile(path.join(build,'build-map.json'),'utf8'));
const counts=buildCounts(authored,meta);
assert.deepEqual(counts,EXPECTED_COUNTS);
const tableOwners=meta.filter(s=>s.objects.some(o=>o.kind==='table')).map(s=>s.slideIndex);
const result=await finalizePresentation({
 workspaceDir,
 candidatePath:path.join(build,'candidate.pptx'),
 finalPath:FINAL,
 pythonExecutable:PYTHON,
 integrityValidatorPath:path.join(skill,'inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'inspect_presentation_layout_geometry.py'),
 explicitTotalSlideCount:EXPECTED_COUNTS.physicalSlides,
 requiredNativeTableOwnerSlides:tableOwners,
 requiredNativeChartOwnerSlides:[],
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...tableOwners.flatMap(n=>['--require-native-table-slide',String(n)])],
 fontPolicy:{basis:'design',families:['Helvetica','Consolas']},
 verifyArtifactToolImport:true,
 receiptPath:path.join(build,'validation.json')
});
const receipt=JSON.parse(await fs.readFile(path.join(build,'validation.json'),'utf8'));
receipt.buildCounts=counts;
receipt.expansion=JSON.parse(await fs.readFile(path.join(build,'expansion-validation.json'),'utf8'));
receipt.nativeBuilds=JSON.parse(await fs.readFile(path.join(build,'package-validation.json'),'utf8'));
receipt.renders=JSON.parse(await fs.readFile(path.join(build,'render-validation.json'),'utf8'));
await fs.writeFile(path.join(build,'validation.json'),JSON.stringify(receipt,null,2));
console.log(JSON.stringify(result,null,2));
