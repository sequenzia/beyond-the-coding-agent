# Slide 38: Operating decisions

Beat 2.6. Section 2. Rehearsal reference 1:00 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** AgentOps · Decisions

**Title:** Operating decisions

| Decision | Approach and trade-off |
|---|---|
| Evidence | Record enough to investigate. Limit sensitive content and protect access. |
| Releases | Evaluate changes, then limit initial exposure. Define pause and rollback conditions. |
| Response | Enforce permissions and resource limits. Assign someone authorized to intervene. |

## Layout and visual

- Display narrative number 38, the area kicker, and `mini-operating` throughout.
- Use the three aligned decision rows in design brief §43, updating §32. All visual values are defined there.
- Connect evidence to traces, release controls to configurations, and response to operating signals. Avoid a second metric inventory or dense dashboard.
- Show the complete content on entry, with hard cuts and no internal reveal. Keep native text editable and the takeaway spoken.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, decide what to record. Link each outcome to its trace and configuration. **Keep enough evidence to investigate**, while limiting sensitive content and controlling access and retention.

[0:15] Second, decide how changes reach users. Evaluate the candidate, then release it to a limited group. Compare similar tasks against the current tested configuration. Define when to pause or roll back. Limited exposure reduces the impact of a problem, but can take longer to reveal failures.

[0:38] Third, decide when to intervene and who responds. **Enforce permissions, allowed destinations, and resource limits outside the model.** Route failed checks, exhausted budgets, and uncertain outcomes to someone authorized to act.

[0:54] **Rolling back a configuration does not undo completed actions.** Those need separate review.

[1:00] Advance to slide 39.

Cut first: the final sentence about limited exposure taking longer to reveal failures. Never cut protected evidence, evaluation before release, comparison with the tested configuration, pause and rollback conditions, enforced authority, response ownership, or rollback limits. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- OpenTelemetry and Google SRE guidance, checked September 2026; OWASP authorization guidance. Research §3 and §6 in `research/section-2.md`.

## Open items

- Content and script approved by the presenter. Rehearse the locked 1:00 script on the presentation machine. The three content slides total 2:40 and preserve the area's 4:10 allocation.
