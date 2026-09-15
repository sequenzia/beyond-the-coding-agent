# Slide 17: Verification and evals, When you are the owner

Beat 2.5 Verification and evals, second half. Section 2. Time 1:15 of the beat's 5:00; slide 16 took 3:45. Builds: 4.

## On the slide

**Kicker:** Verification and evals · When you are the owner

**Title:** Verify one. Evaluate many. Keep evaluating.

**Build 1.** Illustrative FRB checks. Editable comparison:

| Direct checks | Expert judgment |
|---|---|
| IDs and revisions match | Faithfulness to the evidence |
| Permissions and locations valid | Useful synthesis across cases |
| Exports match selected content | Warranted uncertainty |
| Citation exists | Citation supports the claim |

**Build 2.** Replace the table with the improvement cycle. Illustrative FRB failure:

1. Inspect the failure and trace. Find the responsible component.
2. Change that component. Rerun the suite with repeated trials.
3. Monitor production samples. Add new failures to regression cases.

**Build 3.** Your eval suite gives evidence for a migration decision.

**Build 4. Pitfall:** a generic judge instead of error analysis. Trusting the success claim without checking the result.

## Layout and visual

- Preserve narrative number 17, header, mini-map, and two physical slides.
- Domain checks enter on build 1. The improvement cycle replaces them at the existing build 2 cut. Migration line and pitfall remain additive reveals.
- Use the editable comparison table and flat numbered cycle in design brief §16. Readable sublines replace the older small card captions.
- Keep the distinction between citation existence and semantic support visible. Preserve the pitfall word for word and speak the takeaway.

## Talk track

[0:00] Build 1. **You must define the checks your domain needs.** FRB IDs, revisions, permissions, source locations, and exported content can be checked directly. Experts judge faithfulness, useful synthesis, and warranted uncertainty. **Citation existence and semantic support are different checks.** Calibrate model graders to experts.

[0:23] Build 2. Inspect the false confirmation and its trace. Did parsing lose the qualification, retrieval miss later minutes, compaction drop a constraint, a worker overstate evidence, or synthesis ignore it? **Identify the responsible component before changing it.** Rerun representative cases with repeated trials. Monitor production samples and add new failures to regression cases.

[0:49] Build 3. **Your eval suite gives evidence for a migration decision.** It also checks prompt, retrieval, and tool changes.

[0:57] Build 4. **A generic judge instead of error analysis. Trusting the success claim without checking the result.**

[1:06] **Check the action. Measure across cases. Keep both checks running as the system changes.**

[1:15] Advance to slide 18.

Cut first: the spoken component inventory. Never cut diagnosis before repair, existence versus support, representative reruns, ongoing measurement, or the pitfall.

## Sources

- Anthropic, January 2026; Husain, 2024 and 2026. Research §5 in `research/section-2.md`. Checks and evals are complementary.
- Illustrative FRB checks and improvement cycle, Research §0 and §5. Packet in `internal/frb-running-example.md`.
- Slide 9's lifecycle pitfall sets up the migration decision. Research §1.

## Open items

- None.
