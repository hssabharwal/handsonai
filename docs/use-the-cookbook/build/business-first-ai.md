---
title: Business-First AI Framework
description: The Business-First AI Framework as executable skills and agents — discover opportunities, deconstruct workflows, and build working AI workflows
---

# Business-First AI Framework

Skills and an agent implementing the [Business-First AI Framework](../../business-first-ai-framework/index.md) — discover where AI fits in your workflows, deconstruct those workflows into AI building blocks, and build working AI workflows. These are plain-text Markdown files that work in any AI tool supporting skills. Download them from GitHub, install as a Claude Code plugin, or paste directly into your system prompt.

## Get These Skills

These skills and agents are plain-text Markdown files that work in any AI tool. Choose how you want to get them:

=== "Any Platform"

    Download from GitHub and add to your platform's skill directory:

    :material-github: [Browse on GitHub](https://github.com/jamesgray-ai/handsonai/tree/main/plugins/business-first-ai){ .md-button }

    Works with **Claude Code, Cursor, Codex CLI, Gemini CLI, VS Code Copilot**, and more. See [How to Add Skills to Your Platform](../../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for step-by-step instructions for each tool.

    You can also paste any skill or agent file directly into your system prompt, project instructions, or custom GPT.

=== "Claude Code Plugin"

    One-command install with automatic agent routing and slash commands:

    ```bash
    /plugin install business-first-ai@handsonai
    ```

    See [Using Plugins](using-plugins.md) for setup details, including [Claude.ai upload](using-plugins.md#using-skills-in-claudeai-web), [Cowork](using-plugins.md#using-plugins-in-claude-cowork), and [API usage](using-plugins.md#using-skills-via-the-claude-api).

## Using These Skills

**Agents** activate automatically in Claude Code and Cowork — describe what you need and Claude picks the right one. In other platforms, paste the agent's Markdown file into your system prompt or project instructions.

**Skills** trigger automatically when relevant, or invoke them directly:

| Command | Skill |
|---------|-------|
| `/business-first-ai:discover` | `discovering-workflows` — Step 1 |
| `/business-first-ai:deconstruct` | `deconstructing-workflows` — Step 2 |
| `/business-first-ai:build-workflow` | `building-workflows` — Step 3 |

**Recommended path:**

1. Run `/business-first-ai:discover` (or say *"Help me discover AI workflow opportunities"*) → Step 1
2. Run `/business-first-ai:deconstruct` (or say *"I want to deconstruct my [workflow] into AI building blocks"*) → Step 2
3. Run `/business-first-ai:build-workflow` to design and build the AI workflow → Step 3
4. Review your outputs in the `outputs/` folder

For platform-specific setup (Claude.ai ZIP upload, Cowork install, API integration), see [Using Plugins](using-plugins.md).

### Platform Compatibility

| Component | Type | Command | Claude Code | Cowork | Claude.ai |
|-----------|------|---------|:-----------:|:------:|:---------:|
| `framework-orchestrator` | Agent | — | Yes | Yes | No |
| `discovering-workflows` | Skill | `/business-first-ai:discover` | Yes | Yes | Yes |
| `deconstructing-workflows` | Skill | `/business-first-ai:deconstruct` | Yes | Yes | Yes |
| `building-workflows` | Skill | `/business-first-ai:build-workflow` | Yes | Yes | Yes |

## Components

---

### Step 1–3 — Full Orchestration

---

#### `framework-orchestrator`

**What it does:** Orchestrates the end-to-end Discover, Deconstruct, and Build process. Runs candidate discovery, deep deconstruction, design, and build sequentially, with file-based handoffs between stages so you can also run each step individually in separate conversations.

**When to use it:** Use this when you want to go through the entire process in one session. The agent manages the flow between steps, saves intermediate files, and keeps you involved at each stage. If you prefer to work step-by-step across separate conversations, invoke the individual skills instead.

**How it works:** The agent runs three skills in sequence:

1. **Discover** (`discovering-workflows`) — Audit your workflows, interview you about your work, and produce an opportunity report with structured candidates. If you already know which workflow to deconstruct, this step is brief.
2. **Deconstruct** (`deconstructing-workflows`) — Interactive deep-dive that decomposes the workflow into refined steps using the 5-question framework. Produces the Workflow Definition.
3. **Build** (`building-workflows`) — Design phase: gather architecture decisions, choose an execution pattern and interaction mode, classify steps, map building blocks, identify skill candidates, configure agents. Construct phase: generate platform-appropriate artifacts (prompts, skills, agents, configs) and a Launch Guide tailored to your platform and technical comfort level.

Files are saved to `outputs/` using kebab-case workflow names (e.g., `outputs/lead-qualification-definition.md`).

**Example prompts:**

    "I want to deconstruct my client onboarding workflow"
    → Walks you through all three steps, asking questions during
      discovery, presenting the analysis for review, and generating
      the build deliverables

    "People keep dropping off during enrollment. Help me build
    a workflow for that."
    → Starts from a problem description, proposes a candidate
      workflow, then deconstructs and designs it

    "Help me figure out which parts of my weekly reporting process
    could be automated with AI"
    → Decomposes the reporting process, chooses an execution pattern,
      and identifies quick wins vs. complex automation opportunities

**What you'll get:** Multiple files in `outputs/`:

1. **Opportunity Report** — `ai-opportunity-report.md` — categorized opportunities with structured workflow candidates (if generated)
2. **Workflow Definition** — `[name]-definition.md` — structured decomposition of every step
3. **AI Building Block Spec** — `[name]-building-block-spec.md` — execution pattern, autonomy classifications, building block mapping, skill candidates, agent configs
4. **Platform Artifacts** — prompts, skills, agents, and configs generated for your platform
5. **Launch Guide** — `[name]-launch-guide.md` — step-by-step setup and first-run instructions

---

### Step 1 — Discover Workflows

Find which workflows are candidates for AI.

---

#### `discovering-workflows`

**Command:** `/business-first-ai:discover`

**What it does:** Runs a structured audit of your workflows to discover where AI can help. Scans memory and conversation history, interviews you about your work, then produces a prioritized opportunity report with structured workflow candidates ready for the Deconstruct step.

**When to use it:** Use this when you want to figure out where AI fits in your work. Especially useful when you're new to AI and need a starting point, or when you want a systematic review before choosing which workflow to deconstruct.

**How it works:**

1. **Memory & history scan** — The AI reviews everything it knows about you from prior conversations, memory, and project files. Presents findings for you to confirm or correct.
2. **Targeted discovery interview** — The AI asks focused questions one at a time about your role, repetitive tasks, information synthesis, multi-step processes, quality issues, communication overhead, and decision-making. Follows up based on your answers.
3. **Opportunity analysis & report** — Produces a summary table and detailed opportunity cards grouped by category (Deterministic Workflows, Collaborative AI, Autonomous Agents), ordered by impact.
4. **Workflow candidate summary** — You pick your top candidates, and the AI produces structured metadata for each: name, description, trigger, deliverable, category, pain point, AI opportunity, frequency, priority, and reasoning. Recommends which to deconstruct first.

**Example prompts:**

    "Help me discover AI workflow opportunities"
    → Runs the full audit and produces a categorized opportunity
      report with structured workflow candidates

    "I want to figure out which parts of my job could benefit from AI"
    → Interactive discovery session followed by a structured report
      with specific, actionable recommendations

**What you'll get:** An opportunity report (`outputs/ai-opportunity-report.md`) with a report header, summary table, top 3 recommendations, detailed cards for each opportunity, and a structured workflow candidate summary with metadata for each candidate you select.

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

### Step 2 — Deconstruct Workflows

Break workflows into structured definitions.

---

#### `deconstructing-workflows`

**Command:** `/business-first-ai:deconstruct`

**What it does:** Interactively deconstructs a business workflow into a structured Workflow Definition using the 5-question framework. This is the Deconstruct step.

**When to use it:** Use this when you want to thoroughly document a workflow's steps, decisions, data flows, and failure modes. Also useful standalone when you just need a structured breakdown of a complex process — even without planning to automate it.

**How it works:**

1. **Scenario discovery** — The AI determines how you're arriving: if you reference an opportunity report from the Discover step, it reads the workflow candidates and pre-populates metadata. Otherwise, it asks about the business scenario, objective, high-level steps, and ownership. If you describe a problem instead of a workflow, the AI proposes a candidate workflow for you to react to.
2. **Scope check** — The AI assesses whether this is one workflow or multiple bundled together. If multiple, it recommends splitting and asks which to start with.
3. **Name the workflow** — The AI presents 2-3 name options (2-4 word noun phrases, Title Case) and confirms name, description, outcome, trigger, and type.
4. **Deep dive** — For each step, the AI probes five dimensions:
    - Discrete steps (is this actually multiple steps?)
    - Decision points (if/then branches, quality gates)
    - Data flows (inputs, outputs, sources, destinations)
    - Context needs (specific documents, files, reference materials)
    - Failure modes (what happens when this step fails)
5. **Propose and react** — From step 4 onward, the AI proposes a hypothesis across all five dimensions and asks "What's right, what's wrong, what am I missing?"
6. **Map sequence** — The AI identifies sequential vs. parallel steps and the critical path
7. **Consolidate context** — The AI presents a rolled-up "context shopping list" of every artifact the workflow needs
8. **Generate Workflow Definition** — The AI writes the structured Workflow Definition to the output file

**Example prompts:**

    "Use deconstructing-workflows to break down my expense reporting process"
    → Interactive discovery session producing
      outputs/expense-reporting-definition.md

    "I need to document how our team handles customer escalations"
    → Walks through the discovery process, probing for hidden steps
      and decision points

**What you'll get:** A Workflow Definition file (`outputs/[name]-definition.md`) containing: scenario metadata, refined steps (with sub-steps, decision points, data flows, context needs, and failure modes for each), step sequence and dependencies, and a context shopping list.

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

### Step 3 — Build Workflows

Design your AI implementation and construct the workflow.

---

#### `building-workflows`

**Command:** `/business-first-ai:build-workflow`

**What it does:** Takes a Workflow Definition and runs the full Build process: Design (architecture decisions, execution pattern with interaction mode, autonomy classification, building block mapping, skill candidates, agent configuration) and Construct (platform-appropriate artifacts and a Launch Guide). This is the Build step.

**When to use it:** Use this when you have a Workflow Definition (from the Deconstruct step) and want to design and build your AI workflow. The Design phase produces the AI Building Block Spec; the Construct phase generates everything you need to run the workflow.

**How it works:**

**Design phase:**

1. **Load Workflow Definition** — The AI reads the Workflow Definition from `outputs/`
2. **Confirm understanding** — The AI summarizes the workflow and asks you to confirm
3. **Architecture decisions** — 8 questions about platform, deployment, code comfort, integrations, shareability, browser access, scheduling, and data sensitivity
4. **Execution pattern assessment** — The AI walks you through the four execution patterns and recommends one with an interaction mode (Interactive, Autonomous, or Hybrid)
5. **Classify each step** — Autonomy level, AI building blocks, tools, human review gates
6. **Identify skill candidates** — Steps tagged for skill creation with generation-ready detail
7. **Agent configuration** (when applicable) — Platform-agnostic agent blueprint
8. **Generate AI Building Block Spec** — Complete design document

**Construct phase:**

9. **Pattern-specific build path** — Only the steps relevant to your chosen execution pattern
10. **Generate platform artifacts** — Prompts, skills, agents, and configs in whatever format your platform needs (researched via web search at runtime)
11. **Launch Guide** — Plain-language setup instructions, first-run test, and next steps tailored to your platform

**Example prompts:**

    "Use building-workflows on my workflow definition"
    → Reads the most recent Workflow Definition, runs Design and
      Construct, produces all build deliverables

    "Design and build the expense-reporting workflow"
    → Reads outputs/expense-reporting-definition.md, recommends
      an execution pattern, and generates the full build output

**What you'll get:**

- **AI Building Block Spec** (`outputs/[name]-building-block-spec.md`) — architecture decisions, execution pattern with interaction mode, step classifications, skill candidates, agent configs, implementation order
- **Platform Artifacts** — prompts, skills, agents, and configs in whatever format your platform needs
- **Launch Guide** (`outputs/[name]-launch-guide.md`) — step-by-step setup, first-run test, and next steps

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

## Recommended Workflow

These skills cover the full Business-First AI Framework. Here's the recommended path:

1. **Discover** — Run `discovering-workflows` to audit your workflows and identify where AI creates the most value
2. **Deconstruct** — Pick your highest-impact candidate and run it through the `framework-orchestrator` agent (or use the skills individually: `deconstructing-workflows` → `building-workflows`)
3. **Build** — Follow the Launch Guide to get your workflow running, then iterate. See the [AI Workflow Examples](ai-workflow-examples.md) plugin for working examples of real AI workflows.

## FAQ

**Which step should I start with?**
Start with Step 1 (Discover) if you're not sure where AI fits in your work. Browse [AI Use Cases](../../use-cases/index.md) to see what types of work AI handles — content creation, research, coding, data analysis, ideation, and automation. Start with Step 2 (Deconstruct) if you already know which workflow you want to automate.

**Can I start from a problem instead of a workflow?**
Yes. Tell the `framework-orchestrator` agent about your problem (e.g., "people keep dropping off during enrollment") and it will propose a candidate workflow for you to refine during discovery.

**What if I lose context mid-conversation?**
The file-based handoffs mean you can continue in a new conversation. Just invoke the next skill and point it at the file from the previous step (e.g., "Use deconstructing-workflows on outputs/lead-qualification-definition.md").

**What are AI building blocks?**
The categories used during analysis: Prompt (single instruction), Context (reference material), Skill (multi-step workflow), Agent (autonomous personality), MCP (external tool connection), and Project (workspace configuration). Each step gets mapped to one or more of these.

**Where are the example agents and prompts?**
They're in the [AI Workflow Examples](ai-workflow-examples.md) collection — agents for executive writing, editorial review, research, meeting prep, and AI news.

**Do I need Claude Code for all of this?**
No. These are plain-text Markdown files — download them from [GitHub](https://github.com/jamesgray-ai/handsonai/tree/main/plugins/business-first-ai) and add them to any AI tool. See [Get These Skills](#get-these-skills) for all the options, or check the [Platform Compatibility](#platform-compatibility) table for per-component details.
