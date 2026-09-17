# Slide 28: Choosing and exposing capabilities

Beat 2.3. Section 2. Rehearsal reference 1:05 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds. Copy and script approved September 16, 2026.

## On the slide

**Kicker:** Tools & Extensibility · Decisions

**Title:** Choosing and exposing capabilities

| Decision | Options and trade-offs |
|---|---|
| **Capability size** | Small operations offer flexibility. Task-oriented tools handle more work internally. |
| **System access** | MCP provides standard tool discovery and calls. CLIs provide access through existing commands. |
| **Tool composition** | Individual calls return results step by step. Code mode combines calls and processes results in code. |

**Execution controls apply to every approach:** permissions, input checks, and limits on execution.

## Layout and visual

- Display narrative number 28, the area kicker, and `mini-tools` throughout.
- Use the native decision table and execution-controls statement in design brief §29. All visual values are defined there.
- Distinguish system access from tool composition. Code mode can call MCP tools; the approaches can work together.
- Keep the table and text editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **CHOOSING AND EXPOSING CAPABILITIES**

[0:00] **Start with the task the agent needs to perform.** Small tools give it flexible building blocks, but require more calls to coordinate. A task-oriented tool handles more work internally, while embedding more assumptions.

[0:15] Then choose how to connect. MCP provides a standard way to discover and call tools. An existing CLI can also expose useful capabilities through a shell or execution tool. Consider its available commands and how reliably the agent can interpret their output.

[0:34] **Code mode means the agent writes code that calls tools.** That code can call MCP tools, loop over results, and filter data before returning selected information to the model.

[0:47] This can reduce repeated model round trips and intermediate data in context. It also requires a controlled execution environment. Whichever approach you choose, enforce permissions and validate inputs in software.

[1:00] Evaluate these choices on real tasks. The next slide covers common failures.

[1:05] Advance to slide 29.

Cut first: the CLI output-format elaboration. Never cut capability granularity, MCP and CLI access, code mode's composition role, or execution controls. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, tool design, September 2025, code execution with MCP, November 2025, and bash-tool documentation checked September 2026; MCP documentation, July 2026, rechecked September 2026; OWASP, 2025. Research §3 in `research/section-2.md`.
- Approved capabilities refinement, September 2026, in Research §3. Efficiency benefits depend on the task and implementation; no numerical savings are claimed.

## Open items

- Rehearse the approved 1:05 script. Preserve the distinction between system access and tool composition, including code mode's ability to call MCP tools.
