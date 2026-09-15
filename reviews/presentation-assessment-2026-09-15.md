# Presentation assessment

## Beyond the Coding Agent: From Software Engineer to AI Engineer

**Reviewed:** September 15, 2026. **Presentation:** September 17, 2026.

**Review documents:** Overall assessment · [Apply essential corrections](apply-essential-corrections-2026-09-15.md) · [Develop the running example](develop-the-running-example-2026-09-15.md) · [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md).

This document covers the general assessment, the presentation goals, and the slide-by-slide review. Detailed recommendations are organized into three companion documents:

| Recommendation group | Contents |
| --- | --- |
| [Apply essential corrections](apply-essential-corrections-2026-09-15.md) | Factual and wording corrections, screenshot completion, Q&A revisions, and source consistency |
| [Develop the running example](develop-the-running-example-2026-09-15.md) | The illustrative refund workflow, a concrete eval case, the personal-story structure, and roadmap deliverables |
| [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md) | Timing checkpoints, cut priorities, optional time redistribution, and playback preparation |

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
| 1 | Apply the [essential corrections](apply-essential-corrections-2026-09-15.md#2-corrections-and-qualifications-before-presenting), especially slides 4, 9, 11, 13, 16, 17, and 18 | These can teach the wrong engineering rule or invite a justified objection |
| 2 | Finish the six screenshots and prepare story #2 | These are central to the promised connection between familiar tools and your experience |
| 3 | Carry one illustrative customer-support case through the six areas | This turns a taxonomy into a design process |
| 4 | Replace part of slide 16's statistics with one concrete eval case | Evaluation is the talk's most important new competency |
| 5 | Make slide 23's first action visible and provide a usable resource link | This makes the roadmap something attendees can actually follow |

## 1. Scope and basis of this review

I read the [README](../README.md) first, then all 25 slide specifications, including their build descriptions, layouts, talk tracks, sources, open items, and Q&A notes. I also reviewed the [current outline](../outlines/outline-v2.md), all three research files, the design brief, and the deck build guide.

For visual context, I inspected contact sheets covering all 81 rendered states in `.deck-build/2026-09-15/renders/`, plus a full-size spot check. The validation record for that build identifies the same final file hash as [the reviewed PowerPoint](../output/archive/beyond-the-coding-agent-2026-09-17.pptx). Its build map contains 33 physical slides representing the 25 narrative slides. This review did not test native PowerPoint animation or venue projection.

I also checked selected external sources where the wording materially affected the recommendation. Those checks are cited beside the relevant findings. This is a presentation and content assessment with targeted source checks, rather than a complete re-verification of every product command, quotation, and date.

The recommendations in these four documents are proposals. This review does not change the outline, research, slide specifications, design brief, or PowerPoint. Suggested examples are illustrative. Personal story slots remain yours to fill.

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

## 4. Slide-by-slide assessment

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
| [20. What transfers](../slides/section-3/21-what-transfers.md) | Directly answers the audience's concern about starting over | Keep the mapping visible while encouraging the audience. “The same, in tokens” understates recovery, side effects, and user outcomes. Say that the engineering habits transfer while the failure modes expand. Treat the two-month story as one person's experience |
| [21. What is new](../slides/section-3/22-what-is-new.md) | Gives names to the additional work | The dated ladder looks like a history of invention and a required progression. Reframe it as expanding scope. The ranked list conflicts with the later advice to start with evals. Remove the ranking or put observation and error analysis first |
| [22. Pitfalls](../slides/section-3/23-the-pitfalls.md) | Recognition makes this an effective recap | Keep it. Reconcile any wording changes with the six bands. Spend the short time consolidating those six rather than introducing a seventh framework warning and repeating the same conclusion twice |
| [23. Roadmap](../slides/section-3/24-the-roadmap.md) | Four steps give the talk a practical destination | Put the first action on screen. Replace the small Hashimoto arc with the deliverable attendees should create. His story concerns adopting AI tools, which is less direct evidence for shipping an AI product. Make “start constrained” a valid endpoint, not a mandatory staircase toward autonomy |
| [24. Resources](../slides/section-3/25-resources.md) | Relevant readings already support the content | Provide a short URL or QR code to a curated list. Group by what the reader needs next. Mark the October book as forthcoming if it remains listed. Eight seconds is a weak delivery mechanism for this amount of text |
| [25. Close](../slides/section-3/26-close.md) | Repeating the thesis provides recognition and a calm Q&A screen | Keep the responsibility line as the last substantive sentence. Correct the backup answers about tests, 100% eval rates, and multi-agent cost. A useful resource link can stay available in the handout or resource slide |

## 5. General visual assessment

### 5.1 Preserve the visual system

The dark background, restrained typography, colored area headers, and pitfall bands form a coherent deck. The opening formula reads well. The area transitions are easy to recognize. The diagram highlights help the presenter direct attention.

I would not spend the remaining preparation time redesigning the deck. The largest visual gains come from better content selection and completing the evidence images.

### 5.2 Simplify the map's spoken job

The design brief acknowledges that diagram subtitles are below the normal reading floor. Use the full map for orientation, with the presenter naming the highlighted region. Do not ask the audience to read every subtitle.

The mini-map is useful as a location cue, but its geometry alone cannot teach the mapping. Point out its relationship to the full diagram once. Verify its visibility on the venue screen, especially in the model area where blue text and fine outlines need sufficient contrast.

## 6. Recommended revision order

Start with [Apply essential corrections](apply-essential-corrections-2026-09-15.md) to resolve accuracy and completeness. Then use [Develop the running example](develop-the-running-example-2026-09-15.md) to make the engineering decisions concrete. Finish with [Prepare a rehearsal version](prepare-a-rehearsal-version-2026-09-15.md) to check delivery against the 35:00 budget. Each companion document contains its detailed priorities.

## Final judgment

The talk can give this audience a useful conceptual map and a credible first step into AI engineering. Its structure already supports that outcome.

The highest-value revision is to make the audience watch you make a few engineering decisions. Show the policy that must survive compaction, the tool result that must be checked, the retry that could duplicate a side effect, and the eval that changes a release decision. Those examples would make the responsibility theme concrete.

Keep the breadth. Reduce the inventory. Let your experience and the worked example connect the six areas. Attendees should leave able to name something they can build and a check they would require before trusting it.
