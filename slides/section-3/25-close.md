# Slide 25: Close

Beat 3.5 Resources and close, second half. Section 3. Time 0:22 of the beat's 0:30; slide 24 took 0:08. Builds: 1. Stays up for the fifteen minutes of questions.

## On the slide

The two thesis sentences, exactly as on slide 3.

- Using AI makes you an AI-enabled software engineer.
- Engineering systems that depend on AI makes you an AI engineer.

**Build 1.** One word beneath them: Questions.

## Layout and visual

- Reuse slide 3 unchanged, then add the build. The audience saw this screen thirty minutes ago; the recognition is the close.
- "Questions" sits beneath the two sentences in the same type, smaller. No contact details, no handles, no logos; those belong on slide 2 or slide 24 if anywhere.
- This slide stays up for the full fifteen minutes, so it has to be calm. Nothing on it should compete with the room.

## Talk track

[0:00] Slide up.

**Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.** The difference is not the tools. **It is what you are responsible for.**

[0:15] Build 1.

We have fifteen minutes for your questions.

[0:22] Section 4 begins. The slide stays.

## Backup for the fifteen minutes

The outline's Section 4 is canonical; this is the podium copy. Two-line answers, each traced to a slide.

1. **Do I need to learn machine learning first?** No. swyx, quoting Karpathy: "One can be quite successful in this role without ever training anything." You need model behavior intuition from reading outputs, plus enough theory to know what a model cannot do. Slide 21.
2. **Which framework should I learn?** The loop, first. Frameworks obscure prompts and responses. Build one agent on raw API calls; after that a framework is a convenience you can evaluate. Slides 14 and 22.
3. **How are evals different from tests?** A test checks one path deterministically and must pass. An eval checks a distribution against graders and reports a rate, and a 100% pass rate usually means the suite is too easy. Slides 16 and 17.
4. **Is prompt injection solved?** No. Willison: "we still don't know how to 100% reliably prevent this from happening." Break the trifecta, treat retrieved content as untrusted, gate consequential actions. Slide 18.
5. **Single agent or multi-agent?** Single agent with tools until it demonstrably fails. Multi-agent pays for parallel, breadth-first work at about fifteen times the tokens and is a poor fit for shared context. Slide 14.
6. **What about cost at scale?** Measure cost per completed task. Lay out prompts for cache hits, route the calls that do not need the frontier model, set token and action budgets per run. Slides 9, 10, 15, 18.
7. **Will better models make the harness obsolete?** The harness moves up, not away. Compaction and verification loops were harness work two years ago; parts moved into the model and the remaining harness got bigger. Slide 7.
8. **How do I get hired as an AI engineer?** Ship one model-dependent system with an eval suite you can show. AI engineer is the top role on LinkedIn's 2026 list, and Dice reports AI and machine learning postings up 101% year over year in August 2026, more than five times the 18% for tech overall. The ranking says demand; the eval suite says you can do the job.

If the room is quiet:

- "Who here has shipped something where the model chose the control flow? What broke first?"
- "What did your coding agent do for you this week that you would have to build yourself?"
- "Where does your organization's AI project sit right now: pilot, workflow, or agent? What would it take to move it one step?"

Not on stage, even if asked: the MIT NANDA 95% figure as fact, Karpathy's Sequoia lines, any salary band, the 89% versus 52% observability-versus-evals statistic. The "Do not use on stage" list at the end of the outline has the reasons.

For a routing question, Devin CLI's Fusion (September 11, 2026) is in research §1 of `research/section-2.md`: a lead model for planning and review paired with a cheaper sidekick for execution. Not on the slides because it is a week old.

## Sources

- The thesis sentences: slide 3. Research §1 in `research/section-1.md`.
- Q&A answers trace to the slides named. The Dice figure was confirmed on the publisher page September 14, 2026. Research §1 in `research/section-3.md`. `[primary]`.

## Open items

- None.
