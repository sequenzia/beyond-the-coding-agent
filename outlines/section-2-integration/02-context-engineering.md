# Context Engineering integration draft

Numbering note, September 16, 2026: the orientation insertion shifts this review's deck slide numbers 10 through 47 forward by one. The original review numbers below are historical. See `internal/deck/section-2-orientation-numbering-map.json` for current spec paths.

Accepted and integrated September 16, 2026. The presenter approved this draft for the outline, slide specs, and PowerPoint. Outline beat 2.2, slides 15 through 19, design brief §28, and the reusable builder implement the conceptual evidence pipeline and missing-minutes FRB failure. This file retains the supporting content review. Rehearse the 4:30 area reference.

## Subsequent slide 17 approval, September 16, 2026

The presenter approved "Context for each model call" with eight categories in two rows: instructions, current request, examples, retrieved evidence, history and task state, selected memory, tool definitions, and tool results. The diagram is labeled "Input for this call". The exact approved copy and 1:00 script are in `slides/section-2/17-context-for-the-next-step.md`. Design brief §38 and the reusable builder implement that composition. This approval supersedes the foundations content below, which remains a historical review record.

The script states the curation responsibility at every inference turn, including the call after a tool result. Stored information enters the working context through selection, and summaries still need supporting sources. Slide 17 contains no application example. Current timings are slide 16 at 0:20, slide 17 at 1:00, slide 18 at 1:25, slide 19 at 0:30, and slide 20 at 1:15. The extra 0:10 on slide 19 is rehearsal allowance pending its separate content review. The area remains 4:30 and Section 2 remains 28:30.

## Subsequent slide 18 approval, September 16, 2026

The presenter approved "Selecting and organizing context" with four flat decision rows: Select, Position, Maintain, and Delegate. A supporting line preserves source identity and access enforcement. The exact approved copy and 1:10 script are in `slides/section-2/18-context-decisions.md`. Design brief §39 and the reusable builder implement the composition. This approval supersedes the retrieval-decisions content below, which remains a historical review record.

RAG, embeddings, and search-method definitions remain spoken. Positioning becomes a choice to test. Compaction must preserve important constraints and unresolved work. Focused subagents can use separate contexts and return findings with sources. Slide 18 contains no application example. The current timings supersede the preceding slide 17 approval record: 0:20, 1:00, 1:10, 0:45, and 1:15 for slides 16 through 20, totaling 4:30. Slide 19's content review remains pending within its expanded allowance. Section 2 remains 28:30.

## Subsequent slide 19 approval, September 16, 2026

The presenter approved the four failure modes Distraction, Position, Context rot, and Information loss, plus the 0:45 script. The headline remains "Adding context without curating it." and matches recap slide 45. The exact approved content is in `slides/section-2/19-context-pitfalls.md`; design brief §40 and the reusable builder implement it. This supersedes the historical pitfalls treatment below.

The script distinguishes context rot from stale information, preserves possible losses in retrieval, summaries, and subagent handoffs, and closes on inspecting the actual input. Slides 17 through 19 now have approved content and scripts with no FRB references. Their combined time is 2:55, the area remains 4:30, and Section 2 remains 28:30. Slide 20 is unchanged. The pending content reviews recorded above are complete; rehearsal remains open.

## Agreed direction and carried-forward structure

- Explain how evidence reaches the model through a conceptual pipeline.
- Define RAG and embeddings briefly, and compare keyword and semantic search. Mention hybrid retrieval as an option to evaluate.
- Use the missing-minutes failure: retrieval returns the preliminary briefing but misses the later minutes, so decisive evidence never reaches the model.
- Carry forward the five-screen pattern: quote, foundations, decisions, pitfalls, and FRB application.
- Keep the FRB packet, CUI/ECI processing boundaries, and current headline pitfall. Keep memory and compaction as supporting concepts.

The working-context primer builds on Model Selection's model-call explanation. Context Engineering develops how the application assembles that input for each step. The draft contains no chunking tutorial, vector-database selection, ranking formula, or reranking walkthrough.

## Integration map and rehearsal reference

| Current slide | Proposed role | Main change | Rehearsal reference |
|---|---|---|---|
| 15 | Opening quote | Keep the finite-resource quotation and illustration. | 0:20 |
| 16 | Foundations | Distinguish working context, selected memory, and authoritative records. | 1:10 |
| 17 | Retrieval and context decisions | Show the evidence path, with brief RAG and search definitions. | 1:25 |
| 18 | Pitfalls | Missing evidence, lost qualifications, and stale or misattributed sources. | 0:20 |
| 19 | FRB application | Trace the missing-minutes failure through retrieval and input assembly. | 1:15 |
| Total | Five static screens | Increase of 0:25. | 4:30 |

This Context Engineering pass brought Section 2 to a 28:00 rehearsal reference within its 25:00 to 29:00 range, adding 0:25. Later integrations update the current reference in `outlines/outline-v2.md`. Spoken pacing still needs rehearsal.

## 1. Quote

**Kicker:** Context Engineering · Perspective

Retain the current Anthropic finite-resource quotation and attribution from slide 15 and Research §2. Retain the existing illustration.

**Spoken bridge:** Model Selection established the available capacity. Context Engineering decides what information the next step needs and how to supply it.

Keep the quote's scope conceptual. It establishes neither a universal size threshold nor a rule that shorter inputs always produce better results.

Cut first: repetition of the capacity explanation. Never cut the quotation and attribution.

Sources: Anthropic, September 2025. Research §2.

## 2. Foundations

**Kicker:** Context Engineering · Foundations

**Proposed title:** Context for the next step

### Proposed visible content

**Working context**

Instructions, request, evidence, tools, and relevant history available for this step.

**Memory**

Selected information retained for later use.

**Authoritative records**

Source documents and application state checked for this task.

### Explanatory treatment

Show one assembled model input. Place stored memory and authoritative records outside it, with selected information entering the input. Make the current request and instructions visible within the assembled context. This should explain selection rather than suggest that all stored information is available to every call.

Use the same visual language as the Model Selection invocation. All visual values defer to the design brief. Specify the new composition there when this draft is adopted.

### Proposed talk track

Model Selection showed a model call. **Context Engineering assembles the information for its next step.** That includes instructions, the request, relevant evidence, tool information, and useful history. Prompt engineering addresses the instructions within that larger input.

Memory is selected information retained for later use. The system still chooses what to bring into this call. Compaction condenses working history to make room for further work. Both need checks that important details survive.

Keep source documents and application records distinct from a generated summary. For our FRB system, a remembered description of a finding must remain traceable to the board record. Access and confirmed actions come from application records.

A coding agent similarly combines repository instructions, relevant files, and test output for its next decision.

**The responsibility is to supply relevant information while preserving its meaning and source.** Next, follow the evidence into that input.

Cut first: the coding-agent elaboration. Never cut working context, memory, the record distinction, or the selection responsibility.

Sources: Anthropic, September 2025, rechecked September 2026; existing coding-agent context material. Research §2. The record distinction is design guidance from the external storyboard and the illustrative FRB contract, Research §0.

## 3. Retrieval and context decisions

**Kicker:** Context Engineering · Decisions

**Proposed title:** Retrieval and context choices

### Proposed visible content

**RAG:** Retrieve information and supply it as evidence for generation.

Show the evidence path in four stages:

1. **Authorized sources**
2. **Retrieval**
3. **Evidence selection**
4. **Assembled input**

**Find the evidence**

Keyword: terms and identifiers. Semantic: similarity using embeddings. Hybrid: both signals.

**Manage the context**

Preload essentials. Fetch detail when needed. Retain and refresh useful information.

### Explanatory treatment

Keep the pipeline conceptual. Retrieval finds candidate material. Selection decides which passages and source details belong in the input. A note on the source-to-input path preserves identity, revision, and access scope. Use the spoken example to explain why exact identifiers and meaning-based search serve different needs.

The figure describes one evidence path. Tools, instructions, selected memory, and application state also contribute to working context, as established on the preceding screen.

### Proposed talk track

**RAG means retrieval-augmented generation.** Retrieve relevant information and supply it as evidence for the model's response. Authorized internal records can supply that information.

Follow the path from sources, through retrieval and selection, into the actual model input. Keep document identity, revision, and location attached. Enforce access before restricted content reaches an unauthorized recipient or processing service.

If we know the board ID, use direct lookup or exact search. Keyword search matches terms and identifiers. **An embedding represents content numerically so a search system can compare similarity.** Semantic search can help with differently worded descriptions of similar shutdowns. Hybrid retrieval combines both signals. Test which approach finds the evidence this task needs.

Then decide what to preload and what to fetch when needed. Retain essential constraints and source references. Refresh retained information and access when the task resumes or records change.

The question is whether the assembled input contains the right evidence with its meaning intact.

Cut first: elaboration about hybrid retrieval and preload trade-offs. Never cut RAG, the embedding definition, keyword versus semantic search, the evidence path, or the access boundary.

Sources: Ford, Anthropic, September 2024, and Anthropic, September 2025, primer passages rechecked September 2026. Research §2. Access and processing boundaries: Research §0, §1, and §3. No retrieval method is an assumed winner for the FRB corpus.

## 4. Pitfalls

**Kicker:** Context Engineering · Challenges and pitfalls

**Proposed title:** Context pitfalls

### Proposed visible content

- **Coverage:** Decisive evidence can be missing.
- **Summaries:** Qualifications can disappear.
- **Sources:** Versions and identities must remain traceable.

**Pitfall:** Adding context without curating it.

### Proposed talk track

**Adding context without curating it** is the headline pitfall. Check for missing evidence, lost qualifications, and stale or misattributed sources. A retained summary still needs supporting records. Keep findings attached to their own cases when information is reused.

Preserve the exact headline sentence on slide 44. The supporting cues already serve the new teaching sequence and can keep their current visible wording.

Cut first: the comparison-case reminder. Never cut the headline pitfall.

Sources: context maintenance and FRB material, Research §0 and §2.

## 5. FRB application

**Kicker:** Context Engineering · FRB application

**Proposed title:** Evidence for the FRB brief

**Illustrative FRB evidence and retrieval failure.**

### Proposed visible content

Keep both source excerpts with their identities:

**FRB-042-BRF r1 · August 19, 2026 · slide 6**

“Bearing wear is a possible cause.”

**FRB-042-MIN r2 · August 22, 2026 · §3, paragraph 2**

“Cause remains unresolved. Inspect the bearing before assigning a cause.”

Alongside them, show:

**Design**

Supply both passages with their source identities.

**Failure**

Retrieval misses the later minutes.

**Evidence to check**

Both passages reach the input. The summary preserves uncertainty and required inspection.

### Explanatory treatment

Keep the existing source-excerpt composition and distinct document identities. Mark the minutes as the passage omitted in the hypothetical failing retrieval. The evidence statement describes the condition to check, not an observed passing result. Preserve both passages on the teaching slide so the audience can see what the failing input lacks.

The briefing and minutes are different documents. Their r1 and r2 values are not successive revisions of one file. The example requires both passages to preserve the preliminary hypothesis and the later decision. This is not a rule to retrieve every available document.

### Proposed talk track

The preliminary briefing identifies bearing wear as a possible cause. The later minutes leave the cause unresolved and require inspection. These are different documents with distinct identities and source locations.

**Suppose retrieval returns the briefing but misses the minutes. The decisive passage never reaches the model.** This is our hypothetical failure, not a measured result.

Inspect the path. Were the minutes available and readable within the authorized scope? Did retrieval return the passage? Did context assembly retain it? Those checks locate where the information was lost.

The expected input includes both passages and their references. A working summary preserves the unresolved cause and required inspection. Refresh revisions and access before finalizing. Missing or unreadable evidence remains an explicit limitation. Preparation services stay within the same approved processing boundary.

Next, Tools & Extensibility explains the operations that obtain information and act on it.

**Context is a budget, not a bucket.**

### Supporting engineering artifact

A small context-assembly record can document the design. Keep it in supporting material while the slide shows the source passages and failure.

| Information | Where it comes from | What to check |
|---|---|---|
| Task and constraints | Current request and governing application instructions | The intended board, date range, scope, and output requirement remain explicit. |
| FRB evidence | Authorized source records | Required passages reach the input with document identity, revision, and location. |
| Working summary | Earlier evidence and selected history | Unresolved cause and inspection requirement survive. Source links remain available. |
| Access and confirmed actions | Application records | Current permission and operation status are checked when relevant. A summary alone does not establish them. |

The detailed citation-support check remains in Verification & Evals. This application tests evidence delivery and preservation. Its input checks do not establish that the generated answer will be correct.

Cut first: the detailed availability investigation and comparison-case elaboration. Never cut illustrative status, the two source identities, the missing-minutes failure, uncertainty and inspection, or the processing boundary.

Sources: invented FRB packet and contract, Research §0; context preparation and selected failure, Research §2. No new documents, model results, or successful repair are invented.

## Review outcome and adoption

- Accepted the five-screen sequence, working-context foundations, and conceptual retrieval pipeline.
- Kept memory and compaction as supporting concepts, with brief RAG and embedding definitions and a keyword versus semantic comparison.
- Selected the missing-minutes retrieval failure and preserved both distinct source excerpts.
- Integrated the content into Research §2, outline beat 2.2, specs 15 through 19, design brief §28, and `internal/deck/author.mjs`.
- Kept the exact pitfall on slide 44, narrative numbering, existing map assets, and build counts.
- Rehearsal remains open for the 4:30 Context Engineering and 28:00 Section 2 references.

## Source material

- External storyboard: `research/external/ai-engineering-presentation-storyboard.md`, slides 6 through 8.
- External report: `research/external/ai-engineering-research-report.md`, §2.
- Current outline: `outlines/outline-v2.md`, beat 2.2.
- Evidence layer: `research/section-2.md`, §0 and §2, with inherited eligibility and tool boundaries in §1 and §3.
- Shared example: `internal/frb-running-example.md`.
