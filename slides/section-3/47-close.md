# Slide 47: Close

Beat 3.5 Close and resources, first half. Section 3. Time 0:22 of the beat's 0:30; slide 48 takes 0:08. Builds: 1.

## On the slide

The two thesis sentences, exactly as on slide 6.

- Using AI makes you an AI-enabled software engineer.
- Engineering systems that depend on AI makes you an AI engineer.

**Build 1.** One word beneath them: Questions.

## Layout and visual

- Display narrative number 47 throughout, using the shared component in the design brief.
- Playback: One physical slide. Questions remains an internal reveal.

- Reuse slide 6 unchanged, then add the build. The audience saw this screen thirty minutes ago; the recognition is the close.
- "Questions" sits beneath the two sentences in the same type, smaller. No contact details, no handles, no logos; those belong on slide 2 or slide 48 if anywhere.
- Reveal Questions, then advance to the final resources slide. Use a hard cut.

## Talk track

[0:00] Slide up.

**Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.** The difference is not the tools. **It is what you are responsible for.**

[0:15] Build 1.

Let’s use the remaining time for your questions.

[0:22] Advance to slide 48.

## Backup for questions and discussion

The outline's Section 4 is canonical; this is the podium copy. Two-line answers, each traced to a slide.

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

Optional hiring backup: Dice reported AI/ML postings up 101% year over year in August 2026 versus 18% for all tech postings. The publisher page was checked September 14. Dice also reported LinkedIn's #1 AI Engineer ranking; the ranking is secondary evidence. Research §1 in `research/section-3.md`.

If the room is quiet:

- "Who here has shipped something where the model chose the control flow? What broke first?"
- "What did your coding agent do for you this week that you would have to build yourself?"
- "Where does your organization's AI project sit right now: pilot, workflow, or agent? What would it take to move it one step?"

Not on stage, even if asked: the MIT NANDA 95% figure as fact, Karpathy's Sequoia lines, any salary band, the 89% versus 52% observability-versus-evals statistic. The "Do not use on stage" list at the end of the outline has the reasons.

For a routing question, Devin CLI's Fusion (September 11, 2026) is in research §1 of `research/section-2.md`: a lead model for planning and review paired with a cheaper sidekick for execution. Not on the slides because it is a week old.

## Sources

- The thesis sentences: slide 6. Research §1 in `research/section-1.md`.
- Q&A answers trace to the slides named. The Dice figure was confirmed on the publisher page September 14, 2026. Research §1 in `research/section-3.md`. `[primary]`.

## Open items

- None.
