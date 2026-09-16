# Slide 13: Tools and extensibility, When you are the owner

Beat 2.3 Tools and extensibility, second part. Section 2. Time 2:35 of the beat's 3:00; slide 12 took 0:25. Four static screens: quote 0:20, decisions 0:55, maintenance 0:40, application 0:40. Three advances, all hard cuts.

## On the slide

**Kicker throughout:** Tools and extensibility · When you are the owner

**Build 1, quote.** No additional title.

“Agents are only as effective as the tools we give them.”

Anthropic
Writing effective tools for agents, September 2025

Conceptual illustration: a clear interface connecting two different systems.

**Build 2, decisions.** Title: The tool decisions you own

| Decision | Impact and starting approach |
|---|---|
| Which capabilities need tools? | Choose operations that serve the task. Test granularity and discovery with real use. Begin with a small, distinct tool set. |
| What is the tool's contract? | Define names, inputs, results, and errors. Return useful context with stable IDs. Evaluate descriptions with real tasks. |
| What may run, and under which rules? | Apply least privilege to reads and writes. Validate inputs and enforce authorization in code. Require approval where policy calls for it. |

**Build 3, maintenance.** Title: Living with tool choices

- **Contract changes:** Descriptions, schemas, and behavior can drift. Update and evaluate them together.
- **Tool growth:** Overlapping tools make selection harder. Prune duplicates and load definitions when needed.
- **Failures:** Return an explicit result, error, or unknown outcome. Keep callers from mistaking failure for success.

A description guides the model. Code enforces the contract.

**Pitfall:** copying the API surface without evaluating task fit.

**Build 4, application.** Title: A tool contract for the FRB brief

Illustrative Export cited brief tool.

| Contract | Export cited brief |
|---|---|
| Input | Checked draft, citations, destination. |
| Checks | Enforce access and permitted destination. Require source IDs, revisions, and locations. |
| Output | Brief matching the checked draft, with citations and uncertainty intact, plus an export receipt. |
| Failure | Explicit failure or incomplete result. Do not report an unconfirmed export as complete. |

## Layout and visual

- Keep narrative number 13, kicker, and mini-map on all four screens. Give each content screen its own title.
- Follow design brief §19, reusing the established quote, decision-row, and maintenance hierarchy.
- Quote and attribution remain editable text. Use `internal/illustrations/tools-interface.png` on the quote screen only.
- Keep the FRB contract as a native editable table. Background parsing/indexing belongs in the talk track, separate from the agent-facing export operation.
- All content appears immediately. Replace each title and body on a hard cut. No blank opening state, pitfall footer, or internal reveal.
- General owner screens contain no FRB details.

## Talk track

[0:00] Build 1, quote. **“Agents are only as effective as the tools we give them.”** That is Anthropic's framing. **A tool is a contract between code and a model caller.** Its description, inputs, and results affect whether the caller can use it well.

[0:20] Build 2, decisions. First, which capabilities need tools? **Choose operations that serve the task.** Evaluate granularity and discovery. Begin with a small set whose tools have distinct purposes.

[0:36] Second, what is the contract? Names, inputs, results, and errors. Return useful context alongside stable IDs. Evaluate descriptions with real tasks. A clear name does not replace a precise input schema.

[0:54] Third, what may run? **Enforce validation and authorization in code.** Least privilege applies to reads and writes. Require approval where policy calls for it. A model recommendation does not establish permission.

[1:15] Build 3, maintenance. Descriptions, schemas, and behavior can drift. Update and evaluate them together. Prune overlapping tools and load definitions when needed. Return explicit results, errors, or unknown outcomes. Recheck permissions as capabilities change.

[1:36] **A description guides the model. Code enforces the contract.** The recurring pitfall is **copying the API surface without evaluating task fit.** A convenient endpoint wrapper still needs to earn its place in the task.

[1:55] Build 4, application. Background services parse and index the FRB records. **Export cited brief is the agent-facing operation.** It accepts a checked draft, citations, and destination. Code enforces access and permitted destinations and requires source IDs, revisions, and locations.

[2:12] The export must match the checked draft, with citations and uncertainty intact. Return a receipt. Make failed, incomplete, or unconfirmed exports explicit. The full search and retrieval tool inventory remains in the authoring reference.

[2:25] **Design tools for a caller that reads the description every time and can still get it wrong.**

[2:35] Advance to slide 14.

Cut first: the spoken discovery detail and background format inventory. Never cut the quote, the three decisions, outside-model authorization, headline pitfall, background/agent separation, or the export's content and failure contract.

## Sources

- Anthropic, “Writing effective tools for agents,” September 2025. Research §3 in `research/section-2.md`. Exact quote checked in a browser September 15, 2026.
- Anthropic advanced tool use, November 2025; MCP Security Best Practices, July 2026; OWASP Excessive Agency, 2025. Research §3. Benchmarks and protocol details remain backup with their qualifications.
- Illustrative FRB export and result contract, Research §0 and §3, with the full tool inventory in `internal/frb-running-example.md`.
- Conceptual image generated with the built-in imagegen tool. Prompt and provenance: `internal/illustrations/README.md`.

## Open items

- Review this five-screen Tools & Extensibility sequence before beginning Orchestration.
