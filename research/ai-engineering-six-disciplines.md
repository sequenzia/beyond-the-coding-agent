# The Six Disciplines of Engineering Agentic AI Systems

**Research report · 16 September 2026**

**Scope:** Model Selection, Context Engineering, Tools & Extensibility, Orchestration, Verification & Evals, and AgentOps.

This report explains the six areas as interdependent engineering disciplines. It emphasizes systems that use language or multimodal models to pursue objectives through multiple decisions, tool calls, and interactions with an environment. Its recommendations apply to both autonomous agents and workflows with bounded agentic steps.

**Evidence and method.** The research draws on original research papers, official protocol specifications, provider engineering accounts, framework documentation, and institutional guidance. Research findings are described within their experimental scope; a result on a benchmark is not treated as a production guarantee. Provider accounts supply implementation experience, not neutral comparative rankings. The decision tables, operational recommendations, and worked example are this report’s engineering synthesis. Numerical examples are illustrative calculations, not measurements from a deployed system. This is a focused research synthesis, not an exhaustive systematic literature review, and no original model experiments were conducted.

**Reading map:** [System perspective](#system-perspective) · [Model Selection](#1-model-selection) · [Context Engineering](#2-context-engineering) · [Tools & Extensibility](#3-tools--extensibility) · [Orchestration](#4-orchestration) · [Verification & Evals](#5-verification--evals) · [AgentOps](#6-agentops) · [Integrated example](#7-an-integrated-example) · [Implementation sequence](#8-a-practical-implementation-sequence) · [Open questions](#9-open-questions-and-emerging-directions) · [Source guide](#10-source-guide)

## System perspective

The central engineering objective is **reliable completion of useful work within explicit constraints**. Those constraints include correctness, time, cost, permissions, data handling, and the consequences of failure.

A useful working distinction is that a *workflow* determines much of its execution path in code, while an *agent* lets the model choose more of its next steps from observations. These approaches can coexist: a deterministic transaction workflow can contain an agent that investigates an ambiguous customer request. Anthropic makes this distinction in its foundational architecture guidance. [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).

| Discipline | Primary question | Main design objects | Evidence of effectiveness |
|---|---|---|---|
| Model Selection | Which model and inference configuration fit this decision? | Candidate models, budgets, routing policies, deployment options | Task success, consistency, latency, cost per successful outcome |
| Context Engineering | What information should the model see at this step? | Instructions, retrieval, working state, memory, source provenance | Evidence coverage, grounding, memory accuracy, context efficiency |
| Tools & Extensibility | What capabilities can the system invoke, and under which contracts? | Tool schemas, adapters, credentials, skills, protocols | Correct tool selection, valid arguments, authorized and correct effects |
| Orchestration | How does work progress, pause, recover, and terminate? | State machines, agent loops, checkpoints, task queues, delegation | Completion, recovery, bounded execution, correct coordination |
| Verification & Evals | What evidence establishes correctness and fitness for use? | Validators, graders, test cases, evaluation environments | Outcome quality, policy compliance, uncertainty, regression detection |
| AgentOps | How is the system operated and improved throughout its lifecycle? | Releases, traces, SLOs, cost controls, incident procedures | Sustained quality, service reliability, controlled risk, unit economics |

The boundaries overlap deliberately. A tool’s output becomes context. An orchestration choice changes model costs. A production incident becomes an evaluation case. Verification can determine whether the orchestrator continues, escalates, or stops.

Security, privacy, product design, and domain expertise run through all six areas. They cannot be assigned exclusively to the model or added only at deployment.

One quantitative illustration explains why this matters. If a task requires 20 successful steps, each with an independent 98% success probability, the probability that every step succeeds is approximately `0.98^20 = 66.8%`. Real steps are neither equally difficult nor independent, and recovery can improve outcomes. The calculation nevertheless shows why excellent individual responses do not automatically produce reliable trajectories.

## 1. Model Selection

### Definition and scope

Model selection is the process of choosing and configuring the model or set of models that best satisfy a workload’s requirements. It includes generative models, reasoning configurations, embedding models, rerankers, classifiers, and evaluators where these components are used.

The relevant unit is usually **a model operating inside a particular system configuration**: instructions, tools, context policy, inference budget, and verification. A model that excels with one harness may perform differently with another. A *harness* is the surrounding software that assembles inputs, executes tools, maintains state, and controls the run.

Selection also includes deployment: a hosted API, a managed deployment of open weights, or self-hosted inference. “Open weights” does not by itself establish an unrestricted license, transparent training data, or low operating cost; these are separate properties to inspect.

### Key concepts and methodologies

**1. Task-specific, multidimensional evaluation.** Define the work before choosing the model. Evaluate instruction adherence, domain competence, tool behavior, uncertainty handling, modality support, and performance on realistic context lengths. Measure efficiency and robustness alongside accuracy. HELM established a useful methodological precedent by evaluating multiple dimensions under standardized scenarios, rather than reducing model quality to a single score. [Holistic Evaluation of Language Models](https://arxiv.org/abs/2211.09110).

**2. Quality thresholds and Pareto tradeoffs.** A configuration is Pareto-dominated when another is at least as good on every relevant dimension and better on one. Select among the remaining configurations according to product priorities. Hard constraints, such as an authorization requirement or maximum response time, should not disappear inside a weighted average. OpenAI’s selection guidance recommends establishing sufficient accuracy before optimizing cost and latency. [Model selection](https://developers.openai.com/api/docs/guides/model-selection).

**3. Inference-time compute.** Model size is only one source of capability. Additional reasoning, candidate generation, search, or verification can improve some tasks while increasing cost and delay. Research on test-time computation shows that the benefit depends on task difficulty and the allocation strategy. It does not establish that more computation universally improves agent performance. [Scaling LLM test-time compute](https://arxiv.org/abs/2408.03314).

**4. Routing, cascades, and fallback.** Routing selects a model before solving a request. A cascade first tries one configuration and escalates when a measured signal warrants it. Fallback handles availability or execution failure. These have different objectives and should be evaluated separately. RouteLLM demonstrates learned routing between stronger and weaker models using preference data; its reported savings are specific to its experimental setup. [RouteLLM](https://arxiv.org/abs/2406.18665).

**5. Adaptation.** Prompting and examples shape behavior within the current request. Retrieval supplies external evidence. Fine-tuning changes model parameters to improve learned behavior or task specialization. Distillation can transfer a stronger system’s behavior into a smaller model using curated examples. These techniques are complementary, but they address different failure causes. For example, tuning a model is a poor default response to a stale source document.

**6. Calibration and selective automation.** A system can choose to answer, investigate further, or escalate. Model-generated confidence is a feature to validate, not a trustworthy probability by default. Measure the relationship between an acceptance threshold, automated coverage, and the error rate among accepted cases.

### Importance and impact

The model determines which decisions the system can make effectively, but also how much supporting structure it needs. Better tool selection can reduce calls. Better recovery can reduce human intervention. A more capable model may therefore reduce total task cost despite higher inference prices.

Conversely, a fast specialized model may be ideal for extraction or routing even when a larger model handles ambiguous planning. The right comparison is between complete task outcomes, including retries and review.

An illustrative accounting measure is:

`Cost per successful task = total cost of all attempted tasks / number of verified successful tasks`

Include model calls, tools, retrieval, infrastructure, evaluator calls, and human review. Track the costs of failures and corrections separately when their impact is material. State whether success includes cases completed by a human after escalation.

### Key challenges and common pitfalls

| Pitfall | Why it causes trouble | Better approach |
|---|---|---|
| Selecting from a general leaderboard | The benchmark may measure a different task, language, budget, or harness | Use benchmarks to shortlist, then test actual workflows |
| Comparing only token prices | A cheap model may require more steps, retries, or review | Compare verified outcome cost and completion latency |
| Using the largest model everywhere | Some steps have little need for expensive reasoning | Optimize individual stages after establishing a working baseline |
| Treating the maximum context window as usable comprehension | Accepted input length does not measure evidence use | Test realistic retrieval and reasoning at several lengths |
| Escalating only when the model says it is unsure | Confident errors may never escalate | Use task risk, evidence gaps, validator failures, and calibrated signals |
| Assuming fallback is behaviorally interchangeable | Providers and models can differ in tool schemas, refusals, and outputs | Validate every fallback configuration and its operating constraints |
| Changing model and harness together without tracking them | Regressions become difficult to attribute | Record all versions and use controlled comparisons |

### Best practices and strategies

Build a representative task set with clear success conditions, difficult slices, and realistic failure costs. Establish a capable baseline. Then change one major factor at a time: model, reasoning budget, prompt, retrieval policy, or tools. If you later optimize these jointly, retain ablations that reveal which changes produced the benefit.

Use two comparison modes. A fixed harness comparison estimates how candidates behave under common conditions. A best-configured system comparison estimates the result a team can obtain after reasonable tuning for each candidate. Report which question you are answering and constrain tuning effort and inference budgets fairly.

For self-hosting, include hardware utilization, memory capacity, throughput under concurrency, queueing, operational staffing, model loading, and quantization effects in the analysis. For hosted options, inspect quotas, versioning, availability, data handling, and integration requirements. A nominally compatible API does not eliminate behavioral migration work.

Use pinned versions where available. Record the returned model identifier, configuration, and evaluation date. Reevaluate on model upgrades, significant traffic changes, and major changes to context or tools.

**Recommended decision artifact:** a model scorecard containing workload slices, verified success, repeated-run consistency, latency percentiles, cost per successful task, escalation rate, deployment constraints, and the rationale for selection.

**Example:** A support system may use a small model for intent classification, a more capable model to resolve conflicting policy evidence, and ordinary application code to calculate eligibility and execute a refund. This is a design hypothesis to validate on the organization’s workload, not a universal architecture.

## 2. Context Engineering

### Definition and scope

Context engineering is the design of the information made available to the model at each inference step: its content, structure, timing, provenance, and lifecycle. It includes instructions, examples, tool definitions, retrieved evidence, conversation history, working state, and selected persistent memories.

Prompt engineering is one part of this discipline. Context engineering additionally decides what to retrieve, retain, transform, omit, and refresh as the system acts. Anthropic’s engineering account emphasizes this iterative curation and discusses just-in-time retrieval, compaction, and structured notes. [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

### Key concepts and methodologies

**1. An explicit context composition.** A useful design inventory distinguishes governing instructions, current user intent, authoritative application state, external evidence, and historical interaction. They may all be encoded as tokens, but they have different meanings and trust levels. Source material that says “ignore your instructions” remains source material.

**2. Retrieval-augmented generation, or RAG.** Retrieval supplies evidence from an external store at inference time. The original RAG research combined parametric model knowledge with non-parametric retrieval for knowledge-intensive generation. Modern implementations use a wider range of retrieval systems and need not reproduce that paper’s architecture. [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401).

A practical retrieval pipeline includes document parsing, identity and metadata preservation, indexing, query formulation, retrieval, filtering, reranking, context assembly, and source attribution. Each stage can fail independently. Diagnose whether relevant information was absent from the corpus, missed by retrieval, discarded during assembly, or ignored during generation.

**3. Hybrid search and reranking.** Lexical search is valuable for exact identifiers and terminology; dense vector search can find conceptually related passages with different wording. Hybrid retrieval combines these signals, and a reranker can reorder candidates for the current query. Azure AI Search documents parallel keyword/vector retrieval and reciprocal rank fusion as one concrete implementation. Hybrid search is a candidate strategy to test, not a guarantee that every corpus needs both approaches. [Hybrid search overview](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview).

**4. Long context and relevance.** Larger context windows can support full documents, broad comparisons, and cross-document reasoning. They also increase the amount of potentially distracting or contradictory material. “Lost in the Middle” demonstrated position-dependent performance in the models and tasks studied. Use it as a reason to evaluate evidence use, rather than assuming identical behavior in every later model. [Lost in the Middle](https://arxiv.org/abs/2307.03172).

**5. Memory tiers.** Distinguish current working state from durable history and selected memories. MemGPT explored managing information across memory tiers to work beyond a fixed model context window. This illustrates an architectural approach, not evidence that stored memories are automatically accurate or useful. [MemGPT](https://arxiv.org/abs/2310.08560).

| Information class | Typical content | Recommended lifecycle |
|---|---|---|
| Working state | Goal, active subtask, blockers, current evidence | Updated throughout the run |
| Interaction history | Messages, tool calls, observations | Retained under a defined policy; selectively retrieved |
| Episodic memory | A previous task and its observed outcome | Store with time, scope, and source references |
| Semantic memory | A stable user preference or domain fact | Validate, update, expire, and support deletion |
| Procedural knowledge | A reusable process or skill | Review and version like maintained documentation or code |

**6. Compaction and recoverable history.** A summary is a lossy representation. Preserve the original evidence separately when retention rules permit, so later steps can inspect what the summary omitted. Anthropic’s managed-agent architecture separates durable session events from the context assembled for any particular inference. This is a useful example of treating storage and model input as different responsibilities. [Scaling Managed Agents](https://www.anthropic.com/engineering/managed-agents).

### Importance and impact

Context determines which evidence and constraints are available when a decision is made. Better context can improve results without changing the model; incorrect context can make a capable model confidently wrong.

It also governs continuity. An agent that forgets a user’s constraint, repeats a completed action, or mistakes an earlier hypothesis for an established fact may fail despite individually plausible responses.

Context has operational costs: retrieval latency, input tokens, storage, indexing, and maintenance. Optimize for evidence sufficient to support the task, rather than minimizing tokens at the expense of missing decisive information.

### Key challenges and common pitfalls

- **Context accumulation:** every result is appended until important information becomes difficult to find.
- **Bad segmentation:** a paragraph is separated from its exception, a table from its headings, or a code block from its surrounding contract.
- **Staleness and contradictions:** an obsolete policy outranks a recent authoritative version.
- **Access leakage:** retrieval, caches, summaries, or memories expose information from another user or tenant.
- **Memory contamination:** an unverified model inference becomes a durable “fact.”
- **Lossy summaries:** identifiers, negative constraints, unresolved questions, or authorization details disappear.
- **Citation theater:** a source link is present, but the source does not support the associated claim.
- **Instruction injection:** text obtained from a document or tool attempts to redirect behavior. AgentDojo specifically studies attacks through tool-returned data, showing why external context needs an explicit trust boundary. [AgentDojo](https://arxiv.org/abs/2406.13352).

### Best practices and strategies

Treat context assembly as a versioned transformation from authoritative state and evidence into a model input. Give it tests and measurements, as you would a data pipeline.

For every retrieved item, preserve an identifier, source, time or version, access scope, and enough surrounding structure to interpret it. Prefer retrieving a coherent section when the meaning depends on adjacent conditions. Use document-specific parsing for tables, code, and scanned material.

Enforce access controls before unauthorized content reaches the model or an insufficiently protected intermediate store. Recheck access on retrieval from memories and caches. A document’s former accessibility does not establish that it is still accessible now.

Make memory writes deliberate. Distinguish a user statement from an inferred preference, record provenance, define expiry, and provide correction and deletion. Keep authorization and transaction truth in authoritative application state; do not reconstruct them solely from a conversational summary.

Use hybrid approaches when useful: preload essential instructions and current task state, then retrieve detailed evidence on demand. Reserve context capacity for upcoming tool results and the output. Evaluate compaction using tasks whose completion depends on details from earlier steps.

**Recommended measurements:** retrieval recall and precision at a chosen cutoff, ranking quality, required-evidence coverage, source freshness, answer support, memory write/read accuracy, compaction retention, token usage, and retrieval latency. Measure retrieval quality separately from final answer quality.

**Example:** A policy agent should retrieve the applicable policy version, customer jurisdiction, transaction date, and relevant exceptions. Similar-sounding passages from several years are insufficient without applicability metadata. The context problem is determining which evidence governs this case.

## 3. Tools & Extensibility

### Definition and scope

Tools are executable capabilities through which an agent obtains observations or causes changes: searching a corpus, querying a database, running code, operating a browser, creating a ticket, or updating a business record.

Extensibility is the architecture for adding and maintaining these capabilities and the knowledge needed to use them. It includes tool adapters, integration protocols, capability discovery, skills, plugin packaging, credential management, and compatibility testing.

The model generally proposes a tool invocation. Application software decides whether and how it executes. This boundary is where probabilistic decisions meet executable authority.

### Key concepts and methodologies

**1. Tool contracts.** A robust contract describes purpose, required inputs, outputs, preconditions, errors, side effects, and relevant constraints. Agent-facing design deserves separate attention from the underlying API. Anthropic’s tool-engineering account emphasizes clear naming, useful return values, unambiguous descriptions, and evaluations based on realistic tasks. [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents).

**2. Structured generation and runtime validation.** Constrained outputs can improve syntactic reliability. For example, OpenAI’s Structured Outputs supports adherence to supported JSON schemas, with explicit handling needed for cases such as refusals or incomplete responses. A conforming object can still name the wrong customer, amount, or destination. Syntax, semantic validity, authorization, and business correctness are separate checks. [Structured model outputs](https://developers.openai.com/api/docs/guides/structured-outputs).

**3. Capability granularity.** Tools can be primitives such as `read_record`, domain operations such as `prepare_return`, or broad environments such as a shell. Primitives enable flexible composition but may require many calls. Domain operations can encode business invariants but become brittle if they bundle unrelated choices. Broad execution environments offer flexibility with a larger permission surface. Choose granularity by task performance and controllability.

**4. Progressive capability discovery.** Loading every schema and instruction into every call increases selection complexity and context cost. Expose a useful catalog, then load detailed capabilities when relevant. Test discovery itself: the system must find a tool before it can use it.

**5. Interoperability and reusable procedures.** Several layers solve different integration problems:

| Layer | Role | Important boundary |
|---|---|---|
| API or function tool | Exposes an operation with an application-defined contract | The implementation must enforce its contract |
| Model Context Protocol, or MCP | Standardizes connections between model applications and providers of tools and context | Protocol compatibility does not establish trust or business authorization |
| Agent2Agent, or A2A | Supports communication with independently implemented agents, including task state and artifacts | Capability discovery does not guarantee competence or appropriate delegation |
| Skill | Packages task instructions, procedural knowledge, and optional resources or scripts | Instructions do not grant execution permissions |
| Plugin or integration package | Bundles capabilities for installation and distribution | Packaging is not an assurance of safety or compatibility |

The versioned MCP specification consulted here is **2025-11-25**. It defines hosts, clients, servers, and contextual capabilities. A2A **1.0.0** describes agent discovery and stateful task interactions. These are complementary architectural roles; their features can overlap, and an agent may itself be exposed as a tool. [MCP specification](https://modelcontextprotocol.io/specification/2025-11-25), [A2A core concepts](https://a2a-protocol.org/v1.0.0/topics/key-concepts/).

The Agent Skills format packages instructions in `SKILL.md` with optional scripts and reference material. Its documented discovery and activation stages illustrate progressive disclosure of procedural knowledge. [Agent Skills overview](https://agentskills.io/home).

### Importance and impact

Tools let the system use fresh information, compute exact results, and perform work beyond text generation. They also determine the agent’s reachable action space. A model cannot reliably correct a booking if the tools cannot identify the booking, inspect its current state, and apply an authorized update.

A well-designed tool can remove unnecessary reasoning. Returning a customer’s eligible orders is easier to use than returning the entire order database. Returning an explicit operation status is more useful than a vague success message.

Tool quality therefore affects model accuracy, context volume, security, latency, and recovery at once.

### Key challenges and common pitfalls

**Ambiguous tools.** Several nearly identical tools can make selection unreliable. Similar names with different side effects are especially troublesome.

**Overbroad authority.** A single credential or unrestricted shell can grant far more access than the current task requires. An instruction telling the model to be careful does not enforce a permission boundary.

**Unclear execution outcomes.** A timeout may occur after a remote operation succeeds. Blindly retrying a purchase, message, or update can create duplicates.

**Unsafe trust in returned content.** Search results, repository files, tool descriptions, and responses can contain misleading instructions. Connecting a server does not make every value it returns authoritative.

**Credential and proxy mistakes.** MCP’s security guidance addresses confused-deputy problems, token passthrough, session attacks, and other integration risks. Its authorization specification defines particular transport-level flows; it does not replace application-level permission checks. [MCP authorization](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization), [MCP security best practices](https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices).

**Uncontrolled extensions.** A tool, skill, or plugin update can change executable behavior and instructions simultaneously. Extensions belong in the software supply chain, with ownership, versioning, and a review process appropriate to their authority.

### Best practices and strategies

Design tools around coherent user intentions. Define exact identifiers, units, time zones, and enum values. Return bounded, structured results with provenance and useful error categories. Distinguish “no matching records,” “access denied,” “temporary failure,” and “operation outcome unknown.” These conditions require different responses.

Enforce identity and permissions outside the model. Bind execution to the authenticated user, tenant, allowed resources, and current task. Keep secrets in the execution layer or a credential service whenever possible, so ordinary model inputs and generated code do not need to handle them.

For consequential changes, support a concrete preview and an execution step where the product requires review. Bind approval to the exact action, target, parameters, and relevant version of state. Do not let a later change to those details silently inherit the earlier approval.

Make mutating operations idempotent where possible. A caller-provided operation identifier can allow the server to recognize a retry and return an equivalent result without repeating the effect. Correctness also requires the deduplication record and underlying mutation to be coordinated. AWS’s Builders’ Library explains the design and ambiguous-response problem in detail. [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).

Evaluate tool use at four levels: selection, argument correctness, execution behavior, and resulting state. Include missing tools, permission failures, malformed output, partial completion, timeouts, and version changes. Test the real operational contract; a mock that always returns success conceals most integration risk.

**Recommended tool registry fields:** owner, purpose, schema version, read/write behavior, required permission, idempotency support, timeout, retry policy, output limit, cost model, audit fields, and representative evaluation cases.

**Example:** An agent proposes an address change. The tool layer verifies ownership, validates the address, checks that the order is still editable, applies the update with an operation ID, and returns the updated record version. The agent’s fluent explanation is not the enforcement mechanism.

## 4. Orchestration

### Definition and scope

Orchestration governs how a system progresses through decisions and actions. It includes control flow, state transitions, scheduling, concurrency, delegation, interruption, recovery, human involvement, and termination.

It is broader than arranging prompts. A production orchestrator must handle the difference between a model’s proposed next action, an action dispatched to a service, and an action whose result has been observed and verified.

### Key concepts and methodologies

**1. Closed-loop action.** The system observes the environment, selects an action, executes it, and updates its state from the result. ReAct is a foundational research example of interleaving reasoning and action so observations can influence later decisions. Production systems can implement this principle without requiring access to a model’s private reasoning trace. [ReAct](https://arxiv.org/abs/2210.03629).

**2. Architecture selection.** Choose a control structure that matches the uncertainty in the task:

| Pattern | Good fit | Main tradeoff |
|---|---|---|
| Fixed sequence or state machine | Known process with explicit conditions | Predictable, but exceptional cases need designed branches |
| Router with specialized workflows | Distinct task categories | Routing becomes a critical decision |
| Single-agent tool loop | The next useful action depends on observations | Flexible, but needs limits and recovery rules |
| Planner and executor | Tasks benefit from explicit decomposition | Plans can become stale or infeasible |
| Parallel workers with aggregation | Independent work can be divided | Requires integration and conflict handling |
| Generator and evaluator loop | A useful rubric can guide bounded revision | Adds cost and can reinforce evaluator mistakes |
| Multiple specialized agents | Isolation or specialization has measurable value | Adds coordination, handoff, and state-consistency problems |

Prompt chaining, routing, parallelization, orchestrator/worker patterns, and evaluator/optimizer patterns are described in Anthropic’s architecture guidance and LangGraph’s implementation guide. The table is a selection aid, not a maturity ladder that every system should climb. [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), [Workflows and agents](https://docs.langchain.com/oss/python/langgraph/workflows-agents).

**3. Explicit state.** Store the objective, constraints, completed work, pending actions, results, remaining budgets, and terminal status in structured application state. Free-form conversation can help explain the work, but should not be the only record of what happened.

**4. Durable execution.** Checkpoints support resumption after interruption or failure. Distinguish thread state from long-term memory and from external business state. LangGraph documents checkpointers and cross-thread stores as separate persistence mechanisms. Its interrupt behavior also illustrates an important detail: resuming can rerun code before an interruption point. [LangGraph persistence](https://docs.langchain.com/oss/python/langgraph/persistence), [LangGraph interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts).

**5. Coordination and delegation.** A delegated task needs an objective, bounded scope, available evidence, authority, budget, and acceptance criteria. Returned work needs provenance and verification. MAST research categorized failures across studied multi-agent systems into system design, inter-agent misalignment, and task verification, reinforcing that adding agents also adds failure modes. [Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657).

### Importance and impact

Orchestration turns individual model decisions into a coherent process. It determines whether an agent recovers from a tool error, remembers an unfinished task, respects a changed user constraint, or continues indefinitely.

It also governs the scope of autonomy. The same model can operate as a read-only investigator, a drafter requiring review, or an executor of bounded transactions. These are different products with different failure consequences.

For long-running work, coherent handoffs and verifiable incremental progress become especially important. Anthropic’s work on long-running coding harnesses describes failures such as attempting too much in one session and prematurely declaring completion, and uses persistent artifacts to improve continuity. [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

### Key challenges and common pitfalls

- **Unbounded loops:** repeated searches, retries, revisions, or delegations without progress.
- **Premature completion:** the system equates producing a plausible response with satisfying the objective.
- **Plan fixation:** later evidence no longer supports the original plan, but execution continues.
- **Authority loss at handoff:** delegated agents receive instructions without the original constraints.
- **Concurrent writes:** workers overwrite shared state or perform conflicting external actions.
- **Duplicate effects on recovery:** a checkpoint records less than the external service has already done.
- **Unclear ownership:** every agent assumes another will verify the final result.
- **Correlated verification:** several agents repeat the same unsupported assumption and create an illusion of consensus.

### Best practices and strategies

Start with an explicit workflow or one agent with a small tool set. Introduce another agent only when there is a concrete hypothesis: independent work can proceed in parallel, context must be isolated, different permissions are needed, or specialized behavior improves results. Compare against a single-agent baseline under comparable resource budgets.

Keep ordinary business invariants in code: required fields, resource access, transaction conditions, and allowed transitions. Let models handle ambiguity where their flexibility adds value.

Define terminal states precisely: completed, failed, canceled, awaiting input, awaiting approval, and exhausted budget should not collapse into one “done” flag. For completion, require evidence that the acceptance criteria hold.

Bound elapsed time, model calls, tool calls, tokens, monetary cost, recursion, and concurrent tasks as appropriate. Add a progress signal: repeated calls producing no new evidence should trigger a strategy change or escalation. Reserve capacity for verification and final reporting rather than spending the entire budget on exploration.

Treat resumption as reconciliation. On restart, identify actions that were proposed, dispatched, confirmed, or left uncertain. Query external state when needed before retrying. Checkpointing alone does not provide exactly-once external effects.

For concurrent work, use explicit ownership, version checks, isolated workspaces, transactions, or merge procedures. “The agents will coordinate in conversation” is not a substitute for a consistency design.

Place human review where it can change a consequential decision. Present the exact proposed action, evidence, uncertainties, and expected effect. Support useful continuation after approval, rejection, or correction. Revalidate conditions that may have changed while waiting.

**Recommended measurements:** task completion, time to completion, calls per task, loop incidence, recovery success, duplicate-action rate, escalation rate, handoff failures, and the portion of latency spent waiting on dependencies or review.

**Example:** A coding agent checkpoints its task list, changes, and test results. After interruption, it checks the current repository, runs an appropriate baseline check, and resumes the next incomplete item. A prose note saying “almost finished” is insufficient evidence of progress.

## 5. Verification & Evals

### Definition and scope

Verification checks whether a specific claim, action, or artifact satisfies defined conditions. Evaluation measures how well a system performs across a distribution of tasks and operating conditions. Both are necessary, but they answer different questions.

For example, a runtime validator can reject an invalid transaction. An evaluation can estimate how often an agent proposes invalid transactions, misses valid ones, or fails to recover after rejection. A benchmark score describes measured behavior; it does not prove that every future action will be correct.

Here, “verification” includes ordinary executable checks and evidence review. It does not imply formal proof of an unconstrained language model. Formal methods can verify bounded software properties and some workflow invariants under stated assumptions.

### Key concepts and methodologies

**1. Evaluate the complete episode.** An agent evaluation typically includes an initial environment, a task, an agent configuration, a trajectory of actions, the resulting state, and one or more graders. Inspect both the final result and how it was reached. A correct answer obtained through an unauthorized action is not an acceptable success. Anthropic’s agent-evaluation guidance distinguishes tasks, trials, trajectories, outcomes, and grading approaches. [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

**2. Use a portfolio of evaluation layers.** Component checks help diagnose; end-to-end checks establish product behavior.

| Layer | Question | Example |
|---|---|---|
| Contract | Is the data structurally and semantically valid? | Valid schema, recognized account, amount in allowed range |
| Component | Does a particular subsystem work? | Retriever finds the governing policy |
| Decision | Was a particular choice appropriate? | Agent selects an applicable tool or asks for missing information |
| Trajectory | Were necessary constraints respected throughout? | Identity checked before an account modification |
| Outcome | Did the environment reach the intended state? | Exactly one authorized change appears in the correct record |
| Robustness | Does behavior hold under perturbation or failure? | Stale evidence, reordered results, tool timeouts |
| Security | Can an adversary redirect or exploit the agent? | Malicious instructions embedded in tool output |
| Product | Did the system deliver useful work for users? | Resolution quality, rework, user effort, and time saved |

**3. Match the grader to the claim.** Prefer an executable check when the target property is executable. Database assertions, unit tests, calculations, and schema checks can be stronger evidence than a model’s opinion about the same property. Use human or model-based judgment for qualities such as explanation clarity or open-ended synthesis, where multiple valid outputs exist.

**4. Separate outcome correctness from trajectory constraints.** Exact agreement with one reference action sequence can reject valid alternatives. Instead, evaluate necessary ordering or safety conditions explicitly and allow different legitimate solution paths. Likewise, a final-state check should focus on required changes and forbidden side effects, rather than requiring irrelevant state to match a fixture byte for byte.

**5. Calibrate model-based graders.** LLM judges can scale assessment, but research documents position, verbosity, self-preference, and reasoning limitations. Use specific rubrics, examples, human-labeled calibration sets, and checks for disagreement. Randomize or reverse response ordering in pairwise assessments. The grader’s agreement must be demonstrated on the target task; findings from an earlier benchmark are not a guarantee for a new application. [Judging LLM-as-a-Judge](https://arxiv.org/abs/2306.05685).

**6. Measure repeated-run reliability.** One successful run only establishes that success was possible. The original τ-bench evaluates tool-and-user interactions against goal database states and introduces `pass^k` to examine consistency across repeated trials. [τ-bench](https://arxiv.org/abs/2406.12045).

Two metrics are easy to confuse:

- **pass@k:** the probability that at least one of `k` attempts succeeds. This is useful when multiple candidates can be produced and a valid one can actually be identified.
- **pass^k:** the probability that all `k` attempts succeed. This emphasizes consistent reliability.

For one task with independent attempts and constant success probability `p`, these become `1 − (1 − p)^k` and `p^k`, respectively. At `p = 0.8` and `k = 5`, they are about 99.97% and 32.77%. The gap explains why best-of-many demonstrations can exaggerate dependable single-run performance.

Real tasks have different success probabilities and trials may be correlated. Estimate per-task behavior and aggregate according to the deployment distribution; do not simply raise the overall average success rate to a power and call it measured reliability. Also, pass@k does not supply a mechanism for recognizing the successful candidate.

### Importance and impact

Evaluation makes improvement measurable. It distinguishes a model deficiency from a retrieval miss, a tool integration failure, or an invalid success criterion. Without that distinction, teams can spend time changing prompts when the actual issue is an inaccessible document or duplicate transaction.

Verification also enables bounded autonomy. Reliable precondition and postcondition checks allow a system to execute some tasks automatically while routing ambiguous or consequential cases for review.

### Benchmarks: what they do and do not establish

| Resource | Useful signal | Limitation when selecting a production system |
|---|---|---|
| [HELM](https://arxiv.org/abs/2211.09110) | Broad, multidimensional language-model assessment | Does not represent a specific organization’s tools and business process |
| [Berkeley Function Calling Leaderboard](https://gorilla.cs.berkeley.edu/blogs/8_berkeley_function_calling_leaderboard.html) | Function selection and argument generation, including executable evaluation | Correct calling behavior does not establish authorization or end-to-end business correctness |
| [SWE-bench](https://arxiv.org/abs/2310.06770) | Repository-level software issue resolution | Results depend on benchmark version, environment, harness, tests, and budget |
| [τ-bench](https://arxiv.org/abs/2406.12045) | Stateful tool use, policy following, and simulated user interaction | Simulator behavior and benchmark domains constrain generalization |
| [AgentDojo](https://arxiv.org/abs/2406.13352) | Utility and robustness under tool-output prompt injection | Tested attacks and environments do not exhaust the threat space |

Use public benchmarks for research context and candidate screening. Your release decision should primarily depend on tests representing your product, permissions, data, and users.

### Key challenges and common pitfalls

**Weak success definitions.** A grader that rewards confident explanations can miss an incorrect external action. A test that checks only a database mutation can miss privacy leakage elsewhere in the run.

**Dataset leakage and overfitting.** Repeatedly editing prompts against the same test cases converts the test set into a development set. Related records, document versions, or templated questions can leak across nominally separate splits.

**Unrepresentative simulations.** A cooperative simulated user, instant tools, and clean documents make evaluations easier than production. Simulators can also introduce biases unrelated to the deployed users.

**Unreliable graders.** A judge can prefer fluent but false outputs, accept malicious grading instructions in candidate text, or fail to notice a subtle policy violation. A test suite can contain incorrect expected answers.

**Insufficient sampling.** Small score differences may be noise. Averages can conceal failures concentrated in a language, user group, task type, or high-risk action.

**Self-certification.** Asking the same model whether its output is correct can help surface issues, but does not independently establish correctness. A second model can also share the first model’s error.

**Harness contamination.** An agent can accidentally or deliberately alter test files, inspect hidden answers, or exploit evaluator weaknesses unless the environment isolates them appropriately.

### Best practices and strategies

Develop evaluation cases early from actual task requirements. Combine representative examples, difficult slices, known failure cases, and adversarial tests. Human-review synthetic cases before relying on them. Preserve a held-out release set and periodically add fresh cases. OpenAI’s evaluation guidance emphasizes task-specific tests, continuous evaluation, and calibration of automated scoring with human judgment. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices).

For each case, specify the initial state, user objective, relevant policy, permitted effects, required final evidence, and forbidden outcomes. Record environment and dataset versions. Reset state between trials so one run cannot make the next artificially easier or harder.

Keep capability and regression suites distinct when useful. Capability tests identify headroom; regression tests protect behaviors that already work. Add every consequential production failure to an appropriate suite once you understand it.

Compare changes on matched tasks. Report sample sizes, repeated-trial counts, uncertainty, and slice performance. A paired analysis or bootstrap over task units can be more informative than comparing two isolated averages; account for clustering when multiple runs share a task. Select sample size according to the smallest meaningful change and the cost of missing a failure.

For rare failures, “we saw none” requires context. Under a simple independent Bernoulli model, zero failures in `n` trials gives an approximate 95% upper bound of `3/n` on the failure probability. Thus, zero failures in 100 tests is compatible with a rate near 3%. This rule is an approximation and becomes less informative when trials are dependent or unrepresentative.

Use hard gates for unacceptable effects, alongside quality metrics for gradable outcomes. Report error severity, not just count. Evaluate abstention and escalation for both correctness and usefulness: a system that declines every task can avoid many errors while providing little value.

Test the grader itself. Measure false accepts, false rejects, agreement with expert review, sensitivity to phrasing and ordering, and susceptibility to injected grading instructions. Version graders and their prompts just as carefully as the agent.

Protect evaluation environments from unintended real-world writes. Use controlled service instances, fixtures, or sandboxed integrations that preserve the behavior being tested. Shadow evaluation against live traffic must have its own side-effect controls.

**Recommended scorecard:** verified task success, policy compliance, severity-weighted failures, repeated-run consistency, groundedness, calibrated automated coverage, escalation correctness, latency, cost, and confidence intervals.

**Example:** A refund evaluation checks the account, eligibility evidence, amount, required authorization, exactly one resulting refund, absence of unrelated changes, and accurate communication. “The agent said the refund was processed” satisfies none of those checks by itself.

## 6. AgentOps

### Definition and scope

AgentOps is the operational discipline for deploying, observing, maintaining, governing, and improving agentic systems throughout their lifecycle. The term is used inconsistently across the industry; this report uses it broadly, rather than as the name of any particular vendor product.

It incorporates DevOps, site reliability engineering, MLOps, LLMOps, security operations, and cost management, with additional attention to autonomous actions, long-running state, tool dependencies, and probabilistic behavior.

If orchestration controls a run, AgentOps ensures that the population of runs remains useful, reliable, affordable, and accountable over time.

### Key concepts and methodologies

**1. Observability across the task.** A trace links events and timed operations, or spans, within a request or workflow. For agents, trace the task, model calls, retrieval, tools, delegation, approvals, errors, and verification outcomes. OpenTelemetry’s GenAI work defines conventions for these kinds of operations, including agent and tool spans. The consulted GenAI and agent-span documents are marked **Development**, and their active source has moved to a dedicated repository; teams should track convention versions. [GenAI semantic conventions](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/README.md), [Agent and framework spans](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-agent-spans.md).

**2. Outcome-based service objectives.** An SLI is a measured service indicator; an SLO is its target over an agreed period. Traditional availability and latency remain necessary. Agents also need indicators of completed work and correctness, where those outcomes can be measured. Google’s SRE guidance grounds SLOs in user experience and uses error budgets to prioritize reliability work. Applying that framework to agent outcomes requires careful definitions and acknowledgment of delayed or sampled quality labels. [Implementing SLOs](https://sre.google/workbook/implementing-slos/).

**3. Release management for the whole configuration.** Behavior depends on more than application code. Treat the model, inference settings, prompts, retrieval settings, data/index version, tool contracts, skills, orchestration logic, and graders as part of a release manifest. A prompt edit can be a functional change; an index refresh can change answers without a code deployment.

**4. Continuous quality monitoring.** Monitor traffic characteristics, tool health, retrieval quality, outcomes, escalations, and user corrections. Combine direct labels, sampled human review, and calibrated automated evaluation. A rising proxy score is useful only if it continues to track the outcome you care about.

**5. Governance and accountability.** Assign an owner, intended use, authority boundary, data policy, escalation path, and retirement process to each deployed agent. NIST’s Generative AI Profile offers a voluntary framework for incorporating trustworthiness throughout design, use, and evaluation. It supplies risk-management guidance, rather than a certification that a particular system is safe. [NIST AI 600-1](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence).

**6. Security operations for acting systems.** Monitor for attempts to redirect goals, misuse tools, abuse privileges, poison memories, exploit extensions, or trigger cascading failures. OWASP’s 2026 Agentic Applications guidance organizes these threats and emphasizes limiting unnecessary autonomy. Treat it as a threat-modeling input, not a complete list of every possible attack. [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).

### Importance and impact

A system can pass an offline evaluation and still degrade when a provider changes behavior, a tool becomes slow, policies change, or users ask different questions. AgentOps connects these production observations to engineering decisions.

It also manages persistence beyond the lifetime of a process. Long-running tasks, waiting approvals, credentials, stored memories, and external changes must remain understandable after restarts and releases.

Finally, it establishes economic reality. A demonstration that succeeds once may require too much review, too many retries, or too much infrastructure to operate sustainably.

### Key challenges and common pitfalls

- **Monitoring only HTTP success:** an API response can be technically successful while the task outcome is wrong.
- **Incomplete traces:** model calls are visible, but tool effects and downstream verification are missing.
- **Excessive logging:** raw prompts and tool results expose secrets, personal data, or customer documents.
- **Uncontrolled release combinations:** a prompt is rolled back while an incompatible tool schema or memory format remains active.
- **Hidden resource multiplication:** retries, reviewers, subagents, and background work amplify cost.
- **False replay expectations:** nondeterministic inference and changing external state prevent exact reproduction unless observations are recorded or simulated.
- **Weak incident controls:** there is no way to stop a specific tool, tenant, agent version, or class of action.
- **Unsafe learning loops:** production feedback is automatically promoted into prompts, memories, or training data without quality and privacy checks.
- **Unowned escalations:** humans are nominally “in the loop,” but no team is responsible for response time and resolution.

### Best practices and strategies

**Observe useful facts.** Record task and trace IDs, software/configuration versions, timing, token and resource use, selected tools, sanitized arguments, operation IDs, status transitions, and verification results. Prefer actual observations and explicit decision summaries. Do not depend on access to private chain-of-thought, or treat a generated explanation as a faithful record of internal causation.

**Protect telemetry.** Minimize captured content, redact sensitive fields, restrict access, isolate tenants, and define retention. Where full evidence is needed for authorized debugging, store it under suitable controls and refer to it from the trace. Trace sampling policies should retain useful failure evidence without quietly biasing reported success rates.

**Deploy progressively.** Run offline checks, then controlled trials, then a small canary cohort with explicit rollback triggers. Use shadow execution for comparing decisions only when side effects are disabled or isolated. Monitor the candidate and baseline on comparable workloads.

**Make degradation intentional.** Define what happens under model or tool failure: a tested fallback, a reduced capability mode, a saved draft, a pause, or human escalation. A fallback should preserve applicable data and permission constraints as well as output compatibility.

**Control cost at multiple scopes.** Set limits per run, user, tenant, workflow, and provider as appropriate. Track p50/p95 costs as well as the mean. Cache only where correctness, authorization, and freshness permit; a repeated-looking request does not always represent a reusable answer. Enforce concurrency and queue limits to prevent one expensive task from starving others.

**Prepare incident response.** Support stopping new runs, disabling a tool, revoking scoped credentials, canceling work where possible, and preserving relevant evidence. After containment, reconcile any uncertain external effects. Rolling back software does not undo messages, payments, or edits already made; those may require explicit compensating actions or human handling.

**Turn incidents into learning.** Record the trigger, affected population, trajectory, incorrect effect, failed control, and recovery. Add an evaluation case and a targeted fix. Validate that the fix improves the relevant slice without causing unacceptable regressions elsewhere.

**Keep durable state separate from disposable execution.** Where appropriate, isolate credentials, persistent session records, and sandboxed computation. Anthropic’s managed-agent account illustrates how this separation can support recovery and limit credential exposure. The architecture is an implementation example, not a requirement to buy that service. [Scaling Managed Agents](https://www.anthropic.com/engineering/managed-agents).

### A practical operational dashboard

| Dimension | Useful measures | Interpretation caveat |
|---|---|---|
| User value | Verified resolution, rework, task abandonment, user effort | Satisfaction alone does not establish correctness |
| Quality | Sampled correctness, unsupported claims, policy violations | Label delay and sampling affect certainty |
| Reliability | Availability, completion latency, stuck runs, successful recovery | Separate model time, tool time, queue time, and human waiting |
| Safety and authority | Blocked actions, attempted and executed violations, unexpected data access | A block can indicate either a successful defense or poor task understanding |
| Economics | Cost per successful outcome, human review cost, retry/subagent overhead | Report workload mix and the definition of success |
| Dependencies | Model rate limits, tool errors, index freshness, credential expiry | A healthy agent service can depend on an unhealthy downstream system |
| Change control | Release-specific failures, drift, rollback time | Correlation with a release is a starting point for diagnosis |

**Example:** A support agent’s apparent success rate stays constant while review minutes double. A dashboard limited to inference cost and final answer ratings misses the deterioration. Outcome cost and human workload expose it.

## 7. An integrated example

Consider a customer-service system asked to investigate a duplicate charge and resolve it under company policy. This is an illustrative architecture, not a recommendation about any particular payment provider or regulatory obligation.

The acceptance criteria might be: identify the correct account and transactions; apply the applicable policy; take only authorized actions; avoid duplicate changes; verify the resulting state; and explain the resolution accurately. If decisive evidence or authority is missing, a successful outcome may instead be a well-supported escalation.

| Stage | Engineering decisions | Evidence retained |
|---|---|---|
| Understand the request | Select a model adequate for the ambiguity; clarify missing identifiers when necessary | Original request, resolved scope, account reference |
| Assemble evidence | Retrieve current policy, order history, and transaction records under the user’s access scope | Source IDs, versions, timestamps, applicable exceptions |
| Investigate | Use read tools to distinguish duplicate settlement from other explanations | Tool results and a structured hypothesis with supporting evidence |
| Propose resolution | Apply deterministic eligibility checks; generate a concrete action proposal | Target transaction, amount, reason, preconditions |
| Authorize | Check permission and any product-defined review requirement | Decision tied to the specific proposal and state |
| Execute | Call a bounded mutation tool with an idempotency key | Operation ID, response, external status |
| Verify | Read authoritative state and check required and forbidden effects | Confirmed state, invariant results, unresolved uncertainty |
| Communicate and operate | Report the verified outcome; attach telemetry and route unresolved work | Outcome, trace, cost, latency, escalation record |

The six disciplines interact at each stage. Better model reasoning cannot recover data the retrieval system never supplies. A perfect action proposal cannot compensate for an execution layer that targets the wrong account. A successful tool response cannot establish that all required postconditions hold.

Consider a failure after execution: the request times out, but the external service may have already processed the change. The orchestrator marks the action as uncertain. The tool adapter queries its status using the operation ID. Verification checks the authoritative result. AgentOps records the ambiguous response and recovery. The context supplied to the model contains the verified status, so its explanation remains accurate.

This example yields an important design principle: **separate intention, authority, execution, and evidence**. They are related, but one cannot safely stand in for all the others.

### Diagnosing failures across the six areas

| Observed failure | First questions to investigate | Likely disciplines involved |
|---|---|---|
| A plausible answer cites the wrong policy | Was the right policy indexed, retrieved, selected, and understood? | Context Engineering, Model Selection, Evals |
| Tool calls fail with invalid arguments | Is the schema clear, the tool appropriate, and the model configuration adequate? | Tools, Model Selection, Evals |
| A task repeats after restart | Which external effects occurred, and which were checkpointed? | Orchestration, Tools, AgentOps |
| A multi-agent result contains contradictions | Were scopes clear, evidence shared appropriately, and integration verified? | Orchestration, Context Engineering, Evals |
| Costs increase without better outcomes | Are retries, context growth, routing, or review workload responsible? | AgentOps plus the relevant execution subsystem |
| A release passes offline tests but fails for users | Is the dataset representative, the environment realistic, and telemetry sufficient? | Evals, AgentOps, domain/product design |
| An injected document redirects an action | How did untrusted content influence authority or execution? | Context, Tools, Orchestration, Evals, AgentOps |

Do not assign a root cause from the symptom alone. Trace the failure, form competing explanations, and run a focused comparison or intervention.

## 8. A practical implementation sequence

The following is a proposed engineering sequence, not a universal standard. Its purpose is to establish evidence and operational control before increasing complexity.

### Stage 1: Specify the work

Define the user objective, operating environment, useful completion, unacceptable outcomes, time and cost limits, authority boundaries, and escalation conditions. Identify which parts can be implemented directly in application code and which require model judgment.

**Deliverable:** a task contract and initial evaluation cases, including explicit negative cases.

### Stage 2: Establish a minimal baseline

Use a capable model, a small tool set, and a simple workflow. Assemble only the context needed for representative tasks. Record the model configuration, source evidence, actions, results, and costs.

**Deliverable:** a runnable baseline with measurable outcomes and inspectable traces.

### Stage 3: Diagnose the main failure causes

Classify failures by missing information, poor retrieval, incorrect reasoning, tool ambiguity, execution error, coordination failure, or weak verification. Improve the part of the system implicated by the evidence. Retain controlled comparisons so improvements are attributable.

**Deliverable:** a failure taxonomy for this product and a record of successful interventions.

### Stage 4: Harden execution and verification

Add permission enforcement, idempotency where supported, recovery procedures, bounded budgets, persistent state, and meaningful precondition/postcondition checks. Evaluate adversarial inputs and failures of dependencies.

**Deliverable:** tested behavior under interruptions, uncertainty, and partial failure.

### Stage 5: Validate release readiness

Evaluate on held-out representative tasks and critical slices, with repeated runs where variation matters. Assess grader quality and statistical uncertainty. Verify that escalation is useful and operationally staffed.

**Deliverable:** a release scorecard with quality, failure severity, latency, outcome cost, and known limitations.

### Stage 6: Deploy under operational control

Introduce a controlled cohort. Define outcome and service objectives, alerts, rollback triggers, dependency monitoring, and incident ownership. Ensure that shadow or comparative runs cannot repeat external side effects.

**Deliverable:** an owned service with a release manifest, dashboard, and recovery playbook.

### Stage 7: Optimize measured bottlenecks

Reduce model size, introduce routing, adjust retrieval, cache suitable work, or parallelize independent steps only after measuring their effect. Consider fine-tuning, richer memory, or multiple agents when simpler changes fail to meet a demonstrated requirement.

**Deliverable:** an improved quality–latency–cost tradeoff with regression evidence.

### Minimum useful artifacts for a team

| Area | Artifact to maintain | Question it should answer |
|---|---|---|
| Model Selection | Model and configuration scorecard | Why is this configuration appropriate for these tasks? |
| Context Engineering | Context map and data/memory lifecycle | What information reaches the model, from where, and for how long? |
| Tools & Extensibility | Versioned capability registry | What can the system do, under whose authority, and with what effects? |
| Orchestration | State model and recovery design | How does work proceed and resume without losing intent or duplicating actions? |
| Verification & Evals | Dataset, graders, and release report | What evidence supports the claimed quality? |
| AgentOps | Release manifest, SLOs, dashboard, incident playbook | How will degradation be detected, contained, and corrected? |

In a small team, one person may own several artifacts. Clear accountability matters more than creating six separate departments.

## 9. Open questions and emerging directions

Several practices are comparatively well established: representative testing, explicit permissions, narrow contracts, idempotency for retries, version control, and user-centered reliability objectives. Other choices remain highly workload-dependent. The following assessments are this report’s synthesis of the cited literature and implementation accounts.

**How much should the model control?** Stronger models may benefit from flexible instructions and broader problem-solving freedom. Hard business constraints and access boundaries still need enforcement. The useful frontier is deciding which choices should be delegated and which must remain fixed.

**How should long-term memory be curated?** Persisting content is straightforward compared with deciding whether it is true, relevant, authorized, and worth retaining. Systems need better evidence for when memory improves outcomes, how it should expire, and how corrections propagate across summaries and caches.

**When do multiple agents justify their overhead?** Parallelism, specialization, and context isolation can help. Coordination, duplicated effort, and correlated mistakes can erase the benefit. The relevant experiment compares complete systems under comparable cost, latency, and tool access, rather than comparing agent count alone.

**How can verification scale with autonomy?** Executable outcomes are easier to assess than open-ended research, design, negotiation, or strategic judgment. Better evaluator calibration, adversarial testing, and human review allocation remain important research and engineering problems.

**How portable are agent capabilities?** MCP, A2A, and skills can reduce integration friction, but semantic compatibility still needs tests. Two systems may accept the same schema while interpreting authority, retries, or task completion differently. Pin versions and test the exact features being exchanged.

**What is the right unit of optimization?** Token efficiency, individual-call accuracy, and benchmark scores are intermediate measures. The ultimate objective is useful completed work, subject to constraints and consequences. Choosing that objective can change which model, context strategy, and orchestration design appears best.

**How should agents improve from production?** Operational traces can supply valuable examples, but they also contain errors, sensitive material, and selection bias. Curated feedback with held-out validation is more defensible than unrestricted automatic promotion of outputs into memory or training data.

These open questions make evaluation and observability durable investments: they allow architecture to change while preserving the ability to tell whether the change helped.

## 10. Source guide

The report cites primary sources beside the claims they support. The following selected reading path highlights where to go deeper; it is not a ranking of products or papers.

| Area | Foundational or methodological reading | Implementation or standards reading |
|---|---|---|
| Model Selection | [HELM](https://arxiv.org/abs/2211.09110); [RouteLLM](https://arxiv.org/abs/2406.18665); [test-time compute](https://arxiv.org/abs/2408.03314) | [OpenAI model selection](https://developers.openai.com/api/docs/guides/model-selection) |
| Context Engineering | [RAG](https://arxiv.org/abs/2005.11401); [Lost in the Middle](https://arxiv.org/abs/2307.03172); [MemGPT](https://arxiv.org/abs/2310.08560) | [Context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents); [hybrid retrieval](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview) |
| Tools & Extensibility | [Tool design and evaluation](https://www.anthropic.com/engineering/writing-tools-for-agents); [idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) | [MCP](https://modelcontextprotocol.io/specification/2025-11-25); [A2A](https://a2a-protocol.org/v1.0.0/topics/key-concepts/); [Agent Skills](https://agentskills.io/home) |
| Orchestration | [ReAct](https://arxiv.org/abs/2210.03629); [multi-agent failure analysis](https://arxiv.org/abs/2503.13657) | [Architecture patterns](https://www.anthropic.com/engineering/building-effective-agents); [persistence](https://docs.langchain.com/oss/python/langgraph/persistence); [long-running harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) |
| Verification & Evals | [τ-bench](https://arxiv.org/abs/2406.12045); [LLM judges](https://arxiv.org/abs/2306.05685); [AgentDojo](https://arxiv.org/abs/2406.13352) | [Agent evaluation design](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents); [evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) |
| AgentOps | [SRE and SLOs](https://sre.google/workbook/implementing-slos/); [NIST GenAI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) | [OpenTelemetry GenAI conventions](https://github.com/open-telemetry/semantic-conventions-genai); [OWASP agentic security](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/); [managed-agent architecture](https://www.anthropic.com/engineering/managed-agents) |

**Source limitations:** papers describe particular tasks, models, and environments; live documentation can change; standards have version-specific behavior; vendor engineering accounts may not generalize outside their workloads. Consult the linked versions and rerun task-specific evaluations before translating these principles into production decisions.
