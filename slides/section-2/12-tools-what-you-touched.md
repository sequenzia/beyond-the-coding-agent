# Slide 12: Tools and extensibility, When you are the user

Beat 2.3 Tools and extensibility, first half. Section 2. Time 1:50 of the beat's 3:00; slide 13 takes 1:10. Builds: 4.

## On the slide

**Kicker:** Tools and extensibility · When you are the user

**Build 1.** Preserve the MCP configuration and shell-command approval screenshot placeholders and existing mode captions.

**Build 2.** Screenshots shrink to a strip.

Design the tool for the caller:

- Consider consolidation for the task. One `schedule_event` can combine several API operations.
- Namespace. Prefix versus suffix moved the evals.
- Return meaningful names alongside stable IDs needed to act.
- Offer concise or detailed results: 72 tokens versus 206 in Anthropic's example.

**Build 3.** Replace the design list.

Tool-description refinements improved Claude Sonnet 3.5 on SWE-bench Verified.

Anthropic's five-server example: about 55,000 tokens before the first message. Tool search reduced definition overhead by 85%.

**Build 4.** Protocol floor: no token passthrough · minimal scopes · consent before local commands · sandboxed execution

## Layout and visual

- Display narrative number 12 throughout, using the shared component in the design brief.
- Playback: Three physical slides. Preserve the Morph into the design-list strip. The evidence begins a new slide with a hard cut. The protocol floor remains an internal reveal.

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Keep the existing full-size and strip placeholder geometry and Morph pairs.
- Use the design list and evidence as replacement states. The five-server scope must stay attached to the token figure.

## Talk track

[0:00] The MCP configuration connects tools. The permission prompt exposes a policy choice. Codex and Devin provide sandbox and approval settings. A model can recommend approving a command, but **that recommendation does not establish permission**.

[0:32] Build 2. **A tool is a contract between code and a model caller.** Evaluate granularity for the task. A scheduling tool can consolidate several operations, but consolidation is an option to test. Namespace related tools. **Return meaningful names alongside stable IDs needed to act.** Two customers may share a name. Offer concise and detailed payloads where useful.

[1:08] Build 3. Anthropic reported improvements from tool-description refinements. In its particular five-server example, definitions consumed about 55,000 tokens before the conversation. Tool search reduced definition overhead by 85%. The cost depends on the definitions, not just the server count.

[1:32] Build 4. The protocol floor includes no token passthrough, scope minimization, consent before local commands, and sandboxed execution. Next, the owner must enforce access for scoped reads, recovery for reversible changes, and authorization or approval for consequential actions.

[1:50] Advance to slide 13.

Cut first: namespacing detail and the concise/detailed numbers. Never cut task fit, stable IDs, the five-server scope, or the authorization qualification.

## Sources

- Anthropic, September and November 2025. Research §3 in `research/section-2.md`. Consolidation is an option; the 55,000-token figure belongs to one five-server example.
- Codex CLI and Devin CLI permissions docs, checked September 14, 2026. Research §3.
- MCP Security Best Practices, July 2026; OWASP Excessive Agency, 2025. Research §3.

## Open items

- Deferred by the presenter: retain both screenshot placeholders.
