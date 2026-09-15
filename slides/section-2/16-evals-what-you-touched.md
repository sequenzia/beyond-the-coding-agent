# Slide 16: Verification and evals, what you touched

Beat 2.5 Verification and evals, first half. Section 2. Time 3:45 of the beat's 5:00, including story #2 at 1:00; slide 17 takes 1:15. Builds: 5.

## On the slide

**Kicker, top left, small:** Verification and evals · What you touched

**Build 1.** The test loop, then a quote.

The loop, four steps in a row with arrows: write, run, read the failure, retry.

Beneath, quoted, attributed small to Martin Fowler, August 2025:
"LLMs are quite happy to say 'all tests green', yet when I run them, there are failures."

**Build 2.** Loop and quote shrink to a strip. Two definitions side by side.

| Verification | Evaluation |
|---|---|
| Is this one output or action correct? | Is the behavior correct across a population of runs? |
| Inside the loop. | Outside the loop. |
| Lint. Screenshot. A judge for fuzzy rules. | Task. Trial. Grader. Suite. |

Beneath the right column: Graders: code (fast, brittle) · model (flexible, needs calibration) · human (gold standard, slow)

**Build 3.** One line, large, then an example.

Grade the outcome, not the transcript.

"Your flight has been booked" is a sentence. A reservation row is an outcome.

**Build 4.** Two lines.

- pass@k: at least one of k trials succeeds.
- pass^k: all k trials succeed.

Beneath: Identical at k = 1. Opposite stories at k = 10.

**Build 5.** Three short lines.

- Start with 20 to 50 tasks drawn from real failures.
- Error analysis is 60 to 80% of the time.
- A 0% pass rate with a frontier model is usually a broken task.

## Layout and visual

- Build 1 is the "what you touched" moment: the loop everyone in the room has watched run. Four boxes and three arrows. The Fowler quote beneath is the failure everyone has also seen; give it room.
- Build 2 is the conceptual center of the whole talk. Two columns, three rows, matched. The words "inside the loop" and "outside the loop" are the distinction that slide 17 and the third commitment depend on, so they should be visibly parallel.
- Build 3 is one large sentence. It is the most quotable line in the area.
- Build 4 is two formulas set in a monospace face with the caret visible. The audience is engineers; the notation will land.
- Build 5 is the practical close: three numbers on three lines.
- Story #2 has no build. Either hold on build 5 or cut to a blank slide for the sixty seconds. A blank slide signals that this part is not on the deck.

## Talk track

[0:00] Build 1.

The coding agent works because your repo already has a verifier: the test suite. Write, run, read the failure, retry. It works only because ground truth was already there. And you have seen the failure. Martin Fowler: **"LLMs are quite happy to say 'all tests green', yet when I run them, there are failures."** Anthropic saw the same thing in long-running agents: an instance declares the job done. **The fix is a hook that runs the check, not a model that reports it.** Codex adds a `/review` command and an auto reviewer that can deny a command outright. Same idea, shipped as a product.

[0:38] Build 2.

What someone engineered: two different things, and the words matter. **Verification asks: is this one output or action correct?** It runs inside the loop. Rules-based checks like linting. Visual checks like screenshots. An LLM judge for fuzzy rules, which is less robust and costs latency. **Evaluation asks: is the behavior correct across a population of runs?** It runs outside the loop. The vocabulary: task, trial, grader, suite. Three kinds of grader. Code-based: fast, cheap, objective, brittle. Model-based: flexible, non-deterministic, needs human calibration. Human: the gold standard, and slow.

[1:16] Build 3.

**Grade the outcome, not the transcript.** "Your flight has been booked" at the end of a transcript is not the same as a reservation row in the database. And do not grade the process either, because agents find valid paths you did not anticipate.

[1:34] Build 4.

Non-determinism has its own arithmetic. pass at k is at least one success in k tries. pass to the k is all k succeed. Identical at k equals one. Opposite stories at k equals ten. **For a customer-facing agent you care about pass to the k.**

[1:52] Build 5.

Where to start: **twenty to fifty tasks drawn from real failures. Error analysis is the core activity.** Hamel Husain's teams spend sixty to eighty percent of development time on it. "You can never stop looking at data." And a diagnostic worth memorizing: a zero percent pass rate with a frontier model usually means a broken task, not a broken agent. Criteria drift from the start of the talk returns here. Grading outputs is how you discover the criteria, so the suite grows from looking, not from the spec.

[2:28] Story #2.

**[your story #2]** A failure your tests passed and evals or production caught. It must show three things: the suite was green, the behavior was wrong, and a population-level check or a real user found it. Sixty seconds.

[3:28] Hold, then advance to slide 17 at [3:45].

The track runs about 2:28 before the story and 3:28 after it, against 3:45. Cuttable if the section runs long, in this order: the Codex `/review` sentence; the grader descriptions in build 2, since they are on the slide; "And do not grade the process either." Do not cut the Fowler quote, the two definitions, "grade the outcome," pass to the k, the twenty-to-fifty line, or the criteria drift callback.

## Sources

- Fowler, "Some thoughts on LLMs and Software Development," August 2025. Quoted verbatim without the leading "I find." Research §5 in `research/section-2.md`. `[primary]`.
- Anthropic, "Effective harnesses for long-running agents," November 2025, for premature completion. Research §4. `[primary]`.
- Codex CLI slash commands: `/review` "Ask for a working tree review"; `/approve` "Approve one retry of a recent auto review denial." Research §5. `[primary]`, checked in a browser September 14, 2026.
- Anthropic, "Building agents with the Claude Agent SDK," September 2025. Rules-based feedback, visual feedback, LLM as judge for "fuzzy rules" with "heavy latency tradeoffs." Research §0. `[primary]`.
- Anthropic, "Demystifying evals for AI agents," January 2026. Vocabulary; graders; the flight-booking sentence; "agents regularly find valid approaches that eval designers didn't anticipate"; pass@k and pass^k with "At k=1, they're identical" and "By k=10, they tell opposite stories"; "20-50 simple tasks drawn from real failures is a great start"; "a 0% pass rate across many trials is most often a signal of a broken task, not an incapable agent." Research §5. `[primary]`.
- Husain, "AI Evals: Everything You Need to Know," updated September 2026: "Error analysis is the most important activity in evals"; "We've spent 60-80% of our development time on error analysis and evaluation." "Your AI Product Needs Evals," March 2024: "You can never stop looking at data." Research §5. `[primary]`.
- Shankar et al., UIST 2024, for criteria drift. Research §3 in `research/section-1.md`. `[primary]`.

## Open items

- Story #2. Decide whether it stays here or is told with story #1 merged into it. If both stories exist, this slot takes one of them, not both.
- Decide whether the story is told over build 5 or over a blank slide.
