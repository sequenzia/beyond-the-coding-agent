# Slide 28: Execution pitfalls

Beat 2.4. Section 2. Rehearsal reference 0:25 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · Challenges and pitfalls

**Title:** Execution pitfalls

- **Gates:** A proposed plan does not enforce prerequisites.
- **Progress:** Repeated work can exhaust the budget.
- **Recovery:** A timeout does not establish failure.

**Pitfall:** Adding multiple agents before trying a workflow.

## Layout and visual

- Display narrative number 28, the area kicker, and `mini-orchestration` throughout.
- Retain the current pitfalls composition and visible wording, as specified in design brief §§23 and 30. All visual values are defined there.
- The headline pitfall stays in the body and matches slide 44 word for word.
- Keep text editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **CHALLENGES AND PITFALLS**

[0:00] **Adding multiple agents before trying a workflow** is the headline pitfall. Extra workers add handoffs and reconciliation. Also watch for skipped gates, repeated work without progress, and early completion claims. **A timeout does not establish that an action failed.** Inspect what happened before repeating it.

[0:25] Advance to slide 29.

Cut first: the handoff elaboration. Never cut the exact headline pitfall and timeout distinction. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, December 2024, June and November 2025; LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026. Research §4 in `research/section-2.md`.
- Illustrative workflow and recovery contract: Research §0, §3, and §4, and `internal/frb-running-example.md`. The permitted-export timeout is a separate teaching scenario from Tools' rejection case.
- Accepted integration: `outlines/section-2-integration/04-orchestration.md`. No framework choice, measured recovery result, or universal retry guarantee is claimed.

## Open items

- Rehearse the retained 3:55 allocation on the actual presentation machine. The foundations slide gains 0:15 and the focused recovery application gives up 0:15. Preserve the workflow gate and safe recovery distinction when trimming.
