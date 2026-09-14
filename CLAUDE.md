# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Preparation materials for a 50-minute conference talk on September 17, 2026. Everything is Markdown plus one PNG diagram. There is no code, no build, no lint, and no test suite. Do not look for package manifests or try to run anything. Context7 is disabled in the local Claude settings because there are no libraries to look up.

The README holds the session details, the published talk description, and the repo layout. Read it first.

## Source of truth and the evidence layer

`outlines/outline-v2.md` is the current talk. `outlines/outline-v1.md` is history and is not edited.

The outline and the three research files form a two-layer system:

- **Outline** cites sources in short form and points to a research section, for example "Research §2" at the end of a beat. It never carries full quotes or URLs.
- **Research** (`research/section-N.md`, one per talk section) holds the full quotes, dates, URLs, and verification status. Section 2 research is numbered §0 through §7, where §0 is the map and §1 through §6 match outline beats 2.1 through 2.6.

Every source entry in research has the same shape: a bold line with author, title, venue, and date, a verification marker, the URL, then bullet quotes. Each research file ends with a `## Verify before stage` list and a `**Do not use:**` line.

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
- **Time and slide counts must reconcile.** Presentation is 35:00 across 25 slides: Section 1 is 5:00 and 6 slides, Section 2 is 25:00 and 13 slides, Section 3 is 5:00 and 6 slides. Each section ends with a "checks" block that sums its beat times and lists which beats cover which description topics. Changing a beat's time or slide count means updating that block and the "Structure and time budget" table.
- **Every Section 2 area follows the same three beats** (what you touched, what someone engineered, when it's your agent) and names one pitfall. The six pitfalls are collected again on slide 22 in 3.3, so a pitfall change lands in two places.
- **Beat format is fixed.** Time, slide, say, takeaway line, sources. It is a talk track, not a script.

## Adding or changing a claim

1. Put the full quote, date, and URL in the matching research file with a marker.
2. Cite it in the outline in short form and point to the research section.
3. If it is `UNVERIFIED`, flag it `[verify]` in the outline and add it to both the research file's verify list and the outline's closing verify table.
4. Check the "Do not use on stage" list at the end of the outline before promoting any statistic. Several widely circulated figures are listed there as untraceable or misattributed.

## Prose style

Short declarative sentences. No em-dashes anywhere in the repo. Takeaway lines are quoted. Times are written as `m:ss`. Sources inside the outline name the author or organization and month, not a URL.
