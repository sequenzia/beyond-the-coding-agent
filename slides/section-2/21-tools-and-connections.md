# Slide 21: Tool calls and execution

Beat 2.3. Section 2. Rehearsal reference 1:10 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Tools & Extensibility · Foundations

**Title:** Tool calls and execution

**Proposal**

The model selects an operation and supplies arguments.

**Execution**

Application code validates, authorizes, and executes permitted requests.

**Observation**

The result informs the next model step.

Illustrative application call:

`export_cited_brief(draft, citations, destination)`

**Application checks**

Authenticated identity. Exact checked content. Permitted destination.

## Layout and visual

- Display narrative number 21, the area kicker, and `mini-tools` throughout.
- Use the native proposal/execution/observation flow in design brief §29. All visual values are defined there.
- Place the illustrative call below the flow, with application checks clearly attributed to the execution layer. The function is conceptual pseudocode, not a provider API or a complete schema.
- Keep all text and connectors editable. Show the complete content on entry with hard cuts and no internal builds.
- The brief coding-agent connection and explicit result states stay in the talk track.

## Talk track

[0:00] **TOOL CALLS AND EXECUTION**

[0:00] **A tool call is a request for an operation.** The model selects the tool and supplies arguments. Application software checks the request, performs the permitted operation, and returns a result. A coding agent reading a file or running tests uses this pattern.

[0:22] Our illustrative call requests export of a draft, its citations, and a destination. The application supplies authenticated identity and checks current access. The export service also establishes that this exact content passed verification and that the destination is permitted.

[0:42] The input schema describes the argument structure. A well-formed destination can still be outside the permitted scope. **Code enforces that boundary.**

[0:53] The result must distinguish confirmed completion, a known failure, and an unknown outcome. Those observations help the caller decide what to do next.

[1:03] Tool design therefore includes the operation, its inputs, the checks, and the meaning of its result.

[1:10] Advance to slide 22.

Cut first: the coding-agent elaboration. Never cut the proposal/execution distinction, application-controlled checks, or explicit outcome states. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September and November 2025; MCP documentation, July 2026, rechecked September 2026; Agent Skills and OpenAI plugin documentation, checked September 2026; OWASP, 2025. Research §3 in `research/section-2.md`.
- Illustrative export contract: Research §0 and §3, and `internal/frb-running-example.md`. The unapproved-destination case is an expected contract test, not a measured result.
- Accepted content integration: `outlines/section-2-integration/03-tools-and-extensibility.md`. A2A remains in supporting Markdown.

## Open items

- Rehearse the 4:10 area on the actual presentation machine. Preserve the execution boundary and the unapproved-destination example when trimming.
