# Slide 33: Choosing the execution approach

Beat 2.4. Section 2. Rehearsal reference 1:00 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · Decisions

**Title:** Choosing the execution approach

| Decision | Guidance |
|---|---|
| **Is intelligence needed for this task?** | Start with scripts and explicit rules. Add model judgment where it provides value. |
| **Does the model need to choose the next action?** | Use a predefined workflow for known paths. Consider a bounded agent loop when observations must guide the next step. |
| **Does added autonomy justify its cost?** | Compare task quality, completion time, and total cost against the simpler approach. |

**Execution controls:** Saved state, required checks, stopping limits, and recovery.

## Layout and visual

- Display narrative number 33, the area kicker, and `mini-orchestration` throughout.
- Use the aligned decision-question and guidance rows in design brief §30. All visual values are defined there.
- Give the questions enough width to read as complete decisions. Place the compact execution-controls line beneath the rows.
- Keep the checkpoint definition and external-outcome distinction in the script. Do not imply that saved state proves an external action completed or that an in-memory checkpoint survives a process restart.
- Keep the takeaway spoken. Keep text editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **CHOOSING THE EXECUTION APPROACH**

[0:00] **Is intelligence needed for this task?** If explicit rules can produce an acceptable result, start with a script or workflow. A task being possible for an agent does not make an agent the best choice.

[0:15] If model judgment helps, ask a second question: does the model need to choose what happens next? Summarizing logs can be a fixed workflow step. Investigating an unfamiliar failure may benefit from choosing actions as evidence arrives.

[0:30] **Autonomy must earn its place.** Compare it with the simpler approach on representative tasks. Does it improve results enough to justify the time, cost, and operational complexity? Include retries and human review.

[0:45] Define the execution controls too. A checkpoint saves state for resumption. Required checks and stopping limits belong in code. Before retrying an external action, establish what happened. If its outcome remains unknown, pause or hand off.

[1:00] Advance to slide 34.

Cut first: the repeated summarizing-versus-investigating examples. Never cut the intelligence question, the need to justify autonomy against a simpler baseline, enforced checks and limits, or the uncertain-outcome handoff. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, December 2024 and June 2025: workflow/agent distinction, combined patterns, simplicity, and measured benefit. Research §4 in `research/section-2.md`.
- LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026: saved execution state, external outcomes, and safe retries. Research §4 in `research/section-2.md`.
- Approved content and script: Research §4, "Orchestration slides 32 through 34 refinement, September 16, 2026." Software examples are illustrative; no measured performance result is claimed.

## Open items

- Script editorially approved. Rehearse this slide and the combined 2:25 across slides 32 through 34. Preserve the area's 3:55 and Section 2's 28:55 references.
