import {FontLibrary} from './node_modules/@oai/artifact-tool/node_modules/skia-canvas/lib/index.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Presentation, PresentationFile, FileBlob } from '@oai/artifact-tool';
import { GlobalFonts, createCanvas } from '@napi-rs/canvas';
import { BUILD as B, consolasFonts, registerFonts } from './runtime.mjs';
FontLibrary.use('Consolas', consolasFonts);
registerFonts(GlobalFonts);
const proto=(await PresentationFile.importPptx(await FileBlob.load(path.join(B,'candidate.pptx')))).toProto();
for(const im of proto.images)if(im.data&&!ArrayBuffer.isView(im.data))im.data=Uint8Array.from(Object.values(im.data));
const meta=JSON.parse(await fs.readFile(path.join(B,'native-build-map.json'),'utf8'));
await fs.mkdir(path.join(B,'renders'),{recursive:true});
const ctx=createCanvas(1,1).getContext('2d');const warnings=[];let count=0;
for(let i=0;i<meta.length;i++){
 const info=meta[i];const ms=new Map(info.objects.map(x=>[x.name,x]));
 for(const e of proto.slides[i].elements){const m=ms.get(e.name);if(!e.paragraphs?.length||!m?.fontSize)continue;
  const bounds=e.bbox; if(!bounds)continue;
  const width=bounds.widthEmu/12700,height=bounds.heightEmu/12700;
  let lines=0;let max=0;for(const p of e.paragraphs){let line=0;let num=1;for(const run of p.runs||[]){const f=run.textStyle||{};const sz=(f.fontSize||m.fontSize*100)/100;ctx.font=`${f.bold?'bold ':''}${sz}px ${f.typeface||'Helvetica'}`;for(const word of (run.text||'').split(/(\s+)/)){const w=ctx.measureText(word).width;if(line+w>width+0.5&&line>0){num++;line=word.trim()?w:0;}else line+=w;max=Math.max(max,w);}}lines+=num;}
  const need=lines*(m.exact||m.fontSize*(m.fontSize===32?1.15:1.25));
  if(need>height+3||max>width+1)warnings.push({slide:info.key,name:m.name,text:e.paragraphs.map(p=>p.runs.map(r=>r.text).join('')).join('\n'),height,need,width,max});
 }
 const states=[...new Set([0,...info.objects.flatMap(o=>[o.start,...(o.end<99?[o.end]:[])])])].sort((a,b)=>a-b);
 for(const state of states){
  if(process.env.SLIDES&&!process.env.SLIDES.split(',').includes(info.key))continue;
  const p=structuredClone(proto);p.slides=[p.slides[i]];p.slides[0].index=0;delete p.slides[0].timing;delete p.slides[0].transition;
  p.slides[0].elements=p.slides[0].elements.filter(e=>{const m=ms.get(e.name);return m&&m.start<=state&&m.end>state;});
  const d=Presentation.load(p);const s=d.slides.items[0];
  const image=await d.export({slide:s,format:'png',scale:1});
  await fs.writeFile(path.join(B,'renders',`${info.key}-${state}.png`),new Uint8Array(await image.arrayBuffer()));count++;
 }
 console.log(`Rendered source ${info.key}`);
}
await fs.writeFile(path.join(B,'fit-warnings.json'),JSON.stringify(warnings,null,2));
console.log(JSON.stringify({renderedStates:count,warnings},null,2));
