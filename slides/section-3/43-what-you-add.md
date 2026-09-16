# Slide 43: What you add

Beat 3.2 What you add. Section 3. Time 1:15. One static screen; no internal builds.

## On the slide

**Kicker:** The transition · What you add

**Title:** What you add

| Area | Competency to develop |
|---|---|
| Model Selection | Recognize failure patterns and evaluate task fit |
| Context Engineering | Select evidence and preserve its meaning |
| Tools & Extensibility | Evaluate how the model selects and uses tools |
| Orchestration | Bound model-selected actions and handle interruption |
| Verification & Evals | Define quality and measure behavior across repeated trials |
| AgentOps | Investigate quality changes and manage security, cost, and latency |

## Layout and visual

- Display narrative number 43 throughout. Preserve the shared header and mini-map.
- One static, editable table. All six rows appear on entry and remain visible through the handoff to slide 44. Use hard cuts.
- Match slide 42's flat table treatment. Give the competency column more room for its descriptions, as defined in design brief §25.
- The rows follow Section 2's area order. They are unranked and carry equal weight.
- The takeaway is spoken, not shown.

## Talk track

[0:00] **The added work is understanding and controlling model-dependent behavior.** These are the competencies behind the six areas we just covered.

[0:10] For models, read failures and compare candidates on your task. Learn where their behavior varies and where it falls short.

[0:20] For context, select useful evidence and preserve its meaning. A qualification must survive retrieval and summarization.

[0:30] For tools, evaluate how the model chooses and uses them. Valid arguments alone do not establish a correct choice or a successful action.

[0:42] For orchestration, bound the actions the model can select. Define when to stop, how to recover, and when to hand off.

[0:52] **For evals, define quality with domain experts and measure behavior across representative cases and repeated trials.** Inspect failures before choosing a repair.

[1:02] In production, investigate quality changes. Address prompt injection, permissions, cost per completed task, and latency.

[1:11] **Learn to measure and control that behavior.**

[1:15] Advance to slide 44.

Cut first: the tool-argument example and the elaboration on stopping and recovery. Never cut the model-dependent focus, the six competency areas, or the connection between evaluation and investigating failures. Cue times are rehearsal guides. The existing 1:15 reference includes the audience's reading time.

## Sources

- The competency mapping is the talk's synthesis. Research §2 in `research/section-3.md`.
- Model task fit and failure analysis: Research §1 in `research/section-2.md`.
- Evidence selection and preservation: Research §2 in `research/section-2.md`.
- Model use of tool contracts: Research §3 in `research/section-2.md`.
- Action limits, interruption, and recovery: Research §4 in `research/section-2.md`.
- Expert criteria, repeated trials, and error analysis: Research §5 in `research/section-2.md`.
- Quality changes, security, cost, and latency: Research §6 in `research/section-2.md`.

## Open items

- Rehearse the single-screen competencies within the existing 1:15 reference.
