# Slide 17: Verification and evals, When you are the owner

Beat 2.5 Verification and evals, second part. Section 2. Time 4:30 of the beat's 5:00; slide 16 took 0:30. Four static screens: quote 0:20, decisions 1:15, maintenance 1:55 including story #2 at 1:00, application 1:00. Three advances, all hard cuts.

## On the slide

**Kicker throughout:** Verification and evals · When you are the owner

**Build 1, quote.** No additional title.

“Error analysis is the most important activity in evals.”

Hamel Husain and Shreya Shankar
AI Evals: Everything You Need to Know, September 2026

Conceptual illustration: inspecting a result against supporting evidence.

**Build 2, decisions.** Title: The evaluation decisions you own

| Decision | Impact and starting approach |
|---|---|
| What counts as success? | Define the outcome and required constraints. Include serious failure cases and acceptable limits. Use criteria a domain expert can apply. |
| Which checks can establish it? | Use direct checks where possible. Use expert judgment for meaning and usefulness. Calibrate model graders against experts. |
| Which cases and how many trials? | Start with 20 to 50 cases from real failures. Cover common tasks and important edge cases. Repeat trials to measure consistency. |

**Build 3, maintenance.** Title: Living with evaluation choices

- **Criteria:** Outputs can reveal missing requirements. Refine criteria with domain experts.
- **Graders:** A judge can disagree with expert decisions. Review disagreements and recalibrate.
- **Coverage:** Model and harness changes can expose new failures. Rerun the suite and add production failures.

Inspect the result and the trace before choosing a repair.

**Pitfall:** a generic judge instead of error analysis. Trusting the success claim without checking the result.

Hold this general screen for story #2.

**Build 4, application.** Title: A source-support check for the FRB brief

Illustrative FRB-042 source-support check.

**Source:** FRB-042-MIN r2 · §3, paragraph 2

“Cause remains unresolved. Inspect the bearing before assigning a cause.”

**Answer citing these minutes:**
“The board confirmed bearing wear.”

**Direct reference check:** Citation exists: PASS

**Source-support check:** Claim supported: FAIL

**Expected:** The cause remains unresolved. Inspection is required.

Keep this failure as a regression case. Rerun it after changes.

## Layout and visual

- Keep narrative number 17, kicker, and mini-map on all four screens. Each content screen has its own title.
- Follow design brief §21, using the established quote, decision-row, and maintenance hierarchy.
- Quote and attribution stay editable. Use `internal/illustrations/evals-inspection.png` on the quote screen only.
- Hold the general maintenance screen for the full personal-story slot, before the FRB example. No extra advance. Do not present the illustration as personal experience.
- The final screen uses native editable evidence, observed/expected text, and separate reference/support results. Keep the exact source identity attached to its passage.
- All content appears immediately. Replace each title and body on a hard cut. No blank state, internal reveal, or pitfall footer.

## Talk track

[0:00] Build 1, quote. **“Error analysis is the most important activity in evals.”** Hamel Husain and Shreya Shankar. Verification checks a result before acceptance. Evaluation measures behavior across cases. **These are complementary uses of checks. Evals are tests of an AI system.**

[0:20] Build 2, decisions. First, what counts as success? Define the outcome and required constraints, including serious failures and acceptable limits. Work with domain experts on criteria they can apply. Ordinary software tests remain part of this checking machinery.

[0:45] Second, which checks can establish it? **Use direct checks where possible.** Some questions, such as faithfulness or useful synthesis, need judgment. Use experts and calibrate model graders against their decisions. A grader's output also needs scrutiny.

[1:09] Third, which cases and how many trials? **Start with 20 to 50 cases drawn from real failures.** Cover common tasks and important edge cases. Repeat trials. At least one successful attempt and success across every attempt answer different questions. **Consistency matters for repeated use.**

[1:35] Build 3, maintenance. Outputs reveal missing requirements. Refine criteria with experts. Review grader disagreements and recalibrate. Models and harnesses change, so rerun representative cases and add production failures to the regression suite. Keep evaluating after deployment.

[1:58] **Inspect the result and the trace before choosing a repair.** The pitfall is **a generic judge instead of error analysis. Trusting the success claim without checking the result.** You need evidence about the actual behavior and where it went wrong.

[2:17] An evaluation suite also gives evidence for changes to models, prompts, retrieval, or tools. Keep the result checks and the across-case measurements running together.

[2:25] **[your story #2]** A failure your tests passed and evals or production caught. Show that the suite was green, the behavior was wrong, and a broader check or real user found it. Sixty seconds. This remains the presenter's personal story, separate from the illustrative FRB check. Hold the general maintenance screen throughout.

[3:25] Now apply that discipline to a brief we can check.

[3:30] Build 4, application. This illustrative answer cites FRB-042-MIN r2, section three, paragraph two. **The citation exists, but it does not support the claim.** The minutes leave the cause unresolved and call for inspection. The answer says the board confirmed bearing wear. **Fail.**

[3:53] Expected: unresolved cause, inspection required. The reference check is direct. Source support needs judgment about the meaning of the passage. Use an expert, or a model grader calibrated against expert decisions. **Citation existence and semantic support are different checks.**

[4:10] Keep this failure as a regression case and rerun it after changes, alongside the broader suite and repeated trials. Inspect the trace before deciding whether retrieval, compaction, synthesis, or another component needs repair.

[4:20] **Check the action before accepting it. Measure across representative cases. Keep both checks running as the system changes.**

[4:30] Advance to slide 18.

Cut first: the spoken component inventory and probability explanation. Never cut the quote, complementary-checks distinction, three decisions, expert calibration, ongoing evaluation, headline pitfall, protected 1:00 story, or citation-existence/source-support distinction. pass@k and pass^k notation and the broader grader inventory remain in research backup.

## Sources

- Hamel Husain and Shreya Shankar, “AI Evals: Everything You Need to Know,” updated September 2026. Research §5 in `research/section-2.md`. Quote checked September 15, 2026.
- Anthropic, “Demystifying evals for AI agents,” January 2026; Husain, 2024 and 2026; Shankar et al., UIST 2024. Research §5. Code, models, and people can grade; subjective graders require calibration.
- Illustrative FRB check, Research §0 and §5. `internal/frb-running-example.md` specifies the deliberately wrong answer's citation and the expected distinction. No deployed-model performance is claimed.
- Conceptual image generated with the built-in imagegen tool. Prompt and provenance: `internal/illustrations/README.md`.

## Open items

- Story #2 remains a protected 1:00 presenter-authored slot over the maintenance screen.
- Review this five-screen sequence before beginning Operating it.
