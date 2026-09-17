# AGENTS.md

This file provides guidance to coding agents when working in this repository.

## What this is

Preparation materials for a 50-minute conference talk on September 17, 2026. The Markdown sources are accompanied by diagram assets, a photo, the `style/` design brief, and reusable PowerPoint build code. `internal/build-diagrams.mjs` regenerates diagram variants and renders from the base SVG; it needs Node and Google Chrome and no packages. `internal/deck/build.mjs` builds, renders, and validates the PowerPoint deck with Codex's bundled runtimes and the Presentations plugin. Read `internal/deck/README.md` before changing the builder. There is no lint or package install step. Run `node --test internal/deck/expand.test.mjs` for the state-expansion compiler checks. Context7 is disabled in the local Claude settings.

The README holds the session details, the published talk description, and the repo layout. Read it first.

## Rebuilding the deck

Run `node internal/deck/build.mjs`. Keep the reusable scripts in `internal/deck/`; never make `.deck-build/` the only copy of authoring code. The latter is ignored scratch space. The builder creates a new output filename each run. Keep only the current deck directly in `output/`; preserve every older deck in `output/archive/`. After a successful build into `output/`, the builder archives the previous decks automatically. Follow the same rule for decks created or revised outside the builder. Never delete or overwrite archived decks, and keep links to moved decks accurate.

Speaker notes reload the talk track from Markdown, without timestamps, metadata, or material after the advance cue. Build cues use native bold uppercase headings. Research links and rehearsal guidance remain in Markdown. Visible text, layouts, and click assignments are authored in `internal/deck/author.mjs`; update those blocks alongside the corresponding slide specs. Rebuild from the saved code instead of reconstructing the deck. Inspect rendered states after changes and validate native PowerPoint playback before presenting.

The 56 narrative slides use 56 authored compositions, including three untimed resource pages. `internal/deck/expand.mjs` preserves 56 physical slides in the current static compositions, retaining one internal click and no Morph transitions. Every physical slide displays its narrative number. The presentation has 57 states and 56 advances across the complete deck. Preserve both authored and expanded build maps, and inspect full editing views as well as presentation states.

## Source of truth and the evidence layer

`outlines/outline-v2.md` is the current talk. `outlines/outline-v1.md` is history and is not edited.

The outline and the three research files form a two-layer system:

- **Outline** cites sources in short form and points to a research section, for example "Research §2" at the end of a beat. It never carries full quotes or URLs.
- **Research** (`research/section-N.md`, one per talk section) holds the full quotes, dates, URLs, and verification status. Section 2 research is numbered §0 through §7, where §0 is the map and §1 through §6 match outline beats 2.1 through 2.6.

Every source entry in research has the same shape: a bold line with author, title, venue, and date, a verification marker, the URL, then bullet quotes. Each research file ends with a `## Verify before stage` list and a `**Do not use:**` line.

## The slides layer

`slides/section-N/NN-descriptive-name.md` holds one file per slide, numbered to match the outline (`01` through `56`). Each file is a tool-agnostic spec with five sections: on-slide text build by build, layout and visual notes, a near-script talk track with `[m:ss]` marks and bold must-say lines, short-form sources pointing to research sections, and open items.

Slide files render the outline. They do not restate its reasoning and they never introduce a claim. A new claim goes into the research file and the outline first, then onto the slide. The `[verify]`, `[you write]`, and `[your story]` markers mean the same thing in slide files as in the outline.

Conventions the slide files follow:

- **Time splits.** A two-slide beat splits its time between the two files, stated in each header, and the two must sum to the beat. Section sums must match the outline's checks blocks.
- **Section dividers.** Slides 4, 8, and 47 are matching typographic dividers with hard cuts and no internal builds. Each takes 0:10. Slides 4 and 8 are budgeted within Section 1; slide 47 is in Section 3.
- **Area names.** Use Model Selection, Context Engineering, Tools & Extensibility, Orchestration, Verification & Evals, and AgentOps. Preserve the opening maps on slides 9 through 14 and the connected-area recap on slide 46. Keep Production operations as the existing skill on slide 48.
- **Resources.** Slides 53 through 56 present all 15 resources from the external learning guide, grouped by purpose. Slide 53 stays visible during Q&A. Slides 54 through 56 are static, unhidden, untimed references. Keep clickable titles and readable URLs. Older references outside the guide remain in research only. Design brief §45 defines their layout.
- **Kickers.** The orientation on slide 15 uses a neutral section kicker and `mini-all`. Area slides in Section 2 use the area name in Bold and its area color, followed by a neutral beat label. A mini-map sits top right. Section 3 uses "The transition · " plus the beat name, with a mini-map except on recap slide 50. Full-screen diagrams remain standalone.
- **Pitfalls.** Every area discusses decision-specific pitfalls and highlights one headline pitfall in the body. The sentence matches slide 50 word for word. A separate FRB application follows. Slide 50 retains six recap bands with area names in the blocks.
- **Takeaways are spoken, not shown.** Content titles identify the responsibility. The agenda includes the agreed learning goals.
- **Personal stories.** The Section 2 rework removed story #2 and its reservation. The Section 3 review removed story #3. Preserve presenter-authored slot #1. The optional bio story is not included in the current 4:00 Section 1 target. Do not invent it.
- **Cut order.** Each talk track names what to cut first if the section runs long and what may never be cut.
- **Diagram.** Slides 9 through 14 use the renders of `internal/anatomy-of-an-agentic-ai-system-landscape.svg`; slide 46 uses the render of the `-closing.svg` variant generated from it, with a native six-area key and title; the mini-maps are generated from it too. Run `node internal/build-diagrams.mjs` if the base changes.
- **Visual values.** `style/design-brief.md` holds the type scale, grid, color roles, area colors, component specs, build rules, and diagram theme. Slide files describe intent in words like "small" or "strip" and defer to the brief for every size, color, and position. A visual change goes into the brief, not into slide files.

## Markers

Research files use two markers:

- `[primary]` means the source was fetched and quoted directly.
- `UNVERIFIED` means the claim came from a snippet or secondary coverage.

The outline uses three:

- `[verify]` flags a claim to confirm in a browser before it goes on a slide. It mirrors the research file's verify list and the "Verify in a browser" table at the end of the outline.
- `[your story]` and `[you write]` mark slots only the presenter can fill. Leave them as slots.
- Inside a "Say" bullet, **bold** marks a must-say line. Unbolded text is backup for questions.

A claim graduates from `UNVERIFIED` to `[primary]` only after being checked in a browser, and only then may its `[verify]` flag come off in the outline.

## Invariants when editing the outline

- **Scope is fixed.** The talk description in the README was published to attendees. Every outline version must cover every topic it names. Only the weighting changes.
- **Two named tools.** The coding agents named on stage are Codex CLI and Devin. Their brief spoken anchors remain in Section 2. The standalone user screens and screenshot walkthroughs were removed in the Section 2 rework. Other products appear only as incident evidence in the core talk. The approved Resources reference section also names learning providers and framework curricula. Tool facts come from vendor documentation and are marked `[primary]` in research with the date checked.
- **Time and slide counts must reconcile.** Section 1 is 4:00 across slides 1 through 8. Section 2 is 25:00 to 29:00 across slides 9 through 46, with a 28:55 rehearsal reference. Section 3 is 4:10 across timed slides 47 through 53. Slides 54 through 56 are untimed resource pages. Slide 53 holds the core learning path during Q&A. Presentation time is approximately 33:10 to 37:10; discussion fills the rest of the 50-minute session. Each section ends with a checks block that sums its beat times and maps description coverage. Update it and the structure table when timings or numbering change.
- **Every Section 2 area uses the same five-screen pattern:** quote, combined definition and importance (technical foundations in all six areas), decisions and trade-offs, challenges and pitfalls, and separate FRB application. Each is a separately numbered static slide. AgentOps is the final area, followed by the responsibility map on slide 46. Headline pitfalls also appear on slide 50. Section 2 has no user/owner pairing or reserved personal story.
- **Beat format is fixed.** Time, slide, say, takeaway line, sources. It is a talk track, not a script.

## Adding or changing a claim

1. Put the full quote, date, and URL in the matching research file with a marker.
2. Cite it in the outline in short form and point to the research section.
3. If it is `UNVERIFIED`, flag it `[verify]` in the outline and add it to both the research file's verify list and the outline's closing verify table.
4. Check the "Do not use on stage" list at the end of the outline before promoting any statistic. Several widely circulated figures are listed there as untraceable or misattributed.

## Prose style

Short declarative sentences. No em-dashes anywhere in the repo. Takeaway lines are quoted. Times are written as `m:ss`. Sources inside the outline name the author or organization and month, not a URL.
