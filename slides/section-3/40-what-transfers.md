# Slide 40: What transfers

Beat 3.1 What transfers. Section 3. Time 1:05. Builds: 2.

## On the slide

**Kicker, top left, small:** The transition · What transfers

**Title:** What transfers

**Build 1.** Two columns, six rows.

| You already do this | It becomes this |
|---|---|
| Decomposition and systems thinking | Harness design |
| Interface design | Tool design |
| Testing discipline | Eval discipline |
| Observability | The same, with a new schema |
| Security and least privilege | Least privilege for tools |
| Operations: cost, latency, incidents, rollback | The same, in tokens |

**Build 2.** Replace the table with evidence.

Engineers at incident.io, Sentry, Elsevier, and others crossed over in months, not years. One twenty-five-year veteran: about two months.

Small, quoted: "For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier." Matt Morgis, Elsevier, via The Pragmatic Engineer, March 2025.

## Layout and visual

- Display narrative number 40 throughout, using the shared component in the design brief.
- Playback: Two consecutive physical slides. The comparison table cuts to the evidence and quote.

- Use the shared header and body separation in the design brief. Full-screen anatomy states keep their standalone composition.

- The table is the slide. Six rows, two columns, no rules between rows. The left column should look like a job description the audience recognizes; the right column should look like Section 2's kickers, because it is. Rows 1 to 3 are the transformations; rows 4 to 6 are near-identities, and the wording "the same" on the right makes that visible.
- Build 2 replaces the table with the field evidence and attributed quote. The company names matter more than the quote; keep them.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1. The introductory bridge was spoken on slide 39.

**Decomposition and systems thinking transfer whole.** Matt Morgis at Elsevier: "For experienced engineers who know how to break problems down, AI tools are an incredible force multiplier." The harness is a systems design problem. **Interface design becomes tool design.** The same instincts about contracts, naming, granularity, and error handling. The caller changed. **Testing discipline extends to evals.** The habit of checking before accepting a result transfers. Ordinary tests remain part of the machinery. Observability transfers with a new schema: traces, spans, p95s. Security transfers: least privilege now applies to tools. Operations transfer: cost, latency, incident response, rollback. The units changed to tokens.

[0:40] Build 2.

Field evidence. Gergely Orosz profiled engineers at incident.io, Sentry, Elsevier, and others who crossed over in months, not years. One twenty-five-year veteran became his company's generative AI expert in about two months, by reading and prototyping.

[0:56] **You are not starting over. You are adding a layer.**

[1:05] Advance to slide 41.

The track runs about 1:00. Cuttable if Section 3 runs long, in this order: the Morgis quote spoken aloud, since it is on the slide; the three near-identity rows spoken as sentences, reduced to "Observability, security, and operations transfer almost unchanged." Do not cut the three bold transformations, the field evidence, or the takeaway.

## Sources

- Orosz, "AI Engineering in the real world," The Pragmatic Engineer, March 25, 2025. Morgis quote verbatim; profiles at incident.io, Sentry, Wordsmith, Augment Code, Elsevier, Simply Business, and DSI; Ryan Cogswell at DSI, twenty-five years, about two months. Research §1 in `research/section-3.md`. `[primary]`.
- OpenTelemetry GenAI conventions and OWASP, as referenced in rows 4 and 5, are sourced in Production operations, slides 33 through 37. Research §6 in `research/section-2.md`. `[primary]`.
- The six-row mapping is the talk's own framing.

## Open items

- None.
