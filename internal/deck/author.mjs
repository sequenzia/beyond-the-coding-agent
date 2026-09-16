import fs from 'node:fs/promises';
import path from 'node:path';
import { Presentation, PresentationFile } from '@oai/artifact-tool';
import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import sharp from 'sharp';
import { ROOT, BUILD, registerFonts } from './runtime.mjs';
import assert from 'node:assert/strict';
import { expandStates, EXPECTED_COUNTS } from './expand.mjs';
import { speakerNoteParagraphs } from './notes.mjs';

registerFonts(GlobalFonts);
const ctx=createCanvas(8,8).getContext('2d');
const C={bg:'#14161c',text:'#fffcf5',secondary:'#adaca9',surface:'#303236',hair:'#4c4d50',pink:'#f948be',blue:'#1064f8',green:'#01b66d',amber:'#fdad00',blueTint:'#13223f',pinkTint:'#2b1b2c'};
const P=4/3;
const deck=Presentation.create({slideSize:{width:1280,height:720}});
deck.theme.colorScheme={name:'Beyond the Coding Agent',themeColors:{accent1:C.pink,accent2:C.blue,accent3:C.green,accent4:C.amber,accent5:C.secondary,accent6:C.surface,bg1:C.bg,bg2:C.surface,tx1:C.text,tx2:C.secondary,dk1:C.bg,dk2:C.surface,lt1:C.text,lt2:C.secondary,hlink:C.text,folHlink:C.text}};
const master=deck.masters.add('Beyond the Coding Agent');master.background.fill=C.bg;
const blank=deck.layouts.add('Blank');blank.setParentLayoutId(master.id);
const kickerLayout=deck.layouts.add('Kicker');kickerLayout.setParentLayoutId(master.id);
kickerLayout.placeholders.add({type:'body',index:0,geometry:'textbox',position:{left:64,top:48,width:954.6667,height:33.3333},text:''});
kickerLayout.placeholders.add({type:'picture',index:1,geometry:'rect',position:{left:1002.6667,top:48,width:213.3333,height:120},fill:'none',line:{fill:'none',width:0}});
const sourceFiles=(await Promise.all([1,2,3].map(async n=>(await fs.readdir(path.join(ROOT,`slides/section-${n}`))).sort().map(f=>path.join(ROOT,`slides/section-${n}`,f))))).flat();
const sources={};for(const f of sourceFiles){const txt=await fs.readFile(f,'utf8');sources[parseInt(path.basename(f))]={file:f,text:txt};}
const meta=[];let cur,slide,serial=0;
const clearMarkdown=t=>t.replace(/\*\*/g,'').replace(/`/g,'');
function run(text,color,bold=false,font='Helvetica'){return {run:text,textStyle:{typeface:font,color,bold}};}
function runs(str,size,color=C.text,bold=false,font='Helvetica'){
 const out=[];for(const piece of str.split(/(\*\*.*?\*\*|`[^`]*`)/g).filter(Boolean)){
  if(piece.startsWith('**'))out.push(run(piece.slice(2,-2),color,true,font));
  else if(piece.startsWith('`'))out.push(run(piece.slice(1,-1),size>=20?C.blue:C.text,bold,'Consolas'));
  else out.push(run(piece,color,bold,font));
 }return out;
}
function addMeta(obj,kind,opts={}){const info={id:obj.id,name:opts.name||`${cur.key}-${kind}-${++serial}`,kind,start:opts.start??0,end:opts.end??99,effect:opts.effect|| (kind==='image'||kind==='card'||kind==='pill'?'fade':'appear'),duration:opts.duration??200,fontSize:opts.size,exact:opts.exact,geometry:opts.geometry};cur.objects.push(info);return info;}
function shape(x,y,w,h,fill='none',stroke='none',radius=0,opts={}){const name=opts.name||`${cur.key}-shape-${++serial}`;const obj=slide.shapes.add({name,geometry:radius?'roundRect':'rect',position:{left:x*P,top:y*P,width:w*P,height:h*P},fill,line:{fill:stroke,width:stroke==='none'?0:(opts.strokeWidth??1)*P},...(radius?{borderRadius:radius*P}:{})});addMeta(obj,opts.kind||'shape',{...opts,name});return obj;}
function text(str,x,y,w,h,size=24,opts={}){
 const name=opts.name||`${cur.key}-text-${++serial}`;
 const obj=slide.shapes.add({name,geometry:'textbox',position:{left:x*P,top:y*P,width:w*P,height:h*P},fill:'none',line:{fill:'none',width:0}});
 obj.text.style={typeface:opts.font||'Helvetica',fontSize:size*P,color:opts.color||C.text,bold:opts.bold||false,alignment:opts.align||'left',verticalAlignment:opts.middle?'middle':'top',autoFit:'none',wrap:opts.nowrap?'none':'square',insets:{left:0,right:0,top:0,bottom:0},lineSpacing:size>=44?({44:52/44,60:70/60,72:84/72}[size]||1.18):size===32?1.15:1.25};
 obj.text=Array.isArray(str)?str:String(str).split('\n').map(line=>runs(line,size,opts.color||C.text,opts.bold||false,opts.font||'Helvetica'));
 addMeta(obj,'text',{...opts,name,size,exact:opts.exact??(size>=44?({44:52,60:70,72:84}[size]||70):undefined)});return obj;
}
async function img(file,x,y,w,h,opts={}){const obj=slide.images.add({name:opts.name,blob:new Uint8Array(await fs.readFile(path.resolve(ROOT,file))),contentType:'image/png',alt:opts.alt||path.basename(file),fit:opts.fit||'contain',geometry:opts.geometry||'rect',position:{left:x*P,top:y*P,width:w*P,height:h*P}});addMeta(obj,'image',opts);return obj;}
function line(x,y,w,h,opts={}){const obj=slide.shapes.add({name:`${cur.key}-line-${++serial}`,geometry:'line',position:{left:Math.min(x,x+w)*P,top:Math.min(y,y+h)*P,width:Math.abs(w)*P,height:Math.abs(h)*P,horizontalFlip:w<0,verticalFlip:h<0},fill:'none',line:{fill:C.secondary,width:2*P}});addMeta(obj,'line',opts);return obj;}
function arrow(x,y,w,h=0,opts={}){const o=line(x,y,w,h,opts);cur.objects.at(-1).arrow=true;return o;}
function attr(str,x=48,y=472,w=864,opts={}){return text(str,x,y,w,20,16,{...opts,color:C.secondary,exact:20});}
const HEADER={standard:{boundary:156,divider:168,body:192},area:{boundary:128,divider:140,body:164},compact:{boundary:64,divider:76,body:100},resources:{boundary:110,divider:122,body:146}};
async function slideHeader({area,beat,map,title,header,color,variant}){
 const layout=HEADER[variant||(header?'area':'standard')];cur.header=layout;
 if(header){shape(0,0,960,128,color,'none',0,{name:'!!area-header'});text(area,48,22,864,70,60,{bold:true,color:color===C.blue?C.text:C.bg,name:'!!area-name'});text('When you are the user',48,92,864,25,20,{color:color===C.blue?C.text:C.bg,name:'!!area-beat'});}
 else if(area){text([[run(area,color,true),run(` · ${beat}`,C.secondary)]],48,36,map?716:864,25,20,{name:'!!area-name'});if(map)await img(`internal/renders/mini-${map}.png`,752,36,160,90,{name:'mini-map',alt:`Anatomy mini-map: ${map}`});}
 if(title)text(title,48,68,map?692:864,variant==='resources'?42:76,32,{bold:true,name:'slide-title'});
 shape(48,layout.divider,864,1,C.hair,'none',0,{name:'header-divider'});
}
function sectionDivider(number,title){
 text(`Section ${number}`,48,168,864,25,20,{color:C.secondary,name:'section-label'});
 shape(48,208,864,1,C.hair,'none',0,{name:'section-rule'});
 text(title,48,232,864,140,60,{bold:true,name:'section-title'});
}
async function newSlide(key,{area,beat='When you are the owner',map,title,header=false,variant,color,morph=false,note=''}={}){
 slide=deck.slides.add();slide.setLayout(blank);slide.background.fill=C.bg;
 cur={key,source:Number.parseInt(key),slideIndex:meta.length+1,objects:[],morph,note};meta.push(cur);serial=0;
 slide.speakerNotes.textFrame.setText(speakerNoteParagraphs(sources[cur.source].text));
 if(area||title||header)await slideHeader({area,beat,map,title,header,color,variant});
 return slide;
}
function pills(items,x,y,maxW=864,opts={}){let px=x,py=y;for(const val of items){const command=val.startsWith('`');const clean=clearMarkdown(val);ctx.font=`20px ${command?'Consolas':'Helvetica'}`;const ww=Math.ceil(ctx.measureText(clean).width)+24;if(px+ww>x+maxW&&px>x){px=x;py+=41;}shape(px,py,ww,33,'none',command?C.blue:C.hair,16.5,{...opts,kind:'pill',strokeWidth:command?1.5:1});text(val,px+12,py+3,ww-24,27,20,{...opts,middle:true,nowrap:true,effect:'fade'});px+=ww+8;}return py+33;}
function card(x,y,w,h,headline,body='',opts={}){shape(x,y,w,h,opts.tint||C.surface,opts.stroke||'none',8,{...opts,kind:'card',strokeWidth:2});if(headline)text(headline,x+16,y+12,w-32,opts.titleH||32,opts.titleSize||24,{...opts,bold:opts.titleBold??true,effect:'fade'});if(body)text(body,x+16,y+(opts.bodyY||48),w-32,h-(opts.bodyY||48)-12,opts.bodySize||20,{...opts,color:opts.bodyColor||C.text,effect:'fade'});}
function band(sentence,color,opts={}){const h=opts.h||64,y=540-h;shape(0,y,960,h,C.surface,'none',0,{...opts,effect:'fade',duration:300});shape(0,y,172,h,color,'none',0,{...opts,effect:'fade',duration:300});text('Pitfall',48,y+(h-25)/2,114,25,20,{...opts,bold:true,color:color===C.blue?C.text:C.bg,effect:'fade',duration:300});text(sentence,196,opts.sentenceY??y+8,opts.sentenceW||716,opts.sentenceH||48,20,{...opts,middle:!opts.h,effect:'fade',duration:300});}
function list(lines,x,y,w,size=24,opts={}){const step=opts.step||42;lines.forEach((t,i)=>text(t,x,y+i*step,w,opts.lineH||step,size,opts));}
function twoTable(headers,rows,y,rowHeights,opts={}){
 const vals=[ [headers[0],'',headers[1]],...rows.map(r=>[r[0],'',r[1]]) ];
 const h=rowHeights.reduce((a,b)=>a+b,0);const obj=slide.tables.add({rows:vals.length,columns:3,left:48*P,top:y*P,width:864*P,height:h*P,columnWidths:[420*P,24*P,420*P],values:vals});
 obj.styleOptions={headerRow:false,bandedRows:false,bandedColumns:false,firstColumn:false,lastColumn:false};
 obj.cells.block({row:0,column:0,rowCount:vals.length,columnCount:3}).assign({fill:C.bg,textStyle:{typeface:'Helvetica',fontSize:20*P,color:C.text},margins:{left:0,right:0,top:0,bottom:0},anchor:'top'});
 for(let r=0;r<vals.length;r++){obj.rows[r].height=rowHeights[r]*P;for(const c of [0,2]){obj.getCell(r,c).text.style={typeface:'Helvetica',fontSize:(r===0?24:20)*P,color:r===0?(opts.color||C.pink):(c===2&&opts.rightColors?opts.rightColors[r-1]:C.text),bold:r===0||!!(c===2&&opts.rightColors),autoFit:'none',lineSpacing:1.25};}}
 addMeta(obj,'table',opts);return obj;
}
function evidenceTable(values,widths,y,heights,opts={}){
 const obj=slide.tables.add({rows:values.length,columns:widths.length,left:48*P,top:y*P,width:864*P,height:heights.reduce((a,b)=>a+b,0)*P,columnWidths:widths.map(w=>w*P),values});
 obj.styleOptions={headerRow:false,bandedRows:false,bandedColumns:false,firstColumn:false,lastColumn:false};
 obj.cells.block({row:0,column:0,rowCount:values.length,columnCount:widths.length}).assign({fill:C.bg,textStyle:{typeface:'Helvetica',fontSize:20*P,color:C.text},margins:{left:0,right:0,top:0,bottom:0},anchor:'top'});
 for(let r=0;r<values.length;r++){obj.rows[r].height=heights[r]*P;for(let c=0;c<widths.length;c++)obj.getCell(r,c).text.style={typeface:'Helvetica',fontSize:20*P,color:r===0?(opts.color||C.pink):C.text,bold:r===0,autoFit:'none',lineSpacing:1.25};}
 addMeta(obj,'table',opts);return obj;
}
function strip(str,opts={}){text(str,48,68,692,24,16,{...opts,color:C.secondary,exact:20});}
function excerpt(title,body,x,y,w,h,opts={}){
 const labels={ 'Devin Desktop':'Devin Desktop model picker\nReasoning-effort slider visible', 'Codex CLI':cur.key.startsWith('10')?'Codex /compact notice':'Codex /model picker\nReasoning effort choices', 'AGENTS.md':'AGENTS.md project instructions\nConventions and checks', 'MCP configuration':'Your MCP server configuration', 'Plan mode':'Codex plan mode\nProposed implementation steps', 'Test run':'Codex CLI test run\nCommand and result visible', 'Usage view':'Devin CLI session usage\nEstimated consumption', 'The permission prompt':'Live shell-command approval prompt'};
 const name='!!screenshot-'+title;
 const obj=slide.shapes.add({name,geometry:'roundRect',placeholderType:'picture',placeholderIndex:cur.objects.filter(x=>x.kind==='placeholder').length,position:{left:x*P,top:y*P,width:w*P,height:h*P},fill:C.surface,line:{fill:C.hair,width:P},borderRadius:4*P});
 addMeta(obj,'placeholder',{...opts,name,effect:'fade'});
 text(h>100?'SCREENSHOT':'Image',x+16,y+(h>100?55:10),w-32,22,16,{...opts,color:C.secondary,align:'center'});
 text(h>100?(labels[title]||title):({'The permission prompt':'Approval','MCP configuration':'MCP config','Codex CLI':cur.key.startsWith('10')?'/compact':'Codex CLI'}[title]||title),x+16,y+(h>100?96:36),w-32,h>100?95:43,h>100?20:16,{...opts,color:C.text,align:'center'});
}

function thesis(question=false){text('Using AI makes you\nan AI-enabled software engineer.',48,136,864,104,44,{align:'center'});text('Engineering systems that depend on AI\nmakes you an AI engineer.',48,286,864,104,44,{align:'center',bold:true});if(question)text('Questions',48,438,864,40,32,{align:'center',start:1});}
const pitfalls=['Choosing and changing models without testing them on your task.','adding instead of curating.','copying the API surface without evaluating task fit.','multi-agent before a workflow was tried.','a generic judge instead of error analysis. Trusting the success claim without checking the result.','the lethal trifecta, assembled one integration at a time.'];

// Section 1.
await newSlide('01');
text('Beyond the Coding Agent',48,185,864,58,44,{bold:true,align:'center',end:1});
text('From Software Engineer to AI Engineer',48,258,864,48,32,{align:'center',end:1});
text('Stephen Sequenzia · Senior Staff AI/ML Engineer and Architect',48,472,864,20,16,{color:C.secondary,end:1});
text([[run('demo    = ',C.secondary,false,'Consolas'),run('works',C.text,false,'Consolas'),run('.any()',C.amber,false,'Consolas')],[run('product = ',C.secondary,false,'Consolas'),run('works',C.text,false,'Consolas'),run('.all()',C.green,false,'Consolas')]],48,178,864,184,72,{font:'Consolas',start:1,exact:84,nowrap:true});attr('Andrej Karpathy, June 2025',48,472,864,{start:1,align:'right'});
await newSlide('02');
await sharp(path.join(ROOT,'internal/profile-320.webp')).png().toFile(path.join(BUILD,'profile.png'));
await img(path.join(BUILD,'profile.png'),48,211,144,144,{geometry:'ellipse',alt:'Stephen Sequenzia'});
text('Stephen Sequenzia',344,75,568,42,32,{bold:true});text('Senior Staff AI/ML Engineer and Architect',344,125,568,60,24);
list(['Twenty years putting systems into production.\nThe last several with a model in the loop.','Leads architecture for agentic AI systems\nacross defense programs.','Has helped 500+ engineers adopt agents,\nand watched where using one stops\nand engineering one begins.'],344,205,568,24,{step:89,lineH:90});
await newSlide('03');thesis();
await newSlide('04');
twoTable(['AI in your development\nworkflow','AI in the product\nyou deliver'],[['You use model output to help\nbuild an artifact','Users depend on model output or\ndecisions during operation'],['You decide what to accept and ship','You design checks, approval steps,\nand failure handling'],['Your coding-tool provider operates\nthe agent platform',"Your team owns the product's\nbehavior and operating limits"]],68,[90,94,82,100],{end:1});
const commitments=['A compelling prototype is not evidence\nof production readiness.','Traditional tests are necessary\nbut no longer sufficient.','Evaluation does not stop at deployment.'];
commitments.forEach((v,i)=>{text(String(i+1),110,132+i*120,34,50,24,{color:C.secondary,start:1});text(v,150,132+i*120,708,68,24,{start:1});});
text([[run('works',C.text,false,'Consolas'),run('.any()',C.amber,false,'Consolas'),run(' is not ',C.secondary),run('works',C.text,false,'Consolas'),run('.all()',C.green,false,'Consolas')]],150,205,708,20,16,{start:1,exact:20});
await newSlide('05');
text('You will leave with',48,68,420,40,24,{bold:true,color:C.pink});text('Agenda',492,68,420,40,24,{bold:true,color:C.pink});
['A conceptual map of\nthe discipline.','An honest sense of\nhow much there is.','A roadmap for making\nthe transition.'].forEach((v,i)=>{text(String(i+1),48,137+i*100,32,32,24,{color:C.secondary});text(v,88,137+i*100,380,66,24);});
[['The map.','2 min',137],['Six areas.','23 min',207],['The transition.','5 min',342],['Your questions.','15 min',412]].forEach(([a,b,y])=>{text(a,492,y,290,34,24);text(b,802,y,110,34,24,{align:'right'});});
text([[run('Models',C.blue),run(' · ',C.secondary),run('Context and knowledge',C.pink),run(' · ',C.secondary),run('Tools',C.pink)],[run('Orchestration',C.pink),run(' · ',C.secondary),run('Verification and evals',C.green)],[run('Operating it',C.amber)]],512,248,400,70,16);
text("User example · Quote · Decisions · Maintenance · Worked example",48,472,864,20,16,{color:C.secondary});
await newSlide('06');sectionDivider(2,'What AI engineers\nactually engineer');
// The anatomy map uses the supplied renders, including every highlight state.
await newSlide('07');await img('internal/renders/map-full.png',0,0,960,540,{end:1});
for(let k=1;k<=4;k++)await img(`internal/renders/map-${['model','harness','per-run','across-runs'][k-1]}.png`,0,0,960,540,{start:k,end:k+1,duration:300});
await img('internal/renders/map-full.png',0,0,960,540,{start:5,duration:300});
// Models revision: user, quote, decisions, maintenance, FRB application.
await newSlide('08',{area:'Models',header:true,color:C.blue});
excerpt('Devin Desktop','Model picker',48,184,420,260);
text('Model',492,192,420,32,24,{bold:true});
text('Choose which model handles\nthe coding task.',492,236,420,64,24);
text('Reasoning effort',492,326,420,32,24,{bold:true});
text('Adjust the effort used to\nwork through the task.',492,370,420,64,24);
await newSlide('09',{area:'Models',map:'models',color:C.blue});
text('“A decent model with a\ngreat harness beats a\ngreat model with a\nbad harness.”',48,192,568,216,44,{end:1});
text('Addy Osmani',48,428,568,28,20,{end:1});
attr('Agent Harness Engineering, April 2026',48,462,568,{end:1});
await img('internal/illustrations/models-in-system.png',640,212,272,272,{end:1,alt:'Conceptual illustration: a blue model component supported by a larger surrounding structure'});
text('The model decisions you own',48,68,692,76,32,{bold:true,start:1,end:2,name:'models-decisions-title'});
[
 ['Which model and\nreasoning settings?','Balance task quality, cost, latency,\nand deployment constraints.\nStart with representative task comparisons.'],
 ['One model or\ndifferent models?','Routing adds task-specific choices\nand more configurations to maintain.\nStart with one until evidence supports routing.'],
 ['How will model\nchanges be controlled?','Pinned versions need planned migration.\nMoving aliases need regression monitoring.\nDefine evaluation and replacement practices.'],
].forEach(([question,body],i)=>{text(question,48,192+i*100,272,82,24,{bold:true,start:1,end:2});text(body,344,192+i*100,568,82,20,{start:1,end:2});});
text('Living with model choices',48,68,692,76,32,{bold:true,start:2,end:3,name:'models-maintenance-title'});
[
 ['Task changes','New tasks can expose gaps in the original evaluation.\nRefresh the cases as intended use changes.'],
 ['Routing','Each route needs evaluation coverage.\nMeasure the whole workflow as routes change.'],
 ['Model lifecycle','Versions retire. Aliases update.\nMonitor changes and prepare a replacement.'],
].forEach(([label,body],i)=>{text(label,48,192+i*62,216,30,20,{bold:true,color:C.blue,start:2,end:3});text(body,292,192+i*62,620,54,20,{start:2,end:3});});
text('A snapshot does not freeze the whole system.',48,386,864,30,20,{start:2,end:3});
text('Pitfall',48,426,124,30,20,{bold:true,color:C.blue,start:2,end:3});
text(pitfalls[0].replace('models ', 'models\n'),196,426,716,64,24,{bold:true,start:2,end:3});
text('A starting design for the FRB brief',48,68,692,76,32,{bold:true,start:3,name:'models-application-title'});
attr('Illustrative proposed design. No model results claimed.',48,192,864,{start:3});
evidenceTable([
 ['Choice','Starting design and rationale'],
 ['Task fit','Compare models on faithful summaries\nand supported findings.'],
 ['Allocation','One model configuration for the brief.\nAdd routing only when measurements justify it.'],
 ['Changes','Pinned version where available,\nwith a migration plan.'],
],[224,640],228,[36,56,56,56],{color:C.blue,start:3});
text('Revisit when measured quality, cost, latency,\nor lifecycle requirements justify a change.',48,440,864,52,20,{start:3});
// Context revision: user, quote, decisions, maintenance, FRB application.
await newSlide('10',{area:'Context and knowledge',header:true,color:C.pink});
excerpt('AGENTS.md','Project instructions',48,184,420,260);
text('Project conventions',492,192,420,32,24,{bold:true});
text('Tell the agent how work should\nfit this repository.',492,236,420,64,24);
text('Checks',492,326,420,32,24,{bold:true});
text('Tell it how to validate changes\nbefore handing work back.',492,370,420,64,24);
await newSlide('11',{area:'Context and knowledge',map:'context',color:C.pink});
text('“Context, therefore, must\nbe treated as a finite\nresource with diminishing\nmarginal returns.”',48,192,568,216,44,{end:1});
text('Anthropic',48,428,568,28,20,{end:1});
attr('Effective context engineering for AI agents, September 2025',48,462,568,{end:1});
await img('internal/illustrations/context-selection.png',640,212,272,272,{end:1,alt:'Conceptual illustration: selected information in a limited working space'});
text('The context decisions you own',48,68,692,76,32,{bold:true,start:1,end:2,name:'context-decisions-title'});
[
 ['What belongs in\nthe next step?','Instructions, task state, retrieved knowledge.\nChoose retrieval for the data and task.\nStart with what the next step needs.'],
 ['What should persist\nor be refreshed?','Keep durable facts and constraints.\nSummarize or discard what is no longer needed.\nRefresh information as its sources change.'],
 ['Which sources\nand access scope?',"Keep source locations and revisions.\nLimit retrieval to the user's authorized scope.\nEnforce access outside the model."],
].forEach(([question,body],i)=>{text(question,48,192+i*100,272,82,24,{bold:true,start:1,end:2});text(body,344,192+i*100,568,82,20,{start:1,end:2});});
text('Living with context choices',48,68,692,76,32,{bold:true,start:2,end:3,name:'context-maintenance-title'});
[
 ['Freshness','New records can make retrieved passages stale.\nRefresh retrieval when source versions change.'],
 ['Context growth','Summaries can lose constraints as sessions grow.\nRetain decisions and unresolved questions.'],
 ['Boundaries','Memory or retrieval can cross access boundaries.\nRecheck access and preserve provenance.'],
].forEach(([label,body],i)=>{text(label,48,192+i*62,216,30,20,{bold:true,color:C.pink,start:2,end:3});text(body,292,192+i*62,620,54,20,{start:2,end:3});});
text('Stable prefixes can help caching. Correctness and access take priority.',48,386,864,30,20,{start:2,end:3});
text('Pitfall',48,426,124,30,20,{bold:true,color:C.pink,start:2,end:3});
text(pitfalls[1],196,426,716,64,24,{bold:true,start:2,end:3});
text('A starting context for the FRB brief',48,68,692,76,32,{bold:true,start:3,name:'context-application-title'});
attr('Illustrative proposed context.',48,192,864,{start:3});
attr('FRB-042-BRF r1 · slide 6 · preliminary',48,224,420,{start:3});
text('“Bearing wear is a\npossible cause.”',48,256,420,64,24,{start:3});
text('FRB-042-MIN r2 · §3, paragraph 2\nLater minutes',48,330,420,40,16,{color:C.secondary,start:3});
text('“Cause remains unresolved.\nInspect the bearing before\nassigning a cause.”',48,380,420,90,24,{start:3});
[
 ['Select','Relevant passages, with\nrevisions and source locations.'],
 ['Retain','Unresolved cause.\nInspection required.'],
 ['Refresh','Update sources and recheck access\nbefore finalizing the brief.'],
].forEach(([label,body],i)=>{text(label,492,224+i*92,420,30,20,{bold:true,color:C.pink,start:3});text(body,492,254+i*92,420,54,20,{start:3});});
// Tools revision: user, quote, decisions, maintenance, FRB application.
await newSlide('12',{area:'Tools and extensibility',header:true,color:C.pink});
excerpt('MCP configuration','Connected tools',48,184,420,260);
text('Connect a service',492,192,420,32,24,{bold:true});
text('Add an MCP server to make\nits tools available.',492,236,420,64,24);
text('Use its tools',492,326,420,32,24,{bold:true});
text('The coding agent can call\nthose tools as it works.',492,370,420,64,24);
await newSlide('13',{area:'Tools and extensibility',map:'tools',color:C.pink});
text('“Agents are only as\neffective as the tools\nwe give them.”',48,216,568,164,44,{end:1});
text('Anthropic',48,428,568,28,20,{end:1});
attr('Writing effective tools for agents, September 2025',48,462,568,{end:1});
await img('internal/illustrations/tools-interface.png',640,212,272,272,{end:1,alt:'Conceptual illustration: a deliberate interface connecting two different systems'});
text('The tool decisions you own',48,68,692,76,32,{bold:true,start:1,end:2,name:'tools-decisions-title'});
[
 ['Which capabilities\nneed tools?','Choose operations that serve the task.\nTest granularity and discovery with real use.\nBegin with a small, distinct tool set.'],
 ["What is the tool's\ncontract?",'Define names, inputs, results, and errors.\nReturn useful context with stable IDs.\nEvaluate descriptions with real tasks.'],
 ['What may run,\nand under which rules?','Apply least privilege to reads and writes.\nValidate inputs and enforce authorization in code.\nRequire approval where policy calls for it.'],
].forEach(([question,body],i)=>{text(question,48,192+i*100,272,82,24,{bold:true,start:1,end:2});text(body,344,192+i*100,568,82,20,{start:1,end:2});});
text('Living with tool choices',48,68,692,76,32,{bold:true,start:2,end:3,name:'tools-maintenance-title'});
[
 ['Contract changes','Descriptions, schemas, and behavior can drift.\nUpdate and evaluate them together.'],
 ['Tool growth','Overlapping tools make selection harder.\nPrune duplicates and load definitions when needed.'],
 ['Failures','Return an explicit result, error, or unknown outcome.\nKeep callers from mistaking failure for success.'],
].forEach(([label,body],i)=>{text(label,48,192+i*62,216,30,20,{bold:true,color:C.pink,start:2,end:3});text(body,292,192+i*62,620,54,20,{start:2,end:3});});
text('A description guides the model. Code enforces the contract.',48,386,864,30,20,{start:2,end:3});
text('Pitfall',48,426,124,30,20,{bold:true,color:C.pink,start:2,end:3});
text(pitfalls[2].replace('surface ', 'surface\n'),196,426,716,64,24,{bold:true,start:2,end:3});
text('A tool contract for the FRB brief',48,68,692,76,32,{bold:true,start:3,name:'tools-application-title'});
attr('Illustrative Export cited brief tool.',48,192,864,{start:3});
evidenceTable([
 ['Contract','Export cited brief'],
 ['Input','Checked draft, citations, destination.'],
 ['Checks','Enforce access and permitted destination.\nRequire source IDs, revisions, and locations.'],
 ['Output','Brief matching the checked draft, with citations\nand uncertainty intact, plus an export receipt.'],
 ['Failure','Explicit failure or incomplete result.\nDo not report an unconfirmed export as complete.'],
],[224,640],228,[36,38,56,56,56],{color:C.pink,start:3});
// Orchestration revision: user, quote, decisions, maintenance, FRB application.
await newSlide('14',{area:'Orchestration',header:true,color:C.pink});
excerpt('Plan mode','Proposed steps',48,184,420,260);
text('Request a plan',492,192,420,32,24,{bold:true});
text('Ask the coding agent to\nbreak down the task.',492,236,420,64,24);
text('Review the approach',492,326,420,32,24,{bold:true});
text('Inspect the proposed steps\nbefore implementation.',492,370,420,64,24);
await newSlide('15',{area:'Orchestration',map:'orchestration',color:C.pink});
text('“we recommend finding\nthe simplest solution\npossible, and only increasing\ncomplexity when needed.”',48,192,568,216,44,{end:1});
text('Anthropic',48,428,568,28,20,{end:1});
attr('Building effective agents, December 2024',48,462,568,{end:1});
await img('internal/illustrations/orchestration-path.png',640,212,272,272,{end:1,alt:'Conceptual illustration: a simple workflow path beside optional branching complexity'});
text('The orchestration decisions you own',48,68,692,76,32,{bold:true,start:1,end:2,name:'orchestration-decisions-title'});
[
 ['Who chooses\nthe next step?','Use code for known paths and required checks.\nLet the model choose where judgment helps.\nStart with a bounded workflow.'],
 ['When should work\nbe delegated?','Separate work that can be done independently.\nDefine handoff inputs and expected results.\nAdd workers only when measured gains justify it.'],
 ['How does execution\nstop or recover?','Define completion checks and stopping limits.\nSave state needed to resume.\nBound retries and provide a human handoff.'],
].forEach(([question,body],i)=>{text(question,48,192+i*100,272,82,24,{bold:true,start:1,end:2});text(body,344,192+i*100,568,82,20,{start:1,end:2});});
text('Living with orchestration choices',48,68,692,76,32,{bold:true,start:2,end:3,name:'orchestration-maintenance-title'});
[
 ['Workflow changes','New branches can bypass required checks.\nRecheck paths and protect acceptance criteria.'],
 ['Handoffs','Workers can lose context or return conflicting results.\nKeep evidence, uncertainty, and ownership explicit.'],
 ['Recovery','Retries can repeat an action that already succeeded.\nPersist progress and confirm effects before retrying.'],
].forEach(([label,body],i)=>{text(label,48,192+i*62,216,30,20,{bold:true,color:C.pink,start:2,end:3});text(body,292,192+i*62,620,54,20,{start:2,end:3});});
text('Set action, token, and end-to-end latency limits.',48,386,864,30,20,{start:2,end:3});
text('Pitfall',48,426,124,30,20,{bold:true,color:C.pink,start:2,end:3});
text(pitfalls[3],196,426,716,64,24,{bold:true,start:2,end:3});
text('A bounded workflow for the FRB brief',48,68,692,76,32,{bold:true,start:3,name:'orchestration-application-title'});
attr('Illustrative starting design: predefined steps.',48,192,864,{start:3});
['Retrieve the packet.','Inspect evidence.','Compare cases.','Reconcile findings.','Verify the brief.','Export.'].forEach((label,i)=>{
 const x=i%2===0?48:492,y=224+Math.floor(i/2)*56;
 text(String(i+1),x,y,32,40,24,{color:C.secondary,start:3});text(label,x+48,y,372,40,24,{start:3});
});
text('Export only after checks pass. At a limit, stop or hand off.',48,392,864,30,20,{bold:true,start:3});
text('Save steps and revisions. Before retrying an export,\ncheck its receipt and recheck freshness and access.',48,434,864,54,20,{start:3});
// Evals revision: user, quote, decisions, maintenance/story, FRB check.
await newSlide('16',{area:'Verification and evals',header:true,color:C.green});
excerpt('Test run','Repository checks',48,184,420,260);
text('Run the checks',492,192,420,32,24,{bold:true});
text("The agent runs the\nrepository's tests.",492,236,420,64,24);
text('Read the result',492,326,420,32,24,{bold:true});
text('Inspect the output before\naccepting the change.',492,370,420,64,24);
await newSlide('17',{area:'Verification and evals',map:'evals',color:C.green,note:'Hold the maintenance state (original state 2) for the protected 1:00 personal-story slot before the FRB illustration.'});
text('“Error analysis is the\nmost important activity\nin evals.”',48,216,568,164,44,{end:1});
text('Hamel Husain and Shreya Shankar',48,428,568,28,20,{end:1});
attr('AI Evals: Everything You Need to Know, September 2026',48,462,568,{end:1});
await img('internal/illustrations/evals-inspection.png',640,212,272,272,{end:1,alt:'Conceptual illustration: inspecting a result against supporting evidence'});
text('The evaluation decisions you own',48,68,692,76,32,{bold:true,start:1,end:2,name:'evals-decisions-title'});
[
 ['What counts\nas success?','Define the outcome and required constraints.\nInclude serious failure cases and acceptable limits.\nUse criteria a domain expert can apply.'],
 ['Which checks\ncan establish it?','Use direct checks where possible.\nUse expert judgment for meaning and usefulness.\nCalibrate model graders against experts.'],
 ['Which cases\nand how many trials?','Start with 20 to 50 cases from real failures.\nCover common tasks and important edge cases.\nRepeat trials to measure consistency.'],
].forEach(([question,body],i)=>{text(question,48,192+i*100,272,82,24,{bold:true,start:1,end:2});text(body,344,192+i*100,568,82,20,{start:1,end:2});});
text('Living with evaluation choices',48,68,692,76,32,{bold:true,start:2,end:3,name:'evals-maintenance-title'});
[
 ['Criteria','Outputs can reveal missing requirements.\nRefine criteria with domain experts.'],
 ['Graders','A judge can disagree with expert decisions.\nReview disagreements and recalibrate.'],
 ['Coverage','Model and harness changes can expose new failures.\nRerun the suite and add production failures.'],
].forEach(([label,body],i)=>{text(label,48,192+i*62,216,30,20,{bold:true,color:C.green,start:2,end:3});text(body,292,192+i*62,620,54,20,{start:2,end:3});});
text('Inspect the result and the trace before choosing a repair.',48,386,864,30,20,{start:2,end:3});
text('Pitfall',48,426,124,30,20,{bold:true,color:C.green,start:2,end:3});
text(pitfalls[4].replace('. Trusting', '.\nTrusting'),196,426,716,64,24,{bold:true,start:2,end:3});
text('A source-support check for the FRB brief',48,68,692,76,32,{bold:true,start:3,name:'evals-application-title'});
attr('Illustrative FRB-042 source-support check.',48,192,864,{start:3});
attr('FRB-042-MIN r2 · §3, paragraph 2',48,224,420,{start:3});
text('“Cause remains unresolved.\nInspect the bearing before\nassigning a cause.”',48,256,420,96,24,{start:3});
text('Citation exists: PASS',48,386,420,30,20,{start:3});
text('Claim supported: FAIL',48,424,420,30,20,{bold:true,start:3});
text('Answer citing these minutes',492,224,420,30,20,{bold:true,color:C.green,start:3});
text('“The board confirmed\nbearing wear.”',492,256,420,64,24,{start:3});
text('Expected',492,350,420,30,20,{bold:true,color:C.green,start:3});
text('The cause remains unresolved.\nInspection is required.',492,384,420,64,24,{start:3});
text('Keep this failure as a regression case. Rerun it after changes.',48,460,864,30,20,{start:3});
// Operating revision: user, quote, decisions, maintenance, FRB agreement, section wrap.
await newSlide('18',{area:'Operating it',header:true,color:C.amber});
excerpt('Usage view','Session consumption',48,184,420,260);
text('Check usage',492,192,420,32,24,{bold:true});
text("View the session's\nestimated consumption.",492,236,420,64,24);
text('Connect it to the work',492,326,420,32,24,{bold:true});
text('Relate that usage to the task\nyou asked it to do.',492,370,420,64,24);
await newSlide('19',{area:'Operating it',map:'operating',color:C.amber});
text("“The next wave of agent\nfailures won't be about\nwhat agents can't do.\nIt'll be about what teams\ncan't observe.”",48,192,568,268,44,{end:1});
await img('internal/illustrations/operating-observability.png',664,192,224,224,{end:1,alt:'Conceptual illustration: a visible execution path inside a system'});
text('Guillermo Rauch',640,420,272,28,20,{end:1});
text('State of AI Engineering\nDatadog, 2026',640,452,272,40,16,{color:C.secondary,end:1});
text('The operating decisions you own',48,68,692,76,32,{bold:true,start:1,end:2,name:'operating-decisions-title'});
[
 ['What may the system\naccess and do?','Scope every identity, read, and outbound action.\nStart with least privilege, enforced outside the model.'],
 ['What must you\nobserve?','Trace model calls, tools, and outcomes.\nTrack quality, cost per completed task, and latency.'],
 ['When should it\nstop or hand off?','Set budgets and define failure responses.\nStop or hand off when a limit or check fails.'],
 ['Who owns approvals\nand incidents?','Assign an accountable operator and review process.\nKeep audit trails and a rollback path.'],
].forEach(([question,body],i)=>{text(question,48,192+i*74,272,64,24,{bold:true,start:1,end:2});text(body,344,192+i*74,568,64,20,{start:1,end:2});});
text('Living with operating choices',48,68,692,76,32,{bold:true,start:2,end:3,name:'operating-maintenance-title'});
[
 ['Integrations','New tools can join private data, untrusted content,\nand external communication in one path.'],
 ['Operating signals','Changes shift quality, cost, and latency.\nInspect failed traces and feed them back into evals.'],
 ['Controls','Permissions and policies change.\nRecheck access, approvals, alerts, and handoff.'],
].forEach(([label,body],i)=>{text(label,48,192+i*62,216,30,20,{bold:true,color:C.amber,start:2,end:3});text(body,292,192+i*62,620,54,20,{start:2,end:3});});
text('A probabilistic filter is insufficient as the sole security boundary.',48,386,864,30,20,{start:2,end:3});
text('Pitfall',48,426,124,30,20,{bold:true,color:C.amber,start:2,end:3});
text(pitfalls[5].replace(', assembled', ',\nassembled'),196,426,716,64,24,{bold:true,start:2,end:3});
text('An operating agreement for the FRB system',48,68,692,76,32,{bold:true,start:3,name:'operating-application-title'});
attr('Illustrative proposed operating agreement.',48,192,864,{start:3});
evidenceTable([
 ['Responsibility','FRB starting rule'],
 ['Access','Authorized records and permitted export destinations.\nEnforce access outside the model.'],
 ['Monitor','Trace revisions, decisions, checks, and exports.\nTrack quality, freshness, cost per brief, and latency.'],
 ['Handoff','Failed checks, missing evidence, or exhausted budgets\nproduce a limitation or human handoff.'],
 ['Ownership','People own official causes, decisions,\nand board records.'],
],[224,640],228,[36,56,56,56,56],{color:C.amber,start:3});
await newSlide('19b',{note:'Source slide 19, build 5. Hard cut to the section wrap at 3:35.'});await img('internal/renders/map-yours.png',0,0,960,540,{alt:'Anatomy of an Agentic AI System, with yours badges'});

await newSlide('20');sectionDivider(3,'Making the transition');
await newSlide('21',{area:'The transition',beat:'What transfers',map:'all',color:C.green,title:'What transfers'});
twoTable(['You already do this','It becomes this'],[['Decomposition and systems thinking','Harness design'],['Interface design','Tool design'],['Testing discipline','Eval discipline'],['Observability','The same, with a new schema'],['Security and least privilege','Least privilege for tools'],['Operations: cost, latency,\nincidents, rollback','The same, in tokens']],192,[36,36,36,36,36,36,56],{color:C.green,rightColors:[C.pink,C.pink,C.green,C.green,C.green,C.green],end:1});
text('Engineers at incident.io, Sentry, Elsevier, and others crossed over in months, not years.\nOne twenty-five-year veteran: about two months.',48,192,864,96,24,{start:1});
text('"For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier."',48,328,864,95,24,{start:1});attr('Matt Morgis, Elsevier, via The Pragmatic Engineer, March 2025',48,446,864,{start:1});
await newSlide('22',{area:'The transition',beat:'What is new',map:'all',color:C.green,title:'What is new'});
[['Prompt engineering','2023',370],['Context engineering','2025',300],['Harness engineering','2026',230]].forEach(([a,b,y],i)=>{text(a,48+i*296,y-38,272,30,20);line(48+i*296,y,272,0);text(b,48+i*296,y+12,272,20,16,{color:C.secondary});});text('Each one absorbs the last.',48,442,864,32,24);
await newSlide('22b',{area:'The transition',beat:'What is new',map:'all',color:C.green,morph:true});strip('Prompt engineering (2023) · Context engineering (2025) · Harness engineering (2026)');
const competencies=['Model behavior intuition. Informed by reading outputs.','Context engineering.','Tool design, for a caller that reads the description every time.','Harness and loop design.','Evals and error analysis.','AI security. The attack surface is the model\'s reasoning.','Cost and latency as design constraints.'];
competencies.forEach((v,i)=>text(v,48,192+i*42,864,30,20,{end:1}));
text('"Getting comfortable with evaluations\nand iterating on non-deterministic\noutputs is the biggest challenge\nmost devs have."',48,192,864,212,44,{start:1});attr('Ross McNairn, Wordsmith, via The Pragmatic Engineer, March 2025',48,428,864,{start:1});
await newSlide('23',{area:'The transition',beat:'The pitfalls',variant:'compact',color:C.green});
['Models','Context','Tools','Orchestration','Evals','Operating'].forEach((name,i)=>{const color=[C.blue,C.pink,C.pink,C.pink,C.green,C.amber][i],y=[100,163,226,289,352,435][i],h=i===4?76:56;shape(0,y,960,h,C.surface);shape(0,y,272,h,color);text(name,48,y+(h-32)/2,208,32,20,{bold:true,color:i===0?C.text:C.bg,middle:true});text(pitfalls[i],296,y+3,616,h-6,20,{middle:true});});
await newSlide('24',{area:'The transition',beat:'The roadmap',map:'all',color:C.green,title:'The roadmap',note:'Sublines are spoken. The first assignment replaces the four roadmap rows; hold for the protected story slot.'});
['Look before you build.','Start constrained.','Own the harness.','Add autonomy as your evals earn it.'].forEach((v,i)=>{card(48,192+i*67,864,59,'','',{end:1});text(String(i+1),64,195+i*67,64,53,44,{color:C.secondary,end:1});text(v,136,202+i*67,756,42,32,{bold:true,end:1});});
text('Review 20 to 50 outputs.',48,192,864,45,32,{start:1,bold:true});
text('Record the input, observed behavior,\nexpected behavior, and check.',48,256,864,60,24,{start:1});
attr('Illustrative FRB callback. Use your own system’s outputs.',48,342,864,{start:1});
evidenceTable([
 ['Input','Observed','Expected','Check'],
 ['FRB-042\nsummary','Bearing wear\nconfirmed','Cause remains\nunresolved','Does the source\nsupport the claim?'],
],[216,216,216,216],374,[32,76],{color:C.green,start:1});
await newSlide('25',{title:'Resources',variant:'resources'});
const resources=[['Chip Huyen, AI Engineering: Building Applications with Foundation Models.','O\'Reilly, 2025.'],['Anthropic engineering: "Building effective agents" (December 2024).','"Effective context engineering for AI agents" (September 2025).','"Demystifying evals for AI agents" (January 2026).'],['OpenAI, "A practical guide to building agents" (2025).'],['Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev.','Shreya Shankar and Hamel Husain, Evals for AI Engineers.','O\'Reilly, October 2026.'],['OWASP Top 10 for LLM Applications (2025)','and for Agentic Applications (2026).'],['OpenTelemetry GenAI semantic conventions.']];
let ry=146;for(const lines of resources){for(const lineText of lines){text(lineText,48,ry,864,25,20);ry+=25;}ry+=8;}
await newSlide('26');thesis(true);

// Add the editable narrative number last, above full-screen images and bands.
for (let i = 0; i < meta.length; i++) {
 cur = meta[i]; slide = deck.slides.items[i];
 text(String(cur.source),928,512,20,16,12,{name:'narrative-number',color:C.secondary,align:'right'});
}

// Preserve the authored compositions, then compile replacements before PPTX export.
const authored = deck.toProto();
await fs.writeFile(path.join(BUILD,'build-map.json'),JSON.stringify(meta,null,2));
await fs.writeFile(path.join(BUILD,'model.json'),JSON.stringify(authored));
const expanded = expandStates(authored, meta);
assert.deepEqual(expanded.counts, EXPECTED_COUNTS, 'Deck build counts changed');
await fs.writeFile(path.join(BUILD,'expanded-build-map.json'),JSON.stringify(expanded.map,null,2));
await fs.writeFile(path.join(BUILD,'expanded-model.json'),JSON.stringify(expanded.proto));
await fs.writeFile(path.join(BUILD,'expansion-validation.json'),JSON.stringify({counts:expanded.counts,allStatesEquivalent:true},null,2));
await (await PresentationFile.exportPptx(Presentation.load(expanded.proto))).save(path.join(BUILD,'authored.pptx'));
console.log(JSON.stringify(expanded.counts));
