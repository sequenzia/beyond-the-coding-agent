# Section 2 review and delivery estimate

Review completed September 15, 2026. All six area content drafts were reviewed with the presenter. After this estimate, the presenter selected 25:00 to 29:00 as Section 2's working range and may trim Sections 1 and 3 later. Integration update, September 16: the current outline and numbered specs now implement the accepted 45-slide narrative, with a 27:00 Section 2 rehearsal reference. The evidence and estimate below record the content-review pass. The builder has also been migrated; the final presentation/discussion split remains open.

## Review result

The six areas cover the Section 2 topics in the published description. The FRB example remains consistent across the files. The main delivery problem is repetition and the amount of supporting explanation, rather than a missing topic.

The detailed files contain approximately 13,500 words including authoring notes and sources. The five teaching sections alone contain approximately 8,748 words. These are development materials, not a script to read in full.

The provisional spoken pass contains approximately 3,131 spoken words, including the six selected quotations, takeaways, opening map, and closing wrap. At the planning assumptions below, **Section 2 is approximately 25:00 to 29:00**. With the current 5:00 opening and 5:00 closing sections, the presentation would be approximately **35:00 to 39:00**, leaving roughly **11:00 to 15:00** in the 50-minute session.

This is a word-count estimate, not a timed rehearsal. The 120-to-140-words-per-minute range and pause allowance are planning assumptions, not measured presenter behavior or cited speaking-rate standards.

## Coverage of the published description

| Required topic | Primary place in the revised section | Result |
|---|---|---|
| Foundation-model products and agentic systems | Map, Models, Orchestration; the central thesis remains in Section 1 | Covered without expanding into model training |
| Context engineering and retrieval | Context and knowledge | Definition, brief keyword/semantic/hybrid comparison, retained state, freshness, provenance, access |
| Agent tools and extensibility | Tools and extensibility | Capability selection, granularity, contract design, MCP's connection role, execution rules |
| Harness design and orchestration | Map and Orchestration, with the other areas showing harness responsibilities | Code-controlled prerequisites, model-selected actions, bounded execution, brief delegation contrast, recovery |
| Evaluations and verification | Verification and evals | Success criteria, code/model/expert graders, representative cases, repeated trials, error analysis |
| Observability | Production operations | Observable actions linked to sources, checks, outcomes, and resource use |
| Guardrails | Tools, Orchestration, Production operations | Validation, access enforcement, execution limits, approval rules, handoff |
| Security | Model eligibility; Context and Tools boundaries; Production operations | CUI/ECI scenario, authorized processing, combined-capability risk, protected operational evidence |
| Cost and latency | Models, Context, Orchestration, Production operations | Completed-task comparison, context/caching, work budgets, production monitoring |
| Prototype success does not establish readiness | Models, Evals, Production operations | Capability limits, representative evidence, failure handling and accountable response |
| Traditional tests remain necessary but are insufficient alone | Verification and evals | Interface/reference checks can pass while the conclusion is unsupported |
| Evaluation continues after deployment | Verification and evals, Production operations | Production failures feed the suite; changes trigger reevaluation and monitoring |
| Existing skills, new competencies, and further learning | Section 3, reached through the closing map | Preserved outside this Section 2 rework; reconcile its references during integration |

## Where repeated material belongs

The detailed drafts keep explanations that help authoring and questions. The spoken pass gives each repeated principle a primary home and uses later mentions for a distinct consequence.

| Shared idea | Full explanation | Later application |
|---|---|---|
| Approved processing of sensitive data | Models establishes eligibility and the FRB assumption | Context covers preparation services; Tools covers actions/destinations; Evals covers graders; Production operations covers traces and response |
| Older, less capable approved options | Models, as audience context and an illustrative deployment constraint | Later areas inherit the constraint without repeating the full caveat or implying that the harness guarantees a solution |
| Possible cause versus established finding | Context shows the two source documents | Models names the quality requirement; Evals demonstrates the explicit false conclusion and failed support check |
| Exact checked content | Tools defines the export contract | Orchestration enforces the prerequisite; Evals determines what the check must establish |
| Confirmed, failed, and unknown action outcomes | Tools defines the result categories | Orchestration teaches recovery; Production operations identifies the accountable responder |
| Cost per completed task and latency | Models introduces the comparison | Orchestration limits work; Production operations monitors it. The Context cache detail stays short |
| Error analysis | Verification and evals | Earlier areas refer to measured failures; Production operations closes the feedback loop |
| Human authority over official FRB records | Map introduces the boundary | Production operations closes on accountable human responsibility |

The spoken pass defers detailed inventories, repeated re-evaluation triggers, long descriptions of alternative implementations, and source qualifications that need not be spoken in full. Material qualifications remain, including the illustrative status, model-eligibility scope, lack of measured FRB results, and limits of the security threat model.

## FRB continuity check

- The same request remains: research FRB-042, compare similar shutdowns, and export a cited brief.
- The cases and evidence are invented. CUI/ECI is an explicit deployment assumption, not a real designation of the excerpts.
- Older, less capable approved model choices are presenter-supplied audience context applied to the example. Model age alone is not used to establish task performance or context-window size.
- FRB-042-BRF r1, August 19, 2026, slide 6 is the preliminary hypothesis. FRB-042-MIN r2, August 22, 2026, §3 paragraph 2 leaves the cause unresolved and calls for inspection. The files are distinct documents.
- FRB-017 and FRB-031 keep their own established findings. Similar symptoms and duplicate records do not establish FRB-042's cause.
- The explicit false conclusion and reference-PASS/support-FAIL check are concentrated in Evals. Earlier mentions prepare the requirement without repeating the demonstration.
- Export preserves the exact checked draft. Changed content needs renewed checks. Unknown export outcomes remain unknown until evidence establishes otherwise.
- Every processing path, including optional workers, graders, and operational evidence, inherits the approved-scope constraint.
- A capability limit or exhausted budget does not lower the evidence requirement or authorize a stronger ineligible fallback.
- Official causes, decisions, and board records remain human responsibilities.

The full identities and locations remain in the source packet and area drafts. Later slides should display those exact references even where the spoken pass abbreviates them.

## Quote and evidence check

All six opening quote selections remain connected to their area. The research file records direct verification for their wording and attribution. This review did not re-fetch them or change their verification status.

| Area | Selection | Qualification retained in delivery |
|---|---|---|
| Models | Osmani, April 2026, Research §1 | Attributed engineering experience, not a universal benchmark result |
| Context and knowledge | Anthropic, September 2025, Research §2 | Finite-context framing without a universal size threshold |
| Tools and extensibility | Anthropic, September 2025, Research §3 | Tool-design principle, not a cure for all system failures |
| Orchestration | Anthropic, December 2024, Research §4 | Simplicity as a starting principle, with complexity justified by the task |
| Verification and evals | Husain and Shankar, September 2026 update, Research §5 | Practitioner judgment; no universal time-allocation rule |
| Production operations | Rauch in Datadog, 2026, Research §6 | Attributed perspective; Datadog is the publisher |

No unverified benchmark, current model ranking, forecast, incident statistic, or new compliance assertion is promoted into the spoken pass. The 20-to-50-case recommendation remains supporting material in the Evals draft rather than a main-stage requirement. No full external quotation is copied into the spoken outline; its cues refer to research.

## Headline pitfalls and transitions

The six pitfall sentences in the reviewed area files match the current Section 3 recap text. Integration preserved that exact wording in slide 42 and changed the final area's label to Production operations.

| Area | Canonical pitfall sentence |
|---|---|
| Models | Choosing and changing models without testing them on your task. |
| Context and knowledge | adding instead of curating. |
| Tools and extensibility | copying the API surface without evaluating task fit. |
| Orchestration | multi-agent before a workflow was tried. |
| Verification and evals | a generic judge instead of error analysis. Trusting the success claim without checking the result. |
| Production operations | the lethal trifecta, assembled one integration at a time. |

The transitions form one chain: model selection depends on the supplied information; that information arrives through tool interfaces; those operations need execution control; execution gates need defined checks; production operation needs evidence and accountable response. The closing anatomy diagram connects those responsibilities to Section 3's skills discussion.

Codex CLI and Devin are named once in the provisional map narration. The brief connections inside each area remain conceptual, without restoring any standalone user screen. The quote remains first within every area.

## Timing method

For the detailed-material inventory, count the five teaching sections from What is it? through the FRB application. Exclude headings, source lines, area-boundary notes, table rules, and material after Delivery notes. Strip Markdown formatting. This still measures developed material, not ready-to-speak prose. Its roughly 8,748 words would take about 63:00 to 73:00 at the assumed rates before the opening quotations and diagram walkthroughs.

For the provisional spoken pass, count only the Say text and takeaway of each beat. Exclude inline topic labels, quote cues, source lines, and authoring metadata. Add the exact words of the six selected quotes from research. The quote words are therefore included once. Whitespace-based counting treats an ID or a hyphenated term as one item; this is sufficiently precise for a planning estimate.

Apply 120 to 140 spoken words per minute. Add a provisional 2:30 allowance across the section for diagram inspection, quote settling, reading the worked example, pauses, and transitions. The draft text already includes the spoken introductions and transitions, so the allowance covers non-speaking time only. Final slide breaks may change that allowance.

| Beat | Spoken words, including quote/takeaway | Non-speaking allowance | Estimated delivery, rounded |
|---|---:|---|---|
| Map | 173 | 0:30 | 1:45 to 1:55 |
| Models | 472 | 0:15 | 3:35 to 4:10 |
| Context and knowledge | 484 | 0:20 | 3:45 to 4:20 |
| Tools and extensibility | 433 | 0:15 | 3:20 to 3:50 |
| Orchestration | 464 | 0:15 | 3:35 to 4:05 |
| Verification and evals | 527 | 0:25 | 4:10 to 4:50 |
| Production operations | 498 | 0:20 | 3:55 to 4:30 |
| Closing map | 80 | 0:10 | 0:45 to 0:50 |
| **Section 2** | **3,131** | **2:30** | **About 25:00 to 29:00** |

The unrounded estimate is 22:22 to 26:06 of speaking plus 2:30 of non-speaking time, or approximately 24:52 to 28:36. The rounded area estimates are not assigned budgets and need not sum to a second-precise target.

Using the existing 5:00 opening and 5:00 closing sections as assumptions gives about 35:00 to 39:00 of presentation. The presenter may shorten those sections later. This calculation does not reserve a new discussion length or require Section 2 to shrink. There is no evals personal story or 1:00 story reservation in this count.

## Decisions after the estimate and integration status

1. The spoken pass and slide map were accepted for integration. The six area files remain the reviewed detail behind the canonical outline and numbered specs.
2. Keep Section 2 in the agreed 25:00-to-29:00 range. Leave any cuts to Sections 1 and 3 for the later pass the presenter identified. Resolve the final presentation/discussion split afterward.
3. The selected grouping is integrated: quote, combined definition and importance, decisions, pitfalls, and FRB application. The [slide map](slide-map.md) and [numbering map](numbering-map.json) record the 45 narrative identities.
4. The current outline, slide specs, and design brief are updated. Migrate the builder, render the result, and rehearse. Use rehearsal to replace the planning assumptions.

## Integration work still pending

The active outline, numbered slide specs, and design brief now represent the new content. The builder now implements the same source numbering and compositions. Build receipts record export and render validation.

Visible copy, source keys, notes references, count assertions, and authored/expanded build maps are migrated. Final rendering and native playback are reviewed before delivery. Preserve the earlier outline history and archived decks.

The September 15 review changed no slide specs or deck. On September 16, the outline, specs, design brief, and builder were integrated and the revised PowerPoint was built. All 56 editing views and 57 presentation states were reviewed. Native macOS PowerPoint checks covered the quote-to-definition cut, FRB evidence screens, retained Morph transition, and final Questions reveal. The presentation-machine rehearsal on Windows remains open. Earlier decks are preserved in `output/archive/`.
