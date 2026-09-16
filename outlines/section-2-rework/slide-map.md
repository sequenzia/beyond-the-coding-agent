# Section 2 slide map

Mapping approved September 15 and integrated into numbered Markdown September 16, 2026. The presenter selected a 25:00-to-29:00 working range for Section 2 and may trim Sections 1 and 3 later. This map turns the six reviewed content files and [spoken pass](spoken-pass.md) into proposed compositions. The current outline and slide specs now implement this mapping. The builder implements the same mapping.

The presenter selected a combined What is it? and Why it matters? screen. Each area therefore uses the five-screen sequence below. The presenter accepted the copy allocation and separate narrative identities. The specs now number Section 2 as 7 through 38 and Section 3 as 39 through 45.

## Shared sequence

Each area uses these five screens:

1. Opening quote.
2. Definition and importance, with the brief coding-agent connection spoken here.
3. Key decisions and trade-offs.
4. Common challenges and pitfalls.
5. FRB application.

The two topics on screen 2 remain explicit in the talk track. No standalone coding-agent user example or user/owner label returns. The opening map precedes the areas. The anatomy diagram with responsibility badges closes the section.

Each row below describes one composition. The keys connect this map to `numbering-map.json` and the numbered specs. Titles name the subject. The body-copy column is a content limit, not a paragraph to paste wholesale. Speaker notes carry the explanation and supporting detail from the spoken pass.

Use the existing theme, area colors, quote illustrations, and mini-maps. Keep exact external quotations and attributions from research when writing the slide specs. The quote rows below reference them without duplicating them in this outline. All visual values remain in `style/design-brief.md`. Proposed composition changes must be recorded there before builder implementation.

## Opening map

| Slide | Key | Composition | Visible content | Spoken purpose |
|---|---|---|---|---|
| 7 | S2-MAP | Existing anatomy diagram | Preserve the full view, four highlight views, and return to full brightness | Define model plus harness, name the four layers, briefly connect to Codex CLI and Devin, and introduce the invented FRB request and human authority over official records |

The map remains a standalone composition. Its existing six presentation states are retained. The new area structure belongs in the narration. Do not add the full FRB packet or five-topic pattern as text over the diagram.

## Models

Source: [Models content](01-models.md), spoken beat 2.1, Research §1.

| Slide | Key | Title or purpose | Concise visible content | Speaker-note emphasis |
|---|---|---|---|---|
| 8 | S2-M-1 | Opening quote | Existing Osmani quotation, attribution, and model-in-system illustration | Attributed experience. Evaluate a model inside the intended system |
| 9 | S2-M-2 | Models in the system | Definition: interprets task and context to produce a response or proposed action. Importance: eligible for the data, capable on the task, within cost and latency requirements | Brief coding-agent model-choice connection. Define the model/service/environment choice and introduce CUI/ECI eligibility |
| 10 | S2-M-3 | Model selection | Four decision rows: eligible service and environment; model and settings; one configuration or routing; controlled version changes. Each row includes one short consequence | Approval constrains the candidate set. Compare representative tasks. Routing adds maintenance. Pinned versions need migration; aliases need monitoring |
| 11 | S2-M-4 | Model-selection pitfalls | Headline: Choosing and changing models without testing them on your task. Supporting cues: access is not approval; stale evaluation coverage; changing dependencies | Keep the headline sentence exact. Explain that a snapshot does not freeze the whole system |
| 12 | S2-M-5 | Models for the FRB brief | Illustrative. CUI/ECI records. Older, less capable approved options assumed. Starting design: one eligible configuration. Assess faithful findings and useful scope | Preserve the scenario qualification. Explain narrower scope or human reconciliation if the full task fails evaluation. No model scores or winner |

Keep the explicit false-answer demonstration for Evals. Models establishes that a possible cause must remain a possible cause. It does not need both source excerpts or the full candidate-selection table on screen.

## Context and knowledge

Source: [Context content](02-context-and-knowledge.md), spoken beat 2.2, Research §2.

| Slide | Key | Title or purpose | Concise visible content | Speaker-note emphasis |
|---|---|---|---|---|
| 13 | S2-C-1 | Opening quote | Existing Anthropic finite-context quotation, attribution, and context-selection illustration | Capacity does not establish relevance |
| 14 | S2-C-2 | Context for the next step | Definition: select and maintain the information for the next model step. Importance: relevant evidence, preserved constraints, current sources. Brief RAG definition | Coding-agent instructions, files, and test output. Internal records can supply RAG. No command walkthrough |
| 15 | S2-C-3 | Context decisions | Four decision rows: what enters the step; how to retrieve it; what persists; source identity and scope. Retrieval row names keyword, semantic, and hybrid | Briefly compare retrieval methods in speech. Define memory versus compaction. Keep caching as supporting detail |
| 16 | S2-C-4 | Context pitfalls | Headline: adding instead of curating. Supporting cues: missing evidence; lost qualifications; stale or misattributed sources | Access and freshness remain enforced as context changes |
| 17 | S2-C-5 | Evidence for the FRB brief | Two editable source excerpts with full IDs, revisions, dates, and locations. BRF r1: possible bearing wear. MIN r2: unresolved cause, inspection required. Three action labels: Select, Retain, Refresh | These are different documents. Retain uncertainty and source identity through summaries. Preparation services inherit the approved scope |

The retrieval comparison stays brief and accompanies its decision row. Do not put a second detailed retrieval-method table beside a full four-row decision table. If more visible retrieval detail proves necessary in rendering, revise the composition instead of shrinking type.

## Tools and extensibility

Source: [Tools content](03-tools-and-extensibility.md), spoken beat 2.3, Research §3.

| Slide | Key | Title or purpose | Concise visible content | Speaker-note emphasis |
|---|---|---|---|---|
| 18 | S2-T-1 | Opening quote | Existing Anthropic tools quotation, attribution, and tools-interface illustration | A tool is a contract with a model caller |
| 19 | S2-T-2 | Tools and connections | Tool: an operation with defined inputs, results, and execution rules. MCP: a common integration interface. Importance: useful capabilities with enforced boundaries | Brief coding-agent read/check example. The service still implements the contract and permission checks |
| 20 | S2-T-3 | Tool-design decisions | Three rows: capabilities and granularity; usable contract; permitted execution. One short trade-off per row | Fine-grained flexibility versus task-oriented operations. Useful payloads and IDs. Code validates and authorizes reads and writes |
| 21 | S2-T-4 | Tool-design pitfalls | Headline: copying the API surface without evaluating task fit. Supporting cues: overlapping tools; contract drift; unclear outcomes | Distinguish confirmed results, known failures, and unknown outcomes |
| 22 | S2-T-5 | Export cited brief | Illustrative contract: checked draft, citations, destination; verified exact content and enforced scope; matching export with receipt; explicit failure or unknown outcome | A model assertion does not prove verification. Changed content needs renewed checks. Retain uncertainty and source references |

The FRB contract can use the established native application-table style. Its compact visible rows must preserve the exact-content condition and the unknown-outcome distinction. The longer inventory of all four FRB tools remains spoken or in supporting notes.

## Orchestration

Source: [Orchestration content](04-orchestration.md), spoken beat 2.4, Research §4.

| Slide | Key | Title or purpose | Concise visible content | Speaker-note emphasis |
|---|---|---|---|---|
| 23 | S2-O-1 | Opening quote | Existing Anthropic simplicity quotation, attribution, and path illustration | Complexity follows the task's needs |
| 24 | S2-O-2 | Execution control | Definition: sequence work, carry state, coordinate, stop, and recover. Importance: reach checked outcomes within enforced limits. Contrast predefined path and model-selected actions | Brief coding-agent action/check/retry connection. A proposed plan does not enforce execution rules |
| 25 | S2-O-3 | Orchestration decisions | Three rows: who chooses the next step; when to delegate; stopping and recovery. One short trade-off per row | Bounded workflow baseline. Brief multi-agent contrast. Completion checks, saved state, action/token/retry/latency limits |
| 26 | S2-O-4 | Execution pitfalls | Headline: multi-agent before a workflow was tried. Supporting cues: skipped gates; repeated work; unknown side effects | Explain that a timeout does not establish failure. Recheck freshness and access on resume |
| 27 | S2-O-5 | Workflow for the FRB brief | Six-stage sequence: retrieve, inspect, compare, reconcile, verify, export. Verification gate before export. One recovery rule: inspect an unknown export outcome before retrying | Explain receipt, confirmed-failure, and unresolved-outcome branches verbally. A changed draft needs renewed verification |

Keep the recovery-response table in the notes. Putting both that table and the full six-stage workflow on one screen would duplicate text and overload the application composition. The main visible recovery rule remains, with the approved detailed explanation in the talk track.

## Verification and evals

Source: [Evals content](05-verification-and-evals.md), spoken beat 2.5, Research §5.

| Slide | Key | Title or purpose | Concise visible content | Speaker-note emphasis |
|---|---|---|---|---|
| 28 | S2-E-1 | Opening quote | Existing Husain/Shankar error-analysis quotation, joint attribution, and inspection illustration | Inspect the outcome and trace before choosing a repair |
| 29 | S2-E-2 | Verification and evaluation | Verification: acceptance of this result. Evaluation: behavior across cases and repeated trials. Importance: ordinary checks plus evidence about intended behavior | Coding-agent test output. These are complementary uses of checks, not a universal inside/outside taxonomy |
| 30 | S2-E-3 | Evaluation decisions | Three rows: success criteria; suitable checks; cases and trials. The checks row names code, model, and expert approaches | Brief grader comparison and calibration principle. Representative coverage, repeated trials, and ongoing evaluation |
| 31 | S2-E-4 | Evaluation pitfalls | Exact two-sentence headline. Supporting cues: actual outcome; grader disagreements; coverage gaps. Short instruction to inspect the result and trace | Error analysis guides the repair. No personal story or extra hold |
| 32 | S2-E-5 | Does the source support the claim? | Exact invented minutes excerpt and cited wrong answer. Citation exists: PASS. Claim supported: FAIL. Expected: unresolved cause, inspection required | The draft cannot proceed to export. Corrected content needs renewed verification. Keep the failure as one regression case and inspect its trace |

The full headline is: a generic judge instead of error analysis. Trusting the success claim without checking the result. Preserve both sentences word for word. The personal-story cue and 1:00 reservation are removed. Allow visual reading time for the source-support example within the section's working range.

## Production operations

Source: [Production operations content](06-production-operations.md), spoken beat 2.6, Research §6.

| Slide | Key | Title or purpose | Concise visible content | Speaker-note emphasis |
|---|---|---|---|---|
| 33 | S2-P-1 | Opening quote | Existing Rauch quotation, author/publisher attribution, and observability illustration | An attributed perspective about evidence of actual behavior |
| 34 | S2-P-2 | Production operations | Definition: keep the deployed system observable, controlled, and accountable. Importance: behavior, access, cost, and latency change over time | Brief coding-agent permissions/usage connection. Define the roles of observability, guardrails, security, identity, and governance in speech |
| 35 | S2-P-3 | Production decisions | Four rows: authority; observation; operating limits and handoff; changes and incident ownership. One short consequence per row | Observe outcomes and resource use, enforce scope, assign response responsibilities, retain a way to restrict or revert configurations |
| 36 | S2-P-4 | Risks across integrations | Headline: the lethal trifecta, assembled one integration at a time. Show the three capabilities: private data, untrusted content, external communication | Explain the potential path and its limits as a threat model. A probabilistic filter alone does not establish an authorization boundary |
| 37 | S2-P-5 | FRB operating agreement | Four compact rows: approved access and processing; protected evidence and operating signals; limits and accountable response; changes and human authority | Traces and evaluation artifacts inherit CUI/ECI constraints. Include quality, freshness, cost per brief, and latency. People own official causes, decisions, and records |

The six-row detailed agreement remains in the authoring file. The four visible rows group related responsibilities; none is dropped from the spoken coverage. Do not add a new incident story or legal checklist.

## Closing map

| Slide | Key | Composition | Visible content | Spoken purpose |
|---|---|---|---|---|
| 38 | S2-WRAP | Existing anatomy diagram with responsibility badges | Full-screen diagram, retaining the model's selection responsibility | Connect the six areas and lead into Section 3's existing skills and learning roadmap |

## Composition and count implications

For the selected five-screen grouping:

- Six areas times five compositions = 30 area compositions.
- Add the opening and closing maps = 32 Section 2 compositions.
- Preserve the opening map's six states. All other proposed Section 2 compositions are static. That gives 37 Section 2 presentation states and, under the current hard-cut expansion, 37 physical Section 2 slides.
- The current Section 2 also presents 37 states: six opening-map states, thirty area screens, and the closing map. The new composition count reorganizes those screens; it does not add six standalone user examples.

Accepted and built: each of the 32 compositions has its own narrative slide identity, while the opening map's highlight states retain its number. Sections 1 and 3 keep their six and seven narrative slides, for 45 narrative slides overall. The extra Section 3 support composition makes 46 authored compositions. The September 16 build validates 56 physical slides, 57 states, and 56 advances.

This integrated numbering is a visible change from the old 26 narrative-slide labels and must be reflected in the outline, filenames, numbered specs, builder, validation assertions, and documentation together. Do not silently retain an obsolete count or number the new content as paired user/owner slides. The projection assumes one narrative identity per new composition and unchanged composition counts in Sections 1 and 3.

## Pacing and copy controls

Section 2 stays in the selected 25:00-to-29:00 range. This map adds no new spoken topic to the approximately 3,131-word spoken pass. Keep fuller inventories in notes and supporting Markdown. A larger narrative-slide count is not permission to add more exposition.

The estimate in `section-review.md` includes a non-speaking allowance. Check it against the final rendered compositions and rehearsal. Do not reclaim time from the removed personal story by inventing a replacement segment. Sections 1 and 3 remain available for the presenter's later trimming pass.

All new area screens should show their complete content on entry with hard cuts, matching the current static Section 2 rhythm. Quote text and attribution stay editable. FRB tables, source excerpts, outcomes, and workflow labels stay editable. Use the existing reading floor; shorten visible copy or revise a composition if it does not fit. Exact text sizes, positions, and colors belong in the design brief.

## Remaining implementation steps

1. The current outline, numbered slide specs, reference cues, and design brief §23 are integrated. Section 2 remains 25:00 to 29:00, with a 27:00 rehearsal reference.
2. The reusable builder, Section 3 keys, and count-dependent validation are migrated. The current builder uses the integrated 45-slide narrative.
3. Rebuild to a new filename, inspect full editing views and presentation states, and validate native playback. Preserve and archive earlier decks.

The Markdown integration was followed by builder migration, full rendering, and native PowerPoint checks on macOS. Sections 1 and 3 retain their content, apart from necessary references, labels, and numbering. Their later trimming pass remains separate. Rehearsal on the Windows presentation machine remains necessary.
