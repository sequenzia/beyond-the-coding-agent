# Slide 42: Operating the system over time

Beat 2.6. Section 2. Rehearsal reference 0:55 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** AgentOps · Foundations

**Title:** Operating the system over time

AgentOps keeps deployed agents observable, controlled, and accountable as the system changes.

| Foundation | What it tells us |
|---|---|
| Traces | What happened during a task |
| Configuration versions | Which model, prompts, retrieval setup, and tools were in use |
| Outcome metrics | Task success, quality, completion time, cost, and human review |

Recorded operations: Retrieve, Model, Tool, Check. Connect the observed operations and identify the model operation as one span.

## Layout and visual

- Display narrative number 42, the area kicker, and `mini-operating` throughout.
- Use the foundations composition in design brief §43, updating §32. All visual values are defined there.
- Keep the definition above the three foundations. Place a compact native trace under its definition and identify one operation as a span.
- This is recorded work, not a prescribed next-action loop. No durations, scores, or telemetry screenshots are invented.
- Show the complete content on entry, with hard cuts and no internal reveal. Keep native text and diagram elements editable and the takeaway spoken.

## Talk track

[0:00] **FOUNDATIONS**

[0:00] **AgentOps means operating an agentic system across many runs and releases.** We need evidence that connects its behavior to the configuration in use.

[0:10] A trace records what happened during a task: retrieval, model calls, tool use, and checks. Each recorded operation is a span. This captures observable activity, not the model’s private reasoning.

[0:24] Record the configuration behind each run. Changing a prompt, model, or retrieval setup can change behavior even when the application code stays the same.

[0:35] Then measure outcomes: did the task succeed, how long did it take, what did it cost, and how much human review did it need? Some quality judgments require sampling or arrive later.

[0:49] **Healthy APIs alone do not establish task success.** Next come the decisions about evidence, releases, and response.

[0:55] Advance to slide 43.

Cut first: the retrieval, model-call, tool-use, and check inventory after the trace definition. Never cut the across-runs scope, trace/span distinction, configuration connection, outcome measures, sampled or delayed quality judgments, or API-health distinction. Cue times are rehearsal guides, not automatic playback timing.

Backup: SLOs and error budgets remain in the integration review and Research §6, outside the visible copy and timed talk track.

## Sources

- OpenTelemetry trace and GenAI guidance; Google SRE operating guidance, checked September 2026. Research §6 in `research/section-2.md`. The configuration inventory connects the preceding five areas.

## Open items

- Content and script approved by the presenter. Rehearse the locked 0:55 script on the presentation machine. The three content slides total 2:40 and preserve the area's 4:10 allocation.
