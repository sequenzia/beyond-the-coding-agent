# Verification and evals

Status: reviewed with the presenter, September 15, 2026. Content accepted for this pass. Numbered specs were integrated September 16. Section 2 remains 25:00 to 29:00, with individual cues based on a 27:00 rehearsal reference. Grader depth agreed with the presenter: briefly compare code checks, model graders, and expert review. The personal story and its 1:00 reservation have been removed. The FRB check is the worked example.

Integrated September 16 into [outline-v2.md](../outline-v2.md), beat 2.5, and narrative slides 28 through 32. This file retains the reviewed supporting detail. The current numbered specs are in `slides/section-2/`; Research §5 in [research/section-2.md](../../research/section-2.md) remains the evidence layer. The builder implements the integrated specs.

## Opening quote

Selection: Hamel Husain and Shreya Shankar, "AI Evals: Everything You Need to Know," September 2026 update. Use the existing quotation about error analysis being the most important activity in evals. Exact wording, joint authorship, and verification status remain in Research §5.

Purpose: begin with understanding actual failures and use that understanding to decide what to measure and repair.

Spoken bridge: **Inspect the result and the trace before choosing a repair.** A score becomes useful when the team understands the behavior behind it.

Qualification: the authors present a practitioner judgment. The quote does not establish a universal allocation of engineering time or prescribe one evaluation method for every product.

## What is it?

Verification asks whether a particular result or action meets the checks required before accepting it. Evaluation measures how the system behaves across representative cases and repeated attempts. The same checks can support both purposes.

**Evals are tests of an AI system.** A case supplies an input and criteria for success. A trial is an attempt at that case. A grader checks an aspect of the result or behavior. A suite collects cases that provide evidence about the system's intended use.

Ordinary software tests remain part of this work. Code checks, model judgments, and human review can all contribute. Their usefulness depends on what each check can establish.

**Brief coding-agent connection:** when a coding agent runs the repository tests, their actual output provides evidence about the change. Its statement that the work is complete still needs to be checked against the result and the task's requirements.

Boundary: Orchestration enforces when verification must happen and what follows a failure. This area defines the criteria and checks and measures their results across tasks. Production operations connects that evidence to production monitoring and response.

Sources: Anthropic, January 2026; Husain and Shankar, September 2026; the talk's organizing model, Research §5. Verification and evaluation are complementary uses of checks here, not a universal division between tests and evals.

## Why it matters

A compelling successful run demonstrates a useful path. A product needs evidence about the conditions under which that behavior can be relied on and how it handles cases it cannot complete.

An implementation can pass checks for its interfaces and still produce an unsupported conclusion. The evaluation needs to reach the outcome the user depends on, including the required constraints. A well-formed response, a completed tool call, and a correct result are different things to check.

Changes to models, context, tools, or orchestration can affect behavior. Representative cases help compare those changes, while failures from real use reveal gaps in the existing suite. **Evaluation continues after deployment.**

Sources: Anthropic, January 2026; Husain and Shankar, September 2026; existing verification and maintenance framing, Research §5. The limits of ordinary component checks are illustrated by the FRB contract, Research §0.

## Key decisions and trade-offs

### What counts as success?

Define the requested outcome, required constraints, and serious failures with domain experts. Include what a useful limitation or handoff looks like when the system cannot complete the task.

Broad criteria allow legitimate variation but can be difficult to apply consistently. Narrow checks are easier to automate but can miss important behavior or reject a valid result. Make the criteria specific enough to judge while allowing acceptable ways of completing the task.

Starting approach: inspect representative outputs with people who understand the work. Write down what was observed, what was expected, and why the difference matters. Refine criteria as those examples reveal missing requirements. Check required approvals and access boundaries without prescribing an arbitrary sequence of tool calls.

Revisit when experts disagree, new tasks expose missing requirements, or a high overall result conceals a serious failure category. Passing the suite establishes evidence about what it covers, not every possible use.

### Which checks can establish it?

Use a brief comparison of the three approaches:

| Approach | Useful for | Main trade-off |
|---|---|---|
| Code checks | Conditions that can be checked directly, such as reference existence, permitted values, or resulting system state | Repeatable and easy to inspect, but limited by what the condition actually proves. |
| Model graders | Applying defined criteria to meaning, faithfulness, or other varied outputs | Can assist at scale, but add cost and can disagree with expert judgments. |
| Expert review | Defining quality, investigating failures, and judging domain meaning | Supplies task knowledge while using limited expert time. Reviewers also need clear criteria. |

Starting approach: use direct checks where they fit and expert judgment where meaning matters. Before relying on a model grader, compare its decisions with expert decisions, inspect disagreements, and refine the criteria or grader. Recheck agreement as the task or grader changes. Keep that explanation brief.

**A grader also needs evaluation.** A plausible rationale or an available approved model does not establish that its judgments are reliable for the task.

Revisit when the grader rejects valid results, accepts important failures, or lacks the evidence needed to judge. Inspect the grader and its inputs as well as the system being graded.

### Which cases and repeated trials provide useful evidence?

Cover representative tasks, important edge cases, known failures, and situations where the correct response is a limitation or handoff. Repeat cases to examine consistency across attempts.

More cases and trials provide more opportunities to observe failures, while increasing evaluation cost and review effort. One successful attempt and consistent success over repeated attempts answer different questions. Choose the evidence needed for the product decision.

Starting approach: begin with a manageable set drawn from real work and failures. Anthropic recommends 20 to 50 simple tasks as an initial starting point. That number is not proof of readiness. Expand coverage as error analysis reveals gaps, and preserve established cases as regression checks.

Record the task, criteria, relevant sources, and system configuration needed to interpret each run. Compare changes on the same relevant cases, inspect the failures, and repeat trials where variation matters. Keep capability probes that explore limits distinct in purpose from checks that protect established behavior.

Revisit when intended use changes, cases become unrepresentative, or the suite stops revealing known problems. Add production failures and rerun after model or harness changes. Probability notation and universal shipping thresholds stay out of the main explanation.

Sources: Anthropic, January 2026; Husain and Shankar, September 2026; Shankar et al., UIST 2024, for evolving criteria; existing evaluation decisions, Research §5. The initial case count is attributed guidance, not a sample-size rule for every system.

## Common challenges and pitfalls

| Challenge | How it appears | Investigation or response |
|---|---|---|
| The success claim replaces an outcome check | The system says it completed the task, but the expected result is missing or wrong | Inspect the actual artifact or system state and the required constraints. |
| A generic score misses the important error | The output looks fluent while a material claim is unsupported | Define task-specific criteria from observed failures and inspect the supporting evidence. |
| The grader is wrong or underinformed | Its decision conflicts with the source or expert review | Check its inputs, criteria, and implementation before treating the score as a system defect. |
| The cases do not represent intended use | Familiar examples pass while new kinds of requests fail | Refresh coverage, add production failures, and examine serious failure categories separately. |
| A single successful run is treated as reliable behavior | The same task fails on another attempt | Use repeated trials and report the relevant consistency evidence. |
| The result is repaired without understanding the cause | A prompt or model change fixes one example but leaves the underlying failure or creates another | Inspect the trace, identify the responsible component, and rerun the broader suite after the repair. |

**Headline pitfall:** a generic judge instead of error analysis. Trusting the success claim without checking the result.

The ongoing work is to inspect outcomes and traces, maintain criteria and graders, and keep the suite aligned with intended use. Evaluation results should inform concrete changes to the model or harness and be checked again after those changes.

Sources: evaluation and error-analysis material, Research §5. These are failures to investigate, not measured incidents in the illustrative FRB system.

## FRB use case as an applied example

**Illustrative check using invented records and a deliberately wrong answer.** The deployment scenario includes CUI/ECI and limited approved-model choices. Evaluation services and any model graders that receive restricted records must stay within the applicable approved scope. Human reviewers need the appropriate access too.

Use the exact source referenced by the answer:

**Source:** FRB-042-MIN r2, §3 paragraph 2.

“Cause remains unresolved. Inspect the bearing before assigning a cause.”

**Deliberately wrong answer citing that source:**

“The board confirmed bearing wear.”

| Check | Result | What it establishes |
|---|---|---|
| Does the cited document, revision, and location exist? | PASS | The reference resolves within the invented packet. |
| Does that passage support the claim that the board confirmed bearing wear? | FAIL | The passage leaves the cause unresolved and requires inspection. |

**Citation existence and semantic support are different checks.** The expected answer preserves the unresolved cause and outstanding inspection. The preliminary briefing's possible cause remains a hypothesis.

The reference check can be direct. Source support needs judgment about the meaning of the passage. Use an authorized domain expert, or a model grader whose judgments have been evaluated against expert decisions for this task. If the available approved model is not a suitable grader, keep expert review for that judgment or limit the automated scope. An ineligible stronger model does not become an evaluation fallback.

Failing source support prevents export of that draft. A corrected draft must pass verification again under the contract established in Tools and Orchestration. Passing this one check does not establish that all of the brief's other requirements are met.

Retain the failure as a regression case alongside the broader suite. Include revised sources, duplicate documents, inaccessible evidence, parsing failures, cross-case confusion, and export behavior. Repeat trials to examine consistency.

Inspect the trace before choosing a repair. Did parsing lose the qualification? Did retrieval omit the minutes? Did compaction, a worker, or synthesis change the meaning? Did the grader reject a supported answer? Use the evidence to locate the failure rather than assuming the model is responsible.

Revisit the checks and suite when the corpus, intended use, approved model options, or harness changes. The purpose is to establish what behavior the system can support and which failures still require a limitation or human review.

Sources: illustrative FRB packet and check, Research §0 and §5. Data and model constraints, Research §1. No deployed-model results, benchmark scores, or personal experience are claimed.

## Delivery notes

- **Must say:** verification informs acceptance of a particular result; evaluation measures behavior across representative cases. Both use checks, and ordinary tests remain necessary.
- **Must say:** briefly compare code checks, model graders, and expert review. Model graders need evaluation against expert decisions.
- **Must say:** inspect the result and trace, repeat trials where consistency matters, and keep evaluating after deployment.
- **Must say:** a citation can exist while failing to support the claim.
- Takeaway line: "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."
- Transition: Production operations explains how the deployed system exposes failures, enforces limits, and gives people the information needed to respond.
- Cut first during pacing: vocabulary detail, the initial case-count recommendation, and capability-versus-regression elaboration. Probability notation remains backup.
- Never cut: task-specific success criteria, grader comparison and calibration principle, ongoing evaluation, headline pitfall, or the FRB source-support distinction.
- The personal story and its 1:00 reservation are removed. Do not create a replacement anecdote or automatically reassign that time before the pacing pass.

## Review questions and decisions

- Agreed structure: quote first, then the five content headings, with the coding-agent connection inside the definition.
- Agreed grader depth: a brief comparison of code checks, model graders, and expert review. Detailed calibration methods remain outside the main content.
- Presenter decision: remove the personal story and the protected 1:00 reservation. The illustrative FRB check is the worked example.
- Accepted emphasis: defining success, selecting suitable checks, representative cases and repeated trials, and error analysis that guides repairs.
- Inherited constraints: evaluation and grading respect the CUI/ECI access and processing boundaries. The available answering model is not assumed to be a suitable grader.
- Review outcome: presenter accepted this content pass and asked to move on to the final area, now named Production operations. Final pacing and presentation-machine rehearsal remain pending.
