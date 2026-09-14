# Beyond the Coding Agent: From Software Engineer to AI Engineer

## Presentation outline, v2

**Session:** 50 minutes. About 35 of presentation, 15 of questions and discussion.

**Date:** September 17, 2026.

**Audience:** software engineers who want to move into AI engineering. Most have used a coding agent. Few have shipped a system whose behavior depends on a model.

### Central thesis

Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.

AI engineering is a distinct discipline built on a foundation of software engineering. It adds the skills and practices needed to make systems useful, reliable, and trustworthy when part of their behavior is delegated to a foundation model. Agentic systems, where the model participates in control flow, are its most demanding expression.

### How to read this outline

- Each beat lists its time, the slide, what to say, the evidence, and a takeaway line. It is a talk-track outline, not a script.
- Sources are cited in short form. Full quotes, dates, URLs, and verification status are in `research/section-1.md`, `research/section-2.md`, and `research/section-3.md`.
- **[verify]** marks a claim to confirm in a browser before it goes on a slide.
- **[your story]** marks a slot for a first-hand example, with a note on what the story must show.
- **[you write]** marks content only the presenter can supply.
- Inside a "say" bullet, **bold text** marks a must-say line. Everything else in that bullet is backup for questions and can be cut in rehearsal.

### Structure and time budget

| Block | Minutes | Slides |
|---|---|---|
| 1. Intro and central thesis | 5 | 6 |
| 2.0 The map | 2 | 1 |
| 2.1 Models | 3.5 | 2 |
| 2.2 Context and knowledge | 3.5 | 2 |
| 2.3 Tools and extensibility | 3 | 2 |
| 2.4 Harness and orchestration | 3.5 | 2 |
| 2.5 Verification and evals | 5 | 2 |
| 2.6 Operating it | 4.5 | 2 |
| 3. Making the transition | 5 | 6 |
| 4. Questions and discussion | 15 | none, slide 25 stays up |

### The Section 2 pattern

Every one of the six areas has the same three beats:

1. **What you touched.** The feature of the coding agent the audience has already used, described generically with named instances (Claude Code, Cursor, Copilot, Codex).
2. **What someone engineered.** What had to be built for that feature to work.
3. **When it's your agent.** What the vendor built that you now own, how a customer-facing or enterprise deployment raises the stakes, and the most common pitfall in that area.

---

## Section 1. Intro and central thesis (5:00, 6 slides)

### 1.1 Opener (1:00). Slide 1

- Slide: title, then a build revealing two lines: `demo = works.any()` and `product = works.all()`.
- Say: In June 2025 Andrej Karpathy put the whole problem in one line: "Demo is works.any(), product is works.all()." Everyone in this room has shipped a works.any() this week, with a coding agent, and been impressed by it. The distance between those two calls is what this talk is about. It is the distance between using AI and engineering it.
- Why this one: shortest, verified verbatim, flatters the audience rather than scolding them, and the line returns in 1.4, 2.5, and 3.4.
- Source: Karpathy, "Software Is Changing (Again)," June 17, 2025. Research §2.
- Alternates considered, swyx's prediction and Fowler's tolerances, are in `research/section-1.md` §7 and remain usable inside 1.4.

### 1.2 Who is talking (0:30). Slide 2

**[you write]** Three lines, no more. The slide must establish:

1. You have shipped systems whose behavior depends on a model, to production, for real users.
2. The enterprise-agent context: the kind of system you build and who it serves.
3. Why you care about this distinction, in one clause.

**[your story #1, optional here]** The moment a demo you built turned out not to be the product. It must show one concrete failure where a working path was not a working system. Thirty seconds. If it fits better as the evals example, move it to 2.5.

### 1.3 The thesis (0:45). Slide 3

- Slide: the two sentences, nothing else.
- Say:
  - Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.
  - This is not a new distinction. swyx has described three tiers: engineers using AI, engineers building AI products, and AI systems doing engineering work. The coding agent lives in the first tier. This talk is about the second.
  - It is also not a replacement for software engineering. Carnegie Mellon's Software Engineering Institute defines AI engineering as combining systems engineering, software engineering, computer science, and human-centered design. Built on top of, not instead of.
  - One boundary to name: this is not ML engineering. ML engineers build models and the pipelines that produce them. AI engineers build products around foundation models someone else trained. Chip Huyen's framing is product-first rather than model-first.
- Takeaway line: "The title is three years old. The discipline is what we are here to define."
- Sources: swyx; CMU SEI; Huyen. Research §1.

### 1.4 Using AI vs engineering AI, and why it is a different discipline (1:45). Slide 4, two builds

- Slide, build 1, two columns.
  - Using AI: the behavior lives in code. The model is a tool in your workflow. You review every output. You are the verifier. The demo is the product, because you are there.
  - Engineering AI systems: part of the behavior lives in a model you did not train. The model is in the control flow. Nobody reviews every output. The system has to verify itself. The demo is one path through a space of behaviors.
- Slide, build 2: the three commitments.
- Say:
  - In traditional software, the behavior is the code. In an AI system, part of the behavior is delegated to a probabilistic model that is context-sensitive, variable, and impossible to specify exhaustively in advance.
  - Anthropic's distinction is the useful one. Workflows are LLMs and tools orchestrated through predefined code paths. Agents are LLMs that dynamically direct their own processes and tool usage. Agents are where the control flow itself is model-dependent, so every guarantee you used to get from a code path has to be re-established another way. That is why agentic systems are the most demanding expression of this discipline, and why they are the focus for the next twenty-five minutes.
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
  - The agenda: the map, two minutes. Six areas, twenty-three minutes: models, context and knowledge, tools, the harness, verification and evals, and operating it. The transition, five minutes. Then fifteen minutes for your questions.
  - The pattern for each area, so you know what is coming: what you touched in your coding agent, what someone engineered to make it work, and what changes when it is your agent.
- Source: the session description in the README.

### 1.6 Transition (0:15). Build on Slide 5, or Slide 6

- Say: "Let's open up the tool you used this morning."

### Section 1 checks

- Time: 1:00 + 0:30 + 0:45 + 1:45 + 0:45 + 0:15 = 5:00.
- Description scope covered: using vs engineering; distinct discipline; AI engineer vs ML engineer; agentic systems as the most demanding expression; the three claims stated as commitments.
- Verify before stage: no Section 1 quote is flagged. Full list in `research/section-1.md`.

---

## Section 2. What AI engineers actually engineer (25:00, 13 slides)

The map, then six areas. Each area has the three beats: what you touched, what someone engineered, when it's your agent. Cost and latency are deliberately spread across 2.1 (selection and routing), 2.2 (cache economics), 2.4 (budgets), and 2.6 (production metrics).

### 2.0 The map (2:00). Slide 7

- Slide: the anatomy diagram, `internal/anatomy-of-an-agentic-ai-system.png`, full screen. No other text.
- Say:
  - Here is the whole discipline on one slide. We will walk it from the inside out.
  - At the center, an agent is a model plus a harness. The line that stuck this spring: **"If you're not the model, you're the harness."**
  - What is a harness? OpenAI's definition from last month: an agent "needs a way to understand a task, maintain context over time, inspect relevant information, call tools, expose progress, handle failures, request human approval when necessary, and return a useful result. That surrounding execution system is the harness."
  - **Four layers.** The model, which decides what to do. The harness around it: instructions, context and memory, tools, orchestration, guardrails, verification. The per-run platform services every run draws on: identity, security, data and knowledge. And the across-run services that let you learn from and control many runs: observability, evaluations, governance.
  - "Harness engineering" is probably the phrase you have heard most since spring. It maps onto this picture. Every box on it exists inside the coding agent you used this morning. Someone built each one. We are going to take six of them apart.
  - For each: what you touched, what someone engineered, and what changes when it is your agent.
- Takeaway line: "Agent equals model plus harness. Everything that is not the model is what you engineer."
- Sources: Osmani, April 2026; OpenAI, "Codex as a platform," August 2026. Research §0.

### 2.1 Models (3:30). Slides 8 and 9

**Slide 8, what you touched.** A model picker: `/model`, the `opusplan` alias, a dropdown.

- Say: You have used the model picker. In Claude Code it is `/model`, and there is an alias called opusplan that runs a bigger model in plan mode and a cheaper one for execution. That is model routing, shipped as a one-word setting. Cursor and Copilot give you the same thing as a dropdown. Most of you have used routing without ever calling it that.
- Say, what someone engineered: behind the picker, the vendor chose the default, tuned prompts and tool descriptions per model, handles failover when a model is overloaded, absorbs price changes, and silently migrated you off every model that got retired. This month Copilot retired five models **[verify]** and most users noticed only that the dropdown changed.

**Slide 9, when it's your agent.** Title: "The model is a component you select, measure, and replace." Six axes, two pinning options, the pitfall.

- Say:
  - Select. Six axes: capability on your tasks, not on a leaderboard. Cost per completed task, not per token. Latency at p95. Context window. Tool-use reliability. Data residency, which in an enterprise can override all the others.
  - Measure. A public benchmark measures a population you did not choose, on a harness you do not control, reported by a party with an interest in the result. Your eval suite measures your traffic. Hold that thought for 2.5.
  - Replace. Models expire. Anthropic promises sixty days' notice; the windows observed this year were 61 and 62 days. OpenAI has twenty-plus models shutting down between October and December. So you pin, and there are exactly two ways: **a dated snapshot buys reproducibility and an expiry date; an alias buys silent upgrades and silent drift**. The canonical drift paper: **GPT-4's accuracy on a prime-number task fell from 84% to 51% between March and June 2023, on the same questions**.
  - Route. LangChain measured this in August: across 145 multi-step agent tasks, **only 7% of calls needed the frontier model**. Routing cut cost per task by roughly two thirds at a six-point accuracy cost. And there is a break-even rule: routing only pays when the price gap between models exceeds the router's own cost.
- Pitfall: treating the model as a fixed dependency. A hardcoded model ID with no eval suite behind it. When the sixty-day email arrives you have a replacement you have never measured and no way to tell whether it is better or worse on your traffic. The fix is in 2.5.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Sources: Anthropic and OpenAI deprecation pages; Chen, Zaharia, Zou, 2023; LangChain, August 11, 2026; Claude Code model docs. Research §1.

### 2.2 Context and knowledge (3:30). Slides 10 and 11

**Slide 10, what you touched.** An instructions file and a compaction notice, side by side.

- Say: Two things you have touched. First, the instructions file. Every tool has one: CLAUDE.md, .cursorrules, copilot-instructions.md, and AGENTS.md as the cross-tool standard. Second, the moment your session auto-compacted and dropped something that mattered. You have already felt context engineering fail.
- Say, what someone engineered:
  - Karpathy's definition from last summer: context engineering is "the delicate art and science of filling the context window with just the right information for the next step." Anthropic's version: context is **"a finite resource with diminishing marginal returns."** Models have an attention budget.
  - Chroma tested eighteen models: **performance degrades as input grows, on simple tasks, well before the window is full**. Breunig named four ways it fails. Poisoning: an error gets in and keeps getting referenced. Distraction: the model over-focuses on the context and forgets what it knows. Confusion: superfluous content shapes the answer. Clash: new information conflicts with old. One measurable: on the Berkeley function-calling leaderboard, every model got worse with more tools.
  - So the vendor engineered a system prompt at the right altitude, "specific enough to guide behavior, flexible enough to provide strong heuristics." A compaction policy. A memory convention. And a retrieval strategy for your repo that is not embedding search: it is just-in-time loading by identifier, grep and file reads. That is a design choice, and it is the one that shows retrieval-augmented generation is one technique, not the discipline.
  - And a cache-aware layout. Manus, running a production agent, called the KV-cache hit rate **"the single most important metric for a production-stage AI agent."** Input-to-output ratio around 100 to 1. Cached input tokens ten times cheaper. So you never mutate the front of the prompt, and you do not add or remove tools mid-run. That is cost and latency engineering, and it is a context decision.

**Slide 11, when it's your agent.** What goes in the window and the four things you now own.

- Say: The vendor chose your context budget, your compaction policy, your memory convention, and your retrieval strategy. You own all four now. What goes in the window: instructions, examples, retrieved knowledge, session state, memory, tool results. Each has a relevance, a freshness, a provenance, and a size. Customer-facing raises the stakes because the context now holds another person's data. A compaction that drops a constraint is a wrong answer to a customer. A memory that crosses sessions is a breach.
- Pitfall: adding context instead of curating it. A big window is not permission to fill it.
- Takeaway line: "Context is a budget, not a bucket."
- Sources: Karpathy, June 2025; Anthropic, September 2025; Chroma, July 2025; Breunig, June 2025; Manus, July 2025. Research §2.

### 2.3 Tools and extensibility (3:00). Slides 12 and 13

**Slide 12, what you touched.** An MCP server entry and the permission prompt.

- Say: You have installed MCP servers. And you have seen the permission prompt: reads pass silently, edits get a checkpoint, a destructive command gets a stop. That prompt is a design decision rendered as UI. Read-only, reversible, consequential.
- Say, what someone engineered:
  - Anthropic's reframe: **a tool is a contract between deterministic code and a non-deterministic caller, and you design it for the caller**. Consolidate: one schedule_event tool, not list_users plus list_events plus create_event. Namespace: even prefix versus suffix had measurable effects on tool-use evals. Return names, not UUIDs: resolving identifiers to meaningful names "significantly improves precision." Let the agent choose concise or detailed: 72 tokens versus 206 for the same Slack result.
  - Descriptions are prompt engineering you can measure. **Precise refinements to tool descriptions took Claude Sonnet 3.5 to state of the art on SWE-bench Verified.** Nothing else changed.
  - Context cost is real: **five MCP servers cost about 55,000 tokens before the first message**. Deferred loading with tool search cut that by 85%. And wrong tool selection is the top failure when names are similar.
  - Under it all, the protocol's own security floor: no token passthrough, scope minimization, consent before a local server's commands run, sandboxed execution.

**Slide 13, when it's your agent.** The tool contract and the action classes.

- Say: The vendor wrote the descriptions, chose the granularity, shaped the payloads, and built the approval UI. Now you write descriptions and eval them. You decide verbosity, because it is your token bill and your context budget. You classify every action, and you build the gate. Customer-facing: nobody is sitting there to click approve. The gate becomes an async human step or an automated policy, and both are things you engineer.
- Example **[verify]**: CamoLeak, where injected content in Copilot Chat exfiltrated private repository data through image requests. And a 2026 agent marketplace where roughly one skill in eight was malicious.
- Pitfall: one endpoint per tool. Your API surface is not a tool set.
- Takeaway line: "Design tools for a caller that reads the description every time and can still get it wrong."
- Sources: Anthropic, September 2025 and November 2025; MCP security best practices, July 2026. Research §3.

### 2.4 Harness and orchestration (3:30). Slides 14 and 15

**Slide 14, what you touched.** Plan mode, the todo list, subagents, hooks, `/compact`, resume. Under them the loop: gather context, act, verify, repeat.

- Say: Plan mode. The todo list. Subagents. Hooks. Compaction. Checkpoints and resume. Underneath all of it is one loop: gather context, take action, verify, repeat. Hooks are the deterministic escape hatch: a post-tool hook runs the formatter or the tests whether or not the model believes it did.
- Say, what someone engineered:
  - Everything that is not the model. Prompts and instruction files, tools and their descriptions, the sandbox and filesystem, orchestration of subagents and handoffs and routing, hooks, observability. Osmani's line: **"A decent model with a great harness beats a great model with a bad harness."** Evidence from OpenAI last month: retained reasoning plus context compaction took one model's score on a reasoning benchmark from 13% to 38% with six times fewer output tokens. Same model.
  - Anthropic found two failure modes in long-running agents. **Over-ambition: try to one-shot the whole app. Premature completion: a later instance sees progress and declares the job done.** The fix was engineering, not prompting: an initializer writes a feature list and a progress file, each session does one feature with a fixed startup routine, and there is a hard rule that tests are never edited to pass.
  - Multi-agent, honestly. **A lead plus subagents beat a single agent by 90% on a research eval. It also used fifteen times the tokens of a chat**, and it is a poor fit for work where agents need shared context or have dependencies. Anthropic names coding as the example.

**Slide 15, when it's your agent.** Workflows versus agents, and the list of things you own.

- Say:
  - Workflows are LLMs on predefined code paths. Agents direct their own. Start with the workflow. Five patterns cover most of it: chaining, routing, parallelization, orchestrator and workers, evaluator and optimizer.
  - You own: the loop. Stopping conditions, starting with a maximum number of iterations. State and resume. Retries. Escalation to a human as a tool call. Routing between a planner and cheap workers. The compaction trigger. And the budgets: tokens, actions, latency. Twelve-factor agents says it in four lines: own your prompts, own your context window, own your control flow, contact humans with tool calls.
  - Customer-facing: a human is waiting. Latency is a product requirement. An unbounded loop is an outage.
- Pitfall: multi-agent orchestration before a workflow was tried. Gartner said in June 2025 **[verify wording]** that over 40% of agentic AI projects would be canceled by the end of 2027 on cost, unclear value, or inadequate risk controls.
- Takeaway line: "The harness is where autonomy gets its limits. Start with the workflow."
- Sources: Anthropic, December 2024, June 2025, November 2025; OpenAI, August 2026; Osmani, April 2026; 12-Factor Agents; Gartner, June 2025. Research §4.

### 2.5 Verification and evals (5:00). Slides 16 and 17

**Slide 16, what you touched.** The test loop, and the agent that said "all tests green."

- Say: The coding agent works because your repo already has a verifier: the test suite. Write, run, read the failure, retry. It works only because ground truth was already there. And you have seen the failure. Martin Fowler: "LLMs are quite happy to say 'all tests green,' yet when I run them, there are failures." Anthropic saw the same thing in long-running agents: an instance declares the job done. The fix is a hook that runs the check, not a model that reports it.
- Say, what someone engineered. Two different things, and the words matter.
  - **Verification asks: is this one output or action correct?** It runs inside the loop. Rules-based checks like linting. Visual checks like screenshots. An LLM judge for fuzzy rules, which is less robust and costs latency.
  - **Evaluation asks: is the behavior correct across a population of runs?** It runs outside the loop. The vocabulary: task, trial, grader, suite. Three kinds of grader. Code-based: fast, cheap, objective, brittle. Model-based: flexible, non-deterministic, needs human calibration. Human: the gold standard, and slow.
  - **Grade the outcome, not the transcript.** "Your flight has been booked" at the end of a transcript is not the same as a reservation row in the database. And do not grade the process, because agents find valid paths you did not anticipate.
  - Non-determinism has its own arithmetic. pass@k is at least one success in k tries. pass^k is all k succeed. Identical at k equals one. Opposite stories at k equals ten. For a customer-facing agent you care about pass^k.
  - Where to start: **twenty to fifty tasks drawn from real failures. Error analysis is the core activity.** Husain's teams spend sixty to eighty percent of development time on it. "You can never stop looking at data." And a diagnostic worth memorizing: a zero percent pass rate with a frontier model usually means a broken task, not a broken agent.
  - Criteria drift from 1.4 returns here. Grading outputs is how you discover the criteria, so the suite grows from looking, not from the spec.

**[your story #2]** A failure your tests passed and evals or production caught. It must show three things: the suite was green, the behavior was wrong, and a population-level check or a real user found it. Sixty seconds, inside this beat's time.

**Slide 17, when it's your agent.** Verify one, evaluate many, keep evaluating.

- Say: Your domain has no test suite. There is no compiler for "was this refund decision correct" or "was this summary faithful." So you build the verifier: a schema check, a business-rule assertion, a database state check, a rubric-driven second model, or a human. Then, separately, you build the eval suite, because verifying one run tells you nothing about the distribution. Then you keep running it, on sampled production traffic, because the offline suite is a frozen snapshot and your users are not. That is the third commitment from the start of the talk. And here is the payoff for 2.1: when a new model ships, and one did two weeks ago, the suite is what lets you say yes or no in a day instead of a quarter.
- Pitfall: skipping error analysis for a generic judge or a public benchmark. Second: grading the transcript instead of the outcome.
- Takeaway line: "Tests check a path. Evals check a distribution. You need both, and only one of them ever stops."
- Sources: Anthropic, "Demystifying evals for AI agents," January 2026; Anthropic Agent SDK post, September 2025; Husain, 2024 and 2026; Shankar et al., UIST 2024; Fowler, August 2025. Research §5.

### 2.6 Operating it (4:30). Slides 18 and 19

**Slide 18, what you touched.** `/cost`, the telemetry flag, the sandbox, the OAuth flow. Then three incidents.

- Say: `/cost`. The telemetry flag. The sandbox. The OAuth flow when you connected a server. And a trust and safety team you have never met.
- Say, what someone engineered:
  - Observability: traces per model call, tool call, and agent step. OpenTelemetry has GenAI conventions for exactly this **[verify status]**. The metrics that matter: **cost per completed task, not per request**. p95 and p99 tokens, because long conversations and bad retrieval concentrate cost in the tail. Cache hit rate. Loop iterations per task. Tool failure rate. Datadog's line from July: "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe."
  - Guardrails: defense in depth at every boundary. Input classification. Provenance tags on retrieved content. Sandboxed tool execution. Output validation. Circuit breakers on tokens and actions. Approval gates on consequential actions. Least-privilege scopes.
  - Security: Willison's lethal trifecta. **Private data, untrusted content, external communication. Any two is safe.** All three is an exfiltration path, because "LLMs are unable to reliably distinguish the importance of instructions based on where they came from." Nobody knows how to stop injection completely, and a filter that catches 95% is not a security control. OWASP's LLM Top 10 has prompt injection at number one and excessive agency at number six, and OWASP shipped an agentic top ten for 2026 **[verify names]**: goal hijack, tool misuse, identity and privilege abuse, memory poisoning, cascading failures, rogue agents.
  - Identity: the agent gets its own identity, plus short-lived delegated authority from the user. No token passthrough, no omnibus scopes.
  - Governance: audit trails and approvals. And since August 2 **[verify]**, **EU AI Act Article 50: if your system interacts with people, you tell them it is an AI.**
- Three incidents, fast:
  - EchoLeak, CVE-2025-32711. A zero-click injection in Microsoft 365 Copilot. One crafted email, and data from OneDrive, SharePoint, and Teams left through a trusted domain. The trifecta in a shipped product.
  - Replit, July 2025. An agent deleted a production database during a code freeze. The fixes shipped afterward: dev and prod separation, a planning-only mode, one-click restore. Those fixes are the guardrails box on the diagram.
  - Moffatt versus Air Canada, February 2024. The airline argued its chatbot was a separate legal entity. The tribunal disagreed. The chatbot's answer was the company's answer.

**Slide 19, when it's your agent.** The four translations.

- Say: All of this was built for you and rendered as a permission prompt, a sandbox, an OAuth flow, and a `/cost` command. In your deployment there is no prompt to click, because the user is a customer and often is not present. The approval gate becomes an async workflow or a policy. The sandbox becomes your infrastructure. The audit trail becomes a compliance artifact. And the law says you disclose.
- Pitfall: assembling the lethal trifecta by accident, one reasonable integration at a time. A retriever, then a web fetch tool, then an email sender. Nobody decides to build an exfiltration path.
- Takeaway line: "When it's your agent, its answer is your answer."
- Section wrap, build on Slide 19: the diagram again, every box now labeled "yours." Say: "That is the map. Every box on it is something you can engineer, because most of it is engineering you already know how to do."
- Sources: Willison, June 2025; OWASP 2025 and 2026; OpenTelemetry; Datadog, July 2026; EchoLeak analysis; Fortune and the AI Incident Database on Replit; McCarthy Tétrault on Air Canada; EU AI Act Article 50. Research §6.

### Section 2 checks

- Time: 2:00 + 3:30 + 3:30 + 3:00 + 3:30 + 5:00 + 4:30 = 25:00.
- Slides: 7 through 19, thirteen slides.
- Description scope, with beat numbers: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design and orchestration (2.4); evaluations and verification (2.5); observability (2.6); guardrails (2.6); security (2.3, 2.6); cost and latency (2.1, 2.2, 2.4, 2.6). Claims: prototype is not production (2.5, 2.6 incidents); tests necessary but not sufficient (2.5); evals continue after deployment (2.5).
- Structure: each area has what you touched, what someone engineered, when it's your agent, and a named pitfall.
- Verify before stage, flagged inline: Copilot retirements (2.1); CamoLeak and marketplace figures (2.3); Gartner wording (2.4); OpenTelemetry status, OWASP agentic names, Article 50 date (2.6). Full list in `research/section-2.md`.

---

## Section 3. Making the transition (5:00, 6 slides)

### 3.1 What transfers (1:15). Slide 20

- Slide: two columns. Left, the software engineering skill. Right, what it becomes.
- Say:
  - Everything in the last twenty-five minutes was engineering. Most of it is engineering you already do.
  - **Decomposition and systems thinking transfer whole.** Matt Morgis at Elsevier: "For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier." The harness is a systems design problem.
  - **Interface design becomes tool design.** The same instincts about contracts, naming, granularity, and error handling. The caller changed.
  - **Testing discipline becomes eval discipline.** Not the same thing, but the habit of writing the check before trusting the code is the habit you need.
  - Observability instincts transfer with a new schema. Traces, spans, p95s. OpenTelemetry already has the GenAI conventions.
  - Security instincts transfer. Least privilege now applies to tools. OWASP has the list.
  - Operations transfer: cost, latency, incident response, rollback. The units changed to tokens.
  - Field evidence: Gergely Orosz profiled engineers at incident.io, Sentry, Elsevier, and others who crossed over in months, not years. One twenty-five-year veteran became his company's generative AI expert in about two months by reading and prototyping.
- Takeaway line: "You are not starting over. You are adding a layer."
- Sources: Orosz, "AI Engineering in the real world," March 2025; OpenTelemetry; OWASP. Research §1.

### 3.2 What is new (1:15). Slide 21

- Slide: the ladder, prompt engineering, then context engineering, then harness engineering. Below it, the new competencies in priority order.
- Say:
  - **The ladder the field climbed in three years: prompt engineering, then context engineering, then harness engineering.** Each one absorbs the last. Nobody stopped writing prompts. They stopped thinking prompts were the job.
  - What you add, roughly in priority: model behavior intuition, which you only get by reading outputs. Context engineering. Tool design for a caller that reads the description every time. Harness and loop design. **Evals and error analysis, which is where the time goes: sixty to eighty percent of it.** AI security, because the attack surface is now the model's reasoning. Cost and latency as first-class design constraints.
  - The one most engineers find hardest, from Ross McNairn at Wordsmith: **"Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."**
- Takeaway line: "The new skill is not prompting. It is being comfortable measuring a system you cannot fully specify."
- Sources: Anthropic, September 2025; Husain, evals FAQ, 2026; Orosz, March 2025. Research §2.

### 3.3 The pitfalls, on one slide (0:45). Slide 22

- Slide: six lines, one per area, no other text.
  1. Models: a hardcoded model ID with no eval suite behind it.
  2. Context: adding instead of curating.
  3. Tools: one endpoint per tool.
  4. Harness: multi-agent before a workflow was tried.
  5. Evals: a generic judge instead of error analysis. Grading the transcript instead of the outcome.
  6. Operating: the lethal trifecta, assembled one integration at a time.
- Say:
  - You have seen all six. **Every one is a symptom of the same thing: treating the demo as the product.** works.any() shipped as works.all().
  - One more that is not on the map: reaching for a framework before understanding the loop. Anthropic's warning is that frameworks "create extra layers of abstraction that can obscure the underlying prompts and responses." Learn the loop first.
- Takeaway line: "Every pitfall on this list is a demo mistaken for a product."
- Sources: Section 2; Anthropic, December 2024. Research §3.

### 3.4 The roadmap (1:15). Slide 23

- Slide: four steps.
  1. Look before you build.
  2. Start constrained.
  3. Own the harness.
  4. Add autonomy as your evals earn it.
- Say:
  - **Look before you build. On Monday, manually review twenty to fifty outputs of whatever AI feature you are closest to.** Write down what is wrong with each one. That is error analysis, and it is the first entry in your eval suite. Do it before you build any infrastructure.
  - **Start constrained. A single model call with retrieval and examples. Then a workflow on predefined code paths. Add a loop only when it demonstrably improves outcomes.** Anthropic says find the simplest solution possible. OpenAI says start with a single agent, start small, validate with real users, and grow.
  - Own the harness. Own your prompts, your context window, your control flow. Learn the loop before you adopt a framework for it, so the framework is a convenience you can evaluate rather than a black box you depend on.
  - **Add autonomy as your evals earn it.** Every increase in autonomy is paid for by a verifier or an eval that catches what it breaks.
  - The shape of the climb, from Mitchell Hashimoto's account of his own year: chat, then reproducing manual work with an agent, then background agents, then delegating what you are confident in, then building verification tools, then continuous operation. Each step earned by the last.

**[your story #3]** What you would tell yourself at the start of the transition. It must show one thing you would do earlier, and what it would have saved. Thirty seconds, inside this beat's time.

- Takeaway line: "Autonomy is earned by evals, one step at a time."
- Sources: Husain, evals FAQ; Anthropic, December 2024; OpenAI, "A practical guide to building agents"; Hashimoto, February 2026. Research §4.

### 3.5 Resources and close (0:30). Slides 24 and 25

**Slide 24, resources.** Shown, not discussed.

- Chip Huyen, *AI Engineering: Building Applications with Foundation Models*, O'Reilly, 2025.
- Anthropic engineering: "Building effective agents" (December 2024), "Effective context engineering for AI agents" (September 2025), "Demystifying evals for AI agents" (January 2026).
- OpenAI, "A practical guide to building agents" (2025).
- Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev. Shankar and Husain, *Evals for AI Engineers*, O'Reilly, forthcoming October 2026.
- OWASP Top 10 for LLM Applications (2025) and for Agentic Applications (2026).
- OpenTelemetry GenAI semantic conventions.

**Slide 25, close.** The two thesis sentences, then "Questions."

- Say: Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer. The difference is not the tools. It is what you are responsible for. We have fifteen minutes for your questions.
- Sources: research §4.

### Section 3 checks

- Time: 1:15 + 1:15 + 0:45 + 1:15 + 0:30 = 5:00.
- Slides: 20 through 25. Total deck: 25 slides.
- Description scope, with beat numbers: which existing skills provide a strong foundation (3.1); what additional competencies the discipline demands (3.2); where to focus further learning (3.4, 3.5); a roadmap (3.4).
- Verify before stage: none flagged. The Dice hiring figure is reserved for Q&A and flagged there.

---

## Section 4. Questions and discussion (15:00, Slide 25 stays up)

### Anticipated questions, with two-line answers

1. **Do I need to learn machine learning first?** No. swyx, quoting Karpathy: "One can be quite successful in this role without ever training anything." You need model behavior intuition, which comes from reading outputs, plus enough theory to know what a model cannot do.
2. **Which framework should I learn?** The loop, first. Frameworks obscure prompts and responses and tempt complexity. Build one agent on raw API calls; after that a framework is a convenience you can evaluate rather than a dependency you cannot see through.
3. **How are evals different from tests, concretely?** A test checks one path deterministically and must pass. An eval checks a distribution of runs against graders and reports a rate, and a 100% pass rate usually means the suite is too easy. Tests live inside the loop; evals live outside it and continue after deployment.
4. **Is prompt injection solved?** No. Willison: "we still don't know how to 100% reliably prevent this from happening." Design so that no single agent holds private data, untrusted content, and an outbound channel at once; treat retrieved content as untrusted; gate consequential actions.
5. **Single agent or multi-agent?** Single agent with tools until it demonstrably fails. Multi-agent pays for parallel, breadth-first work at roughly fifteen times the tokens, and it is a poor fit for work that needs shared context.
6. **What about cost at scale?** Measure cost per completed task. Lay out prompts for cache hits, route the calls that do not need the frontier model, and set token and action budgets per run.
7. **Will better models absorb the harness and make this obsolete?** The harness moves up, not away. Compaction and verification loops were harness work two years ago; parts moved into the model, and the remaining harness got bigger. The vocabulary churned three times this summer. The responsibilities did not.
8. **How do I get hired as an AI engineer?** Ship one model-dependent system with an eval suite you can show. Demand is real: AI engineer is the top role on LinkedIn's 2026 list, and Dice reported AI and ML postings up about 101% year over year in August **[verify]**. The ranking says demand; the eval suite says you can do the job.

### Seeded discussion prompts, if the room is quiet

1. "Who here has shipped something where the model chose the control flow? What broke first?"
2. "What did your coding agent do for you this week that you would have to build yourself?"
3. "Where does your organization's AI project sit right now: pilot, workflow, or agent? What would it take to move it one step?"

### Section 4 checks

- Every answer traces to a Section 2 beat or a research entry.
- Verify before stage: the Dice figure in answer 8. Full list in `research/section-3.md`.

---

## Before the stage

### Whole-talk checks

- Time: Section 1, 5:00. Section 2, 25:00. Section 3, 5:00. Total 35:00, plus 15:00 for questions.
- Deck: 25 slides. Six in Section 1, thirteen in Section 2, six in Section 3.
- Scope from the published description, all covered: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design and orchestration (2.4); evaluations and verification (2.5); observability, guardrails, security (2.6, with security also in 2.3); cost and latency (2.1, 2.2, 2.4, 2.6); why a prototype is not production readiness (1.4, 2.5, 3.3); why tests are necessary but not sufficient (1.4, 2.5); why evals continue after deployment (1.4, 2.5); existing skills that transfer (3.1); additional competencies (3.2); where to focus further learning (3.4, 3.5).

### What only you can supply

1. **Bio, 1.2.** Three lines that establish you have shipped model-dependent systems to production, in an enterprise-agent context.
2. **Story #1, 1.2, optional.** A demo that turned out not to be the product.
3. **Story #2, 2.5.** A failure your tests passed and evals or production caught.
4. **Story #3, 3.4.** What you would tell yourself at the start of the transition.

### Verify in a browser before the slide is final

Each is a secondhand-sourced date, name, or figure. None is load-bearing; drop any one that does not check out.

| Beat | Claim | Where to check |
|---|---|---|
| 2.1 | GitHub Copilot retired five models on September 1, 2026 | GitHub changelog |
| 2.3 | CamoLeak details; the roughly one-in-eight malicious skills figure | Original disclosure; the marketplace report |
| 2.4 | Gartner's June 2025 wording on 40% of agentic projects canceled | Gartner press release |
| 2.6 | OpenTelemetry GenAI conventions stability status | opentelemetry.io semconv gen-ai page |
| 2.6 | OWASP Agentic Top 10 (2026) category names | OWASP PDF |
| 2.6 | EU AI Act Article 50 in force from August 2, 2026 | artificialintelligenceact.eu; the AI Omnibus text |
| Q&A 8 | Dice: AI and ML postings up about 101% year over year, August 2026 | Dice Tech Job Report page |

Full per-section lists, including quotes that are safe as written, are in `research/section-1.md`, `research/section-2.md`, and `research/section-3.md`.

### Do not use on stage

- The MIT NANDA 95% figure as a fact. Usable only as "the stat you have heard and should not trust," with the denominator caveat.
- Karpathy's "agentic engineering" lines from the Sequoia post. They are LLM-reconstructed, not spoken.
- Any AI-engineer salary band or growth percentage. Use LinkedIn's #1 ranking only.
- The "89% observability vs 52% evals" statistic. Untraceable.
