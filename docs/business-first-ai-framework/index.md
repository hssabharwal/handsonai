---
title: Business-First AI Framework
description: A three-step methodology — Analyze, Deconstruct, Build — for identifying AI opportunities in your workflows, breaking them into building blocks, and constructing working AI-powered workflows.
---

# Business-First AI Framework

## The Problem

Most AI adoption starts with the technology — "we have ChatGPT, where should we use it?" This leads to shallow adoption and misses the workflows where AI creates real leverage. And even when people identify the right workflow, there's a gap between the idea and making it real — without a repeatable process to follow, they get stuck and stop. The Business-First AI Framework closes that gap: audit your workflows, identify where AI creates the most value, deconstruct those workflows into building blocks, then build.

## How It Works

The framework is facilitated by **three skills** — reusable AI routines that guide you through each step interactively. You don't need to figure out the right questions to ask or remember the methodology — the skill drives the conversation, probes for details, and produces structured outputs you carry to the next step. You bring the domain knowledge about your work; the AI handles the process.

| Step | Skill | What it guides you through |
|------|-------|---------------------------|
| 1. Analyze | `analyzing-workflows` | Auditing your workflows and surfacing AI opportunities |
| 2. Deconstruct | `deconstructing-workflows` | Breaking a workflow into steps, decisions, data flows, and failure modes |
| 3. Build | `building-workflows` | Designing the AI implementation and constructing platform artifacts |

**Get the skills:** Install the Business-First AI plugin in Claude Code (`/plugin install business-first-ai@handsonai`) or download the skill folders from [GitHub](https://github.com/jamesgray-ai/handsonai-plugins/tree/main/plugins/business-first-ai/skills). See [How to Add Skills to Your Platform](../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for Claude Code, Cursor, Codex CLI, Gemini CLI, and VS Code Copilot.

## The Framework

Three steps, each with a structured process:

### Step 1: Analyze Workflows

Find which workflows are candidates for AI.

Before you can apply AI to anything, you need to know *where* it fits. Step 1 is a structured audit of your workflows that produces a prioritized list of opportunities classified on two dimensions:

- **Autonomy** — How much decision-making does the AI have? **Deterministic** (follows fixed rules), **Guided** (makes bounded decisions within guardrails), or **Autonomous** (plans and adapts independently)
- **Human Involvement** — Is a human in the loop during execution? **Augmented** (human reviews and steers) or **Automated** (AI runs solo)

The audit uses a three-step process: scan what AI already knows about your work, interview you to fill gaps, then produce a classified report with specific opportunities and actionable first steps.

**Facilitated by the `analyzing-workflows` skill.** See [Analyze Workflows](analyze.md) for details and the [Skills building block](../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for cross-platform installation.

---

### Step 2: Deconstruct Workflows

Give your workflow clear structure through deep decomposition.

Once you've identified a workflow worth automating, Step 2 deconstructs it so you understand every step, decision point, and dependency. You describe your workflow — rough and incomplete is fine — and the model interviews you to surface every hidden step, data handoff, and failure mode.

The deconstruction uses the **five-question framework** to break down each step:

1. Is this step actually multiple steps bundled together?
2. Are there decision points, branches, or quality gates?
3. What data flows in and out?
4. What context, documents, or reference materials does this step need?
5. What happens when this step fails?

The deliverable is a **Workflow Definition** — a structured breakdown of your workflow into refined steps, with decision points, data flows, context needs, and failure modes captured for every step. The context needs and failure modes captured here directly inform design decisions in Step 3.

**Facilitated by the `deconstructing-workflows` skill.** See [Deconstruct Workflows](deconstruct/index.md) for details and the [Skills building block](../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for cross-platform installation.

---

### Step 3: Build AI-Powered Workflows

Design your AI implementation, construct the components, and run the workflow.

Step 2 produces a Workflow Definition — the analysis. Step 3 is where the `building-workflows` skill turns that analysis into a working AI workflow. The skill guides you through three parts:

**3.1: Design** — The skill confirms your platform, then extracts tool integrations, trigger/schedule, and constraints directly from the Workflow Definition — presenting a single confirmation block instead of asking individual questions. Based on the confirmed analysis, it assesses the workflow's autonomy level (Deterministic → Guided → Autonomous), recommends an orchestration mechanism (Prompt → Skill-Powered Prompt → Agent) and involvement mode, classifies each step on the autonomy spectrum, maps AI building blocks, identifies skill candidates, and documents agent blueprints when needed. Produces an **AI Building Block Spec** — a platform-agnostic blueprint that tells the model exactly what to build in 3.2.

**3.2: Construct** — The skill tells the model what to build (the specs from Design); the model researches your platform's current tools and conventions via web search and generates the actual artifacts — context, skills, prompts, agents, MCP connections — in whatever format your platform requires. Only the components your orchestration mechanism needs are built.

**3.3: Run** — The skill produces a **Run Guide** tailored to your platform and technical comfort level: what was built and where it lives, step-by-step setup instructions, a guided first-run test with sample input, and next steps for ongoing use.

**Facilitated by the `building-workflows` skill.** See [Build Workflows](build/index.md) for the full guide, including mechanism-specific construct paths and three worked examples across the autonomy spectrum.

---

## Key Concepts

Quick reference for the framework's vocabulary:

### AI Workflow Design Matrix

Every AI workflow is classified on two dimensions — autonomy and human involvement — producing six archetypes. See the [AI Workflow Design Matrix](workflow-design-matrix.md) for the full 3x2 matrix with descriptions, examples, and guidance on choosing the right archetype.

| Autonomy | Description | Example |
|----------|-------------|---------|
| **Deterministic** | AI follows fixed rules — no decisions, no judgment | Formatting reports, processing forms |
| **Guided** | AI makes bounded decisions within guardrails | Co-writing, brainstorming, research summaries |
| **Autonomous** | AI plans, decides, and adapts independently | Competitor monitoring, research → report pipelines |

| Involvement | Description |
|-------------|-------------|
| **Augmented** | Human is in the loop — reviews, steers, or decides at key points |
| **Automated** | AI runs solo — human reviews only the final output |

### Five-Question Framework

Used to decompose each workflow step:

1. **Discrete steps** — Is this one step or multiple bundled together?
2. **Decision points** — Any if/then branches, quality gates, or judgment calls?
3. **Data flows** — What goes in? What comes out? Where from and where to?
4. **Context needs** — What documents, files, or reference materials are required?
5. **Failure modes** — What happens when this step fails?

### AI Building Blocks

| Block | What It Is |
|-------|-----------|
| **Model** | The AI engine that processes inputs and generates outputs |
| **Prompt** | A well-crafted instruction that tells the model what to do |
| **Context** | Background information, reference docs, or examples the model needs |
| **Skill** | A reusable routine the model can invoke — give it inputs, it follows a defined process, it produces consistent outputs |
| **Agent** | An autonomous AI that plans, uses tools, and executes multi-step work |
| **MCP (Model Context Protocol)** | A connector that lets AI access external tools, services, or databases on your behalf |
| **Project** | A persistent workspace grouping prompts, context, skills, and agents |

For detailed definitions and cross-platform examples, see [Agentic Building Blocks](../agentic-building-blocks/index.md).

### Six Use Case Primitives

When classifying opportunities from Step 1, it helps to know what **type** of AI work each one involves. The [six use case primitives](../use-cases/index.md) — Content Creation, Research, Coding, Data Analysis, Ideation & Strategy, and Automation — provide a classification system for the opportunities you identify.

### Autonomy Spectrum

Used to classify each workflow step during [Design](build/design.md):

| Level | Description |
|-------|-------------|
| **Human** | Requires human judgment, creativity, or physical action |
| **Deterministic** | Follows fixed rules; AI executes reliably with no decisions |
| **Guided** | AI makes bounded decisions within guardrails; human reviews at key checkpoints |
| **Autonomous** | AI plans and executes end-to-end, including decisions and tool use |

### Orchestration Mechanism

The orchestration mechanism answers: **who drives the workflow?** The right mechanism depends on the workflow's autonomy level and what it actually needs:

| Mechanism | Description | Signals |
|-----------|-------------|---------|
| **Prompt** | Human follows structured instructions step by step, all logic inline | Sequential steps, human provides inputs and makes decisions |
| **Skill-Powered Prompt** | Human invokes reusable skills in a defined sequence | Repeatable sub-routines, moderate complexity |
| **Agent** | Agent orchestrates the flow, invoking skills and making sequencing decisions | Tool use required, autonomous decisions, multi-step reasoning |

Single-agent vs. multi-agent is an architecture detail decided during agent configuration — not a top-level choice.

## Getting Started

!!! tip "Get guided help"

    - **MCP Server** — [Connect the MCP server](../mcp-server/index.md) and ask your AI to walk you through the framework step by step.
    - **Plugin skills** — Install the [Business-First AI plugin](../use-the-cookbook/build/business-first-ai.md) for interactive skills that guide you through Analyze, Deconstruct, and Build.

1. **[Analyze Workflows](analyze.md)** — identify your best AI candidates
2. **Pick your highest-impact opportunity** — don't try to pursue everything at once
3. **[Deconstruct the workflow](deconstruct/index.md)** — break it into discrete steps
4. **[Design](build/design.md)** your AI workflow — assess autonomy, choose an orchestration mechanism, classify steps, map building blocks
5. **[Build](build/index.md)** the components your orchestration mechanism requires
6. **Test on a real scenario** and iterate
