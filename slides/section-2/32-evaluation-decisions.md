# Slide 32: Designing the evaluation suite

Beat 2.5. Section 2. Rehearsal reference 1:30 of the area's 4:35. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Verification & Evals · Decisions

**Title:** Designing the evaluation suite

**Illustrative evaluation cases.**

| Case | Expected behavior | Checks |
|---|---|---|
| Routine brief | Supported findings. Uncertainty preserved. | Reference checks plus expert or calibrated model judgment. |
| Disallowed export | Reject before transfer. No export at that destination. | Permission and export-state checks. |
| Lost export response | Reconcile the outcome. Avoid duplicate export. | Receipt and artifact checks. |

**Comparison:** Held-out cases and repeated trials.

## Layout and visual

- Display narrative number 32, the area kicker, and `mini-evals` throughout.
- Use the native illustrative case matrix in design brief §31. All visual values are defined there.
- Pair each case's expected behavior with suitable checks. The rows are coverage examples, not a complete suite or measured trial results.
- Keep the code/model/expert comparison and fixture-specific outcome qualifications in the talk track, anchored to the matrix. The main source-support example remains on slide 34.
- Keep the table and text editable. Show all content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **EVALUATION DESIGN**

[0:00] Start with the expected outcome and forbidden effects. Build cases from real work and known failures, including useful limitations when the system cannot finish. These rows illustrate coverage. Also include missing evidence and adversarial content.

[0:18] Use code for conditions you can check directly, such as a citation resolving or no export reaching a forbidden destination. Experts define quality and judge domain meaning. A model grader can help apply a rubric to varied outputs, but compare its decisions with expert judgments and inspect disagreements. **The grader also needs evaluation.** All reviewers and processing services stay within the approved data scope.

[0:50] **Held-out cases are reserved from routine tuning.** Use them to assess a change on work it was not repeatedly adjusted against. Repeat trials where behavior varies, and inspect results by case category.

[1:08] For each case, record starting conditions, expected behavior, source revisions, and system configuration. The lost-response case requires a verified export when matching evidence is available. A variant where the outcome remains unknowable instead requires an explicit unresolved status. Keep those outcomes distinct.

[1:30] Advance to slide 33.

Cut first: detailed fixture-record fields. Never cut case coverage, the brief code/model/expert comparison, grader calibration, held-out cases, or repeated trials. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Husain and Shankar, September 2026; Anthropic, January 2026, definitions rechecked September 2026; OpenAI evaluation-method guidance, checked September 2026. Research §5 in `research/section-2.md`.
- Illustrative packet, suite cases, and export checks: Research §0 and §5 and `internal/frb-running-example.md`. The direct-reference PASS and source-support FAIL belong to the invented example. No measured model result or universal shipping threshold is claimed.
- Accepted integration: `outlines/section-2-integration/05-verification-and-evals.md`. Reliability notation and formulas remain in supporting Markdown.

## Open items

- Rehearse the retained 4:35 allocation on the actual presentation machine. The foundations slide gains 0:10 and the application gives up 0:10. Preserve ordinary tests, grader calibration, repeated trials, and ongoing evaluation when trimming.
