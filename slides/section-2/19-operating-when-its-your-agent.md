# Slide 19: Operating it, when it's your agent, and the Section 2 wrap

Beat 2.6 Operating it, second half, plus the section wrap. Section 2. Time 1:15 of the beat's 4:30; slide 18 took 3:15. Builds: 3.

## On the slide

**Kicker, top left, small:** Operating it · When it's your agent

**Title:** There is no prompt to click.

**Build 1. The four translations.** Two columns, four rows.

| In the coding agent | In your deployment |
|---|---|
| The approval prompt | An async workflow, or a policy |
| The sandbox | Your infrastructure |
| The audit log | A compliance artifact |
| A vendor's disclosure | Article 50: you tell them it is an AI |

**Build 2. Pitfall band, bottom.**

Pitfall: the lethal trifecta, assembled one integration at a time.

Beside it, small, the triangle from slide 18 with the three corners relabeled: a retriever · a web fetch tool · an email sender.

**Build 3. Section wrap.** The slide clears. The anatomy diagram returns, full screen, with a "yours" badge on every box except Goal. The Model box reads "yours to select."

Use `internal/anatomy-of-an-agentic-ai-system-landscape-yours.svg`.

## Layout and visual

- Build 1 is the last "you now own" device in Section 2, this time as a two-column translation table so the audience sees the coding-agent feature on the left and its production form on the right. Four rows, short cells.
- The pitfall band matches slides 9, 11, 13, 15, and 17. Its wording, "the lethal trifecta, assembled one integration at a time," matches line 6 of slide 22 exactly. The small triangle beside it is the same shape as slide 18's, relabeled with three ordinary integrations, so the audience sees how the trifecta gets built without anyone deciding to build it.
- Build 3 is a hard cut to the diagram, the same treatment as slide 6 into slide 7. Every box carries a small amber "yours" badge; the Model box says "yours to select," because the talk's line is that everything that is not the model is what you engineer, and the model is selected rather than built. Goal has no badge; it comes from the user.
- The takeaway is spoken before the cut, not shown.

## Talk track

[0:00] Build 1.

All of this was built for you and rendered as a permission prompt, a sandbox, an OAuth flow, and a `/usage` command. In your deployment there is no prompt to click, because the user is a customer and often is not present. **The approval gate becomes an async workflow or a policy. The sandbox becomes your infrastructure. The audit trail becomes a compliance artifact. And the law says you disclose.**

[0:30] Build 2.

The pitfall: **assembling the lethal trifecta by accident, one reasonable integration at a time.** A retriever, then a web fetch tool, then an email sender. Nobody decides to build an exfiltration path.

[0:46] **When it's your agent, its answer is your answer.**

[0:50] Build 3. Hard cut to the diagram.

**That is the map. Every box on it is something you can engineer, because most of it is engineering you already know how to do.**

[1:15] Advance to slide 20. Let the diagram sit for the remaining seconds; it is the last image of Section 2.

The track runs about 1:00. The slack is for the diagram. Nothing on this slide is cuttable.

## Sources

- The four translations restate slide 18; no new claims. Research §6 in `research/section-2.md`.
- Willison's lethal trifecta, June 2025, for the pitfall. Research §6. `[primary]`.
- EU AI Act tracker for Article 50 in the fourth row. Research §6. `[primary]` for the tracker, checked in a browser September 14, 2026.
- The diagram variant is generated from the landscape SVG; the only change is the badges and the title suffix.

## Open items

- Review the "yours" badge color and placement against the deck template once one is chosen.
- Decide whether the Model box should read "yours to select" as drafted, or carry a plain "yours" like the others.
