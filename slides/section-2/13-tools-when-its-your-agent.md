# Slide 13: Tools and extensibility, When you are the owner

Beat 2.3 Tools and extensibility, second half. Section 2. Time 1:10 of the beat's 3:00; slide 12 took 1:50. Builds: 4.

## On the slide

**Kicker:** Tools and extensibility · When you are the owner

**Title:** You write the contract. You build the gate.

**Build 1.** Illustrative FRB tool contract.

Background: parse and index PDF reports, Word minutes, and PowerPoint briefings.

**Build 2.** Native tool table, beneath the background line:

| Agent tool | Input | Returns |
|---|---|---|
| Search | ID, date, category | Authorized record IDs |
| Retrieve | ID, revision, location | Exact source passages |
| Export records | Selected IDs + revisions | Records + manifest |
| Export cited brief | Checked draft + citations | Brief + export receipt |

**Build 3.** Replace the background and tool table. Illustrative FRB result contract:

- Evidence: stable IDs, revisions, source locations. Parsing failures and incomplete results are explicit.
- Export: selected records or the checked brief, with citations and uncertainty intact.
- Gate: enforce access and allowed destinations outside the model, for reads and exports.

**Build 4. Pitfall:** copying the API surface without evaluating task fit.

## Layout and visual

- Preserve narrative number 13, header, mini-map, and two physical slides.
- Background processing enters on build 1. The agent-facing contract joins on build 2. Results and enforcement replace both at the existing hard cut. Pitfall remains an internal reveal.
- Use design brief §16's native table and flat labeled-result rows. Do not depict parsing/indexing as tools the agent chooses.
- Illustration labels remain visible. Pitfall matches slide 23 word for word.

## Talk track

[0:00] Build 1. **You write the contract and build the gate.** In our illustration, background services parse and index PDF reports, Word minutes, and PowerPoint briefings. These are separate from the tools the agent calls.

[0:15] Build 2. Search by ID, date, or category. Retrieve exact source passages. Export selected records, or export the checked brief. Each tool needs a clear input and result contract.

[0:29] Build 3. **Results retain IDs, revisions, and source locations.** Parsing failures and incomplete results are explicit. Exports match the selected records or checked draft, with citations and uncertainty intact. **Enforce authorization outside the model for reads and exports, including the destination.** A model recommendation does not establish permission.

[0:55] Build 4. **Copying the API surface without evaluating task fit.**

[1:01] **Design tools for a caller that reads the description every time and can still get it wrong.**

[1:10] Advance to slide 14.

Cut first: spoken table rows. Never cut background/agent separation, explicit failures, citation-preserving export, or outside-model authorization.

## Sources

- Anthropic tool design, September 2025; OWASP authorization, 2025; MCP, July 2026. Research §3 in `research/section-2.md`.
- Illustrative FRB tool/result contract, Research §0 and §3, with details in `internal/frb-running-example.md`.
- Displaced CamoLeak and ClawHub evidence stays in Research §3 as backup. Operating security evidence stays on slide 18.

## Open items

- None.
