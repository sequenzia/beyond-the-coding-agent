# Slide 7: Using AI vs engineering AI

Beat 1.7 Using AI vs engineering AI. Section 1. Time 1:30. Builds: 2 screens, separated by one advance.

## On the slide

**Build 1.** An editable comparison table.

| AI during software development | AI in the product you deliver |
|---|---|
| AI helps you build the software | AI contributes to its behavior during use |
| You review and test what you ship | You also evaluate model behavior across representative cases |
| Your coding-tool provider operates the agent platform | Your team owns the AI system's behavior and operating limits |

**Build 2.** The table exits. Title: **Production readiness**

1. A compelling prototype is not evidence of production readiness.
   Small beneath: works.any() is not works.all()
2. Traditional tests are necessary but no longer sufficient.
3. Evaluation does not stop at deployment.

## Layout and visual

- Display narrative number 7 on both physical slides. The comparison cuts to the commitments.
- Preserve the native two-column table style and centered commitments block.
- Give the commitments their own visible title, with clear separation from the first statement.
- Reserve "workflow" for orchestration, not standard software development.
- Visual values follow the design brief.

## Talk track

[0:00] Build 1. **The distinction is where the model-dependent behavior lives.** During development, AI helps you build the software. In the delivered product, users depend on model output or actions during use.

[0:16] **Human review can exist on either side.** Your team owns the AI system's behavior and operating limits. You design its checks, permissions, approval steps, and failure handling.

[0:32] **In a predefined workflow, code fixes the path. An agent can let the model select the next action. Your code still enforces permissions and limits.** This added responsibility is why we will examine agentic systems and the system around the model.

[0:55] Build 2. **A compelling prototype is not evidence of production readiness. Traditional tests are necessary but no longer sufficient. Evaluation does not stop at deployment.**

[1:13] These are the commitments behind the six areas we are about to examine. **Using AI changes how you build. Engineering AI changes what you are responsible for.**

[1:30] Advance to slide 8.

Cut first: the row walk and final setup sentence. Never cut human review on either side, enforceable permissions and limits, or the three commitments.

Backup, not spoken: Fowler compares this to other engineering disciplines that build tolerances for variability. Reliable behavior across intended use includes a safe response when the system cannot complete a task.

Backup, not spoken: Shankar and colleagues studied how grading outputs helps people refine evaluation criteria. Watching failures can expose missing requirements. Some checks are known from the start; others improve as we learn.

## Sources

- Anthropic, "Building effective agents," December 2024. Research §5 in `research/section-1.md`. `[primary]`. The spoken bridge paraphrases the workflow and agent distinction.
- The three commitments restate the published session description in the README.
- Backup only: Fowler, August 2025, Research §2; Shankar et al., UIST 2024, Research §3. Preserve their verification status and qualifications in research.

## Open items

- None.
