# Slide 15: Orchestration, When you are the owner

Beat 2.4 Orchestration, second half. Section 2. Time 1:30 of the beat's 3:30; slide 14 took 2:00. Builds: 4.

## On the slide

**Kicker, top left, small:** Orchestration · When you are the owner

**Title:** Start with the workflow. Own the loop.

**Build 1. Workflows and agents.** Two short definitions side by side, then five chips.

| Workflows | Agents |
|---|---|
| LLMs and tools on predefined code paths. | LLMs that direct their own process. |

Chaining · Routing · Parallelization · Orchestrator and workers · Evaluator and optimizer

**Build 2. You now own.** Eight items in two rows, then four lines set as a small quote block.

The loop · Stopping conditions · State and resume · Retries
Escalation as a tool call · Planner-to-worker routing · The compaction trigger · Budgets: tokens, actions, latency

Own your prompts. Own your context window. Own your control flow. Contact humans with tool calls.

**Build 3. Customer-facing.** Replace the ownership list and quotation with three short sentences.

A human is waiting. Latency is a product requirement. An unbounded loop is an outage.

**Build 4. Pitfall band, bottom.**

Pitfall: multi-agent before a workflow was tried.

Beneath, small: Gartner forecast, June 2025: over 40% canceled by end of 2027. Cited risks: cost, unclear value, inadequate controls.

## Layout and visual

- Display narrative number 15 throughout, using the shared component in the design brief.
- Playback: Three physical slides. Definitions remain an internal reveal. Ownership, then customer-facing sentences, begin new slides with hard cuts. The pitfall and forecast remain one internal reveal.

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Build 1 is the definitions pair from slide 4, now with the five pattern names under it. The pair should look like the columns on slide 4 so the audience recognizes the distinction.
- Build 2 is the longest "you now own" list in Section 2, so it runs as chips in two rows rather than bullets. The four 12-factor lines sit beneath as a quote block, attributed small: 12-Factor Agents, Dex Horthy.
- Build 3 replaces the preceding body state with three sentences, with the third carrying the weight.
- The pitfall band matches slides 9, 11, and 13. Its wording, "multi-agent before a workflow was tried," matches line 4 of slide 23 exactly. The Gartner line sits under it, small, quoted, dated.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1.

Workflows are LLMs and tools on predefined code paths. Agents direct their own. **Start with the workflow.** Five patterns cover most of it: chaining, routing, parallelization, orchestrator and workers, evaluator and optimizer.

[0:14] Build 2.

**You own the loop.** Stopping conditions, starting with a maximum number of iterations. State and resume. Retries. Escalation to a human as a tool call. Routing between a planner and cheap workers. The compaction trigger. And the budgets: tokens, actions, latency. Twelve-factor agents says it in four lines: own your prompts, own your context window, own your control flow, contact humans with tool calls.

[0:42] Build 3.

Customer-facing: a human is waiting. Latency is a product requirement. **An unbounded loop is an outage.**

[0:50] Build 4.

The pitfall: **multi-agent orchestration before a workflow was tried.** Separately, Gartner's June 2025 forecast predicted over 40% of agentic projects canceled by end of 2027, citing cost, unclear value, and inadequate controls. **That forecast does not establish that multi-agent architecture causes cancellations.**

[1:10] **The loop is where autonomy gets its limits. Start with the workflow.**

[1:30] Advance to slide 16.

The track runs about 1:15. The slack belongs to build 2, which is a list and should not be rushed. Cuttable if the section runs long: the five pattern names, since they are on the slide; the Gartner forecast, if needed. Keep its forecast label whenever used. Do not cut "start with the workflow," "you own the loop," "an unbounded loop is an outage," the pitfall, or the takeaway.

## Sources

- Anthropic, "Building effective agents," December 2024. Workflow and agent definitions quoted; "we recommend finding the simplest solution possible"; stopping conditions "such as a maximum number of iterations"; the five patterns: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer. Research §4 in `research/section-2.md`. `[primary]`.
- Dex Horthy, HumanLayer, "12-Factor Agents." Factors 2, 3, 8, and 7 in the order spoken: own your prompts, own your context window, own your control flow, contact humans with tool calls. Research §4. `[primary]`.
- Gartner, press release, June 25, 2025. "Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls." Research §4. `[primary]`, read in a browser September 14, 2026. The `[verify wording]` flag is cleared in the outline.
- Planner-to-worker routing points back to the LangChain figures on slide 9. Research §1.

## Open items

- None. The flag on this slide is cleared.
