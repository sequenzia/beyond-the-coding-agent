# Slide 5: Deterministic logic and model behavior

Beat 1.5 Deterministic logic and model behavior. Section 1. Time 0:55. One static screen; no internal builds.

## On the slide

**Title:** Deterministic logic and model behavior

| Deterministic logic | Model behavior |
|---|---|
| Explicit rules implemented in code | Learned behavior guided by instructions and context |
| Same input and state produce the same result | Same supplied input can produce different results |

## Layout and visual

- Display narrative number 5. Show the complete editable comparison on entry.
- Use a flat native table with clear separation between the two columns. No mini-map, attribution, or takeaway line.
- Preserve the deck's typography and grid. Visual values follow design brief §37.
- Use hard cuts. The comparison concerns deterministic logic, not every part of a traditional software system.

## Talk track

[0:00] When we write deterministic logic, we specify the rules. Given the same input and state, those rules produce the same result.

[0:12] A foundation model adds learned behavior, guided by instructions and context. It can handle language and ambiguity without us spelling out every rule. But the same supplied input can produce different results, and **an instruction is not an enforced constraint.**

[0:34] Software already deals with uncertainty. The shift here is that part of the product’s behavior depends on the model.

[0:44] Using AI to help write software changes how you build. **Putting AI inside the product changes the behavior you are responsible for.**

[0:55] Advance to slide 6.

Cut first: the elaboration on language and ambiguity. Never cut fixed inputs and state, the uncertainty qualification, instructions versus enforced constraints, or retained responsibility. The wording is presenter-approved; timestamps are rehearsal cues, not measured delivery times.

## Sources

- Aizawa, Anthropic, September 2025; Willison, March and October 2025. Research §2 in `research/section-1.md`.
- Enforced authorization: OWASP, 2025. Research §5 in `research/section-1.md`.
- This is a conceptual comparison of components. It does not claim that all traditional software is deterministic or that model output always changes.

## Open items

- Rehearse the locked script against the 0:55 target.
