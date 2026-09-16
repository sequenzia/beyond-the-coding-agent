# Model Selection integration draft

Accepted and integrated September 16, 2026. The presenter approved the five-screen sequence, shared primer, and proposed content. Outline beat 2.1, numbered specs 10 through 14, and the reusable deck builder now implement this revision. This file retains the supporting content review. The FRB application shows a compact evidence scorecard with no invented results. Rehearsal must validate the 4:30 reference.

## Agreed direction

- Bring over both the external storyboard's teaching approach and its technical foundations.
- Establish a short shared primer covering inference, tokens, context limits, and reasoning settings before selection decisions.
- Keep the standalone opening quote.
- Use five screens: quote, primer, decisions, pitfalls, and FRB application.

Starting assumptions carried forward from the current presentation: keep the FRB example, CUI/ECI eligibility constraints, and the illustrative assumption that approved models are older and less capable for this synthesis. Keep the brief coding-agent connection, model lifecycle responsibility, exact recap pitfall, and spoken takeaway. The new access-assistant fixture has not been selected for this presentation.

## Integration map

| Current slide | Proposed role | Change from current content | Rehearsal reference |
|---|---|---|---|
| 10 | Opening quote | Keep the existing quotation, attribution, and qualification. | 0:25 |
| 11 | Primer and responsibility | Explain one model invocation and the four agreed foundations. Retain the selection definition. | 1:20 |
| 12 | Selection decisions | Organize choices around eligibility, acceptable quality, and task efficiency. Explain routing and version policy in the talk track. | 1:00 |
| 13 | Pitfalls | Connect the primer to technical mistakes. Preserve the exact headline pitfall and lifecycle responsibility. | 0:20 |
| 14 | FRB application | Make design, failure, and evidence explicit. Introduce a proposed selection scorecard. | 1:25 |
| Total | Five static screens | Increase of 0:35. | 4:30 |

This Model Selection pass brought Section 2 to a 27:35 rehearsal reference within its 25:00 to 29:00 range, adding 0:35. Later area integrations update the current reference in `outlines/outline-v2.md`. Rehearsal remains necessary.

## 1. Quote

**Kicker:** Model Selection · Perspective

Retain the selected Osmani quotation and attribution verbatim from current slide 10 and Research §1. Retain the existing illustration.

**Purpose:** Introduce the idea that we evaluate a model within its intended system.

**Talk track:** Read the quote. Explain that Osmani is describing his engineering experience. The surrounding context, tools, and control flow shape the result. Then introduce the model call we are selecting and configuring.

**Bridge:** Before comparing models, establish what happens in one model call.

Cut first: elaboration about the surrounding system. Never cut attribution and the experience qualification.

Sources: Osmani, April 2026. Research §1.

## 2. Primer and responsibility

**Kicker:** Model Selection · Foundations

**Proposed title:** The model invocation

### Proposed visible content

Use three connected parts of one explanatory diagram:

| Supplied input | Inference | Generated output |
|---|---|---|
| Instructions, request, evidence, tool definitions | Run a trained model with the selected settings | Response or proposed tool call |

Attach the following short explanations to the relevant parts of that diagram:

- **Tokens:** Units of content the model processes and generates.
- **Context limit:** Capacity for input and generated tokens.
- **Reasoning settings:** Control reasoning effort where supported.

Keep the responsibility explicit in a short supporting line:

**Model Selection:** Choose and maintain a configuration suited to the task and approved for the data.

### Explanatory treatment

The diagram establishes a single invocation. Show tokens around input and output. Make the context limit apply across input and generated tokens, rather than enclosing only the prompt. Mention applicable reasoning-token accounting in the explanation. Position reasoning settings with the invocation. Do not depict a tool proposal as an executed action.

Use one composition with annotations. All visual values defer to `style/design-brief.md`. A new diagram composition will need to be described there before implementation. No layout values or replacement illustration are prescribed by this draft.

### Proposed talk track

Your application supplies instructions, a request, relevant evidence, and available tools. **Inference is running an already trained model on that input to obtain an output.** That output can be a response or a proposed tool call. The application handles execution.

Tokens are units the model processes and generates. For text, they can be pieces of words. They help us understand usage and capacity.

The context window limits the tokens available for a call. Leave room for generated output and, where applicable, reasoning tokens. The precise limits depend on the model.

Some models expose reasoning settings. **Treat effort as part of the configuration you evaluate.** Measure whether it improves the task enough to justify its cost and delay. Choosing a model and effort for a coding task is a familiar version of this decision.

Our responsibility is to choose and maintain a configuration that fits the task and is approved for the data. The next screen explains how to compare the eligible options.

Cut first: the coding-task elaboration. Never cut the four foundation definitions, model-specific qualification, or selection responsibility.

Sources: OpenAI, checked September 2026, shared-primer records in Research §1; existing model and harness framing, Research §0. External storyboard slide 3 supplies the teaching treatment. The four checked documentation records support the expanded explanation.

## 3. Selection decisions

**Kicker:** Model Selection · Decisions

**Proposed title:** Selecting a model configuration

### Proposed visible content

**Eligible options**

Approved for the data, environment, and intended use.

**Required quality**

Representative tasks, with clear acceptance criteria.

**Task efficiency**

Completion time and cost per successful task, including retries and review.

### Explanatory treatment

Present these as a decision sequence. Eligibility and hard product limits constrain the candidate set. Within it, establish acceptable quality before optimizing efficiency. Avoid a weighted score that implies low price can compensate for an unacceptable result.

### Proposed talk track

**First establish which configurations are eligible for the data and intended use.** For this audience, CUI and export-controlled information make that a familiar constraint. Hard cost or response-time limits can also exclude options.

Then define what an acceptable result looks like and compare configurations on representative work. Keep the intended context, tools, and workflow in the comparison, and record the model version and reasoning settings.

Among configurations that meet the requirements, compare time to a completed outcome and cost per successful task. Include retrieval, tool calls, retries, verification, and human review. Account for failed attempts too.

Start with one configuration. Add routing when measurements justify the additional behavior to evaluate. **Pinned versions need a migration plan. Moving aliases need regression monitoring.** Both choices need ongoing task checks.

Cut first: routing elaboration. Never cut eligibility, acceptable task quality, total-task comparison, or lifecycle responsibility.

Sources: OpenAI, checked September 2026, selection-sequence record in Research §1; data eligibility and lifecycle records, Research §1; existing FRB measurement contract, Research §0. Total-task accounting is engineering guidance, not an asserted experimental result.

## 4. Pitfalls

**Kicker:** Model Selection · Challenges and pitfalls

**Proposed title:** Model-selection pitfalls

### Proposed visible content

- **Capacity:** Evidence fits, but the result still needs checking.
- **Effort:** A higher setting still needs task evidence.
- **Cost:** Token price omits retries and review.

**Pitfall:** Selecting or changing models without testing them on your task.

### Proposed talk track

Capacity, effort, and token price each tell us only part of the story. **Selecting or changing models without testing them on your task** is the headline pitfall. A pinned model also leaves other dependencies free to change. Inspect the failure before choosing a replacement.

These are engineering cautions, not measured failures of a named model. Preserve the exact headline sentence on slide 44. The supporting cues are proposed replacements for the current access, coverage, and dependency cues; those responsibilities remain in the surrounding explanation.

Cut first: the pinned-model reminder, which also appears in decisions. Never cut the exact headline pitfall.

Sources: task-fit, reasoning-setting, and lifecycle guidance, Research §1. The requirement to test evidence use is engineering guidance. It does not import a numerical long-context performance claim from the external report.

## 5. FRB application

**Kicker:** Model Selection · FRB application

**Proposed title:** Models for the FRB brief

**Illustrative proposed design. No model results claimed.**

### Proposed visible content

**Design**

Evaluate an eligible configuration for summaries and cross-case synthesis.

**Failure to test**

Possible bearing wear becomes a confirmed cause.

**Evidence to collect**

Supported findings, preserved uncertainty, completion time, and cost per successful brief.

Keep a short constraint line visible: **CUI/ECI corpus. Approved options assumed older and less capable for this synthesis.**

### Proposed talk track

Our invented FRB corpus includes CUI and ECI. Assume the approved options are older and less capable for this synthesis. **Evaluate useful work within that approved set.**

Start with one eligible configuration. Test single-case summaries and cross-case synthesis separately. The preliminary briefing calls bearing wear a possible cause. The later minutes leave the cause unresolved and require inspection. A candidate that reports a confirmed cause has failed this case.

That answer alone does not identify the faulty component. Check which evidence reached the model and how the workflow handled it.

Record whether the configuration preserves findings, uncertainty, and supporting records, then compare completion time and cost, including failed attempts and human review. No winning model or measured result is supplied here.

If the full brief falls short, evaluate preparing cited findings for an engineer to reconcile. **Keep the evidence requirement and the approved processing boundary.** If the narrower task still fails, limit or defer it.

The choice depends on the information supplied to the model. Context Engineering develops that responsibility next.

**The model is a versioned, expiring dependency. Treat it like one.**

### Proposed working artifact

A small model-selection scorecard makes the engineering work concrete. It is a supporting artifact for discussion, not additional body copy to squeeze onto this screen. The integrated slide shows a compact version for quality, completion time, and cost. The full inventory below remains supporting material.

| Record | Evidence or decision to capture |
|---|---|
| Configuration | Eligible service and environment, model version, reasoning settings, and relevant workflow configuration. |
| Task categories | Single-case summaries and cross-case synthesis, with appropriate difficult cases. |
| Acceptable quality | Supported findings, correct source identities, preserved uncertainty, and explicit limitations. |
| Efficiency | Completion time, review effort, and total cost per verified successful task. Include costs of unsuccessful attempts. |
| Useful scope | Full brief, a narrower assisted task, or a capability to limit or defer. No outcome is assumed. |
| Maintenance | Evaluation date, intended use, version policy, and triggers for reevaluation. |

An assisted workflow and an automated brief are different scopes. Record which outcome counts as success and include the relevant human work. Do not report their success rates as if they describe the same task without that distinction.

The invented evidence remains FRB-042-BRF r1, slide 6, and FRB-042-MIN r2, §3 paragraph 2. They are separate documents. The detailed citation-existence versus semantic-support check remains in Verification & Evals.

Cut first: the detailed scorecard inventory and narrower-task example. Never cut illustrative status, the CUI/ECI and capability assumptions, possible versus established cause, or the unchanged evidence requirement.

Sources: illustrative FRB contract, Research §0 and §1; failure investigation, Research §5. The scorecard adapts the external report's artifact recommendation to the existing packet. No new FRB facts or model results are introduced.

## Review outcome and adoption

- Accepted the five-screen sequence and shared technical primer.
- Retained useful scope within approved model constraints as the central FRB decision.
- Added a compact visible scorecard of evidence to collect, with no scores or claimed winner.
- Integrated the accepted content into outline beat 2.1, slides 10 through 14, design brief §27, and `internal/deck/author.mjs`.
- Kept the exact headline pitfall on slide 44 and preserved all narrative numbering and build counts.
- Rehearsal remains open for the 4:30 Model Selection and 27:35 Section 2 references.

## Source material

- External storyboard: `research/external/ai-engineering-presentation-storyboard.md`, slides 3 through 5.
- External report: `research/external/ai-engineering-research-report.md`, §1 and the minimum useful artifacts table in §8.
- Current outline: `outlines/outline-v2.md`, beat 2.1.
- Evidence layer: `research/section-2.md`, §0, §1, and the existing failure-investigation material in §5.
- Shared example: `internal/frb-running-example.md`.

Research holds full source records. This working draft uses short-form citations and preserves the distinction between external evidence, engineering guidance, and invented teaching material.
