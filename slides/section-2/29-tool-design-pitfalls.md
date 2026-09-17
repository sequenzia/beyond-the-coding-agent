# Slide 29: Tool-design pitfalls

Beat 2.3. Section 2. Rehearsal reference 0:40 of the area's 4:10. Section 2 remains 25:00 to 29:00; these cues sum to a 28:55 rehearsal reference. One static screen; no internal builds. Copy and script approved September 16, 2026.

## On the slide

**Kicker:** Tools & Extensibility · Challenges and pitfalls

**Title:** Tool-design pitfalls

- **Tool selection:** Overlapping tools and unclear descriptions make the right operation harder to choose.
- **Authority:** Broad shell or code access can grant more power than the task requires.
- **Outcomes:** An unclear result leaves the agent unsure whether an action completed.

**Pitfall:** Copying APIs without evaluating task fit.

## Layout and visual

- Display narrative number 29, the area kicker, and `mini-tools` throughout.
- Keep the existing three labeled rows and headline-pitfall position in design brief §29. All visual values are defined there.
- The headline pitfall stays in the body and matches slide 50 word for word. The spoken takeaway stays out of the visible body.
- Keep text editable. Show all content on entry with hard cuts and no internal builds.

## Talk track

[0:00] **CHALLENGES AND PITFALLS**

[0:00] **Copying APIs without evaluating task fit.** An operation can work correctly and still be difficult for an agent to use.

[0:08] Similar tools can confuse selection. Descriptions that drift from actual behavior can lead to incorrect calls. Test whether the agent chooses and uses the right operation.

[0:19] MCP, CLI access, and code mode all need explicit permission boundaries. **Give the agent only the authority its task requires.**

[0:29] Results must distinguish confirmed completion, known failure, and uncertainty. A timeout may leave completion unknown. **The result should make that uncertainty explicit.**

[0:40] Advance to slide 30.

Cut first: the description-drift sentence. Never cut the exact headline pitfall, permission boundaries, or the distinction between known failure and unknown completion. Cue times are rehearsal guides, not automatic playback timing.

## Sources

- Anthropic, September and November 2025, and bash-tool documentation checked September 2026; MCP documentation, July 2026, rechecked September 2026; OWASP, 2025. Research §3 in `research/section-2.md`.
- Approved capabilities refinement, September 2026, in Research §3. Tool contracts distinguish a known failure from an unknown execution outcome; recovery policy belongs to Orchestration.

## Open items

- Rehearse the approved 0:40 script. Preserve the exact headline shared with slide 50 and the distinction between a known failure and unknown completion.
