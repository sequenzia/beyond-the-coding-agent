# Slide 37: Production decisions

Beat 2.6. Section 2. Rehearsal reference 1:20 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** AgentOps · Decisions

**Title:** Production decisions

| Decision | Starting approach and trade-off |
|---|---|
| Authority | Enforce identity, scope, and permitted destinations. |
| Observation | Connect evidence to outcomes, quality, cost, and latency. |
| Limits and handoff | Set the policy and assign the authorized responder. |
| Changes and incidents | Review changes. Keep a way to restrict or revert configuration. |

## Layout and visual

- Display narrative number 37, the area kicker, and `mini-operating` throughout.
- Use the 4-row decisions composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- Render the authored rows as aligned text, with no decorative boxes. Keep supporting comparisons in speaker notes.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, authority. Define whose scope an action uses, which records it permits, and where information may go. Start with least privilege and enforce boundaries outside the model. Broader access makes more tasks possible and expands what a wrong request can affect.

[0:19] Second, observation. Connect requests to source revisions, observable actions, checks, and outcomes. Track quality, cost per completed task, and end-to-end latency, including retries and verification. Choose evidence that supports investigation and protect access to it. More telemetry also creates more information to manage.

[0:38] Third, operating limits and handoff. Orchestration implements the run's rules. Here, assign the product policy and response: what happens when a check fails, evidence is unavailable, or a budget is exhausted? The person taking over needs the task, known state, relevant evidence, and unresolved questions.

[0:59] Fourth, accountability. Identify who approves changes and who investigates incidents. Keep a way to restrict a capability or revert a problematic configuration. Evaluate changes and monitor their effects. Reverting configuration does not automatically undo an action already completed.

[1:20] Advance to slide 38.

Cut first: the change-process detail. Never cut enforced authority, operating signals, and responsible handoff. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed AgentOps content; Rauch in Datadog, 2026; Willison, June 2025; OWASP; existing observability framing; illustrative FRB operating agreement. Research §0, §3, and §6.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
