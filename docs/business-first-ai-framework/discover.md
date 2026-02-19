---
title: "Step 1: Discover Workflows"
description: Use this prompt template to discover where AI can help automate, augment, or orchestrate your workflows.
---

# Step 1: Discover Workflows

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What This Is

A structured audit that helps you find where AI fits in your work. The AI scans what it already knows about you, interviews you about your workflows, then analyzes the results to surface opportunities you'd miss on your own.

| | |
|---|---|
| **What you'll do** | Walk through a guided conversation covering your role, tasks, and pain points |
| **What you'll get** | A prioritized report of AI opportunities across three levels — Deterministic Workflows, Collaborative AI, and Autonomous Agents — with concrete next steps for each |
| **Time** | ~20–30 minutes for the full conversation |

## Why This Matters

Most people adopt AI by reacting to problems — they reach for ChatGPT when they're stuck on an email or ask Claude to summarize a document. That's useful, but it misses the bigger picture.

A proactive audit of your workflows can reveal opportunities you'd never notice in the moment: repetitive tasks that could run on autopilot, decisions that would benefit from an AI collaborator, and multi-step processes that could be orchestrated end-to-end.

This step guides an AI through a structured analysis of your work and produces a categorized report of opportunities across three levels:

- **Deterministic Workflows** — Repeatable processes that AI can execute reliably with little or no supervision
- **Collaborative AI** — Tasks where you and AI work together in real time (drafting, brainstorming, reviewing)
- **Autonomous Agents** — Goal-driven workflows where AI plans and executes steps autonomously, from single agents to multi-agent systems

## How to Use This

This step is facilitated by the **`discovering-workflows`** Business-First AI Framework Skill. How you get it depends on your platform — see [How to Add Skills to Your Platform](../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for installation instructions for Claude Code, Cursor, Codex CLI, Gemini CLI, and VS Code Copilot.

**Start with this prompt:**

```
I'd like to discover AI workflow opportunities. Help me audit
what I do and identify where AI could help.
```

The skill runs a structured audit and produces a categorized opportunity report.

!!! tip "If your AI tool doesn't support skills"
    Use this page as a conversation guide — walk through each section in order with your AI tool. The methodology works the same way whether or not a skill is driving the process.

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

Most people discover 5–15 opportunities across the three categories. Pick three to start with — one from each category.

### How to Prioritize

- **Start with Collaborative AI** opportunities if you're new to AI — they're the easiest to try and lowest risk
- **Move to Deterministic Workflows** once you've identified a process you repeat often — the time savings compound quickly
- **Explore Autonomous Agents** when you have experience with the other two categories and need to automate complex, multi-step processes

## What Discover Produces

The **AI Opportunity Report** (`ai-opportunity-report.md`) captures:

- **Report header** — your name, role, date, opportunity count, and top recommendation
- **Summary table** — every opportunity listed with its category and impact level
- **Top recommendations** — the 3 highest-priority opportunities with one-sentence rationales
- **Detailed opportunity cards** — grouped by category (Deterministic Workflow, Collaborative AI, Autonomous Agent), each with: why it's a good candidate, current pain point, how AI helps, and a practical first step
- **Workflow Candidate Summary** — structured metadata for the workflows you choose to pursue: name, description, trigger, deliverable, category, pain point, AI opportunity, frequency, priority, and reasoning

The Workflow Candidate Summary is the input for [Deconstruct Workflows](deconstruct/index.md) (Step 2) — the trigger and deliverable fields map directly to the scope check that starts the deconstruction.

## Tips for Better Results

- **Use a tool with memory or projects enabled.** The richer the AI's context about your actual work, the more specific and useful the recommendations will be.
- **Be concrete when answering questions.** "I spend 30 minutes every Monday formatting a status report from three Jira boards" is far more useful than "I do reporting."
- **Run it again in a few weeks.** As you have more conversations and the AI learns more about your work, re-running this prompt will surface new opportunities.
- **Share the output with your team.** Some of the best opportunities come from workflows that span multiple people — your colleagues may see possibilities you don't.

## Related

- **Next step:** Ready to act on an opportunity? Use the [Deconstruct Workflows guide](deconstruct/index.md) (Step 2) to break it into discrete steps.
- [Business-First AI Framework](index.md) — the full three-step methodology
- [Prompts](../agentic-building-blocks/prompts/index.md)
- [Agents](../agentic-building-blocks/agents/index.md)
