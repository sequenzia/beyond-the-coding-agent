# Slide 14: Orchestration, When you are the user

Beat 2.4 Orchestration, first half. Section 2. Time 2:00 of the beat's 3:30; slide 15 takes 1:30. Builds: 5.

This area is the "Orchestration" box inside the harness on the map: the loop, hooks, workflows. The other five harness boxes have their own areas.

## On the slide

**Kicker, top left, small:** Orchestration · When you are the user

**Build 1.** Six chips in a row, then the loop beneath them.

`/plan` · subagents · hooks · `/compact` · `/resume` · `/fork`

The loop, drawn as a ring of three: gather context, take action, verify. An arrow closes the ring.

**Build 2.** Chips and loop shrink to a strip along the top. Heading and five short lines.

The loop's decisions:

- When to stop.
- What carries between turns.
- When to compact.
- When to spawn a subagent, and what to hand it.
- Where a hook fires.

**Build 3.** A quote, large, then one line.

"A decent model with a great harness beats a great model with a bad harness."

Same model, better loop: 13% to 38% on ARC-AGI-3, with six times fewer output tokens.

**Build 4.** Two labeled lines, then a fix line.

- Over-ambition: try to one-shot the whole app.
- Premature completion: see progress, declare the job done.

The fix: an initializer, a feature list, a progress file, one feature per session, and protected acceptance criteria. Faulty or obsolete tests may change through review.

**Build 5.** One line with the numbers.

Anthropic, June 13, 2025. Internal research eval: 90.2% improvement over its single-agent research system. Separate token comparison: multi-agent systems used about 15x chat tokens. Poor fit when agents need shared context.

## Layout and visual

- Build 1 is the "When you are the user" moment for the area. The six chips are the features; the ring beneath them is the claim that they are all one thing. Draw the ring simply, three nodes and three arrows, no icons. It is the picture the audience should hold for the rest of the talk, and it returns on slide 23 as "learn the loop."
- Build 2 is five short lines. They are the same shape as the "you now own" list on slide 15, which is the point: what someone engineered here is what you will engineer there.
- Build 3 is the only large quote in Section 2. Set it big, attribute it small: Addy Osmani, April 2026. The OpenAI figure sits beneath as evidence.
- Build 4 is two labeled failure modes. The labels are the vocabulary; keep them bold. The fix line is smaller, one sentence.
- Build 5 separates the internal research comparison from the chat token comparison. Give each its baseline, with the source and date adjacent. Never combine them into one implied experiment.

## Talk track

[0:00] Build 1.

Plan mode. Subagents. Hooks. Compaction. Resume and fork. Both tools have every one of them. **Underneath all of it is one loop: gather context, take action, verify, repeat.** Hooks are the deterministic escape hatch: a PostToolUse hook runs the formatter or the tests whether or not the model believes it did. Codex ships hooks turned off. You turn them on.

[0:26] Build 2.

What someone engineered is the loop's decisions. When to stop. What carries between turns. When to compact. When to spawn a subagent, and what to hand it. Where a hook fires. The other harness boxes on the map get their own areas in this talk. This is the one that runs them.

[0:46] Build 3.

Addy Osmani's line applies most sharply here: **"A decent model with a great harness beats a great model with a bad harness."** Evidence from OpenAI in August 2026, and it is loop-level evidence: retained reasoning across turns plus a compaction trigger took one model's score on a reasoning benchmark from 13% to 38%, with six times fewer output tokens. Same model.

[1:10] Build 4.

Anthropic found two failure modes in long-running agents. **Over-ambition: try to one-shot the whole app. Premature completion: a later instance sees progress and declares the job done.** The fix was engineering, not prompting. An initializer writes a feature list and a progress file. Each session does one feature with a fixed startup routine. **Protect the acceptance criteria.** Do not weaken tests merely to get a pass. Faulty or obsolete tests may change through review.

[1:38] Build 5.

Multi-agent, honestly. **Anthropic reported a 90.2% improvement against its single-agent research system on an internal eval. Separately, it reported about 15 times chat token use for multi-agent systems.** And it is a poor fit for work where agents need shared context or have dependencies. Anthropic names coding as the example.

[2:00] Advance to slide 15.

The track runs about 1:58, so it is full. Cuttable if the section runs long, in this order: "Codex ships hooks turned off. You turn them on."; "The other harness boxes on the map get their own areas in this talk," since slide 7 made the point. Do not cut the loop sentence, the five decisions, the Osmani quote, the two failure modes, or the multi-agent numbers.

## Sources

- Codex CLI and Devin CLI docs for `/plan`, subagents, hooks, `/compact`, `/resume`, `/fork`; Codex `features.hooks` defaults to off. Research §4 in `research/section-2.md`. `[primary]`, checked in a browser September 14, 2026.
- Anthropic, "Building agents with the Claude Agent SDK," September 2025, for the loop: gather context, take action, verify work, repeat. Research §0. `[primary]`.
- Anthropic, "Building effective agents," December 2024, for stopping conditions "such as a maximum number of iterations." Research §4. `[primary]`.
- Osmani, "Agent Harness Engineering," April 2026. Quote verbatim. Research §0 and §4. `[primary]`.
- OpenAI, "Codex as a platform," August 2026. "On ARC-AGI-3, retained reasoning and context compaction raised GPT-5.6 Sol's score from 13.3% to 38.3% while reducing output tokens sixfold." Rounded on the slide; the exact figures are here for questions. Research §0. `[primary]`.
- Anthropic, "Effective harnesses for long-running agents," November 2025. Over-ambition and premature completion paraphrased from their wording; "It is unacceptable to remove or edit tests" is verbatim. Research §4. `[primary]`.
- Anthropic, "How we built our multi-agent research system," June 2025. "Outperformed single-agent Claude Opus 4 by 90.2%"; "about 15x more tokens than chats"; poor fit for "domains that require all agents to share the same context or involve many dependencies between agents." Research §4. `[primary]`.

## Open items

- None. No `[verify]` flags on this slide.
