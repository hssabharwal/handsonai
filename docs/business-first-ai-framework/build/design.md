---
title: Design Your AI Workflow
description: Gather architecture decisions, choose an execution pattern and interaction mode, classify steps on the autonomy spectrum, map AI building blocks, identify skill candidates, and document agent blueprints — producing a platform-agnostic AI Building Block Spec.
---

# 3.1: Design Your AI Workflow

> **Part of:** [Build Workflows](index.md)

!!! tip "New to the seven building blocks?"
    See the [Agentic Building Blocks](../../agentic-building-blocks/index.md) reference for definitions, examples, and cross-platform comparisons.

## What This Is

The Design phase is where you decide *how* your workflow should be built — before you build it. You take the Workflow Definition from the [Deconstruct step](../deconstruct/index.md) and make four design decisions:

1. **Architecture decisions** — What platform, deployment surface, integrations, and constraints shape the build?
2. **Execution pattern** — How complex does the AI implementation need to be?
3. **Autonomy classification** — How much AI assistance does each step need?
4. **Building block mapping** — What specific AI components does each step require?

!!! abstract "Framework vs. platform — by design"
    This framework guides you through *which decisions to make* and *what building blocks to design* — it is platform-agnostic. The AI model provides the platform-specific expertise: it researches your chosen platform's current tools, SDKs, and best practices at runtime via web search. This separation ensures the framework stays current as platforms evolve, without requiring documentation updates every time a platform changes its offerings.

| | |
|---|---|
| **What you'll do** | Upload your Workflow Definition, answer architecture questions about your platform and constraints, review the AI's execution pattern recommendation and step classifications, and adjust anything that doesn't look right |
| **What you'll get** | An **AI Building Block Spec** — architecture decisions, execution pattern with interaction mode, autonomy classifications, building block mapping, skill candidates, agent blueprints (when applicable), and a prioritized build sequence |
| **Time** | ~15–25 minutes (architecture questions + reviewing the AI's analysis) |

## Why This Matters

Not every workflow needs the same level of AI infrastructure. A weekly status report might need a single well-crafted prompt. A multi-department content pipeline might need specialized agents coordinating across stages. Choosing the wrong execution pattern means either over-engineering (building agents when a prompt would do) or under-building (forcing a prompt to do agent-level work).

Design also maps each step to specific **AI building blocks** — Prompt, Context, Skill, Agent, MCP, or Project — so you know exactly what to build. The recommended implementation order (quick wins first, complex agent steps last) gives you a practical sequence for rolling out AI incrementally.

## Architecture Decisions

Before choosing an execution pattern, gather the information that shapes platform-aware recommendations. The AI model will ask eight questions about your environment and constraints:

1. **Platform** — Which AI platform will this run on?
2. **Deployment surface** — Web browser, desktop app, or command-line tool?
3. **Code comfort** — Comfortable with code, or no-code only?
4. **Tool integrations** — What external tools or services does this workflow connect to? (The model researches current integration options for your platform via web search.)
5. **Shareability** — Will team members run this? What's their technical comfort?
6. **Authenticated browser access** — Does any step require logging into a website through a browser?
7. **Scheduled execution** — Does it need to run on a schedule without human triggering?
8. **Data sensitivity** — Does it handle PII, financial, or regulated data?

These decisions gate subsequent recommendations — for example, no-code constraints limit the execution pattern, and scheduled execution influences the interaction mode.

## Execution Pattern Spectrum

Every AI workflow falls somewhere on this spectrum. The right pattern depends on what your workflow actually needs — not on how sophisticated you want it to be.

| Pattern | Description | Signals |
|---------|-------------|---------|
| **Prompt** | Single structured prompt with step-by-step instructions, all logic inline | Sequential steps, human provides inputs and makes decisions |
| **Skill-Powered Prompt** | Prompt that invokes reusable skills for complex sub-routines | Repeatable sub-routines, moderate complexity, steps that recur across workflows |
| **Single Agent** | One agent with tool access, capable of autonomous decisions | Tool use required, autonomous decisions, multi-step reasoning |
| **Multi-Agent** | Specialized agents coordinating in a pipeline | Multiple expertise domains, parallel execution, review gates between stages |

### Choosing a Pattern

Work through these five questions in order. The first "yes" tells you the minimum pattern your workflow needs:

1. **Does the workflow require tool use?** (web search, file access, APIs, databases) → If no, you're in Prompt or Skill-Powered Prompt territory
2. **Does it require autonomous decision-making?** (the AI needs to decide what to do next based on what it finds) → If yes, you need at least a Single Agent
3. **Are there steps with complex, reusable logic?** (sub-routines that appear in multiple workflows or need consistent execution) → If yes, those steps are skill candidates
4. **Does it span multiple expertise domains?** (research vs. writing vs. editing, each needing different instructions) → If yes, consider Multi-Agent
5. **Would it benefit from parallel execution or review gates?** (stages that can run simultaneously, or checkpoints where a human should review before proceeding) → If yes, Multi-Agent

Most workflows start as Prompt or Skill-Powered Prompt and evolve toward agents as you add automation. Start simple, upgrade when you hit limits.

### Interaction Mode

After choosing an execution pattern, determine how the human and AI interact during the workflow run:

| Mode | Description | Determined by |
|------|-------------|---------------|
| **Interactive** | Human and AI collaborate in real-time. AI pauses for input, review, and decisions at marked steps. | Web/desktop deployment, no scheduled execution |
| **Autonomous** | AI executes end-to-end without human involvement during the run. | Scheduled/unattended execution, CLI |
| **Hybrid** | Some steps run autonomously, others pause for human interaction. | Mix of automated and review steps |

The interaction mode is determined by your architecture decisions — deployment surface, scheduled execution needs, and which steps require human review.

!!! info "Deeper architectural patterns"
    For detailed implementation blueprints (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer, and autonomous agents), see [Workflow Architecture Patterns](../../patterns/workflow-architecture/index.md).

---

!!! warning "Activate plan mode now"
    You've made the key decisions — architecture, execution pattern, and interaction mode. This is the transition point. **Activate plan mode** on your AI tool before continuing. The model will now plan the rest of the spec (autonomy classification, building block mapping, skill candidates, agent blueprints) based on the decisions you've locked in. See [How to activate plan mode](#two-phases-two-modes) for platform-specific instructions.

## Autonomy Classification

For each step in your Workflow Definition, classify it on the autonomy spectrum:

| Level | Description | Example |
|-------|-------------|---------|
| **Human** | Requires human judgment, creativity, or physical action; AI cannot perform this | Final approval of a contract, in-person meeting |
| **Deterministic** | Follows fixed rules; AI executes reliably with minimal supervision | Formatting a report, extracting data from a template |
| **Semi-Autonomous** | AI does most of the work; human reviews at key checkpoints | Drafting an email for human review before sending |
| **Autonomous** | AI executes end-to-end, including decisions and tool use | Research agent that finds, evaluates, and summarizes sources |

## Building Block Mapping

Map each AI-assisted step to one or more of the seven building blocks:

| Block | What It Is | When to Use It |
|-------|-----------|----------------|
| **Model** | The AI engine that processes inputs and generates outputs | When the task requires specific capabilities (reasoning, multimodal, speed) that influence model choice |
| **Prompt** | A well-crafted instruction that tells the model what to do for this step | Every AI step needs at least a prompt |
| **Context** | Background information, reference documents, examples, or data the model needs | When the step requires domain-specific knowledge not in the model's training |
| **Skill** | A reusable routine — give it inputs, it follows a defined process, it produces consistent outputs | When a step has complex logic that recurs across workflows |
| **Agent** | An autonomous AI that plans, uses tools, and executes multi-step work | When a step requires tool use, adaptive reasoning, or autonomous decisions |
| **MCP** | A connector giving the model access to external tools, APIs, databases, or services | When a step needs to read from or write to external systems |
| **Project** | A persistent workspace grouping prompts, context, skills, and agents | When the workflow runs frequently with the same reference materials |

Also identify for each step:

- **Tools and connectors** — What external tools, APIs, or integrations does this step need?
- **Human-in-the-loop gates** — Where should a human review before the workflow continues?

## Skill Candidate Identification

Steps that should become skills share these characteristics:

- **Reusable** — The logic appears in multiple workflows or will be run repeatedly
- **Complex** — More than a simple instruction; involves multi-step reasoning, evaluation criteria, or domain expertise
- **Consistent** — Needs to produce reliable, repeatable outputs every time

For each skill candidate, document enough detail for generation:

| Detail | What to capture |
|--------|----------------|
| **Purpose** | What the skill does in one sentence |
| **Inputs** | What data or information the skill receives |
| **Outputs** | What the skill produces |
| **Decision logic** | Key rules, criteria, or evaluation frameworks |
| **Failure modes** | What happens when inputs are missing or unexpected |

This detail enables generation of skills on any platform during the Construct phase.

## Agent Blueprints

When the execution pattern is Single Agent or Multi-Agent, document each agent your workflow needs. These are platform-agnostic specifications — the model builds them into working agents during [Construct](index.md#32-construct).

| Component | What to specify |
|-----------|----------------|
| **Name** | Unique agent name |
| **Description** | Agent purpose and when it should be used |
| **Instructions** | Mission, responsibilities, behavior, goals, tone & style, output format |
| **Model** | Recommended model capability (reasoning-heavy, fast, etc.) |
| **Tools** | Tools the agent can call (MCP servers, file access, web, APIs) |

Plus:

- **Context** — What data, files, or knowledge base does the agent need access to?
- **Goal** — What triggers this agent and what does it produce?

For **multi-agent** workflows, also document:

- **Orchestration pattern** — Supervisor (one agent delegates), pipeline (agents in sequence), or parallel (agents work simultaneously)
- **Agent handoffs** — What does each agent pass to the next? What format?
- **Human review gates** — Where does a human review output before the pipeline continues?

This agent configuration is **platform-agnostic** — it serves as a blueprint. During the Construct phase, the model researches your chosen platform's current tools and generates platform-appropriate agent implementations.

## How to Use This

This step is facilitated by the **`building-workflows`** Business-First AI Framework Skill. How you get it depends on your platform — see [How to Add Skills to Your Platform](../../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for installation instructions for Claude Code, Cursor, Codex CLI, Gemini CLI, and VS Code Copilot.

**Start with this prompt:**

```
Design the AI workflow from my Workflow Definition.
Recommend an execution pattern and map building blocks.
```

Upload or paste your Workflow Definition file (`[workflow-name]-definition.md`) from the Deconstruct step when prompted. The skill runs the Design analysis and produces an AI Building Block Spec.

!!! tip "If your AI tool doesn't support skills"
    Use this page as a conversation guide — walk through each section in order with your AI tool. The methodology works the same way whether or not a skill is driving the process.

### Two phases, two modes

Design has two distinct phases that use different modes of interaction with the model:

**Phase 1: Collaborative decisions (normal conversation)**

The first part of Design is a back-and-forth conversation. The model asks you the 8 architecture questions, recommends an execution pattern and interaction mode, and you discuss and confirm. This is normal conversational mode — you're making decisions together.

**Phase 2: Plan the spec (plan mode)**

Once the architecture decisions and execution pattern are locked in, the model has everything it needs to plan the full AI Building Block Spec. This is when you **activate plan mode** — the model shifts from asking you questions to planning: classifying each step on the autonomy spectrum, mapping building blocks, identifying skill candidates, and documenting agent blueprints.

**How to activate plan mode on your platform:**

| Platform | How to activate plan mode |
|---|---|
| **Claude Code** | Press `Shift+Tab` twice, or type `/plan` |
| **Cursor** | Select "Plan" in the composer mode |
| **Codex CLI** | Run with the `--plan` flag |
| **Other AI tools** | Ask the model: *"Switch to plan mode. Based on the architecture decisions and execution pattern we've agreed on, plan the full AI Building Block Spec — classify each step, map building blocks, identify skill candidates, and document agent blueprints."* |

After the model produces the plan, **review and approve the AI Building Block Spec** before moving on. If anything needs adjustment — a step classification, a skill candidate, an agent blueprint — now is the time. Once you approve, the model transitions to [Construct (3.2)](construct.md) and begins building.

## What This Produces

The **AI Building Block Spec** contains:

- **Execution pattern** — Prompt, Skill-Powered Prompt, Single Agent, or Multi-Agent, with interaction mode and reasoning
- **Architecture decisions** — platform, deployment surface, code comfort, integrations (with connector mapping), shareability, browser access, scheduling, data sensitivity — each with rationale and a constraints summary showing how they shaped the recommendations
- **Scenario summary** — workflow metadata from the Workflow Definition
- **Decomposition table** — every step with autonomy classification, decision points, failure modes, data flows, context needs, AI building block mapping, and skill candidate flags
- **Autonomy spectrum summary** — steps grouped by classification level
- **Skill candidates** — steps tagged for skill creation, with generation-ready detail (purpose, inputs, outputs, decision logic, failure modes)
- **Agent blueprints** (when applicable) — platform-agnostic specification for each agent with all five core components plus context and goal
- **Step sequence and dependencies** — sequential vs. parallel execution paths
- **Prerequisites** — what must be in place before the workflow can run
- **Context inventory** — every piece of context the workflow needs, with status and key contents
- **Tools and connectors** — external integrations required
- **Implementation order** — quick wins → semi-autonomous → complex agent steps

This AI Building Block Spec is the input for the [Construct phase](index.md), where the model generates platform-appropriate artifacts (prompts, skills, agents, connectors) based on your execution pattern and architecture decisions.
