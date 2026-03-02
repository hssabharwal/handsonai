---
name: building-workflows
description: >
  This skill should be used when the user has a Workflow Definition and wants to design and build
  an AI workflow. Step 3.1 (Design) gathers architecture decisions, assesses workflow autonomy level,
  chooses an orchestration mechanism and involvement mode, classifies steps, maps building blocks,
  identifies skill candidates, configures agents, and produces a Building Block Spec for approval.
  Step 3.2 (Construct) generates platform artifacts after approval. Step 3.3 (Run) provides a run
  guide for deploying, executing, and testing the workflow. This is Step 3 of the Business-First AI Framework.
user-invocable: true
---

# Workflow Build

Take a Workflow Definition and produce the Build deliverables: an AI Building Block Spec (Design), platform artifacts (Construct), and a Run Guide for deployment and testing.

**Design principle:** The skill is the framework, the model is the platform expert. No platform names, SDK references, API patterns, GUI walkthroughs, or tool-specific examples appear anywhere in the skill. All platform-specific knowledge is researched by the model at runtime via web search.

**Role:** You are an **Agentic AI Architect**. Your role is to design solutions that map business workflows to AI building blocks (Prompts, Context, Skills, Agents, MCP, Projects). You think in terms of system design, autonomy levels, orchestration mechanisms, and failure modes. Carry this framing through all of Step 3.

## Workflow

### 3.1 — Design

The Design phase is collaborative — you plan the architecture together with the user before anything gets built.

**Plan Mode Prompt:** At the start of Design, prompt the user:

> "The Design phase is collaborative — we plan the architecture together before anything gets built. **Enter plan mode now** if your platform supports it (in Claude Code: `shift+tab` or `/plan`). This ensures we focus on design without accidentally generating artifacts. If plan mode isn't available, I'll collaborate through conversation — proposing, you reacting, iterating until you approve."

This is directive, not optional — plan mode is the preferred path for design collaboration.

#### Step 1 — Load Workflow Definition

Read the Workflow Definition from `outputs/[workflow-name]-definition.md`. If the user specifies a file path, use that. Otherwise, look for the most recent Workflow Definition in `outputs/`.

#### Step 2 — Confirm Understanding

Summarize the workflow name, step count, and outcome. Ask the user to confirm before proceeding.

#### Step 3 — Architecture Decisions

Before assessing autonomy and orchestration, gather the information needed to make platform-aware recommendations. The approach: **one question, then extract everything else from the Workflow Definition.**

**a. One question: Platform**

Platform is the only thing not already in the Workflow Definition. Determine the user's AI platform:
- If stated in conversation or definition, confirm: "You mentioned [platform] — is that still correct?"
- If not stated, ask. Let the user name their tool — do not present a fixed list.

Accept whatever level of specificity the user provides — "Claude Code", "Google Gemini", "ChatGPT", "Claude" are all fine. Do NOT try to disambiguate to a specific offering upfront. Instead:
- **For Design:** The ecosystem (Claude, Google, OpenAI, M365) is enough for pattern selection. Code-vs-nocode is inferred if the tool is specific (Claude Code = code, ChatGPT = no-code) or left open if vague.
- **For Orchestration Mechanism:** The recommendation is driven by workflow characteristics first (tool use? autonomous decisions? multiple domains?). If the recommended mechanism requires capabilities the named platform might or might not support (e.g., recommending an agent when "Google Gemini" could mean the web app or ADK), ask a **motivated follow-up** in context.
- **For Construct:** The specific offering (Claude Code vs. Claude.ai, ADK vs. Gemini web) is resolved when generating artifacts in Step 15 — not during Design.

**b. Extract everything else from the Workflow Definition**

After confirming the platform, read the Workflow Definition and extract:

- **Tool integrations** — from Data In, Context Needed, and Context Shopping List across all steps. Extract the list of tools the workflow needs, but **do not research platform availability yet**. That happens in Construct (Step 14). Simply list the tools identified.

- **Trigger/schedule** — from Scenario Metadata. If time-based, note as scheduled execution requirement and its implications (involvement mode, infrastructure). If manual, no action needed.

- **Browser access** — deferred to Construct. If any step's Data In references a web portal, CRM login, or authenticated website, flag it during step classification (Step 6) as a "requires browser access" note on that step. Do not ask about it here.

- **Shareability** — deferred to Construct. The model asks about team sharing when generating artifacts in Step 15, not during Design.

**c. Present architecture analysis for confirmation**

Present a single confirmation block:

> "Here's what I found in your Workflow Definition:
> - **Platform:** [confirmed platform]
> - **Tools needed:** [extracted list]
> - **Trigger:** [extracted trigger] → [implications for involvement mode]
> - [Any flags: e.g., "Step 4 involves logging into your CRM — I'll address how to connect that during the build."]
>
> Integration availability on [platform] will be researched during the Construct phase.
>
> Anything I missed or got wrong?"

**d. Downstream propagation — architecture decisions gate subsequent steps:**
- No-code platform + no built-in connectors → cap at Skill-Powered Prompt
- Scheduled trigger + platform doesn't support unattended runs → flag infrastructure needed
- State which extracted facts influenced the autonomy assessment and orchestration mechanism recommendation

#### Step 4 — Autonomy Assessment

Before choosing an orchestration mechanism, assess where the *whole workflow* sits on the autonomy spectrum. This is the same spectrum used for per-step classification (Step 6), applied at the workflow level.

**The autonomy spectrum:**

```
Deterministic ———————— Guided ———————— Autonomous
(fixed path)       (bounded decisions)     (context-driven path)
```

| Level | Signals | Orchestration implications |
|-------|---------|--------------------------|
| **Deterministic** | Steps always execute in the same order, no branching on output quality, failure = stop or retry same step | Prompt or skill-powered prompt likely sufficient |
| **Guided** | Some steps involve bounded AI judgment, human steers at checkpoints, sequence is mostly fixed but with bounded flexibility | Skill-powered prompt or agent |
| **Autonomous** | Executor backtracks, re-invokes based on feedback, adjusts approach on failure, human checkpoints can redirect flow | Agent required |

**Present as a confident assessment:** "This workflow is **[level]** because [1-2 sentence reasoning]." If the user disagrees, discuss and adjust.

#### Step 5 — Orchestration Mechanism

Based on the autonomy assessment and architecture decisions, recommend who drives the workflow and how humans are involved. Analyze internally and present a confident recommendation — do NOT walk through decision questions.

**Orchestration mechanism (who drives the workflow):**

| Mechanism | Description | Signals |
|-----------|-------------|---------|
| **Prompt** | Human follows structured instructions step by step, all logic inline | Sequential steps, human provides inputs and makes decisions |
| **Skill-Powered Prompt** | Human invokes reusable skills in a defined sequence | Repeatable sub-routines, moderate complexity, steps that recur across workflows |
| **Agent** | Agent orchestrates the flow, invoking skills and making sequencing decisions | Tool use required, autonomous decisions, multi-step reasoning |

Single-agent vs. multi-agent is an architecture detail decided during Agent Configuration (Step 8) if "Agent" is selected — not a top-level choice here.

**Human Involvement** — Determine the involvement mode from architecture decisions and include it in the recommendation:

| Mode | Description | Determined by |
|------|-------------|---------------|
| **Augmented** | Human is in the loop — reviews, steers, or decides at key points during the run. | Web/desktop deployment, no scheduled execution |
| **Automated** | AI runs solo — executes end-to-end without human involvement during the run. | Scheduled/unattended execution, CLI |

**Platform sub-choice for agent mechanism:** When the orchestration mechanism is Agent, the platform choice determines the implementation path. Some platforms have multiple agent offerings (e.g., Claude Code has sub-agents via markdown files vs. Claude Agent SDK in TypeScript/Python). If the platform has multiple agent offerings, ask the user which offering they want to use — this determines whether the Construct phase generates markdown files, Python code, TypeScript code, or GUI configuration steps. For non-agent mechanisms (Prompt, Skill-Powered Prompt), no sub-choice is needed — artifacts are always markdown files.

**Present as a confident recommendation:** "Based on your workflow's **[autonomy level]** autonomy and [key architecture signals], I recommend **[mechanism]** with **[involvement mode]** because [2-3 sentence reasoning]." If the user pushes back, explain alternatives and discuss.

Ask the user to confirm the mechanism, involvement mode, and platform sub-choice (if applicable).

**Fast-track for complete definitions:** If the Workflow Definition + conversation context provide enough information to resolve ALL architecture dimensions, the autonomy level, AND the orchestration mechanism, present the entire Design analysis as a single confirmation block instead of stepping through questions one at a time:

> "Based on your workflow definition, here's my design analysis:
> - **Platform:** [platform] ([surface])
> - **Autonomy level:** [level] — [brief rationale]
> - **Orchestration mechanism:** [mechanism] ([involvement mode])
> - **Tools needed:** [list — availability to be researched during Construct]
> - **Steps classified:** [summary table]
> - **Skill candidates:** [list]
> - **Agent blueprints:** [summary]
>
> Does this look right, or would you like to adjust anything?"

Only drop into the question-by-question flow when genuinely missing information.

#### Step 6 — Classify Each Step

For every refined step, determine:
- **Autonomy level**: Human / Deterministic / Guided / Autonomous
- **AI building block(s)**: Prompt, Context, Skill, Agent, MCP, Project
- **Tools and connectors**: External tools, APIs, integrations needed (populated from the tool list in Architecture Decisions; integration availability is deferred to Construct)
- **Human-in-the-loop gates**: Where human review is recommended

Present the mapping as a clear table. Walk through reasoning for non-obvious classifications. Ask if the user wants to adjust anything.

#### Step 7 — Identify Skill Candidates

Tag steps that should become skills. For each skill candidate, document:
- Purpose (one sentence)
- Inputs (what data the skill receives)
- Outputs (what the skill produces)
- Decision logic (key rules, criteria, frameworks)
- Failure modes (what happens when inputs are missing or unexpected)

#### Step 8 — Agent Configuration

(When orchestration mechanism is Agent.) For each agent the workflow needs, document:

| Component | What to specify |
|-----------|----------------|
| **Name** | Unique agent name |
| **Description** | Agent purpose and when it should be used |
| **Instructions** | Mission, responsibilities, behavior, goals, tone & style, output format |
| **Model** | Recommended model capability (reasoning-heavy, fast, etc.) |
| **Tools** | Tools the agent can call (MCP servers, file access, web, APIs) |

Plus: Context requirements and Goal (trigger/invocation pattern).
For multi-agent: orchestration pattern, agent handoffs, human review gates.

#### Step 9 — Generate AI Building Block Spec

Write to `outputs/[workflow-name]-building-block-spec.md`. Includes:
- Autonomy level assessment (workflow-level, with rationale)
- Orchestration mechanism recommendation (with involvement mode)
- Architecture Decisions (with rationale and constraints summary)
- Step-by-step decomposition table with per-step autonomy levels and building blocks
- Autonomy spectrum summary
- Skill candidate section with generation-ready detail
- Agent configuration section (when agent-based)
- Step sequence and dependencies
- Prerequisites
- Context inventory
- Tools and connectors required (list only — availability deferred)
- **Integration Research Needed** — a section listing every tool/integration that requires platform availability research during Construct. For each: tool name, what it's used for, which steps depend on it.
- **Model recommendation** — Recommend the model class best suited for this workflow. Consider the complexity of reasoning required, whether speed or depth matters more, and cost sensitivity. Present as a recommendation with rationale (e.g., "A reasoning-heavy model for the research steps, a fast model for the formatting steps"). This applies to all patterns, not just agent-based ones — even a Prompt pattern benefits from knowing whether to use a reasoning model or a fast one.
- Recommended implementation order (quick wins → semi-autonomous → complex agent steps)
- Where to Run recommendation

#### Step 10 — Spec Approval Gate

**This is a hard gate. Do not proceed without explicit approval.**

Present a summary of the Building Block Spec:

> "Here's the Building Block Spec summary:
>
> - **Autonomy:** [level]
> - **Mechanism:** [orchestration mechanism] ([involvement mode])
> - **Steps:** [count] steps, [count] skill candidates, [count] agents
> - **Integration research needed:** [count] tools to verify during Construct
> - **Implementation order:** [brief summary]
>
> The full spec is saved to `outputs/[workflow-name]-building-block-spec.md`.
>
> **Do you approve this spec?** I won't generate any artifacts until you confirm. If you want changes, tell me what to adjust and I'll revise."

Loop if the user requests changes — revise the spec and re-present for approval.

After the user approves, instruct them to **exit plan mode** if they entered it at the start of Design:

> "Spec approved. **Exit plan mode now** (in Claude Code: `shift+tab` or `/plan`) so I can generate artifacts in the Construct phase."

### 3.2 — Construct

Artifact generation begins only after spec approval.

#### Step 11 — Build Path Choice

After approval, offer two paths:

> "How would you like to proceed?
>
> 1. **I'll build it** — I generate all artifacts (skills, agents, prompts, configs) based on the approved spec.
> 2. **I'll build it myself** — The spec is your deliverable. I'll provide a Construction Guide with build sequence and platform-specific format guidance instead of generating artifacts."

If the user chooses path 2, skip Steps 12-16 and go directly to Step 17 (Run) with the manual-build variant.

#### Step 12 — Mechanism-Specific Build Path

Based on the orchestration mechanism, present ONLY the steps relevant to the user's mechanism:

**Prompt mechanism:**
1. Create context (from Context Inventory)
2. Set up project workspace (if frequent use)
3. Generate platform artifacts
4. → Run Guide

**Skill-Powered Prompt mechanism:**
1. Create context (from Context Inventory)
2. Set up project workspace (if frequent use)
3. Build skills for tagged candidates
4. Generate platform artifacts
5. → Run Guide

**Agent mechanism:**
1. Create context (from Context Inventory)
2. Build skills for tagged candidates
3. Connect external tools (from Tools and Connectors section)
4. Generate platform artifacts (agent config, skills, connectors)
5. → Run Guide

#### Step 13 — Check for Existing Skills and Instructions

Before generating artifacts:
- Ask: "Did you build any skills for this workflow? If yes, list each skill name and which steps it covers."
- Check the Context Inventory for existing prompt instructions, project instructions, or system prompts. These must be incorporated into the generated artifacts.

#### Step 14 — Integration Research

Now that the spec is approved, research platform availability for every tool listed in the "Integration Research Needed" section of the spec.

**Use web search** to determine availability on the user's platform. Categorize in plain language:
- Built-in (works out of the box)
- Available with setup (MCP server, connector, or plugin exists)
- Possible with code (API integration required)
- Manual (copy-paste between tools)

**Web search is required** — if the environment doesn't support it, instruct the user to switch to a tool that does.

Present the integration mapping and ask the user to confirm before generating artifacts. If any critical integration is manual-only, discuss implications for the orchestration mechanism (may need to downgrade or add human-in-the-loop steps).

#### Step 15 — Generate Platform Artifacts

Based on the platform from Architecture Decisions. Resolve any deferred decisions now: ask about **shareability** (will team members run this?) to determine artifact format (file-based vs. code-based), and resolve the **specific platform offering** if not yet determined (e.g., Claude Code vs. Claude.ai). Infer **code comfort** from the specific offering (Claude Code = code-comfortable, ChatGPT = no-code).

**a. Start with the cookbook's platform reference.** Read the Hands-on AI Cookbook platform guide for the user's platform to find curated links to official documentation:

| User's platform | Cookbook reference page |
|---|---|
| Claude | `docs/platforms/claude/index.md` (and `docs/platforms/claude/agents/building-agents.md` for agents) |
| OpenAI | `docs/platforms/openai/index.md` (and `docs/platforms/openai/agents/building-agents.md` for agents) |
| Google Gemini | `docs/platforms/google-gemini/index.md` (and `docs/platforms/google-gemini/agents/building-agents.md` for agents) |
| M365 Copilot | `docs/platforms/m365-copilot/index.md` (and `docs/platforms/m365-copilot/agents/building-agents.md` for agents) |

These pages contain links to the platform's official documentation, SDK references, and setup guides — maintained as part of the cookbook.

**b. Verify currency via web search.** Use web search to confirm the documentation links are still current and to find any newer resources. Verify what's current vs. deprecated.

**c. Follow reference specs for artifact format.** When generating artifacts, use the correct format for the target platform:

- **When generating skills:** Read `references/skill-spec.md` and follow the agentskills.io format — proper YAML frontmatter with `name` and `description`, structured markdown body with Workflow, Outputs, and Guidelines sections.
- **When generating agents for Claude Code:** Read `references/agent-spec.md` and follow the Claude Code subagent format — YAML frontmatter with `name`, `description` (including examples), `model`, and markdown body with role statement, process, and constraints.

**d. Generate artifacts.** Using the verified documentation as the authoritative source, generate artifacts in the platform's latest recommended tools and patterns. The skill provides the *specs* (what each building block should do, its inputs/outputs/instructions from the Design phase). The model provides the *implementation* (how to build it on the user's platform, researched and verified at runtime).

#### Step 16 — Write SOP to Notion (if available)

After artifacts are generated, check if the Notion MCP server is accessible AND this workflow was registered during the Deconstruct step. If so, offer to write the workflow SOP to the Notion page.

### 3.3 — Run

#### Step 17 — Run Guide

Generate the Run Guide based on the build path chosen in Step 11.

**Variant A: Model-built artifacts (Step 11 path 1)**

Walk the user through getting the workflow running. Use the platform and code comfort (resolved during artifact generation) to tailor every instruction to their specific setup. Use web search to verify current platform steps. Write in plain language — assume no technical background unless code comfort was confirmed.

The Run Guide covers four sections:

**A. What was built** — List every artifact produced, what it does, and where it was saved. Use a simple table:

| Artifact | What it does | Location |
|----------|-------------|----------|

**B. Setup steps** — Numbered, platform-specific instructions for getting each artifact into the right place. Research the platform's current UI/workflow via web search. For each step:
- Tell the user exactly where to go (menu paths, button names, URLs)
- Tell them exactly what to do (paste, upload, configure, connect)
- Tell them what they should see when it's working (confirmation messages, visual indicators)
- If a step requires technical knowledge beyond the user's code comfort level, flag it and offer to walk through it interactively

**C. First run** — A guided test run:
- Provide a sample input the user can try (based on the workflow's Input Requirements from the spec)
- Walk through what should happen at each step
- Explain what good output looks like
- List common first-run issues and how to fix them

**D. What to do next** — Brief guidance on:
- How to run the workflow again in the future (the repeatable trigger)
- How to share it with team members (if shareability was confirmed during Construct)
- When to revisit and improve (signs the workflow needs updating)

**Variant B: Manual build (Step 11 path 2)**

Provide a Construction Guide instead of setup instructions. The user will build the artifacts themselves.

**A. What to build** — List every artifact from the spec, what it does, and the recommended file format for the user's platform. Use a table:

| Artifact | Purpose | Format | Priority |
|----------|---------|--------|----------|

**B. Build sequence** — Ordered implementation steps following the spec's recommended implementation order. For each artifact:
- What to create (from the spec's generation-ready detail)
- Platform-specific format guidance (file type, frontmatter requirements, directory conventions)
- Key content to include (inputs, outputs, decision logic from the spec)
- How to test it in isolation before connecting to other artifacts

**C. First run** — Same as Variant A: guided test run with sample input.

**D. What to do next** — Same as Variant A: repeatable trigger, sharing, iteration guidance.

Present the Run Guide directly in the conversation. Also save it to `outputs/[workflow-name]-run-guide.md` so the user has a reference they can follow later or share with teammates.

## Outputs

### `outputs/[workflow-name]-building-block-spec.md` — AI Building Block Spec (Design)

Includes:
- Autonomy level assessment (workflow-level, with rationale)
- Orchestration mechanism recommendation with reasoning and involvement mode
- Architecture Decisions (with rationale and constraints summary)
- Scenario summary (workflow metadata)
- Step-by-step decomposition table (per-step autonomy level, building blocks, skill candidate flag)
- Autonomy spectrum summary
- Skill candidates (with generation-ready detail)
- Agent configuration (when applicable)
- Step sequence and dependencies
- Prerequisites
- Context inventory
- Tools and connectors required (list only)
- Integration Research Needed (tools requiring platform availability verification)
- Model recommendation (reasoning-heavy vs fast, with rationale)
- Recommended implementation order
- Where to Run recommendation

### Platform Artifacts (Construct)

Prompts, skills, agents, orchestration configs, and connector setups in whatever format is appropriate to the user's chosen platform. Generated by the model based on the Building Block Spec and Architecture Decisions, using web search to determine the current recommended approach. Skills follow the agentskills.io format (see `references/skill-spec.md`). Agents for Claude Code follow the subagent format (see `references/agent-spec.md`).

### `outputs/[workflow-name]-run-guide.md` — Run Guide

Plain-language guide for getting the workflow running. Two variants:
- **Model-built:** Artifact inventory, step-by-step setup instructions tailored to the user's platform, a guided first-run test with sample input, and next steps for ongoing use and team sharing.
- **Manual build:** Construction Guide with artifact list, build sequence with platform-specific format guidance, first-run test, and next steps.

## Guidelines

- Use plain language; avoid jargon unless the user introduced it
- After writing the Design output, tell the user: "AI Building Block Spec saved to `outputs/[name]-building-block-spec.md`."
- After generating platform artifacts, summarize what was produced and where each artifact was saved
- Summarize all deliverables at the end so the user has a clear inventory
- Do not proceed past the Spec Approval Gate (Step 10) without explicit user approval
- Do not research integration availability until Construct (Step 14)
