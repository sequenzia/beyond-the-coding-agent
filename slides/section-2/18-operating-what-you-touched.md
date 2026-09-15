# Slide 18: Operating it, what you touched

Beat 2.6 Operating it, first half. Section 2. Time 3:15 of the beat's 4:30; slide 19 takes 1:15. Builds: 7.

## On the slide

**Kicker, top left, small:** Operating it · What you touched

**Build 1.** Four chips in a row, then one line.

`/usage` · the OpenTelemetry exporter · the sandbox · the OAuth login

And a trust and safety team you have never met.

**Builds 2 to 6.** Chips shrink to a strip. Five labeled bands appear one at a time, each one line.

- Observability: cost per completed task · p95 and p99 tokens · cache hit rate · loop iterations per task · tool failure rate
- Guardrails: input classification · provenance tags · sandboxed execution · output validation · circuit breakers · approval gates · least privilege
- Security: the lethal trifecta, drawn as a triangle. Private data. Untrusted content. External communication. Beneath: any two is safe; all three is an exfiltration path.
- Identity: the agent's own identity, plus short-lived delegated authority from the user. No token passthrough. No omnibus scopes.
- Governance: audit trails and approvals. Since August 2, 2026, Article 50: if it interacts with people, tell them it is an AI.

**Build 7.** The bands exit. Three incidents, one line each, with dates.

- EchoLeak, June 2025. CVE-2025-32711. One email. Data from OneDrive, SharePoint, and Teams left through a trusted domain.
- Replit, July 2025. An agent deleted a production database during a code freeze.
- Moffatt v. Air Canada, February 2024. "The chatbot is a separate legal entity." The tribunal disagreed.

## Layout and visual

- Build 1 is the last "what you touched" pair and it is chips rather than screenshots, because four screenshots would be noise. If one image is wanted, use the OAuth consent screen from `devin mcp login`; it is the one the audience will recognize.
- The five bands are the five words on the map's platform layer plus guardrails from the harness. Each is one line. Do not let them wrap; if they do, cut items from the Guardrails line first.
- The triangle is the only diagram in this area and the one image the audience should keep. Three labeled corners, and the sentence beneath it. It returns as the pitfall on slide 19.
- Build 7 replaces the bands. Three lines, each starting with a name and a date, so they read as a record rather than a story. The Air Canada quote is the airline's argument, in quote marks; the tribunal's answer is not.
- Attribute Willison small under the triangle: Simon Willison, June 2025. Attribute the Datadog line small if it appears; it is spoken here, not shown.

## Talk track

[0:00] Build 1.

`/usage`, in both tools. The OpenTelemetry exporter in Codex's config. The sandbox, and in Devin CLI the domain allowlist that goes with it. The OAuth login when you connected an MCP server. And a trust and safety team you have never met.

[0:16] Build 2. Observability.

Traces per model call, tool call, and agent step. OpenTelemetry has GenAI conventions for exactly this, still marked Development, so pin a snapshot and expect names to move. The metrics that matter: **cost per completed task, not per request.** p95 and p99 tokens, because long conversations and bad retrieval concentrate cost in the tail. Cache hit rate. Loop iterations per task. Tool failure rate. Datadog's line from July: **"The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe."**

[0:52] Build 3. Guardrails.

Defense in depth at every boundary. Input classification. Provenance tags on retrieved content. Sandboxed tool execution. Output validation. Circuit breakers on tokens and actions. Approval gates on consequential actions. Least-privilege scopes.

[1:06] Build 4. Security.

Simon Willison's lethal trifecta. **Private data, untrusted content, external communication. Any two is safe.** All three is an exfiltration path, because "LLMs are unable to reliably distinguish the importance of instructions based on where they came from." Nobody knows how to stop injection completely, and a filter that catches 95% is not a security control. OWASP's LLM Top 10 has prompt injection at number one and excessive agency at number six, and OWASP shipped an agentic top ten for 2026: goal hijack, tool misuse, identity and privilege abuse, memory and context poisoning, cascading failures, rogue agents.

[1:44] Build 5. Identity.

The agent gets its own identity, plus short-lived delegated authority from the user. No token passthrough. No omnibus scopes.

[1:53] Build 6. Governance.

Audit trails and approvals. And since August 2, **EU AI Act Article 50: if your system interacts with people, you tell them it is an AI.**

[2:04] Build 7. Three incidents, fast.

EchoLeak, CVE-2025-32711. A zero-click injection in Microsoft 365 Copilot. One crafted email, and data from OneDrive, SharePoint, and Teams left through a trusted domain. **The trifecta in a shipped product.** Replit, July 2025. An agent deleted a production database during a code freeze. The fixes shipped afterward: dev and prod separation, a planning-only mode, one-click restore. Those fixes are the guardrails box on the diagram. Moffatt versus Air Canada, February 2024. The airline argued its chatbot was a separate legal entity. The tribunal disagreed. **The chatbot's answer was the company's answer.**

[3:15] Advance to slide 19.

The track runs about 2:50. The slack is for the incidents, which are dense with names and should not be rushed. Cuttable if the section runs long, in this order: the OWASP list of six agentic names, keeping "prompt injection at number one"; the Guardrails band spoken as a list, since it is on the slide; the OpenTelemetry status clause. Do not cut cost per completed task, the trifecta, Article 50, or any of the three incidents.

## Sources

- Codex CLI and Devin CLI docs: `/usage` in both; Codex `otel.exporter`; Devin `--sandbox` with `sandbox.allowed_domains`; `devin mcp login`. Research §6 in `research/section-2.md`. `[primary]`, checked in a browser September 14, 2026.
- OpenTelemetry GenAI semantic conventions repository: "Status: Development"; "Warning: Semantic conventions are subject to change." Research §6. `[primary]`, checked September 14, 2026. The `[verify status]` flag is cleared.
- Datadog, "State of AI Engineering," July 2026. Quote verbatim. Research §6, and §3 in `research/section-1.md`. `[primary]`.
- Willison, "The lethal trifecta for AI agents," June 2025. The three named verbatim; "LLMs are unable to reliably distinguish the importance of instructions based on where they came from" verbatim. "Any two is safe" is the talk's paraphrase of his argument. Research §6. `[primary]`.
- OWASP Top 10 for LLM Applications 2025: LLM01 and LLM06. OWASP Top 10 for Agentic Applications 2026, announced December 9, 2025: the six names spoken match the announcement. Research §6. `[primary]`, checked September 14, 2026. Flag cleared.
- MCP Security Best Practices, July 2026, for no token passthrough and no omnibus scopes. The agent-identity-plus-delegation pattern is presented as direction, not standard. Research §3 and §6.
- EU AI Act tracker, Article 50: applies from August 2, 2026; interaction disclosure not extended by the Omnibus. Research §6. `[primary]` for the tracker, checked September 14, 2026. Flag cleared.
- EchoLeak: CVE-2025-32711, CVSS 9.3, Aim Security, June 2025; arXiv analysis 2509.10540. Replit: Fortune, July 23, 2025, and AI Incident Database 1152. Moffatt v. Air Canada: BC Civil Resolution Tribunal, February 2024, via McCarthy Tétrault. Research §6.

## Open items

- Decide whether build 1 is chips only or chips plus one OAuth consent screenshot.
