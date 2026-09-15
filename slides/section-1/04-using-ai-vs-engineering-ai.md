# Slide 4: Using AI vs engineering AI

Beat 1.4 Using AI vs engineering AI, and why it is a different discipline. Section 1. Time 1:45. Builds: 2.

## On the slide

**Build 1.** Two columns, five rows, read across.

| Using AI | Engineering AI systems |
|---|---|
| The behavior lives in code. | Part of the behavior lives in a model you did not train. |
| The model is a tool in your workflow. | The model is in the control flow. |
| You review every output. | Nobody reviews every output. |
| You are the verifier. | The system has to verify itself. |
| The demo is the product, because you are there. | The demo is one path through a space of behaviors. |

**Build 2.** The columns exit. Three numbered lines, centered.

1. A compelling prototype is not evidence of production readiness.
   Small, beneath it: works.any() is not works.all()
2. Traditional tests are necessary but no longer sufficient.
3. Evaluation does not stop at deployment.

## Layout and visual

- Build 1: two column headings, five short rows, no table rules. Each row is a pair, so align the rows so the eye reads left then right. The last row is the one that matters most; give it a little extra space above.
- Build 2: replace, do not overlay. The columns have been up for 85 seconds and the three commitments deserve a clean screen. They are the spine of the talk and each returns later, so the audience should see them alone. Alternative if the deck template prefers continuity: dim the columns and drop the three lines in as a band across the bottom.
- The three commitments use the same wording as the published session description, so attendees who read it will recognize them.

## Talk track

[0:00] Build 1.

**In traditional software, the behavior is the code. In an AI system, part of the behavior is delegated to a probabilistic model:** context-sensitive, variable, and impossible to specify exhaustively in advance.

[0:12] Look at the last three rows. On the left, you review every output. You are the verifier. The demo is the product, because you are there. On the right, nobody reviews every output. The system has to verify itself. And the demo is one path through a space of behaviors.

[0:28] Anthropic's distinction is the useful one. Workflows are LLMs and tools orchestrated through predefined code paths. Agents are LLMs that dynamically direct their own processes and tool usage. **Agents are where the control flow itself depends on the model, so every guarantee you used to get from a code path has to be re-established another way. That is why agentic systems are the most demanding expression of this discipline, and why they are the next twenty-five minutes.**

[0:54] Martin Fowler's framing: this is software joining the rest of engineering in a world of non-determinism. A structural engineer builds in tolerance for the factors she cannot measure. Now we do too.

[1:06] One more thing changes, and it is subtle. Shankar and colleagues showed in a peer-reviewed study that people cannot fully write their evaluation criteria before they see outputs. **Grading outputs is how you discover the criteria.** They call it criteria drift. So the order you are used to, spec, then tests, then code, partly inverts. **You learn the spec by watching the system.**

[1:30] Build 2.

Three commitments for the rest of the talk. Each one comes back. **A compelling prototype is not evidence of production readiness. Traditional tests are necessary but no longer sufficient. Evaluation does not stop at deployment.**

[1:40] **Using AI changes how you build. Engineering AI changes what you are responsible for.**

[1:45] Advance to slide 5.

Cuttable if short on time, in this order: the row walk at [0:12], since the audience can read it; the Fowler beat at [0:54]. Do not cut the agents line, criteria drift, or the commitments. Criteria drift is planted here and paid off on slide 16.

## Sources

- Anthropic, "Building effective agents," December 2024. Workflow and agent definitions quoted verbatim. Research §5 in `research/section-1.md`. `[primary]`.
- Fowler, "Some thoughts on LLMs and Software Development," August 2025. Paraphrased. His text reads "a world on non-determinism," so quote it as written or paraphrase, never "of." Research §2. `[primary]`.
- Shankar, Zamfirescu-Pereira, Hartmann, Parameswaran, Arawjo, "Who Validates the Validators?" UIST 2024. "Grading outputs helps users define criteria" is from the abstract. Research §3. `[primary]`.
- The three commitments restate the published session description in the README.

## Open items

- None.
