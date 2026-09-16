# Slide 36: Risks across integrations

Beat 2.6. Section 2. Rehearsal reference 0:45 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 27:00 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Production operations · Challenges and pitfalls

**Title:** Risks across integrations

- **Private data:** Information the system can access.
- **Untrusted content:** Instructions can arrive inside documents.
- **External communication:** Outbound actions can carry information.

**Pitfall:** the lethal trifecta, assembled one integration at a time.

A probabilistic filter is insufficient as the sole security boundary.

## Layout and visual

- Display narrative number 36, the area kicker, and `mini-operating` throughout.
- Use the pitfalls composition in design brief §23. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- The headline pitfall belongs in the body, not a footer. Its sentence must match slide 42 exactly.

## Talk track

[0:00] **CHALLENGES AND PITFALLS**

[0:00] The pitfall is **the lethal trifecta, assembled one integration at a time.** Willison describes private data, untrusted content, and external communication combining into a potential path for data theft. A document can contain instructions, and an outbound request can carry information. Review the combined path and break or constrain it.

[0:27] This is one threat model, not a complete safety test. A probabilistic filter can contribute to protection but is insufficient as the sole security boundary.

[0:45] Advance to slide 37.

Cut first: the outbound-request example. Never cut the exact pitfall, threat-model scope, and filter limitation. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Full evidence records: `research/section-2.md`. Illustrative packet and contracts: `internal/frb-running-example.md`.
- Reviewed Production operations content; Rauch in Datadog, 2026; Willison, June 2025; OWASP; existing observability framing; illustrative FRB operating agreement. Research §0, §3, and §6.

## Open items

- Rehearse native playback on the actual presentation machine. The build renders full editing views and presentation states; validation here uses the macOS runtime.
