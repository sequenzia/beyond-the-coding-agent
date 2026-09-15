import fs from 'node:fs/promises';
import path from 'node:path';
import { Presentation, PresentationFile } from '@oai/artifact-tool';
import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import sharp from 'sharp';
import { ROOT, BUILD, registerFonts } from './runtime.mjs';

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
const research={};for(const n of [1,2,3]) research[n]=await fs.readFile(path.join(ROOT,`research/section-${n}.md`),'utf8');
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
function attr(str,x=48,y=472,w=864,opts={}){return text([[run('// ',C.secondary,false,'Consolas'),...runs(str,16,C.secondary)]],x,y,w,20,16,{...opts,color:C.secondary,exact:20});}
async function newSlide(key,{area,beat='When it\'s your agent',map,title,header=false,color,morph=false,note=''}={}){
 slide=deck.slides.add();slide.setLayout(blank);slide.background.fill=C.bg;
 cur={key,source:Number.parseInt(key),slideIndex:meta.length+1,objects:[],morph,note};meta.push(cur);serial=0;
 const base=sources[cur.source];let src=base.text;const spoken=src.split('## Talk track')[1]||'';
 const section=cur.source<=6?1:cur.source<=19?2:3;
 const sourceText=(src.split('## Sources')[1]||'').split('## Open items')[0];
 let urls=[];const secRE=section===2?/Research §(\d)/g:null;
 if(section===2){const wanted=new Set([...sourceText.matchAll(/(?:Research |research )?§(\d)/g)].map(x=>Number(x[1])));for(const n of wanted){const block=research[2].split(new RegExp(`## ${n}\\. `))[1]?.split(/\n## \d+\./)[0]||'';urls.push(...block.match(/https?:\/\/[^\s)<>]+/g)||[]);}}
 else urls=research[section].match(/https?:\/\/[^\s)<>]+/g)||[];
 slide.speakerNotes.textFrame.setText(`Source slide ${key}\n${base.text.split('\n')[2]}\n${note}\n\n${spoken}\n\nResearch links\n${[...new Set(urls)].join('\n')}`);
 if(header){shape(0,0,960,128,color,'none',0,{name:'!!area-header'});text(area,48,22,864,70,60,{bold:true,color:color===C.blue?C.text:C.bg,name:'!!area-name'});text('What you touched',48,92,864,25,20,{color:color===C.blue?C.text:C.bg,name:'!!area-beat'});}
 else if(area){text([[run(area,color,true),run(` · ${beat}`,C.secondary)]],48,36,map?716:864,25,20,{name:'!!area-name'});if(map)await img(`internal/renders/mini-${map}.png`,752,36,160,90,{name:'mini-map',alt:`Anatomy mini-map: ${map}`});}
 if(title)text(title,48,68,map?692:864,76,32,{bold:true,name:'slide-title'});
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
function strip(str,opts={}){text(str,48,68,692,24,16,{...opts,color:C.secondary,exact:20});}
function excerpt(title,body,x,y,w,h,opts={}){
 const labels={ 'Devin Desktop':'Devin Desktop model picker\nReasoning-effort slider visible', 'Codex CLI':cur.key.startsWith('10')?'Codex /compact notice':'Codex /model picker\nReasoning effort choices', 'AGENTS.md':'Your AGENTS.md\n10 to 15 lines', 'MCP configuration':'Your MCP server configuration', 'The permission prompt':'Live shell-command approval prompt'};
 const name='!!screenshot-'+title;
 const obj=slide.shapes.add({name,geometry:'roundRect',placeholderType:'picture',placeholderIndex:cur.objects.filter(x=>x.kind==='placeholder').length,position:{left:x*P,top:y*P,width:w*P,height:h*P},fill:C.surface,line:{fill:C.hair,width:P},borderRadius:4*P});
 addMeta(obj,'placeholder',{...opts,name,effect:'fade'});
 text(h>100?'SCREENSHOT':'Image',x+16,y+(h>100?55:10),w-32,22,16,{...opts,color:C.secondary,align:'center'});
 text(h>100?(labels[title]||title):title,x+16,y+(h>100?96:36),w-32,h>100?95:43,h>100?20:16,{...opts,color:C.text,align:'center'});
}

function thesis(question=false){text('Using AI makes you\nan AI-enabled software engineer.',48,136,864,104,44,{align:'center'});text('Engineering systems that depend on AI\nmakes you an AI engineer.',48,286,864,104,44,{align:'center',bold:true});if(question)text('Questions',48,438,864,40,32,{align:'center',start:1});}
const pitfalls=['a hardcoded model ID with no eval suite behind it.','adding instead of curating.','one endpoint per tool.','multi-agent before a workflow was tried.','a generic judge instead of error analysis. Grading the transcript instead of the outcome.','the lethal trifecta, assembled one integration at a time.'];

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
twoTable(['Using AI','Engineering AI systems'],[['The behavior lives in code.','Part of the behavior lives in a model\nyou did not train.'],['The model is a tool in your workflow.','The model is in the control flow.'],['You review every output.','Nobody reviews every output.'],['You are the verifier.','The system has to verify itself.'],['The demo is the product,\nbecause you are there.','The demo is one path through\na space of behaviors.']],68,[48,68,56,56,68,74],{end:1});
const commitments=['A compelling prototype is not evidence\nof production readiness.','Traditional tests are necessary\nbut no longer sufficient.','Evaluation does not stop at deployment.'];
commitments.forEach((v,i)=>{text(String(i+1),110,132+i*120,34,50,24,{font:'Consolas',color:C.secondary,start:1});text(v,150,132+i*120,708,68,24,{start:1});});
text([[run('works',C.text,false,'Consolas'),run('.any()',C.amber,false,'Consolas'),run(' is not ',C.secondary),run('works',C.text,false,'Consolas'),run('.all()',C.green,false,'Consolas')]],150,205,708,20,16,{start:1,exact:20});
await newSlide('05');
text('You will leave with',48,68,420,40,24,{bold:true,color:C.pink});text('Agenda',492,68,420,40,24,{bold:true,color:C.pink});
['A conceptual map of\nthe discipline.','An honest sense of\nhow much there is.','A roadmap for making\nthe transition.'].forEach((v,i)=>{text(String(i+1),48,137+i*100,32,32,24,{font:'Consolas',color:C.secondary});text(v,88,137+i*100,380,66,24);});
[['The map.','2 min',137],['Six areas.','23 min',207],['The transition.','5 min',342],['Your questions.','15 min',412]].forEach(([a,b,y])=>{text(a,492,y,290,34,24);text(b,802,y,110,34,24,{align:'right'});});
text([[run('Models',C.blue),run(' · ',C.secondary),run('Context and knowledge',C.pink),run(' · ',C.secondary),run('Tools',C.pink)],[run('Orchestration',C.pink),run(' · ',C.secondary),run('Verification and evals',C.green)],[run('Operating it',C.amber)]],512,248,400,70,16);
text("For each area: what you touched, what someone engineered, when it's your agent.",48,472,864,20,16,{color:C.secondary});
await newSlide('06',{note:'Static cursor fallback from the design brief.'});text('›',48,48,32,40,32,{font:'Consolas'});shape(84,52,16,32,C.text);
// The anatomy map uses the supplied renders, including every highlight state.
await newSlide('07');await img('internal/renders/map-full.png',0,0,960,540,{end:1});
for(let k=1;k<=4;k++)await img(`internal/renders/map-${['model','harness','per-run','across-runs'][k-1]}.png`,0,0,960,540,{start:k,end:k+1,duration:300});
await img('internal/renders/map-full.png',0,0,960,540,{start:5,duration:300});
// Models.
await newSlide('08',{area:'Models',header:true,color:C.blue});
excerpt('Devin Desktop', 'Model picker\nReasoning effort\nToken pricing',48,156,568,268,{size:24});
excerpt('Codex CLI', '`/model`\n\nChoose the active model\nand reasoning effort.',640,156,272,268,{size:20});
attr('Devin Desktop, the model picker',48,432,568);attr('Codex, `/model`',640,432,272);
await newSlide('08b',{area:'Models',beat:'What you touched',map:'models',color:C.blue,morph:true});
excerpt('Devin','Model picker',48,68,138,88,{size:16});excerpt('Codex','`/model`',202,68,138,88,{size:16});
text('Behind the picker, someone:',48,164,864,30,24,{bold:true});
list(['Chose the default.','Tuned prompts and tool descriptions per model.','Built failover for when a model is overloaded.','Absorbed every price change.','Migrated you off every retired model.'],48,205,864,24,{step:37});
text('Anthropic retired seven models this year. The latest was\nAugust 5. Every migration happened behind a picker.',48,421,864,66,24,{bold:true,start:1});
await newSlide('09',{area:'Models',map:'models',color:C.blue,title:'The model is a component you select,\nmeasure, and replace.'});
text('Select',48,160,124,30,20,{color:C.blue,bold:true,start:1});pills(['Capability on your tasks','Cost per completed task','Latency at p95','Context window','Tool-use reliability','Data residency'],196,156,716,{start:1});
text('Measure',48,242,124,30,20,{color:C.blue,bold:true,start:2});text("Benchmarks measure someone else's traffic on someone else's harness. Your eval suite measures yours.",196,238,716,56,20,{start:2});
text('Replace',48,306,124,30,20,{color:C.blue,bold:true,start:3});
card(196,302,350,78,'Dated snapshot','Reproducibility; expiry date.',{start:3,titleSize:20,bodySize:20,bodyY:37,tint:C.blueTint,stroke:C.blue});
card(562,302,350,78,'Alias','Silent upgrades; silent drift.',{start:3,titleSize:20,bodySize:20,bodyY:37,tint:C.blueTint,stroke:C.blue});
text('GPT-4, same prime-number questions: 84% in March 2023, 51% in June.',196,380,716,20,16,{start:3,color:C.secondary});
text('Route',48,416,124,30,20,{color:C.blue,bold:true,start:4});text('145 agent tasks: only **7%** of calls needed the frontier model.',196,412,716,33,20,{start:4});band(pitfalls[0],C.blue,{start:5});
// Context and knowledge.
await newSlide('10',{area:'Context and knowledge',header:true,color:C.pink});
excerpt('AGENTS.md', '# AGENTS.md\n\nWhat this is\nSource of truth and the evidence layer\nThe slides layer\nMarkers\nInvariants when editing the outline\nAdding or changing a claim\nProse style',48,156,420,268,{size:16});
excerpt('Codex CLI', '`/compact`\n\nSummarize the current conversation\nto free context.\n\nA shorter history carries forward.',492,156,420,268,{size:20});
attr('`AGENTS.md`',48,432,420);attr('`/compact`',492,432,420);
await newSlide('10b',{area:'Context and knowledge',beat:'What you touched',map:'context',color:C.pink,morph:true});
excerpt('AGENTS.md','Instructions',48,68,138,88,{size:16});excerpt('/compact','Context',202,68,138,88,{size:16});
text('How context fails:',48,164,864,30,24,{bold:true});text('Poisoning · Distraction · Confusion · Clash',48,202,864,54,44);
text('18 models tested. Performance degrades as input grows, on simple tasks.',48,264,864,20,16,{color:C.secondary});
text('What someone engineered:',48,300,864,30,24,{bold:true,start:1});
list(['A system prompt at the right altitude.','A compaction policy.','A memory convention.','**A retrieval strategy: grep and reads, not embeddings.**','A cache-aware layout.'],48,338,864,20,{start:1,step:31,lineH:29});
await newSlide('11',{area:'Context and knowledge',map:'context',color:C.pink,title:'Every token in the window is now\nyour decision.'});
shape(48,162,864,118,'none',C.pink,6,{start:1,strokeWidth:2});shape(64,150,110,22,C.bg,'none',0,{start:1});text('the window',72,150,106,22,16,{start:1,color:C.secondary});
['Instructions','Examples','Retrieved\nknowledge','Session\nstate','Memory','Tool\nresults'].forEach((v,i)=>card(60+i*142,182,136,75,v,'',{start:1,titleSize:20,titleBold:false,titleH:60}));
text('Each has a relevance, a freshness, a provenance, and a size.',48,290,864,25,20,{start:1});
pills(['Context budget','Compaction policy','Memory convention','Retrieval strategy'],48,330,864,{start:2});
text('A compaction that drops a constraint is a wrong answer to a customer.\nA memory that crosses sessions is a breach.',48,385,864,64,24,{start:3});band(pitfalls[1],C.pink,{start:4});
// Tools and extensibility.
await newSlide('12',{area:'Tools and extensibility',header:true,color:C.pink});
excerpt('MCP configuration', '`config.toml`\n\n`[mcp_servers.<name>]`\n\nA server entry connects the agent\nto tools and their descriptions.',48,156,420,226,{size:20});
excerpt('The permission prompt','Read-only\nReversible\nConsequential\n\nThe action class determines the gate.',492,156,420,226,{size:20});
attr('Codex, `config.toml`',48,390,420);attr('Shell command approval',492,390,420);
attr('Codex sandbox: read-only · workspace-write · full access',48,434,864);
attr('Devin CLI modes: Normal · Accept Edits · Smart · Bypass · Autonomous',48,466,864);
await newSlide('12b',{area:'Tools and extensibility',beat:'What you touched',map:'tools',color:C.pink,morph:true});
excerpt('MCP','Config',48,68,138,88,{size:16});excerpt('Approval','Action class',202,68,138,88,{size:16});
text('Design the tool for the caller:',48,164,864,30,24,{bold:true,end:1});
['Consolidate. One `schedule_event`, not `list_users`\nplus `list_events` plus `create_event`.','Namespace. Prefix versus suffix moved the evals.','Return names, not UUIDs.','Let the caller choose. Concise or detailed:\n72 tokens versus 206 for the same result.'].forEach((v,i)=>text(v,48,[208,286,332,378][i],864,[70,40,40,80][i],24,{end:1}));
text('Tool descriptions alone took Claude Sonnet 3.5\nto state of the art on SWE-bench Verified.',48,194,864,84,32,{start:1,bold:true});
text('Five MCP servers: about 55,000 tokens before the first\nmessage. Deferred loading cut it by 85%.',48,316,864,74,24,{start:1});
text("The protocol's floor: no token passthrough · minimal scopes · consent before local commands\n· sandboxed execution",48,448,864,44,16,{start:2,color:C.secondary});
await newSlide('13',{area:'Tools and extensibility',map:'tools',color:C.pink,title:'You write the contract.\nYou build the gate.'});
pills(['The descriptions, and their evals','The verbosity','The action classes','The gate'],48,156,864,{start:1,end:3});
[['Read-only','Runs.'],['Reversible','Checkpoint.'],['Consequential','Gate.']].forEach(([a,b],i)=>card(48+i*296,211,272,124,a,b,{start:2,end:3,tint:C.pinkTint,stroke:C.pink}));
text('an async human step, or\nan automated policy.',656,286,240,44,16,{start:2,end:3,color:C.secondary,effect:'fade'});
card(48,184,864,120,'CamoLeak, October 2025.','A comment hidden in a pull request. Copilot Chat exfiltrated private\nrepository data through image URLs. CVSS 9.6.',{start:3,titleSize:20,bodyY:42});
card(48,328,864,100,'ClawHub, February 2026.','341 of 2,857 agent skills were malicious. One in eight.',{start:3,titleSize:20,bodyY:42});band(pitfalls[2],C.pink,{start:4});
// Orchestration.
await newSlide('14',{area:'Orchestration',header:true,color:C.pink});
pills(['`/plan`','subagents','hooks','`/compact`','`/resume`','`/fork`'],48,164,864);
text('gather context',300,238,360,32,20,{align:'center'});text('take action',574,379,208,32,20,{align:'center'});text('verify',178,379,180,32,20,{align:'center'});
arrow(554,280,81,67);arrow(564,401,-202,0);arrow(287,350,100,-70);
await newSlide('14b',{area:'Orchestration',beat:'What you touched',map:'orchestration',color:C.pink,morph:true});
strip('`/plan` · subagents · hooks · `/compact` · `/resume` · `/fork`');
text("The loop's decisions:",48,112,864,30,24,{bold:true,end:1});list(['When to stop.','What carries between turns.','When to compact.','When to spawn a subagent, and what to hand it.','Where a hook fires.'],48,162,864,24,{step:50,end:1});
text('"A decent model with a great harness\nbeats a great model\nwith a bad harness."',48,146,864,166,44,{start:1,end:2});attr('Addy Osmani, April 2026',48,324,864,{start:1,end:2});
text('Same model, better loop: 13% to 38% on ARC-AGI-3,\nwith six times fewer output tokens.',48,382,864,72,24,{start:1,end:2});
text('**Over-ambition:** try to one-shot the whole app.\n\n**Premature completion:** see progress, declare the job done.',48,142,864,154,24,{start:2,end:3});
text('The fix: an initializer, a feature list, a progress file,\none feature per session, and tests are never edited to pass.',48,337,864,80,24,{start:2,end:3});
text('Lead plus subagents: **90% better** on a research eval.\n\n**Fifteen times the tokens** of a chat.\n\nPoor fit when agents need shared context.',48,155,864,282,32,{start:3});
await newSlide('15',{area:'Orchestration',map:'orchestration',color:C.pink,title:'Start with the workflow. Own the loop.'});
twoTable(['Workflows','Agents'],[['LLMs and tools on predefined code paths.','LLMs that direct their own process.']],144,[40,68],{color:C.pink,start:1,end:2});
pills(['Chaining','Routing','Parallelization','Orchestrator and workers','Evaluator and optimizer'],48,278,864,{start:1,end:2});
text('The loop · Stopping conditions · State and resume · Retries\nEscalation as a tool call · Planner-to-worker routing\nThe compaction trigger · Budgets: tokens, actions, latency',48,145,864,94,20,{start:2});
text('Own your prompts. Own your context window.\nOwn your control flow. Contact humans with tool calls.',48,262,864,60,20,{start:2});attr('12-Factor Agents, Dex Horthy',48,330,864,{start:2});
text('A human is waiting. Latency is a product requirement.\n**An unbounded loop is an outage.**',48,362,864,68,24,{start:3});
band(pitfalls[3],C.pink,{start:4,h:96,sentenceY:452,sentenceH:28});
text('Gartner, June 2025: over 40% canceled by end of 2027, "due to escalating\ncosts, unclear business value or inadequate risk controls."',196,486,716,42,16,{start:4,color:C.secondary});
// Evals.
await newSlide('16',{area:'Verification and evals',header:true,color:C.green});
['write','run','read the failure','retry'].forEach((v,i)=>text(v,48+i*222,185,198,32,20,{align:'center'}));[0,1,2].forEach(i=>arrow(215+i*222,229,61,0));
text('"LLMs are quite happy to say\n\'all tests green\', yet when I run them,\nthere are failures."',48,282,864,160,44);attr('Martin Fowler, August 2025',48,454,864);
await newSlide('16b',{area:'Verification and evals',beat:'What you touched',map:'evals',color:C.green,morph:true,note:'Hold on the final build for story #2. The presenter story remains a slot in the source.'});
strip('write → run → read the failure → retry');
twoTable(['Verification','Evaluation'],[['Is this one output or action correct?','Is the behavior correct across\na population of runs?'],['Inside the loop.','Outside the loop.'],['Lint. Screenshot.\nA judge for fuzzy rules.','Task. Trial. Grader. Suite.']],132,[42,82,53,80],{color:C.green,end:1});
text('Graders: code (fast, brittle) · model\n(flexible, needs calibration) · human\n(gold standard, slow)',492,402,420,80,20,{end:1});
text('Grade the outcome,\nnot the transcript.',48,178,864,112,44,{start:1,end:2,bold:true});
text('"Your flight has been booked" is a sentence.\nA reservation row is an outcome.',48,334,864,80,24,{start:1,end:2});
text('pass@k',48,179,240,56,44,{font:'Consolas',color:C.blue,start:2,end:3});text('at least one of k trials succeeds.',320,189,592,50,24,{start:2,end:3});
text('pass^k',48,281,240,56,44,{font:'Consolas',color:C.blue,start:2,end:3});text('all k trials succeed.',320,291,592,50,24,{start:2,end:3});text('Identical at k = 1. Opposite stories at k = 10.',48,407,864,35,24,{start:2,end:3});
list(['Start with **20 to 50 tasks** drawn from real failures.','Error analysis is **60 to 80%** of the time.','A **0% pass rate** with a frontier model\nis usually a broken task.'],48,158,864,32,{start:3,step:100,lineH:90});
await newSlide('17',{area:'Verification and evals',map:'evals',color:C.green,title:'Verify one. Evaluate many.\nKeep evaluating.'});
text('Your domain has no test suite.',48,199,864,46,32,{start:1,end:2,bold:true});text('"Was this refund decision correct?"\n"Was this summary faithful?"',48,297,864,90,24,{start:1,end:2});
[['Build the verifier.','Schema check · business rule · database state · rubric-driven second model · human'],['Build the eval suite.','A population of runs, not one run.'],['Keep running it.','On sampled production traffic. The offline suite is a frozen snapshot; your users are not.']].forEach(([head,body],i)=>{
 card(48+i*296,169,272,220,'','',{start:2});text(String(i+1),64+i*296,181,64,57,44,{font:'Consolas',color:C.secondary,start:2});text(head,64+i*296,245,240,63,24,{bold:true,start:2});text(body,64+i*296,307,240,71,16,{color:C.secondary,start:2});
 });
text('A new model ships. The suite says yes or no\nin a day, not a quarter.',48,393,864,64,24,{start:3});band(pitfalls[4],C.green,{start:4});
// Operating it.
await newSlide('18',{area:'Operating it',header:true,color:C.amber});
pills(['`/usage`','the OpenTelemetry exporter','the sandbox','the OAuth login'],48,196,864);text('And a trust and safety team you have never met.',48,302,864,80,32);
await newSlide('18b',{area:'Operating it',beat:'What you touched',map:'operating',color:C.amber,morph:true});
strip('`/usage` · the OpenTelemetry exporter · the sandbox · the OAuth login');
const ops=[['Observability','cost per completed task · p95 and p99 tokens · cache hit rate\nloop iterations per task · tool failure rate',100,0],['Guardrails','input classification · provenance tags · sandboxed execution\noutput validation · circuit breakers · approval gates · least privilege',164,1],['Identity',"the agent's own identity, plus short-lived delegated authority\nfrom the user. No token passthrough. No omnibus scopes.",228,3],['Governance','audit trails and approvals. Since August 2, 2026, Article 50:\nif it interacts with people, tell them it is an AI.',292,4]];
for(const [head,body,y,b]of ops){text(head,48,y+4,140,28,20,{bold:true,color:C.amber,start:b,end:5});text(body,196,y,716,56,20,{start:b,end:5});}
text('Security',48,360,140,28,20,{bold:true,color:C.amber,start:2,end:5});
line(266,382,102,68,{start:2,end:5});line(368,450,-203,0,{start:2,end:5});line(165,450,101,-68,{start:2,end:5});
text('Private data',210,355,132,20,16,{start:2,end:5});text('Untrusted content',104,456,170,20,16,{start:2,end:5});text('External communication',292,456,190,20,16,{start:2,end:5});
text('Any two is safe; all three\nis an exfiltration path.',492,376,420,58,20,{start:2,end:5});attr('Simon Willison, June 2025',492,444,420,{start:2,end:5});
list(['**EchoLeak, June 2025.** CVE-2025-32711. One email.\nData from OneDrive, SharePoint, and Teams left\nthrough a trusted domain.','**Replit, July 2025.** An agent deleted a production\ndatabase during a code freeze.','**Moffatt v. Air Canada, February 2024.**\n"The chatbot is a separate legal entity."\nThe tribunal disagreed.'],48,129,864,24,{start:5,step:117,lineH:112});
await newSlide('19',{area:'Operating it',map:'operating',color:C.amber,title:'There is no prompt to click.'});
twoTable(['In the coding agent','In your deployment'],[['The approval prompt','An async workflow, or a policy'],['The sandbox','Your infrastructure'],['The audit log','A compliance artifact'],["A vendor's disclosure",'Article 50: you tell them it is an AI']],146,[44,55,55,55,65],{color:C.amber});
band(pitfalls[5],C.amber,{start:1,h:96,sentenceY:457,sentenceW:406,sentenceH:76});
line(776,466,74,27,{start:1});line(850,493,-167,0,{start:1});line(683,493,93,-27,{start:1});
text('a retriever',748,444,145,20,16,{start:1});text('a web fetch tool',626,500,150,20,16,{start:1});text('an email sender',790,500,152,20,16,{start:1});
await newSlide('19b',{note:'Source slide 19, build 3. Hard cut to the section wrap at 0:50.'});await img('internal/renders/map-yours.png',0,0,960,540,{alt:'Anatomy of an Agentic AI System, with yours badges'});
// Section 3.
await newSlide('20',{area:'The transition',beat:'What transfers',map:'all',color:C.green,title:'What transfers'});
twoTable(['You already do this','It becomes this'],[['Decomposition and systems thinking','Harness design'],['Interface design','Tool design'],['Testing discipline','Eval discipline'],['Observability','The same, with a new schema'],['Security and least privilege','Least privilege for tools'],['Operations: cost, latency,\nincidents, rollback','The same, in tokens']],129,[42,38,38,38,38,38,57],{color:C.green,rightColors:[C.pink,C.pink,C.green,C.green,C.green,C.green],end:1});
text('Engineers at incident.io, Sentry, Elsevier, and others crossed over in months, not years.\nOne twenty-five-year veteran: about two months.',48,175,864,96,24,{start:1});
text('"For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier."',48,313,864,95,24,{start:1});attr('Matt Morgis, Elsevier, via The Pragmatic Engineer, March 2025',48,426,864,{start:1});
await newSlide('21',{area:'The transition',beat:'What is new',map:'all',color:C.green,title:'What is new'});
[['Prompt engineering','2023',350],['Context engineering','2025',280],['Harness engineering','2026',210]].forEach(([a,b,y],i)=>{text(a,48+i*296,y-38,272,30,20);line(48+i*296,y,272,0);text(b,48+i*296,y+12,272,20,16,{color:C.secondary});});text('Each one absorbs the last.',48,442,864,32,24);
await newSlide('21b',{area:'The transition',beat:'What is new',map:'all',color:C.green,morph:true});strip('Prompt engineering (2023) · Context engineering (2025) · Harness engineering (2026)');
const competencies=['Model behavior intuition. Only from reading outputs.','Context engineering.','Tool design, for a caller that reads the description every time.','Harness and loop design.','Evals and error analysis. Sixty to eighty percent of the time.','AI security. The attack surface is the model\'s reasoning.','Cost and latency as design constraints.'];
competencies.forEach((v,i)=>{text(String(i+1),48,112+i*52,32,42,20,{font:'Consolas',color:C.secondary,end:1});text(v,88,112+i*52,824,45,20,{end:1,bold:i===4});});
text('"Getting comfortable with evaluations\nand iterating on non-deterministic\noutputs is the biggest challenge\nmost devs have."',48,147,864,212,44,{start:1});attr('Ross McNairn, Wordsmith, via The Pragmatic Engineer, March 2025',48,379,864,{start:1});
await newSlide('22',{area:'The transition',beat:'The pitfalls',color:C.green});
['Models','Context','Tools','Orchestration','Evals','Operating'].forEach((name,i)=>{const color=[C.blue,C.pink,C.pink,C.pink,C.green,C.amber][i];shape(0,96+i*64,960,56,C.surface);shape(0,96+i*64,320,56,color);text(name,48,108+i*64,256,32,20,{bold:true,color:i===0?C.text:C.bg,middle:true});text(pitfalls[i],344,99+i*64,568,50,20,{middle:true});});
await newSlide('23',{area:'The transition',beat:'The roadmap',map:'all',color:C.green,title:'The roadmap',note:'Sublines are spoken. The six-stage adoption arc uses the compact fallback.'});
['Look before you build.','Start constrained.','Own the harness.','Add autonomy as your evals earn it.'].forEach((v,i)=>{card(48,134+i*67,864,59,'');text(String(i+1),64,137+i*67,64,53,44,{font:'Consolas',color:C.secondary});text(v,136,144+i*67,756,42,32,{bold:true});});
text('chat · reproduce manual work · background agents\ndelegate what you trust · build verification tools · continuous operation',48,407,864,60,20,{start:1});attr('Mitchell Hashimoto, "My AI Adoption Journey," February 2026',48,484,864,{start:1});
await newSlide('24');text('Resources',48,68,864,42,32,{bold:true});
const resources=[['Chip Huyen, AI Engineering: Building Applications with Foundation Models.','O\'Reilly, 2025.'],['Anthropic engineering: "Building effective agents" (December 2024).','"Effective context engineering for AI agents" (September 2025).','"Demystifying evals for AI agents" (January 2026).'],['OpenAI, "A practical guide to building agents" (2025).'],['Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev.','Shreya Shankar and Hamel Husain, Evals for AI Engineers.','O\'Reilly, October 2026.'],['OWASP Top 10 for LLM Applications (2025)','and for Agentic Applications (2026).'],['OpenTelemetry GenAI semantic conventions.']];
let ry=132;for(const lines of resources){for(const lineText of lines){text(lineText,48,ry,864,25,20);ry+=25;}ry+=12;}
await newSlide('25');thesis(true);

// Keep the authoring model and build map for every revealed state.
await fs.writeFile(path.join(BUILD,'build-map.json'),JSON.stringify(meta,null,2));
await fs.writeFile(path.join(BUILD,'model.json'),JSON.stringify(deck.toProto()));
await (await PresentationFile.exportPptx(deck)).save(path.join(BUILD,'authored.pptx'));
console.log(`Created ${meta.length} PowerPoint slides from ${sourceFiles.length} source files.`);
