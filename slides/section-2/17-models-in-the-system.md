# Slide 17: The model invocation

Beat 2.1. Section 2. Rehearsal reference 1:05 of the area's 4:30. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Model Selection · Foundations

**Title:** The model invocation

| Supplied input | Inference | Generated output |
|---|---|---|
| Instructions, request, evidence, tool definitions | Run a trained model with selected settings | Response or proposed tool call |

- **Tokens:** Units the model processes and generates. Used to track usage.
- **Context limit:** Capacity for supplied input and generated output.
- **Reasoning settings:** Effort controls, where supported. Evaluate their effect on the task.

Choose a model version and settings suited to the task and approved for the data.

## Layout and visual

- Display narrative number 17, the area kicker, and `mini-models` throughout.
- Use the native model-invocation diagram and annotation rows in design brief §27. All visual values are defined there.
- Connect supplied input, inference, and generated output. Keep context capacity associated with the whole call. A proposed tool call is not shown as an executed action.
- Keep the configuration responsibility visible below the annotations. Connect each foundation to a configuration choice or constraint in the talk track.
- Show the complete content on entry. Use hard cuts and no internal builds. Keep all labels editable.

## Talk track

[0:00] **MODEL INVOCATION**

[0:00] Model selection includes choosing a model version and its settings. Let's look at what happens when your application calls it.

[0:10] The application supplies instructions, a request, evidence, and tool definitions. **Inference means running a trained model on that input to obtain an output.** It can return a response or propose a tool call. The application handles execution.

[0:26] Tokens are units the model processes and generates. For text, they can be pieces of words. They help us track usage.

[0:36] The context limit constrains capacity for input and output. Leave room for the answer and, where applicable, reasoning tokens. Exact limits depend on the model.

[0:48] Some models also expose reasoning settings. **Treat reasoning effort as part of the configuration you evaluate.** Measure whether it improves the task enough to justify the cost and delay.

[1:00] Next, compare the eligible configurations on representative work.

[1:05] Advance to slide 18.

Cut first: the pieces-of-words example. Never cut the four foundation definitions, application execution boundary, model-specific qualification, or evaluated configuration responsibility. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- OpenAI concepts, context, reasoning, and selection guidance, checked September 2026. Research §1 in `research/section-2.md`.
- Accepted technical foundations: `outlines/section-2-integration/01-model-selection.md`. Current copy and script refined with the presenter September 16, 2026.

## Open items

- Copy and script agreed with the presenter. Rehearse the 1:05 allocation on the actual presentation machine. Slides 17 through 19 total 2:40, with the area remaining 4:30.
