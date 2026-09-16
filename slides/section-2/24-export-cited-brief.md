# Slide 24: Export cited brief

Beat 2.3. Section 2. Rehearsal reference 1:00 of the area's 3:40. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Tools & Extensibility · FRB application

**Title:** Export cited brief

**Illustrative Export cited brief contract.**

| Contract | Requirement |
|---|---|
| Input | Checked draft, citations, destination. |
| Checks | Exact draft passed verification. Access and destination permitted. |
| Output | Matching content and citations, with uncertainty preserved. Export receipt. |
| Failure | Known failure or unknown outcome stays explicit. |

## Layout and visual

- Display narrative number 24, the area kicker, and `mini-tools` throughout.
- Use the area-specific FRB composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- Keep the illustrative label visible. Preserve source identities, uncertainty, and the applicable access boundary.

## Talk track

[0:00] **FRB APPLICATION**

[0:00] Consider Export cited brief. Parsing and indexing are background services; the agent-facing export takes a checked draft, citations, and a permitted destination.

[0:10] The service must establish that the exact content being exported passed its checks. The caller saying it was checked is insufficient. Changed content requires renewed verification. Enforce access and the destination in code. Preserve citations, unresolved findings, and limitations rather than generating a fresh summary during export.

[0:30] Return a receipt when completion is confirmed. If the operation fails or its outcome is unknown, say so explicitly. An MCP connection could expose this tool, but the application service must implement those guarantees.

[0:45] The result now tells the execution controller what it can establish. Orchestration decides what happens next.

[0:52] **A description guides the model. Code enforces the contract.**

[1:00] Advance to slide 25.

Cut first: the sentence about exposing the contract through MCP. Never cut exact checked content, permitted destination, and unknown-outcome handling. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed Tools & Extensibility content; Anthropic, September and November 2025; MCP documentation, July 2026; OWASP, 2025; illustrative export contract. Research §0 and §3.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
