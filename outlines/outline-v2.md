# Beyond the Coding Agent: From Software Engineer to AI Engineer

## Presentation outline, v2

**Session:** 50 minutes. Section 2 has a working range of 25:00 to 29:00. Section 1 has a 4:00 rehearsal target. Section 3 has a 4:30 reference. The 27:00 Section 2 rehearsal reference below is a cueing aid, not a new fixed budget. Discussion fills the remainder of the session.

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
| 1. Intro and central thesis | 4:00 | 1 through 8 |
| 2.0 The map | 1:50 | 9 |
| 2.1 Model Selection | 3:55 | 10 through 14 |
| 2.2 Context Engineering | 4:05 | 15 through 19 |
| 2.3 Tools & Extensibility | 3:40 | 20 through 24 |
| 2.4 Orchestration | 3:55 | 25 through 29 |
| 2.5 Verification & Evals | 4:35 | 30 through 34 |
| 2.6 AgentOps | 4:10 | 35 through 39 |
| 2.7 Section wrap | 0:50 | 40 |
| 3. Making the transition | 4:30 | 41 through 47 |
| 4. Questions and discussion | Remainder of the 50-minute session | none, slide 47 stays up |

Section 2 references sum to 27:00 within the agreed 25:00-to-29:00 range. With Section 1 at 4:00 and Section 3 at 4:30, the talk runs about 33:30 to 37:30. Discussion fills the remainder of the 50-minute session.

### The Section 2 pattern

Each area has five separately numbered static slides. The opening and closing anatomy diagrams remain standalone compositions.

1. **Quote.** The area's selected source and conceptual visual, before any explanation.
2. **What it is and why it matters.** One combined screen with a brief spoken connection to coding agents.
3. **Key decisions and trade-offs.** The choices, consequences, and conditional starting guidance.
4. **Common challenges and pitfalls.** Continuing maintenance and one headline sentence that matches slide 44.
5. **FRB application.** A distinct application of those choices to the same illustrative system.

The six standalone user screens and all paired user/owner labels are removed. Codex CLI and Devin remain the named coding-agent anchors in the map narration. There are no screenshot walkthroughs. Verification & Evals has no personal story or 1:00 reservation. The final area is AgentOps. The FRB corpus's CUI/ECI requirements and older, less capable approved models are explicit illustrative deployment assumptions informed by presenter-supplied audience context. They are not universal model-performance claims.

The source of truth is this outline with `research/section-2.md`; the reviewed area files and spoken pass in `outlines/section-2-rework/` retain supporting authoring detail. Slide specs now cover narrative slides 1 through 47. The builder now implements the same 47-slide narrative. Its expansion produces 54 physical slides and 55 presentation states.

---

## Section 1. Intro and central thesis (4:00, 8 slides)

### 1.1 Title (0:05). Slide 1

- Slide: Beyond the Coding Agent. From Software Engineer to AI Engineer. Presenter name and role.
- Say: Welcome. A brief greeting, then introduce yourself on slide 2.
- Takeaway line: "Beyond the Coding Agent: From Software Engineer to AI Engineer."
- Sources: the published session title in the README.

### 1.2 Who is talking (0:30). Slide 2

Approved bio from slide 2, September 14, 2026. Stephen Sequenzia, Senior Staff AI/ML Engineer and Architect. No employer named.

1. Twenty years putting systems into production. The last several with a model in the loop.
2. Leads architecture for agentic AI systems across defense programs.
3. Has helped 500+ engineers adopt agents, and watched where using one stops and engineering one begins.

**[your story #1, optional here]** The moment a demo you built turned out not to be the product. It must show one concrete failure where a working path was not a working system. Thirty seconds. Retained as an optional presenter-authored slot, not part of this 4:00 rehearsal version. Including it requires a later timing change; the evals story reservation has been removed.

### 1.3 Agenda and goals (0:25). Slide 3

- Slide: the full agenda, with a smaller goals section beneath it. No visible times or teaching-pattern footer.
  1. What changes when AI becomes part of the product
  2. What AI engineers actually engineer: Model Selection, Context Engineering, Tools & Extensibility, Orchestration, Verification & Evals, AgentOps
  3. Making the transition: skills that transfer, new competencies, and where to start
  4. Questions and discussion
- Say: **First, what changes when AI becomes part of the product. Then the six engineering areas. Finally, making the transition and your questions.** You will leave with a map of the engineering responsibilities, an understanding of what production readiness requires, and a starting point for your own transition.
- Takeaway line: "A map of the responsibilities, an understanding of production readiness, and a starting point for your transition."
- Sources: the published session description in the README.

### 1.4 Section 1 divider (0:10). Slide 4

- Slide: Section 1. What changes when AI becomes part of the product.
- Say: Let the section title sit, then advance to the opening metaphor. No additional explanation.
- Takeaway line: "What changes when AI becomes part of the product."
- Sources: the published session description in the README.

### 1.5 Opening hook (0:40). Slide 5

- Slide: `demo = works.any()` and `product = works.all()`, with Karpathy attribution.
- Say: **You have probably seen a coding agent do something impressive.** Andrej Karpathy captures the gap between that moment and a product with these two lines. **A demo shows that a useful path exists. A product needs reliable behavior across its intended use, including a safe response when it cannot complete the task.** When AI becomes part of the product, engineering that behavior becomes your responsibility.
- Takeaway line: "Production readiness means reliable behavior across intended use, with safe handling when the task cannot be completed."
- Source: Karpathy, "Software Is Changing (Again)," June 2025. Research §2.

### 1.6 The thesis (0:30). Slide 6

- Slide: the two thesis sentences, nothing else.
- Say:
  - **Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.** Let the visible thesis carry these sentences; supporting narration follows.
  - **This talk focuses on products built around foundation models. Your software engineering skills are the foundation.**
  - ML engineers typically focus on models and the pipelines that produce them. AI engineers typically focus on products around those models. **The roles overlap.**
  - **The added responsibility is measuring and controlling the model's contribution to the product's behavior.**
- Takeaway line: "The additional responsibility is measuring and controlling model-dependent behavior."
- Sources: CMU SEI; Huyen, 2025; swyx, June 2023, as background. Research §1.

### 1.7 Using AI vs engineering AI (1:30). Slide 7, two screens

- Slide, first screen: editable comparison.

  | AI during software development | AI in the product you deliver |
  |---|---|
  | AI helps you build the software | AI contributes to its behavior during use |
  | You review and test what you ship | You also evaluate model behavior across representative cases |
  | Your coding-tool provider operates the agent platform | Your team owns the AI system's behavior and operating limits |

- Slide, second screen: title "Production readiness" and the three commitments. Retain the small `works.any()` / `works.all()` subline beneath the first.
- Say:
  - **The distinction is where the model-dependent behavior lives.** During development, AI helps build the software. In the delivered product, users depend on model output or actions during use. **Human review can exist on either side.**
  - Your team owns the AI system's behavior and operating limits. You design checks, permissions, approval steps, and failure handling.
  - **In a predefined workflow, code fixes the path. An agent can let the model select the next action. Your code still enforces permissions and limits.** This is why the talk examines agentic systems and the system around the model.
  - At 0:55, replace the comparison with Production readiness:
    1. **A compelling prototype is not evidence of production readiness.** works.any() is not works.all().
    2. **Traditional tests are necessary but no longer sufficient.**
    3. **Evaluation does not stop at deployment.**
- Takeaway line: "Using AI changes how you build. Engineering AI changes what you are responsible for."
- Sources: Anthropic, "Building effective agents," December 2024. Research §5. The three commitments restate the published description. Fowler, August 2025, and Shankar et al., UIST 2024, remain backup only in Research §2 and §3 and the slide's Markdown after the handoff.

### 1.8 Section 2 transition (0:10). Slide 8

- Slide: Section 2. What AI engineers actually engineer.
- Say: **"Let's look at the system around the model, and the engineering each part requires."**
- Takeaway line: "Let's look at the system around the model, and the engineering each part requires."
- Sources: the Section 2 responsibility map.

### Section 1 checks

- Time: 0:05 + 0:30 + 0:25 + 0:10 + 0:40 + 0:30 + 1:30 + 0:10 = 4:00.
- Narrative slides: 1 through 8. Title, bio, agenda, Section 1 divider, hook, thesis, comparison and commitments, Section 2 divider. Nine physical slides because the comparison has two screens.
- Description scope covered: using vs engineering (1.5 through 1.7); distinct discipline and AI versus ML roles (1.6); agentic systems as the most demanding expression and the three production commitments (1.7); learning goals and full agenda (1.3).
- Verify before stage: no Section 1 quote is flagged. Full list in `research/section-1.md`.

---

## Section 2. What AI engineers actually engineer (25:00 to 29:00, 32 narrative slides)

The rehearsal reference is 27:00. Five static slides per area follow the opening map, then a standalone closing map. The individual references below guide notes and rehearsal; they do not replace the selected range.

### 2.0 The map (1:50 reference). Slide 9

- Slide: existing anatomy diagram, full screen, with its six states.
- Say: An agent is a model plus a harness. Name the four layers: model, harness, per-run services, and across-run responsibilities. Briefly connect to Codex CLI and Devin. Introduce the invented FRB research-and-drafting request. **People retain official decision authority.**
- Takeaway line: "Agent equals model plus harness. Everything around the model is engineering work."
- Sources: Osmani, April 2026; OpenAI, August 2026; illustrative FRB packet. Research §0.

### 2.1 Model Selection (3:55 reference). Slides 10 through 14

- Slide: 10 quote (0:25), 11 what and why (0:45), 12 decisions (1:00), 13 pitfalls (0:20), 14 FRB application (1:25).
- Say, quote: Use the selected Osmani comparison as attributed engineering experience. **Evaluate the model inside the intended system.**
- Say, what and why: Model Selection means choosing and maintaining a model configuration suited to the task and approved for the data. The model interprets context and proposes a response or action. **Data sensitivity determines which services and environments are eligible.** Briefly connect to choosing a coding-agent model. Compare quality, cost, and latency within the permitted set.
- Say, decisions: Establish data eligibility, compare model and reasoning settings on representative tasks, start with one configuration unless routing earns its complexity, and plan version changes. **Pinned versions need migration; moving aliases need regression monitoring.**
- Say, pitfalls: Maintain coverage as tasks and routes change. A pinned model does not freeze prompts, retrieval, or tools. Inspect failures before selecting a replacement.
- Say, application: Assume the FRB corpus includes CUI/ECI and approved options are older and less capable for the intended synthesis. Begin with one eligible configuration. A possible cause must remain a possible cause. If the full brief fails evaluation, test narrower scope or human reconciliation. **Keep the evidence requirement and approved processing boundary.** No scores or winning model are claimed.
- Pitfall: Selecting or changing models without testing them on your task.
- Takeaway line: "The model is a versioned, expiring dependency. Treat it like one."
- Sources: Osmani, April 2026; NARA, May and August 2025; NIST, May 2024; Anthropic and OpenAI lifecycle guidance; presenter audience context, September 2026; illustrative FRB application. Research §0 and §1 in `research/section-2.md`.

### 2.2 Context Engineering (4:05 reference). Slides 15 through 19

- Slide: 15 quote (0:20), 16 what and why (0:45), 17 decisions (1:25), 18 pitfalls (0:20), 19 FRB application (1:15).
- Say, quote: Use the selected Anthropic finite-context quotation. **Choose what information the next step needs.** No universal context-size threshold is claimed.
- Say, what and why: Context engineering selects and maintains instructions, state, evidence, tool results, and useful history. RAG supplies retrieved knowledge, including internal records. A coding agent combines repository instructions, files, and test results.
- Say, decisions: Decide what enters the step, how to retrieve it, what persists, and which sources and access scope apply. Briefly compare keyword, semantic, and hybrid retrieval. Distinguish compaction from persistent memory. **Preserve source identities and enforce access outside the model.**
- Say, pitfalls: Inspect missing evidence, lost qualifications, stale versions, and misattribution. Keep correctness and access ahead of cache savings.
- Say, application: Retrieve the preliminary FRB-042-BRF r1 slide 6 and the later FRB-042-MIN r2 §3 paragraph 2 as different documents. **Retain the unresolved cause and outstanding inspection.** Refresh revisions and access; missing or unreadable evidence remains a limitation. Context preparation inherits the approved processing scope.
- Pitfall: Adding context without curating it.
- Takeaway line: "Context is a budget, not a bucket."
- Sources: Anthropic, September 2024 and September 2025; Manus, July 2025; OWASP, 2025; illustrative FRB application. Research §0 and §2 in `research/section-2.md`.

### 2.3 Tools & Extensibility (3:40 reference). Slides 20 through 24

- Slide: 20 quote (0:20), 21 what and why (1:00), 22 decisions (1:00), 23 pitfalls (0:20), 24 FRB application (1:00).
- Say, quote: Use the selected Anthropic tools quotation. **A tool is a contract with a model caller.**
- Say, what and why: A tool exposes an operation that software validates, executes when permitted, and reports on. MCP provides a common connection mechanism. Briefly connect to coding-agent reads and checks. Useful operations and enforced boundaries remain application responsibilities.
- Say, decisions: Choose capabilities and granularity, design descriptions/inputs/results/errors together, and define permitted execution. More granular tools offer flexibility and add coordination work. **Validate and authorize in code, including reads.**
- Say, pitfalls: Prune overlapping tools and keep definitions aligned with implementation. Return confirmed results, known failures, or unknown outcomes explicitly.
- Say, application: Export cited brief accepts the checked draft, citations, and destination. **Verification must apply to the exact exported content.** A caller assertion is insufficient. Enforce scope, preserve uncertainty, and return a receipt. Do not claim completion when the outcome is unknown. Parsing and indexing remain background services.
- Pitfall: Copying APIs without evaluating task fit.
- Takeaway line: "A description guides the model. Code enforces the contract."
- Sources: Anthropic, September and November 2025; MCP, July 2026; OWASP, 2025; illustrative FRB contract. Research §0 and §3 in `research/section-2.md`.

### 2.4 Orchestration (3:55 reference). Slides 25 through 29

- Slide: 25 quote (0:20), 26 what and why (0:45), 27 decisions (1:00), 28 pitfalls (0:25), 29 FRB application (1:25).
- Say, quote: Use the selected Anthropic simplicity quotation. **Decide which steps code fixes and where model judgment helps.**
- Say, what and why: Orchestration sequences work, carries state, and controls completion or interruption. A bounded workflow can contain model-selected actions. Briefly connect to the coding-agent action/check/retry loop. A proposed plan does not enforce execution rules.
- Say, decisions: Choose who controls the next step, when delegation earns its coordination cost, and how execution stops or recovers. Keep multi-agent design to a brief contrast. **Define completion checks, saved state, and action/token/retry/latency limits.**
- Say, pitfalls: Inspect skipped gates, work without progress, early completion claims, and lost handoff evidence. A timeout does not establish failure. Recheck freshness and access on resume.
- Say, application: Retrieve, inspect, compare, reconcile, verify, export. **Export only after checks pass on the exact draft.** A matching receipt confirms completion; a known failure can be addressed and retried within policy; an unknown outcome requires inspection or handoff. A stopped run is not a completed brief. Optional workers remain within the approved scope.
- Pitfall: Adding multiple agents before trying a workflow.
- Takeaway line: "The loop is where autonomy gets its limits. Start with the workflow."
- Sources: Anthropic, December 2024, June and November 2025; 12-Factor Agents; illustrative FRB workflow. Research §0 and §4 in `research/section-2.md`.

### 2.5 Verification & Evals (4:35 reference). Slides 30 through 34

- Slide: 30 quote (0:20), 31 what and why (0:50), 32 decisions (1:30), 33 pitfalls (0:25), 34 FRB application (1:30).
- Say, quote: Use the selected Husain/Shankar error-analysis quotation with both authors named. **Inspect the result and trace before choosing a repair.**
- Say, what and why: Verification informs acceptance of a particular result; evaluation measures behavior across cases and trials. These are complementary uses of checks. **Evals are tests of an AI system. Ordinary tests remain necessary.** Connect to inspecting actual coding-agent test output.
- Say, decisions: Define success with domain experts. Briefly compare code checks, model graders, and expert review. **Evaluate model graders against expert decisions.** Cover representative tasks, serious failures, and useful limitations. Repeat trials where consistency matters and preserve regression cases.
- Say, pitfalls: Inspect actual outcomes, coverage, and the grader itself. Add production failures and rerun after model or harness changes. Evaluation continues after deployment. No personal story or time reservation follows.
- Say, application: The invented answer claims the board confirmed bearing wear and cites FRB-042-MIN r2 §3 paragraph 2. The reference exists, but the minutes leave the cause unresolved and require inspection. **Reference PASS; source-support FAIL.** Prevent export of that draft, verify corrected content, and retain the failure as one regression case. Graders and reviewers remain within the approved scope.
- Pitfall: Using a generic judge without error analysis or result checks.
- Takeaway line: "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."
- Sources: Husain and Shankar, September 2026; Anthropic, January 2026; Shankar et al., UIST 2024; illustrative FRB check. Research §0 and §5 in `research/section-2.md`.

### 2.6 AgentOps (4:10 reference). Slides 35 through 39

- Slide: 35 quote (0:25), 36 what and why (0:40), 37 decisions (1:20), 38 pitfalls (0:45), 39 FRB application (1:00).
- Say, quote: Use Rauch's selected quotation, attributed to him and published by Datadog. It is a perspective, not a measured prediction.
- Say, what and why: AgentOps means operating agentic systems with observability, enforced controls, and accountable response as dependencies and requirements change. Briefly connect to coding-agent permissions, limits, and usage views. **Observe actual outcomes and assign an accountable response.**
- Say, decisions: Define authority, observe behavior and resource use, set operating limits and handoff responsibility, and assign change/incident ownership. **Enforce scope outside the model.** Track quality, cost per completed task, and latency. Reverting configuration does not undo completed actions.
- Say, pitfalls: Review private data, untrusted content, and external communication as a combined potential exfiltration path. Break or constrain it. This is one threat model. **A probabilistic filter is insufficient as the sole security boundary.**
- Say, application: The FRB agreement covers approved records/services/destinations, protected traces and evaluation artifacts, operating signals, and an authorized responder. Follow failures into a repair, relevant evals, and monitoring. **People retain responsibility for official causes, decisions, and board records.**
- Pitfall: Combining private data, untrusted content, and outbound access without reviewing the risk.
- Takeaway line: "The system needs evidence of its behavior and people accountable for responding."
- Sources: Rauch in Datadog, 2026; Willison, June 2025; OWASP, 2025 and 2026; OpenTelemetry guidance checked September 2026; illustrative FRB operating agreement. Research §0 and §6 in `research/section-2.md`.

### 2.7 Section wrap (0:50 reference). Slide 40

- Slide: the existing full-screen anatomy diagram with responsibility badges. Keep the model's selection responsibility.
- Say: We have followed one system through Model Selection, Context Engineering, Tools & Extensibility, Orchestration, Verification & Evals, and AgentOps. A change in one can affect the others. **The diagram is a map of engineering work you can identify, test, and improve.** Connect those responsibilities to Section 3's existing skills and new competencies.
- Takeaway line: "The responsibilities connect. Your existing engineering skills give you a foundation."
- Sources: the six areas and the published transition topic. Research §0 through §6.

### Section 2 checks

- Reference time: 1:50 + 3:55 + 4:05 + 3:40 + 3:55 + 4:35 + 4:10 + 0:50 = 27:00. Working range: 25:00 to 29:00.
- Narrative slides: 9 through 40, thirty-two slides. Each five-slide area is separately numbered. The opening map retains six states; all other Section 2 compositions are static. Projected Section 2 physical count: 37.
- Description scope: context engineering and retrieval (2.2); tools and extensibility (2.3); harness design (2.0 and all six areas); orchestration (2.4); verification and evals (2.5); observability, guardrails, identity, security, governance (2.6, with boundary decisions in 2.1 through 2.4); cost and latency (2.1, 2.2, 2.4, 2.6). Prototype readiness, tests remaining necessary, and ongoing evaluation are explicit in 2.5 and 2.6.
- Structure: quote first; combined definition and importance; decisions and trade-offs; common challenges and exact headline pitfall; separate FRB application. No user/owner pairing, screenshot walkthrough, or evals personal-story reservation. The recap is slide 44.
- Evidence: FRB records, checks, and deployment constraints are illustrative. CUI/ECI eligibility is a hard constraint in the example. Older, less capable approved choices reflect presenter context and are not a universal model ranking. Citation existence differs from semantic support. No measured FRB scores or deployed outcome is claimed. Backup research retains its verification limitations.

---

## Section 3. Making the transition (4:30, 7 slides)

### 3.0 Transition (0:10). Slide 41

- Slide: Section 3. Making the transition. Matching typographic divider after the yours anatomy diagram.
- Say: **Now let's focus on your transition: the skills you bring, the new competencies, and a practical place to start.**
- Takeaway line: "Your existing skills give you a foundation to build on."
- Sources: the Section 2 synthesis and the mapping in 3.1. Research §1.

### 3.1 What transfers (1:05). Slide 42

- Slide: one static screen with two columns. Left, the existing skill. Right, its application in an AI system: bounded workflows and clear state; tool contracts and explicit outcomes; evals and regression cases; traces of model calls and tool actions; enforced access and action limits; quality, cost, latency, and recovery.
- Say:
  - **Your engineering habits give you a foundation.** Decomposition helps you define a bounded workflow and the state it carries.
  - Interface design helps you specify tool inputs, errors, and evidence of completion.
  - **Testing discipline extends to evals and regression cases.** Ordinary software tests remain necessary.
  - Debugging and observability help you follow model calls and tool actions to investigate a failure.
  - Least privilege guides access and action limits. Code enforces those boundaries.
  - Production operations brings monitoring, incident response, and recovery. Track quality alongside cost and latency.
  - **You are learning how to apply these skills to model-dependent behavior.**
- Takeaway line: "Your engineering habits give you a foundation for model-dependent systems."
- Sources: the talk's skill mapping in Research §1 of `research/section-3.md`, grounded in Section 2 Research §3 through §6.

### 3.2 What you add (1:15). Slide 43

- Slide: one static screen titled What you add. Six unranked rows pair the Section 2 areas with their model-specific competencies.
- Say:
  - **The added work is understanding and controlling model-dependent behavior.** Read failures and compare models on the intended task.
  - Select useful evidence and preserve qualifications through retrieval and summarization.
  - Evaluate how the model selects and uses tools. A valid argument shape does not establish a correct choice or successful action.
  - Bound model-selected actions and define stopping, recovery, and handoff.
  - **Define quality with domain experts and measure behavior across representative cases and repeated trials.** Inspect failures before choosing a repair.
  - Investigate quality changes. Address prompt injection and enforced permissions alongside cost per completed task and end-to-end latency.
- Takeaway line: "Learn to measure and control model-dependent behavior."
- Sources: the competency synthesis in Research §2 of `research/section-3.md`, grounded in Section 2 Research §1 through §6.

### 3.3 The pitfalls, on one slide (0:35). Slide 44

- Slide: six lines, one per area, no other text.
  1. Model Selection: Selecting or changing models without testing them on your task.
  2. Context Engineering: Adding context without curating it.
  3. Tools & Extensibility: Copying APIs without evaluating task fit.
  4. Orchestration: Adding multiple agents before trying a workflow.
  5. Verification & Evals: Using a generic judge without error analysis or result checks.
  6. AgentOps: Combining private data, untrusted content, and outbound access without reviewing the risk.
- Say:
  - You have seen each of these in the system we walked through. **Use them to guide what you inspect in your own system.**
  - Model and tool choices need task evidence. Context needs curation. More autonomy needs checks and limits. Inspect failures and review the capabilities your integrations combine.
  - **A practical first step is to examine outputs, record a failure, and define the check that would catch it.** The roadmap makes that first assignment concrete.
- Takeaway line: "Use these pitfalls to guide your first checks."
- Sources: Section 2 Research §1 through §6; recap synthesis in Section 3 Research §3 and first assignment in §4.

### 3.4 The roadmap (0:55). Slide 45

- Slide: four steps.
  1. Choose one narrow task.
  2. Start with one model call.
  3. Turn failures into checks.
  4. Add autonomy when evals justify it.
- Say:
  - **Choose one narrow task**, such as summarizing a document with citations.
  - **Start with one model call** and examples you can inspect. If you already have an AI feature, use its outputs for the chosen task.
  - **Turn failures into checks.** Inspect the result, repair the cause, and rerun the cases.
  - **Add autonomy when evals justify it.** Keep actions bounded and verify the result. A workflow or loop is a design to evaluate when the task needs it.
  - On the final state, show **“Review 20 to 50 outputs for one task. Record the input, observed behavior, expected behavior, and check.”** The illustrative FRB row contrasts false confirmation with an unresolved cause and a source-support check. Apply the record to the chosen task. Fix the cause and rerun the case so it becomes a regression check.

- Takeaway line: "Autonomy is earned by evals, one step at a time."
- Sources: Husain, evals FAQ; Anthropic, December 2024; learning-sequence synthesis and FRB assignment in Research §4. OpenAI's guide and Hashimoto's adoption arc remain supporting research.

### 3.5 Resources and close (0:30). Slides 46 and 47

**Slide 46, resources.** Shown, not discussed.

- Chip Huyen, *AI Engineering: Building Applications with Foundation Models*, O'Reilly, 2025.
- Anthropic engineering: "Building effective agents" (December 2024), "Effective context engineering for AI agents" (September 2025), "Demystifying evals for AI agents" (January 2026).
- OpenAI, "A practical guide to building agents" (2025).
- Hamel Husain, "AI Evals: Everything You Need to Know," hamel.dev. Shankar and Husain, *Evals for AI Engineers*, O'Reilly, forthcoming October 2026.
- OWASP Top 10 for LLM Applications (2025) and for Agentic Applications (2026).
- OpenTelemetry GenAI semantic conventions.

**Slide 47, close.** The two thesis sentences, then "Questions."

- Say: Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer. The difference is not the tools. It is what you are responsible for. Let’s use the remaining time for your questions.
- Sources: research §4.

### Section 3 checks

- Time: 0:10 + 1:05 + 1:15 + 0:35 + 0:55 + 0:30 = 4:30.
- Slides: 41 through 47. Deck: 47 narrative slides and 47 authored compositions expand to 54 physical slides, 55 states, one internal click, no Morph transitions, and 54 advances.
- Description scope, with beat numbers: which existing skills provide a strong foundation (3.1); what additional competencies the discipline demands (3.2); where to focus further learning (3.4, 3.5); a roadmap (3.4).
- Evidence status: competencies are unranked learning objectives grounded in Section 2's engineering decisions. Dice publisher figures are optional Q&A context; the LinkedIn ranking is secondary reporting.

---

## Section 4. Questions and discussion (remaining session time, Slide 47 stays up)

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

- Time: Section 1 has a 4:00 rehearsal target. Section 2 stays in its 25:00-to-29:00 range, with a 27:00 rehearsal reference. Section 3 is 4:30. The current references imply 33:30 to 37:30 of presentation; discussion fills the remainder of the 50-minute session.
- Deck: 47 narrative slides, eight in Section 1, thirty-two in Section 2, and seven in Section 3. Each narrative slide has one authored composition. Expansion produces 54 physical slides, 55 states, one internal click, no Morph transitions, and 54 advances.
- FRB acceptance: a suspected cause never becomes a confirmed finding without support. Later minutes remain distinct from preliminary material. Similar symptoms and duplicates do not establish a common cause. Missing, unreadable, conflicting, incomplete, or unauthorized evidence yields an explicit limitation. Export matches the selection and preserves citations and uncertainty. Check citation existence separately from semantic support.
- Rehearsal: Each area uses five static slides. The standalone map closes Section 2. Cut supporting inventory before the FRB decision, eval failure, or roadmap assignment. The evals and roadmap personal stories are removed. Preserve the optional presenter-authored slot in Section 1. Orchestration has no audience pause.
- Scope from the published description, all covered: context engineering and retrieval (2.2); agent tools and extensibility (2.3); harness design (2.0 and the six areas); orchestration (2.4); evaluations and verification (2.5); observability, guardrails, security (2.6, with security also in 2.3); cost and latency (2.1, 2.2, 2.4, 2.6); why a prototype is not production readiness (1.7, 2.5, 2.6, 3.3); why tests are necessary but not sufficient (1.7, 2.5); why evals continue after deployment (1.7, 2.5); existing skills that transfer (3.1); additional competencies (3.2); where to focus further learning (3.4, 3.5).

### What only you can supply

1. **Story #1, 1.2, optional.** A demo that turned out not to be the product.

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
