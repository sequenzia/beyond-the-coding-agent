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

Each area has a user slide and an owner slide, with three beats:

1. **When you are the user.** The coding-agent feature the audience has used. The two named products are Codex CLI and Devin. Devin CLI carries command anchors; Devin Desktop appears on slide 8 for its model picker.
2. **What someone engineered.** The bridge within the user slide: what had to be built for that feature to work.
3. **When you are the owner.** The responsibility for the delivered product, its operating limits, and the area's pitfall.

Define owner once on slide 3: the engineer or team accountable for the delivered product's behavior and operating limits.

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
  - The pattern for each area: **When you are the user**, including what someone engineered, then **When you are the owner**.
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

The map, then six areas. Each area has a user slide, the bridge of what someone engineered, and an owner slide. Cost and latency are deliberately spread across 2.1 (selection and routing), 2.2 (cache economics), 2.4 (budgets), and 2.6 (production metrics).

### 2.0 The map (2:00). Slide 7

- Slide: the anatomy diagram, `internal/anatomy-of-an-agentic-ai-system-landscape.svg`, full screen. No other text.
- Say:
  - Here is the whole discipline on one slide. We will walk it from the inside out.
  - At the center, an agent is a model plus a harness. The line that stuck this spring: **"If you're not the model, you're the harness."**
  - What is a harness? OpenAI's August 2026 definition: an agent "needs a way to understand a task, maintain context over time, inspect relevant information, call tools, expose progress, handle failures, request human approval when necessary, and return a useful result. That surrounding execution system is the harness."
  - **Four layers.** The model, which decides what to do. The harness around it: instructions, context and memory, tools, orchestration, guardrails, verification. The per-run platform services every run draws on: identity, security, data and knowledge. And the across-run services that let you learn from and control many runs: observability, evaluations, governance.
  - "Harness engineering" is probably the phrase you have heard most since spring. It maps onto this picture. Every box on it exists inside the coding agent you used this morning. Someone built each one. We are going to take six of them apart.
  - For each: **When you are the user**, what someone engineered, then **When you are the owner**.
- Takeaway line: "Agent equals model plus harness. Everything that is not the model is what you engineer."
- Sources: Osmani, April 2026; OpenAI, "Codex as a platform," August 2026. Research §0.

### 2.1 Models (3:30). Slides 8 and 9

**Slide 8, When you are the user.** A model picker: the pop-out window in Devin Desktop with its reasoning slider, and `/model` in Codex.

- Say: You have used the model picker. In Devin Desktop it pops out a window, and there is a slider for reasoning effort, with the price per level next to it. In Codex it is `/model`, and it sets the reasoning effort along with the model. That slider is a cost and latency dial. One layer down, Codex's config lets plan mode run at a different effort and subagents run on a different model. That is model routing, shipped as a setting. Most of you have used routing without ever calling it that.
- Say, what someone engineered: the provider manages defaults, model-specific prompt and tool tuning, failover, price changes, and retirement handling. Anthropic's documented retirements illustrate lifecycle work. They do not show how every coding-tool migration reached each user.

**Slide 9, When you are the owner.** Title: "The model is a component you select, measure, and replace."

- Say:
  - Select. Capability on your tasks, cost per completed task, latency at p95, context window, tool-use reliability, and data residency.
  - Measure. Public benchmarks use their task population and harness. Measure your product on representative cases under its operating conditions.
  - Replace. **Pinned version: controlled migration and lifecycle management. Moving alias: automatic updates and regression monitoring.** A snapshot controls one source of variation. Prompts, tools, retrieval, and the environment also affect behavior. Chen, Zaharia, and Zou found **84% versus 51% accuracy on prime/composite classification with step-by-step prompting for the March and June 2023 GPT-4 versions**. Changed instruction following partly explains the result. This is not overall model quality or a pinned snapshot changing internally.
  - Route. LangChain's August experiment selected the frontier model for **7% of agent calls across 145 tasks**, excluding judge calls. Show all three configurations: frontier-only 86.0% at $0.092 per completed task; routed 80.0% at $0.026; small-only 77.7% at $0.006. Run variation was about 2.7 points, larger than routing's 2.3-point gain over small-only. Frontier selection ranged from 4.1% to 9.1%. The displayed cost-per-completed-task reduction is about 72%; the article's 74% concerns total cost. **Which configuration meets your product's quality requirement?**
- Pitfall: a hardcoded model ID with no eval suite behind it.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Sources: Anthropic and OpenAI deprecation pages; Chen, Zaharia, Zou, revised 2023 paper; LangChain, August 2026; Codex CLI and Devin CLI docs. Research §1.

### 2.2 Context and knowledge (3:30). Slides 10 and 11

**Slide 10, When you are the user.** An instructions file and a compaction notice, side by side.

- Say: Two things you have touched. First, the instructions file. Codex and Devin CLI both read AGENTS.md, the cross-tool standard, and Codex's `/init` writes one for you. Second, the moment your session compacted and dropped something that mattered. Both tools have `/compact`, and Codex compacts on its own past a token limit. You have already felt context engineering fail.
- Say, what someone engineered:
  - Karpathy's definition from last summer: context engineering is "the delicate art and science of filling the context window with just the right information for the next step." Anthropic's version: context is **"a finite resource with diminishing marginal returns."** Models have an attention budget.
  - Chroma tested eighteen models: **performance degrades as input grows, on simple tasks, well before the window is full**. Breunig named four ways it fails. Poisoning: an error gets in and keeps getting referenced. Distraction: the model over-focuses on the context and forgets what it knows. Confusion: superfluous content shapes the answer. Clash: new information conflicts with old. One measurable: on the Berkeley function-calling leaderboard, every model got worse with more tools.
- The provider engineered instructions, compaction, memory, and retrieval. **RAG means retrieving relevant external information and supplying it to the model.** Grep, file reads, embeddings, and hybrid retrieval are methods chosen for the data and task. Cognition's SWE-grep is a code-search example.
  - Manus reported a roughly 100:1 input-to-output ratio and a tenfold cached-input price gap in its July 2025 example. **Preserve stable prompt prefixes when useful. Measure savings, and update context or tool access when correctness or authorization requires it.**

**Slide 11, When you are the owner.** What goes in the window and the four things you now own.

- Say: The vendor chose your context budget, your compaction policy, your memory convention, and your retrieval strategy. You own all four now. What goes in the window: instructions, examples, retrieved knowledge, session state, memory, tool results. Each has a relevance, a freshness, a provenance, and a size. Customer-facing raises the stakes because the context now holds another person's data. A compaction that drops a constraint can produce a wrong answer. **Memory exposed to the wrong user or tenant is a breach.**
- Pitfall: adding context instead of curating it. A big window is not permission to fill it.
- Takeaway line: "Context is a budget, not a bucket."
- Sources: Karpathy, June 2025; Anthropic, September 2025; Chroma, July 2025; Breunig, June 2025; Manus, July 2025; Cognition, October 2025; Codex CLI and Devin CLI docs. Research §2.

### 2.3 Tools and extensibility (3:00). Slides 12 and 13

**Slide 12, When you are the user.** An MCP server entry and the permission prompt.

- Say: You have installed MCP servers and seen permission prompts. Codex and Devin expose sandbox and approval settings. A model may recommend an approval decision, but **a model recommendation does not establish permission**.
- Say, what someone engineered:
  - **A tool is a contract between code and a model caller.** Evaluate granularity for the task. Consolidation is one option, such as a scheduling tool combining several API operations. Namespacing and descriptions affect selection. **Return meaningful names alongside stable IDs needed to act.** Let the caller choose concise or detailed output when useful.
  - Anthropic reported improvements from tool-description refinements. In its particular five-server example, definitions consumed about 55,000 tokens before the conversation. Tool search reduced definition overhead. Five servers do not have a fixed token cost.
  - MCP's security floor includes no token passthrough, minimal scopes, consent before local commands, and sandboxed execution.

**Slide 13, When you are the owner.** The tool contract and the action categories.

- Say: You own descriptions and their evals, payloads, granularity, and the gate. **Scoped reads: enforce access policy. Reversible changes: validate and support recovery. Consequential actions: require policy authorization or approval. Authorization applies to every category and is enforced outside the model.** Use human approval, async workflows, or enforced policies according to the deployment.
- Evidence: Legit Security demonstrated CamoLeak, a vulnerability that exfiltrated private repository data through image URLs after hidden pull-request instructions. Separately, The Hacker News reported Koi's finding of 341 malicious skills among 2,857 ClawHub skills. This is directly checked secondary reporting of that audit.
- Pitfall: copying the API surface without evaluating task fit.
- Takeaway line: "Design tools for a caller that reads the description every time and can still get it wrong."
- Sources: Anthropic, September and November 2025; MCP, July 2026; OWASP, 2025; Legit Security, October 2025; Koi via The Hacker News, February 2026; Codex CLI and Devin CLI docs. Research §3.

### 2.4 Orchestration (3:30). Slides 14 and 15

On the map this is the "Orchestration" box inside the harness: the loop, hooks, workflows. The other five harness boxes have their own areas.

**Slide 14, When you are the user.** `/plan`, subagents, hooks, `/compact`, `/resume`, `/fork`. Under them the loop: gather context, act, verify, repeat.

- Say: Plan mode. Subagents. Hooks. Compaction. Resume and fork. Both tools have every one of them. Underneath all of it is one loop: gather context, take action, verify, repeat. Hooks are the deterministic escape hatch: a PostToolUse hook runs the formatter or the tests whether or not the model believes it did. Codex ships hooks turned off; you turn them on.
- Say, what someone engineered:
  - The loop's decisions. When to stop. What carries between turns. When to compact. When to spawn a subagent, and what to hand it. Where a hook fires. The other harness boxes on the map get their own areas; this is the one that runs them. Osmani's line applies most sharply here: **"A decent model with a great harness beats a great model with a bad harness."** Evidence from OpenAI in August 2026, and it is loop-level evidence: retained reasoning across turns plus a compaction trigger took one model's score on a reasoning benchmark from 13% to 38% with six times fewer output tokens. Same model.
  - Anthropic found two failure modes in long-running agents. **Over-ambition: try to one-shot the whole app. Premature completion: a later instance sees progress and declares the job done.** The fix was engineering, not prompting: an initializer writes a feature list and a progress file, each session does one feature with a fixed startup routine, **acceptance criteria stay protected. Faulty or obsolete tests may change through review.**
  - Multi-agent, honestly. **Anthropic reported a 90.2% improvement against its single-agent research system on an internal eval. Separately, it reported about 15 times chat token use for multi-agent systems**, and it is a poor fit for work where agents need shared context or have dependencies. Anthropic names coding as the example.

**Slide 15, When you are the owner.** Workflows versus agents, and the list of things you own.

- Say:
  - Workflows are LLMs on predefined code paths. Agents direct their own. Start with the workflow. Five patterns cover most of it: chaining, routing, parallelization, orchestrator and workers, evaluator and optimizer.
  - You own: the loop. Stopping conditions, starting with a maximum number of iterations. State and resume. Retries. Escalation to a human as a tool call. Routing between a planner and cheap workers. The compaction trigger. And the budgets: tokens, actions, latency. Twelve-factor agents says it in four lines: own your prompts, own your context window, own your control flow, contact humans with tool calls.
  - Customer-facing: a human is waiting. Latency is a product requirement. An unbounded loop is an outage.
- Pitfall: multi-agent before a workflow was tried.
- Separate operating context: Gartner's June 2025 **forecast** was over 40% of agentic projects canceled by end of 2027, citing cost, value, and risk controls. It does not establish that multi-agent architecture causes cancellation.
- Takeaway line: "The loop is where autonomy gets its limits. Start with the workflow."
- Sources: Anthropic, December 2024, June 2025, November 2025; OpenAI, August 2026; Osmani, April 2026; 12-Factor Agents; Gartner, June 2025; Codex CLI and Devin CLI docs. Research §4.

### 2.5 Verification and evals (5:00). Slides 16 and 17

**Slide 16, When you are the user.** The test loop, complementary checks, and the flight-booking grader.

- Say: The coding agent can run the repository's checks. Write, run, read the failure, retry. Fowler observed models claiming all tests passed when they had not. **Run the check before accepting the claim.**
- Say, what someone engineered:
  - **Checking an action and measuring behavior across cases are complementary uses of checks.** In this talk, verification sits inside the loop and evaluation across runs sits outside it. Evals are tests of an AI system, and may use code, models, or humans as graders.
  - **Check the result. Inspect the trace.** Illustrative flight-booking grader: the agent says the flight is booked, but no matching reservation exists. Fail the result check. Check the requested traveler and itinerary against reservation state. Inspect required approvals and access constraints separately. Avoid prescribing an arbitrary tool sequence.
  - Keep pass@k, the probability of at least one success in k trials, and pass^k, the probability all k succeed. They match at k = 1 and answer different questions. Consistency matters for repeated customer use.
  - **Start with 20 to 50 tasks drawn from real failures. Read failures, refine criteria, and review grader disagreements.** Criteria can evolve as outputs expose missing requirements. Husain's 60–80% time allocation stays in attributed backup notes about his teams' experience.

**[your story #2]** A failure your tests passed and evals or production caught. It must show three things: the suite was green, the behavior was wrong, and a population-level check or a real user found it. Sixty seconds, inside this beat's time. This remains a personal-story slot, separate from the illustrative grader.

**Slide 17, When you are the owner.** Verify one, evaluate many, keep evaluating.

- Say: **You must define the checks your domain needs.** Refund limits, duplicate actions, account ownership, and ledger state may be directly checkable. Other qualities need expert judgment. Build checks for actions, measure behavior across representative cases, and keep checking production samples as the system changes. An eval suite gives evidence for a migration decision, with time and confidence depending on the task and deployment.
- Pitfall: a generic judge instead of error analysis. Trusting the success claim without checking the result.
- Takeaway line: "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."
- Sources: Anthropic, January 2026 and September 2025; Husain, March 2024 and September 2026; Shankar et al., UIST 2024; Fowler, August 2025. Research §5.

### 2.6 Operating it (4:30). Slides 18 and 19

**Slide 18, When you are the user.** `/usage`, the OpenTelemetry exporter, the sandbox, the OAuth login. Then three incidents.

- Say: `/usage`, in both tools. The OpenTelemetry exporter in Codex's config. The sandbox, and in Devin CLI the domain allowlist that goes with it. The OAuth login when you connected an MCP server. And a trust and safety team you have never met.
- Say, what someone engineered:
  - Observability: traces per model call, tool call, and agent step. OpenTelemetry has GenAI conventions for exactly this, still marked Development, so pin a snapshot and expect names to move. The metrics that matter: **cost per completed task, not per request**. p95 and p99 tokens, because long conversations and bad retrieval concentrate cost in the tail. Cache hit rate. Loop iterations per task. Tool failure rate. Datadog's line from July: "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe."
  - Guardrails: defense in depth at every boundary. Input classification. Provenance tags on retrieved content. Sandboxed tool execution. Output validation. Circuit breakers on tokens and actions. Approval gates on consequential actions. Least-privilege scopes.
- Security: Willison's lethal trifecta. **Private data, untrusted content, external communication together create an exfiltration risk. Break or constrain the path.** A web fetch can communicate externally, and one integration can supply multiple capabilities. This is one threat path, not a certificate of safety. **A probabilistic filter is insufficient as the sole security boundary.** OWASP supplies a broader threat list.
  - Identity: a separate workload identity with short-lived delegated authority is an explicitly labeled **design pattern**. Supported authorization requirements remain distinct: downstream enforcement, no token passthrough, minimal scopes.
  - Governance: audit trails and approvals. **EU AI Act Article 50: disclosure duties for covered direct AI interactions.** Commission guidance distinguishes provider and deployer obligations, applicable EU scope, and the obvious-interaction exception. Details stay in notes.
- Evidence, fast:
  - EchoLeak, June 2025: a researcher-demonstrated zero-click vulnerability in Microsoft 365 Copilot. The research reports Microsoft's statement that no exploitation was evidenced.
  - Replit, July 2025: secondary reporting describes a production database deletion during a code freeze and subsequent safeguards. Attribute to Fortune and the AI Incident Database.
  - Moffatt v. Air Canada, February 2024: legal commentary reports responsibility for misleading chatbot information. Paraphrase this lesson. The tribunal decision is not independently verified.

**Slide 19, When you are the owner.** Title: "You own the approval process."

- Say: **You own the approval process.** It can include human approval, async workflows, and enforced policies. The sandbox becomes infrastructure. The audit trail supports accountability. Disclosure duties depend on role and scope.
- Pitfall: the lethal trifecta, assembled one integration at a time. Label capabilities, not products. A web fetch may already provide external communication; one integration may supply more than one corner.
- Takeaway line: "When you are the owner, its answer is your answer."
- Section wrap: the diagram returns with its "yours" badges. **Every box is something you can engineer, because most of it is engineering you already know how to do.**
- Sources: Willison, June 2025; OWASP, 2025 and 2026; OpenTelemetry; Datadog, July 2026; EchoLeak analysis; Fortune and AI Incident Database on Replit; McCarthy Tétrault on Air Canada; European Commission, checked September 2026. Research §6.

### Section 2 checks

- Time: 2:00 + 3:30 + 3:30 + 3:00 + 3:30 + 5:00 + 4:30 = 25:00.
- Slides: 7 through 19, thirteen slides.
- Description scope, with beat numbers: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability (2.6); guardrails (2.6); security (2.3, 2.6); cost and latency (2.1, 2.2, 2.4, 2.6). Claims: prototype is not production (2.5, 2.6 incidents); tests necessary but not sufficient (2.5); evals continue after deployment (2.5).
- Structure: six paired user and owner slides, each with the engineered bridge and a named pitfall.
- Evidence status: routing, revised prime-number paper, OWASP authorization, and Commission Article 50 guidance checked September 15. CamoLeak is a researcher demonstration; Gartner is a forecast. ClawHub, Replit, and Air Canada retain secondary-source limitations. Identity is an illustrative design pattern. See the closing status table.

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
  1. Models: a hardcoded model ID with no eval suite behind it.
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
  - **Look before you build. On Monday, manually review twenty to fifty outputs of whatever AI feature you are closest to.** Write down what is wrong with each one. That is error analysis, and it is the first entry in your eval suite. Do it before you build any infrastructure.
  - **Start constrained. A single model call with retrieval and examples. Then a workflow on predefined code paths. Add a loop only when it demonstrably improves outcomes.** Anthropic says find the simplest solution possible. OpenAI says start with a single agent, start small, validate with real users, and grow.
  - Own the harness. Own your prompts, your context window, your control flow. Learn the loop before you adopt a framework for it, so the framework is a convenience you can evaluate rather than a black box you depend on.
  - **Add autonomy as your evals earn it.** Every increase in autonomy is paid for by a verifier or an eval that catches what it breaks.
  - The shape of the climb, from Mitchell Hashimoto's account of his own year: chat, then reproducing manual work with an agent, then background agents, then delegating what you are confident in, then building verification tools, then continuous operation. Each step earned by the last.

**[your story #3]** What you would tell yourself at the start of the transition. It must show one thing you would do earlier, and what it would have saved. Thirty seconds, inside this beat's time.

- Takeaway line: "Autonomy is earned by evals, one step at a time."
- Sources: Husain, evals FAQ; Anthropic, December 2024; OpenAI, "A practical guide to building agents"; Hashimoto, February 2026. Research §4.

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
- Slides: 20 through 26. Total deck: 26 narrative slides, 34 PowerPoint slides.
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
- Deck: 26 narrative slides. Six in Section 1, thirteen in Section 2, seven in Section 3. Eight animation support slides bring the PowerPoint total to 34.
- Scope from the published description, all covered: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability, guardrails, security (2.6, with security also in 2.3); cost and latency (2.1, 2.2, 2.4, 2.6); why a prototype is not production readiness (1.4, 2.5, 3.3); why tests are necessary but not sufficient (1.4, 2.5); why evals continue after deployment (1.4, 2.5); existing skills that transfer (3.1); additional competencies (3.2); where to focus further learning (3.4, 3.5).

### What only you can supply

1. **Story #1, 1.2, optional.** A demo that turned out not to be the product.
2. **Story #2, 2.5.** A failure your tests passed and evals or production caught.
3. **Story #3, 3.4.** What you would tell yourself at the start of the transition.

### Verify in a browser before the slide is final

| Claim | Status and stage treatment |
|---|---|
| Model lifecycle and CLI anchors | Vendor pages checked September 14. No claim of universal silent migration |
| Prime/composite comparison | Revised paper checked September 15. Task, prompting, and March/June 2023 versions travel with the figure |
| Routing experiment | LangChain checked September 15. Three configurations, call-share exclusion, run variation, and cost denominators retained |
| Authorization and Article 50 | OWASP and Commission FAQ checked September 15. Role, scope, and exception retained |
| CamoLeak and EchoLeak | Researcher demonstrations. EchoLeak research reports no evidence of exploitation |
| ClawHub audit | The Hacker News report checked September 14. Underlying Koi audit not independently checked |
| Gartner | Publisher forecast checked September 14. No architecture-to-cancellation causal claim |
| Replit and Air Canada | Secondary reports only. Attribute the reports and paraphrase the lesson; tribunal decision not independently verified |
| Identity pattern | Illustrative design pattern, separate from supported authorization requirements |
| OpenTelemetry and OWASP names | Source pages checked September 14; conventions remain Development |
| Hiring backup | Dice publisher figures checked September 14. LinkedIn ranking known through secondary reporting |

Unverified model-release dates and unsupported research-only numbers remain off stage. Source records hold URLs, quotes, and limitations. Screenshots, story #2, and all resource changes are explicitly deferred in this pass.

### Do not use on stage

- The MIT NANDA 95% figure as a fact. Usable only as "the stat you have heard and should not trust," with the denominator caveat.
- Karpathy's "agentic engineering" lines from the Sequoia post. They are LLM-reconstructed, not spoken.
- Any AI-engineer salary band or unsupported growth figure, including 143%. The documented Dice 101% and 18% figures remain optional attributed Q&A context. Qualify LinkedIn's #1 ranking as secondary reporting.
- The "89% observability vs 52% evals" statistic. Untraceable.
