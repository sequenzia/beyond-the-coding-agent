# Slide 24: Export cited brief

Beat 2.3. Section 2. Rehearsal reference 1:05 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Tools & Extensibility · FRB application

**Title:** Export cited brief

**Illustrative CUI/ECI export contract test. No deployed result claimed.**

**Design**

Export the exact checked draft to a permitted destination.

| Contract requires | Model proposes |
|---|---|
| A destination permitted for these records | A destination outside the approved scope |

**Expected result**

Export rejected before transfer.

**Evidence to check**

Clear rejection reason. No export at that destination.

## Layout and visual

- Display narrative number 24, the area kicker, and `mini-tools` throughout.
- Use the native destination comparison and expected checks in design brief §29. All visual values are defined there.
- Keep the illustrative label visible. The mismatch illustrates a failed permission check for a well-formed request, not an observed deployed incident.
- Consolidate the design, failure, and evidence into one composition. The comparison replaces duplicate failure prose and the earlier full contract table.
- Use no real destination, credential, or controlled record. Keep the exact-checked-content condition visible and preserve the full contract in the talk track and shared FRB reference.
- Keep text and the comparison editable. Show all content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **FRB APPLICATION**

[0:00] The FRB brief is ready for export. Our contract requires the exact draft that passed verification, its citations, and a destination permitted for these records.

[0:12] **Suppose the model requests an export to a destination outside that approved scope.** Its arguments can be well formed and still fail the permission check.

[0:24] The expected behavior is for the service to reject the request before transfer and return a clear reason. In a test, check both the rejection and the absence of an export at that destination. An error message alone does not establish that no transfer occurred.

[0:44] This preserves the CUI/ECI boundary. A permitted export must still retain the checked wording, citations, and uncertainty and return a matching receipt.

[0:55] This rejection is a known outcome. Orchestration next handles continuation and uncertainty after execution. **A description guides the model. Code enforces the contract.**

[1:05] Advance to slide 25.

Cut first: receipt elaboration. Never cut illustrative status, the destination mismatch, rejection before transfer, the no-export check, or exact checked content. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September and November 2025; MCP documentation, July 2026, rechecked September 2026; Agent Skills and OpenAI plugin documentation, checked September 2026; OWASP, 2025. Research §3 in `research/section-2.md`.
- Illustrative export contract: Research §0 and §3, and `internal/frb-running-example.md`. The unapproved-destination case is an expected contract test, not a measured result.
- Accepted content integration: `outlines/section-2-integration/03-tools-and-extensibility.md`. A2A remains in supporting Markdown.

## Open items

- Rehearse the 4:10 area on the actual presentation machine. Preserve the execution boundary and the unapproved-destination example when trimming.
