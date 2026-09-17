# Reusable PowerPoint build

This directory is the editable source for the PowerPoint deck. Keep these files in Git. `.deck-build/` contains disposable build snapshots, intermediate PPTX files, renders, and validation reports. The builder never reads from an older build directory.

**Current revision, September 16, 2026:** the outline, numbered specs, and builder now implement 51 narrative slides. Section 2 has five static slides per area and a 25:00-to-29:00 range. The current numbering migration is in `internal/deck/section-2-orientation-numbering-map.json`; the Section 1 map remains a historical authoring record; the prior Section 2 map remains a historical authoring record. Layout rules are in the design brief, with the four-page Resources composition in §45. The compiler and notes tests cover the new numbering. Section 3 now keeps only the four-step roadmap, uses orange headers, and ends with resources after the close.

## Rebuild

From the repository root:

```sh
node internal/deck/build.mjs
```

The command writes a new timestamped `.pptx` under `output/`. It prints the output path and the private build directory. After validation succeeds, it moves older decks into `output/archive/`, leaving only the current deck directly in `output/`. Archived decks are never overwritten; filename collisions receive a numeric suffix. PowerPoint lock files are skipped. Only builds written directly into `output/` trigger archiving.

To choose a revision name:

```sh
node internal/deck/build.mjs --output output/beyond-the-coding-agent-v2.pptx
```

For a faster layout iteration, limit the PNG previews to selected source slide keys. The PPTX and package validation still cover the whole deck:

```sh
node internal/deck/build.mjs --output output/models-revision.pptx --slides 11,12,13,14,15
```

Run the default command before delivery to render every state. Use `--help` for command syntax. Paths supplied to `--output` are relative to the repository root, even if the command is run from another working directory.

## Dependencies

The build uses the Codex bundled Node and Python runtimes and the installed Presentations plugin. It was verified with bundle `26.909.12148`. No dependencies or licensed fonts are copied into this repository.

- Node runtime with `@oai/artifact-tool`, `@napi-rs/canvas`, and `sharp`.
- Artifact Tool's bundled `skia-canvas` renderer.
- Python with `lxml`.
- Presentations skill finalizer and its package/layout validators.
- Helvetica installed on the build machine. Consolas Regular and Bold font files available for both renderers.

The runner discovers the standard Codex runtime under the current user's home directory and the newest installed Presentations skill. It finds Consolas in PowerPoint's macOS resources or the Windows Fonts directory. The complete build has been tested on macOS; other build platforms need compatible runtimes and fonts. Windows presentation playback is a separate check described in `style/design-brief.md` section 9.

If the installation layout changes, use the paths returned by Codex's `load_workspace_dependencies` tool to set these environment variables. Values should be absolute paths:

| Variable | Meaning |
| --- | --- |
| `RUNTIME_NODE` | Bundled Node executable used for every build step |
| `RUNTIME_PYTHON` | Bundled Python executable |
| `RUNTIME_NODE_MODULES` | Directory containing bundled Node packages |
| `PRESENTATIONS_SKILL_DIR` | Installed `skills/presentations` directory, containing `container_tools/` |
| `DECK_CONSOLAS_REGULAR` | Optional explicit path to Consolas Regular |
| `DECK_CONSOLAS_BOLD` | Optional explicit path to Consolas Bold |

The launcher itself needs Node on `PATH`. If it is unavailable, invoke `build.mjs` with the bundled Node executable. There is no `npm install` step. Do not replace the bundled Artifact Tool with another presentation library.

## How to make updates

1. Update the relevant Markdown in `slides/`. For a new claim, update research and outline first, following `AGENTS.md`.
2. Update visible text or layout in the matching `await newSlide('NN')` block in `author.mjs`. Change visual values in `style/design-brief.md` first, then apply them to the builder's components.
3. If the base anatomy SVG changes, run `node internal/build-diagrams.mjs` before rebuilding the deck.
4. Rebuild. Inspect the PNG states named `key-click.png` in the printed `renders/` directory, plus every complete physical slide in `physical-renders/`. Continuation keys include the original state boundary, such as `15-c1`. Fix overlaps and awkward wrapping in `author.mjs`, then rebuild to a new output filename.
5. Open the final PPTX in PowerPoint and rehearse the clicks and transitions. Rendered images and automated checks cannot validate playback on the presentation machine.

**Markdown synchronization:** speaker notes reload the talk track from Markdown on each build. The export removes timestamps, puts build cues in bold uppercase paragraphs with blank lines around them, and ends after the advance instruction. Slide 48 holds the core learning path and ends at the Q&A handoff. Slides 49 through 51 are untimed, unhidden reference pages whose notes end with a return to slide 48. Metadata, authoring notes, cut guidance after the advance, backup sections, sources, research links, and open items stay out of exported notes. Timing and evidence remain in the source Markdown. Visible slide copy, geometry, and click assignments are deliberately authored in JavaScript. Editing on-slide text in Markdown alone does not change the visible slide. Keep both layers in sync. Manual PowerPoint edits also need to be transferred into the builder before the next rebuild.

**FRB Agent reservations:** slides 15, 20, 25, 30, 35, and 40 currently retain only their headers and narrative numbers. Their Markdown talk tracks contain only `<!-- intentionally blank -->`, which exports an empty native notes body. Tests and package validation require blank notes on exactly these six slides; all other slides still require an advance or closing handoff. When replacement scripts are ready, remove the marker and update those validation expectations. Slide 10 keeps its teaching pattern, labels the fifth item "FRB Agent", and reserves the right column with "FRB". Existing time allocations remain reserved.

### Section 2 content and assets

Current area names: Model Selection, Context Engineering, Tools & Extensibility, Orchestration, Verification & Evals, and AgentOps. `AREA_NAMES` in `author.mjs` supplies the agenda, area headers, competency table, and recap. Preserve the opening map on slide 9. Slide 41 uses `map-closing.png`, derived from the base SVG, with a native title and two-row area key. Its highlighted components connect the six areas; no ownership badges remain. Use `node internal/build-diagrams.mjs --closing-only` to regenerate the closing variant without altering opening-map assets. Design brief §26 defines the naming update and wrapped recap labels. Dated revision history below retains the names used at the time.

The map and a static teaching-pattern and FRB orientation open Section 2. The six standalone user screens and screenshot placeholders are removed. Each area now has an opening quote, a combined definition-and-importance screen (technical foundations in all six areas), decisions, pitfalls, and an FRB application. The six quote illustrations and anatomy renders remain in `internal/`. Quote text, definitions, decisions, pitfalls, and application evidence remain editable native objects. Visible copy is explicit in `section2Areas` and the associated compositions in `author.mjs`; speaker notes load from the numbered specs.

Full anatomy renders are 7680 by 4320 PNGs, rendered directly from the SVG at device scale 4 for 5K and 6K presentation displays. Mini-maps remain 640 by 360. The generator checks PNG dimensions. Diagram descriptions use a semantic `diagram-description` class, which the closing variant omits independently of font size. The deck embeds the original PNG bytes with image compression disabled. After changes, inspect the full map and four highlights at presentation resolution as well as the default previews, which are only 1280 by 720. Design brief §8 defines the larger, brighter description text and light Model label.

### Builds and slide numbering

The opening order is title (1), unchanged bio (2), agenda (3), Section 1 divider (4), deterministic logic and model behavior (5, 0:55), reliability (6, 0:45), engineering responsibilities (7, 1:00), then Section 2 divider (8). All three dividers use the same component. All eight Section 1 compositions are static. Slide 7 has no replacement screen. Slides 5 through 8 total 2:50; their locked scripts retain selective delegation, explicit determinism, and enforced boundaries. The closing thesis remains on slide 47. Resources now span slides 48 through 51. Slide 48 stays visible during Q&A; the other three pages have 0:00 scheduled time and are available for optional browsing.

There are 51 narrative slides, 51 authored compositions, and 56 physical PowerPoint slides. Each narrative slide has one authored composition. The compiler creates another 5 slides at replacement boundaries. There are 57 presentation states, one internal click, no Morph transitions, and 56 advances across the complete deck. Section 2 remains 25:00 to 29:00, with a 28:30 rehearsal reference; Section 1 is 4:00 and Section 3 is 4:10. The presentation is approximately 33:10 to 37:10; discussion fills the rest of the 50-minute session.

The live sequence still holds on slide 48 after 53 advances. Resource names and readable URLs contain native hyperlinks, validated against their authored destinations during packaging. All 15 resources appear once, with separate AI Engineer and Latent Space destinations within one entry.

Every physical slide has an editable narrative number from 1 through 51. Continuations repeat their narrative number. The number is added last so images and bands cannot cover it. Its geometry and typography live in design brief section 6.

Each object's options define when it appears:

```js
text('Visible after click 1, replaced at click 2.', 48, 180, 864, 60, 24,
  { start: 1, end: 2 });
```

`start: 0` is initially visible. `end: 99` means it remains visible. Every finite exit becomes a boundary between consecutive physical slides. Each segment contains only objects whose lifetimes intersect it. Objects visible at the boundary appear immediately. Later additions retain their order and effects, with local click numbers starting at 1. The default effect is Appear for text and Fade for cards/images; `effect` and `duration` can override it. Replacement boundaries are hard cuts. `morph: true` on `newSlide()` applies only to the first segment of that composition. Keep shared `!!` names stable across the paired slides. Geometry and text sizes in the authoring helpers are points, converted to the Artifact Tool's CSS pixels internally.

`build-map.json` preserves authored keys and original object lifetimes. `expanded-build-map.json` adds the original key, narrative number, inclusive original state interval, physical index, and local-to-original state mapping for each physical slide. The first segment keeps its key; continuations append `-c` and the original boundary, for example `15-c1`. `native-build-map.json` adds PowerPoint shape IDs. Every segment keeps its narrative slide's cleaned talk track and native bold formatting. Build mapping metadata stays in the maps.

`--slides 13,14` renders every segment generated from those original keys. `render-map.json` connects each preview to its original state. Slide 9 produces six physical slides: full brightness, four highlights, then full brightness.

Expected counts live in `expand.mjs`; packaging also asserts the native slide, click, and transition counts, notes cutoff, and bold build cues. The compiler checks every state's content, geometry, object order, and notes before export. Run the compiler and notes tests with `node --test internal/deck/expand.test.mjs internal/deck/notes.test.mjs`. Keep the 51-slide narrative and the selected Section 2 timing range synchronized with the outline and specs.

## Files and build stages

| File | Responsibility |
| --- | --- |
| `build.mjs` | Resolves dependencies, creates an isolated run directory, snapshots scripts and input hashes, runs all stages |
| `archive.mjs` | Moves previous decks into `output/archive/` after a successful build without overwriting archived revisions |
| `author.mjs` | Theme, components, visible copy, layout, source notes, and object build metadata |
| `notes.mjs` | Extracts the talk track through the handoff, removes timestamps, and formats build cues and must-say text |
| `expand.mjs` | Splits replacements into physical slides, preserves source mapping, rebases reveals, and checks state equivalence |
| `expand.test.mjs` | Focused compiler checks for replacement boundaries, sparse clicks, notes, Morph, and source selection |
| `package.py` | Adds native click animation XML, Morph, font policy, line spacing, and border corrections |
| `render.mjs` | Imports the candidate PPTX and renders every presentation state and complete physical slide; reports likely text-fit problems |
| `finalize.mjs` | Checks 56 slides, native tables, geometry, fonts, package integrity, and Artifact Tool import; writes a new final PPTX |
| `runtime.mjs` | Shared runtime paths and font registration |

Each run records `build-manifest.json`, stage logs, authored and expanded models and maps, `native-build-map.json`, `render-map.json`, `fit-warnings.json`, PNG previews, and `validation.json`. The receipt includes expansion, native-build, and render checks, and distinguishes narrative, authored, and physical counts. The manifest hashes inputs and the final PPTX so a future update can be compared with a known build. It also records the runtime locations; keep this generated file private in `.deck-build/`.

The native XML patcher includes two PowerPoint compatibility fixes: each text body has only one autofit element, and table border children stay in schema order. Preserve those fixes when changing the patcher. The exported package may vary in internal IDs and timestamps between builds; compare rendered states and semantic content rather than expecting identical PPTX bytes.


## Revision history

The following pass notes record earlier iterations. Later sections supersede earlier details. Current counts and composition behavior are specified above. The following historical source keys refer to earlier numbering.

### September 15 essential-corrections pass

The paired Section 2 labels are “When you are the user” and “When you are the owner”. The user slide contains the “What someone engineered” bridge. Source keys and historical filenames remain stable. This pass preserves all six screenshot placeholders, story #2 as a 60-second personal-story slot, and all resource content and destination/QR decisions. See design brief section 13 for that pass's evidence layouts.


## Header-spacing and section-transition pass

`slideHeader()` centralizes the divider and reserved header area; its four variants are recorded in design brief section 14. `sectionDivider()` builds matching source slides 6 and 20. Both boundaries use hard cuts. Section 3 now runs from 20 through 26; What transfers takes 1:05 and the new divider takes 0:10. The total remains 35:00.

Context, context ownership, orchestration ownership, Operating it, and the roadmap use replacement states to preserve readable type. The six screenshot object names remain paired for Morph. Resources stay on one state. Typography uses Helvetica for numbering and plain attributions, retaining Consolas for code.

## Readable editing views and narrative numbering

Replacement states now compile to consecutive slides. Additive reveals stay animated, so their combined content remains visible in editing mode. The seven existing Morph destinations are preserved. Every slide carries the shared narrative number. Slide 19's triangle and its labels move together 32 points left to clear it. Content, talk tracks, timing, and all presenter slots remain unchanged.


## Models revision, September 15, 2026

This pass replaces the first Models pilot and supersedes the Models and count references in the historical notes above. Models is five static screens: `08`, `09`, `09-c1`, `09-c2`, and `09-c3`. Source `08b` remains removed. Source `09` has replacements at original states 1, 2, and 3. Each compiled screen is fully visible, with no internal click. All five screens use hard cuts.

Models keeps 3:30: user 0:30, quote 0:20, decisions 1:05, maintenance 0:50, and FRB application 0:45. The smaller Devin Desktop screenshot remains a labeled placeholder. The quote has editable text plus `internal/illustrations/models-in-system.png`; its prompt and provenance are saved alongside it. The build manifest hashes illustration files.

The general owner screens address task fit, routing, and model-change policy. The final screen applies those choices to an illustrative FRB starting design. The maintenance screen's headline pitfall matches slide 23. See design brief section 17 for visual values and the outline's Section 2 pattern for the remaining areas' decision and quote map. Complete the Models review before changing the next area.


## Context & Knowledge revision, September 15, 2026

Context now matches the five-screen pattern: `10`, `11`, `11-c1`, `11-c2`, and `11-c3`. Source `10b` is removed. Source `11` uses replacement boundaries at 1, 2, and 3. All screens show complete content on entry and use hard cuts. The smaller AGENTS.md image remains a labeled placeholder. The quote uses `internal/illustrations/context-selection.png`; its prompt and provenance are saved beside it.

The 3:30 area splits user 0:30, quote 0:20, decisions 1:05, maintenance 0:50, and application 0:45. General decisions cover context selection, persistence and refresh, and provenance with access. The final screen shows two FRB source excerpts beside the proposed Select, Retain, and Refresh choices. Design brief section 18 specifies the layout. Models stays unchanged. Review Context before continuing to Tools & Extensibility.


## Tools & Extensibility revision, September 15, 2026

Tools now uses `12`, `13`, `13-c1`, `13-c2`, and `13-c3`. Source `12b` is removed. Source `13` uses replacement boundaries at 1, 2, and 3. All five screens show complete content on entry and use hard cuts. One MCP configuration screenshot remains a labeled placeholder. The quote uses `internal/illustrations/tools-interface.png`, with its prompt and provenance saved alongside it.

The 3:00 area splits user 0:25, quote 0:20, decisions 0:55, maintenance 0:40, and application 0:40. The owner sequence covers capabilities, caller contracts, execution rules, maintenance, and the focused Export cited brief contract. Background parsing and indexing remain distinct from the agent-facing operation. See design brief section 19. Models and Context stay unchanged. Review Tools before proceeding to Orchestration.


## Orchestration revision, September 15, 2026

Orchestration uses `14`, `15`, `15-c1`, `15-c2`, and `15-c3`. Source `14b` is removed. Source `15` has replacement boundaries at 1, 2, and 3. Every screen shows its complete content on entry and uses a hard cut. The user screen has a labeled Codex plan-mode screenshot placeholder. The quote uses `internal/illustrations/orchestration-path.png`; prompt and provenance are saved alongside it.

The 3:30 area splits 0:30 user, 0:20 quote, 1:05 decisions, 0:50 maintenance, and 0:45 application. General content covers next-step control, delegation, stopping and recovery. The FRB screen presents six predefined steps, verification before export, and a resume/retry rule. No audience pause is added. The benchmark comparisons and duplicated Osmani quote leave the active Orchestration slides. See design brief section 20. Review Orchestration before continuing to Verification and Evals.


## Verification and Evals revision, September 15, 2026

Evals uses `16`, `17`, `17-c1`, `17-c2`, and `17-c3`. Source `16b` is removed. Source `17` has replacement boundaries at 1, 2, and 3. All screens show complete content on entry and use hard cuts. The test-run screenshot is a labeled placeholder. The quote uses `internal/illustrations/evals-inspection.png`, with its prompt and provenance saved alongside it.

The 5:00 area splits 0:30 user, 0:20 quote, 1:15 decisions, 1:55 maintenance including the protected 1:00 personal story, and 1:00 application. Story #2 is now on source 17's maintenance state (original state 2), with no extra advance. The FRB source-support check follows it and remains visibly illustrative. The deliberately wrong answer's citation is recorded in `internal/frb-running-example.md`. Keep the distinction between an existing reference and a supported claim. Probability notation and the broader check matrix remain research backup. See design brief section 21. Review Evals before proceeding to Operating it.


## Operating it and Section 2 completion, September 15, 2026

Operating it uses `18`, `19`, `19-c1`, `19-c2`, `19-c3`, then the unchanged `19b` yours diagram. Source `18b` is removed. Source `19` has replacements at 1, 2, and 3. All six screens show complete content on entry and use hard cuts. The user example is estimated session usage in Devin CLI, retained as a labeled screenshot placeholder. The quote uses `internal/illustrations/operating-observability.png`; prompt and provenance are saved alongside it. Its longer quotation keeps 44-point type and places attribution under the image.

The 4:30 area splits 0:30 user, 0:20 quote, 1:20 decisions, 1:00 maintenance, 0:55 FRB operating agreement, and 0:25 section wrap. The four decisions cover authority, observation, stopping/handoff, and accountable ownership. Incidents and detailed legal material remain research backup. See design brief section 22.

All six areas now follow the five-screen pattern. The agenda's pattern line and the map's narration are synchronized. Section 2 has no internal click reveals or Morph transitions. The deck's remaining internal click is Questions on source 26; the remaining Morph is the Section 3 competency transition at source 22b. The 26 narrative slides and 35:00 timing remain unchanged. Review the complete Section 2 sequence before rehearsal.
