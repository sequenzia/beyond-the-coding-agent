# Failure Review Board running example

Authoring reference, September 15, 2026. **Illustrative. All cases, documents, excerpts, and outputs below are invented.** They describe a teaching example, not a deployed system, measured performance, or the presenter's experience. No synthetic excerpt is a primary source.

## Purpose and boundary

The system helps engineers research Failure Review Boards (FRBs), understand discussions and decisions, and compare recurring issues. It supports research and drafting. People remain responsible for official causes, decisions, and board records.

Capabilities: search by number, date, or category; export authorized records; analyze an individual FRB; summarize its discussion and decisions; compare recurring issues across FRBs. Research workers use only the authorized internal FRB corpus and its attachments. No open-web research or additional access is implied.

## Data sensitivity and available models

Content-rework assumption, September 15, 2026: **the FRB corpus includes CUI and export-controlled information (ECI).** The system must use model services and environments approved for the applicable data and intended use. This is an assumption about the illustrative deployment. The invented excerpts remain teaching material and carry no real designation or sensitive content.

For this example, assume the approved model choices are older and less capable for the intended FRB synthesis than newer alternatives outside the approved environment. This reflects a constraint the presenter identifies in the audience's work. No model names, scores, approval status, or universal claim about restricted environments is implied.

The design question is whether the available approved models can support a useful brief at the required quality. Compare them on the FRB task. If checks reveal a capability gap, evaluate a narrower scope or more structured workflow with focused evidence and human review. Those measures must demonstrate acceptable behavior. If the intended capability still falls short, limit or defer it until the requirements can be met. Preserve the distinction between possible causes and established findings throughout.

Routing, fallbacks, model-based graders, and replacement models that receive restricted records must remain within the applicable approved scope. A capability gap does not authorize sending those records to a stronger unapproved service. Revisit the design when suitable approved options become available.

## Recurring request

“Review FRB-042 about a pump shutdown. Summarize its discussion and decisions, compare similar FRBs from the past year, and export a cited brief distinguishing possible causes from established findings.”

For this example, the request date is September 1, 2026. “Past year” means September 1, 2025 through September 1, 2026. Category: pump shutdown. Resolve relative dates explicitly in a real request.

## Invented packet and stable citations

These are excerpt specifications for imaginary PDF, Word, and PowerPoint files. They are not real board records or downloadable attachments. IDs identify documents. Revision and source location identify the exact passage. Different file formats or copies of one record are not independent cases.

| Case | Document ID | Format | Revision and date | Source location | Illustrative excerpt |
|---|---|---|---|---|---|
| FRB-042 | FRB-042-RPT | PDF report | r1, August 18, 2026 | p. 4, §2 | “The pump shut down after vibration exceeded the operating limit. The cause has not been established.” |
| FRB-042 | FRB-042-BRF | PowerPoint preliminary briefing | r1, August 19, 2026 | slide 6 | “Bearing wear is a possible cause.” |
| FRB-042 | FRB-042-MIN | Word minutes | r2, August 22, 2026 | §3, paragraph 2 | “Cause remains unresolved. Inspect the bearing before assigning a cause.” |
| FRB-017 | FRB-017-MIN | Word minutes | r1, November 4, 2025 | §4, paragraph 1 | “A sensor fault caused the shutdown. Replace the sensor and verify its calibration.” |
| FRB-031 | FRB-031-MIN | Word minutes | r3, April 12, 2026 | §5, paragraph 3 | “Inspection confirmed bearing wear as the cause. Replace the bearing.” |

FRB-042-MIN r2 is the later minutes revision. FRB-042-BRF r1 is a different, preliminary document. Do not merge their identities or treat matching revision numbers across documents as a shared chronology. When new records arrive, preserve the prior version in provenance and refresh retrieval before finalizing a brief.

## Central failure and expected distinction

- **Observed answer, deliberately wrong:** “The board confirmed bearing wear.”
- **Citation on that illustrative answer:** FRB-042-MIN r2 §3, paragraph 2. The reference exists, but the cited minutes do not support confirmation. This supplies the direct-reference PASS and source-support FAIL on slide 35.
- **Expected:** FRB-042's cause remains unresolved. Bearing wear was a possible cause in the preliminary briefing. The later minutes record a decision to inspect the bearing before assigning a cause.
- **Failed check:** a hypothesis was promoted to an established finding. A citation may exist and still fail to support the sentence.
- **Trace investigation:** did parsing lose the qualification, retrieval omit the later minutes, compaction drop the constraint, a worker overstate a finding, or synthesis ignore evidence it received? Inspect the actual trace before choosing a repair.
- **Comparison:** FRB-017 involved a confirmed sensor fault. FRB-031 involved confirmed bearing wear. Similar shutdown symptoms justify comparison. They do not prove a common cause or establish FRB-042's cause.

## Expected cited brief

1. **Findings:** FRB-042 records a pump shutdown after a vibration-limit exceedance. Its cause remains unresolved. Cite FRB-042-RPT r1 p. 4 §2 and FRB-042-MIN r2 §3 paragraph 2.
2. **Decisions:** inspect the bearing before assigning a cause. Cite FRB-042-MIN r2 §3 paragraph 2. Do not describe the inspection as completed.
3. **Possible causes:** bearing wear appears as a hypothesis in FRB-042-BRF r1 slide 6. Keep its preliminary status.
4. **Cross-case observations:** shutdowns recur across these cases, with a sensor fault in FRB-017 and bearing wear in FRB-031. Cite each case's minutes separately. These cases do not establish a recurring cause for FRB-042.
5. **Citations:** every material statement retains document ID, revision, and source location. Test citation existence and semantic support separately.
6. **Unresolved questions and limitations:** the packet contains no completed bearing inspection or established cause for FRB-042. State missing, unreadable, conflicting, incomplete, or unauthorized evidence explicitly, without revealing restricted record details.

## Context preparation

Proposed design for the content rework: retrieve the evidence needed for the current step with its document ID, revision, date, and source location. The preliminary briefing and later minutes remain separate sources. Retain the unresolved cause and outstanding inspection in any working summary. Bring in comparison-case evidence for the comparison step, keeping each case's findings distinct.

Apply the corpus's CUI/ECI requirements to the services and environments used for parsing, retrieval, and any embedding or summarization of restricted records, as well as to the answering model. User access and service eligibility are separate checks. A user's permission to read a record does not establish permission to send it to every model service.

Check source freshness and access again before finalizing or resuming a brief. Missing passages, unreadable documents, incomplete indexing, or access restrictions produce explicit limitations without revealing restricted record details. Focused context is a design to evaluate with the available approved model. It does not establish that the model can perform the full task or that the older options have smaller context windows.

## Tool and workflow contract

Background services parse and index PDF reports, Word minutes, and PowerPoint briefings. They retain format-specific source locations, revisions, parse status, and index freshness. Parsing and indexing are not agent-facing tool calls in this illustration.

| Agent tool | Inputs | Result and checks |
|---|---|---|
| Search records | ID, date range, category | Authorized document IDs, revisions, status, and coverage. Incomplete indexing is explicit. |
| Retrieve passages | Document ID, revision, location | Exact passages plus source location and parse status. Missing or unreadable content is explicit. |
| Export records | Selected IDs and revisions, destination | Authorized selected records and manifest. Enforce scope and destination outside the model. |
| Export cited brief | Checked draft, citations, destination | Export receipt and content matching the checked draft, including uncertainty and limitations. Recheck authorization at export. |

For Export cited brief, verification status must refer to the exact content being exported. The service checks that status; a model-supplied assertion that a draft was checked does not establish it. Changed content requires renewed verification. Code enforces access and the permitted export destination under the scenario's CUI/ECI requirements. The operation preserves citations, unresolved findings, and limitations rather than generating a fresh summary during export.

Tools integration teaching case, September 16, 2026: assume the model proposes a well-formed export request whose destination falls outside the approved scope. The expected contract behavior is rejection before transfer with a clear reason. Check that no export reached that destination, in addition to inspecting the rejection. This is an illustrative contract test, not an observed export or measured rejection rate. No real destination or sensitive record is introduced.

The result contract distinguishes confirmed completion with a receipt, known failure, and an unknown outcome when completion cannot be confirmed. Do not treat an unconfirmed result as either proof of success or permission to repeat the side effect. Orchestration determines the next step using that result and the saved execution state.

The bounded workflow retrieves the target packet, inspects evidence, compares cases, reconciles findings, verifies the brief, and exports. Optional workers perform independent comparisons only after the simpler workflow has been measured. They return evidence, IDs, revisions, source locations, and uncertainty to the main analyst. They cannot approve official conclusions or export records independently.

Persist step completion and exact revisions for resume. Recheck freshness and access on resume. Bound retries, actions, tokens, and end-to-end latency. Avoid duplicate exports by checking the prior export receipt before retrying. Incomplete indexing, exhausted budgets, or unresolved contradictions produce an explicit limitation or human handoff. Inspect conflicting sources before synthesizing a claim.

### Execution and recovery rules for the content rework

Keep the six-stage workflow as the proposed baseline. Model judgment can interpret evidence within a stage; code enforces the prerequisites for moving to verification and export. Save stage completion, exact source revisions, the working draft, and the relevant verification and export outcomes. A changed draft must pass verification again. If a resumed run finds changed evidence, return the affected work to inspection and reconciliation before verifying another draft.

| Observed export state | Proposed execution response |
|---|---|
| A matching receipt confirms the checked draft was exported | Record completion and return the existing receipt. |
| A confirmed failure establishes that the export did not complete | Address the cause, recheck prerequisites, and retry only within policy and the remaining budget. |
| The outcome is unknown | Inspect the export state before deciding whether to retry. If it remains unknown, preserve the uncertainty and hand off. |

Orchestration integration teaching case, September 16, 2026: this is a separate export from the rejected destination in Tools. The destination is permitted and the exact draft passed its checks. Suppose the export occurs but the response never reaches the caller. Record the outcome as unknown and inspect the intended export's state and receipt before choosing a next step. The expected checks establish a matching checked artifact without a duplicate export. If the outcome remains unknown, pause or hand off with that uncertainty intact. This is an illustrative recovery test, not a measured result.

The proposed execution layer saves a stable operation reference with the intended draft identity and destination and provides a way to inspect the corresponding receipt or status. This does not add a fifth named agent-facing tool. A checkpoint saves execution state; use durable storage where it must survive a restart. It does not establish that an external action completed. If the export service supports idempotent retries, reuse the same intended operation identity and parameters under that contract. An identifier alone does not make a retry safe. Changed content or destination changes the intent and requires the applicable checks again.

At an action, token, retry, or end-to-end latency limit, stop further automated work and state what is incomplete. A limit does not mean the requested brief was completed. Any export of a limited brief must still pass its applicable checks and authorization. Official causes and board decisions remain with people.

If evaluation justifies delegation, comparison workers receive a case assignment, permitted evidence sources, an expected result, and a work limit. They return findings with source IDs, revisions, locations, and uncertainty. The main analyst reconciles them before verification. Every worker and handoff stays within the CUI/ECI processing boundaries. No more capable unapproved service enters the workflow as a fallback.

## Measurement and operating responsibilities

- Establish which model services and environments are eligible for the corpus's CUI/ECI constraints, then compare candidate models and versions on extraction, discussion summaries, and qualified synthesis. No scores or winning model are assumed. Worker evals emphasize evidence fidelity and retrieval coverage. Main-analyst evals emphasize faithful summaries, reconciliation, and warranted uncertainty. If the approved options cannot support the full task, evaluate a reduced scope without weakening the evidence requirements.
- Measure quality with cost per completed brief and p95 latency, including workers, retries, and verification. Route by measured task fit, rather than assuming a smaller model is suitable for workers.
- Direct checks cover IDs, revisions, permissions, source locations, export selection, and agreement between the checked draft and exported content. Experts judge semantic support, useful synthesis, and warranted uncertainty. Calibrate model graders to expert decisions.
- Inspect a failure and its trace, identify the responsible component, change it, rerun a representative suite with repeated trials, and monitor production samples. Include this hypothesis-as-fact case, duplicate documents, fresh revisions, inaccessible evidence, and parse failures.
- Trace the request through retrieved revisions, optional worker findings, synthesis, checks, and export. Restrict trace access too. Monitor freshness, parsing and tool failures, quality failures, cost per completed brief, and end-to-end latency.

### Verification and evaluation design for the content rework

The source-support check uses the deliberately wrong answer already specified above. Its reference to FRB-042-MIN r2 §3 paragraph 2 exists, but the minutes do not support confirmation of bearing wear. The expected result preserves the unresolved cause and inspection requirement. Failing that check prevents export of that draft. Corrected content requires renewed verification before export.

Direct checks cover resolvable citations and recorded constraints such as access, source revisions, and agreement between checked and exported content. Authorized domain experts assess whether the cited evidence supports a finding and whether uncertainty is warranted. A model grader can assist only after its judgments have been evaluated against expert decisions for the intended task. The services, traces, and reviewers used in evaluation remain within the applicable CUI/ECI scope. Do not assume the available answering model is also a reliable grader, or use an ineligible stronger service to grade restricted records.

Retain this failure as one regression case within a broader suite covering the shared packet's risks: duplicate documents, revised sources, inaccessible evidence, parsing failures, cross-case confusion, and export behavior. Repeat trials to examine consistency. Compare system changes using the same relevant cases and record the task, criteria, source revisions, and configuration needed to interpret the results. Inspect the trace before assigning a failure to a component, and review the grader itself when a result appears inconsistent with the evidence.

Verification & Evals integration, September 16, 2026: the illustrative suite matrix covers a routine cited brief, a disallowed export destination, and a lost export response. The routine brief needs supported findings, preserved uncertainty, and valid references. A disallowed destination needs a clear rejection and no transfer. In the lost-response fixture, available matching operation evidence should establish completion without duplication. A variant where the outcome cannot be established instead requires an explicit unresolved status or handoff. These are expected behaviors for authored cases, not measured results.

Reserve held-out cases from routine tuning and compare relevant configurations across repeated trials. Inspect case categories as well as aggregate results. Record starting conditions, source revisions, permitted effects, and the system and grader configurations. Reset or isolate state between independent trials so prior exports do not make a later trial appear successful. Enforce required constraints while allowing legitimate variations in harmless read actions. Broader coverage includes missing evidence, unavailable records, and adversarial material. The source-support failure remains the main worked example and one regression case.

The presenter removed the separate evals personal story and its 1:00 reservation in the content rework. This invented check is the area's worked example. It does not represent personal experience.

### AgentOps agreement

This is a proposed operating agreement for the illustrative system. AgentOps is the presenter-selected name for the final Section 2 area. It covers observability, enforced controls, and accountable response.

| Responsibility | Proposed agreement |
|---|---|
| Access and processing scope | Enforce authorized records, eligible model and supporting services, and permitted export destinations under the corpus's CUI/ECI requirements. Apply the boundary to derived context, traces, and evaluation artifacts too. |
| Evidence of behavior | Connect each request to exact source revisions, observable tool actions, check results, exported content, and the receipt or unresolved export state. Restrict access to the evidence. |
| Operating signals | Monitor quality, useful completion, source freshness, parsing and tool failures, handoffs, cost per completed brief, end-to-end latency, and review work. Include retries and verification when reviewing resource use. Make sampling and delayed quality labels explicit. |
| Limits and handoff | Stop or return a limitation under the established execution rules. Route failed checks, missing evidence, exhausted budgets, and unknown export outcomes to an assigned authorized responder. Supply the context needed to investigate. |
| Changes and incidents | Record code, model/settings, prompt, retrieval/data/index, tool, orchestration, and grader versions. Assign an accountable operator and review process, including permission changes. Compare a controlled candidate cohort with the tested configuration on comparable tasks. Define pause and rollback conditions. Keep a way to disable a capability or restore a tested compatible configuration. Inspect any already completed actions separately. |
| Official decisions | People retain responsibility for official causes, decisions, and board records. An exported research brief does not replace that authority. |

Review the combined capabilities when integrations change. An internal attachment can contain untrusted instructions. The system's source access must not create unrestricted outbound communication. Break or constrain that path while retaining the broader security review. New or stronger model services remain subject to the same eligibility constraints.

Use failures to identify a response and a subsequent improvement. For example, investigate a source-support failure using the saved revisions and trace, repair the responsible component, rerun the relevant evaluation cases, and monitor after the change. No response times, cost limits, quality thresholds, or real organizational owners are invented here.

### AgentOps release incident

AgentOps integration teaching case, September 16, 2026: an approved model/configuration update reaches a controlled group of FRB requests. Assume APIs remain healthy while more drafts overstate unresolved causes and require authorized review than comparable work on the tested configuration. The source-support gate continues to block failing drafts from export. These are stipulated qualitative symptoms, not measured performance or evidence that unsupported content was exported.

The assigned operator pauses the rollout, compares similar task categories by configuration, and inspects protected traces, source revisions, and check results. The release association starts investigation; it does not prove root cause. Restore a tested compatible configuration when the defined rollback condition is met. The candidate and restored configuration remain within the applicable CUI/ECI processing and permission boundaries. If suitable recovery is unavailable, pause or limit the capability and route work to the authorized responder.

Review pending work and any completed effects separately. Keep the existing source-support regression case, add newly understood failure variants, rerun relevant evaluations, and monitor recovery. Report review effort separately if the cost measure excludes it. People retain responsibility for official causes, decisions, and board records. The operating agreement is the supporting artifact behind the incident, not a claim that a real service or organization implemented these controls.

## Slide map

| Slide | Responsibility taught |
|---|---|
| 9 | Model-plus-harness anatomy and engineering responsibilities |
| 10 | Teaching pattern, system purpose, and human ownership of official records |
| 15 | Select, measure, replace, and route eligible models for FRB work |
| 20 | Curate relevant, fresh evidence with provenance and constraints |
| 25 | Define the agent's tool contract and enforce authorization |
| 30 | Bound workflow, workers, retries, and resume |
| 35 | Separate citation existence from source support and retain the failure as a regression case |
| 40 | Detect and contain an illustrative release regression using protected evidence and accountable response |
| 41 | Connect the six responsibilities through model changes and the evidence, checks, and controls behind the cited brief |
| 46 | Review 20 to 50 outputs and record input, observed behavior, expected behavior, and check |

The FRB failure is illustrative. No live demonstration of an FRB application is planned for this revision.
