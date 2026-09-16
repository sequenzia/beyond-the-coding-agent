# Section 2 spoken pass

Provisional delivery draft, September 15, 2026. This is a shorter spoken path through the six reviewed content files. Its content is now incorporated into `outline-v2.md` and the numbered slide specs, which are canonical. This file remains the supporting delivery draft. The detailed area files retain supporting explanations. Section 2's agreed working range is 25:00 to 29:00. The presenter may trim Sections 1 and 3 later; the 45-slide narrative numbering is integrated, while the final presentation/discussion split remains open.

The five content headings remain in order after each opening quote. Labels and source notes are authoring material. Read the selected quote from research at each quote cue; exact external quotations stay in the evidence layer. Timing estimates count the quote wording and spoken takeaway, but exclude these labels and notes. See [the section review](section-review.md) for the method and results.

## 2.0 The map

**Time:** 1:50 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 7. See the current specs for per-slide cues.

**Say:**

An agent is a model plus the execution system around it, the harness. The model interprets the task and proposes responses or actions. The harness maintains context, calls tools, handles failures, enforces controls, and carries the work toward a result.

The diagram has four layers. The model. The harness around it. Services used during a run, including identity and data access. And responsibilities across runs, including observability, evaluations, and governance. You encounter these components in coding agents such as Codex CLI and Devin. We will examine the engineering decisions behind them.

Each area begins with a quote, then a definition, why it matters, the decisions and trade-offs, common problems, and an applied example.

We will carry one invented example throughout: a system that researches Failure Review Boards, compares related cases, and exports a cited brief. The request is to summarize FRB-042, compare similar shutdowns, and distinguish possible causes from established findings. People remain responsible for official causes, decisions, and board records.

**Takeaway line:** "Agent equals model plus harness. Everything around the model is engineering work."

**Sources:** Osmani, April 2026; OpenAI, August 2026; illustrative FRB packet. Research §0. This paraphrases the harness definition without adding a second quote to the map.

## 2.1 Models

**Time:** 3:55 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 8 through 12. See the current specs for per-slide cues.

**Say:**

[Read the selected Osmani quote from Research §1.]

Osmani is describing his engineering experience. Evaluate the model inside the system you are building, because the surrounding context, tools, and control flow shape the result.

**What is it?** The model interprets the task and supplied context and produces a response or proposed action. Choosing one includes its version, settings, and the service or environment where it runs. Choosing a model for a coding task is a familiar version of this decision.

**Why it matters.** Data sensitivity determines which options are eligible. For this audience, CUI and export-controlled information bring familiar constraints. Establish which services and environments are approved for the data, then compare task quality, cost, and latency within that set. A model appearing in a picker does not establish approval for your records.

**Key decisions and trade-offs.** First, eligibility. Understand the data and permitted use before ranking candidates. Approval can constrain the choice even when another model appears more capable.

Second, task fit. Compare eligible configurations on representative work inside the intended workflow. Include reasoning settings in that comparison. Measure cost and latency for completed tasks, including the retries and checks needed to obtain an acceptable result.

Third, one configuration or routing. One model provides a simpler baseline. Routing can match different work to different models, while adding configurations and routing behavior to evaluate. Begin with one unless measurements justify more.

Fourth, changes. Pinned versions need a migration plan. Moving aliases need regression monitoring. In either case, a model choice remains a dependency the team must maintain.

**Common challenges and pitfalls.** Tasks change, coverage becomes stale, and model versions retire. A pinned snapshot also does not freeze prompts, retrieval, or tools. The headline pitfall is choosing and changing models without testing them on your task. Inspect failures before deciding which component needs replacement.

**FRB application.** Assume the FRB corpus includes CUI and ECI. For this example, the approved models are older and less capable for the intended synthesis than newer alternatives outside the approved environment. That reflects a constraint familiar to this audience, not a universal claim about sensitive-data deployments.

Start with one eligible configuration. Test whether it can produce faithful summaries and supported findings. A possible cause must remain a possible cause. If it cannot reliably produce the full brief, evaluate a narrower task, such as preparing cited findings for an engineer to reconcile, or a more structured workflow with review. Those changes still need evidence that they work. If they do not meet the requirement, limit or defer that capability.

The goal is useful work within the data constraints, without lowering the evidence requirement or sending restricted records to an unapproved fallback. Revisit the design when measured needs or suitable approved options change.

That choice now depends on what information the model receives. Context and knowledge is next.

**Takeaway line:** "The model is a versioned, expiring dependency. Treat it like one."

**Sources:** Reviewed Models content; Osmani, April 2026; NARA, May and August 2025; NIST, May 2024; lifecycle sources and presenter context. Research §0 and §1. No model scores or winner are claimed.

## 2.2 Context and knowledge

**Time:** 4:05 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 13 through 17. See the current specs for per-slide cues.

**Say:**

[Read the selected Anthropic context quote from Research §2.]

You decide what information the model receives for its next step. A larger context window does not establish that every available piece of information will help.

**What is it?** Context engineering selects, organizes, and maintains instructions, task state, evidence, tool results, and useful history. Prompt engineering focuses on the instructions within that wider set. A coding agent combines repository instructions, relevant files, and test output to decide what to do next.

RAG retrieves relevant information and supplies it to the model. That can mean authorized internal records. It does not require open-web access.

**Why it matters.** A missing passage, stale version, or lost qualification can change the basis of the answer. More text does not establish better evidence. Inspect what reached the model and what was left out.

**Key decisions and trade-offs.** First, what belongs in the next step? Preserve relevant detail and uncertainty, while removing repetition that adds no evidence. A summary saves space but can lose meaning, so retain access to the source.

Second, how will retrieval find it? Keyword search matches terms and identifiers. Semantic search uses similarity of meaning and can help when wording differs, while still missing an exact identifier. Hybrid retrieval combines the signals and adds result-merging work. Use direct lookup when the source is known. Compare the approaches on the evidence your tasks need.

Third, what persists? Compaction summarizes the current conversation. Persistent memory can retain selected information across sessions. Both need decisions about freshness and what must survive. Keep important constraints, unresolved questions, and source references. Stable prefixes may help caching, but correctness and access take priority over those savings.

Fourth, provenance and scope. Keep document identity, revision, and source location attached to evidence. Enforce the user's access outside the model. A user's permission to read a record does not establish that every processing service may receive it.

**Common challenges and pitfalls.** The pitfall is adding instead of curating. Inspect retrieval coverage, summaries, and source freshness as records change. Repeated copies do not create independent evidence, and findings from one case must not drift into another.

**FRB application.** The preliminary briefing, FRB-042-BRF revision one, slide six, says bearing wear is a possible cause. The later minutes, FRB-042-MIN revision two, section three, leave the cause unresolved and require inspection. These are different documents, with distinct identities and source locations.

Retrieve both relevant passages. Keep the unresolved cause and outstanding inspection in any working summary. When comparing other boards, keep their established findings attached to their own cases. Refresh versions and access before finalizing the brief. Missing, unreadable, or inaccessible evidence becomes an explicit limitation.

The approved-processing constraint also applies to the services preparing this context. Focused evidence is a design to evaluate with the available model, not a promise that it removes every capability limit.

The next question is how the system obtains information and acts on it. That is the tool contract.

**Takeaway line:** "Context is a budget, not a bucket."

**Sources:** Reviewed Context content; Anthropic, September 2024 and September 2025; Manus, July 2025; OWASP, 2025; illustrative FRB packet. Research §0, §2, and §3.

## 2.3 Tools and extensibility

**Time:** 3:40 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 18 through 22. See the current specs for per-slide cues.

**Say:**

[Read the selected Anthropic tools quote from Research §3.]

A tool is a contract between the system and a model caller. Its name, description, inputs, results, and execution rules all contribute to that contract.

**What is it?** A tool exposes an operation the model can request. Software checks the request, executes a permitted operation, and returns a result. Reading a repository file or running tests through a coding agent are familiar examples.

Extensibility adds capabilities through these interfaces. MCP provides a common way for an AI application to connect to external systems and discover and call their tools. It also supports resources and prompt templates. The useful operations and their enforced boundaries remain engineering work.

**Why it matters.** Similar names can lead to the wrong selection. Unclear inputs can produce an unsuitable request. An incomplete result can leave the caller unable to tell what happened. When a tool accesses data or changes state, those mistakes have consequences beyond the response text.

**Key decisions and trade-offs.** First, which capabilities and what granularity? Many small operations offer flexibility but require the caller to assemble more steps. A task-oriented operation can do more in code, while embedding more assumptions about the workflow. Begin with distinct capabilities and evaluate the boundary on real tasks.

Second, the contract. Design descriptions, inputs, results, and errors together. Return useful context with stable identifiers. Sparse payloads can omit evidence, while excessive detail adds material the model must process. Evaluate actual selections and arguments, and keep the implementation aligned with the definition.

Third, execution rules. Validate inputs and enforce authorization in code. This applies to reads as well as writes. A well-formed request, a successful connection, or a model's recommendation does not grant permission.

**Common challenges and pitfalls.** The pitfall is copying the API surface without evaluating task fit. Prune overlapping capabilities, maintain contracts as behavior changes, and distinguish confirmed results, known failures, and unknown outcomes.

**FRB application.** Consider Export cited brief. Parsing and indexing are background services; the agent-facing export takes a checked draft, citations, and a permitted destination.

The service must establish that the exact content being exported passed its checks. The caller saying it was checked is insufficient. Changed content requires renewed verification. Enforce access and the destination in code. Preserve citations, unresolved findings, and limitations rather than generating a fresh summary during export.

Return a receipt when completion is confirmed. If the operation fails or its outcome is unknown, say so explicitly. An MCP connection could expose this tool, but the application service must implement those guarantees.

The result now tells the execution controller what it can establish. Orchestration decides what happens next.

**Takeaway line:** "A description guides the model. Code enforces the contract."

**Sources:** Reviewed Tools content; Anthropic, September and November 2025; MCP documentation, July 2026; OWASP, 2025; illustrative export contract. Research §0 and §3.

## 2.4 Orchestration

**Time:** 3:55 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 23 through 27. See the current specs for per-slide cues.

**Say:**

[Read the selected Anthropic orchestration quote from Research §4.]

Decide which steps code fixes and which decisions the model makes. Then establish the conditions under which that work may continue.

**What is it?** Orchestration determines the next step, carries execution state, coordinates work, and handles completion or interruption. A workflow controls a path through code. An agent loop lets the model choose actions from intermediate results. A bounded design can combine them. The coding agent's inspect, edit, check, and retry loop is a familiar example.

**Why it matters.** A useful intermediate answer is only part of a completed task. The system still needs to reach its checks, perform permitted actions, and establish what actually happened. Repeated work also consumes resources, and a retry can repeat a side effect.

**Key decisions and trade-offs.** First, who chooses the next step? Use code for known paths and required gates. Allow model judgment where adaptation helps. A proposed plan does not enforce permissions or prerequisites. Inspect the executed path and preserve acceptance criteria as branches change.

Second, delegation. Start with a bounded workflow. Multiple agents can divide independent work, while adding handoffs, reconciliation, and resource use. Add workers when measured whole-task quality, cost, or latency justifies them. Keep assignments and expected results explicit. Model choice remains the earlier decision; this is about dividing the work.

Third, stopping and recovery. Define completion checks and action, token, retry, and latency limits. Save the state needed to continue. Distinguish confirmed success, known failure, and an unknown outcome. Recheck source freshness and authorization on resume.

**Common challenges and pitfalls.** The pitfall is multi-agent before a workflow was tried. Other failures include loops without progress, early completion claims, and handoffs that lose evidence. A timeout does not establish that an action failed. Inspect what happened before repeating it.

**FRB application.** Begin with six stages: retrieve the packet, inspect evidence, compare cases, reconcile findings, verify the brief, and export. Model judgment operates within stages. Code preserves the conditions for moving to export.

Save the source revisions, working draft, completed stages, and check results. A changed draft needs verification again. Changed evidence on resume returns the affected work to inspection and reconciliation.

If the matching export receipt confirms completion, return it. If a confirmed failure establishes that export did not complete, address the cause and retry only within policy and the remaining budget. If completion is unknown, inspect the export state. If it remains unknown, preserve that uncertainty and hand off.

At a work limit, stop and state what is incomplete. A limited brief still needs its checks before export. Independent comparisons could become worker assignments later, but remain within the same approved scope and cannot export on their own.

The workflow now has a verification stage. Next, we define what its checks should establish.

**Takeaway line:** "The loop is where autonomy gets its limits. Start with the workflow."

**Sources:** Reviewed Orchestration content; Anthropic, December 2024, June and November 2025; 12-Factor Agents; illustrative workflow and recovery contract. Research §0, §3, and §4.

## 2.5 Verification and evals

**Time:** 4:35 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 28 through 32. See the current specs for per-slide cues.

**Say:**

[Read the selected Husain and Shankar quote from Research §5.]

Inspect the result and the trace before choosing a repair. A score becomes useful when the team understands the behavior behind it.

**What is it?** Verification informs acceptance of a particular result or action. Evaluation measures behavior across representative cases and repeated attempts. The same checks can serve both purposes. Evals are tests of an AI system. Ordinary software tests remain part of the work.

A coding agent running repository checks gives you evidence to inspect. Its statement that everything passed still needs to agree with the actual result and the task's requirements.

**Why it matters.** A successful demonstration shows a useful path. A product needs evidence about intended use and its important failure cases. An implementation can pass interface checks while producing an unsupported conclusion. Evaluate the outcome the user depends on, including required constraints.

**Key decisions and trade-offs.** First, success criteria. Define acceptable outcomes, serious failures, and useful limitations with domain experts. Broad criteria can be hard to apply consistently. Narrow checks can miss important behavior or reject valid variation. Reviewing outputs helps expose requirements you did not initially express.

Second, which graders? Code checks are useful for conditions you can establish directly, such as a reference resolving or an expected state existing. Model graders can help judge varied outputs against criteria, but add cost and can disagree with experts. Expert review supplies domain judgment and uses limited expert time.

Use direct checks where they fit. Compare model-grader decisions with expert decisions, inspect disagreements, and recheck as tasks or graders change. A grader also needs evaluation. In this example, a model that can receive the data is not automatically a suitable grader.

Third, cases and trials. Begin with manageable cases from real work and failures, then expand coverage. Include conditions where a limitation or handoff is correct. Repeat trials where consistency matters. One successful attempt and reliable repeated use answer different questions. Preserve established cases for regression checks and add production failures.

**Common challenges and pitfalls.** The pitfall is a generic judge instead of error analysis. Trusting the success claim without checking the result. Inspect actual outcomes, representative coverage, and the grader itself before selecting a repair. Evaluation continues after deployment and after changes to the model or harness.

**FRB application.** The answer says, “The board confirmed bearing wear,” and cites FRB-042-MIN revision two, section three, paragraph two. That reference exists. The direct reference check passes.

But the minutes leave the cause unresolved and require inspection before assigning one. The source-support check fails. Citation existence and semantic support are different checks. The expected answer preserves the unresolved cause and outstanding inspection.

Use an authorized expert, or a suitable expert-calibrated model grader within the approved data scope, for that judgment. The failing draft cannot proceed to export. Corrected content must be checked again.

Retain this as one regression case within the broader suite. Inspect the trace: did parsing, retrieval, compaction, or synthesis lose the qualification? Repair what the evidence identifies and rerun relevant cases. Passing this single check does not establish every other requirement.

Production operations connects that evidence to response during real use.

**Takeaway line:** "Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes."

**Sources:** Reviewed Evals content; Anthropic, January 2026; Husain and Shankar, September 2026; Shankar et al., UIST 2024; illustrative FRB check. Research §0 and §5. The direct-reference PASS and source-support FAIL are properties of the invented example, not measured model results.

## 2.6 Production operations

**Time:** 4:10 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 33 through 37. See the current specs for per-slide cues.

**Say:**

[Read the selected Rauch quote from Research §6.]

That is Guillermo Rauch's perspective, quoted in Datadog's report. The team needs evidence of actual behavior and responsibility for responding when the system departs from its intended use.

**What is it?** Production operations keeps the deployed system observable, controlled, and accountable. Observability connects actions and outcomes. Guardrails constrain behavior. Identity and security establish access and authority. Governance assigns responsibility for changes and incidents. Permissions, execution limits, and usage information are familiar from coding agents; a deployed product needs a responsible team behind them.

**Why it matters.** Models, prompts, records, permissions, and services can change without a corresponding application-code change. Quality, cost, latency, and access may change with them. New integrations also create combinations of capabilities that deserve a fresh review.

**Key decisions and trade-offs.** First, authority. Define whose scope an action uses, which records it permits, and where information may go. Start with least privilege and enforce boundaries outside the model. Broader access makes more tasks possible and expands what a wrong request can affect.

Second, observation. Connect requests to source revisions, observable actions, checks, and outcomes. Track quality, cost per completed task, and end-to-end latency, including retries and verification. Choose evidence that supports investigation and protect access to it. More telemetry also creates more information to manage.

Third, operating limits and handoff. Orchestration implements the run's rules. Here, assign the product policy and response: what happens when a check fails, evidence is unavailable, or a budget is exhausted? The person taking over needs the task, known state, relevant evidence, and unresolved questions.

Fourth, accountability. Identify who approves changes and who investigates incidents. Keep a way to restrict a capability or revert a problematic configuration. Evaluate changes and monitor their effects. Reverting configuration does not automatically undo an action already completed.

**Common challenges and pitfalls.** The pitfall is the lethal trifecta, assembled one integration at a time. Willison describes private data, untrusted content, and external communication combining into a potential path for data theft. A document can contain instructions, and an outbound request can carry information. Review the combined path and break or constrain it.

This is one threat model, not a complete safety test. A probabilistic filter can contribute to protection but is insufficient as the sole security boundary.

**FRB application.** The operating agreement carries forward our approved processing scope and permitted export destinations. Apply those restrictions to derived context, traces, and evaluation artifacts too.

Connect each brief to the source revisions, actions, checks, and export receipt or unknown state. Monitor supported findings, freshness, parsing and tool failures, cost per completed brief, and latency. Assign an authorized responder for failed checks, missing evidence, exhausted budgets, and unresolved export outcomes.

People remain responsible for official causes, decisions, and board records. If failures increase, the team investigates the evidence, repairs the responsible component, reruns the relevant evals, and monitors after the change. Useful controls and signals need people accountable for acting on them.

**Takeaway line:** "The system needs evidence of its behavior and people accountable for responding."

**Sources:** Reviewed Production operations content; Rauch in Datadog, 2026; Willison, June 2025; OWASP; existing observability framing; illustrative FRB operating agreement. Research §0, §3, and §6.

## 2.7 Section wrap

**Time:** 0:50 rehearsal reference within Section 2’s 25:00-to-29:00 range. **Slide:** 38. See the current specs for per-slide cues.

**Say:**

We have followed one system through six connected responsibilities: eligible models, useful context, tool contracts, execution control, evidence of quality, and production operations. A change in one can affect the others.

The diagram is now a map of engineering work you can identify, test, and improve. Much of it builds on software engineering skills you already have. The next section connects those foundations to the additional competencies you need.

**Takeaway line:** "The responsibilities connect. Your existing engineering skills give you a foundation."

**Sources:** The six reviewed areas and the published transition topic. No new factual claim or additional narrative slide is implied by this working beat label.
