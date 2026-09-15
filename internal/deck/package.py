import json,re,copy
from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
from lxml import etree as E

B=Path(__file__).parent
NS={'p':'http://schemas.openxmlformats.org/presentationml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships','mc':'http://schemas.openxmlformats.org/markup-compatibility/2006','p14':'http://schemas.microsoft.com/office/powerpoint/2010/main','p159':'http://schemas.microsoft.com/office/powerpoint/2015/09/main'}
for k,v in NS.items():E.register_namespace(k,v)
def q(t):p,n=t.split(':');return '{'+NS[p]+'}'+n
def node(t,**attrs):return E.Element(q(t),{k:str(v) for k,v in attrs.items()})
def sub(parent,t,**attrs):r=node(t,**attrs);parent.append(r);return r
def save(root):return E.tostring(root,encoding='UTF-8',xml_declaration=True,standalone=True)
meta=json.loads((B/'expanded-build-map.json').read_text())
with ZipFile(B/'authored.pptx') as z:data={n:z.read(n) for n in z.namelist()}
native_map=[]

def timing(root,objects):
    clicks=sorted({k for o in objects for k in (o['start'],o['end']) if 0<k<99})
    if not clicks:return
    tm=sub(root,'p:timing');tl=sub(tm,'p:tnLst');par=sub(tl,'p:par');rt=sub(par,'p:cTn',id=1,dur='indefinite',restart='never',nodeType='tmRoot');children=sub(rt,'p:childTnLst')
    seq=sub(children,'p:seq',concurrent=1,nextAc='seek');ct=sub(seq,'p:cTn',id=2,dur='indefinite',nodeType='mainSeq');steps=sub(ct,'p:childTnLst');counter=2
    def ident():
        nonlocal counter
        counter+=1;return counter
    for click in clicks:
        events=[(o,False)for o in objects if o['end']==click]+[(o,True)for o in objects if o['start']==click]
        group=sub(steps,'p:par');g=sub(group,'p:cTn',id=ident(),fill='hold');sl=sub(g,'p:stCondLst');sub(sl,'p:cond',delay='indefinite');gl=sub(g,'p:childTnLst')
        inner=sub(gl,'p:par');ic=sub(inner,'p:cTn',id=ident(),fill='hold');sl=sub(ic,'p:stCondLst');sub(sl,'p:cond',delay=0);il=sub(ic,'p:childTnLst')
        for index,(obj,enter) in enumerate(events):
            fade=enter and obj['effect']=='fade';dur=obj.get('duration',200) if fade else 1
            pr=sub(il,'p:par');c=sub(pr,'p:cTn',id=ident(),presetID=10 if fade else 1,presetClass='entr' if enter else 'exit',presetSubtype=0,fill='hold',nodeType='clickEffect' if index==0 else 'withEffect');sl=sub(c,'p:stCondLst');sub(sl,'p:cond',delay=0);cl=sub(c,'p:childTnLst')
            st=sub(cl,'p:set');bh=sub(st,'p:cBhvr');bc=sub(bh,'p:cTn',id=ident(),dur=1,fill='hold');sc=sub(bc,'p:stCondLst');sub(sc,'p:cond',delay=0);tg=sub(bh,'p:tgtEl');sub(tg,'p:spTgt',spid=obj['spid']);at=sub(bh,'p:attrNameLst');sub(at,'p:attrName').text='style.visibility';to=sub(st,'p:to');sub(to,'p:strVal',val='visible' if enter else 'hidden')
            if fade:
                anim=sub(cl,'p:animEffect',transition='in',filter='fade');b=sub(anim,'p:cBhvr');sub(b,'p:cTn',id=ident(),dur=dur,fill='hold');tg=sub(b,'p:tgtEl');sub(tg,'p:spTgt',spid=obj['spid'])
    prev=sub(seq,'p:prevCondLst');cond=sub(prev,'p:cond',evt='onPrev',delay=0);sub(sub(cond,'p:tgtEl'),'p:sldTgt')
    nex=sub(seq,'p:nextCondLst');cond=sub(nex,'p:cond',evt='onNext',delay=0);sub(sub(cond,'p:tgtEl'),'p:sldTgt')

for m in meta:
    name=f"ppt/slides/slide{m['slideIndex']}.xml";root=E.fromstring(data[name]);tree=root.find('p:cSld/p:spTree',NS)
    elements=[x for x in tree if x.tag not in (q('p:nvGrpSpPr'),q('p:grpSpPr'))]
    assert len(elements)==len(m['objects']),(m['key'],len(elements),len(m['objects']))
    assert all(o['end']==99 for o in m['objects']),m['key']
    # Export preserves element order while assigning native shape IDs.
    for element,obj in zip(elements,m['objects']):
        cn=element.find('.//p:cNvPr',NS);obj['spid']=cn.get('id');cn.set('name',obj['name'])
        if obj.get('fontSize'):
            for p in element.findall('.//a:p',NS):
                pp=p.find('a:pPr',NS)
                if pp is None:pp=node('a:pPr');p.insert(0,pp)
                for old in pp.findall('a:lnSpc',NS):pp.remove(old)
                ls=node('a:lnSpc');pp.insert(0,ls)
                if obj.get('exact'):sub(ls,'a:spcPts',val=round(obj['exact']*100))
                else:sub(ls,'a:spcPct',val=115000 if obj['fontSize']==32 else 125000)
            for body in element.findall('.//a:bodyPr',NS):
                for k in ('lIns','rIns','tIns','bIns'):body.set(k,'0')
                for af in list(body):
                    if E.QName(af).localname in ('normAutofit','spAutoFit','noAutofit'):body.remove(af)
                sub(body,'a:noAutofit')
        if obj.get('arrow'):
            ln=element.find('p:spPr/a:ln',NS)
            if ln is not None:sub(ln,'a:tailEnd',type='triangle',w='sm',len='sm')
        if obj['kind']=='table':
            for tc in element.findall('.//a:tcPr',NS):
                for tag in reversed(('lnL','lnR','lnT','lnB','lnTlToBr','lnBlToTr')):
                    for old in tc.findall('a:'+tag,NS):tc.remove(old)
                    ln=node('a:'+tag,w=127);sub(sub(ln,'a:solidFill'),'a:srgbClr',val='14161C');tc.insert(0,ln)
            for body in element.findall('.//a:bodyPr',NS):
                for old in body.findall('a:noAutofit',NS):body.remove(old)
                sub(body,'a:noAutofit')
        # Keep the labeled screenshot guide shapes easy to edit and group.
        for lock in element.findall('.//a:spLocks',NS):lock.attrib.pop('noGrp',None)
    for old in list(root):
        if E.QName(old).localname in ('transition','timing','AlternateContent'):root.remove(old)
    if m['morph']:
        ac=E.Element(q('mc:AlternateContent'),nsmap={k:NS[k]for k in ('mc','p14','p159')});root.append(ac)
        ch=sub(ac,'mc:Choice',Requires='p159');tr=sub(ch,'p:transition',spd='fast');tr.set(q('p14:dur'),'500');sub(tr,'p159:morph',option='byObject')
        fb=sub(ac,'mc:Fallback');sub(fb,'p:transition',spd='fast')
    timing(root,m['objects'])
    # The narrative number must stay editable, topmost, and outside every animation.
    number=m['objects'][-1]
    assert number['name']=='narrative-number' and number['start']==0 and number['end']==99,m['key']
    el=elements[-1]
    assert ''.join(el.findall('.//a:t',NS)[0].itertext())==str(m['narrativeNumber']),m['key']
    xfrm=el.find('p:spPr/a:xfrm',NS)
    assert [int(xfrm.find('a:off',NS).get(k)) for k in ('x','y')]==[928*12700,512*12700],m['key']
    assert [int(xfrm.find('a:ext',NS).get(k)) for k in ('cx','cy')]==[20*12700,16*12700],m['key']
    assert not root.xpath('.//p:spTgt[@spid=$id]',namespaces=NS,id=number['spid']),m['key']
    assert not root.xpath('.//p:cTn[@presetClass="exit"]',namespaces=NS),m['key']
    assert el.find('.//a:pPr',NS).get('algn')=='r',m['key']
    rpr=el.find('.//a:rPr',NS)
    default=el.find('.//a:defRPr',NS)
    assert rpr.get('sz',default.get('sz'))=='1200' and rpr.get('b',default.get('b','0'))=='0',m['key']
    assert rpr.find('a:latin',NS).get('typeface')=='Helvetica',m['key']
    assert rpr.find('a:solidFill/a:srgbClr',NS).get('val').upper()=='ADACA9',m['key']
    notes=E.fromstring(data[f"ppt/notesSlides/notesSlide{m['slideIndex']}.xml"])
    note_text='\n'.join(notes.xpath('.//a:t/text()',namespaces=NS))
    assert f"Narrative slide {m['narrativeNumber']} | Authoring key {m['sourceKey']} | Original states {m['stateInterval']['start']} to {m['stateInterval']['end']} | Physical slide {m['physicalIndex']}" in note_text,m['key']
    data[name]=save(root);native_map.append(m)

for name in list(data):
    if not name.endswith('.xml'):continue
    if name.startswith(('ppt/theme/','ppt/slideMasters/','ppt/slideLayouts/','ppt/notesMasters/')):
        root=E.fromstring(data[name])
        for font in root.findall('.//a:latin',NS)+root.findall('.//a:ea',NS)+root.findall('.//a:cs',NS):font.set('typeface','Helvetica')
        for font in root.findall('.//a:font',NS):font.set('typeface','Helvetica')
        data[name]=save(root)
root=E.fromstring(data['ppt/presentation.xml']);root.set('autoCompressPictures','0');root.set('embedTrueTypeFonts','0');root.set('saveSubsetFonts','0');root.find('p:sldSz',NS).set('type','screen16x9');data['ppt/presentation.xml']=save(root)
with ZipFile(B/'candidate.pptx','w',ZIP_DEFLATED)as z:
    for name,payload in data.items():z.writestr(name,payload)
(B/'native-build-map.json').write_text(json.dumps(native_map,indent=2))
summary={'physicalSlides':len(meta),'internalClicks':sum(len({o['start'] for o in m['objects'] if o['start']>0}) for m in meta),'morphTransitions':sum(bool(m['morph']) for m in meta),'numberedSlides':len(meta),'exitAnimations':0}
assert summary=={'physicalSlides':64,'internalClicks':19,'morphTransitions':7,'numberedSlides':64,'exitAnimations':0},summary
(B/'package-validation.json').write_text(json.dumps(summary,indent=2))
print(json.dumps(summary))
