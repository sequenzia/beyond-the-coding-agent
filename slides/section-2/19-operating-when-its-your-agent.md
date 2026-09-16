# Slide 19: Operating it, When you are the owner, and the Section 2 wrap

Beat 2.6 Operating it, second part. Section 2. Time 4:00 of the beat's 4:30; slide 18 took 0:30. Five static screens: quote 0:20, decisions 1:20, maintenance 1:00, application 0:55, yours diagram 0:25. Four advances, all hard cuts.

## On the slide

**Kicker on owner screens:** Operating it · When you are the owner

**Build 1, quote.** No additional title.

“The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe.”

Guillermo Rauch
State of AI Engineering, Datadog, 2026

Conceptual illustration: a visible execution path inside a system.

**Build 2, decisions.** Title: The operating decisions you own

| Decision | Impact and starting approach |
|---|---|
| What may the system access and do? | Scope every identity, read, and outbound action. Start with least privilege, enforced outside the model. |
| What must you observe? | Trace model calls, tools, and outcomes. Track quality, cost per completed task, and latency. |
| When should it stop or hand off? | Set budgets and define failure responses. Stop or hand off when a limit or check fails. |
| Who owns approvals and incidents? | Assign an accountable operator and review process. Keep audit trails and a rollback path. |

**Build 3, maintenance.** Title: Living with operating choices

- **Integrations:** New tools can join private data, untrusted content, and external communication in one path.
- **Operating signals:** Changes shift quality, cost, and latency. Inspect failed traces and feed them back into evals.
- **Controls:** Permissions and policies change. Recheck access, approvals, alerts, and handoff.

A probabilistic filter is insufficient as the sole security boundary.

**Pitfall:** the lethal trifecta, assembled one integration at a time.

**Build 4, application.** Title: An operating agreement for the FRB system

Illustrative proposed operating agreement.

| Responsibility | FRB starting rule |
|---|---|
| Access | Authorized records and permitted export destinations. Enforce access outside the model. |
| Monitor | Trace revisions, decisions, checks, and exports. Track quality, freshness, cost per brief, and latency. |
| Handoff | Failed checks, missing evidence, or exhausted budgets produce a limitation or human handoff. |
| Ownership | People own official causes, decisions, and board records. |

**Build 5, section wrap.** The existing full-screen yours anatomy diagram. Keep the Model box's “yours to select” badge.

## Layout and visual

- Keep narrative number 19 on all five screens. The first four retain the kicker and mini-map; the full-screen yours diagram keeps its standalone composition.
- Follow design brief §22. Use four decision rows for this area, with two-line explanations.
- Keep the quote at the established display size. Put the attribution beneath the image to accommodate the longer quotation. Use `internal/illustrations/operating-observability.png` on the quote screen only.
- Keep the FRB agreement as a native editable table.
- All content appears immediately. Replace each title and body on hard cuts. No pitfall footer, capability triangle, or internal reveal.
- Preserve `internal/renders/map-yours.png` and source 19b for the closing diagram.

## Talk track

[0:00] Build 1, quote. **“The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe.”** Guillermo Rauch, quoted in Datadog's report. **The owner needs evidence of what the system actually did.**

[0:20] Build 2, decisions. Four decisions. First, what may the system access and do? **Enforce identity, scope, and permitted destinations outside the model.** Start with least privilege and explicit approval requirements. This includes reads and outbound communication.

[0:40] Second, what must you observe? Trace model calls, tools, and outcomes. **Measure quality, cost per completed task, and end-to-end latency.** A successful request log alone does not explain whether the user's task was completed correctly.

[1:00] Third, when should it stop or hand off? Set enforceable budgets and failure responses. Guardrails include validation, sandboxing, and limits on consequential actions. Stop or escalate when a limit or check fails, with enough context for a person to take over.

[1:20] Fourth, who owns approvals and incidents? Assign an accountable operator and review process. Keep audit trails and a rollback path. Governance includes deciding who may approve changes and who responds when behavior departs from the intended use.

[1:40] Build 3, maintenance. Integrations change the combined system. **Private data, untrusted content, and external communication can combine into an exfiltration path.** Simon Willison calls this the lethal trifecta. An internal attachment can carry untrusted instructions, and a web fetch can communicate externally. Break or constrain that path. It describes one threat model.

[2:04] Changes can move quality, cost, and latency. Inspect failed traces and feed them back into evals. Restrict trace access. Permissions and policies change too, so recheck access, approvals, alerts, and handoff.

[2:23] **A probabilistic filter is insufficient as the sole security boundary.** The pitfall is **the lethal trifecta, assembled one integration at a time.** Review the combined capabilities as the system grows.

[2:40] Build 4, application. Here is an illustrative operating agreement for the FRB system. Enforce access to authorized records and permitted export destinations outside the model.

[2:53] Trace exact revisions, decisions, checks, and exports. Restrict trace access. Monitor quality, freshness, parsing and tool failures, cost per completed brief, and latency.

[3:08] Failed checks, missing evidence, or exhausted budgets produce an explicit limitation or human handoff. **People own official causes, decisions, and board records.**

[3:25] **When you are the owner, its answer is your answer.**

[3:35] Build 5, section wrap. **Every box is something you can engineer, because most of it is engineering you already know how to do.** The six areas gave us decisions, maintenance responsibilities, and one applied example. Now we can connect them to the skills you already have and the ones you need to build.

[4:00] Advance to slide 20, the Section 3 divider.

Cut first: the spoken metrics inventory and repeated governance detail. Never cut outside-model access enforcement, the capability risk and its scope, operating limits and handoff, human ownership of official records, or the yours diagram. Incident details and scoped legal material remain research backup.

## Sources

- Guillermo Rauch, quoted in Datadog's “State of AI Engineering,” 2026. Research §6 in `research/section-2.md`. Attribution checked September 15, 2026.
- Willison, June 2025; OWASP, 2025 and 2026; OpenTelemetry. Research §6. The trifecta describes an exfiltration path, not comprehensive safety.
- OWASP authorization and MCP security requirements. Research §3.
- Illustrative FRB operating agreement, Research §0 and §6. `internal/frb-running-example.md` fixes human ownership, trace contents, and access/export boundaries.
- Conceptual image generated with the built-in imagegen tool. Prompt and provenance: `internal/illustrations/README.md`.

## Open items

- Review Operating it and the complete Section 2 sequence.
