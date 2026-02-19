---
title: Design Your AI Workflow
description: Gather architecture decisions, choose an execution pattern and interaction mode, classify steps on the autonomy spectrum, map AI building blocks, identify skill candidates, and configure agents — producing a platform-agnostic AI Building Block Spec.
---

# Design Your AI Workflow

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
| **What you'll get** | An **AI Building Block Spec** — architecture decisions, execution pattern with interaction mode, autonomy classifications, building block mapping, skill candidates, agent configurations (when applicable), and a prioritized build sequence |
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

## Agent Configuration

When the execution pattern is Single Agent or Multi-Agent, document each agent your workflow needs:

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

There are two ways to run the Design phase, depending on which tools you use:

### Option A: Prompt template (any AI tool)

1. **Copy the prompt** from the code block below
2. **Paste it into a new conversation** in your preferred AI tool
3. **Press Enter** — the model will ask you to paste your Workflow Definition
4. **Upload or paste your Workflow Definition file** (`[workflow-name]-definition.md`) from the Deconstruct step
5. **Answer the architecture questions** — the model will ask about your platform, deployment surface, integrations, and constraints
6. **Review the analysis** — the model will recommend an execution pattern and interaction mode, classify steps, and map building blocks
7. **Download the AI Building Block Spec** the model produces at the end — a Markdown file named `[workflow-name]-building-block-spec.md`
8. **Keep this file** — you'll use it in the [Construct phase](index.md), and you can share it with your team for feedback

!!! note "Web search and platform research"
    When the model asks for your platform and researches integration options, this is by design. The framework delegates platform-specific knowledge to the model rather than hardcoding it, so you always get current recommendations. Use an AI tool that supports web search for the best experience.

### Option B: Claude skill

Use the `building-workflows` skill from the [Business-First AI plugin](../../use-the-cookbook/build/business-first-ai.md). It reads the Workflow Definition, runs the Design analysis, and saves the AI Building Block Spec automatically.

- **Claude Code or Cowork** — install the plugin (`/plugin install business-first-ai@handsonai`) and start with:
    ```
    Design the AI workflow from outputs/[workflow-name]-definition.md.
    Recommend an execution pattern and map building blocks.
    ```
    The AI Building Block Spec is saved to `outputs/[workflow-name]-building-block-spec.md`.
- **Claude.ai** — zip the `building-workflows` skill folder and upload it via **Settings > Capabilities > Upload skill**, then start a new chat with: "Design my AI workflow from this Workflow Definition." Upload or paste your Workflow Definition when prompted. See [Using Skills in Claude.ai](../../use-the-cookbook/build/using-plugins.md#using-skills-in-claudeai-web) for detailed instructions.

!!! tip "Design is mostly analytical"
    Unlike the Deconstruct step's extended back-and-forth, the Design phase is focused on analysis. The model does the heavy lifting — gathering architecture decisions, recommending an execution pattern and interaction mode, classifying steps, mapping building blocks, and identifying skill and agent candidates. Expect 15-25 minutes of interaction.

## The Prompt

```text
You are an expert AI Workflow Designer who specializes in translating business workflow definitions into AI implementation blueprints. Use web search to research the user's chosen platform's current tools, APIs, and conventions. Do not rely on potentially outdated knowledge — always verify what's current before recommending or generating platform-specific implementations.

I have a Workflow Definition from a previous conversation. I'll paste it when you ask for it.

---

## Part 1 — Paste Your Workflow Definition

Say: "Upload your Workflow Definition file, or paste its contents below, then press Enter."

Wait for me to provide it. After receiving the Workflow Definition, confirm you've read it by summarizing: the workflow name, the number of steps, and the workflow outcome. Then proceed to Part 2.

---

## Part 2 — Architecture Decisions

Before assessing execution patterns, gather the information needed to make platform-aware recommendations. Ask these questions one at a time, waiting for each answer before asking the next:

1. **Platform** — Which AI platform will this run on? (Let me name my tool — do not present a fixed list of platforms.)
2. **Deployment surface** — How will I access it — web browser, desktop app, or command-line tool?
3. **Code comfort** — Am I comfortable with code, or no-code only?
4. **Tool integrations** — What external tools or services does this workflow connect to?
   After my answer: **use web search** to research current integration options for my platform. Categorize each as:
   - Native/zero-config (built into the platform)
   - MCP or connector available (requires setup)
   - API integration possible (requires code/configuration)
   - Manual only (export/paste)
   Surface the mapping to me immediately.
5. **Shareability** — Will team members run this? What's their technical comfort?
6. **Authenticated browser access** — Does any step require logging into a website through a browser?
7. **Scheduled execution** — Does it need to run on a schedule without human triggering?
8. **Data sensitivity** — Does it handle PII, financial, or regulated data?

After all 8 questions: summarize as Architecture Decisions with rationale for each. Ask me to confirm before proceeding.

Then review the Workflow Definition steps against the architecture decisions. Ask additional follow-up questions only where the answer would materially change a building block recommendation or surface a blocker. One at a time. Stop when no further questions are needed.

**Downstream propagation** — architecture decisions gate subsequent steps:
- No-code + no native connectors → cap at Skill-Powered Prompt
- Scheduled execution + deployment surface doesn't support unattended runs → flag infrastructure needed (research options via web search)
- Authenticated browser access → flag browser automation requirement
- Data sensitivity → note compliance considerations

---

## Part 3 — Execution Pattern Assessment

Assess the overall workflow against the execution pattern spectrum:

| Pattern | Description | Signals |
|---------|-------------|---------|
| **Prompt** | Single structured prompt with step-by-step instructions, all logic inline | Sequential steps, human provides inputs and makes decisions |
| **Skill-Powered Prompt** | Prompt that invokes reusable skills for complex sub-routines | Repeatable sub-routines, moderate complexity, steps that recur across workflows |
| **Single Agent** | One agent with tool access, capable of autonomous decisions | Tool use required, autonomous decisions, multi-step reasoning |
| **Multi-Agent** | Specialized agents coordinating in a pipeline | Multiple expertise domains, parallel execution, review gates |

Work through five decision questions:
1. Does the workflow require tool use? (web, files, APIs)
2. Does it require autonomous decision-making?
3. Are there steps with complex, reusable logic? → skill candidates
4. Does it span multiple expertise domains?
5. Would it benefit from parallel execution or review gates?

Present your recommended execution pattern with reasoning. State which architecture decisions influenced the recommendation.

**Interaction Mode** — After recommending the pattern, determine the interaction mode based on architecture decisions:

| Mode | Description | Determined by |
|------|-------------|---------------|
| **Interactive** | Human and AI collaborate in real-time. AI pauses for input, review, and decisions at marked steps. | Web/desktop deployment, no scheduled execution |
| **Autonomous** | AI executes end-to-end without human involvement during the run. | Scheduled/unattended execution, CLI |
| **Hybrid** | Some steps run autonomously, others pause for human interaction. | Mix of automated and review steps |

Present the recommended interaction mode with reasoning tied to the architecture decisions. Ask if I agree with both the pattern and the interaction mode before proceeding.

---

## Part 4 — AI Building Block Mapping

For each refined step from the Workflow Definition, determine:

1. **Autonomy classification** — Classify each step on the autonomy spectrum:
   - **Human step** — Requires human judgment, creativity, or physical action; AI cannot perform this
   - **AI step (deterministic)** — Repeatable with clear rules; AI can execute reliably with minimal supervision
   - **AI step (semi-autonomous)** — AI handles most of the work but needs human review at key checkpoints
   - **AI step (fully autonomous / agentic)** — AI executes end-to-end, including decisions and tool use, with no human in the loop

2. **AI building block** — Map each AI-assisted step to one or more of these seven building blocks:
   - **Model** — The AI engine for this step; choose based on the step's requirements (speed, reasoning depth, multimodal)
   - **Prompt** — A well-crafted instruction that tells the model what to do for this step
   - **Context** — Background information, reference documents, examples, or data the model needs to perform the step well
   - **Skill** — A reusable routine the model can invoke — give it inputs, it follows a defined process, it produces consistent outputs
   - **Agent** — An autonomous AI that plans, uses tools, and executes multi-step work with minimal supervision
   - **MCP (Model Context Protocol)** — A connector that gives the model access to external tools, APIs, databases, or services
   - **Project** — A persistent workspace that groups prompts, context, skills, and agents for a specific workflow

3. **Tools and connectors** — What external tools, APIs, or integrations does this step need? (Populated from the integration mapping in Architecture Decisions; manual-only integrations cap the step at Semi-Autonomous.)

4. **Human-in-the-loop gates** — Flag any steps where human review is recommended before the workflow continues, even if the step is AI-executed.

5. **Skill candidate flag** — Tag steps that should become skills. For each skill candidate, note: purpose, inputs, outputs, decision logic, and failure modes — enough detail for a skill to be built from this description alone.

Present the mapping as a clear table, then walk me through your reasoning for any non-obvious classifications. Ask if I want to adjust anything before proceeding.

---

## Part 5 — Agent Configuration (if applicable)

If the recommended execution pattern is Single Agent or Multi-Agent, document the agent configuration.

For each agent the workflow needs, specify:

| Component | What to specify |
|-----------|----------------|
| **Name** | Unique agent name |
| **Description** | Agent purpose and when it should be used |
| **Instructions** | Mission, responsibilities, behavior, goals, tone & style, output format |
| **Model** | Recommended model capability (reasoning-heavy, fast, etc.) |
| **Tools** | Tools the agent can call (MCP servers, file access, web, APIs) |

Plus: **Context** requirements (data, files, knowledge base) and **Goal** (trigger/invocation pattern).

For multi-agent workflows, also document:
- **Orchestration pattern** (supervisor, pipeline, parallel)
- **Agent handoffs** (what each agent passes to the next)
- **Human review gates** (where a human reviews before proceeding)

This configuration is platform-agnostic — it serves as a blueprint for any AI platform.

Present the agent configuration and ask for my review before generating the final output. If the execution pattern is Prompt or Skill-Powered Prompt, skip this part.

---

## Part 6 — Generate AI Building Block Spec

After I confirm the mapping (and agent configuration, if applicable), produce the complete **AI Building Block Spec** as a Markdown file.

**File naming:** Name the file `[workflow-name]-building-block-spec.md` using the same workflow name from the Workflow Definition (e.g., `lead-qualification-building-block-spec.md`).

Generate the AI Building Block Spec as a downloadable Markdown file. If your platform doesn't support file downloads, format it inside a single Markdown code block so I can copy and save it manually.

### Execution Pattern
- Recommended pattern (Prompt / Skill-Powered Prompt / Single Agent / Multi-Agent)
- Interaction mode (Interactive / Autonomous / Hybrid)
- Reasoning (including which architecture decisions influenced the recommendation)

### Scenario Summary
- Workflow name (from Workflow Definition)
- Description
- Workflow outcome
- Trigger
- Type
- Business objective
- Current owner(s)

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Platform | | |
| Deployment surface | | |
| Code comfort | | |
| Interaction mode | | |
| Scheduled execution | | |
| Authenticated browser access | | |
| Data sensitivity | | |
| Team shareability | | |

**Integration Mapping**

| Integration needed | Connector type | Setup complexity | Notes |
|--------------------|---------------|-----------------|-------|

**Constraints Summary**
[How these decisions shaped the execution pattern and building block recommendations]

### Step-by-Step Decomposition Table

| # | Step | Action | Type | Decision Points | Failure Mode | Data In | Data Out | Context Needed | AI Building Block(s) | Skill Candidate? |
|---|------|--------|------|----------------|-------------|---------|----------|----------------|---------------------|-----------------|
| 1 | [Name] | [What happens] | Human / AI-Deterministic / AI-Semi-Autonomous / AI-Autonomous | [If/then logic] | [What happens on failure] | [Inputs] | [Outputs] | [Knowledge required] | [Prompt / Context / Skill / Agent / MCP / Project] | Yes/No |

### Autonomy Spectrum Summary
- List of fully human steps
- List of deterministic AI steps
- List of semi-autonomous AI steps (with review gates noted)
- List of fully autonomous AI steps

### Skill Candidates

For each step tagged as a skill candidate:

| Step | Skill Purpose | Inputs | Outputs | Decision Logic | Failure Modes |
|------|--------------|--------|---------|---------------|---------------|

### Agent Configuration (if applicable)

For each agent:
- Name, Description, Instructions summary, Model recommendation, Tools list
- Context requirements, Goal/trigger

For multi-agent: orchestration pattern, handoff protocol, human review gates.

### Step Sequence and Dependencies
- Which steps are sequential (must happen in order)?
- Which steps can run in parallel?
- What is the critical path through the workflow?
- Step dependency map

### Prerequisites
- What must be in place before this workflow can run?
- External dependencies (accounts, access, data sources)

### Context Inventory

List every piece of context the workflow requires that the model does not have in its training data:

| Artifact | Description | Used By Steps | Status | Format | Key Contents |
|----------|-------------|---------------|--------|--------|--------------|
| [Name] | [What it contains and why the workflow needs it] | [Step numbers] | Exists / Needs Creation | [e.g., Markdown doc, spreadsheet, CSV, PDF] | [Essential fields, sections, or data points it should include] |

If an artifact needs to be created, the "Key Contents" column should be specific enough that the user knows exactly what to build.

### Tools and Connectors Required
- All external tools, APIs, and integrations referenced in the mapping

### Recommended Implementation Order
Prioritize the AI-eligible steps into a build sequence:
1. **Quick wins** — Deterministic steps with clear inputs/outputs that can be automated with a Prompt or Context alone. Start here.
2. **High-value semi-autonomous steps** — Steps where AI does most of the work but needs a human review gate. Build these next.
3. **Complex agent steps** — Fully autonomous steps requiring Agents, MCP connectors, or multi-tool orchestration. Tackle these last.

For each priority tier, list the specific steps and what needs to be built.

### Where to Run

Recommend where the workflow should be run:

**Normal chat** — recommended when:
- The workflow runs infrequently (monthly or less)
- Few or no context files are needed (0-2 files)
- All context can be provided inline each time
- The workflow is a one-off or experimental process

**Project workspace** — recommended when:
- The workflow runs frequently (weekly or more)
- Multiple context files are needed (3+ files)
- The same reference materials are used every run
- Conversation memory across runs would be valuable
- Multiple people will run the same workflow

State the recommendation, the reasoning, and list the specific context files to attach (chat) or pre-load in the project.

---

After presenting the AI Building Block Spec, tell me:

> **Next step:** Download (or copy and save) the AI Building Block Spec file. Then go to [Step 3 — Build Workflows](https://handsonai.info/business-first-ai-framework/build/) to construct your workflow — the Build overview page will show you exactly which steps to follow based on your execution pattern.

---

## General Instructions

- If the Workflow Definition is missing information needed for classification, ask me to clarify before guessing.
- Use web search to research the user's chosen platform's current tools, APIs, and conventions when answering architecture questions and generating recommendations.
- Explain your reasoning for any non-obvious classifications.
- Use plain language. Avoid jargon unless I introduced it.
```

## What This Produces

The **AI Building Block Spec** contains:

- **Execution pattern** — Prompt, Skill-Powered Prompt, Single Agent, or Multi-Agent, with interaction mode and reasoning
- **Architecture decisions** — platform, deployment surface, code comfort, integrations (with connector mapping), shareability, browser access, scheduling, data sensitivity — each with rationale and a constraints summary showing how they shaped the recommendations
- **Scenario summary** — workflow metadata from the Workflow Definition
- **Decomposition table** — every step with autonomy classification, decision points, failure modes, data flows, context needs, AI building block mapping, and skill candidate flags
- **Autonomy spectrum summary** — steps grouped by classification level
- **Skill candidates** — steps tagged for skill creation, with generation-ready detail (purpose, inputs, outputs, decision logic, failure modes)
- **Agent configuration** (when applicable) — platform-agnostic blueprint for each agent with all five core components plus context and goal
- **Step sequence and dependencies** — sequential vs. parallel execution paths
- **Prerequisites** — what must be in place before the workflow can run
- **Context inventory** — every piece of context the workflow needs, with status and key contents
- **Tools and connectors** — external integrations required
- **Implementation order** — quick wins → semi-autonomous → complex agent steps

This AI Building Block Spec is the input for the [Construct phase](index.md), where the model generates platform-appropriate artifacts (prompts, skills, agents, connectors) based on your execution pattern and architecture decisions.
