# Slide 13: Tools and extensibility, When you are the owner

Beat 2.3 Tools and extensibility, second half. Section 2. Time 1:10 of the beat's 3:00; slide 12 took 1:50. Builds: 4.

## On the slide

**Kicker:** Tools and extensibility · When you are the owner

**Title:** You write the contract. You build the gate.

**Build 1.** The descriptions, and their evals · The verbosity · The action categories · The gate

**Build 2.** Three cards.

| Scoped reads | Reversible changes | Consequential actions |
|---|---|---|
| Enforce access policy | Validate and support recovery | Require policy authorization or approval |

Authorization applies to every category. Enforce it outside the model.
A model's approval recommendation does not establish permission.

**Build 3.** Replace the cards and policy lines with evidence.

- CamoLeak, October 2025. Researcher-demonstrated vulnerability: hidden pull-request instructions exfiltrated private repository data through image URLs. CVSS 9.6.
- ClawHub, February 2026. Koi audit via The Hacker News: 341 of 2,857 skills were malicious. Secondary report.

**Build 4. Pitfall:** copying the API surface without evaluating task fit.

## Layout and visual

- Keep three area cards in the existing grid. Allow two-line headings and enough body height for the policy text.
- The authorization line spans all three cards. The model-recommendation qualification is separate from the cards.
- The evidence replaces the cards, keeping demonstration and secondary-report labels visible. The pitfall matches slide 22.

## Talk track

[0:00] **You write descriptions and evaluate task fit. You build the gate.** Payload detail, granularity, and failure handling are your decisions.

[0:14] Build 2. Scoped reads need access enforcement. Reversible changes need validation and recovery. Consequential actions need policy authorization or approval. **Authorization applies to every category and is enforced outside the model. A model recommendation does not establish permission.** Approval may be human, async, or an enforced policy.

[0:39] Build 3. Legit Security demonstrated CamoLeak: hidden pull-request instructions exfiltrated private data through image URLs. Separately, The Hacker News reported Koi's audit: 341 malicious skills among 2,857. That is secondary reporting, not an independently checked audit here.

[0:56] Build 4. **Copying the API surface without evaluating task fit.**

[1:02] **Design tools for a caller that reads the description every time and can still get it wrong.**

[1:10] Advance to slide 14.

Cut first: the payload list and spoken CVSS detail. Never cut authorization across categories, outside-model enforcement, evidence type, or pitfall.

## Sources

- OWASP Excessive Agency, 2025. Research §3 in `research/section-2.md`. [primary], checked September 15, 2026. Categories are the talk's heuristic.
- Legit Security, October 2025. Research §3. Direct researcher demonstration, checked September 14.
- Koi audit via The Hacker News, February 2026. Research §3. Directly checked secondary report; underlying audit not independently checked.
- Anthropic tool design, September 2025. Research §3.

## Open items

- None.
