# Beyond the Coding Agent: From Software Engineer to AI Engineer

Preparation materials for a conference talk on AI engineering as a discipline, with a focus on designing, building, and deploying enterprise AI agents. The repository includes Markdown sources, diagram assets, and a reusable PowerPoint builder.

## Session

- **Length:** 50 minutes. Section 2 stays at 25:00 to 29:00, with a 27:00 rehearsal reference. Section 1 has a 4:00 rehearsal target. Section 3 has a 4:30 reference. The presentation runs about 33:30 to 37:30; discussion fills the remainder.
- **Deck:** 47 narrative slides across sections of 8, 32, and 7 slides. The 47 authored compositions expand to 54 physical slides and 55 presentation states, with one internal click and no Morph transitions.
- **Audience:** software engineers who want to move into AI engineering, most of whom have used a coding agent but few of whom have shipped a system whose behavior depends on a model
- **Focus:** agentic AI, connected briefly to familiar coding agents, Codex CLI and Devin. Each area opens with a quote, explains what it is and why it matters, develops decisions and trade-offs, examines pitfalls, and applies the ideas to one illustrative FRB system.
- **When:** September 17, 2026

## Repo Layout

- `outlines/outline-v2.md` is the current outline: slide-level beats with timings, talk track, evidence, and sources. `outlines/outline-v1.md` is the earlier exploratory draft, kept for history.
- `research/section-1.md`, `research/section-2.md`, and `research/section-3.md` hold the sourced notes behind each section: quotes, dates, URLs, verification markers, and a "verify before stage" list.
- `internal/anatomy-of-an-agentic-ai-system.png` is the original portrait system diagram. `internal/anatomy-of-an-agentic-ai-system-landscape.svg` is the same diagram re-laid for a 16:9 slide in the deck's dark theme, editable, and the source of every other diagram file. `internal/anatomy-of-an-agentic-ai-system-landscape-yours.svg` is the slide 40 variant with responsibility badges, previously used on slide 19. `internal/generated/` holds the four highlight states and seven mini-map variants, `internal/renders/` the PNGs the deck uses, and `internal/build-diagrams.mjs` regenerates all of them from the base. `internal/profile-320.webp` is the presenter photo for slide 2.
- `slides/section-1/`, `slides/section-2/`, and `slides/section-3/` hold one Markdown file per slide: on-slide text build by build, layout notes, a near-script talk track, sources, and open items. Written from `outlines/outline-v2.md` one slide at a time.
- `style/colors.md` holds the palette. `style/design-brief.md` fixes the deck's typography, grid, color roles, component specs, build rules, and diagram theme. It is the source of truth for every visual value, and slide files defer to it.
- `internal/frb-running-example.md` fixes the illustrative Failure Review Board packet, document IDs and revisions, expected brief, and contracts used across the six areas.
- `internal/illustrations/` holds quote-screen images and their generation prompts.
- `internal/deck/` holds the reusable PowerPoint authoring, animation, rendering, and validation scripts. See [the build guide](internal/deck/README.md) for dependencies and update instructions.
- `output/` holds the current PowerPoint deck. `output/archive/` preserves older decks. `.deck-build/` holds ignored intermediate files and previews.

All six Section 2 areas now use five separately numbered static slides: quote, combined definition and importance, decisions, challenges and pitfalls, and FRB application. Production operations is the final area, followed by the responsibility map. The standalone user screens, paired user/owner labels, and evals personal story are removed from the authoring target.

The [Section 2 content rework](outlines/section-2-rework/README.md) has been integrated into the current outline and slide specs. Its [section review](outlines/section-2-rework/section-review.md), [spoken pass](outlines/section-2-rework/spoken-pass.md), [slide map](outlines/section-2-rework/slide-map.md), and [numbering map](outlines/section-2-rework/numbering-map.json) remain supporting authoring records. Section 1 now runs title, bio, agenda, Section 1 divider, opening hook, thesis, comparison and production readiness, then the Section 2 divider. Section 2 is slides 9 through 40; Section 3 is 41 through 47. The [Section 1 numbering map](internal/deck/section-1-numbering-map.json) records the current migration; earlier review records retain their historical numbering. The reusable builder now implements the same numbered content and preserves its authored and expanded build maps. Render and native-playback review accompany each delivered build.

## Rebuild the PowerPoint deck

```sh
node internal/deck/build.mjs
```

This creates a new timestamped deck under `output/` and renders its presentation states and full editing views for review. After a successful build, older decks move into `output/archive/`. It uses the Codex bundled runtimes and the Presentations plugin. Speaker notes load from Markdown; visible copy and layouts are maintained in `internal/deck/author.mjs`. See [the build guide](internal/deck/README.md) before making changes.

## Presentation Description

AI coding tools are changing how software gets built. However, using a coding agent does not make someone an AI engineer. It makes them an AI-enabled software engineer. AI engineering begins when the behavior of the system itself depends on AI.

This session presents AI engineering as a distinct engineering discipline built on top of traditional software engineering. While machine learning engineers generally focus on models and the pipelines that produce them, AI engineers build products and systems around foundation models developed by others. Their work includes retrieval-augmented generation, model-powered workflows, and other AI applications, with agentic systems representing the discipline’s most demanding expression.

When a model can interpret goals, construct and consume context, select tools, determine its next action, and affect external systems, probabilistic behavior is no longer a minor implementation detail. It becomes part of the system’s foundation. Making that behavior useful, reliable, and trustworthy requires much more than prompts and API calls.

We will map the major responsibilities of AI engineering, including context engineering and retrieval, agent tools and extensibility, harness design and orchestration, evaluations and verification, observability, guardrails, security, and operational concerns such as cost and latency. We will examine why a compelling prototype is not evidence of production readiness, why traditional software tests remain necessary but are no longer sufficient, and why evaluations must continue after deployment.

For software engineers interested in making the transition, this session will identify which existing skills provide a strong foundation, what additional competencies AI engineering demands, and where to focus further learning. Attendees will leave with a clear conceptual map of the discipline, a realistic understanding of its complexity, and a roadmap for becoming an AI engineer rather than merely a software engineer who uses AI.

The description above was provided to attendees before the outline was finalized. Its topic list is treated as fixed scope: every outline version covers everything it names, and only the weighting changes.
