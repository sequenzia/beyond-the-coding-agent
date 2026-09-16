# Section 2 content rework

Content reviewed September 15 and integrated September 16, 2026. [outline-v2.md](../outline-v2.md) and the numbered slide specs are now canonical. This directory retains the reviewed detail, [section review](section-review.md), [spoken pass](spoken-pass.md), [slide map](slide-map.md), and [numbering map](numbering-map.json) as supporting authoring records. The builder migration is complete. Rendering and native playback review validate the exported revision.

## Agreed direction

- Remove the separate "When you are the user" screens from all six areas when implementing the slides.
- Retire the paired user/owner structure and its headings in Section 2.
- Open each area with its quote.
- Develop five content headings after the quote: What is it? Why it matters. Key decisions and trade-offs. Common challenges and pitfalls. FRB use case as an applied example.
- Keep the connection to coding agents brief and place it within the definition.
- Treat those headings as content organization. Decide slide breaks after the content review.
- Allow Section 2 to grow during drafting. Existing area budgets and the 25:00 section budget are reference points, not drafting limits.
- Develop and discuss the Markdown before revising slide specifications, visible slide content, or the PowerPoint deck.
- Keep Models focused on data sensitivities, task fit and settings, cost and latency, routing, and model changes. Keep the trade-off explanation conceptual. Hosted versus self-hosted deployment and model adaptation are outside this pass.
- In Models, name CUI and ECI as audience-relevant constraints on eligible model services and environments. The FRB example explicitly assumes a corpus containing CUI/ECI and older, less capable approved model choices for the intended synthesis. This reflects presenter-supplied audience context. It is an illustrative constraint, not a universal model comparison or a real designation of the invented excerpts.
- In Verification and evals, briefly compare code checks, model graders, and expert review. Remove the personal story and its 1:00 reservation. The FRB check is the worked example. Final timing remains open.
- Rename the final area from Operating it to Production operations. The scope remains observability, guardrails, security, identity, governance, cost, latency, and accountable response.
- Keep Section 2 in the presenter-selected range of 25:00 to 29:00. The presenter may trim Sections 1 and 3 later. Do not compress Section 2 to make the previous whole-talk split fit. The final presentation/discussion split remains open, and rehearsal must validate delivery within the range.
- Combine What is it? and Why it matters? on one screen. Each area uses five screens: quote, definition and importance, decisions and trade-offs, challenges and pitfalls, and FRB application. The opening and closing anatomy diagrams remain separate compositions.

The published session remains 50 minutes. Section 2's working range is 25:00 to 29:00. Sections 1 and 3 retain their current content for now; any later cuts there are a separate pass. Reconcile the final presentation and Q&A split after those decisions.

## Working files and source of truth

Use one content file per area and the shared [content template](area-template.md). [Models](01-models.md), [Context and knowledge](02-context-and-knowledge.md), [Tools and extensibility](03-tools-and-extensibility.md), [Orchestration](04-orchestration.md), [Verification and evals](05-verification-and-evals.md), and [Production operations](06-production-operations.md) have been reviewed and accepted for this content pass. All six remain the detailed authoring references:

| Area | Working filename | Integrated placement |
|---|---|---|
| Models | `01-models.md` | Outline 2.1, Research §1, slides 8 through 12 |
| Context and knowledge | `02-context-and-knowledge.md` | Outline 2.2, Research §2, slides 13 through 17 |
| Tools and extensibility | `03-tools-and-extensibility.md` | Outline 2.3, Research §3, slides 18 through 22 |
| Orchestration | `04-orchestration.md` | Outline 2.4, Research §4, slides 23 through 27 |
| Verification and evals | `05-verification-and-evals.md` | Outline 2.5, Research §5, slides 28 through 32 |
| Production operations | `06-production-operations.md` | Outline 2.6, Research §6, slides 33 through 37 |

The [section review](section-review.md) covers the six areas together. The [spoken pass](spoken-pass.md) supplied the delivery selection now incorporated in the specs. The [slide map](slide-map.md) records the selected grouping and numbered compositions. Exact visible copy, talk tracks, source references, cut guidance, and rehearsal cues now live in `slides/`. The individual cues sum to a 27:00 reference inside the 25:00-to-29:00 range. They remain subject to rehearsal.

Research references in this directory mean [research/section-2.md](../../research/section-2.md). The shared application contract remains [internal/frb-running-example.md](../../internal/frb-running-example.md).

These files are incorporated supporting content, not a second permanent outline. Keep `outline-v2.md`, the numbered specs, and the evidence layer synchronized during subsequent work:

- Research holds full external quotes, dates, URLs, and verification markers.
- Working content and the outline use short-form citations and research section references.
- Add new claims to research before using them in content. Carry unresolved claims as `[verify]`, with the corresponding research verify item and outline closing verify-table entry when promoted.
- An existing `[primary]` marker records the earlier check. Reorganizing material does not count as a fresh source verification.
- Retained presenter-authored slots stay marked `[your story]` or `[you write]`. The evals story #2 slot has been removed from this rework.

## What each content file must resolve

### Opening quote

Identify the existing quote by source and research section. Explain what it introduces and the sentence that connects it to the definition. Keep exact wording and attribution in research. Reconsider a quote only if it no longer serves the area. The quote is the first future slide in that area.

### What is it?

Give a plain-language definition, then explain the mechanism just far enough for the later choices to make sense. Add one brief connection to a familiar coding-agent behavior. Avoid a command walkthrough or a replacement user-example section.

### Why it matters

Describe the product outcome this responsibility changes and what can go wrong when it is neglected. Distinguish this from a definition and from a list of decisions. Make the consequence understandable before introducing implementation options.

### Key decisions and trade-offs

For each decision, record the alternatives, the benefit and cost of each approach, a conditional starting point, and evidence that would change that choice. Keep detailed supporting material in the file even when it may later move to backup. Do not invent a fixed number of decisions to make the areas look uniform.

### Common challenges and pitfalls

Connect each challenge to a decision: how the problem appears, how to investigate it, and what could prevent recurrence. Preserve ongoing maintenance here, including changes after deployment. Select one headline pitfall for the Section 3 recap.

### FRB use case as an applied example

Apply the preceding decisions to the same invented FRB request. State the proposed design, rationale, expected behavior, relevant failure, and evidence that would make us revise the design. Each area adds a distinct lesson. Use the shared packet without inventing results, model scores, or presenter experience.

### Authoring notes

Record the spoken takeaway, essential points, optional depth, source references, unresolved questions, and bridge to the next area. Preserve cut guidance without fitting the draft to the old timings. Add timed talk tracks after the content and pacing review.

## Area-by-area development plan

| Area | Definition and brief coding-agent connection | Main content to develop | Distinct FRB application | Discussion focus |
|---|---|---|---|---|
| Models | The model's role inside the harness. Briefly connect to choosing a model for a coding task. | Data sensitivities and eligible model environments first, then task fit, reasoning settings, quality with cost and latency, routing, and model changes. | Work within the assumed CUI/ECI restrictions and capability limits of approved models. Evaluate the useful scope they can support. Preserve possible versus established causes. | Conceptual depth is agreed. The FRB example makes the sensitive-data constraint and older, less capable approved options explicit. |
| Context and knowledge | Information supplied for the next model step. Connect to repository instructions, files, and test output. | Context versus prompts, retrieval and RAG, memory versus compaction, relevance, freshness, provenance, access, and cache trade-offs. | Keep the preliminary briefing and later minutes distinct. Preserve the unresolved cause through retrieval and summarization within the CUI/ECI processing constraints. | Accepted: brief keyword, semantic, and hybrid comparison. Memory and compaction remain supporting concepts. |
| Tools and extensibility | Operations the model can request and the contracts that code enforces. Connect to a coding agent reading files, running checks, or accessing a service. | Capability selection, granularity, descriptions and schemas, result design, discovery, validation, authorization, and explicit failure outcomes. | Work through the export-cited-brief contract, including allowed destination, exact checked content, and confirmed, failed, or unknown outcomes. | Accepted: brief MCP explanation and the focused export contract. |
| Orchestration | How execution chooses, sequences, and coordinates steps. Connect to the coding agent's action/check/retry loop. | Predefined workflows versus model-selected actions, delegation, completion, persisted state, stopping, retries, resume, and coordination cost. | Retrieve, inspect, compare, reconcile, verify, export. Explain the verification gate and safe handling of an uncertain export outcome. | Accepted: brief multi-agent contrast, with emphasis on execution control and recovery. |
| Verification and evals | Checks before accepting an output, and measurement across cases and repeated trials. Connect to running repository checks. | Success criteria, direct checks, expert judgment, calibrated graders, representative coverage, consistency, error analysis, and ongoing regression evaluation. | A reference exists but does not support the answer. Separate citation existence from semantic support. | Agreed: brief comparison of code checks, model graders, and expert review. Remove the personal story and its 1:00 reservation. |
| Production operations | Keeping the deployed system observable, controlled, and accountable. Connect briefly to permissions, execution limits, and usage information. | Identity and scope, traces and metrics, guardrails and security, budgets, handoff, approvals, incidents, changes, and governance. | An operating agreement for authorized records, protected traces, export destinations, quality, cost, latency, and human decision authority. | Accepted name and balance of observability, security, operating limits, and accountable response. |

Opening quote candidates stay with their current areas: Osmani, April 2026 (§1); Anthropic, September 2025 (§2); Anthropic, September 2025 (§3); Anthropic, December 2024 (§4); Husain and Shankar, September 2026 update (§5); Rauch, quoted by Datadog, 2026 (§6). No new quotation research is required merely to reorder them.

## Boundaries between areas

Use these boundaries to avoid repeating the same explanation six times:

- Models establishes eligibility for the data, then selects the model configuration and any model routing. Orchestration decides how work is divided and coordinated.
- Context selects and preserves information. Tools specifies the operations and their inputs and results.
- Tools enforces each operation's contract. Orchestration decides when to call, repeat, stop, or recover.
- Verification and evals establishes evidence of acceptable behavior. Production operations connects that evidence to monitoring, response, and change management.
- Cost and latency recur at distinct levels: model configuration, context and caching, execution budgets, and completed production tasks.
- Security appears at the relevant boundary. Production operations explains the combined system risk and accountable response.

The map still opens Section 2. The closing anatomy diagram still brings the responsibilities together. Their narration will need to match the new structure.

## Review sequence

1. **Set the working format.** Draft Models using the shared headings. Discuss breadth and depth with the presenter before treating that file as the pattern for the other areas.
2. **Develop the six areas in order.** Draft one area, identify its material choices, ask focused questions, and incorporate the answers. Keep settled decisions and unresolved questions visible in each file.
3. **Review the full content.** Check published-topic coverage, overlap, terminology, quote fit, evidence, FRB continuity, headline pitfalls, and transitions. Confirm that all six files explain what, why, choices, failure modes, and application.
4. **Shape the delivery.** Estimate spoken time from the developed material. Choose essential and optional material. Reconcile the full session budget without the removed evals story reservation. Retain any agreed presenter-authored material elsewhere in the talk. Decide slide breaks and narrative numbering from the content.
5. **Integrate the Markdown.** Update research as needed, the current outline and its checks, the slide specifications, and related documentation. The six removed user screens have no replacements that merely rename the same standalone examples.
6. **Implement the presentation.** After the Markdown review is complete, update the reusable builder and any changed design rules. Rebuild, inspect editing views and presentation states, and validate native PowerPoint playback.

No PowerPoint build is part of the current planning pass.

## Integration checklist for the later implementation

| Location | Required reconciliation |
|---|---|
| `README.md` | Focus description, Section 2 pattern, file map if needed, final timing and slide counts. Preserve the published presentation description. |
| `outlines/outline-v2.md` | Replace the pattern and Section 2 beats. Remove evals story #2, its time reservation, and its entries in the rehearsal and presenter-material lists. Rename the final area Production operations in the agenda, map narration, beats, and recap. Update timing tables, section checks, whole-talk checks, and the verify table. Keep the fixed beat format. |
| Section 1 specs | Review slides 3 and 4 for any obsolete explanation of the owner label. Update slide 5's pattern and agenda and slide 6's transition if needed. Preserve the using-AI versus engineering-AI thesis. |
| Section 2 specs | Retire the six old user screens at current narrative numbers 8, 10, 12, 14, 16, and 18. Remove the evals personal-story cue, hold, and 1:00 reservation from the current slide 17 spec. Replace the old paired structure with the agreed content. Reconcile filenames, numbering, talk tracks, and build assignments together. |
| Section 3 specs | Keep the six recap pitfalls word for word with Section 2. Reconcile references to the preceding section, the roadmap, and final numbering. |
| `research/section-2.md` | Add evidence for any new claims. Update active teaching notes and old structural references without losing useful backup or source qualifications. |
| `internal/frb-running-example.md` | Preserve the invented packet and contracts. Update its slide map. Review any requested changes to the application in this shared reference first. |
| `style/design-brief.md` | Replace obsolete user/owner composition rules after deciding slide organization. Update the final area's display name to Production operations, including headers and recap labels. Keep visual values centralized here. |
| `internal/deck/author.mjs` | Update visible text, compositions, notes references, click assignments, mini-maps, and narrative numbers from the agreed specs. |
| Build validation and documentation | Derive the new authored and expanded counts from the final design. Update count-dependent assertions and maps. Do not preserve the old 26/28/56 counts by forcing the content into them. Follow `internal/deck/README.md`. |
| Repository guidance | Reconcile any persisted guidance describing paired slides, fixed area budgets, or the old five-screen structure with this revision. The presenter's new directions govern this work. |
| Deck outputs | Build a new filename. Preserve every older deck in `output/archive/` and keep moved links accurate. |

## Protected content

- Every topic in the published description remains covered.
- Coding-agent references remain brief. Codex CLI and Devin are the named examples if a product name helps. No new product tour is implied.
- The six areas, opening map, and concluding anatomy diagram remain the proposed section sequence.
- The evals personal story and its 1:00 reservation are removed by presenter decision. Do not invent a replacement. Other presenter-authored slots elsewhere in the talk remain outside this change.
- FRB material remains visibly illustrative. People own official causes, decisions, and board records.
- The FRB corpus's CUI/ECI restrictions and approved-model capability limits are explicit design assumptions. Carry them into later area drafts, including model-based evaluation and operation. No stronger unapproved fallback receives the restricted records.
- The hypothesis, unresolved cause, and inspection decision remain distinct. Keep document IDs, revisions, and source locations accurate.
- Keep research qualifications. No unverified benchmark, product fact, forecast, or secondary report becomes established evidence during rewriting.
- Keep takeaways spoken. Decide visible titles when writing slide specs.

## Current status and next discussion

Agreed: remove standalone user screens, retire the paired labels, open with quotes, develop content headings before slides, and allow draft timing to grow. Models covers data sensitivities, task fit and settings, cost and latency, routing, and model changes. Its trade-offs stay conceptual. CUI and ECI are audience examples in the general explanation and explicit constraints in the FRB scenario. The scenario assumes older, less capable approved model choices and asks what useful scope they can support.

Reviewed and integrated: all six areas. The outline and 45 numbered specs implement the new structure. Section 2 is 7 through 38; Section 3 is 39 through 45. Slide 42 has the updated Production operations label and exact pitfall sentences. The evals personal story and its reservation are removed from the active outline and specs.

Prepared: 32 Section 2 specs, a 27:00 rehearsal reference within the selected range, numbering metadata, and design brief §23. The authoring target is 45 narrative slides and 46 compositions. The validated expansion preserves 56 physical slides and 57 states. Sections 1 and 3 retain their content except necessary numbering, labels, and cross-references. Final whole-talk timing remains open.

Next: rehearse the revised deck, then address the presenter’s later trims to Sections 1 and 3. Preserve Section 2’s 25:00-to-29:00 range. The integrated builder renders full editing views and presentation states and archives older decks after successful builds.
