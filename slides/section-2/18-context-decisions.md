# Slide 18: Retrieval and context choices

Beat 2.2. Section 2. Rehearsal reference 1:25 of the area's 4:30. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Context Engineering · Decisions

**Title:** Retrieval and context choices

**RAG:** Retrieve information and supply it as evidence for generation.

The evidence path:

1. Authorized sources
2. Retrieval
3. Evidence selection
4. Assembled input

Preserve source identity, revision, and access scope.

**Find the evidence**

Keyword: terms and identifiers.
Semantic: similarity using embeddings.
Hybrid: both signals.

**Manage the context**

Preload essentials.
Fetch detail when needed.
Retain and refresh useful information.

## Layout and visual

- Display narrative number 18, the area kicker, and `mini-context` throughout.
- Use the four-stage evidence path and two explanatory columns in design brief §28. All visual values are defined there.
- Retrieval finds candidate material. Selection decides which passages and source details enter the model input. Keep the source-to-input provenance line visible.
- The pipeline describes retrieved evidence. Other inputs were introduced on slide 17.
- Keep the embedding definition spoken. The visible search comparison supports the conceptual explanation without an implementation walkthrough.
- Keep all text and connectors editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **RETRIEVAL AND CONTEXT DECISIONS**

[0:00] **RAG means retrieval-augmented generation.** Retrieve relevant information and supply it as evidence for the model's response. Authorized internal records can supply that information.

[0:13] Follow the path from sources, through retrieval and selection, into the actual model input. Keep document identity, revision, and location attached. Enforce access before restricted content reaches an unauthorized recipient or processing service.

[0:30] If we know the board ID, use direct lookup or exact search. Keyword search matches terms and identifiers. **An embedding represents content numerically so a search system can compare similarity.** Semantic search can help with differently worded descriptions of similar shutdowns. Hybrid retrieval combines both signals. Test which approach finds the evidence this task needs.

[0:59] Then decide what to preload and what to fetch when needed. Retain essential constraints and source references. Refresh retained information and access when the task resumes or records change.

[1:16] The question is whether the assembled input contains the right evidence with its meaning intact.

[1:25] Advance to slide 19.

Cut first: elaboration about hybrid retrieval and preload trade-offs. Never cut RAG, the embedding definition, keyword versus semantic search, the evidence path, or the access boundary. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September 2024 and September 2025, primer passages rechecked September 2026; existing context, memory, and access guidance. Research §0 and §2 in `research/section-2.md`, with inherited eligibility and authorization boundaries in §1 and §3.
- Illustrative packet and contracts: `internal/frb-running-example.md`. The missing-minutes failure is a teaching scenario, not a measured result. No retrieval method is an assumed winner.
- Accepted content integration: `outlines/section-2-integration/02-context-engineering.md`.

## Open items

- Rehearse the 4:30 area on the actual presentation machine. Preserve the conceptual evidence path and the missing-minutes application when trimming.
