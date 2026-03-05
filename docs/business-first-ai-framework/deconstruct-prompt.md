---
title: "Deconstruct Prompt — Portable Version"
description: A copy-paste prompt that runs the Deconstruct step of the Business-First AI Framework in any AI chat tool — ChatGPT, Gemini, Claude, or any LLM.
---

# Deconstruct Prompt — Portable Version

> **Use this when:** You don't have the `deconstructing-workflows` skill installed, or you're using a chat tool (ChatGPT, Gemini, etc.) that doesn't support skills. Copy the prompt below, paste it into a new conversation, and the AI will guide you through the full Deconstruct process.

!!! tip "Have your Analyze output ready"
    If you completed [Step 1: Analyze](analyze.md), have your AI Opportunity Report or Workflow Candidate Summary handy — paste it in when prompted. If you're starting fresh with a workflow idea, that works too.

## The Prompt

Copy everything inside the block below and paste it as your first message in a new conversation:

````
You are going to help me deconstruct a business workflow into a structured Workflow Definition. Follow this nine-step process exactly. Work through each step in order — do not skip ahead.

## Step 1 — Scenario Discovery

Determine how I'm arriving at this conversation. Ask me: "Are you coming from an Analyze output (opportunity report or workflow candidate), do you have a workflow you want to break down, or do you have a problem you're trying to solve?"

Based on my answer:

- **From Analyze output**: Ask me to paste the Workflow Candidate Summary. Pre-populate the scenario metadata (name, description, trigger, deliverable, autonomy, involvement) from the candidate fields. If the candidate includes Lens, Business Objective, Stakeholders, or Success Metrics fields, carry those forward too. Present it back to me for confirmation, then proceed to Step 2.
- **From a workflow description**: Ask about the business scenario, objective, high-level steps, and ownership. Ask these ONE AT A TIME — not as a list. If no lens was established, determine it: individual tasks (one person's repetitive work) = Individual lens; multi-role or business-objective processes = Organizational lens. If not obvious, ask.
- **From a problem statement**: I'll describe a problem instead of a workflow. Propose a candidate workflow for me to react to, then continue.

## Step 2 — Scope Check: One Trigger, One Deliverable

A workflow has exactly one trigger (what kicks it off) and one deliverable (the tangible output). Test whether what I've described is actually multiple workflows by checking:

- **Triggers**: Are there multiple independent starting points? (e.g., "when a lead comes in" AND "end of each week") If so, those are separate workflows.
- **Deliverables**: Are there distinct outputs at different points? If someone receives a deliverable midway and the process continues toward a different output, that's a workflow boundary.
- **Timeframes**: Do parts run on different schedules (daily vs. weekly), or are there significant waits between phases? Likely separate workflows.
- **Step count**: Would this expand to 15+ refined steps? May be multiple workflows.
- **Ownership boundary** (organizational lens): Does this process have a single accountable owner for the end-to-end outcome? If different people own different segments with no single owner, it may be multiple workflows.

If multiple workflows are detected: map out each one (working name, trigger, deliverable), present the breakdown, confirm boundaries with me, and ask which to deconstruct first. Proceed with only the chosen workflow.

If it's a single workflow, confirm and continue.

## Step 3 — Name the Workflow

Present 2-3 name options following this convention: 2-4 word noun phrase, Title Case (e.g., "Lead Qualification", "Weekly Status Reporting", "Content Publishing Pipeline").

Confirm the name, one-sentence description, trigger, and deliverable with me before continuing.

## Step 4 — Deep Dive (First 3 Steps)

Now break down the workflow step by step. Start with the first 3 steps I described (or that we identified). For each step, work through the 5-question framework:

1. **Discrete steps** — Is this actually multiple steps? Break it down further if so.
2. **Decision points** — Are there if/then branches, quality gates, or judgment calls?
3. **Data flows** — What are the inputs and outputs? Where does data come from and go?
4. **Context needs** — What specific documents, files, templates, databases, or reference materials does this step need? Push beyond vague answers like "domain knowledge" — identify the specific artifact.
5. **Failure modes** — What happens when this step fails? What does "bad output" look like?
6. **Role transitions** (organizational lens with multiple stakeholders only) — Who performs this step? Does ownership change between steps? Are there handoff points?

Ask these questions ONE AT A TIME for each step. Probe for missing sub-steps — most people undercount by 30-50%. Surface hidden assumptions ("How do you decide when X is good enough?").

For any step where AI is already being used, ask specifically for existing prompt instructions, project instructions, or system prompts — these contain workflow logic that must be captured.

## Step 5 — Propose and React (Remaining Steps)

For steps 4 and beyond, switch to a "propose and react" pattern: propose a hypothesis across all dimensions (discrete steps, decision points, data flows, context needs, failure modes, and role transitions for organizational workflows) and ask me: "What's right, what's wrong, what am I missing?"

This is faster than asking each question individually once we've established the pattern.

Continue until every step has been fully deconstructed.

## Step 6 — Probe for Missing Steps

Before moving on, review the full step list and ask:
- "What happens right before [first step]? Is there any setup or preparation?"
- "What happens right after [last step]? Is there any follow-up, notification, or cleanup?"
- "Are there any steps you sometimes skip, or steps that only happen in certain cases?"

Add any missing steps and run them through the 5-question framework.

## Step 7 — Map Sequence

After all steps are fully deconstructed, identify:
- **Sequential steps** — steps that must happen in order (output of one feeds into the next)
- **Parallel steps** — steps that can happen at the same time (no dependencies between them)
- **Critical path** — the longest chain of sequential dependencies

Present the sequence map and confirm it with me.

## Step 8 — Consolidate Context Shopping List

Present a rolled-up "context shopping list" — every piece of context the workflow needs, consolidated across all steps:

For each artifact, include:
- **Name** — what it is (e.g., "Brand Style Guide", "CRM Export Template")
- **Description** — what it contains and why it matters
- **Used by** — which step(s) reference it
- **Status** — Exists (I already have it) or Needs Creation (I need to create it)
- **Key contents** — what specifically the workflow needs from this artifact

Ask me to confirm the status of each item.

## Step 9 — Generate Workflow Definition

Produce the complete Workflow Definition with these sections:

### Scenario Metadata

| Field | Value |
|-------|-------|
| **Workflow name** | [Name from Step 3] |
| **Description** | [One sentence] |
| **Outcome** | [What success looks like] |
| **Trigger** | [What kicks it off] |
| **Deliverable** | [Tangible output] |
| **Business objective** | [Why this matters] |
| **Current owner(s)** | [Who does this today] |
| **Lens** | Individual / Organizational |
| **Stakeholders** | [Organizational only — roles/teams involved] |
| **Success Metrics** | [Organizational only — KPIs for measuring improvement] |

### Refined Steps

For each step, use this format:

**Step [#]: [Name]**

- **Action**: What happens in this step
- **Sub-steps**: Numbered list of sub-steps
- **Decision points**: Any if/then branches or quality gates
- **Data in**: What inputs this step needs
- **Data out**: What this step produces
- **Context needs**: Specific documents, files, or reference materials
- **Failure modes**: What can go wrong and what happens if it does

### Step Sequence and Dependencies

- Sequential steps: [list]
- Parallel steps: [list]
- Critical path: [sequence]
- Role swimlane (organizational lens with multiple roles): a view showing which role owns each step

### Context Shopping List

| Artifact | Description | Used By | Status | Key Contents |
|----------|-------------|---------|--------|-------------|
| [Name] | [Description] | Steps [#, #] | Exists / Needs Creation | [What the workflow needs from it] |

For organizational workflows, also prompt for existing process documentation: SOPs, training guides, compliance requirements, SLAs.

---

After producing the Workflow Definition, tell me: "Workflow Definition complete. Copy this output — it's the input for Step 3: Build, where you'll design the AI-powered version of this workflow."

## Guidelines

- Ask one question at a time — never present a wall of questions
- Probe for missing steps — most people undercount by 30-50%
- Surface hidden assumptions ("How do you decide when X is good enough?")
- Use plain language; avoid jargon unless I introduced it
- Push beyond vague context answers like "domain knowledge" — identify the specific artifact

---

Begin with Step 1 now.
````

## What to Expect

After pasting the prompt:

1. The AI asks how you're arriving — from an Analyze report, a workflow description, or a problem statement.
2. It checks scope (one trigger, one deliverable) and helps you name the workflow.
3. It walks through each step using the 5-question framework (discrete steps, decision points, data flows, context needs, failure modes) — one question at a time for the first few steps, then switching to "propose and react" to move faster.
4. It maps step sequence, consolidates context needs, and produces a structured **Workflow Definition**.

The whole process takes ~15-25 minutes depending on workflow complexity.

## Tips

- **ChatGPT users:** Paste your Analyze output (Workflow Candidate Summary) at the start — ChatGPT will pre-populate the scenario metadata for you.
- **Gemini users:** If using Gemini Advanced, you can reference prior conversations. Standard Gemini starts fresh, so paste any prior context.
- **Claude users:** If you're in a Claude Project, add your Analyze report as project knowledge before starting.
- **Any tool:** Don't over-prepare your steps. The prompt is designed to work with rough, incomplete descriptions — let the AI do the work of refining and organizing.

## After You're Done

Copy your **Workflow Definition** (the full output from Step 9) — that's your deliverable.

Your workflow is now ready for [Step 3: Build](build/index.md), starting with the [Design phase](build/design.md) where the AI assesses your workflow's autonomy level, chooses an orchestration mechanism, and maps each step to AI building blocks.

## Related

- [Step 2: Deconstruct Workflows](deconstruct/index.md) — full guide with skill installation
- [Step 1: Analyze Workflows](analyze.md) — identify your best workflow candidates first
- [Business-First AI Framework](index.md) — the full three-step methodology
