# Slide 32: Evaluation decisions

Beat 2.5. Section 2. Rehearsal reference 1:30 of the area's 4:35. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Verification and evals · Decisions

**Title:** Evaluation decisions

| Decision | Starting approach and trade-off |
|---|---|
| What counts as success? | Outcomes, serious failures, and useful limitations. |
| Which checks fit? | Code checks, model graders, expert review. Evaluate grader agreement. |
| Which cases and trials? | Representative work, known failures, and repeated attempts. |

## Layout and visual

- Display narrative number 32, the area kicker, and `mini-evals` throughout.
- Use the 3-row decisions composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- Render the authored rows as aligned text, with no decorative boxes. Keep supporting comparisons in speaker notes.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, success criteria. Define acceptable outcomes, serious failures, and useful limitations with domain experts. Broad criteria can be hard to apply consistently. Narrow checks can miss important behavior or reject valid variation. Reviewing outputs helps expose requirements you did not initially express.

[0:20] Second, which graders? Code checks are useful for conditions you can establish directly, such as a reference resolving or an expected state existing. Model graders can help judge varied outputs against criteria, but add cost and can disagree with experts. Expert review supplies domain judgment and uses limited expert time.

[0:43] Use direct checks where they fit. Compare model-grader decisions with expert decisions, inspect disagreements, and recheck as tasks or graders change. **A grader also needs evaluation.** In this example, a model that can receive the data is not automatically a suitable grader.

[1:03] Third, cases and trials. Begin with manageable cases from real work and failures, then expand coverage. Include conditions where a limitation or handoff is correct. Repeat trials where consistency matters. One successful attempt and reliable repeated use answer different questions. Preserve established cases for regression checks and add production failures.

[1:30] Advance to slide 33.

Cut first: capability-suite detail. Never cut the brief grader comparison, expert calibration, and repeated trials. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed Evals content; Anthropic, January 2026; Husain and Shankar, September 2026; Shankar et al., UIST 2024; illustrative FRB check. Research §0 and §5. The direct-reference PASS and source-support FAIL are properties of the invented example, not measured model results.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
