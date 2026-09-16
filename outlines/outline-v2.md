# Beyond the Coding Agent: From Software Engineer to AI Engineer

## Presentation outline, v2

**Session:** 50 minutes. About 35 of presentation, 15 of questions and discussion.

**Date:** September 17, 2026.

**Audience:** software engineers who want to move into AI engineering. Most have used a coding agent. Few have shipped a system whose behavior depends on a model.

### Central thesis

Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.

AI engineering builds on a foundation of software engineering. This talk focuses on products around foundation models, with overlapping AI and ML roles. It adds the skills and practices needed to make systems useful, reliable, and trustworthy when part of their behavior is delegated to a foundation model. Agentic systems, where the model participates in control flow, are its most demanding expression.

### How to read this outline

- Each beat lists its time, the slide, what to say, the evidence, and a takeaway line. It is a talk-track outline, not a script.
- Sources are cited in short form. Full quotes, dates, URLs, and verification status are in `research/section-1.md`, `research/section-2.md`, and `research/section-3.md`.
- **[verify]** marks a claim to confirm in a browser before it goes on a slide.
- **[your story]** marks a slot for a first-hand example, with a note on what the story must show.
- **[you write]** marks content only the presenter can supply.
- Inside a "say" bullet, **bold text** marks a must-say line. Everything else in that bullet is backup for questions and can be cut in rehearsal.

### Structure and time budget

| Block | Time | Slides |
|---|---|---|
| 1. Intro and central thesis | 5:00 | 6 |
| 2.0 The map | 2:00 | 1 |
| 2.1 Models | 3:30 | 2 |
| 2.2 Context and knowledge | 3:30 | 2 |
| 2.3 Tools and extensibility | 3:00 | 2 |
| 2.4 Orchestration | 3:30 | 2 |
| 2.5 Verification and evals | 5:00 | 2 |
| 2.6 Operating it | 4:30 | 2 |
| 3. Making the transition | 5:00 | 7 |
| 4. Questions and discussion | 15:00 | none, slide 26 stays up |

### The Section 2 pattern

Every Section 2 area follows the five-screen pattern below. Operating it then returns to the full-screen yours diagram to close the section. Each area keeps its existing time budget.

1. **When you are the user.** One coding-agent action, a smaller screenshot, and two short explanations. Codex CLI and Devin remain the two named products; Devin Desktop supplies the Models picker.
2. **Quote.** A source-checked perspective and one conceptual visual, after the user example. Reserve 0:20 inside each area's existing budget.
3. **The decisions you own.** Three decisions, or four for Operating it. Connect each choice to its impact and a conditional starting approach.
4. **Living with those decisions.** Maintenance, evolution, and decision-specific pitfalls. Highlight one headline pitfall for slide 23.
5. **FRB application.** One illustrative starting design, its rationale, and evidence that would make you reconsider it.

Define owner once on slide 3: the engineer or team accountable for the delivered product's behavior and operating limits. Keep the general owner teaching separate from the FRB application. Preserve the 35:00 presentation, area budgets, story reservations, and closing anatomy diagram.

| Area | Decision map for its review | Quote selection |
|---|---|---|
| Models | Model and reasoning settings; one model versus routing; control of model changes | Osmani, April 2026. Research §1 |
| Context and knowledge | Information selection; retention and freshness; provenance and access | Anthropic, September 2025. Research §2 |
| Tools and extensibility | Capabilities exposed as tools; tool contracts; authorization and failure handling | Anthropic, September 2025. Research §3 |
| Orchestration | Predefined versus model-selected actions; delegation; stopping, recovery, and resume | Anthropic, December 2024. Research §4 |
| Verification and evals | Success criteria; checks and graders; representative cases and trials | Husain and Shankar, September 2026. Research §5 |
| Operating it | Access and authority; observability; stopping and handoff; ownership of approvals, incidents, and changes | Rauch, in Datadog, 2026. Research §6 |


---

## Section 1. Intro and central thesis (5:00, 6 slides)

### 1.1 Opener (1:00). Slide 1

- Slide: title, then a build revealing two lines: `demo = works.any()` and `product = works.all()`.
- Say: In June 2025 Andrej Karpathy put the whole problem in one line: "Demo is works.any(), product is works.all()." **You have probably seen your coding agent do something impressive this week.** A demo proves that a useful path exists. A product needs reliable behavior across its intended use, with a safe response when it cannot complete the task. The distance between those two calls is what this talk is about. It is the distance between using AI and engineering it.
- Takeaway line: "Production readiness means reliable behavior across intended use, with safe handling when the task cannot be completed."
- Source: Karpathy, "Software Is Changing (Again)," June 17, 2025. Research §2.
- Alternates considered, swyx's prediction and Fowler's tolerances, are in `research/section-1.md` §7 and remain usable inside 1.4.

### 1.2 Who is talking (0:30). Slide 2

Approved bio from slide 2, September 14, 2026. Stephen Sequenzia, Senior Staff AI/ML Engineer and Architect. No employer named.

1. Twenty years putting systems into production. The last several with a model in the loop.
2. Leads architecture for agentic AI systems across defense programs.
3. Has helped 500+ engineers adopt agents, and watched where using one stops and engineering one begins.

**[your story #1, optional here]** The moment a demo you built turned out not to be the product. It must show one concrete failure where a working path was not a working system. Thirty seconds. If it fits better as the evals example, move it to 2.5.

### 1.3 The thesis (0:45). Slide 3

- Slide: the two thesis sentences, nothing else.
- Say:
  - **Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.**
  - **This talk focuses on building products around foundation models.** Software engineering is the foundation. The added responsibility is measuring and controlling model-dependent behavior.
  - ML engineers typically focus on models and the pipelines that produce them. AI engineers typically focus on products built around models. Roles overlap, including adaptation and fine-tuning.
  - **Owner means the engineer or team accountable for the delivered product's behavior and operating limits.**
- Takeaway line: "The additional responsibility is measuring and controlling model-dependent behavior."
- Sources: CMU SEI; Huyen, 2025; swyx, June 2023, as background. Research §1.

### 1.4 Using AI vs engineering AI, and why it is a different discipline (1:45). Slide 4, two builds

- Slide, build 1, three-row comparison.

  | AI in your development workflow | AI in the product you deliver |
  |---|---|
  | You use model output to help build an artifact | Users depend on model output or decisions during operation |
  | You decide what to accept and ship | You design checks, approval steps, and failure handling |
  | Your coding-tool provider operates the agent platform | Your team owns the product's behavior and operating limits |

- Slide, build 2: the three commitments.
- Say:
  - The first comparison is where the model-dependent behavior lives: in the development workflow or in the delivered product. Human review can be part of either system. The owner designs checks, approvals, and safe failure handling for intended use.
  - Anthropic's distinction is the useful one. Workflows are LLMs and tools orchestrated through predefined code paths. Agents are LLMs that dynamically direct their own processes and tool usage. **An agent adds model-selected actions to control flow. Ordinary code can still enforce permissions, limits, and other guarantees.** That is why agentic systems are the most demanding expression of this discipline, and why they are the focus for the next twenty-five minutes.
  - Fowler's framing: this is software joining the rest of engineering in a world of non-determinism. Other disciplines build tolerances for what they cannot measure. We now have to.
  - One more thing changes, and it is subtle. Shankar and colleagues showed in a peer-reviewed study that people cannot fully write their evaluation criteria before seeing outputs. Grading outputs is how you discover the criteria. They call it criteria drift. So the order you are used to, spec then tests then code, partly inverts. You learn the spec by watching the system.
  - Three commitments for the rest of the talk, each of which comes back later:
    1. A compelling prototype is not evidence of production readiness. works.any() is not works.all().
    2. Traditional tests remain necessary but are no longer sufficient.
    3. Evaluation does not stop at deployment.
- Takeaway line: "Using AI changes how you build. Engineering AI changes what you are responsible for."
- Sources: Anthropic, "Building effective agents," December 2024; Shankar et al., UIST 2024; Fowler, August 2025. Research §2, §3, §5.

### 1.5 What you will leave with, and the agenda (0:45). Slide 5

- Slide: three takeaways on the left, agenda on the right.
- Say:
  - Three things to leave with: a conceptual map of the discipline, an honest sense of how much there is, and a roadmap for making the transition.
  - The agenda: the map, two minutes. Six areas, twenty-three minutes: models, context and knowledge, tools, orchestration, verification and evals, and operating it. The transition, five minutes. Then fifteen minutes for your questions.
  - The pattern for each area: **a familiar action, a quote, the decisions you own, how they change over time, and a worked example**.
- Source: the session description in the README.

### 1.6 Transition (0:15). Slide 6

- Slide: Section 2. What AI engineers actually engineer.
- Say: **"Let's open up the tool you used this morning."**
- Takeaway line: "Let's open up the tool you used this morning."
- Sources: none.

### Section 1 checks

- Time: 1:00 + 0:30 + 0:45 + 1:45 + 0:45 + 0:15 = 5:00.
- Description scope covered: using vs engineering; distinct discipline; AI engineer vs ML engineer; agentic systems as the most demanding expression; the three claims stated as commitments.
- Verify before stage: no Section 1 quote is flagged. Full list in `research/section-1.md`.

---

## Section 2. What AI engineers actually engineer (25:00, 13 slides)

The map, then six areas. Each area has a simple user example, a quote, general owner decisions, maintenance with pitfalls, and an FRB application. Cost and latency are deliberately spread across 2.1 (model selection), 2.2 (cache economics), 2.4 (budgets), and 2.6 (production metrics).

### 2.0 The map (2:00). Slide 7

- Slide: the anatomy diagram, `internal/anatomy-of-an-agentic-ai-system-landscape.svg`, full screen. No added text.
- Say:
  - Here is the whole discipline on one slide. At the center, an agent is a model plus a harness. **“If you're not the model, you're the harness.”**
  - A harness is the execution system around the model: it maintains context, calls tools, handles failures, enforces controls, and returns a result. This short definition paraphrases OpenAI's August 2026 description.
  - **Four layers.** The model. The harness: instructions, context and memory, tools, orchestration, guardrails, verification. Per-run services: identity, security, data and knowledge. Across-run services: observability, evaluations, governance.
  - Every box exists inside the coding agent you use. For each area, start with a familiar action, then examine the decisions and responsibilities behind it.
  - In the final twenty seconds, with the diagram at full brightness: **“We'll carry one example through these areas: a system that helps engineers research Failure Review Boards, understand their decisions, and compare recurring issues.”** The case is illustrative. It supports research and drafting. **People own official causes, decisions, and board records.**
- Takeaway line: "Agent equals model plus harness. Everything that is not the model is what you engineer."
- Sources: Osmani, April 2026; OpenAI, “Codex as a platform,” August 2026. Research §0, including the illustrative FRB case and its authoring reference.

### 2.1 Models (3:30). Slides 8 and 9

**Slide 8, When you are the user (0:30).** One static screen: a smaller Devin Desktop picker, with explanations of model choice and reasoning effort beside it.

- Say: Choose which model handles the coding task, then adjust the effort used to work through it. The picker makes both settings visible. These are the familiar controls that anchor this area.
- Takeaway line: "The model picker exposes a choice."
- Sources: Devin Desktop docs and the presenter's picker observation. Research §1.

**Slide 9, When you are the owner (3:00).** Four static screens, each with its own purpose. Hard cuts throughout.

- Slide, quote (0:20): Osmani's model-and-harness comparison, with a conceptual model component inside a surrounding structure. Full wording and attribution in Research §1.
- Say, quote: Osmani is describing his experience. **Evaluate the model inside the system you are building.** The context, tools, and control flow shape the result too.
- Slide, decisions (1:05), title "The model decisions you own": model and reasoning settings; one model or routing; control of model changes.
- Say, decisions: **Compare candidates on representative tasks.** Assess quality with cost, latency, and deployment constraints. **Start with one model configuration unless measurements justify routing.** Routing can match models to different work, while adding configurations to evaluate and maintain. **Pinned versions need planned migration. Moving aliases need regression monitoring.** Define the evaluation and replacement practices before relying on the choice. Orchestration owns how the work is divided and coordinated.
- Slide, maintenance (0:50), title "Living with model choices": changing tasks, routing coverage, lifecycle changes, and the headline pitfall.
- Say, maintenance: Refresh cases as intended use changes. Cover each route and measure the whole workflow. Monitor updates and retirement, and prepare a replacement. **A snapshot does not freeze the whole system.** Prompts, retrieval, tools, and the environment still matter. The recurring mistake is choosing and changing models without testing them on your task.
- Slide, application (0:45), title "A starting design for the FRB brief": an illustrative proposal, with no measured model results.
- Say, application: Compare candidates on faithful summaries and supported findings. **A possible cause must remain a possible cause.** Begin with one model configuration for the brief. Use a pinned version where available with a migration plan. **Revisit the design when measured quality, cost, latency, or lifecycle requirements justify a change.** This is a proposed starting point, not a claimed winner or deployed design.
- Pitfall: Choosing and changing models without testing them on your task.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Sources: Osmani, April 2026; Anthropic and OpenAI lifecycle pages; illustrative FRB case and selection framework. Research §0 and §1. Detailed role assignments and displaced benchmarks remain backup.

### 2.2 Context and knowledge (3:30). Slides 10 and 11

**Slide 10, When you are the user (0:30).** One static AGENTS.md example beside two explanations: project conventions and checks.

- Say: The instructions file gives a coding agent the repository's conventions and ways to validate its work. **You are supplying context for the task.** This familiar file is one source of information the agent uses while working.
- Takeaway line: "You are supplying context for the task."
- Sources: Codex CLI and Devin CLI instructions docs. Research §2.

**Slide 11, When you are the owner (3:00).** Four static screens with hard cuts.

- Slide, quote (0:20): Anthropic's statement that context is a finite resource with diminishing marginal returns, beside a conceptual image of selected information in a limited space. Full wording in Research §2.
- Say, quote: **The owner chooses what the model sees at each step.** The context window's capacity does not establish that every available piece of information will help.
- Slide, decisions (1:05), title "The context decisions you own": information for the next step; persistence and refresh; provenance and access.
- Say, decisions: Select instructions, task state, and relevant knowledge. **RAG retrieves relevant external information and supplies it to the model.** Choose file reads, keyword search, embeddings, or hybrid retrieval for the data and task. Decide which facts and constraints to retain, what to summarize or discard, and when to refresh sources. Persistent memory stores information across sessions; compaction summarizes the current conversation. **Keep source locations and revisions, and enforce the user's access scope outside the model.**
- Slide, maintenance (0:50), title "Living with context choices": freshness, context growth, and boundaries, followed by the headline pitfall.
- Say, maintenance: Records change, summaries can lose constraints, and memory can expose information across an access boundary. Refresh retrieval, test what compaction preserves, and retain provenance. Recheck representative cases as sources and policies change. **Preserve useful stable prefixes, but correctness and access take priority over cache savings.** The pitfall is adding instead of curating.
- Slide, application (0:45), title "A starting context for the FRB brief": preliminary briefing and later minutes, with Select, Retain, and Refresh decisions beside them.
- Say, application: Retrieve both relevant passages with their IDs, revisions, and locations. **The preliminary briefing names a possible cause. The later minutes leave it unresolved and require inspection.** Preserve that distinction through summaries. Refresh sources and recheck access before finalizing the brief. Missing or inaccessible evidence stays an explicit limitation. This is an illustrative starting design.
- Pitfall: adding instead of curating.
- Takeaway line: "Context is a budget, not a bucket."
- Sources: Anthropic, September 2025; Manus, July 2025; Codex CLI and Devin CLI docs. Research §2. OWASP authorization, Research §3. Illustrative FRB case, Research §0. Chroma, Breunig, and retrieval performance evidence remain qualified research backup.

### 2.3 Tools and extensibility (3:00). Slides 12 and 13

**Slide 12, When you are the user (0:25).** One MCP connection example with two short explanations: connect a service and make its capabilities available to the coding agent.

- Say: **An MCP connection adds capabilities to the coding agent.** The server exposes tools the agent can call while working on a task. This is the familiar user action; the next screens explain what the owner designs behind it.
- Takeaway line: "A connection gives the coding agent another capability."
- Sources: Codex CLI and Devin CLI MCP docs. Research §3.

**Slide 13, When you are the owner (2:35).** Four static screens with hard cuts.

- Slide, quote (0:20): Anthropic's statement that agents are only as effective as their tools, beside a conceptual interface connecting two systems. Full wording and attribution in Research §3.
- Say, quote: **A tool is a contract between code and a model caller.** Its name, description, input, and result affect whether the caller can use it well.
- Slide, decisions (0:55), title "The tool decisions you own": capabilities, contracts, and execution rules.
- Say, decisions: **Choose operations that serve the task.** Evaluate granularity and discovery; begin with a small, distinct tool set. Define names, inputs, results, and errors, and return useful context with stable IDs. **Enforce validation and authorization in code.** Least privilege applies to reads and writes. Require approval where policy calls for it; a model recommendation does not establish permission.
- Slide, maintenance (0:40), title "Living with tool choices": contract changes, tool growth, and failures, followed by the headline pitfall.
- Say, maintenance: Keep descriptions, schemas, and behavior aligned. Prune overlapping tools and load definitions when needed. Return explicit results, errors, and unknown outcomes. Recheck permissions as capabilities change. **A description guides the model. Code enforces the contract.** The pitfall is copying the API surface without evaluating task fit.
- Slide, application (0:40), title "A tool contract for the FRB brief": the illustrative Export cited brief contract, showing input, checks, output, and failure.
- Say, application: Parsing and indexing are background services. **Export cited brief is the agent-facing operation.** It accepts a checked draft, citations, and destination. Enforce access and permitted destinations outside the model. Preserve source IDs, revisions, and locations. Return content matching the checked draft, with citations and uncertainty intact, plus a receipt. Report failure or an unconfirmed outcome explicitly. The full search/retrieve/export inventory remains in the authoring reference.
- Pitfall: copying the API surface without evaluating task fit.
- Takeaway line: "Design tools for a caller that reads the description every time and can still get it wrong."
- Sources: Anthropic, September and November 2025; MCP, July 2026; OWASP, 2025; Codex CLI and Devin CLI docs. Research §3. Illustrative FRB contract, Research §0 and §3. Tool benchmarks and incident evidence remain backup.

### 2.4 Orchestration (3:30). Slides 14 and 15

On the map this is the Orchestration box inside the harness: the execution loop, workflows, and coordination. The other harness boxes have their own areas.

**Slide 14, When you are the user (0:30).** One plan-mode example beside two explanations: request a plan and review the approach.

- Say: Ask the coding agent to break a task into proposed steps. Review and refine its approach before implementation. **A plan makes the proposed steps visible.** This familiar action anchors the area; the owner sequence explains execution control.
- Takeaway line: "A plan makes the proposed steps visible."
- Sources: Codex CLI and Devin CLI plan-mode docs. Research §4.

**Slide 15, When you are the owner (3:00).** Four static screens with hard cuts.

- Slide, quote (0:20): Anthropic's recommendation to find the simplest solution possible and increase complexity when needed, beside a conceptual simple path and branching network. Exact wording in Research §4.
- Say, quote: **Begin with the simplest execution design that meets the task.** More autonomy or more workers must earn their place through measured benefit.
- Slide, decisions (1:05), title "The orchestration decisions you own": who chooses the next step; when to delegate; how execution stops or recovers.
- Say, decisions: **Use code for known paths and required checks.** Let the model choose where judgment helps. Begin with a bounded workflow. Delegate independent work with explicit inputs and expected results; add workers only when measured gains justify coordination cost. **Define completion checks, stopping limits, persisted state, bounded retries, and human handoff.** Model choice remains in Models; this area governs how work is divided and executed.
- Slide, maintenance (0:50), title "Living with orchestration choices": workflow changes, handoffs, and recovery, followed by limits and the headline pitfall.
- Say, maintenance: New branches can bypass required controls. Recheck paths and protect acceptance criteria. Workers can lose context or disagree, so preserve evidence, uncertainty, and ownership. An action may have succeeded before a timeout; inspect results before retrying. **Set action, token, and end-to-end latency limits.** The pitfall is multi-agent before a workflow was tried.
- Slide, application (0:45), title "A bounded workflow for the FRB brief": six ordered steps, a verification gate before export, and a resume/retry rule.
- Say, application: **Retrieve the packet, inspect evidence, compare cases, reconcile findings, verify the brief, export.** Begin with those predefined steps. Export only after checks pass. At a limit, stop with an explicit limitation or hand off. Save steps and exact revisions; before retrying export, inspect the receipt and recheck freshness and access. Optional comparison workers must earn their place through measurement and stay within authorized internal records. Deliver this directly without an audience pause.
- Pitfall: multi-agent before a workflow was tried.
- Takeaway line: "The loop is where autonomy gets its limits. Start with the workflow."
- Sources: Anthropic, December 2024, June and November 2025; 12-Factor Agents; Codex CLI and Devin CLI docs. Research §4. Illustrative FRB workflow, Research §0. The prior benchmark comparisons, failure taxonomy, and forecast remain qualified research backup.

### 2.5 Verification and evals (5:00). Slides 16 and 17

**Slide 16, When you are the user (0:30).** One coding-agent test-run example beside two explanations: run the checks and read the result.

- Say: The coding agent runs the repository's tests. You inspect the test output as part of deciding whether to accept a change. **The test run gives you a result to inspect.** This is the familiar action; the owner sequence handles criteria, grading, and failure analysis.
- Takeaway line: "The test run gives you a result to inspect."
- Sources: coding-agent verification framing. Research §5.

**Slide 17, When you are the owner (4:30).** Four static screens. Hold the maintenance screen for the protected 1:00 personal story.

- Slide, quote (0:20): Husain and Shankar's statement that error analysis is the most important activity in evals, beside a conceptual inspection graphic. Full wording in Research §5.
- Say, quote: Verification checks a result before accepting it. Evaluation measures behavior across representative cases. **These are complementary uses of checks. Evals are tests of an AI system.**
- Slide, decisions (1:15), title "The evaluation decisions you own": success criteria; checks and graders; cases and trials.
- Say, decisions: Define the outcome, required constraints, and serious failure cases with domain experts. **Use direct checks where possible. Calibrate model graders against expert judgments.** Begin with 20 to 50 cases drawn from real failures, then cover representative tasks and edge cases. Repeat trials to examine consistency. At least one success across attempts and success across every attempt answer different questions; notation stays in backup.
- Slide, maintenance (1:55, including story #2 at 1:00), title "Living with evaluation choices": criteria, graders, and coverage, followed by result/trace inspection and the headline pitfall.
- Say, maintenance: Outputs expose missing requirements, graders disagree, and changes reveal gaps in the suite. Refine criteria with experts, review disagreements, rerun the suite after model or harness changes, and add production failures. **Inspect the result and trace before choosing a repair.** A generic judge is no substitute for error analysis, and a success claim must be checked against the actual result. Hold the general maintenance screen for the personal story, then introduce the separate illustration.
- Slide, application (1:00), title "A source-support check for the FRB brief": cited minutes, unsupported answer, direct-reference PASS, source-support FAIL, and expected result.
- Say, application: The deliberately wrong answer cites FRB-042-MIN r2 §3, paragraph 2. The record exists, but it leaves the cause unresolved and requires inspection. **Citation existence and semantic support are different checks.** The claim that the board confirmed bearing wear fails. Expected: unresolved cause, inspection required. Use expert judgment or an expert-calibrated model grader for source support. Keep this failure as a regression case and rerun it after changes, with the broader suite and repeated trials. Inspect the trace before deciding which component to repair.

**[your story #2]** A failure your tests passed and evals or production caught. It must show that the suite was green, the behavior was wrong, and a broader check or real user found it. Sixty seconds, held over slide 17's general maintenance screen. It remains presenter-authored and separate from the illustrative FRB check.

- Pitfall: a generic judge instead of error analysis. Trusting the success claim without checking the result.
- Takeaway line: "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."
- Sources: Anthropic, January 2026; Husain and Shankar, September 2026; Shankar et al., UIST 2024. Research §5. Illustrative FRB check, Research §0 and §5. The earlier probability notation, grader inventory, and allocation figures remain qualified backup.

### 2.6 Operating it (4:30). Slides 18 and 19

**Slide 18, When you are the user (0:30).** One Devin CLI session-usage example beside two explanations: check usage and connect it to the work.

- Say: Devin CLI's usage view shows estimated consumption for the session. **You can inspect the resources the coding agent has used.** Relate that usage to the work you asked it to perform. This familiar view anchors the operating responsibilities.
- Takeaway line: "You can inspect the resources the coding agent has used."
- Sources: Devin CLI usage docs, checked September 2026. Research §6.

**Slide 19, When you are the owner (4:00, including the section wrap).** Four static owner screens followed by the existing yours diagram.

- Slide, quote (0:20): Guillermo Rauch's observation about what teams can observe, beside a conceptual visible execution path. Exact quotation and publisher attribution in Research §6.
- Say, quote: **The owner needs evidence of what the system actually did.** That evidence supports diagnosis and accountable operation.
- Slide, decisions (1:20), title "The operating decisions you own": access and authority; observability; stopping and handoff; approvals and incident ownership.
- Say, decisions: **Enforce identity, scope, and permitted destinations outside the model.** Start with least privilege. Trace model calls, tools, and outcomes; measure quality, cost per completed task, and latency. Set budgets and failure responses, including human handoff. Assign an accountable operator, review process, audit trail, and rollback path. This is where observability, guardrails, security, and governance become operating responsibilities.
- Slide, maintenance (1:00), title "Living with operating choices": integrations, operating signals, and controls, followed by the security boundary and headline pitfall.
- Say, maintenance: **Private data, untrusted content, and external communication can combine into an exfiltration path.** Willison calls this the lethal trifecta. Review the combined capabilities as integrations change; a web fetch can communicate externally. Break or constrain this path, while recognizing it is one threat model. Inspect changes to quality, cost, and latency and feed failures back into evals. Recheck permissions, approvals, alerts, and handoff. **A probabilistic filter is insufficient as the sole security boundary.**
- Slide, application (0:55), title "An operating agreement for the FRB system": access, monitoring, handoff, and ownership.
- Say, application: Enforce access to authorized FRB records and permitted export destinations. Trace exact revisions, decisions, checks, and exports; restrict trace access. Monitor quality, freshness, parsing/tool failures, cost per completed brief, and latency. Failed checks, missing evidence, or exhausted budgets produce an explicit limitation or human handoff. **People own official causes, decisions, and board records.** This is an illustrative starting design.
- Pitfall: the lethal trifecta, assembled one integration at a time.
- Takeaway line: "When you are the owner, its answer is your answer."
- Section wrap (0:25): hard cut to the existing yours anatomy diagram. **Every box is something you can engineer, because most of it is engineering you already know how to do.**
- Sources: Rauch in Datadog, 2026; Willison, June 2025; OWASP, 2025 and 2026; OpenTelemetry; MCP; Devin CLI docs. Research §6 and §3. Illustrative FRB agreement, Research §0 and §6. Incidents, detailed identity patterns, convention status, and scoped legal material remain research backup.

### Section 2 checks

- Time: 2:00 + 3:30 + 3:30 + 3:00 + 3:30 + 5:00 + 4:30 = 25:00.
- Slides: 7 through 19, thirteen slides.
- Description scope, with beat numbers: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability (2.6); guardrails (2.6); security (2.3, 2.6); cost and latency (2.1, 2.2, 2.4, 2.6). Claims: prototype is not production (2.5, 2.6 operating limits); tests necessary but not sufficient (2.5); evals continue after deployment (2.5).
- Structure: six paired user and owner slides, each with the engineered bridge and a named pitfall. All six areas use the five-screen pattern, with a quote before general decisions and a separate FRB application. Headline pitfalls appear in the maintenance screen body. Evals holds that screen for the protected personal story. Operating it ends with the additional yours diagram.
- Evidence status: FRB material is invented and visibly illustrative. It reports no deployed system, model scores, or personal experience. Displaced benchmarks, tool incidents, and forecast remain research backup. Operating security principles remain active; incident details stay in research backup. OWASP authorization and Commission Article 50 guidance retain their prior status and scope. Replit and Air Canada retain secondary-source limitations. Identity is an illustrative design pattern.

---

## Section 3. Making the transition (5:00, 7 slides)

### 3.0 Transition (0:10). Slide 20

- Slide: Section 3. Making the transition. Matching typographic divider after the yours anatomy diagram.
- Say: Everything in the last twenty-five minutes was engineering. **Most of it is engineering you already do.**
- Takeaway line: "Most of it is engineering you already do."
- Sources: the Section 2 synthesis and the mapping in 3.1. Research §1.

### 3.1 What transfers (1:05). Slide 21

- Slide: two columns. Left, the software engineering skill. Right, what it becomes.
- Say:
  - **Decomposition and systems thinking transfer whole.** Matt Morgis at Elsevier: "For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier." The harness is a systems design problem.
  - **Interface design becomes tool design.** The same instincts about contracts, naming, granularity, and error handling. The caller changed.
  - **Testing discipline extends to evals.** The habit of checking before accepting a result transfers. Ordinary tests remain part of the machinery.
  - Observability instincts transfer with a new schema. Traces, spans, p95s. OpenTelemetry already has the GenAI conventions.
  - Security instincts transfer. Least privilege now applies to tools. OWASP has the list.
  - Operations transfer: cost, latency, incident response, rollback. The units changed to tokens.
  - Field evidence: Gergely Orosz profiled engineers at incident.io, Sentry, Elsevier, and others who crossed over in months, not years. One twenty-five-year veteran became his company's generative AI expert in about two months by reading and prototyping.
- Takeaway line: "You are not starting over. You are adding a layer."
- Sources: Orosz, "AI Engineering in the real world," March 2025; OpenTelemetry; OWASP. Research §1.

### 3.2 What is new (1:15). Slide 22

- Slide: the ladder, prompt engineering, then context engineering, then harness engineering. Below it, the new competencies as an unranked list.
- Say:
  - **Prompt engineering, context engineering, harness engineering.** This ladder is a teaching frame for expanding responsibility. The years mark examples of vocabulary in the cited posts, not the invention of the practices.
  - The competencies, in display order without ranking: model behavior intuition, informed by reading outputs. Context engineering. Tool design for a caller that reads the description every time. Harness and loop design. **Evals and error analysis.** AI security, because the attack surface is now the model's reasoning. Cost and latency as first-class design constraints.
  - The one most engineers find hardest, from Ross McNairn at Wordsmith: **"Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."**
- Takeaway line: "The new skill is not prompting. It is being comfortable measuring a system you cannot fully specify."
- Sources: Anthropic, September 2025; Husain, evals FAQ, 2026; Orosz, March 2025. Research §2.

### 3.3 The pitfalls, on one slide (0:35). Slide 23

- Slide: six lines, one per area, no other text.
  1. Models: Choosing and changing models without testing them on your task.
  2. Context: adding instead of curating.
  3. Tools: copying the API surface without evaluating task fit.
  4. Orchestration: multi-agent before a workflow was tried.
  5. Evals: a generic judge instead of error analysis. Trusting the success claim without checking the result.
  6. Operating: the lethal trifecta, assembled one integration at a time.
- Say:
  - You have seen all six. **Every one is a symptom of the same thing: treating the demo as the product.** works.any() shipped as works.all().
  - One more that is not on the map: reaching for a framework before understanding the loop. Anthropic's warning is that frameworks "create extra layers of abstraction that can obscure the underlying prompts and responses." Learn the loop first.
- Takeaway line: "Every pitfall on this list is a demo mistaken for a product."
- Sources: Section 2; Anthropic, December 2024. Research §3.

### 3.4 The roadmap (1:25). Slide 24

- Slide: four steps.
  1. Look before you build.
  2. Start constrained.
  3. Own the harness.
  4. Add autonomy as your evals earn it.
- Say:
  - **Look before you build. On Monday, manually review twenty to fifty outputs of whatever AI feature you are closest to.** **Record the input, observed behavior, expected behavior, and check.** That is error analysis and the first entry in your eval suite. For an FRB summary, record the false confirmation, the unresolved cause, and the source-support check. Use the same record for your own system.
  - **Start constrained. A single model call with retrieval and examples. Then a workflow on predefined code paths. Add a loop only when it demonstrably improves outcomes.** Anthropic says find the simplest solution possible. OpenAI says start with a single agent, start small, validate with real users, and grow.
  - Own the harness. Own your prompts, your context window, your control flow. Learn the loop before you adopt a framework for it, so the framework is a convenience you can evaluate rather than a black box you depend on.
  - **Add autonomy as your evals earn it.** Every increase in autonomy is paid for by a verifier or an eval that catches what it breaks.
  - On the existing final state, show **“Review 20 to 50 outputs. Record the input, observed behavior, expected behavior, and check.”** The illustrative FRB row makes the assignment concrete. Hold it through the existing 30-second story reservation.

**[your story #3]** What you would tell yourself at the start of the transition. It must show one thing you would do earlier, and what it would have saved. Thirty seconds, inside this beat's time.

- Takeaway line: "Autonomy is earned by evals, one step at a time."
- Sources: Husain, evals FAQ; Anthropic, December 2024; OpenAI, "A practical guide to building agents"; Research §4, including the FRB assignment. Hashimoto's adoption arc remains research backup.

### 3.5 Resources and close (0:30). Slides 25 and 26

**Slide 25, resources.** Shown, not discussed.

- Chip Huyen, *AI Engineering: Building Applications with Foundation Models*, O'Reilly, 2025.
- Anthropic engineering: "Building effective agents" (December 2024), "Effective context engineering for AI agents" (September 2025), "Demystifying evals for AI agents" (January 2026).
- OpenAI, "A practical guide to building agents" (2025).
- Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev. Shankar and Husain, *Evals for AI Engineers*, O'Reilly, forthcoming October 2026.
- OWASP Top 10 for LLM Applications (2025) and for Agentic Applications (2026).
- OpenTelemetry GenAI semantic conventions.

**Slide 26, close.** The two thesis sentences, then "Questions."

- Say: Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer. The difference is not the tools. It is what you are responsible for. We have fifteen minutes for your questions.
- Sources: research §4.

### Section 3 checks

- Time: 0:10 + 1:05 + 1:15 + 0:35 + 1:25 + 0:30 = 5:00.
- Slides: 20 through 26. Total deck: 26 narrative slides, 28 authored compositions, 56 physical PowerPoint slides, 57 states, one internal click, one Morph transition, and 56 advances.
- Description scope, with beat numbers: which existing skills provide a strong foundation (3.1); what additional competencies the discipline demands (3.2); where to focus further learning (3.4, 3.5); a roadmap (3.4).
- Evidence status: competencies are unranked. The ladder is a teaching frame. Dice publisher figures are optional Q&A context; the LinkedIn ranking is secondary reporting.

---

## Section 4. Questions and discussion (15:00, Slide 26 stays up)

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

- Time: Section 1, 5:00. Section 2, 25:00. Section 3, 5:00. Total 35:00, plus 15:00 for questions.
- Deck: 26 narrative slides. Six in Section 1, thirteen in Section 2, seven in Section 3. Two support compositions bring the authored total to 28. Expansion produces 56 physical slides, 57 states, one internal click, one Morph transition, and 56 advances. Models, Context, and Orchestration each split 0:30 for the user and 3:00 for the owner. Tools splits 0:25 and 2:35. Evals splits 0:30 and 4:30, including the 1:00 story. Operating it splits 0:30 and 4:00, including the 0:25 section wrap. All area time budgets remain unchanged.
- FRB acceptance: a suspected cause never becomes a confirmed finding without support. Later minutes remain distinct from preliminary material. Similar symptoms and duplicates do not establish a common cause. Missing, unreadable, conflicting, incomplete, or unauthorized evidence yields an explicit limitation. Export matches the selection and preserves citations and uncertainty. Check citation existence separately from semantic support.
- Rehearsal: Each area uses five static screens. Operating it adds the existing yours diagram for the section wrap. Cut supporting inventory before the FRB decision, eval failure, or roadmap assignment. Preserve the 60-second and 30-second story slots. Orchestration has no audience pause.
- Scope from the published description, all covered: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability, guardrails, security (2.6, with security also in 2.3); cost and latency (2.1, 2.2, 2.4, 2.6); why a prototype is not production readiness (1.4, 2.5, 2.6, 3.3); why tests are necessary but not sufficient (1.4, 2.5); why evals continue after deployment (1.4, 2.5); existing skills that transfer (3.1); additional competencies (3.2); where to focus further learning (3.4, 3.5).

### What only you can supply

1. **Story #1, 1.2, optional.** A demo that turned out not to be the product.
2. **Story #2, 2.5.** A failure your tests passed and evals or production caught.
3. **Story #3, 3.4.** What you would tell yourself at the start of the transition.

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
| FRB artifacts | Invented teaching material. Preserve revisions, uncertainty, authorized scope, and human ownership. No primary-source marker or measured model results |
| Identity pattern | Backup illustrative design pattern, separate from active authorization requirements |
| OpenTelemetry and OWASP names | Source pages checked September 14. Detailed names and convention status remain backup |
| Hiring backup | Dice publisher figures checked September 14. LinkedIn ranking known through secondary reporting |

Unverified model-release dates and unsupported research-only numbers remain off stage. Source records hold URLs, quotes, and limitations. Screenshots, story #2, and all resource changes are explicitly deferred in this pass.

### Do not use on stage

- The MIT NANDA 95% figure as a fact. Usable only as "the stat you have heard and should not trust," with the denominator caveat.
- Karpathy's "agentic engineering" lines from the Sequoia post. They are LLM-reconstructed, not spoken.
- Any AI-engineer salary band or unsupported growth figure, including 143%. The documented Dice 101% and 18% figures remain optional attributed Q&A context. Qualify LinkedIn's #1 ranking as secondary reporting.
- The "89% observability vs 52% evals" statistic. Untraceable.
