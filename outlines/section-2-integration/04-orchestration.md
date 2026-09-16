# Orchestration integration draft

Numbering note, September 16, 2026: the orientation insertion shifts this review's deck slide numbers 10 through 47 forward by one. The original review numbers below are historical. See `internal/deck/section-2-orientation-numbering-map.json` for current spec paths.

Accepted and integrated September 16, 2026. The presenter approved this draft for the outline, slide specs, and PowerPoint. Outline beat 2.4, slides 25 through 29, design brief §30, and the reusable builder implement workflow and agent-loop foundations, saved-state decisions, and the uncertain-export recovery example. Delegation stays brief. This file retains the supporting content review. Rehearse the retained 3:55 area reference.

## Agreed direction and carried-forward structure

- Center the area on a controlled workflow containing a bounded agent loop.
- Keep delegation as a brief conditional design choice.
- Carry forward quote, foundations, decisions, pitfalls, and separate FRB application.
- Explain checkpointing and idempotency briefly through the execution and recovery decisions.
- Keep the FRB workflow's six stages, verification gate, approved processing boundary, exact headline pitfall, and spoken takeaway.

Structural change: move the six-stage workflow from slide 29 into slide 26's foundations diagram. Use slide 29 to examine a single recovery case. This gives the mechanism and the failure distinct teaching roles without adding slides.

## Integration map and rehearsal reference

| Current slide | Proposed role | Main change | Rehearsal reference |
|---|---|---|---|
| 25 | Quote | Keep the simplicity quotation and illustration. | 0:20 |
| 26 | Foundations | Show a code-controlled workflow with an agent loop inside a stage. | 1:00 |
| 27 | Execution decisions | Explain explicit state, checkpoints, recovery, and stopping conditions. Delegation stays spoken and brief. | 1:00 |
| 28 | Pitfalls | Keep the current gates, progress, and timeout cues and exact headline pitfall. | 0:25 |
| 29 | FRB application | Focus on a permitted export whose result becomes uncertain. Define idempotency in the explanation. | 1:10 |
| Total | Five static screens | Redistribute time within the existing area allocation. | 3:55 |

The foundations slide gains 0:15 and the application gives up 0:15 by moving the workflow explanation earlier. Section 2 retains its 28:30 rehearsal reference within the 25:00 to 29:00 range. Rehearsal must validate this redistribution.

## 1. Quote

**Kicker:** Orchestration · Perspective

Retain the current Anthropic simplicity quotation and attribution from slide 25 and Research §4. Retain the current illustration.

**Spoken bridge:** Decide which transitions code controls and where the model can choose an action. Then establish how work progresses, stops, and resumes.

Treat the quote as a design recommendation, not evidence that one architecture wins every task.

Cut first: repeating the simplicity explanation. Never cut the quotation and attribution.

Sources: Anthropic, December 2024. Research §4.

## 2. Foundations

**Kicker:** Orchestration · Foundations

**Proposed title:** Workflows and agent loops

### Proposed visible content

**Workflow**

Code defines the stages and permitted transitions.

Use the existing illustrative FRB sequence:

Retrieve, inspect, compare, reconcile, verify, export.

**Agent loop**

The model chooses the next action from observations within application limits.

Show a bounded loop within the inspect stage:

Observe the result, choose an action, call a tool, update state.

**Required gate:** The exact draft passes verification before export.

### Explanatory treatment

Show the six-stage workflow and expand one stage to expose its agent loop. Put the verification gate on the workflow, outside the model's discretionary next-action choice. Do not depict workflow and agent as mutually exclusive architectures or imply that every stage requires an autonomous loop.

The workflow is the same invented FRB design already established in the presentation. Keep the explicit illustrative label. Use native editable elements and specify visual values in the design brief when this draft is adopted.

### Proposed talk track

**Orchestration controls how the work progresses.** A workflow defines stages and permitted transitions in code. An agent loop lets the model choose its next action from what it observes. They can work together.

Our FRB workflow retrieves, inspects, compares, reconciles, verifies, and exports. Inside inspection, the model might choose to read another passage, inspect the result, and continue within the allowed scope. That is a bounded agent loop inside a controlled workflow.

The outer system still enforces permissions, work limits, and the verification gate. **The exact draft must pass its checks before export.** A model-generated plan does not enforce those conditions.

A coding agent's inspect, edit, and check cycle uses the same action-and-observation idea. The execution system must also know when to stop or resume.

Cut first: the coding-agent elaboration. Never cut the workflow/loop distinction, their bounded combination, or the verification gate.

Sources: Anthropic, December 2024, rechecked September 2026; existing execution-loop framing. Research §4. Illustrative FRB workflow: Research §0 and `internal/frb-running-example.md`.

## 3. Execution decisions

**Kicker:** Orchestration · Decisions

**Proposed title:** State, recovery, and stopping

### Proposed visible content

**Explicit state**

Pending work, completed stages, check results, and operation status.

**Recovery**

Resume saved state and reconcile external actions before retrying.

**Stopping conditions**

Distinguish completion, waiting, failure, cancellation, and budget exhaustion.

**Checkpoint:** Saved execution state for resumption.

### Explanatory treatment

Connect the saved execution state to the workflow from slide 26. Distinguish a request that was dispatched from one whose effects have been confirmed. Keep the checkpoint definition close to the saved-state concept.

A short outcome-state branch can show completion, waiting, and unresolved execution. Avoid a second complete architecture diagram or a large inventory of every possible state.

### Proposed talk track

Record pending work, completed stages, check results, and operation status. **A checkpoint is saved execution state from which work can resume.** Use durable storage when it must survive a process restart.

Resuming computation does not establish what an external service did. Reconcile dispatched actions with their actual outcomes before deciding whether to repeat them. Recheck source freshness and access on resume.

Define completion and distinguish it from waiting, failure, cancellation, or exhausted budget. Bound actions, tokens, retries, and elapsed time. Repeated work without progress needs a stop or handoff.

Delegation is another design choice. Independent case comparisons may benefit from workers, but assignments and returned evidence need clear ownership. Add them only when measured benefit justifies the handoff and reconciliation work.

Cut first: the delegation example beyond its brief conditional role. Never cut explicit state, checkpoint durability, external reconciliation, or meaningful stopping conditions.

Sources: LangChain checkpoint documentation, checked September 2026; Anthropic, December 2024 and June 2025; existing FRB execution contract. Research §0 and §4. The storage reference illustrates a concept and does not prescribe a framework.

## 4. Pitfalls

**Kicker:** Orchestration · Challenges and pitfalls

**Proposed title:** Execution pitfalls

### Proposed visible content

- **Gates:** A proposed plan does not enforce prerequisites.
- **Progress:** Repeated work can exhaust the budget.
- **Recovery:** A timeout does not establish failure.

**Pitfall:** Adding multiple agents before trying a workflow.

### Proposed talk track

**Adding multiple agents before trying a workflow** is the headline pitfall. Extra workers add handoffs and reconciliation. Also watch for skipped gates, repeated work without progress, and early completion claims. **A timeout does not establish that an action failed.** Inspect what happened before repeating it.

Keep the exact headline sentence shared with slide 44. The current visible cues already support the revised explanation and can remain unchanged.

Cut first: the handoff elaboration. Never cut the exact headline pitfall and timeout distinction.

Sources: architecture and failure guidance, Research §4; tool outcomes, Research §3.

## 5. FRB application

**Kicker:** Orchestration · FRB application

**Proposed title:** Recovery after an uncertain export

**Illustrative permitted export and recovery test.**

### Proposed visible content

**Design**

Record the intended export and its execution state.

**Failure to test**

The export occurs, but the caller receives no response.

**Evidence to check**

Matching receipt and checked artifact. No duplicate export.

Show the recovery path:

Dispatch export, lose response, record outcome unknown, inspect export state.

**If unresolved:** Pause or hand off with uncertainty intact.

### Explanatory treatment

Use one short sequence between the orchestrator and export service. Make the service-side export and caller-side uncertainty visibly different facts. The caller learns the result by inspecting operation evidence, not by assuming the scripted scenario is true.

This is a separate example from Tools' rejected request. Here the destination is permitted and the exact draft passed its checks. Do not depict the rejected destination subsequently receiving an export.

The design/failure/evidence copy and sequence describe the same case. Consolidate them into one composition at layout time. Keep the six-stage workflow on slide 26 and concentrate this screen on the recovery decision.

### Proposed talk track

This is a separate export to a permitted destination, using the exact checked draft. Suppose the service creates the brief, but the response never reaches the caller.

**Record outcome unknown. Check the export state before deciding whether to retry.** Use the intended operation's reference to inspect its receipt and output. A matching checked artifact can establish completion without another export.

**Idempotency means retrying the same intended operation does not duplicate its effects.** The service must support that contract. An identifier in our log alone is insufficient.

If the outcome remains uncertain, pause or hand off. Recheck permissions and freshness when work resumes, and repeat verification if the draft changes. Reaching a work limit does not make an incomplete brief complete.

Next, Verification & Evals explains what the checks should establish.

**The loop is where autonomy gets its limits. Start with the workflow.**

### Supporting execution-state and recovery artifact

| Record or condition | Proposed requirement |
|---|---|
| Workflow progress | Current stage, completed work, pending work, and remaining limits. |
| Evidence and draft | Source revisions, exact draft identity, and the checks associated with that content. |
| Export intent | Stable operation reference, intended draft, and permitted destination. |
| Confirmed completion | Matching receipt and artifact establish the intended export. Return the existing result. |
| Known failure | Establish that export did not complete. Address the cause and retry only within policy and remaining limits. |
| Unknown outcome | Inspect external operation evidence. If unresolved, pause or hand off and retain uncertainty. |
| Supported idempotent retry | Reuse the same intended operation identity and parameters under the service's retry contract. |

The operation reference and status/receipt lookup are proposed execution-layer requirements. They do not add a fifth named agent-facing tool to the FRB inventory or claim that the current hypothetical service already implements idempotency. A changed draft or destination changes the operation's intent and requires the applicable checks again.

Checkpoints need a persistence design appropriate to restart requirements. A checkpoint is not a transaction record proving every external effect. The application must preserve enough identity to reconcile the intended action with the service's evidence.

The scenario and expected checks are illustrative. No recovered production run, duplicate-prevention rate, or successful mitigation is claimed. The CUI/ECI boundary and human ownership of official findings continue to apply.

Cut first: detailed operation-reference mechanics. Never cut permitted-export status, outcome uncertainty, reconciliation before retry, the qualified idempotency definition, or explicit incomplete/handoff status.

Sources: Featonby, Amazon Builders' Library, checked September 2026; LangChain checkpoint documentation, checked September 2026; authored FRB recovery contract. Research §0, §3, and §4.

## Review outcome and adoption

- Accepted workflow and agent-loop foundations, with delegation kept brief.
- Moved the six-stage FRB workflow to slide 26 and focused slide 29 on a permitted export whose response is lost.
- Added short, qualified checkpoint and idempotency definitions and the execution-layer reconciliation requirements.
- Integrated the content into Research §4, the shared FRB reference, outline beat 2.4, specs 25 through 29, design brief §30, and `internal/deck/author.mjs`.
- Preserved the exact recap pitfall, map assets, narrative numbering, and build counts.
- Kept Orchestration at 3:55 and Section 2 at 28:30. Spoken pacing remains to be rehearsed.

## Source material

- External storyboard: `research/external/ai-engineering-presentation-storyboard.md`, slides 12 through 14.
- External report: `research/external/ai-engineering-research-report.md`, §4, with retry-contract context in §3.
- Current outline: `outlines/outline-v2.md`, beat 2.4.
- Evidence layer: `research/section-2.md`, §0 and §4, with tool outcomes in §3.
- Shared example: `internal/frb-running-example.md`.
