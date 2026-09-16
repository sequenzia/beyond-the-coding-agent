# Slide 29: Recovery after an uncertain export

Beat 2.4. Section 2. Rehearsal reference 1:10 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · FRB application

**Title:** Recovery after an uncertain export

**Illustrative permitted export and recovery test.**

| Orchestrator | Export service |
|---|---|
| Record and dispatch export | Export occurs |
| Outcome unknown | Response lost before reaching the caller |
| Inspect export state | Receipt and artifact |

**Evidence to check**

Matching receipt and checked artifact. No duplicate export.

**If unresolved:** Pause or hand off with uncertainty intact.

## Layout and visual

- Display narrative number 29, the area kicker, and `mini-orchestration` throughout.
- Use the native two-lane recovery sequence in design brief §30. All visual values are defined there.
- Distinguish the service-side export from caller-side uncertainty. Mark the lost response and show the subsequent state inspection.
- This is a separate permitted export of the checked draft, not a continuation that bypasses the rejected destination on slide 24.
- The evidence statement describes expected checks. The scenario does not claim a measured recovery, successful mitigation, or implemented service guarantee.
- The six-stage workflow now appears on slide 26. Operation-reference mechanics and qualified idempotency stay in the talk track and shared reference.
- Keep text and diagram elements editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **FRB RECOVERY APPLICATION**

[0:00] This is a separate export to a permitted destination, using the exact checked draft. Suppose the service creates the brief, but the response never reaches the caller.

[0:14] **Record outcome unknown. Check the export state before deciding whether to retry.** Use the intended operation's reference to inspect its receipt and output. A matching checked artifact can establish completion without another export.

[0:33] **Idempotency means retrying the same intended operation does not duplicate its effects.** The service must support that contract. An identifier in our log alone is insufficient.

[0:48] If the outcome remains uncertain, pause or hand off. Recheck permissions and freshness when work resumes, and repeat verification if the draft changes. Reaching a work limit does not make an incomplete brief complete.

[1:02] Next, Verification & Evals explains what the checks should establish. **The loop is where autonomy gets its limits. Start with the workflow.**

[1:10] Advance to slide 30.

Cut first: detailed operation-reference mechanics. Never cut permitted-export status, outcome uncertainty, reconciliation before retry, the qualified idempotency definition, or explicit incomplete/handoff status. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, December 2024, June and November 2025; LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026. Research §4 in `research/section-2.md`.
- Illustrative workflow and recovery contract: Research §0, §3, and §4, and `internal/frb-running-example.md`. The permitted-export timeout is a separate teaching scenario from Tools' rejection case.
- Accepted integration: `outlines/section-2-integration/04-orchestration.md`. No framework choice, measured recovery result, or universal retry guarantee is claimed.

## Open items

- Rehearse the retained 3:55 allocation on the actual presentation machine. The foundations slide gains 0:15 and the focused recovery application gives up 0:15. Preserve the workflow gate and safe recovery distinction when trimming.
