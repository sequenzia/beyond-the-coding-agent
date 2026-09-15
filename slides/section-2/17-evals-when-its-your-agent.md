# Slide 17: Verification and evals, When you are the owner

Beat 2.5 Verification and evals, second half. Section 2. Time 1:15 of the beat's 5:00; slide 16 took 3:45. Builds: 4.

## On the slide

**Kicker:** Verification and evals · When you are the owner

**Title:** Verify one. Evaluate many. Keep evaluating.

**Build 1.** You must define the checks your domain needs.

Refund limits · Account ownership · Ledger state
Faithfulness may need expert judgment.

**Build 2.** Three steps.

1. Build the verifier. Schema check · business rule · database state · calibrated rubric · human
2. Build the eval suite. Representative cases and repeated trials.
3. Keep running it. Regression checks and sampled production traffic.

**Build 3.** Your eval suite gives evidence for a migration decision.

**Build 4. Pitfall:** a generic judge instead of error analysis. Trusting the success claim without checking the result.

## Layout and visual

- Display narrative number 17 throughout, using the shared component in the design brief.
- Playback: Two physical slides. The domain checks remain an internal reveal. The cards begin the second slide with a hard cut. The migration line and pitfall remain internal reveals.

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Preserve the three-step cards and existing advance order. Replace build 1 with a hard cut on the second advance.
- The migration line fits below the cards, above the final pitfall band. The band matches slide 23 word for word.
- Speak the takeaway; do not show it.

## Talk track

[0:00] **You must define the checks your domain needs.** Refund limits, duplicate actions, account ownership, and ledger state may be directly checkable. Other qualities, such as faithfulness, may need expert judgment.

[0:15] Build 2. Build the verifier. Measure behavior across representative cases and repeated trials. Keep regression checks running and sample production traffic as the system changes.

[0:35] Build 3. **Your eval suite gives evidence for a migration decision.** The time and confidence depend on the task, sample size, and deployment constraints.

[0:48] Build 4. **A generic judge instead of error analysis. Trusting the success claim without checking the result.**

[0:58] **Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes.**

[1:15] Advance to slide 18.

Cut first: the domain-example list and migration-time detail. Never cut the responsibility to define checks, ongoing measurement, or takeaway.

## Sources

- Anthropic, January 2026, and Husain, 2024 and 2026. Research §5 in `research/section-2.md`. Checks and evals are complementary. The migration payoff is evidence, not a one-day promise.
- Slide 9's model lifecycle pitfall sets up the migration decision. Research §1.

## Open items

- None.
