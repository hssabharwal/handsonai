---
title: "Analyze Prompt — Portable Version"
description: A copy-paste prompt that runs the Analyze step of the Business-First AI Framework in any AI chat tool — ChatGPT, Gemini, Claude, or any LLM.
---

# Analyze Prompt — Portable Version

> **Use this when:** You don't have the `analyzing-workflows` skill installed, or you're using a chat tool (ChatGPT, Gemini, etc.) that doesn't support skills. Copy the prompt below, paste it into a new conversation, and the AI will guide you through the full Analyze process.

!!! tip "Enable memory for better results"
    If your AI tool has memory or conversation history (ChatGPT Memory, Claude Projects, Gemini Gems), enable it before starting. The more the AI knows about your work, the better the recommendations.

## The Prompt

Copy everything inside the block below and paste it as your first message in a new conversation:

````
You are going to help me analyze my workflows for AI opportunities. Follow this four-step process exactly. Work through each step in order — do not skip ahead.

## Step 1 — Memory & Context Scan

Before asking me anything, review everything you already know about me from our conversation history, memory, or any other context you have access to. Identify and list:

- My role, responsibilities, and domain
- Recurring tasks or requests I perform
- Pain points, frustrations, or bottlenecks I've mentioned
- Workflows or processes I've described or demonstrated
- Tools and platforms I use regularly
- Any goals or priorities I've shared

Present your findings as a brief summary so I can confirm or correct them before continuing. If you have no prior context about me, say so and move directly to Step 2.

## Step 2 — Targeted Discovery Interview

Based on gaps in your understanding (or starting from scratch), ask me focused questions to build a complete picture. Cover these areas, starting with the ones you know the least about:

1. Role & responsibilities — What is my role? What am I accountable for?
2. Repetitive tasks — What tasks do I perform daily or weekly that feel repetitive, tedious, or low-value?
3. Information synthesis — Where do I spend time gathering, combining, or making sense of information from multiple sources?
4. Multi-step processes — What workflows involve multiple handoffs, approvals, or sequential steps?
5. Quality & consistency — Where do errors, inconsistencies, or quality issues tend to creep in?
6. Communication overhead — What recurring communications (status updates, reports, summaries) take more time than they should?
7. Decision-making — What decisions require me to weigh multiple factors or reference past precedents?

IMPORTANT: Ask these questions ONE AT A TIME — not as a list. Use my answers to ask smart follow-up questions. Push for concrete examples: "I spend 30 minutes every Monday formatting a status report from three Jira boards" is far more useful than "I do reporting."

If I give vague responses after 2-3 probes, move on. If my answers are vague across all areas, shift to hypothesis mode: propose specific scenarios based on my role for me to react to.

When you've identified 3+ concrete opportunities, tell me: "I've identified [N] opportunities so far. I have enough to put together the report — do you want to add anything else, or should I go ahead?"

## Step 3 — Opportunity Analysis & Report

Once you have enough detail, produce a structured report with these sections:

### Report Header

| | |
|---|---|
| **Name** | [My name if known] |
| **Role** | [My role and domain] |
| **Date** | [Today's date] |
| **Opportunities identified** | [count] |
| **Top recommendation** | [#1 priority + one-sentence reason] |

### Summary Table

| # | Opportunity | Autonomy | Involvement | Impact |
|---|------------|----------|-------------|--------|
| 1 | [Name] | Deterministic / Guided / Autonomous | Augmented / Automated | High / Medium / Low |

### Top 3 Recommendations

List the top 3 opportunities in priority order with a one-sentence rationale for each.

### Detailed Opportunity Cards

Group cards by autonomy level (Deterministic first, then Guided, then Autonomous). Within each group, order from highest to lowest impact.

For each opportunity:

**[#] [Opportunity Name]**

**Autonomy:** Deterministic | Guided | Autonomous
**Involvement:** Augmented | Automated

**Why it's a good candidate:**
[What makes this well-suited for AI — repetitive, pattern-based, language-heavy, clear inputs/outputs, etc.]

**Current pain point:**
[What's slow, error-prone, inconsistent, or draining about how this is done today]

**How AI helps:**
[Specific description — what AI takes as input, what it produces, how it fits into the workflow]

**Getting started:**
[A practical, low-effort first step achievable this week]

## Step 4 — Workflow Candidate Summary

After presenting the report, ask me to pick my top 2-3 workflow candidates — the ones I want to build. Once I've chosen, produce a Workflow Candidate Summary with this exact format for each candidate:

| Field | Content |
|-------|---------|
| **Workflow** | 2-4 word noun phrase, Title Case |
| **Description** | One sentence describing what this workflow does |
| **Trigger** | What kicks off this workflow — an event, schedule, or request |
| **Deliverable** | The tangible output — what gets produced, sent, or decided |
| **Autonomy** | Deterministic / Guided / Autonomous |
| **Involvement** | Augmented / Automated |
| **Pain point** | What's slow, error-prone, or manual today |
| **AI opportunity** | Specific description of what AI would do |
| **Frequency** | Daily / Weekly / Monthly / Ad-hoc |
| **Priority** | High / Medium / Low |
| **Reasoning** | Why this priority level — based on impact, frequency, and feasibility |

Recommend which candidate to start with first, and explain why.

## Classification Definitions

Use these definitions when classifying opportunities:

**Autonomy — How much decision-making does the AI have?**

- **Deterministic**: AI follows fixed rules — no decisions, no judgment. Same input produces same output every time. Examples: formatting reports, processing forms, data extraction, template-driven outputs.
- **Guided**: AI makes bounded decisions within guardrails. The human sets direction; AI chooses how to accomplish the task within those bounds. Examples: drafting emails, researching a topic, co-writing, data analysis.
- **Autonomous**: AI plans, decides, and adapts independently. It determines what to do, uses tools, and adjusts its approach based on what it finds. Examples: competitor monitoring, research-to-report pipelines, intake-to-triage systems.

**Involvement — Is a human in the loop during execution?**

- **Augmented**: Human participates during the workflow run — reviews, steers, or decides at key points. AI and human collaborate in real time.
- **Automated**: AI runs solo — executes end-to-end without human intervention during the run. Human reviews only the final output.

---

Begin with Step 1 now.
````

!!! example "See what the finished report looks like"
    Before you start, check out the [Example Reports](analyze-examples.md) — two complete AI Opportunity Reports showing the exact format and level of detail you'll get.

## What to Expect

After pasting the prompt:

1. The AI will summarize what it knows about you (or say it has no context). Confirm or correct.
2. It will ask you 5-10 questions, one at a time. Answer with specifics — concrete examples produce better recommendations.
3. You'll receive a structured report with opportunities classified on the AI Workflow Design Matrix.
4. You pick 2-3 candidates, and the AI formats a **Workflow Candidate Summary** ready for submission.

The whole process takes ~20-30 minutes.

## Tips

- **ChatGPT users:** Memory is on by default — the AI will reference what it knows about you from prior conversations. This makes Step 1 much richer.
- **Gemini users:** If using Gemini Advanced, the AI has access to your prior conversations. Standard Gemini starts fresh each time.
- **Claude users:** If you're in a Claude Project, add relevant documents (job description, workflow notes) as project knowledge before starting.
- **Any tool:** The more context you provide in your answers, the better the output. Don't give one-word responses.

## After You're Done

Copy your **Workflow Candidate Summary** (the tables from Step 4) — that's your deliverable. Submit it in the Maven portal.

Your candidates are now ready for [Step 2: Deconstruct](deconstruct/index.md).

## Related

- [Step 1: Analyze Workflows for AI Opportunity](analyze.md) — full guide with skill installation
- [AI Workflow Design Matrix](workflow-design-matrix.md) — the classification framework
- [Business-First AI Framework](index.md) — the full three-step methodology
