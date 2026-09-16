# Slide 28: State, recovery, and stopping

Beat 2.4. Section 2. Rehearsal reference 1:00 of the area's 3:55. Section 2 remains 25:00 to 29:00; these cues sum to a 28:30 rehearsal reference. One static screen; no internal builds.

## On the slide

**Kicker:** Orchestration · Decisions

**Title:** State, recovery, and stopping

**Explicit state**

Pending work, completed stages, check results, and operation status.

**Recovery**

Resume saved state and reconcile external actions before retrying.

**Stopping conditions**

Completion, waiting, failure, cancellation, and budget exhaustion.

**Checkpoint**

Saved execution state for resumption.

## Layout and visual

- Display narrative number 28, the area kicker, and `mini-orchestration` throughout.
- Use the compact execution-decision rows and checkpoint definition in design brief §30. All visual values are defined there.
- Distinguish dispatched requests from confirmed effects. The checkpoint definition describes saved execution state, not proof of an external action.
- Keep restart durability, delegation, and detailed resource-limit inventory in the talk track.
- Keep text editable. Show the complete content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **EXECUTION DECISIONS**

[0:00] Record pending work, completed stages, check results, and operation status. **A checkpoint is saved execution state from which work can resume.** Use durable storage when it must survive a process restart.

[0:15] Resuming computation does not establish what an external service did. Reconcile dispatched actions with their actual outcomes before deciding whether to repeat them. Recheck source freshness and access on resume.

[0:30] Define completion and distinguish it from waiting, failure, cancellation, or exhausted budget. Bound actions, tokens, retries, and elapsed time. Repeated work without progress needs a stop or handoff.

[0:45] Delegation is another design choice. Independent case comparisons may benefit from workers, but assignments and returned evidence need clear ownership. Add them only when measured benefit justifies the handoff and reconciliation work.

[1:00] Advance to slide 29.

Cut first: the delegation example beyond its brief conditional role. Never cut explicit state, checkpoint durability, external reconciliation, or meaningful stopping conditions. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, December 2024, June and November 2025; LangChain checkpoint documentation and Featonby, Amazon Builders' Library, checked September 2026. Research §4 in `research/section-2.md`.
- Illustrative workflow and recovery contract: Research §0, §3, and §4, and `internal/frb-running-example.md`. The permitted-export timeout is a separate teaching scenario from Tools' rejection case.
- Accepted integration: `outlines/section-2-integration/04-orchestration.md`. No framework choice, measured recovery result, or universal retry guarantee is claimed.

## Open items

- Rehearse the retained 3:55 allocation on the actual presentation machine. The foundations slide gains 0:15 and the focused recovery application gives up 0:15. Preserve the workflow gate and safe recovery distinction when trimming.
