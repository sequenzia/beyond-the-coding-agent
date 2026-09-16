# Section 2 research: what AI engineers actually engineer

Compiled 2026-09-14 for the September 17 talk. Markers: **[primary]** means fetched and quoted directly. **UNVERIFIED** means from a search snippet or secondary coverage; confirm before it goes on a slide. Organized by the six areas in the outline, plus the map, the June to September 2026 window, and a closing "verify before stage" list.

Current authoring placement, integrated September 16: map 7; Models 8 through 12; Context 13 through 17; Tools 18 through 22; Orchestration 23 through 27; Verification and evals 28 through 32; Production operations 33 through 37; closing map 38. Dated earlier revision notes and former coding-agent screenshot anchors below retain historical slide numbers. The content-rework subsections describe the active design. Full source records and evidence status remain unchanged by renumbering.

## 0. The map: agent = model + harness

**Addy Osmani, "Agent Harness Engineering," April 19, 2026** [primary]. https://addyosmani.com/blog/agent-harness-engineering/

- Quoting Viv Trivedy: "Agent = Model + Harness. If you're not the model, you're the harness."
- A harness is "every piece of code, configuration, and execution logic that isn't the model itself": system prompts and CLAUDE.md, AGENTS.md, skill files; tools, MCP servers and their descriptions; bundled infrastructure (filesystem, sandbox, browser); orchestration logic (subagent spawning, handoffs, model routing); hooks and middleware; observability (logs, traces, cost and latency metering).
- "A decent model with a great harness beats a great model with a bad harness."
- "The gap between what today's models can do and what you see them doing is largely a harness gap."
- "anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again."
- Names Claude Code, Cursor, Codex, Aider, and Cline as harnesses.

**OpenAI Developers, "Codex as a platform: build on the open agent harness," August 19, 2026** [primary]. https://developers.openai.com/blog/codex-as-a-platform

- "A capable agent is more than a prompt and a model response. It needs a way to understand a task, maintain context over time, inspect relevant information, call tools, expose progress, handle failures, request human approval when necessary, and return a useful result. That surrounding execution system is the harness."
- The Codex harness manages "conversation state, stream execution, use tools, enforce configured sandbox and approval policies, and carry work across turns."
- "on ARC-AGI-3, retained reasoning and context compaction raised GPT-5.6 Sol's score from 13.3% to 38.3% while reducing output tokens sixfold."

**Anthropic, "Building agents with the Claude Agent SDK," Thariq Shihipar, September 29, 2025** [primary]. https://claude.com/blog/building-agents-with-the-claude-agent-sdk

- The loop: gather context, take action, verify work, repeat.
- Verification mechanisms: rules-based feedback (linting), visual feedback (screenshots, renders), LLM as judge for "fuzzy rules," flagged as less robust with "heavy latency tradeoffs."

### Illustrative FRB case, authored September 15, 2026

**Teaching material, not source evidence.** All FRB cases, document IDs, revisions, excerpts, and answers are invented. They carry no `[primary]` marker. The complete packet, expected brief, tool contract, and acceptance checks are in `internal/frb-running-example.md`.

- Purpose: help engineers research Failure Review Boards, understand their discussions and decisions, compare recurring issues, and export authorized records or a cited brief. People own official causes, decisions, and board records.
- Recurring request: “Review FRB-042 about a pump shutdown. Summarize its discussion and decisions, compare similar FRBs from the past year, and export a cited brief distinguishing possible causes from established findings.”
- Synthetic evidence: FRB-042-BRF r1, slide 6, August 19, 2026: “Bearing wear is a possible cause.” FRB-042-MIN r2, §3 paragraph 2, August 22, 2026: “Cause remains unresolved. Inspect the bearing before assigning a cause.” These are different documents, not two revisions of one file.
- Deliberately wrong answer: “The board confirmed bearing wear.” The expected distinction preserves the preliminary hypothesis, unresolved cause, and inspection decision.
- FRB-017 has a sensor fault. FRB-031 has confirmed bearing wear. Similar symptoms justify comparison, not proof of a common cause. Duplicate records do not create independent cases.
- Teaching rationale: one request connects six distinct engineering responsibilities. It makes evidence fidelity and uncertainty visible without implying a deployed system, model benchmark, or personal experience. The FRB failure is an invented teaching check.
- The design confines research workers to authorized internal FRB records and attachments. Missing, unreadable, conflicting, incomplete, or unauthorized evidence produces an explicit limitation. Citation existence and semantic support are separate checks.
- Content-rework assumption, added September 15, 2026: the FRB corpus includes CUI and export-controlled information (ECI). Model calls that handle those records use services and environments approved for the applicable data and use. For this example, assume the approved model choices are older and less capable for the intended synthesis than newer alternatives outside the approved environment. This is an illustrative deployment constraint informed by presenter-supplied audience context, not measured model evidence or a formal designation of the invented excerpts.

## 1. Models: a component you select, measure, and replace

**Addy Osmani, "Agent Harness Engineering," AddyOsmani.com, April 19, 2026** [primary]. https://addyosmani.com/blog/agent-harness-engineering/ Checked in a browser September 15, 2026.

- "A decent model with a great harness beats a great model with a bad harness."
- Selected for the Models quote screen. The next sentence describes the author's own experience. Present this as an attributed engineering judgment, not a universal performance guarantee or benchmark result.
- Teaching application: compare models inside the surrounding context, tools, and control flow used by the product.

**Anthropic model deprecations page** [primary]. https://platform.claude.com/docs/en/about-claude/model-deprecations

- Lifecycle states, verbatim. Active: "The model is fully supported and recommended for use." Legacy: "The model will no longer receive updates and may be deprecated in the future." Deprecated: "The model is still functional but no longer recommended," with a replacement and a retirement date. Retired: "The model is no longer available for use. Requests to retired models will fail."
- "Anthropic notifies customers with active deployments for models with upcoming retirements, providing at least 60 days' notice before model retirement for publicly released models."
- "Deprecated models are likely to be less reliable than active models."
- Observed cadence: Claude Sonnet 4 and Opus 4 deprecated April 14, 2026, retired June 15, 2026 (62 days). Opus 4.1 deprecated June 5, 2026, retired August 5, 2026 (61 days). Sonnet 3.7: October 28, 2025 to February 19, 2026. Haiku 3.5: December 19, 2025 to February 19, 2026. Haiku 3: February 19 to April 20, 2026. Opus 3: June 30, 2025 to January 5, 2026. Eight-plus models retired in eighteen months.
- Parameters expire too: temperature, top_p, top_k are deprecated on Opus 4.7 and later and "Returns a 400 error when set to a non-default value." Python SDK v1.0+ removes them, raising TypeError.
- Weight preservation commitment: https://www.anthropic.com/research/deprecation-commitments

**OpenAI deprecations page** [primary]. https://developers.openai.com/api/docs/deprecations

- Notice: generally available models "At least 6 months"; specialized variants "At least 3 months"; previews "much shorter notice, such as 2 weeks," explicitly unsuitable for production unless you can migrate fast.
- Vocabulary: deprecation is the announcement; sunset or shutdown is when it stops answering; legacy means no updates but not yet deprecated.
- Twenty-plus models scheduled to shut down October to December 2026, including early GPT-5 snapshots and o3 variants. gpt-5.4-cyber announced September 11, 2026, shutdown October 1, 2026. Transcription family announced August 26, 2026, shutdown February 26, 2027.

**Lingjiao Chen, Matei Zaharia, James Zou, "How Is ChatGPT's Behavior Changing over Time?", arXiv 2307.09009, July 2023, revised version 3** [primary]. https://arxiv.org/html/2307.09009v3 Checked in a browser September 15, 2026.

- "using CoT increased GPT-4's performance from 59.6% to 84.0% in March" (typographic apostrophe normalized).
- On the paper's prime-versus-composite task with step-by-step prompting, GPT-4 accuracy was 84% for the March 2023 version and 51% for the June 2023 version. The June version followed that instruction less often, partly explaining the difference.
- This is task- and prompt-specific evidence of behavior across versions. It is not a measure of overall model quality and does not show a pinned snapshot changing internally.

**Srimanth Tangedipalli and Karan Singh, "How many of your agent's calls actually need a frontier model?", LangChain, August 11, 2026** [primary]. https://www.langchain.com/blog/switchyard-agent-routing-benchmark Checked in a browser September 15, 2026.

- "Call counts exclude the judge".
- 145 controlled multi-step tasks, averaging 6.3 model calls, covering support, incident investigation, and workflow automation. One workload, not a forecast for another product.

| Configuration | Accuracy | Cost per completed task |
|---|---|---|
| Frontier only | 86.0% | $0.092 |
| Routed | 80.0% | $0.026 |
| Small model only | 77.7% | $0.006 |

- The router selected the frontier model for about 7% of agent calls. It did not establish which calls required that model. The share ranged from 4.1% to 9.1% over five runs and excludes judge calls.
- Observed accuracy variation was about 2.7 percentage points. The routed arm's 2.3-point gain over small-only was smaller than that variation.
- Calculation from displayed values: (0.092 - 0.026) / 0.092 = 71.7%, approximately 72% lower cost per completed task. The article's 74% reduction concerns total run cost, $11.45 to $3.00. These denominators differ.
- Product decision: measure which configuration meets the quality requirement under its operating conditions. Include judge cost and latency in the comparison.

**Benchmarks as weak evidence.** All specifics UNVERIFIED (secondary sources): identical weights can score ten to twenty points apart depending on the eval harness; on one SWE-bench Verified leaderboard as of June 2026 only one of a hundred results was independently verified; the same model produces sharply different numbers on SWE-bench Verified self-reported vs SWE-bench Pro on a vendor scaffold vs Scale's SEAL harness; memorization of widely circulated repository issues. Contamination-resistant alternative: SWE-bench-Live, https://swe-bench-live.github.io/ . The defensible claim needs no citation: a public benchmark measures a population you did not choose, on a harness you do not control, reported by a party with an interest in the result. Your eval suite measures your traffic.

**Coding-agent anchor, Codex CLI.** OpenAI docs, checked in a browser September 14, 2026 [primary]. Slash commands: https://learn.chatgpt.com/docs/cli/slash-commands . Config reference: https://learn.chatgpt.com/docs/config-file/config-reference . CLI overview: https://learn.chatgpt.com/docs/codex/cli .

- `/model`: "Choose the active model (and reasoning effort, when available)." `/fast`: toggles a Fast service tier when the model catalog exposes one.
- `model_reasoning_effort`: minimal, low, medium, high, xhigh. `plan_mode_reasoning_effort`: a separate override for plan mode, including none. `agents.default_subagent_model` and `agents.default_subagent_reasoning_effort`: a different model and effort for spawned agents. Routing by phase and by role, as config keys.

**Coding-agent anchor, Devin CLI.** Cognition docs, checked in a browser September 14, 2026 [primary]. Commands and flags: https://docs.devin.ai/cli/reference/commands . Config file: https://docs.devin.ai/cli/reference/configuration/config-file . Essential commands: https://docs.devin.ai/cli/essential-commands . Launch post, "Devin CLI: Start Local, Hand Off to the Cloud," April 27, 2026: https://cognition.com/blog/devin-for-terminal .

- `/model [name]`: "Show or change the current model." `/fast`: switch to SWE-1.6 Fast. `--model` flag. `devin models list`: "List available models, organized by model family." Default `agent.model` is `swe-1-6-fast`.
- Launch post: "Choose between any frontier model, including Opus 4.7, GPT-5.5, and our own SWE-1.6." "Devin for Terminal is the first CLI agent with its own dedicated virtual machine." Hand-off: "hand the session to a cloud agent with its own computer."
- Fusion, a lead-and-sidekick multi-model harness, reached Devin CLI on September 11, 2026 ("Introducing Fusion in Devin Desktop & CLI," https://cognition.com/blog/local-fusion): "Pick a frontier model for planning and review (the 'lead'), and a cost-effective model for execution (the 'sidekick')." Not used on stage: too new for the room. Kept for Q&A on routing.

**Coding-agent anchor, Devin Desktop.** The IDE, formerly Windsurf. Devin Desktop changelog, https://docs.devin.ai/desktop/changelog [primary], checked September 14, 2026: v3.0.12, June 2, 2026, "Windsurf is now Devin Desktop." Cascade plugin changelog, https://docs.devin.ai/windsurf/plugins/changelog [primary]: v2.12.13, February 26, 2026, "Added support for GPT-5.3-Codex with four reasoning efforts (low, medium, high, and xhigh)"; v2.12.14, March 11, 2026, GPT-5.4 billed from "No Reasoning: 1x credits" through "Extra High Reasoning: 8x credits"; v2.12.20, April 6, 2026, "The model picker now shows token pricing information directly, so you can see the exact rate extra usage is billed at." The picker opens as a pop-out window with a slider for reasoning level: presenter's first-hand observation, not in the docs text; the slide 8 screenshot is the evidence. Devin Desktop is used on slide 8 because the slider is the visual. Devin CLI carries every other Devin anchor.

Provider responsibilities behind the picker: defaults, model-specific prompt and tool tuning, failover, price-change handling, and retirement handling. The documented retirements illustrate lifecycle work. They do not establish how every coding-tool provider migrated users, who paid a price change, or whether a migration was silent.

**GitHub Changelog, "Selected GitHub Copilot models deprecated," August 31, 2026** [primary]. Not used on stage since the September 14 revision; the talk names only Codex CLI and Devin CLI. Kept for Q&A. https://github.blog/changelog/2026-08-31-selected-github-copilot-models-deprecated/ Checked in a browser September 14, 2026.

- "As of today, September 1, 2026, we have deprecated the following models across most GitHub Copilot experiences": Gemini 3.1 Pro, Claude Opus 4.5, Claude Opus 4.6, Claude Sonnet 4.5, Claude Sonnet 4.6, Raptor Mini. Six models, not the five in earlier secondary coverage.
- Suggested replacements: Gemini 3.7 Flash; Claude Opus 4.7, 4.8, or 5; Claude Sonnet 5; MAI-Code-1.1-Flash.
- Surfaces: Copilot Chat, inline edits, ask and agent modes, code completions. Claude Sonnet 4.6 stays available to individual subscribers on annual plans.
- A later entry, "Upcoming deprecation of selected GitHub Copilot models," September 3, 2026, announces a further wave. Contents UNVERIFIED; title only.

**When you are the owner.** Six selection axes: capability on your tasks, cost per completed task, latency at p95, context window, tool-use reliability, data residency. Routing and fallback. Pinned version: controlled migration and lifecycle management. Moving alias: automatic updates and regression monitoring. A snapshot controls one source of variation. Prompts, tools, retrieval, and the environment also affect behavior. Data residency can override every other axis for enterprise. Fallback composition reported for 2026 (UNVERIFIED): retry primary, rotate provider on exhaustion, serve semantic cache hit, degrade UI.

### Data sensitivities and model eligibility

**National Archives and Records Administration, "Controlled Unclassified Information (CUI)," National Archives, reviewed August 12, 2025** [primary]. https://www.archives.gov/cui Checked in a browser September 15, 2026.

- "agency personnel and contractors should first consult their agency's CUI implementing policies and program management for guidance."
- The CUI program addresses unclassified information that requires safeguarding or dissemination controls under applicable authorities. Use the relevant agency and organizational guidance when deciding how the audience's data may be handled.

**National Archives and Records Administration, "CUI Category: Export Controlled," CUI Registry, reviewed May 8, 2025** [primary]. https://www.archives.gov/cui/registry/category-detail/export-control.html Checked in a browser September 15, 2026.

- "Unclassified information concerning certain items, commodities, technology, software, or other information".
- The registry includes an Export Controlled category with safeguarding and dissemination authorities. CUI and export-controlled information are not mutually exclusive categories. The talk uses CUI and ECI as familiar audience examples without teaching a classification or export-authorization procedure.

**Ron Ross and Victoria Pillitteri, "Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations," NIST SP 800-171 Rev. 3, May 14, 2024** [primary]. https://csrc.nist.gov/pubs/sp/800/171/r3/final Checked the publication page and abstract in a browser September 15, 2026.

- "The requirements apply to components of nonfederal systems that process, store, or transmit CUI or that provide protection for such components."
- The abstract describes requirements intended for use in federal contracts or other agreements with nonfederal organizations. This source supports attention to the processing environment. It does not establish a particular organization's applicable revision, approvals, or permitted model services.

Presenter-supplied audience context, September 15, 2026: data sensitivity is a routine model-selection constraint for this audience. Their available model choices for sensitive work such as CUI and ECI depend on compliance and security requirements. The presenter reports that these approved choices tend to be older and less capable in the audience's environment. This is audience context, not a public claim that any named model or service is approved, a benchmark comparison, or a universal property of approved deployments. The NARA and NIST sources above do not establish this capability comparison.

Teaching inference from that context and the sources above: identify eligible model services and deployment environments for the data before comparing task quality, cost, and latency. Apply the same eligibility constraint to routing, fallbacks, and replacements. Availability in a model picker does not itself establish authorization for a particular dataset. Approval depends on the intended service, environment, use, and applicable organizational requirements. Data residency is one consideration, not a complete statement of those requirements.

Keep this explanation conceptual. Do not add a hypothetical comparison of model configurations, a list of certified models, or a hosted-versus-self-hosted discussion. In the content rework, model eligibility precedes task fit, routing, and model changes. Context later addresses which information enters the model, while Operating it addresses enforcement across the system.

**Open weights vs hosted API.** UNVERIFIED, practitioner blogs: self-hosting is priced as GPU rental but decided by operations, redundancy, and an eval harness proving a quantized model kept quality; hosted APIs scale to zero and GPUs do not; self-hosting earns its keep at sustained high utilization or when privacy, latency, or fine-tuning control forces it; open-weight models trail closed by a few points on the benchmarks that matter.

**Pitfall.** Selecting or changing models without testing them on your task. Without representative cases, you cannot establish whether a replacement still meets the product's quality requirement. A pinned version needs controlled migration; a moving alias needs regression monitoring. Rerun the same cases and compare quality, cost, and latency. This sets up area 5.

### FRB application and displaced evidence

Illustrative application of §0, not a measured result: the FRB corpus includes CUI and ECI, so begin with eligible model services and environments. For this example, assume the approved choices are older and less capable for the intended synthesis than newer alternatives outside that environment. Compare the approved options on faithful summaries and supported findings. A possible cause must remain distinct from an established finding. Begin with one eligible model configuration for the brief and a pinned version where available with a migration plan. If evaluation exposes a capability gap, test a narrower scope or more structured workflow with stronger checks and human review. These changes are proposed responses, not guarantees that the gap can be overcome. If acceptable behavior cannot be established, limit or defer that capability. Do not route restricted records to an unapproved model as a fallback. Revisit when a suitable approved option becomes available or requirements and measured performance change. No model scores or winning model are supplied.

Models revision, September 15, 2026: slide 8 uses the Devin Desktop picker with a short explanation of its controls. Slide 9 has four static screens: quote, general decisions, maintenance and pitfalls, and FRB application. General decisions address task fit, one model versus routing, and control of model changes. Routing returns here as a model-selection decision; Orchestration owns task decomposition and coordination. Compare candidates on representative tasks and start with one configuration unless measurements justify routing. Maintain coverage as intended use and routes change. A snapshot does not freeze prompts, retrieval, tools, or the environment. The detailed worker/analyst requirements remain in `internal/frb-running-example.md`. The Chen prime/composite result and LangChain routing experiment above remain backup evidence with their original limitations.

## 2. Context engineering and knowledge

**Andrej Karpathy, X post, June 25, 2025.** https://x.com/karpathy/status/1937902205765607626

- "context engineering is the delicate art and science of filling the context window with just the right information for the next step." Headline sentence confirmed via Simon Willison, June 27, 2025, https://simonwillison.net/2025/Jun/27/context-engineering/ . Full thread UNVERIFIED.
- Enumerates: task descriptions, few-shot examples, RAG, multimodal data, tools, state and history, compaction.

**Anthropic, "Effective context engineering for AI agents," September 29, 2025** [primary]. Prithvi Rajasekaran, Ethan Dixon, Carly Ryan, Jeremy Hadfield. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

- Context engineering is "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference," vs prompt engineering, "methods for writing and organizing LLM instructions."
- "Context, therefore, must be treated as a finite resource with diminishing marginal returns." Selected for the Context quote screen. Exact wording checked in a browser September 15, 2026.
- "LLMs have an 'attention budget' that they draw on when parsing large volumes of context."
- System prompts: "The optimal altitude strikes a balance: specific enough to guide behavior effectively, yet flexible enough to provide the model with strong heuristics."
- Tools: "tools should be self-contained, robust to error, and extremely clear with respect to their intended use." "One of the most common failure modes we see is bloated tool sets."
- Long-horizon techniques: compaction ("summarizing its contents, and reinitiating a new context window with the summary"); note-taking ("the agent regularly writes notes persisted to memory outside of the context window"); sub-agents ("specialized sub-agents can handle focused tasks with clean context windows"); just-in-time retrieval ("maintain lightweight identifiers... and use these references to dynamically load data into context at runtime").
- Talk definition: retrieval-augmented generation (RAG) retrieves relevant external information and supplies it to the model. Grep, file reads, embeddings, and hybrid retrieval are methods chosen for the data and task. Just-in-time file retrieval can be part of RAG.

**Daniel Ford, "Introducing Contextual Retrieval," Anthropic Engineering, September 19, 2024** [primary]. https://www.anthropic.com/engineering/contextual-retrieval Checked in a browser September 15, 2026.

- On embeddings: "they can miss crucial exact matches."
- On document chunks: "individual chunks lack sufficient context."
- Supports a brief distinction between lexical matching, semantic similarity, and combined retrieval. The content draft uses no reported performance percentages, model ranking, fixed chunk count, or claim that hybrid retrieval always wins. Preserve enough source context to interpret a retrieved passage.

**Yichao "Peak" Ji, Manus, "Context Engineering for AI Agents: Lessons from Building Manus," July 18, 2025** [primary]. https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus

- "the KV-cache hit rate is the single most important metric for a production-stage AI agent"
- Scope: these are Manus's reported production experience and its July 2025 pricing example, not universal cache economics.
- Talk lesson: preserve stable prefixes when useful, measure savings, and update context or tool access when correctness or authorization requires it.
- "the average input-to-output token ratio is around 100:1"
- "cached input tokens cost 0.30 USD/MTok, while uncached ones cost 3 USD/MTok, a 10x difference"
- "avoid dynamically adding or removing tools mid-iteration." Manus masks logits rather than mutating the tool list, because mutation invalidates the cache and orphans earlier references.
- "treat the file system as the ultimate context in Manus: unlimited in size, persistent by nature, and directly operable by the agent itself"
- Recitation: "constantly rewriting the todo list, Manus is reciting its objectives into the end of the context"
- "leave the wrong turns in the context. When the model sees a failed action, and the resulting observation or stack trace, it implicitly updates its internal beliefs"
- "the more uniform your context, the more brittle your agent becomes"

**Drew Breunig, "How Long Contexts Fail," June 22, 2025** [primary]. https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html

- Context Poisoning: "When a hallucination or other error makes it into the context, where it is repeatedly referenced."
- Context Distraction: "When a context grows so long that the model over-focuses on the context, neglecting what it learned during training."
- Context Confusion: "When superfluous content in the context is used by the model to generate a low-quality response."
- Context Clash: "When you accrue new information and tools in your context that conflicts with other information in the context."
- Evidence cited: Gemini 2.5 Pokemon agent hallucinating game state into its goals; distraction ceilings around 100k tokens for Gemini 2.5 Pro and 32k for Llama 3.1 405b; Berkeley Function-Calling Leaderboard, all models worse with more tools, a quantized Llama 3.1 8b failing at 46 tools and succeeding at 19; Microsoft and Salesforce sharded-prompt study, 39% average drop across multiturn, o3 falling from 98.1 to 64.1.

**Chroma, "Context Rot," Kelly Hong, Anton Troynikov, Jeff Huber, July 14, 2025** [primary]. https://www.trychroma.com/research/context-rot

- "Model performance varies significantly as input length changes, even on simple tasks."
- "models do not use their context uniformly; instead, their performance grows increasingly unreliable as input length grows"
- 18 models including GPT-4.1, Claude 4, Gemini 2.5, Qwen3.

**Cognition, "Introducing SWE-grep and SWE-grep-mini: RL for Multi-Turn, Fast Context Retrieval," October 16, 2025** [primary]. https://cognition.com/blog/swe-grep Checked in a browser September 14, 2026.

- "fast agentic models specialized in highly parallel context retrieval" that "match the retrieval capabilities of frontier coding models, while taking an order of magnitude less time."
- Retrieval is tool calls, "grep, read, glob," in "4 serial turns" of "8 parallel tool calls."
- On embeddings: "The embeddings can even be counterproductive, as the agent can give too much weight to irrelevant information."
- Shipped as Fast Context in Windsurf, now Devin Desktop, with Devin and DeepWiki to follow. Docs: https://docs.windsurf.com/context-awareness/fast-context . The claim that agent trajectories spent more than 60% of the first turn retrieving context is from a secondary summary of those docs; UNVERIFIED wording.
- SWE-grep-mini serves at 2,800 tokens per second; SWE-grep at 650.
- Use on stage: SWE-grep illustrates choosing retrieval for code. It does not establish that grep is universally preferable to embeddings. RAG describes retrieval plus generation, not a specific search method.

**Coding-agent anchor.** Both tools read AGENTS.md, the cross-tool standard, https://agents.md/ (formalized August 2025, 60,000-plus projects, donated to the Linux Foundation's Agentic AI Foundation December 2025; adoption and donation UNVERIFIED beyond the site). Codex: `/init` will "Generate an `AGENTS.md` scaffold in the current directory"; `/compact` will "Summarize the visible chat to free tokens"; `model_auto_compact_token_limit` sets the threshold for automatic compaction and `compact_prompt` overrides the summary prompt; `/memories` toggles memory injection and generation. Devin CLI: AGENTS.md in the user config directory for global rules and in the project; `/compact` forces compaction; `/context` shows context window usage. Docs in §1 [primary].

**When you are the owner.** The vendor chose the context budget, compaction policy, memory convention, and retrieval strategy. You own all four. What goes in: instructions, examples, retrieved knowledge, session state, memory, tool results, each with relevance, freshness, provenance, size. Customer-facing: the context holds another person's data; a compaction that drops a constraint can produce a wrong answer. Memory exposed to the wrong user or tenant is a breach. Cross-session memory can be intentional.

**Pitfall.** Adding context without curating it. A large window is not permission to fill it; Chroma shows degradation well before the window is full.

### Context decisions and FRB application

Context revision, September 15, 2026: one AGENTS.md user example, the selected Anthropic quote, general decisions, maintenance with pitfalls, and a separate FRB application. The quote retains its exact wording and corporate attribution, with the four named authors recorded above. The illustration depicts selected information in a limited working space; it makes no quantitative claim.

The three decisions are what information enters the next step, what persists or is refreshed, and which sources and access scope apply. Instructions, task state, retrieved knowledge, summaries, and persistent memory have different jobs. RAG retrieves relevant external information and supplies it to the model; file reads, keyword search, embeddings, and hybrid retrieval are methods chosen for the data and task. Keep source locations and revisions. Enforce authorization outside the model, following the OWASP authorization source in §3. Refresh evaluation cases as source formats and retrieval or compaction policies change.

Maintenance covers stale passages, compaction that loses constraints, accumulated irrelevant or conflicting information, and access boundaries. Preserve useful stable prefixes for caching, but correctness and authorization take priority. The Manus prices and ratios, Chroma model count, Breunig's four named failure modes, and SWE-grep performance comparisons remain backup material, with their original qualifications.

Illustrative application of §0: retrieve the preliminary FRB-042-BRF r1 slide 6 and later FRB-042-MIN r2 §3 paragraph 2 as distinct relevant passages, each retaining its identity and source location. Retain the unresolved cause and inspection requirement in the working context and any summary. Refresh source versions and recheck access before finalizing a brief. Access is enforced outside the model. Missing, unreadable, conflicting, or unauthorized evidence remains an explicit limitation. This is a proposed starting design, not a deployed system or measured retrieval result. Comparison case details remain available in `internal/frb-running-example.md` and later evaluation material.

### Context content rework

The Markdown-first revision separates the definition, why context matters, decisions and trade-offs, common challenges, and the FRB application. The existing Anthropic quotation opens the area. Prompt engineering addresses instructions; context engineering covers the information available for a model step and how it is selected and maintained. Retrieval supplies knowledge external to the model, including authorized internal records. It does not imply open-web access. Compaction summarizes the current conversation, while persistent memory can retain selected information across sessions. These distinctions develop the existing Anthropic, Manus, and coding-agent material above.

The draft's four decisions are what to include for the next step, how to retrieve it, what to retain or refresh, and how to preserve source identity and access scope. Teaching guidance: begin with task-relevant information and a retrieval approach appropriate to the corpus. Investigate missing evidence, lost qualifications, stale versions, and access errors before adding context or changing the model. Persisted summaries and useful cache prefixes still need freshness and access checks. These are proposed engineering practices, not measured guarantees.

The FRB application inherits the CUI/ECI corpus and approved-model constraints in §0 and §1. Context preparation must stay within the applicable approved scope, including any services that process the restricted records for parsing, retrieval, embedding, or summarization. This extends the illustrative deployment boundary, not a new claim about a particular provider's approval. Supply focused, traceable evidence to the available approved model and evaluate the result. Do not infer that an older model necessarily has a smaller context window or that retrieval overcomes every capability limit.

Keep both FRB-042-BRF r1 slide 6 and FRB-042-MIN r2 §3 paragraph 2 with their distinct identities, dates, and locations. A working summary preserves the preliminary hypothesis, unresolved cause, and outstanding inspection. Comparison cases remain separate from the target case. Refresh source versions and recheck access before finalizing the brief. No-match, incomplete-index, and unreadable-source outcomes produce appropriately scoped limitations. The shared packet remains the authoring reference. Detailed output grading stays in Verification and evals.

## 3. Tools and extensibility

**Anthropic, "Writing effective tools for agents, with agents," Ken Aizawa, September 11, 2025** [primary]. https://www.anthropic.com/engineering/writing-tools-for-agents Checked in a browser September 15, 2026.

- "Agents are only as effective as the tools we give them." Selected for the Tools quote screen.

- "deterministic systems produce the same output every time given identical inputs, while non-deterministic systems, like agents, can generate varied responses." Tools are a contract between deterministic code and a non-deterministic caller; "we need to design them for agents."
- Consolidation is a task-design option, to evaluate against finer-grained alternatives. Consolidation: "Tools can consolidate functionality, handling potentially multiple discrete operations (or API calls) under the hood." schedule_event, not list_users plus list_events plus create_event.
- Namespacing: "Namespacing (grouping related tools under common prefixes) can help delineate boundaries between lots of tools"; prefix vs suffix had "non-trivial effects on our tool-use evaluations."
- Talk rule: return meaningful names alongside stable IDs needed to act. Names alone may be ambiguous.
- Results: prefer "contextual relevance over flexibility, and eschew low-level technical identifiers." Resolving UUIDs to names "significantly improves Claude's precision in retrieval tasks."
- response_format enum: "concise" vs "detailed"; Slack example 206 tokens vs 72.
- "Even small refinements to tool descriptions can yield dramatic improvements." Claude Sonnet 3.5 reached state of the art on SWE-bench Verified "after we made precise refinements to tool descriptions."
- Eval loop: "Start by generating lots of evaluation tasks, grounded in real world uses," then let agents analyze transcripts and improve the tools.

**Anthropic, "Introducing advanced tool use on the Claude Developer Platform," Bin Wu, November 24, 2025** [primary]. https://www.anthropic.com/engineering/advanced-tool-use

- In Anthropic's particular five-server example, MCP servers (GitHub, Slack, Sentry, Grafana, Splunk) consume "approximately 55K tokens before the conversation even" begins; internally "tool definitions consume 134K tokens before optimization."
- "the most common failures are wrong tool selection and incorrect parameters, especially when tools have similar names"
- Deferred loading with tool search: "an 85% reduction in token usage while maintaining access to your full tool library." MCP evals: "Opus 4 improved from 49% to 74%, and Opus 4.5 improved from 79.5% to 88.1%."
- Programmatic tool calling: "Average usage dropped from 43,588 to 27,297 tokens, a 37% reduction on complex research tasks."
- Tool use examples: "improved accuracy from 72% to 90% on complex parameter handling."

**Model Context Protocol contributors, "What is the Model Context Protocol (MCP)?", MCP documentation, revision July 28, 2026** [primary]. https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro Checked in a browser September 15, 2026.

- "an open-source standard for connecting AI applications to external systems."
- Use for a brief explanation of MCP as a common integration interface. The main talk names no additional coding-agent products from the page's examples.

**Model Context Protocol contributors, "Understanding MCP servers," MCP documentation, revision July 28, 2026** [primary]. https://modelcontextprotocol.io/docs/2026-07-28/learn/server-concepts Checked in a browser September 15, 2026.

- "The model requests tool execution based on context."
- MCP servers expose capabilities through protocol interfaces. Tool discovery returns definitions and schemas; a tool call returns an execution result. Resources and prompt templates are also available in the protocol. The talk focuses on tools without implying that tools are MCP's only feature.

**MCP Security Best Practices, spec revision 2026-07-28** [primary]. https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices

- "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." Token passthrough is "explicitly forbidden."
- MUST-level mitigations for confused deputy, SSRF via OAuth discovery, state handle hijacking, local server compromise, authorization URL validation, mix-up attacks, scope minimization.
- "If an MCP client supports one-click local MCP server configuration, it MUST implement proper consent mechanisms prior to executing commands." Clients SHOULD "Execute MCP server commands in a sandboxed environment with minimal default privileges."
- Scope mistakes, verbatim: "Publishing all possible scopes in scopes_supported," "Using wildcard or omnibus scopes (*, all, full-access)," "Bundling unrelated privileges to preempt future prompts."

**Coding-agent anchor.** Installed MCP servers in both tools: `/mcp` in Codex; `devin mcp add`, `devin mcp list`, and `devin mcp login` for OAuth in Devin CLI. Then the permission prompt.

- Codex (config reference, §1): `sandbox_mode` is read-only, workspace-write, or danger-full-access. `approval_policy` is on-request or never, or a table of per-category booleans. Each MCP server has `default_tools_approval_mode` of auto, prompt, writes, or approve. `/permissions` will "Set what Codex can do without asking first."
- Devin CLI permissions page, https://docs.devin.ai/cli/reference/permissions [primary]: five modes. Normal: reads auto-approve, writes and shell prompt. Accept Edits: workspace edits auto-approve. Smart: for shell, fetch, MCP, and external writes, "a fast model judges whether the action is safe to run unattended," and never auto-approves package installs, mutating git operations, rm or sudo, destructive cloud CLI commands, or anything touching dotenv files or credentials. Bypass: everything auto-approves. Autonomous: pairs with `--sandbox`; shell and fetch auto-approve "because the sandbox enforces what they can read, write, and reach over the network," while direct edits still prompt. Organization deny and ask rules override user settings in every mode.

Scoped reads, reversible changes, consequential actions are this talk's starting categories. Authorization applies to all three and is enforced outside the model. A model-based recommendation to approve does not establish permission.

**When you are the owner.** The vendor wrote descriptions, chose granularity, shaped payloads, built the approval UI. You write descriptions as prompt engineering and eval them; you decide verbosity because it is your token bill; you classify every action and build the gate. The gate can use human approval, an async workflow, or an enforced policy, according to the product and action.

**Incidents.**

**OWASP, "LLM06:2025 Excessive Agency", Gen AI Security Project, 2025** [primary]. https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ Checked in a browser September 15, 2026.

- "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not."
- Enforce access policy for scoped reads. Validate reversible changes and support recovery. Consequential actions need policy authorization or approval. Authorization applies to every category. These three categories are the talk's heuristic, not OWASP's taxonomy.

**Omer Mayraz, Legit Security, "CamoLeak: Critical GitHub Copilot Vulnerability Leaks Private Source Code," October 8, 2025** [primary]. https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code Checked in a browser September 14, 2026.

- Researcher-demonstrated vulnerability, not evidence of observed exploitation of customers.
- "CVSS 9.6." Instructions hidden in a pull request description inside `<!-- -->` comments, invisible in the web UI, processed by Copilot Chat for every user who viewed the page.
- GitHub's Camo image proxy rewrites external image URLs to signed proxy URLs. The researcher pre-generated Camo URLs for every letter and symbol and had Copilot render leaked data "as ASCII art composed entirely of images," which passed the content security policy because the URLs were GitHub-signed.
- The demo exfiltrated "the description of a zero-day vulnerability inside an issue of a private project" and AWS credentials.
- Reported through HackerOne in June 2025. Fixed by August 14, 2025, by "disabling image rendering in Copilot Chat completely."

**Koi Security's ClawHub audit, reported by The Hacker News, February 2, 2026** [primary] for directly checked secondary reporting only. Koi's underlying audit was not independently checked. https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html Checked September 14, 2026.

- "A security audit of 2,857 skills on ClawHub has found 341 malicious skills across multiple campaigns." Campaign named ClawHavoc. "335 skills use fake pre-requisites to install an Apple macOS stealer named Atomic Stealer (AMOS)." 341 of 2,857 is 11.9%, roughly one in eight.
- Unit 42, "OpenClaw's Skill Marketplace and the Emerging AI Supply Chain Threat," June 23, 2026 [primary]. https://unit42.paloaltonetworks.com/openclaw-ai-supply-chain-risk/ Bitdefender Labs found "approximately 17% of OpenClaw skills they analyzed in the first few weeks of the platform's release carried malicious payloads." For a skill, "installation results in complete control over the agent's identity." Use the Koi figure on stage; the Bitdefender figure is a different sample.

**Pitfall.** Copying APIs without evaluating task fit. Evaluate granularity, descriptions, payloads, and safe boundaries against representative tasks.

### Tools decisions and FRB application

Tools revision, September 15, 2026: the user screen shows one MCP connection adding a capability to a coding agent. The selected Anthropic quotation opens the owner sequence, followed by general decisions, maintenance with pitfalls, and one FRB tool contract. The quote illustration is a conceptual interface connecting two systems, not an architecture or measured result.

The three decisions are which capabilities need tools, what the caller-facing contract must specify, and which actions may execute under which rules. Choose operations for the task, evaluate granularity and discovery, and begin with a small set of distinct capabilities. Names, input schemas, results, and errors are part of the contract. Return useful context with stable IDs. Evaluate descriptions against representative tasks. Authorization and validation are enforced outside the model, following OWASP above; a model's approval recommendation does not create permission.

Maintenance covers description/schema/behavior drift, overlapping tool sets, and failures that leave the outcome uncertain. Keep contracts and implementation aligned, prune duplicates, and use deferred discovery where appropriate. A caller needs an explicit result, error, or unknown outcome so it can distinguish success from failure. Recheck permissions as capabilities change. In the illustrative export workflow from §0, inspect the prior receipt before retrying an export; the result contract supplies evidence for orchestration's retry decision. The tool-description benchmark, five-server token counts, and concise/detailed payload measurements remain backup with their original qualifications. MCP's security requirements also remain in this section for reference.

**Illustrative Export cited brief contract.** Background services parse and index PDF, Word, and PowerPoint files. Search and retrieval supply the evidence; this focused example is the agent-facing export operation from the §0 contract. It accepts a checked draft, citations, and destination. Code enforces access and permitted destinations, and requires source IDs, revisions, and locations. It returns a brief matching the checked draft, with citations and uncertainty intact, plus an export receipt. Failure or incomplete results are explicit; an unconfirmed export is not reported as complete. This is an illustrative design, not a deployed API. People continue to own official causes, decisions, and board records.

The full four-tool inventory remains in `internal/frb-running-example.md`. CamoLeak and the ClawHub audit remain backup evidence with their demonstration and secondary-source limitations. Production security principles appear on slides 37 and 38 in the current authoring target; incident details stay in research backup.

### Tools content rework

The Markdown-first revision opens with the existing Anthropic quote, then explains the tool as an operation exposed through a contract to a model caller. Software executes the requested operation and returns an observable result. Extensibility adds capabilities through such interfaces. The presenter chose a brief explanation of MCP's connection role. Keep protocol mechanics, product setup, benchmark figures, and incident inventories in backup.

Develop three decisions: which capabilities and granularity fit the task, how to specify a usable contract, and which actions may execute under which rules. Cover discovery within capability selection. Descriptions guide selection and use. Schemas define structure, while code validates inputs and enforces authorization. Return evidence of success, failure, or an unknown outcome. A valid input shape does not establish that an action is allowed or that it succeeded. This framing develops the existing Anthropic, MCP, and OWASP material above.

The illustrative FRB application retains the existing four-tool inventory and focuses on Export cited brief. The service exports the exact draft that passed verification, with citations and uncertainty intact, to a permitted destination. Verification status must refer to that content; an assertion supplied by the model caller is insufficient. Changed content needs renewed checks. This is an authored contract requirement, not a claim that a particular API or protocol supplies such a guarantee. Code enforces access and permitted destinations for the CUI/ECI scenario. Parsing and indexing remain background services. The shared authoring reference holds the complete contract.

The tool returns a receipt when completion is confirmed, an explicit failure when known, or an unknown outcome when completion cannot be confirmed. Orchestration uses that evidence to decide whether to inspect, retry, or hand off. Tool design supplies the result contract, while orchestration owns the recovery policy. Evaluate use of the tool set with the available approved models; clear contracts do not guarantee that their capability limits disappear.

## 4. Orchestration: the loop

**Anthropic, "Building effective agents," Erik Schluntz and Barry Zhang, December 19, 2024** [primary]. https://www.anthropic.com/engineering/building-effective-agents

- Rechecked the workflow/agent distinction, simplicity recommendation, and execution-limit discussion in a browser September 15, 2026. The content rework uses these concepts, not the page's changing framework or model examples.
- Workflows: "systems where LLMs and tools are orchestrated through predefined code paths." Agents: "systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks."
- "we recommend finding the simplest solution possible, and only increasing complexity when needed." Selected for the Orchestration quote screen. Exact wording checked in a browser September 15, 2026. This replaces the Osmani quote in the revised area. The Osmani quotation remains on the Models quote screen.
- "Agentic systems often trade latency and cost for better task performance, and you should consider when this tradeoff makes sense."
- "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control."
- Five workflow patterns: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.
- Frameworks "often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug."

**Anthropic, "How we built our multi-agent research system," June 13, 2025** [primary]. https://www.anthropic.com/engineering/multi-agent-research-system

- Rechecked the task-decomposition, handoff, and coordination discussion in a browser September 15, 2026. The historical experiment figures remain backup and do not predict the FRB system's performance.
- Lead Opus 4 with Sonnet 4 subagents "outperformed single-agent Claude Opus 4 by 90.2%" on an internal research eval.
- "multi-agent systems use about 15x more tokens than chats"; agents generally "use about 4x more tokens than chat interactions."
- "token usage by itself explains 80% of the variance" on BrowseComp.
- Fit: "multi-agent systems excel at valuable tasks that involve heavy parallelization, information that exceeds single context windows, and interfacing with numerous complex tools." Poor fit: "domains that require all agents to share the same context or involve many dependencies between agents," naming most coding tasks.
- Production: resume from where errors occurred; "Adding full production tracing let us diagnose why agents failed"; rainbow deployments.
- Judge design: "single LLM call with a single prompt outputting scores from 0.0-1.0 and a pass-fail grade was the most consistent and aligned with human judgements." "Even in a world of automated evaluations, manual testing remains essential."

**Anthropic, "Effective harnesses for long-running agents," Justin Young, November 26, 2025** [primary]. https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents

- Over-ambition: agents "tended to try to do too much at once, essentially to attempt to one-shot the app." Premature completion: "a later agent instance would look around, see that progress had been made, and declare the job done."
- Fix: initializer agent writes init.sh, a progress file, a JSON feature list (200-plus features), first commit; coding agents do one feature per session with a fixed startup routine; verify with browser automation.
- "It is unacceptable to remove or edit tests because this could lead to missing or buggy functionality."
- Talk interpretation: protect acceptance criteria. Do not weaken tests merely to pass. Faulty or obsolete tests may change through review.

**Dex Horthy, HumanLayer, "12-Factor Agents"** [primary]. https://github.com/humanlayer/12-factor-agents

- "What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production customers?"
- The twelve: natural language to tool calls; own your prompts; own your context window; tools are just structured outputs; unify execution state and business state; launch/pause/resume with simple APIs; contact humans with tool calls; own your control flow; compact errors into context window; small focused agents; trigger from anywhere; make your agent a stateless reducer. Appendix factor 13: pre-fetch context.

**OpenAI, "Harness engineering: leveraging Codex in an agent-first world," February 2026.** https://openai.com/index/harness-engineering/ UNVERIFIED (site blocks fetching). Secondary coverage: about one million lines of production code in five months with none typed by hand; "The agent doesn't need more instructions. It needs a world where the right thing to do is obvious and the wrong thing is hard." Companion: https://openai.com/index/shipping-sora-for-android-with-codex/ . Confirm in a browser before quoting.

**Gartner, "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027," press release, Sydney, June 25, 2025** [primary]. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 Read in a browser September 14, 2026; the page refuses automated fetching.

- "Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls, according to Gartner, Inc."
- Anushree Verma, Senior Director Analyst: "Most agentic AI projects right now are early stage experiments or proof of concepts that are mostly driven by hype and are often misapplied. This can blind organizations to the real cost and complexity of deploying AI agents at scale, stalling projects from moving into production."
- Evidence type: forecast, not observed cancellations. It does not establish that multi-agent architecture causes cancellations.
- Basis: a January 2025 poll of 3,412 webinar attendees, per the syndicated copy at Machine Learning Times.

**Coding-agent anchor.** Both tools: `/plan`, subagents, hooks, `/compact`, `/resume`, `/fork`. Codex: `/plan` will "Switch to plan mode and optionally send a prompt"; `agents.enabled` and `agents.max_concurrent_threads_per_session`; `hooks.<Event>` for PreToolUse, PostToolUse, SessionStart, SessionEnd, gated by `features.hooks`, which defaults to off; `/hooks` to "View and manage lifecycle hooks." Devin CLI: `/plan` and `/mode plan` for read-only planning; `subagents_enabled`, default true; `/hooks` lists loaded hooks with event types and sources; `/resume`, `/continue`, `/fork`; hand-off to a cloud agent with its own machine. Neither tool documents a todo list; the visible artifact is the plan. Loop: gather context, take action, verify, repeat. A PostToolUse hook runs the formatter or tests regardless of what the model believes it did. Docs in §1 and §3 [primary].

**When you are the owner.** You own the loop, stopping conditions, state and resume, retries, escalation, planner-to-worker routing, the compaction trigger, and the budgets for tokens, actions, and latency. Customer-facing: a human is waiting; latency is a product requirement; an unbounded loop is an outage.

**Pitfall.** Adding multiple agents before trying a workflow.

### Orchestration decisions and maintenance

Orchestration revision, September 15, 2026: use one familiar coding-agent action, then the selected Anthropic quote, general decisions, maintenance with pitfalls, and a focused FRB application. The quote illustration contrasts a simple path with optional branching complexity. It is conceptual, not a performance comparison.

The three decisions are who chooses the next step, when work should be delegated, and how execution stops or recovers. Use predefined code for known paths and required checks. Add model-selected actions where judgment helps. Begin with a bounded workflow. Delegate work that can be done independently, define the inputs and expected results of handoffs, and require measured benefit before adding workers. Completion checks, stopping limits, persisted state, bounded retries, and human handoff are part of the execution design. Model selection and routing remain in §1; this area covers how work is divided and coordinated.

Maintenance checks whether new branches preserve required controls and acceptance criteria. Handoffs retain evidence, uncertainty, and clear ownership. Retries must account for an action that might already have succeeded. Persist progress and inspect actual results before repeating side effects, following the illustrative export receipt contract in §0. Set action, token, and end-to-end latency limits. Faulty or obsolete tests may change through review; protecting acceptance criteria does not mean preserving a broken test indefinitely.

The OpenAI reasoning-benchmark result, Anthropic quality and token comparisons, long-running-agent failure taxonomy, workflow-pattern inventory, and Gartner forecast remain backup evidence with their original limitations. Remove the duplicate Osmani quote from the active Orchestration slides. Preserve the headline pitfall, "Adding multiple agents before trying a workflow."

### FRB workflow and displaced forecast

Illustrative application of §0: retrieve the target packet, inspect evidence, compare cases, reconcile findings, verify, export. Begin with this bounded workflow. Measure it before adding workers for independent comparisons of FRB-017 and FRB-031. Workers return evidence and uncertainty to the main analyst, within the authorized internal corpus and attachments. Conflicting findings prompt source inspection or an unresolved result. Persist completed steps and revisions for resume, recheck freshness and access, bound retries, and check export receipts before repeating an export. Incomplete indexing and action/token/latency limits produce explicit limitations. Deliver the sequence directly, without an audience pause. The pattern inventory, 12-Factor ownership list, and Gartner forecast remain background or backup, not slide 15 content. Slide 9 introduces the choice between one model and task-based routing. This area covers how work is decomposed and coordinated; it does not repeat model selection.

### Orchestration content rework

The Markdown-first revision keeps the existing quote and develops orchestration as the execution design for selecting, sequencing, and coordinating work. The coding-agent connection is the action/check/retry loop. Define what code fixes in advance and where model judgment selects the next action. A planned sequence alone does not enforce permissions, verification, or stopping rules. The three teaching decisions remain control of the next step, delegation, and stopping/recovery.

Use the simplest execution design that meets the task. The FRB starting point is a bounded workflow with model interpretation inside defined stages. It is a teaching proposal, not a claim that all agent systems must use the same architecture. Keep tool contracts in §3, context selection in §2, and model eligibility/selection in §1. Verification and evals defines acceptable results; orchestration enforces where those checks affect execution.

The FRB example's six stages remain retrieve, inspect, compare, reconcile, verify, and export. Save the exact source revisions, working draft, stage completion, and relevant check and export outcomes. A changed draft requires renewed verification before export. A resumed run rechecks freshness and access; changed evidence returns the affected work to inspection and reconciliation before another verification. These are authored execution rules for the illustrative system, not guarantees supplied by a particular framework.

Use the tool contract's confirmed, failed, and unknown outcomes to choose the recovery path. A matching export receipt can establish completion. A confirmed failure may be retried within policy and the remaining budget after its cause is addressed. For an unknown outcome, inspect the export state before deciding to retry. If completion cannot be established, preserve that uncertainty and hand off rather than repeat the side effect blindly. Limits produce an explicit limitation or handoff, not an automatic success status.

Optional workers compare independent FRB cases only within the authorized corpus and approved processing scope. They return evidence and uncertainty to the main analyst and cannot export or approve official findings. Keep delegation conditional on measured benefit with the available approved models. Additional workers do not establish that a capability gap is solved. Compare whole-task quality, cost, and latency, including reconciliation and verification. The presenter chose a brief multi-agent contrast with the bounded workflow; detailed patterns remain backup. The full contract remains in `internal/frb-running-example.md`.

## 5. Verification and evaluation

**Hamel Husain and Shreya Shankar, "AI Evals: Everything You Need to Know," Hamel's Blog, May 28, 2025, updated September 13, 2026** [primary]. https://hamel.dev/blog/posts/evals-faq/ Checked in a browser September 15, 2026. The page's displayed modification date is September 13; this corrects the earlier September 1 date in this entry.

- "Error analysis is the most important activity in evals."
- Selected for the Evals quote screen. Attribute the jointly authored guide to both authors. The guide presents practitioner opinions, not universal rules.

**The organizing model for this talk.** Verification checks an action before accepting it. Evaluation measures behavior across representative cases. Inside and outside the loop describe complementary uses of checks, not a universal boundary between tests and evals. Keep both running as the system changes.

**Anthropic, "Demystifying evals for AI agents," Mikaela Grace, Jeremy Hadfield, Rodrigo Olivares, Jiri De Jonghe, January 9, 2026** [primary]. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents

- Rechecked in a browser September 15, 2026 for grader types, outcome versus transcript, repeated trials, expert calibration, the initial 20-to-50-task recommendation, and ongoing evaluation. No new benchmark figures are promoted into the content draft.
- "The capabilities that make agents useful also make them difficult to evaluate." "Agents use tools across many turns, modifying state in the environment and adapting as they go, which means mistakes can propagate and compound."
- Vocabulary: task, trial, agent harness, eval harness, transcript, outcome, grader, suite.
- "A flight-booking agent might say 'Your flight has been booked' at the end of the transcript, but the outcome is whether a reservation exists in the environment's SQL database."
- Process checks: required approvals, access constraints, and policy compliance matter. Avoid prescribing an arbitrary sequence of tools. The talk's line is "Check the result. Inspect the trace."
- Against rigid process grading: "too rigid and results in overly brittle tests, as agents regularly find valid approaches that eval designers didn't anticipate."
- Graders. Code-based: "Fast, cheap, objective, reproducible, easy to debug," brittle to valid variation. Model-based: "Flexible, scalable, captures nuance, handles open-ended tasks," but "non-deterministic, requires human calibration." Human: gold standard, expensive, slow.
- pass@k: "Likelihood that an agent gets at least one correct solution in k attempts." pass^k: "Probability that all k trials succeed." "At k=1, they're identical (both equal the per-trial success rate). By k=10, they tell opposite stories."
- "20-50 simple tasks drawn from real failures is a great start."
- "A good task is one where two domain experts would independently reach the same pass/fail verdict."
- "You won't know if your graders are working well unless you read the transcripts and grades from many trials."
- Capability suites probe limits. Regression suites should keep established cases passing. A 100% regression pass rate is desirable.
- Illustrative grader adapted for this talk: a success sentence fails when no matching reservation exists. Check the requested traveler and itinerary against reservation state, then inspect required approvals and access constraints separately. This is a backup illustration, not personal experience.
- "One-sided evals create one-sided optimization."

**Hamel Husain, "Your AI Product Needs Evals," March 29, 2024** [primary]. https://hamel.dev/blog/posts/evals/ Quotes in research/section-1.md §3. Also Husain and Shankar, "AI Evals: Everything You Need to Know," updated September 13, 2026, https://hamel.dev/blog/posts/evals-faq/ : "Error analysis is the most important activity in evals." "We've spent 60-80% of our development time on error analysis and evaluation." Backup only: this describes projects his teams worked on, not an industry allocation rule or competency ranking. Their challenge-the-suite advice applies to probing capability; established regression cases should continue to pass. LLM-as-judge guide: https://hamel.dev/blog/posts/llm-judge/ (the "a judge is a hack to make you look at your data" line is UNVERIFIED as to wording).

**Shankar et al., "Who Validates the Validators?" UIST 2024.** https://arxiv.org/abs/2404.12272 Criteria drift; quotes in research/section-1.md §3.

**Eugene Yan, "Evaluating the Effectiveness of LLM-Evaluators."** https://eugeneyan.com/writing/llm-evaluators/ Survey of about two dozen papers on judge use, alignment, finetuned evaluators, critiques. Specific quotes UNVERIFIED.

**OpenAI evaluation guidance.** https://developers.openai.com/api/docs/guides/evaluation-best-practices , https://developers.openai.com/api/docs/guides/agent-evals , https://developers.openai.com/api/docs/guides/graders . Trace grading as the fastest route to workflow-level issues. The standalone OpenAI Evals platform is reported to go read-only October 31, 2026 and shut down November 30, 2026 (UNVERIFIED); do not present it as durable.

**Martin Fowler, August 28, 2025** [primary]: "I find LLMs are quite happy to say 'all tests green', yet when I run them, there are failures."

**Coding-agent anchor.** The test suite is the coding agent's verifier: write, run, read the failure, retry. It works because the repo already contains ground truth. Codex adds `/review`, "Ask for a working tree review," and an auto reviewer that can deny a command, with `/approve` to "Approve one retry of a recent auto review denial." Failure mode: the agent declares success without running anything; the fix is a hook or startup routine that runs the check. Docs in §1 [primary].

**Earlier domain examples, backup only.** Refund limits, account ownership, duplicate actions, and ledger state illustrated direct checks. The active FRB examples below replace these on slide 17.

**Pitfall.** Using a generic judge without error analysis or result checks.

### Evaluation decisions, maintenance, and the FRB check

Earlier deck revision, September 15, 2026: one coding-agent test-run example, the selected Husain/Shankar quote, general decisions, maintenance with pitfalls, and a worked FRB check. The quote graphic depicts inspection and comparison; it is not a measured result. The Markdown-first rework below replaces that screen sequence and removes the previously reserved personal story.

The three decisions are what counts as success, which checks can establish it, and which cases and trials provide evidence. Define the outcome, required constraints, and serious failures with domain experts. Use direct checks where possible and expert judgment for meaning and usefulness. Calibrate model graders against expert decisions. Start with 20 to 50 cases drawn from real failures, then cover common tasks and important edge cases. This is a starting recommendation from Anthropic above, not a universal sample-size requirement. Repeat trials to examine consistency.

Verification before accepting a result and evaluation across representative cases remain complementary uses of checks. Evals are tests of an AI system. The probability distinction remains spoken: at least one success across attempts and success across every attempt answer different questions. pass@k and pass^k notation moves to research backup. Traditional tests still run as part of the system's checks. Keep both verification and evaluation running as the system changes.

Maintenance covers criteria that evolve when outputs expose missing requirements, graders that disagree with experts, and suites that miss new failures. Review disagreements, rerun representative cases after model or harness changes, and add production failures to regression cases. Inspect the actual result and trace before choosing a repair. Preserve the existing headline pitfall. The presenter removed story #2 and its 1:00 reservation during the content rework. The FRB check remains illustrative and must not be presented as personal experience.

**Illustrative source-support check.** The deliberately wrong answer, “The board confirmed bearing wear,” cites FRB-042-MIN r2 §3, paragraph 2. The record and location exist in the invented packet, so the direct reference check passes. The exact passage says the cause remains unresolved and calls for inspection, so the source-support check fails. Expected: unresolved cause; inspection required. Reference existence does not establish semantic support. Keep this failure as a regression case and rerun it after changes, alongside the representative suite and repeated trials. This is a designed teaching check, not a result from a deployed model. The packet in `internal/frb-running-example.md` now records the cited reference on the wrong answer explicitly.

The preliminary briefing remains part of the packet and the Context example. The focused Evals screen needs only the cited minutes to demonstrate the unsupported claim. Inspect parsing, retrieval, compaction, worker output, and synthesis in the actual trace before assigning a cause or selecting a repair. The broader direct-check/expert-judgment inventory, probability notation, flight-booking/refund illustrations, and team-specific allocation figures remain backup with their original qualifications.

### Verification and evals content rework

The Markdown-first revision opens with the existing Husain/Shankar quote, then defines verification and evaluation as complementary uses of checks. Verification informs acceptance of a particular result or action. Evaluation measures system behavior over representative cases and repeated trials. Code checks, model graders, and expert review can contribute to either. Evals are tests of an AI system; ordinary software tests remain necessary. The talk's inside/outside distinction is an organizing frame, not a universal technical taxonomy.

Develop three decisions: what counts as success, which checks can establish it, and which cases and repeated trials provide useful evidence. Define outcomes, required constraints, serious failures, and acceptable limitations with domain experts. Measure important failure categories as well as overall results. Required approvals and access boundaries matter, while arbitrary tool sequences should not become the definition of correctness. Begin with a manageable initial suite; Anthropic's 20-to-50-task recommendation is a starting point, not statistical proof of readiness or a universal sample-size rule.

Keep error analysis connected to engineering changes: inspect the outcome and trace, identify the failure and its source, repair the relevant component, and rerun representative cases. Check tasks and graders too. Preserve established regression cases and add production failures as the system changes. Capability probes and regression checks have different purposes. A green suite supports claims only within the behaviors it covers. Ongoing evaluation remains part of deployment.

The FRB case keeps the existing invented minutes, deliberately unsupported answer, direct-reference PASS, source-support FAIL, and expected unresolved cause. A reference resolving correctly does not establish support for the claim. Failed source-support checks prevent export of that draft under the shared contract. The corrected content needs verification again. The presenter chose a brief comparison of code checks, model graders, and expert review. Remove the personal story and its 1:00 reservation from the revised content; the FRB check is the worked example. Final timing remains open for the pacing pass.

Model graders, evaluation services, stored traces, and human reviewers that receive the CUI/ECI records remain within the applicable approved access and processing scope. This follows the illustrative deployment boundary in §0 and §1. An approved answering model is not automatically a suitable grader. Evaluate grader agreement with expert decisions; if suitable model grading is unavailable, use authorized expert review for the semantic judgments or limit the automated scope. These are authored design choices, not a claim that any named grader or service is approved.

## 6. Production operations: observability, guardrails, security, identity, governance

**Observability.** OpenTelemetry GenAI semantic conventions: spans, attributes, metrics, events for model calls, tool executions, agent runs, retrieval, memory. Now maintained in their own repository, https://github.com/open-telemetry/semantic-conventions-genai [primary], checked in a browser September 14, 2026; the spans document carries "Status: Development" and "Warning: Semantic conventions are subject to change." The old page at https://opentelemetry.io/docs/specs/semconv/gen-ai/ now only redirects. Secondary coverage (July 2026) reports no stable release or tag yet, so instrument against a pinned snapshot and expect attribute names to move. Blog: https://opentelemetry.io/blog/2026/genai-observability/ . Platforms to name generically: Langfuse, LangSmith, Braintrust, Arize Phoenix. Metrics a builder tracks: latency p50/p95/p99, time to first token, tokens per request, cost per request and per completed task, cache hit rate, tool call and failure counts, loop iterations per task, error and rate-limit counts. Agentic moves: cost per completed task; watch p95 and p99 tokens because tails concentrate cost. Coding-agent anchor: Codex `/status` will "Display session configuration and token usage" and `/usage` will "View account token usage"; `otel.exporter`, `otel.trace_exporter`, and `otel.metrics_exporter` accept otlp-http or otlp-grpc, with metrics defaulting to statsig. Devin CLI `/usage` will "Show estimated credit/ACU usage for the session," `/session-stats` shows consumption by dimension, `/context` shows window usage; `--sandbox` with `sandbox.allowed_domains`, `sandbox.denied_domains`, and `sandbox.network_mode` of full or limited; `devin mcp login` for OAuth. Docs in §1 and §3 [primary].

**Guillermo Rauch, quoted in "State of AI Engineering," Datadog, 2026** [primary]. https://www.datadoghq.com/state-of-ai-engineering/ Checked in a browser September 15, 2026.

- "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe."
- Selected excerpt for the Production operations quote screen, formerly Operating it. The report attributes the quotation to Guillermo Rauch of Vercel. Datadog is the publisher, not the speaker. The retrieved page does not establish a publication day. Wording and attribution rechecked in a browser September 15, 2026.


**Simon Willison, "The lethal trifecta for AI agents," June 16, 2025** [primary]. https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/

- Rechecked in a browser September 15, 2026 for the combined capability risk and the scope of the prompt-injection discussion. The content rework retains the conditional exfiltration-path framing and does not claim comprehensive protection.
- The three: "Access to your private data," "Exposure to untrusted content," "The ability to externally communicate." These capabilities can combine into an exfiltration path. Break or constrain the path. This does not certify safety against other threats.
- "LLMs are unable to reliably distinguish the importance of instructions based on where they came from."
- "we still don't know how to 100% reliably prevent this from happening." A probabilistic filter is insufficient as the sole security boundary. Filtering can contribute to defense in depth. A web fetch can communicate externally, and one integration can supply multiple capabilities.

**OWASP Top 10 for LLM Applications 2025.** https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf LLM01 prompt injection; LLM06 excessive agency (too much functionality, permissions, or autonomy); new in 2025: LLM07 system prompt leakage, LLM08 vector and embedding weaknesses, LLM10 unbounded consumption.

**OWASP Top 10 for Agentic Applications 2026, released December 9, 2025** [primary]. Announcement: https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/ Resource page: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ Checked in a browser September 14, 2026. Names as written on the announcement: ASI01 Agent Goal Hijack, ASI02 Tool Misuse, ASI03 Identity & Privilege Abuse, ASI04 Agentic Supply Chain Vulnerabilities, ASI05 Unexpected Code Execution, ASI06 Memory & Context Poisoning, ASI07 Insecure Inter-Agent Communication, ASI08 Cascading Failures, ASI09 Human-Agent Trust Exploitation, ASI10 Rogue Agents. The announcement names EchoLeak as its ASI01 example and the Replit incident as its ASI10 example, which connects both backup incidents to the list. The PDF's full titles may add a word or two; the names retained here match the announcement.

**Guardrail patterns (practitioner consensus, secondary).** Defense in depth at every boundary: input classification, provenance tagging on retrieved content, sandboxed tool execution, output validation, post-hoc trace review. For agents that change production state: circuit breakers on token and action counts, approval gates on consequential actions, least-privilege tool scopes.

**Identity and access, talk design pattern.** A distinct workload identity with short-lived delegated authority is an illustrative design pattern, not a universal identity prescription or a claimed standard. Supported requirements are separate: enforce the user's authorized scope in downstream systems (OWASP §3), avoid token passthrough, and minimize scopes (MCP §3).

**European Commission, "Transparency obligations under Article 50 of the AI Act", Shaping Europe's digital future, checked September 15, 2026** [primary]. https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act

- "unless this is obvious".
- Article 50 applies from August 2, 2026. Direct-interaction disclosure is the provider's Article 50(1) obligation for covered direct AI interactions with natural persons, with an exception when the interaction is obvious. Background machine-to-machine systems do not meet this direct-interaction scope.
- Providers develop or commission systems and place them on the market or put them into service under their name. Deployers use systems under their authority. Deployer obligations separately cover emotion recognition, biometric categorisation, deepfakes, and certain public-interest text. Determine the role and applicable EU scope before assigning duties.
- The FAQ has an inconsistent subsection number in its opening provider answer. Its dedicated direct-interaction answer correctly identifies Article 50(1). Use that answer.
- Slide wording: EU AI Act Article 50: disclosure duties for covered direct AI interactions. This is a scoped summary, not a compliance determination for every deployment.

**Incidents.**

- EchoLeak was a researcher-demonstrated vulnerability, CVE-2025-32711, CVSS 9.3, disclosed June 2025 by Aim Security. Zero-click indirect prompt injection in Microsoft 365 Copilot. One crafted email, ingested during summarization, caused Copilot to pull data from OneDrive, SharePoint, and Teams and exfiltrate it through a trusted Microsoft domain, bypassing the injection classifier and link redaction. Microsoft: no customer action required, no evidence of exploitation. Analysis: https://arxiv.org/pdf/2509.10540
- Replit agent deletes a production database, July 2025. During a public twelve-day experiment by Jason Lemkin of SaaStr, under an explicit code freeze, the agent ran destructive commands and erased data covering about 1,206 executives and 1,196 companies. Replit's CEO apologized July 19, 2025 and shipped dev/prod database separation, a planning-only mode, mandatory documentation checks, and one-click restore. https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure and https://incidentdatabase.ai/cite/1152/
- Moffatt v. Air Canada, BC Civil Resolution Tribunal, February 2024, via McCarthy Tétrault legal commentary. Secondary evidence only; the tribunal decision has not been independently verified. Paraphrase: the airline was held responsible for misleading information supplied by its chatbot. Do not use the disputed separate-entity quotation. https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot
- GTG-1002, disclosed by Anthropic November 14, 2025. AI-orchestrated espionage using Claude Code and MCP tools against about thirty targets; the model executed 80 to 90 percent of the operation. https://www-cdn.anthropic.com/d7dd50dd1185f59be051b307150d877f2b82bd2c.pdf and https://attack.mitre.org/campaigns/C0062/ Stakes only, not fear.

**When you are the owner.** All of this was rendered for you as a permission prompt, a sandbox, an OAuth flow, `/usage`, and a vendor trust and safety team. You own the approval process, using human approval, async workflows, or enforced policies as needed. The sandbox becomes infrastructure and the audit trail supports accountability. Apply Article 50 disclosure duties within their relevant role and scope.

**Pitfall.** Combining private data, untrusted content, and outbound access without reviewing the risk. Map capabilities: private data, untrusted content, external communication. A web fetch may already provide an outbound channel, and one integration may occupy more than one corner.

### Operating decisions and the FRB agreement

Earlier deck revision under the name Operating it, September 15, 2026: one session-usage example, the selected Guillermo Rauch quote, four general operating decisions, maintenance with the security pitfall, an illustrative FRB operating agreement, and the existing full-screen yours diagram. The quote graphic depicts visibility into an execution path, not a measured trace. The user example is Devin CLI `/usage`, which reports estimated credit/ACU usage for the session, as recorded in the vendor anchor above. The content rework below uses the presenter-selected name Production operations.

The four decisions concern access and authority, observability, stop/handoff rules, and ownership of approvals and incidents. Enforce identity, scope, and destinations outside the model. Begin with least privilege and explicit approval requirements. Trace model calls, tools, and outcomes; track quality, cost per completed task, and latency. Set enforceable budgets, failure responses, recovery paths, and human handoff. Assign an accountable operator and review process, with audit trails and rollback. Identity design specifics remain illustrative patterns, not universal requirements.

Maintenance covers integrations that join private data, untrusted content, and external communication; changes that move quality, cost, and latency; and changing permissions, policies, approvals, and response processes. Willison's trifecta identifies one exfiltration path. Break or constrain that path. A probabilistic filter is insufficient as the sole security boundary. This is one threat model, not a comprehensive safety test. Protect access to traces as well as source records. Feed observed failures back into evaluations.

**Illustrative FRB operating agreement.** Restrict access to authorized internal records and permitted export destinations, enforced outside the model. Trace exact revisions, decisions, checks, and exports. Monitor quality, freshness, parsing/tool failures, cost per completed brief, and end-to-end latency. Restrict trace access. Failed checks, missing evidence, or exhausted budgets produce an explicit limitation or human handoff. People retain responsibility for official causes, decisions, and board records. The agreement is a teaching design, not a deployed control system or legal agreement. New integrations must be assessed for the combined capability risk, including instructions embedded in internal attachments.

EchoLeak, Replit, Air Canada, and the other incidents remain research backup with their original evidence limitations. Detailed OpenTelemetry convention status, identity patterns, protocol security requirements, and Article 50 treatment also remain backup. No universal disclosure or compliance claim is made on the active slides. The full-screen yours anatomy diagram closes Section 2 after the FRB agreement.

### Production operations content rework

The presenter selected Production operations as the replacement for Operating it. The area covers keeping the deployed system observable, controlled, and accountable under changing tasks, dependencies, and requirements. Retain the Rauch quotation first, then the definition, why it matters, decisions and trade-offs, challenges and pitfalls, and the FRB application. Preserve the closing anatomy diagram as a section wrap after the application. No slide layout or timing is assigned in this pass.

The four decisions remain authority, observation, stopping/handoff, and accountable ownership of approvals, changes, and incidents. Distinguish product-level operating policies and response responsibilities from the per-run execution rules in Orchestration. Observability connects observable requests, model/tool activity, source revisions, checks, outcomes, and resource use. Evaluation supplies quality criteria; production operations ensures failures reach a responsible team and feed back into the evaluation suite. OWASP authorization and monitoring guidance in §3 was rechecked in a browser September 15, 2026 for this treatment.

Keep the security lesson focused on the combined system. Private data, untrusted content, and outbound communication can form an exfiltration path. An attachment in an internal corpus can contain instructions the model should not treat as authority; this is an illustrative application of the threat model. Review new integrations for their combined capabilities. Enforce access and destinations outside the model. Probabilistic filters can contribute to controls, but do not establish an authorization boundary by themselves. The trifecta is one threat model, not a complete safety assessment.

The FRB agreement extends the existing access, monitoring, handoff, and human-ownership rules. Apply the CUI/ECI processing boundary to source records, derived context, traces, and evaluation artifacts. Monitor freshness and parsing/tool failures as well as quality, cost per completed brief, and end-to-end latency. Identify who receives a failed check, missing evidence, exhausted budget, or unknown export outcome. Retain evidence for authorized investigation. Assign responsibility for approving changes and disabling or reverting a problematic configuration. A configuration rollback does not automatically undo an earlier export or other completed action.

These are proposed operating responsibilities for the invented FRB system, not a deployed control design, organizational role assignment, or compliance certification. Keep specific incident accounts, legal duties, telemetry schema details, and statistics in backup with their existing qualifications. The main narrative stays on the engineering decisions and their observable consequences.

## 7. June to September 2026: what the audience lived through

- **MCP revision 2026-07-28**, the largest since launch. Stateless at the protocol layer; Multi Round-Trip Requests replace server-initiated sampling and elicitation; formal deprecation policy with a twelve-month minimum window; HTTP+SSE transport deprecated; new rule "MCP servers MUST NOT treat possession of a state handle as authentication." https://blog.modelcontextprotocol.io/posts/2026-07-28/ Release-note specifics UNVERIFIED beyond spec pages.
- **"Harness engineering" became the standard phrase.** OpenAI February 2026; Osmani April 2026; OpenAI August 2026 definition. Loop engineering and graph engineering are blog-level coinages.
- **Routing evidence got concrete.** LangChain August 11, 2026 (area 1).
- **A deprecation wave landed inside the window.** OpenAI twenty-plus shutdowns October to December; Anthropic retired Opus 4.1 August 5; Copilot retired six models September 1 (verified, §1).
- **OpenClaw.** Open-source autonomous agent past 135,000 GitHub stars; CVE-2026-25253, one-click remote code execution via an unvalidated WebSocket origin; web UI on port 8080 with auth disabled by default; about 12% of its skill marketplace malicious (secondary report checked in §3: 341 of 2,857, Koi Security via The Hacker News, February 2026); a related agent social network exposed 1.5 million API tokens. The CVE, the star count, and the token exposure remain UNVERIFIED; start at https://en.wikipedia.org/wiki/OpenClaw . If confirmed, the strongest recent "the harness is the attack surface" example.
- **The audience's tools.** Devin CLI launched April 27, 2026, with a dedicated virtual machine and cloud hand-off; Fusion reached it September 11 (not used on stage). Codex CLI docs now live at learn.chatgpt.com. Both read AGENTS.md, both have `/plan`, `/compact`, `/resume`, `/fork`, subagents, hooks, MCP, a sandbox, and a usage command. Anchors in §1 through §6 [primary].
- **Anthropic's evals post, January 9, 2026**, is the newest canonical text in area 5; pass@k vs pass^k is new vocabulary for most engineers.
- **Enterprise standardization.** Salesforce on Claude Code June 4, 2026; Zalando, "Agentic Engineering at Zalando: a snapshot," August 2026, https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html . UNVERIFIED.
- **Models in the room.** Claude Sonnet 5 (June 30), Opus 5 (July 24, updated August 12), Fable 5.1 and Mythos 5.1 (September 1, reportedly with breaking API changes), GLM-5.2 open-weight (June 15). Dates UNVERIFIED. Historical research leads only. Do not use these model names or dates on stage without primary verification. The migration lesson does not depend on them.

## Verify before stage

- FRB material is illustrative. Check IDs, revisions, source locations, uncertainty, and human ownership against `internal/frb-running-example.md`; do not seek or imply real-world verification of invented cases.
- Data sensitivities: NARA and the NIST publication abstract checked September 15, 2026. Keep organization-specific eligibility and the observation about older, less capable approved options attributed to presenter-supplied context. The FRB corpus's CUI/ECI constraint and capability gap are illustrative assumptions. No named model, provider, environment, or FRB record has been established as approved or formally designated by these sources.

- OpenAI "Harness engineering" research lead: verify its secondhand material before use. This is distinct from the directly fetched August 19 "Codex as a platform" source in §0 used for the map and orchestration material. Earlier numbered revision notes below retain their historical slide numbers.
- OpenAI "A practical guide to building agents": confirm quotes against the PDF.
- OpenClaw CVE, star count, and token exposure: confirm or drop. CamoLeak is a checked researcher report in §3. The malicious-skill count comes from a directly checked secondary report, not a checked underlying audit.
- Benchmark-criticism percentages: the general claim is safe; the numbers are not.
- Backup only, Chen, Zaharia, Zou: revised paper checked September 15, 2026. The 84/51 result is limited to prime/composite classification, step-by-step prompting, and the March/June 2023 versions.
- Air Canada and Replit: keep explicit secondary-source attribution. The tribunal decision and underlying Replit event have not been independently checked.
- ClawHub: The Hacker News report was checked, not Koi's underlying audit.
- Identity: an illustrative design pattern, not a verified universal requirement.
- Article 50 and OWASP authorization: Commission FAQ and OWASP page checked September 15, 2026.
- AGENTS.md adoption and Linux Foundation donation: confirm or say "cross-tool standard" without numbers.

**Do not use:** unverified model-release dates, unsupported benchmark percentages, disputed Air Canada quotation, forecasts as observed outcomes, or secondary reporting as primary evidence of an event.
