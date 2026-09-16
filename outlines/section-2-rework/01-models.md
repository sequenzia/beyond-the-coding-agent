# Models

Status: reviewed with the presenter, September 15, 2026. Content accepted for this pass. Numbered specs were integrated September 16. Section 2 remains 25:00 to 29:00, with individual cues based on a 27:00 rehearsal reference. Scope agreed with the presenter: data sensitivities, task fit and settings, cost and latency, routing, and model changes. Keep the explanation conceptual. This draft develops the existing content and the added sensitivity constraint.

Integrated September 16 into [outline-v2.md](../outline-v2.md), beat 2.1, and narrative slides 8 through 12. This file retains the reviewed supporting detail. The current numbered specs are in `slides/section-2/`; Research §1 in [research/section-2.md](../../research/section-2.md) remains the evidence layer. The builder implements the integrated specs.

## Opening quote

Selection: Addy Osmani, "Agent Harness Engineering," April 2026. Use the existing model-and-harness comparison in Research §1 as the opening quotation.

Purpose: establish that model selection is a system decision. The surrounding context, tools, and execution design belong in the comparison.

Spoken bridge: **Evaluate the model inside the system you are building.** The quote leads into what the model contributes and which choices remain ours to make.

Qualification: Osmani offers an attributed engineering judgment from experience. The quote is not a universal performance guarantee or a measured comparison for the FRB system. Exact wording and the earlier verification record remain in research.

## What is it?

The model is the component that interprets the supplied task and context and produces a response or proposed action. In an agentic system, its output can influence which action happens next. The harness supplies context, exposes tools, and controls execution around it.

The engineering choice includes the model, its version, the settings used for the task, and the service or environment through which it runs. Data sensitivity constrains which of those configurations the team may use.

**Brief coding-agent connection:** choosing a model for a coding task is a familiar version of this decision. A task might involve reading a failure, proposing a patch, or reviewing a change. The connection needs only a sentence. It does not need a picker screenshot or a separate user example.

Boundary: this area establishes model eligibility, selects the configuration, and considers routing between models. Context later explains which information enters a model call. Orchestration explains how to divide and coordinate the work. Production operations addresses enforcement across the system.

Sources: Osmani, April 2026, Research §0 and §1. Anthropic, December 2024, Research §4. Coding-agent model-selection anchors and data-sensitivity teaching guidance, Research §1.

## Why it matters

**Data sensitivity determines which model options are eligible in the first place.** For this audience, work involving Controlled Unclassified Information (CUI) or export-controlled information (ECI) brings familiar compliance and security constraints. Those constraints can exclude an otherwise capable model service or deployment environment.

Among the permitted options, **the relevant question is whether the configuration meets this product's requirements on its actual tasks.** Compare the quality of the result with the cost and latency needed to obtain it. Approval for the data is a prerequisite to that comparison.

The presenter identifies a practical constraint in this audience's environment: approved choices for CUI and ECI work tend to be older and less capable. That can limit the behavior the system can reliably support. The FRB example makes this an explicit design assumption. It is not a general claim that approved environments always lag or that model age alone predicts task performance.

The unit of comparison should include the surrounding workflow. A low-cost call is only one part of a completed task that may also need retrieval, retries, and verification. A configuration that produces more work for later stages can change the product-level trade-off.

The choice also needs a lifecycle plan. Model versions can retire, and moving aliases can change the version being used. A pinned version controls one dependency. Prompts, retrieval, tools, and the environment can still change the system's behavior.

Sources: presenter-supplied audience context, September 2026; NARA, August and May 2025; NIST, May 2024; model-selection framing, lifecycle sources, and qualified routing evidence, Research §1. FRB measurement contract, Research §0. The selection sequence is teaching guidance derived from these sources and the audience context, not a claim that a particular configuration is approved or wins.

## Key decisions and trade-offs

### What data sensitivities constrain the choice?

Identify the data the system will process and the model services and environments approved for that data and intended use. The audience's CUI and ECI constraints belong here, before ranking models by capability, price, or speed.

**Start with the options approved for your data. Compare task fit within that set.** Compliance and security requirements constrain the available trade-offs. Higher quality or lower cost does not make an ineligible option usable.

Starting approach: establish the permitted model configurations with the relevant organizational guidance. Approval concerns the service, deployment environment, and intended use. Access to a model or familiarity with its name does not establish that approval. Data residency alone does not describe every applicable constraint.

If the approved options have capability limits, evaluate the useful scope the system can support with them. A narrower task or a more structured workflow may help, at the cost of flexibility, engineering effort, or human review. Measure the result. These changes do not guarantee that an unsuitable model becomes adequate, and the requirement to preserve supported findings remains.

Revisit when the data, approved services, deployment environment, or applicable requirements change. Keep the same constraint when routing to another model, using a fallback, or planning a replacement. This is a conceptual selection principle, not a compliance checklist.

### Which model and settings fit the task?

Compare eligible candidate configurations on representative work. Include failure cases whose consequences matter to the product.

The trade-off is the quality required for the task against cost, latency, and deployment constraints. Relevant constraints in the existing material include context capacity, tool-use reliability, and data residency. Treat reasoning settings as part of the configuration being evaluated. Do not assume a particular setting is always the best choice.

Starting approach: define acceptable results, then compare the permitted candidates inside the intended workflow. Record quality with cost per completed task and latency. Detailed evaluation design comes in Verification and evals.

Revisit when the intended tasks change, serious failures appear, operating requirements change, or a replacement becomes necessary.

### One configuration or routing between models?

One configuration provides a simpler baseline. Routing permits different choices for different work, while adding routing behavior and configurations to evaluate and maintain.

Starting approach: begin with one approved configuration unless measurements justify routing. If routing becomes useful, keep each destination within the permitted set for the data it receives. Evaluate each route and the complete workflow. Include the cost and latency of retries and verification in the comparison.

Revisit when distinct task types show a measured benefit from different configurations that justifies the added maintenance. The existing research does not establish that an inexpensive model will be suitable for every worker task.

### How will model changes be controlled?

A pinned version supports an explicit migration process, but still needs monitoring for retirement and a replacement plan. A moving alias can adopt updates, which makes regression monitoring part of the operating approach.

Starting approach: record the chosen version policy and the cases a replacement must pass. Confirm that a proposed replacement remains eligible for the data and intended use, then compare it with the old configuration. Keep the relevant harness configuration with those results.

Revisit at lifecycle changes or when quality, cost, latency, or deployment requirements justify a new configuration. A snapshot alone does not establish stable whole-system behavior.

Sources: data sensitivities, model-selection, and lifecycle framing, Research §1. The eligibility rule is the talk's engineering guidance informed by NARA, NIST, and presenter context. The LangChain routing experiment remains qualified supporting material. Its results do not predict the FRB workload.

## Common challenges and pitfalls

| Challenge | How it appears | Investigation or response |
|---|---|---|
| Model access is mistaken for permission to use the data | An available model service falls outside the approved scope for the task's data | Establish the eligible configurations before selection. Recheck routing, fallbacks, and replacements against the same requirements. |
| The design assumes capabilities the approved models cannot deliver | The intended workflow depends on behavior available only in an ineligible model | Evaluate the approved options on the actual task. Test a narrower scope or more structured workflow and human review. Limit or defer capabilities that still fail the quality requirement. |
| Evaluation no longer represents the task | The original cases look acceptable while new kinds of requests fail | Refresh cases as intended use changes. Inspect the failed work before changing the model. |
| Routing coverage is incomplete | The aggregate result hides a weak route | Review each route and the whole workflow, including retries and verification. |
| A lifecycle change arrives without a replacement plan | The system depends on a version approaching retirement | Monitor the dependency and evaluate a replacement before migration becomes urgent. |
| A model version is blamed for a system change | Behavior changes even though the model snapshot was pinned | Inspect prompts, retrieval, tools, and environment changes as well as the model. |

**Headline pitfall:** Choosing and changing models without testing them on your task.

The maintenance responsibility is to keep eligibility and task comparisons current as data, requirements, routes, dependencies, and the rest of the system change.

Sources: Research §1 and the existing Models maintenance material. These are engineering failure modes to investigate, not reported outcomes from the FRB example.

## FRB use case as an applied example

**Illustrative proposed design. No model scores or winning configuration are supplied.** The complete invented packet lives in [internal/frb-running-example.md](../../internal/frb-running-example.md).

The request asks for a cited brief that summarizes FRB-042's discussion and decisions and compares similar shutdowns. **Assume the FRB corpus includes CUI and ECI.** Begin with model services and environments approved for the applicable records and intended use. This is an illustrative deployment constraint. The invented excerpts contain no actual controlled information.

For this example, assume the approved model choices are older and less capable for the intended synthesis than newer alternatives outside the approved environment. **The system must deliver useful work with the models it is permitted to use.** The engineering question is how much of the requested brief those options can support reliably.

The central distinction is concrete. FRB-042-BRF r1, slide 6, names bearing wear as a possible cause. FRB-042-MIN r2, §3 paragraph 2, leaves the cause unresolved and requires an inspection before assigning one. These are different documents. **A possible cause must remain a possible cause.**

Proposed starting design: one eligible model configuration for the brief, with a pinned version where available and a migration plan. Compare permitted candidate configurations inside the same intended workflow using the shared packet and a broader set of representative cases.

If evaluation exposes a capability gap, test a narrower task or a more structured workflow with focused evidence and human review. For example, evaluate preparing source-linked findings for an engineer to reconcile before relying on an automated cross-case synthesis. Accept that design only if the checks establish useful, supported results. If they do not, limit or defer the capability. No stronger unapproved model receives the restricted records as a fallback. This is a conceptual design response, with no invented performance comparison.

| Selection question | Evidence to collect |
|---|---|
| Is this configuration eligible for the CUI/ECI records? | The applicable organizational requirements and approved scope for the intended model service and environment. No actual approval is claimed for the invented example. |
| What useful scope can the approved model support? | Task evaluations showing whether the full brief or a narrower assisted workflow meets the quality requirement. No capability score or successful mitigation is assumed. |
| Does the configuration preserve the distinction? | Whether summaries retain the unresolved cause, preliminary hypothesis, and inspection decision. |
| Does it preserve the supporting record? | Whether material claims retain the correct document identity, revision, and location, with checks for source support. |
| Does it meet operating requirements? | Quality, cost per completed brief, and latency, including retries and verification. No acceptance threshold is invented here. |

The deliberately wrong conclusion is that the board confirmed bearing wear. Use that failure to ask whether a configuration meets the requirement. Save the detailed citation-existence versus source-support check for the Evals application.

Reconsider the starting design when a suitable newer model becomes available in the approved environment, data-handling requirements change, measurements justify a different eligible configuration, or lifecycle requirements force a replacement. Approval and task evaluation both apply to the change. Do not infer a model problem from the answer alone. Inspect the trace to determine which component lost or overstated the evidence.

Sources: illustrative FRB packet and selection framework, Research §0 and §1. Failure investigation and checks, Research §5. The example is a proposed teaching design, not a deployed system or personal story.

## Delivery notes

- **Must say:** establish which model services and environments are approved for the data before comparing quality, cost, and latency.
- **Must say:** the FRB example assumes CUI/ECI records and older, less capable approved model choices. Evaluate the useful scope those choices can support without lowering the evidence requirement.
- **Must say:** compare configurations on the product's tasks inside its intended system.
- **Must say:** judge quality alongside cost and latency for completed work.
- **Must say:** model changes require evaluation, and a pinned version does not freeze the whole system.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Transition: a model comparison depends on the information the system supplies. Context and knowledge explains how to select and maintain that information.
- Cut first during pacing: the detailed selection-axis inventory, followed by routing mechanics. Benchmark figures remain backup.
- Never cut: the quote's qualification, data-sensitivity constraint, representative-task comparison, lifecycle responsibility, headline pitfall, illustrative status, and FRB uncertainty.

## Review questions and decisions

- Agreed structure: quote first, then the five content headings. No separate user/owner framing.
- Agreed drafting constraint: content can grow. Timing and slide counts come later.
- Agreed breadth: data sensitivities, task fit and settings, cost and latency, one model versus routing, and model changes. Hosted versus self-hosted deployment and model adaptation are outside this pass.
- Agreed depth: keep the trade-off explanation conceptual. Do not add a hypothetical comparison between candidate configurations.
- Agreed audience connection: name CUI and ECI in the general model-selection explanation. Establish eligible model services and environments before comparing capability, cost, or latency.
- Agreed FRB treatment, revised September 15: explicitly assume the corpus includes CUI and ECI, with older and less capable approved model choices for the intended synthesis. This replaces the earlier decision to keep sensitivity general. The excerpts remain invented. The capability constraint reflects presenter-supplied audience context, not a universal performance claim.
- Review outcome: presenter accepted this content pass and asked to proceed to Context and knowledge. Final pacing and presentation-machine rehearsal remain pending.
