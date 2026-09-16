# Beyond the Coding Agent: From Software Engineer to AI Engineer

## Presentation outline, v2

**Session:** 50 minutes. Section 2 has a working range of 25:00 to 29:00. Sections 1 and 3 retain their current 5:00 references and may be trimmed later. The final presentation/discussion split remains open. The 27:00 Section 2 rehearsal reference below is a cueing aid, not a new fixed budget.

**Date:** September 17, 2026.

**Audience:** software engineers who want to move into AI engineering. Most have used a coding agent. Few have shipped a system whose behavior depends on a model.

### Central thesis

Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.

AI engineering builds on a foundation of software engineering. This talk focuses on products around foundation models, with overlapping AI and ML roles. It adds the skills and practices needed to make systems useful, reliable, and trustworthy when part of their behavior is delegated to a foundation model. Agentic systems, where the model participates in control flow, are its most demanding expression.

### How to read this outline

- Each beat lists its time, the slide, what to say, the evidence, and a takeaway line. It is a talk-track outline, not a script.
- Sources are cited in short form. Full quotes, dates, URLs, and verification status are in `research/section-1.md`, `research/section-2.md`, and `research/section-3.md`.
- **[verify]** marks a claim to confirm in a browser before it goes on a slide.
- **[your story]** marks a slot for a first-hand example, with a note on what the story must show.
- **[you write]** marks content only the presenter can supply.
- Inside a "say" bullet, **bold text** marks a must-say line. Everything else in that bullet is backup for questions and can be cut in rehearsal.

### Structure and time budget

| Block | Rehearsal reference | Narrative slides |
|---|---|---|
| 1. Intro and central thesis | 5:00, pending later trimming | 1 through 6 |
| 2.0 The map | 1:50 | 7 |
| 2.1 Models | 3:55 | 8 through 12 |
| 2.2 Context and knowledge | 4:05 | 13 through 17 |
| 2.3 Tools and extensibility | 3:40 | 18 through 22 |
| 2.4 Orchestration | 3:55 | 23 through 27 |
| 2.5 Verification and evals | 4:35 | 28 through 32 |
| 2.6 Production operations | 4:10 | 33 through 37 |
| 2.7 Section wrap | 0:50 | 38 |
| 3. Making the transition | 5:00, pending later trimming | 39 through 45 |
| 4. Questions and discussion | Remainder of the 50-minute session | none, slide 45 stays up |

Section 2 references sum to 27:00 within the agreed 25:00-to-29:00 range. With the unchanged references for Sections 1 and 3, the talk would be about 35:00 to 39:00. This does not assign a new discussion budget. Rehearsal and any later trims determine the final split.

### The Section 2 pattern

Each area has five separately numbered static slides. The opening and closing anatomy diagrams remain standalone compositions.

1. **Quote.** The area's selected source and conceptual visual, before any explanation.
2. **What it is and why it matters.** One combined screen with a brief spoken connection to coding agents.
3. **Key decisions and trade-offs.** The choices, consequences, and conditional starting guidance.
4. **Common challenges and pitfalls.** Continuing maintenance and one headline sentence that matches slide 42.
5. **FRB application.** A distinct application of those choices to the same illustrative system.

The six standalone user screens and all paired user/owner labels are removed. Codex CLI and Devin remain the named coding-agent anchors in the map narration. There are no screenshot walkthroughs. Evals has no personal story or 1:00 reservation. The final area is Production operations. The FRB corpus's CUI/ECI requirements and older, less capable approved models are explicit illustrative deployment assumptions informed by presenter-supplied audience context. They are not universal model-performance claims.

The source of truth is this outline with `research/section-2.md`; the reviewed area files and spoken pass in `outlines/section-2-rework/` retain supporting authoring detail. Slide specs now cover narrative slides 1 through 45. The builder now implements the same 45-slide narrative. Its expansion preserves 56 physical slides and 57 presentation states.

---

## Section 1. Intro and central thesis (5:00, 6 slides)

### 1.1 Opener (1:00). Slide 1

- Slide: title, then a build revealing two lines: `demo = works.any()` and `product = works.all()`.
- Say: In June 2025 Andrej Karpathy put the whole problem in one line: "Demo is works.any(), product is works.all()." **You have probably seen your coding agent do something impressive this week.** A demo proves that a useful path exists. A product needs reliable behavior across its intended use, with a safe response when it cannot complete the task. The distance between those two calls is what this talk is about. It is the distance between using AI and engineering it.
- Takeaway line: "Production readiness means reliable behavior across intended use, with safe handling when the task cannot be completed."
- Source: Karpathy, "Software Is Changing (Again)," June 17, 2025. Research §2.
- Alternates considered, swyx's prediction and Fowler's tolerances, are in `research/section-1.md` §7 and remain usable inside 1.4.

### 1.2 Who is talking (0:30). Slide 2

Approved bio from slide 2, September 14, 2026. Stephen Sequenzia, Senior Staff AI/ML Engineer and Architect. No employer named.

1. Twenty years putting systems into production. The last several with a model in the loop.
2. Leads architecture for agentic AI systems across defense programs.
3. Has helped 500+ engineers adopt agents, and watched where using one stops and engineering one begins.

**[your story #1, optional here]** The moment a demo you built turned out not to be the product. It must show one concrete failure where a working path was not a working system. Thirty seconds. Keep it within this optional introduction slot; the evals story reservation has been removed.

### 1.3 The thesis (0:45). Slide 3

- Slide: the two thesis sentences, nothing else.
- Say:
  - **Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.**
  - **This talk focuses on building products around foundation models.** Software engineering is the foundation. The added responsibility is measuring and controlling model-dependent behavior.
  - ML engineers typically focus on models and the pipelines that produce them. AI engineers typically focus on products built around models. Roles overlap, including adaptation and fine-tuning.
  - **The engineer or team is accountable for the delivered product's behavior and operating limits.**
- Takeaway line: "The additional responsibility is measuring and controlling model-dependent behavior."
- Sources: CMU SEI; Huyen, 2025; swyx, June 2023, as background. Research §1.

### 1.4 Using AI vs engineering AI, and why it is a different discipline (1:45). Slide 4, two builds

- Slide, build 1, three-row comparison.

  | AI in your development workflow | AI in the product you deliver |
  |---|---|
  | You use model output to help build an artifact | Users depend on model output or decisions during operation |
  | You decide what to accept and ship | You design checks, approval steps, and failure handling |
  | Your coding-tool provider operates the agent platform | Your team owns the product's behavior and operating limits |

- Slide, build 2: the three commitments.
- Say:
  - The first comparison is where the model-dependent behavior lives: in the development workflow or in the delivered product. Human review can be part of either system. The owner designs checks, approvals, and safe failure handling for intended use.
  - Anthropic's distinction is the useful one. Workflows are LLMs and tools orchestrated through predefined code paths. Agents are LLMs that dynamically direct their own processes and tool usage. **An agent adds model-selected actions to control flow. Ordinary code can still enforce permissions, limits, and other guarantees.** That is why agentic systems are the most demanding expression of this discipline, and why they are the focus of Section 2.
  - Fowler's framing: this is software joining the rest of engineering in a world of non-determinism. Other disciplines build tolerances for what they cannot measure. We now have to.
  - One more thing changes, and it is subtle. Shankar and colleagues showed in a peer-reviewed study that people cannot fully write their evaluation criteria before seeing outputs. Grading outputs is how you discover the criteria. They call it criteria drift. So the order you are used to, spec then tests then code, partly inverts. You learn the spec by watching the system.
  - Three commitments for the rest of the talk, each of which comes back later:
    1. A compelling prototype is not evidence of production readiness. works.any() is not works.all().
    2. Traditional tests remain necessary but are no longer sufficient.
    3. Evaluation does not stop at deployment.
- Takeaway line: "Using AI changes how you build. Engineering AI changes what you are responsible for."
- Sources: Anthropic, "Building effective agents," December 2024; Shankar et al., UIST 2024; Fowler, August 2025. Research §2, §3, §5.

### 1.5 What you will leave with, and the agenda (0:45). Slide 5

- Slide: three takeaways on the left, agenda on the right.
- Say:
  - Three things to leave with: a conceptual map of the discipline, an honest sense of how much there is, and a roadmap for making the transition.
  - The agenda: the map and six areas, twenty-five to twenty-nine minutes: models, context and knowledge, tools, orchestration, verification and evals, and production operations. Then making the transition and your questions.
  - The pattern for each area: **a quote, what it is and why it matters, decisions and trade-offs, challenges and pitfalls, and the FRB application**.
- Source: the session description in the README.

### 1.6 Transition (0:15). Slide 6

- Slide: Section 2. What AI engineers actually engineer.
- Say: **"Let's open up the tool you used this morning."**
- Takeaway line: "Let's open up the tool you used this morning."
- Sources: none.

### Section 1 checks

- Time: 1:00 + 0:30 + 0:45 + 1:45 + 0:45 + 0:15 = 5:00.
- Description scope covered: using vs engineering; distinct discipline; AI engineer vs ML engineer; agentic systems as the most demanding expression; the three claims stated as commitments.
- Verify before stage: no Section 1 quote is flagged. Full list in `research/section-1.md`.

---

## Section 2. What AI engineers actually engineer (25:00 to 29:00, 32 narrative slides)

The rehearsal reference is 27:00. Five static slides per area follow the opening map, then a standalone closing map. The individual references below guide notes and rehearsal; they do not replace the selected range.

### 2.0 The map (1:50 reference). Slide 7

- Slide: existing anatomy diagram, full screen, with its six states.
- Say: An agent is a model plus a harness. Name the four layers: model, harness, per-run services, and across-run responsibilities. Briefly connect to Codex CLI and Devin. Introduce the invented FRB research-and-drafting request. **People retain official decision authority.**
- Takeaway line: "Agent equals model plus harness. Everything around the model is engineering work."
- Sources: Osmani, April 2026; OpenAI, August 2026; illustrative FRB packet. Research §0.

### 2.1 Models (3:55 reference). Slides 8 through 12

- Slide: 8 quote (0:25), 9 what and why (0:45), 10 decisions (1:00), 11 pitfalls (0:20), 12 FRB application (1:25).
- Say, quote: Use the selected Osmani comparison as attributed engineering experience. **Evaluate the model inside the intended system.**
- Say, what and why: The model interprets the task and context and proposes a response or action. **Data sensitivity determines which services and environments are eligible.** Briefly connect to choosing a coding-agent model. Compare quality, cost, and latency within the permitted set.
- Say, decisions: Establish data eligibility, compare model and reasoning settings on representative tasks, start with one configuration unless routing earns its complexity, and plan version changes. **Pinned versions need migration; moving aliases need regression monitoring.**
- Say, pitfalls: Maintain coverage as tasks and routes change. A pinned model does not freeze prompts, retrieval, or tools. Inspect failures before selecting a replacement.
- Say, application: Assume the FRB corpus includes CUI/ECI and approved options are older and less capable for the intended synthesis. Begin with one eligible configuration. A possible cause must remain a possible cause. If the full brief fails evaluation, test narrower scope or human reconciliation. **Keep the evidence requirement and approved processing boundary.** No scores or winning model are claimed.
- Pitfall: Choosing and changing models without testing them on your task.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Sources: Osmani, April 2026; NARA, May and August 2025; NIST, May 2024; Anthropic and OpenAI lifecycle guidance; presenter audience context, September 2026; illustrative FRB application. Research §0 and §1 in `research/section-2.md`.

### 2.2 Context and knowledge (4:05 reference). Slides 13 through 17

- Slide: 13 quote (0:20), 14 what and why (0:45), 15 decisions (1:25), 16 pitfalls (0:20), 17 FRB application (1:15).
- Say, quote: Use the selected Anthropic finite-context quotation. **Choose what information the next step needs.** No universal context-size threshold is claimed.
- Say, what and why: Context engineering selects and maintains instructions, state, evidence, tool results, and useful history. RAG supplies retrieved knowledge, including internal records. A coding agent combines repository instructions, files, and test results.
- Say, decisions: Decide what enters the step, how to retrieve it, what persists, and which sources and access scope apply. Briefly compare keyword, semantic, and hybrid retrieval. Distinguish compaction from persistent memory. **Preserve source identities and enforce access outside the model.**
- Say, pitfalls: Inspect missing evidence, lost qualifications, stale versions, and misattribution. Keep correctness and access ahead of cache savings.
- Say, application: Retrieve the preliminary FRB-042-BRF r1 slide 6 and the later FRB-042-MIN r2 §3 paragraph 2 as different documents. **Retain the unresolved cause and outstanding inspection.** Refresh revisions and access; missing or unreadable evidence remains a limitation. Context preparation inherits the approved processing scope.
- Pitfall: adding instead of curating.
- Takeaway line: "Context is a budget, not a bucket."
- Sources: Anthropic, September 2024 and September 2025; Manus, July 2025; OWASP, 2025; illustrative FRB application. Research §0 and §2 in `research/section-2.md`.

### 2.3 Tools and extensibility (3:40 reference). Slides 18 through 22

- Slide: 18 quote (0:20), 19 what and why (1:00), 20 decisions (1:00), 21 pitfalls (0:20), 22 FRB application (1:00).
- Say, quote: Use the selected Anthropic tools quotation. **A tool is a contract with a model caller.**
- Say, what and why: A tool exposes an operation that software validates, executes when permitted, and reports on. MCP provides a common connection mechanism. Briefly connect to coding-agent reads and checks. Useful operations and enforced boundaries remain application responsibilities.
- Say, decisions: Choose capabilities and granularity, design descriptions/inputs/results/errors together, and define permitted execution. More granular tools offer flexibility and add coordination work. **Validate and authorize in code, including reads.**
- Say, pitfalls: Prune overlapping tools and keep definitions aligned with implementation. Return confirmed results, known failures, or unknown outcomes explicitly.
- Say, application: Export cited brief accepts the checked draft, citations, and destination. **Verification must apply to the exact exported content.** A caller assertion is insufficient. Enforce scope, preserve uncertainty, and return a receipt. Do not claim completion when the outcome is unknown. Parsing and indexing remain background services.
- Pitfall: copying the API surface without evaluating task fit.
- Takeaway line: "A description guides the model. Code enforces the contract."
- Sources: Anthropic, September and November 2025; MCP, July 2026; OWASP, 2025; illustrative FRB contract. Research §0 and §3 in `research/section-2.md`.

### 2.4 Orchestration (3:55 reference). Slides 23 through 27

- Slide: 23 quote (0:20), 24 what and why (0:45), 25 decisions (1:00), 26 pitfalls (0:25), 27 FRB application (1:25).
- Say, quote: Use the selected Anthropic simplicity quotation. **Decide which steps code fixes and where model judgment helps.**
- Say, what and why: Orchestration sequences work, carries state, and controls completion or interruption. A bounded workflow can contain model-selected actions. Briefly connect to the coding-agent action/check/retry loop. A proposed plan does not enforce execution rules.
- Say, decisions: Choose who controls the next step, when delegation earns its coordination cost, and how execution stops or recovers. Keep multi-agent design to a brief contrast. **Define completion checks, saved state, and action/token/retry/latency limits.**
- Say, pitfalls: Inspect skipped gates, work without progress, early completion claims, and lost handoff evidence. A timeout does not establish failure. Recheck freshness and access on resume.
- Say, application: Retrieve, inspect, compare, reconcile, verify, export. **Export only after checks pass on the exact draft.** A matching receipt confirms completion; a known failure can be addressed and retried within policy; an unknown outcome requires inspection or handoff. A stopped run is not a completed brief. Optional workers remain within the approved scope.
- Pitfall: multi-agent before a workflow was tried.
- Takeaway line: "The loop is where autonomy gets its limits. Start with the workflow."
- Sources: Anthropic, December 2024, June and November 2025; 12-Factor Agents; illustrative FRB workflow. Research §0 and §4 in `research/section-2.md`.

### 2.5 Verification and evals (4:35 reference). Slides 28 through 32

- Slide: 28 quote (0:20), 29 what and why (0:50), 30 decisions (1:30), 31 pitfalls (0:25), 32 FRB application (1:30).
- Say, quote: Use the selected Husain/Shankar error-analysis quotation with both authors named. **Inspect the result and trace before choosing a repair.**
- Say, what and why: Verification informs acceptance of a particular result; evaluation measures behavior across cases and trials. These are complementary uses of checks. **Evals are tests of an AI system. Ordinary tests remain necessary.** Connect to inspecting actual coding-agent test output.
- Say, decisions: Define success with domain experts. Briefly compare code checks, model graders, and expert review. **Evaluate model graders against expert decisions.** Cover representative tasks, serious failures, and useful limitations. Repeat trials where consistency matters and preserve regression cases.
- Say, pitfalls: Inspect actual outcomes, coverage, and the grader itself. Add production failures and rerun after model or harness changes. Evaluation continues after deployment. No personal story or time reservation follows.
- Say, application: The invented answer claims the board confirmed bearing wear and cites FRB-042-MIN r2 §3 paragraph 2. The reference exists, but the minutes leave the cause unresolved and require inspection. **Reference PASS; source-support FAIL.** Prevent export of that draft, verify corrected content, and retain the failure as one regression case. Graders and reviewers remain within the approved scope.
- Pitfall: a generic judge instead of error analysis. Trusting the success claim without checking the result.
- Takeaway line: "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."
- Sources: Husain and Shankar, September 2026; Anthropic, January 2026; Shankar et al., UIST 2024; illustrative FRB check. Research §0 and §5 in `research/section-2.md`.

### 2.6 Production operations (4:10 reference). Slides 33 through 37

- Slide: 33 quote (0:25), 34 what and why (0:40), 35 decisions (1:20), 36 pitfalls (0:45), 37 FRB application (1:00).
- Say, quote: Use Rauch's selected quotation, attributed to him and published by Datadog. It is a perspective, not a measured prediction.
- Say, what and why: Production operations keeps the system observable, controlled, and accountable as dependencies and requirements change. Briefly connect to coding-agent permissions, limits, and usage views. **Observe actual outcomes and assign an accountable response.**
- Say, decisions: Define authority, observe behavior and resource use, set operating limits and handoff responsibility, and assign change/incident ownership. **Enforce scope outside the model.** Track quality, cost per completed task, and latency. Reverting configuration does not undo completed actions.
- Say, pitfalls: Review private data, untrusted content, and external communication as a combined potential exfiltration path. Break or constrain it. This is one threat model. **A probabilistic filter is insufficient as the sole security boundary.**
- Say, application: The FRB agreement covers approved records/services/destinations, protected traces and evaluation artifacts, operating signals, and an authorized responder. Follow failures into a repair, relevant evals, and monitoring. **People retain responsibility for official causes, decisions, and board records.**
- Pitfall: the lethal trifecta, assembled one integration at a time.
- Takeaway line: "The system needs evidence of its behavior and people accountable for responding."
- Sources: Rauch in Datadog, 2026; Willison, June 2025; OWASP, 2025 and 2026; OpenTelemetry guidance checked September 2026; illustrative FRB operating agreement. Research §0 and §6 in `research/section-2.md`.

### 2.7 Section wrap (0:50 reference). Slide 38

- Slide: the existing full-screen anatomy diagram with responsibility badges. Keep the model's selection responsibility.
- Say: We have followed one system through eligible models, useful context, tool contracts, execution control, evidence of quality, and production operations. A change in one can affect the others. **The diagram is a map of engineering work you can identify, test, and improve.** Connect those responsibilities to Section 3's existing skills and new competencies.
- Takeaway line: "The responsibilities connect. Your existing engineering skills give you a foundation."
- Sources: the six areas and the published transition topic. Research §0 through §6.

### Section 2 checks

- Reference time: 1:50 + 3:55 + 4:05 + 3:40 + 3:55 + 4:35 + 4:10 + 0:50 = 27:00. Working range: 25:00 to 29:00.
- Narrative slides: 7 through 38, thirty-two slides. Each five-slide area is separately numbered. The opening map retains six states; all other Section 2 compositions are static. Projected Section 2 physical count: 37.
- Description scope: context engineering and retrieval (2.2); tools and extensibility (2.3); harness design (2.0 and all six areas); orchestration (2.4); verification and evals (2.5); observability, guardrails, identity, security, governance (2.6, with boundary decisions in 2.1 through 2.4); cost and latency (2.1, 2.2, 2.4, 2.6). Prototype readiness, tests remaining necessary, and ongoing evaluation are explicit in 2.5 and 2.6.
- Structure: quote first; combined definition and importance; decisions and trade-offs; common challenges and exact headline pitfall; separate FRB application. No user/owner pairing, screenshot walkthrough, or evals personal-story reservation. The recap is slide 42.
- Evidence: FRB records, checks, and deployment constraints are illustrative. CUI/ECI eligibility is a hard constraint in the example. Older, less capable approved choices reflect presenter context and are not a universal model ranking. Citation existence differs from semantic support. No measured FRB scores or deployed outcome is claimed. Backup research retains its verification limitations.

---

## Section 3. Making the transition (5:00, 7 slides)

### 3.0 Transition (0:10). Slide 39

- Slide: Section 3. Making the transition. Matching typographic divider after the yours anatomy diagram.
- Say: Everything in the section we just covered was engineering. **Most of it is engineering you already do.**
- Takeaway line: "Most of it is engineering you already do."
- Sources: the Section 2 synthesis and the mapping in 3.1. Research §1.

### 3.1 What transfers (1:05). Slide 40

- Slide: two columns. Left, the software engineering skill. Right, what it becomes.
- Say:
  - **Decomposition and systems thinking transfer whole.** Matt Morgis at Elsevier: "For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier." The harness is a systems design problem.
  - **Interface design becomes tool design.** The same instincts about contracts, naming, granularity, and error handling. The caller changed.
  - **Testing discipline extends to evals.** The habit of checking before accepting a result transfers. Ordinary tests remain part of the machinery.
  - Observability instincts transfer with a new schema. Traces, spans, p95s. OpenTelemetry already has the GenAI conventions.
  - Security instincts transfer. Least privilege now applies to tools. OWASP has the list.
  - Operations transfer: cost, latency, incident response, rollback. The units changed to tokens.
  - Field evidence: Gergely Orosz profiled engineers at incident.io, Sentry, Elsevier, and others who crossed over in months, not years. One twenty-five-year veteran became his company's generative AI expert in about two months by reading and prototyping.
- Takeaway line: "You are not starting over. You are adding a layer."
- Sources: Orosz, "AI Engineering in the real world," March 2025; OpenTelemetry; OWASP. Research §1.

### 3.2 What is new (1:15). Slide 41

- Slide: the ladder, prompt engineering, then context engineering, then harness engineering. Below it, the new competencies as an unranked list.
- Say:
  - **Prompt engineering, context engineering, harness engineering.** This ladder is a teaching frame for expanding responsibility. The years mark examples of vocabulary in the cited posts, not the invention of the practices.
  - The competencies, in display order without ranking: model behavior intuition, informed by reading outputs. Context engineering. Tool design for a caller that reads the description every time. Harness and loop design. **Evals and error analysis.** AI security, because the attack surface is now the model's reasoning. Cost and latency as first-class design constraints.
  - The one most engineers find hardest, from Ross McNairn at Wordsmith: **"Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."**
- Takeaway line: "The new skill is not prompting. It is being comfortable measuring a system you cannot fully specify."
- Sources: Anthropic, September 2025; Husain, evals FAQ, 2026; Orosz, March 2025. Research §2.

### 3.3 The pitfalls, on one slide (0:35). Slide 42

- Slide: six lines, one per area, no other text.
  1. Models: Choosing and changing models without testing them on your task.
  2. Context: adding instead of curating.
  3. Tools: copying the API surface without evaluating task fit.
  4. Orchestration: multi-agent before a workflow was tried.
  5. Evals: a generic judge instead of error analysis. Trusting the success claim without checking the result.
  6. Production operations: the lethal trifecta, assembled one integration at a time.
- Say:
  - You have seen all six. **Every one is a symptom of the same thing: treating the demo as the product.** works.any() shipped as works.all().
  - One more that is not on the map: reaching for a framework before understanding the loop. Anthropic's warning is that frameworks "create extra layers of abstraction that can obscure the underlying prompts and responses." Learn the loop first.
- Takeaway line: "Every pitfall on this list is a demo mistaken for a product."
- Sources: Section 2; Anthropic, December 2024. Research §3.

### 3.4 The roadmap (1:25). Slide 43

- Slide: four steps.
  1. Look before you build.
  2. Start constrained.
  3. Own the harness.
  4. Add autonomy as your evals earn it.
- Say:
  - **Look before you build. On Monday, manually review twenty to fifty outputs of whatever AI feature you are closest to.** **Record the input, observed behavior, expected behavior, and check.** That is error analysis and the first entry in your eval suite. For an FRB summary, record the false confirmation, the unresolved cause, and the source-support check. Use the same record for your own system.
  - **Start constrained. A single model call with retrieval and examples. Then a workflow on predefined code paths. Add a loop only when it demonstrably improves outcomes.** Anthropic says find the simplest solution possible. OpenAI says start with a single agent, start small, validate with real users, and grow.
  - Own the harness. Own your prompts, your context window, your control flow. Learn the loop before you adopt a framework for it, so the framework is a convenience you can evaluate rather than a black box you depend on.
  - **Add autonomy as your evals earn it.** Every increase in autonomy is paid for by a verifier or an eval that catches what it breaks.
  - On the existing final state, show **“Review 20 to 50 outputs. Record the input, observed behavior, expected behavior, and check.”** The illustrative FRB row makes the assignment concrete. Hold it through the existing 30-second story reservation.

**[your story #3]** What you would tell yourself at the start of the transition. It must show one thing you would do earlier, and what it would have saved. Thirty seconds, inside this beat's time.

- Takeaway line: "Autonomy is earned by evals, one step at a time."
- Sources: Husain, evals FAQ; Anthropic, December 2024; OpenAI, "A practical guide to building agents"; Research §4, including the FRB assignment. Hashimoto's adoption arc remains research backup.

### 3.5 Resources and close (0:30). Slides 44 and 45

**Slide 44, resources.** Shown, not discussed.

- Chip Huyen, *AI Engineering: Building Applications with Foundation Models*, O'Reilly, 2025.
- Anthropic engineering: "Building effective agents" (December 2024), "Effective context engineering for AI agents" (September 2025), "Demystifying evals for AI agents" (January 2026).
- OpenAI, "A practical guide to building agents" (2025).
- Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev. Shankar and Husain, *Evals for AI Engineers*, O'Reilly, forthcoming October 2026.
- OWASP Top 10 for LLM Applications (2025) and for Agentic Applications (2026).
- OpenTelemetry GenAI semantic conventions.

**Slide 45, close.** The two thesis sentences, then "Questions."

- Say: Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer. The difference is not the tools. It is what you are responsible for. Let’s use the remaining time for your questions.
- Sources: research §4.

### Section 3 checks

- Time: 0:10 + 1:05 + 1:15 + 0:35 + 1:25 + 0:30 = 5:00.
- Slides: 20 through 26. Deck: 45 narrative slides and 46 authored compositions expand to 56 physical slides, 57 states, one internal click, one Morph transition, and 56 advances.
- Description scope, with beat numbers: which existing skills provide a strong foundation (3.1); what additional competencies the discipline demands (3.2); where to focus further learning (3.4, 3.5); a roadmap (3.4).
- Evidence status: competencies are unranked. The ladder is a teaching frame. Dice publisher figures are optional Q&A context; the LinkedIn ranking is secondary reporting.

---

## Section 4. Questions and discussion (remaining session time, Slide 45 stays up)

### Anticipated questions, with two-line answers

1. **Do I need to learn machine learning first?** You can begin without training a model. Learn enough about model behavior, retrieval, evaluation, and uncertainty to investigate failures.
2. **Which framework should I learn?** Build or inspect a small loop whose state and tool calls you understand. Choose abstractions you can observe, test, and replace.
3. **How are evals different from tests, concretely?** Evals are tests that measure AI behavior across cases and repeated trials. Code checks, model graders, and human review can all contribute. Capability suites probe limits; regression suites should keep established cases passing. Inside and outside the loop are this talk's organizing model.
4. **Is prompt injection solved?** Investigate the specific attack path: untrusted content influencing actions, private data access, or external communication. Enforce access and action limits outside the model. Breaking an exfiltration path does not solve every security threat.
5. **Single agent or multi-agent?** Start with a simple call or workflow and measure whether more autonomy helps. Use task decomposition and observed gains to decide. Anthropic's historical 90.2% quality gain compared research systems; its roughly 15x token comparison was against chat, not the single-agent research baseline.
6. **What about cost at scale?** Measure cost per completed task at the required quality, including failures, judge overhead, and tail latency. Test caching and routing on your traffic, preserve useful stable prefixes, and enforce token and action budgets. Correctness and authorization take precedence over cache savings.
7. **Will better models absorb the harness and make this obsolete?** My judgment is that some mechanisms will simplify, but the future architecture is uncertain. The product still needs explicit permissions, integration, measurement, and accountable operation.
8. **How do I get hired as an AI engineer?** Demonstrate a small system, its failure cases, its evals, and improvements justified by evidence. Show that you can investigate failures and operate within clear limits. Hiring figures are optional backup context, not the evidence of your competence.
9. **How do I trust the judge?** Use direct checks where possible. Calibrate subjective graders against domain experts, review disagreements, and evaluate on separate data that was not used to tune the judge. Recheck calibration as tasks and models change.
10. **How much accuracy is enough to ship?** Set a requirement for the use case and failure severity. Measure under expected operating conditions, examine serious failure cases separately, and design human fallback and safe failure handling. There is no universal threshold.

**Optional hiring backup:** Dice reported AI/ML postings up 101% year over year in August 2026 versus 18% for all tech postings. The publisher page was checked September 14. Dice also reported LinkedIn's #1 AI Engineer ranking; that is secondary evidence. Research §1 in `research/section-3.md`.

### Seeded discussion prompts, if the room is quiet

1. "Who here has shipped something where the model chose the control flow? What broke first?"
2. "What did your coding agent do for you this week that you would have to build yourself?"
3. "Where does your organization's AI project sit right now: pilot, workflow, or agent? What would it take to move it one step?"

### Section 4 checks

- Every answer traces to a Section 2 beat or a research entry.
- Evidence status: answers distinguish measured findings from advice and architectural judgment. Dice figures remain attributed backup; the LinkedIn primary ranking was not reached.

---

## Before the stage

### Whole-talk checks

- Time: Section 1 remains 5:00 pending later trimming. Section 2 stays in its 25:00-to-29:00 range, with a 27:00 rehearsal reference. Section 3 remains 5:00 pending later trimming. The current references imply 35:00 to 39:00 of presentation; final discussion time is the remainder of the 50-minute session.
- Deck: 45 narrative slides, six in Section 1, thirty-two in Section 2, and seven in Section 3. One Section 3 support composition brings the authored total to 46. Expansion preserves 56 physical slides, 57 states, one internal click, one Morph transition, and 56 advances.
- FRB acceptance: a suspected cause never becomes a confirmed finding without support. Later minutes remain distinct from preliminary material. Similar symptoms and duplicates do not establish a common cause. Missing, unreadable, conflicting, incomplete, or unauthorized evidence yields an explicit limitation. Export matches the selection and preserves citations and uncertainty. Check citation existence separately from semantic support.
- Rehearsal: Each area uses five static slides. The standalone map closes Section 2. Cut supporting inventory before the FRB decision, eval failure, or roadmap assignment. The evals personal story is removed. Preserve the other presenter-authored slots in Sections 1 and 3, including the 0:30 roadmap story. Orchestration has no audience pause.
- Scope from the published description, all covered: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability, guardrails, security (2.6, with security also in 2.3); cost and latency (2.1, 2.2, 2.4, 2.6); why a prototype is not production readiness (1.4, 2.5, 2.6, 3.3); why tests are necessary but not sufficient (1.4, 2.5); why evals continue after deployment (1.4, 2.5); existing skills that transfer (3.1); additional competencies (3.2); where to focus further learning (3.4, 3.5).

### What only you can supply

1. **Story #1, 1.2, optional.** A demo that turned out not to be the product.
2. **Story #3, 3.4.** What you would tell yourself at the start of the transition.

### Verify in a browser before the slide is final

| Claim | Status and stage treatment |
|---|---|
| Model lifecycle and CLI anchors | Vendor pages checked September 14. No claim of universal silent migration |
| Prime/composite comparison | Backup only. Revised paper checked September 15; retain task, prompting, and version scope |
| Routing experiment | Backup only. LangChain checked September 15; retain configurations, call-share exclusion, variation, and denominators |
| Authorization and Article 50 | OWASP authorization remains active. Article 50 is backup, with its checked role, scope, and exception retained |
| CamoLeak and EchoLeak | Both are backup. Preserve researcher-demonstration scope and the reported lack of evidence of EchoLeak exploitation |
| ClawHub audit | Backup only. The Hacker News checked September 14; underlying Koi audit not independently checked |
| Gartner | Backup only. Publisher forecast checked September 14; no architecture-to-cancellation causal claim |
| Replit and Air Canada | Backup only, from secondary reports. Attribute and paraphrase; tribunal decision not independently verified |
| FRB artifacts | Invented teaching material, including the CUI/ECI processing constraint and older, less capable approved options. Preserve revisions, uncertainty, authorized scope, and human ownership. No primary-source marker or measured model results |
| Data sensitivity | NARA and NIST sources checked September 15. Organizational eligibility and the older-model observation remain presenter context; no named service is declared approved |
| Identity pattern | Backup illustrative design pattern, separate from active authorization requirements |
| OpenTelemetry and OWASP names | Source pages checked September 14. Detailed names and convention status remain backup |
| Hiring backup | Dice publisher figures checked September 14. LinkedIn ranking known through secondary reporting |

Unverified model-release dates and unsupported research-only numbers remain off stage. Source records hold URLs, quotes, and limitations. The standalone user screenshots and evals story have been removed from the current authoring target. Resource content and the remaining presenter-authored slots are unchanged. Rehearse the final deck on the presentation machine.

### Do not use on stage

- The MIT NANDA 95% figure as a fact. Usable only as "the stat you have heard and should not trust," with the denominator caveat.
- Karpathy's "agentic engineering" lines from the Sequoia post. They are LLM-reconstructed, not spoken.
- Any AI-engineer salary band or unsupported growth figure, including 143%. The documented Dice 101% and 18% figures remain optional attributed Q&A context. Qualify LinkedIn's #1 ranking as secondary reporting.
- The "89% observability vs 52% evals" statistic. Untraceable.
