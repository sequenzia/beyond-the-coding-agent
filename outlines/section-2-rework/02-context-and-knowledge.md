# Context and knowledge

Status: reviewed with the presenter, September 15, 2026. Content accepted for this pass. Numbered specs were integrated September 16. Section 2 remains 25:00 to 29:00, with individual cues based on a 27:00 rehearsal reference. Retrieval depth agreed with the presenter: briefly compare keyword, semantic, and hybrid retrieval. Keep the explanation at the decision level.

Integrated September 16 into [outline-v2.md](../outline-v2.md), beat 2.2, and narrative slides 13 through 17. This file retains the reviewed supporting detail. The current numbered specs are in `slides/section-2/`; Research §2 in [research/section-2.md](../../research/section-2.md) remains the evidence layer. The builder implements the integrated specs.

## Opening quote

Selection: Anthropic, "Effective context engineering for AI agents," September 2025. Use the existing quotation about context as a finite resource with diminishing marginal returns. Exact wording, authors, and verification status remain in Research §2.

Purpose: introduce selection and maintenance as engineering responsibilities. A large context window does not establish that every available piece of information will help.

Spoken bridge: **You decide what information the model receives for its next step.** The question is what that step needs and how to keep the information relevant and reliable.

Qualification: the quote provides a conceptual frame. It supplies no universal context-size threshold or guarantee that shorter input is always better.

## What is it?

Context engineering is the work of selecting, organizing, and maintaining the information supplied to the model as it works. That includes instructions, the current task and state, relevant knowledge, tool results, and selected history or memory. Prompt engineering focuses on writing and organizing instructions within that wider set.

Retrieval-augmented generation, or RAG, retrieves relevant information and supplies it to the model for its response. The knowledge can come from internal records, repository files, or another authorized source. External knowledge means external to the model's learned knowledge. It does not imply internet access.

Compaction summarizes the current conversation to make room for further work. Persistent memory retains selected information across sessions. Both require decisions about what remains useful and accurate.

**Brief coding-agent connection:** a coding agent combines the task with repository instructions, relevant files, and the latest test output. Those inputs give it the information needed to propose its next change.

Boundary: Models establishes which configurations are eligible and suitable. Context decides what they receive. Tools defines the operations that obtain or act on information. Production operations addresses system-wide enforcement and monitoring.

Sources: Anthropic, September 2025; coding-agent context anchors, Research §2. The definitions develop the existing context material. The approved-environment boundary comes from the illustrative FRB agreement and Research §0 and §1.

## Why it matters

The information available at a step shapes what the model can use as evidence. A relevant passage may be missing, an old version may remain in the working context, or a summary may have lost a qualification. Those are different failures and need different repairs.

**The system must preserve the information that makes a conclusion warranted.** More retrieved text does not by itself establish better evidence. The engineer needs to inspect what was selected, what was omitted, and which constraints survived the preparation of the context.

Context also affects operating cost and latency. Retrieval, model input, and repeated work all belong in the task's resource budget. Stable prompt prefixes can help caching, but a change in evidence or access requirements can require changing that context.

For the FRB system, relevant information must remain within the applicable approved services and environments. A user's access to a record and a service's eligibility to process it are separate conditions.

Sources: Anthropic, September 2025; Manus, July 2025, with its system-specific caching qualifications; context maintenance framing, Research §2. OWASP authorization, Research §3. FRB data boundary, Research §0 and §1. No performance gain is assumed for the proposed FRB design.

## Key decisions and trade-offs

### What belongs in the next step?

Choose the instructions, task state, and evidence needed for the current work. Decide how much original source material to carry and when to retrieve more.

More source material can preserve useful detail, but it also increases the information the model must process. Summaries save space while introducing the risk of losing a distinction. Keep the original source available for consequential interpretations.

Starting approach: supply a focused set of relevant evidence with its source identity. Preserve qualifications and unresolved questions. Keep historical detail when it changes the interpretation, and remove repeated material that adds no evidence.

Revisit when failures show that necessary evidence is missing, qualifications disappear, or accumulated information distracts from the task. Inspect the input that reached the model before concluding that model selection is the problem.

### How should the system retrieve knowledge?

Use direct lookup or file access when the source is known. For search, compare these approaches briefly:

| Approach | What it matches | Decision trade-off |
|---|---|---|
| Keyword | Terms and identifiers present in the text | Useful for precise references. Different wording can require a broader query. |
| Semantic | Similarity of meaning, using embeddings | Useful when wording differs. Exact identifiers can still be missed. |
| Hybrid | Results from keyword and semantic search | Combines the signals, with additional retrieval and result-merging work. |

Starting approach: match retrieval to the corpus and the questions. Test whether it returns the evidence needed for representative cases. Add complexity when missed or irrelevant results justify it. No method is the assumed winner for the FRB corpus.

Revisit when vocabulary, source formats, or task types change, or when failures show missing evidence. A relevant search result still needs interpretation against its source.

Sources for this comparison: Ford, Anthropic, September 2024, Research §2. Method choice and the starting approach are teaching guidance. No benchmark figures, ranking formula, or vector-database selection belongs in the main explanation.

### What should persist, and what should be refreshed?

Keep constraints, evidence references, completed work, and unresolved questions that future steps still need. Decide what can be summarized, what can be retrieved again, and what should persist beyond the current session.

Retaining history supports continuity, but old information can become stale or irrelevant. Compaction reduces the working history while risking lost constraints. Persistent memory can support later tasks, while adding responsibilities for freshness and access.

Starting approach: make essential state explicit and retain links to its evidence. Test that summaries preserve the decisions and qualifications the next step needs. Refresh information as sources change. Recheck persisted information when the task resumes.

**Correctness and access take priority over cache savings.** Preserve stable prefixes when useful, but update context when the underlying evidence or permissions require it.

Revisit when a summary changes meaning, a resumed task relies on stale evidence, or memory carries information into an inappropriate scope.

### Which sources and access scope apply?

Keep document identity, revision, and source location attached to retrieved evidence. Limit what is supplied to the user's authorized scope and the processing environment's permitted use.

Freshness and provenance require maintenance as records and access policies change. A compact summary still needs enough source information for the system to refresh or inspect the original evidence.

Starting approach: enforce access outside the model, retain source references, and make incomplete or unavailable evidence explicit. Keep restrictions in force through retrieval, summarization, memory, and later reuse. Within the FRB example, any service processing restricted records must remain inside the applicable approved scope.

Revisit when records are revised, permissions change, or new services process the data. Separate a retrieval failure from an access restriction so the system can report an appropriate limitation without exposing restricted details.

Sources: Anthropic, September 2025; Manus, July 2025; context decisions and maintenance, Research §2. OWASP, 2025, Research §3. FRB constraints, Research §0 and §1. These are starting practices to evaluate in the intended system.

## Common challenges and pitfalls

| Challenge | How it appears | Investigation or response |
|---|---|---|
| Adding information without deciding what belongs | Duplicate or irrelevant material accumulates while the necessary evidence remains hard to find | Inspect the actual context for the step. Keep relevant detail and remove repeated material. |
| Retrieval misses decisive evidence | The preliminary record is present but the later decision is absent | Check the source inventory, parsing, indexing, query, and returned passages before changing the model. |
| A summary loses a qualification | A possible cause becomes an established finding in retained state | Compare the summary with the original evidence. Preserve uncertainty and source references explicitly. |
| Sources or memory become stale | A resumed task uses superseded information | Refresh the relevant versions and recheck access before relying on them. |
| Distinct sources lose their identities | Findings from another case are attributed to the current one | Keep case identity, document identity, revision, and location attached to the evidence. |
| Context crosses an access or processing boundary | A service or later session receives information outside its permitted scope | Enforce scope in the surrounding system. Include preparation services and persisted context in the review. |

**Headline pitfall:** adding instead of curating.

The continuing work is to inspect retrieval and summaries, refresh source data, and recheck access as the corpus and system change. Failed cases should become part of future evaluation. Detailed grader design belongs in the Evals area.

Sources: context failure and maintenance material, Research §2; OWASP, Research §3; illustrative FRB packet, Research §0. The table describes possible failures to investigate, not measured outcomes from a deployed FRB system.

## FRB use case as an applied example

**Illustrative proposed design.** The corpus includes CUI and ECI, and the approved model choices are assumed to be older and less capable for the intended synthesis. Those assumptions carry forward from Models. No context size or performance score is invented.

The request asks for the FRB-042 discussion and decisions, similar cases from the past year, and a cited brief. Start by locating the target packet within authorized records. Preserve the distinction between the current case and comparison cases.

For a known board, use its ID to locate records. Related-case search may need different wording. Compare retrieval approaches against the expected evidence before selecting one. Any embedding or other preparation service that processes restricted content must be eligible for that use.

The target context needs both of these passages:

| Source | Evidence that must retain its meaning |
|---|---|
| FRB-042-BRF r1, August 19, 2026, slide 6 | The preliminary briefing identifies bearing wear as a possible cause. |
| FRB-042-MIN r2, August 22, 2026, §3 paragraph 2 | The later minutes leave the cause unresolved and require inspection before assigning a cause. |

These are different documents. Their revision numbers do not form a shared sequence. Retain each document's identity and location with its evidence.

**The working summary must retain the unresolved cause and the outstanding inspection.** Preserve the preliminary hypothesis as a hypothesis. When comparison evidence enters the context, FRB-017's sensor fault and FRB-031's confirmed bearing wear remain findings about those cases.

Proposed starting design: prepare focused evidence for each step, keep source references and uncertainty in working state, and refresh versions and access before finalizing the brief. Evaluate whether the available approved model can use that context reliably. If it cannot, apply the narrower scope and human review discussed in Models. Better context is a design to test, not a guaranteed cure for a capability gap.

Check whether retrieval included the later minutes, whether the summary retained the unresolved status, and whether every passage kept its identity and revision. Missing, unreadable, incomplete, or inaccessible evidence produces an explicit limitation. Save the detailed grading of the final answer for the Evals application.

Revisit when those checks fail, source revisions arrive, or the corpus, approved services, or permissions change.

Sources: illustrative FRB packet and context application, Research §0 and §2; sensitivity and model assumptions, Research §1. No real controlled records, deployed results, or presenter story are claimed.

## Delivery notes

- **Must say:** context engineering decides what information the model receives for the next step.
- **Must say:** RAG supplies retrieved knowledge, including authorized internal information. Briefly distinguish keyword, semantic, and hybrid search.
- **Must say:** summaries must preserve essential constraints and uncertainty, with source references and freshness checks.
- **Must say:** enforce the user's access scope and the processing environment's permitted use outside the model.
- Takeaway line: "Context is a budget, not a bucket."
- Transition: the information the model needs often comes through a tool. Tools and extensibility explains how to design those operations and their contracts.
- Cut first during pacing: cache mechanics, followed by detail about persistent memory. Keep the retrieval comparison brief.
- Never cut: the quote's qualification, plain-language definition, access boundary, headline pitfall, or the distinction between the preliminary hypothesis and later unresolved finding.

## Review questions and decisions

- Agreed structure: opening quote and the five content headings. Brief coding-agent connection within the definition. No standalone user example.
- Agreed retrieval depth: a short comparison of keyword, semantic, and hybrid retrieval. No implementation walkthrough.
- Inherited constraints: explicit CUI/ECI corpus and limited approved-model capabilities. Keep all relevant processing within the permitted scope. Do not assume that older models necessarily have smaller context windows.
- Accepted scope: four decisions, with memory and compaction as supporting concepts and caching as supporting context-management material. Keep the main FRB lesson on evidence selection, source identity, and preservation of uncertainty.
- Review outcome: presenter accepted this content pass. Proceed to Tools and extensibility. Final pacing and presentation-machine rehearsal remain pending.
