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
const C={bg:'#14161c',text:'#fffcf5',secondary:'#adaca9',surface:'#303236',hair:'#4c4d50',pink:'#f948be',blue:'#1064f8',green:'#01b66d',transition:'#fe7026',amber:'#fdad00',blueTint:'#13223f',pinkTint:'#2b1b2c'};
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
 const h=rowHeights.reduce((a,b)=>a+b,0);const obj=slide.tables.add({rows:vals.length,columns:3,left:48*P,top:y*P,width:864*P,height:h*P,columnWidths:(opts.columnWidths||[420,24,420]).map(w=>w*P),values:vals});
 obj.styleOptions={headerRow:false,bandedRows:false,bandedColumns:false,firstColumn:false,lastColumn:false};
 obj.cells.block({row:0,column:0,rowCount:vals.length,columnCount:3}).assign({fill:C.bg,textStyle:{typeface:'Helvetica',fontSize:20*P,color:C.text},margins:{left:0,right:0,top:0,bottom:0},anchor:'top'});
 for(let r=0;r<vals.length;r++){obj.rows[r].height=rowHeights[r]*P;for(const c of [0,2]){obj.getCell(r,c).text.style={typeface:'Helvetica',fontSize:(r===0?24:(opts.bodySize??20))*P,color:r===0?(opts.color||C.pink):(c===2&&opts.rightColors?opts.rightColors[r-1]:C.text),bold:r===0||!!(c===2&&opts.rightColors),autoFit:'none',lineSpacing:1.25};}}
 addMeta(obj,'table',opts);return obj;
}
function evidenceTable(values,widths,y,heights,opts={}){
 const obj=slide.tables.add({rows:values.length,columns:widths.length,left:(opts.x??48)*P,top:y*P,width:widths.reduce((a,b)=>a+b,0)*P,height:heights.reduce((a,b)=>a+b,0)*P,columnWidths:widths.map(w=>w*P),values});
 obj.styleOptions={headerRow:false,bandedRows:false,bandedColumns:false,firstColumn:false,lastColumn:false};
 obj.cells.block({row:0,column:0,rowCount:values.length,columnCount:widths.length}).assign({fill:C.bg,textStyle:{typeface:'Helvetica',fontSize:20*P,color:C.text},margins:{left:0,right:0,top:0,bottom:0},anchor:'top'});
 for(let r=0;r<values.length;r++){obj.rows[r].height=heights[r]*P;for(let c=0;c<widths.length;c++)obj.getCell(r,c).text.style={typeface:'Helvetica',fontSize:20*P,color:r===0?(opts.color||C.pink):C.text,bold:r===0,autoFit:'none',lineSpacing:1.25};}
 addMeta(obj,'table',opts);return obj;
}
function strip(str,opts={}){text(str,48,68,692,24,16,{...opts,color:C.secondary,exact:20});}
function thesis(question=false){text('Using AI makes you\nan AI-enabled software engineer.',48,136,864,104,44,{align:'center'});text('Engineering systems that depend on AI\nmakes you an AI engineer.',48,286,864,104,44,{align:'center',bold:true});if(question)text('Questions',48,438,864,40,32,{align:'center',start:1});}

// Canonical display names. Technical asset and map identifiers remain stable.
const AREA_NAMES = Object.freeze([
 'Model Selection', 'Context Engineering', 'Tools & Extensibility',
 'Orchestration', 'Verification & Evals', 'AgentOps',
]);

// Section 1.
await newSlide('01');
text('Beyond the Coding Agent',48,185,864,58,44,{bold:true,align:'center'});
text('From Software Engineer to AI Engineer',48,258,864,48,32,{align:'center'});
text('Stephen Sequenzia · Senior Staff AI/ML Engineer and Architect',48,472,864,20,16,{color:C.secondary});
await newSlide('02');
await sharp(path.join(ROOT,'internal/profile-320.webp')).png().toFile(path.join(BUILD,'profile.png'));
await img(path.join(BUILD,'profile.png'),48,211,144,144,{geometry:'ellipse',alt:'Stephen Sequenzia'});
text('Stephen Sequenzia',344,75,568,42,32,{bold:true});text('Senior Staff AI/ML Engineer and Architect',344,125,568,60,24);
list(['Twenty years putting systems into production.\nThe last several with a model in the loop.','Leads architecture for agentic AI systems\nacross defense programs.','Has helped 500+ engineers adopt agents,\nand watched where using one stops\nand engineering one begins.'],344,205,568,24,{step:89,lineH:90});
await newSlide('03');
text('Agenda',48,36,864,40,32,{bold:true});
const agendaRows=[
 ['What changes when AI becomes part of the product',100],
 ['What AI engineers actually engineer',148],
 ['Making the transition',263],
 ['Questions and discussion',337],
];
agendaRows.forEach(([label,y],i)=>{text(String(i+1),48,y,28,32,24,{color:C.secondary});text(label,88,y,824,32,24);});
[
 [AREA_NAMES[0],88,186,250,C.blue],[AREA_NAMES[1],362,186,278,C.pink],[AREA_NAMES[2],664,186,248,C.pink],
 [AREA_NAMES[3],88,216,250,C.pink],[AREA_NAMES[4],362,216,278,C.green],[AREA_NAMES[5],664,216,248,C.amber],
].forEach(([label,x,y,w,color])=>text(label,x,y,w,25,20,{color}));
text('Skills that transfer, new competencies, and where to start',88,298,824,25,20,{color:C.secondary});
shape(48,389,864,1,C.hair);
text("You'll leave with",48,407,864,25,20,{bold:true,color:C.pink});
['A map of the engineering\nresponsibilities','An understanding of what\nproduction readiness requires','A starting point for\nyour own transition'].forEach((label,i)=>text(label,48+i*296,442,272,50,20));
await newSlide('04');sectionDivider(1,'What changes when AI\nbecomes part of the product');
await newSlide('05',{title:'Deterministic logic and model behavior'});
twoTable(['Deterministic logic','Model behavior'],[
 ['Explicit rules implemented\nin code','Learned behavior guided\nby instructions and context'],
 ['Same input and state produce\nthe same result','Same supplied input can produce\ndifferent results'],
],192,[64,104,104],{bodySize:24});
await newSlide('06',{title:'Reliability with a model in the loop'});
[
 ['Correctness','A valid response can still be wrong.'],
 ['Consistency','One successful run does not\nestablish reliability.'],
 ['Actions','Model choices can affect subsequent steps.'],
].forEach(([label,body],i)=>{
 text(label,48,192+i*100,272,82,24,{bold:true,color:C.pink});
 text(body,344,192+i*100,568,82,24);
});
await newSlide('07',{title:'Engineering the system around the model'});
[
 ['Build in determinism','Explicit logic and required\nworkflow steps.'],
 ['Enforce boundaries','Permissions and execution limits\noutside the model.'],
 ['Evaluate behavior','Outcomes across cases, repeated runs,\nand production use.'],
].forEach(([label,body],i)=>{
 text(label,48,192+i*100,272,82,24,{bold:true,color:C.pink});
 text(body,344,192+i*100,568,82,24);
});
await newSlide('08');sectionDivider(2,'What AI engineers\nactually engineer');
// The anatomy map uses the generated 8K renders and brighter descriptions from design brief §8.
await newSlide('09');await img('internal/renders/map-full.png',0,0,960,540,{end:1});
for(let k=1;k<=4;k++)await img(`internal/renders/map-${['model','harness','per-run','across-runs'][k-1]}.png`,0,0,960,540,{start:k,end:k+1,duration:300});
await img('internal/renders/map-full.png',0,0,960,540,{start:5,duration:300});
// Section orientation: the repeated teaching pattern and the reserved FRB example.
await newSlide('10',{area:'Section 2',beat:'Orientation',map:'all',color:C.secondary,title:"How we'll explore the six areas"});
text('In each area',48,192,420,30,20,{bold:true});
text('FRB',492,192,420,30,20,{bold:true});
[
 ['Opening perspective',234,30],
 ['Foundations:\nwhat it is and why it matters',274,55],
 ['Decisions and trade-offs',339,30],
 ['Challenges and pitfalls',379,30],
 ['FRB Agent',419,30],
].forEach(([label,y,h],i)=>{text(String(i+1),48,y,24,30,20,{color:C.secondary});text(label,84,y,384,h,20);});

// Section 2: reviewed quote-first content, one narrative identity per composition.
// Visible copy is authored here and matched to the numbered Markdown specs.
const section2Areas = [
  {
    "area": AREA_NAMES[0],
    "start": 11,
    "image": "models-in-system.png",
    "quote": "The ranking flips by workload, and no price list tells you which way.",
    "author": "Anthropic",
    "publication": "Optimizing for cost and intelligence, checked September 2026",
    "titles": [
      "Model Selection, opening quote",
      "The model invocation",
      "Selecting a model configuration",
      "Model-selection pitfalls",
      "Models for the FRB brief"
    ],
    "invocation": [
      ["Supplied input", "Instructions, request,\nevidence, tool definitions"],
      ["Inference", "Run a trained model\nwith selected settings"],
      ["Generated output", "Response or\nproposed tool call"]
    ],
    "foundations": [
      ["Tokens", "Units the model processes and generates. Used to track usage."],
      ["Context limit", "Capacity for supplied input and generated output."],
      ["Reasoning settings", "Effort controls, where supported. Evaluate their effect on the task."]
    ],
    "responsibility": "Choose a model version and settings suited to the task and approved for the data.",
    "decisions": [
      [
        "Eligible configurations",
        "Approval for the data and intended use.\nRequired capabilities and hard operating limits."
      ],
      [
        "Acceptable quality",
        "Results on representative tasks,\njudged against defined acceptance criteria."
      ],
      [
        "Time and total cost",
        "Completion time and cost per successful task,\nincluding failed attempts and review."
      ]
    ],
    "pitfall": "Selecting or changing models without testing them on your task.",
    "cues": [
      [
        "Context capacity",
        "The evidence fits. That does not establish answer quality."
      ],
      [
        "Reasoning effort",
        "A higher setting still needs a measured benefit on your task."
      ],
      [
        "Token price",
        "The price omits tool calls, retries, verification, and review."
      ]
    ],
    "quoteWrapped": "“The ranking flips by\nworkload, and no price list\ntells you which way.”",
    "colorKey": "blue",
    "map": "models"
  },
  {
    "area": AREA_NAMES[1],
    "start": 16,
    "image": "context-selection.png",
    "quote": "Context, therefore, must be treated as a finite resource with diminishing marginal returns.",
    "author": "Anthropic",
    "publication": "Effective context engineering for AI agents, September 2025",
    "titles": [
      "Context Engineering, opening quote",
      "Context for each model call",
      "Selecting and organizing context",
      "Context pitfalls",
      "Evidence for the FRB brief"
    ],
    "contextCategories": [
      ["Instructions", "Rules and\nconstraints"],
      ["Current request", "The task and\ndesired result"],
      ["Examples", "Demonstrations of\nexpected behavior"],
      ["Retrieved evidence", "Relevant files\nand passages"],
      ["History and\ntask state", "Prior messages\nand progress"],
      ["Selected memory", "Retained information\nbrought into this call"],
      ["Tool definitions", "Available operations\nand arguments"],
      ["Tool results", "Returned data\nand observations"]
    ],
    "contextChoices": [
      ["Select", "Preload essentials.\nRetrieve relevant evidence when needed."],
      ["Position", "Distinguish instructions from evidence.\nTest placement of key information."],
      ["Maintain", "Refresh stale information.\nCompact history while preserving constraints."],
      ["Delegate", "Give focused tasks separate contexts.\nReturn findings with sources."]
    ],
    "pitfall": "Adding context without curating it.",
    "cues": [
      [
        "Distraction",
        "Irrelevant content can steer the answer away from the task."
      ],
      [
        "Position",
        "Relevant evidence can be overlooked depending on placement."
      ],
      [
        "Context rot",
        "Reliability can decline as the input grows."
      ],
      [
        "Information loss",
        "Retrieval, summaries, and handoffs can omit critical details."
      ]
    ],
    "quoteWrapped": "“Context, therefore, must be\ntreated as a finite resource\nwith diminishing marginal\nreturns.”",
    "colorKey": "pink",
    "map": "context"
  },
  {
    "area": AREA_NAMES[2],
    "start": 21,
    "image": "tools-interface.png",
    "quote": "Agents are only as effective as the tools we give them.",
    "author": "Anthropic",
    "publication": "Writing effective tools for agents, with agents, September 2025",
    "titles": [
      "Tools & Extensibility, opening quote",
      "Tools and agent capabilities",
      "Choosing and exposing capabilities",
      "Tool-design pitfalls",
      "Export cited brief"
    ],
    "definition": "Tools expose operations for retrieving information, running computations,\nand acting on systems.",
    "toolCall": [
      ["Request", "The model selects a tool\nand supplies arguments."],
      ["Execution", "Software checks\npermissions and inputs,\nthen performs the\npermitted operation."],
      ["Result", "The tool returns information\nthat informs the next\nmodel step."]
    ],
    "decisions": [
      ["Capability size", "Small operations offer flexibility.\nTask-oriented tools handle more work internally."],
      ["System access", "MCP provides standard tool discovery and calls.\nCLIs provide access through existing commands."],
      ["Tool composition", "Individual calls return results step by step.\nCode mode combines calls and processes results in code."]
    ],
    "pitfall": "Copying APIs without evaluating task fit.",
    "cues": [
      [
        "Tool selection",
        "Overlapping tools and unclear descriptions make\nthe right operation harder to choose."
      ],
      [
        "Authority",
        "Broad shell or code access can grant more power\nthan the task requires."
      ],
      [
        "Outcomes",
        "An unclear result leaves the agent unsure whether\nan action completed."
      ]
    ],
    "quoteWrapped": "“Agents are only as effective\nas the tools we give them.”",
    "colorKey": "pink",
    "map": "tools"
  },
  {
    "area": AREA_NAMES[3],
    "start": 26,
    "image": "orchestration-path.png",
    "quote": "we recommend finding the simplest solution possible, and only increasing complexity when needed.",
    "author": "Anthropic",
    "publication": "Building effective agents, December 2024",
    "titles": [
      "Orchestration, opening quote",
      "Workflows and agent loops",
      "Choosing the execution approach",
      "Execution pitfalls",
      "Recovery after an uncertain export"
    ],
    "executionComparison": [
      ["Workflow", "Code defines stages and\npermitted transitions."],
      ["Agent loop", "The model chooses the next action\nfrom observed results."]
    ],
    "decisions": [
      [
        "Is intelligence needed\nfor this task?",
        "Start with scripts and explicit rules. Add model\njudgment where it provides value."
      ],
      [
        "Does the model need to\nchoose the next action?",
        "Use a predefined workflow for known paths.\nConsider a bounded agent loop when\nobservations must guide the next step."
      ],
      [
        "Does added autonomy\njustify its cost?",
        "Compare task quality, completion time, and\ntotal cost against the simpler approach."
      ]
    ],
    "pitfall": "Adding multiple agents before trying a workflow.",
    "cues": [
      [
        "Value",
        "Adding autonomy without demonstrating a benefit."
      ],
      [
        "Control",
        "Skipping required checks or repeating work\nwithout progress."
      ],
      [
        "Recovery",
        "Retrying an action before establishing its outcome."
      ]
    ],
    "quoteWrapped": "“we recommend finding the\nsimplest solution possible,\nand only increasing\ncomplexity when needed.”",
    "colorKey": "pink",
    "map": "orchestration"
  },
  {
    "area": AREA_NAMES[4],
    "start": 31,
    "image": "evals-inspection.png",
    "quote": "Can you show me how you’re measuring if any of this actually works?",
    "author": "Hamel Husain",
    "publication": "A Field Guide to Rapidly Improving AI Products, March 2025",
    "titles": [
      "Verification & Evals, opening quote",
      "Verification and evaluation",
      "Designing the evaluation suite",
      "Evaluation pitfalls",
      "Does the source support the claim?"
    ],
    "evalScales": [
      ["Verification", "Does this result or action\nmeet the requirements?"],
      ["Evaluation", "How reliably does the system\nmeet those requirements across\ncases and repeated attempts?"]
    ],
    "evalVocabulary": [
      ["Case", "Inputs, starting conditions,\nand expected behavior."],
      ["Trial", "One attempt at a case."],
      ["Grader", "A check of behavior\nor outcome."]
    ],
    "evalDecisions": [
      ["What counts as\nsuccess?", "Outcomes and quality criteria defined with SMEs.\nForbidden actions and acceptable limitations."],
      ["How will we\njudge it?", "Code for explicit checks. Expert judgment for quality.\nModel graders calibrated against experts."],
      ["Which cases will we\nevaluate?", "SME-reviewed golden datasets, known failures,\nand adversarial inputs. Held-out cases\nand repeated trials."]
    ],
    "pitfall": "Using a generic judge without error analysis or result checks.",
    "cues": [
      [
        "Outcome",
        "The agent reports success, but the actual result\nfails the requirements."
      ],
      [
        "Grader",
        "The grader rewards answers that experts would reject."
      ],
      [
        "Reference data\nand coverage",
        "Golden datasets can contain human errors, reflect bias,\nand miss important cases."
      ]
    ],
    "quoteWrapped": "“Can you show me how\nyou’re measuring if any\nof this actually works?”",
    "colorKey": "green",
    "map": "evals"
  },
  {
    "area": AREA_NAMES[5],
    "start": 36,
    "image": "operating-observability.png",
    "quote": "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe.",
    "author": "Guillermo Rauch",
    "publication": "State of AI Engineering, Datadog, 2026",
    "titles": [
      "AgentOps, opening quote",
      "Operating the system over time",
      "Operating decisions",
      "Risks across integrations",
      "Operating an FRB release"
    ],
    "definition": "AgentOps keeps deployed agents observable, controlled, and accountable\nas the system changes.",
    "recordedOperations": ["Retrieve", "Model", "Tool", "Check"],
    "foundations": [
      ["Traces", "What happened during a task"],
      ["Configuration\nversions", "Which model, prompts, retrieval setup, and\ntools were in use"],
      ["Outcome metrics", "Task success, quality, completion time, cost,\nand human review"]
    ],
    "decisions": [
      [
        "Evidence",
        "Record enough to investigate.\nLimit sensitive content and protect access."
      ],
      [
        "Releases",
        "Evaluate changes, then limit initial exposure.\nDefine pause and rollback conditions."
      ],
      [
        "Response",
        "Enforce permissions and resource limits.\nAssign someone authorized to intervene."
      ]
    ],
    "pitfall": "Combining private data, untrusted content, and outbound access without reviewing the risk.",
    "cues": [
      [
        "Private data",
        "Sensitive records, including CUI/ECI."
      ],
      [
        "Untrusted content",
        "Documents or messages may contain malicious instructions."
      ],
      [
        "Outbound access",
        "Requests or actions can send information outside\nthe approved environment."
      ]
    ],
    "quoteWrapped": "“The next wave of agent\nfailures won't be about\nwhat agents can't do.\nIt'll be about what teams\ncan't observe.”",
    "colorKey": "amber",
    "map": "operating"
  }
];

// The recap reads the same sentences as the Section 2 area slides.
const pitfalls=section2Areas.map(area=>area.pitfall);
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

 await header(a.start+1,'Foundations',a.titles[1]);
 if(areaIndex===0){
  a.invocation.forEach(([label,body],i)=>{
   const x=48+i*308;
   text(label,x,192,248,30,20,{bold:true,color});
   text(body,x,230,248,64,20);
  });
  arrow(308,255,32);arrow(616,255,32);
  a.foundations.forEach(([label,body],i)=>{
   text(label,48,320+i*40,216,30,20,{bold:true,color});
   text(body,292,320+i*40,620,30,20);
  });
  text(a.responsibility,48,458,864,30,20);
 }else if(areaIndex===1){
  shape(48,192,864,300,'none',color,0,{strokeWidth:2,name:'working-context-boundary'});
  text('Input for this call',72,208,816,30,20,{color:C.secondary});
  a.contextCategories.forEach(([label,body],i)=>{
   const x=72+(i%4)*210,y=248+Math.floor(i/4)*120;
   text(label,x,y,186,50,20,{bold:true,color});
   text(body,x,y+56,186,54,20);
  });
 }else if(areaIndex===2){
  text(a.definition,48,192,864,54,20);
  a.toolCall.forEach(([label,body],i)=>{
   text(label,48+i*308,272,248,30,20,{bold:true,color});
   text(body,48+i*308,310,248,100,20);
  });
  arrow(308,355,32);arrow(616,355,32);
  text('Model Context Protocol (MCP)',48,434,864,30,20,{bold:true,color});
  text('A standard interface for connecting AI applications to external tools and context.',48,466,864,30,20);
 }else if(areaIndex===3){
  a.executionComparison.forEach(([label,definition],i)=>{
   const x=48+i*444;
   text(label,x,192,420,32,24,{bold:true,color});
   text(definition,x,236,420,60,24);
  });
  text('Stage 1',48,406,132,60,24,{align:'center',middle:true});
  text('Required\ncheck',764,406,148,60,24,{align:'center',middle:true});
  arrow(196,436,28);arrow(704,436,28);
  shape(248,348,432,150,'none',color,0,{strokeWidth:2,name:'bounded-agent-loop-stage'});
  text('Stage 2 · bounded agent loop',268,362,392,30,20,{bold:true,color});
  text('Choose\naction',268,406,116,60,20,{align:'center',middle:true});
  text('Act',430,406,56,60,20,{align:'center',middle:true});
  text('Observe\nresult',538,406,122,60,20,{align:'center',middle:true});
  arrow(396,436,22);arrow(508,436,18);
  line(599,474,0,12);line(599,486,-273,0);arrow(326,486,0,-12);
 }else if(areaIndex===4){
  a.evalScales.forEach(([label,body],i)=>{
   text(label,48+i*444,192,420,30,20,{bold:true,color});
   text(body,48+i*444,234,420,100,24);
  });
  shape(48,350,864,1,C.hair);
  a.evalVocabulary.forEach(([label,body],i)=>{
   text(label,48+i*296,378,272,26,20,{bold:true,color});
   text(body,48+i*296,412,272,60,20);
  });
 }else{
  text(a.definition,48,192,864,50,20);
  a.foundations.forEach(([label,body],i)=>{
   const y=[262,382,450][i];
   text(label,48,y,216,i===1?54:30,20,{bold:true,color});
   text(body,292,y,620,i===0?30:54,20);
  });
  a.recordedOperations.forEach((label,i)=>text(label,292+i*156,302,i===3?152:120,30,20,{align:'center'}));
  [416,572,728].forEach(x=>arrow(x,316,24));
  shape(448,334,120,2,color);
  attr('one span',448,344,120,{align:'center'});
 }

 await header(a.start+2,'Decisions',a.titles[2]);
 if(areaIndex===1){
  a.contextChoices.forEach(([label,body],i)=>{
   const y=192+i*66;
   text(label,48,y,216,30,20,{bold:true,color});
   text(body,292,y,620,54,20);
  });
  text('Preserve source identity and enforce access before inclusion.',48,466,864,30,20,{bold:true});
 }else if(areaIndex===2){
  const choices=evidenceTable([['Decision','Options and trade-offs'],...a.decisions],[244,620],192,[36,72,72,72],{color});
  for(let r=1;r<=a.decisions.length;r++)choices.getCell(r,0).text.style={typeface:'Helvetica',fontSize:20*P,color:C.text,bold:true,autoFit:'none',lineSpacing:1.25};
  text('**Execution controls apply to every approach:**\npermissions, input checks, and limits on execution.',48,450,864,50,20);
 }else if(areaIndex===3){
  a.decisions.forEach(([label,body],i)=>{
   const y=[192,286,390][i],h=[75,100,75][i];
   text(label,48,y,312,h,20,{bold:true,color});
   text(body,392,y,520,h,20);
  });
  text('**Execution controls:** Saved state, required checks, stopping limits, and recovery.',48,480,864,25,20);
 }else if(areaIndex===4){
  a.evalDecisions.forEach(([label,body],i)=>{
   const y=192+i*102;
   text(label,48,y,268,75,20,{bold:true,color});
   text(body,344,y,568,90,20);
  });
 }else if(areaIndex===5){
  a.decisions.forEach(([label,body],i)=>{
   text(label,48,192+i*100,216,30,20,{bold:true,color});
   text(body,292,192+i*100,620,54,20);
  });
 }else{
  const four=a.decisions.length===4;
  a.decisions.forEach(([question,body],i)=>{
   text(question,48,192+i*(four?72:100),272,four?62:82,four?20:24,{bold:true});
   text(body,344,192+i*(four?72:100),568,four?62:82,20);
  });
 }

 await header(a.start+3,'Challenges and pitfalls',a.titles[3]);
 a.cues.forEach(([label,body],i)=>{
  const y=192+i*(areaIndex===1?54:62);
  text(label,48,y,216,areaIndex===4&&i===2?54:30,20,{bold:true,color});
  text(body,292,y,620,54,20);
 });
 if(areaIndex===4)text('Inspect the result, trace, and reference data before choosing a repair.',48,386,864,30,20);
 if(areaIndex===5)text('A probabilistic filter is insufficient as the sole security boundary.',48,386,864,30,20);
 text('Pitfall',48,426,124,30,20,{bold:true,color});
 const pit=(areaIndex===0||areaIndex===4)?a.pitfall.replace(' without','\nwithout'):areaIndex===5?a.pitfall.replace(' and outbound','\nand outbound'):a.pitfall;
 text(pit,196,426,716,64,24,{bold:true});

 // Reserve the application body until the replacement FRB Agent content is ready.
 await header(a.start+4,'FRB Agent',a.titles[4]);
}
await newSlide('41');
await img('internal/renders/map-closing.png',0,0,960,540,{alt:'Agentic system anatomy connecting all six engineering areas'});
text('Six connected engineering areas',48,36,864,42,32,{bold:true,name:'slide-title'});
AREA_NAMES.forEach((label,i)=>text(label,48+(i%3)*296,i<3?88:122,272,25,20,{bold:true,color:[C.blue,C.pink,C.pink,C.pink,C.green,C.amber][i],name:`area-key-${i+1}`}));

await newSlide('42');sectionDivider(3,'Making the transition');
await newSlide('43',{area:'The transition',beat:'What transfers',map:'all',color:C.transition,title:'What transfers'});
twoTable(['Existing skill','Application in an AI system'],[
 ['Decomposition and systems thinking','Bounded workflows and clear state'],
 ['Interface design','Tool contracts and explicit outcomes'],
 ['Testing discipline','Evals and regression cases'],
 ['Debugging and observability','Traces of model calls and tool actions'],
 ['Security and least privilege','Enforced access and action limits'],
 ['Production operations','Quality, cost, latency, and recovery'],
],192,[42,42,42,42,42,42,42],{color:C.transition});
await newSlide('44',{area:'The transition',beat:'What you add',map:'all',color:C.transition,title:'What you add'});
twoTable(['Area','Competency to develop'],[
 [AREA_NAMES[0],'Recognize failure patterns and evaluate task fit'],
 [AREA_NAMES[1],'Select evidence and preserve its meaning'],
 [AREA_NAMES[2],'Evaluate how the model selects and uses tools'],
 [AREA_NAMES[3],'Bound model-selected actions and handle interruption'],
 [AREA_NAMES[4],'Define quality and measure behavior across repeated trials'],
 [AREA_NAMES[5],'Investigate quality changes and manage\nsecurity, cost, and latency'],
],192,[40,40,40,40,40,40,60],{color:C.transition,columnWidths:[272,24,568]});
await newSlide('45',{area:'The transition',beat:'The pitfalls',variant:'compact',color:C.transition});
AREA_NAMES.forEach((name,i)=>{const color=[C.blue,C.pink,C.pink,C.pink,C.green,C.amber][i],y=100+i*66,h=60;shape(48,y,864,h,C.surface);shape(48,y,224,h,color);const label=i===1?name.replace(' ','\n'):i===2?name.replace('& ','&\n'):i===4?name.replace(' &','\n&'):name;text(label,64,y+3,192,54,20,{bold:true,color:i===0?C.text:C.bg,middle:true});const sentence=i===5?pitfalls[i].replace(' without reviewing','\nwithout reviewing'):pitfalls[i];text(sentence,296,y+3,600,h-6,20,{middle:true});});
await newSlide('46',{area:'The transition',beat:'The roadmap',map:'all',color:C.transition,title:'The roadmap'});
['Choose one narrow task.','Start with one model call.','Turn failures into checks.','Add autonomy when evals justify it.'].forEach((v,i)=>{card(48,192+i*67,864,59,'','');text(String(i+1),64,195+i*67,64,53,44,{color:C.secondary});text(v,136,202+i*67,756,42,32,{bold:true});});
await newSlide('47');thesis(true);
await newSlide('48',{title:'Resources',variant:'resources'});
const resources=[['Chip Huyen, AI Engineering: Building Applications with Foundation Models.','O\'Reilly, 2025.'],['Anthropic engineering: "Building effective agents" (December 2024).','"Effective context engineering for AI agents" (September 2025).','"Demystifying evals for AI agents" (January 2026).'],['OpenAI, "A practical guide to building agents" (2025).'],['Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev.','Shreya Shankar and Hamel Husain, Evals for AI Engineers.','O\'Reilly, October 2026.'],['OWASP Top 10 for LLM Applications (2025)','and for Agentic Applications (2026).'],['OpenTelemetry GenAI semantic conventions.']];
let ry=146;for(const lines of resources){for(const lineText of lines){text(lineText,48,ry,864,25,20);ry+=25;}ry+=8;}

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
