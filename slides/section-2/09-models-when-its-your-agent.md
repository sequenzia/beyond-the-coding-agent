# Slide 9: Models, When you are the owner

Beat 2.1 Models, second part. Section 2. Time 3:00 of the beat's 3:30; slide 8 took 0:30. Four static screens: quote 0:20, decisions 1:05, maintenance 0:50, application 0:45. Three advances, all hard cuts.

## On the slide

**Kicker throughout:** Models · When you are the owner

**Build 1, quote.** No additional title.

“A decent model with a great harness beats a great model with a bad harness.”

Addy Osmani
Agent Harness Engineering, April 2026

Conceptual illustration: a small blue model component supported by a larger surrounding structure.

**Build 2, decisions.** Title: The model decisions you own

| Decision | Impact and starting approach |
|---|---|
| Which model and reasoning settings? | Balance task quality, cost, latency, and deployment constraints. Start with representative task comparisons. |
| One model or different models? | Routing adds task-specific choices and more configurations to maintain. Start with one until evidence supports routing. |
| How will model changes be controlled? | Pinned versions need planned migration. Moving aliases need regression monitoring. Define evaluation and replacement practices. |

**Build 3, maintenance.** Title: Living with model choices

- **Task changes:** New tasks can expose gaps in the original evaluation. Refresh the cases as intended use changes.
- **Routing:** Each route needs evaluation coverage. Measure the whole workflow as routes change.
- **Model lifecycle:** Versions retire. Aliases update. Monitor changes and prepare a replacement.

A snapshot does not freeze the whole system.

**Pitfall:** Choosing and changing models without testing them on your task.

**Build 4, application.** Title: A starting design for the FRB brief

Illustrative proposed design. No model results claimed.

| Choice | Starting design and rationale |
|---|---|
| Task fit | Compare models on faithful summaries and supported findings. |
| Allocation | One model configuration for the brief. Add routing only when measurements justify it. |
| Changes | Pinned version where available, with a migration plan. |

Revisit when measured quality, cost, latency, or lifecycle requirements justify a change.

## Layout and visual

- Keep narrative number 9, kicker, and mini-map on all four screens. Each content screen has its own title.
- Use the quote composition, aligned decision rows, maintenance rows, and native application table in design brief §17.
- Quote and attribution remain editable text. Use `internal/illustrations/models-in-system.png` only on the quote screen.
- All content appears immediately. Each advance replaces the body and title on a hard cut. No blank opening state, internal reveal, or pitfall footer.
- Keep the general decision and maintenance screens free of FRB details. The final screen applies those decisions to an illustrative starting design.

## Talk track

[0:00] Build 1, quote. **“A decent model with a great harness beats a great model with a bad harness.”** Addy Osmani is describing his experience. **Evaluate the model inside the system you are building.** Context, tools, and control flow shape the result too.

[0:20] Build 2, decisions. Three decisions. First, which model and reasoning settings fit the task? **Compare candidates on representative tasks.** Read quality, cost, and latency together. Deployment constraints include context limits, tool reliability, and data residency.

[0:39] Second, one model or different models for different work? **Start with one configuration unless measurements justify routing.** Routing gives you more choices, but also more configurations to evaluate and maintain. Orchestration, later, determines how the work is divided and coordinated.

[1:01] Third, how will changes be controlled? **Pinned versions need planned migration. Moving aliases need regression monitoring.** Define how you will evaluate and replace a model before the choice becomes a dependency.

[1:25] Build 3, maintenance. Tasks change. Refresh your evaluation cases as intended use changes. Routes change. Cover each route and measure the whole workflow, including retries and verification. Model versions retire and aliases update. Monitor those changes and prepare a replacement.

[1:46] **A snapshot does not freeze the whole system.** Prompts, retrieval, tools, and the environment can still change. **Choosing and changing models without testing them on your task** is the recurring pitfall. Skipping that evidence leaves a gap in every one of these decisions.

[2:15] Build 4, application. Now apply those choices to the FRB brief. This is a proposed starting design, with no measured model results. Compare candidates on faithful summaries and supported findings. **A possible cause must remain a possible cause.** The later minutes still leave FRB-042's cause unresolved.

[2:33] Begin with one model configuration. Use a pinned version where available, with a migration plan. **Revisit the design when measured quality, cost, latency, or lifecycle requirements justify a change.** The example shows the reasoning behind a starting point, not a winning model.

[2:52] **The model is a versioned, expiring dependency. Treat it like one.**

[3:00] Advance to slide 10.

Cut first: the spoken deployment constraints and routing detail. Never cut the quote's attribution, the three decisions, whole-system qualification, headline pitfall, illustrative status, or FRB uncertainty. Preserve the five-screen rhythm and 3:30 total for the area.

## Sources

- Addy Osmani, “Agent Harness Engineering,” April 2026. Research §1 in `research/section-2.md`. Exact quote checked September 15, 2026. An attributed practitioner judgment, not a universal performance guarantee.
- Anthropic and OpenAI lifecycle pages and model-selection framing. Research §1. A snapshot does not freeze the whole system.
- Illustrative FRB task and proposed design, Research §0 and §1. `internal/frb-running-example.md` holds the invented packet. No model scores or winning configuration are claimed.
- Conceptual image generated with the built-in imagegen tool. Prompt and provenance: `internal/illustrations/README.md`.

## Open items

- Review this five-screen Models sequence before beginning Context & Knowledge.
