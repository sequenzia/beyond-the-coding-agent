# Develop the running example

**Beyond the Coding Agent: From Software Engineer to AI Engineer**

**Reviewed:** September 15, 2026. **Presentation:** September 17, 2026.

**Review documents:** [Overall assessment](presentation-assessment-2026-09-15.md) · [Apply essential corrections](apply-essential-corrections-2026-09-15.md) · Develop the running example · [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md).

These recommendations connect the six engineering areas through one illustrative refund workflow. The example is hypothetical, and personal story slots remain yours to fill. This document proposes the content and teaching changes; it does not implement them in the presentation.

## 1. Revision priorities

1. Introduce the running case and reuse it in the responsibility beats.
2. Replace the least useful eval statistics with one checkable case.
3. Remove one redundant evidence item per crowded area.
4. Make the roadmap's first action visible.
5. Reconcile the revised pitfalls with slide 22.

## 2. The strongest improvement: one case that connects the areas

### 2.1 Use a case already close to the draft

I recommend a small customer-support workflow handling a refund request. Refund correctness is already on slide 17, so this needs less setup than an unrelated example.

Introduce it as a hypothetical design exercise:

> “A customer asks for a refund. The system must find the right policy, determine what it is allowed to do, and either complete the request or hand it to someone who can.”

Use a sentence or a small artifact in each “when it's your agent” slide. Keep the coding-agent feature as the entry point. This case supplies continuity on the product side of the comparison.

| Area | Decision in the example | What the audience learns |
| --- | --- | --- |
| Models | Compare candidate models on the same refund cases | Choose against a quality requirement and operating budget |
| Context | Retrieve the policy with its effective date and the authorized customer's order | Relevance, freshness, and access boundaries affect correctness |
| Tools | Expose an operation with explicit inputs, authorization, and a recorded result | The tool contract includes more than a function name |
| Orchestration | Handle an ambiguous tool timeout without issuing a second refund | State, recovery, and stopping rules are familiar engineering work |
| Evals | Check the refund record and the explanation across eligible, ineligible, and ambiguous requests | Combine direct assertions with judgment where needed |
| Operating | Trace the decision and action, enforce identity, and hand unresolved cases to a human | The product needs accountable operation |

These are illustrative design choices, not claims about any deployed product. If adopted, put the example into the outline before the slides and add sources for any new factual claims.

### 2.2 Show one eval case instead of another statistic

The most valuable new visual would be a small, readable record on slide 16 or 17:

| Part of the case | Illustrative content |
| --- | --- |
| Input | An authenticated customer asks for a refund on an eligible order |
| Observed behavior | The assistant says the refund succeeded |
| State check | The correct refund exists once in the ledger |
| Policy check | The action was authorized for this customer and order |
| Communication rubric | The answer accurately describes the recorded result |
| Repeated evaluation | Run this and other cases across model and harness changes |

This lets the presenter point to the exact thing an engineer would implement. It also resolves the false choice between deterministic checks and model-based grading.

Use the example to explain why a single overall success rate may hide a bad failure. Wrong-account access and an awkward sentence should not count as equivalent defects in the release decision.

### 2.3 Make the improvement process visible

The draft tells attendees to keep evaluating. Show the next step after a failure:

1. Inspect a failed case and its trace.
2. Decide whether the failure came from retrieval, policy, the tool, the model, or the grader.
3. Change the relevant component.
4. Rerun the case and the existing suite.
5. Compare the result with sampled production behavior.

This makes error analysis tangible. It also answers the likely audience question: “What does an AI engineer do on an ordinary Tuesday?”

### 2.4 Make your experience the emotional center

Story #2 should be the primary personal story. Give it a clear structure:

- What the system was supposed to do.
- What the existing checks said.
- What a user or a broader evaluation revealed.
- What you changed and how you checked the change.

Only include details you can truthfully share. Keep the placeholder until you supply them. If no suitable story is available, explicitly label the refund example as hypothetical and teach from it. Do not present a composite as a personal event.

Story #3 can then be a short reflection that refers back to the same lesson. Two unrelated personal stories near the end are less useful than one story whose conclusion changes the roadmap.

### 2.5 Start ownership with the product's purpose

The diagram leaves Goal without a “yours” badge because the user supplies it. That is visually reasonable, but the spoken explanation should still establish who defines acceptable goals, successful completion, and the agent's authority.

For the refund example, identify the user problem, the permitted action, and the evidence of success before choosing a model. Ask what improvement over the existing workflow would make the system worth operating. A cheaper model call is not the same as a better support outcome.

This also gives the human-centered part of the published description a practical expression. The engineer designs when the system asks for clarification, when it defers a decision, and how a person takes over with enough context to help. A handoff can be a successful designed outcome.

## 3. Add one brief audience decision

Instead of another statistic, let the audience consider one question:

> “The refund call timed out. Do you retry it?”

Pause briefly, then reveal the missing information: the first attempt may already have completed. This connects orchestration to state, tool design, verification, and observability in a familiar engineering problem.

Keep this within the orchestration beat. A long discussion belongs in the reserved question period.

## 4. Use fewer simultaneous lists

The builds generally keep individual states manageable, but the middle of the talk repeatedly becomes headings plus vocabulary. Slides 10, 12, 15, 18, and 21 are the main candidates for replacing a list with an example.

A screenshot, a short trace, a policy constraint, or a recorded outcome would vary the visual experience while doing real explanatory work. Decorative imagery would add less value here.

## 5. Keep the roadmap's useful detail

The rendered slide 23 omits the sublines under the four steps and keeps the small Hashimoto sequence. That removes the most actionable instruction: reviewing outputs by hand.

I would use that space for a visible first task:

> “First task: review 20 to 50 outputs and record the failures.”

Then name the artifact attendees should have afterward: a small set of cases with inputs, observed behavior, expected behavior, and a check. “Own the harness” should become something they can demonstrate.

## 6. A more concrete learning sequence

I would describe a first project through its outputs:

| Step | Deliverable |
| --- | --- |
| Choose one narrow task | A statement of the user need, allowed actions, and success criteria |
| Inspect outputs | A small collection of cases and observed failures |
| Build the simplest useful system | One call or a short workflow with inspectable inputs and results |
| Add checks | Direct assertions where possible and a documented rubric where judgment is needed |
| Measure changes | A comparison of quality, completion cost, latency, and consequential failures |
| Operate a limited pilot | Traces, a human fallback, and a way to recover or stop |

This could live in a handout or resource page, with only the first action and four main steps on slide 23. It gives attendees a credible learning project without suggesting they must implement every box on the diagram.

When adopting these changes, follow the [source synchronization guidance](apply-essential-corrections-2026-09-15.md#6-keep-the-source-layers-synchronized). Use the timing and cut priorities in [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md) to fit the example within the existing presentation budget.
