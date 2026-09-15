# Section 1 research: intro and central thesis

Compiled 2026-09-14 for the September 17 talk. Markers: **[primary]** means the source was fetched and quoted directly. **UNVERIFIED** means the claim came from a search snippet or secondary coverage and must be confirmed before it goes on a slide. A "verify before stage" list closes the file.

## 1. How "AI engineering" is defined

**swyx, "The Rise of the AI Engineer," Latent Space, June 30, 2023** [primary]. https://www.latent.space/p/ai-engineer

- "We are observing a once in a generation 'shift right' of applied AI."
- "A wide range of AI tasks that used to take 5 years and a research team to accomplish in 2013, now just require API docs and a spare afternoon in 2023."
- "There are 10x as many ML Engineer jobs as AI Engineer jobs on Indeed, but the higher growth rate of 'AI' leads me to predict that this ratio will invert in 5 years."
- "There are ~5000 LLM researchers in the world, but ~50m software engineers."
- "When it comes to shipping AI products, you want engineers, not researchers."
- Quoting Karpathy on the role: "One can be quite successful in this role without ever training anything."
- The essay never gives a single declarative definition; the role is built up descriptively. That gap is an opening for the talk to plant its own framing.
- The three-tier split, verified in two places (checked in a browser September 14, 2026).

**swyx on the Scrimba Podcast, "The Making of an Industry: The Rise of AI Engineering," January 24, 2024** [primary]. https://podcast.scrimba.com/146/transcript

- "Most people start off as AI enhanced engineers, they use AI products to improve their own productivity. Then they progress towards AI products engineers, where they work on AI products, where they wield AI APIs to expose them to end users. And then finally you have the AI agents, where you effectively delegate your work to an agent to execute."

**swyx in "A RedMonk Conversation: How Shawn (swyx) Wang Defines the AI Engineer," RedMonk, July 23, 2025** [primary]. https://redmonk.com/blog/2025/07/23/shawn-swyx-wang-ai-engineer/

- "there's a kind of three types of AI Engineers. This is the first keynote that I did for the AI Engineer Summit. it's a software engineer that is enhanced by AI, so they use AI coding tools. The second one is a software engineer building AI products. And the third is a non-human software engineer that is completely AI."
- He dates the framing to his first AI Engineer Summit keynote. The middle tier is this talk. His first tier, the "AI enhanced engineer," is the talk's "AI-enabled software engineer" under another name, which makes the thesis a restatement of an existing split rather than a coinage.

**Chip Huyen, "AI Engineering: Building Applications with Foundation Models," O'Reilly, 2025.** Repo: https://github.com/chiphuyen/aie-book [primary for the repo]

- "AIE focuses on building applications on top of foundation models, which involves more prompt engineering, context construction, and parameter-efficient finetuning." Contrast with her earlier book: "more tabular data annotations, feature engineering, and model training."
- Chapter 1 wording is UNVERIFIED (O'Reilly returned 403). The circulating shorthand "AI engineering is the process of building applications with readily available foundation models" is marketing copy; do not attribute it as her sentence.
- Orosz's interview with Huyen reports her view that AI engineering is closer to software engineering than to ML engineering because it is product-first, not model-first. https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen

**Carnegie Mellon Software Engineering Institute** [primary]. http://www.sei.cmu.edu/artificial-intelligence-engineering/

- "AI Engineering is a field of research and practice that combines the principles of systems engineering, software engineering, computer science, and human-centered design to create AI systems in accordance with human needs for mission outcomes."
- Three pillars: human-centered AI, scalable AI, robust and secure AI. Predates the LLM era, which is why it grounds "built on software engineering" rather than "replaces it."

**roadmap.sh AI Engineer roadmap.** https://roadmap.sh/ai-engineer

- "An AI Engineer uses pre-trained models and existing AI tools to improve user experiences," focusing on "applying AI in practical ways, without building models from scratch," versus researchers and ML engineers who "focus more on creating new models or developing AI theory."

**Job-title evidence.** AI engineer is ranked #1 on LinkedIn's Jobs on the Rise 2026 (US), reportedly for a second consecutive year, with four of the top five roles AI-related. Reported by Dice (https://www.dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026) and CNBC (https://www.cnbc.com/2026/08/18/millennials-and-gen-z-are-landing-fast-growing-high-paying-ai-jobs-linkedin-study.html). Use the ranking only. The "143% year-over-year" and "1.6 million openings vs 518,000 candidates" figures are UNVERIFIED aggregator numbers.

## 2. Using AI vs engineering AI systems

**Simon Willison, "Not all AI-assisted programming is vibe coding," March 19, 2025** [primary]. https://simonwillison.net/2025/Mar/19/vibe-coding/

- "If an LLM wrote every line of your code, but you've reviewed, tested, and understood it all, that's not vibe coding in my book, that's using an LLM as a typing assistant."
- Karpathy coined "vibe coding" on February 6, 2025.

**Simon Willison, "Vibe engineering," October 7, 2025** [primary]. https://simonwillison.net/2025/Oct/7/vibe-engineering/

- Vibe engineering is where "seasoned professionals accelerate their work with LLMs while staying proudly and confidently accountable for the software they produce."
- Prerequisites listed: automated testing, planning in advance, comprehensive documentation, good version control habits, effective automation, a culture of code review, really good manual QA, strong research skills.
- Closest existing analogue to the thesis, but it is about using agents well, not shipping model-dependent systems. Useful as the definition of the "AI-enabled software engineer" side of the line.

**Andrej Karpathy, "Software Is Changing (Again)," YC AI Startup School, June 17, 2025** [primary via Latent Space transcript]. https://www.latent.space/p/s3

- "the hottest new programming language is English"
- "Demo is works.any(), product is works.all()"
- On the generation-verification loop: "To improve verification: Make it easy, fast to win. To improve generation: Keep AI on tight leash."
- Software 1.0 (hand-written code), 2.0 (learned weights), 3.0 (prompts as programs).

**Karpathy on "agentic engineering," Sequoia AI Ascent, post dated April 30, 2026.** https://karpathy.bearblog.dev/sequoia-ascent-2026/

- DO NOT QUOTE. The post states he fed an LLM his recent posts and tweets to generate the summary and transcript. Lines such as "Vibe coding raises the floor. Agentic engineering is about extrapolating the ceiling" are LLM-reconstructed, not spoken. UNVERIFIED.

**Martin Fowler, "Some thoughts on LLMs and Software Development," August 28, 2025** [primary]. https://www.martinfowler.com/articles/202508-ai-thoughts.html

- "Maybe LLMs mark the point where we join our engineering peers in a world on non-determinism." (Fowler's text reads "on"; quote it as written or paraphrase.)
- "Other forms of engineering have to take into account the variability of the world. A structural engineer builds in tolerance for all the factors she can't measure."
- "All an LLM does is produce hallucinations, it's just that we find some of them useful."
- "I've often heard, with decent reason, an LLM compared to a junior colleague. But I find LLMs are quite happy to say 'all tests green', yet when I run them, there are failures."

**Birgitta Böckeler, "Harness Engineering - first thoughts," martinfowler.com, February 17, 2026** [primary]. https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html

- "A good harness should not necessarily aim to fully eliminate human input, but to direct it to where our input is most important."
- Coding becomes "less about typing code and more about steering its generation."

## 3. Why the discipline is distinct

**Hamel Husain, "Your AI Product Needs Evals," March 29, 2024** [primary]. https://hamel.dev/blog/posts/evals/

- "unsuccessful products almost always share a common root cause: a failure to create robust evaluation systems."
- "Rigorous and systematic evaluation is the most important part of the whole system."
- "unlike traditional unit tests, you don't necessarily need a 100% pass rate."
- "You can never stop looking at data, no free lunch exists."
- Three levels: unit tests; human and model eval; A/B testing.

**Shreya Shankar, J.D. Zamfirescu-Pereira, Björn Hartmann, Aditya G. Parameswaran, Ian Arawjo, "Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences," UIST 2024** (arXiv 2404.12272, April 18, 2024). https://arxiv.org/abs/2404.12272

- Verified from the abstract: "users need criteria to grade outputs, but grading outputs helps users define criteria."
- "some criteria appears dependent on the specific LLM outputs observed (rather than independent criteria that can be defined a priori), raising serious questions for approaches that assume the independence of evaluation from observation of model outputs."
- Peer-reviewed. This is the rigorous argument that natural-language specification differs in kind: in traditional engineering you write the spec and then the tests; here the spec is discovered by watching outputs. Named "criteria drift."

**Anthropic, "Demystifying evals for AI agents," January 9, 2026** [primary]. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents

- "The capabilities that make agents useful also make them harder to evaluate."
- "Agents use tools across many turns, modifying state in the environment and adapting as they go, which means mistakes can propagate and compound."
- "A flight-booking agent might say 'Your flight has been booked' at the end of the transcript, but the outcome is whether a reservation exists in the environment's SQL database."
- Without evals, "it's easy to get stuck in reactive loops, catching issues only in production, where fixing one failure creates others."

**Datadog, "State of AI Engineering," July 2026.** https://www.datadoghq.com/state-of-ai-engineering/

- Based on LLM telemetry from thousands of customer organizations; Datadog calls it "a large but imperfect sample."
- "Model, prompt, or retrieval changes can move latency, spend, and failure rates without an obvious code change."
- Agents have "control flow driven by the LLM itself."
- "The next wave of agent failures won't be about what agents can't do. It'll be about what teams can't observe."
- Verified figure: agent framework adoption rose from more than 9% of organizations in early 2025 to almost 18% by the beginning of 2026.
- UNVERIFIED and untraceable: "89% of teams have adopted observability but only 52% have adopted evaluations." Not in the Datadog source; may originate with Arize. Do not use.

## 4. Prototype-to-production gap

**MIT Project NANDA, "The GenAI Divide: State of AI in Business 2025," July-August 2025.** The 95% figure. DO NOT USE AS A HEADLINE STAT.

- Not peer-reviewed. 52 interviews, 153 survey responses, review of 300-plus public initiatives. Claim: despite $30-40B enterprise spend, 95% of organizations see no measurable P&L return.
- Rebuttal: 80,000 Hours, "The story behind the bad AI stat that moved markets and misled millions," February 13, 2026. https://80000hours.org/podcast/episodes/ai-workplace-mit-study/ Core objection: roughly 80% of surveyed companies had never piloted a custom AI tool, so the denominator is wrong. Their analogy: "Saying that 95% of them were failing is like saying 95% of Tinder users have failing marriages, when 80% of the people you're talking about have never even gone on a date in the first place!" Also notes the authors sell the technology they recommend. Guest identity UNVERIFIED.
- "No measurable P&L impact" is a different finding from "the pilot failed" and largely reflects absent baselines. No evidence the report was withdrawn.
- Recommended use: as the stat the room has heard and should not trust.

**Gartner, June 25, 2025.** "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027," citing escalating costs, unclear business value, inadequate risk controls. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 Read in a browser September 14, 2026 [primary]; the page refuses automated fetching. Verbatim: "Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls, according to Gartner, Inc." Anushree Verma: "Most agentic AI projects right now are early stage experiments or proof of concepts that are mostly driven by hype and are often misapplied." Full entry in `research/section-2.md` §4.

**McKinsey, "The state of AI," late 2025.** https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai Fetch timed out; figures are from secondary summaries and UNVERIFIED: about 39% report enterprise-level EBIT impact; about 6% are high performers; 62% at least experimenting with agents; 23% scaling agents somewhere; in no function have more than 10% scaled agents.

**Stanford HAI, 2026 AI Index Report** [primary for the landing page]. https://hai.stanford.edu/ai-index/2026-ai-index-report "Organizational adoption reached 88%" and "Generative AI reached 53% population adoption within three years, faster than the PC or the internet." Claims about single-digit agentic deployment are UNVERIFIED.

**DORA.** 2025 State of AI-assisted Software Development, https://dora.dev/dora-report-2025/ (about 5,000 professionals). Verified framing: AI is an amplifier of existing organizational strengths and weaknesses. The 90% usage and 30% low-trust figures are from secondary coverage, UNVERIFIED. ROI of AI-assisted Software Development, about April 2026, https://dora.dev/ai/roi/report/ introduces a J-curve and argues returns come "not from the tools themselves but from a strategic focus on the underlying organizational system."

**Menlo Ventures, "2025: The State of Generative AI in the Enterprise," December 2025.** https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/ 495 US enterprise decision-makers. $37B enterprise generative AI spend in 2025, 3.2x year over year, more than half on applications rather than infrastructure.

## 5. Definitions of "agent"

**Anthropic, "Building effective agents," December 19, 2024** [primary]. https://www.anthropic.com/engineering/building-effective-agents

- Umbrella term "agentic systems," then an architectural distinction. Workflows: "systems where LLMs and tools are orchestrated through predefined code paths." Agents: "systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks."
- "we recommend finding the simplest solution possible, and only increasing complexity when needed."
- "Agents are the better option when flexibility and model-driven decision-making are needed at scale. For many applications, however, optimizing single LLM calls with retrieval and in-context examples is usually enough."
- "you should consider adding complexity only when it demonstrably improves outcomes."
- Load-bearing for the talk: agents are the case where control flow itself is model-dependent, so every guarantee normally supplied by a code path must be re-established some other way.

**OpenAI, "A practical guide to building agents," April 2025.** https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf

- "Agents are systems that independently accomplish tasks on your behalf."
- Explicitly excludes simple chatbots, single-turn LLM calls, and classifiers from the definition. Useful because it rules out most of what the audience has built.
- Quotes are from secondary summaries; confirm against the PDF. UNVERIFIED wording.

**Chip Huyen, "Agents," January 7, 2025** [primary]. https://huyenchip.com/2025/01/07/agents.html

- Grounds the term in Russell and Norvig: "An agent is anything that can perceive its environment and act upon that environment."
- An agent is "characterized by the environment it operates in and the set of actions it can perform."
- Shows the 2024-2026 usage is a narrowing of a decades-old term, not an invention.

**Google agents whitepaper:** not located or fetched. Gap.

**2026 status:** no newer canonical definition has displaced the workflows-vs-agents split. The conversation moved from defining agents to engineering the systems around them, which is itself an argument the talk can make.

## 6. What is new since June 2026

**AI Engineer World's Fair 2026, San Francisco, June 29 to July 2, 2026.** https://www.ai.engineer/worldsfair Keynote themes: Coding Agents (Tuesday), Autoresearch (Wednesday), Harness Engineering (Thursday). About 29 tracks including Evals, Context Engineering, Security, Memory and Continual Learning. Attendance figures UNVERIFIED.

**Latent Space, "5 Trends That Defined AI Engineering at World's Fair 2026," Richard MacManus, July 14, 2026** [primary]. https://www.latent.space/p/aiewf26trends

- Trend 1, focus shifting from agents to the systems around them: "the harness that manages workflows, context, permissions, evaluation, persistent state and continuous improvement."
- Trend 2: "agents can run much more of the inner execution loop, but that outer loop is still engineering."
- Trend 4: "Agents are not as predictable as web applications. The infrastructure can look similar, but the interaction, interface and outputs are much more dynamic."
- Trend 5: "Agents are just files. We write markdown files to extend capabilities."
- Conference line: "complete agent autonomy is not only unreliable, it isn't even desirable, especially at scale."

**The loop engineering episode, June-July 2026.** Addy Osmani, "Loop Engineering," O'Reilly Radar, https://www.oreilly.com/radar/loop-engineering/: "Loop engineering is replacing yourself as the person who prompts the agent. You design the system that does it instead." Peter Steinberger's formulation: "You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents." Then Hamel Husain, July 18, 2026, "Loop Engineering Is Dead. Enter Graph Engineering." Turing Post, July 20, 2026: "Loop engineering lasted six weeks." https://www.turingpost.com/p/is-graph-engineering-real-why-everyone-is-talking-about-it
- CAUTIONS: publication dates conflict across sources (June 7 vs June 22); several secondary sources claim the founding posts were jokes. Both UNVERIFIED. Do not put words in named people's mouths without checking.

**Other, lower confidence:** Arize, "The AI Agent Reliability Gap: 2026 Report," https://arize.com/resources/agent-reliability-gap/ (14 interviews, small sample). Gartner reportedly said in July 2025 that "context engineering is in, and prompt engineering is out." UNVERIFIED.

## 7. Candidate openers, ranked

1. **works.any() vs works.all().** Karpathy, June 2025, verified. Everyone in the room has shipped a works.any() demo with a coding agent; the gap between the two calls is the talk. Short, flattering, sets up the recurring prototype-to-production argument.
2. **The prediction that came true.** swyx, June 2023: ML engineer postings outnumbered AI engineer postings ten to one; he predicted inversion within five years. AI engineer is #1 on LinkedIn Jobs on the Rise 2026. Turn: the title arrived before the discipline did. Use the ranking, not the percentages.
3. **Fowler's tolerances.** "Maybe LLMs mark the point where we join our engineering peers in a world on non-determinism." Every other discipline builds for variance; software was the exception; the exception just ended. Substantive but slower.
4. **The six-week vocabulary.** Prompt, context, loop, harness engineering in one summer. Labels churn; the problem underneath does not. Requires the date and joke-framing verification above.
5. **The stat you should not trust.** Name the MIT 95%, then the 80% who never piloted. Establishes credibility through skepticism but spends the first minute on someone else's work.

**Avoid as openers:** the raw MIT 95%; the Gartner 40% without attribution and date; any AI-engineer salary or growth percentage; the reconstructed Karpathy Sequoia quotes.

## Verify before stage

- OpenAI "A practical guide to building agents" quotes: confirm against the PDF.
- Loop-engineering timeline and the "it was a joke" framing: confirm before using opener 4.
- Chip Huyen chapter 1 wording: check the book before attributing a definition sentence.
- LinkedIn Jobs on the Rise 2026: primary document not reached; the ranking is corroborated by Dice and CNBC.
- Google agents whitepaper: not located.

**Do not use:** MIT 95% as fact; Karpathy Sequoia quotes; 143% growth or any salary band; the 89% vs 52% observability-vs-evals stat.
