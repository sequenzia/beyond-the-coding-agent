# Slide 22: Capabilities and extension mechanisms

Beat 2.3. Section 2. Rehearsal reference 1:15 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Tools & Extensibility · Decisions

**Title:** Capabilities and extension mechanisms

**Capability size**

Flexible primitives or task-oriented operations. Evaluate the boundary on real work.

| Mechanism | Role |
|---|---|
| MCP | Connect applications to tools and context. |
| Skills | Reusable task instructions and supporting resources. |
| Plugins | Package capabilities for installation and distribution. |

**Operational contract**

Maintain descriptions, inputs, results, and failure behavior. Enforce permissions in code.

## Layout and visual

- Display narrative number 22, the area kicker, and `mini-tools` throughout.
- Use the capability decision, native mechanism table, and contract statement in design brief §29. All visual values are defined there.
- Explain the role each mechanism serves. They can be combined and are not three competing tool types or mandatory layers.
- Keep A2A in Markdown backup. The stage explanation covers MCP, skills, and plugins without installation or protocol walkthroughs.
- Keep the table and text editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **DESIGN AND EXTENSION DECISIONS**

[0:00] First choose the capability boundary. Small operations give the caller more combinations and more steps to coordinate. A task-oriented operation can handle more work in code, while embedding assumptions about the task. Evaluate that trade-off.

[0:19] Then choose how to extend the system. **MCP, the Model Context Protocol, connects applications to providers of tools and context.** The application can discover operations and call them through a common interface.

[0:35] **A skill supplies reusable instructions and supporting resources for a task.** It can include scripts or examples. **A plugin packages capabilities for installation and distribution**, such as a skill together with an MCP integration. Exact packaging depends on the host.

[0:55] These mechanisms can work together. None replaces the execution checks we just saw. Someone still owns the descriptions, schemas, implementation, permissions, and failure behavior. Keep those pieces aligned as the capability changes, and check that the model can find and use the appropriate operation.

[1:15] Advance to slide 23.

Cut first: plugin packaging examples and discovery elaboration. Never cut capability granularity, the three mechanism roles, or application-owned enforcement. Cue times are rehearsal guides, not automatic playback timing.

Backup, not spoken: A2A supports communication between agents. Keep its protocol details and independent-agent discussion in the supporting integration file and Research §3.

## Sources

- Anthropic, September and November 2025; MCP documentation, July 2026, rechecked September 2026; Agent Skills and OpenAI plugin documentation, checked September 2026; OWASP, 2025. Research §3 in `research/section-2.md`.
- Illustrative export contract: Research §0 and §3, and `internal/frb-running-example.md`. The unapproved-destination case is an expected contract test, not a measured result.
- Accepted content integration: `outlines/section-2-integration/03-tools-and-extensibility.md`. A2A remains in supporting Markdown.

## Open items

- Rehearse the 4:10 area on the actual presentation machine. Preserve the execution boundary and the unapproved-destination example when trimming.
