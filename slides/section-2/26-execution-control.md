# Slide 26: Workflows and agent loops

Beat 2.4. Section 2. Rehearsal reference 1:00 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · Foundations

**Title:** Workflows and agent loops

**Workflow**

Code defines the stages and permitted transitions.

Illustrative FRB workflow:

Retrieve, inspect, compare, reconcile, verify, export.

**Agent loop**

Model chooses the next action within limits.

Expand the inspect stage into a bounded loop:

Observe result, choose action, call tool, update state, then observe again.

**Required gate**

Exact draft passes verification before export.

## Layout and visual

- Display narrative number 26, the area kicker, and `mini-orchestration` throughout.
- Use the native workflow and expanded inspection loop in design brief §30. All visual values are defined there.
- Move the six-stage FRB workflow here from the former application composition. Keep its illustrative label.
- Highlight inspection and connect it to the expanded loop. The verification gate remains outside the model's discretionary action choice.
- Show how workflow and agent loop combine without implying that every stage requires a loop. Keep delegation spoken and brief.
- Keep all text and diagram elements editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **WORKFLOW AND AGENT LOOP**

[0:00] **Orchestration controls how the work progresses.** A workflow defines stages and permitted transitions in code. An agent loop lets the model choose its next action from what it observes. They can work together.

[0:16] Our FRB workflow retrieves, inspects, compares, reconciles, verifies, and exports. Inside inspection, the model might choose to read another passage, inspect the result, and continue within the allowed scope. That is a bounded agent loop inside a controlled workflow.

[0:35] The outer system still enforces permissions, work limits, and the verification gate. **The exact draft must pass its checks before export.** A model-generated plan does not enforce those conditions.

[0:49] A coding agent's inspect, edit, and check cycle uses the same action-and-observation idea. The execution system must also know when to stop or resume.

[1:00] Advance to slide 27.

Cut first: the coding-agent elaboration. Never cut the workflow/loop distinction, their bounded combination, or the verification gate. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, December 2024, June and November 2025; LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026. Research §4 in `research/section-2.md`.
- Illustrative workflow and recovery contract: Research §0, §3, and §4, and `internal/frb-running-example.md`. The permitted-export timeout is a separate teaching scenario from Tools' rejection case.
- Accepted integration: `outlines/section-2-integration/04-orchestration.md`. No framework choice, measured recovery result, or universal retry guarantee is claimed.

## Open items

- Rehearse the retained 3:55 allocation on the actual presentation machine. The foundations slide gains 0:15 and the focused recovery application gives up 0:15. Preserve the workflow gate and safe recovery distinction when trimming.
