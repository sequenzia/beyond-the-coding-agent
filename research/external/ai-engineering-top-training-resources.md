# The Best Resources for Learning AI Engineering

**Research date: September 16, 2026**  
**Includes: one ranked list of the top 15 resources and a suggested learning path.**

**My recommendation:** Use Chip Huyen’s *AI Engineering* as your guide to the discipline, Andrew Ng’s *Agentic AI* for implementation fundamentals, and LLM Zoomcamp to build a substantial project. Add Hamel Husain and Shreya Shankar’s evaluation material early in that project.

## What AI Engineering means today

For this guide, AI Engineering means designing, building, evaluating, deploying, and improving useful software powered by AI models. The emphasis is on foundation models—language and multimodal models—while retaining the software engineering and ML operations skills needed to run reliable systems. Training frontier models from scratch is a separate specialization. Chip Huyen’s [description of the discipline and book](https://github.com/chiphuyen/aie-book) explains this scope well.

My synthesis of the current technical material is that learners should prioritize these areas:

- **Application quality and evaluation.** Test the behavior users actually need, inspect failures, and check changes against realistic examples. General model benchmark scores cannot tell you whether your particular application works. Hamel and Shreya’s [AI Evals FAQ, updated September 13, 2026](https://hamel.dev/blog/posts/evals-faq/), makes this distinction explicit.
- **Agents and the systems around them.** Tool calls, persistent state, execution environments, stopping conditions, and recovery require engineering beyond a single model response. Anthropic’s [agent evaluation guide, published January 2026](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), addresses these multi-step systems.
- **Context and retrieval.** Selecting and organizing documents, conversation history, tools, and memory is a core skill. Learn retrieval-augmented generation (RAG), search quality, and context management together. See Anthropic’s [context engineering guide](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).
- **Production operations and economics.** Logging, testing, deployment, monitoring, latency, and cost belong in the learning plan. [Made With ML’s curriculum](https://madewithml.com/) covers the operational foundation, while the current [OpenAI Cookbook](https://developers.openai.com/cookbook) includes agent improvement loops and spending controls.
- **Architecture judgment.** Choose the amount of autonomy and complexity that improves the task. Understanding when a fixed workflow or a simple model call is sufficient is part of the discipline. Anthropic’s [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) remains a useful conceptual starting point, though its page explicitly notes that tooling has changed since its original 2024 publication.

The learning implication: combine a structured curriculum, a real project, and a repeatable process for measuring and improving that project.

## How I ranked the resources

This is an editorial ranking for **individual, self-directed learners**, assuming some Python programming experience. I compared practical relevance, teaching depth, exercises or reproducible examples, coverage of reliability and production, accessibility, currency, and value for continuing technical education. Free resources receive credit for accessibility; a paid credential receives no automatic advantage.

The research used official course descriptions and syllabi, authors’ websites, public code repositories, and sample technical articles. It is a comparison of those materials, rather than a claim that I completed every course. Older material can rank highly when it teaches durable concepts; its age and limitations are identified below. “Free” refers to learning content unless stated otherwise—API usage, GPUs, or hosting may cost extra. Prices and cohort dates are a snapshot of the research date.

## Top 15 at a glance

| Rank | Resource | Format | Best use | Access |
| --- | --- | --- | --- | --- |
| 1 | [AI Engineering — Chip Huyen](https://github.com/chiphuyen/aie-book) | Book + supplements | Full-discipline foundation | Paid book; free supplements |
| 2 | [Agentic AI — Andrew Ng](https://www.deeplearning.ai/courses/agentic-ai) | Self-paced course | Agentic workflow fundamentals | Free audit; paid labs |
| 3 | [AI Engineer + Latent Space — swyx and collaborators](https://ai.engineer/) | Videos, talks, podcast + Substack | Continuing technical education | Free public media; optional paid content |
| 4 | [LLM Zoomcamp — DataTalks.Club](https://github.com/DataTalksClub/llm-zoomcamp) | Project-based course | End-to-end application | Free; small API budget |
| 5 | [AI Evals Guides — Hamel Husain & Shreya Shankar](https://hamel.dev/blog/posts/evals-faq/) | Guides + optional course | Measuring application quality | Free guides; paid course optional |
| 6 | [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) | Course + code | Open models and datasets | Free |
| 7 | [Hands-On Large Language Models](https://www.llm-book.com/) | Illustrated book + notebooks | Practical LLM techniques | Paid book; free code |
| 8 | [Anthropic Engineering](https://www.anthropic.com/engineering) | Technical articles | Agent architecture and reliability | Free |
| 9 | [Made With ML](https://madewithml.com/) | Written course + code | Production ML practices | Free public materials |
| 10 | [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) | Video course + code | Model internals | Free |
| 11 | [Simon Willison’s Weblog](https://simonwillison.net/) | Blog, experiments + tools | Practical ongoing learning | Free |
| 12 | [Dwarkesh Podcast + Substack](https://www.dwarkesh.com/) | Podcast, transcripts + essays | Frontier research understanding | Free public content; optional paid subscription |
| 13 | [LangChain Academy](https://academy.langchain.com/) | Self-paced courses | Stateful agents with LangGraph | Free featured courses |
| 14 | [Hugging Face AI Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction) | Course + assignments | Comparing agent frameworks | Free |
| 15 | [OpenAI Cookbook](https://developers.openai.com/cookbook) | Code examples + guides | Provider implementation reference | Free content; service costs may apply |

### 1. AI Engineering: Building Applications with Foundation Models — Chip Huyen

**Best overall foundation for the discipline.**

- **Format / level:** 2025 book; most useful for developers moving into AI and practitioners seeking a coherent system-design framework.
- **What you learn:** Model selection, evaluation, prompting, RAG, agents, fine-tuning decisions, data quality, inference economics, and feedback loops.
- **Why it ranks here:** It connects the major decisions in an AI application and emphasizes principles that transfer across providers and frameworks. It is the strongest anchor for organizing the other resources in this list.
- **How to use it:** Read alongside a project and turn the relevant chapters into design questions and experiments.
- **Limitation:** The author explicitly describes it as a conceptual book rather than a code-heavy tutorial. Pair it with #2 or #4.
- **Cost / links:** Paid book; free [author’s repository, chapter summaries, and study notes](https://github.com/chiphuyen/aie-book).

### 2. Agentic AI — Andrew Ng / DeepLearning.AI

**Best concise introduction to implementing modern agentic systems.**

- **Format / level:** Self-paced video course; Python familiarity required. Announced October 2025; approximately 7 hours 45 minutes of listed content.
- **What you learn:** Reflection, tool use, planning, multiple-agent workflows, error analysis, component evaluation, latency, and cost optimization.
- **Why it ranks here:** It teaches the patterns through raw Python and first principles, giving learners knowledge they can apply across frameworks.
- **How to use it:** Implement the patterns, then compare one agentic approach against a simpler baseline on the same tasks.
- **Limitation:** It focuses on agentic workflows; supplement it for deeper model training and operational infrastructure.
- **Cost / links:** [Official course and syllabus](https://www.deeplearning.ai/courses/agentic-ai). Videos can be audited free; Pro unlocks labs, assessments, and certificates. Listed Pro pricing is $30/month or $25/month billed annually. See also the [instructor’s launch explanation](https://www.deeplearning.ai/the-batch/check-out-our-course-on-how-to-build-ai-agents).

### 3. AI Engineer + Latent Space — swyx and collaborators

**Best combination of technical videos, practitioner interviews, and continuing AI Engineering coverage.**

- **Format / level:** AI Engineer conference talks, workshops, and transcripts, plus Latent Space’s podcast and Substack; useful after the basics, especially for intermediate and advanced builders.
- **What you learn:** Agent architecture, evaluation, inference, infrastructure, MCP, multimodal systems, and lessons from people building AI products.
- **Why it ranks here:** Together, these swyx-associated resources offer an unusually broad view of the discipline: practical workshops to try, interviews that explain tradeoffs, and written coverage to revisit. This makes them a strong ongoing companion to a structured course.
- **Start here:** Watch [12-Factor Agents](https://www.youtube.com/watch?v=8kMaTybvDUw), then listen to [Latent Space’s July 2026 conversation with Modal CTO Akshat Bubna](https://www.latent.space/p/modal2026).
- **Limitation:** Material varies in depth and sometimes includes product promotion; select topics deliberately and pair watching or listening with implementation.
- **Cost / links:** Public videos and podcast episodes are free; some newsletter content may be paid. [AI Engineer YouTube](https://www.youtube.com/@aiDotEngineer), [talk archive and transcripts](https://ai.engineer/), [Latent Space podcast](https://www.latent.space/podcast), and [Latent Space Substack](https://www.latent.space/).

### 4. LLM Zoomcamp — DataTalks.Club

**Best free curriculum for producing a substantial portfolio project.**

- **Format / level:** Approximately 10-week project-based course; confident Python, command-line comfort, and basic Docker familiarity. Prior ML knowledge is not required.
- **What you learn:** Agentic RAG, function calling, embeddings, vector and hybrid search, orchestration, evaluation, monitoring, and an end-to-end capstone.
- **Why it ranks here:** The current syllabus connects retrieval and model calls to application quality, an interface, and monitoring. It gives individuals a concrete structure for learning through implementation.
- **How to use it:** Complete the homework and build your own capstone using a dataset you understand.
- **Limitation:** Its center of gravity is retrieval-based assistants; it is less comprehensive on multimodal systems and model training.
- **Cost / links:** [Official materials, syllabus, and learning instructions](https://github.com/DataTalksClub/llm-zoomcamp). Free; the repository estimates roughly $1–$5 in API credits and says no GPU is needed. Self-paced study starts anytime; certification requires meeting cohort requirements.

### 5. AI Evals Guides — Hamel Husain & Shreya Shankar

**Best resource for learning how to tell whether your AI application is improving.**

- **Format / level:** Free practical guides; most useful once you have a prototype and outputs to inspect.
- **What you learn:** Trace review, failure analysis, human labeling, scoped tests, validated LLM judges, and improvement experiments.
- **Why it ranks here:** Evaluation is central to reliable AI Engineering, and these guides explain the reasoning behind the process with concrete examples. The FAQ was updated September 13, 2026.
- **How to use it:** Start with [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/index.html), then [the LLM-as-a-Judge guide](https://hamel.dev/blog/posts/llm-judge/) and [the FAQ](https://hamel.dev/blog/posts/evals-faq/). Apply them to your own project.
- **Limitation:** It is a focused evaluation curriculum, rather than an introduction to every AI Engineering topic.
- **Cost / links:** Guides are free. The optional [AI Evals for Engineers & PMs course](https://maven.com/parlance-labs/evals) lists $4,200 and an October 10–November 21, 2026 cohort. For individuals, begin with the free material before considering the paid option.

### 6. Hugging Face LLM Course

**Best free foundation for working directly with open models.**

- **Format / level:** Written lessons, videos, and code; good Python skills, with introductory deep learning helpful.
- **What you learn:** Transformers, inference, datasets, tokenizers, fine-tuning, sharing models, demos, dataset curation, and reasoning-model topics.
- **Why it ranks here:** It teaches the model and data layer that application-only tutorials often skim over. The current curriculum has evolved beyond the original NLP course and includes LLM fine-tuning and reasoning models.
- **How to use it:** Work through the early chapters, then fine-tune and evaluate a model on a small dataset relevant to your interests.
- **Limitation:** Hugging Face tooling is prominent; application architecture, provider APIs, and production operations need additional study.
- **Cost / links:** Completely free, without ads. [Official course, curriculum, and background recommendations](https://huggingface.co/learn/llm-course/chapter1/1).

### 7. Hands-On Large Language Models — Jay Alammar & Maarten Grootendorst

**Best illustrated bridge between understanding LLMs and using them in code.**

- **Format / level:** 2024 book with executable notebooks; particularly useful for Python developers who prefer visual explanations.
- **What you learn:** Embeddings, transformers, classification, clustering, prompting, advanced generation, semantic search, RAG, multimodal models, and fine-tuning.
- **Why it ranks here:** The explanations and companion code make difficult concepts approachable while providing enough breadth to connect model internals to application techniques.
- **How to use it:** Run the notebooks and modify the data or model, especially in the search and fine-tuning chapters.
- **Limitation:** Its examples reflect the book’s publication era. Use current library documentation when dependencies or model interfaces differ.
- **Cost / links:** Paid book; free notebooks. [Official book website](https://www.llm-book.com/) and [official code repository and table of contents](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models). The repository recommends Google Colab for the easiest setup.

### 8. Anthropic Engineering

**Best collection of current technical writing on agent design and reliability.**

- **Format / level:** Free articles and engineering case studies; intermediate developers benefit most.
- **What you learn:** Workflow architecture, tool design, context management, long-running agent systems, evaluation, and execution infrastructure.
- **Why it ranks here:** The collection includes detailed practitioner material and 2026 articles, helping bridge the gap between introductory tutorials and evolving production systems.
- **How to use it:** Read [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents), [Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), and [Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), then test the ideas in your project.
- **Limitation:** It reflects one provider’s experience and products, and has no unified assignments. The older agents article explicitly flags changes in tooling; follow its current references for implementation details.
- **Cost / links:** Free. [Full engineering archive](https://www.anthropic.com/engineering).

### 9. Made With ML — Goku Mohandas / Anyscale

**Best resource here for developing the engineering habits behind production ML.**

- **Format / level:** Public written course and code; Python and basic ML knowledge recommended.
- **What you learn:** Product and system design, data preparation, training, experiment tracking, evaluation, serving, logging, code/data/model testing, versioning, CI/CD, and monitoring.
- **Why it ranks here:** It explicitly joins software engineering with ML and follows the lifecycle through deployment and iteration. These skills remain useful when an AI application includes trained models or substantial data infrastructure.
- **How to use it:** Complete its end-to-end workflow, then adapt the testing, versioning, and monitoring practices to your LLM project.
- **Limitation:** It emphasizes a trained-model production workflow and Ray/Anyscale tooling. Supplement it with agent and foundation-model application material. Its core course is older than several other picks.
- **Cost / links:** Free public materials. [Official course and prerequisites](https://madewithml.com/).

### 10. Neural Networks: Zero to Hero — Andrej Karpathy

**Best free video course for understanding what happens inside language models.**

- **Format / level:** Long, step-by-step coding videos; solid Python and introductory mathematics required.
- **What you learn:** Backpropagation, language modeling, tensors, training behavior, transformers, and tokenization through implementations from scratch.
- **Why it ranks here:** It builds durable intuition that helps you reason about model limitations, training, and token-related behavior. That understanding complements the application-focused resources above.
- **How to use it:** Code along with micrograd and makemore, then complete the GPT and tokenizer videos.
- **Limitation:** This is model fundamentals, with an older GPT-based teaching sequence. It does not teach a complete production AI application workflow and is an optional deeper track for people focused on API-based products.
- **Cost / links:** Free. [Official syllabus with direct video links](https://karpathy.ai/zero-to-hero.html).

### 11. Simon Willison’s Weblog

**Best independent source for continuous, practical learning about LLM systems.**

- **Format / level:** Blog posts, experiments, tools, and short technical notes; useful from early application development onward.
- **What you learn:** Hands-on model testing, API behavior, tool use, prompt injection, AI-assisted development, and practical limitations.
- **Why it ranks here:** The site combines frequent current coverage with reproducible experiments and implementation detail. It had new material through September 16, 2026 when reviewed.
- **How to use it:** Follow the LLM material weekly and reproduce one relevant experiment. Start with [The Lethal Trifecta for AI Agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) for an accessible explanation of a major agent security problem.
- **Limitation:** It is an ongoing learning source, with news and other topics mixed in, rather than a sequential course or complete curriculum.
- **Cost / links:** Free. [Simon Willison’s Weblog](https://simonwillison.net/).

### 12. Dwarkesh Podcast + Substack — Dwarkesh Patel

**Best for understanding frontier AI research, its assumptions, and its implications for engineering.**

- **Format / level:** Long-form interviews, transcripts, and written essays; basic AI knowledge helps, though many discussions are accessible to motivated newcomers.
- **What you learn:** Model capabilities, training and data, scaling, reinforcement learning, research automation, compute economics, and competing views on AI’s trajectory.
- **Why it ranks here:** Deep interviews and substantive written analysis help learners understand why the field is changing and evaluate the assumptions behind technical decisions. The archive includes fresh interviews and essays through September 2026.
- **Start here:** Read [Pretraining Progress Is Mostly Coming from Data, September 2026](https://www.dwarkesh.com/p/pretraining-progress-is-mostly-data), including its methodology and limitations, then listen to [Ryan Greenblatt on automating AI research, August 2026](https://www.dwarkesh.com/p/ryan-greenblatt).
- **Limitation:** Its focus is broader research understanding and debate. Add coding practice from the courses above; treat forecasts as arguments to assess.
- **Cost / links:** Public episodes and articles are available free; optional paid subscription features vary. [Podcast](https://www.dwarkesh.com/podcast), [Substack and newsletter](https://www.dwarkesh.com/), [written essays](https://www.dwarkesh.com/s/blog), and [complete archive](https://www.dwarkesh.com/archive).

### 13. LangChain Academy

**Best when you want to implement stateful agents using LangGraph.**

- **Format / level:** Self-paced courses; Python developers with basic LLM knowledge.
- **Strength:** Structured lessons on graph-based orchestration, memory, streaming, human intervention, and deployment. [Introduction to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph) lists 55 lessons and six hours of video; it is free.
- **Start here:** The free [LangGraph Essentials — Python](https://academy.langchain.com/courses/langgraph-essentials-python) quickstart, then the foundation course. Browse the [current academy catalog](https://academy.langchain.com/) for Deep Agents and LangSmith topics.
- **Limitation:** Excellent implementation training, but tied to a particular framework and commercial ecosystem. Learn the underlying patterns first; provider usage and deployment may incur costs.

### 14. Hugging Face AI Agents Course

**Best free survey of multiple agent frameworks with an applied challenge.**

- **Format / level:** Written units, code, quizzes, and assignments; basic Python and LLM knowledge.
- **Strength:** Introduces agent mechanics, then explores smolagents, LlamaIndex, LangGraph, agentic RAG, and evaluation. The final assignment gives learners something concrete to build and test.
- **Cost / links:** Free course and certification process. [Official introduction, syllabus, and certification requirements](https://huggingface.co/learn/agents-course/unit0/introduction).
- **Limitation:** It overlaps with #2 and emphasizes framework exploration. It is an especially good alternative if free certification, community learning, or comparing libraries matters to you.

### 15. OpenAI Cookbook

**Best practical reference for implementing applications with OpenAI.**

- **Format / level:** Code-oriented examples and guides; working developers.
- **Strength:** Covers agents, evaluation, retrieval, tool use, multimodal systems, guardrails, and optimization. The current index includes September 2026 entries.
- **Start here:** [Build an Agent Improvement Loop with Traces, Evals, and Codex](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop), then select examples relevant to your project.
- **Cost / links:** Free learning material; executing examples can require paid services. [Official OpenAI Cookbook](https://developers.openai.com/cookbook).
- **Limitation:** A strong implementation reference, but organized as recipes and closely coupled to provider APIs. It works best alongside a structured curriculum.

## A practical way to use this list

You do not need to finish all 15 resources. Choose a core path and add specialized material when your project needs it.

### If you already program and want to build AI applications

1. **Orient yourself:** Read relevant chapters of #1, *AI Engineering*.
2. **Learn the implementation patterns:** Complete #2, *Agentic AI*.
3. **Build a substantial application:** Follow #4, LLM Zoomcamp, and create your own capstone.
4. **Measure it while building:** Apply #5’s evaluation process before adding more features or complexity.
5. **Make it operational:** Use #9 for testing, versioning, deployment, and monitoring practices.
6. **Keep learning:** Use #3 for regular technical videos and interviews; read #8 and #11 selectively, add #12 for research context, and consult #13–#15 for implementation topics.

### If you want deeper model knowledge

Work through #10 and #6, using #7 for visual explanations and practical notebooks. Then return to the application path. This is especially useful if you plan to fine-tune, serve open models, or work closer to the model/data layer.

### If you have little programming experience

First become comfortable writing Python functions, using packages, calling an API, and reading errors. Then start the application path. Most of the strongest engineering resources here assume that foundation; blogs and podcasts can provide orientation while you build it.

### Suggested evidence that you have learned the discipline

Build one useful application with a documented task, a working interface, realistic test cases, observable model/tool calls, measured quality and cost, and a repeatable deployment process. Demonstrate a change that improves it, explain the tradeoff, and show that important behavior still works. This is my suggested learning target, rather than an additional course requirement.

## Research notes

- Links in each entry point to the primary sources used to assess its content and access conditions.
- The ranking deliberately combines durable foundations with actively published technical material. Publication recency alone is insufficient to judge educational value.
- Full Stack Deep Learning’s [LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/) was also reviewed. Its free 2023 material remains useful for product thinking, LLMOps, and UX, but its tooling examples are older; I prioritized resources with closer alignment to the current application ecosystem for the final 15.
- Course access was assessed from public provider descriptions. I did not verify every logged-in lab, certificate workflow, or dependency by execution.

