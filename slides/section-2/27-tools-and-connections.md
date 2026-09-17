# Slide 27: Tools and agent capabilities

Beat 2.3. Section 2. Rehearsal reference 1:00 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds. Copy and script approved September 16, 2026.

## On the slide

**Kicker:** Tools & Extensibility · Foundations

**Title:** Tools and agent capabilities

Tools expose operations for retrieving information, running computations, and acting on systems.

**Request**

The model selects a tool and supplies arguments.

**Execution**

Software checks permissions and inputs, then performs the permitted operation.

**Result**

The tool returns information that informs the next model step.

**Model Context Protocol (MCP)**

A standard interface for connecting AI applications to external tools and context.

## Layout and visual

- Display narrative number 27, the area kicker, and `mini-tools` throughout.
- Use the capability definition above the native Request, Execution, and Result flow in design brief §29. All visual values are defined there.
- Place the MCP definition below the flow. The client/server explanation and hypothetical issue-tracker example stay in the talk track.
- Keep all text and connectors editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **TOOLS AND AGENT CAPABILITIES**

[0:00] **Tools are the primary way we give an agent capabilities beyond generating a response.** They let it retrieve current information, run computations, and act on external systems.

[0:14] The model receives descriptions of available tools and their inputs. It selects a tool and supplies arguments. **Software checks the request and executes the permitted operation.** The result becomes information the model can use next.

[0:31] MCP, the Model Context Protocol, provides a standard interface for connecting AI applications to external tools and context. An MCP server exposes capabilities. The application discovers and calls them through an MCP client.

[0:47] For example, an issue-tracker server could expose tools to search issues and create a ticket. Connecting those tools extends what the agent can do. Software still controls what it may do.

[0:57] Next, we choose which capabilities to expose and how the agent will use them.

[1:00] Advance to slide 28.

Cut first: the issue-tracker example. Never cut tools as capabilities, software-controlled execution, or MCP's connection role. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September 2025; MCP introduction and server-concepts documentation, July 2026, rechecked September 2026. Research §3 in `research/section-2.md`.
- Approved capabilities refinement, September 2026, in Research §3. The issue-tracker example is hypothetical and names no product or deployed integration.

## Open items

- Rehearse the approved 1:00 script and its handoff to capability choices. Preserve software-controlled execution and MCP's connection role when trimming.
