# Slide 23: Selecting and organizing context

Beat 2.2. Section 2. Rehearsal reference 1:10 of the area's 4:30. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds. Visible copy and script approved September 16, 2026.

## On the slide

**Kicker:** Context Engineering · Decisions

**Title:** Selecting and organizing context

| Decision | Supporting text |
|---|---|
| **Select** | Preload essentials. Retrieve relevant evidence when needed. |
| **Position** | Distinguish instructions from evidence. Test placement of key information. |
| **Maintain** | Refresh stale information. Compact history while preserving constraints. |
| **Delegate** | Give focused tasks separate contexts. Return findings with sources. |

**Preserve source identity and enforce access before inclusion.**

## Layout and visual

- Display narrative number 23, the area kicker, and `mini-context` throughout.
- Use the four flat, aligned decision rows in design brief §39. All visual values are defined there.
- Place each pink decision label beside its explanation. Keep the source and access line beneath the rows.
- Keep the RAG definition and keyword, semantic, and hybrid search comparison spoken. Selection after retrieval still determines what enters the model input.
- Placement is a choice to test for the model and task. Subagents illustrate focused work in separate contexts, with selected findings returned to the main agent. Coordination mechanics remain in Orchestration.
- Keep all content editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **CONTEXT DECISIONS**

[0:00] **Before each call, decide what this step needs.** Preload essentials and retrieve additional evidence when needed.

[0:08] RAG retrieves information and supplies it as evidence for generation. Keyword search matches terms and identifiers. Semantic search compares numerical representations called embeddings. Hybrid combines both.

[0:21] Select which results enter the input, keeping their source references. Enforce access before inclusion. Separate instructions from evidence, and **test where key information works best.**

[0:34] As work progresses, refresh stale information and remove irrelevant material. Compaction summarizes history to make room. Check that constraints and unresolved work survive.

[0:46] **Subagents can handle focused tasks in separate contexts.** Choose what each receives, and have it return findings with sources. Its detailed exploration can stay in its own context.

[1:01] More detail consumes context. Summaries and handoffs can lose information. Next, let's look at those failure modes.

[1:10] Advance to slide 24.

Cut first: the hybrid-search sentence. Never cut selection after retrieval, positioning, compaction checks, or the subagent explanation. Preserve source references and the access boundary. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September 2024 and September 2025, checked September 2026: retrieval, embeddings, context maintenance, compaction, and subagents. Research §2 in `research/section-2.md`.
- Liu et al., February 2024, checked September 2026: position sensitivity in the models and tasks studied. Research §2. The slide recommends testing placement, not a universal ordering rule.
- OWASP, 2025: authorization enforced outside the model. Research §3.
- Approved slide 23 decisions refinement in Research §2 and `outlines/section-2-integration/02-context-engineering.md`.

## Open items

- Rehearse the approved 1:10 script and transition from slide 22.
