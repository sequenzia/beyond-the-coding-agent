# Slide 32: Workflows and agent loops

Beat 2.4. Section 2. Rehearsal reference 1:00 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · Foundations

**Title:** Workflows and agent loops

| Workflow | Agent loop |
|---|---|
| Code defines stages and permitted transitions. | The model chooses the next action from observed results. |

**Combined diagram:** Stage 1 → Stage 2 · bounded agent loop → Required check.

Inside Stage 2: Choose action → Act → Observe result → choose again.

## Layout and visual

- Display narrative number 32, the area kicker, and `mini-orchestration` throughout.
- Use the simplified comparison and single wide workflow diagram in design brief §30. All visual values are defined there.
- Place one short definition beneath each heading. Give the two definitions equal visual weight and generous space before the diagram.
- Show the bounded agent loop directly inside Stage 2 of the workflow. The required check remains outside the loop. Use one return path inside the stage, without a separate expansion connector or footer.
- Keep model calls within workflows, permissions, limits, and software examples in the approved script. The diagram illustrates one possible combination; it does not require a loop in every workflow.
- Keep all text and diagram elements editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **WORKFLOWS AND AGENT LOOPS**

[0:00] **Orchestration controls how work progresses.** In a workflow, code defines the stages and permitted transitions. In an agent loop, the model chooses its next action, observes the result, and decides what to do next.

[0:15] **A workflow can use a model without giving it control of execution.** A script might collect failed test logs, a model summarize them, and code check the output. The sequence is predefined.

[0:29] An agent investigating a failure might instead choose which file to inspect or which test to run next, based on what it finds. That flexibility can help when the next step depends on the evidence.

[0:42] The two can combine: a bounded agent loop inside a workflow stage. Code still enforces permissions, required checks, and stopping limits.

[0:52] **Before choosing either design, ask: “Is intelligence needed for this task?”** Then ask whether the model needs to choose the next action.

[1:00] Advance to slide 33.

Cut first: shorten the failure-investigation example. Never cut the workflow/loop distinction, model judgment versus execution control, enforced limits, or the intelligence question. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, December 2024 and June 2025: workflow/agent distinction, combined patterns, simplicity, and measured benefit. Research §4 in `research/section-2.md`.
- LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026: saved execution state, external outcomes, and safe retries. Research §4 in `research/section-2.md`.
- Approved content and script: Research §4, "Orchestration slides 32 through 34 refinement, September 16, 2026." Software examples are illustrative; no measured performance result is claimed.

## Open items

- Script editorially approved. Rehearse this slide and the combined 2:25 across slides 32 through 34. Preserve the area's 3:55 and Section 2's 28:55 references.
