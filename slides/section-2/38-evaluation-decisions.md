# Slide 38: Designing the evaluation suite

Beat 2.5. Section 2. Rehearsal reference 1:15 of the area's 4:35. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Verification & Evals · Decisions

**Title:** Designing the evaluation suite

| Decision | What to define |
|---|---|
| **What counts as success?** | Outcomes and quality criteria defined with SMEs. Forbidden actions and acceptable limitations. |
| **How will we judge it?** | Code for explicit checks. Expert judgment for quality. Model graders calibrated against experts. |
| **Which cases will we evaluate?** | SME-reviewed golden datasets, known failures, and adversarial inputs. Held-out cases and repeated trials. |

## Layout and visual

- Display narrative number 38, the area kicker, and `mini-evals` throughout.
- Use the three flat native decision rows in design brief §42, which replaces the case matrix in §31. All visual values are defined there.
- Pair each decision with the exact approved explanation. Keep SME involvement, golden datasets, and the code/model/expert comparison visible.
- Golden datasets supply reviewed reference material. Held-out describes cases reserved from routine tuning. The categories can overlap.
- Keep text editable. Show all content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **EVALUATION DESIGN**

[0:00] **The first decision is what counts as success.** Work with subject matter experts to define the required outcome, quality criteria, and forbidden actions. Agree on acceptable behavior when the system cannot finish.

[0:15] Our SMEs help capture those expectations in golden datasets. Reference answers, expected behavior, and grading criteria give us a consistent basis for comparing results. Some tasks allow several valid answers.

[0:29] **The second decision is how to judge it.** Use code for explicit conditions. Use expert judgment for meaning and quality. Model graders can help apply those criteria, but compare their judgments with expert decisions and investigate disagreements. **The grader also needs evaluation.**

[0:49] **The third decision is which cases provide useful evidence.** Use the golden dataset alongside known failures and adversarial cases. Reserve held-out cases from routine tuning, and repeat trials where behavior varies.

[1:04] Inspect results by case category. Next, we need to examine where our reference data and our checks can give us false confidence.

[1:15] Advance to slide 39.

Cut first: the final transition sentence after the instruction to inspect results by category. Never cut the three decisions, SME collaboration and golden datasets, valid answer variation, grader calibration, held-out cases, or repeated trials. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, January 2026, rechecked September 2026; OpenAI evaluation-method guidance, checked September 2026. Research §5 in `research/section-2.md`.
- Presenter-supplied SME collaboration and golden-dataset context, September 2026. Research §5 in `research/section-2.md`.

## Open items

- Content and script approved by the presenter. Rehearse the locked 1:15 script on the presentation machine. Moving 0:15 to pitfalls preserves the three content slides' 2:55 and the area's 4:35 allocation.
