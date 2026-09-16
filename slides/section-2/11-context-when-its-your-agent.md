# Slide 11: Context and knowledge, When you are the owner

Beat 2.2 Context and knowledge, second part. Section 2. Time 3:00 of the beat's 3:30; slide 10 took 0:30. Four static screens: quote 0:20, decisions 1:05, maintenance 0:50, application 0:45. Three advances, all hard cuts.

## On the slide

**Kicker throughout:** Context and knowledge · When you are the owner

**Build 1, quote.** No additional title.

“Context, therefore, must be treated as a finite resource with diminishing marginal returns.”

Anthropic
Effective context engineering for AI agents, September 2025

Conceptual illustration: selected information inside a limited working space.

**Build 2, decisions.** Title: The context decisions you own

| Decision | Impact and starting approach |
|---|---|
| What belongs in the next step? | Instructions, task state, retrieved knowledge. Choose retrieval for the data and task. Start with what the next step needs. |
| What should persist or be refreshed? | Keep durable facts and constraints. Summarize or discard what is no longer needed. Refresh information as its sources change. |
| Which sources and access scope? | Keep source locations and revisions. Limit retrieval to the user's authorized scope. Enforce access outside the model. |

**Build 3, maintenance.** Title: Living with context choices

- **Freshness:** New records can make retrieved passages stale. Refresh retrieval when source versions change.
- **Context growth:** Summaries can lose constraints as sessions grow. Retain decisions and unresolved questions.
- **Boundaries:** Memory or retrieval can cross access boundaries. Recheck access and preserve provenance.

Stable prefixes can help caching. Correctness and access take priority.

**Pitfall:** adding instead of curating.

**Build 4, application.** Title: A starting context for the FRB brief

Illustrative proposed context.

Two source excerpts:

- FRB-042-BRF r1 · slide 6 · preliminary: “Bearing wear is a possible cause.”
- FRB-042-MIN r2 · §3, paragraph 2 · later minutes: “Cause remains unresolved. Inspect the bearing before assigning a cause.”

Beside the excerpts:

- **Select:** Relevant passages, with revisions and source locations.
- **Retain:** Unresolved cause. Inspection required.
- **Refresh:** Update sources and recheck access before finalizing the brief.

## Layout and visual

- Keep narrative number 11, kicker, and mini-map on all four screens. Each content screen has its own title.
- Follow design brief §18, reusing the Models quote, decision-row, and maintenance hierarchy.
- Quote and attribution remain editable text. Use `internal/illustrations/context-selection.png` on the quote screen only.
- The FRB screen uses native source excerpts and decision annotations. Keep document IDs, revisions, and source locations attached to their passages. The minutes and briefing are different documents.
- All content appears immediately. Each advance replaces the title and body with a hard cut. No blank opening state, footer band, or internal reveal.
- General owner screens contain no FRB details.

## Talk track

[0:00] Build 1, quote. **“Context, therefore, must be treated as a finite resource with diminishing marginal returns.”** That is Anthropic's framing. **The owner chooses what the model sees at each step.** A larger window does not make every piece of information useful.

[0:20] Build 2, decisions. First, what belongs in the next step? Instructions, task state, and relevant knowledge. **RAG retrieves relevant external information and supplies it to the model.** File reads, keyword search, embeddings, and hybrid retrieval are methods chosen for the data and task.

[0:43] Second, what should persist or be refreshed? Keep facts and constraints that still matter. Compaction summarizes a conversation. Persistent memory can carry information across sessions. Decide what to retain, what to discard, and when to refresh sources.

[1:03] Third, which sources and access scope? **Keep source locations and revisions. Enforce the user's authorized scope outside the model.** Retrieval should supply evidence that the system is allowed to use and that the engineer can trace back to its source.

[1:25] Build 3, maintenance. Records change, so retrieved passages can become stale. Sessions grow, and a summary can lose a constraint. Memory can expose information across an access boundary. Refresh retrieval, test what compaction preserves, and keep the provenance. Recheck representative cases when sources or policies change.

[1:49] Stable prompt prefixes can help caching. **Correctness and access take priority over cache savings.** The common pitfall is **adding instead of curating**: more instructions, more retrieved text, and more history without deciding what still belongs.

[2:15] Build 4, application. Here is a proposed starting context for the FRB brief. Retrieve both relevant passages with their identities and locations. **The briefing names a possible cause. The later minutes leave it unresolved and require inspection.**

[2:32] Retain that unresolved status and inspection requirement in the working context and any summary. Refresh source versions and recheck access before finalizing the brief. Access checks stay outside the model. Missing or inaccessible evidence remains an explicit limitation.

[2:52] **Context is a budget, not a bucket.**

[3:00] Advance to slide 12.

Cut first: the spoken retrieval-method list and cache explanation. Never cut the quote, RAG definition, three decisions, outside-model access enforcement, headline pitfall, or the FRB distinction and source identities.

## Sources

- Anthropic, “Effective context engineering for AI agents,” September 2025. Research §2 in `research/section-2.md`. Exact quote checked in a browser September 15, 2026.
- Manus, July 2025, for the qualified caching principle. Research §2. Prices and ratios remain backup.
- Codex CLI and Devin CLI docs. Research §2.
- OWASP Excessive Agency, 2025, for downstream authorization enforcement. Research §3.
- Illustrative FRB excerpts and proposed design, Research §0 and §2. Exact identities in `internal/frb-running-example.md`. Invented teaching material, not primary evidence.
- Conceptual image generated with the built-in imagegen tool. Prompt and provenance: `internal/illustrations/README.md`.

## Open items

- Review this five-screen Context & Knowledge sequence before beginning Tools & Extensibility.
