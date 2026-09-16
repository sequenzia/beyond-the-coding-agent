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
 if(area){text([[run(area,color,true),run(beat?` · ${beat}`:'',C.secondary)]],48,36,map?716:864,25,20,{name:'!!area-name'});if(map)await img(`internal/renders/mini-${map}.png`,752,36,160,90,{name:'mini-map',alt:`Anatomy mini-map: ${map}`});}
 if(title)text(title,48,68,map?692:864,variant==='resources'?42:76,32,{bold:true,name:'slide-title'});
 shape(48,layout.divider,864,1,C.hair,'none',0,{name:'header-divider'});
}
function sectionDivider(number,title){
 text(`Section ${number}`,48,168,864,25,20,{color:C.secondary,name:'section-label'});
 shape(48,208,864,1,C.hair,'none',0,{name:'section-rule'});
 text(title,48,232,864,140,60,{bold:true,name:'section-title'});
}
async function newSlide(key,{area,beat='',map,title,header=false,variant,color,morph=false,note=''}={}){
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
text('The map and six areas',492,137,420,34,24);
text('25:00 to 29:00',492,177,420,30,20,{color:C.secondary});
text([[run('Models',C.blue),run(' · ',C.secondary),run('Context and knowledge',C.pink)],[run('Tools',C.pink),run(' · ',C.secondary),run('Orchestration',C.pink)],[run('Verification and evals',C.green)],[run('Production operations',C.amber)]],512,224,400,100,16);
text('Making the transition',492,350,420,34,24);
text('Your questions',492,412,420,34,24);
text('Quote · What and why · Decisions · Pitfalls · FRB example',48,472,864,20,16,{color:C.secondary});
await newSlide('06');sectionDivider(2,'What AI engineers\nactually engineer');
// The anatomy map uses the supplied renders, including every highlight state.
await newSlide('07');await img('internal/renders/map-full.png',0,0,960,540,{end:1});
for(let k=1;k<=4;k++)await img(`internal/renders/map-${['model','harness','per-run','across-runs'][k-1]}.png`,0,0,960,540,{start:k,end:k+1,duration:300});
await img('internal/renders/map-full.png',0,0,960,540,{start:5,duration:300});
// Section 2: reviewed quote-first content, one narrative identity per composition.
// Visible copy is authored here and matched to the numbered Markdown specs.
const section2Areas = [
  {
    "area": "Models",
    "start": 8,
    "image": "models-in-system.png",
    "quote": "A decent model with a great harness beats a great model with a bad harness.",
    "author": "Addy Osmani",
    "publication": "Agent Harness Engineering, April 2026",
    "titles": [
      "Models, opening quote",
      "Models in the system",
      "Model selection",
      "Model-selection pitfalls",
      "Models for the FRB brief"
    ],
    "overview": [
      "Interprets the task and context.\nProduces a response or proposed action.",
      "Eligible for the data.\nCapable on the task.\nWithin cost and latency requirements."
    ],
    "decisions": [
      [
        "Data and deployment",
        "Approved service, environment, and intended use."
      ],
      [
        "Task fit and settings",
        "Compare quality, cost, and latency on your tasks."
      ],
      [
        "One model or routing?",
        "Begin with one. Add routes when measurements justify them."
      ],
      [
        "Version changes",
        "Pinned: plan migration. Alias: monitor regressions."
      ]
    ],
    "pitfall": "Choosing and changing models without testing them on your task.",
    "cues": [
      [
        "Access",
        "Availability does not establish approval."
      ],
      [
        "Coverage",
        "Task changes can leave gaps."
      ],
      [
        "Dependencies",
        "A pinned model does not freeze the system."
      ]
    ],
    "quoteWrapped": "“A decent model with a\ngreat harness beats a\ngreat model with a\nbad harness.”",
    "colorKey": "blue",
    "map": "models"
  },
  {
    "area": "Context and knowledge",
    "start": 13,
    "image": "context-selection.png",
    "quote": "Context, therefore, must be treated as a finite resource with diminishing marginal returns.",
    "author": "Anthropic",
    "publication": "Effective context engineering for AI agents, September 2025",
    "titles": [
      "Context and knowledge, opening quote",
      "Context for the next step",
      "Context decisions",
      "Context pitfalls",
      "Evidence for the FRB brief"
    ],
    "overview": [
      "Select and maintain information for the next model step.\nRAG supplies retrieved knowledge.",
      "Relevant evidence.\nPreserved constraints.\nCurrent, traceable sources."
    ],
    "decisions": [
      [
        "What enters the step?",
        "Useful instructions, state, and evidence. Remove repetition."
      ],
      [
        "How is it retrieved?",
        "Keyword, semantic, or hybrid. Choose for the data and task."
      ],
      [
        "What persists?",
        "Keep essential constraints. Refresh summaries and memory."
      ],
      [
        "Which sources and scope?",
        "Preserve identity and revision. Enforce authorized access."
      ]
    ],
    "pitfall": "adding instead of curating.",
    "cues": [
      [
        "Coverage",
        "Decisive evidence can be missing."
      ],
      [
        "Summaries",
        "Qualifications can disappear."
      ],
      [
        "Sources",
        "Versions and identities must remain traceable."
      ]
    ],
    "quoteWrapped": "“Context, therefore, must be\ntreated as a finite resource\nwith diminishing marginal\nreturns.”",
    "colorKey": "pink",
    "map": "context"
  },
  {
    "area": "Tools and extensibility",
    "start": 18,
    "image": "tools-interface.png",
    "quote": "Agents are only as effective as the tools we give them.",
    "author": "Anthropic",
    "publication": "Writing effective tools for agents, with agents, September 2025",
    "titles": [
      "Tools and extensibility, opening quote",
      "Tools and connections",
      "Tool-design decisions",
      "Tool-design pitfalls",
      "Export cited brief"
    ],
    "overview": [
      "Tool: an operation with defined inputs, results, and execution rules.\nMCP: a common integration interface.",
      "Useful capabilities.\nClear results.\nEnforced boundaries."
    ],
    "decisions": [
      [
        "Capabilities and granularity",
        "Distinct operations that fit the task. Evaluate flexibility against coordination work."
      ],
      [
        "A usable contract",
        "Descriptions, inputs, results, and errors must agree."
      ],
      [
        "Permitted execution",
        "Validate and authorize in code. Scope reads and writes."
      ]
    ],
    "pitfall": "copying the API surface without evaluating task fit.",
    "cues": [
      [
        "Tool set",
        "Overlapping purposes confuse selection."
      ],
      [
        "Contract",
        "Description, schema, and behavior can drift."
      ],
      [
        "Outcomes",
        "Success, failure, and uncertainty need distinct results."
      ]
    ],
    "quoteWrapped": "“Agents are only as effective\nas the tools we give them.”",
    "colorKey": "pink",
    "map": "tools"
  },
  {
    "area": "Orchestration",
    "start": 23,
    "image": "orchestration-path.png",
    "quote": "we recommend finding the simplest solution possible, and only increasing complexity when needed.",
    "author": "Anthropic",
    "publication": "Building effective agents, December 2024",
    "titles": [
      "Orchestration, opening quote",
      "Execution control",
      "Orchestration decisions",
      "Execution pitfalls",
      "Workflow for the FRB brief"
    ],
    "overview": [
      "Sequence work, carry state, coordinate, stop, and recover.",
      "Reach checked outcomes\nwithin enforced limits.\nCombine code-controlled paths and model judgment."
    ],
    "decisions": [
      [
        "Who chooses the next step?",
        "Code for required gates. Model judgment where adaptation helps."
      ],
      [
        "When should work be delegated?",
        "Begin with a bounded workflow. Add workers after measured benefit."
      ],
      [
        "How does work stop or recover?",
        "Completion checks, saved state, bounded retries, and handoff."
      ]
    ],
    "pitfall": "multi-agent before a workflow was tried.",
    "cues": [
      [
        "Gates",
        "A proposed plan does not enforce prerequisites."
      ],
      [
        "Progress",
        "Repeated work can exhaust the budget."
      ],
      [
        "Recovery",
        "A timeout does not establish failure."
      ]
    ],
    "quoteWrapped": "“we recommend finding the\nsimplest solution possible,\nand only increasing\ncomplexity when needed.”",
    "colorKey": "pink",
    "map": "orchestration"
  },
  {
    "area": "Verification and evals",
    "start": 28,
    "image": "evals-inspection.png",
    "quote": "Error analysis is the most important activity in evals.",
    "author": "Hamel Husain and Shreya Shankar",
    "publication": "AI Evals: Everything You Need to Know, September 2026",
    "titles": [
      "Verification and evals, opening quote",
      "Verification and evaluation",
      "Evaluation decisions",
      "Evaluation pitfalls",
      "Does the source support the claim?"
    ],
    "overview": [
      "Verification: acceptance of this result.\nEvaluation: behavior across cases and repeated trials.",
      "Ordinary tests remain necessary.\nCheck outcomes, required constraints, and consistency."
    ],
    "decisions": [
      [
        "What counts as success?",
        "Outcomes, serious failures, and useful limitations."
      ],
      [
        "Which checks fit?",
        "Code checks, model graders, expert review. Evaluate grader agreement."
      ],
      [
        "Which cases and trials?",
        "Representative work, known failures, and repeated attempts."
      ]
    ],
    "pitfall": "a generic judge instead of error analysis. Trusting the success claim without checking the result.",
    "cues": [
      [
        "Outcome",
        "Inspect the actual result."
      ],
      [
        "Grader",
        "Review disagreement with expert judgment."
      ],
      [
        "Coverage",
        "Add failures and recheck after changes."
      ]
    ],
    "quoteWrapped": "“Error analysis is the most\nimportant activity in evals.”",
    "colorKey": "green",
    "map": "evals"
  },
  {
    "area": "Production operations",
    "start": 33,
    "image": "operating-observability.png",
    "quote": "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe.",
    "author": "Guillermo Rauch",
    "publication": "State of AI Engineering, Datadog, 2026",
    "titles": [
      "Production operations, opening quote",
      "Production operations",
      "Production decisions",
      "Risks across integrations",
      "FRB operating agreement"
    ],
    "overview": [
      "Keep the deployed system observable, controlled, and accountable.",
      "Behavior, access, cost, and latency change over time.\nFailures need an accountable response."
    ],
    "decisions": [
      [
        "Authority",
        "Enforce identity, scope, and permitted destinations."
      ],
      [
        "Observation",
        "Connect evidence to outcomes, quality, cost, and latency."
      ],
      [
        "Limits and handoff",
        "Set the policy and assign the authorized responder."
      ],
      [
        "Changes and incidents",
        "Review changes. Keep a way to restrict or revert configuration."
      ]
    ],
    "pitfall": "the lethal trifecta, assembled one integration at a time.",
    "cues": [
      [
        "Private data",
        "Information the system can access."
      ],
      [
        "Untrusted content",
        "Instructions can arrive inside documents."
      ],
      [
        "External communication",
        "Outbound actions can carry information."
      ]
    ],
    "quoteWrapped": "“The next wave of agent\nfailures won't be about\nwhat agents can't do.\nIt'll be about what teams\ncan't observe.”",
    "colorKey": "amber",
    "map": "operating"
  }
];

for (let areaIndex=0;areaIndex<section2Areas.length;areaIndex++) {
 const a=section2Areas[areaIndex],color=C[a.colorKey],key=n=>String(n).padStart(2,'0');
 const header=(n,beat,title)=>newSlide(key(n),{area:a.area,beat,map:a.map,color,...(title?{title}:{})});

 await header(a.start,'Perspective');
 if(areaIndex===5){
  text(a.quoteWrapped,48,192,568,268,44);
  await img('internal/illustrations/'+a.image,664,192,224,224);
  text(a.author,640,420,272,28,20);
  text('State of AI Engineering,\nDatadog, 2026',640,452,272,40,16,{color:C.secondary,exact:20});
 }else{
  const short=areaIndex===2||areaIndex===4;
  text(a.quoteWrapped,48,short?216:192,568,short?164:216,44);
  text(a.author,48,428,568,28,20);
  attr(a.publication,48,462,568);
  await img('internal/illustrations/'+a.image,640,212,272,272);
 }

 await header(a.start+1,'What and why',a.titles[1]);
 text('What it is',48,192,420,30,20,{bold:true,color});
 text(a.overview[0],48,234,420,200,24);
 text('Why it matters',492,192,420,30,20,{bold:true,color});
 text(a.overview[1],492,234,420,200,24);

 await header(a.start+2,'Decisions',a.titles[2]);
 const four=a.decisions.length===4;
 a.decisions.forEach(([question,body],i)=>{
  text(question,48,192+i*(four?72:100),272,four?62:82,four?20:24,{bold:true});
  text(body,344,192+i*(four?72:100),568,four?62:82,20);
 });

 await header(a.start+3,'Challenges and pitfalls',a.titles[3]);
 a.cues.forEach(([label,body],i)=>{
  text(label,48,192+i*62,216,areaIndex===5&&i===2?54:30,20,{bold:true,color});
  text(body,292,192+i*62,620,54,20);
 });
 if(areaIndex===4)text('Inspect the result and the trace before choosing a repair.',48,386,864,30,20);
 if(areaIndex===5)text('A probabilistic filter is insufficient as the sole security boundary.',48,386,864,30,20);
 text('Pitfall',48,426,124,30,20,{bold:true,color});
 const pit=a.pitfall.replace('. Trusting','.\nTrusting');
 text(pit,196,426,716,64,24,{bold:true});

 await header(a.start+4,'FRB application',a.titles[4]);
 if(areaIndex===0){
  attr('Illustrative proposed design. No model results claimed.',48,192,864);
  evidenceTable([
   ['Choice','Starting design'],
   ['Constraint','CUI/ECI corpus. Approved options assumed older\nand less capable for this synthesis.'],
   ['Configuration','Evaluate one eligible configuration on the FRB task.'],
   ['If quality falls short','Evaluate narrower scope and human review.\nKeep the evidence requirement.'],
  ],[224,640],228,[36,76,64,76],{color});
 }else if(areaIndex===1){
  attr('Illustrative FRB evidence.',48,192,864);
  text('FRB-042-BRF r1 · August 19, 2026\nslide 6',48,224,420,40,16,{color:C.secondary,exact:20});
  text('“Bearing wear is a\npossible cause.”',48,262,420,60,24);
  text('FRB-042-MIN r2 · August 22, 2026\n§3, paragraph 2',48,344,420,40,16,{color:C.secondary,exact:20});
  text('“Cause remains unresolved.\nInspect the bearing before\nassigning a cause.”',48,400,420,90,24);
  [['Select','Relevant passages with\ntheir source identities.'],['Retain','Unresolved cause.\nInspection required.'],['Refresh','Source versions and access\nbefore finalizing.']].forEach(([label,body],i)=>{
   text(label,492,224+i*92,420,26,20,{bold:true,color});text(body,492,254+i*92,420,54,20);
  });
 }else if(areaIndex===2){
  attr('Illustrative Export cited brief contract.',48,192,864);
  evidenceTable([
   ['Contract','Requirement'],
   ['Input','Checked draft, citations, destination.'],
   ['Checks','Exact draft passed verification.\nAccess and destination permitted.'],
   ['Output','Matching content and citations, with uncertainty preserved.\nExport receipt.'],
   ['Failure','Known failure or unknown outcome stays explicit.'],
  ],[224,640],228,[36,44,64,64,56],{color});
 }else if(areaIndex===3){
  attr('Illustrative bounded workflow.',48,192,864);
  ['Retrieve the packet.','Inspect evidence.','Compare cases.','Reconcile findings.','Verify the brief.','Export.'].forEach((v,i)=>{
   const x=i%2===0?48:492,y=224+Math.floor(i/2)*56;
   text(String(i+1),x,y,32,40,24,{color:C.secondary});text(v,x+48,y,372,40,24);
  });
  text('Export only after checks pass on the exact draft.',48,392,864,30,20,{bold:true});
  text('Inspect an unknown export outcome\nbefore deciding whether to retry.',48,434,864,54,20);
 }else if(areaIndex===4){
  attr('Illustrative source-support check.',48,192,864);
  text('FRB-042-MIN r2 · §3, paragraph 2',48,224,420,24,16,{color:C.secondary});
  text('“Cause remains unresolved.\nInspect the bearing before\nassigning a cause.”',48,256,420,96,24);
  text('Answer citing these minutes',492,224,420,30,20,{bold:true,color});
  text('“The board confirmed\nbearing wear.”',492,256,420,64,24);
  text('Citation exists: PASS',48,386,420,30,20);
  text('Claim supported: FAIL',48,424,420,30,20,{bold:true});
  text('Expected',492,350,420,30,20,{bold:true,color});
  text('Cause unresolved.\nInspection required.',492,384,420,64,24);
  text('Keep this failure as a regression case.',48,460,864,30,20);
 }else{
  attr('Illustrative proposed operating agreement.',48,192,864);
  evidenceTable([
   ['Responsibility','FRB rule'],
   ['Approved scope','Records, services, destinations, traces, and eval artifacts.'],
   ['Evidence and signals','Revisions, checks, export state.\nQuality, freshness, cost, latency.'],
   ['Response','Enforced limits. An assigned, authorized responder.'],
   ['Accountability','Review changes. People own official findings and records.'],
  ],[224,640],228,[36,52,52,52,52],{color});
 }
}
await newSlide('38');await img('internal/renders/map-yours.png',0,0,960,540,{alt:'Anatomy of an Agentic AI System, with responsibility badges'});

await newSlide('39');sectionDivider(3,'Making the transition');
await newSlide('40',{area:'The transition',beat:'What transfers',map:'all',color:C.green,title:'What transfers'});
twoTable(['You already do this','It becomes this'],[['Decomposition and systems thinking','Harness design'],['Interface design','Tool design'],['Testing discipline','Eval discipline'],['Observability','The same, with a new schema'],['Security and least privilege','Least privilege for tools'],['Operations: cost, latency,\nincidents, rollback','The same, in tokens']],192,[36,36,36,36,36,36,56],{color:C.green,rightColors:[C.pink,C.pink,C.green,C.green,C.green,C.green],end:1});
text('Engineers at incident.io, Sentry, Elsevier, and others crossed over in months, not years.\nOne twenty-five-year veteran: about two months.',48,192,864,96,24,{start:1});
text('"For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier."',48,328,864,95,24,{start:1});attr('Matt Morgis, Elsevier, via The Pragmatic Engineer, March 2025',48,446,864,{start:1});
await newSlide('41',{area:'The transition',beat:'What is new',map:'all',color:C.green,title:'What is new'});
[['Prompt engineering','2023',370],['Context engineering','2025',300],['Harness engineering','2026',230]].forEach(([a,b,y],i)=>{text(a,48+i*296,y-38,272,30,20);line(48+i*296,y,272,0);text(b,48+i*296,y+12,272,20,16,{color:C.secondary});});text('Each one absorbs the last.',48,442,864,32,24);
await newSlide('41b',{area:'The transition',beat:'What is new',map:'all',color:C.green,morph:true});strip('Prompt engineering (2023) · Context engineering (2025) · Harness engineering (2026)');
const competencies=['Model behavior intuition. Informed by reading outputs.','Context engineering.','Tool design, for a caller that reads the description every time.','Harness and loop design.','Evals and error analysis.','AI security. The attack surface is the model\'s reasoning.','Cost and latency as design constraints.'];
competencies.forEach((v,i)=>text(v,48,192+i*42,864,30,20,{end:1}));
text('"Getting comfortable with evaluations\nand iterating on non-deterministic\noutputs is the biggest challenge\nmost devs have."',48,192,864,212,44,{start:1});attr('Ross McNairn, Wordsmith, via The Pragmatic Engineer, March 2025',48,428,864,{start:1});
await newSlide('42',{area:'The transition',beat:'The pitfalls',variant:'compact',color:C.green});
['Models','Context','Tools','Orchestration','Evals','Production operations'].forEach((name,i)=>{const color=[C.blue,C.pink,C.pink,C.pink,C.green,C.amber][i],y=[100,163,226,289,352,435][i],h=i===4?76:56;shape(0,y,960,h,C.surface);shape(0,y,272,h,color);text(name,48,y+(h-32)/2,i===5?224:208,32,20,{bold:true,color:i===0?C.text:C.bg,middle:true});text(pitfalls[i],296,y+3,616,h-6,20,{middle:true});});
await newSlide('43',{area:'The transition',beat:'The roadmap',map:'all',color:C.green,title:'The roadmap',note:'Sublines are spoken. The first assignment replaces the four roadmap rows; hold for the protected story slot.'});
['Look before you build.','Start constrained.','Own the harness.','Add autonomy as your evals earn it.'].forEach((v,i)=>{card(48,192+i*67,864,59,'','',{end:1});text(String(i+1),64,195+i*67,64,53,44,{color:C.secondary,end:1});text(v,136,202+i*67,756,42,32,{bold:true,end:1});});
text('Review 20 to 50 outputs.',48,192,864,45,32,{start:1,bold:true});
text('Record the input, observed behavior,\nexpected behavior, and check.',48,256,864,60,24,{start:1});
attr('Illustrative FRB callback. Use your own system’s outputs.',48,342,864,{start:1});
evidenceTable([
 ['Input','Observed','Expected','Check'],
 ['FRB-042\nsummary','Bearing wear\nconfirmed','Cause remains\nunresolved','Does the source\nsupport the claim?'],
],[216,216,216,216],374,[32,76],{color:C.green,start:1});
await newSlide('44',{title:'Resources',variant:'resources'});
const resources=[['Chip Huyen, AI Engineering: Building Applications with Foundation Models.','O\'Reilly, 2025.'],['Anthropic engineering: "Building effective agents" (December 2024).','"Effective context engineering for AI agents" (September 2025).','"Demystifying evals for AI agents" (January 2026).'],['OpenAI, "A practical guide to building agents" (2025).'],['Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev.','Shreya Shankar and Hamel Husain, Evals for AI Engineers.','O\'Reilly, October 2026.'],['OWASP Top 10 for LLM Applications (2025)','and for Agentic Applications (2026).'],['OpenTelemetry GenAI semantic conventions.']];
let ry=146;for(const lines of resources){for(const lineText of lines){text(lineText,48,ry,864,25,20);ry+=25;}ry+=8;}
await newSlide('45');thesis(true);

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
