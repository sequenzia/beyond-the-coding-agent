# Essential corrections: implementation and acceptance record

Implemented September 15, 2026 from [Apply essential corrections](../../reviews/apply-essential-corrections-2026-09-15.md) and the presenter's agreed plan.

## Delivered build

- [Revised PowerPoint](../../output/beyond-the-coding-agent-2026-09-15T17-54-38-632Z.pptx).
- SHA-256: `931db07e57e333aea6ad3affec1d9b64e9eb8d82015c108191ad1cba015fb42b`.
- 2,994,252 bytes. Built with `node internal/deck/build.mjs` from saved authoring code.
- Private build evidence: `.deck-build/run-eBmSx2/`. The earlier draft and earlier decks are preserved.

## Agreed deferrals and boundaries

- All six screenshot placeholders remain in both full-size and compact states.
- Story #2 remains a 1:00 personal-story slot, from 2:28 to 3:28 in slide 16's talk track. The flight-booking grader is a separate illustration.
- Resource changes remain entirely deferred. Slide 24, its authoring block, destination, and QR decisions are unchanged.
- The published README description, historical outline v1, and existing review reports are unchanged.
- Recommendations exclusive to the running-example and rehearsal reports were not implemented.
- Numeric source keys, filenames, mini-maps, area colors, responsibility titles, and the ownership diagram's badges are preserved.

## Recommendation accounting

| Report / plan item | Implementation |
| --- | --- |
| Section 2 labels | Exact user and owner labels in active guidance, outline, specs, full headers, kickers, agenda footer, and builder defaults. Owner is defined on slide 3. The engineered bridge stays within user slides. |
| 2.1 Opening | Intended-use reliability and safe failure handling explain the metaphor. The audience assumption is replaced. |
| 2.2 Thesis | Spoken taxonomy and title-age claim removed. Typical AI/ML focus and overlapping roles are retained. |
| 2.3 Development versus delivered product | Three-row editable table. Model-selected actions are explained separately; ordinary code can enforce limits and permissions. |
| 2.4 Routing | Three configurations, accuracy, cost per completed task, 145-task scope, selection share, judge-call exclusion, date, run variation, and distinct cost denominators. Ends with the product-quality requirement. |
| 2.5 Replacement | Provider responsibilities, pinned-version and moving-alias descriptions, multiple sources of variation, and task/prompt/version scope for the prime/composite example. |
| 2.6 Retrieval and caching | RAG defined plainly. Retrieval methods depend on data and task. Manus economics are attributed; cache savings remain conditional on correctness and authorization. |
| 2.7 Memory | Wrong user or tenant is the breach boundary. Losing a constraint can produce a wrong answer. |
| 2.8 Tools | Stable IDs accompany meaningful names. Consolidation is an option. Three action categories show policy, recovery, and authorization; all require enforcement outside the model. Tools pitfall updated in both locations. |
| 2.9 Verification and evals | Complementary uses of checks; organizing model identified. Result and trace both checked. Flight grader tests reservation state and policy constraints separately. Capability and regression suites distinguished in Q&A. |
| 2.10 Eval scope | Zero-pass diagnostic removed. 20-to-50 starting cases and probability notation retained. Husain allocation stays in attributed backup. Competencies are unranked. Migration claim now promises evidence. |
| 2.11 Exfiltration | Capability-labeled triangles, constrained attack path, external web-fetch communication, multiple capabilities per integration, and filtering limitation. |
| 2.12 Legal | Scoped Article 50 wording and role/exception notes. Air Canada paraphrased with secondary attribution. Approval-process title accommodates human approval, async workflows, and enforced policy. |
| 2.13 Evidence types | Researcher demonstrations, forecast, comparison baselines, five-server scope, and reviewed changes to faulty or obsolete tests are distinguished. |
| Report 3 | Screenshot replacement explicitly deferred by the presenter. |
| Report 4 | Required numerical qualifications sit beside the comparisons. Husain allocation removed from visible content. |
| Report 5 | Ten synchronized Q&A answers, including judge trust and shipping thresholds. Hiring advice leads with demonstrated work; Dice figures remain optional attributed backup. |
| Report 6 | Research, outline, specs, and builder synchronized. Approved bio and landscape map reference copied. Claim-specific status replaces blanket assurances. Unsupported growth figures distinguished from documented Dice figures. |
| Additional layout requirements | Design brief section 11 records the revised table, cards, grader, triangles, unranked list, and longer pitfall bands. Slide 9 retains its existing click count and replacement order. |

## Source and package checks

- Slide-spec times sum to 5:00, 25:00, and 5:00. Total presentation time is 35:00, with 15:00 for questions.
- 25 narrative slides: 6, 13, and 6 by section. 33 physical PowerPoint slides.
- The six owner pitfalls match slide 22 word for word in the outline, specs, and visible builder text.
- All ten canonical Q&A answers match the podium copy exactly.
- All 33 generated speaker-note bodies match their saved slide specs, including personal-story markers and research links.
- Old labels are absent from active text. Historical material and filenames are preserved. No em dashes were introduced. `git diff --check` passes.
- All six placeholders retain matching object names across their Morph pairs. Seven Morph destinations and the slide 19b hard cut are encoded.
- Package validation passes with zero findings. Font policy passes for Helvetica and Consolas. Artifact Tool imports all 33 slides successfully.
- Geometry validation has zero findings and 74 overlap warnings. Rendered visibility states were inspected to assess the warnings, including overlapping objects assigned to different replacement states.
- Six native tables are present. Native-table validation passes. No arithmetic columns qualify for the generic totals checker; routing table values were checked separately against the approved comparison, including the approximately 72% calculation.
- Text-fit checker reports no warnings. Visual inspection additionally caught and corrected title/evidence spacing on slides 9 and 12 and increased bottom clearance for slide 17's longer pitfall.

## Render and native playback checks

All 81 rendered click states were inspected at full size. After the final layout fixes, 76 renders were byte-identical to the inspected draft. The five changed states were inspected again: slide 9 clicks 4 and 5, slide 12b clicks 1 and 2, and slide 17 click 4.

The delivered file was opened in Microsoft PowerPoint on macOS without a repair prompt. Native playback inspection covered:

- The opening comparison table and its replacement commitments.
- All six Section 2 header-to-kicker Morph pairs, including all screenshot pairs.
- Every slide 9 selection, measurement, replacement, routing, and pitfall state.
- Context replacement, tool evidence, action-category cards, authorization qualifications, and incident replacement.
- Orchestration evidence, protected acceptance criteria, and separate multi-agent baselines.
- The eval comparison, booking grader, probability notation, story hold state, migration line, and longer eval pitfall.
- Operating capability triangle, design pattern, disclosure row, incident replacement, approval-process table, and hard cut to the ownership map.
- The slide 21 Morph pair, unranked competencies, quote replacement, and slide 22's six bands.

Static rendering and native playback were separate checks. No repair, replacement, or settled-state text-fit problem was observed in the inspected native sequences.

## Presentation-machine handoff

Windows playback and projector readability remain to be checked on the actual presentation machine when available, following design brief section 9. This macOS check does not substitute for that handoff. The three presenter deferrals above remain open by agreement.
