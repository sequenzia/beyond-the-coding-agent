# AgentOps integration draft

Numbering note, September 16, 2026: the orientation insertion shifts this review's deck slide numbers 10 through 47 forward by one. The original review numbers below are historical. See `internal/deck/section-2-orientation-numbering-map.json` for current spec paths.

Accepted and integrated September 16, 2026. The presenter approved this draft for the outline, slide specs, and PowerPoint. Outline beat 2.6, specs 35 through 39, design brief §32, and the reusable builder implement the practical primer and approved-update incident. SLOs and error budgets remain in Markdown backup. This file retains the supporting content review. Rehearse the retained 4:10 area reference.

## Agreed direction and carried-forward structure

- Teach traces, versioned configuration, and outcome metrics in practical terms.
- Keep SLOs and error budgets in Markdown backup.
- Use an approved model/configuration update that worsens brief quality and review work while APIs remain healthy as the main FRB application.
- Keep quote, foundations, decisions, pitfalls, and separate FRB application.
- Preserve the security headline, authority enforced outside the model, protected telemetry, accountable response, and human responsibility for official board records.
- Retain the operating agreement as supporting material for the incident.

The organizing distinction is operational scope. Orchestration controls work within a run. AgentOps maintains useful and accountable service across runs, releases, and changing conditions. This is the talk's working definition, not a universal industry taxonomy or a vendor product name.

## Integration map and rehearsal reference

| Current slide | Proposed role | Main change | Rehearsal reference |
|---|---|---|---|
| 35 | Quote | Keep the Rauch quotation and Datadog attribution. | 0:25 |
| 36 | Foundations | Explain traces, configuration versions, and outcome measures. | 0:55 |
| 37 | Operating decisions | Connect protected evidence, controlled releases, and accountable response. | 1:00 |
| 38 | Pitfalls | Retain the combined capability risk and exact headline pitfall. | 0:45 |
| 39 | FRB application | Work through a release regression and the operating response. | 1:05 |
| Total | Five static screens | Redistribute the existing area allocation. | 4:10 |

The foundations slide gains 0:15, decisions gives up 0:20, and the application gains 0:05. Section 2 retains its 28:30 rehearsal reference within the 25:00 to 29:00 range. Rehearsal must validate the split.

## 1. Quote

**Kicker:** AgentOps · Perspective

Retain the exact selected quotation, attribution, and illustration from slide 35. Guillermo Rauch is the speaker; Datadog publishes the quotation in its 2026 report.

**Spoken bridge:** The team needs evidence of actual behavior and responsibility for responding when the system departs from its intended use.

Keep this as an attributed perspective, not a measured prediction about future failures.

Cut first: the report context. Never cut the speaker/publisher distinction or connection to accountable response.

Sources: Rauch in Datadog, 2026. Research §6.

## 2. Foundations

**Kicker:** AgentOps · Foundations

**Proposed title:** Operating the system over time

### Proposed visible content

Operate agentic systems with observability, enforced controls, and accountable response.

| Foundation | Meaning |
|---|---|
| Trace | The operations behind one task. |
| Versioned configuration | The versions and settings in use. |
| Outcome metrics | Quality, completion time, cost, and review work. |

### Explanatory treatment

Connect one recorded task to its configuration and outcome. A compact trace can show retrieval, a model call, verification, and the resulting export or hold, with one operation identified as a span. Use labels without invented durations, token counts, success rates, or telemetry screenshots.

The trace depicts recorded work, not a second orchestration diagram prescribing the next action. Explain that the same evidence can be compared across many tasks and configurations. The content should remain readable as one composition. All visual values belong in the design brief when adopted.

### Proposed talk track

**AgentOps operates the service across many runs and over time.** Orchestration controls one run. Here we connect observability, enforced controls, and accountable response as the system changes.

A trace connects the operations behind a task: retrieval, model calls, tools, checks, and the outcome. A span records one timed operation. These are observations of work, not access to the model's private reasoning.

Versioned configuration records the code, model and settings, prompts, retrieval setup, and tool contracts in use. A prompt edit or index refresh can change answers without an application-code release.

Outcome metrics track useful completion and quality alongside time, cost, and review work. Quality judgments may arrive later or through samples. **API availability alone does not establish that the task succeeded.**

Cut first: the full configuration inventory. Never cut the across-runs scope, trace/configuration/outcome connection, or distinction between API health and task success.

Sources: OpenTelemetry trace and GenAI guidance, checked September 2026; Google SRE operating guidance, 2018, checked September 2026. Research §6. The configuration inventory applies the responsibilities already established in areas 1 through 5.

## 3. Operating decisions

**Kicker:** AgentOps · Decisions

**Proposed title:** Operating decisions

### Proposed visible content

| Decision | Starting approach and trade-off |
|---|---|
| Evidence | Capture enough to investigate. Limit sensitive content. |
| Releases | Compare a controlled cohort. Define rollback conditions. |
| Response | Enforce scope and limits. Assign an authorized responder. |

### Explanatory treatment

Use three aligned rows. Connect the decisions to the foundations: evidence makes traces useful, release control makes versions comparable, and response gives operating signals a consequence.

Keep the detailed operating agreement in the supporting artifact. Avoid adding a dense dashboard or a second metric inventory. The choices are the focus of this screen.

### Proposed talk track

First, choose evidence that supports investigation: source revisions, model and tool activity, checks, export state, and resource use. Connect outcomes to the configuration. More raw content creates exposure; minimize capture and protect access and retention.

Second, evaluate a candidate before release, then compare a controlled cohort with the tested configuration on comparable tasks. Define when to pause or roll back. Gradual exposure limits the affected population but takes time to reveal some failures. Keep a compatible configuration available.

Third, **enforce identity, scope, destinations, and budgets outside the model.** Assign who receives failed checks, missing evidence, exhausted budgets, and unknown outcomes. Orchestration implements the run's rules; AgentOps assigns the operating policy and response. Human handoff needs an authorized responder with the relevant evidence. **A configuration rollback does not undo completed actions.**

Cut first: the detailed evidence inventory and gradual-release trade-off. Never cut protected evidence, controlled change, enforced authority, response ownership, or rollback limits.

Sources: OpenTelemetry and Google SRE guidance, checked September 2026; existing OWASP authorization guidance and FRB operating agreement. Research §0, §3, and §6.

## 4. Pitfalls

**Kicker:** AgentOps · Challenges and pitfalls

**Proposed title:** Risks across integrations

### Proposed visible content

- **Private data:** Information the system can access.
- **Untrusted content:** Instructions can arrive inside documents.
- **External communication:** Outbound actions can carry information.

**Pitfall:** Combining private data, untrusted content, and outbound access without reviewing the risk.

A probabilistic filter is insufficient as the sole security boundary.

### Proposed talk track

**Combining private data, untrusted content, and outbound access without reviewing the risk** is the headline pitfall. Willison describes how these capabilities can combine into a path for data theft. An internal attachment can contain untrusted instructions, and an outbound request can carry information.

Review the combined capabilities when integrations change. Break or constrain the path, and enforce the permitted scope outside the model. This is one threat model, not a complete safety test. **A probabilistic filter is insufficient as the sole security boundary.**

Preserve the exact headline sentence shared with slide 44. The other decision-specific pitfalls are covered in the preceding screens: API success without useful outcomes, excessive content capture, uncontrolled change, and unowned handoffs.

Cut first: the outbound-request example. Never cut the exact pitfall, threat-model scope, or filter limitation.

Sources: Willison, June 2025; existing OWASP authorization and agentic security guidance. Research §3 and §6.

## 5. FRB application

**Kicker:** AgentOps · FRB application

**Proposed title:** Operating an FRB release

**Illustrative release incident.**

### Proposed visible content

| Incident | FRB example |
|---|---|
| Change | An approved model/configuration update reaches a controlled cohort. |
| Signal | APIs stay healthy. Unsupported drafts and review work increase. |
| Response | Pause the rollout. Inspect traces. Restore the tested configuration when indicated. |

Failed drafts remain blocked from export.

### Explanatory treatment

Use a qualitative incident record. Label the scenario illustrative. Show the change, observed symptoms, and operating response without a graph that implies measured data.

This extends the existing source-support case across a population of requests. The check still distinguishes a valid reference from a supported claim. Its failures now contribute to a service-level signal and response. The broader operating agreement remains available in the supporting notes and shared FRB contract.

### Proposed talk track

In this fictional rollout, an approved model/configuration update reaches a controlled group of FRB requests. The APIs remain healthy, but more drafts overstate unresolved causes and require authorized review. **The source-support gate still blocks failing drafts from export.** The controls work, but useful completion and review effort worsen.

The assigned operator pauses the rollout, compares similar tasks by configuration, and inspects protected traces and source revisions. The association starts investigation; it does not prove root cause. Restore a tested compatible configuration when the rollback condition is met. Data and permission constraints still apply.

Review pending work and any completed effects separately. Keep the existing source-support regression case, add newly understood variants, rerun relevant evals, and monitor recovery. **People remain responsible for official causes, decisions, and board records.**

**The system needs evidence of its behavior and people accountable for responding.**

Cut first: the repeated explanation of suite maintenance. Never cut healthy APIs versus degraded outcomes, the export gate, accountable containment, approved processing scope, or human authority.

Sources: illustrative incident in Research §6, grounded in the shared FRB contract and source-support example in Research §0 and §5; Google SRE release guidance, checked September 2026. No real rollout, measured regression, or named model approval is claimed.

## Supporting operating artifact

The existing operating agreement supplies the responsibilities behind the incident. Preserve it in `internal/frb-running-example.md` when adopting this draft. Extend its change and signal records to cover configuration comparison and review work.

| Record | What to capture |
|---|---|
| Approved scope | Authorized records, eligible model and supporting services, permitted destinations, and protected traces/evaluation artifacts. |
| Configuration | Code, model/settings, prompts, retrieval setup and relevant data/index revisions, tool contracts, orchestration, and graders. |
| Task evidence | Source revisions, observed actions, verification results, exact checked content, and export receipt or unresolved state. |
| Outcome signals | Supported findings, useful completion, freshness, parsing/tool failures, cost per completed brief, latency, and review work. |
| Release decision | Candidate and comparison population, relevant task categories, rollout conditions, and a tested compatible recovery configuration. |
| Response | Assigned authorized operator, containment action, pending work, completed effects, and unresolved questions. |
| Improvement | Failure analysis, targeted repair, existing and new regression cases, and evidence of recovery. |
| Official decisions | People retain authority over official causes, decisions, and board records. |

Keep task mix, sampling, and delayed quality labels visible when interpreting trends. Track review effort separately if it is not included in the monetary cost measure. A higher number of blocked drafts may reflect effective enforcement while also revealing degraded usefulness. It does not establish that unsupported content was exported.

Model eligibility and deployment readiness are separate decisions. The candidate and restored configuration must remain within the applicable CUI/ECI processing boundary. Do not introduce a stronger unapproved model as an emergency fallback. If a suitable compatible configuration is unavailable, pause or limit the capability and route the work to the authorized responder.

No response times, quality thresholds, review-minute totals, rollout percentages, or actual organizational owners are invented. Define those with the responsible team in a real deployment. The incident is an authored teaching scenario, not presenter experience.

## Backup: SLOs, error budgets, and release details

Keep these outside the visible copy and timed talk tracks:

- An SLI is a measured service indicator. An SLO is its target over an agreed period. An error budget expresses the allowed shortfall under that objective and informs an agreed operating response. It does not relax access controls or other hard constraints.
- Choose measures tied to the user task. Explain sampling and label delay before treating measured quality as complete coverage. No universal quality target or release threshold is claimed.
- A canary is a limited release evaluated against a control before wider exposure. Comparable work and isolation matter; correlation with a release alone is not proof of cause.
- If a shadow comparison is used, disable or isolate external writes and preserve the same data and permission boundaries.
- The consulted OpenTelemetry GenAI conventions are marked Development. Schema specifics remain implementation references, not stage vocabulary.

Sources: Google SRE, 2018, and OpenTelemetry, checked September 2026. Research §6; external research report §6.

## Review and adoption

- Presenter selected the practical primer and approved-update incident.
- Presenter accepted the five-screen copy and timing redistribution.
- Integrated Research §6, the shared FRB contract, outline beat 2.6, specs 35 through 39, design brief §32, and reusable deck authoring code together.
- Preserve the quote, exact recap pitfall, map assets, narrative numbering, and build counts.
- Keep AgentOps at 4:10 and Section 2 at 28:30, subject to spoken rehearsal.
- Full rendering and structural validation passed. AgentOps content and the map handoff were inspected in native PowerPoint. Some slideshow captures omitted header graphics or were blank; editing views and fresh playback starts displayed the complete slides. Continuous playback on the actual presentation machine remains a required check, including mini-maps and dividers. A header-name compatibility probe was inconclusive and was not adopted.

## Source material

- External storyboard: `research/external/ai-engineering-presentation-storyboard.md`, slides 18 through 20.
- External report: `research/external/ai-engineering-research-report.md`, §6.
- Current outline: `outlines/outline-v2.md`, beat 2.6.
- Evidence layer: `research/section-2.md`, §0, §5, and §6.
- Shared example: `internal/frb-running-example.md`.
