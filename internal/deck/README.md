# Reusable PowerPoint build

This directory is the editable source for the PowerPoint deck. Keep these files in Git. `.deck-build/` contains disposable build snapshots, intermediate PPTX files, renders, and validation reports. The builder never reads from an older build directory.

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
node internal/deck/build.mjs --output output/models-revision.pptx --slides 08,08b,09
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
4. Rebuild. Inspect the PNG states named `key-click.png` in the printed `renders/` directory, plus every complete physical slide in `physical-renders/`. Continuation keys include the original state boundary, such as `12b-c1`. Fix overlaps and awkward wrapping in `author.mjs`, then rebuild to a new output filename.
5. Open the final PPTX in PowerPoint and rehearse the clicks and transitions. Rendered images and automated checks cannot validate playback on the presentation machine.

**Markdown synchronization:** speaker notes reload the talk track from Markdown on each build. The export removes timestamps, puts build cues in bold uppercase paragraphs with blank lines around them, and ends after the advance instruction. Slide 26 ends at the Q&A handoff. Metadata, authoring notes, cut guidance after the advance, backup sections, sources, research links, and open items stay out of exported notes. Timing and evidence remain in the source Markdown. Visible slide copy, geometry, and click assignments are deliberately authored in JavaScript. Editing on-slide text in Markdown alone does not change the visible slide. Keep both layers in sync. Manual PowerPoint edits also need to be transferred into the builder before the next rebuild.

### Screenshot placeholders

The six screenshot slots are labeled editable shapes created by `excerpt()` in `author.mjs`. They appear at full size and again in the smaller strips. To make an inserted screenshot survive rebuilds, save the PNG under `internal/`, replace the corresponding `excerpt()` calls with the `img()` helper, and retain the matching `!!screenshot-...` object name on both slides for Morph. Match the current coordinates and build options. Inserting a screenshot only in PowerPoint will not update the source code.

### Builds and slide numbering

There are 26 narrative slides, 34 authored compositions, and 64 physical PowerPoint slides. The additional authored keys are `08b`, `10b`, `12b`, `14b`, `16b`, `18b`, `19b`, and `22b`. The compiler creates another 30 slides at replacement boundaries. There are 83 presentation states, 19 internal clicks, seven Morph transitions, and 82 advances. The talk remains 35:00.

Every physical slide has an editable narrative number from 1 through 26. Continuations repeat their narrative number. The number is added last so images and bands cannot cover it. Its geometry and typography live in design brief section 6.

Each object's options define when it appears:

```js
text('Visible after click 1, replaced at click 2.', 48, 180, 864, 60, 24,
  { start: 1, end: 2 });
```

`start: 0` is initially visible. `end: 99` means it remains visible. Every finite exit becomes a boundary between consecutive physical slides. Each segment contains only objects whose lifetimes intersect it. Objects visible at the boundary appear immediately. Later additions retain their order and effects, with local click numbers starting at 1. The default effect is Appear for text and Fade for cards/images; `effect` and `duration` can override it. Replacement boundaries are hard cuts. `morph: true` on `newSlide()` applies only to the first segment of that composition. Keep shared `!!` names stable across the paired slides. Geometry and text sizes in the authoring helpers are points, converted to the Artifact Tool's CSS pixels internally.

`build-map.json` preserves authored keys and original object lifetimes. `expanded-build-map.json` adds the original key, narrative number, inclusive original state interval, physical index, and local-to-original state mapping for each physical slide. The first segment keeps its key; continuations append `-c` and the original boundary, for example `12b-c1`. `native-build-map.json` adds PowerPoint shape IDs. Every segment keeps its narrative slide's cleaned talk track and native bold formatting. Build mapping metadata stays in the maps.

`--slides 12,12b` renders every segment generated from those original keys. `render-map.json` connects each preview to its original state. Slide 7 produces six physical slides: full brightness, four highlights, then full brightness.

Expected counts live in `expand.mjs`; packaging also asserts the native slide, click, and transition counts, notes cutoff, and bold build cues. The compiler checks every state's content, geometry, object order, and notes before export. Run the compiler and notes tests with `node --test internal/deck/expand.test.mjs internal/deck/notes.test.mjs`. Do not silently change the 26-slide narrative or the timing invariants.

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
| `finalize.mjs` | Checks 64 slides, native tables, geometry, fonts, package integrity, and Artifact Tool import; writes a new final PPTX |
| `runtime.mjs` | Shared runtime paths and font registration |

Each run records `build-manifest.json`, stage logs, authored and expanded models and maps, `native-build-map.json`, `render-map.json`, `fit-warnings.json`, PNG previews, and `validation.json`. The receipt includes expansion, native-build, and render checks, and distinguishes narrative, authored, and physical counts. The manifest hashes inputs and the final PPTX so a future update can be compared with a known build. It also records the runtime locations; keep this generated file private in `.deck-build/`.

The native XML patcher includes two PowerPoint compatibility fixes: each text body has only one autofit element, and table border children stay in schema order. Preserve those fixes when changing the patcher. The exported package may vary in internal IDs and timestamps between builds; compare rendered states and semantic content rather than expecting identical PPTX bytes.


## September 15 essential-corrections pass

The paired Section 2 labels are “When you are the user” and “When you are the owner”. The user slide contains the “What someone engineered” bridge. Source keys and historical filenames remain stable. This pass preserves all six screenshot placeholders, story #2 as a 60-second personal-story slot, and all resource content and destination/QR decisions. See design brief section 13 for that pass's evidence layouts.


## Header-spacing and section-transition pass

`slideHeader()` centralizes the divider and reserved header area; its four variants are recorded in design brief section 14. `sectionDivider()` builds matching source slides 6 and 20. Both boundaries use hard cuts. Section 3 now runs from 20 through 26; What transfers takes 1:05 and the new divider takes 0:10. The total remains 35:00.

Context, context ownership, orchestration ownership, Operating it, and the roadmap use replacement states to preserve readable type. The six screenshot object names remain paired for Morph. Resources stay on one state. Typography uses Helvetica for numbering and plain attributions, retaining Consolas for code.

## Readable editing views and narrative numbering

Replacement states now compile to consecutive slides. Additive reveals stay animated, so their combined content remains visible in editing mode. The seven existing Morph destinations are preserved. Every slide carries the shared narrative number. Slide 19's triangle and its labels move together 32 points left to clear it. Content, talk tracks, timing, and all presenter slots remain unchanged.
