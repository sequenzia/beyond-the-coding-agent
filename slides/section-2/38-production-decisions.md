# Slide 38: Operating decisions

Beat 2.6. Section 2. Rehearsal reference 1:00 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** AgentOps · Decisions

**Title:** Operating decisions

| Decision | Starting approach and trade-off |
|---|---|
| Evidence | Capture enough to investigate. Limit sensitive content. |
| Releases | Compare a controlled cohort. Define rollback conditions. |
| Response | Enforce scope and limits. Assign an authorized responder. |

## Layout and visual

- Display narrative number 38, the area kicker, and `mini-operating` throughout.
- Use the three aligned decision rows in design brief §32. All visual values are defined there.
- Connect evidence to traces, release controls to configurations, and response to operating signals. Avoid a second metric inventory or dense dashboard.
- Show the complete content on entry, with hard cuts and no internal reveal. Keep native text editable and the takeaway spoken.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, choose evidence that supports investigation: source revisions, model and tool activity, checks, export state, and resource use. Connect outcomes to the configuration. More raw content creates exposure; minimize capture and protect access and retention.

[0:18] Second, evaluate a candidate before release, then compare a controlled cohort with the tested configuration on comparable tasks. Define when to pause or roll back. Gradual exposure limits the affected population but takes time to reveal some failures. Keep a compatible configuration available.

[0:38] Third, **enforce identity, scope, destinations, and budgets outside the model.** Assign who receives failed checks, missing evidence, exhausted budgets, and unknown outcomes. Orchestration implements the run's rules; AgentOps assigns the operating policy and response. Human handoff needs an authorized responder with the relevant evidence. **A configuration rollback does not undo completed actions.**

[1:00] Advance to slide 39.

Cut first: the detailed evidence inventory and gradual-release trade-off. Never cut protected evidence, controlled change, enforced authority, response ownership, or rollback limits. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- OpenTelemetry and Google SRE guidance, checked September 2026; existing OWASP authorization guidance and FRB operating agreement. Research §0, §3, and §6.

## Open items

- Rehearse the redistributed 4:10 AgentOps delivery and native playback on the actual presentation machine.
