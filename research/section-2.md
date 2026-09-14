# Section 2 research: what AI engineers actually engineer

Compiled 2026-09-14 for the September 17 talk. Markers: **[primary]** means fetched and quoted directly. **UNVERIFIED** means from a search snippet or secondary coverage; confirm before it goes on a slide. Organized by the six areas in the outline, plus the map, the June to September 2026 window, and a closing "verify before stage" list.

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

## 1. Models: a component you select, measure, and replace

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

**Lingjiao Chen, Matei Zaharia, James Zou, "How is ChatGPT's behavior changing over time?" July 2023.** https://arxiv.org/abs/2307.09009

- GPT-4 scored 84% identifying prime vs composite numbers in March 2023 and 51% in June 2023, same questions. Framing: "the behavior of the 'same' LLM service can change substantially in a relatively short amount of time." Exact quote wording UNVERIFIED; the 84/51 figures are well documented.

**LangChain, "How many of your agent's calls actually need a frontier model?" Srimanth Tangedipalli and Karan Singh, August 11, 2026** [primary]. https://www.langchain.com/blog/switchyard-agent-routing-benchmark

- 145 multi-step agentic tasks averaging 6.3 model calls each: customer support under policy constraints, on-call incident investigation, workflow automation.

| Configuration | Accuracy | Cost per task |
|---|---|---|
| Frontier model alone | 86.0% | $0.092 |
| Routed | 80.0% | $0.026 |
| Small model alone | 77.7% | $0.006 |

- Only 7% of calls needed the frontier model (4.1% to 9.1% across five runs).
- "The frontier model was used far less often than a single-model setup assumes, and the last six points of accuracy cost 3.5x more per completed task."
- "Routing between NVIDIA Nemotron 3.5 Lightning and Claude Opus 4.8 cut the total cost by 74%."
- Break-even rule: "minimum offload = judge cost / (expensive cost - cheap cost)." Routing only pays when the price gap exceeds the router's own cost.

**Benchmarks as weak evidence.** All specifics UNVERIFIED (secondary sources): identical weights can score ten to twenty points apart depending on the eval harness; on one SWE-bench Verified leaderboard as of June 2026 only one of a hundred results was independently verified; the same model produces sharply different numbers on SWE-bench Verified self-reported vs SWE-bench Pro on a vendor scaffold vs Scale's SEAL harness; memorization of widely circulated repository issues. Contamination-resistant alternative: SWE-bench-Live, https://swe-bench-live.github.io/ . The defensible claim needs no citation: a public benchmark measures a population you did not choose, on a harness you do not control, reported by a party with an interest in the result. Your eval suite measures your traffic.

**Coding-agent anchor.** Claude Code `/model` opens a picker, https://code.claude.com/docs/en/model-config . The `opusplan` alias runs an Opus-tier model in plan mode and Sonnet for execution: routing as a one-word setting. Cursor and Copilot expose a dropdown. What the picker hides: the vendor chose the default, tuned prompts and tool descriptions per model, handles failover, absorbs price changes, and migrated every user off every retired model. GitHub Copilot retired Claude Opus 4.5 and 4.6, Sonnet 4.5 and 4.6, and Gemini 3.1 Pro on September 1, 2026 (UNVERIFIED, secondary).

**When it's your agent.** Six selection axes: capability on your tasks, cost per completed task, latency at p95, context window, tool-use reliability, data residency. Routing and fallback. Pinning: a dated snapshot buys reproducibility and an expiry; an alias buys silent upgrades and silent drift. Data residency can override every other axis for enterprise. Fallback composition reported for 2026 (UNVERIFIED): retry primary, rotate provider on exhaustion, serve semantic cache hit, degrade UI.

**Open weights vs hosted API.** UNVERIFIED, practitioner blogs: self-hosting is priced as GPU rental but decided by operations, redundancy, and an eval harness proving a quantized model kept quality; hosted APIs scale to zero and GPUs do not; self-hosting earns its keep at sustained high utilization or when privacy, latency, or fine-tuning control forces it; open-weight models trail closed by a few points on the benchmarks that matter.

**Pitfall.** Treating the model as a fixed dependency: a hardcoded model ID with no eval suite behind it, so the deprecation email arrives with a replacement you have never measured. Mirror image: an alias with drift you never detect. Same fix, which sets up area 5.

## 2. Context engineering and knowledge

**Andrej Karpathy, X post, June 25, 2025.** https://x.com/karpathy/status/1937902205765607626

- "context engineering is the delicate art and science of filling the context window with just the right information for the next step." Headline sentence confirmed via Simon Willison, June 27, 2025, https://simonwillison.net/2025/Jun/27/context-engineering/ . Full thread UNVERIFIED.
- Enumerates: task descriptions, few-shot examples, RAG, multimodal data, tools, state and history, compaction.

**Anthropic, "Effective context engineering for AI agents," September 29, 2025** [primary]. Prithvi Rajasekaran, Ethan Dixon, Carly Ryan, Jeremy Hadfield. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

- Context engineering is "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference," vs prompt engineering, "methods for writing and organizing LLM instructions."
- "Context, therefore, must be treated as a finite resource with diminishing marginal returns."
- "LLMs have an 'attention budget' that they draw on when parsing large volumes of context."
- System prompts: "The optimal altitude strikes a balance: specific enough to guide behavior effectively, yet flexible enough to provide the model with strong heuristics."
- Tools: "tools should be self-contained, robust to error, and extremely clear with respect to their intended use." "One of the most common failure modes we see is bloated tool sets."
- Long-horizon techniques: compaction ("summarizing its contents, and reinitiating a new context window with the summary"); note-taking ("the agent regularly writes notes persisted to memory outside of the context window"); sub-agents ("specialized sub-agents can handle focused tasks with clean context windows"); just-in-time retrieval ("maintain lightweight identifiers... and use these references to dynamically load data into context at runtime").
- Source for RAG as one technique among several: pre-retrieval embedding search is set against agentic just-in-time loading.

**Yichao "Peak" Ji, Manus, "Context Engineering for AI Agents: Lessons from Building Manus," July 18, 2025** [primary]. https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus

- "the KV-cache hit rate is the single most important metric for a production-stage AI agent"
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

**Coding-agent anchor.** Instructions files: CLAUDE.md (Claude Code), .cursorrules (Cursor), .github/copilot-instructions.md (Copilot), AGENTS.md as the cross-tool standard, https://agents.md/ (formalized August 2025, 60,000-plus projects, donated to the Linux Foundation's Agentic AI Foundation December 2025; adoption and donation UNVERIFIED beyond the site). Auto-compaction that dropped something. Claude Code exposes a PreCompact hook and keeps subagent transcripts out of the parent context (UNVERIFIED, secondary).

**When it's your agent.** The vendor chose the context budget, compaction policy, memory convention, and retrieval strategy. You own all four. What goes in: instructions, examples, retrieved knowledge, session state, memory, tool results, each with relevance, freshness, provenance, size. Customer-facing: the context holds another person's data; a compaction that drops a constraint is a wrong answer to a customer; memory that crosses sessions is a breach.

**Pitfall.** Adding context rather than curating it. A large window is not permission to fill it; Chroma shows degradation well before the window is full.

## 3. Tools and extensibility

**Anthropic, "Writing effective tools for agents, with agents," Ken Aizawa, September 11, 2025** [primary]. https://www.anthropic.com/engineering/writing-tools-for-agents

- "deterministic systems produce the same output every time given identical inputs, while non-deterministic systems, like agents, can generate varied responses." Tools are a contract between deterministic code and a non-deterministic caller; "we need to design them for agents."
- Consolidation: "Tools can consolidate functionality, handling potentially multiple discrete operations (or API calls) under the hood." schedule_event, not list_users plus list_events plus create_event.
- Namespacing: "Namespacing (grouping related tools under common prefixes) can help delineate boundaries between lots of tools"; prefix vs suffix had "non-trivial effects on our tool-use evaluations."
- Results: prefer "contextual relevance over flexibility, and eschew low-level technical identifiers." Resolving UUIDs to names "significantly improves Claude's precision in retrieval tasks."
- response_format enum: "concise" vs "detailed"; Slack example 206 tokens vs 72.
- "Even small refinements to tool descriptions can yield dramatic improvements." Claude Sonnet 3.5 reached state of the art on SWE-bench Verified "after we made precise refinements to tool descriptions."
- Eval loop: "Start by generating lots of evaluation tasks, grounded in real world uses," then let agents analyze transcripts and improve the tools.

**Anthropic, "Introducing advanced tool use on the Claude Developer Platform," Bin Wu, November 24, 2025** [primary]. https://www.anthropic.com/engineering/advanced-tool-use

- Five MCP servers (GitHub, Slack, Sentry, Grafana, Splunk) consume "approximately 55K tokens before the conversation even" begins; internally "tool definitions consume 134K tokens before optimization."
- "the most common failures are wrong tool selection and incorrect parameters, especially when tools have similar names"
- Deferred loading with tool search: "an 85% reduction in token usage while maintaining access to your full tool library." MCP evals: "Opus 4 improved from 49% to 74%, and Opus 4.5 improved from 79.5% to 88.1%."
- Programmatic tool calling: "Average usage dropped from 43,588 to 27,297 tokens, a 37% reduction on complex research tasks."
- Tool use examples: "improved accuracy from 72% to 90% on complex parameter handling."

**MCP Security Best Practices, spec revision 2026-07-28** [primary]. https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices

- "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." Token passthrough is "explicitly forbidden."
- MUST-level mitigations for confused deputy, SSRF via OAuth discovery, state handle hijacking, local server compromise, authorization URL validation, mix-up attacks, scope minimization.
- "If an MCP client supports one-click local MCP server configuration, it MUST implement proper consent mechanisms prior to executing commands." Clients SHOULD "Execute MCP server commands in a sandboxed environment with minimal default privileges."
- Scope mistakes, verbatim: "Publishing all possible scopes in scopes_supported," "Using wildcard or omnibus scopes (*, all, full-access)," "Bundling unrelated privileges to preempt future prompts."

**Coding-agent anchor.** Installed MCP servers; the permission prompt before a write or shell command. Claude Code allowlist syntax such as `Bash(npm run *)`. Reads pass silently, edits get a checkpoint, a destructive command gets a stop: read-only vs reversible vs consequential, rendered as UI.

**When it's your agent.** The vendor wrote descriptions, chose granularity, shaped payloads, built the approval UI. You write descriptions as prompt engineering and eval them; you decide verbosity because it is your token bill; you classify every action and build the gate. Customer-facing: no developer to click approve, so the gate is an async human step or an automated policy.

**Incidents.** CamoLeak, GitHub Copilot Chat, 2025: invisible Markdown comments carried the injection, pre-generated Camo URLs bypassed the content security policy, private repository contents exfiltrated through image requests. UNVERIFIED as to date and severity. Malicious skills at scale, 2026: 341 of 2,857 skills in the OpenClaw marketplace (about 12%) reported malicious. UNVERIFIED, https://getsliq.com/blog/openclaw-security-incidents-timeline .

**Pitfall.** Exposing the API surface as tools, one endpoint per tool. Counter: consolidation and namespacing. Consequence: BFCL degradation with tool count and wrong-tool selection under similar names.

## 4. Harness and orchestration

**Anthropic, "Building effective agents," Erik Schluntz and Barry Zhang, December 19, 2024** [primary]. https://www.anthropic.com/engineering/building-effective-agents

- Workflows: "systems where LLMs and tools are orchestrated through predefined code paths." Agents: "systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks."
- "we recommend finding the simplest solution possible, and only increasing complexity when needed."
- "Agentic systems often trade latency and cost for better task performance, and you should consider when this tradeoff makes sense."
- "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control."
- Five workflow patterns: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.
- Frameworks "often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug."

**Anthropic, "How we built our multi-agent research system," June 13, 2025** [primary]. https://www.anthropic.com/engineering/multi-agent-research-system

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

**Dex Horthy, HumanLayer, "12-Factor Agents"** [primary]. https://github.com/humanlayer/12-factor-agents

- "What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production customers?"
- The twelve: natural language to tool calls; own your prompts; own your context window; tools are just structured outputs; unify execution state and business state; launch/pause/resume with simple APIs; contact humans with tool calls; own your control flow; compact errors into context window; small focused agents; trigger from anywhere; make your agent a stateless reducer. Appendix factor 13: pre-fetch context.

**OpenAI, "Harness engineering: leveraging Codex in an agent-first world," February 2026.** https://openai.com/index/harness-engineering/ UNVERIFIED (site blocks fetching). Secondary coverage: about one million lines of production code in five months with none typed by hand; "The agent doesn't need more instructions. It needs a world where the right thing to do is obvious and the wrong thing is hard." Companion: https://openai.com/index/shipping-sora-for-android-with-codex/ . Confirm in a browser before quoting.

**Gartner, June 25, 2025.** Over 40% of agentic AI projects canceled by end of 2027 on escalating costs, unclear business value, inadequate risk controls. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 Wording UNVERIFIED (403); attribute and date.

**Coding-agent anchor.** Plan mode, the todo list, subagents, hooks, `/compact`, checkpoints, resume. Loop: gather context, take action, verify, repeat. A PostToolUse hook runs the formatter or tests regardless of what the model believes it did.

**When it's your agent.** You own the loop, stopping conditions, state and resume, retries, escalation, planner-to-worker routing, the compaction trigger, and the budgets for tokens, actions, and latency. Customer-facing: a human is waiting; latency is a product requirement; an unbounded loop is an outage.

**Pitfall.** Multi-agent orchestration before a workflow was tried.

## 5. Verification and evaluation

**The distinction.** Verification: is this one output or action correct, inside the loop. Evaluation: is behavior correct across a population of runs, outside the loop.

**Anthropic, "Demystifying evals for AI agents," Mikaela Grace, Jeremy Hadfield, Rodrigo Olivares, Jiri De Jonghe, January 9, 2026** [primary]. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents

- "The capabilities that make agents useful also make them difficult to evaluate." "Agents use tools across many turns, modifying state in the environment and adapting as they go, which means mistakes can propagate and compound."
- Vocabulary: task, trial, agent harness, eval harness, transcript, outcome, grader, suite.
- "A flight-booking agent might say 'Your flight has been booked' at the end of the transcript, but the outcome is whether a reservation exists in the environment's SQL database."
- Against process grading: "too rigid and results in overly brittle tests, as agents regularly find valid approaches that eval designers didn't anticipate."
- Graders. Code-based: "Fast, cheap, objective, reproducible, easy to debug," brittle to valid variation. Model-based: "Flexible, scalable, captures nuance, handles open-ended tasks," but "non-deterministic, requires human calibration." Human: gold standard, expensive, slow.
- pass@k: "Likelihood that an agent gets at least one correct solution in k attempts." pass^k: "Probability that all k trials succeed." "At k=1, they're identical (both equal the per-trial success rate). By k=10, they tell opposite stories."
- "20-50 simple tasks drawn from real failures is a great start."
- "A good task is one where two domain experts would independently reach the same pass/fail verdict."
- "You won't know if your graders are working well unless you read the transcripts and grades from many trials."
- "With frontier models, a 0% pass rate across many trials is most often a signal of a broken task, not an incapable agent."
- "One-sided evals create one-sided optimization."

**Hamel Husain, "Your AI Product Needs Evals," March 29, 2024** [primary]. https://hamel.dev/blog/posts/evals/ Quotes in research/section-1.md §3. Also "AI Evals: Everything You Need to Know," updated September 1, 2026, https://hamel.dev/blog/posts/evals-faq/ : "Error analysis is the most important activity in evals." "We've spent 60-80% of our development time on error analysis and evaluation." "If you're passing 100% of your evals, you're likely not challenging your system enough." LLM-as-judge guide: https://hamel.dev/blog/posts/llm-judge/ (the "a judge is a hack to make you look at your data" line is UNVERIFIED as to wording).

**Shankar et al., "Who Validates the Validators?" UIST 2024.** https://arxiv.org/abs/2404.12272 Criteria drift; quotes in research/section-1.md §3.

**Eugene Yan, "Evaluating the Effectiveness of LLM-Evaluators."** https://eugeneyan.com/writing/llm-evaluators/ Survey of about two dozen papers on judge use, alignment, finetuned evaluators, critiques. Specific quotes UNVERIFIED.

**OpenAI evaluation guidance.** https://developers.openai.com/api/docs/guides/evaluation-best-practices , https://developers.openai.com/api/docs/guides/agent-evals , https://developers.openai.com/api/docs/guides/graders . Trace grading as the fastest route to workflow-level issues. The standalone OpenAI Evals platform is reported to go read-only October 31, 2026 and shut down November 30, 2026 (UNVERIFIED); do not present it as durable.

**Martin Fowler, August 28, 2025** [primary]: "I find LLMs are quite happy to say 'all tests green', yet when I run them, there are failures."

**Coding-agent anchor.** The test suite is the coding agent's verifier: write, run, read the failure, retry. It works because the repo already contains ground truth. Failure mode: the agent declares success without running anything; the fix is a hook or startup routine that runs the check.

**When it's your agent.** No test suite for "was this refund correct." Build the verifier (schema check, business-rule assertion, database state check, rubric-driven second model, human), then the eval suite, then online evals on sampled production traffic. Payoff: eval-gated model adoption, a one-day yes or no when a new model ships.

**Pitfalls.** Skipping error analysis for a generic judge or a public benchmark. Grading the transcript instead of the outcome.

## 6. Operating it: observability, guardrails, security, identity, governance

**Observability.** OpenTelemetry GenAI semantic conventions: spans, attributes, metrics, events for model calls, tool executions, agent runs, retrieval, memory. Marked "Development," not "Stable," as of 2026; UNVERIFIED, check https://opentelemetry.io/docs/specs/semconv/gen-ai/ . Blog: https://opentelemetry.io/blog/2026/genai-observability/ . Platforms to name generically: Langfuse, LangSmith, Braintrust, Arize Phoenix. Metrics a builder tracks: latency p50/p95/p99, time to first token, tokens per request, cost per request and per completed task, cache hit rate, tool call and failure counts, loop iterations per task, error and rate-limit counts. Agentic moves: cost per completed task; watch p95 and p99 tokens because tails concentrate cost. Coding-agent anchor: Claude Code native OpenTelemetry via CLAUDE_CODE_ENABLE_TELEMETRY=1, https://code.claude.com/docs/en/monitoring-usage , plus `/cost`.

**Datadog, "State of AI Engineering," July 2026.** https://www.datadoghq.com/state-of-ai-engineering/ "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe." "Model, prompt, or retrieval changes can move latency, spend, and failure rates without an obvious code change."

**Simon Willison, "The lethal trifecta for AI agents," June 16, 2025** [primary]. https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/

- The three: "Access to your private data," "Exposure to untrusted content," "The ability to externally communicate." Any two is safe.
- "LLMs are unable to reliably distinguish the importance of instructions based on where they came from."
- "we still don't know how to 100% reliably prevent this from happening." Vendor guardrails advertising 95% catch rates are not an adequate security control.

**OWASP Top 10 for LLM Applications 2025.** https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf LLM01 prompt injection; LLM06 excessive agency (too much functionality, permissions, or autonomy); new in 2025: LLM07 system prompt leakage, LLM08 vector and embedding weaknesses, LLM10 unbounded consumption.

**OWASP Top 10 for Agentic Applications 2026, released December 9, 2025.** https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ ASI01 Agent Goal Hijack, ASI02 Tool Misuse and Exploitation, ASI03 Identity and Privilege Abuse, ASI04 Agentic Supply Chain Compromise, ASI05 Unexpected Code Execution, ASI06 Memory and Context Poisoning, ASI07 Insecure Inter-Agent Communication, ASI08 Cascading Agent Failures, ASI09 Human-Agent Trust Exploitation, ASI10 Rogue Agents. Category wording UNVERIFIED; confirm against the PDF.

**Guardrail patterns (practitioner consensus, secondary).** Defense in depth at every boundary: input classification, provenance tagging on retrieved content, sandboxed tool execution, output validation, post-hoc trace review. For agents that change production state: circuit breakers on token and action counts, approval gates on consequential actions, least-privilege tool scopes.

**Identity and access.** MCP rules above. 2026 direction (UNVERIFIED, vendor and analyst blogs): agent gets its own standing identity separate from the user, with short-lived per-invocation delegation tokens; SPIFFE/WIMSE for workload identity; OAuth 2.1 via the MCP authorization spec; IETF Identity Assertion Authorization Grant for enterprise brokering. Present as direction, not standard.

**Governance.** EU AI Act Article 50 transparency obligations apply from August 2, 2026; providers of AI systems that interact with people must tell them they are interacting with an AI. Machine-readable marking of synthetic output extended to December 2, 2026 for systems already on market via the May 2026 AI Omnibus; high-risk obligations moved to December 2, 2027 and August 2, 2028. UNVERIFIED, from https://artificialintelligenceact.eu/transparency-rules-article-50/ and law-firm commentary. Verify; this timeline has moved once.

**Incidents.**

- EchoLeak, CVE-2025-32711, CVSS 9.3, disclosed June 2025 by Aim Security. Zero-click indirect prompt injection in Microsoft 365 Copilot. One crafted email, ingested during summarization, caused Copilot to pull data from OneDrive, SharePoint, and Teams and exfiltrate it through a trusted Microsoft domain, bypassing the injection classifier and link redaction. Microsoft: no customer action required, no evidence of exploitation. Analysis: https://arxiv.org/pdf/2509.10540
- Replit agent deletes a production database, July 2025. During a public twelve-day experiment by Jason Lemkin of SaaStr, under an explicit code freeze, the agent ran destructive commands and erased data covering about 1,206 executives and 1,196 companies. Replit's CEO apologized July 19, 2025 and shipped dev/prod database separation, a planning-only mode, mandatory documentation checks, and one-click restore. https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure and https://incidentdatabase.ai/cite/1152/
- Moffatt v. Air Canada, BC Civil Resolution Tribunal, February 2024. The airline argued its chatbot was a separate legal entity responsible for its own actions. Rejected; negligent misrepresentation; C$812.02 awarded. https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot
- GTG-1002, disclosed by Anthropic November 14, 2025. AI-orchestrated espionage using Claude Code and MCP tools against about thirty targets; the model executed 80 to 90 percent of the operation. https://www-cdn.anthropic.com/d7dd50dd1185f59be051b307150d877f2b82bd2c.pdf and https://attack.mitre.org/campaigns/C0062/ Stakes only, not fear.

**When it's your agent.** All of this was rendered for you as a permission prompt, a sandbox, an OAuth flow, `/cost`, and a vendor trust and safety team. In your deployment there is no prompt to click. The gate becomes an async workflow or policy; the sandbox becomes your infrastructure; the audit trail becomes a compliance artifact; Article 50 requires disclosure.

**Pitfall.** Assembling the lethal trifecta by accident, one useful integration at a time: a retriever, then web fetch, then an email sender.

## 7. June to September 2026: what the audience lived through

- **MCP revision 2026-07-28**, the largest since launch. Stateless at the protocol layer; Multi Round-Trip Requests replace server-initiated sampling and elicitation; formal deprecation policy with a twelve-month minimum window; HTTP+SSE transport deprecated; new rule "MCP servers MUST NOT treat possession of a state handle as authentication." https://blog.modelcontextprotocol.io/posts/2026-07-28/ Release-note specifics UNVERIFIED beyond spec pages.
- **"Harness engineering" became the standard phrase.** OpenAI February 2026; Osmani April 2026; OpenAI August 2026 definition. Loop engineering and graph engineering are blog-level coinages.
- **Routing evidence got concrete.** LangChain August 11, 2026 (area 1).
- **A deprecation wave landed inside the window.** OpenAI twenty-plus shutdowns October to December; Anthropic retired Opus 4.1 August 5; Copilot retired five models September 1 (UNVERIFIED).
- **OpenClaw.** Open-source autonomous agent past 135,000 GitHub stars; CVE-2026-25253, one-click remote code execution via an unvalidated WebSocket origin; web UI on port 8080 with auth disabled by default; about 12% of its skill marketplace malicious; a related agent social network exposed 1.5 million API tokens. ALL UNVERIFIED; start at https://en.wikipedia.org/wiki/OpenClaw . If confirmed, the strongest recent "the harness is the attack surface" example.
- **Anthropic's evals post, January 9, 2026**, is the newest canonical text in area 5; pass@k vs pass^k is new vocabulary for most engineers.
- **Enterprise standardization.** Salesforce on Claude Code June 4, 2026; Zalando, "Agentic Engineering at Zalando: a snapshot," August 2026, https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html . UNVERIFIED.
- **Models in the room.** Claude Sonnet 5 (June 30), Opus 5 (July 24, updated August 12), Fable 5.1 and Mythos 5.1 (September 1, reportedly with breaking API changes), GLM-5.2 open-weight (June 15). Dates UNVERIFIED. Useful only for "a capable model shipped two weeks ago; how would you decide whether to switch?"

## Verify before stage

- OpenAI "Harness engineering" post: every quote and number is secondhand. Open both URLs in a browser.
- OpenAI "A practical guide to building agents": confirm quotes against the PDF.
- OWASP Agentic Top 10 category names: confirm against the PDF.
- EU AI Act Article 50 date and scope: confirm; the timeline has been amended once.
- Gartner 40% wording: confirm on the press release.
- Copilot September 1, 2026 model retirements: confirm.
- CamoLeak date and severity; OpenClaw figures; malicious-skill percentage: confirm or drop.
- Benchmark-criticism percentages: the general claim is safe; the numbers are not.
- OpenTelemetry GenAI conventions stability status: check the spec page.
- Chen, Zaharia, Zou exact quote wording: confirm against the paper; the 84/51 figures are safe.
- AGENTS.md adoption and Linux Foundation donation: confirm or say "cross-tool standard" without numbers.
