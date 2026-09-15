# Slide 24: The roadmap

Beat 3.4 The roadmap. Section 3. Time 1:25, including story #3 at 0:30. Builds: 2.

## On the slide

**Kicker, top left, small:** The transition · The roadmap

**Title:** The roadmap

**Build 1.** Four numbered steps, large. Sublines below are spoken.

1. Look before you build.
   Monday: review 20 to 50 outputs by hand.
2. Start constrained.
   One call. Then a workflow. Then a loop, only when it earns it.
3. Own the harness.
   Prompts, context window, control flow. Learn the loop before a framework.
4. Add autonomy as your evals earn it.

**Build 2.** Replace the four roadmap steps with the six-stage adoption arc, attributed.

chat · an agent reproducing manual work · background agents · delegating what you trust · building verification tools · continuous operation

Mitchell Hashimoto, "My AI Adoption Journey," February 2026.

## Layout and visual

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Build 1 is the deliverable of the talk. Four lines, numbered, large enough that a phone photo from the back row is legible. The sublines are small and can be dropped from the slide if they crowd it; they are all in the talk track.
- Build 2 replaces the four rows with the adoption arc as dot-separated text. Keep the attribution visible. It shows a climb someone has actually made.
- Story #3 has no build. Hold on build 2 while it is told.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1.

Four steps. **Look before you build. On Monday, review twenty to fifty outputs of whatever AI feature you are closest to, by hand.** Write down what is wrong with each one. That is your first eval. Do it before any infrastructure.

[0:18] **Start constrained. A single model call with retrieval and examples. Then a workflow on predefined code paths. Add a loop only when it demonstrably improves outcomes.**

[0:29] Own the harness. Your prompts, your context window, your control flow. Learn the loop before you adopt a framework for it, so the framework is a convenience you can evaluate, not a black box you depend on.

[0:41] **Add autonomy as your evals earn it.** Every step up is paid for by a check that catches what it breaks.

[0:49] Build 2.

On the slide, the shape of Mitchell Hashimoto's own year: six steps, each earned by the last.

[0:55] Story #3.

**[your story #3]** What you would tell yourself at the start of the transition. It must show one thing you would do earlier, and what it would have saved. Thirty seconds.

[1:25] **Autonomy is earned by evals, one step at a time.** Advance to slide 25 on the last word.

The track runs about 1:27 with the story. If story #3 is not told, speak the arc in full instead: chat, then an agent reproducing manual work, then background agents, then delegating what you are confident in, then building verification tools, then continuous operation. Each step earned by the last. That version runs about 1:10.

Cuttable if Section 3 runs long, in this order: the second sentence of "own the harness"; "Write down what is wrong with each one. That is your first eval." Backup for questions, not spoken: Anthropic's "find the simplest solution possible" and OpenAI's "start small, validate with real users, and grow."

## Sources

- Husain, "AI Evals: Everything You Need to Know": "Start with error analysis, not infrastructure. Spend 30 minutes manually reviewing 20-50 LLM outputs." Research §4 in `research/section-3.md`. `[primary]`.
- Anthropic, "Building effective agents," December 2024: "we recommend finding the simplest solution possible"; "optimizing single LLM calls with retrieval and in-context examples is usually enough"; "adding complexity only when it demonstrably improves outcomes." Research §5 in `research/section-1.md`. `[primary]`.
- OpenAI, "A practical guide to building agents," 2025: "Start small, validate with real users, and grow capabilities over time." Research §4 in `research/section-3.md`. Quoted from the PDF; page numbers unconfirmed. Backup only.
- 12-Factor Agents for "own your prompts, own your context window, own your control flow." Research §4 in `research/section-2.md`. `[primary]`.
- Hashimoto, "My AI Adoption Journey," February 5, 2026. The six-step arc, paraphrased. Do not credit him with the phrase "harness engineering." Research §4 in `research/section-3.md`. `[primary]`.

## Open items

- Story #3.
- Sublines stay spoken under the design brief's body budget.
