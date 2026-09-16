# Slide 15: Orchestration, When you are the owner

Beat 2.4 Orchestration, second part. Section 2. Time 3:00 of the beat's 3:30; slide 14 took 0:30. Four static screens: quote 0:20, decisions 1:05, maintenance 0:50, application 0:45. Three advances, all hard cuts.

## On the slide

**Kicker throughout:** Orchestration · When you are the owner

**Build 1, quote.** No additional title.

“we recommend finding the simplest solution possible, and only increasing complexity when needed.”

Anthropic
Building effective agents, December 2024

Conceptual illustration: a simple path beside optional branching complexity.

**Build 2, decisions.** Title: The orchestration decisions you own

| Decision | Impact and starting approach |
|---|---|
| Who chooses the next step? | Use code for known paths and required checks. Let the model choose where judgment helps. Start with a bounded workflow. |
| When should work be delegated? | Separate work that can be done independently. Define handoff inputs and expected results. Add workers only when measured gains justify it. |
| How does execution stop or recover? | Define completion checks and stopping limits. Save state needed to resume. Bound retries and provide a human handoff. |

**Build 3, maintenance.** Title: Living with orchestration choices

- **Workflow changes:** New branches can bypass required checks. Recheck paths and protect acceptance criteria.
- **Handoffs:** Workers can lose context or return conflicting results. Keep evidence, uncertainty, and ownership explicit.
- **Recovery:** Retries can repeat an action that already succeeded. Persist progress and confirm effects before retrying.

Set action, token, and end-to-end latency limits.

**Pitfall:** multi-agent before a workflow was tried.

**Build 4, application.** Title: A bounded workflow for the FRB brief

Illustrative starting design: predefined steps.

1. Retrieve the packet.
2. Inspect evidence.
3. Compare cases.
4. Reconcile findings.
5. Verify the brief.
6. Export.

Export only after checks pass. At a limit, stop or hand off.

Save steps and revisions. Before retrying an export, check its receipt and recheck freshness and access.

## Layout and visual

- Keep narrative number 15, kicker, and mini-map on all four screens. Give each content screen its own title.
- Follow design brief §20, reusing the established quote, decision-row, and maintenance hierarchy.
- Quote and attribution remain editable text. Use `internal/illustrations/orchestration-path.png` on the quote screen only.
- The FRB sequence uses six editable numbered steps in two columns, ordered across each row. Put the verification gate and resume rule below the sequence.
- All content appears immediately. Replace each title and body on a hard cut. No blank opening state, pitfall footer, internal reveal, or audience pause.
- General owner screens contain no FRB details.

## Talk track

[0:00] Build 1, quote. **“we recommend finding the simplest solution possible, and only increasing complexity when needed.”** That is Anthropic's recommendation. **Begin with the simplest execution design that meets the task.** More autonomy or more workers must earn their place through measured benefit.

[0:20] Build 2, decisions. First, who chooses the next step? **Use code for known paths and required checks.** Let the model choose where judgment helps. A bounded workflow is a useful starting point. A model's proposed plan does not enforce the execution rules.

[0:42] Second, when should work be delegated? Separate tasks that can be done independently. Define handoff inputs and expected results. Add workers only when measured gains justify the coordination. Model selection was the earlier area; this is about dividing and coordinating the work.

[1:03] Third, how does execution stop or recover? **Define completion checks, stopping limits, saved state, bounded retries, and human handoff.** Gather context, take action, verify, and repeat only within those limits.

[1:25] Build 3, maintenance. New branches can bypass checks. Recheck paths and protect acceptance criteria. Handoffs can lose context or produce conflicting results. Keep evidence, uncertainty, and ownership explicit. A timed-out action might have succeeded, so inspect the result before repeating it.

[1:48] **Set action, token, and end-to-end latency limits.** Save progress needed for recovery. The pitfall is **multi-agent before a workflow was tried.** More coordination has to earn its cost and complexity.

[2:15] Build 4, application. **Retrieve the packet, inspect evidence, compare cases, reconcile findings, verify the brief, export.** Begin with these predefined steps for the illustrative FRB system.

[2:29] Export only after checks pass. At a limit, return an explicit limitation or hand off. Save steps and exact revisions. Before retrying an export, inspect the receipt and recheck freshness and access.

[2:44] Add comparison workers only after measured benefit. They use authorized internal records and return evidence and uncertainty.

[2:53] **The loop is where autonomy gets its limits. Start with the workflow.**

[3:00] Advance to slide 16.

Cut first: the spoken coordination detail and comparison-worker reminder. Never cut the quote, three decisions, enforced limits, headline pitfall, verification gate, or safe retry rule. Deliver the FRB sequence directly, without an audience pause. Faulty or obsolete tests may change through review; protect the acceptance criteria.

## Sources

- Anthropic, “Building effective agents,” December 2024. Research §4 in `research/section-2.md`. Exact quotation checked September 15, 2026.
- Anthropic multi-agent research, June 2025; long-running harnesses, November 2025; 12-Factor Agents. Research §4. Benchmarks, patterns, failure taxonomy, and forecast remain backup with their original qualifications.
- Illustrative FRB workflow and retry rules, Research §0 and §4. `internal/frb-running-example.md` fixes the source, uncertainty, and authorization boundaries. Slide 9 owns model-selection decisions; this area owns work decomposition and coordination.
- Conceptual image generated with the built-in imagegen tool. Prompt and provenance: `internal/illustrations/README.md`.

## Open items

- Review this five-screen Orchestration sequence before beginning Verification and Evals.
