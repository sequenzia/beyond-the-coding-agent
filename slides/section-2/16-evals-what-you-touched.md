# Slide 16: Verification and evals, When you are the user

Beat 2.5 Verification and evals, first half. Section 2. Time 3:45 of the beat's 5:00, including story #2 at 1:00; slide 17 takes 1:15. Builds: 5.

## On the slide

**Kicker:** Verification and evals · When you are the user

**Build 1.** Preserve the test loop and Fowler quote.

**Build 2.** Two complementary uses of checks. This talk's organizing model:

| Verification | Evaluation |
|---|---|
| Check an action before accepting it | Measure behavior across representative cases |
| Inside the loop | Outside the loop |
| Rules, state checks, visual checks | Tasks, trials, graders, suites |

Graders: code · model, with expert calibration · human

**Build 3.** Replace the table.

Check the result. Inspect the trace.

Illustrative FRB-042 grader:

- FRB-042-BRF r1 · slide 6: “Bearing wear is a possible cause.”
- FRB-042-MIN r2 · §3, paragraph 2: “Cause remains unresolved. Inspect the bearing before assigning a cause.”
- Observed answer: “The board confirmed bearing wear.”
- FAIL: hypothesis reported as a finding.
- Expected: unresolved cause. Inspect before assigning a cause.

**Build 4.** Replace the grader. Preserve pass@k and pass^k with their existing definitions and notation.

**Build 5.** Replace the formulas.

- Start with 20 to 50 tasks drawn from real failures.
- Read failures and refine the criteria.
- Review grader disagreements.

Hold this state for story #2.

## Layout and visual

- Display narrative number 16 throughout, using the shared component in the design brief.
- Playback: Five physical slides. Preserve the Morph into the definitions table. The grader, formulas, and final guidance each begin a new slide with a hard cut. Hold the final slide for story #2.

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Keep the test-loop entry and Morph strip. The definitions table remains editable.
- The grader is a compact illustration. Use the paired source excerpts and observed/expected result layout in design brief §16. Keep source identities and revisions attached. Trace inspection remains in the talk track. This does not stand in for the personal story.
- Keep existing probability typography. The final build contains no allocation or zero-pass statistic.
- Hold the final state for story #2. No extra physical slide.

## Talk track

[0:00] The coding agent can run the repository's checks: write, run, read the failure, retry. Fowler observed models claiming all tests were green when they were not. **Run the check before accepting the claim.** A hook can enforce that check. A model reporting success cannot substitute for it.

[0:32] Build 2. **Checking an action and measuring behavior across cases are complementary uses of checks.** This talk places verification inside the loop and evaluation across runs outside it. Evals are tests of an AI system. Code, models, and people can all grade. Subjective graders need expert calibration.

[1:04] Build 3. **Check the result. Inspect the trace.** Our illustrative briefing says bearing wear is possible. Later minutes leave the cause unresolved and call for inspection. The answer says the board confirmed bearing wear. **Fail: a hypothesis became an established finding.** The expected answer separates the unresolved cause from the inspection decision. A citation can exist without supporting that sentence. Inspect the retrieved revisions, worker findings, synthesis, and required access constraints.

[1:40] Build 4. pass@k is the probability of at least one success in k trials. pass^k is the probability all k succeed. They match at k equals one, but answer different questions as k grows. **Consistency matters for repeated customer use.**

[2:00] Build 5. **Start with 20 to 50 tasks drawn from real failures.** Read failures, refine criteria, and review grader disagreements. Watching outputs can expose missing requirements, the criteria-drift idea from the introduction.

[2:28] **[your story #2]** A failure your tests passed and evals or production caught. It must show three things: the suite was green, the behavior was wrong, and a population-level check or a real user found it. Sixty seconds. This remains the presenter's personal story, separate from the illustrative FRB failure.

[3:28] Hold. Advance to slide 17 at [3:45].

Backup only: Hamel Husain reports that his teams spent 60–80% of development time on error analysis and evaluation in projects they worked on. This describes that experience, not an industry-wide rule.

Cut first: the hook example and grader list. Never cut the complementary-checks distinction, hypothesis-as-fact failure and expected distinction, trace constraints, probability distinction, 20–50-case starting point, or the protected 60-second story slot.

## Sources

- Fowler, August 2025. Research §5 in `research/section-2.md`.
- Anthropic, January 2026: evals are tests; outcome and trace checks; capability and regression suites; probability notation; 20–50 starting cases. Research §5. The flight-booking illustration remains backup in research. The active FRB grader is invented teaching material documented in Research §0 and §5 and `internal/frb-running-example.md`, not a reported incident.
- Anthropic, September and November 2025, for verification mechanisms and premature completion. Research §0 and §4.
- Husain, eval FAQ, updated September 2026. Research §5. Team-specific experience in backup only.
- Shankar et al., UIST 2024. Research §3 in `research/section-1.md`.

## Open items

- Deferred by the presenter: story #2 remains a 60-second personal-story slot over build 5.
