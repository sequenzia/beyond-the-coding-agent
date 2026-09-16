# Orchestration

Status: reviewed with the presenter, September 15, 2026. Content accepted for this pass. Numbered specs were integrated September 16. Section 2 remains 25:00 to 29:00, with individual cues based on a 27:00 rehearsal reference. Multi-agent depth agreed with the presenter: a brief contrast with a bounded workflow. Keep the main teaching on execution control, limits, and recovery.

Integrated September 16 into [outline-v2.md](../outline-v2.md), beat 2.4, and narrative slides 23 through 27. This file retains the reviewed supporting detail. The current numbered specs are in `slides/section-2/`; Research §4 in [research/section-2.md](../../research/section-2.md) remains the evidence layer. The builder implements the integrated specs.

## Opening quote

Selection: Anthropic, "Building effective agents," December 2024. Use the existing recommendation to find the simplest solution possible and increase complexity when needed. Exact wording, authorship, and verification status remain in Research §4.

Purpose: establish that the amount of autonomy and coordination should follow the task's needs.

Spoken bridge: **Decide which steps the system fixes in code and which decisions it delegates to the model.** Then define the conditions under which that work may continue.

Qualification: this is a design recommendation. It does not establish that one architecture is best for every task or that a multi-step agent is always necessary.

## What is it?

Orchestration is the execution design around model calls and tools. It determines the next step, carries forward the state needed for that step, coordinates work, and handles completion or interruption.

A predefined workflow controls the sequence through code. An agent loop lets a model choose actions based on the task and intermediate results. A bounded design can combine them, with model judgment inside stages whose permissions, prerequisites, and limits remain enforced by the system.

**Brief coding-agent connection:** a coding agent inspects a failure, edits code, runs a check, and uses the result to decide whether further work is needed. The surrounding execution system determines what actions are allowed and when the run stops or asks for help.

On the anatomy map, this is the Orchestration box inside the harness. Context and Tools remain separate responsibilities. Models selects eligible configurations. Orchestration decides how work using those components proceeds.

Sources: Anthropic, December 2024, and the existing execution-loop framing, Research §4. Harness definition, Research §0. The bounded combination is the talk's proposed design approach.

## Why it matters

A useful intermediate answer is only part of a completed task. The system still needs to reach the required checks, execute permitted actions, and establish what actually happened. Its control flow determines whether those steps occur.

More autonomy can help with work whose next step depends on new information. It also introduces decisions that need observation and evaluation. Repeated attempts consume resources, and a retry can repeat an action that already happened.

**Completion, stopping, and recovery are part of the product's behavior.** Define what counts as done, what happens when a limit is reached, and what evidence is needed to resume. A model's proposed plan does not enforce those rules.

Sources: Anthropic, December 2024 and November 2025; execution and maintenance framing, Research §4. The uncertain-export case follows the illustrative FRB contract in Research §0 and §3.

## Key decisions and trade-offs

### Who chooses the next step?

Use code to define known paths and required checks. Let the model select actions where interpretation or adaptation helps the task. Determine which choices are flexible and which conditions must hold before execution advances.

A predefined path makes required stages explicit, while asking the engineer to design the relevant branches. Model-selected actions can respond to findings that were not known in advance, while adding behavior to inspect and evaluate. Choose the amount of flexibility the work needs.

Starting approach: use the simplest design that meets the task. For the FRB example, begin with a bounded workflow. The model can interpret evidence inside its stages, while code preserves the verification and export conditions.

Revisit when the fixed path fails legitimate tasks, model-selected steps introduce unnecessary work, or new branches bypass required checks. Protect the acceptance criteria. Faulty or obsolete checks can change through review, but should not be weakened merely to make a run pass.

### When is delegation useful?

Keep a bounded workflow as the baseline. Multiple agents can divide independent work, but add handoffs, reconciliation, and resource use. Add workers when the measured benefit warrants those costs.

Starting approach: define each assignment, its allowed inputs, and the expected result. Keep responsibility for reconciling the results explicit. If tasks depend heavily on one another, the handoffs deserve particular scrutiny.

For FRB, independent comparison cases are a candidate for delegation after measuring the simpler workflow. That is the whole contrast needed here. Model selection stays in Models; this decision concerns how work is divided.

Revisit when whole-task quality, cost, or latency shows that delegation helps or creates more coordination work than it saves. Additional workers do not establish that the available models can meet the quality requirement.

### How does the system stop, resume, or recover?

Define completion checks and limits on actions, retries, tokens, and end-to-end latency. Decide which failures can be retried and which require inspection, an explicit limitation, or human handoff.

Retries offer another chance to complete recoverable work, while adding cost and risking repeated side effects. Saving state supports continuation, while creating a responsibility to check that the saved sources and permissions still apply.

Starting approach: persist completed steps and the evidence needed to resume them. Distinguish confirmed success, known failure, and an unknown outcome. Inspect what happened before retrying a consequential operation. Stop automated work when its budget is exhausted and state what remains incomplete.

**A timeout does not establish that an action failed.** A retry decision needs the operation's actual state where it can be determined. Preserve uncertainty and hand off when it cannot.

Revisit when recovery repeats completed actions, resumed work uses stale information, or stopping rules leave the caller with a misleading completion claim. Changes to the workflow should be checked against those failure cases.

Sources: Anthropic, December 2024, June 2025, and November 2025; 12-Factor Agents; existing orchestration decisions, Research §4. The retry, state, and handoff rules develop the authored FRB contract in Research §0, §3, and §4. No fixed budget or guaranteed recovery outcome is claimed.

## Common challenges and pitfalls

| Challenge | How it appears | Investigation or response |
|---|---|---|
| A proposed plan is treated as an execution guarantee | A run skips a required check or follows a new branch without the intended control | Inspect the executed path and enforce the prerequisite in the surrounding system. |
| The loop continues without useful progress | Actions repeat while cost and latency grow | Inspect the repeated work, enforce stopping limits, and state the remaining limitation or handoff. |
| The system declares completion too early | An intermediate result exists but the requested outcome has not been established | Check the completion conditions and actual results before accepting the run. |
| A handoff loses essential information | A worker returns a conclusion without its evidence or uncertainty | Keep assignments and return expectations explicit. Inspect sources before reconciling conflicting findings. |
| A retry repeats a side effect | An unconfirmed operation is issued again even though it may have completed | Inspect the saved result and operation state before deciding whether to retry. |
| Resumed work relies on stale state | A saved draft or source reference no longer matches current evidence or access | Recheck freshness and authorization, then redo the affected work and its checks. |

**Headline pitfall:** multi-agent before a workflow was tried.

Maintenance means checking that new branches, workers, and recovery paths preserve the required controls. Measure completed work, including retries, reconciliation, and verification. Detailed production monitoring belongs in Production operations.

Sources: existing orchestration failure and maintenance material, Research §4. Export state and source freshness follow the illustrative FRB agreement in Research §0. These are possible failures to investigate, not reported incidents in a deployed FRB system.

## FRB use case as an applied example

**Illustrative proposed design.** Begin with the existing six-stage workflow using authorized internal records and the applicable approved model services. The CUI/ECI restrictions apply throughout, including any delegated work. The older, less capable approved-model options remain a constraint to evaluate.

| Stage | Required work and boundary |
|---|---|
| Retrieve the packet | Obtain the target records with exact revisions and source locations, within the authorized scope. |
| Inspect evidence | Retain the preliminary hypothesis, unresolved cause, and outstanding inspection as distinct facts about the packet. |
| Compare cases | Examine relevant comparison records without attributing their confirmed causes to FRB-042. |
| Reconcile findings | Prepare a cited draft that preserves the evidence, uncertainty, and limitations. |
| Verify the brief | Apply the required checks to that exact draft. Failed checks return the affected work for repair within limits, or produce a handoff. |
| Export | Export only the checked content to a permitted destination and establish its completion state. |

Model judgment can interpret the records and propose findings. Code controls the conditions for moving to export. **A changed draft must pass verification again.** The model cannot establish that condition simply by saying its work was checked.

Save stage completion, source revisions, the working draft, and relevant verification and export outcomes. On resume, recheck freshness and access. Changed evidence returns the affected work to inspection and reconciliation before another verification.

The export contract from Tools supplies three kinds of result. Orchestration assigns the next action:

| Observed outcome | Execution response |
|---|---|
| A matching receipt confirms export of the checked draft | Record completion and return the existing receipt. |
| A confirmed failure establishes that export did not complete | Address its cause, recheck prerequisites, and retry only within policy and the remaining budget. |
| Completion remains unknown | Inspect the export state. If it cannot be established, preserve the uncertainty and hand off. |

At a work limit, stop further automated execution and say what remains incomplete. Any limited brief still needs its applicable checks and authorization before export. People retain responsibility for official causes and board decisions.

If measurements later justify it, independent comparisons of FRB-017 and FRB-031 can become worker assignments. They return evidence and uncertainty to the main analyst. They cannot export independently, approve official findings, or use an unapproved service. Keep this as a brief optional extension to the baseline.

Check that required gates hold on ordinary, failed, interrupted, and resumed paths. Confirm that uncertain export outcomes do not trigger blind repetition. Evaluate any delegated variant against the baseline on whole-task quality, cost, and latency.

Revisit when the task requires different branches, the approved models or services change, or execution evidence shows avoidable failure or cost. More elaborate control flow does not guarantee acceptable model behavior.

Sources: shared FRB workflow and execution rules, Research §0 and §4. Model and data assumptions, Research §1. Exact-content and result contract, Research §3. This is an authored proposal, with no measured performance or deployed system claimed.

## Delivery notes

- **Must say:** decide what code controls and where model judgment chooses the next step.
- **Must say:** begin with the simplest execution design that meets the task. Keep multi-agent design to a brief, conditional contrast.
- **Must say:** completion checks, stopping limits, saved state, and recovery rules are part of the system's behavior.
- **Must say:** inspect an unknown action outcome before deciding whether to retry it.
- Takeaway line: "The loop is where autonomy gets its limits. Start with the workflow."
- Transition: the workflow now has a verification stage. Verification and evals explains what its checks should establish and how to measure behavior across tasks and changes.
- Cut first during pacing: supporting branch and state details. The multi-agent contrast is already brief; pattern inventories and historical benchmark figures stay in backup.
- Never cut: enforced limits, headline pitfall, verification before export, or the distinction between failure and an unknown outcome.
- Present the FRB sequence directly, without an audience pause.

## Review questions and decisions

- Agreed structure: opening quote, then the five content headings, with a brief coding-agent connection in the definition.
- Agreed delegation depth: a brief contrast with a bounded workflow. Detailed multi-agent patterns and framework selection stay outside the main content.
- Accepted emphasis: who chooses the next step, when delegation helps, and how work stops or recovers.
- FRB continuity: retain the six stages, exact-content verification, and permitted export. Unknown outcomes require inspection before a retry decision.
- Inherited constraints: CUI/ECI processing and every participating model remain within the approved scope. Preserve the quality requirement even when the approved options limit what can be automated.
- Review outcome: presenter accepted this content pass and asked to move on to Verification and evals. Final pacing and presentation-machine rehearsal remain pending.
