# Slide 25: Orchestration decisions

Beat 2.4. Section 2. Rehearsal reference 1:00 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · Decisions

**Title:** Orchestration decisions

| Decision | Starting approach and trade-off |
|---|---|
| Who chooses the next step? | Code for required gates. Model judgment where adaptation helps. |
| When should work be delegated? | Begin with a bounded workflow. Add workers after measured benefit. |
| How does work stop or recover? | Completion checks, saved state, bounded retries, and handoff. |

## Layout and visual

- Display narrative number 25, the area kicker, and `mini-orchestration` throughout.
- Use the 3-row decisions composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- Render the authored rows as aligned text, with no decorative boxes. Keep supporting comparisons in speaker notes.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, who chooses the next step? Use code for known paths and required gates. Allow model judgment where adaptation helps. A proposed plan does not enforce permissions or prerequisites. Inspect the executed path and preserve acceptance criteria as branches change.

[0:18] Second, delegation. Start with a bounded workflow. Multiple agents can divide independent work, while adding handoffs, reconciliation, and resource use. Add workers when measured whole-task quality, cost, or latency justifies them. Keep assignments and expected results explicit. Model choice remains the earlier decision; this is about dividing the work.

[0:40] Third, stopping and recovery. Define completion checks and action, token, retry, and latency limits. Save the state needed to continue. Distinguish confirmed success, known failure, and an unknown outcome. Recheck source freshness and authorization on resume.

[1:00] Advance to slide 26.

Cut first: delegation detail beyond the brief contrast. Never cut completion checks and work limits. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed Orchestration content; Anthropic, December 2024, June and November 2025; 12-Factor Agents; illustrative workflow and recovery contract. Research §0, §3, and §4.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
