# Slide 33: Evaluation pitfalls

Beat 2.5. Section 2. Rehearsal reference 0:25 of the area's 4:35. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Verification & Evals · Challenges and pitfalls

**Title:** Evaluation pitfalls

- **Outcome:** Inspect the actual result.
- **Grader:** Review disagreement with expert judgment.
- **Coverage:** Add failures and recheck after changes.

**Pitfall:** Using a generic judge without error analysis or result checks.

Inspect the result and the trace before choosing a repair.

## Layout and visual

- Display narrative number 33, the area kicker, and `mini-evals` throughout.
- Retain the current pitfalls composition and visible copy from design brief §23, as retained in §31. All visual values are defined there.
- The headline pitfall stays in the body and matches slide 44 word for word.
- Keep text editable. Show all content on entry with hard cuts and no internal builds. No personal-story cue or reserved pause is added.

## Talk track

[0:00] **CHALLENGES AND PITFALLS**

[0:00] **Using a generic judge without error analysis or result checks** is the headline pitfall. Check the actual outcome, the grader, and the cases before choosing a repair. Continually tuning against held-out cases weakens their independence. **Evaluation continues after deployment and after model or harness changes.** Add failures from real use.

[0:25] Advance to slide 34.

Cut first: the held-out reminder, already explained in decisions. Never cut the exact headline pitfall, error analysis, or ongoing evaluation. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Husain and Shankar, September 2026; Anthropic, January 2026, definitions rechecked September 2026; OpenAI evaluation-method guidance, checked September 2026. Research §5 in `research/section-2.md`.
- Illustrative packet, suite cases, and export checks: Research §0 and §5 and `internal/frb-running-example.md`. The direct-reference PASS and source-support FAIL belong to the invented example. No measured model result or universal shipping threshold is claimed.
- Accepted integration: `outlines/section-2-integration/05-verification-and-evals.md`. Reliability notation and formulas remain in supporting Markdown.

## Open items

- Rehearse the retained 4:35 allocation on the actual presentation machine. The foundations slide gains 0:10 and the application gives up 0:10. Preserve ordinary tests, grader calibration, repeated trials, and ongoing evaluation when trimming.
