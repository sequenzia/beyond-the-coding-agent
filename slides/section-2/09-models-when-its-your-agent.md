# Slide 9: Models, when it's your agent

Beat 2.1 Models, second half. Section 2. Time 2:30 of the beat's 3:30; slide 8 took 1:00. Builds: 5.

## On the slide

**Kicker, top left, small:** Models · When it's your agent

**Title:** The model is a component you select, measure, and replace.

**Build 1. Select.** A row of six short labels.

Capability on your tasks · Cost per completed task · Latency at p95 · Context window · Tool-use reliability · Data residency

**Build 2. Measure.** One line.

Benchmarks measure someone else's traffic on someone else's harness. Your eval suite measures yours.

**Build 3. Replace.** Two options side by side, then a stat line.

- Dated snapshot: reproducibility, and an expiry date.
- Alias: silent upgrades, and silent drift.

GPT-4, same prime-number questions: 84% in March 2023, 51% in June.

**Build 4. Route.** One line with the number.

145 agent tasks: only 7% of calls needed the frontier model.

**Build 5. Pitfall band, bottom.**

Pitfall: a hardcoded model ID with no eval suite behind it.

## Layout and visual

- Four horizontal bands under the title, labeled Select, Measure, Replace, Route down the left edge. Each band is one line of content, so the whole slide stays readable even when all four are up. The six axes are the only list, and they run across as labels, not down as bullets.
- Build 3 is the visual center. Set snapshot and alias as two matched boxes, each with its benefit and its cost on separate lines, so the trade reads as a pair. The 84% to 51% line sits under them, smaller.
- The pitfall band is the same treatment on all six "when it's your agent" slides: a strip across the bottom, one sentence, the word "Pitfall" as the label. Its wording here must match line 1 of slide 22 exactly.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Title up.

When it is your agent, the model is a component you select, measure, and replace.

[0:05] Build 1.

Select. Six axes. Capability on your tasks, not on a leaderboard. Cost per completed task, not per token. Latency at p95. Context window. Tool-use reliability. And data residency, which in an enterprise can override all the others.

[0:23] Build 2.

Measure. A public benchmark measures a population you did not choose, on a harness you do not control, reported by a party with an interest in the result. Your eval suite measures your traffic. Hold that thought for the evals section.

[0:40] Build 3.

Replace. Models expire. Anthropic promises sixty days' notice; the windows observed this year were 61 and 62 days. OpenAI has twenty-plus models shutting down between October and December. So you pin, and there are exactly two ways. **A dated snapshot buys reproducibility and an expiry date. An alias buys silent upgrades and silent drift.** The canonical drift paper: **GPT-4's accuracy on a prime-number task fell from 84% to 51% between March and June 2023, on the same questions.**

[1:14] Build 4.

Route. LangChain measured this in August. Across 145 multi-step agent tasks, **only 7% of calls needed the frontier model.** Routing cut cost per task by about 70 percent at a six-point accuracy cost. And there is a break-even rule: routing only pays when the price gap between models exceeds the router's own cost.

[1:36] Build 5.

The pitfall: treating the model as a fixed dependency. **A hardcoded model ID with no eval suite behind it.** When the sixty-day email arrives, you have a replacement you have never measured and no way to tell whether it is better or worse on your traffic. The fix is two areas from now, in evals.

[1:58] **The model is a versioned, expiring dependency. Treat it like one.**

[2:30] Advance to slide 10.

The track runs about 2:05 at a measured pace. The slack is deliberate: the numbers in builds 3 and 4 need room to land. Cuttable if the section is running long, in this order: the break-even rule; the OpenAI shutdown count; the 61 and 62 day windows. Do not cut the two pinning lines, the 84 to 51 figure, the 7% figure, the pitfall, or the takeaway.

## Sources

- Anthropic model deprecations page: "at least 60 days' notice"; observed windows of 62 days (Sonnet 4 and Opus 4) and 61 days (Opus 4.1). Research §1 in `research/section-2.md`. `[primary]`.
- OpenAI deprecations page: twenty-plus models scheduled to shut down October to December 2026. Research §1. `[primary]`.
- Chen, Zaharia, Zou, "How is ChatGPT's behavior changing over time?" July 2023. The 84% and 51% figures are well documented; the paper's exact sentence is `UNVERIFIED`, so state the figures and do not quote. Research §1.
- LangChain, "How many of your agent's calls actually need a frontier model?" August 11, 2026. 145 tasks; 7% of calls (4.1% to 9.1% across five runs); $0.092 per task at 86.0% for the frontier model alone, $0.026 at 80.0% routed; break-even rule "minimum offload = judge cost / (expensive cost - cheap cost)." Research §1. `[primary]`.
- The six axes and the benchmark line need no citation; they are the talk's own framing. Research §1 notes the benchmark-criticism percentages are `UNVERIFIED` and must not be used; the general claim is safe.

## Open items

- None. No `[verify]` flags on this slide.
