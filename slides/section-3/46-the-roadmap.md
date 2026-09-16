# Slide 46: The roadmap

Beat 3.4 The roadmap. Section 3. Time 0:55. Two static screens with one replacement advance.

## On the slide

**Kicker:** The transition · The roadmap

**Title:** The roadmap

**Build 1.** Four numbered steps, large.

1. Choose one narrow task.
2. Start with one model call.
3. Turn failures into checks.
4. Add autonomy when evals justify it.

**Build 2.** Replace the four steps with the first assignment:

Review 20 to 50 outputs for one task.

Record the input, observed behavior, expected behavior, and check.

Illustrative FRB example. Use the same record for your task.

| Input | Observed | Expected | Check |
|---|---|---|---|
| FRB-042 summary | Bearing wear confirmed | Cause remains unresolved | Does the source support the claim? |

## Layout and visual

- Preserve narrative number 46, the shared header, mini-map, and two physical slides.
- The four roadmap rows cut to the assignment. Hold the assignment through the handoff to slide 47.
- Use the existing roadmap rows and native four-column record, with visual values in design brief §25.
- Keep the observed error visibly separate from the expected behavior. The example remains explicitly illustrative.
- Explanations stay spoken. The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1.

**Choose one narrow task**, such as summarizing a document with citations.

[0:06] **Start with one model call** and examples you can inspect. If you already have an AI feature, use its outputs for that task.

[0:17] **Turn failures into checks.** Inspect the result, repair the cause, and rerun your cases.

[0:25] **Add autonomy when evals justify it.** Keep actions bounded and verify the result.

[0:33] Build 2.

**Review twenty to fifty outputs for that task. Record the input, observed behavior, expected behavior, and check.**

[0:44] For the FRB, check the false confirmation against the unresolved cause. Fix the cause, then rerun this case. **Use the same record for your task.**

[0:51] **Autonomy is earned by evals, one step at a time.**

[0:55] Advance to slide 47.

Cut first: the spoken FRB explanation, since its record is visible. Never cut the narrow task, the path for someone starting from scratch, the visible assignment and four record fields, or the closing line.

## Sources

- The four-step learning sequence and task choice are the talk's synthesis. Research §4 in `research/section-3.md`.
- Husain, "AI Evals: Everything You Need to Know." Research §4. The four-field record adapts his error-analysis advice. The 20-to-50-output sample is a starting exercise, not proof of production readiness.
- Anthropic, "Building effective agents," December 2024. Research §3 in `research/section-3.md` and §5 in `research/section-1.md`. Simplicity and measured complexity.
- Illustrative FRB callback: Section 2 Research §0 and Section 3 Research §4. `internal/frb-running-example.md`.

## Open items

- Rehearse the four-step explanation and assignment within 0:55.
