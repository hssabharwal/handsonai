---
title: Business-First AI Framework
description: The Business-First AI Framework as executable skills and agents — analyze opportunities, deconstruct workflows, and build working AI workflows
---

# Business-First AI Framework

Skills and an agent implementing the [Business-First AI Framework](../../business-first-ai-framework/index.md) — analyze where AI fits in your workflows, deconstruct those workflows into AI building blocks, and build working AI workflows. These are plain-text Markdown files that work in any AI tool supporting skills. Download them from GitHub, install as a Claude Code plugin, or paste directly into your system prompt.

## Get These Skills

These skills and agents are plain-text Markdown files that work in any AI tool. Choose how you want to get them:

=== "Any Platform"

    Download from GitHub and add to your platform's skill directory:

    :material-github: [Browse on GitHub](https://github.com/jamesgray-ai/handsonai-plugins/tree/main/plugins/business-first-ai){ .md-button }

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
| `/business-first-ai:analyze` | `analyzing-workflows` — Step 1 |
| `/business-first-ai:deconstruct` | `deconstructing-workflows` — Step 2 |
| `/business-first-ai:design-workflow` | `designing-workflows` — Step 3.1: Design |
| `/business-first-ai:construct-workflow` | `constructing-workflows` — Step 3.2: Construct |
| `/business-first-ai:run-workflow` | `running-workflows` — Step 3.3: Run |

**Recommended path:**

1. Run `/business-first-ai:analyze` (or say *"Help me analyze AI workflow opportunities"*) → Step 1
2. Run `/business-first-ai:deconstruct` (or say *"I want to deconstruct my [workflow] into AI building blocks"*) → Step 2
3. Run `/business-first-ai:design-workflow` to design the AI workflow architecture → Step 3.1
4. Run `/business-first-ai:construct-workflow` to generate platform artifacts → Step 3.2
5. Run `/business-first-ai:run-workflow` to get a Run Guide for deployment → Step 3.3
6. Review your outputs in the `outputs/` folder

For platform-specific setup (Claude.ai ZIP upload, Cowork install, API integration), see [Using Plugins](using-plugins.md).

### Platform Compatibility

| Component | Type | Command | Claude Code | Cowork | Claude.ai |
|-----------|------|---------|:-----------:|:------:|:---------:|
| `framework-orchestrator` | Agent | — | Yes | Yes | No |
| `analyzing-workflows` | Skill | `/business-first-ai:analyze` | Yes | Yes | Yes |
| `deconstructing-workflows` | Skill | `/business-first-ai:deconstruct` | Yes | Yes | Yes |
| `designing-workflows` | Skill | `/business-first-ai:design-workflow` | Yes | Yes | Yes |
| `constructing-workflows` | Skill | `/business-first-ai:construct-workflow` | Yes | Yes | Yes |
| `running-workflows` | Skill | `/business-first-ai:run-workflow` | Yes | Yes | Yes |

## Components

---

### Step 1–3 — Full Orchestration

---

#### `framework-orchestrator`

**What it does:** Orchestrates the end-to-end Analyze, Deconstruct, and Build process. Runs candidate discovery, deep deconstruction, design, and build sequentially, with file-based handoffs between stages so you can also run each step individually in separate conversations.

**When to use it:** Use this when you want to go through the entire process in one session. The agent manages the flow between steps, saves intermediate files, and keeps you involved at each stage. If you prefer to work step-by-step across separate conversations, invoke the individual skills instead.

**How it works:** The agent runs five skills across three stages:

1. **Analyze** (`analyzing-workflows`) — Audit your workflows, interview you about your work, and produce an opportunity report with structured candidates. If you already know which workflow to deconstruct, this step is brief.
2. **Deconstruct** (`deconstructing-workflows`) — Interactive deep-dive that decomposes the workflow into refined steps using the 6-question framework. Produces the Workflow Definition.
3. **Build** — Three sub-phases, each with its own skill:
    - **Design** (`designing-workflows`) — Gather architecture decisions, assess workflow autonomy level, choose an orchestration mechanism and involvement mode, classify steps, map building blocks, identify skill candidates, configure agents, and produce the AI Building Block Spec.
    - **Construct** (`constructing-workflows`) — Generate platform-appropriate artifacts (prompts, skills, agents, configs) based on the approved spec.
    - **Run** (`running-workflows`) — Generate a Run Guide tailored to your platform and technical comfort level.

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
    → Decomposes the reporting process, assesses autonomy, chooses an
      orchestration mechanism, and identifies quick wins vs. complex
      automation opportunities

**What you'll get:** Multiple files in `outputs/`:

1. **Opportunity Report** — `ai-opportunity-report.md` — categorized opportunities with structured workflow candidates (if generated)
2. **Workflow Definition** — `[name]-definition.md` — structured decomposition of every step
3. **AI Building Block Spec** — `[name]-building-block-spec.md` — autonomy level, orchestration mechanism, per-step classifications, building block mapping, skill candidates, agent configs
4. **Platform Artifacts** — prompts, skills, agents, and configs generated for your platform
5. **Run Guide** — `[name]-run-guide.md` — step-by-step setup and first-run instructions

---

### Step 1 — Analyze Workflows

Find which workflows are candidates for AI.

---

#### `analyzing-workflows`

**Command:** `/business-first-ai:analyze`

**What it does:** Runs a structured audit of your workflows to analyze where AI can help. Supports two lenses: **Individual** (your personal workflows) and **Organizational** (your business's value chain processes). Scans memory and conversation history, asks which lens to use, interviews you with lens-specific questions, then produces a prioritized opportunity report with structured workflow candidates ready for the Deconstruct step.

**When to use it:** Use this when you want to figure out where AI fits in your work. Especially useful when you're new to AI and need a starting point, or when you want a systematic review before choosing which workflow to deconstruct.

**How it works:**

1. **Memory & history scan** — The AI reviews everything it knows about you from prior conversations, memory, and project files. Presents findings for you to confirm or correct.
2. **Lens selection** — The AI asks which lens to use: Individual (your personal workflows) or Organizational (your business's value chain). Infers if obvious from context.
3. **Targeted discovery interview** — The AI asks focused, lens-specific questions one at a time. Individual lens: role, repetitive tasks, information synthesis, multi-step processes, quality issues, communication overhead, decision-making. Organizational lens: business objectives, value chain processes, cross-functional handoffs, bottlenecks, consistency risks, measurement gaps, scale constraints. Follows up based on your answers.
4. **Opportunity analysis & report** — Produces a summary table and detailed opportunity cards grouped by autonomy level (Deterministic, Guided, Autonomous) with involvement mode (Augmented, Automated), ordered by impact.
5. **Workflow candidate summary** — You pick your top candidates, and the AI produces structured metadata for each: name, description, trigger, deliverable, autonomy, involvement, pain point, AI opportunity, frequency, priority, reasoning, and lens. Organizational candidates also include business objective, stakeholders, and success metrics. Recommends which to deconstruct first.
6. **Second lens follow-up** — The AI offers to explore the other lens for a more complete picture.

**Example prompts:**

    "Help me analyze AI workflow opportunities"
    → Runs the full audit and produces a categorized opportunity
      report with structured workflow candidates

    "I want to figure out which parts of my job could benefit from AI"
    → Interactive discovery session followed by a structured report
      with specific, actionable recommendations

**What you'll get:** An opportunity report (`outputs/ai-opportunity-report.md`) with a report header (including lens), summary table, top 3 recommendations, detailed cards for each opportunity (with organizational fields for org-lens candidates), and a structured workflow candidate summary with metadata for each candidate you select.

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

### Step 2 — Deconstruct Workflows

Break workflows into structured definitions.

---

#### `deconstructing-workflows`

**Command:** `/business-first-ai:deconstruct`

**What it does:** Interactively deconstructs a business workflow into a structured Workflow Definition using the 6-question framework. This is the Deconstruct step.

**When to use it:** Use this when you want to thoroughly document a workflow's steps, decisions, data flows, and failure modes. Also useful standalone when you just need a structured breakdown of a complex process — even without planning to automate it.

**How it works:**

1. **Scenario analysis** — The AI determines how you're arriving: if you reference an opportunity report from the Analyze step, it reads the workflow candidates and pre-populates metadata. Otherwise, it asks about the business scenario, objective, high-level steps, and ownership. If you describe a problem instead of a workflow, the AI proposes a candidate workflow for you to react to.
2. **Scope check** — The AI assesses whether this is one workflow or multiple bundled together. If multiple, it recommends splitting and asks which to start with.
3. **Name the workflow** — The AI presents 2-3 name options (2-4 word noun phrases, Title Case) and confirms name, description, outcome, trigger, and type.
4. **Deep dive** — For each step, the AI probes six dimensions:
    - Discrete steps (is this actually multiple steps?)
    - Decision points (if/then branches, quality gates)
    - Data flows (inputs, outputs, sources, destinations)
    - Context needs (specific documents, files, reference materials)
    - Failure modes (what happens when this step fails)
    - Data readiness (can AI access, interpret, and persist the data this step needs?)
5. **Propose and react** — From step 4 onward, the AI proposes a hypothesis across all six dimensions and asks "What's right, what's wrong, what am I missing?"
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

### Step 3.1 — Design Workflows

Design your AI implementation architecture.

---

#### `designing-workflows`

**Command:** `/business-first-ai:design-workflow`

**What it does:** Takes a Workflow Definition and runs the Design phase: architecture decisions, autonomy assessment, orchestration mechanism with involvement mode, per-step classification, building block mapping, skill candidates, agent configuration. Produces an AI Building Block Spec for approval.

**When to use it:** Use this when you have a Workflow Definition (from the Deconstruct step) and want to design your AI workflow's architecture. The spec must be approved before moving to Construct.

**How it works:**

1. **Load Workflow Definition** — The AI reads the Workflow Definition from `outputs/`
2. **Confirm understanding** — The AI summarizes the workflow and asks you to confirm
3. **Architecture decisions** — Confirm platform (the one question), then extract tool integrations, trigger/schedule, and constraints from the Workflow Definition and present a confirmation block
4. **Autonomy assessment** — The AI assesses where the whole workflow sits on the autonomy spectrum (Deterministic → Guided → Autonomous)
5. **Orchestration mechanism** — The AI recommends a mechanism (Prompt, Skill-Powered Prompt, or Agent) with an involvement mode (Augmented or Automated)
6. **Classify each step** — Per-step autonomy level, AI building blocks, tools, human review gates
7. **Identify skill candidates** — Steps tagged for skill creation with generation-ready detail
8. **Agent configuration** (when applicable) — Platform-agnostic agent blueprint
9. **Generate AI Building Block Spec** — Complete design document
10. **Spec Approval Gate** — Present the spec for approval. No artifacts are generated until you confirm.

**Example prompts:**

    "Design the AI workflow from my Workflow Definition"
    → Reads the most recent Workflow Definition, runs Design,
      produces the AI Building Block Spec for approval

    "Design the expense-reporting workflow"
    → Reads outputs/expense-reporting-definition.md, recommends
      an orchestration mechanism, and generates the spec

**What you'll get:**

- **AI Building Block Spec** (`outputs/[name]-building-block-spec.md`) — architecture decisions, autonomy level, orchestration mechanism with involvement mode, step classifications, skill candidates, agent configs, implementation order

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

### Step 3.2 — Construct Workflows

Generate platform artifacts from your approved spec.

---

#### `constructing-workflows`

**Command:** `/business-first-ai:construct-workflow`

**What it does:** Takes an approved AI Building Block Spec and generates platform-appropriate artifacts: prompts, skills, agents, configs, and connectors. Researches integration availability and resolves deferred platform decisions.

**When to use it:** Use this when you have an approved AI Building Block Spec (from the Design step) and want to generate the actual building blocks for your platform. Also useful when re-platforming — run Construct again with the same spec but a different platform target.

**How it works:**

1. **Load Building Block Spec** — The AI reads the approved spec from `outputs/`
2. **Build path choice** — Choose "I'll build it" (model generates artifacts) or "I'll build it myself" (get a Construction Guide with build sequence and creation skill recommendations)
3. **Mechanism-specific build path** — Only the steps relevant to your chosen orchestration mechanism
4. **Discover creation tools** — The AI [scans your environment](../../business-first-ai-framework/build/construct.md#how-creation-tools-are-discovered) for skills that can create other building blocks (e.g., skill-creator, agent-development). Presents a Creation Tools Map for confirmation — matched skills get delegated to, unmatched types are generated inline.
5. **Integration research** — Web search to verify platform availability for every tool in the spec
6. **Generate platform artifacts** — For each building block, either delegates to the matched creation skill or generates inline using format specifications
7. **Write SOP to Notion** (if available)

**Example prompts:**

    "Construct the workflow from my Building Block Spec"
    → Reads the most recent spec, researches integrations,
      generates all platform artifacts

    "Build the expense-reporting workflow for Claude Code"
    → Reads the spec, generates Claude Code-specific artifacts

**What you'll get:**

- **Platform Artifacts** — prompts, skills, agents, and configs in whatever format your platform needs

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

### Step 3.3 — Run Workflows

Get a Run Guide for deploying and testing your workflow.

---

#### `running-workflows`

**Command:** `/business-first-ai:run-workflow`

**What it does:** Generates a plain-language Run Guide for deploying, executing, and testing your AI workflow. Covers setup steps, a first-run test, and next steps — tailored to your platform and build path.

**When to use it:** Use this after Construct to get deployment instructions, or independently to regenerate the Run Guide (e.g., for a teammate or after changing platforms).

**How it works:**

1. **Determine build path** — Did the model generate artifacts, or are you building them yourself?
2. **Generate Run Guide** — Two variants:
    - **Model-built:** Artifact inventory, setup steps, first-run test, next steps
    - **Manual build:** Construction Guide with build sequence, format guidance, first-run test, next steps

**Example prompts:**

    "Generate the Run Guide for my workflow"
    → Reads the spec and artifacts, produces a deployment guide

    "Create a Run Guide for the expense-reporting workflow"
    → Generates setup instructions tailored to your platform

**What you'll get:**

- **Run Guide** (`outputs/[name]-run-guide.md`) — step-by-step setup, first-run test, and next steps

**Platform compatibility:** Claude Code &#10003; | Claude.ai &#10003;

---

## Recommended Workflow

These skills cover the full Business-First AI Framework. Here's the recommended path:

1. **Analyze** — Run `analyzing-workflows` to audit your workflows and identify where AI creates the most value
2. **Deconstruct** — Pick your highest-impact candidate and run `deconstructing-workflows` (or use the `framework-orchestrator` agent for the full end-to-end process)
3. **Design** — Run `designing-workflows` to produce your AI Building Block Spec
4. **Construct** — Run `constructing-workflows` to generate platform artifacts from the approved spec
5. **Run** — Run `running-workflows` to get a Run Guide, then follow it to deploy and iterate. See the [AI Workflow Examples](ai-workflow-examples.md) plugin for working examples of real AI workflows.

## FAQ

**Which step should I start with?**
Start with Step 1 (Analyze) if you're not sure where AI fits in your work. Browse [AI Use Cases](../../use-cases/index.md) to see what types of work AI handles — content creation, research, coding, data analysis, ideation, and automation. Start with Step 2 (Deconstruct) if you already know which workflow you want to automate.

**Can I start from a problem instead of a workflow?**
Yes. Tell the `framework-orchestrator` agent about your problem (e.g., "people keep dropping off during enrollment") and it will propose a candidate workflow for you to refine during discovery.

**What if I lose context mid-conversation?**
The file-based handoffs mean you can continue in a new conversation. Just invoke the next skill and point it at the file from the previous step (e.g., "Use deconstructing-workflows on outputs/lead-qualification-definition.md").

**What are AI building blocks?**
The 11 building blocks across three layers: **Intelligence** — Model (AI engine), Context (reference material), Memory (persistent knowledge), Project (workspace configuration). **Orchestration** — Prompt (single instruction), Skill (reusable routine), Agent (autonomous executor). **Integration** — MCP (tool connector protocol), API (programmatic interface), SDK (development framework), CLI (command-line interface). Each workflow step gets mapped to one or more of these.

**Where are the example agents and prompts?**
They're in the [AI Workflow Examples](ai-workflow-examples.md) collection — agents for executive writing, editorial review, research, meeting prep, and AI news.

**Do I need Claude Code for all of this?**
No. These are plain-text Markdown files — download them from [GitHub](https://github.com/jamesgray-ai/handsonai-plugins/tree/main/plugins/business-first-ai) and add them to any AI tool. See [Get These Skills](#get-these-skills) for all the options, or check the [Platform Compatibility](#platform-compatibility) table for per-component details.
