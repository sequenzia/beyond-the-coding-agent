# Slide 39: Evaluation pitfalls

Beat 2.5. Section 2. Rehearsal reference 0:40 of the area's 4:35. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Verification & Evals · Challenges and pitfalls

**Title:** Evaluation pitfalls

| Risk | What can go wrong |
|---|---|
| **Outcome** | The agent reports success, but the actual result fails the requirements. |
| **Grader** | The grader rewards answers that experts would reject. |
| **Reference data and coverage** | Golden datasets can contain human errors, reflect bias, and miss important cases. |

**Pitfall:** Using a generic judge without error analysis or result checks.

Inspect the result, trace, and reference data before choosing a repair.

## Layout and visual

- Display narrative number 39, the area kicker, and `mini-evals` throughout.
- Use the three native risk rows and retained headline-pitfall composition in design brief §42. All visual values are defined there.
- Keep the longer reference-data-and-coverage label legible. The supporting line names reference data as part of error analysis.
- The headline pitfall stays in the body and matches slide 50 word for word.
- Keep text editable. Show all content on entry with hard cuts and no internal builds. No personal-story cue or reserved pause is added.

## Talk track

[0:00] **CHALLENGES AND PITFALLS**

[0:00] **Using a generic judge without error analysis or result checks** can give us false confidence.

[0:06] Check actual outcomes and review grader disagreements.

[0:10] **Golden datasets are valuable references, but human curation can introduce errors and bias.** They can also miss important cases. Use them alongside direct checks and review of real runs.

[0:23] When results disagree, inspect the result, trace, and reference data. The system, grader, or expected answer may need correction.

[0:32] Add failures from real use. **Evaluation continues after deployment and after model or harness changes.**

[0:40] Advance to slide 40.

Cut first: the second sentence at 0:23, after retaining the instruction to inspect result, trace, and reference data. Never cut the exact headline pitfall, human errors and bias, coverage limits, complementary checks, error analysis, or ongoing evaluation. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Husain and Shankar, September 2026; Anthropic, January 2026, rechecked September 2026. Research §5 in `research/section-2.md`.
- Hardy, November 2024; Gardner et al., April 2020, revised October 2020, abstracts checked September 2026. Research §5 in `research/section-2.md`.

## Open items

- Content and script approved by the presenter. Rehearse the locked 0:40 script on the presentation machine. Moving 0:15 from decisions preserves the three content slides' 2:55 and the area's 4:35 allocation.
