# Apply essential corrections

**Beyond the Coding Agent: From Software Engineer to AI Engineer**

**Reviewed:** September 15, 2026. **Presentation:** September 17, 2026.

**Review documents:** [Overall assessment](presentation-assessment-2026-09-15.md) · Apply essential corrections · [Develop the running example](develop-the-running-example-2026-09-15.md) · [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md).

These recommendations address accuracy, completeness, and consistency before presenting. They remain proposals. The overall assessment records the review scope and the slide-by-slide findings.

## 1. Revision priorities

1. Correct the strongest misleading lines in [the corrections below](#2-corrections-and-qualifications-before-presenting).
2. Replace all six screenshot placeholders in both full-size and strip states.
3. Prepare story #2, or use an explicitly hypothetical example.
4. Correct the Q&A answers that repeat those claims.
5. Choose the resource destination and make it usable by attendees.

## 2. Corrections and qualifications before presenting

These are more important than cosmetic improvements.

### 2.1 The opening comparison needs a realistic production standard

**Slides 1 and 4.** Keep `works.any()` and `works.all()` as the opening metaphor. Change the explanation that a product works only if “every path” works. That implies exhaustive correctness across an undefined behavior space, which the rest of the talk rightly says cannot be specified.

Suggested spoken interpretation:

> “A demo proves that a useful path exists. A product needs reliable behavior across its intended use, with a safe response when it cannot complete the task.”

Also change “Everyone in this room has shipped a works.any() this week.” Using a coding agent successfully is not necessarily shipping a demo. The coding agent itself is a production product. An opening such as “You have probably seen your coding agent do something impressive this week” makes the same connection without presuming the audience's work.

### 2.2 The thesis should describe a responsibility, with room for overlapping roles

**Slide 3.** “The coding agent is the first type” is inconsistent with the three types immediately preceding it. The engineer using the coding agent is the first type. The non-human engineering agent belongs to the third category in the cited framing.

My preferred fix is to cut the taxonomy from the spoken track. You do not need three outside definitions to establish your working definition.

Keep the published distinction between AI engineering and ML engineering, but use “typically” or “the focus here.” The README already says ML engineers “generally focus” on models and pipelines. Slide 3 turns that into a rigid boundary. Your research also quotes Huyen including parameter-efficient fine-tuning within application engineering.

Suggested scope sentence:

> “This talk focuses on building products around foundation models. Your software engineering skills are the foundation, and the additional responsibility is measuring and controlling model-dependent behavior.”

Drop “the title is three years old.” A dated essay supports the timing of a particular framing, not the invention of the profession or the term.

### 2.3 Separate use of AI during development from AI behavior in the delivered product

**Slide 4.** The current table mixes several different axes: traditional software versus model behavior, human supervision versus automation, and workflow versus agent.

“Nobody reviews every output” is not a defining feature of AI engineering. Human-reviewed AI systems still need AI engineering. “The system has to verify itself” can also sound like the model can establish its own correctness.

I would replace the table with three more precise comparisons:

| AI in your development workflow | AI in the product you deliver |
| --- | --- |
| You use model output to help build an artifact | Users depend on model output or decisions during operation |
| You decide what to accept and ship | You design checks, approval steps, and failure handling |
| Your coding-tool provider operates the agent platform | Your team owns the product's behavior and operating limits |

Then state separately that an agent adds model-selected actions to the control flow. Some guarantees can still be enforced in ordinary code. The model's presence does not remove every guarantee the system had.

### 2.4 Model routing: report selection and the tradeoff

**Slide 9.** The LangChain experiment measured the fraction of calls routed to a frontier model. It did not establish the minimum fraction that “needed” that model. Its routed configuration scored 80.0%, compared with 86.0% for frontier-only and 77.7% for small-model-only. The authors say the routed advantage over the small model was smaller than their observed run variation. [LangChain experiment](https://www.langchain.com/blog/switchyard-agent-routing-benchmark).

If retained, proposed visible wording is:

> “One 145-task experiment routed 7% of calls to the frontier model. Accuracy: 86% to 80%. Cost per completed task: $0.092 to $0.026.”

Attribute and date it visibly. Then ask which configuration meets the product's quality requirement. That teaches model selection and measurement together.

The cost-per-completed-task reduction from those displayed values is about 72%. The article's 74% figure describes total cost. Keep those denominators distinct.

### 2.5 Model replacement: avoid promising reproducibility from a model ID

**Slides 8 and 9.** An alias is not a way to pin a version. A dated snapshot controls one source of variation. It does not guarantee identical outputs or preserve changes to prompts, tools, retrieval, and the environment.

Suggested pair:

- “Pinned version: controlled migration, lifecycle management.”
- “Moving alias: automatic updates, regression monitoring.”

“Every migration happened behind a picker” also exceeds the deprecation evidence. A provider retirement does not establish how each coding tool migrated every user, whether changes were silent, or who absorbed the price change. Describe those as responsibilities a provider manages.

The 84% to 51% prime-number result is supported by the revised paper. It is a result on that task with a specific prompting setup, partly linked to changed instruction following. Use it as evidence of behavior changing across versions. Do not suggest it measures GPT-4's overall quality or proves that a pinned snapshot changed internally. [Chen, Zaharia, and Zou, revised paper](https://arxiv.org/html/2307.09009v3).

### 2.6 Retrieval and caching: make the conditions explicit

**Slide 10.** The audience could infer that grep-based retrieval is categorically preferable to embeddings, or that retrieval using file reads somehow sits outside retrieval-augmented generation.

Define retrieval-augmented generation in plain language: the system retrieves relevant external information and supplies it to the model. Then distinguish retrieval methods. Code search is a useful example of choosing a method for the data and task. Anthropic's context article discusses just-in-time retrieval and hybrid strategies, including their latency tradeoffs. [Anthropic context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

The Manus cache figures are a production team's reported experience and a particular pricing example, as recorded in Research §2. “Cached input tokens cost a tenth” is too broad without that context. “Never mutate the front of the prompt” and “do not add or remove tools mid-run” are also too absolute.

Suggested lesson:

> “Preserve stable prompt prefixes when it helps caching. Measure the savings, and update context or tool access when correctness and authorization require it.”

A stale policy does not become acceptable because retaining it improves cache hits.

### 2.7 Persistent memory is different from an authorization breach

**Slide 11.** “A memory that crosses sessions is a breach” is incorrect. Cross-session memory may be intentional. The boundary that matters is authorized access, including user and tenant isolation.

Suggested replacement:

> “Memory exposed to the wrong user or tenant is a breach.”

Also soften “a compaction that drops a constraint is a wrong answer” to “can produce a wrong answer.” Better still, show which constraint was dropped and what decision changed.

### 2.8 Tools need policy checks even when they are read-only

**Slide 13.** “Read-only: Runs” is too broad as an engineering rule. A read can expose another user's information. A fetch can send information in a URL. Reversibility also does not make an action inconsequential.

Use action categories as a starting heuristic, then show that authorization applies to every category. OWASP explicitly recommends enforcing authorization in downstream systems rather than relying on the model's decision. [OWASP Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).

Suggested three columns:

| Scoped reads | Reversible changes | Consequential actions |
| --- | --- | --- |
| Enforce access policy | Validate and support recovery | Require policy authorization or approval |

Similarly, change slide 12's “Return names, not UUIDs” to “Return meaningful names alongside the IDs needed to act.” Two customers can share a name. The useful principle is comprehensible results, with stable identifiers where needed.

“One endpoint per tool” is not inherently wrong. The problem is copying an API surface without evaluating whether its granularity suits the task. Anthropic recommends thoughtful, task-oriented tools and presents consolidation as an option. [Anthropic tool design](https://www.anthropic.com/engineering/writing-tools-for-agents).

### 2.9 Verification and evaluation are complementary uses of checks

**Slides 16, 17, and Q&A 3.** Preserve the useful distinction between checking an action now and measuring behavior across cases. Present it as the talk's organizing model, rather than a universal boundary between “tests” and “evals.”

The cited Anthropic article defines an eval as a test of an AI system. It includes deterministic graders and transcript checks, and distinguishes capability suites from regression suites. [Anthropic agent evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

Specific changes:

- Replace “Your domain has no test suite” with “You must define the checks your domain needs.” Refund limits, duplicate actions, account ownership, and ledger state are often directly checkable. Some other aspects require expert judgment.
- Replace “only one of them ever stops.” Traditional tests continue throughout the product lifecycle too.
- Replace “do not grade the process either.” Avoid forcing an arbitrary tool sequence, but check required approvals, data access, and other process constraints.
- Qualify “grade the outcome.” Check the actual result instead of trusting the agent's success claim. Still inspect the trace to understand failures and policy compliance.
- Replace the Q&A's universal warning against a 100% eval pass rate. A capability suite may need harder cases. A regression suite should continue to pass its established cases.

Suggested takeaway:

> “Check the action before accepting it. Measure behavior across representative cases. Keep both checks running as the system changes.”

### 2.10 Several eval statements need narrower scope

**Slides 16 and 21.** Husain reports spending 60% to 80% of development time on error analysis and evaluation in projects his teams worked on. That is experience, not an industry-wide allocation rule. Attribute it if used, and do not turn it into a ranked learning curriculum. [Husain's eval FAQ](https://hamel.dev/blog/posts/evals-faq/).

The zero-pass-rate diagnostic also loses its conditions in the slide. The source refers to repeated trials, with an example of pass@100, and recommends checking task specifications and graders. It is not a rule that frontier models should solve every well-formed task. The cleanest edit is to remove this number from the main slide and use the time to show a grader.

Finally, “the suite says yes or no in a day” is an aspiration. An eval suite speeds comparison, but the time needed depends on the task, sample size, deployment constraints, and observed results. Say it gives the team evidence for a migration decision.

### 2.11 The lethal trifecta is an exfiltration model, not a safety certificate

**Slides 18 and 19.** Remove “Any two is safe.” The trifecta explains how private data, untrusted content, and outbound communication can combine into an exfiltration path. Removing one element addresses that path. It does not establish safety against every other threat. [Willison's original framing](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).

A system without outbound communication can still damage internal data. A system without private data can still publish an unauthorized message. Those are simple counterexamples to the general statement.

Suggested wording:

> “These three capabilities together create an exfiltration risk. Break or constrain the path.”

Slide 19 should also avoid implying that an email sender is the first outbound channel. A web fetch tool can already communicate externally. Label the triangle by capabilities, and explain that one integration can supply more than one corner.

Change “a filter that catches 95% is not a security control” to “a probabilistic filter is insufficient as the sole security boundary.” Classification can contribute to defense in depth. It should not be confused with permission enforcement.

### 2.12 Legal claims need jurisdiction, role, and careful attribution

**Slides 18 and 19.** The European Commission confirms that Article 50 applies from August 2, 2026. Its guidance also makes distinctions between provider and deployer obligations. Direct-interaction disclosure has an exception where the AI interaction is obvious. The current blanket statement omits those conditions. [Commission transparency guidance](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations), [Commission FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act).

Suggested slide text:

> “EU AI Act Article 50: disclosure duties for covered direct AI interactions.”

Keep the detailed scope and exception in notes. This is enough legal specificity for this talk.

For Air Canada, remove the quotation marks around “The chatbot is a separate legal entity” unless you confirm those exact words and their speaker in the tribunal decision. The current research relies on legal commentary. I could not retrieve the primary decision in this pass. A paraphrase of the responsibility lesson is adequate, with its status retained in research.

### 2.13 Distinguish demonstrations, forecasts, and general operating lessons

**Slides 13 to 18.** These evidence types should not sound interchangeable:

- **CamoLeak and EchoLeak:** identify researcher-demonstrated vulnerabilities, rather than implying every described data flow was observed exploitation of customers. The local EchoLeak research explicitly notes no evidence of exploitation.
- **Gartner's 40%:** label it a forecast. It does not establish that choosing multi-agent architecture caused those projected cancellations.
- **Multi-agent 90% and 15x:** the quality comparison is against a single-agent research system. The token comparison is against chat. The different baselines are stated in the notes, but a listener can easily hear one combined experiment. [Anthropic multi-agent research](https://www.anthropic.com/engineering/multi-agent-research-system).
- **55,000 tool-definition tokens:** describe the particular five-server example. Five MCP servers do not have a fixed token cost.
- **“Tests are never edited to pass”:** explain the intent as protecting acceptance criteria. Legitimate changes to a faulty or obsolete test still need review.

## 3. Complete the actual screenshots

The current rendered deck visibly contains six labeled placeholders:

- Slide 8: Devin Desktop model picker and Codex model picker.
- Slide 10: AGENTS.md and a compaction notice.
- Slide 12: MCP configuration and a shell-command approval prompt.

These images are the audience's entry into the talk. Their absence affects the teaching mechanism, not just polish. Capture only the relevant UI, with enough text to establish the feature. Use an appropriate short AGENTS.md excerpt rather than an unreadable full file.

The builder has full-size and strip versions of these slots. Both must be replaced in saved authoring code so rebuilds preserve the screenshots.

## 4. Give important numbers enough context on screen

If a number needs a qualification to be interpreted correctly, that qualification belongs beside it. Spoken caveats can disappear when an attendee photographs a slide.

Slide 9 particularly needs the routing accuracy tradeoff next to the cost result. Slide 14 needs clearly labeled comparison baselines. The 60% to 80% time allocation needs an attribution if retained.

The alternative is to remove the number. Small, unreadable caveats are a poor compromise.

## 5. Improve the Q&A answers

The existing questions are well chosen. I would revise these answers before rehearsal:

| Question | Better emphasis |
| --- | --- |
| Do I need to learn ML first? | You can begin without training a model. Learn enough about model behavior, retrieval, evaluation, and uncertainty to investigate failures |
| Which framework? | Build or inspect a small loop whose state and tool calls you understand. Choose abstractions you can observe, test, and replace |
| How are evals different from tests? | Evals are tests designed to measure AI behavior across cases and repeated trials. Ordinary tests remain part of the checking machinery |
| Is prompt injection solved? | Describe the relevant attack path and enforce limits outside the model. Avoid presenting a removed triangle corner as complete security |
| Single or multi-agent? | Decide based on task decomposition and measured improvement. Keep the 15x figure attached to its historical chat baseline if used |
| Will better models remove the harness? | Specific mechanisms may simplify. The product still needs explicit permissions, integration, measurement, and accountable operation. Frame future architecture as judgment |
| How do I get hired? | Show a small system, its failure cases, its evals, and the changes justified by evidence. The hiring statistics are optional context |

Two additional questions deserve preparation:

- “How do I trust the judge?” Answer with expert calibration, disagreement review, direct checks where possible, and separate evaluation data.
- “How much accuracy is enough to ship?” Answer in terms of the use case, failure severity, human fallback, and measured operating conditions. Avoid a universal threshold.

## 6. Keep the source layers synchronized

Follow the repository's established sequence: research for factual claims, outline for the argument, slide specifications for presentation content, and `internal/deck/author.mjs` for visible text and builds. Visual changes belong in `style/design-brief.md` first.

A few existing mismatches are worth cleaning up during revision:

- The outline still leaves the bio as `[you write]`, although slide 2 has approved copy.
- The outline's map reference points to the original portrait PNG while the slide and builder use the landscape variant.
- Slide 17 and the outline use different relative phrasing about recent model releases.
- The outline's closing “Do not use” language about growth percentages conflicts with the growth figures explicitly prepared for hiring Q&A. Clarify which figures are excluded.
- Some “no unverified material on stage” summaries are broader than the research supports, particularly the identity pattern and loosely dated model-release references.
- The marker `[primary]` is sometimes qualified as primary only for a secondary report. Preserve that distinction in the claim record rather than treating the marker alone as sufficient verification.

For the worked case and personal-story structure, continue with [Develop the running example](develop-the-running-example-2026-09-15.md). Use [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md) to prepare the revised material for delivery.
