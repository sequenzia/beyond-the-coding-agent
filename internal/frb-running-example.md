# Failure Review Board running example

Authoring reference, September 15, 2026. **Illustrative. All cases, documents, excerpts, and outputs below are invented.** They describe a teaching example, not a deployed system, measured performance, or the presenter's experience. No synthetic excerpt is a primary source.

## Purpose and boundary

The system helps engineers research Failure Review Boards (FRBs), understand discussions and decisions, and compare recurring issues. It supports research and drafting. People remain responsible for official causes, decisions, and board records.

Capabilities: search by number, date, or category; export authorized records; analyze an individual FRB; summarize its discussion and decisions; compare recurring issues across FRBs. Research workers use only the authorized internal FRB corpus and its attachments. No open-web research or additional access is implied.

## Recurring request

“Review FRB-042 about a pump shutdown. Summarize its discussion and decisions, compare similar FRBs from the past year, and export a cited brief distinguishing possible causes from established findings.”

For this example, the request date is September 1, 2026. “Past year” means September 1, 2025 through September 1, 2026. Category: pump shutdown. Resolve relative dates explicitly in a real request.

## Invented packet and stable citations

These are excerpt specifications for imaginary PDF, Word, and PowerPoint files. They are not real board records or downloadable attachments. IDs identify documents. Revision and source location identify the exact passage. Different file formats or copies of one record are not independent cases.

| Case | Document ID | Format | Revision and date | Source location | Illustrative excerpt |
|---|---|---|---|---|---|
| FRB-042 | FRB-042-RPT | PDF report | r1, August 18, 2026 | p. 4, §2 | “The pump shut down after vibration exceeded the operating limit. The cause has not been established.” |
| FRB-042 | FRB-042-BRF | PowerPoint preliminary briefing | r1, August 19, 2026 | slide 6 | “Bearing wear is a possible cause.” |
| FRB-042 | FRB-042-MIN | Word minutes | r2, August 22, 2026 | §3, paragraph 2 | “Cause remains unresolved. Inspect the bearing before assigning a cause.” |
| FRB-017 | FRB-017-MIN | Word minutes | r1, November 4, 2025 | §4, paragraph 1 | “A sensor fault caused the shutdown. Replace the sensor and verify its calibration.” |
| FRB-031 | FRB-031-MIN | Word minutes | r3, April 12, 2026 | §5, paragraph 3 | “Inspection confirmed bearing wear as the cause. Replace the bearing.” |

FRB-042-MIN r2 is the later minutes revision. FRB-042-BRF r1 is a different, preliminary document. Do not merge their identities or treat matching revision numbers across documents as a shared chronology. When new records arrive, preserve the prior version in provenance and refresh retrieval before finalizing a brief.

## Central failure and expected distinction

- **Observed answer, deliberately wrong:** “The board confirmed bearing wear.”
- **Expected:** FRB-042's cause remains unresolved. Bearing wear was a possible cause in the preliminary briefing. The later minutes record a decision to inspect the bearing before assigning a cause.
- **Failed check:** a hypothesis was promoted to an established finding. A citation may exist and still fail to support the sentence.
- **Trace investigation:** did parsing lose the qualification, retrieval omit the later minutes, compaction drop the constraint, a worker overstate a finding, or synthesis ignore evidence it received? Inspect the actual trace before choosing a repair.
- **Comparison:** FRB-017 involved a confirmed sensor fault. FRB-031 involved confirmed bearing wear. Similar shutdown symptoms justify comparison. They do not prove a common cause or establish FRB-042's cause.

## Expected cited brief

1. **Findings:** FRB-042 records a pump shutdown after a vibration-limit exceedance. Its cause remains unresolved. Cite FRB-042-RPT r1 p. 4 §2 and FRB-042-MIN r2 §3 paragraph 2.
2. **Decisions:** inspect the bearing before assigning a cause. Cite FRB-042-MIN r2 §3 paragraph 2. Do not describe the inspection as completed.
3. **Possible causes:** bearing wear appears as a hypothesis in FRB-042-BRF r1 slide 6. Keep its preliminary status.
4. **Cross-case observations:** shutdowns recur across these cases, with a sensor fault in FRB-017 and bearing wear in FRB-031. Cite each case's minutes separately. These cases do not establish a recurring cause for FRB-042.
5. **Citations:** every material statement retains document ID, revision, and source location. Test citation existence and semantic support separately.
6. **Unresolved questions and limitations:** the packet contains no completed bearing inspection or established cause for FRB-042. State missing, unreadable, conflicting, incomplete, or unauthorized evidence explicitly, without revealing restricted record details.

## Tool and workflow contract

Background services parse and index PDF reports, Word minutes, and PowerPoint briefings. They retain format-specific source locations, revisions, parse status, and index freshness. Parsing and indexing are not agent-facing tool calls in this illustration.

| Agent tool | Inputs | Result and checks |
|---|---|---|
| Search records | ID, date range, category | Authorized document IDs, revisions, status, and coverage. Incomplete indexing is explicit. |
| Retrieve passages | Document ID, revision, location | Exact passages plus source location and parse status. Missing or unreadable content is explicit. |
| Export records | Selected IDs and revisions, destination | Authorized selected records and manifest. Enforce scope and destination outside the model. |
| Export cited brief | Checked draft, citations, destination | Export receipt and content matching the checked draft, including uncertainty and limitations. Recheck authorization at export. |

The bounded workflow retrieves the target packet, inspects evidence, compares cases, reconciles findings, verifies the brief, and exports. Optional workers perform independent comparisons only after the simpler workflow has been measured. They return evidence, IDs, revisions, source locations, and uncertainty to the main analyst. They cannot approve official conclusions or export records independently.

Persist step completion and exact revisions for resume. Recheck freshness and access on resume. Bound retries, actions, tokens, and end-to-end latency. Avoid duplicate exports by checking the prior export receipt before retrying. Incomplete indexing, exhausted budgets, or unresolved contradictions produce an explicit limitation or human handoff. Inspect conflicting sources before synthesizing a claim.

## Measurement and operating responsibilities

- Compare candidate models and versions on extraction, discussion summaries, and qualified synthesis. No scores or winning model are assumed. Worker evals emphasize evidence fidelity and retrieval coverage. Main-analyst evals emphasize faithful summaries, reconciliation, and warranted uncertainty.
- Measure quality with cost per completed brief and p95 latency, including workers, retries, and verification. Route by measured task fit, rather than assuming a smaller model is suitable for workers.
- Direct checks cover IDs, revisions, permissions, source locations, export selection, and agreement between the checked draft and exported content. Experts judge semantic support, useful synthesis, and warranted uncertainty. Calibrate model graders to expert decisions.
- Inspect a failure and its trace, identify the responsible component, change it, rerun a representative suite with repeated trials, and monitor production samples. Include this hypothesis-as-fact case, duplicate documents, fresh revisions, inaccessible evidence, and parse failures.
- Trace the request through retrieved revisions, optional worker findings, synthesis, checks, and export. Restrict trace access too. Monitor freshness, parsing and tool failures, quality failures, cost per completed brief, and end-to-end latency.

## Slide map

| Slide | Responsibility taught |
|---|---|
| 7 | System purpose and human ownership of official records |
| 9 | Select, measure, replace, and route models for FRB work |
| 11 | Curate relevant, fresh evidence with provenance and constraints |
| 13 | Define the agent's tool contract and enforce authorization |
| 15 | Bound workflow, workers, retries, and resume |
| 16 | Detect the hypothesis-as-fact failure |
| 17 | Separate direct checks from expert judgment and improve the system |
| 19 | Enforce access, trace decisions, and monitor operation |
| 24 | Review 20 to 50 outputs and record input, observed behavior, expected behavior, and check |

The FRB failure is separate from both protected personal-story slots. No live demonstration or FRB application is part of this revision.
