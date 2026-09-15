# Slide 10: Context and knowledge, When you are the user

Beat 2.2 Context and knowledge, first half. Section 2. Time 2:30 of the beat's 3:30; slide 11 takes 1:00. Builds: 4.

## On the slide

**Kicker:** Context and knowledge · When you are the user

**Build 1.** Preserve the AGENTS.md and compaction-notice screenshot placeholders.

**Build 2.** Images shrink to a strip.

How context fails:
Poisoning · Distraction · Confusion · Clash

18 models tested. Performance degrades as input grows, on simple tasks.

**Build 3.** Replace the failure vocabulary with the engineered bridge.

What someone engineered:

A system prompt · A compaction policy · A memory convention

RAG retrieves relevant external information and supplies it to the model.

Choose retrieval for the data and task:
Grep · File reads · Embeddings · Hybrid retrieval

**Build 4.** Replace the prompt and retrieval content with cache policy and its qualified example.

Preserve useful stable prefixes. Measure cache savings.
Update context and tool access for correctness and authorization.

Manus, July 2025: reported 100:1 input/output; $0.30 cached vs $3 uncached per million input tokens in its pricing example.

## Layout and visual

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Preserve the screenshot pair and Morph strip. Build 3 replaces the failure vocabulary with prompt and retrieval content. Build 4 replaces that content with cache policy and its qualified example.
- Use body text for the retrieval definition and methods. Keep attribution beside the cache prices. Values live in the design brief.

## Talk track

[0:00] The instructions file and the compaction notice are two familiar surfaces. Both tools read AGENTS.md and support `/compact`. Context engineering determines what survives and what the model sees next.

[0:26] Build 2. Anthropic calls context **a finite resource with diminishing marginal returns**. Chroma tested eighteen models and found performance degradation as input grew, even on simple tasks. Breunig names poisoning, distraction, confusion, and clash. An error can persist in context; irrelevant or conflicting information can steer the answer.

[1:06] Build 3. The provider engineered instructions, compaction, memory, and retrieval. **RAG means retrieving relevant external information and supplying it to the model.** Grep, file reads, embeddings, and hybrid retrieval are methods to choose for the data and task. Cognition's SWE-grep is a code-search example. File retrieval can be part of RAG.

[1:44] Build 4. Caching is another context decision. Manus reported about a hundred input tokens per output token, with a tenfold cached-input price gap in its July 2025 example. These are that team's experience and prices. **Preserve stable prompt prefixes when useful. Measure the savings, and update context or tool access when correctness or authorization requires it.** A stale policy is not acceptable just because it improves cache hits.

[2:30] Advance to slide 11.

Cut first: detailed failure definitions and the spoken 100:1 ratio. Never cut the RAG definition, task-dependent method choice, or correctness and authorization qualification.

## Sources

- Anthropic, September 2025; Chroma, July 2025; Breunig, June 2025; Cognition, October 2025. Research §2 in `research/section-2.md`. Source records include evidence limitations.
- Manus, July 2025. Research §2. [primary], reported team experience and a particular pricing example.
- Codex CLI and Devin CLI docs. Research §1 and §2.

## Open items

- Deferred by the presenter: retain both screenshot placeholders.
