# Slide 12: Model selection

Beat 2.1. Section 2. Rehearsal reference 1:00 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Models · Decisions

**Title:** Model selection

| Decision | Starting approach and trade-off |
|---|---|
| Data and deployment | Approved service, environment, and intended use. |
| Task fit and settings | Compare quality, cost, and latency on your tasks. |
| One model or routing? | Begin with one. Add routes when measurements justify them. |
| Version changes | Pinned: plan migration. Alias: monitor regressions. |

## Layout and visual

- Display narrative number 12, the area kicker, and `mini-models` throughout.
- Use the 4-row decisions composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- Render the authored rows as aligned text, with no decorative boxes. Keep supporting comparisons in speaker notes.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, eligibility. Understand the data and permitted use before ranking candidates. Approval can constrain the choice even when another model appears more capable.

[0:11] Second, task fit. Compare eligible configurations on representative work inside the intended workflow. Include reasoning settings in that comparison. Measure cost and latency for completed tasks, including the retries and checks needed to obtain an acceptable result.

[0:28] Third, one configuration or routing. One model provides a simpler baseline. Routing can match different work to different models, while adding configurations and routing behavior to evaluate. Begin with one unless measurements justify more.

[0:44] Fourth, changes. Pinned versions need a migration plan. Moving aliases need regression monitoring. In either case, a model choice remains a dependency the team must maintain.

[1:00] Advance to slide 13.

Cut first: routing mechanics. Never cut the eligibility constraint and lifecycle responsibility. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed Models content; Osmani, April 2026; NARA, May and August 2025; NIST, May 2024; lifecycle sources and presenter context. Research §0 and §1. No model scores or winner are claimed.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
