# Slide 13: Tools and extensibility, when it's your agent

Beat 2.3 Tools and extensibility, second half. Section 2. Time 1:10 of the beat's 3:00; slide 12 took 1:50. Builds: 4.

## On the slide

**Kicker, top left, small:** Tools and extensibility · When it's your agent

**Title:** You write the contract. You build the gate.

**Build 1. You now own.** Four items in a row.

The descriptions, and their evals · The verbosity · The action classes · The gate

**Build 2. The action classes.** Three columns.

| Read-only | Reversible | Consequential |
|---|---|---|
| Runs. | Checkpoint. | Gate. |

Beneath the third column, small: an async human step, or an automated policy.

**Build 3. Two incidents.** Two lines.

- CamoLeak, October 2025. A comment hidden in a pull request. Copilot Chat exfiltrated private repository data through image URLs. CVSS 9.6.
- ClawHub, February 2026. 341 of 2,857 agent skills were malicious. One in eight.

**Build 4. Pitfall band, bottom.**

Pitfall: one endpoint per tool.

## Layout and visual

- Build 1 mirrors slide 12's list of what the vendor did, restated as what you own, the same hand-off device as slides 10 and 11.
- Build 2 is the picture of this area: three columns, one word each. It is the permission prompt from slide 12 turned into a design rule. The small line under "Consequential" is the customer-facing turn and should be visibly attached to that column.
- Build 3 is two sentences with a number each. Keep the CVSS score and the 341 of 2,857 on screen; they are what makes the incidents evidence rather than anecdotes.
- The pitfall band matches slides 9 and 11: a strip across the bottom, one sentence, labeled "Pitfall." Its wording, "one endpoint per tool," matches line 3 of slide 22 exactly.
- The takeaway is spoken, not shown.

## Talk track

[0:00] Build 1.

The vendor wrote the descriptions, chose the granularity, shaped the payloads, and built the approval UI. Now you write the descriptions, and you eval them. You decide verbosity, because it is your token bill and your context budget. **You classify every action, and you build the gate.**

[0:20] Build 2.

Customer-facing: **nobody is sitting there to click approve.** The gate becomes an async human step or an automated policy. Devin's Smart mode is that policy, shipped as a product feature. Both are things you engineer.

[0:34] Build 3.

Two examples of what happens at the gate. CamoLeak, last October: a comment hidden in a pull request made Copilot Chat exfiltrate private repository data through image URLs. CVSS 9.6. And ClawHub, in February: an audit of 2,857 agent skills found 341 malicious. **One in eight.**

[0:54] Build 4.

The pitfall: **one endpoint per tool.** Your API surface is not a tool set.

[1:00] **Design tools for a caller that reads the description every time and can still get it wrong.**

[1:10] Advance to slide 14.

The track runs about 1:06. Cuttable if the section runs long: the Devin Smart mode sentence. Do not cut either incident; they are the only concrete failures in this area, and the CamoLeak mechanism returns as the lethal trifecta on slide 18.

## Sources

- Legit Security, Omer Mayraz, "CamoLeak," October 8, 2025. "CVSS 9.6"; hidden `<!-- -->` comments; Camo proxy URLs rendered "as ASCII art composed entirely of images"; fixed August 14, 2025. Research §3 in `research/section-2.md`. `[primary]`, checked in a browser September 14, 2026. The `[verify]` flag is cleared in the outline.
- Koi Security's ClawHub audit via The Hacker News, February 2, 2026. "A security audit of 2,857 skills on ClawHub has found 341 malicious skills." Research §3. `[primary]`, checked September 14, 2026. Flag cleared. Bitdefender's 17% is a different sample; do not mix the two.
- Devin CLI permissions page for Smart mode. Research §3. `[primary]`.
- The action classes and the four things you own are the talk's own framing, from Anthropic's tool-design post and the MCP security floor on slide 12. Research §3.

## Open items

- None. Both flags on this slide are cleared.
