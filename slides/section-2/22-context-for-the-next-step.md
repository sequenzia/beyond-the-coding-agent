# Slide 22: Context for each model call

Beat 2.2. Section 2. Rehearsal reference 1:00 of the area's 4:30. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds. Visible copy and script approved September 16, 2026.

## On the slide

**Kicker:** Context Engineering · Foundations

**Title:** Context for each model call

**Diagram label:** Input for this call

Top row:

| Category | Supporting text |
|---|---|
| **Instructions** | Rules and constraints |
| **Current request** | The task and desired result |
| **Examples** | Demonstrations of expected behavior |
| **Retrieved evidence** | Relevant files and passages |

Bottom row:

| Category | Supporting text |
|---|---|
| **History and task state** | Prior messages and progress |
| **Selected memory** | Retained information brought into this call |
| **Tool definitions** | Available operations and arguments |
| **Tool results** | Returned data and observations |

## Layout and visual

- Display narrative number 22, the area kicker, and `mini-context` throughout.
- Use the native editable eight-category diagram in design brief §38. All visual values are defined there.
- Place two rows of four categories inside one outlined input boundary. Keep each explanation with its category.
- The categories are common ingredients, not a required sequence, exhaustive inventory, or equal portions of the context budget. The diagram shows input for this call rather than total context-capacity accounting.
- Show the complete content on entry with hard cuts and no internal builds. Keep the repeated-selection responsibility and coding-agent example spoken.

## Talk track

[0:00] **INPUT FOR THIS CALL**

[0:00] **Context Engineering manages the information available to the model at every inference turn.** Each turn is another model call.

[0:10] The input can include instructions, the current request, examples, and retrieved evidence. It also includes selected history, task state, and memory.

[0:21] Tool definitions describe available operations and their arguments. Tool results contain the observations returned by those operations.

[0:30] Stored memory and source documents remain outside the working context until selected information is brought in. A generated summary still needs supporting sources.

[0:41] For a coding agent, that might mean repository instructions, relevant files, and test output.

[0:48] **The system must manage this input before every model call, including the next call after a tool result.** Next, we'll look at those choices.

[1:00] Advance to slide 23.

Cut first: the coding-agent example. Never cut the opening definition, the distinction between stored and included information, or the closing responsibility. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September 2025, and the existing coding-agent context material. Research §2 in `research/section-2.md`, including the approved slide 22 foundations refinement.
- The eight categories organize existing source concepts for teaching. They do not prescribe a request format, sequence, or token allocation.

## Open items

- Rehearse the approved 1:00 script on the actual presentation machine.
