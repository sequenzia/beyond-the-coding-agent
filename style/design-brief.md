# Design brief

Visual and typographic decisions for the deck. Companion to `style/colors.md`, which holds the palette. Decided September 14, 2026. Revised the same day after the mockup gate, which replaced the monochrome typographic system with the system in sections 5 and 6. The mockup that passed the gate is at https://claude.ai/artifact/S6Yg8AQSPH1EMwW28Qvxms, eight states from seven slides at one point per pixel. Sections 23 through 37 define the current 48-slide authoring target, integrated into Markdown September 16. Section 37 defines the current opening and supersedes the Section 1 core layouts in §24. Sections 17 through 22 describe the earlier Section 2 layouts and exported deck. The builder now implements the new target; final rendering and native playback are reviewed with each exported revision.

## 1. Scope and precedence

- This brief owns every visual value: size, weight, color, position, stroke, radius, and animation.
- Slide files under `slides/` own the words, the build order, and the intent. They describe visuals in plain words such as "small," "strip," or "large," and section 10 resolves those words to values.
- Where a slide file and this brief disagree on a visual value, the brief wins.
- Where the brief cannot satisfy a slide file, the slide file's own fallback wording applies. Slide specs may name a fallback. Section 14 records the current layout decisions.
- A visual change goes into this brief. It does not go into a slide file.
- Three orientation devices: the kicker, the mini-map, and the narrative slide number. No other footer, logo, progress bar, employer name, contact details, or takeaway lines on screen.
- The brief carries no talk content. It names slides by number only.

**The concept.** The anatomy diagram is the talk's spine. Slides 9 through 14 introduce it, Section 2 walks six areas on it, and slide 46 returns to it with the six area colors and an area key. A mini-map at top right says where you are. Each area borrows its color from where it sits on the map and opens with a quote and colored kicker. Helvetica carries the narrative and numbering. Monospace marks commands, filenames, formulas, and the opening code metaphor.

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

**Layouts.** Two. "Kicker" has a text placeholder at the kicker position and a picture placeholder at the mini-map position, nothing else. "Blank" has nothing. Titles are text boxes at the fixed title position, not title placeholders, so nothing autofits.

**Settings.** Autofit off on every text box. Internal margins 0 on text boxes. Word wrap on. Image compression off (Preferences, General, Image Size and Quality: do not compress). Do not embed fonts; section 3 explains why.

**Defaults, set before building.** With Accent 1 set to pink, every new shape and every inserted table starts pink. Format one card as in section 6 and Set as Default Shape. Clear the table style on every inserted table before typing into it.

## 3. Type

### Faces

| Face | Weights | Use |
|---|---|---|
| Helvetica | Regular, Bold | everything that is not code |
| Consolas | Regular, Bold | commands, formulas, file names, the slide 1 lines, the `works.any()` / `works.all()` metaphor |

No other weight of either face. No italics anywhere. No Helvetica Light, no Helvetica Neue in any weight.

**Why Regular and Bold only.** Apple's Helvetica and Helvetica Neue are AAT collections in `/System/Library/Fonts`. PowerPoint for Mac reports them as "unsupported (AAT)" and will not embed them. Windows has neither, and its substitution table maps the name "Helvetica" to Arial. Arial shares Helvetica's character widths, so a deck set in Helvetica rewraps nowhere when Windows renders it in Arial. Helvetica Light has no Arial twin and its embedding flag is preview-and-print only. Helvetica Neue's Light, Medium, and Thin have no Arial twin, and Windows has no mapping for the name. So the deck is Helvetica on the Mac and Arial on Windows, in the two weights both machines share. Section 9 requires a test open on the Windows machine.

**Why Consolas.** It ships inside PowerPoint for Mac (`DFonts/Consola*.ttf`, four styles) and on every Windows machine. Nothing to install, nothing to embed. Menlo is Mac only. JetBrains Mono would need embedding and a test, and its wider advance would force slide 1 down to 64. Considered and declined at the gate.

### Scale

Eight sizes. The smallest serves diagram details and the narrative slide number.

| Role | Size | Face and weight | Color | Line spacing | Used on |
|---|---|---|---|---|---|
| Display mono | 72 | Consolas Regular, in the colored runs of section 5 | see section 5 | Exactly 84 | slide 1 build 1 |
| Area header | 60 | Helvetica Bold | the block's text color | Exactly 70 | the area name on the first state of slides 8, 10, 12, 14, 16, 18 |
| Display sentence | 44 | Helvetica Regular. Bold on the one landing sentence. Helvetica Regular for step numerals; Consolas Regular for formulas | primary. Step numerals secondary. Formulas blue | Exactly 52 | slides 3 and 26; the large quotes on 14 and 22; the four words on 10; step numerals on 17 and 24; the formulas on 16 |
| Slide title | 32 | Bold | primary | 1.15 | every "Title:" line; the four steps on 24; the heading on 25; "Questions" on 26 in Regular |
| Heading and body | 24 | Bold for build headings and table headers, Regular for body | primary. Table headers in the slide's color | 1.25 | build headings, numbered and plain lists, table headers, the slide 8 callout, card titles on 13 |
| Chip and compact | 20 | Regular. Bold for the kicker's area name, band labels, row labels, and the right cells on 21. Consolas Regular for commands | primary. Area color where section 6 names it. Blue for Consolas runs | 1.25 | kicker, pills, band text, table cells, row labels, card text, sublines, the beat line in an area header, the six entries on 25 |
| Small | 16 | Regular | secondary | 1.25. Exactly 20 on any line that carries a Consolas run | captions, stat lines, footer lines, attributions, quote attributions, ladder years, chip strips, the small line inside a card |
| Diagram fine and narrative number | 12 | Helvetica Regular. Badge text Bold | secondary. Badge text `#14161c` | 1.25 for the number; render spacing for diagram details | diagram subtitles; "yours" badges; narrative slide numbers |

### Floors

- **Reading floor, 20.** Anything the audience is expected to read from the back of the room is 20 or larger.
- **Present floor, 16.** Elements that exist to be on screen when spoken, or to orient. Captions, stat lines, footers, attributions.
- **Orientation floor, 12.** Diagram subtitles, badges, and narrative slide numbers only. The diagram is a map. The presenter names each region as it highlights, so its job is recognition, not reading, and 16 Bold titles on near-black recognize.

### Spacing and alignment

- Line spacing Exactly at 44 and above: 84 at 72, 70 at 60, 52 at 44. Helvetica and Arial twin on character widths but not on vertical metrics, so Multiple spacing moves a display line up or down on Windows. Exactly spacing removes the difference. Anchor top.
- Line spacing 1.15 at 32. 1.25 at 24 and below. Exactly 20 on a 16 line that carries a Consolas run, because Consolas is taller than Helvetica and would lift the line.
- Paragraph spacing 12 between 24 list items. 8 between 20 lines. 6 between 20 list items where a slide's budget needs it; section 4 names those.
- Left-aligned at the grid's left edge everywhere except slides 1, 3, and 26, and slide 4 build 2, which are centered blocks.
- Slide 1's two monospace lines sit in one centered text box with left-aligned paragraphs, so the equals signs align.
- Display lines get manual line breaks so breaks fall on meaning. Check every one on Windows, for vertical position as well as for the break.

### Emphasis

Slight emphasis is Bold at the same size. That is the only emphasis device in a line of text. A size step would change a line's rhythm and break band and row alignment. Bold keeps the line where it is.

Color is a role, not emphasis. Section 5 says which elements carry a slide's color. A word is never colored to stress it.

### Monospace

Commands, formulas, and file names are Consolas at the surrounding size. At 20 and above they are blue. Below 20 they stay primary and the face alone marks them. Slide 1's lines and the `works.any()` and `works.all()` echoes carry the runs in section 5.

## 4. Grid

### Margins and safe area

| Edge | Points | Inches |
|---|---|---|
| Left, right | 48 | 0.67 |
| Top | 36 | 0.50 |
| Bottom | 48 | 0.67 |

Safe area 864 by 456. Only the area header, the bands, the full-bleed diagram touch the edge.

### Columns

Six columns of 124 with 24 gutters, from x 48 to x 912.

| Span | Width | Inches | Used for |
|---|---|---|---|
| 1 | 124 | 1.72 | row labels on 9 and 18; the block of a pitfall band; each tread on 24 |
| 2 | 272 | 3.78 | the photo column on 2; each of three columns on 13; each ladder tread on 22; the smaller image on 8; the block of a band on 23 |
| 3 | 420 | 5.83 | each column of a two-column table on 4, 15, 16, 19, 20; each image on 10 and 12 |
| 4 | 568 | 7.89 | the larger image on 8; the text column on 2 |
| 5 | 716 | 9.94 | row content beside a 1-column label on 9 and 18; the kicker, title, and strip zones on a slide that carries the mini-map |
| 6 | 864 | 12.00 | full-width rows, pill rows, cards, the content zone everywhere |

### Vertical zones

The following original budget is retained for component context. Section 14 defines the current header boundaries and body positions.

| Zone | Top (y) | Height | Notes |
|---|---|---|---|
| Kicker | 36 (0.50 in) | 25 | x 48. Width 716 with a mini-map, else 864 |
| Mini-map | 36 (0.50 in) | 90 | x 752, width 160. Section 6 says where it is absent |
| Area header | 0 | 128 (1.78 in) | full bleed. The first state of 8, 10, 12, 14, 16, 18. Replaces the kicker and the title zone on that state |
| Title | 68 (0.94 in) | up to 76 | two lines of 32 at 1.15. Width 716 on slides with a mini-map |
| Strip | 68 (0.94 in) | 88 | where images land after shrink-to-strip: 138 by 88 each with 16 gaps, from x 48. A chip strip is one 16 line at y 68. Width 716 on slides with a mini-map |
| Content top | 156 (2.17 in) under a two-line title or an area header. Title bottom plus 24 under a one-line title, which is 128. 68 with no title. 100 under a chip strip. 164 under an image strip | | |
| Content bottom | 492 (6.83 in) without a band. 460 (6.39 in) with one | | |
| Pitfall band | 476 (6.61 in) | 64 (0.89 in) | full bleed, x 0 to 960, flush to the bottom edge. Block x 0 to 172. Sentence from x 196 |
| Stacked bands, slide 23 | 96 (1.33 in) | six of 56 with gaps of 8, ending at 472 | full bleed. Block x 0 to 320. Sentence from x 344 |
| Footer line, attribution | bottom edge at 492 | 20 | footer left at x 48. Attribution right-aligned to x 912 |

The pitfall band is flush to the bottom edge so geometry, not decoration, separates it from content. Its 64 height keeps the text more than 20 from the edge on a display that overscans. The area header is flush to the top edge for the same reason: a color field that stops short of the edge reads as a box, and a field that bleeds reads as a chapter.

### Band and row budgets

A row is a label and its content on one baseline. A row is 56 tall and holds one line, or two lines with 4 of padding. A row of pills is 33 tall per line plus 8 between lines. A card is its lines at 1.25 plus 24 of padding.

| Slide | Content zone | Rows | Total |
|---|---|---|---|
| 9 | 156 to 460, 304 available | 74, 56, 102, 33, three gaps of 8 | 289, ending at 445 |
| 10, strip state | 164 to 492, 328 available | heading 30, four words 52, stat 20, gap 12, heading 30, five lines of 20 at 6 spacing 149, six gaps of 8 | 341, over by 13. The last stat line is spoken, not shown, on this state |
| 18 | 100 to 492, 392 available | 56, 56, 56, 56, 108, four gaps of 8 | 364 |
| 23 | 96 to 492, 396 available | six of 56, five gaps of 8 | 376, ending at 472. With a seventh band: seven of 46, five gaps of 8, one gap of 24, ending at 486 |

Slide 9 uses replacement evidence states specified in the September 15 revision below. On slide 18 the last row is 108 because it holds the triangle at 96.

### Images

- **Photo, slide 2.** 144 (2.00 in) round at x 48, vertically centered on the text block. The spec's ceiling is a sixth of the width, 160. Round, because it is the only photo and a circle marks a person, not a screenshot. The 320 pixel source is over 2x at 144 and sharp at 1080p.
- **Two images side by side.** 3 plus 3 columns on 10 and 12. 4 plus 2 on 8, the larger on the left. Height up to 268 with a caption row beneath. Every screenshot gets a 1 hairline `#4c4d50` and a 4 corner radius so a light screenshot does not float on the dark ground. Captions are the attribution of section 6, 8 below, left-aligned to the image.
- **Strip form.** After shrink-to-strip, 138 by 88 each, 16 gap, from x 48 at y 68. No captions in the strip.

## 5. Color

### Roles

| Role | Hex | Derivation and rule |
|---|---|---|
| Background | `#14161c` | `style/colors.md` |
| Primary text | `#fffcf5` | `style/colors.md` |
| Secondary text | `#adaca9` | `#fffcf5` at 65% over the background. Use the solid hex, never text transparency, which renders inconsistently on some Windows builds and in PDF export. 65% rather than 60% because projectors crush dark grays |
| Surface | `#303236` | `#fffcf5` at 12%. Cards, the surface of every band, generic diagram boxes. 8% vanishes on a projector; 12% reads as a lift |
| Hairline | `#4c4d50` | `#fffcf5` at 24%. Screenshot borders, pill strokes, diagram containers |
| Pink | `#f948be` | the harness color. Context, Tools, Orchestration. The landing color in Section 1 |
| Blue | `#1064f8` | the model color. Models. Commands and formulas. The diagram's Model region |
| Green | `#01b66d` | the verification color. Evals. Section 3. `works.all()`. Cells on 21 that read as unchanged |
| Amber | `#fdad00` | the operating and warning color. Operating. `works.any()` |
| Blue tint | `#13223f` | blue over the background. The Model region fill and the area card on 9 |
| Pink tint | `#2b1b2c` | pink over the background. The Harness region fill and the area cards on 13 |
| Green tint | `#122926` | green over the background. Area cards in the Evals area, if a slide file ever names one |
| Amber tint | `#302819` | amber over the background. Area cards in the Operating area, if a slide file ever names one |

Tints fill area cards only. They never carry meaning alone, because 12% vanishes on a projector. A card's stroke, a block's fill, or colored text carries the meaning; the tint only lifts.

### Area colors

| Talk area | Slides | Color | Map home |
|---|---|---|---|
| Models | 8 through 12 | blue | Model |
| Context and knowledge | 13 through 17 | pink | Context and memory, Instructions, Data and knowledge |
| Tools and extensibility | 18 through 22 | pink | Tools |
| Orchestration | 23 through 27 | pink | Orchestration |
| Verification and evals | 28 through 32 | green | Verification, Evaluations |
| Production operations | 33 through 37 | amber | Identity and access, Security, Guardrails, Observability, Governance |
| Section 1 | 1 to 6 | pink for a landing word; slide 1 carries amber and green; slide 5 carries all four | |
| Section 3 content | 40 through 43 | green; slides 40 and 42 carry all four | |

Four colors for six areas because the three harness areas share the Harness region. Identity within the harness comes from which box the mini-map lights, not from a fifth and sixth hue.

### Text on a solid block

| Block | Text | Ratio |
|---|---|---|
| blue | `#fffcf5` | 4.9 |
| pink | `#14161c` | 5.8 |
| green | `#14161c` | 6.8 |
| amber | `#14161c` | 9.6 |

`#14161c` on blue is 3.6 and `#fffcf5` on pink is 3.1. Neither is used.

### Contrast on `#14161c`

WCAG ratios, rounded. AA is 4.5:1 for normal text and 3:1 for large text.

| Foreground | Ratio | Normal | Large | Rule |
|---|---|---|---|---|
| `#fffcf5` | 17.7 | pass | pass | any size |
| `#adaca9` | 8.0 | pass | pass | any size. Used at 16 and 12 |
| `#f948be` | 5.8 | pass | pass | any size. On the surface it drops to 4.1, so pink text inside a band is 20 or larger |
| `#1064f8` | 3.6 | fail | pass | text at 20 or larger only. Never at 16 or 12. Never on the surface, where it is 2.6. Strokes, blocks, and region tints at any size |
| `#01b66d` | 6.8 | pass | pass | any size |
| `#fdad00` | 9.6 | pass | pass | any size |
| `#14161c` on solid amber | 9.6 | pass | pass | the badge, the amber block |
| `#fffcf5` on solid blue | 4.9 | pass | pass | the blue block |

**Projector note.** Near-black crushes on projectors and blue is the dimmest accent. Test on the venue projector. If blue text fails: commands fall back to Consolas in primary, command pills keep their blue stroke, and the blue kicker and the blue table header stay because they are 20 or larger and Bold. The blue block's text is already light. If the blue block itself reads as a gray smear, the Models band on 9 and the Models band on 23 fall back to a surface band with a 6 wide blue edge at x 0 and the label in primary Bold.

### Where a slide's color goes

The rule that replaces a per-accent budget. A slide has one color, from the area table. That color appears on:

- **the orientation devices:** the kicker's area name, the lit box on the mini-map, the block on the band, the area header;
- **at most one content element:** the stroke and tint of an area card, the label of a labeled row, a table header, the window frame on 11, or a single colored word where a slide file names one.

Two fixed exceptions carry more than one color: slide 5's agenda line and slide 21's right column show the area names in their own colors, and slide 23's six blocks do the same. The two mono words `works.any()` and `works.all()` carry amber and green wherever they appear, on 1, 4, 17, and 23, because they mean the same thing everywhere.

Slides 3, 6, 20, 25, and 26 carry no color. Slide 26 stays up for 15:00 and must be calm.

## 6. Components

Each entry gives size, weight, color, position, and build behavior.

**Narrative slide number.** Editable text on every physical slide, including titles, dividers, and full-bleed diagrams. Plain 1 through 26, without leading zeros, suffixes, or a total. Every continuation carries the same narrative number. Helvetica Regular 12, secondary `#adaca9`, right aligned, 1.25 line spacing. Box x 928, y 512, width 20, height 16. Zero internal margins. Add after all content so images and bands cannot cover it. Visible from the first state, with no entrance or exit animation. This component sits outside the content safe area.

**Kicker.** 20. Area name Bold in the area color, beat Regular secondary, a middle dot with a space on each side between them. x 48, y 36. Width 716 where a mini-map is present. On slides 8 through 19 and 21 through 24; on Section 3 slides the area name is "The transition" in green. Absent on full-bleed diagram states and on the header state of a "When you are the user" slide, where the area header is the kicker at large scale. Static, present from the slide's first state otherwise. The area name is the part that carries color because the beat is the part that changes within an area, and the color and weight together make the area visible from the back.

**Mini-map.** A PNG at x 752, y 36, 160 by 90, from `internal/renders/`. The current area's box or boxes filled in the area color, every other box an outline. On the area content states of slides 8 through 19, and on slides 21, 22, and 24. `mini-all`, every area lit in its own color, on 21, 22, and 24. Absent on slide 7, on slide 16's blank state, on slide 19 build 3, on slide 23, and on the header state of each "When you are the user" slide, where it appears with the shrink. Swapped by placing a different PNG at the same numeric position on each slide, never Morphed: Morph is a slide transition and would cross-fade the title and kicker on every area boundary. Same x and y on every slide, entered in the Format pane, so it does not jump.

**Area header.** The first state of slides 8, 10, 12, 14, 16, and 18. A rectangle at x 0, y 0, 960 by 128, filled in the area color, no line. Inside at x 48: the area name at 60 Bold, Exactly 70, top 22, one line; "When you are the user" at 20 Regular, top 92. Both in the block's text color. The longest name, "Tools and extensibility," is about 830 wide at 60 Bold and fits; if the Windows render wraps it, the header drops to 56 on that slide only. On the shrink-to-strip click the header's fill exits and its text becomes the kicker: the same text box, resized and recolored, so Morph carries it. Fallback: Disappear plus Appear of the kicker. The mini-map appears with the strip.

**Pitfall band.** Full bleed at y 476, 64 tall, fill `#303236`, no line. At its left a rectangle at x 0, 172 wide, 64 tall, filled in the area color, no line, holding the word "Pitfall" in 20 Bold at x 48, vertically centered, in the block's text color. The sentence in 20 Regular primary from x 196, vertically centered. The last build on slides 9, 11, 13, 15, 17, and 19. Fade 0.3 on entry. On slides 15 and 19 the band and its block grow to 96 tall and start at y 444, holding the extra element on the surface part: on 15 a second row of 16 secondary, on 19 the triangle at 64 tall in the right two columns, both in their usual colors because they sit on the surface, not on the block. There is no "beneath" a band that is flush to the edge.

**Stacked bands, slide 23.** Six bands of the pitfall band's construction, 56 tall, from y 96 with 8 gaps, ending at 472. The block is 320 wide because "Orchestration" needs it. The block holds the area name in 20 Bold, not the word "Pitfall." Blocks in order: blue, pink, pink, pink, green, amber. The sentence from x 344. Three pink blocks in a column read as a legend; three solid pink bands would read as an error, which is why the color is in a block and not across the band. If the seventh pitfall becomes a second build, it is a seventh band with no block, 46 tall like the six above it on that state, set apart by a 24 gap, with its sentence from x 48.

**Labeled row, slides 9 and 18.** A label in one column, 20 Bold in the area color, top-aligned with 4 of padding, and content in the five columns beside it from x 196. Row heights in section 4.

**Card.** Fill `#303236`, radius 8, no line. Padding 12 top and bottom, 16 sides. Autofit off, wrap on. Text 20 Regular primary; a card title on 13 is 24 Bold. A card and its text are one group and enter together. Fade 0.2. For the window's inner boxes on 11, the two incidents on 13, the three steps on 17, the four steps on 24. Set one as the default shape (section 2). Fix the card height per slide so the corner radius, which PowerPoint computes from the shorter side, is uniform across a row.

**Area card.** A card with the area tint as fill and a 2 line in the area color. The picture of an area: the two matched boxes on 9 build 3 and the three action classes on 13 build 2. On 13, authorization spans all three cards below the row.

**Pill.** A rounded rectangle at full radius with a 1 line in `#4c4d50` and no fill. Padding 4 top and bottom, 12 sides. Text 20 Regular primary, wrap off, resize shape to fit text, anchored middle. 33 tall. Placed by hand with 8 gaps; a row that exceeds 864 wraps to a second line with 8 between lines. Fade 0.2. Command pills: a 1.5 line in blue, Consolas 20 blue text. For the rows a slide file calls chips or items in a row: 9 build 1, 11, 13 build 1, 14, 15, 18 build 1. Slide 15's eight-chip row may take three lines; if the slide's budget does not hold it, that row reverts to dot-separated 20 text. After shrink-to-strip a pill row becomes one 16 secondary dot-separated line at y 68, commands in Consolas 16 primary. Sublines, agenda lines, and band content stay dot-separated text.

**Two-column table.** Headers 24 Bold in the slide's color. Cells 20 Regular primary. Columns 3 plus 3, 420 each. Row gap 12. On slide 4 use the three-row revision specified below. No rules, no fills. A "small" line under a column is 16 secondary, left-aligned to that column. Clear the table style before typing (section 2). Fix row heights taller than the text so Arial's taller line pitch cannot grow the table on Windows. On slide 21 the right column is 20 Bold in the area color of the thing it names, and the rows that read as unchanged are green. Slide 13's three-column table is three area cards.

**Gutter numeral.** Helvetica Regular secondary. At the list size on 4 and 5, with a 40-point gutter. At 44 on 17 and 24, with a 72-point gutter. Slide 23 carries no numerals.

**Attribution.** Helvetica 16 secondary, without a decorative prefix. Line spacing Exactly 20. Commands and filenames inside a caption remain Consolas 16 primary. Stat lines use the same plain treatment.

**Quote, large.** 44 Regular primary, left-aligned, typed quotation marks, manual line breaks, Exactly 52. Attribution as a attribution, 12 below. No bar, no glyph, no italics.

**Quote, small block.** 20 Regular primary. Attribution as a attribution, 8 below.

**Stat line.** 16 Regular secondary, 8 below the element it supports. No prefix.

**Callout, slide 8.** 24 Bold primary, 24 above, its own Appear. No band, no fill.

**Caption.** A attribution, 8 below the image, left-aligned to it.

**Footer line, slides 5 and 12.** 16 Regular secondary, x 48, bottom edge at 492, full width. On 5 the six area names in the agenda line are each in their area color, Regular, and the line is otherwise secondary.

**Attribution, slide 1.** A attribution, right-aligned to x 912, bottom edge at 492. On the title state the name line is 16 secondary at bottom left. An optional conference line is 16 secondary at bottom right and exits with the title.

**Slide 1 display mono.** One text box, centered on the slide, left-aligned paragraphs, Consolas 72, Exactly 84. Runs: `demo` and `product` secondary, the padding spaces and `=` secondary, `works` primary, `.any()` amber, `.all()` green. About 830 wide in Consolas. The same runs at the surrounding size wherever the two words return.

**Formulas, slide 16.** Consolas 44 blue, the caret visible, Exactly 52.

**Photo, slide 2.** As in section 4. Convert `internal/profile-320.webp` to PNG before inserting. Older Windows builds show WebP as a broken picture.

**Section dividers, slides 6 and 20.** Shared dark typographic composition. Label at x 48, y 168, width 864, height 25, Helvetica 20 secondary. Neutral rule at x 48, y 208, width 864, height 1 in hairline color. Title at x 48, y 232, width 864, height 140, Helvetica Bold 60 primary, Exactly 70. Both use the same title position. Manual line break on slide 6 after "engineers". No mini-map or internal builds. Hard cuts into and out of both.

**"Yours" badge.** Diagram only. An amber pill, text `#14161c` Bold 12, pill 18 tall, 8 side padding, full radius, straddling each box's top-right edge half above and half inside. On every box except Goal. The Harness container carries none, because its six boxes carry theirs and a container badge collides with the Agent description. The Model box reads "yours to select" and the badge widens to fit; whether it reads plain "yours" is the slide 19 open item and is a one-word change in the generator.

**Full-bleed diagram, slides 7 and 19.** A PNG at x 0, y 0, 960 by 540. Section 8.

**Small custom diagrams.** Strokes 2 secondary `#adaca9`, arrowheads the same. Labels 20 Regular primary. No icons, no fills, no color. The slide files ask for these to stay plain, and they do.

- Window frame, slide 11: a 2 rectangle in the area color with radius 6. The frame label 16 secondary straddling the top-left edge. Inner boxes are cards. Draw it so it reads as a fixed-size box. The frame is the slide's one content element in color.
- Ring, slide 14: three labels on a circle, three arrows.
- Loop, slide 16: four labels in a row, three arrows.
- Triangle, slides 18 and 19: 96 tall on 18 with corner labels at 16 and its sentence at 20 beside it. 64 tall on 19 inside the band, on its surface part. Slide 19's triangle and all three labels move 32 left from the section 13 coordinates, preserving their arrangement and clearing the narrative number.
- Ladder, slides 22 and 24: treads as 2 horizontal lines rising to the right, secondary. Label 20 above each tread, year 16 secondary below. On 24 six treads of one column each, or one line of six words at 20 if the treads do not fit.

**Blank slide, slide 16.** Background only. No kicker, no mini-map. Transition None.

**Optional QR, slide 25.** 112 square, bottom right at x 800, y 380. Dark modules `#14161c` on a `#fffcf5` tile with an 8 quiet zone. Dark on light because scanners fail on inverted codes.

## 7. Builds and transitions

| Spec word | PowerPoint |
|---|---|
| Slide transition, every slide | None. "Hard cut" means this |
| Build, default, text | Appear, On Click, 0 s |
| Build, images, cards, pills | Fade, On Click, 0.2 s |
| Build, the pitfall band | Fade, On Click, 0.3 s |
| Exit | Boundary between consecutive physical slides. The outgoing objects are absent from the next slide |
| "Replace, do not overlay" | Consecutive physical slides with transition None. Objects visible at the boundary appear immediately. Later non-overlapping reveals retain their click order and effects |
| "Shrink to a strip" | Duplicate the slide. On the copy, resize the objects into the strip zone, turn the area header into the kicker, and add the mini-map. Set the copy's transition to Morph, 0.5 s. Name the copy with a "b" suffix in its notes so the slide file's build count still maps. Fallback if Morph misbehaves on Windows: Disappear plus Appear of the strip version |
| "Dim" the diagram, slide 7 | Six consecutive physical slides, one PNG each: full brightness, Model, Harness, per-run, across-runs, full brightness. Hard cuts throughout |
| Slide 19 build 3 | A separate slide with transition None, holding the "yours" render. A full-bleed image replacing everything is more robust as a slide than as a build with many exits |

Words cut, pictures fade. A card and its text are one group so the text does not appear before its card. No other effects. No Fly, Wipe, Zoom, Push, Split, Bounce, or sound. Nothing over 0.5 s. Morph nowhere except the shrink-to-strip copies, because Morph is a transition between slides and cross-fades every unmatched object, which would blur the hard cuts the deck relies on.

The deck has 26 narrative slides, 28 authored compositions, and 56 physical PowerPoint slides. The compiler splits each composition at every finite object exit. The first segment keeps the authoring key; later segments append the original boundary, for example `12b-c1`. Morph applies only to the first segment of the remaining destination, source 22b. There are 57 presentation states, one internal click, and 56 advances. Narrative numbers, original keys, state intervals, and physical indices are recorded in build maps and speaker notes. The 35:00 timing stays unchanged.

## 8. Diagram re-theme

**Source of truth.** `internal/anatomy-of-an-agentic-ai-system-landscape.svg`, hand-edited, in the dark theme below, with a `<g id>` per layer. Every active diagram file is generated from it by `internal/build-diagrams.mjs`: the `-closing` variant beside it, the four highlight states and seven mini-map variants under `internal/generated/`, and the PNG renders under `internal/renders/`. All variants follow the approved full map. The default command regenerates everything. Use `--full-only` when reviewing a future change to the full map before propagating it.

### Color mapping

| Element | Value |
|---|---|
| Canvas | `#14161c` |
| Title | 40 units (20) Bold primary. Kept in the SVG because slide 7 uses it as the slide title |
| Outer frame, One run, Agent containers | no fill. 2 unit (1) stroke `#4c4d50`. One run keeps its dash, 12 8. One run and Agent labels 40 units Bold primary. Descriptions 28 units (14) Regular diagram description color `#d7d5d0`. The outer frame has no label or description |
| Per-run and Across-runs row labels | 32 units Bold primary. No row descriptions |
| The 13 generic boxes | fill `#303236`, no stroke. Title 32 units (16) Bold primary. Subtitle 28 units (14) Regular diagram description color `#d7d5d0` |
| Model | fill `#13223f`, 4 unit (2) stroke `#1064f8`. Title primary. Subtitle diagram description color, two lines |
| Harness | fill `#2b1b2c`, 4 unit stroke `#f948be`. Label `#f948be`. Description diagram description color. The six inner boxes as generic boxes |
| Goal | no fill. 4 unit stroke `#adaca9`. Title primary. Subtitle diagram description color, two lines |
| Stopping condition | a generic box. Title 28 units Bold on three lines, the one exception to 32 |
| Arrows and the plus sign | `#adaca9`. Arrows 4 units with a 20 unit marker. Plus sign 56 units |
| Green | absent from the full map. Present only on the mini-map |

**Why this mapping.** Things get a fill and no stroke. Groupings get a stroke and no fill. So boxes and containers read differently at a glance. Model and Harness share one language, a tint plus a stroke, so the Model is not the loudest object on a slide whose subject is the harness. Goal stays neutral so slide 7 carries no amber and the badges are the only amber on slide 19. Blue on the Model extends the blue role from tools and commands to the vendor's component you select. Green stays out of the full map so it keeps its meaning on slide 21; the mini-map lights the Evals boxes green because there it names an area, not a state.

**Strokes and radii.** Hairline 2 units. Region and Goal strokes 4 units. Container radius 16 units (8). Box radius 10 units (5). Badge a full pill.

### Layout

The harness grid is re-laid so every 32 unit title fits on one line: two columns of 340 with a 16 gap, three rows of 90 with 12 gaps, inside a harness 730 wide. Model is 210 wide. The stopping-condition box is 270 wide, with its title centered on three lines. Goal is 300 wide with its subtitle on two lines. Model, Goal, and the stopping condition are 140 tall and share a center line with the harness. The exact coordinates live in the SVG, not here.

The full map retains the outer frame without the Platform heading or description. The per-run headings include "Identity & Access Management" and "External Data & Retrieval". The latter keeps "RAG, vector stores, connectors" as its subtitle. Per-run services and Across runs have no row descriptions. There are 33 units from the Per-run services heading baseline to its card row, and 25 units from that row's bottom to the dashed border. The Across runs heading baseline is 50 units below the dashed border, leaving space above the letters. This adds 16 units of breathing room below Per-run services and above Across runs compared with the first full-map revision. The execution contents and arrows move together to preserve their alignment. One run has 28 units of geometric clearance to Goal on the left, the stopping-condition box on the right, and Agent at the bottom. Typography, strokes, colors, and the internal harness layout are unchanged.

### Highlight states

A highlight state sets every layer group except the named one to opacity 0.3: `model`, `harness`, `per-run`, `across-runs`. The title dims with the rest. Generated, not hand-edited.

### Mini-map variant

A text-free variant of the base for the 160 by 90 mini-map. Same boxes and the harness container, nothing else. Outlines 18 units, which is 1.5 at 160 wide, in `#adaca9`, no fill. Box radius 14 units, container radius 20. The harness rows and the per-run and across-runs boxes are respaced so their gaps survive at a twelfth of the size: harness boxes 328 by 80 in two columns with a 40 gap and three rows with 26 gaps; the row boxes 560 wide with 48 gaps. The row positions, Goal, Model, stopping condition, and harness frame inherit their geometry from the base. The compact harness grid begins 17 units from the frame's left edge and 84 units below its top. A lit box is filled in its area color with no stroke. Seven states: `mini-models`, `mini-context`, `mini-tools`, `mini-orchestration`, `mini-evals`, `mini-operating`, `mini-all`, lighting the boxes the area table in section 5 names. Fallback if the mini renders read as clutter on the venue screen: a four-layer schematic drawn as four native rounded rectangles.

### Production path

1. Edit the base SVG. Keep the layer groups: `title`, `platform`, `per-run`, `one-run`, `goal`, `agent`, `model`, `plus`, `harness`, `stop`, `arrows`, `across-runs`. Keep the `box-` ids on the rectangles; the generator reads them for badges and mini-maps.
2. During full-map review, run `node internal/build-diagrams.mjs --full-only` to update only `internal/renders/map-full.png`. After approval, run `node internal/build-diagrams.mjs` to write the `-closing` variant, the highlight states, the mini variants, and every PNG. Both modes render through headless Chrome, which resolves system Helvetica. They need Node and Google Chrome and nothing else.
3. Renders: `map-full`, `map-model`, `map-harness`, `map-per-run`, `map-across-runs`, `map-closing` at 7680 by 4320, and the seven `mini-` files at 640 by 360, all in `internal/renders/`. Render full maps directly from the 1920 by 1080 SVG at device scale 4. Preserve the PNG bytes and disabled image compression in the deck.
4. Confirm the render is Helvetica and not a fallback face by comparing a title against the deck.

**High-resolution readability, September 16, 2026.** Full maps use 8K renders for 5K and 6K displays. Descriptions grow from 24 to 28 SVG units and use solid `#d7d5d0`; component headings, geometry, wording, and 0.3 inactive-layer opacity stay unchanged. The Model label is primary light text inside its blue outline. Tag every description with `class="diagram-description"` so the closing variant can omit descriptions independently of typography. Mini-maps stay text-free at their existing resolution. The original 12-point diagram-description exception is superseded by this 14-point rule.

**Why PNG rather than importing the SVG and converting to shapes.** Conversion maps the font to Helvetica Neue, which is banned. It drops or distorts `marker-end` arrowheads. It turns centered text into left-aligned boxes that shift on Windows. And it yields about 80 shapes that must be regrouped by hand after every edit.

**Why PNG rather than a native PowerPoint rebuild.** PowerPoint has no group opacity, so four dim states means setting fill, line, and text transparency on 80 objects four times. And the SVG would stop being the source of truth that `CLAUDE.md` names. The same reasoning rules out a native mini-map.

## 9. Cross-platform checklist

All on the Windows machine that will present, with the PowerPoint build it will use, before September 17.

1. Slide size reads 13.333 by 7.5 inches.
2. Home, Replace, Replace Fonts lists only Helvetica and Consolas. No Helvetica Neue, Light, or Medium. Helvetica shows as substituted by Arial.
3. Line breaks match the Mac on slides 1, 3, 9, 14, 18, 22, 23, 24, and 26. Photograph each on both machines and compare, for vertical position as well as breaks; the display sizes use Exactly spacing so they should not move.
4. Consolas renders Regular and Bold. The equals signs on slide 1 align. The caret on slide 16 shows. Decorative numbering is Helvetica and attributions have no prefix.
5. No font embedding warning on open.
6. Every image displays. The slide 2 photo is PNG, not WebP. No SVG remains in the file.
7. The six diagram renders and the seven mini-maps are sharp at full screen and were not recompressed on save. The mini-map sits at the same position on every slide that carries it.
8. Slide 7: five advances traverse six physical slides, showing four highlight states and a return to full brightness in order, with hard cuts and no flash of the base between states.
9. Morph plays on the shrink-to-strip slides (8, 10, 12, 14, 16, 18, 22), and on 8 through 18 it carries the area header into the kicker. If it plays as Fade, accept it or switch to the replace fallback.
10. Slides 6 and 20 show matching typographic section dividers, with hard cuts into and out of each and no internal builds.
11. Every transition outside the seven shrink-to-strip copies is None. Advance through the whole deck with the clicker to be used on stage.
12. On the venue projector: the surface fill of the bands is visible; the light text on the blue block on 9 and 23 is legible; the lit box on the mini-map reads from the back row; blue commands and blue pills are legible. If not, apply the fallbacks in section 5.
13. No table opened with pink banding. No shape opened with a pink fill it should not have.
14. Presenter view shows notes on the laptop and slides on the output.
15. Export a PDF from the Windows machine as the emergency copy. Carry the .pptx on a USB drive and a cloud link.
16. Every physical slide shows its narrative number. Continuations repeat it. Slide 19's triangle clears the number. Editing mode shows only one replacement segment at a time.

## 10. Vocabulary map

Slide files use these words. This table resolves them so slide files never need editing for visual reasons.

| Spec word | Value |
|---|---|
| "small" | 16 secondary |
| "large," "large type," "set it big" | 44 |
| "large enough to read from the back" on slide 1 | display mono, 72 |
| "single row, large, evenly spaced" | 44, four words, space-between across 864 |
| "title" | 32 Bold |
| "heading" | 24 Bold |
| "kicker" | section 6, 20, area name in the area color |
| "chip," "chips in a row," "chips in two rows," "items in a row" | pill, section 6 |
| "one indented line" on slide 5 | dot-separated 16 text, names in area colors |
| "band," "strip across the bottom," "same label style," "same visual treatment as the bands" | the pitfall band, or the stacked bands on 23 |
| "set apart" on slide 23 | a seventh band, no block, 24 gap |
| "labeled down the left edge," "labeled bands" on slides 9 and 18 | labeled row |
| "two matched boxes" | area card |
| "one word each" on slide 13 | area card, 24 Bold title |
| "visibly attached," "small line under," "beneath the third column, small" | 16 secondary inside the card |
| "sits under them, smaller" | stat line |
| "strip along the top" | the strip zone at y 68 |
| "quote large, attribution small" | 44 and a attribution |
| "attributed small," "caption strip," "caption" | attribution |
| "numbered," "the numbers matter" | gutter numeral at the list size |
| "step number large" | gutter numeral at 44 |
| "not bullets," "set as sentences," "set as quotes" | plain text, no marker of any kind |
| "plain list" | plain text, no marker |
| "slightly more weight," "a slight weight difference" | Bold at the same size |
| "no table rules," "no rules between rows" | the two-column table component |
| "should look like Section 2's kickers" on slide 21 | 20 Bold in the area color |
| "monospace face" | Consolas at the surrounding size |
| "monospace face with the caret visible" | formulas, 44 blue |
| "hard cut," "no transition effect" | transition None |
| "replace, do not overlay" | consecutive physical slides with a hard cut |
| "dim" | the 0.3 opacity state in a render |
| "full brightness" | the `map-full` render |
| "the diagram," "the landscape SVG" | a PNG from `internal/renders/` generated from the SVG |
| "frame labeled the window," "inner boxes" | window frame in the area color with cards inside |
| "yours badge" | section 6 |
| "cropped round or square" | round, 144 |
| "calm" | no color, no mini-map, no band |

## 11. Spec lines this brief cannot honor as written

Recorded here. Slide files are not edited for visual reasons. A follow-up may close their open items by pointing at this brief.

- **Slide 7, "24 to 28 point."** Counts SVG units. Corrected in section 8; titles rise to 16 points and the harness grid is re-laid.
- **Slide 8, "without a progress bar."** The mini-map is a second orientation device beside the kicker. Chosen at the gate.
- **Slide 9, "a row of six short labels."** Six pills are about 1400 wide. Two lines of three.
- **Slide 10, builds 2 and 3 on one state.** The heading, the four words, a stat line, a heading, and five lines at 24 need about 400 against 328 available under the strip. The list is 20 at 6 spacing and the second stat line is spoken on that state.
- **Slide 15, eight chips.** Three lines as pills, or dot-separated text. The budget decides.
- **Slide 16, the first state under the header.** About 360 of content against 336 available. The loop shortens or the quote drops to 20.
- **Slide 18, "Do not let them wrap."** The Observability line needs about 1040 and the Guardrails line about 1250 against 864 available. Only 16 would fit, and 16 is below the reading floor. A 56 row holds two lines, so one wrap per row is permitted. If single lines are wanted, the spec's own remedy applies: cut Guardrails items first. The size never drops below 20.
- **Slides 15 and 19, an element "beneath" or "beside" the band.** The band is flush to the bottom edge. Those two bands grow to 96 and hold the element on the surface part.
- **Slide 25, italic book titles.** No italics under the weight rule. Set in Regular with no marks. Articles keep the quotation marks the spec already gives them.
- **Slide 2, the WebP photo.** Convert to PNG.
- **Slide 1, the optional conference line.** No template decides it. The position is given in section 6; whether it appears is the presenter's call.
- **Slide 1, "large enough to read from the back."** 72 is the ceiling; 80 overflows the safe width in Consolas.
- **Slides 7 and 19, "review colors, type, badge color, and placement against the deck template."** Answered by sections 6 and 8.
- **Shrink-to-strip and slide 19 build 3.** Each needs an extra PowerPoint slide. The audience sees no difference.

## 12. Follow-up work this brief specifies but does not do

- Close the open items on slides 2, 6, 7, 18, 19, 23, and 24 by pointing at this brief: slide 18 is chips only, since the header and five rows leave no room for a screenshot; slide 24's sublines are off, or the ladder is one line of six words, since four cards with sublines and a six-tread ladder do not fit in 336; slide 23's seventh band is specified above and whether it appears stays with the outline.
- Build the deck in the order that pays off first: the slide master with its defaults, the six "When you are the owner" slides, the six "When you are the user" slides with their headers, then 1, 5, 21, and 23, then the rest. Slides 3, 6, 20, 25, and 26 last.
- Run the section 9 checklist on the Windows machine.
- If time runs short, cut in this order: attributions; pills beyond 13 and 14, reverting to dot text; Fade on cards and pills, reverting to Appear; mini-map detail, falling back to the schematic. Never cut the colored kickers, the area headers, the bands, slide 23, the cards, slide 1's runs, slide 21's cells, or slide 5's names.


## 13. Essential-corrections layout revision, September 15, 2026

This is the earlier evidence-layout revision. Section 14 supersedes its geometry and records the current source keys and slide counts. The palette, six-column grid, and type scale remain.

- **Area labels.** Full header beat and compact kicker use “When you are the user”. Owner kickers use “When you are the owner”. All remain 20. The agenda footer uses the two labels with the engineered bridge, at 16. No changed filenames.
- **Slide 4.** Editable two-column comparison at x 48, y 68, width 864. Header 24 with 90 height. Three data rows of 94, 82, 100. Each data cell stays 20 with deliberate line breaks. The existing commitment click replaces the table.
- **Slide 9.** Keep five clicks. Select at y 160 and Measure at y 270 enter on clicks 1 and 2, then both exit on click 3. Replace uses two blue area cards at x 48 and 492, y 192, 420 by 110, titles 24 and bodies 20. A variation note at y 314 is 20. The prime/composite result sits at y 374 in 20, followed by a 16 source and scope line at y 438. All Replace content exits on click 4. Route label at x 48, y 156 in 20 Bold blue. Scope/date at x 196, y 158 in 16. Route uses a native three-column table at x 48, y 196, width 864, column widths 360, 180, 324. Header row 50, data rows 32. Text 20 throughout, header Bold blue. Run-variation qualifications at y 346 in 16 with 40 height. Cost-denominator note at y 398 in 16. Product-quality question at y 436 in 20 Bold. The pitfall remains y 476 on click 5.
- **Slide 10 strip.** Failure vocabulary exits on its next click. Engineered context content uses x 48, y 174: heading 24, policy summary at y 216 in 20, RAG definition at y 258 in 24, methods at y 332 in 20, cache lesson at y 382 in 20, attributed price example at y 452 in 16. Keep the six screenshot placeholders across the deck, with identical object names in their full-size and strip pairs.
- **Slide 11.** The two corrected risk sentences remain at y 385 in 24, with 90 height. The pitfall begins at 476.
- **Slide 12 strip.** The design list uses 24 with enough row height for two-line entries. Evidence uses 32 for the tool-description claim, deliberately broken into two lines at y 194 with 84 height, and 24 for the scoped five-server example at y 304. Keep the protocol footer at 16.
- **Slide 13.** Three area cards at x 48, 344, 640, y 211, 272 by 148. Card headings 20 Bold, up to 50 high. Body at y 277 in 20, up to 70 high. Authorization line at y 374 in 20; model-recommendation qualification at y 412 in 16. Evidence replaces the cards and policy lines. CamoLeak card at y 184, 140 high; secondary audit card at y 340, 108 high.
- **Slide 14 multi-agent state.** Two separately labeled comparisons at y 148 and 270 in 32, with source/date at y 420 in 16. Shared-context limitation at y 372 in 24. The acceptance-criteria line uses 24 and a 120-high box at y 320.
- **Slide 15 forecast.** Keep the expanded pitfall band. Its lower line says forecast and stays 16, within a 42-high text box at y 486.
- **Slide 16 grader.** Use 32 Bold heading at x 48, y 146, 864 by 80. Illustration label at y 230 in 16. Claim at y 260 in 24. Result and trace checks at y 306 and 399 in 20. Fail result at y 367 in 20 Bold. Keep all within the current replacement click. The last state has three lines in 32, no statistics except the 20-to-50 case count.
- **Slide 17.** Responsibility sentence at y 184, 864 by 84 in 32. Example lines at y 295 in 24. Three cards stay on the existing grid. Migration line uses 24 at y 405. The longer pitfall uses the standard 64 band, 20 text, with a 52-high sentence box at y 480.
- **Slides 18 and 19.** Both triangles use capability labels. On 18, triangle strokes remain within x 165 to 368, y 382 to 450. Give Untrusted content x 48, width 208 and External communication x 288, width 204, both at y 462 in 16. The adjacent risk statement at x 492, y 376 uses 20. Identity and governance rows use 20. On 19, the expanded 96 band keeps the pitfall sentence at x 196, width 390 in 20. Triangle strokes run between (744,466), (668,490), and (824,490). Labels: Private data x 696, y 444; Untrusted content x 588, y 506, width 156; External communication x 748, y 506, width 196. All labels 16. The native table starts y 136 with row heights 44, 65, 44, 44, 78. The disclosure cell wraps to three lines at 20.
- **Slide 22.** Remove gutter numerals and ranking. Seven equal-weight entries remain in current order at x 48, y 112, 864 wide, 52 spacing, size 20. The existing ladder and quote states remain.
- **Slide 23.** Six standard stacked bands remain. Widen the sentence field by reducing the area block to 272 and starting text at x 296, width 616. Text remains 20. Evals uses a 76-high band; the other five are 56 high, with 8 gaps. Starts: 96, 160, 224, 288, 352, 436. The final band ends at 492. This keeps the full eval pitfall readable without shrinking type.

**Deferred.** All six screenshot placeholders remain. Story #2 remains a 60-second personal-story slot over the final slide 16 state. No resource content, destination, or QR changes are made in this pass.


## 14. Header spacing and section transitions, September 15, 2026

This section supersedes earlier vertical budgets. The deck has 26 narrative slides and 34 authored compositions, expanded to 64 physical slides by section 7. The support keys are 08b, 10b, 12b, 14b, 16b, 18b, 19b, and 22b. Timing stays 35:00: Section 1 5:00, Section 2 25:00, Section 3 5:00.

### Shared header

`slideHeader()` in `internal/deck/author.mjs` owns header geometry. Keep the kicker at x 48, y 36 and the mini-map at x 752, y 36, 160 by 90. Titles start at y 68. Screenshot strips remain at y 68, 138 by 88, with stable matching object names for Morph.

The neutral divider uses x 48, width 864, height 1, hairline color. Its top is 12 below the reserved header boundary. Body content starts 24 below its top.

| Variant | Reserved boundary | Divider y | Body y |
|---|---:|---:|---:|
| Title, mini-map, or compact screenshot strip | 156 | 168 | 192 |
| Full-color area header | 128 | 140 | 164 |
| Compact kicker, pitfalls recap | 64 | 76 | 100 |
| Resources title | 110 | 122 | 146 |

Use the shared header on every Section 2 and 3 content state. Full-screen anatomy graphics, both section dividers, and the closing statement keep their standalone compositions. Body content ends by 492 without a band, 460 above a standard band, and 428 above an expanded band. Retain the 20 reading floor and 16 caption floor. Reflow content or replace a state before reducing type.

### Revised body budgets

- Full-size screenshot placeholders start at y 164. Keep the existing dimensions and paired object names. Captions follow 8 below.
- Slide 8 strip: heading y 192, list y 235 at 37 spacing, callout y 450.
- Slide 9: Select begins y 192; Measure y 300. Replace label y 192; cards y 228, 110 high; qualifications y 350; dated task result y 410; source y 468. Route starts y 192, table y 230, qualifications y 386, cost note y 438. Its quality question replaces the route content on the pitfall click.
- Slide 10 strip: failure vocabulary, prompt/retrieval, and cache policy use separate body states. Headings start y 192. Cache example remains a 16-point attributed qualification.
- Slide 11: window label y 192, frame y 204, cards y 224, note y 334, policy pills y 375. The risk sentences replace these objects, starting y 192.
- Slide 12 strip: heading y 192; list y 236, 310, 354, 398. Evidence replaces the list; protocol footer stays at y 448.
- Slide 13: pills y 192; cards y 238, 148 high; authorization y 400; recommendation qualification y 438. Evidence cards y 192 and 348, ending by 456.
- Slide 14 strip: loop decisions y 192 and 234; quote y 192 with source y 360 and evidence y 402. Failure modes y 192, remedy y 360. Separate multi-agent comparisons y 192 and 294; limitation y 410; source y 458.
- Slide 15: definitions y 192, pattern pills y 326. Ownership list y 192, principles y 308, source y 370. Customer-facing sentences replace that state at y 192. Expanded band remains at y 444.
- Slide 16 strip: organizing caption y 192, native table y 230 with row heights 36, 65, 38, 55; graders y 442. Grader heading y 192; caption y 248; claim y 282; result y 330; fail y 392; trace y 442. Formulas y 192 and 302. Final lines y 192 at 98 spacing.
- Slide 17: cards y 192, 220 high; numerals y 204 in Helvetica 44; titles y 268; captions y 330; migration y 428, height 30.
- Slide 18 strip: Observability y 192, Guardrails y 290; replace both with Security, with its label y 192 and triangle between y 270 and 390. Identity replaces Security at y 192, Governance joins at y 300. Incident evidence replaces these rows at y 192, 90 spacing, 20-point text. Every incident keeps its scope and attribution.
- Slide 19: table y 192, row heights 36, 55, 32, 32, 78; ends y 425 before the expanded band. The full-screen yours state has no header.
- Slide 21: table y 192, row heights 36, 36, 36, 36, 36, 36, 56. Evidence replaces it at y 192; quote y 328; source y 446.
- Slide 22: ladder treads y 370, 300, 230. Strip competencies start y 192 at 42 spacing. Quote replaces them at y 192, source y 428.
- Slide 23: all six bands remain visible. Starts 100, 163, 226, 289, 352, 435. Heights 56 except Evals at 76; gaps 7. Last band ends at 491. Area block width 272; sentence x 296, width 616.
- Slide 24: four roadmap rows start y 192 at 67 spacing, height 59. The adoption arc replaces the rows, keeping its source visible. Numerals use Helvetica.
- Slide 25: all resources on one state, starting y 146, 25 per line and 8 between entries. Ends at y 486.

### Typography and transitions

Attributions carry no decorative `//` prefix. Numbering is Helvetica. Actual commands, filenames, formulas, and the `works.any()` / `works.all()` metaphor remain Consolas. Slides 6 and 20 use the identical section-divider component specified in section 6. Both boundaries use hard cuts. The seven existing Morph destinations remain. Replacement states use consecutive physical slides under section 7; non-overlapping additive reveals retain their existing effects.

## 15. Speaker notes

Build cues use native bold uppercase headings on their own paragraphs, with one blank paragraph before and after each heading when content is present. Keep the existing note font and size. Preserve must-say emphasis as native bold text. Export the talk track through its advance cue, without timestamps or metadata. The closing slide ends at the Q&A handoff.

## 16. FRB evidence layouts, September 15, 2026

This section supersedes the affected body layouts in sections 13 and 14. Preserve the shared header, palette, responsibility titles, kickers, mini-maps, and narrative numbers. All new evidence is native editable text or tables. The 20-point reading floor and 16-point caption floor remain. Illustration labels are captions, not footers. Preserve 34 authored compositions, 64 physical slides, 83 states, 19 internal clicks, seven Morph transitions, and 82 advances. No new reveal or replacement boundary.

- **Slide 7.** No visual change. Deliver the illustrative case setup over the existing final full-brightness state.
- **Slide 9.** The initial request has a 16-point illustration caption at y 192 and a 20-point text block at y 220, height 100. It stays through Select and Measure, exiting at click 3. Select and Measure are labeled rows at y 334 and 410, label x 48 and text x 196, body 20, height 60. Replace retains the two blue cards at y 228. Role-specific evaluation requirements sit below at y 356 and 408 in 20. Route uses a flat native four-column table at x 48, y 240, width 864, columns 236, 324, 144, 160. Header and cells 20, header Bold blue. Row heights 40, 56, 56, 56. A 16-point unmeasured-candidate caption is at y 202 and a 20-point routing line at y 462. The final state keeps the existing quality question and standard pitfall band.
- **Slide 11.** A 16-point illustration caption at y 192. Two excerpt columns at x 48 and 492, width 420. Document and location captions at y 224 in 16. Exact excerpts at y 256 in 24, height 124. A 20-point context-selection sentence at y 394, height 68, appears on click 2. The next state replaces the excerpts with three plain 24-point constraint paragraphs at y 224, 304, and 384, heights 64. Keep an illustration caption at y 192 and the standard pitfall reveal.
- **Slide 13.** A 16-point illustration caption at y 192. Background processing occupies y 220 in 20, height 50. A native three-column tool contract begins y 284, columns 216, 284, 364. Header and cells 20. Row heights 32, 36, 36, 36, 54. It appears on click 2, retaining the background line. The next state replaces both with three flat labeled results at y 228, 304, and 380. Labels 20 Bold pink at x 48, width 124; body x 196, width 716, 20, height 60. Standard pitfall reveal.
- **Slide 15.** The sequence uses six editable steps in two columns at x 48 and 492, three rows y 228, 300, 372. Numerals 24 in secondary; labels 24 with 50 height. Illustration caption y 192 in 16. Click 2 replaces the sequence with a 24-point optional-worker heading at y 224, evidence-return text at y 282 in 20, height 64, and retry/resume text at y 370 in 20, height 60. Click 3 replaces that state with bounded-operation text at y 224, 304, and 374 in 24, 24, and 20 respectively. The existing expanded 96-point band remains on click 4. Its lower line uses 16 at y 486, height 42, for the limitation principle instead of a forecast.
- **Slide 16 grader.** Keep the 32-point heading at y 192 and illustration caption y 244 in 16. Left excerpt column x 48, width 420. Source captions at y 278 and 368, 16. Quotes at y 306 and 396, 20, with 54 and 90 height. Right result column x 492, width 420. Observed label y 278, 20 Bold; answer y 310, 24, height 64. Failed-check heading y 384, 20 Bold, height 50. Expected distinction y 442, 20, height 50. Preserve the definitions, formula, final guidance, and protected story states.
- **Slide 17.** Build 1 uses an illustration caption y 192 and the two-column native table at y 230. Header 24, cells 20, row heights 36, 52, 52, 52, 52. Click 2 replaces it with three flat numbered rows at y 224, 300, and 376. Numerals x 48, 24 secondary; heading x 96, 24 Bold; subline 30 below, 20. The migration line appears at y 442 in 20 and the existing 64-point pitfall at y 476. A 16-point illustration caption remains at y 192. Flat rows replace the older cards so the improvement cycle is readable at the reading floor.
- **Slide 19.** Keep a native two-column table at y 192. Header 24, cells 20, row heights 36, 32, 32, 44. Trace sentence y 342 in 20, height 30. Monitoring lines y 380 in 20, height 50. The expanded pitfall and capability triangle retain their exact geometry and click. The yours diagram remains unchanged.
- **Slide 24.** The first state is unchanged. The assignment replaces it at the existing cut: heading y 192, 32 Bold, height 45; instructions y 256, 24, height 60. Illustration caption y 342, 16. Native four-column example at y 374, width 864, equal columns 216. Header and body 20, row heights 32 and 76, ending y 482. Hold this state for the existing 30-second story. No additional story advance.

Tables use the background fill, no banding, no visible borders, zero margins, top alignment, and 1.25 line spacing. Header color follows the area. Deliberate line breaks distinguish source identity, hypothesis, finding, and observed error. Do not shrink evidence to make room for additional inventory.

## 17. Models revision and Section 2 target pattern, September 15, 2026

This section replaces the first Models pilot. The target is five screens per area: one user example, a quote, general decisions with impact and starting guidance, maintenance with pitfalls, and a separate FRB application. Apply the revised layout only to Models now. Other areas retain their current visuals until their individual review. Reserve 0:20 for each quote within the area's existing time budget.

The deck now has 26 narrative slides, 33 authored compositions, 63 physical slides, 79 presentation states, 16 internal clicks, six Morph transitions, and 78 advances. Models uses five static screens with hard cuts. Source 08 is one screen. Source 09 has replacement boundaries at 1, 2, and 3, generating 09, 09-c1, 09-c2, and 09-c3. No Models content has an internal entrance animation.

### User screen

Preserve the blue area header and area divider. Screenshot placeholder at x 48, y 184, width 420, height 260, retaining the `!!screenshot-Devin Desktop` name. Explanation column at x 492, width 420. Headings at y 192 and 326, size 24 Bold. Bodies at y 236 and 370, size 24, height 64. One static composition with no mini-map or compact strip.

### Owner header and quotation

Retain the standard kicker, mini-map, divider, and narrative number throughout source 09. The quote screen has no extra title. The three content screens have distinct 32-point Bold titles at x 48, y 68, width 692, height 76. Replace titles together with the body on each hard cut.

Quote layout: quotation at x 48, y 192, width 568, height 216, Helvetica Regular 44 with exact 52-point spacing. Use deliberate four-line wrapping. Author attribution at x 48, y 428, width 568, height 28, Helvetica 20. Publication/date at y 462 in 16 secondary. Conceptual image at x 640, y 212, width 272, height 272. Use `internal/illustrations/models-in-system.png`, fit contain. Text stays editable and separate from the image. This two-thirds text, one-third image relationship is the shared quote-screen pattern.

Future quote images use the dark palette and the area's accent, one clear conceptual subject, and no embedded text, claims, or numbers. Models shows a component within a structure; Context shows selected information within limited space; Tools shows a clear interface; Orchestration shows a simple path and branching; Evals shows investigation of a failed result; Operating shows a visible execution trace. Produce each image during that area's review.

### Decisions

Three aligned rows start at y 192, 292, and 392. Question column x 48, width 272, height 82, Helvetica Bold 24. Explanation column x 344, width 568, height 82, Helvetica 20. Three lines per explanation, with the conditional starting guidance last. Use plain text on the slide background, without boxes, table rules, icons, or decorative numbering. General guidance only; no FRB content here.

### Maintenance and pitfalls

Three labeled rows at y 192, 254, and 316. Labels at x 48, width 216, height 30, Helvetica Bold 20 blue. Bodies at x 292, width 620, height 54, Helvetica 20. Whole-system qualification at x 48, y 386, width 864, height 30, size 20. Headline pitfall label at x 48, y 426, width 124, height 30, size 20 Bold blue. Pitfall sentence at x 196, y 426, width 716, height 64, size 24 Bold, with a deliberate line break after “models”. No bottom band. The sentence matches slide 23 exactly.

### FRB application

Illustration caption at x 48, y 192, width 864, size 16. Native two-column table at x 48, y 228, width 864, column widths 224 and 640. Header and cells 20, header Bold blue. Row heights 36, 56, 56, 56, ending at 432. Flat table styling from section 16. Closing reconsideration condition at x 48, y 440, width 864, height 52, size 20. Show a proposed starting design, not model scores or a winner.

All reading text remains at least 20. Content ends by 492. Preserve slide 23's existing geometry and type; its Models sentence fits the current row. Quote illustration generation details stay in `internal/illustrations/README.md`.


## 18. Context & Knowledge revision, September 15, 2026

Context now follows the five-screen pattern in section 17. This section supersedes earlier layouts for slides 10 and 11. Current deck counts: 26 narrative slides, 32 authored compositions, 62 physical slides, 75 presentation states, 13 internal clicks, five Morph transitions, and 74 advances. Source 10b is removed. Source 10 is static. Source 11 uses replacement boundaries at 1, 2, and 3, producing 11, 11-c1, 11-c2, and 11-c3. All five Context screens use hard cuts and show complete content immediately. The area's 3:30 splits 0:30, 0:20, 1:05, 0:50, and 0:45.

- **Slide 10.** Preserve the pink area header and divider. One AGENTS.md placeholder at x 48, y 184, width 420, height 260, named `!!screenshot-AGENTS.md`. No compaction image or compact strip. Explanations use the same positions and 24-point type as slide 8: x 492, width 420, headings y 192 and 326, bodies y 236 and 370, height 64.
- **Slide 11, shared.** Retain the context kicker, mini-map, divider, and narrative number. No extra title on the quote screen. Content titles use the same geometry and 32-point type as section 17. Replace each title with its body on a hard cut.
- **Quote.** Reuse the Models quote composition and deliberate four-line wrapping at 44 with exact 52 spacing. Attribute the organization at y 428 in 20 and publication/date at y 462 in 16. Image: `internal/illustrations/context-selection.png`, x 640, y 212, 272 square, fit contain. Quote and attribution stay editable.
- **Decisions.** Reuse section 17's three aligned rows at y 192, 292, and 392. Questions: x 48, width 272, 24 Bold, height 82. Explanations: x 344, width 568, 20, height 82. Three lines per explanation. No FRB content.
- **Maintenance.** Reuse the three labeled rows at y 192, 254, and 316, with 20-point body and pink labels. Cache qualification at x 48, y 386, width 864, height 30, size 20. Pitfall label at x 48, y 426, width 124, size 20 Bold pink. Sentence at x 196, y 426, width 716, height 64, size 24 Bold. No bottom band.
- **FRB application.** Illustration caption at x 48, y 192, width 864 in 16. Left excerpt column x 48, width 420. First source caption y 224, height 24, size 16. First quotation y 256, height 64, size 24, two lines. Second source caption y 330, height 40, size 16, two lines. Second quotation y 380, height 90, size 24, three lines. Right annotations x 492, width 420. Labels at y 224, 316, and 408, size 20 Bold pink. Bodies 30 below each label, size 20, height 54. Keep the source excerpts and annotations as editable text. Content ends by 492.

The image shows curation, not a measured capacity. Preserve the exact FRB identities and quotations. Slide 23 retains its Context sentence and geometry. All Models screens remain unchanged.


## 19. Tools & Extensibility revision, September 15, 2026

Tools follows the established five-screen pattern. This section supersedes earlier layouts for slides 12 and 13. Current deck counts: 26 narrative slides, 31 authored compositions, 62 physical slides, 71 presentation states, nine internal clicks, four Morph transitions, and 70 advances. Source 12b is removed. Source 12 is static. Source 13 uses replacement boundaries at 1, 2, and 3, producing 13, 13-c1, 13-c2, and 13-c3. All five Tools screens show complete content on entry and use hard cuts. The 3:00 area splits 0:25, 0:20, 0:55, 0:40, and 0:40.

- **Slide 12.** Preserve the pink area header and divider. One MCP configuration placeholder at x 48, y 184, width 420, height 260, named `!!screenshot-MCP configuration`. No approval image, mode captions, or compact strip. Explanations match slides 8 and 10: x 492, width 420; 24-point headings at y 192 and 326; 24-point bodies at y 236 and 370, height 64.
- **Slide 13, shared.** Retain the Tools kicker, mini-map, divider, and narrative number. No additional title on the quote screen. The three content titles use the same geometry and 32-point Bold type as section 17. Replace each title with its body on a hard cut.
- **Quote.** Quotation at x 48, y 216, width 568, height 164, Helvetica Regular 44 with exact 52-point spacing and three deliberate lines. Attribution at y 428 in 20; publication/date at y 462 in 16. Image: `internal/illustrations/tools-interface.png`, x 640, y 212, 272 square, fit contain. Quote and attribution remain editable.
- **Decisions.** Reuse the three rows at y 192, 292, and 392. Questions x 48, width 272, height 82, 24 Bold. Explanations x 344, width 568, height 82, size 20. Three lines per explanation. No FRB content.
- **Maintenance.** Reuse the three labeled rows at y 192, 254, and 316, with 20-point text and pink labels. Contract-enforcement sentence at x 48, y 386, width 864, height 30, size 20. Pitfall label x 48, y 426, width 124, 20 Bold pink. Sentence x 196, y 426, width 716, height 64, 24 Bold, with a deliberate line break after “surface”. No bottom band.
- **FRB application.** Illustration caption x 48, y 192, width 864, size 16. Native two-column contract table at x 48, y 228, width 864, column widths 224 and 640. Header and cells 20, header Bold pink. Row heights 36, 38, 56, 56, 56, ending at 470. Keep the flat table styling from section 16. Background parsing/indexing stays in the talk track, separate from this agent-facing export operation.

The illustration is a conceptual interface, not a physical product or architecture. Reading text remains at least 20; content ends by 492. Preserve slide 23's Tools sentence. Models and Context remain unchanged.


## 20. Orchestration revision, September 15, 2026

Orchestration follows the established five-screen pattern. This section supersedes earlier layouts for slides 14 and 15. Current deck counts: 26 narrative slides, 30 authored compositions, 59 physical slides, 66 presentation states, seven internal clicks, three Morph transitions, and 65 advances. Source 14b is removed. Source 14 is static. Source 15 uses replacement boundaries at 1, 2, and 3, producing 15, 15-c1, 15-c2, and 15-c3. All five Orchestration screens show complete content on entry and use hard cuts. The 3:30 area splits 0:30, 0:20, 1:05, 0:50, and 0:45.

- **Slide 14.** Preserve the pink area header and divider. One plan-mode screenshot placeholder at x 48, y 184, width 420, height 260, named `!!screenshot-Plan mode`. No command inventory, ring diagram, or compact strip. Two explanations match the preceding areas: x 492, width 420; 24-point Bold headings at y 192 and 326; 24-point bodies at y 236 and 370, height 64.
- **Slide 15, shared.** Retain the Orchestration kicker, mini-map, divider, and narrative number. No additional title on the quote screen. Content titles use x 48, y 68, width 692, height 76, size 32 Bold. Replace each title with its body on a hard cut.
- **Quote.** Reuse the Models quote composition: x 48, y 192, width 568, height 216, size 44 with exact 52-point spacing and four deliberate lines. Preserve the excerpt's lowercase opening. Attribution y 428 in 20; publication/date y 462 in 16. Image: `internal/illustrations/orchestration-path.png`, x 640, y 212, 272 square, fit contain. Quote and attribution remain editable.
- **Decisions.** Reuse the three aligned rows at y 192, 292, and 392. Questions x 48, width 272, height 82, size 24 Bold. Explanations x 344, width 568, height 82, size 20. Three lines per explanation. No FRB content.
- **Maintenance.** Reuse the three labeled rows at y 192, 254, and 316, with 20-point text and pink labels. Explicit budget sentence at x 48, y 386, width 864, height 30, size 20. Pitfall label x 48, y 426, width 124, 20 Bold pink. Sentence x 196, y 426, width 716, height 64, 24 Bold. No bottom band.
- **FRB application.** Illustration caption x 48, y 192, width 864, size 16. Six native editable numbered steps in row-major order: left column x 48, right column x 492, rows y 224, 280, and 336. Numerals 24 secondary, width 32, height 40. Labels start 48 to the right, width 372, height 40, size 24. Verification/limit sentence at x 48, y 392, width 864, height 30, size 20 Bold. Resume/retry rule at x 48, y 434, width 864, height 54, size 20, in two deliberate lines. No extra reveal or audience pause.

The quote image is conceptual and carries no measured comparison. Keep reading text at least 20 and body content within y 492. Preserve slide 23's Orchestration sentence. Models, Context, and Tools remain unchanged.


## 21. Verification and Evals revision, September 15, 2026

Evals follows the five-screen pattern. This section supersedes earlier layouts for slides 16 and 17. Current deck counts: 26 narrative slides, 29 authored compositions, 57 physical slides, 61 presentation states, four internal clicks, two Morph transitions, and 60 advances. Source 16b is removed. Source 16 is static. Source 17 has replacements at 1, 2, and 3, producing 17, 17-c1, 17-c2, and 17-c3. All five screens show complete content on entry and use hard cuts. The 5:00 area splits 0:30 user, 0:20 quote, 1:15 decisions, 1:55 maintenance including the 1:00 story, and 1:00 application.

- **Slide 16.** Preserve the green area header and divider. One test-run placeholder at x 48, y 184, width 420, height 260, named `!!screenshot-Test run`. Explanations use x 492, width 420; 24-point Bold headings at y 192 and 326; 24-point bodies at y 236 and 370, height 64. The user screen has no failure warning or internal reveal.
- **Slide 17, shared.** Retain the Evals kicker, mini-map, divider, and narrative number. No extra title on the quote screen. Content titles use the established x 48, y 68, width 692, height 76, size 32 Bold. Replace titles with the body on each hard cut.
- **Quote.** Three lines at x 48, y 216, width 568, height 164, size 44 with exact 52-point spacing. Both authors at y 428 in 20; publication/date at y 462 in 16. Image `internal/illustrations/evals-inspection.png` at x 640, y 212, 272 square, fit contain. Keep quotation and attribution editable.
- **Decisions.** Reuse the three aligned rows at y 192, 292, and 392. Questions x 48, width 272, height 82, size 24 Bold. Explanations x 344, width 568, height 82, size 20. Three lines per explanation. No FRB content.
- **Maintenance and story.** Reuse the three labeled rows at y 192, 254, and 316, with 20-point text and green labels. Result/trace instruction at x 48, y 386, width 864, height 30, size 20. Pitfall label x 48, y 426, width 124, 20 Bold green. Full pitfall sentence x 196, y 426, width 716, height 64, 24 Bold, with a deliberate line break between its two sentences. No band. Hold this general screen for story #2 without a reveal, extra slide, or visible story placeholder.
- **FRB check.** Illustration caption x 48, y 192, width 864, size 16. Left source caption x 48, y 224, width 420, size 16. Source quotation x 48, y 256, width 420, height 96, size 24, three lines. Reference result at x 48, y 386, width 420, height 30, size 20. Support result at y 424, same geometry, 20 Bold. Right answer label x 492, y 224, width 420, height 30, 20 Bold green. Wrong answer x 492, y 256, width 420, height 64, size 24, two lines. Expected label at x 492, y 350, width 420, 20 Bold green; expected text at y 384, height 64, size 24, two lines. Regression instruction x 48, y 460, width 864, height 30, size 20. PASS and FAIL are explicit words, not color-only signals.

The source-support check is invented teaching material. Keep the citation and exact excerpt attached. Story #2 stays separate from this illustration. All reading text remains at least 20 and content ends by 492. Earlier areas and the slide 23 pitfall wording remain unchanged.


## 22. Operating it and completed Section 2 pattern, September 15, 2026

All six areas now use the five-screen pattern. Operating it adds the existing yours diagram as the section wrap. This section supersedes earlier layouts for slides 18 and 19 and the agenda's pattern line. Current deck counts: 26 narrative slides, 28 authored compositions, 56 physical slides, 57 presentation states, one internal click, one Morph transition, and 56 advances. Source 18b is removed. Source 18 is static. Source 19 has replacements at 1, 2, and 3, producing 19, 19-c1, 19-c2, and 19-c3. Source 19b remains the full-screen yours diagram. All six Operating screens use hard cuts. The 4:30 area splits 0:30 user, 0:20 quote, 1:20 decisions, 1:00 maintenance, 0:55 application, and 0:25 wrap.

- **Slide 18.** Preserve the amber area header and divider. One Devin CLI session-usage placeholder at x 48, y 184, width 420, height 260, named `!!screenshot-Usage view`. Explanations use the shared positions: x 492, width 420; 24-point Bold headings y 192 and 326; 24-point bodies y 236 and 370, height 64. No command inventory or compact strip.
- **Slide 19, shared.** Keep the Operating kicker, mini-map, divider, and narrative number on the four owner screens. No additional title on the quote screen. Content titles use x 48, y 68, width 692, height 76, size 32 Bold. Replace each title with its body on a hard cut. The standalone yours diagram remains unchanged.
- **Quote.** Preserve 44-point type and exact 52-point spacing. Five deliberate lines at x 48, y 192, width 568, height 268. Image `internal/illustrations/operating-observability.png` at x 664, y 192, 224 square, fit contain. This longer quotation places attribution under the image: author x 640, y 420, width 272, height 28, size 20; publication/publisher/date x 640, y 452, width 272, height 40, size 16 in two lines. The quote and attribution stay editable.
- **Four decisions.** Rows start at y 192, 266, 340, and 414. Questions x 48, width 272, height 64, size 24 Bold. Explanations x 344, width 568, height 64, size 20, two lines each. The last row ends by 478. No FRB content.
- **Maintenance.** Use the shared three rows at y 192, 254, and 316, with 20-point bodies and amber labels. Security-boundary sentence x 48, y 386, width 864, height 30, size 20. Pitfall label x 48, y 426, width 124, 20 Bold amber. Sentence x 196, y 426, width 716, height 64, 24 Bold, with a deliberate break after “trifecta,”. No bottom band or triangle.
- **FRB agreement.** Illustration caption x 48, y 192, width 864, size 16. Native two-column table at x 48, y 228, width 864, column widths 224 and 640. Header and cells 20, header Bold amber. Row heights 36, 56, 56, 56, 56, ending at 488. Use the flat table styling from section 16.
- **Section wrap.** Preserve `internal/renders/map-yours.png`, source 19b, its hard cut, full-slide geometry, and narrative number 19. Hold for 0:25.
- **Agenda synchronization.** Slide 5's existing pattern line stays at x 48, y 472, width 864, height 20, size 16 secondary. Its copy now names the five-screen pattern. No geometry changes. Slide 7's pattern narration changes only in the notes; its diagram states remain unchanged.

The six quotation images use a shared conceptual style and each appears only in its own area. Every user screen has one screenshot placeholder and two short explanations. All Section 2 area content is static. Slide 23 retains the six recap bands and exact headline-pitfall wording. All body text remains at least 20 and content ends by 492.

## 23. Quote-first Section 2 authoring target, September 16, 2026

This section supersedes the Section 2 composition, numbering, and story rules in sections 13 through 22. Earlier numbered examples elsewhere in the brief refer to the prior deck unless retargeted here. The theme, page, grid, font scale, and reading floors remain unchanged. The Markdown specs and builder are integrated. Rendering and native playback review validate each exported revision.

### Numbering and playback

- Narrative slides: 48. Section 1 is 1 through 8, Section 2 is 9 through 41, and Section 3 is 42 through 48.
- Section 2 uses one narrative identity for every composition. Slide 9 retains six map states. Slide 10 is the static section orientation. Slides 11 through 40 are six groups of five static slides. Slide 41 is the standalone responsibility map.
- The five-screen sequence is quote, combined definition and importance, decisions, pitfalls, and FRB application. Hard cuts throughout. No standalone user screen, screenshot placeholder, compact continuation, or user/owner kicker.
- The authoring target is 48 compositions. The revised opening and Section 3 review produce 55 physical slides, 56 states, one internal click, no Morph transitions, and 55 advances. The builder validates these counts and records them in its build receipt.
- Section 2 remains 25:00 to 29:00. The 27:00 reference in the specs only guides rehearsal cues. There is no automatic slide timing.
- Slides 4, 8, and 42 are the matching typographic dividers. Slide 45 retains the six recap bands, with the final area labeled Production operations. Slide 48 retains the Questions reveal.

### Shared header and orientation

Reuse `slideHeader()` and the existing reserved header/body separation. The kicker's area name remains Bold in its area color and is followed by the neutral beat label. Use the current 20-point kicker role. The mini-map retains its existing position and geometry on slides 11 through 40. No additional title appears on a quote slide.

Content-slide titles use x 48, y 68, width 692, height 76, Helvetica Bold 32. Body content begins at y 192 and ends by y 492. Display the new narrative number using the existing shared numbering component. Slides 9 and 41 retain standalone full-screen compositions without a kicker or mini-map.

### Quote compositions

Retarget the existing exact quote layouts and images to slides 11, 16, 21, 26, 31, and 36. Models, Context, and Orchestration use the four-line layout in section 17. Tools and Evals use their three-line layouts in sections 19 and 21. Production operations uses the longer quote layout from section 22, including attribution below the smaller image. Keep quotation and attribution native and editable.

Reuse the six existing illustrations in their original areas. Do not bake text into the images or generate replacement artwork merely for renumbering. The final area keeps the technical asset name `operating-observability.png`; its displayed area name is Production operations.

### Definition and importance

Slides 12, 17, 22, 27, 32, and 37 use two flat text columns. The left column defines the subject, and the right explains its importance. The coding-agent connection stays spoken; there is no screenshot or user-example panel.

- Left column x 48, right column x 492, each width 420.
- Block labels at y 192, height 30, Helvetica Bold 20 in the area color.
- Body starts at y 234, height 200, Helvetica Regular 24, with the shared 1.25 spacing and paragraph spacing.
- Keep definitions concise. RAG, MCP, and the verification/evaluation distinction use separate paragraphs within the same body region when needed.
- No cards, icons, decorative borders, or added takeaways. Revise visible copy if it does not fit; do not shrink below the reading floor.

### Decision compositions

Slides 23, 28, and 33 retain the three aligned rows from section 17: y 192, 292, and 392; question column x 48, width 272, height 82, Bold 24; explanation column x 344, width 568, height 82, Regular 20.

Slides 13, 18, and 38 use four rows at y 192, 264, 336, and 408. Label column x 48, width 272; explanation column x 344, width 568; each height 62. Both use 20-point text, with labels Bold. Keep each explanation to two deliberate lines where possible. The compact authored sentences in the specs, rather than the detailed research tables, define the visible text.

Use aligned native text without decorative boxes or table rules. Supporting retrieval, grader, and coordination comparisons remain in notes; do not place a second table beside these rows.

### Pitfalls compositions

Slides 14, 19, 24, 29, 34, and 39 reuse the three labeled rows at y 192, 254, and 316. Labels: x 48, width 216, height 30, Bold 20 in the area color. Body: x 292, width 620, height 54, Regular 20. An authored qualifying line, when present, uses x 48, y 386, width 864, height 30, Regular 20.

The pitfall label uses x 48, y 426, width 124, height 30, Bold 20. The exact sentence uses x 196, y 426, width 716, height 64, Bold 24. Preserve the deliberate line breaks specified in §25. The pitfall is in the body, not a footer band. Slide 34 has no story hold, placeholder, or extra advance.

Slide 39 uses its three rows for the combined-risk capabilities. Its final label can wrap to two lines and uses height 54 at the same y 316 position. It does not add a separate triangle diagram. Preserve the threat-model qualification in the notes. Slide 24 keeps its takeaway in the notes and does not repeat it in the optional qualifying-line position.

### FRB application compositions

All six application slides keep a visible 16-point illustrative caption at x 48, y 192, width 864. Body copy is at least 20. Tables use the existing flat native style, with no banding or visible borders. Keep dates, document IDs, revisions, locations, uncertainty, and outcome labels editable.

- **Slide 15:** native two-column table at x 48, y 228, width 864, columns 224 and 640. Header and cells 20, header Bold in the area color. Row heights 36, 76, 64, and 76, ending at y 480. No additional bottom sentence. The first data row carries the scenario constraint.
- **Slide 20:** retain the two-column source-and-annotation arrangement from section 18. To fit the full dates with clear separation, use left source captions at y 224 and 344, each height 40 at 16 with exact 20-point spacing. Source quotations begin at y 262 and 400, heights 60 and 90 at 24. The right annotations keep y 224, 316, and 408 labels and their body positions from section 18. Preserve the two distinct document identities.
- **Slide 25:** use the section 19 two-column contract geometry. Row heights 36, 44, 64, 64, and 56, ending at y 492. Keep the exact-content condition and unknown-outcome distinction in the visible text.
- **Slide 30:** reuse the six-step editable workflow from section 20. Keep the verification gate and one concise recovery rule below it. Detailed response branches remain in speaker notes.
- **Slide 35:** reuse the editable source-support check from section 21. Preserve the exact source and wrong answer. PASS and FAIL remain explicit words. The regression instruction remains at the bottom. There is no personal-story cue before this slide.
- **Slide 40:** native two-column agreement at x 48, y 228, width 864, columns 224 and 640. Header and cells 20. Row heights 36, 52, 52, 52, and 52, ending at y 472. Four compact responsibility rows carry the accepted six-row agreement through grouping; the full explanation stays spoken.

### Maps and Section 3 retargeting

Preserve the base diagram, opening highlights, and mini-maps. Slide 9 remains the opening map. Slide 41 uses the generated closing-map variant with six area colors and a native area key, as defined in §34. The legacy ownership variant remains historical.

Section 3's numbering migration moved old 20 through 26 to 39 through 45 in the Section 2 rework and then to 41 through 47. Section 25 supersedes the earlier slide 43 and 44 compositions. Both are now static. The support composition and Morph associated with slide 44 are removed. Keep the close's internal reveal. Slide 45 retains the Production operations label, six-band structure, and exact pitfall sentences.

For slide 45's final area label, retain the existing colored block and x 48. Use width 224, height 32 at 20 Bold, centered vertically within the band, to keep the full new area name on one line. Other recap labels retain width 208. Section 25 defines the revised equal-height bands.

The agenda is now slide 3. Its revised layout and all Section 1 compositions follow section 24.

## 24. Section 1 revision, September 16, 2026

Historical opening revision. Section 37 supersedes its slides 5 through 7, timing, and physical counts; the agenda and matching dividers below remain current. This section superseded earlier Section 1 geometry, numbering, and agenda rules. The palette, faces, reading floor, grid, and native-number component remain unchanged. The current numbering migration is `internal/deck/section-1-numbering-map.json`; the Section 2 review's earlier map remains historical.

### Opening order and timing

Title (1, 0:05), bio (2, 0:30), agenda (3, 0:25), Section 1 divider (4, 0:10), code metaphor (5, 0:40), thesis (6, 0:30), comparison and commitments (7, 1:30), Section 2 divider (8, 0:10). Total 4:00. Slides 1 through 6 and 8 are static. Slide 7 has one replacement boundary at original state 1. Section 1 has nine physical slides. All cuts are hard cuts.

### Title, bio, hook, and thesis

- Slide 1 preserves the former title state's geometry and type. It is now a standalone composition without an internal build.
- Slide 2 preserves the bio's photo, text, geometry, and type. Only its contextual handoff changes.
- Slide 5 preserves the former code-metaphor state's geometry and colored Consolas runs, with both lines visible on entry. The display mono role now refers to slide 5. Its attribution remains x 48, y 472, width 864, right aligned.
- Slide 6 preserves the thesis's geometry and type, also reused on slide 48. Its two display sentences remain the only content besides the number.

### Agenda

Use a flat full-width agenda above a compact goals area. Everything is native editable text and visible on entry. No times, teaching-pattern footer, cards, mini-map, or internal builds.

- Title: x 48, y 36, width 864, height 40, Helvetica Bold 32, primary.
- Four agenda rows: y 100, 148, 263, and 337. Numbers at x 48, width 28; labels at x 88, width 824. Each height 32, Helvetica Regular 24. Numbers secondary, labels primary.
- Six area names occupy two rows at y 186 and 216, height 25, Helvetica Regular 20 in their existing area colors. Column x values 88, 362, and 664; widths 250, 278, and 248. Read left to right, then down. This retains the existing multi-color agenda exception.
- Transition supporting line: x 88, y 298, width 824, height 25, Helvetica Regular 20, secondary.
- Separator: x 48, y 389, width 864, height 1, hairline color.
- Goals label: x 48, y 407, width 864, height 25, Helvetica Bold 20, pink.
- Three goal statements: x 48, 344, and 640; y 442; width 272; height 50. Helvetica Regular 20, primary, with deliberate two-line wraps. The last content ends at y 492.

### Three section dividers

Slides 4, 8, and 42 use the same `sectionDivider()` component. Label at x 48, y 168, width 864, height 25, Helvetica Regular 20, secondary. Rule at x 48, y 208, width 864, height 1, hairline color. Title at x 48, y 232, width 864, height 140, Helvetica Bold 60, exact 70-point line spacing. Slide 4 breaks after "AI". The other two dividers preserve their existing wrapping. No mini-map, internal builds, or transitions beyond hard cuts.

### Comparison and commitments

Slide 7's first state keeps the native two-column table at x 48, y 68, width 864, with columns 420, 24, and 420 and row heights 90, 94, 82, and 100. Headers use 24 Bold pink; cells use 20 Regular primary. Reserve "workflow" for the orchestration concept in the narration.

The replacement state gains a title at x 110, y 68, width 748, height 40, Helvetica Bold 32, primary. Preserve commitment numerals at x 110 and statements at x 150, y 132, 252, and 372, width 708, height 68, at 24. The code subline remains x 150, y 205, width 708, height 20, at 16. Preserve semantic colors in its code runs. No overlap with the title or narrative number.

## 25. Section 3 review, September 16, 2026

Slide 43 is one static composition. This supersedes its former two-state table and evidence treatment, including the earlier colored right-column distinction between transformed and unchanged skills. Preserve the shared header, title, mini-map, and narrative number. Use hard cuts into and out of the slide.

Use the existing flat native two-column table at x 48, y 192, width 864. Content columns are 420 wide with a 24-point gutter. The header and each of the six data rows are 42 points high, ending at y 486. Header cells use Helvetica Bold 24 in Section 3 green. All data cells use Helvetica Regular 20 in primary text, with 1.25 line spacing, zero margins, no banding, and no visible borders. All rows carry equal weight. No quote, attribution, or replacement state follows the table.

Slide 44 is one static composition using the same header, native table treatment, type roles, and colors as slide 43. Its table remains at x 48, y 192, width 864. Use a 272-point area column, a 24-point gutter, and a 568-point competency column. The header and first five data rows are 40 points high. The final data row is 60 points high, ending at y 492. Break its description after "manage". All rows carry equal weight. The ladder, strip, quote, support composition, and Morph are removed.

The 48 narrative slides now use 48 authored compositions. The compiler produces 55 physical slides and 56 presentation states, with one internal click, no Morph transitions, and 55 advances. Section 3 has a 4:30 reference, including slide 43 at 1:05, slide 44 at 1:15, and slide 46 at 0:55.

Slide 45 retains the compact header and six full-width recap bands. Each band is 60 points high with 6-point gaps, at y 100, 166, 232, 298, 364, and 430, ending at y 490. Preserve the 272-point colored label block, labels at x 48, and sentences at x 296 with width 616. Labels use Helvetica Bold 20 with the existing area-specific text colors. Sentences use Helvetica Regular 20 in primary text, vertically centered in a 54-point box inset 3 points from the band's top. Break the final sentence before "without reviewing". All bands are visible on entry.

The revised pitfall sentences on slides 14, 19, 24, 29, 34, and 39 use the existing Section 2 geometry. Break slide 14 before "without testing", slide 34 before "without error analysis", and slide 39 before "and outbound access". Keep the other three sentences on one line where they fit. Line breaks do not change the exact sentence shared with slide 45.

Slide 46 retains its two-state replacement composition and existing geometry. Its first state shows four roadmap rows at y 192 with 67-point spacing and height 59. The numbered labels are: Choose one narrow task; Start with one model call; Turn failures into checks; Add autonomy when evals justify it. The assignment state keeps its heading at y 192, instructions at y 256, caption at y 342, and native four-column example at y 374. The heading reads “Review 20 to 50 outputs for one task.” The caption reads “Illustrative FRB example. Use the same record for your task.” No personal-story hold or presenter-authored slot remains. The state stays visible through the handoff to slide 47.


## 26. Area naming update, September 16, 2026

This section supersedes earlier displayed area names and recap-label geometry. The six names, in order, are Model Selection (slides 11 through 15), Context Engineering (15 through 19), Tools & Extensibility (20 through 24), Orchestration (25 through 29), Verification & Evals (30 through 34), and AgentOps (35 through 39). Use these exact names in the agenda, area kickers, competency table, and recap. Earlier dated revision notes retain historical names. Slide 43 retains Production operations as an existing software engineering skill.

Keep the existing area colors, quote illustrations, mini-maps, and content geometry. Preserve every visual state and asset of slides 9 and 41. Narration may use the current area names. No diagram regeneration is required. All slide counts, timing references, and transitions remain unchanged.

Slide 45 keeps its six 60-point bands, 6-point gaps, 272-point label blocks, and existing pitfall sentences. Label boxes use x 48, width 208, height 54, y equal to the band top plus 3, Helvetica Bold 20, 1.25 line spacing, and vertical centering. Wrap Context Engineering after Context, Tools & Extensibility after &, and Verification & Evals after Verification. Model Selection, Orchestration, and AgentOps stay on one line. Preserve the area-specific label colors.

## 27. Model Selection integration, September 16, 2026

The accepted sequence is quote, shared technical primer, decisions, pitfalls, and FRB application. It retains narrative slides 11 through 15, hard cuts, and no internal builds. Model Selection has a 4:30 reference. Section 2 now totals 27:35 within the existing range. Preserve the shared header, mini-map, area blue, native numbering, and all unrelated compositions.

### Slide 12: model invocation primer

This replaces the two-column definition composition for Model Selection only. Use one native editable invocation diagram with three connected text groups, followed by three annotation rows and a responsibility line. Keep the background clear of cards and decorative borders.

Presenter-approved refinement, September 16: slides 12, 13, and 14 now take 1:05, 1:05, and 0:30 respectively. Their combined 2:40 and the area's 4:30 remain unchanged. The current Section 2 rehearsal reference remains 28:30. Retain the geometry below and the approved wording in the slide specs.

- Columns start at x 48, 356, and 664, each width 248. Labels at y 192, height 30, Helvetica Bold 20 in area blue. Bodies at y 230, height 64, Helvetica Regular 20. Deliberately wrap input after "request," and output after "or". Inference reads "Run a trained model" then "with selected settings."
- Native horizontal arrows connect the groups at y 255, from x 308 to 340 and from x 616 to 648. Use the shared secondary 2-point connector style. The arrows describe input and output flow, not execution authority.
- Annotation rows begin at y 320, 360, and 400. Labels at x 48, width 216, height 30, Bold 20 in area blue. Explanations at x 292, width 620, height 30, Regular 20. Rows connect tokens to usage, context capacity to supplied input and generated output, and reasoning settings to evaluated task benefit. Context accounting applies to the whole call, not only supplied input.
- The selection responsibility uses x 48, y 458, width 864, height 30, Regular 20. Keep "Choose a model version and settings suited to the task and approved for the data." on one line.

### Slide 13: selection decisions

Use the existing three-row decisions composition at y 192, 292, and 392. Labels at x 48, width 272, height 82, Helvetica Bold 24. Explanations at x 344, width 568, height 82, Regular 20. The labels are Eligible configurations, Acceptable quality, and Time and total cost. Deliberately break the first explanation after "intended use.", the second after "tasks,", and the third after "task,". Keep the comparison method, routing, and model changes spoken.

### Slide 14: pitfalls

Keep the existing three-row geometry and headline-pitfall placement. The cue labels are Context capacity, Reasoning effort, and Token price. Pair each with what it does not establish alone, using the approved sentences in the slide spec. Preserve the exact headline sentence and its existing line break. Slide 45 remains unchanged.

### Slide 15: FRB design and scorecard

This replaces the earlier full-width starting-design table for Model Selection only. Preserve the illustrative caption at x 48, y 192, width 864, height 20, Helvetica Regular 16 in secondary text. The deployment constraint begins at x 48, y 224, width 864, height 50, Regular 20. Break before "for this synthesis."

- Left application column: x 48, width 420. Design label at y 292 and failure label at y 408, each height 30, Bold 20 in area blue. Bodies begin at y 326 and 442, heights 64 and 50, Regular 20. Use two lines for each body.
- Right scorecard: title at x 492, y 292, width 420, height 30, Bold 20 in area blue. Native table at x 492, y 330, width 420. Columns are 100 and 320. Row heights are 30, 50, 30, and 50, ending at y 490. Header and cells use Helvetica 20. Headers are Bold in area blue; cells are primary text. Use zero margins, no banding, and no visible borders, matching existing native evidence tables.
- The table has Measure and Evidence to collect columns, then Quality, Time, and Cost rows. Two-line entries describe supported findings and preserved uncertainty, and all attempts and review per successful brief. Completion time fits one line. Never place invented values or candidate rankings in this table.

The design, failure, and evidence remain one applied example. Full source identities, failure diagnosis, narrower assisted scope, and the unchanged evidence requirement remain in the talk track.

## 28. Context Engineering integration, September 16, 2026

The accepted sequence is quote, working-context foundations, conceptual retrieval decisions, pitfalls, and the missing-minutes FRB application. Preserve narrative slides 16 through 20, static entry, hard cuts, the Context Engineering pink, mini-maps, and native numbering. Context Engineering has a 4:30 reference and Section 2 totals 28:00. Existing anatomy assets are not regenerated by this content pass.

### Slide 17: context assembly

Superseded by the approved eight-category diagram in §38. The following geometry records the earlier composition.

Replace the former definition columns with one native editable context-assembly diagram. Stored memory and authoritative records sit outside the assembled input, with selected information flowing into it. This uses the same text and connector language as the Model Selection invocation.

- Left sources: x 48, width 300. Memory label at y 192 and authoritative-records label at y 352, each height 30, Helvetica Bold 20 in area pink. Memory body at y 230, height 54, Regular 20, two lines. Records body at y 390, height 75, Regular 20, three lines.
- Assembled-input boundary: x 468, y 192, width 444, height 296, no fill, square corners, 2-point area-pink outline. This is a diagram boundary, not a decorative card.
- Working context label inside the boundary at x 492, y 216, width 396, height 32, Helvetica Bold 24 in area pink. Body at x 492, y 270, width 396, height 130, Regular 24. Break after "evidence," and "history" for three lines.
- Two native horizontal arrows run from x 380 to 452 at y 258 and 416. Use the shared secondary 2-point connector style. They show selected information entering the call. Do not imply that all retained memory or every source document enters every invocation.

### Slide 18: conceptual evidence path

Superseded by the approved four-row decisions layout in §39. The following geometry records the earlier composition.

Use a single evidence pipeline above two explanatory columns. All content remains native editable text and connectors. Keep the shared header and title.

- RAG label at x 48, y 192, width 78, height 30, Helvetica Bold 20 in area pink. Definition at x 148, y 192, width 764, height 30, Regular 20.
- Four pipeline stages begin at x 48, 280, 512, and 744, each width 168, y 250, height 60, Bold 20 in area pink, horizontally and vertically centered. Wrap Authorized sources, Evidence selection, and Assembled input over two lines. Retrieval fits one line.
- Horizontal arrows at y 280 begin at x 230, 462, and 694, each width 36. Use the shared secondary 2-point connector style.
- Provenance line at x 48, y 320, width 864, height 30, Regular 20: preserve source identity, revision, and access scope.
- Lower labels at x 48 and 492, y 370, width 420, height 30, Bold 20 in area pink. The Find the evidence and Manage the context bodies begin at y 406, width 420, height 78, Regular 20. Each uses three deliberate lines. Keep the embedding definition spoken and the brief search comparison visible.

### Slide 19: pitfalls

Superseded by the approved four-row failure-mode composition in §40.

Preserve the current three labeled rows and the exact headline pitfall. The existing Coverage, Summaries, and Sources copy already supports the new explanation. Update the talk track only.

### Slide 20: missing-minutes application

Retain the existing left-column excerpts, dates, source IDs, revisions, and locations from §23. The briefing and minutes remain separate documents. Keep the illustrative caption at x 48, y 192, width 864, height 20, Helvetica Regular 16 in secondary text.

- The minutes caption's second line includes "omitted in this failure" after its source location. Keep its existing y 344, height 40, 16-point type and exact 20-point spacing. Both source quotations retain their current positions and 24-point type.
- Right-column labels use x 492, width 420, height 26, Helvetica Bold 20 in area pink, at y 224, 314, and 384. Labels are Design, Failure, and Evidence to check.
- Right bodies use x 492, width 420, Helvetica Regular 20. Design begins at y 254, height 54, two lines. Failure begins at y 344, height 30, one line. Evidence begins at y 414, height 78, three lines, ending within the content boundary.
- The evidence text describes the expected condition to check. It does not assert that a measured repair succeeded. No scorecard, chart, or additional artifact is added to this slide.

## 29. Tools & Extensibility integration, September 16, 2026

The accepted sequence is quote, tools and agent capabilities, capability decisions, pitfalls, and the unapproved-destination FRB contract test. The approved refinement of slides 22 through 24 uses 1:00, 1:05, and 0:40. Keep narrative slides 21 through 25, static entry, hard cuts, the area pink, mini-map, and native numbering. Tools & Extensibility has a 4:10 reference and Section 2 totals 28:30. Preserve existing anatomy assets. A2A stays in Markdown backup.

### Slide 22: tools and agent capabilities

Use one native editable flow matching the Model Selection invocation, with a capability definition above and the MCP definition below. All text remains editable.

- Capability definition at x 48, y 192, width 864, height 54, Helvetica Regular 20. Break after "computations,".
- Three columns start at x 48, 356, and 664, each width 248. Request, Execution, and Result labels use y 272, height 30, Helvetica Bold 20 in area pink. Bodies start at y 310, height 100, Regular 20. Use deliberate line breaks, allowing four lines for execution.
- Native horizontal arrows run from x 308 to 340 and from x 616 to 648, at y 355. Use the shared secondary 2-point connector style. The labels and bodies make the model/application distinction explicit.
- Model Context Protocol (MCP) label at x 48, y 434, width 864, height 30, Helvetica Bold 20 in area pink. Definition at x 48, y 466, width 864, height 30, Regular 20. Client/server roles and the hypothetical issue-tracker example remain spoken.

### Slide 23: choosing and exposing capabilities

Use one native two-column decision table followed by an execution-controls statement. Avoid decorative cards or a competing second table.

- Native table at x 48, y 192, width 864. Columns are 244 and 620, with row heights 36, 72, 72, and 72, ending at y 444. Header and body use Helvetica 20. Header is Bold in area pink. Decision labels are Bold in primary text; explanation cells are Regular in primary text. Use zero margins, no visible borders, and no banding.
- Headers are Decision and Options and trade-offs. Rows are Capability size, System access, and Tool composition. Each explanation breaks at its sentence boundary into two lines. The left column includes the shared label-to-body gutter.
- Execution-controls statement at x 48, y 450, width 864, height 50, Helvetica 20. Bold "Execution controls apply to every approach:" on the first line, then regular "permissions, input checks, and limits on execution." on the second.

### Slide 24: pitfalls

Keep the existing three-row geometry and headline-pitfall position. Labels at x 48, width 216, height 30, use y 192, 254, and 316, Helvetica Bold 20 in area pink. Bodies at x 292, width 620, height 54, use Regular 20 with deliberate two-line wraps. The cue labels are Tool selection, Authority, and Outcomes. Preserve the exact pitfall sentence shared with slide 45. Description drift and the timeout example stay spoken.

### Slide 25: unapproved destination

Consolidate the design, mismatch, and expected checks into one composition. Keep every value conceptual; do not invent a real destination or measured rejection result.

- Illustrative caption at x 48, y 192, width 864, height 20, Helvetica Regular 16 in secondary text. Name the CUI/ECI export contract and its illustrative status.
- Design label at x 48, y 224, width 164, height 30, Bold 20 in area pink. Body at x 224, y 224, width 688, height 54, Regular 20, two lines: exact checked draft and permitted destination.
- Native comparison table at x 48, y 294, width 864, using two 420-point content columns separated by a 24-point gutter. Header row 32 and data row 58, ending at y 384. Headers use Bold 24 in area pink. Body uses Regular 20 with two deliberate lines. Match the existing flat native table style with no visible borders or banding.
- Expected result label at x 48, y 400, width 216, height 30, Bold 20 in area pink. Result at x 292, y 400, width 620, height 32, Bold 24 in primary text: export rejected before transfer.
- Evidence to check label at x 48, y 442, width 216, height 30, Bold 20 in area pink. Body at x 292, y 442, width 620, height 50, Regular 20: a clear rejection reason and no export at that destination, on separate lines.

The comparison replaces duplicate failure prose. Exact checked content remains visible and spoken. The expected result and evidence checks do not assert a measured success. Uncertain execution and recovery remain the handoff to Orchestration.

## 30. Orchestration integration, September 16, 2026

The accepted sequence is quote, workflow and agent-loop foundations, execution decisions, pitfalls, and uncertain-export recovery. Preserve narrative slides 26 through 30, static entry, hard cuts, Orchestration pink, mini-maps, and native numbering. The area remains 3:55 and Section 2 remains 28:30. Keep the current anatomy assets.

### Slides 27 through 29: approved refinement, September 16, 2026

This refinement supersedes the earlier six-stage application workflow and state/recovery decision layout on these three slides. Use the approved general comparison, execution-choice questions, and Value/Control/Recovery pitfalls. The scripts are locked in the slide specs at 1:00, 1:00, and 0:25. Slide 30's layout and script remain unchanged.

### Slide 27: workflow and agent-loop comparison

The cleanup retains one definition per approach above one wide workflow diagram. A bounded agent loop is drawn directly inside Stage 2. Remove the second definition row, detached loop expansion, and footer. Their supporting content remains in the approved script. This supersedes the earlier crowded comparison composition without changing the script or timing.

- Column headings at x 48 and 492, y 192, width 420, height 32, Helvetica Bold 24 in area pink.
- Definitions at the same x positions, y 236, width 420, height 60, Regular 24. Left: Code defines stages and permitted transitions. Right: The model chooses the next action from observed results. Use two lines each.
- The workflow diagram spans the body width below the definitions. Stage 1 is at x 48, y 406, width 132, height 60, Regular 24. Required check is at x 764, y 406, width 148, height 60, Regular 24, on two lines. Center both labels horizontally and vertically. Forward arrows at x 196 and 704, y 436, width 28, use the shared secondary 2-point style.
- Stage 2 is a single native editable rectangle at x 248, y 348, width 432, height 150, no fill and a 2-point pink outline. Label it Stage 2 · bounded agent loop at x 268, y 362, width 392, height 30, Bold 20 in pink. The rectangle is a workflow stage, not a separate panel connected to another diagram.
- Inside the stage, place Choose action at x 268, y 406, width 116, height 60; Act at x 430, y 406, width 56, height 60; Observe result at x 538, y 406, width 122, height 60. Use Regular 20, centered horizontally and vertically. Forward arrows at x 396 and 508, y 436, widths 22 and 18.
- The loop return path begins at x 599, y 466, drops to y 486, points left to x 326, and returns upward to y 466 with an arrowhead. Use the shared secondary 2-point style and keep every connector clear of text.
- Keep the space between definitions and diagram empty. The script carries the explanation of model calls, permissions, stopping limits, and the optional combination. No footer is added.

### Slide 28: choosing the execution approach

Use three aligned decision-question and guidance rows. Questions are Helvetica Bold 20 in area pink at x 48, width 312. Guidance is Regular 20 at x 392, width 520. Rows begin at y 192, 286, and 390 with heights 75, 100, and 75. Keep the exact approved question and guidance wording from the slide spec; use deliberate line breaks rather than smaller type.

The execution-controls line is at x 48, y 480, width 864, height 25, Regular 20, with Execution controls in Bold. Its text is Saved state, required checks, stopping limits, and recovery. The checkpoint definition stays spoken; saved state does not establish an external action's outcome. The takeaway also stays spoken.

### Slide 29: execution pitfalls

Retain the existing row and headline geometry. Replace Gates, Progress, and Recovery with the approved Value, Control, and Recovery copy. Labels use x 48, width 216, height 30, Helvetica Bold 20 in area pink. Bodies use x 292, width 620, height 54, Regular 20. Rows begin at y 192, 254, and 316. Allow the Control body to wrap across two lines.

The Pitfall label remains at x 48, y 426, width 124, height 30, Bold 20 in pink. The exact headline shared with slide 45 remains at x 196, y 426, width 716, height 64, Bold 24: Adding multiple agents before trying a workflow.

### Slide 30: uncertain export sequence

Use two native editable lanes to distinguish caller knowledge from service-side effects. The sequence describes a separate permitted export and an expected recovery check, not a measured run.

- Illustrative caption at x 48, y 192, width 864, height 20, Helvetica Regular 16 in secondary text.
- Lane headings at x 48 and 640, y 224, width 272, height 30, Bold 20 in pink: Orchestrator and Export service.
- First row at y 258, height 30, Regular 20: Record and dispatch export on the left and Export occurs on the right. A forward arrow runs from x 336 to 624 at y 272.
- The left state Outcome unknown uses x 48, y 302, width 272, height 30, Bold 20 in pink. The lost-response path runs right to left at y 314, broken between x 450 and 510. Label Response lost at x 388, y 288, width 200, height 20, Regular 16 in secondary text, centered. Use a small connector cross at x 480, y 314 to mark the break. Keep this label clear of the lane bodies.
- Third row at y 350, height 30, Regular 20: Inspect export state on the left and Receipt and artifact on the right. A forward arrow runs from x 336 to 624 at y 364.
- Evidence to check label at x 48, y 402, width 216, height 30, Bold 20 in pink. Body at x 292, y 402, width 620, height 50, Regular 20, two lines: matching receipt and checked artifact; no duplicate export.
- The unresolved-outcome rule uses x 48, y 466, width 864, height 25, Regular 20. State that unresolved outcomes pause or hand off with uncertainty intact.

All connectors use the shared secondary 2-point style. Use line segments and a native cross only to explain the lost response. The service-side event is a scenario assumption; the caller still has to inspect evidence. Operation references, qualified idempotency, freshness, and permissions remain in the talk track.

## 31. Verification & Evals integration, September 16, 2026

The accepted sequence is quote, verification/evaluation foundations, practical case design, pitfalls, and the retained source-support failure. Preserve narrative slides 31 through 35, static entry, hard cuts, the green area color, mini-maps, and native numbering. The area stays 4:35 and Section 2 stays 28:30. Reliability notation remains in Markdown backup.

### Slide 32: complementary checks and practical vocabulary

Use two flat text columns for verification and evaluation, with a shared vocabulary row below. Keep every element native and editable. Avoid invented scores or a decorative grid of trial outcomes.

- Verification label at x 48 and Evaluation label at x 492, y 192, width 420, height 30, Helvetica Bold 20 in area green.
- Questions at the same x values, y 234, width 420, height 100, Regular 24. Break the verification question after "meet" and the evaluation question after "perform".
- A shared hairline separator spans x 48 to 912 at y 350, height 1.
- Case, Trial, and Grader labels begin at x 48, 344, and 640, y 378, width 272, height 26, Bold 20 in area green. Definitions begin at y 412, width 272, height 60, Regular 20. Case and Grader use two deliberate lines; Trial fits one line.

The two questions describe one-result acceptance and behavior across cases and repeated runs. The lower row supplies vocabulary used by the suite matrix. Ordinary tests and the shared use of checks remain explicit in the talk track.

### Slide 33: illustrative evaluation cases

Replace the three abstract decision rows with a native case matrix. Keep the full grader comparison spoken and connect it to the checks column. The matrix is an illustrative design, not a score report or a complete release suite.

- Illustrative caption at x 48, y 192, width 864, height 20, Helvetica Regular 16 in secondary text.
- Native table at x 48, y 224, width 864. Columns are 216, 360, and 288 for Case, Expected behavior, and Checks. Header height 32; each of the three case rows is 64, ending at y 448. Use Helvetica 20, with Bold green headers and primary body text. Use zero margins, no visible borders, and no banding.
- The rows cover Routine brief, Disallowed export, and Lost export response. Use deliberate two-line descriptions. The routine brief's final cell reads "Reference checks plus expert" then "or calibrated model judgment." Preserve the qualification on model grading.
- Comparison label at x 48, y 462, width 164, height 30, Bold 20 in green. Body at x 244, y 462, width 668, height 30, Regular 20: held-out cases and repeated trials.

Expected behavior depends on each case's starting conditions. The distinction between recoverable export evidence and an unresolved variant remains spoken. Do not imply all blocked or incomplete runs count as completed work.

### Slides 31, 34, and 35

Preserve their current visible copy and layouts. Slide 31 uses the selected quote attribution recorded in Research §5 and its slide spec. Slide 34 keeps the exact headline pitfall shared with slide 45. Slide 35 retains the exact invented minutes, cited unsupported claim, explicit PASS/FAIL wording, expected unresolved cause and inspection, and regression-case instruction. Its talk track tightens by 0:10 to connect the example to the preceding case-design framework.

## 32. AgentOps integration, September 16, 2026

The accepted sequence is quote, practical operating foundations, operating decisions, security pitfalls, and an illustrative FRB release incident. Preserve narrative slides 36 through 40, static entry, hard cuts, the amber area color, mini-maps, and native numbering. AgentOps stays 4:10 and Section 2 stays 28:30. Keep SLOs and error budgets in Markdown backup and the operating agreement as supporting material.

### Slide 37: recorded work, configuration, and outcomes

Use one native editable composition. The definition leads into three foundations. A compact recorded path explains the trace and one span without suggesting durations or measured outcomes.

- Definition at x 48, y 192, width 864, height 50, Helvetica Regular 20. Break after "enforced controls,".
- Trace label at x 48, y 262, width 216, height 30, Bold 20 in amber. Definition at x 292, y 262, width 620, height 30, Regular 20.
- Recorded operation labels Retrieve, Model, Verify, and Export / hold at x 292, 448, 604, and 760, y 302. Widths are 120, 120, 120, and 152; heights are 30. Use Regular 20 centered. Connect them with secondary 2-point arrows starting at x 416, 572, and 728, y 316, width 24.
- Identify the Model operation as one span with an amber 2-point underline at x 448, y 334, width 120, and centered secondary caption "one span" at x 448, y 344, width 120, height 20, Regular 16. This is an annotation to an observed operation, not a duration bar.
- Versioned configuration label at x 48, y 382, width 216, height 54, Bold 20 in amber, on two lines. Definition at x 292, y 382, width 620, height 30, Regular 20.
- Outcome metrics label at x 48, y 450, width 216, height 30, Bold 20 in amber. Definition at x 292, y 450, width 620, height 30, Regular 20.

Private reasoning, the full configuration inventory, sampled quality labels, and the one-run/across-runs distinction remain spoken. There are no invented values or telemetry screenshots.

### Slide 38: operating decisions

Use three flat aligned rows for Evidence, Releases, and Response. Labels at x 48, width 216, height 30, Helvetica Bold 20 in amber. Bodies at x 292, width 620, height 54, Regular 20. Rows begin at y 192, 292, and 392. Each body uses two deliberate lines, separating its paired decisions. Keep detailed operating-policy trade-offs in the talk track.

### Slide 40: qualitative release incident

Replace the operating-agreement table with a native editable incident record. Preserve the illustrative label and explicit export gate.

- Illustrative caption at x 48, y 192, width 864, height 20, Helvetica Regular 16 in secondary text.
- Native table at x 48, y 224, width 864, with columns 186 and 678 for Incident and FRB example. Header height 32, followed by three 64-point rows, ending at y 448. Use Helvetica 20, Bold amber headers, primary body text, zero margins, no visible borders, and no banding.
- The rows are Change, Signal, and Response. Each body has two deliberate lines. Keep the conditional restoration wording and approved-update context.
- The statement "Failed drafts remain blocked from export." appears at x 48, y 466, width 864, height 25, Bold 20 in primary text.

No numbers or charts imply a measured regression. Compatibility, authorization, uncertain root cause, pending work, and official board authority remain explicit in the talk track.

### Slides 36 and 39

Preserve the visible copy and layouts. Slide 36 retains Rauch as the speaker and Datadog as publisher. Slide 39 retains the exact headline sentence shared with recap slide 45 and the probabilistic-filter qualification. Its revised narration connects the capability review to changing integrations.

## 33. Section 2 orientation, September 16, 2026

Insert narrative slide 10 after the opening map. Shift prior narrative slides 10 through 47 to 11 through 48. This revision supersedes earlier numbering and counts in this brief. The current target is 48 narrative slides, 48 authored compositions, 55 physical slides, 56 states, one internal click, no Morph transitions, and 55 advances. Beat 2.0 pairs a 1:05 map with a 0:45 orientation; Section 2 remains 28:30. Use the numbering migration in `internal/deck/section-2-orientation-numbering-map.json`.

Use the shared standard header: neutral section kicker at x 48, y 36, width 716, height 25, Helvetica Bold 20 with its beat label Regular; both use secondary text. Place `mini-all` at x 752, y 36, width 160, height 90. Title at x 48, y 68, width 692, height 76, Helvetica Bold 32 in primary text. Header divider at x 48, y 168, width 864, height 1 in the shared hairline color.

Use two flat columns at x 48 and x 492, each width 420. Column headings at y 192, height 30, Helvetica Bold 20 in primary text. No cards, icons, or decorative rules.

- Left list: Helvetica Regular 20 in primary text. Numerals use secondary text at x 48, width 24; labels start at x 84, width 384. Row tops are y 234, 274, 339, 379, and 419. Heights are 30, 55, 30, 30, and 30. The second row breaks after its subject label, retaining its colon.
- Right subject: y 234, height 55, Helvetica Regular 20 in primary text, on two deliberate lines.
- Right request: y 309, height 90, Helvetica Regular 20 in primary text, on three deliberate lines.
- Right illustrative status and authority boundary: y 421, height 55, Helvetica Regular 20 in secondary text, on two deliberate lines.

Display the narrative number using the existing shared component. All content appears on entry and remains native and editable. Use hard cuts and no internal reveals. Preserve map images and all six highlight states without regenerating diagram assets.

## 34. Six connected engineering areas, September 16, 2026

Slide 41 closes Section 2 by connecting the six areas within the familiar anatomy. This supersedes the closing-map ownership badges, title, and full-screen-only composition in earlier sections. Preserve the 0:50 reference, narrative number, static entry, hard cuts, and all deck counts. No kicker, mini-map, or visible takeaway appears here.

Title: x 48, y 36, width 864, height 42, Helvetica Bold 32 in primary text. Place a native flat area key in two rows at y 88 and 122, height 25, with columns x 48, 344, and 640, width 272. Use Helvetica Bold 20 and each area's existing color, in presentation order across each row. There are no chips, badges, cards, or connectors in the key.

The closing diagram is a generated `-closing.svg` variant of the shared base, rendered as `map-closing.png` at 7680 by 4320. Place the image at x 0, y 0, width 960, height 540, behind the native title and key. Its upper canvas is blank for the header. Preserve horizontal positions and all core labels. Omit the original title and all text tagged `diagram-description`. Retain the original label font sizes rather than scaling the diagram down. The SVG uses two units per point.

Closing SVG vertical positions:

- Outer platform: y 312, height 708. Per-run heading baseline 355. Its three boxes: y 374, height 80, title baselines 424.
- One-run frame: y 472, height 370; heading baseline 514. Agent frame: y 530, height 292; heading baseline 568.
- Harness frame: y 578, height 226; heading baseline 616. Its three inner rows: y 634, 688, and 742, each height 46, with title baselines 666, 720, and 774.
- Goal and Model boxes: y 642, height 104, title baselines 704. Arrows: y 694. Plus sign baseline 709.
- Stopping-condition box: y 642, height 104; its three text baselines are 670, 700, and 730.
- Across-runs heading baseline 899. Its three boxes: y 918, height 80, title baselines 968.

Map component titles remain primary text. The Harness heading retains pink. Apply each area's existing tint as the component fill and its accent as a 4-unit outline: Model blue; Context and memory, Instructions, and External Data & Retrieval pink; Tools pink; Orchestration pink; Verification and Evaluations green; Identity & Access Management, Security, Guardrails, Observability, and Governance amber. Tints are `#13223f`, `#2b1b2c`, `#122926`, and `#302819`. The harness grouping retains its existing pink tint and outline. Goal, stopping condition, outer grouping lines, and connectors remain neutral.

The area mapping matches `mini-all`. Shared pink continues to identify the three harness areas through their component names and positions. No additional area colors or ownership labels are introduced. `--closing-only` regenerates just this variant and render; the default diagram command regenerates every active variant. Legacy `-yours.svg` and `map-yours.png` files are retained as historical assets and are no longer generated or used by the deck.


## 36. Section 3 finishing pass, September 16, 2026

This section supersedes earlier Section 3 color, recap geometry, roadmap-state, closing-order, count, and timing rules.

- Section 3 accent is orange `#fe7026`. Use it for the Bold “The transition” kicker on slides 43 through 46 and the native table headers on slides 43 and 44. Neutral beat labels remain secondary. Preserve area colors in slide 45 and all mini-maps. The matching Section 3 divider retains primary title text.
- Slide 45 bands occupy x 48, width 864, leaving the shared 48-point side margins. Preserve the six 60-point heights and 6-point gaps at y 100 through 430. Label blocks are 224 wide. Label text uses x 64, width 192, y equal to band top plus 3, height 54, Bold 20, vertically centered. Keep existing area text colors and deliberate label wraps. Sentence boxes use x 296, width 600, y equal to band top plus 3, height 54, Regular 20, primary, vertically centered. Retain the final sentence break before “without reviewing”.
- Slide 46 is one static composition containing only the four roadmap rows. Preserve their geometry from §25, with no finite exits, assignment, record table, or internal builds. Its reference time is 0:35.
- Slide 47 is the thesis close with its existing Questions reveal. Slide 48 is Resources, one static state that stays visible during discussion. Preserve their existing typography and geometry.
- Counts at this revision, superseded by §37: 48 narrative slides, 48 authored compositions, 54 physical slides, 55 presentation states, one internal click, no Morph transitions, and 54 advances. Section 3 sums to 4:10. Presentation time is approximately 33:10 to 37:10.


## 37. Section 1 behavior-focused rework, September 16, 2026

This section supersedes the core opening layouts, hook and thesis placement, timing, and counts in §24. Slides 1 through 4 and the matching divider on slide 8 retain their compositions. The code metaphor leaves the opening. The two-sentence thesis composition remains on slide 47 with its existing Questions reveal. Slide 48 remains Resources. The published description and Section 2 numbering are unchanged.

### Sequence and presentation states

Slides 5, 6, 7, and 8 take 0:55, 0:45, 1:00, and 0:10 respectively, totaling 2:50. Section 1 remains 4:00. All eight Section 1 slides are static. Slide 7 has no finite exit or replacement screen. All cuts are hard cuts. No new mini-maps, images, kickers, attributions, visible takeaway lines, or animations appear in the core opening.

Current counts: 48 narrative slides, 48 authored compositions, 53 physical slides, 54 presentation states, one internal click, no Morph transitions, and 53 advances. The map on slide 9 retains its six states. The Questions reveal on slide 47 is the only internal click. Section 2 and Section 3 keep their existing timings.

### Shared header and native text

Use the existing standard title header without a kicker or mini-map on slides 5 through 7. Title at x 48, y 68, width 864, height 76, Helvetica Bold 32 in primary text. Header divider at x 48, y 168, width 864, height 1, hairline color. Preserve the shared narrative number and safe area. All explanatory text is Helvetica Regular 24 in primary text, with 1.25 line spacing. Labels and table headers use Bold 24 in pink. No cards, banded fills, or extra footer fragments.

### Slide 5 comparison

Native flat comparison table at x 48, y 192, width 864. Content columns are 420 wide with a 24-wide empty gutter. Row heights are 64, 104, and 104, ending at y 464. Match the native table's no-border treatment, zero cell margins, and top alignment. Body cells use 24 rather than the shared table helper's default 20. Preserve the locked copy and use deliberate line breaks after "implemented", "guided", "produce", and "produce" in the respective body cells. Both column headers fit on one line.

### Slides 6 and 7 explanatory rows

Use native editable text rows, with no visible table header. Each row starts at y 192, 292, or 392. Labels at x 48, width 272, height 82. Explanations at x 344, width 568, height 82. Preserve the locked wording. On slide 6, break the second explanation after "not". On slide 7, break the first explanation after "required", the second after "limits", and the third after "repeated runs,". Other rows fit naturally without forced breaks. All text fits above the bottom safe margin.

## 38. Context input diagram, September 16, 2026

The presenter approved slide 17's eight-category copy and 1:00 script. This replaces its context-assembly layout in §28. Preserve the standard title header, pink area kicker, `mini-context`, narrative number, static entry, and hard cuts. Use one native editable boundary with flat text groups, not separate cards. The diagram represents the input for a single call. It does not represent total capacity, processing order, or equal token allocations.

- Title: "Context for each model call", using the shared standard header geometry and type.
- Input boundary: x 48, y 192, width 864, height 300. No fill. Square corners. Pink 2-point outline.
- Diagram label: "Input for this call", x 72, y 208, width 816, height 30, Helvetica Regular 20 in secondary text.
- Four columns start at x 72, 282, 492, and 702, each width 186. Category labels start at y 248 and 368, height 50, Helvetica Bold 20 in pink. Supporting text starts at y 304 and 424, height 54, Helvetica Regular 20 in primary text. Use the standard 1.25 line spacing and zero text insets.
- Top row: Instructions, Current request, Examples, Retrieved evidence. Bottom row: History and task state, Selected memory, Tool definitions, Tool results. Break History and task state after "and". Other labels fit on one line.
- Supporting-text breaks: after "and" for Rules and constraints; after "and" for The task and desired result; after "of" for Demonstrations of expected behavior; after "files" for Relevant files and passages; after "messages" for Prior messages and progress; after "information" for Retained information brought into this call; after "operations" for Available operations and arguments; after "data" for Returned data and observations.

Keep the responsibility at every inference turn spoken. No extra takeaway, source footer, connector, animation, or application example appears on the slide. The 0:10 saved in foundations becomes rehearsal allowance on slide 19 pending its review. The area remains 4:30 and Section 2 remains 28:30.

## 39. Context decisions, September 16, 2026

The presenter approved slide 18's four decision rows and 1:10 script. This replaces its conceptual evidence-path layout in §28. Preserve the standard title header, pink area kicker, `mini-context`, narrative number, static entry, and hard cuts. Keep all content native and editable, with no cards, connectors, or visible search-method inventory.

- Title: "Selecting and organizing context", using the shared standard header geometry and type.
- Four flat rows begin at y 192, 258, 324, and 390. Labels Select, Position, Maintain, and Delegate sit at x 48, width 216, height 30, Helvetica Bold 20 in pink.
- Supporting text sits at x 292, width 620, height 54, Helvetica Regular 20 in primary text. Use two deliberate lines in every row, breaking after the first sentence. Preserve the exact approved copy in the slide spec.
- Supporting line: "Preserve source identity and enforce access before inclusion." at x 48, y 466, width 864, height 30, Helvetica Bold 20 in primary text.
- Use the standard 1.25 line spacing and zero text insets. Keep all content within the shared safe area.

RAG, embeddings, and the keyword, semantic, and hybrid comparison remain spoken. Placement is a decision to test for the model and task. Subagents illustrate separate working contexts and selective return of findings. The additional 0:15 recovered from slide 18 brings slide 19's reserved allowance to 0:45. Slides 16 through 20 now take 0:20, 1:00, 1:10, 0:45, and 1:15, preserving the area's 4:30 and Section 2's 28:30.

## 40. Context pitfalls, September 16, 2026

The presenter approved slide 19's four failure modes and 0:45 script. This replaces its three-row content in §28. Preserve the standard header, pink area kicker, `mini-context`, narrative number, static entry, and hard cuts. Use native editable text with the same type scale as slide 18.

- Four flat rows begin at y 192, 246, 300, and 354. Labels Distraction, Position, Context rot, and Information loss sit at x 48, width 216, height 30, Helvetica Bold 20 in pink.
- Supporting text sits at x 292, width 620, height 54, Helvetica Regular 20 in primary text. Preserve the exact approved sentences and allow natural wrapping.
- Retain the existing headline-pitfall row. Label "Pitfall" at x 48, y 426, width 124, height 30, Helvetica Bold 20 in pink. Sentence "Adding context without curating it." at x 196, y 426, width 716, height 64, Helvetica Bold 24 in primary text. This sentence matches slide 45 exactly.
- Use standard 1.25 line spacing and zero text insets. No new card, diagram, source footer, or animation appears.

The script distinguishes degraded use of a growing context from information becoming outdated. All three Context Engineering content slides are now approved at 1:00, 1:10, and 0:45. This closes their pending content reviews. Rehearsal remains open. The area stays 4:30 and Section 2 stays 28:30. Slide 20 is unchanged.


## 41. Perspective quote refresh, September 16, 2026

Only the visible quotations and attributions on slides 11 and 31 change. Keep all six quote illustrations, header geometry, mini-maps, native narrative numbers, hard cuts, and time allocations. The six opening scripts are refreshed in their slide specs.

Slide 11 retains the quote composition at x 48, y 192, width 568, height 216, size 44 with exact 52-point spacing. Use three deliberate lines, wrapping after “by” and “list”. Attribution stays at y 428 in 20 and publication/check date at y 462 in 16. The check date is explicitly labeled because the documentation has no stated publication date.

Slide 31 retains the three-line quote composition at x 48, y 216, width 568, height 164, size 44 with exact 52-point spacing. Wrap after “how” and “any”. Attribute the new article to Hamel Husain alone. Author and publication/date retain their current positions and type roles. This supersedes the former joint-author requirement in the Evals quote composition. Keep the source title and March 2025 publication date together in the existing caption box.

## 42. Verification & Evals foundations, decisions, and pitfalls, September 16, 2026

This replaces §31's content and geometry for slides 32 through 34. Keep the standard headers, green area kickers, `mini-evals`, native numbering, static entry, and hard cuts. Preserve the approved wording in editable native text. Slide 31's quote and slide 35's application remain unchanged. Use Helvetica, standard 1.25 line spacing, and zero text insets throughout the body.

### Slide 32

Retain the two comparison columns and shared vocabulary row. Labels Verification and Evaluation remain at x 48 and 492, y 192, width 420, height 30, Bold 20 in area green. Questions remain at y 234, width 420, height 100, Regular 24 in primary text. Break the first after "action". Set the second to three lines, breaking after "system" and "across". It reads "How reliably does the system", "meet those requirements across", and "cases and repeated attempts?".

Keep the separator at x 48, y 350, width 864, height 1. Vocabulary labels remain at x 48, 344, and 640, y 378, width 272, height 26, Bold 20 in green. Definitions begin at y 412, width 272, height 60, Regular 20. Case uses two lines: "Inputs, starting conditions," and "and expected behavior." Trial remains one line. Grader uses two deliberate lines. The SME and golden-dataset introduction remains spoken.

### Slide 33

Replace the former case matrix and comparison footer with three flat decision rows. Begin rows at y 192, 294, and 396. Labels sit at x 48, width 268, height 75, Bold 20 in green. Explanations sit at x 344, width 568, height 90, Regular 20 in primary text. Wrap labels after "as", "we", and "we" respectively, retaining the exact questions. Explanations use three lines where needed. Keep the approved SME, golden-dataset, grader, held-out, and repeated-trial wording. Do not add a table header or caption.

### Slide 34

Retain three flat risk rows at y 192, 254, and 316. Labels sit at x 48, width 216, height 54, Bold 20 in green. Break the third label after "data". Supporting text sits at x 292, width 620, height 54, Regular 20 in primary text. Each explanation fits at most two lines. Place "Inspect the result, trace, and reference data before choosing a repair." at x 48, y 386, width 864, height 30, Regular 20.

Keep the existing Pitfall label at x 48, y 426, width 124, height 30, Bold 20 in green. Keep the exact recap sentence at x 196, y 426, width 716, height 64, Bold 24 in primary text, with the existing break before "without". Slide 45 continues to use the same sentence.

The approved scripts take 1:00, 1:15, and 0:40. This moves 0:15 from decisions to pitfalls while preserving their combined 2:55, the area's 4:35, and Section 2's 28:30. Editorial approval is complete. Presenter rehearsal remains open.

## 43. AgentOps foundations, decisions, and pitfalls, September 16, 2026

This updates §32 for slides 37 and 38 and the §23 pitfalls composition for slide 39. Keep the standard headers, amber AgentOps kickers, `mini-operating`, native numbering, static entry, and hard cuts. Preserve the approved wording in native editable text. Use Helvetica, standard 1.25 line spacing, and zero text insets. Slides 36 and 40 remain unchanged.

### Slide 37

Retain the definition and three flat foundation rows. Definition at x 48, y 192, width 864, height 50, Regular 20. Break after "accountable". Labels at x 48, width 216, Bold 20 in amber. Supporting text at x 292, width 620, Regular 20 in primary text. Row tops remain y 262, 382, and 450. The first row has height 30. The final two rows have height 54 to accommodate the approved explanations. Break Configuration versions after "Configuration". Break its explanation after "and". Break the outcome explanation after "cost,".

Retain the recorded trace geometry from §32, replacing its labels with Retrieve, Model, Tool, and Check. Keep the connectors, amber underline beneath Model, and secondary "one span" annotation. The trace shows observed operations without durations or invented measurements. Table headings in the Markdown spec describe the content roles; the composition has no visible table header.

### Slide 38

Retain §32's three flat rows at y 192, 292, and 392. Labels remain x 48, width 216, height 30, Bold 20 in amber. Bodies remain x 292, width 620, height 54, Regular 20. Use two deliberate lines in every row, breaking after the first sentence. Preserve the exact approved Evidence, Releases, and Response wording. No visible table header is added.

### Slide 39

Retain three flat rows at y 192, 254, and 316. Labels Private data, Untrusted content, and Outbound access sit at x 48, width 216, height 30, Bold 20 in amber. Supporting text sits at x 292, width 620, height 54, Regular 20 in primary text. The first two explanations fit on one line. Break the third after "outside". Use CUI/ECI without expanding the abbreviation. No visible table header is added.

Retain the probabilistic-filter sentence at x 48, y 386, width 864, height 30, Regular 20. Retain the Pitfall label and exact headline sentence at their §23 positions, with the existing line break before "and outbound". The sentence remains identical to slide 45.

The approved scripts take 0:55, 1:00, and 0:45, preserving their combined 2:40, AgentOps at 4:10, and Section 2 at 28:30. Editorial approval is complete. Presenter rehearsal remains open.

## 44. FRB Agent content reservations, September 16, 2026

This supersedes the FRB application bodies on slides 15, 20, 25, 30, 35, and 40 and the right column on slide 10. Replacement content is pending. Retain all narrative identities, timing allocations, hard cuts, and existing deck counts.

Slide 10 retains its standard header, neutral kicker, `mini-all`, and left-column geometry from §33. The fifth list item reads "FRB Agent". The right column contains only "FRB" at x 492, y 192, width 420, height 30, Helvetica Bold 20 in primary text. Remove the former column heading, subject, request, and illustrative-status text. Add no box or decorative placeholder graphic.

Slides 15, 20, 25, 30, 35, and 40 retain their existing large titles, area names and colors, mini-maps, header dividers, and native narrative numbers. Change only the neutral kicker beat label to "FRB Agent". Remove all body objects, including captions, excerpts, tables, arrows, annotations, and footer statements. Add no visible placeholder in these six bodies.

The six application talk tracks are intentionally blank. Slide 10 retains its teaching-pattern explanation and advance cue, with the FRB narration removed. Existing time allocations are reservations, pending replacement content and rehearsal.

## 45. Four-slide Resources reference section, September 16, 2026

This supersedes the earlier single-state resource bibliography and slide 48 layout restrictions in §§14, 36, and 37. Slides 48 through 51 are four distinct static compositions with hard cuts. They keep the resource header, dark background, native text, and narrative numbers. No mini-maps, card panels, illustrations, or QR codes are added. The earlier ban on vendor courses is superseded by the approved 15-resource learning guide.

Use the resource title variant: x 48, y 68, width 864, height 42, Helvetica Bold 32 in primary text. The title is "Resources: " followed by the category. Keep the divider at y 122 and body start at y 146. Titles must fit one line. Category names are Core learning path, Building and operating systems, Model knowledge, and Continuing education.

Each resource is a flat three-line entry spanning x 48 to 912. The name is Helvetica Bold 20, followed on the same line by the author/provider and format in Regular 16 secondary text. Omit redundant provider names when the resource name already names the provider. The learning purpose is Regular 20 primary text on the next line. The final line is a real readable destination URL in Regular 16 secondary text. Use exact line spacing and boxes of 24 points for the first two lines and 20 points for the URL line. Line offsets are 0, 24, and 48. Resource titles and visible URLs carry native hyperlinks. Preserve the primary and secondary text colors for visited links. Show URLs without the scheme and optional www prefix, without invented short links or ellipses.

Slide 48 has four entries with an 80-point row pitch. Its evaluation reminder sits at x 48, y 466, width 864, height 25, Regular 20 in transition orange. Slide 49 has five entries with a 68-point row pitch, ending at y 486. Slides 50 and 51 each have three entries with a 104-point row pitch. Their brief optional-depth or supplementary-learning label sits at x 48, y 466, width 864, height 20, Regular 16 secondary text. Slide 51 links AI Engineer and Latent Space separately within one entry, including separate readable destinations on its URL line.

The deck now has 51 narrative slides and authored compositions, 56 physical slides, 57 states, one internal click, no Morph transitions, and 56 advances across the complete deck. Slides 49 through 51 are unhidden reference pages with no scheduled narration or additional talk time. The live sequence holds on slide 48 after its existing 0:08 handoff and 53 total advances. Section 3 remains 4:10. Preserve all other compositions, including the six blank FRB Agent reservations.


## 46. Individually numbered anatomy maps, September 16, 2026

This supersedes earlier map numbering, full-slide image geometry, and deck counts. The current numbering migration is `internal/deck/anatomy-numbering-map.json`. Earlier dated sections keep their historical slide numbers; apply that migration to their active compositions. Former slides 10 through 51 become slides 15 through 56. Opening states formerly grouped under slide 9 become independent slides 9 through 14. The closing map is slide 46.

The six opening maps show full brightness, Model, Harness, per-run services, across-run services, then full brightness. Each is a static composition with a hard cut, one native narrative number, and its own script. Place every opening map image at x 24, y 0, width 912, height 513 on the 960 by 540 canvas. This is a proportional 95% scale of the existing image. The outer border ends at y 498.75, leaving about 13 points above the number box at y 512. Preserve the existing generated artwork and highlight treatment. No additional visible titles, kickers, or text are added.

Place the closing map image at x 24, y 15, width 912, height 513. Its outer border ends at y 499.5, leaving about 12 points above the number box. Keep the native title and two-row area key at their §34 sizes and positions. This explicitly supersedes §34's instruction against scaling the closing image. Preserve the generated SVG geometry, labels, area colors, and all mini-maps. No diagram regeneration is needed for these placement changes.

The opening scripts total 1:30: 0:15, 0:12, 0:25, 0:13, 0:15, and 0:10. Orientation remains 0:45, so beat 2.0 is 2:15. The closing map remains 0:50. Section 2's rehearsal reference is 28:55; the full reference is 37:05. The working ranges remain unchanged.

The current deck has 56 narrative slides, 56 authored compositions, 56 physical slides, 57 presentation states, one internal click, no Morph transitions, and 56 advances. Narrative numbers now match physical slide numbers. Section 2 is slides 9 through 46; Section 3 is 47 through 56. The closing statement is slide 52. Resources are 53 through 56, with 53 holding during Q&A after 53 advances and 54 through 56 untimed. The blank FRB Agent reservations are 20, 25, 30, 35, 40, and 45; orientation is 15. All other visual specifications remain in force.
