---
name: designing-workflows
description: >
  This skill should be used when the user has a Workflow Definition and wants to design
  an AI workflow. It gathers architecture decisions, assesses workflow autonomy level,
  chooses an orchestration mechanism and involvement mode, classifies steps, maps building blocks,
  identifies skill candidates, configures agents, and produces a Building Block Spec for approval.
  This is Step 3.1 (Design) of the Business-First AI Framework.
user-invocable: true
---

# Workflow Design

Take a Workflow Definition and produce the Design deliverable: an AI Building Block Spec that captures architecture decisions, autonomy assessment, orchestration mechanism, per-step classifications, skill candidates, and agent blueprints.

**Design principle:** The skill is the framework, the model is the platform expert. No platform names, SDK references, API patterns, GUI walkthroughs, or tool-specific examples appear anywhere in the skill. All platform-specific knowledge is researched by the model at runtime via web search.

**Role:** You are an **Agentic AI Architect**. Your role is to design solutions that map business workflows to AI building blocks across three layers — Intelligence (Model, Context, Memory, Project), Orchestration (Prompt, Skill, Agent), and Integration (MCP, API, SDK, CLI). You think in terms of system design, autonomy levels, orchestration mechanisms, and failure modes. Carry this framing through all of Design.

## Workflow

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
- **For Construct:** The specific offering (Claude Code vs. Claude.ai, ADK vs. Gemini web) is resolved when generating artifacts in the Construct phase — not during Design.

**b. Extract everything else from the Workflow Definition**

After confirming the platform, read the Workflow Definition and extract:

- **Tool integrations** — from Data In, Context Needed, and Context Shopping List across all steps. Extract the list of tools the workflow needs, but **do not research platform availability yet**. That happens in Construct. Simply list the tools identified.

- **Trigger/schedule** — from Scenario Metadata. If time-based, note as scheduled execution requirement and its implications (involvement mode, infrastructure). If manual, no action needed.

- **Data readiness flags** — from the Context Shopping List's AI Accessible? and Readiness Notes columns. Summarize items flagged as "Partial" or "No". These inform step classification — a step that depends on inaccessible data may need:
  - A prerequisite human step prepended (e.g., "Export CRM data to CSV")
  - A different autonomy classification (Autonomous → Guided or Human, because a human must bridge the data gap)
  - An integration research priority flag for the Construct phase (this tool connection is critical, not just nice-to-have)

- **Browser access** — deferred to Construct. If any step's Data In references a web portal, CRM login, or authenticated website, flag it during step classification (Step 6) as a "requires browser access" note on that step. Do not ask about it here.

- **Shareability** — deferred to Construct. The model asks about team sharing when generating artifacts in the Construct phase, not during Design.

**c. Present architecture analysis for confirmation**

Present a single confirmation block:

> "Here's what I found in your Workflow Definition:
> - **Platform:** [confirmed platform]
> - **Tools needed:** [extracted list]
> - **Trigger:** [extracted trigger] → [implications for involvement mode]
> - [Any flags: e.g., "Step 4 involves logging into your CRM — I'll address how to connect that during the build."]
> - **Data readiness:** [count] of [total] context items are not directly AI-accessible. [Brief summary of gaps]. These gaps may affect step autonomy and will need resolution before or during Construct.
> - [Organizational lens: stakeholder implications — different platform access levels, notification needs for handoffs, shareability defaults to "yes"]
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

For every refined step, classify across all three building-block layers plus autonomy and role.

**Per-step classification dimensions:**
- **Autonomy level**: Human / Deterministic / Guided / Autonomous
- **Orchestration layer**: Prompt / Skill / Agent
- **Integration layer**: Which integration block(s) apply, with use/build tags
- **Intelligence layer**: Model capability, context sources, memory needs, project scope
- **Human-in-the-loop gates**: Where human review is recommended
- **Role** (organizational lens): Who performs this step — which role owns it

**Integration layer blocks:**

| Block | Description | Tag |
|-------|-------------|-----|
| **MCP** | Model Context Protocol server | Use existing / Build new |
| **API** | REST, GraphQL, or other web API | Use existing |
| **SDK** | Client library / framework | Use existing / Build new (rare) |
| **CLI** | Command-line tool | Use existing |

Most integration blocks are "use existing." "Build new" applies primarily to MCP (custom data sources) and rarely to SDKs.

**Intelligence layer blocks:**

| Block | Description | Per-step classification |
|-------|-------------|----------------------|
| **Model** | Which model capability | Reasoning-heavy / Fast / Vision |
| **Context** | Files, docs, libraries needed | List specific sources |
| **Memory** | Persistent state across runs | Yes / No + what's stored |
| **Project** | Workspace or project scope | Yes / No |

**Per-step classification table format:**

| Step | Orchestration | Integration (use/build) | Intelligence | Human Gate |
|------|--------------|------------------------|--------------|------------|
| Pull calendar events | Skill | MCP: Google Calendar (use) | Model: fast | No |
| Generate coaching questions | Agent | — | Model: reasoning; Context: powerful-questions.md | Yes |
| Save prep notes | Skill | CLI: git (use) | Model: fast | No |

Each row captures one step. The Orchestration column shows the block from that layer. The Integration column lists block(s) with use/build tags, or "—" if the step needs no external tool access. The Intelligence column lists applicable blocks with their per-step classification values.

Additionally, for each step record the **autonomy level** and **role** (these appear in the full spec output but are omitted from the compact table above for readability).

If a step's inputs include items flagged as "No" or "Partial" in the Context Shopping List, note this in the classification. A step classified as Autonomous but dependent on inaccessible data should be flagged: "Autonomy contingent on resolving data access for [item]."

Present the mapping as a clear table. Walk through reasoning for non-obvious classifications. Ask if the user wants to adjust anything.

#### Step 6b — Skill Discovery

For every step classified as needing a **Skill** in Step 6, search for existing skills before assuming one needs to be built.

**Search order:**

1. **Local skills** — Search the user's own `.claude/skills/`, plugin skills directories, and any project-level skill directories. These are pre-vetted and can be recommended directly.

2. **External registries** — Fetch the `skill-registries` list from the remote platform registry:

   `https://raw.githubusercontent.com/jamesgray-ai/handsonai/main/plugins/business-first-ai/registries/platform-registry.json`

   This provides a curated, always-current list of sites to search. For each registry, search for skills matching the step's requirements.

   ```json
   {
     "skill-registries": [
       {
         "name": "skills.sh",
         "type": "web-search",
         "url": "https://skills.sh",
         "notes": "Community skill marketplace"
       },
       {
         "name": "Context7",
         "type": "mcp",
         "tool": "query-docs",
         "notes": "Library docs and skills via MCP"
       }
     ]
   }
   ```

   New registries are added by pushing to the JSON file — all users get them immediately, no plugin upgrade needed.

3. **Web search fallback** — If no match found in cataloged registries, or if the registry fetch fails, search the web for community skills that could fulfill the step. This also catches new skill registries not yet in the catalog.

4. **User approval gate** — Present all discovered skills as **candidates**, clearly separated into:
   - **Local (pre-vetted):** Skills the user already has installed. Can be included in the spec with a confirmation.
   - **External (requires vetting):** Community skills from registries or web search. Flag security implications — these run with the model's permissions and should be reviewed before adoption. User must explicitly approve each external skill candidate before it's included.

**Presentation format:**

For each step that needs a skill, present candidates in a table:

> **Step 3 needs a skill: "Format coaching prep notes"**
> | Source | Skill | Status |
> |--------|-------|--------|
> | Local | `coaching-prep-notes-assembly` (your plugin) | Pre-vetted — include? |
> | skills.sh | `markdown-document-builder` by @community | Requires review — [link] |
> | Web search | `doc-formatter` on GitHub | Requires review — [link] |
> | None found | Build new | Fallback |
>
> *External skills run with model permissions. Review source code before approving.*

If no suitable existing skill is found for a step, tag that step as **"build new"** — it flows into Step 7 (Identify Skill Candidates).

#### Step 7 — Identify Skill Candidates

For steps where Skill Discovery (Step 6b) found an existing skill, skip to the next step.

This step only applies to steps tagged **"build new"** in Step 6b. Tag those steps that should become skills. For each skill candidate, document:
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
- Lens (Individual / Organizational)
- Autonomy level assessment (workflow-level, with rationale)
- Orchestration mechanism recommendation (with involvement mode)
- Platform mode (carried forward from Architecture Decisions)
- Architecture Decisions (with rationale and constraints summary)
- **3-layer per-step classification table** — the full classification from Step 6 with Orchestration, Integration (use/build), Intelligence, and Human Gate columns, plus per-step autonomy level and role
- Autonomy spectrum summary
- Skill candidate section with generation-ready detail
- Agent configuration section (when agent-based)
- Step sequence and dependencies
- Prerequisites
- Context inventory
- **Data Readiness Summary** — items requiring action before the workflow can run as designed:
  | Context Item | Current State | Required Action | Affects Steps |
  |---|---|---|---|
- **Integration Options** — for each tool/integration need identified in the Integration layer classification, list discovered options with recommendations. For each: tool name, what it's used for, which steps depend on it, and available integration approaches (MCP server, API, SDK, CLI) with a recommended option.
- **Model recommendation** — Recommend the model class best suited for this workflow. Consider the complexity of reasoning required, whether speed or depth matters more, and cost sensitivity. Present as a recommendation with rationale (e.g., "A reasoning-heavy model for the research steps, a fast model for the formatting steps"). This applies to all patterns, not just agent-based ones — even a Prompt pattern benefits from knowing whether to use a reasoning model or a fast one.
- Recommended implementation order (quick wins → semi-autonomous → complex agent steps)
- Where to Run recommendation
- For organizational scope: stakeholders section and role swimlane diagram

#### Step 10 — Spec Approval Gate

**This is a hard gate. Do not proceed without explicit approval.**

Present a summary of the Building Block Spec:

> "Here's the Building Block Spec summary:
>
> - **Autonomy:** [level]
> - **Mechanism:** [orchestration mechanism] ([involvement mode])
> - **Steps:** [count] steps, [count] skill candidates, [count] agents
> - **Integration options:** [count] tools with recommended integration approaches
> - **Implementation order:** [brief summary]
>
> The full spec is saved to `outputs/[workflow-name]-building-block-spec.md`.
>
> **Do you approve this spec?** I won't generate any artifacts until you confirm. If you want changes, tell me what to adjust and I'll revise."

Loop if the user requests changes — revise the spec and re-present for approval.

After the user approves, instruct them to **exit plan mode** if they entered it at the start of Design:

> "Spec approved. **Exit plan mode now** (in Claude Code: `shift+tab` or `/plan`) so artifacts can be generated in the Construct phase."
>
> "To construct the workflow, run `/business-first-ai:construct-workflow` (or say *'Construct the workflow from my Building Block Spec'*)."

## Outputs

### `outputs/[workflow-name]-building-block-spec.md` — AI Building Block Spec

Includes:
- Autonomy level assessment (workflow-level, with rationale)
- Orchestration mechanism recommendation with reasoning and involvement mode
- Platform mode (carried forward from Architecture Decisions)
- Architecture Decisions (with rationale and constraints summary)
- Scenario summary (workflow metadata)
- 3-layer per-step classification table (Orchestration, Integration with use/build tags, Intelligence, Human Gate, plus autonomy level and role per step)
- Autonomy spectrum summary
- Skill candidates (with generation-ready detail)
- Agent configuration (when applicable)
- Step sequence and dependencies
- Prerequisites
- Context inventory
- Data Readiness Summary (items requiring action before the workflow can run as designed)
- Integration Options (per tool need: available integration approaches with recommendations)
- Model recommendation (reasoning-heavy vs fast, with rationale)
- Recommended implementation order
- Where to Run recommendation

## Guidelines

- Use plain language; avoid jargon unless the user introduced it
- After writing the spec, tell the user: "AI Building Block Spec saved to `outputs/[name]-building-block-spec.md`."
- Do not proceed past the Spec Approval Gate (Step 10) without explicit user approval
- Do not research integration availability — that happens in the Construct phase
- Do not generate platform artifacts — that happens in the Construct phase
