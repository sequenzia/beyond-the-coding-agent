# Slide 23: The pitfalls, on one slide

Beat 3.3 The pitfalls, on one slide. Section 3. Time 0:35. Builds: 1.

## On the slide

**Kicker, top left, small:** The transition · The pitfalls

Six lines. No title, no other text.

1. Models: Choosing and changing models without testing them on your task.
2. Context: adding instead of curating.
3. Tools: copying the API surface without evaluating task fit.
4. Orchestration: multi-agent before a workflow was tried.
5. Evals: a generic judge instead of error analysis. Trusting the success claim without checking the result.
6. Operating: the lethal trifecta, assembled one integration at a time.

## Layout and visual

- Display narrative number 23 throughout, using the shared component in the design brief.

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- Six lines, all at once, no build. The audience has seen each one as a band at the bottom of a Section 2 slide, so the recognition is the effect. Use the same visual treatment as the bands: same label style, same weight, stacked.
- The area names on the left match the kickers from Section 2 in order: Models, Context, Tools, Orchestration, Evals, Operating.
- The pitfall text after each colon matches the band on slides 9, 11, 13, 15, 17, and 19 exactly. If any band changes, this slide changes with it.
- The seventh pitfall, the framework, is spoken and not shown, per the outline. If you want it on screen, add it as a second build beneath the six, set apart: "And one more: a framework before the loop." It is not on the map, which is why it is kept off the list.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Slide up. Let them read it.

You have seen all six.

[0:05] **Every one is a symptom of the same thing: treating the demo as the product.** works.any() shipped as works.all().

[0:13] One more that is not on the map: reaching for a framework before understanding the loop. Anthropic's warning is that frameworks "create extra layers of abstraction that can obscure the underlying prompts and responses." Learn the loop first.

[0:29] **Every pitfall on this list is a demo mistaken for a product.**

[0:35] Advance to slide 24.

The track runs about 0:34. The five seconds of silence at the top are deliberate; the audience needs them to recognize the six lines. Cuttable if Section 3 runs long: the framework paragraph, which returns on slide 24 as "own the harness." Do not cut the two bold lines.

## Sources

- The six pitfalls are Section 2's, one per area. Research §1 through §6 in `research/section-2.md`.
- Anthropic, "Building effective agents," December 2024. Frameworks "often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug." Quoted as a substring. Research §3 in `research/section-3.md`. `[primary]`.
- works.any() and works.all() from slide 1. Research §2 in `research/section-1.md`. `[primary]`.

## Open items

- Decide whether the framework pitfall appears as a second build or stays spoken.
