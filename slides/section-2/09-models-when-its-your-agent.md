# Slide 9: Models, When you are the owner

Beat 2.1 Models, second half. Section 2. Time 2:30 of the beat's 3:30; slide 8 took 1:00. Builds: 5.

## On the slide

**Kicker:** Models · When you are the owner

**Title:** The model is a component you select, measure, and replace.

**Initial state.** Illustrative FRB request:

“Review FRB-042 about a pump shutdown. Summarize its discussion and decisions, compare similar FRBs from the past year, and export a cited brief distinguishing possible causes from established findings.”

**Build 1. Select.** Evidence extraction · Discussion summaries · Qualified synthesis
Cost per completed brief · p95 latency

**Build 2. Measure.** Representative FRB cases. Preserve the distinction between possible causes and established findings.

**Build 3. Replace.** Replace the request, Select, and Measure with two cards:

- Pinned version: controlled migration and lifecycle management.
- Moving alias: automatic updates and regression monitoring.

Research workers: evidence fidelity and coverage.
Main analyst: faithful summaries, reconciliation, warranted uncertainty.

**Build 4. Route.** Replace with an editable comparison framework.

Repeat for each candidate model and version. Illustrative framework, no results yet.

| Task and role | Quality requirement | Cost | p95 latency |
|---|---|---|---|
| Evidence extraction, research workers | Faithful passages with exact citations | Measure | Measure |
| Discussion summary, main analyst | Faithful discussion and decisions | Measure | Measure |
| Qualified synthesis, main analyst | Supported findings and uncertainty | Measure | Measure |

Route by measured task fit. Include workers, retries, and verification.

**Build 5.** Replace the table with:

Which configuration meets your product's quality requirement?

**Pitfall:** a hardcoded model ID with no eval suite behind it.

## Layout and visual

- Preserve narrative number 9, header, mini-map, and four physical slides.
- Select and Measure accumulate around the initial request. Replace, Route, and the final question each start a new physical slide at the existing cuts.
- Use the native request, role comparison, and table layouts in design brief §16. Keep the framework editable. No invented scores or winning model.
- Preserve the blue cards and final standard pitfall band. Speak the takeaway.

## Talk track

[0:00] Here is our illustrative request: review FRB-042's pump shutdown, summarize its discussion and decisions, compare the past year's similar FRBs, and export a cited brief. **Keep possible causes distinct from established findings.** Research stays within authorized internal records and attachments.

[0:20] Build 1. Select for evidence extraction, discussion summaries, and qualified synthesis. Consider context limits, tool reliability, data residency, cost per completed brief, and p95 latency.

[0:37] Build 2. **Measure your product on representative FRB cases.** A possible cause must remain a possible cause. Public benchmarks use another population and harness.

[0:52] Build 3. **Pinned version: controlled migration and lifecycle management. Moving alias: automatic updates and regression monitoring.** A snapshot controls one source of variation. Prompts, retrieval, tools, and the environment still matter. Research workers need evidence fidelity and coverage. The main analyst needs faithful summaries, reconciliation, and warranted uncertainty. Evaluate those responsibilities separately.

[1:23] Build 4. This table is a comparison framework, with no results yet. Repeat it for candidate models and versions. **Read quality, cost, and latency together.** Measure extraction, discussion summaries, and qualified synthesis. Count workers, retries, and verification in cost per completed brief and end-to-end latency. Route only when measured task fit supports it. A worker is not automatically a job for the cheapest model. We will measure the simple workflow before adding workers.

[2:04] Build 5. **Which configuration meets your product's quality requirement?** The pitfall: **a hardcoded model ID with no eval suite behind it.** That leaves you choosing a replacement without evidence.

[2:20] **The model is a versioned, expiring dependency. Treat it like one.**

[2:30] Advance to slide 10.

Cut first: spoken selection axes and the list of table rows. Never cut the FRB request's evidence distinction, separate analyst/worker requirements, unmeasured status, lifecycle distinction, or product-quality question.

## Sources

- Anthropic and OpenAI lifecycle pages. Research §1 in `research/section-2.md`. A snapshot does not freeze the whole system.
- Illustrative FRB request and model comparison framework, Research §0 and §1. `internal/frb-running-example.md` holds the invented packet. No measured model result is claimed.
- The displaced prime/composite and routing benchmarks remain in Research §1 as backup with their original qualifications.

## Open items

- None. Candidate measurements are intentionally unspecified in the teaching framework.
