# Slide 12: The model invocation

Beat 2.1. Section 2. Rehearsal reference 1:20 of the area's 4:30. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Model Selection · Foundations

**Title:** The model invocation

| Supplied input | Inference | Generated output |
|---|---|---|
| Instructions, request, evidence, tool definitions | Run a trained model with selected settings | Response or proposed tool call |

- **Tokens:** Units of content the model processes and generates.
- **Context limit:** Capacity for input and generated tokens.
- **Reasoning settings:** Control reasoning effort where supported.

Choose a configuration suited to the task and approved for the data.

## Layout and visual

- Display narrative number 12, the area kicker, and `mini-models` throughout.
- Use the native model-invocation diagram and annotation rows in design brief §27. All visual values are defined there.
- Connect supplied input, inference, and generated output. Keep context capacity associated with the whole call. A proposed tool call is not shown as an executed action.
- Keep the configuration responsibility visible below the annotations. The coding-agent connection stays spoken.
- Show the complete content on entry. Use hard cuts and no internal builds. Keep all labels editable.

## Talk track

[0:00] **MODEL INVOCATION**

[0:00] Your application supplies instructions, a request, relevant evidence, and available tools. **Inference is running an already trained model on that input to obtain an output.** That output can be a response or a proposed tool call. The application handles execution.

[0:21] Tokens are units the model processes and generates. For text, they can be pieces of words. They help us understand usage and capacity.

[0:32] The context window limits the tokens available for a call. Leave room for generated output and, where applicable, reasoning tokens. The precise limits depend on the model.

[0:47] Some models expose reasoning settings. **Treat effort as part of the configuration you evaluate.** Measure whether it improves the task enough to justify its cost and delay. Choosing a model and effort for a coding task is a familiar version of this decision.

[1:08] Our responsibility is to choose and maintain a configuration that fits the task and is approved for the data. Next, compare the eligible options.

[1:20] Advance to slide 13.

Cut first: the coding-task elaboration. Never cut the four foundation definitions, model-specific qualification, or selection responsibility. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- OpenAI concepts, context, reasoning, and selection guidance, checked September 2026; Osmani, April 2026; data eligibility and lifecycle sources; presenter audience context. Research §0 and §1 in `research/section-2.md`.
- Illustrative packet and contracts: `internal/frb-running-example.md`. Failure investigation: Research §5. No model scores or winning configuration are claimed.
- Accepted content integration: `outlines/section-2-integration/01-model-selection.md`.

## Open items

- Rehearse the 4:30 area on the actual presentation machine. The four primer concepts precede decisions. Preserve the FRB decision and headline pitfall when trimming.
