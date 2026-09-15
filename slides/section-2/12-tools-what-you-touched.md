# Slide 12: Tools and extensibility, what you touched

Beat 2.3 Tools and extensibility, first half. Section 2. Time 1:50 of the beat's 3:00; slide 13 takes 1:10. Builds: 4.

## On the slide

**Kicker, top left, small:** Tools and extensibility · What you touched

**Build 1.** Two images side by side, then a caption strip.

- Left: an MCP server entry as you configured it. Codex's `[mcp_servers.<name>]` block in `config.toml`, or Devin's `mcp_config.json`.
- Right: a permission prompt, mid-session, asking to approve a shell command.
- Caption strip beneath both, two lines:
  Codex sandbox: read-only · workspace-write · full access
  Devin CLI modes: Normal · Accept Edits · Smart · Bypass · Autonomous

**Build 2.** Images shrink to a strip along the top. Heading and four lines.

Design the tool for the caller:

- Consolidate. One `schedule_event`, not `list_users` plus `list_events` plus `create_event`.
- Namespace. Prefix versus suffix moved the evals.
- Return names, not UUIDs.
- Let the caller choose. Concise or detailed: 72 tokens versus 206 for the same result.

**Build 3.** Two lines.

- Tool descriptions alone took Claude Sonnet 3.5 to state of the art on SWE-bench Verified.
- Five MCP servers: about 55,000 tokens before the first message. Deferred loading cut it by 85%.

**Build 4.** One line, small, across the bottom.

The protocol's floor: no token passthrough · minimal scopes · consent before local commands · sandboxed execution

## Layout and visual

- Build 1 is the "what you touched" pair for this area, same treatment as slides 8 and 10: two real screenshots, cropped tight. The config entry should be one you actually use. The permission prompt should be from Normal mode in Devin CLI or on-request in Codex, so it shows the ask.
- The caption strip is doing real work: it puts both tools' permission vocabularies on screen so the spoken "read-only, reversible, consequential" has something to map onto.
- Build 2 is four short lines with the tool names in a monospace face. The numbers in the fourth line are the one place on this build where a figure appears; keep it.
- Build 3 is the evidence, two lines, each with its number. Give them room; they are the two most quotable facts in the area.
- Build 4 is a footer, deliberately small. It is context for slide 13, not a headline.

## Talk track

[0:00] Build 1.

You have installed MCP servers, in both tools. And you have seen the permission prompt. Codex has three sandbox modes: read-only, workspace-write, full access. Devin CLI has five permission modes, from Normal, where reads pass and writes ask, to Autonomous, where the sandbox decides what a command can touch. And in Smart mode, a fast model judges whether each action is safe to run unattended. That prompt is a design decision rendered as UI. **Read-only, reversible, consequential.**

[0:38] Build 2.

What someone engineered. Anthropic's reframe: **a tool is a contract between deterministic code and a non-deterministic caller, and you design it for the caller.** Consolidate: one schedule_event tool, not list_users plus list_events plus create_event. Namespace: even prefix versus suffix had measurable effects on tool-use evals. Return names, not UUIDs: resolving identifiers to meaningful names "significantly improves" precision. And let the agent choose concise or detailed: 72 tokens versus 206 for the same Slack result.

[1:08] Build 3.

Descriptions are prompt engineering you can measure. **Precise refinements to tool descriptions took Claude Sonnet 3.5 to state of the art on SWE-bench Verified.** In Anthropic's words, "even small refinements to tool descriptions can yield dramatic improvements." And context cost is real: **five MCP servers cost about 55,000 tokens before the first message.** Deferred loading with tool search cut that by 85%. Wrong tool selection is the top failure when names are similar.

[1:32] Build 4.

Under it all, the protocol's own security floor: no token passthrough, scope minimization, consent before a local server's commands run, sandboxed execution.

[1:50] Advance to slide 13.

The track runs about 1:45 at a measured pace. Cuttable if the section runs long, in this order: the Smart mode sentence; the namespace line; the "wrong tool selection" sentence. Do not cut the contract line, the SWE-bench line, the 55,000 figure, or "read-only, reversible, consequential," which slide 13 builds on.

## Sources

- Codex CLI config reference: `sandbox_mode` read-only, workspace-write, danger-full-access; `mcp_servers.<id>` and per-server `default_tools_approval_mode`. Devin CLI permissions page: the five modes and Smart mode's "a fast model judges whether the action is safe to run unattended." Research §3 in `research/section-2.md`. `[primary]`, checked in a browser September 14, 2026.
- Anthropic, "Writing effective tools for agents, with agents," September 2025. Consolidation, namespacing ("non-trivial effects on our tool-use evaluations"), "significantly improves Claude's precision in retrieval tasks," 206 versus 72 tokens, and the SWE-bench Verified sentence. "Contract between deterministic code and a non-deterministic caller" is the talk's paraphrase of their deterministic-versus-non-deterministic framing, so it is bold but not in quote marks. Research §3. `[primary]`.
- Anthropic, "Introducing advanced tool use," November 2025. "Approximately 55K tokens before the conversation even" begins; 85% reduction with tool search; "the most common failures are wrong tool selection and incorrect parameters, especially when tools have similar names." Research §3. `[primary]`.
- MCP Security Best Practices, spec revision 2026-07-28. Token passthrough "explicitly forbidden"; scope minimization; consent before executing commands for one-click local server setup; sandboxed execution as a SHOULD. Research §3. `[primary]`.

## Open items

- Take the two screenshots the week of the talk: your own MCP config entry and a live permission prompt.
