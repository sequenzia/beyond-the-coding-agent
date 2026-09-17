# Slide 44: Risks across integrations

Beat 2.6. Section 2. Rehearsal reference 0:45 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** AgentOps · Challenges and pitfalls

**Title:** Risks across integrations

| Capability | What creates the risk |
|---|---|
| Private data | Sensitive records, including CUI/ECI. |
| Untrusted content | Documents or messages may contain malicious instructions. |
| Outbound access | Requests or actions can send information outside the approved environment. |

**Pitfall:** Combining private data, untrusted content, and outbound access without reviewing the risk.

A probabilistic filter is insufficient as the sole security boundary.

## Layout and visual

- Display narrative number 44, the area kicker, and `mini-operating` throughout.
- Use the pitfalls composition in design brief §43, updating §23 and §32. All visual values are defined there.
- Show the complete content on entry. Use hard cuts in and out, with no internal reveal or user/owner label.
- Keep text editable and the spoken takeaway out of the visible body.
- The headline pitfall belongs in the body, not a footer. Its sentence must match slide 50 exactly.

## Talk track

[0:00] **CHALLENGES AND PITFALLS**

[0:00] For this audience, sensitive data includes **CUI/ECI**. Review where that information goes, including prompts, tool calls, and traces.

[0:10] An agent may read sensitive records, encounter malicious instructions in a document, and make an outbound request. Willison describes how those capabilities can combine into a path for data theft.

[0:23] **The pitfall is combining private data, untrusted content, and outbound access without reviewing the risk.**

[0:31] Review integrations together. Enforce approved processing, access, and destinations outside the model. **A probabilistic filter is insufficient as the sole security boundary.** This is one threat model, not a complete security assessment.

[0:45] Advance to slide 45.

Cut first: the sentence illustrating the document and outbound request. Never cut CUI/ECI and the information path, the Willison attribution, the exact pitfall, enforced processing and access boundaries, threat-model scope, or filter limitation. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Willison, June 2025; OWASP authorization guidance. Research §3 and §6 in `research/section-2.md`.
- NARA CUI and Export Controlled registry guidance; NIST SP 800-171 publication abstract, checked September 2026; presenter-supplied CUI/ECI audience context, September 2026. Research §1 and §6 in `research/section-2.md`.

## Open items

- Content and script approved by the presenter. Rehearse the locked 0:45 script on the presentation machine. The three content slides total 2:40 and preserve the area's 4:10 allocation.
