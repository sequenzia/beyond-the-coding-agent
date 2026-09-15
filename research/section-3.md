# Section 3 research: making the transition and next steps

Compiled 2026-09-14 for the September 17 talk. Markers: **[primary]** means fetched and quoted directly. **UNVERIFIED** means from a search snippet or secondary coverage; confirm before it goes on a slide. Organized by the five research threads, with a closing "verify before stage" list.

## 1. Skills mapping: what transfers

**swyx, "The Rise of the AI Engineer," Latent Space, June 30, 2023** [primary]. https://www.latent.space/p/ai-engineer

- "There are ~5000 LLM researchers in the world, but ~50m software engineers."
- "One can be quite successful in this role without ever training anything." (quoting Karpathy)
- "When it comes to shipping AI products, you want engineers, not researchers."
- Software 1.0 to 2.0 to 3.0, where "the hottest new programming language is English" (phrase originates with Karpathy).

**Gergely Orosz, "AI Engineering in the real world," The Pragmatic Engineer, March 25, 2025** [primary]. https://newsletter.pragmaticengineer.com/p/ai-engineering-in-the-real-world

- Profiles software engineers turned AI engineers at incident.io, Sentry, Wordsmith, Augment Code, Elsevier, Simply Business, and DSI.
- Ross McNairn (Wordsmith): "Working with AI requires a totally different way of approaching problems." And: "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."
- Matt Morgis (Elsevier, ex CVS Health): "For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier."
- Ryan Cogswell (DSI), a 25-year veteran, became his company's resident generative AI expert in roughly two months by reading and prototyping.

**roadmap.sh AI Engineer roadmap.** https://roadmap.sh/ai-engineer

- "An AI Engineer uses pre-trained models and existing AI tools to improve user experiences," and they "focus on applying AI in practical ways, without building models from scratch," versus researchers and ML engineers who "focus more on creating new models or developing AI theory."

**Chip Huyen, "AI Engineering," O'Reilly, 2025.** https://github.com/chiphuyen/aie-book

- This book: "building applications on top of foundation models, which involves more prompt engineering, context construction, and parameter-efficient finetuning." Her earlier book: "tabular data annotations, feature engineering, and model training."
- Orosz's interview: AI engineering feels closer to software engineering than to ML engineering because it is product-first. https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen

**Market data, use with care.**

| Claim | Value | Source | Status |
|---|---|---|---|
| AI/ML tech postings, year over year, August 2026 | up 101% | Dice Tech Job Report, September 2026 | Verified on publisher page |
| All tech postings, year over year, August 2026 | up 18% | Dice, same report | Verified |
| AI Engineer rank, LinkedIn Jobs on the Rise 2026 (US) | #1 | Dice coverage, January 14, 2026 | Verified via secondary |
| Salary premium for AI skills | 28%, about $18k | Lightcast, July 23, 2025 | Verified via Lightcast release |

- Verbatim from the report page, checked in a browser September 14, 2026 [primary]: "AI and machine learning tech postings grew 101% year-over-year (August 2026 vs. August 2025), more than five times the 18% growth rate for tech postings overall." The page also names "Responsible AI, AI Agents, Agentic AI, and Artificial Intelligence Infrastructure" as a cluster "tracking the shift from assistive AI tools toward more autonomous systems." The "each above 200%" figure for that cluster was not on the page as fetched; do not use it. LinkedIn lists AI Engineer skills as LangChain, retrieval-augmented generation, and PyTorch.
- Sources: https://www.dice.com/hiring/recruitment/reports/dice-tech-job-report ; https://www.dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026 ; https://lightcast.io/resources/blog/beyond-the-buzz-press-release-2025-07-23
- UNVERIFIED: "143% year-over-year growth in AI Engineer postings" appears only in aggregator and SEO content. Same for all specific salary bands. Do not put on a slide without a primary citation.

## 2. New competencies

**The maturity ladder: prompt engineering, then context engineering, then loop and harness engineering.** Cleanest organizing device found.

**Context engineering.** Anthropic, "Effective context engineering for AI agents," September 29, 2025 [primary in research/section-2.md §2]. The shift is "less about finding the right words and phrases for your prompts, and more about answering the broader question of 'what configuration of context is most likely to generate our model's desired behavior?'" (This sentence came from a search index in the Section 3 pass; the Section 2 pass fetched the post directly and confirmed the definition quotes. Confirm this specific sentence before quoting.)

**Harness engineering.** Mitchell Hashimoto, "My AI Adoption Journey," February 5, 2026 [primary]. https://mitchellh.com/writing/my-ai-adoption-journey "anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again," either by updating an AGENTS.md style file or by building a verification tool. UNVERIFIED that he uses the phrase "harness engineering" in the post.

**Evals, the headline competency.** Hamel Husain, "AI Evals: Everything You Need to Know," published May 28, 2025, last modified September 1, 2026 [primary]. https://hamel.dev/blog/posts/evals-faq/

- "Error analysis is the most important activity in evals."
- "We've spent 60-80% of our development time on error analysis and evaluation."
- "If you're passing 100% of your evals, you're likely not challenging your system enough."

**Tool design.** OpenAI, "A practical guide to building agents," p. 9: "Well-documented, thoroughly tested, and reusable tools improve discoverability, simplify version management, and prevent redundant definitions." Three tool types: data, action, orchestration. https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf

**Cost and latency.** Same guide, p. 8: "Not every task requires the smartest model." Set up evals for a baseline, hit the accuracy target with the best model, then "optimize for cost and latency by replacing larger models with smaller ones where possible." Orosz's 2026 survey: one CPTO reported "I ran up several monthly bills of $600 with Cursor."

**Security.** OWASP Top 10 for LLM Applications, 2025. Prompt injection LLM01; Excessive Agency LLM06; new for 2025: System Prompt Leakage (LLM07), Vector and Embedding Weaknesses (LLM08), Unbounded Consumption (LLM10). The attack surface is the model's reasoning, retrieved context, and tool access, so least privilege now applies to tools. https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf

**Observability.** OpenTelemetry GenAI semantic conventions, run by the GenAI SIG since April 2024, standardize spans for model calls, token usage, tool calls, and agent steps. As of September 14, 2026 the conventions live in their own repository and are marked "Status: Development" with a warning that they are subject to change; verified entry in `research/section-2.md` §6. The earlier claim here that core attributes were stable since 1.37.0 was secondary and is superseded. The "your instincts transfer, the schema is new" beat.

**No source explicitly ranks the new competencies.** The ladder plus Husain's 60 to 80% time allocation is the nearest defensible priority ordering.

## 3. Transition pitfalls

1. **Over-agentifying.** Anthropic, "Building effective agents," December 19, 2024 [primary]. https://www.anthropic.com/engineering/building-effective-agents "Start with simple prompts, optimize them with comprehensive evaluation, and add multi-step agentic systems only when simpler solutions fall short." "You should consider adding complexity only when it demonstrably improves outcomes." "Agentic systems often trade latency and cost for better task performance, and you should consider when this tradeoff makes sense."
2. **Framework over-abstraction.** Same post: frameworks "often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug. They can also make it tempting to add complexity when a simpler setup would suffice."
3. **An agent where a rules engine would do.** OpenAI guide, p. 6: "Before committing to building an agent, validate that your use case can meet these criteria clearly. Otherwise, a deterministic solution may suffice." Criteria: complex decision-making, difficult-to-maintain rules, heavy reliance on unstructured data.
4. **Multi-agent before single-agent is exhausted.** OpenAI guide, p. 16: "Our general recommendation is to maximize a single agent's capabilities first. More agents can provide intuitive separation of concepts, but can introduce additional complexity and overhead, so often a single agent with tools is sufficient."
5. **Multi-agent as an architecture.** Walden Yan, Cognition, "Don't Build Multi-Agents," June 12, 2025 [primary]. https://cognition.com/blog/dont-build-multi-agents "Running multiple agents in collaboration only results in fragile systems. The decision-making ends up being too dispersed." Principles: "Share context, and share full agent traces, not just individual messages" and "Actions carry implicit decisions, and conflicting decisions carry bad results."
6. **Skipping evals, or prompt-and-pray.** Hamel Husain, "A Field Guide to Rapidly Improving AI Products," March 24, 2025 [primary]. https://hamel.dev/blog/posts/field-guide/ "Teams invest weeks building complex AI systems, but can't tell me if their changes are helping or hurting."
7. **Generic metrics instead of looking at data.** Field guide: "Generic metrics are worse than useless, they actively impede progress." Evals FAQ: "Generic evaluations waste time and create false confidence when you use them as quality measures."
8. **Tools-first, process-never.** Field guide: "Teams get caught up in architecture diagrams, frameworks, and dashboards while neglecting the process of actually understanding what's working."
9. **Eval-driven development as a mirage.** Evals FAQ: "Eval-driven development (writing evaluators before implementing features) sounds appealing but creates more problems than it solves." A counterintuitive beat for an audience that maps evals onto TDD.
10. **Outsourcing the looking.** Evals FAQ: "Outsourcing error analysis is usually a big mistake (with some exceptions)."
11. **Vector database before you know you need retrieval.** Weak sourcing. Framing only: pure vector search is rarely the right first move; hybrid lexical plus vector plus reranker wins when retrieval is genuinely needed. "You Probably Don't Need a Vector Database for Your RAG, Yet," Towards Data Science, https://towardsdatascience.com/you-probably-dont-need-a-vector-database-for-your-rag-yet/ UNVERIFIED authorship and date.
12. **Organizational pitfall.** MIT NANDA 95% figure. Widely criticized (see research/section-1.md §4). If used at all, name the caveat in the same breath.

## 4. Learning roadmap and "start constrained, add autonomy"

**OpenAI, "A practical guide to building agents," conclusion, p. 32.** "Use orchestration patterns that match your complexity level, starting with a single agent and evolving to multi-agent systems only when needed. Guardrails are critical at every stage, from input filtering and tool use to human-in-the-loop intervention." And: "The path to successful deployment isn't all-or-nothing. Start small, validate with real users, and grow capabilities over time." Quotes from the PDF; confirm page numbers.

**Anthropic** version: the simplest-thing-that-works rule in pitfall 1.

**Hashimoto's individual arc** [primary]. https://mitchellh.com/writing/my-ai-adoption-journey Chatbot, then reproducing manual work with an agent, then background agents, then delegating tasks he is confident in, then building verification tools, then continuous operation.

**Where to start, concretely.** Husain, evals FAQ [primary]: "Start with error analysis, not infrastructure. Spend 30 minutes manually reviewing 20-50 LLM outputs." The single best "do this Monday" line in the research set.

**Materials a September 2026 audience recognizes.**

- Chip Huyen, *AI Engineering: Building Applications with Foundation Models*, O'Reilly, 2025. Positioned as durable rather than tool-specific. https://github.com/chiphuyen/aie-book
- Shreya Shankar and Hamel Husain, *Evals for AI Engineers: Systematically Measuring and Improving AI Applications*, O'Reilly, listed publication date October 31, 2026, ISBN 9798341660724. Lands about six weeks after the talk; frame as forthcoming. https://www.oreilly.com/library/view/evals-for-ai/9798341660717/colophon01.html
- Husain and Shankar's Maven course, "AI Evals for Engineers & PMs." https://maven.com/parlance-labs/evals The October 10 cohort is described as the last of 2026. Enrollment counts conflict across sources (700-plus vs 5,000-plus); do not cite a number.
- Anthropic Academy, launched March 2, 2026, free self-paced courses on Claude Code, agents, MCP, subagents. OpenAI Academy at academy.openai.com. DeepLearning.AI short courses free to audit. Course counts UNVERIFIED.
- Vendor courses were excluded from the resources slide per the user's vendor-neutral preference; listed here for Q&A.

**Durable principles vs frameworks.** The citeable version is Anthropic's abstraction warning (pitfall 2). The general critique that engineers start with the newest framework before understanding the loop is blog-grade.

## 5. June to September 2026

**Latent Space, "5 Trends That Defined AI Engineering at World's Fair 2026," Richard MacManus, July 14, 2026** [primary]. https://www.latent.space/p/aiewf26trends

1. Focus moved from agents to the systems around them. Lilian Weng's arc runs from agent anatomy to "harness engineering for self-improvement." Conference line: "complete agent autonomy is not only unreliable, it isn't even desirable, especially at scale." A direct endorsement of "start constrained."
2. Loop engineering as the control layer. Peter Steinberger: "the agent runs the inner execution loop; I set the direction and I make decisions in the outer loop."
3. AI engineering entered the enterprise via forward deployed engineers. Cursor's Pauline Brunet on needing "strict ROI" so that "they're not gonna turn things off when we leave."
4. Coding agents displacing IDEs. Vercel's Andrew Qu: agents are "a new kind of software" because they are "not as predictable as web applications."
5. Every agent platform built around Skills. Garry Tan: "AI native companies encode all of that as skills, written procedures that their agents execute."

**Gergely Orosz, "The impact of AI on software engineers in 2026: key trends, Part 1," April 14, 2026** [primary]. https://newsletter.pragmaticengineer.com/p/the-impact-of-ai-on-software-engineers-2026 900-plus survey responses. AI amplifies existing tendencies, splitting "builders" who absorb more AI slop from "shippers" who gain speed and accrue debt. Roughly 30% of respondents had hit tool usage limits. Best evidence that the audience is already AI-enabled but has not crossed into AI engineering.

**Role distinction.** "AI-enabled software engineer vs AI engineer" is not a term of art in any primary source. The closest anchor is swyx's three-way split, now verified in `research/section-1.md` §1: the "AI enhanced engineer" who uses AI coding tools, the software engineer building AI products, and the non-human software engineer. His first tier is this talk's first term under another name.

**UNVERIFIED for this window:** the 6,000-attendee figure and the "42% of committed code is AI-generated" closing-keynote claim, both from a DEV Community recap.

## Verify before stage

- LinkedIn Jobs on the Rise 2026: primary document not reached; ranking corroborated by Dice and CNBC.
- Anthropic context-engineering sentence in §2: re-verify against the post before using verbatim.
- OpenAI guide page numbers: confirm against the PDF.
- Hashimoto and "harness engineering": do not credit him with coining the phrase.
- Maven course enrollment and Anthropic Academy course counts: do not cite numbers.

**Do not use:** 143% growth; any salary band; MIT 95% as fact.
