# Slide 22: Tool-design decisions

Beat 2.3. Section 2. Rehearsal reference 1:00 of the area's 3:40. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Tools and extensibility · Decisions

**Title:** Tool-design decisions

| Decision | Starting approach and trade-off |
|---|---|
| Capabilities and granularity | Distinct operations that fit the task. Evaluate flexibility against coordination work. |
| A usable contract | Descriptions, inputs, results, and errors must agree. |
| Permitted execution | Validate and authorize in code. Scope reads and writes. |

## Layout and visual

- Display narrative number 22, the area kicker, and `mini-tools` throughout.
- Use the 3-row decisions composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- Render the authored rows as aligned text, with no decorative boxes. Keep supporting comparisons in speaker notes.

## Talk track

[0:00] **DECISIONS AND TRADE-OFFS**

[0:00] First, which capabilities and what granularity? Many small operations offer flexibility but require the caller to assemble more steps. A task-oriented operation can do more in code, while embedding more assumptions about the workflow. Begin with distinct capabilities and evaluate the boundary on real tasks.

[0:21] Second, the contract. Design descriptions, inputs, results, and errors together. Return useful context with stable identifiers. Sparse payloads can omit evidence, while excessive detail adds material the model must process. Evaluate actual selections and arguments, and keep the implementation aligned with the definition.

[0:41] Third, execution rules. **Validate inputs and enforce authorization in code.** This applies to reads as well as writes. A well-formed request, a successful connection, or a model's recommendation does not grant permission.

[1:00] Advance to slide 23.

Cut first: payload detail. Never cut authorization outside the model. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed Tools content; Anthropic, September and November 2025; MCP documentation, July 2026; OWASP, 2025; illustrative export contract. Research §0 and §3.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
