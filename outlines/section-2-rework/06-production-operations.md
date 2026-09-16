# Production operations

Status: reviewed with the presenter, September 15, 2026. Content accepted for this pass. Name selected by the presenter to replace Operating it. Numbered specs were integrated September 16. Section 2 remains 25:00 to 29:00, with individual cues based on a 27:00 rehearsal reference. Scope: observability, guardrails, security, identity, governance, cost, latency, and accountable response.

Integrated September 16 into [outline-v2.md](../outline-v2.md), beat 2.6, and narrative slides 33 through 37. This file retains the reviewed supporting detail. The current numbered specs are in `slides/section-2/`; Research §6 in [research/section-2.md](../../research/section-2.md) remains the evidence layer. The builder implements the integrated specs.

## Opening quote

Selection: Guillermo Rauch, quoted in Datadog's "State of AI Engineering," 2026. Use the existing quotation about failures teams cannot observe. Exact wording and verification status remain in Research §6.

Purpose: establish that the deployed system needs evidence of its actual behavior so a team can investigate and respond.

Spoken bridge: **The team needs to know what the system did, whether it met the requirement, and what to do when it did not.** Observability connects the previous areas to production use.

Qualification: this is Rauch's attributed perspective, published by Datadog. It is not a measured prediction of which failure type will dominate. The source does not establish a publication day.

## What is it?

Production operations is the work of keeping the deployed system observable, controlled, and accountable as it serves real tasks and changes over time.

Observability connects requests to model and tool activity, retrieved evidence, checks, outcomes, and resource use. Guardrails constrain behavior through mechanisms such as validation, sandboxing, approval rules, and execution limits. Security and identity determine who can access data and perform actions. Governance assigns responsibility for approvals, changes, incidents, and review.

These responsibilities work together. A control needs enforcement, an operating signal needs interpretation, and a failed task needs a defined response.

**Brief coding-agent connection:** permissions, usage information, and execution limits are familiar parts of using a coding agent. A deployed product also needs an accountable team behind those controls and signals.

Boundary: Models, Context, and Tools define components and their constraints. Orchestration enforces the execution path and per-run limits. Evals defines and measures acceptable behavior. Production operations keeps that whole system within its intended use and connects observed failures to action.

Sources: existing operating responsibilities and observability framing, Research §6; OWASP authorization and MCP security guidance, Research §3. The grouping is the talk's engineering frame, not a claim that one standard defines every responsibility.

## Why it matters

The product's behavior depends on more than its deployed code. Models, source records, prompts, permissions, and connected services can change. The team needs to detect whether those changes affect quality, cost, latency, or access.

A completed request does not establish a supported answer or a permitted action. Production evidence must reach the outcome the user relies on, and someone must be responsible for investigating when that outcome is wrong or unknown.

Integrations also change the combined capabilities of the system. Access that looks reasonable in one component can create an unwanted path when combined with other tools or untrusted content.

**Production readiness includes the ability to detect a failure and carry out an accountable response.** That response may stop further work, restrict a capability, return a clear limitation, or involve a person.

Sources: Rauch in Datadog, 2026; Willison, June 2025; OWASP, 2025; existing operating decisions and maintenance, Research §6 and §3. The FRB response choices are illustrative design proposals.

## Key decisions and trade-offs

### What may the system access and do?

Define whose authority an action uses, which records that authority permits, and which destinations or actions are allowed. Enforce those boundaries in the systems performing the work. Include reads and outbound communication.

Broad permissions make more actions available, while increasing what an incorrect or manipulated request can affect. Narrow scope limits that exposure and requires deliberate review when legitimate needs expand.

Starting approach: use least privilege, explicit permitted uses, and policy-based approval requirements. Review the combined capabilities whenever an integration changes. A model's recommendation that an action is safe does not establish authority to perform it.

**A probabilistic filter is insufficient as the sole security boundary.** Filters can contribute to protection, while access controls, constrained execution, and permitted destinations enforce specific limits outside the model.

Revisit when data sensitivity, user roles, service eligibility, or integrations change. In the FRB scenario, apply the approved CUI/ECI processing scope to the whole path, including traces and evaluation artifacts.

### What must the team observe?

Connect the request to observable actions, source revisions, check results, and the final outcome. Track quality alongside cost per completed task and end-to-end latency. Inspect failed and incomplete work as well as successful outputs.

Detailed evidence can help diagnosis, while increasing collection, storage, and access-management work. Decide what information is needed to investigate the behavior and who is permitted to see it. Protect the evidence itself.

Starting approach: trace the path through the system and connect operating signals to intended outcomes. Track relevant source-freshness, parsing, and tool failures. Include retries and verification when reviewing resource use. Use evaluation criteria and reviewed production samples to investigate changes in quality.

Revisit when an incident cannot be explained from the recorded evidence, important failures escape the monitoring, or the telemetry exposes information beyond its intended scope. Detailed telemetry schemas and vendor products stay in backup.

### When should work stop or reach a person?

Set acceptable operating limits and identify the response to failed checks, missing evidence, dependency failures, or exhausted budgets. Decide what the product tells the caller and who receives a handoff.

Tighter limits can stop waste or unwanted actions sooner, while interrupting legitimate work. Additional attempts may recover some failures, while increasing cost, latency, and the need to inspect side effects. Set these policies around the intended use and observed behavior.

Starting approach: connect enforceable run limits to a defined product response. An authorized person taking over needs the task, known state, relevant evidence, and remaining uncertainty. A stopped run must not appear to be a completed task.

Orchestration implements the run's stopping and recovery rules. Production operations assigns the limits, response responsibilities, and monitoring needed to keep those rules useful in practice.

Revisit when handoffs arrive without useful context, no one receives a failure, or the current limits repeatedly prevent useful work. Any fallback remains subject to the same data and service-eligibility constraints.

### Who owns changes, approvals, and incidents?

Assign responsibility for operating the product and reviewing changes to its behavior or authority. Decide who can approve a change, who investigates an incident, and how the team can disable a capability or revert a problematic configuration.

Frequent changes can improve the system, while increasing the need for evaluation, traceable configuration, and review. A slower review process can constrain change while preserving time to assess its effects. Match the process to the consequence and scope of the change.

Starting approach: make responsibilities explicit, retain evidence of changes, and use the relevant evals before and after a change. Feed production failures into the improvement process. Keep an available path for restricting or disabling affected capabilities.

Revisit when an incident falls between teams, approval scope is unclear, or the team cannot connect changed behavior to a configuration or dependency. Reverting a configuration does not automatically undo an export or another action already completed.

Sources: observability and operating decisions, Research §6; OWASP authorization and monitoring, Research §3; Willison's threat model, Research §6. The starting approaches develop the talk's existing operating frame. No specific response time, service-level target, organizational structure, or compliance certification is prescribed.

## Common challenges and pitfalls

| Challenge | How it appears | Investigation or response |
|---|---|---|
| Individually useful integrations create a risky combination | Private data, untrusted content, and outbound communication become connected | Review the combined capability path and break or constrain unwanted routes. |
| The team sees successful calls but not the user outcome | A request completes while the answer is unsupported or the action remains unconfirmed | Connect calls, evidence, checks, and actual outcomes. |
| Resource use changes without an obvious code change | Cost or latency rises after a model, prompt, retrieval, or workflow change | Inspect whole-task traces, retries, verification, and the relevant configuration. |
| Telemetry creates another data exposure | Restricted content enters a trace or evaluation service outside its approved scope | Apply access and processing requirements to operational evidence too. |
| A failure has no accountable response | Alerts or handoffs appear, but the responsible team is unclear | Assign ownership and supply the evidence needed to act. |
| A change fixes one case and causes another failure | A new configuration enters use without adequate comparison or follow-up | Recheck relevant evals, monitor the result, and retain a way to limit or revert the configuration. |

**Headline pitfall:** the lethal trifecta, assembled one integration at a time.

Willison's trifecta identifies a potential path for data theft: private data access, untrusted content, and external communication. One integration can provide more than one of those capabilities. A document can contain instructions, and a web request can send information outward. Review the actual connections rather than treating every integration in isolation.

This is one threat model. Constraining that path does not establish protection against every security failure. Keep the main explanation on the capability combination and the enforced boundary; incident details and legal material remain backup.

Sources: Willison, June 2025; OWASP, 2025 and 2026; existing operating maintenance, Research §6 and §3. The FRB-related failures are illustrative concerns to design and check, not reported incidents.

## FRB use case as an applied example

**Illustrative proposed operating agreement.** The system supports FRB research and drafting. Its corpus includes CUI/ECI, and its approved model choices may constrain the useful scope it can support. People retain authority over official causes, decisions, and board records.

The preceding areas defined the model choice, context, tool contracts, workflow, and checks. This agreement identifies what the deployed system and its responsible team must maintain:

| Responsibility | Proposed FRB agreement |
|---|---|
| Access and processing | Authorized records, eligible models and supporting services, and permitted export destinations. Apply the same boundaries to derived context, traces, and evaluation artifacts. |
| Evidence of behavior | Connect each brief to its exact source revisions, observable actions, check results, checked content, and export receipt or unresolved state. Restrict access to this evidence. |
| Operating signals | Monitor quality, freshness, parsing and tool failures, handoffs, cost per completed brief, and end-to-end latency, including retries and verification. |
| Limits and response | Route failed checks, missing evidence, exhausted budgets, and unknown export outcomes to the assigned authorized responder under the execution rules. State what remains incomplete. |
| Changes and incidents | Assign an accountable operator and review process. Evaluate changes, preserve their configuration, and retain a way to restrict a capability or revert a problematic configuration. |
| Official decisions | The brief supports human work. People remain responsible for official findings and board records. |

An internal attachment can contain untrusted instructions. Authorized access to FRB documents must not create unrestricted outbound communication. Review the whole path when adding retrieval, export, monitoring, or evaluation integrations.

If source-support checks begin failing, the responsible team needs the relevant revisions and trace to investigate. Repair the component supported by that evidence, rerun the relevant cases, and monitor the result. If an export outcome remains unknown, the assigned responder receives that uncertainty and saved state. A configuration rollback alone does not resolve an earlier unknown export.

Evaluate whether the operating evidence supports investigation, handoffs reach a responsible person, and access remains constrained as the system changes. Revisit the agreement when data rules, approved services, intended use, or observed failures change. No actual organizational owners or operating targets are invented.

Sources: illustrative FRB operating agreement, Research §0 and §6; data eligibility, Research §1; tool and execution contracts, Research §3 and §4; evaluation responsibilities, Research §5. This is teaching material, not a deployed service or legal agreement.

## Delivery notes

- **Must say:** observe the actual outcome and connect it to the actions, evidence, and checks that produced it.
- **Must say:** enforce authority and permitted destinations outside the model, and review the combined capabilities as integrations change.
- **Must say:** operating limits need an accountable response, with protected evidence for the person investigating.
- **Must say:** people retain responsibility for official FRB causes, decisions, and board records.
- Takeaway line: "The system needs evidence of its behavior and people accountable for responding."
- Section wrap: return to the existing full-screen anatomy diagram with its responsibility badges after the FRB application. The six areas describe connected engineering responsibilities. Use the wrap to lead into the software engineering skills that transfer and the competencies to develop.
- Cut first during pacing: detailed metric and governance inventories. Named incidents, telemetry-schema details, identity patterns, and legal provisions stay in backup.
- Never cut: the enforced access boundary, the combined-capability risk and its scope, cost and latency, accountable handoff, human authority over official records, or the closing anatomy diagram.

## Review questions and decisions

- Agreed area name: Production operations replaces Operating it.
- Agreed structure: quote first, then the five content headings. The anatomy diagram remains the section wrap afterward.
- Accepted emphasis: authority, observability, operating limits and handoff, and accountable changes and incident response.
- FRB continuity: the CUI/ECI boundary covers the processing chain and operational evidence. Approved model limitations do not justify an ineligible fallback or weaker evidence requirements.
- Review outcome: presenter accepted this final area and asked to proceed to the whole-section review. That review and the provisional delivery estimate are recorded in `section-review.md`. Final pacing and presentation-machine rehearsal remain pending.
