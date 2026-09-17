# Beyond the Coding Agent: From Software Engineer to AI Engineer

## Presentation outline, v2

**Session:** 50 minutes. Section 2 has a working range of 25:00 to 29:00. Section 1 has a 4:00 rehearsal target. Section 3 has a 4:10 reference. The 28:55 Section 2 rehearsal reference below is a cueing aid, not a new fixed budget. Discussion fills the remainder of the session.

**Date:** September 17, 2026.

**Audience:** software engineers who want to move into AI engineering. Most have used a coding agent. Few have shipped a system whose behavior depends on a model.

### Central thesis

Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.

AI engineering builds on a foundation of software engineering. This talk focuses on products around foundation models, with overlapping AI and ML roles. It adds the skills and practices needed to make systems useful, reliable, and trustworthy when part of their behavior is delegated to a foundation model. Agentic systems, where the model participates in control flow, are its most demanding expression.

The opening develops the engineering shift before naming the role. Engineers retain accountability for model-dependent behavior. They deliberately build in determinism, delegate selectively, and enforce permissions and execution limits outside the model. Repeatability and correctness are separate requirements.

### How to read this outline

- Each beat lists its time, the slide, what to say, the evidence, and a takeaway line. It is a talk-track outline, not a script.
- Sources are cited in short form. Full quotes, dates, URLs, and verification status are in `research/section-1.md`, `research/section-2.md`, and `research/section-3.md`.
- **[verify]** marks a claim to confirm in a browser before it goes on a slide.
- **[your story]** marks a slot for a first-hand example, with a note on what the story must show.
- **[you write]** marks content only the presenter can supply.
- Inside a "say" bullet, **bold text** marks a must-say line. Everything else in that bullet is backup for questions and can be cut in rehearsal.

### Structure and time budget

| Block | Rehearsal reference | Narrative slides |
|---|---|---|
| 1. Intro and central thesis | 4:00 | 1 through 8 |
| 2.0 The map and section orientation | 2:15 | 9 through 15 |
| 2.1 Model Selection | 4:30 | 16 through 20 |
| 2.2 Context Engineering | 4:30 | 21 through 25 |
| 2.3 Tools & Extensibility | 4:10 | 26 through 30 |
| 2.4 Orchestration | 3:55 | 31 through 35 |
| 2.5 Verification & Evals | 4:35 | 36 through 40 |
| 2.6 AgentOps | 4:10 | 41 through 45 |
| 2.7 Section wrap | 0:50 | 46 |
| 3. Making the transition | 4:10 | 47 through 53 |
| Additional resource references | 0:00 | 54 through 56 |
| 4. Questions and discussion | Remainder of the 50-minute session | none, slide 53 stays up |

Section 2 references sum to 28:55 within the agreed 25:00-to-29:00 range. With Section 1 at 4:00 and Section 3 at 4:10, the talk runs about 33:10 to 37:10. The rehearsal reference is 37:05. Discussion fills the remainder of the 50-minute session.

### The Section 2 pattern

Each area has five separately numbered static slides. The opening and closing anatomy diagrams remain standalone compositions.

1. **Quote.** The area's selected source and conceptual visual, before any explanation.
2. **Foundations: what it is and why it matters.** One combined screen with technical foundations and brief spoken connections to coding agents. Model Selection introduces inference, tokens, context limits, and reasoning settings. Context Engineering develops working context, memory, and authoritative records. Tools & Extensibility shows proposal, checked execution, and observation. Orchestration combines a controlled workflow with a bounded agent loop. Verification & Evals distinguishes one-result acceptance from behavior across cases and trials. AgentOps connects traces, versioned configuration, and outcome metrics across runs and releases.
3. **Key decisions and trade-offs.** The choices, consequences, and conditional starting guidance.
4. **Common challenges and pitfalls.** Continuing maintenance and one headline sentence that matches slide 50.
5. **FRB application.** A distinct application of those choices to the same illustrative system.

The six standalone user screens and all paired user/owner labels are removed. Codex CLI and Devin remain the named coding-agent anchors in the map narration. There are no screenshot walkthroughs. Verification & Evals has no personal story or 1:00 reservation. The final area is AgentOps. The FRB corpus's CUI/ECI requirements and older, less capable approved models are explicit illustrative deployment assumptions informed by presenter-supplied audience context. They are not universal model-performance claims.

The source of truth is this outline with `research/section-2.md`; the reviewed area files and spoken pass in `outlines/section-2-rework/` retain supporting authoring detail. Slide specs now cover narrative slides 1 through 56, including three untimed resource pages. The builder implements the same 56 authored compositions. Its expansion preserves 56 physical slides and 57 presentation states.

---

## Section 1. Intro and central thesis (4:00, 8 slides)

### 1.1 Title (0:05). Slide 1

- Slide: Beyond the Coding Agent. From Software Engineer to AI Engineer. Presenter name and role.
- Say: Welcome. A brief greeting, then introduce yourself on slide 2.
- Takeaway line: "Beyond the Coding Agent: From Software Engineer to AI Engineer."
- Sources: the published session title in the README.

### 1.2 Who is talking (0:30). Slide 2

Approved bio from slide 2, September 14, 2026. Stephen Sequenzia, Senior Staff AI/ML Engineer and Architect. No employer named.

1. Twenty years putting systems into production. The last several with a model in the loop.
2. Leads architecture for agentic AI systems across defense programs.
3. Has helped 500+ engineers adopt agents, and watched where using one stops and engineering one begins.

**[your story #1, optional here]** The moment a demo you built turned out not to be the product. It must show one concrete failure where a working path was not a working system. Thirty seconds. Retained as an optional presenter-authored slot, not part of this 4:00 rehearsal version. Including it requires a later timing change; the evals story reservation has been removed.

### 1.3 Agenda and goals (0:25). Slide 3

- Slide: the full agenda, with a smaller goals section beneath it. No visible times or teaching-pattern footer.
  1. What changes when AI becomes part of the product
  2. What AI engineers actually engineer: Model Selection, Context Engineering, Tools & Extensibility, Orchestration, Verification & Evals, AgentOps
  3. Making the transition: skills that transfer, new competencies, and where to start
  4. Questions and discussion
- Say: **First, what changes when AI becomes part of the product. Then the six engineering areas. Finally, making the transition and your questions.** You will leave with a map of the engineering responsibilities, an understanding of what production readiness requires, and a starting point for your own transition.
- Takeaway line: "A map of the responsibilities, an understanding of production readiness, and a starting point for your transition."
- Sources: the published session description in the README.

### 1.4 Section 1 divider (0:10). Slide 4

- Slide: Section 1. What changes when AI becomes part of the product.
- Say: Let the section title sit, then advance to the comparison of deterministic logic and model behavior. No additional explanation.
- Takeaway line: "What changes when AI becomes part of the product."
- Sources: the published session description in the README.

### 1.5 Deterministic logic and model behavior (0:55). Slide 5

- Slide: one static, editable comparison.

  | Deterministic logic | Model behavior |
  |---|---|
  | Explicit rules implemented in code | Learned behavior guided by instructions and context |
  | Same input and state produce the same result | Same supplied input can produce different results |

- Say:
  - Deterministic logic follows the rules we specify. A foundation model contributes learned behavior guided by instructions and context. It handles language and ambiguity without requiring every rule to be spelled out, but the same supplied input can produce different results. **An instruction is not an enforced constraint.**
  - Software already deals with uncertainty. Here, part of the product's behavior depends on the model. Using AI to help write software changes how you build. **Putting AI inside the product changes the behavior you are responsible for.**
- Takeaway line: "Putting AI inside the product changes the behavior you are responsible for."
- Sources: Aizawa, Anthropic, September 2025; Willison, March and October 2025. Research §2. OWASP, 2025, Research §5. The deterministic comparison concerns logic with fixed inputs and state, not all software systems.

### 1.6 Reliability with a model in the loop (0:45). Slide 6

- Slide: three static rows. Correctness: A valid response can still be wrong. Consistency: One successful run does not establish reliability. Actions: Model choices can affect subsequent steps.
- Say:
  - A response can look valid and still be wrong. A successful attempt does not establish consistent behavior across intended use. **Consistency alone is not correctness. A model can repeat the same mistake.**
  - An agent can select tools and influence subsequent steps. Errors can affect later steps. **A compelling prototype is not evidence of production readiness.**
- Takeaway line: "Consistency alone is not correctness."
- Sources: Anthropic, January 2026, Research §3; Anthropic, December 2024, Research §5. Correctness versus repeatability is the conceptual synthesis in Research §2. The production-readiness commitment restates the published description.

### 1.7 Engineering the system around the model (1:00). Slide 7

- Slide: three static responsibility rows. Build in determinism: Explicit logic and required workflow steps. Enforce boundaries: Permissions and execution limits outside the model. Evaluate behavior: Outcomes across cases, repeated runs, and production use.
- Say:
  - **Good AI engineers look for places to make behavior deterministic. Adding AI does not mean delegating the whole system to it.** Use model judgment where it helps. Put calculations and required workflow steps in code when explicitly specifiable. Enforce permissions and limits outside the model.
  - Define acceptable results. Keep software tests and add evaluations across representative cases and repeated runs. Continue evaluating after deployment. Design stopping and human handoff when the system cannot meet the requirement.
  - This talk focuses on products around foundation models. ML engineering often focuses on models and training pipelines; the roles overlap. Software engineering skills remain the foundation.
  - **You are still responsible for the product's behavior, even when you no longer write all the rules that produce it.**
- Takeaway line: "You are still responsible for the product's behavior, even when you no longer write all the rules that produce it."
- Sources: CMU SEI; Huyen, 2025, Research §1; Anthropic, January 2026, Research §3; Anthropic, December 2024, and OWASP, 2025, Research §5. Selective delegation and building in determinism are the presenter's engineering synthesis of those sources. The software-testing and continuing-evaluation commitments preserve the published description.

### 1.8 Section 2 transition (0:10). Slide 8

- Slide: Section 2. What AI engineers actually engineer.
- Say: **"Let's look at the system around the model, and where these responsibilities live."**
- Takeaway line: "Let's look at the system around the model, and where these responsibilities live."
- Sources: the Section 2 responsibility map.

### Section 1 checks

- Time: 0:05 + 0:30 + 0:25 + 0:10 + 0:55 + 0:45 + 1:00 + 0:10 = 4:00. Slides 5 through 8 total 2:50. These are rehearsal targets, not measured delivery times.
- Narrative slides: 1 through 8. Title, bio, agenda, Section 1 divider, deterministic logic and model behavior, reliability, engineering responsibilities, Section 2 divider. Eight physical slides, all static.
- Description scope covered: using vs engineering (1.5 and 1.7); distinct discipline and AI versus ML roles (1.7); agentic systems and compounded consequences (1.6); production readiness, ordinary tests plus evals, and continuing evaluation (1.6 and 1.7); learning goals and full agenda (1.3). Selective delegation, deterministic logic, enforced boundaries, and retained accountability are explicit.
- Verify before stage: no Section 1 quote is flagged. Full list in `research/section-1.md`.

---

## Section 2. What AI engineers actually engineer (25:00 to 29:00, 38 narrative slides)

The rehearsal reference is 28:55. Five static slides per area follow the opening map and section orientation, then a standalone closing map. The individual references below guide notes and rehearsal; they do not replace the selected range.

### 2.0 The map and section orientation (2:15 reference). Slides 9 through 15

- Slide: six static anatomy maps: 9 full map (0:15), 10 Model (0:12), 11 Harness (0:25), 12 per-run services (0:13), 13 across-run services (0:15), 14 full map return (0:10). Slide 15 is the section orientation (0:45). Each map has its own narrative number and talk track.
- Say, opening map: Follow one task from its goal. **The agent combines a model with the execution system around it, the harness.** The surrounding services support that work.
- Say, model: The model interprets the goal using supplied context, then proposes an answer or selects a tool. That choice feeds the next step.
- Say, harness: **The harness carries the work forward.** It supplies instructions and context, executes permitted tool calls, returns results, preserves state, handles failures, and checks the work. Continue until a stopping condition or human handoff.
- Say, per-run services: Identity, permitted data access, and security controls determine the information and capabilities available during the task.
- Say, across-run services: Observability supports investigation. Evaluations assess behavior across cases. Governance establishes policies and accountability as the system changes.
- Say, full map return: Connect briefly to Codex CLI and Devin. **Everything around the model is engineering work.** Introduce six connected areas.
- Say, orientation: Each area opens with a quote, then covers foundations, decisions and trade-offs, challenges and pitfalls, and an FRB application. **Foundations explain what it is and why it matters.** For the example, Failure Review Board records describe a failure and the board's discussions and decisions. **We will apply each area to the same invented research-and-drafting system:** summarize a pump shutdown review, compare related cases, and export a cited brief. **People retain authority over official causes, decisions, and board records.** Keep the detailed evidence problem and deployment constraints for the area applications.
- Takeaway line: "Everything around the model is engineering work."
- Sources: Osmani, April 2026; OpenAI, August 2026; illustrative FRB packet and teaching rationale. Research §0.

### 2.1 Model Selection (4:30 reference). Slides 16 through 20

- Slide: 16 quote (0:25), 17 primer and responsibility (1:05), 18 decisions (1:05), 19 pitfalls (0:30), 20 FRB application (1:25).
- Say, quote: Use the selected Anthropic workload-ranking quotation. **Compare eligible models on representative tasks, including quality, cost, and latency.** Include model settings in the comparison, then introduce the model invocation. Research §1.
- Say, primer: Model selection includes choosing a model version and its settings. **Inference means running a trained model on that input to obtain an output.** Show instructions, request, evidence, and tool definitions entering one invocation, followed by a response or proposed tool call. The application handles execution. Explain tokens as units that help track usage. Context limits constrain input and output capacity, with model-specific accounting for reasoning. **Treat reasoning effort as part of the configuration you evaluate.** Measure task benefit against cost and delay, then compare eligible configurations on representative work. Research §1.
- Say, decisions: Identify configurations eligible for the data and intended use. Required capabilities and hard cost or response-time limits can exclude options. Define an acceptable result. **Compare candidates on the same representative tasks, using the context, tools, and workflow you intend to deploy.** Record the model version and settings. Measure how often results meet the criteria, completion time, and total cost, including tool calls, retries, verification, human review, and failed attempts. **Choose among configurations that meet the quality requirement.** Compare time and cost against product priorities. Start with one configuration and add routing when measurements justify the complexity. Pinned versions need a migration plan. Moving aliases need regression monitoring. Both need ongoing task checks. Research §1.
- Say, pitfalls: A larger context window establishes what fits, not answer quality. Higher reasoning effort needs a measured task benefit. Token price leaves out the rest of the task. **Selecting or changing models without testing them on your task** is the headline pitfall. Inspect supplied evidence and workflow before replacing a model after a failure. Research §1.
- Say, application: Assume the FRB corpus includes CUI/ECI and approved options are older and less capable for the intended synthesis. Evaluate one eligible configuration on summaries and cross-case synthesis. Test the failure of promoting possible bearing wear to a confirmed cause. Inspect the supplied evidence before attributing failure to the model. A compact scorecard records evidence to collect for quality, time, and total cost. If the full brief fails evaluation, test narrower scope or human reconciliation. **Keep the evidence requirement and approved processing boundary.** No scores or winning model are claimed. Research §0 and §1.
- Pitfall: Selecting or changing models without testing them on your task.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Sources: Anthropic model optimization guidance, checked September 2026; Osmani, April 2026; OpenAI concepts, context, reasoning, and selection guidance, checked September 2026; NARA, May and August 2025; NIST, May 2024; Anthropic and OpenAI lifecycle guidance; presenter audience context, September 2026; illustrative FRB application. Research §0 and §1 in `research/section-2.md`.

### 2.2 Context Engineering (4:30 reference). Slides 21 through 25

- Slide: 21 quote (0:20), 22 foundations (1:00), 23 context decisions (1:10), 24 pitfalls (0:45), 25 FRB application (1:15). Slides 22 through 24 have approved copy and scripts.
- Say, quote: Use the selected Anthropic finite-context quotation. **Our job is to decide what belongs in that call.** Choose what to bring forward, what to retrieve, and what to leave out. No universal context-size threshold is claimed. Research §2.
- Say, foundations: **Context Engineering manages the information available to the model at every inference turn.** Show common input categories: instructions, current request, examples, retrieved evidence, history and task state, selected memory, tool definitions, and tool results. Tool definitions describe operations and arguments; tool results contain returned observations. Stored memory and source documents contribute selected information to the working context. A generated summary still needs supporting sources. Briefly connect to repository instructions, relevant files, and test output. **The system must manage this input before every model call, including the next call after a tool result.** Research §2.
- Say, decisions: **Before each call, decide what this step needs.** Preload essentials and retrieve additional evidence when needed. RAG retrieves information and supplies it as evidence for generation. Briefly compare keyword search with semantic similarity using numerical representations called embeddings; hybrid combines both. Select which results enter the input, retain source references, and enforce access before inclusion. Distinguish instructions from evidence and **test where key information works best.** Refresh stale information, remove irrelevant material, and check that compaction preserves constraints and unresolved work. **Subagents can handle focused tasks in separate contexts.** Choose what each receives and have it return findings with sources, keeping detailed exploration local. More detail consumes context; summaries and handoffs can lose information. Research §2.
- Say, pitfalls: **Adding context without curating it.** Irrelevant material can distract from the task, and relevant evidence can be overlooked depending on placement. **Context rot means reliability can decline as the input grows, even before the window is full.** Distinguish that from information becoming outdated. Retrieval can miss evidence; summaries and subagent handoffs can lose constraints or uncertainty. Retained information needs freshness checks. **Check the actual input for this call, including what is missing and what no longer belongs.** Research §2.
- Say, application: Keep the preliminary FRB-042-BRF r1 slide 6 and later FRB-042-MIN r2 §3 paragraph 2 as different documents. **Suppose retrieval misses the later minutes, so their decisive passage never reaches the model.** Check source availability, retrieval results, and assembled input to locate the loss. The expected input includes both passages with their identities. **Retain the unresolved cause and outstanding inspection.** Refresh revisions and access; unavailable evidence remains an explicit limitation. Context preparation inherits the approved processing scope. Research §0 and §2.
- Pitfall: Adding context without curating it.
- Takeaway line: "Context is a budget, not a bucket."
- Sources: Anthropic, September 2024 and September 2025, primer passages rechecked September 2026; Liu et al., February 2024, and Chroma, July 2025, checked September 2026; Manus, July 2025; OWASP, 2025; illustrative FRB application. Research §0 and §2 in `research/section-2.md`.

### 2.3 Tools & Extensibility (4:10 reference). Slides 26 through 30

- Slide: 26 quote (0:20), 27 foundations (1:00), 28 design and extension decisions (1:05), 29 pitfalls (0:40), 30 FRB application (1:05). Slides 27 through 29 have approved copy and scripts; their combined time remains 2:45.
- Say, quote: Use the selected Anthropic tools quotation. Design an operation the agent can request, understand, and use. **We own that interface, and the software that checks and carries out the request.** Research §3.
- Say, foundations: **Tools are the primary way we give an agent capabilities beyond generating a response.** Tools retrieve current information, run computations, and act on external systems. The model receives tool descriptions and inputs, selects a tool, and supplies arguments. **Software checks the request and executes the permitted operation.** The result informs the next step. MCP, the Model Context Protocol, provides a standard interface for connecting AI applications to external tools and context. A server exposes capabilities; the application discovers and calls them through a client. Use a hypothetical issue-tracker server with search and ticket-creation tools. Software controls what the agent may do. Research §3.
- Say, decisions: **Start with the task the agent needs to perform.** Small operations provide flexible building blocks but need more coordination. Task-oriented tools handle more work internally and embed more assumptions. MCP supplies standard discovery and tool calls. Existing CLIs expose commands through a shell or execution tool; consider their operations and interpretable output. **Code mode means the agent writes code that calls tools.** It can call MCP tools, loop over results, and filter data before returning selected information. This can reduce model round trips and intermediate context, while requiring a controlled execution environment. Enforce permissions and validate inputs in software. Evaluate the choices on real tasks. Research §3.
- Say, pitfalls: **Copying APIs without evaluating task fit.** A correct operation can still be difficult for an agent to use. Similar tools confuse selection; description drift can cause incorrect calls. Test whether the agent chooses and uses the right operation. MCP, CLI access, and code mode all need explicit permission boundaries. **Give the agent only the authority its task requires.** Distinguish confirmed completion, known failure, and uncertainty. A timeout may leave completion unknown. **The result should make that uncertainty explicit.** Research §3.
- Say, application: Export cited brief requires the checked draft, citations, and a permitted destination. **Suppose the proposed destination is outside the approved scope.** The expected result is rejection before transfer. Check both a clear rejection reason and the absence of an export at that destination. **Verification must apply to the exact exported content.** A permitted export preserves wording, citations, and uncertainty and returns a matching receipt. Keep rejection distinct from an unknown execution outcome. Research §0 and §3.
- Pitfall: Copying APIs without evaluating task fit.
- Takeaway line: "A description guides the model. Code enforces the contract."
- Sources: Anthropic, September and November 2025, and bash-tool documentation checked September 2026; MCP, July 2026, rechecked September 2026; OWASP, 2025; illustrative FRB contract. Research §0 and §3 in `research/section-2.md`.

### 2.4 Orchestration (3:55 reference). Slides 31 through 35

- Slide: 31 quote (0:20), 32 workflow and agent-loop foundations (1:00), 33 execution decisions (1:00), 34 pitfalls (0:25), 35 FRB recovery application (1:10).
- Say, quote: Use the selected Anthropic simplicity quotation. Start with the steps the task requires. **Decide where a fixed sequence is enough and where the model needs to choose what happens next.** Add complexity when the task justifies it. Research §4.
- Say, foundations: **Orchestration controls how work progresses.** Code defines workflow stages and permitted transitions; in an agent loop, the model chooses its next action from observed results. **A workflow can use a model without giving it control of execution.** Contrast a predefined collect/summarize/check sequence for failed test logs with an investigation that selects files or tests as evidence arrives. A bounded loop can sit inside a workflow stage. Code enforces permissions, required checks, and stopping limits. **Before choosing either design, ask: "Is intelligence needed for this task?"** Then ask whether the model needs to choose the next action. Research §4.
- Say, decisions: **Is intelligence needed for this task?** If explicit rules can produce an acceptable result, start with a script or workflow. If model judgment helps, decide whether the model needs to choose the next step. Known sequences can retain predefined execution; an unfamiliar failure may benefit from adaptive investigation. **Autonomy must earn its place.** Compare representative task quality against time, total cost, and operational complexity, including retries and human review. A checkpoint saves state for resumption. Required checks and stopping limits belong in code. Establish an external action's outcome before retrying; pause or hand off if it remains unknown. Research §4.
- Say, pitfalls: **Adding multiple agents before trying a workflow** is the headline pitfall. The same mistake can start with one unnecessary agent. **Added autonomy needs demonstrated value.** A proposed plan does not enforce required checks, and repeated activity does not establish progress. **A timeout does not establish failure.** Check the action's outcome before retrying; pause or hand off if it remains unknown. Research §4.
- Say, application: This is a separate permitted export of the exact checked draft. Suppose the service creates the brief but the caller receives no response. **Record outcome unknown and check export state before deciding whether to retry.** The operation reference connects the intended export to its receipt and artifact. Define idempotency briefly: retries of the same intended operation do not duplicate effects, when the service implements that contract. If the outcome remains uncertain, pause or hand off. Recheck source freshness and permissions on resume; a changed draft needs renewed verification. A work limit does not establish completion. Research §0, §3, and §4.
- Pitfall: Adding multiple agents before trying a workflow.
- Takeaway line: "The loop is where autonomy gets its limits. Start with the workflow."
- Sources: Anthropic, December 2024, June and November 2025; LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026; 12-Factor Agents; illustrative FRB workflow and recovery case. Research §0 and §4 in `research/section-2.md`.

### 2.5 Verification & Evals (4:35 reference). Slides 36 through 40

- Slide: 36 quote (0:20), 37 foundations (1:00), 38 evaluation design (1:15), 39 pitfalls (0:40), 40 FRB application (1:20).
- Say, quote: Use the selected Husain measurement question, attributed to him alone. Recap models, context, tools, and workflow. **Now we need evidence that the whole system does what we intend.** Research §5.
- Say, foundations: Verification checks a particular result or action. Evaluation measures how reliably requirements are met across cases and repeated attempts. Define case, trial, and grader through a coding-agent example. The same checks can support both uses. **We work with subject matter experts to build golden datasets:** curated cases with reviewed reference answers, expected behavior, and criteria for quality. **Ordinary software tests still matter**, including required constraints and actual action completion. Presenter-supplied context, September 2026; Anthropic, January 2026. Research §5.
- Say, decisions: Define success with SMEs, including required outcomes, quality criteria, forbidden actions, and acceptable limitations. Golden datasets capture reference answers, expected behavior, and grading criteria. Some tasks allow several valid answers. Compare code checks, expert judgment, and calibrated model graders. **The grader also needs evaluation.** Use golden datasets alongside known failures and adversarial cases. Reserve held-out cases from routine tuning, repeat trials where behavior varies, and inspect results by category. Presenter-supplied context, September 2026; Anthropic, January 2026; OpenAI guidance, checked September 2026. Research §5.
- Say, pitfalls: Check actual outcomes and grader disagreements. **Golden datasets are valuable references, but human curation can introduce errors and bias.** They can miss important cases. Use them alongside direct checks and review of real runs. Inspect the result, trace, and reference data before choosing a repair. The system, grader, or expected answer may need correction. Add failures from real use. **Evaluation continues after deployment and after model or harness changes.** Hardy, November 2024; Gardner et al., April 2020, revised October 2020; Anthropic, January 2026. Research §5.
- Say, application: The invented answer claims the board confirmed bearing wear and cites FRB-042-MIN r2 §3 paragraph 2. The reference exists, but the minutes leave the cause unresolved and require inspection. **Reference PASS; source-support FAIL.** Use an authorized expert or suitable expert-calibrated model grader within the approved scope. Prevent export of the failing draft, verify corrected content, and retain the failure as one regression case. Inspect the trace before selecting a repair, then rerun relevant cases and repeated trials. Research §0 and §5.
- Pitfall: Using a generic judge without error analysis or result checks.
- Takeaway line: "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."
- Sources: Husain, March 2025; Husain and Shankar, September 2026; Anthropic, January 2026, rechecked September 2026; OpenAI evaluation-method guidance, checked September 2026; Hardy, November 2024; Gardner et al., April 2020, revised October 2020; Shankar et al., UIST 2024; presenter-supplied SME context, September 2026; illustrative FRB checks. Research §0 and §5 in `research/section-2.md`. Reliability notation stays in backup.

### 2.6 AgentOps (4:10 reference). Slides 41 through 45

- Slide: 41 quote (0:25), 42 foundations (0:55), 43 decisions (1:00), 44 pitfalls (0:45), 45 FRB application (1:05).
- Say, quote: Use Rauch's selected quotation, attributed to him and published by Datadog. It is a perspective, not a measured prediction. Once people depend on the system, **we need to see what happened, recognize when behavior changes, and know who responds.** That responsibility continues as models, data, and tools change. Research §6.
- Say, foundations: **AgentOps means operating an agentic system across many runs and releases.** Connect its behavior to the configuration in use. A trace records observable operations during a task; each recorded operation is a span, not private model reasoning. Record the configuration behind each run. Changes to prompts, models, or retrieval can affect behavior without an application-code change. Measure task success, time, cost, and human review, recognizing sampled or delayed quality judgments. **Healthy APIs alone do not establish task success.** Keep SLOs and error budgets in backup. Research §6.
- Say, decisions: Link each outcome to its trace and configuration. **Keep enough evidence to investigate**, while limiting sensitive content and controlling access and retention. Evaluate changes, then release to a limited group and compare similar tasks against the current tested configuration. Define pause and rollback conditions. Limited exposure reduces impact but can take longer to reveal failures. **Enforce permissions, allowed destinations, and resource limits outside the model.** Route failed checks, exhausted budgets, and uncertain outcomes to someone authorized to act. **Rolling back a configuration does not undo completed actions.** Review those separately. Research §3 and §6.
- Say, pitfalls: For this audience, sensitive data includes **CUI/ECI**. Review where it goes, including prompts, tool calls, and traces. Willison describes how private data, malicious instructions in untrusted content, and outbound access can combine into a path for data theft. **The pitfall is combining private data, untrusted content, and outbound access without reviewing the risk.** Review integrations together and enforce approved processing, access, and destinations outside the model. **A probabilistic filter is insufficient as the sole security boundary.** This is one threat model, not a complete security assessment. Research §1, §3, and §6.
- Say, application: In the illustrative release incident, an approved model/configuration update increases unsupported drafts and review work while APIs stay healthy. **The source-support gate still blocks failing drafts from export.** The assigned operator pauses the rollout, compares similar tasks by configuration, and inspects protected traces and revisions. The association starts investigation, not proof of root cause. Restore a tested compatible configuration when indicated, preserving approved scope. Review pending work and completed effects, add failure variants to existing regression coverage, and monitor recovery. The operating agreement remains supporting material. **People retain responsibility for official causes, decisions, and board records.**
- Pitfall: Combining private data, untrusted content, and outbound access without reviewing the risk.
- Takeaway line: "The system needs evidence of its behavior and people accountable for responding."
- Sources: Rauch in Datadog, 2026; Willison, June 2025; OWASP, 2025 and 2026; NARA and NIST data-handling guidance checked September 2026; presenter-supplied CUI/ECI audience context, September 2026; OpenTelemetry and Google SRE guidance checked September 2026; illustrative FRB release incident and operating agreement. Research §0, §1, §3, §5, and §6 in `research/section-2.md`.

### 2.7 Section wrap (0:50 reference). Slide 46

- Slide: "Six connected engineering areas." Familiar anatomy with the six area colors and a compact two-row area key. No ownership badges. Preserve the component labels and neutral goal, stopping condition, and connectors.
- Say: **These are six connected engineering areas within one system.** Consider a model change. The same task may produce different tool choices or use context differently, affecting how the harness carries the work forward. Check individual actions and evaluate the changed configuration on representative tasks. Monitor outcomes and investigate failures after release. Enforce permissions and execution limits outside the model. **AI engineering means designing and operating how these parts work together.** Bridge into the skills that help engineers do that.
- Takeaway line: "AI engineering means designing and operating how these parts work together."
- Sources: existing model-configuration, context, tools, orchestration, verification, and AgentOps evidence. Research §0 through §6.

### Section 2 checks

- Reference time: (1:30 + 0:45) + 4:30 + 4:30 + 4:10 + 3:55 + 4:35 + 4:10 + 0:50 = 28:55. Working range: 25:00 to 29:00.
- Narrative slides: 9 through 46, thirty-eight slides. Each five-slide area is separately numbered. The opening map has six independently numbered static slides. Every Section 2 composition is static. Section 2 physical count: 38.
- Description scope: context engineering and retrieval (2.2); tools and extensibility (2.3); harness design (2.0 and all six areas); orchestration (2.4); verification and evals (2.5); observability, guardrails, identity, security, governance (2.6, with boundary decisions in 2.1 through 2.4); cost and latency (2.1, 2.2, 2.4, 2.6). Prototype readiness, tests remaining necessary, and ongoing evaluation are explicit in 2.5 and 2.6.
- Structure: quote first; combined definition and importance with technical foundations in all six areas; decisions and trade-offs; common challenges and exact headline pitfall; separate FRB application. No user/owner pairing, screenshot walkthrough, or evals personal-story reservation. The recap is slide 50. Verification & Evals keeps reliability formulas in backup. AgentOps keeps SLOs and error budgets in backup.
- Evidence: FRB records, checks, and deployment constraints are illustrative. CUI/ECI eligibility is a hard constraint in the example. Older, less capable approved choices reflect presenter context and are not a universal model ranking. Citation existence differs from semantic support. No measured FRB scores or deployed outcome is claimed. Backup research retains its verification limitations.

---

## Section 3. Making the transition (4:10, 7 timed slides and 3 untimed resource pages)

### 3.0 Transition (0:10). Slide 47

- Slide: Section 3. Making the transition. Matching typographic divider after the six-area anatomy recap.
- Say: **Now let's focus on your transition: the skills you bring, the new competencies, and a practical place to start.**
- Takeaway line: "Your existing skills give you a foundation to build on."
- Sources: the Section 2 synthesis and the mapping in 3.1. Research §1.

### 3.1 What transfers (1:05). Slide 48

- Slide: one static screen with two columns. Left, the existing skill. Right, its application in an AI system: bounded workflows and clear state; tool contracts and explicit outcomes; evals and regression cases; traces of model calls and tool actions; enforced access and action limits; quality, cost, latency, and recovery.
- Say:
  - **Your engineering habits give you a foundation.** Decomposition helps you define a bounded workflow and the state it carries.
  - Interface design helps you specify tool inputs, errors, and evidence of completion.
  - **Testing discipline extends to evals and regression cases.** Ordinary software tests remain necessary.
  - Debugging and observability help you follow model calls and tool actions to investigate a failure.
  - Least privilege guides access and action limits. Code enforces those boundaries.
  - Production operations brings monitoring, incident response, and recovery. Track quality alongside cost and latency.
  - **You are learning how to apply these skills to model-dependent behavior.**
- Takeaway line: "Your engineering habits give you a foundation for model-dependent systems."
- Sources: the talk's skill mapping in Research §1 of `research/section-3.md`, grounded in Section 2 Research §3 through §6.

### 3.2 What you add (1:15). Slide 49

- Slide: one static screen titled What you add. Six unranked rows pair the Section 2 areas with their model-specific competencies.
- Say:
  - **The added work is understanding and controlling model-dependent behavior.** Read failures and compare models on the intended task.
  - Select useful evidence and preserve qualifications through retrieval and summarization.
  - Evaluate how the model selects and uses tools. A valid argument shape does not establish a correct choice or successful action.
  - Bound model-selected actions and define stopping, recovery, and handoff.
  - **Define quality with domain experts and measure behavior across representative cases and repeated trials.** Inspect failures before choosing a repair.
  - Investigate quality changes. Address prompt injection and enforced permissions alongside cost per completed task and end-to-end latency.
- Takeaway line: "Learn to measure and control model-dependent behavior."
- Sources: the competency synthesis in Research §2 of `research/section-3.md`, grounded in Section 2 Research §1 through §6.

### 3.3 The pitfalls, on one slide (0:35). Slide 50

- Slide: six lines, one per area, no other text.
  1. Model Selection: Selecting or changing models without testing them on your task.
  2. Context Engineering: Adding context without curating it.
  3. Tools & Extensibility: Copying APIs without evaluating task fit.
  4. Orchestration: Adding multiple agents before trying a workflow.
  5. Verification & Evals: Using a generic judge without error analysis or result checks.
  6. AgentOps: Combining private data, untrusted content, and outbound access without reviewing the risk.
- Say:
  - You have seen each of these in the system we walked through. **Use them to guide what you inspect in your own system.**
  - Model and tool choices need task evidence. Context needs curation. More autonomy needs checks and limits. Inspect failures and review the capabilities your integrations combine.
  - **A practical first step is to examine outputs, record a failure, and define the check that would catch it.** The roadmap makes that practical path concrete.
- Takeaway line: "Use these pitfalls to guide your first checks."
- Sources: Section 2 Research §1 through §6; recap synthesis in Section 3 Research §3 and learning sequence in §4.

### 3.4 The roadmap (0:35). Slide 51

- Slide: four steps.
  1. Choose one narrow task.
  2. Start with one model call.
  3. Turn failures into checks.
  4. Add autonomy when evals justify it.
- Say:
  - **Choose one narrow task**, such as summarizing a document with citations.
  - **Start with one model call** and examples you can inspect. If you already have an AI feature, use its outputs for the chosen task.
  - **Turn failures into checks.** Inspect the result, repair the cause, and rerun the cases.
  - **Add autonomy when evals justify it.** Keep actions bounded and verify the result. A workflow or loop is a design to evaluate when the task needs it.

- Takeaway line: "Autonomy is earned by evals, one step at a time."
- Sources: Husain, evals FAQ; Anthropic, December 2024; learning-sequence synthesis in Research §4. OpenAI's guide and Hashimoto's adoption arc remain supporting research.

### 3.5 Close and resources (0:30). Slides 52 and 53, with untimed references 54 through 56

**Slide 52, close.** The two thesis sentences, then "Questions."

- Say: Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer. The difference is not the tools. It is what you are responsible for. Let’s use the remaining time for your questions.
- Sources: research §4.

**Slide 53, Resources: Core learning path.** Shown, not discussed. Time 0:08 of the close's 0:30; slide 52 takes 0:22.

- Chip Huyen, *AI Engineering*. Book and supplements. Application design decisions across the discipline.
- Andrew Ng / DeepLearning.AI, *Agentic AI*. Course. Implement agentic workflow patterns in Python.
- DataTalks.Club, LLM Zoomcamp. Course and project. Build a substantial retrieval-based application.
- Hamel Husain and Shreya Shankar, AI Evals Guides. Written guides. Inspect failures and measure improvements while building.
- Visible learning guidance: Apply evaluation while building your project.
- Say: Resources are in the deck. Apply evaluation while building your project.
- Takeaway line: "Apply evaluation while building your project."
- Sources: Huyen; Ng / DeepLearning.AI; DataTalks.Club; Husain and Shankar. Official materials checked September 2026. Research §6.

**Slides 54 through 56, additional Resources.** Three static reference pages. Scheduled time 0:00. Available in the shared deck and for optional browsing during discussion. Titles and readable URLs link directly to the official resources. No rankings, prices, durations, cohort dates, or certification claims.

- Slide 54, Building and operating systems: Anthropic Engineering, articles on agent architecture, context, and reliability; Goku Mohandas / Anyscale, Made With ML, course and code on production ML testing, deployment, and monitoring; LangChain Academy, courses on stateful agents with LangGraph; Hugging Face AI Agents Course, agent mechanics and framework practice; OpenAI Cookbook, code examples for implementing OpenAI applications.
- Slide 55, Model knowledge: Hugging Face LLM Course, open models, datasets, and fine-tuning; Alammar and Grootendorst, *Hands-On Large Language Models*, visual explanations and practical notebooks; Karpathy, *Neural Networks: Zero to Hero*, model internals through coding. Label this optional depth for work closer to models and data.
- Slide 56, Continuing education: AI Engineer and Latent Space, swyx and collaborators, practitioner talks, workshops, and interviews, with separate destinations; Simon Willison's Weblog, experiments, tools, and application security; Dwarkesh Patel, Dwarkesh Podcast and Substack, frontier research discussions and perspectives. Label this supplementary learning alongside a project.
- Say: No scheduled narration. Browse only when useful to a question, then return to slide 53.
- Takeaway line: "Choose additional material when your project needs it."
- Sources: the listed authors and organizations, official materials checked September 2026. Research §6, adapting the supplied external training-resource guide.

Slide 53 stays visible during questions and discussion. The older OpenAI agent guide, standards, and forthcoming evals book remain in research only. The approved learning-resource selection supersedes the earlier vendor-course exclusion for this reference section.

### Section 3 checks

- Time: 0:10 + 1:05 + 1:15 + 0:35 + 0:35 + 0:30 = 4:10.
- Slides: 47 through 53 are timed. Slides 54 through 56 are untimed references. Deck: 56 narrative slides and 56 authored compositions produce 56 physical slides, 57 states, one internal click, no Morph transitions, and 56 advances across the complete deck.
- Description scope, with beat numbers: which existing skills provide a strong foundation (3.1); what additional competencies the discipline demands (3.2); where to focus further learning (3.4, 3.5); a roadmap (3.4).
- Evidence status: competencies are unranked learning objectives grounded in Section 2's engineering decisions. Dice publisher figures are optional Q&A context; the LinkedIn ranking is secondary reporting.

---

## Section 4. Questions and discussion (remaining session time, Slide 53 stays up)

### Anticipated questions, with two-line answers

1. **Do I need to learn machine learning first?** You can begin without training a model. Learn enough about model behavior, retrieval, evaluation, and uncertainty to investigate failures.
2. **Which framework should I learn?** Build or inspect a small loop whose state and tool calls you understand. Choose abstractions you can observe, test, and replace.
3. **How are evals different from tests, concretely?** Evals are tests that measure AI behavior across cases and repeated trials. Code checks, model graders, and human review can all contribute. Capability suites probe limits; regression suites should keep established cases passing. Inside and outside the loop are this talk's organizing model.
4. **Is prompt injection solved?** Investigate the specific attack path: untrusted content influencing actions, private data access, or external communication. Enforce access and action limits outside the model. Breaking an exfiltration path does not solve every security threat.
5. **Single agent or multi-agent?** Start with a simple call or workflow and measure whether more autonomy helps. Use task decomposition and observed gains to decide. Anthropic's historical 90.2% quality gain compared research systems; its roughly 15x token comparison was against chat, not the single-agent research baseline.
6. **What about cost at scale?** Measure cost per completed task at the required quality, including failures, judge overhead, and tail latency. Test caching and routing on your traffic, preserve useful stable prefixes, and enforce token and action budgets. Correctness and authorization take precedence over cache savings.
7. **Will better models absorb the harness and make this obsolete?** My judgment is that some mechanisms will simplify, but the future architecture is uncertain. The product still needs explicit permissions, integration, measurement, and accountable operation.
8. **How do I get hired as an AI engineer?** Demonstrate a small system, its failure cases, its evals, and improvements justified by evidence. Show that you can investigate failures and operate within clear limits. Hiring figures are optional backup context, not the evidence of your competence.
9. **How do I trust the judge?** Use direct checks where possible. Calibrate subjective graders against domain experts, review disagreements, and evaluate on separate data that was not used to tune the judge. Recheck calibration as tasks and models change.
10. **How much accuracy is enough to ship?** Set a requirement for the use case and failure severity. Measure under expected operating conditions, examine serious failure cases separately, and design human fallback and safe failure handling. There is no universal threshold.

**Optional hiring backup:** Dice reported AI/ML postings up 101% year over year in August 2026 versus 18% for all tech postings. The publisher page was checked September 14. Dice also reported LinkedIn's #1 AI Engineer ranking; that is secondary evidence. Research §1 in `research/section-3.md`.

### Seeded discussion prompts, if the room is quiet

1. "Who here has shipped something where the model chose the control flow? What broke first?"
2. "What did your coding agent do for you this week that you would have to build yourself?"
3. "Where does your organization's AI project sit right now: pilot, workflow, or agent? What would it take to move it one step?"

### Section 4 checks

- Every answer traces to a Section 2 beat or a research entry.
- Evidence status: answers distinguish measured findings from advice and architectural judgment. Dice figures remain attributed backup; the LinkedIn primary ranking was not reached.

---

## Before the stage

### Whole-talk checks

- Time: Section 1 has a 4:00 rehearsal target. Section 2 stays in its 25:00-to-29:00 range, with a 28:55 rehearsal reference. Section 3 is 4:10. The current references imply 33:10 to 37:10 of presentation; discussion fills the remainder of the 50-minute session.
- Deck: 56 narrative slides, eight in Section 1, thirty-eight in Section 2, and ten in Section 3, including three untimed resource pages. Each narrative slide has one authored composition. Expansion preserves 56 physical slides, 57 states, one internal click, no Morph transitions, and 56 advances across the complete deck. The live sequence holds on slide 53 after 53 advances.
- FRB acceptance: a suspected cause never becomes a confirmed finding without support. Later minutes remain distinct from preliminary material. Similar symptoms and duplicates do not establish a common cause. Missing, unreadable, conflicting, incomplete, or unauthorized evidence yields an explicit limitation. Export matches the selection and preserves citations and uncertainty. Check citation existence separately from semantic support.
- Rehearsal: Each area uses five static slides. The standalone map closes Section 2. Cut supporting inventory before the FRB decision, eval failure, or roadmap sequence. The evals and roadmap personal stories are removed. Preserve the optional presenter-authored slot in Section 1. Orchestration has no audience pause.
- Scope from the published description, all covered: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability, guardrails, security (2.6, with security also in 2.3); cost and latency (2.1, 2.2, 2.4, 2.6); why a prototype is not production readiness (1.7, 2.5, 2.6, 3.3); why tests are necessary but not sufficient (1.7, 2.5); why evals continue after deployment (1.7, 2.5); existing skills that transfer (3.1); additional competencies (3.2); where to focus further learning (3.4, 3.5).

### What only you can supply

1. **Story #1, 1.2, optional.** A demo that turned out not to be the product.

### Verify in a browser before the slide is final

| Claim | Status and stage treatment |
|---|---|
| Model lifecycle and CLI anchors | Vendor pages checked September 14. No claim of universal silent migration |
| Prime/composite comparison | Backup only. Revised paper checked September 15; retain task, prompting, and version scope |
| Routing experiment | Backup only. LangChain checked September 15; retain configurations, call-share exclusion, variation, and denominators |
| Authorization and Article 50 | OWASP authorization remains active. Article 50 is backup, with its checked role, scope, and exception retained |
| CamoLeak and EchoLeak | Both are backup. Preserve researcher-demonstration scope and the reported lack of evidence of EchoLeak exploitation |
| ClawHub audit | Backup only. The Hacker News checked September 14; underlying Koi audit not independently checked |
| Gartner | Backup only. Publisher forecast checked September 14; no architecture-to-cancellation causal claim |
| Replit and Air Canada | Backup only, from secondary reports. Attribute and paraphrase; tribunal decision not independently verified |
| FRB artifacts | Invented teaching material, including the CUI/ECI processing constraint and older, less capable approved options. Preserve revisions, uncertainty, authorized scope, and human ownership. No primary-source marker or measured model results |
| Data sensitivity | NARA and NIST sources checked September 15. Organizational eligibility and the older-model observation remain presenter context; no named service is declared approved |
| Identity pattern | Backup illustrative design pattern, separate from active authorization requirements |
| OpenTelemetry and OWASP names | Source pages checked September 14. Detailed names and convention status remain backup |
| Hiring backup | Dice publisher figures checked September 14. LinkedIn ranking known through secondary reporting |

Unverified model-release dates and unsupported research-only numbers remain off stage. Source records hold URLs, quotes, and limitations. The standalone user screenshots and evals story have been removed from the current authoring target. Resource content and the remaining presenter-authored slots are unchanged. Rehearse the final deck on the presentation machine.

### Do not use on stage

- The MIT NANDA 95% figure as a fact. Usable only as "the stat you have heard and should not trust," with the denominator caveat.
- Karpathy's "agentic engineering" lines from the Sequoia post. They are LLM-reconstructed, not spoken.
- Any AI-engineer salary band or unsupported growth figure, including 143%. The documented Dice 101% and 18% figures remain optional attributed Q&A context. Qualify LinkedIn's #1 ranking as secondary reporting.
- The "89% observability vs 52% evals" statistic. Untraceable.
