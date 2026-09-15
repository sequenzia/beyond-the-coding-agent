# Slide 7: The map

Beat 2.0 The map. Section 2. Time 2:00. Builds: 4 highlights and a return to full brightness across six physical slides.

## On the slide

The anatomy diagram, full screen, with the shared narrative number. Use the landscape version, `internal/anatomy-of-an-agentic-ai-system-landscape.svg`, which is the portrait PNG re-laid for 16:9 with the same boxes, labels, and colors.

Highlight states, one per layer in the talk track. Each dims everything except the region named:

1. Model.
2. Harness: instructions, context and memory, tools, orchestration, guardrails, verification.
3. Per-run services: identity and access, security, data and knowledge.
4. Across runs: observability, evaluations, governance.

After build 4, everything returns to full brightness for the close.

## Layout and visual

- Display narrative number 7 throughout, using the shared component in the design brief.
- Playback: Six consecutive physical slides: full diagram, four highlights, then full brightness. Each advance is a hard cut.

- The diagram and narrative number are the only elements on each physical slide. Its own title, "Anatomy of an Agentic AI System," serves as the slide title.
- Aspect ratio. The original PNG is portrait, about 5:6, and its subtitles would not have been legible past the front rows on a 16:9 slide. The landscape SVG puts per-run services across the top, the run with model and harness in the middle band, and across-run services along the bottom. At 1920 by 1080 the box titles are 24 to 28 point and the subtitles 18 to 20 point, which reads from a room. The SVG is plain text, so any box can be relabeled for slide 19.
- Highlight builds are recommended. Two minutes on one static image is a long time, and the talk track walks four regions in sequence. A pointer works if builds are not possible, but builds are more reliable from a stage.
- Slide 19 shows this diagram again with every box labeled "yours." Keep the diagram's source editable so that variant can be made from the same file.

## Talk track

[0:00] Here is the whole discipline on one slide. We will walk it from the inside out.

[0:08] Build 1, the model. At the center, an agent is a model plus a harness. The line that stuck this spring: **"If you're not the model, you're the harness."**

[0:20] Build 2, the harness. What is a harness? OpenAI's August 2026 definition. An agent "needs a way to understand a task, maintain context over time, inspect relevant information, call tools, expose progress, handle failures, request human approval when necessary, and return a useful result. That surrounding execution system is the harness."

[0:45] **Four layers.** The model, which decides what to do. The harness around it: instructions, context and memory, tools, orchestration, guardrails, verification.

[1:00] Build 3, per-run services. The platform services every run draws on: identity, security, data and knowledge.

[1:08] Build 4, across runs. And the services that let you learn from and control many runs: observability, evaluations, governance.

[1:16] Full brightness. "Harness engineering" is probably the phrase you have heard most since spring. It maps onto this picture. **Every box on it exists inside the coding agent you used this morning. Someone built each one. We are going to take six of them apart.**

[1:35] For each: When you are the user, what someone engineered, and what changes when you are the owner.

[1:45] **Agent equals model plus harness. Everything that is not the model is what you engineer.**

[2:00] Advance to slide 8.

Optional, if there is slack: after build 4, point at the top and bottom of the run box. A goal comes in from a user, a trigger, or a schedule. The agent runs until a stopping condition is met. Who writes the stopping condition? You do. That is slide 15.

Cuttable if short on time: none of the bold. The OpenAI definition can be shortened to its last sentence, "That surrounding execution system is the harness," with the verb list carried by the diagram.

## Sources

- Osmani, "Agent Harness Engineering," April 2026, quoting Viv Trivedy: "Agent = Model + Harness. If you're not the model, you're the harness." Research §0 in `research/section-2.md`. `[primary]`. The line is Trivedy's; Osmani spread it. If asked who said it, say so.
- OpenAI, "Codex as a platform," August 2026. Definition quoted verbatim. Research §0. `[primary]`.
- "Since spring" for harness engineering: OpenAI's February 2026 post, Osmani in April, OpenAI's August definition. Research §7.

## Open items

- The four highlight states and return to full brightness use the generated renders on consecutive physical slides.
- Review the landscape SVG's colors and type against the deck template once one is chosen.
