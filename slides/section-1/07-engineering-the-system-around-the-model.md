# Slide 7: Engineering the system around the model

Beat 1.7 Engineering the system around the model. Section 1. Time 1:00. One static screen; no internal builds.

## On the slide

**Title:** Engineering the system around the model

| Responsibility | Explanation |
|---|---|
| Build in determinism | Explicit logic and required workflow steps. |
| Enforce boundaries | Permissions and execution limits outside the model. |
| Evaluate behavior | Outcomes across cases, repeated runs, and production use. |

## Layout and visual

- Display narrative number 7. Show all three responsibility rows on entry.
- Match slide 6's flat, spacious text rows with Bold labels and aligned explanations. No table header row is shown.
- No mini-map, code metaphor, or visible takeaway. Visual values follow design brief §37.
- Use hard cuts. There is no replacement screen or internal click.

## Talk track

[0:00] **Good AI engineers look for places to make behavior deterministic. Adding AI does not mean delegating the whole system to it.**

[0:09] Use model judgment where it helps. Put calculations and required workflow steps in code when they can be specified explicitly. Enforce permissions and limits outside the model.

[0:20] Define what an acceptable result means. Keep your software tests, and add evaluations across representative cases and repeated runs. Keep evaluating after deployment. Design how the system stops or hands work to a person when it cannot meet the requirement.

[0:38] Our focus is products around foundation models. ML engineering often focuses on models and training pipelines; the roles overlap.

[0:46] Your software engineering skills remain the foundation. **You are still responsible for the product’s behavior, even when you no longer write all the rules that produce it.**

[1:00] Advance to slide 8.

Cut first: the calculation and required-step examples. Never cut selective delegation, enforced permissions and limits, ordinary tests plus continuing evaluation, stopping or human handoff, foundation-model scope and role overlap, or retained responsibility. The wording is presenter-approved; timestamps are rehearsal cues, not measured delivery times.

## Sources

- CMU SEI; Huyen, 2025. Research §1 in `research/section-1.md`.
- Anthropic, January 2026. Research §3 in `research/section-1.md`.
- Anthropic, December 2024; OWASP, 2025. Research §5 in `research/section-1.md`.
- Building in determinism and selective delegation are the presenter's engineering synthesis. Fixed workflow steps and enforced permissions do not establish the correctness of model output.

## Open items

- Rehearse the locked script against the 1:00 target.
