# Perspective quote review

Approved September 16, 2026. Quotes change only on slides 11 and 31. The other four quotes are retained. All six opening scripts below are approved and integrated into the current slide specs, outline, and deck source. Existing time allocations and illustrations remain unchanged. This file records the decision and recommended scripts; future script edits belong in the numbered slide specs.

All linked sources were fetched and checked directly in a browser during this review. Full evidence records remain in `research/section-2.md`.

## Slide 11: Model Selection

Selected replacement. Opens with workload-specific model selection and comparison. Research §1.

**Anthropic, "Optimizing for cost and intelligence," Claude Platform documentation, publication date not stated, checked September 16, 2026** [primary]. https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence#compare-models-on-cost-per-task

- “The ranking flips by workload, and no price list tells you which way.”

### Recommended talk track

[0:00] **QUOTE**

[0:00] Anthropic writes: **“The ranking flips by workload, and no price list tells you which way.”**

[0:07] Model selection starts with the work your system must perform. **Compare eligible models on representative tasks, including quality, cost, and latency.**

[0:18] That comparison includes the model’s settings. First, let’s look at what happens in one model call.

[0:25] Advance to slide 12.

Cut first: the final setup for the model invocation. Never cut the attribution and representative-task comparison. Cue times are rehearsal guides, not automatic playback timing.

Current spec: [11-models-opening-quote.md](../slides/section-2/11-models-opening-quote.md).

## Slide 16: Context Engineering

Keep the existing quote. The revised script makes selection for each call explicit. Research §2.

**Anthropic, "Effective context engineering for AI agents," Anthropic Engineering, September 29, 2025** [primary]. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

- “Context, therefore, must be treated as a finite resource with diminishing marginal returns.”

### Recommended talk track

[0:00] **QUOTE**

[0:00] Anthropic writes: **“Context, therefore, must be treated as a finite resource with diminishing marginal returns.”**

[0:07] Every model call has limited room for information. **Our job is to decide what belongs in that call.** That includes what to bring forward, what to retrieve, and what to leave out.

[0:20] Advance to slide 17.

Cut first: the bring-forward, retrieve, and leave-out elaboration. Never cut the attribution and selection responsibility. Cue times are rehearsal guides, not automatic playback timing.

Current spec: [16-context-and-knowledge-opening-quote.md](../slides/section-2/16-context-and-knowledge-opening-quote.md).

## Slide 21: Tools & Extensibility

Keep the existing quote. Explain ownership of the interface and checked execution. Research §3.

**Anthropic, "Writing effective tools for agents, with agents," Anthropic Engineering, September 11, 2025** [primary]. https://www.anthropic.com/engineering/writing-tools-for-agents

- “Agents are only as effective as the tools we give them.”

### Recommended talk track

[0:00] **QUOTE**

[0:00] Anthropic writes: **“Agents are only as effective as the tools we give them.”**

[0:06] Giving an agent a capability means designing an operation it can request, understand, and use. **We own that interface, and the software that checks and carries out the request.**

[0:20] Advance to slide 22.

Cut first: the request, understand, and use elaboration. Never cut the attribution and interface/execution responsibility. Cue times are rehearsal guides, not automatic playback timing.

Current spec: [21-tools-and-extensibility-opening-quote.md](../slides/section-2/21-tools-and-extensibility-opening-quote.md).

## Slide 26: Orchestration

Keep the existing quote. Connect simplicity to fixed execution and model choice. Research §4.

**Anthropic, "Building effective agents," Anthropic Engineering, December 19, 2024** [primary]. https://www.anthropic.com/engineering/building-effective-agents

- “we recommend finding the simplest solution possible, and only increasing complexity when needed.”

### Recommended talk track

[0:00] **QUOTE**

[0:00] Anthropic writes: **“we recommend finding the simplest solution possible, and only increasing complexity when needed.”**

[0:07] Start with the steps the task requires. **Decide where a fixed sequence is enough and where the model needs to choose what happens next.** Add complexity when the task justifies it.

[0:20] Advance to slide 27.

Cut first: the final complexity reminder. Never cut the attribution and fixed-sequence versus model-choice distinction. Cue times are rehearsal guides, not automatic playback timing.

Current spec: [26-orchestration-opening-quote.md](../slides/section-2/26-orchestration-opening-quote.md).

## Slide 31: Verification & Evals

Selected replacement. Ask for evidence after the preceding four areas. Husain describes a question he asks consulting clients. Attribute this article to him alone. Research §5.

**Hamel Husain, "A Field Guide to Rapidly Improving AI Products," Hamel's Blog, March 24, 2025** [primary]. https://hamel.dev/blog/posts/field-guide/

- “Can you show me how you’re measuring if any of this actually works?”

### Recommended talk track

[0:00] **QUOTE**

[0:00] Hamel Husain asks: **“Can you show me how you’re measuring if any of this actually works?”**

[0:08] We’ve chosen models, assembled context, connected tools, and designed the workflow. **Now we need evidence that the whole system does what we intend.**

[0:20] Advance to slide 32.

Cut first: the recap of models, context, tools, and workflow. Never cut the Husain attribution, measurement question, and evidence statement. Cue times are rehearsal guides, not automatic playback timing.

Current spec: [31-verification-and-evals-opening-quote.md](../slides/section-2/31-verification-and-evals-opening-quote.md).

## Slide 36: AgentOps

Keep the existing quote as Rauch's perspective, with Datadog as publisher. Connect observation to change and accountable response. Research §6.

**Guillermo Rauch, quoted in "State of AI Engineering," Datadog, 2026** [primary]. https://www.datadoghq.com/state-of-ai-engineering/

- “The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe.”

### Recommended talk track

[0:00] **QUOTE**

[0:00] Guillermo Rauch puts it this way in Datadog’s report: **“The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe.”**

[0:12] Once people depend on this system, **we need to see what happened, recognize when behavior changes, and know who responds.** That responsibility continues as models, data, and tools change.

[0:25] Advance to slide 37.

Cut first: the final sentence about models, data, and tools changing. Never cut the Rauch attribution, Datadog publisher distinction, and operating responsibility. Cue times are rehearsal guides, not automatic playback timing.

Current spec: [36-production-operations-opening-quote.md](../slides/section-2/36-production-operations-opening-quote.md).

## Verify before stage

- Rehearse attributions and scripts in the retained time budgets.
- Slide 11 uses a check date, not an invented publication date.
- Slide 31 credits Husain alone. The jointly authored FAQ remains supporting evidence.
- Slide 36 remains an attributed perspective, not a measured prediction.

**Do not use:** the former slides 11 and 31 quotes as the current selections, unverified alternatives, or source-specific benchmark results as universal model rankings.
