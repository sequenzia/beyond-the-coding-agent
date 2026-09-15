# Slide 18: Operating it, When you are the user

Beat 2.6 Operating it, first half. Section 2. Time 3:15 of the beat's 4:30; slide 19 takes 1:15. Builds: 7.

## On the slide

**Kicker:** Operating it · When you are the user

**Build 1.** Preserve the command chips and trust-and-safety line.

**Builds 2 to 6.** Shrink to the command strip. Show operational responsibilities in successive states:

- Observability: cost per completed task · p95 and p99 tokens · cache hit rate · loop iterations · tool failures
- Guardrails: classification · provenance · sandboxing · validation · circuit breakers · approvals · least privilege
- Security: capability triangle labeled Private data, Untrusted content, External communication. Together: exfiltration risk. Break or constrain the path.
- Identity: Design pattern: workload identity with short-lived delegation. Requirements: no token passthrough; minimal scopes.
- Governance: EU AI Act Article 50: disclosure duties for covered direct AI interactions.

**Build 7.** Replace the bands with evidence:

- EchoLeak, June 2025. Researcher-demonstrated vulnerability. No evidence of exploitation reported.
- Replit, July 2025. Reported production database deletion during a code freeze. Fortune / AI Incident Database.
- Moffatt v. Air Canada, February 2024. Reported liability for misleading chatbot information. McCarthy Tétrault, secondary commentary.

## Layout and visual

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Build 2 shows Observability. Build 3 adds Guardrails. Build 4 replaces both with the Security diagram. Build 5 replaces Security with Identity. Build 6 adds Governance. Build 7 replaces those rows with the three incidents.
- Keep the command strip, kicker, divider, and mini-map throughout. Allow purposeful wrapping within each row's budget.
- The capability triangle stays plain. Its risk statement stays adjacent and the Willison attribution stays visible.
- Label the evidence types on screen. Paraphrase Air Canada without quotation marks.
- Values and the revised capability-triangle geometry are in the design brief.

## Talk track

[0:00] `/usage`, the OpenTelemetry exporter, sandbox controls, and the OAuth login are surfaces of operating work. The provider also has a trust and safety function.

[0:16] Build 2. Model calls, tool calls, and agent steps need traces. OpenTelemetry's GenAI conventions remain Development. Measure **cost per completed task**, tail tokens, cache hits, loop iterations, and tool failures.

[0:46] Build 3. Guardrails include provenance, sandboxing, validation, circuit breakers, approval gates, and least privilege. Classification can contribute to defense in depth.

[1:06] Build 4. **Private data, untrusted content, and external communication together create an exfiltration risk. Break or constrain the path.** A web fetch can communicate externally. One integration can supply more than one capability. Removing a corner addresses this path; it does not establish safety from other threats. **A probabilistic filter is insufficient as the sole security boundary.**

[1:42] Build 5. A separate workload identity with short-lived delegated authority is a **design pattern**. Keep it separate from supported requirements: enforce authorization outside the model, no token passthrough, minimal scopes.

[1:58] Build 6. **EU AI Act Article 50: disclosure duties for covered direct AI interactions.** Role and scope matter.

[2:12] Build 7. EchoLeak was a researcher-demonstrated vulnerability in Microsoft 365 Copilot. The research reports Microsoft's statement that there was no evidence of exploitation. Replit's July 2025 production database deletion was reported by Fortune and recorded in the AI Incident Database. Legal commentary on Moffatt v. Air Canada reports responsibility for misleading chatbot information. **You retain responsibility for the system's answers.** The underlying tribunal decision has not been independently checked here.

[3:15] Advance to slide 19.

Legal backup: the Commission says Article 50 applies from August 2, 2026. The covered direct-interaction duty in Article 50(1) falls on providers and has an exception when interaction with AI is obvious. Background machine-to-machine systems fall outside this direct-interaction scope. Deployers have distinct duties for emotion recognition, biometric categorisation, deepfakes, and certain public-interest text. Determine provider/deployer role and applicable EU scope. This slide is not a compliance determination for every deployment.

Cut first: detailed metrics and guardrail list. Never cut capability labels, limits of the exfiltration model, evidence types, or Article 50 scope.

## Sources

- OpenTelemetry and Codex CLI / Devin CLI docs, checked September 14, 2026. Research §6 in `research/section-2.md`.
- Willison, June 2025, and OWASP, 2025 and 2026. Research §6. Trifecta is an exfiltration model.
- MCP, July 2026, and OWASP authorization. Research §3. Identity is a labeled design pattern.
- European Commission Article 50 FAQ, checked September 15, 2026. Research §6. [primary], with scope, roles, and exception in research and notes.
- EchoLeak analysis, June/September 2025; Fortune and AI Incident Database, July 2025; McCarthy Tétrault on Air Canada, February 2024. Research §6. Demonstration, secondary incident reporting, and secondary legal commentary respectively.

## Open items

- None.
