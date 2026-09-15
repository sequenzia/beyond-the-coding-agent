# Presentation assessment

## Beyond the Coding Agent: From Software Engineer to AI Engineer

**Reviewed:** September 15, 2026. **Presentation:** September 17, 2026.

## Executive assessment

**This presentation has a strong central idea and a coherent teaching structure. Its greatest opportunity is to make the engineering decisions as memorable as the warnings.**

The central idea is responsibility. A developer who uses a coding agent benefits from a system someone else operates. An engineer who builds a model-dependent product must decide how that system behaves, how to measure it, what it may do, and what happens when it fails. Taking apart familiar coding-agent features is an effective way to make those responsibilities visible.

I would preserve the title, the six areas, the repeated handoff to “when it's your agent,” the opening and closing callbacks, and the return to the diagram with ownership labels. Those elements give the talk an identity. The published topic coverage is present, and the planned times reconcile.

The current draft has four weaknesses:

1. **It teaches a map more completely than it teaches how to use the map.** Many lists identify responsibilities. Fewer examples show a decision, a failure, and the evidence that would justify a change.
2. **Several memorable statements become inaccurate when read literally.** The most consequential concern verification, memory boundaries, read-only tools, and the security trifecta. Correcting them would increase credibility without weakening the thesis.
3. **The evidence sometimes occupies the space the explanation needs.** Statistics, quotations, product settings, and incident names accumulate quickly. Some results lose their experimental scope when compressed into slide copy.
4. **The current deck still needs presentation preparation.** Six screenshots remain placeholders. The most valuable personal story is unwritten. Native playback on the presentation machine remains a separate check.

My recommendation is a focused revision. Keep the architecture of the talk. Correct the misleading lines, complete the real examples, and use the time recovered from secondary statistics to show one small system being engineered.

### The five changes I would prioritize

| Priority | Change | Why it matters |
| --- | --- | --- |
| 1 | Correct the claims listed in §4, especially slides 4, 9, 11, 13, 16, 17, and 18 | These can teach the wrong engineering rule or invite a justified objection |
| 2 | Finish the six screenshots and prepare story #2 | These are central to the promised connection between familiar tools and your experience |
| 3 | Carry one illustrative customer-support case through the six areas | This turns a taxonomy into a design process |
| 4 | Replace part of slide 16's statistics with one concrete eval case | Evaluation is the talk's most important new competency |
| 5 | Make slide 23's first action visible and provide a usable resource link | This makes the roadmap something attendees can actually follow |

## 1. Scope and basis of this review

I read the [README](../README.md) first, then all 25 slide specifications, including their build descriptions, layouts, talk tracks, sources, open items, and Q&A notes. I also reviewed the [current outline](../outlines/outline-v2.md), all three research files, the design brief, and the deck build guide.

For visual context, I inspected contact sheets covering all 81 rendered states in `.deck-build/2026-09-15/renders/`, plus a full-size spot check. The validation record for that build identifies the same final file hash as [the current PowerPoint](../output/beyond-the-coding-agent-2026-09-17.pptx). Its build map contains 33 physical slides representing the 25 narrative slides. This review did not test native PowerPoint animation or venue projection.

I also checked selected external sources where the wording materially affected the recommendation. Those checks are cited beside the relevant findings. This is a presentation and content assessment with targeted source checks, rather than a complete re-verification of every product command, quotation, and date.

The recommendations below are proposals. This review does not change the outline, research, slide specifications, design brief, or PowerPoint. Suggested examples are illustrative. Personal story slots remain yours to fill.

## 2. What the talk is trying to accomplish

### The audience transition

The audience begins with experience of a finished product: a coding agent. They may have chosen a model, edited an instructions file, watched a test loop, or approved a command. They generally have less experience building the system that makes those interactions possible.

The intended transition has three parts:

- **Recognition:** identify the engineering hidden behind familiar features.
- **Responsibility:** understand what changes when their own product depends on a model.
- **Action:** see which existing skills transfer and choose a manageable first project.

The talk succeeds if someone leaves able to explain what they would build around a model, how they would know whether it works, and how they would limit its authority.

### The narrative as currently designed

| Section | Narrative job | Current assessment |
| --- | --- | --- |
| 1, slides 1 to 6 | Establish the production gap and define the discipline | Clear premise, with too much definition and attribution in the spoken track |
| 2, slides 7 to 19 | Reveal the system behind the coding agent and transfer ownership | Strong coverage and repetition, with uneven depth of explanation |
| 3, slides 20 to 25 | Make the transition feel achievable and give a roadmap | Encouraging, but the most useful first action is absent from the rendered roadmap |
| Questions | Resolve objections and connect the map to attendees' work | Good preparation, with several answers that repeat oversimplifications from the main talk |

### Coverage against the published description

The fixed scope is covered. The issue is the depth of treatment within that scope.

| Published promise | Where it appears | Assessment |
| --- | --- | --- |
| AI engineering built on software engineering | 3, 4, 20, 21 | Strong, but the ML engineering boundary is too categorical |
| RAG and model-powered workflows within a broader discipline | 4, 10, 15, 23 | Present, but RAG needs a plain definition and a positive example |
| Context and retrieval | 10, 11 | Rich coverage, sometimes overly prescriptive |
| Tools and extensibility | 12, 13 | Good interface-design connection, weak alignment between incidents and the named pitfall |
| Harness design and orchestration | 7, 14, 15, 19 | Strong conceptual framing, limited demonstration of an actual control decision |
| Verification, tests, and evaluations | 4, 16, 17 | Correctly emphasized, but the distinctions need repair |
| Observability, guardrails, and security | 18, 19 | Covered densely, with a misleading security assurance |
| Cost and latency | 8 to 10, 15, 18 | Well distributed, but the routing example needs its quality tradeoff on screen |
| Prototype versus production | 1, 4, 16 to 19, 22 | Repeated consistently, sometimes framed as an impossible promise of perfection |
| Evaluation after deployment | 4, 17 | Explicit, but the feedback process could be more concrete |
| Skills and learning roadmap | 20 to 24 | Sound direction, stronger with a tangible first deliverable |

## 3. What works especially well

### 3.1 The coding agent is an effective teaching device

The familiar feature gives each area an entry point. The model picker leads to selection and migration. Compaction leads to context loss. The permission prompt leads to action authority. The test loop leads to verification.

This is the presentation's distinguishing feature. Protect these connections when cutting material. Do not let the “what someone engineered” portion become a sequence of research summaries detached from the feature that opened the area.

### 3.2 Responsibility is a more useful theme than job-title taxonomy

“What changes when it is your agent?” gives the audience a practical reason to care. The title distinction becomes useful when it points to ownership of outcomes, rather than an argument about who deserves a label.

The closing line about responsibility expresses the talk's contribution more clearly than the history of the term “AI engineer.” Give your own framing more room in the introduction.

### 3.3 The repetition has a purpose

The area headers, kickers, mini-map, and pitfall bands create a recognizable rhythm. Slide 22 can therefore consolidate ideas the audience has already encountered. The return to the anatomy diagram on slide 19 is a good payoff.

The repetition to reduce is within the explanations: multiple quotes supporting the same point, repeated lists of ownership items, and several ways of saying that a demo is insufficient.

### 3.4 Evals receive appropriate emphasis

Giving verification and evaluation the largest area budget is the right editorial decision. The reservation-row example is particularly effective because it makes an abstract distinction concrete.

The connection from model replacement on slide 9 to an eval-based decision on slide 17 is another strength. More connections of that kind would make the six areas feel like one system.

### 3.5 The preparation materials are unusually useful

The source hierarchy, explicit time budgets, cut instructions, story slots, and build specifications make this talk revisable. The research files also record uncertainty instead of hiding it.

However, some slide language is stronger than the associated source. Verification must check the claim being spoken, including its scope, rather than just the presence of the number in an article.

## 4. Corrections and qualifications before presenting

These are more important than cosmetic improvements.

### 4.1 The opening comparison needs a realistic production standard

**Slides 1 and 4.** Keep `works.any()` and `works.all()` as the opening metaphor. Change the explanation that a product works only if “every path” works. That implies exhaustive correctness across an undefined behavior space, which the rest of the talk rightly says cannot be specified.

Suggested spoken interpretation:

> “A demo proves that a useful path exists. A product needs reliable behavior across its intended use, with a safe response when it cannot complete the task.”

Also change “Everyone in this room has shipped a works.any() this week.” Using a coding agent successfully is not necessarily shipping a demo. The coding agent itself is a production product. An opening such as “You have probably seen your coding agent do something impressive this week” makes the same connection without presuming the audience's work.

### 4.2 The thesis should describe a responsibility, with room for overlapping roles

**Slide 3.** “The coding agent is the first type” is inconsistent with the three types immediately preceding it. The engineer using the coding agent is the first type. The non-human engineering agent belongs to the third category in the cited framing.

My preferred fix is to cut the taxonomy from the spoken track. You do not need three outside definitions to establish your working definition.

Keep the published distinction between AI engineering and ML engineering, but use “typically” or “the focus here.” The README already says ML engineers “generally focus” on models and pipelines. Slide 3 turns that into a rigid boundary. Your research also quotes Huyen including parameter-efficient fine-tuning within application engineering.

Suggested scope sentence:

> “This talk focuses on building products around foundation models. Your software engineering skills are the foundation, and the additional responsibility is measuring and controlling model-dependent behavior.”

Drop “the title is three years old.” A dated essay supports the timing of a particular framing, not the invention of the profession or the term.

### 4.3 Separate use of AI during development from AI behavior in the delivered product

**Slide 4.** The current table mixes several different axes: traditional software versus model behavior, human supervision versus automation, and workflow versus agent.

“Nobody reviews every output” is not a defining feature of AI engineering. Human-reviewed AI systems still need AI engineering. “The system has to verify itself” can also sound like the model can establish its own correctness.

I would replace the table with three more precise comparisons:

| AI in your development workflow | AI in the product you deliver |
| --- | --- |
| You use model output to help build an artifact | Users depend on model output or decisions during operation |
| You decide what to accept and ship | You design checks, approval steps, and failure handling |
| Your coding-tool provider operates the agent platform | Your team owns the product's behavior and operating limits |

Then state separately that an agent adds model-selected actions to the control flow. Some guarantees can still be enforced in ordinary code. The model's presence does not remove every guarantee the system had.

### 4.4 Model routing: report selection and the tradeoff

**Slide 9.** The LangChain experiment measured the fraction of calls routed to a frontier model. It did not establish the minimum fraction that “needed” that model. Its routed configuration scored 80.0%, compared with 86.0% for frontier-only and 77.7% for small-model-only. The authors say the routed advantage over the small model was smaller than their observed run variation. [LangChain experiment](https://www.langchain.com/blog/switchyard-agent-routing-benchmark).

If retained, proposed visible wording is:

> “One 145-task experiment routed 7% of calls to the frontier model. Accuracy: 86% to 80%. Cost per completed task: $0.092 to $0.026.”

Attribute and date it visibly. Then ask which configuration meets the product's quality requirement. That teaches model selection and measurement together.

The cost-per-completed-task reduction from those displayed values is about 72%. The article's 74% figure describes total cost. Keep those denominators distinct.

### 4.5 Model replacement: avoid promising reproducibility from a model ID

**Slides 8 and 9.** An alias is not a way to pin a version. A dated snapshot controls one source of variation. It does not guarantee identical outputs or preserve changes to prompts, tools, retrieval, and the environment.

Suggested pair:

- “Pinned version: controlled migration, lifecycle management.”
- “Moving alias: automatic updates, regression monitoring.”

“Every migration happened behind a picker” also exceeds the deprecation evidence. A provider retirement does not establish how each coding tool migrated every user, whether changes were silent, or who absorbed the price change. Describe those as responsibilities a provider manages.

The 84% to 51% prime-number result is supported by the revised paper. It is a result on that task with a specific prompting setup, partly linked to changed instruction following. Use it as evidence of behavior changing across versions. Do not suggest it measures GPT-4's overall quality or proves that a pinned snapshot changed internally. [Chen, Zaharia, and Zou, revised paper](https://arxiv.org/html/2307.09009v3).

### 4.6 Retrieval and caching: make the conditions explicit

**Slide 10.** The audience could infer that grep-based retrieval is categorically preferable to embeddings, or that retrieval using file reads somehow sits outside retrieval-augmented generation.

Define retrieval-augmented generation in plain language: the system retrieves relevant external information and supplies it to the model. Then distinguish retrieval methods. Code search is a useful example of choosing a method for the data and task. Anthropic's context article discusses just-in-time retrieval and hybrid strategies, including their latency tradeoffs. [Anthropic context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

The Manus cache figures are a production team's reported experience and a particular pricing example, as recorded in Research §2. “Cached input tokens cost a tenth” is too broad without that context. “Never mutate the front of the prompt” and “do not add or remove tools mid-run” are also too absolute.

Suggested lesson:

> “Preserve stable prompt prefixes when it helps caching. Measure the savings, and update context or tool access when correctness and authorization require it.”

A stale policy does not become acceptable because retaining it improves cache hits.

### 4.7 Persistent memory is different from an authorization breach

**Slide 11.** “A memory that crosses sessions is a breach” is incorrect. Cross-session memory may be intentional. The boundary that matters is authorized access, including user and tenant isolation.

Suggested replacement:

> “Memory exposed to the wrong user or tenant is a breach.”

Also soften “a compaction that drops a constraint is a wrong answer” to “can produce a wrong answer.” Better still, show which constraint was dropped and what decision changed.

### 4.8 Tools need policy checks even when they are read-only

**Slide 13.** “Read-only: Runs” is too broad as an engineering rule. A read can expose another user's information. A fetch can send information in a URL. Reversibility also does not make an action inconsequential.

Use action categories as a starting heuristic, then show that authorization applies to every category. OWASP explicitly recommends enforcing authorization in downstream systems rather than relying on the model's decision. [OWASP Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).

Suggested three columns:

| Scoped reads | Reversible changes | Consequential actions |
| --- | --- | --- |
| Enforce access policy | Validate and support recovery | Require policy authorization or approval |

Similarly, change slide 12's “Return names, not UUIDs” to “Return meaningful names alongside the IDs needed to act.” Two customers can share a name. The useful principle is comprehensible results, with stable identifiers where needed.

“One endpoint per tool” is not inherently wrong. The problem is copying an API surface without evaluating whether its granularity suits the task. Anthropic recommends thoughtful, task-oriented tools and presents consolidation as an option. [Anthropic tool design](https://www.anthropic.com/engineering/writing-tools-for-agents).

### 4.9 Verification and evaluation are complementary uses of checks

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

### 4.10 Several eval statements need narrower scope

**Slides 16 and 21.** Husain reports spending 60% to 80% of development time on error analysis and evaluation in projects his teams worked on. That is experience, not an industry-wide allocation rule. Attribute it if used, and do not turn it into a ranked learning curriculum. [Husain's eval FAQ](https://hamel.dev/blog/posts/evals-faq/).

The zero-pass-rate diagnostic also loses its conditions in the slide. The source refers to repeated trials, with an example of pass@100, and recommends checking task specifications and graders. It is not a rule that frontier models should solve every well-formed task. The cleanest edit is to remove this number from the main slide and use the time to show a grader.

Finally, “the suite says yes or no in a day” is an aspiration. An eval suite speeds comparison, but the time needed depends on the task, sample size, deployment constraints, and observed results. Say it gives the team evidence for a migration decision.

### 4.11 The lethal trifecta is an exfiltration model, not a safety certificate

**Slides 18 and 19.** Remove “Any two is safe.” The trifecta explains how private data, untrusted content, and outbound communication can combine into an exfiltration path. Removing one element addresses that path. It does not establish safety against every other threat. [Willison's original framing](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).

A system without outbound communication can still damage internal data. A system without private data can still publish an unauthorized message. Those are simple counterexamples to the general statement.

Suggested wording:

> “These three capabilities together create an exfiltration risk. Break or constrain the path.”

Slide 19 should also avoid implying that an email sender is the first outbound channel. A web fetch tool can already communicate externally. Label the triangle by capabilities, and explain that one integration can supply more than one corner.

Change “a filter that catches 95% is not a security control” to “a probabilistic filter is insufficient as the sole security boundary.” Classification can contribute to defense in depth. It should not be confused with permission enforcement.

### 4.12 Legal claims need jurisdiction, role, and careful attribution

**Slides 18 and 19.** The European Commission confirms that Article 50 applies from August 2, 2026. Its guidance also makes distinctions between provider and deployer obligations. Direct-interaction disclosure has an exception where the AI interaction is obvious. The current blanket statement omits those conditions. [Commission transparency guidance](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations), [Commission FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act).

Suggested slide text:

> “EU AI Act Article 50: disclosure duties for covered direct AI interactions.”

Keep the detailed scope and exception in notes. This is enough legal specificity for this talk.

For Air Canada, remove the quotation marks around “The chatbot is a separate legal entity” unless you confirm those exact words and their speaker in the tribunal decision. The current research relies on legal commentary. I could not retrieve the primary decision in this pass. A paraphrase of the responsibility lesson is adequate, with its status retained in research.

### 4.13 Distinguish demonstrations, forecasts, and general operating lessons

**Slides 13 to 18.** These evidence types should not sound interchangeable:

- **CamoLeak and EchoLeak:** identify researcher-demonstrated vulnerabilities, rather than implying every described data flow was observed exploitation of customers. The local EchoLeak research explicitly notes no evidence of exploitation.
- **Gartner's 40%:** label it a forecast. It does not establish that choosing multi-agent architecture caused those projected cancellations.
- **Multi-agent 90% and 15x:** the quality comparison is against a single-agent research system. The token comparison is against chat. The different baselines are stated in the notes, but a listener can easily hear one combined experiment. [Anthropic multi-agent research](https://www.anthropic.com/engineering/multi-agent-research-system).
- **55,000 tool-definition tokens:** describe the particular five-server example. Five MCP servers do not have a fixed token cost.
- **“Tests are never edited to pass”:** explain the intent as protecting acceptance criteria. Legitimate changes to a faulty or obsolete test still need review.

## 5. The strongest improvement: one case that connects the areas

### 5.1 Use a case already close to the draft

I recommend a small customer-support workflow handling a refund request. Refund correctness is already on slide 17, so this needs less setup than an unrelated example.

Introduce it as a hypothetical design exercise:

> “A customer asks for a refund. The system must find the right policy, determine what it is allowed to do, and either complete the request or hand it to someone who can.”

Use a sentence or a small artifact in each “when it's your agent” slide. Keep the coding-agent feature as the entry point. This case supplies continuity on the product side of the comparison.

| Area | Decision in the example | What the audience learns |
| --- | --- | --- |
| Models | Compare candidate models on the same refund cases | Choose against a quality requirement and operating budget |
| Context | Retrieve the policy with its effective date and the authorized customer's order | Relevance, freshness, and access boundaries affect correctness |
| Tools | Expose an operation with explicit inputs, authorization, and a recorded result | The tool contract includes more than a function name |
| Orchestration | Handle an ambiguous tool timeout without issuing a second refund | State, recovery, and stopping rules are familiar engineering work |
| Evals | Check the refund record and the explanation across eligible, ineligible, and ambiguous requests | Combine direct assertions with judgment where needed |
| Operating | Trace the decision and action, enforce identity, and hand unresolved cases to a human | The product needs accountable operation |

These are illustrative design choices, not claims about any deployed product. If adopted, put the example into the outline before the slides and add sources for any new factual claims.

### 5.2 Show one eval case instead of another statistic

The most valuable new visual would be a small, readable record on slide 16 or 17:

| Part of the case | Illustrative content |
| --- | --- |
| Input | An authenticated customer asks for a refund on an eligible order |
| Observed behavior | The assistant says the refund succeeded |
| State check | The correct refund exists once in the ledger |
| Policy check | The action was authorized for this customer and order |
| Communication rubric | The answer accurately describes the recorded result |
| Repeated evaluation | Run this and other cases across model and harness changes |

This lets the presenter point to the exact thing an engineer would implement. It also resolves the false choice between deterministic checks and model-based grading.

Use the example to explain why a single overall success rate may hide a bad failure. Wrong-account access and an awkward sentence should not count as equivalent defects in the release decision.

### 5.3 Make the improvement process visible

The draft tells attendees to keep evaluating. Show the next step after a failure:

1. Inspect a failed case and its trace.
2. Decide whether the failure came from retrieval, policy, the tool, the model, or the grader.
3. Change the relevant component.
4. Rerun the case and the existing suite.
5. Compare the result with sampled production behavior.

This makes error analysis tangible. It also answers the likely audience question: “What does an AI engineer do on an ordinary Tuesday?”

### 5.4 Make your experience the emotional center

Story #2 should be the primary personal story. Give it a clear structure:

- What the system was supposed to do.
- What the existing checks said.
- What a user or a broader evaluation revealed.
- What you changed and how you checked the change.

Only include details you can truthfully share. Keep the placeholder until you supply them. If no suitable story is available, explicitly label the refund example as hypothetical and teach from it. Do not present a composite as a personal event.

Story #3 can then be a short reflection that refers back to the same lesson. Two unrelated personal stories near the end are less useful than one story whose conclusion changes the roadmap.

### 5.5 Start ownership with the product's purpose

The diagram leaves Goal without a “yours” badge because the user supplies it. That is visually reasonable, but the spoken explanation should still establish who defines acceptable goals, successful completion, and the agent's authority.

For the refund example, identify the user problem, the permitted action, and the evidence of success before choosing a model. Ask what improvement over the existing workflow would make the system worth operating. A cheaper model call is not the same as a better support outcome.

This also gives the human-centered part of the published description a practical expression. The engineer designs when the system asks for clarification, when it defers a decision, and how a person takes over with enough context to help. A handoff can be a successful designed outcome.

## 6. Slide-by-slide assessment

### Section 1: the premise

| Slide | What works | Recommended change |
| --- | --- | --- |
| [1. Opener](../slides/section-1/01-works-any-works-all.md) | Compact code metaphor, strong visual, useful callback | Define product reliability within intended use. Change the claim that everyone shipped a demo. Connect the gap to an actual failure the audience can picture |
| [2. Who is talking](../slides/section-1/02-who-is-talking.md) | Relevant production experience and restrained biography | Deliver the bio in two or three natural sentences. Reserve the optional story for evals. Your public experience is sufficient authority without adding more numbers |
| [3. Thesis](../slides/section-1/03-the-thesis.md) | Two sentences communicate the topic clearly | Cut most named definitions from the spoken track. Correct the three-type reference if retained. Describe ML engineering as an overlapping focus rather than a rigid border |
| [4. Using versus engineering](../slides/section-1/04-using-ai-vs-engineering-ai.md) | The three commitments provide a useful backbone | Replace the absolute comparison rows. Explain criteria drift with a small example or defer its detail to evals. This is currently one of the fastest, most conceptually crowded spoken passages |
| [5. Takeaways and agenda](../slides/section-1/05-takeaways-and-agenda.md) | Honest expectations and a clear repeated pattern | Say the pattern once. Let the slide carry the minute counts. Consider replacing “an honest sense of how much there is” with an outcome such as identifying what a first project needs |
| [6. Transition](../slides/section-1/06-transition.md) | A deliberate pause before the architectural reveal | Keep it short and confident. A static cursor is sufficient if animation proves distracting or unreliable. Avoid an extended silence if the room has already slowed the introduction |

### Section 2: the engineering responsibilities

| Slide | What works | Recommended change |
| --- | --- | --- |
| [7. Map](../slides/section-2/07-the-map.md) | Model, harness, and platform responsibilities become visible | Name it as the working map for this talk, not literally the whole discipline. Shorten the quoted definition. Narrate how one request moves through the picture. Explain that ownership includes selecting and integrating existing services |
| [8. Models, familiar feature](../slides/section-2/08-models-what-you-touched.md) | The reasoning slider can make cost and latency tangible | Fill both screenshot slots. Explain what the audience sees before discussing routing. Reduce the five hidden responsibilities to those you will carry forward. Remove universal migration claims |
| [9. Models, responsibility](../slides/section-2/09-models-when-its-your-agent.md) | Select, measure, and replace is a useful engineering sequence | Correct the routing statement and show the quality tradeoff. Qualify snapshots and aliases. Prefer a clear migration decision over several retirement counts and dates |
| [10. Context, familiar feature](../slides/section-2/10-context-what-you-touched.md) | Instructions and compaction offer recognizable experiences | Fill both image slots. Explain one actual context failure before naming four kinds. Define RAG and show a retrieval choice. Scope the cache recommendation to its conditions |
| [11. Context, responsibility](../slides/section-2/11-context-when-its-your-agent.md) | The bounded window is a clear picture | Correct the cross-session-memory line. Replace some ownership labels with one preserved constraint, one stale fact, or one access boundary in the running case |
| [12. Tools, familiar feature](../slides/section-2/12-tools-what-you-touched.md) | The contract between tool and caller is a strong bridge from API design | Fill both image slots. Briefly expand MCP for anyone who has only used built-in tools. Show one tool description before and after a design improvement. Scope names versus IDs and the token example |
| [13. Tools, responsibility](../slides/section-2/13-tools-when-its-your-agent.md) | “You write the contract. You build the gate” identifies real ownership | Fix “Read-only: Runs.” The two security incidents do not demonstrate why one endpoint per tool is a pitfall. Prefer one contract failure and one authorization decision, or retain a single incident with its mechanism explained |
| [14. Orchestration, familiar feature](../slides/section-2/14-orchestration-what-you-touched.md) | Gather, act, verify is one of the deck's clearest pictures | Walk one iteration with a failure or stopping decision. Cut one of the two benchmark stories. Explain hooks as configured checks, without implying that every tool call should run the entire test suite |
| [15. Orchestration, responsibility](../slides/section-2/15-orchestration-when-its-your-agent.md) | Starting with the simplest useful workflow is good guidance | Replace part of the eight-item list with a timeout, retry, and recovery example. Include idempotency in plain language: retrying should not repeat a completed side effect. Move the Gartner forecast to backup |
| [16. Evals, familiar feature](../slides/section-2/16-evals-what-you-touched.md) | The success claim versus recorded outcome is the strongest teaching example | Make the distinctions precise. Protect story #2. Show one real or illustrative grader. Remove the zero-pass diagnostic and scope the time-allocation statistic. Explain the probability notation with numbers if it stays |
| [17. Evals, responsibility](../slides/section-2/17-evals-when-its-your-agent.md) | The return to model migration makes the areas connect | Replace “Your domain has no test suite” and the claim that only one type of check continues. Show how production failures update the suite. Avoid a guaranteed one-day migration decision |
| [18. Operating, familiar feature](../slides/section-2/18-operating-what-you-touched.md) | The talk treats observability, security, identity, and governance as product responsibilities | This area needs the most editorial restraint. Correct the trifecta and legal wording. Explain one incident clearly. Keep cost per completed task, but also make task success and end-to-end latency visible as operating measures |
| [19. Operating and wrap](../slides/section-2/19-operating-when-its-your-agent.md) | The translation table and “yours” diagram create a strong conclusion | Explain that a human approval step can remain part of a customer product. Correct the web-fetch example. Say that owning a box means owning its requirements and integration, not implementing everything yourself |

### Section 3: the transition

| Slide | What works | Recommended change |
| --- | --- | --- |
| [20. What transfers](../slides/section-3/20-what-transfers.md) | Directly answers the audience's concern about starting over | Keep the mapping visible while encouraging the audience. “The same, in tokens” understates recovery, side effects, and user outcomes. Say that the engineering habits transfer while the failure modes expand. Treat the two-month story as one person's experience |
| [21. What is new](../slides/section-3/21-what-is-new.md) | Gives names to the additional work | The dated ladder looks like a history of invention and a required progression. Reframe it as expanding scope. The ranked list conflicts with the later advice to start with evals. Remove the ranking or put observation and error analysis first |
| [22. Pitfalls](../slides/section-3/22-the-pitfalls.md) | Recognition makes this an effective recap | Keep it. Reconcile any wording changes with the six bands. Spend the short time consolidating those six rather than introducing a seventh framework warning and repeating the same conclusion twice |
| [23. Roadmap](../slides/section-3/23-the-roadmap.md) | Four steps give the talk a practical destination | Put the first action on screen. Replace the small Hashimoto arc with the deliverable attendees should create. His story concerns adopting AI tools, which is less direct evidence for shipping an AI product. Make “start constrained” a valid endpoint, not a mandatory staircase toward autonomy |
| [24. Resources](../slides/section-3/24-resources.md) | Relevant readings already support the content | Provide a short URL or QR code to a curated list. Group by what the reader needs next. Mark the October book as forthcoming if it remains listed. Eight seconds is a weak delivery mechanism for this amount of text |
| [25. Close](../slides/section-3/25-close.md) | Repeating the thesis provides recognition and a calm Q&A screen | Keep the responsibility line as the last substantive sentence. Correct the backup answers about tests, 100% eval rates, and multi-agent cost. A useful resource link can stay available in the handout or resource slide |

## 7. Pacing, attention, and delivery

### 7.1 The budget reconciles, but the pressure is uneven

The source slides total 35:00: Section 1 is 5:00, Section 2 is 25:00, and Section 3 is 5:00. The two-slide area splits match their beats. The six pitfall sentences match the recap.

The existence of timestamps is not evidence that the spoken track fits comfortably. Approximate counts after removing stage directions put slide 3 at about 130 words in 0:45, slide 4 at about 300 words in 1:45, and slide 8 at about 170 words in 1:00. Those passages require roughly 170 to 180 words per minute before meaningful pauses. These are reading estimates, not measurements of your delivery.

Other slides have more apparent slack. The main pacing problem is therefore concentrated explanation, rather than a simple excess of total words.

The later dense passages also require audience work: understanding a new metric, reading labels, remembering a prior example, and interpreting a statistic. A passage can fit at a normal speaking speed and still move too quickly to teach.

### 7.2 Protect these checkpoints

| End of source slide | Current cumulative target |
| --- | --- |
| 6, introduction | 5:00 |
| 7, map | 7:00 |
| 9, models | 10:30 |
| 11, context | 14:00 |
| 13, tools | 17:00 |
| 15, orchestration | 20:30 |
| 17, evals | 25:30 |
| 19, Section 2 wrap | 30:00 |
| 25, close | 35:00 |

Rehearse to these section and area boundaries with the actual clicks. Preserve the 15:00 question period. As a rehearsal target, aim to finish a clean run around 33:00 so normal room pauses have somewhere to go.

### 7.3 Change the cut order

Several current notes protect the most information-dense material: both incidents on slide 13, the routing number on slide 9, and all three incidents on slide 18. I would reverse that priority.

Protect:

- The familiar feature that opens each area.
- The decision the engineer now owns.
- One example that explains that decision.
- The eval case and personal story.
- The roadmap and closing thought.

Cut first:

1. Extra retirement counts, notice windows, and model-release dates.
2. The second source or quotation making the same point.
3. Lists of command variants, permission modes, and named workflow patterns.
4. The second security example serving the same mechanism.
5. Gartner's forecast and the seven-item learning ranking.
6. The additional framework warning and Hashimoto adoption arc.

This changes no published topic. It shifts time from supporting inventory to explanation.

### 7.4 Optional redistribution within the fixed budget

If a substantive revision is feasible, this is one allocation I would try. It keeps the existing 25-slide narrative and the 5:00 / 25:00 / 5:00 section budgets.

| Section 2 beat | Current | Suggested |
| --- | --- | --- |
| Map | 2:00 | 1:30 |
| Models | 3:30 | 3:00 |
| Context | 3:30 | 4:00 |
| Tools | 3:00 | 3:30 |
| Orchestration | 3:30 | 3:30 |
| Evals | 5:00 | 5:30 |
| Operating | 4:30 | 4:00 |
| **Total** | **25:00** | **25:00** |

The shorter operating beat depends on cutting incident inventory and the OWASP name list. It is not an instruction to deliver the existing text faster.

For Section 3, I would try 1:05 for slide 20, 0:50 for 21, 0:35 for 22, 1:50 for 23, 0:15 for 24, and 0:25 for 25. Total: 5:00. This makes the roadmap the largest concluding beat.

Treat these as rehearsal proposals. Any adopted timing change must update the outline's budget and checks, plus the matching slide headers and tracks.

### 7.5 Add one brief audience decision

Instead of another statistic, let the audience consider one question:

> “The refund call timed out. Do you retry it?”

Pause briefly, then reveal the missing information: the first attempt may already have completed. This connects orchestration to state, tool design, verification, and observability in a familiar engineering problem.

Keep this within the orchestration beat. A long discussion belongs in the reserved question period.

## 8. Visual assessment

### 8.1 Preserve the visual system

The dark background, restrained typography, colored area headers, and pitfall bands form a coherent deck. The opening formula reads well. The area transitions are easy to recognize. The diagram highlights help the presenter direct attention.

I would not spend the remaining preparation time redesigning the deck. The largest visual gains come from better content selection and completing the evidence images.

### 8.2 Complete the actual screenshots

The current rendered deck visibly contains six labeled placeholders:

- Slide 8: Devin Desktop model picker and Codex model picker.
- Slide 10: AGENTS.md and a compaction notice.
- Slide 12: MCP configuration and a shell-command approval prompt.

These images are the audience's entry into the talk. Their absence affects the teaching mechanism, not just polish. Capture only the relevant UI, with enough text to establish the feature. Use an appropriate short AGENTS.md excerpt rather than an unreadable full file.

The builder has full-size and strip versions of these slots. Both must be replaced in saved authoring code so rebuilds preserve the screenshots.

### 8.3 Give important numbers enough context on screen

If a number needs a qualification to be interpreted correctly, that qualification belongs beside it. Spoken caveats can disappear when an attendee photographs a slide.

Slide 9 particularly needs the routing accuracy tradeoff next to the cost result. Slide 14 needs clearly labeled comparison baselines. The 60% to 80% time allocation needs an attribution if retained.

The alternative is to remove the number. Small, unreadable caveats are a poor compromise.

### 8.4 Use fewer simultaneous lists

The builds generally keep individual states manageable, but the middle of the talk repeatedly becomes headings plus vocabulary. Slides 10, 12, 15, 18, and 21 are the main candidates for replacing a list with an example.

A screenshot, a short trace, a policy constraint, or a recorded outcome would vary the visual experience while doing real explanatory work. Decorative imagery would add less value here.

### 8.5 Simplify the map's spoken job

The design brief acknowledges that diagram subtitles are below the normal reading floor. Use the full map for orientation, with the presenter naming the highlighted region. Do not ask the audience to read every subtitle.

The mini-map is useful as a location cue, but its geometry alone cannot teach the mapping. Point out its relationship to the full diagram once. Verify its visibility on the venue screen, especially in the model area where blue text and fine outlines need sufficient contrast.

### 8.6 Keep the roadmap's useful detail

The rendered slide 23 omits the sublines under the four steps and keeps the small Hashimoto sequence. That removes the most actionable instruction: reviewing outputs by hand.

I would use that space for a visible first task:

> “First task: review 20 to 50 outputs and record the failures.”

Then name the artifact attendees should have afterward: a small set of cases with inputs, observed behavior, expected behavior, and a check. “Own the harness” should become something they can demonstrate.

### 8.7 Rehearse the builds as part of the talk

The build map describes 81 states across 33 physical slides, implying about 80 forward advances from the opening state to the final question state. That count is not inherently excessive, but it requires rehearsal.

Several responsibility slides begin with a title-only state, followed immediately by the first content reveal. Consider starting with that first content already visible unless the empty state serves a deliberate speaking beat. Preserve the map highlights and the meaningful replacements.

The rendered states cannot confirm Morph behavior, font substitution, or click timing on Windows. Use the existing design-brief checklist on the actual presentation machine.

## 9. The roadmap and the question period

### 9.1 A more concrete learning sequence

I would describe a first project through its outputs:

| Step | Deliverable |
| --- | --- |
| Choose one narrow task | A statement of the user need, allowed actions, and success criteria |
| Inspect outputs | A small collection of cases and observed failures |
| Build the simplest useful system | One call or a short workflow with inspectable inputs and results |
| Add checks | Direct assertions where possible and a documented rubric where judgment is needed |
| Measure changes | A comparison of quality, completion cost, latency, and consequential failures |
| Operate a limited pilot | Traces, a human fallback, and a way to recover or stop |

This could live in a handout or resource page, with only the first action and four main steps on slide 23. It gives attendees a credible learning project without suggesting they must implement every box on the diagram.

### 9.2 Improve the Q&A answers

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

## 10. Revision order for the remaining preparation time

### First pass: accuracy and completeness

1. Correct the strongest misleading lines in §4.
2. Replace all six screenshot placeholders in both full-size and strip states.
3. Prepare story #2, or use an explicitly hypothetical example.
4. Correct the Q&A answers that repeat those claims.
5. Choose the resource destination and make it usable by attendees.

### Second pass: teaching quality

1. Introduce the running case and reuse it in the responsibility beats.
2. Replace the least useful eval statistics with one checkable case.
3. Remove one redundant evidence item per crowded area.
4. Make the roadmap's first action visible.
5. Reconcile the revised pitfalls with slide 22.

### Third pass: delivery

1. Rebuild from the saved authoring code and inspect the changed states.
2. Rehearse with a clicker and record area boundary times.
3. Cut material when the explanation runs long, rather than increasing speaking speed.
4. Open and advance the final deck on the presentation machine.
5. Prepare the emergency PDF and resource link using the repository's existing workflow.

### Keep the source layers synchronized

Follow the repository's established sequence: research for factual claims, outline for the argument, slide specifications for presentation content, and `internal/deck/author.mjs` for visible text and builds. Visual changes belong in `style/design-brief.md` first.

A few existing mismatches are worth cleaning up during revision:

- The outline still leaves the bio as `[you write]`, although slide 2 has approved copy.
- The outline's map reference points to the original portrait PNG while the slide and builder use the landscape variant.
- Slide 17 and the outline use different relative phrasing about recent model releases.
- The outline's closing “Do not use” language about growth percentages conflicts with the growth figures explicitly prepared for hiring Q&A. Clarify which figures are excluded.
- Some “no unverified material on stage” summaries are broader than the research supports, particularly the identity pattern and loosely dated model-release references.
- The marker `[primary]` is sometimes qualified as primary only for a secondary report. Preserve that distinction in the claim record rather than treating the marker alone as sufficient verification.

## Final judgment

The talk can give this audience a useful conceptual map and a credible first step into AI engineering. Its structure already supports that outcome.

The highest-value revision is to make the audience watch you make a few engineering decisions. Show the policy that must survive compaction, the tool result that must be checked, the retry that could duplicate a side effect, and the eval that changes a release decision. Those examples would make the responsibility theme concrete.

Keep the breadth. Reduce the inventory. Let your experience and the worked example connect the six areas. Attendees should leave able to name something they can build and a check they would require before trusting it.
