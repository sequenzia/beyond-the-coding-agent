# Slide 31: Verification and evaluation

Beat 2.5. Section 2. Rehearsal reference 1:00 of the area's 4:35. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Verification & Evals · Foundations

**Title:** Verification and evaluation

**Verification**

Does this result meet the requirements?

**Evaluation**

How does the system perform across cases and repeated runs?

Shared vocabulary:

- **Case:** Input and expected conditions.
- **Trial:** One attempt at a case.
- **Grader:** A check of behavior or outcome.

## Layout and visual

- Display narrative number 31, the area kicker, and `mini-evals` throughout.
- Use the two comparison columns and shared vocabulary row in design brief §31. All visual values are defined there.
- Compare one-result acceptance with behavior across cases and repeated runs. The same checks can serve both purposes.
- Keep the vocabulary native and editable. Do not invent trial results or success-rate graphics.
- Show the complete content on entry with hard cuts and no internal builds. Keep the coding-agent connection spoken.

## Talk track

[0:00] **VERIFICATION AND EVALUATION FOUNDATIONS**

[0:00] **Verification asks whether this result meets the required conditions. Evaluation asks how the system behaves across cases and repeated runs.** The same checks can serve both purposes.

[0:14] A case defines the input, starting conditions, and expected behavior. A trial is one attempt at that case. A grader checks an aspect of the behavior or outcome. Several graders may examine the same trial.

[0:33] **Evals are tests of an AI system. Ordinary software tests remain necessary.** A coding agent's test output is evidence to inspect; its completion message must still agree with the actual result.

[0:47] Check the output and required action constraints, including permission and verified completion. A successful demonstration establishes one useful path. The product needs evidence across representative work, important failures, and repeated attempts.

[1:00] Advance to slide 32.

Cut first: the coding-agent elaboration. Never cut the one-result versus many-run distinction, shared vocabulary, ordinary tests, or required outcome constraints. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Husain and Shankar, September 2026; Anthropic, January 2026, definitions rechecked September 2026; OpenAI evaluation-method guidance, checked September 2026. Research §5 in `research/section-2.md`.
- Illustrative packet, suite cases, and export checks: Research §0 and §5 and `internal/frb-running-example.md`. The direct-reference PASS and source-support FAIL belong to the invented example. No measured model result or universal shipping threshold is claimed.
- Accepted integration: `outlines/section-2-integration/05-verification-and-evals.md`. Reliability notation and formulas remain in supporting Markdown.

## Open items

- Rehearse the retained 4:35 allocation on the actual presentation machine. The foundations slide gains 0:10 and the application gives up 0:10. Preserve ordinary tests, grader calibration, repeated trials, and ongoing evaluation when trimming.
