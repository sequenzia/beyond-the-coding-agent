# Slide 8: Models, what you touched

Beat 2.1 Models, first half. Section 2. Time 1:00 of the beat's 3:30; slide 9 takes 2:30. Builds: 2.

## On the slide

**Kicker, top left, small:** Models · What you touched

**Build 1.** Two screenshots side by side.

- Left: Devin Desktop, the model picker pop-out, with the reasoning-effort slider visible and, if the crop allows, the credit multiplier per level.
- Right: Codex with the `/model` picker open, showing the reasoning effort choices.
- Caption under each, small. Left: Devin Desktop, the model picker. Right: Codex, `/model`.

**Build 2.** Heading and five lines.

Behind the picker, someone:

- Chose the default.
- Tuned prompts and tool descriptions per model.
- Built failover for when a model is overloaded.
- Absorbed every price change.
- Migrated you off every retired model.

**Callout, last:** Anthropic retired seven models this year. The latest was August 5. Every migration happened behind a picker.

## Layout and visual

- The kicker is a convention for all twelve area slides: area name, then the beat. It lets the audience track the six-by-two structure without a progress bar.
- The Devin Desktop pop-out is the stronger image, so give it the larger share of the width. The slider is the thing to see: a physical control for how much the model thinks, with the price next to it. The Codex picker is a text menu and can sit smaller on the right.
- Use real screenshots, taken the week of the talk. Pickers change, and a stale one will be spotted by someone in the room. Crop tight to the pop-out and the menu; the rest of the screen is noise.
- Build 2 drops in beneath the screenshots, or the screenshots shrink to the top third. Either way the five lines and the callout must be readable from the back.
- The callout is the punchline. Give it its own build if the tool allows, so it lands after the five lines.

## Talk track

[0:00] Build 1.

You have used the model picker. In Devin Desktop it pops out a window, and there is a slider for reasoning effort, with the price per level right next to it. In Codex it is `/model`, and it sets the reasoning effort along with the model. **That slider is a cost and latency dial.** One layer down, Codex's config lets plan mode run at a different effort and subagents run on a different model. **That is model routing, shipped as a setting. Most of you have used routing without ever calling it that.**

[0:30] Build 2.

Behind the picker, someone engineered five things. The vendor chose the default. Tuned prompts and tool descriptions per model. Built failover for when a model is overloaded. Absorbed every price change. And silently migrated you off every model that got retired.

[0:46] Callout.

**Anthropic retired seven models this year. The latest was August 5. Every one of those migrations happened behind a picker,** and if you were on one of them, you noticed only that the list changed.

[1:00] Advance to slide 9.

Cuttable if short on time: the "one layer down" sentence about Codex's config; "with the price per level right next to it" if the screenshot does not show it. The five engineered items should be read, not summarized; they are the list the audience inherits on slide 9.

Backup for questions, not spoken: Devin CLI has `/model` and `/fast` for the same choices from the terminal, and added Fusion on September 11, a lead model for planning and review paired with a cheaper sidekick for execution. Left off the slide because it is six days old and most of the room will not know it.

## Sources

- Devin Desktop changelog: "Windsurf is now Devin Desktop," v3.0.12, June 2, 2026. Cascade plugin changelog: four reasoning efforts for GPT-5.3-Codex (February 2026); GPT-5.4 billed from "No Reasoning: 1x credits" to "Extra High Reasoning: 8x credits" (March 2026); "The model picker now shows token pricing information directly" (April 2026). Research §1 in `research/section-2.md`. `[primary]`, checked in a browser September 14, 2026. The pop-out and slider are the presenter's first-hand observation; the screenshot is the evidence.
- Codex CLI slash commands and config reference. `/model` "Choose the active model (and reasoning effort, when available)"; `model_reasoning_effort`; `plan_mode_reasoning_effort`; `agents.default_subagent_model`. Research §1. `[primary]`, checked September 14, 2026.
- Anthropic model deprecations page. Seven retirements dated in 2026: Opus 3 (January 5), Sonnet 3.7 and Haiku 3.5 (February 19), Haiku 3 (April 20), Sonnet 4 and Opus 4 (June 15), Opus 4.1 (August 5). Research §1. `[primary]`.

## Open items

- Take the two screenshots the week of the talk. Check whether the Devin Desktop pop-out shows the credit multiplier per level in the crop; if not, drop that phrase from the talk track.
- Confirm Codex's `/model` still shows reasoning effort that week. If it changed, the routing point stands; swap the command.
