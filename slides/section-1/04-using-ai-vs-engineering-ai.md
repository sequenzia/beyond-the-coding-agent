# Slide 4: Using AI vs engineering AI

Beat 1.4 Using AI vs engineering AI, and why it is a different discipline. Section 1. Time 1:45. Builds: 2.

## On the slide

**Build 1.** An editable comparison table with three rows.

| AI in your development workflow | AI in the product you deliver |
|---|---|
| You use model output to help build an artifact | Users depend on model output or decisions during operation |
| You decide what to accept and ship | You design checks, approval steps, and failure handling |
| Your coding-tool provider operates the agent platform | Your team owns the product's behavior and operating limits |

**Build 2.** The table exits. The three commitments replace it.

1. A compelling prototype is not evidence of production readiness.
   Small beneath: works.any() is not works.all()
2. Traditional tests are necessary but no longer sufficient.
3. Evaluation does not stop at deployment.

## Layout and visual

- Display narrative number 4 throughout, using the shared component in the design brief.
- Playback: Two consecutive physical slides. The comparison table cuts to the commitments.

- Use the existing editable two-column table style. Three matched rows with enough room for the longer headers. Values and spacing live in the design brief.
- The commitments replace the entire table on one click. They remain the spine of the talk.

## Talk track

[0:00] **This comparison is about where the model-dependent behavior lives.** In development, you use output to build an artifact and decide what to accept and ship. In the product, users depend on model output or decisions during operation.

[0:18] **You design the checks, approval steps, and failure handling.** Human review can be part of either system. Your team owns the product's behavior and operating limits.

[0:34] Separately, Anthropic distinguishes workflows on predefined code paths from agents with model-selected actions. **An agent adds model-selected actions to control flow. Ordinary code can still enforce permissions, limits, and other guarantees.** That is why we will examine the system around the model.

[0:58] Fowler compares this to other engineering disciplines that build tolerances for variability. Reliable behavior across intended use includes a safe response when the system cannot complete a task.

[1:12] Shankar and colleagues studied how grading outputs helps people refine evaluation criteria. **Watching failures can expose missing requirements.** Some checks are known from the start; others improve as we learn.

[1:30] Build 2. **A compelling prototype is not evidence of production readiness. Traditional tests are necessary but no longer sufficient. Evaluation does not stop at deployment.**

[1:40] **Using AI changes how you build. Engineering AI changes what you are responsible for.**

[1:45] Advance to slide 5.

Cut first: the row walk, then the Fowler comparison. Never cut the model-selected-actions distinction, enforceable limits, or commitments.

## Sources

- Anthropic, "Building effective agents," December 2024. Workflow and agent definitions quoted verbatim. Research §5 in `research/section-1.md`. `[primary]`.
- Fowler, "Some thoughts on LLMs and Software Development," August 2025. Paraphrased. His text reads "a world on non-determinism," so quote it as written or paraphrase, never "of." Research §2. `[primary]`.
- Shankar, Zamfirescu-Pereira, Hartmann, Parameswaran, Arawjo, "Who Validates the Validators?" UIST 2024. "Grading outputs helps users define criteria" is from the abstract. Research §3. `[primary]`.
- The three commitments restate the published session description in the README.

## Open items

- None.
