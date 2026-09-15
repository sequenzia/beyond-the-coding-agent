# Design brief

Visual and typographic decisions for the deck. Companion to `style/colors.md`, which holds the palette. Decided September 14, 2026. Revised the same day after the mockup gate, which replaced the monochrome typographic system with the system in sections 5 and 6. The mockup that passed the gate is at https://claude.ai/artifact/S6Yg8AQSPH1EMwW28Qvxms, eight states from seven slides at one point per pixel.

## 1. Scope and precedence

- This brief owns every visual value: size, weight, color, position, stroke, radius, and animation.
- Slide files under `slides/` own the words, the build order, and the intent. They describe visuals in plain words such as "small," "strip," or "large," and section 10 resolves those words to values.
- Where a slide file and this brief disagree on a visual value, the brief wins.
- Where the brief cannot satisfy a slide file, the slide file's own fallback wording applies. Slide specs may name a fallback. Section 14 records the current layout decisions.
- A visual change goes into this brief. It does not go into a slide file.
- Three orientation devices: the kicker, the mini-map, and the narrative slide number. No other footer, logo, progress bar, employer name, contact details, or takeaway lines on screen.
- The brief carries no talk content. It names slides by number only.

**The concept.** The anatomy diagram is the talk's spine. Slide 7 introduces it, Section 2 walks six boxes on it, slide 19 returns to it with "yours" on every box. Every slide lives inside that map. A mini-map at top right says where you are. Each area borrows its color from where it sits on the map. Each area enters through a colored header. Helvetica carries the narrative and numbering. Monospace marks commands, filenames, formulas, and the opening code metaphor.

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
| Amber | `#fdad00` | the operating and warning color. Operating. `works.any()`. The "yours" badge |
| Blue tint | `#13223f` | blue over the background. The Model region fill and the area card on 9 |
| Pink tint | `#2b1b2c` | pink over the background. The Harness region fill and the area cards on 13 |
| Green tint | `#122926` | green over the background. Area cards in the Evals area, if a slide file ever names one |
| Amber tint | `#302819` | amber over the background. Area cards in the Operating area, if a slide file ever names one |

Tints fill area cards only. They never carry meaning alone, because 12% vanishes on a projector. A card's stroke, a block's fill, or colored text carries the meaning; the tint only lifts.

### Area colors

| Talk area | Slides | Color | Map home |
|---|---|---|---|
| Models | 8, 9 | blue | Model |
| Context and knowledge | 10, 11 | pink | Context and memory, Instructions, Data and knowledge |
| Tools and extensibility | 12, 13 | pink | Tools |
| Orchestration | 14, 15 | pink | Orchestration |
| Verification and evals | 16, 17 | green | Verification, Evaluations |
| Operating it | 18, 19 | amber | Identity and access, Security, Guardrails, Observability, Governance |
| Section 1 | 1 to 6 | pink for a landing word; slide 1 carries amber and green; slide 5 carries all four | |
| Section 3 content | 21 to 24 | green; slide 21 and 23 carry all four | |

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

The deck has 26 narrative slides, 34 authored compositions, and 64 physical PowerPoint slides. The compiler splits each composition at every finite object exit. The first segment keeps the authoring key; later segments append the original boundary, for example `12b-c1`. Morph applies only to the first segment of each of the seven existing destinations. There are 83 presentation states, 19 internal clicks, and 82 advances. Narrative numbers, original keys, state intervals, and physical indices are recorded in build maps and speaker notes. The 35:00 timing stays unchanged.

## 8. Diagram re-theme

**Source of truth.** `internal/anatomy-of-an-agentic-ai-system-landscape.svg`, hand-edited, in the dark theme below, with a `<g id>` per layer. Every other diagram file is generated from it by `internal/build-diagrams.mjs`: the `-yours` variant beside it, the four highlight states and seven mini-map variants under `internal/generated/`, and the PNG renders under `internal/renders/`. Edit the base, run the script, and every variant and render follows.

### Color mapping

| Element | Value |
|---|---|
| Canvas | `#14161c` |
| Title | 40 units (20) Bold primary. Kept in the SVG because slide 7 uses it as the slide title |
| Platform, One run, Agent containers | no fill. 2 unit (1) stroke `#4c4d50`. One run keeps its dash, 12 8. Labels 40 units Bold primary. Descriptions 24 units Regular secondary |
| Per-run and Across-runs row labels | 32 units Bold primary. Descriptions 24 units Regular secondary |
| The 13 generic boxes | fill `#303236`, no stroke. Title 32 units (16) Bold primary. Subtitle 24 units (12) Regular secondary |
| Model | fill `#13223f`, 4 unit (2) stroke `#1064f8`. Title `#1064f8`. Subtitle secondary, two lines |
| Harness | fill `#2b1b2c`, 4 unit stroke `#f948be`. Label `#f948be`. Description secondary. The six inner boxes as generic boxes |
| Goal | no fill. 4 unit stroke `#adaca9`. Title primary. Subtitle secondary, two lines |
| Stopping condition | a generic box. Title 28 units Bold on three lines, the one exception to 32 |
| Arrows and the plus sign | `#adaca9`. Arrows 4 units with a 20 unit marker. Plus sign 56 units |
| Green | absent from the full map. Present only on the mini-map |

**Why this mapping.** Things get a fill and no stroke. Groupings get a stroke and no fill. So boxes and containers read differently at a glance. Model and Harness share one language, a tint plus a stroke, so the Model is not the loudest object on a slide whose subject is the harness. Goal stays neutral so slide 7 carries no amber and the badges are the only amber on slide 19. Blue on the Model extends the blue role from tools and commands to the vendor's component you select. Green stays out of the full map so it keeps its meaning on slide 21; the mini-map lights the Evals boxes green because there it names an area, not a state.

**Strokes and radii.** Hairline 2 units. Region and Goal strokes 4 units. Container radius 16 units (8). Box radius 10 units (5). Badge a full pill.

### Layout

The harness grid is re-laid so every 32 unit title fits on one line: two columns of 340 with a 16 gap, three rows of 90 with 12 gaps, inside a harness 730 wide. The width came from the Model box, now 210, and the stopping-condition box, now 298, whose title runs to three lines. Goal is 300 wide with its subtitle on two lines. Model, Goal, and the stopping condition are 140 tall and share a center line with the harness. The exact coordinates live in the SVG, not here.

### Highlight states

A highlight state sets every layer group except the named one to opacity 0.3: `model`, `harness`, `per-run`, `across-runs`. The title dims with the rest. Generated, not hand-edited.

### Mini-map variant

A text-free variant of the base for the 160 by 90 mini-map. Same boxes and the harness container, nothing else. Outlines 18 units, which is 1.5 at 160 wide, in `#adaca9`, no fill. Box radius 14 units, container radius 20. The harness rows and the per-run and across-runs boxes are respaced so their gaps survive at a twelfth of the size: harness boxes 328 by 80 in two columns with a 40 gap and three rows with 26 gaps; the row boxes 560 wide with 48 gaps. A lit box is filled in its area color with no stroke. Seven states: `mini-models`, `mini-context`, `mini-tools`, `mini-orchestration`, `mini-evals`, `mini-operating`, `mini-all`, lighting the boxes the area table in section 5 names. Fallback if the mini renders read as clutter on the venue screen: a four-layer schematic drawn as four native rounded rectangles.

### Production path

1. Edit the base SVG. Keep the layer groups: `title`, `platform`, `per-run`, `one-run`, `goal`, `agent`, `model`, `plus`, `harness`, `stop`, `arrows`, `across-runs`. Keep the `box-` ids on the rectangles; the generator reads them for badges and mini-maps.
2. Run `node internal/build-diagrams.mjs`. It writes the `-yours` variant, the highlight states, the mini variants, and renders every PNG through headless Chrome, which resolves system Helvetica. It needs Node and Google Chrome and nothing else.
3. Renders: `map-full`, `map-model`, `map-harness`, `map-per-run`, `map-across-runs`, `map-yours` at 3840 by 2160, and the seven `mini-` files at 640 by 360, all in `internal/renders/`.
4. Confirm the render is Helvetica and not a fallback face by comparing a title against the deck.

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
