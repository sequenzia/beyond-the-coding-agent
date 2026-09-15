# Slide 21: What is new

Beat 3.2 What is new. Section 3. Time 1:15. Builds: 3.

## On the slide

**Kicker, top left, small:** The transition · What is new

**Title:** What is new

**Build 1. The ladder.** Three steps, ascending left to right, each with a year beneath.

Prompt engineering (2023) · Context engineering (2025) · Harness engineering (2026)

Beneath, one line: Each one absorbs the last.

**Build 2. What you add, in priority order.** A numbered list of seven.

1. Model behavior intuition. Only from reading outputs.
2. Context engineering.
3. Tool design, for a caller that reads the description every time.
4. Harness and loop design.
5. Evals and error analysis. Sixty to eighty percent of the time.
6. AI security. The attack surface is the model's reasoning.
7. Cost and latency as design constraints.

**Build 3.** A quote, attributed.

"Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."
Ross McNairn, Wordsmith, via The Pragmatic Engineer, March 2025.

## Layout and visual

- Build 1 is a literal ladder or staircase, three treads, rising to the right. The years sit under each tread. It is the only chart-like element in Section 3; keep it plain.
- Build 2 is a numbered list, and the numbers matter because the order is the claim. Line 5 carries the only figure; set it slightly heavier. If the list crowds the ladder, shrink the ladder to a strip.
- Build 3 replaces the list or sits beneath it, depending on room. It is the second and last large quote in the deck after Osmani's on slide 14. Same treatment: quote large, attribution small.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1.

**The ladder the field climbed in three years: prompt engineering, then context engineering, then harness engineering.** Each one absorbs the last. Nobody stopped writing prompts. They stopped thinking prompts were the job.

[0:14] Build 2.

What you add, roughly in priority. Model behavior intuition, which you only get by reading outputs. Context engineering. Tool design for a caller that reads the description every time. Harness and loop design. **Evals and error analysis, which is where the time goes: sixty to eighty percent of it.** AI security, because the attack surface is now the model's reasoning. And cost and latency as first-class design constraints.

[0:42] Build 3.

The one most engineers find hardest, from Ross McNairn at Wordsmith: **"Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."**

[0:54] **The new skill is not prompting. It is being comfortable measuring a system you cannot fully specify.**

[1:15] Advance to slide 22.

The track runs about 1:02. The slack belongs to the quote and the takeaway. Cuttable if Section 3 runs long: the sublines on items 1, 3, and 6, spoken as the bare competency names. Do not cut the ladder sentence, the sixty-to-eighty line, the McNairn quote, or the takeaway.

## Sources

- The ladder: prompt engineering as the 2023 vocabulary; context engineering from Karpathy, June 2025, and Anthropic, September 2025; harness engineering from OpenAI, February 2026, and Osmani, April 2026. Research §2 in `research/section-3.md` and §7 in `research/section-2.md`. `[primary]` for the dated posts. The year labels are the talk's own placement.
- Husain, "AI Evals: Everything You Need to Know," updated September 2026: "We've spent 60-80% of our development time on error analysis and evaluation." Research §2 in `research/section-3.md`. `[primary]`.
- Orosz, "AI Engineering in the real world," March 2025. McNairn quote verbatim. Research §2. `[primary]`.
- The priority order is the talk's own; research §2 notes no source ranks the competencies, and the ladder plus Husain's time allocation is the nearest defensible ordering.

## Open items

- None.
