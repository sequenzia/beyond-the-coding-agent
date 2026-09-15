# Slide 17: Verification and evals, when it's your agent

Beat 2.5 Verification and evals, second half. Section 2. Time 1:15 of the beat's 5:00; slide 16 took 3:45. Builds: 4.

## On the slide

**Kicker, top left, small:** Verification and evals · When it's your agent

**Title:** Verify one. Evaluate many. Keep evaluating.

**Build 1.** One line, then two example questions beneath it, quoted.

Your domain has no test suite.

"Was this refund decision correct?" "Was this summary faithful?"

**Build 2.** Three steps in a row, each with a subline.

1. Build the verifier.
   Schema check · business rule · database state · rubric-driven second model · human
2. Build the eval suite.
   A population of runs, not one run.
3. Keep running it.
   On sampled production traffic. The offline suite is a frozen snapshot; your users are not.

**Build 3.** One line.

A new model ships. The suite says yes or no in a day, not a quarter.

**Build 4. Pitfall band, bottom.**

Pitfall: a generic judge instead of error analysis. Grading the transcript instead of the outcome.

## Layout and visual

- Build 1 is the turn: the coding agent had a verifier for free, and your domain does not. The two quoted questions are the kind of check no compiler answers. Set them as quotes, not bullets.
- Build 2 is the three-step spine of the area, and the title restates it. Set the three steps as a row with the step number large, so the sequence reads left to right. The sublines are small. The third step's subline is the longest and carries the third commitment.
- Build 3 is one sentence and it closes the loop opened on slide 9, where the pitfall was a replacement model you had never measured. Keep it alone on its line.
- The pitfall band matches slides 9, 11, 13, and 15. This area has two pitfalls, and the band carries both in one sentence pair, matching line 5 of slide 22 exactly.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1.

**Your domain has no test suite.** There is no compiler for "was this refund decision correct" or "was this summary faithful."

[0:09] Build 2.

So you build the verifier: a schema check, a business-rule assertion, a database state check, a rubric-driven second model, or a human. Then, separately, you build the eval suite, because verifying one run tells you nothing about the distribution. Then you keep running it, on sampled production traffic, because **the offline suite is a frozen snapshot and your users are not.** That is the third commitment from the start of the talk.

[0:37] Build 3.

And here is the payoff for the models section. **When a new model ships, and several did this summer, the suite is what lets you say yes or no in a day instead of a quarter.**

[0:51] Build 4.

Two pitfalls. **Skipping error analysis for a generic judge or a public benchmark. And grading the transcript instead of the outcome.**

[0:59] **Tests check a path. Evals check a distribution. You need both, and only one of them ever stops.**

[1:15] Advance to slide 18.

The track runs about 1:06. The slack is for the takeaway, which should be delivered slowly; it is the line the third commitment was built to reach. Nothing on this slide is cuttable.

## Sources

- The verifier list, the three steps, and the payoff are the talk's own framing, built on Anthropic's evals post and the Agent SDK post cited on slide 16. Research §5 in `research/section-2.md`.
- "Several did this summer": research §7 lists Sonnet 5 and Opus 5 with summer 2026 dates marked `UNVERIFIED`. The phrasing is deliberately loose. If you want a named model and date on stage, confirm one the week of the talk.
- Both pitfalls trace to Husain ("Generic evaluations waste time and create false confidence") and Anthropic (outcome versus transcript). Research §5, and §3 in `research/section-3.md`. `[primary]`.
- Slide 9's pitfall is the setup for build 3. Research §1.

## Open items

- Optionally name a model and release date in build 3's spoken line, after checking it the week of the talk.
