# Slide 37: Operating the system over time

Beat 2.6. Section 2. Rehearsal reference 0:55 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** AgentOps · Foundations

**Title:** Operating the system over time

Operate agentic systems with observability, enforced controls, and accountable response.

- **Trace:** The operations behind one task.
- **Versioned configuration:** The versions and settings in use.
- **Outcome metrics:** Quality, completion time, cost, and review work.

Recorded operations: Retrieve → Model → Verify → Export / hold. Identify the model operation as one span.

## Layout and visual

- Display narrative number 37, the area kicker, and `mini-operating` throughout.
- Use the foundations composition in design brief §32. All visual values are defined there.
- Keep the definition above the three foundations. Place a compact native trace under its definition and identify one operation as a span.
- This is recorded work, not a prescribed next-action loop. No durations, scores, or telemetry screenshots are invented.
- Show the complete content on entry, with hard cuts and no internal reveal. Keep native text and diagram elements editable and the takeaway spoken.

## Talk track

[0:00] **FOUNDATIONS**

[0:00] **AgentOps operates the service across many runs and over time.** Orchestration controls one run. Here we connect observability, enforced controls, and accountable response as the system changes.

[0:12] A trace connects the operations behind a task: retrieval, model calls, tools, checks, and the outcome. A span records one timed operation. These are observations of work, not access to the model's private reasoning.

[0:29] Versioned configuration records the code, model and settings, prompts, retrieval setup, and tool contracts in use. A prompt edit or index refresh can change answers without an application-code release.

[0:42] Outcome metrics track useful completion and quality alongside time, cost, and review work. Quality judgments may arrive later or through samples. **API availability alone does not establish that the task succeeded.**

[0:55] Advance to slide 38.

Cut first: the full configuration inventory. Never cut the across-runs scope, trace/configuration/outcome connection, or API-health distinction. Cue times are rehearsal guides, not automatic playback timing.

Backup: SLOs and error budgets remain in the integration review and Research §6, outside the visible copy and timed talk track.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- OpenTelemetry trace and GenAI guidance; Google SRE operating guidance, checked September 2026. Research §6. The configuration inventory connects the preceding five areas.

## Open items

- Rehearse the redistributed 4:10 AgentOps delivery and native playback on the actual presentation machine.
