# Design brief

Visual and typographic decisions for the deck. Companion to `style/colors.md`, which holds the palette. Decided September 14, 2026.

## 1. Scope and precedence

- This brief owns every visual value: size, weight, color, position, stroke, radius, and animation.
- Slide files under `slides/` own the words, the build order, and the intent. They describe visuals in plain words such as "small," "strip," or "large," and section 10 resolves those words to values.
- Where a slide file and this brief disagree on a visual value, the brief wins.
- Where the brief cannot satisfy a slide file, the slide file's own fallback wording applies. Slides 6, 18, 21, and 23 each name one.
- A visual change goes into this brief. It does not go into a slide file.
- No chrome. No slide numbers, footer, logo, progress bar, employer name, contact details, or takeaway lines on screen. The kicker is the only orientation device.
- The brief carries no talk content. It names slides by number only.

## 2. Page and PowerPoint setup

**Tool and page.** PowerPoint, built on macOS, presented from a Windows machine. Slide size Widescreen, 13.333 by 7.5 inches, which is 960 by 540 points. Confirm the size is "Widescreen" and not "On-screen Show (16:9)," which is 10 by 5.625 inches and would rescale every value here.

**Units.** Positions and sizes in this brief are points, with inches in parentheses where PowerPoint's ruler needs them. One point is 2 units in the diagram SVG, whose viewBox is 1920 by 1080.

**Slide master, set once.**

| Theme slot | Value |
|---|---|
| Background (Dark 1) | `#14161c` |
| Text (Light 1) | `#fffcf5` |
| Accent 1 | `#f948be` pink |
| Accent 2 | `#1064f8` blue |
| Accent 3 | `#01b66d` green |
| Accent 4 | `#fdad00` amber |
| Accent 5 | `#adaca9` secondary text |
| Accent 6 | `#303236` surface |
| Hyperlink, followed hyperlink | `#fffcf5` |
| Heading font, body font | Helvetica |

Consolas is applied directly to text runs, never as a theme font.

**Layouts.** Two. "Kicker" has one text placeholder at the kicker position and nothing else. "Blank" has nothing. Titles are text boxes at the fixed title position, not title placeholders, so nothing autofits.

**Settings.** Autofit off on every text box. Internal margins 0. Word wrap on. Image compression off (Preferences, General, Image Size and Quality: do not compress). Do not embed fonts; section 3 explains why.

## 3. Type

### Faces

| Face | Weights | Use |
|---|---|---|
| Helvetica | Regular, Bold | everything that is not code |
| Consolas | Regular, Bold | commands, formulas, file names, the slide 1 lines, the slide 6 prompt |

No other weight of either face. No italics anywhere. No Helvetica Light, no Helvetica Neue in any weight.

**Why Regular and Bold only.** Apple's Helvetica and Helvetica Neue are AAT collections in `/System/Library/Fonts`. PowerPoint for Mac reports them as "unsupported (AAT)" and will not embed them. Windows has neither, and its substitution table maps the name "Helvetica" to Arial. Arial shares Helvetica's character widths, so a deck set in Helvetica rewraps nowhere when Windows renders it in Arial. Helvetica Light has no Arial twin and its embedding flag is preview-and-print only. Helvetica Neue's Light, Medium, and Thin have no Arial twin, and Windows has no mapping for the name. So the deck is Helvetica on the Mac and Arial on Windows, in the two weights both machines share. Section 9 requires a test open on the Windows machine.

**Why Consolas.** It ships inside PowerPoint for Mac (`DFonts/Consola*.ttf`, four styles) and on every Windows machine. Nothing to install, nothing to embed. Menlo is Mac only. JetBrains Mono would need embedding and a test.

### Scale

Seven sizes. Six on the deck and one that appears only inside the diagram renders.

| Role | Size | Face and weight | Color | Used on |
|---|---|---|---|---|
| Display mono | 60 | Consolas Regular | primary | slide 1 build 1 |
| Display sentence | 44 | Helvetica Regular. Bold on the one landing sentence | primary | slides 3 and 25; the large quotes on 14 and 21; a single large line where a slide file asks for one; step numerals on 17 and 23 in secondary |
| Slide title | 32 | Bold | primary | every "Title:" line; the four steps on 23; the heading on 24 |
| Heading and body | 24 | Bold for build headings, Regular for body | primary | build headings, numbered and plain lists, table headers, the slide 8 callout |
| Chip and compact | 20 | Regular. Consolas Regular for commands and formulas | primary. Blue for Consolas runs at this size and above | chip rows, table cells, band content, pitfall band text, small quote blocks, sublines, the six lines on 24 |
| Small | 16 | Regular. The kicker's area name Bold | secondary | kicker, captions, stat lines, footer lines, attributions, quote attributions, ladder years, chips after shrink-to-strip |
| Diagram fine | 12 | Regular. Badge text Bold | secondary. Badge text `#14161c` | diagram subtitles and container descriptions; "yours" badges. Never on the deck outside a diagram render |

### Floors

- **Reading floor, 20.** Anything the audience is expected to read from the back of the room is 20 or larger.
- **Present floor, 16.** Elements that exist to be on screen when spoken, or to orient. Kicker, captions, stat lines, footers, attributions.
- **Render floor, 12.** Diagram subtitles and badges only. The diagram is a map. The presenter names each region as it highlights, so its job is recognition, not reading, and 16 Bold titles on near-black recognize.

### Spacing and alignment

- Line height 1.15 at 60, 44, and 32. Line height 1.25 at 24 and below.
- Paragraph spacing 12 between 24 list items. 8 between 20 lines.
- Left-aligned at the grid's left edge everywhere except slides 1, 3, and 25, and slide 4 build 2, which are centered blocks.
- Slide 1's two monospace lines sit in one centered text box with left-aligned paragraphs, so the equals signs align.
- Display lines get manual line breaks so breaks fall on meaning. Check every one on Windows.

### Emphasis

Slight emphasis is Bold at the same size. That is the only emphasis device. A size step would change a line's rhythm and break band and row alignment. Bold keeps the line where it is.

Pink is not emphasis. Pink is a landing device for one word or figure per slide, applied only where a slide file's layout notes name the element. If the slide file names none, the slide has no pink. Slides 3 and 25 use Bold on the second sentence and no pink. Slide 25 stays up for 15:00 and must be calm.

### Monospace

Commands, formulas, and file names are Consolas at the surrounding size. At 20 and above they are blue. Below 20 they stay primary and the face alone marks them.

## 4. Grid

### Margins and safe area

| Edge | Points | Inches |
|---|---|---|
| Left, right | 48 | 0.67 |
| Top | 36 | 0.50 |
| Bottom | 48 | 0.67 |

Safe area 864 by 456. Only the pitfall band, the slide 6 terminal, and the full-bleed diagram touch the edge.

### Columns

Six columns of 124 with 24 gutters, from x 48 to x 912.

| Span | Width | Inches | Used for |
|---|---|---|---|
| 1 | 124 | 1.72 | band labels on slide 9; each tread on 23 |
| 2 | 272 | 3.78 | the photo column on 2; each of three columns on 13; each ladder tread on 21; the smaller image on 8 |
| 3 | 420 | 5.83 | each column of a two-column table on 4, 15, 16, 19, 20; each image on 10 and 12 |
| 4 | 568 | 7.89 | the larger image on 8; the text column on 2 |
| 5 | 716 | 9.94 | band content beside a 1-column label on 9 |
| 6 | 864 | 12.00 | full-width rows, chip rows, bands on 18 and 22 |

### Vertical zones

| Zone | Top (y) | Height | Notes |
|---|---|---|---|
| Kicker | 36 (0.50 in) | 20 | x 48, width 864 |
| Title | 68 (0.94 in) | up to 76 | two lines of 32 at 1.15 |
| Strip | 68 (0.94 in) | 88 | where images land after shrink-to-strip. A chip strip is one 16 line at y 68 |
| Content top | 156 (2.17 in) under a two-line title. Title bottom plus 24 under a one-line title. 68 with no title. 100 under a chip strip | | |
| Content bottom | 492 (6.83 in) without a pitfall band. 460 (6.39 in) with one | | |
| Pitfall band | 476 (6.61 in) | 64 (0.89 in) | full bleed, x 0 to 960, flush to the bottom edge. Text inset to x 48 |
| Footer line, attribution | bottom edge at 492 | 20 | footer left at x 48. Attribution right-aligned to x 912 |

The pitfall band is flush to the bottom edge so geometry, not decoration, separates it from content. Its 64 height keeps the text more than 20 from the edge on a display that overscans.

### Band budgets

A band is a row with its label and content on one baseline. A band is 56 tall and holds one line, or two lines with 4 of padding. One wrap per band is affordable.

| Slide | Content zone | Bands | Total |
|---|---|---|---|
| 9 | 156 to 460, 304 available | 56, 56, 104, 56, three gaps of 8 | 296 |
| 18 | 100 to 492, 392 available | 56, 56, 56, 56, 108, four gaps of 8 | 364 |
| 22 | 96 to 492, 396 available | six of 56, five gaps of 8, ending at 472 | 376 |

On slide 9 the third band is 104 because it holds two matched boxes of two lines and a 16 stat line beneath. On slide 18 the last band is 108 because it holds the triangle at 96.

### Images

- **Photo, slide 2.** 144 (2.00 in) round at x 48, vertically centered on the text block. The spec's ceiling is a sixth of the width, 160. Round, because it is the only photo and a circle marks a person, not a screenshot. The 320 pixel source is over 2x at 144 and sharp at 1080p.
- **Two images side by side.** 3 plus 3 columns on 10 and 12. 4 plus 2 on 8, the larger on the left. Height up to 268 with a caption row beneath. Every screenshot gets a 1 hairline `#4c4d50` and a 4 corner radius so a light screenshot does not float on the dark ground. Captions 16 secondary, 8 below, left-aligned to the image.

## 5. Color

### Roles

| Role | Hex | Derivation and rule |
|---|---|---|
| Background | `#14161c` | `style/colors.md` |
| Primary text | `#fffcf5` | `style/colors.md` |
| Secondary text | `#adaca9` | `#fffcf5` at 65% over the background. Use the solid hex, never text transparency, which renders inconsistently on some Windows builds and in PDF export. 65% rather than 60% because projectors crush dark grays |
| Surface | `#303236` | `#fffcf5` at 12%. Cards, the pitfall band, generic diagram boxes. 8% vanishes on a projector; 12% reads as a lift |
| Hairline | `#4c4d50` | `#fffcf5` at 24%. Screenshot borders, inner boxes in small diagrams, diagram containers |
| Pink | `#f948be` | the landing color. One element per slide |
| Blue | `#1064f8` | tools, commands, Consolas runs at 20 and above, the diagram's Model region |
| Green | `#01b66d` | what works or transfers |
| Amber | `#fdad00` | warning. The pitfall label, the "yours" badge |
| Blue tint | `#13223f` | blue at 12% over the background. The Model region fill |
| Pink tint | `#2b1b2c` | pink at 10% over the background. The Harness region fill |

### Contrast on `#14161c`

WCAG ratios, rounded. AA is 4.5:1 for normal text and 3:1 for large text.

| Foreground | Ratio | Normal | Large | Rule |
|---|---|---|---|---|
| `#fffcf5` | 17.7 | pass | pass | any size |
| `#adaca9` | 8.0 | pass | pass | any size. Used at 16 and 12 |
| `#f948be` | 5.8 | pass | pass | any size. On the surface it drops to 4.1, so pink inside a band is 20 or larger |
| `#1064f8` | 3.6 | fail | pass | text at 20 or larger only. Never at 16 or 12. Never on the surface, where it is 2.6. Strokes and region tints at any size |
| `#01b66d` | 6.8 | pass | pass | any size |
| `#fdad00` | 9.6 | pass | pass | any size |
| `#14161c` on solid amber | 9.6 | pass | pass | the badge. `#fffcf5` on solid amber is 1.8 and is never used |
| `#fffcf5` on solid blue | 4.9 | pass | pass | allowed if a solid blue box is ever needed |

**Projector note.** Near-black crushes on projectors and blue is the dimmest accent. Test on the venue projector. If blue text fails, commands fall back to Consolas in primary and only the diagram keeps blue.

### Accent budget per slide

- **Pink.** At most one element: a word, a figure, or one diagram region. Never a whole sentence. Never on slides 3, 6, 24, or 25.
- **Amber.** Only the pitfall label, the area labels on slide 22, which use the pitfall label style, and the "yours" badges on 19.
- **Blue.** Only Consolas runs at 20 and above, and the diagram's Model region.
- **Green.** Only the cells on slide 20 that read as unchanged, and a single verified or working state word where a slide file names one. Never in the diagram.
- No slide carries more than three accents. Slide 19's diagram state is the maximum: amber, blue, pink. Text-only slides carry none.

## 6. Components

Each entry gives size, weight, color, position, and build behavior.

**Kicker.** 16. Area name Bold, beat Regular, both secondary. x 48, y 36. A middle dot with a space on each side between the two parts. On slides 8 through 23. Absent on full-bleed diagram states. Static, present from the slide's first state. The area name is Bold because the beat is the part that changes within an area, and the weight difference makes the change visible.

**Pitfall band.** Full bleed at y 476, 64 tall, fill `#303236`. The word "Pitfall" in 20 Bold amber at x 48, then a space, then the sentence in 20 Regular primary on the same line, vertically centered in the band. The last build on slides 9, 11, 13, 15, 17, and 19. On slides 15 and 19 the band grows to 96 tall and starts at y 444, holding the extra element inside it: on 15 a second row of 16 secondary, on 19 the triangle at 64 tall in the right two columns. There is no "beneath" a band that is flush to the edge. Slide 22 stacks six bands of this style with the area name as the amber label and no pitfall word, from y 96 with 8 gaps.

**"Yours" badge.** Diagram only. An amber pill, text `#14161c` Bold 12, pill 18 tall, 8 side padding, full radius, straddling each box's top-right edge half above and half inside. On every box except Goal. Whether the Model box reads "yours to select" is the slide 19 open item; the badge widens to fit.

**Chip row.** One text line, 20 Regular primary, items separated by a space, a middle dot, and a space. Commands in Consolas 20 blue. Two rows when one would exceed 864, with 8 between rows. No pills, no fills, no strokes. The specs write chips as dot-separated text, and pills would be the only enclosed shapes on otherwise typographic slides. After shrink-to-strip the row is 16 secondary at y 68, commands in Consolas 16 primary.

**Two-column table.** Headers 24 Bold primary. Cells 20 Regular primary. Columns 3 plus 3, 420 each. Row gap 12. On slide 4 the last row gets 24 above. No rules, no fills. A "small" line under a column is 16 secondary, left-aligned to that column. Slide 13's three-column table uses 2 plus 2 plus 2.

**Quote, large.** 44 Regular primary, left-aligned, typed quotation marks, manual line breaks. Attribution 16 secondary, 12 below. No bar, no glyph, no italics.

**Quote, small block.** 20 Regular primary. Attribution 16 secondary, 8 below.

**Stat line.** 16 Regular secondary, 8 below the element it supports.

**Callout, slide 8.** 24 Bold primary, 24 above, its own Appear. No band, no fill.

**Caption.** 16 Regular secondary, 8 below the image, left-aligned to it. Commands in Consolas 16 primary.

**Footer line, slides 5 and 12.** 16 Regular secondary, x 48, bottom edge at 492, full width.

**Attribution, slide 1.** 16 Regular secondary, right-aligned to x 912, bottom edge at 492. On the title state the name line is 16 secondary at bottom left. An optional conference line is 16 secondary at bottom right and exits with the title.

**Photo, slide 2.** As in section 4. Convert `internal/profile-320.webp` to PNG before inserting. Older Windows builds show WebP as a broken picture.

**Terminal, slide 6.** The slide is the terminal. No window chrome. One prompt character in Consolas 32 primary at x 48, y 48, followed by a 16 by 32 block cursor in `#fffcf5` with the Blink emphasis effect, 1 s, repeating until the end of the slide. Fallback: a static cursor. Second fallback: the sentence the slide file names, alone.

**Full-bleed diagram, slides 7 and 19.** A PNG at x 0, y 0, 960 by 540. Section 8.

**Small custom diagrams.** Strokes 2 secondary `#adaca9`, arrowheads the same. Labels 20 Regular primary. No icons, no fills, no accents.

- Window frame, slide 11: a 2 secondary rectangle with radius 6. The frame label 16 secondary straddling the top-left edge. Inner boxes with a 1 hairline, radius 4, 8 padding, text 20. Draw it so it reads as a fixed-size box.
- Ring, slide 14: three labels on a circle, three arrows.
- Loop, slide 16: four labels in a row, three arrows.
- Triangle, slides 18 and 19: 96 tall on 18 with corner labels at 16 and its sentence at 20 beside it. 64 tall on 19 inside the band.
- Ladder, slides 21 and 23: treads as 2 horizontal lines rising to the right. Label 20 above each tread, year 16 secondary below. On 23 six treads of one column each, or one line of six words at 20 if the treads do not fit.

**Blank slide, slide 16.** Background only. Transition None.

**Optional QR, slide 24.** 112 square, bottom right at x 800, y 380. Dark modules `#14161c` on a `#fffcf5` tile with an 8 quiet zone. Dark on light because scanners fail on inverted codes. The only light tile on the deck.

## 7. Builds and transitions

| Spec word | PowerPoint |
|---|---|
| Slide transition, every slide | None. "Hard cut" means this |
| Build, default | Appear, On Click, 0 s |
| Exit | Disappear, On Click, 0 s |
| "Replace, do not overlay" | The outgoing group Disappear On Click. The incoming group Appear With Previous. One click, no overlap |
| "Shrink to a strip" | Duplicate the slide. On the copy, resize the objects into the strip zone. Set the copy's transition to Morph, 0.5 s. Name the copy with a "b" suffix in its notes so the slide file's build count still maps. Fallback if Morph misbehaves on Windows: Disappear plus Appear of the strip version |
| "Dim" the diagram, slide 7 | Five stacked PNGs. The base is visible. Each highlight state Fade in, 0.3 s, On Click, with the previous state Disappear After Previous. Final click: the last state Fade out, 0.3 s, revealing the base. Fallback: Appear and Disappear, which reads as a cut |
| Slide 19 build 3 | A separate slide with transition None, holding the "yours" render. A full-bleed image replacing everything is more robust as a slide than as a build with many exits |
| Blink | Only the slide 6 cursor |

No other effects. No Fly, Wipe, Zoom, Push, Split, or sound.

The slide count in PowerPoint exceeds 25 because of the Morph copies and the slide 19 render slide. The slide files' numbering is preserved in the notes of each slide.

## 8. Diagram re-theme

**Source of truth.** `internal/anatomy-of-an-agentic-ai-system-landscape.svg`, hand-edited. Every other diagram file is generated from it: the `-yours` variant, four highlight-state variants, and the PNG renders.

### Color mapping

| Element | Today | Dark theme |
|---|---|---|
| Canvas | white | `#14161c` |
| Title | dark text, 36 units | 40 units (20) Bold primary. Kept in the SVG because slide 7 uses it as the slide title |
| Platform, One run, Agent containers | tinted gray fills with strokes | no fill. 2 unit (1) stroke `#4c4d50`. One run keeps its dash, 12 8. Labels 40 units Bold primary. Descriptions 24 units Regular secondary |
| The 13 generic boxes | off-white fill, gray stroke | fill `#303236`, no stroke. Title 32 units (16) Bold primary. Subtitle 24 units (12) Regular secondary |
| Model | green | fill `#13223f`, 4 unit (2) stroke `#1064f8`. Title `#1064f8`. Subtitle secondary |
| Harness | violet | fill `#2b1b2c`, 4 unit stroke `#f948be`. Label `#f948be`. Description secondary. The six inner boxes as generic boxes |
| Goal | terracotta | no fill. 4 unit stroke `#adaca9`. Title primary. Subtitle secondary |
| Stopping condition | off-white | a generic box. Title 28 units Bold on two lines, the one exception to 32 |
| Arrows and the plus sign | gray | `#adaca9`. Arrows 4 units with a 20 unit marker. Plus sign 56 units |
| Green | absent | absent |

**Why this mapping.** Things get a fill and no stroke. Groupings get a stroke and no fill. So boxes and containers read differently at a glance. Model and Harness share one language, a tint plus a stroke, so the Model is not the loudest object on a slide whose subject is the harness. Goal stays neutral so slide 7 carries no amber and the badges are the only amber on slide 19. Blue on the Model extends the blue role from tools and commands to the vendor's component you select. Green stays out of the diagram so it keeps its meaning on slide 20.

**Strokes and radii.** Hairline 2 units. Region and Goal strokes 4 units. Container radius 16 units (8). Box radius 10 units (5). Badge a full pill.

### Undersized text

The slide 7 spec's "24 to 28 point" counts SVG units. At 2 units per point those are 12 to 14 points, and the subtitles at 18 to 20 units are 9 to 10 points. Resolution: raise box titles to 32 units (16) and container labels to 40 units (20). Keep subtitles at 24 units (12) in secondary as present-not-read text. Do not drop the subtitles. Slide 7's cut order relies on the harness verb list being on screen, and empty boxes look unfinished at this scale. The harness grid must be re-laid so every 32 unit title fits on one line. Expect to widen the harness by about 100 units, taken from the Model box and the stopping-condition box. The exact widths live in the SVG, not here.

### Production path

1. Wrap each layer of the SVG in a `<g id>`: `title`, `platform`, `per-run`, `one-run`, `goal`, `agent`, `model`, `plus`, `harness`, `stop`, `arrows`, `across-runs`.
2. Set the SVG's font stack to `Helvetica, Arial, sans-serif`.
3. A highlight state sets every group except the named region to opacity 0.3. Generate the four state SVGs the same way the `-yours` variant is generated.
4. Export six PNGs at 3840 by 2160 with an opaque background into `internal/renders/`: `map-full`, `map-model`, `map-harness`, `map-per-run`, `map-across-runs`, `map-yours`.
5. Export from a renderer that resolves system Helvetica, such as a browser or `rsvg-convert`. Confirm the render is Helvetica and not a fallback face.

**Why PNG rather than importing the SVG and converting to shapes.** Conversion maps the font to Helvetica Neue, which is banned. It drops or distorts `marker-end` arrowheads. It turns centered text into left-aligned boxes that shift on Windows. And it yields about 80 shapes that must be regrouped by hand after every edit.

**Why PNG rather than a native PowerPoint rebuild.** PowerPoint has no group opacity, so four dim states means setting fill, line, and text transparency on 80 objects four times. And the SVG would stop being the source of truth that `CLAUDE.md` names.

## 9. Cross-platform checklist

All on the Windows machine that will present, with the PowerPoint build it will use, before September 17.

1. Slide size reads 13.333 by 7.5 inches.
2. Home, Replace, Replace Fonts lists only Helvetica and Consolas. No Helvetica Neue, Light, or Medium. Helvetica shows as substituted by Arial.
3. Line breaks match the Mac on slides 1, 3, 9, 14, 18, 21, 22, 23, and 25. Photograph each on both machines and compare.
4. Consolas renders Regular and Bold. The equals signs on slide 1 align. The caret on slide 16 shows.
5. No font embedding warning on open.
6. Every image displays. The slide 2 photo is PNG, not WebP. No SVG remains in the file.
7. The six diagram renders are sharp at full screen and were not recompressed on save.
8. Slide 7: five clicks produce four highlight states and a return to full brightness, in order, with no flash of the base between states.
9. Morph plays on the shrink-to-strip slides (8, 10, 12, 14, 16, 18, 21). If it plays as Fade, accept it or switch to the replace fallback.
10. The slide 6 cursor blinks and keeps blinking.
11. Every transition is None. Advance through the whole deck with the clicker to be used on stage.
12. The pitfall band's surface fill is visible on the venue projector. Blue commands are legible on it. If not, apply the fallbacks in section 5.
13. Presenter view shows notes on the laptop and slides on the output.
14. Export a PDF from the Windows machine as the emergency copy. Carry the .pptx on a USB drive and a cloud link.

## 10. Vocabulary map

Slide files use these words. This table resolves them so slide files never need editing for visual reasons.

| Spec word | Value |
|---|---|
| "small" | 16 secondary |
| "large," "large type," "set it big" | 44 |
| "title" | 32 Bold |
| "heading" | 24 Bold |
| "chip," "chips in a row" | 20, dot-separated, section 6 |
| "band," "strip across the bottom" | the pitfall band |
| "strip along the top" | the strip zone at y 68 |
| "quote large, attribution small" | 44 and 16 |
| "slightly more weight," "a slight weight difference" | Bold at the same size |
| "no table rules" | the two-column table component |
| "monospace face" | Consolas at the surrounding size |
| "hard cut," "no transition effect" | transition None |
| "replace, do not overlay" | Disappear plus Appear With Previous |
| "dim" | the 0.3 opacity state in a render |
| "full brightness" | the `map-full` render |
| "the diagram," "the landscape SVG" | a PNG from `internal/renders/` generated from the SVG |
| "yours badge" | section 6 |
| "cropped round or square" | round, 144 |

## 11. Spec lines this brief cannot honor as written

Recorded here. Slide files are not edited for visual reasons. A follow-up may close their open items by pointing at this brief.

- **Slide 7, "24 to 28 point."** Counts SVG units. Corrected in section 8; titles rise to 16 points and the harness grid is re-laid.
- **Slide 9, "a row of six short labels."** About 1200 wide at 20. Two rows of three; the Measure band takes two lines. Band budget 56, 56, 104, 56.
- **Slide 18, "Do not let them wrap."** The Observability line needs about 1040 and the Guardrails line about 1250 against 864 available. Only 16 would fit, and 16 is below the reading floor. A 56 band holds two lines, so one wrap per band is permitted. If single lines are wanted, the spec's own remedy applies: cut Guardrails items first. The size never drops below 20.
- **Slides 15 and 19, an element "beneath" or "beside" the band.** The band is flush to the bottom edge. Those two bands grow to 96 and hold the element inside.
- **Slide 24, italic book titles.** No italics under the weight rule. Set in Regular with no marks. Articles keep the quotation marks the spec already gives them.
- **Slide 2, the WebP photo.** Convert to PNG.
- **Slide 1, the optional conference line.** No template decides it. The position is given in section 6; whether it appears is the presenter's call.
- **Slides 7 and 19, "review colors, type, badge color, and placement against the deck template."** Answered by sections 6 and 8.
- **Shrink-to-strip and slide 19 build 3.** Each needs an extra PowerPoint slide. The audience sees no difference.

## 12. Follow-up work this brief specifies but does not do

- Re-theme the landscape SVG per section 8, add the layer groups, and re-lay the harness grid.
- Regenerate the `-yours` variant and the four highlight-state variants.
- Export the six renders into `internal/renders/`.
- Close the open items on slides 2, 6, 7, and 19 by pointing at this brief.
- Run the section 9 checklist on the Windows machine.
