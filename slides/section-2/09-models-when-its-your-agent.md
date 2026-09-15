# Slide 9: Models, When you are the owner

Beat 2.1 Models, second half. Section 2. Time 2:30 of the beat's 3:30; slide 8 took 1:00. Builds: 5.

## On the slide

**Kicker:** Models · When you are the owner

**Title:** The model is a component you select, measure, and replace.

**Build 1. Select.** Capability on your tasks · Cost per completed task · Latency at p95 · Context window · Tool-use reliability · Data residency

**Build 2. Measure.** Benchmarks use their task population and harness. Measure your product on representative cases.

**Build 3. Replace.** Replace Select and Measure with two cards:

- Pinned version: controlled migration and lifecycle management.
- Moving alias: automatic updates and regression monitoring.

A snapshot controls one source of variation. Prompts, tools, retrieval, and the environment also affect behavior.

GPT-4 prime/composite task, step-by-step prompting: 84% in March 2023, 51% in June 2023.
Chen, Zaharia, Zou, revised 2023 paper. Task-specific, not overall model quality.

**Build 4. Route.** Replace the version content with an editable table and adjacent qualifications.

| Configuration | Accuracy | Cost per completed task |
|---|---:|---:|
| Frontier only | 86.0% | $0.092 |
| Routed | 80.0% | $0.026 |
| Small model only | 77.7% | $0.006 |

LangChain, August 11, 2026. 145 tasks. 7% frontier selection; judge calls excluded.
Run variation: about 2.7 points. Routed gain over small-only: 2.3 points.
Frontier selection: 4.1% to 9.1% across five runs.
About 72% lower cost per completed task; article: 74% lower total cost.

**Build 5.** Replace the route table and qualifications with the product-quality question above the pitfall band.

Which configuration meets your product's quality requirement?

**Pitfall:** a hardcoded model ID with no eval suite behind it.

## Layout and visual

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Keep the existing five clicks. Select and Measure accumulate, then Replace clears them, then Route clears Replace. The final click replaces the routing comparison with the quality question and pitfall band.
- Keep the comparison table editable. Place scope, date, denominators, and run variation beside the routing values. Use the existing type scale and grid, as recorded in the design brief.
- Pitfall wording must match slide 23. The takeaway is spoken.

## Talk track

[0:00] When you are the owner, the model is a component you select, measure, and replace.

[0:05] Build 1. Select for capability on your tasks, cost per completed task, p95 latency, context, tool use, and data residency.

[0:23] Build 2. **Measure your product on representative cases under its operating conditions.** Public benchmarks use a different population and harness.

[0:40] Build 3. **Pinned version: controlled migration and lifecycle management. Moving alias: automatic updates and regression monitoring.** A snapshot controls one source of variation. Prompts, tools, retrieval, and the environment also affect behavior. On prime/composite classification with step-by-step prompting, the March and June 2023 GPT-4 versions scored 84% and 51%. Changed instruction following partly explains the result. This is not overall quality or a pinned snapshot changing internally.

[1:14] Build 4. LangChain compared three configurations across 145 tasks. **Read accuracy and cost together.** Frontier-only scored 86%, routed 80%, and small-only 77.7%. The router selected frontier for 7% of agent calls, excluding judge calls. Its 2.3-point gain over small-only was below observed variation of about 2.7 points. Selection ranged from 4.1% to 9.1%. The cost-per-completed-task drop is about 72%; the article's 74% uses total cost. **Which configuration meets your product's quality requirement?**

[2:04] Build 5. **A hardcoded model ID with no eval suite behind it.** That leaves you choosing a replacement without evidence.

[2:20] **The model is a versioned, expiring dependency. Treat it like one.**

[2:30] Advance to slide 10.

Cut first: spoken selection axes and the frontier-share range, which remain visible. Never cut the scope of the prime example, accuracy tradeoff, run-variation qualification, or product-quality question.

## Sources

- Chen, Zaharia, Zou, revised 2023 paper. Research §1 in `research/section-2.md`. [primary], checked in a browser September 15, 2026. Task and prompting limitations retained.
- LangChain, August 11, 2026. Research §1. [primary], checked September 15. Three configurations, judge-call exclusion, and observed run variation retained.
- Anthropic and OpenAI lifecycle pages. Research §1. A snapshot does not freeze the whole system.

## Open items

- None.
