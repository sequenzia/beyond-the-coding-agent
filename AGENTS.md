# AGENTS.md

This file provides guidance to coding agents when working in this repository.

## What this is

Preparation materials for a 50-minute conference talk on September 17, 2026. The Markdown sources are accompanied by diagram assets, a photo, the `style/` design brief, and reusable PowerPoint build code. `internal/build-diagrams.mjs` regenerates diagram variants and renders from the base SVG; it needs Node and Google Chrome and no packages. `internal/deck/build.mjs` builds, renders, and validates the PowerPoint deck with Codex's bundled runtimes and the Presentations plugin. Read `internal/deck/README.md` before changing the builder. There is no lint or package install step. Run `node --test internal/deck/expand.test.mjs` for the state-expansion compiler checks. Context7 is disabled in the local Claude settings.

The README holds the session details, the published talk description, and the repo layout. Read it first.

## Rebuilding the deck

Run `node internal/deck/build.mjs`. Keep the reusable scripts in `internal/deck/`; never make `.deck-build/` the only copy of authoring code. The latter is ignored scratch space. The builder creates a new output filename each run. Keep only the current deck directly in `output/`; preserve every older deck in `output/archive/`. After a successful build into `output/`, the builder archives the previous decks automatically. Follow the same rule for decks created or revised outside the builder. Never delete or overwrite archived decks, and keep links to moved decks accurate.

Speaker notes reload the talk track from Markdown, without timestamps, metadata, or material after the advance cue. Build cues use native bold uppercase headings. Research links and rehearsal guidance remain in Markdown. Visible text, layouts, and click assignments are authored in `internal/deck/author.mjs`; update those blocks alongside the corresponding slide specs. Rebuild from the saved code instead of reconstructing the deck. Inspect rendered states after changes and validate native PowerPoint playback before presenting.

The 26 narrative slides use 28 authored compositions. `internal/deck/expand.mjs` splits compositions at finite object exits into 56 physical slides, retaining one internal click and one Morph transition. Every physical slide displays its narrative number. The presentation has 57 states and 56 advances. Preserve both authored and expanded build maps, and inspect full editing views as well as presentation states.

## Source of truth and the evidence layer

`outlines/outline-v2.md` is the current talk. `outlines/outline-v1.md` is history and is not edited.

The outline and the three research files form a two-layer system:

- **Outline** cites sources in short form and points to a research section, for example "Research §2" at the end of a beat. It never carries full quotes or URLs.
- **Research** (`research/section-N.md`, one per talk section) holds the full quotes, dates, URLs, and verification status. Section 2 research is numbered §0 through §7, where §0 is the map and §1 through §6 match outline beats 2.1 through 2.6.

Every source entry in research has the same shape: a bold line with author, title, venue, and date, a verification marker, the URL, then bullet quotes. Each research file ends with a `## Verify before stage` list and a `**Do not use:**` line.

## The slides layer

`slides/section-N/NN-descriptive-name.md` holds one file per slide, numbered to match the outline (`01` through `26`). Each file is a tool-agnostic spec with five sections: on-slide text build by build, layout and visual notes, a near-script talk track with `[m:ss]` marks and bold must-say lines, short-form sources pointing to research sections, and open items.

Slide files render the outline. They do not restate its reasoning and they never introduce a claim. A new claim goes into the research file and the outline first, then onto the slide. The `[verify]`, `[you write]`, and `[your story]` markers mean the same thing in slide files as in the outline.

Conventions the slide files follow:

- **Time splits.** A two-slide beat splits its time between the two files, stated in each header, and the two must sum to the beat. Section sums must match the outline's checks blocks.
- **Section dividers.** Slides 6 and 20 are matching typographic dividers with hard cuts and no internal builds. Slide 6 takes 0:15 in Section 1; slide 20 takes 0:10 in Section 3.
- **Kickers.** Every Section 2 area has a full-color area header on its static user screen. It uses one screenshot and two short explanations, with no shrink-to-strip continuation. Owner screens use a top-left kicker, area name then beat, such as "Models · When you are the owner". The area name is Bold in the area's color. Section 3 uses "The transition · " plus the beat name. A mini-map sits top right on every kicker slide except 23, with the current area's boxes lit. Full-screen diagrams keep standalone compositions.
- **Pitfalls.** Every area discusses decision-specific pitfalls and highlights one headline pitfall in the maintenance screen body. The sentence matches slide 23 word for word. A separate FRB application follows. Slide 23 retains the six recap bands with area names in the blocks. No owner slide uses a pitfall footer.
- **Takeaways are spoken, not shown.** Titles on "When you are the owner" slides state the responsibility instead.
- **Personal story #2.** Preserve the 1:00 presenter-authored slot on slide 17's general maintenance screen, before the separate illustrative FRB check. Do not invent the story.
- **Cut order.** Each talk track names what to cut first if the section runs long and what may never be cut.
- **Diagram.** Slide 7 uses the renders of `internal/anatomy-of-an-agentic-ai-system-landscape.svg`; slide 19 uses the render of the `-yours.svg` variant generated from it; the mini-maps are generated from it too. Run `node internal/build-diagrams.mjs` if the base changes.
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
- **Two named tools.** The coding agents named on stage are Codex CLI and Devin. Devin's CLI carries the command anchors; Devin Desktop, the IDE, appears on slide 8 for its model picker. No other tool is named as a "When you are the user" example. Other products appear only as incident evidence, such as EchoLeak in Microsoft 365 Copilot. Tool facts come from the vendors' own docs and are marked `[primary]` in research with the date they were checked.
- **Time and slide counts must reconcile.** Presentation is 35:00 across 26 slides: Section 1 is 5:00 and 6 slides, Section 2 is 25:00 and 13 slides, Section 3 is 5:00 and 7 slides. Each section ends with a "checks" block that sums its beat times and lists which beats cover which description topics. Changing a beat's time or slide count means updating that block and the "Structure and time budget" table.
- **Every Section 2 area uses the same five-screen pattern:** a simple coding-agent user example, a sourced quote with a conceptual visual, general owner decisions with impact and starting guidance, maintenance with pitfalls, and a separate FRB application. The engineered explanation belongs on the owner screens. Each quote takes 0:20 within the existing area budget. Operating it adds the yours diagram as a 0:25 section wrap. Evals holds its maintenance screen for the protected 1:00 story. Headline pitfalls also appear on slide 23 in 3.3.
- **Beat format is fixed.** Time, slide, say, takeaway line, sources. It is a talk track, not a script.

## Adding or changing a claim

1. Put the full quote, date, and URL in the matching research file with a marker.
2. Cite it in the outline in short form and point to the research section.
3. If it is `UNVERIFIED`, flag it `[verify]` in the outline and add it to both the research file's verify list and the outline's closing verify table.
4. Check the "Do not use on stage" list at the end of the outline before promoting any statistic. Several widely circulated figures are listed there as untraceable or misattributed.

## Prose style

Short declarative sentences. No em-dashes anywhere in the repo. Takeaway lines are quoted. Times are written as `m:ss`. Sources inside the outline name the author or organization and month, not a URL.
