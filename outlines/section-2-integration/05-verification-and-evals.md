# Verification & Evals integration draft

Accepted and integrated September 16, 2026. The presenter approved this draft for the outline, slide specs, and PowerPoint. Outline beat 2.5, slides 30 through 34, design brief §31, and the reusable builder implement the practical primer, case matrix, and retained source-support example. Reliability notation remains in Markdown backup. This file retains the supporting content review. Rehearse the retained 4:35 area reference.

## Agreed direction and carried-forward structure

- Explain cases, repeated trials, graders, and held-out checks in practical terms.
- Keep citation existence versus claim support as the main worked example.
- Use the preceding areas' failures to illustrate broader suite coverage.
- Carry forward quote, foundations, decisions, pitfalls, and separate FRB application.
- Preserve ordinary software tests, expert calibration, result and trace inspection, ongoing evaluation, and the current headline pitfall.
- Keep reliability notation and formulas in Markdown backup. Preserve the removal of the personal story and its time reservation.

The organizing distinction remains complementary uses of checks: verification informs acceptance of this result, while evaluation measures behavior over a workload. This is a teaching frame, not a universal taxonomy separating software tests from evals.

## Integration map and rehearsal reference

| Current slide | Proposed role | Main change | Rehearsal reference |
|---|---|---|---|
| 30 | Quote | Keep the error-analysis quote and joint attribution. | 0:20 |
| 31 | Foundations | Contrast one-result verification with evaluation across cases and trials. Define case, trial, and grader. | 1:00 |
| 32 | Evaluation design | Use an illustrative case matrix to connect expected behavior with checks and comparison practices. | 1:30 |
| 33 | Pitfalls | Retain result checks, grader review, coverage, and the exact headline pitfall. | 0:25 |
| 34 | FRB application | Preserve the citation PASS/support FAIL example and connect it to the export gate and regression suite. | 1:20 |
| Total | Five static screens | Redistribute time within the existing area allocation. | 4:35 |

The foundations slide gains 0:10 and the application gives up 0:10. Section 2 retains its 28:30 rehearsal reference within the 25:00 to 29:00 range. Rehearsal must validate the split.

## 1. Quote

**Kicker:** Verification & Evals · Perspective

Retain the selected error-analysis quotation from slide 30 and Research §5, with both Hamel Husain and Shreya Shankar named. Retain the existing illustration.

**Spoken bridge:** Inspect the result and trace before choosing a repair. An aggregate score becomes useful when we understand the failures behind it.

Keep this as an attributed practitioner judgment. Do not add a universal time-allocation statistic or claim that one evaluation method suits every system.

Cut first: the aggregate-score explanation. Never cut the joint attribution and error-analysis principle.

Sources: Husain and Shankar, September 2026 update. Research §5.

## 2. Foundations

**Kicker:** Verification & Evals · Foundations

**Proposed title:** Verification and evaluation

### Proposed visible content

**Verification**

Does this result meet the requirements?

**Evaluation**

How does the system perform across cases and repeated runs?

Use a shared vocabulary beneath the two scales:

| Term | Meaning |
|---|---|
| Case | Input and expected conditions. |
| Trial | One attempt at a case. |
| Grader | A check of behavior or outcome. |

### Explanatory treatment

Compare one result with a collection of cases and repeated attempts. Make clear that the same check can inform runtime acceptance and a wider evaluation. The vocabulary can be annotations or aligned text rather than a second large table.

Do not invent trial scores, success rates, or a passing model configuration. Use labels and the actual examples developed on the following screens. All visual values belong in the design brief when adopted.

### Proposed talk track

**Verification asks whether this result meets the required conditions. Evaluation asks how the system behaves across cases and repeated runs.** The same checks can serve both purposes.

A case defines the input, starting conditions, and expected behavior. A trial is one attempt at that case. A grader checks an aspect of the behavior or outcome. Several graders may examine the same trial.

**Evals are tests of an AI system. Ordinary software tests remain necessary.** A coding agent's test output is evidence to inspect; its completion message must still agree with the actual result.

Check the output and required action constraints, including permission and verified completion. A successful demonstration establishes one useful path. The product needs evidence across representative work, important failures, and repeated attempts.

Cut first: the coding-agent elaboration. Never cut the one-result versus many-run distinction, shared vocabulary, ordinary tests, or required outcome constraints.

Sources: Anthropic, January 2026, definitions rechecked September 2026; existing verification and evaluation framing. Research §5. The example-specific constraints come from Research §0 and the shared FRB contract.

## 3. Evaluation design

**Kicker:** Verification & Evals · Decisions

**Proposed title:** Designing the evaluation suite

### Proposed visible content

**Illustrative evaluation cases.**

| Case | Expected behavior | Checks |
|---|---|---|
| Routine brief | Supported findings. Uncertainty preserved. | Reference checks plus expert or calibrated model judgment. |
| Disallowed export | Reject before transfer. No export at that destination. | Permission and export-state checks. |
| Lost export response | Reconcile the outcome. Avoid duplicate export. | Receipt and artifact checks. |

**Comparison:** Held-out cases and repeated trials.

### Explanatory treatment

Use the matrix to show how an engineer defines a case. Expected behavior and checks belong together. The rows are illustrative coverage examples, not the complete suite and not measured trial results.

The routine brief includes ordinary successful work. The export rows reuse the Tools and Orchestration scenarios. Missing-evidence and adversarial cases remain explicit in the explanation, without replacing the main source-support application.

Keep the brief grader comparison in the talk track, anchored to the table's checks. Do not add a competing table of grading techniques beside this matrix.

### Proposed talk track

Start with the expected outcome and forbidden effects. Build cases from real work and known failures, including useful limitations when the system cannot finish. These rows illustrate coverage. Also include missing evidence and adversarial content.

Use code for conditions you can check directly, such as a citation resolving or no export reaching a forbidden destination. Experts define quality and judge domain meaning. A model grader can help apply a rubric to varied outputs, but compare its decisions with expert judgments and inspect disagreements. **The grader also needs evaluation.** All reviewers and processing services stay within the approved data scope.

**Held-out cases are reserved from routine tuning.** Use them to assess a change on work it was not repeatedly adjusted against. Repeat trials where behavior varies, and inspect results by case category.

For each case, record starting conditions, expected behavior, source revisions, and system configuration. The lost-response case requires a verified export when matching evidence is available. A variant where the outcome remains unknowable instead requires an explicit unresolved status. Keep those outcomes distinct.

Cut first: detailed fixture-record fields. Never cut case coverage, the brief code/model/expert comparison, grader calibration, held-out cases, or repeated trials.

Sources: Anthropic, January 2026, and OpenAI evaluation-method guidance, checked September 2026. Research §5. The illustrative suite rows adapt the shared FRB contract in Research §0, §3, and §4. No fixed sample size or shipping threshold is claimed.

## 4. Pitfalls

**Kicker:** Verification & Evals · Challenges and pitfalls

**Proposed title:** Evaluation pitfalls

### Proposed visible content

- **Outcome:** Inspect the actual result.
- **Grader:** Review disagreement with expert judgment.
- **Coverage:** Add failures and recheck after changes.

**Pitfall:** Using a generic judge without error analysis or result checks.

Inspect the result and the trace before choosing a repair.

### Proposed talk track

**Using a generic judge without error analysis or result checks** is the headline pitfall. Check the actual outcome, the grader, and the cases before choosing a repair. Continually tuning against held-out cases weakens their independence. **Evaluation continues after deployment and after model or harness changes.** Add failures from real use.

Preserve the exact headline sentence shared with slide 44. Keep this screen focused on how an evaluation can mislead the team, rather than expanding into a benchmark inventory.

Cut first: the held-out reminder, already explained in decisions. Never cut the exact headline pitfall, error analysis, or ongoing evaluation.

Sources: error-analysis and evaluation-maintenance guidance, Research §5.

## 5. FRB application

**Kicker:** Verification & Evals · FRB application

**Proposed title:** Does the source support the claim?

**Illustrative source-support check.**

### Proposed visible content

Retain the existing source, answer, and checks:

**Source:** FRB-042-MIN r2 · §3, paragraph 2

“Cause remains unresolved. Inspect the bearing before assigning a cause.”

**Answer citing these minutes:** “The board confirmed bearing wear.”

**Citation exists: PASS**

**Claim supported: FAIL**

**Expected:** Cause unresolved. Inspection required.

Keep this failure as a regression case.

### Explanatory treatment

Preserve the existing side-by-side source and unsupported claim, exact citation, and explicit PASS/FAIL wording. These are properties of the invented record and deliberately wrong answer, not measured model performance.

The main improvement is its connection to the preceding case-design explanation. This becomes a concrete case with criteria, distinct graders, an acceptance consequence, and regression use. No new personal story or reserved pause is added.

### Proposed talk track

The answer claims the board confirmed bearing wear and cites FRB-042-MIN revision two, section three, paragraph two. That reference exists, so the direct reference check passes.

The minutes leave the cause unresolved and require inspection. The support check fails. **Citation existence and semantic support are different checks.** The expected answer preserves the unresolved cause and outstanding inspection.

Use an authorized expert, or a suitable model grader calibrated against expert judgments, for that assessment. The failing draft cannot pass the export gate. Corrected content must be checked again.

Keep this as one regression case within the broader suite. Inspect the trace to locate the loss of meaning before selecting a repair, then rerun relevant cases and repeated trials. This one case does not establish every requirement.

AgentOps connects evaluation evidence to response during real use.

**Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes.**

### Supporting evaluation artifact

| Case record | What to capture |
|---|---|
| Task and initial conditions | Request, relevant environment state, accessible records, and permitted effects. |
| Expected behavior | Required result, preserved uncertainty, forbidden effects, and allowed limitation or handoff. |
| Checks and graders | The property each check establishes, its evidence, and its code, model, or expert method. |
| Configuration | Model and settings, prompts, context/retrieval policy, tools, orchestration, and grader versions. |
| Trial record | Output, observed actions and state, check results, and trace needed for investigation. |
| Comparison | Relevant task categories, repeated attempts, and cases reserved from routine tuning. |
| Maintenance | Failure analysis, the selected repair, regression evidence, and production cases added later. |

For the source-support fixture, the record and quoted location exist, but the cited passage does not establish the answer's conclusion. A reference-existence check and a semantic-support check have different responsibilities. A fluent model-grader explanation alone does not establish a correct judgment.

For action cases, reset or otherwise control the test state between trials. Permission rejection and lack of unwanted effects matter alongside useful completion. A system that refuses all requests has not established useful automation. Record which outcomes count as completion and which are correct limitations.

Keep evaluation inputs, stored traces, services, model graders, and human reviewers within the scenario's applicable CUI/ECI scope. Approval to receive data does not establish grader competence. Use authorized expert review or limit automation when a suitable model grader is unavailable.

Cut first: the component inventory and repeated explanation of suite coverage. Never cut the two distinct checks, approved grading scope, export gate, regression use, or spoken takeaway.

Sources: illustrative FRB packet and evaluation contract, Research §0 and §5; Anthropic evaluation and error-analysis guidance, Research §5.

## Backup: repeated-run metrics

Keep pass@k and pass^k outside the visible copy and timed talk tracks. Pass@k concerns at least one successful attempt among k attempts. Pass^k concerns success across all k attempts. Their interpretation depends on the benchmark's definition, task mix, trial setup, and ability to identify a successful result.

The external report contains the simple independent-attempt formulas and their qualifications. They are supporting explanations, not measured reliability for the FRB system or universal release thresholds.

Sources: Anthropic, January 2026, Research §5; external research report §5. Check the specific metric definition before quoting a benchmark.

## Review outcome and adoption

- Accepted the practical case/trial/grader primer, held-out checks, and repeated trials.
- Added the illustrative case matrix and preserved the detailed citation PASS/source-support FAIL example.
- Kept pass@k and pass^k in Markdown backup and preserved the removal of the personal story.
- Integrated the content into Research §5, the shared FRB evaluation design, outline beat 2.5, specs 30 through 34, design brief §31, and `internal/deck/author.mjs`.
- Preserved the exact recap pitfall, narrative numbering, map assets, and build counts.
- Kept Verification & Evals at 4:35 and Section 2 at 28:30. Spoken pacing remains to be rehearsed.
- Native PowerPoint playback review completed September 16 for Orchestration and Verification & Evals, including the AgentOps handoff. The preceding Orchestration playback check is now resolved.

## Source material

- External storyboard: `research/external/ai-engineering-presentation-storyboard.md`, slides 15 through 17.
- External report: `research/external/ai-engineering-research-report.md`, §5.
- Current outline: `outlines/outline-v2.md`, beat 2.5.
- Evidence layer: `research/section-2.md`, §0 and §5, with the existing export and recovery fixtures in §3 and §4.
- Shared example: `internal/frb-running-example.md`.
