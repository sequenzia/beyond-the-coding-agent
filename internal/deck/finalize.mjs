import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT as workspaceDir, BUILD as build, FINAL, PYTHON, SKILL } from './runtime.mjs';
const skill=path.join(SKILL,'container_tools');
const { finalizePresentation }=await import(pathToFileURL(path.join(skill,'artifact_tool_utils.mjs')).href);
const meta=JSON.parse(await fs.readFile(path.join(build,'native-build-map.json'),'utf8'));
const tableOwners=meta.filter(s=>s.objects.some(o=>o.kind==='table')).map(s=>s.slideIndex);
const result=await finalizePresentation({
 workspaceDir,
 candidatePath:path.join(build,'candidate.pptx'),
 finalPath:FINAL,
 pythonExecutable:PYTHON,
 integrityValidatorPath:path.join(skill,'inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'inspect_presentation_layout_geometry.py'),
 explicitTotalSlideCount:34,
 requiredNativeTableOwnerSlides:tableOwners,
 requiredNativeChartOwnerSlides:[],
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...tableOwners.flatMap(n=>['--require-native-table-slide',String(n)])],
 fontPolicy:{basis:'user_request',families:['Helvetica','Consolas']},
 verifyArtifactToolImport:true,
 receiptPath:path.join(build,'validation.json')
});
console.log(JSON.stringify(result,null,2));
