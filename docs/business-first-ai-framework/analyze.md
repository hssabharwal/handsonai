---
title: "Step 1: Analyze Workflows for AI Opportunity"
description: Run a structured audit of your workflows to identify where AI creates the most value — produces a prioritized opportunity report with actionable first steps.
---

# Step 1: Analyze Workflows for AI Opportunity

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What This Is

A structured audit that helps you find where AI fits in your work. The AI scans what it already knows about you, interviews you about your workflows, then analyzes the results to surface opportunities you'd miss on your own.

| | |
|---|---|
| **What you'll do** | Walk through a guided conversation covering your role, tasks, and pain points |
| **What you'll get** | A prioritized report of AI opportunities classified by autonomy (Deterministic, Guided, Autonomous) and involvement (Augmented, Automated) — with concrete next steps for each |
| **Time** | ~20–30 minutes for the full conversation |

## Why This Matters

Most people adopt AI by reacting to problems — they reach for ChatGPT when they're stuck on an email or ask Claude to summarize a document. That's useful, but it misses the bigger picture.

A proactive audit of your workflows can reveal opportunities you'd never notice in the moment: repetitive tasks that could run on autopilot, decisions that would benefit from an AI collaborator, and multi-step processes that could be orchestrated end-to-end.

This step guides an AI through a structured analysis of your work and produces a classified report of opportunities along two dimensions:

- **Autonomy** — How much decision-making does the AI have? **Deterministic** (follows fixed rules), **Guided** (makes bounded decisions), or **Autonomous** (plans and adapts independently)
- **Human Involvement** — Is a human in the loop during execution? **Augmented** (human reviews and steers) or **Automated** (AI runs solo)

## How to Use This

This step is facilitated by the **`analyzing-workflows`** Business-First AI Framework Skill. How you get it depends on your platform — see [How to Add Skills to Your Platform](../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for installation instructions for Cowork, Claude Code, Claude.ai, Cursor, Codex CLI, Gemini CLI, and VS Code Copilot.

**Start with this prompt:**

```
I'd like to analyze my workflows for AI opportunities. Help me audit
what I do and identify where AI could help.
```

The skill runs a structured audit and produces a categorized opportunity report.

!!! tip "If your AI tool doesn't support skills"
    Use the [Analyze Prompt — Portable Version](analyze-prompt.md) instead. It's a single copy-paste prompt that runs the full Analyze process in any AI chat tool — ChatGPT, Gemini, Claude, or any LLM. Same methodology, same output format, no skill installation required.

!!! tip "Classify opportunities with the six primitives"
    Once you've identified opportunities, use the [six use case primitives](../use-cases/index.md) — Content Creation, Research, Coding, Data Analysis, Ideation & Strategy, and Automation — to classify what type of AI work each one involves. This makes it easier to find examples and choose the right building blocks.

!!! tip "Best results come from rich context"
    The more the AI knows about your actual work, the better the recommendations. If possible, use a tool where you've had many prior conversations or uploaded relevant documents.

## What to Expect

Here's what typically happens:

1. The AI reviews what it knows about you and presents a summary. Correct anything that's wrong and fill in gaps.
2. The AI asks you a series of questions. Answer as specifically as you can — concrete examples produce better recommendations than general descriptions.
3. You receive a structured report with a summary table and detailed cards for each opportunity, grouped by category.
4. You pick your top workflow candidates, and the AI formats a **Workflow Candidate Summary** with structured metadata — including trigger and deliverable — ready for the Deconstruct step.

Most people discover 5–15 opportunities across different autonomy levels. Pick three to start with.

### How to Prioritize

- **Start with Deterministic + Augmented** if you're new to AI — lowest risk, easiest to try
- **Move to Deterministic + Automated** once you trust the process — the time savings compound quickly
- **Explore Guided and Autonomous** when you're ready for more AI decision-making

## What Analyze Produces

The **AI Opportunity Report** (`ai-opportunity-report.md`) captures:

- **Report header** — your name, role, date, opportunity count, and top recommendation
- **Summary table** — every opportunity listed with its autonomy level, involvement mode, and impact level
- **Top recommendations** — the 3 highest-priority opportunities with one-sentence rationales
- **Detailed opportunity cards** — grouped by autonomy level (Deterministic → Guided → Autonomous), each with: why it's a good candidate, current pain point, how AI helps, and a practical first step
- **Workflow Candidate Summary** — structured metadata for the workflows you choose to pursue: name, description, trigger, deliverable, autonomy, involvement, pain point, AI opportunity, frequency, priority, and reasoning

The Workflow Candidate Summary is the input for [Deconstruct Workflows](deconstruct/index.md) (Step 2) — the trigger and deliverable fields map directly to the scope check that starts the deconstruction.

See two complete [example reports](analyze-examples.md) to get a feel for the format and level of detail.

## Tips for Better Results

- **Use a tool with memory or projects enabled.** The richer the AI's context about your actual work, the more specific and useful the recommendations will be.
- **Be concrete when answering questions.** "I spend 30 minutes every Monday formatting a status report from three Jira boards" is far more useful than "I do reporting."
- **Run it again in a few weeks.** As you have more conversations and the AI learns more about your work, re-running this prompt will surface new opportunities.
- **Share the output with your team.** Some of the best opportunities come from workflows that span multiple people — your colleagues may see possibilities you don't.

## Related

- [Example Reports](analyze-examples.md) — two complete AI Opportunity Reports (Marketing Ops Manager + AI Instructor) showing what the finished deliverable looks like
- **Next step:** Ready to act on an opportunity? Use the [Deconstruct Workflows guide](deconstruct/index.md) (Step 2) to break it into discrete steps.
- [Business-First AI Framework](index.md) — the full three-step methodology
- [Prompts](../agentic-building-blocks/prompts/index.md)
- [Agents](../agentic-building-blocks/agents/index.md)
