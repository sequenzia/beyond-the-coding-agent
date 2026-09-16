# Slide 43: What transfers

Beat 3.1 What transfers. Section 3. Time 1:05. One static screen; no internal builds.

## On the slide

**Kicker:** The transition · What transfers

**Title:** What transfers

| Existing skill | Application in an AI system |
|---|---|
| Decomposition and systems thinking | Bounded workflows and clear state |
| Interface design | Tool contracts and explicit outcomes |
| Testing discipline | Evals and regression cases |
| Debugging and observability | Traces of model calls and tool actions |
| Security and least privilege | Enforced access and action limits |
| Production operations | Quality, cost, latency, and recovery |

## Layout and visual

- Display narrative number 43 throughout. Preserve the shared header and mini-map.
- One static, editable table. All six rows appear on entry and remain visible through the handoff to slide 44. Use hard cuts.
- Pair each familiar skill with its application. Give all six rows equal weight. Use the shared table treatment and visual values in design brief §25.
- The takeaway is spoken, not shown.

## Talk track

[0:00] **Your engineering habits give you a foundation.** Decomposition helps you define a bounded workflow and the state it carries.

[0:12] Interface design helps you specify what a tool accepts, how it reports errors, and what confirms completion.

[0:22] **Testing discipline extends to evals and regression cases.** You still run ordinary software tests and check actual results.

[0:33] Debugging and observability help you follow model calls and tool actions to investigate where a failure began.

[0:43] Least privilege guides access and action limits. Code enforces those boundaries.

[0:51] Production operations brings monitoring, incident response, and recovery. You track quality alongside cost and latency.

[0:59] **You are learning how to apply these skills to model-dependent behavior.**

[1:05] Advance to slide 44.

Cut first: the elaboration on observability and operations, keeping their visible rows. Never cut the foundation, the connection between testing and evals, or the handoff to model-dependent behavior. The 1:05 reference includes time to inspect the mapping.

## Sources

- The six-row mapping is the talk's synthesis. Research §1 in `research/section-3.md`.
- Tool contracts and enforced permissions: Research §3 in `research/section-2.md`.
- Bounded workflows and state: Research §4 in `research/section-2.md`.
- Evals, regression cases, and investigation: Research §5 in `research/section-2.md`.
- Observability, operating limits, monitoring, and recovery: Research §6 in `research/section-2.md`.

## Open items

- Rehearse the single-screen mapping within its existing 1:05 reference.
