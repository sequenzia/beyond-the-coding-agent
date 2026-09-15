# Slide 10: Context and knowledge, what you touched

Beat 2.2 Context and knowledge, first half. Section 2. Time 2:30 of the beat's 3:30; slide 11 takes 1:00. Builds: 3.

## On the slide

**Kicker, top left, small:** Context and knowledge · What you touched

**Build 1.** Two images side by side.

- Left: a real AGENTS.md, short, from a repo you own. Ten to fifteen lines, readable.
- Right: a compaction notice from Codex or Devin CLI, the moment the session summarized itself.
- Caption under each, small. Left: AGENTS.md. Right: `/compact`.

**Build 2.** Images shrink to a strip along the top. Heading and four words.

How context fails:

Poisoning · Distraction · Confusion · Clash

Beneath, one line: 18 models tested. Performance degrades as input grows, on simple tasks.

**Build 3.** Heading and five lines.

What someone engineered:

- A system prompt at the right altitude.
- A compaction policy.
- A memory convention.
- A retrieval strategy: grep and reads, not embeddings.
- A cache-aware layout.

Beneath, one line: KV-cache hit rate, "the single most important metric for a production-stage AI agent." Cached input tokens cost a tenth.

## Layout and visual

- Build 1 is the only image moment in this area, so let it be large. The AGENTS.md should be yours, not a sample; the audience will recognize the shape. The compaction notice should be a real screenshot, tightly cropped to the notice line.
- Build 2 puts the four failure words in a single row, large, evenly spaced. They are the vocabulary the audience takes home from this slide.
- Build 3 is a plain list. The fourth line is the one that carries the argument about retrieval, so do not let it get lost; a slight weight difference is enough.
- Two stat lines, one per build, both small. They are there so the numbers exist on screen when you say them, not to be read.

## Talk track

[0:00] Build 1.

Two things you have touched. First, the instructions file. Codex and Devin both read AGENTS.md, the cross-tool standard, and Codex's `/init` writes one for you. Second, the moment your session compacted and dropped something that mattered. Both tools have `/compact`, and Codex compacts on its own past a token limit. **You have already felt context engineering fail.**

[0:26] Build 2.

What is context engineering? Karpathy, last summer: "the delicate art and science of filling the context window with just the right information for the next step." Anthropic's version: context is **"a finite resource with diminishing marginal returns."** Models have an attention budget. Chroma tested eighteen models: **performance degrades as input grows, on simple tasks, well before the window is full.** Breunig named four ways it fails. Poisoning: an error gets in and keeps getting referenced. Distraction: the model over-focuses on the context and forgets what it knows. Confusion: superfluous content shapes the answer. Clash: new information conflicts with old. One measurable: on the Berkeley function-calling leaderboard, every model got worse with more tools.

[1:14] Build 3.

So the vendor engineered five things. A system prompt at the right altitude: "specific enough to guide behavior effectively, yet flexible enough to provide the model with strong heuristics." A compaction policy. A memory convention. A retrieval strategy for your repo that is not embedding search: just-in-time loading, grep and file reads. In Codex that is the shell. Cognition trained a model, SWE-grep, to do that search in parallel, because they found embeddings can be counterproductive. **That is a design choice, and it is the one that shows retrieval-augmented generation is one technique, not the discipline.** And a cache-aware layout. Manus, running a production agent, called the KV-cache hit rate **"the single most important metric for a production-stage AI agent."** Input to output runs about a hundred to one. Cached input tokens are ten times cheaper. So you never mutate the front of the prompt, and you do not add or remove tools mid-run. That is cost and latency engineering, and it is a context decision.

[2:30] Advance to slide 11.

The track runs about 2:20 at a measured pace, leaving ten seconds for the Manus numbers to land. Cuttable if the section runs long, in this order: Karpathy's definition, keeping Anthropic's; the Berkeley leaderboard line; the hundred-to-one ratio. Do not cut the four failure words, the Chroma line, the retrieval sentence, or the Manus quote.

## Sources

- Karpathy, X, June 25, 2025, headline sentence confirmed via Willison. Research §2 in `research/section-2.md`. The full thread is `UNVERIFIED`; quote only the one sentence.
- Anthropic, "Effective context engineering for AI agents," September 2025. "Finite resource" and the altitude sentence quoted verbatim. Research §2. `[primary]`.
- Chroma, "Context Rot," July 2025. Eighteen models. Paraphrased, not quoted. Research §2. `[primary]`.
- Breunig, "How Long Contexts Fail," June 2025. Four failure modes, paraphrased; the Berkeley Function-Calling Leaderboard finding is cited there. Research §2. `[primary]`.
- Cognition, "Introducing SWE-grep and SWE-grep-mini," October 2025. "Can even be counterproductive" quoted verbatim. Research §2. `[primary]`, checked in a browser September 14, 2026.
- Manus, "Context Engineering for AI Agents," July 2025. KV-cache line quoted verbatim; 100:1 and the 10x price gap are their figures. Research §2. `[primary]`.
- Codex CLI and Devin CLI docs for AGENTS.md, `/init`, `/compact`, and the auto-compact token limit. Research §1 and §2. `[primary]`.

## Open items

- Choose the AGENTS.md to show and take the compaction screenshot the week of the talk.
