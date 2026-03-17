---
name: constructing-workflows
description: >
  This skill should be used when the user has an approved AI Building Block Spec and wants to
  construct platform artifacts for their AI workflow. It offers a build path choice, researches
  integration availability, generates platform-appropriate artifacts (prompts, skills, agents, configs),
  and optionally writes the SOP to Notion. This is Step 3.2 (Construct) of the Business-First AI Framework.
user-invocable: true
---

# Workflow Construct

Take an approved AI Building Block Spec and generate platform-appropriate artifacts: prompts, skills, agents, configs, and connectors.

**Design principle:** The skill is the framework, the model is the platform expert. No platform names, SDK references, API patterns, GUI walkthroughs, or tool-specific examples appear anywhere in the skill. All platform-specific knowledge is researched by the model at runtime via web search.

**Role:** You are an **Agentic AI Architect**. Your role is to build solutions that map business workflows to AI building blocks (Prompts, Context, Skills, Agents, MCP, Projects). You think in terms of system design, artifact generation, and platform-specific implementation.

## Workflow

Artifact generation begins only after the AI Building Block Spec has been approved in the Design phase.

#### Step 1 — Load Building Block Spec

Read the AI Building Block Spec from `outputs/[workflow-name]-building-block-spec.md`. If the user specifies a file path, use that. Otherwise, look for the most recent Building Block Spec in `outputs/`.

Confirm you've loaded the spec by summarizing: workflow name, orchestration mechanism, involvement mode, number of steps, number of skill candidates, and number of agents.

#### Step 2 — Build Path Choice

Offer two paths:

> "How would you like to proceed?
>
> 1. **I'll build it** — I generate all artifacts (skills, agents, prompts, configs) based on the approved spec.
> 2. **I'll build it myself** — The spec is your deliverable. I'll provide a Construction Guide with build sequence and platform-specific format guidance instead of generating artifacts."

If the user chooses path 2:

1. Run Step 3.5 (Discover Available Creation Tools) to build the Creation Tools Map.
2. Generate a **Construction Guide** containing:
   - The build sequence from the spec (implementation order)
   - For each building block:
     - What to build (name, purpose, inputs/outputs from the spec)
     - The format specification to follow
     - **If a creation skill was matched:** "You have `[skill-name]` available. Invoke it (e.g., `/[skill-name]`) and pass the spec below as your starting context."
     - **If no creation skill matched:** The format reference and key requirements for manual creation
3. After presenting the Construction Guide, tell the user: "To generate the Run Guide, run `/business-first-ai:run-workflow`."

#### Step 3 — Mechanism-Specific Build Path

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

After presenting the mechanism-specific build path, proceed to Step 3.5 to discover available creation tools before generating any artifacts.

#### Step 3.5 — Discover Available Creation Tools

Before generating artifacts, discover what creation tools are available in this session. Skills are an open standard — they live in platform-specific directories but follow the same SKILL.md format everywhere.

1. **Extract building block types** from the loaded Building Block Spec — list each type and count (e.g., "3 skills, 1 agent, 1 MCP server config").

2. **Discover available creation skills** using two tiers:

   **Tier 1 — System-level discovery.** Check if the current environment provides a list of available skills (typically shown in system reminders, session context, or tool listings). If available, scan skill names and descriptions for any that indicate the ability to *create, generate, scaffold, or build* one of the needed building block types. Match semantically — look for descriptions containing phrases like "create a skill", "build an agent", "scaffold a plugin", "create hooks", "generate MCP servers", etc.

   **Tier 2 — Filesystem discovery (fallback).** If no system-level skill list is available, or if the list may be incomplete, scan the platform-appropriate skill directories for SKILL.md files. Read each file's YAML frontmatter (`name` and `description` fields) to identify creation-capable skills. Use the platform's skill directory:

   | Platform | Skill Directories |
   |----------|------------------|
   | Claude Code | `.claude/skills/` |
   | Cursor | `.cursor/skills/`, `.claude/skills/`, `.codex/skills/`, `.agents/skills/` |
   | Codex CLI | `.agents/skills/` |
   | Gemini CLI | `.gemini/skills/`, `.agents/skills/` |
   | VS Code Copilot | `.github/skills/`, `.agents/skills/` |
   | Cowork / Claude.ai | System-managed (Tier 1 only) |

   For the authoritative and up-to-date directory listing, read `docs/agentic-building-blocks/skills/index.md` (Platform Implementations table).

   If neither tier finds any skills (e.g., ChatGPT web, Gemini app), state: "No creation skills detected in this environment — all building blocks will be generated inline." Then proceed.

3. **Build a Creation Tools Map.** For each building block type needed by the spec, record the matched creation skill (if any) or "Inline generation" as the fallback:

   | Building Block Type | Count | Matched Creation Skill | Method |
   |---|---|---|---|
   | Skill | 3 | *(matched skill name or "none")* | Delegate / Inline |
   | Agent | 1 | *(matched skill name or "none")* | Delegate / Inline |

4. **Present the map for confirmation.** Show the user: "Here's how I plan to build each block type. For items with a matched creation skill, I'll delegate to that skill's full workflow. For items without, I'll generate inline using reference specifications. Does this look right?"

   Wait for user confirmation before proceeding.

#### Step 4 — Check for Existing Skills and Instructions

This is separate from Step 3.5's creation tool discovery — here you're checking for workflow skills that have already been built and should be incorporated, not for skills that create other skills.

Before generating artifacts:
- Ask: "Did you build any skills for this workflow? If yes, list each skill name and which steps it covers."
- Check the Context Inventory for existing prompt instructions, project instructions, or system prompts. These must be incorporated into the generated artifacts.

#### Step 5 — Integration Research

Now that the spec is approved, research platform availability for every tool listed in the "Integration Research Needed" section of the spec.

**Use web search** to determine availability on the user's platform. Categorize in plain language:
- Built-in (works out of the box)
- Available with setup (MCP server, connector, or plugin exists)
- Possible with code (API integration required)
- Manual (copy-paste between tools)

**Web search is required** — if the environment doesn't support it, instruct the user to switch to a tool that does.

Present the integration mapping and ask the user to confirm before generating artifacts. If any critical integration is manual-only, discuss implications for the orchestration mechanism (may need to downgrade or add human-in-the-loop steps).

#### Step 6 — Generate Platform Artifacts

Based on the platform from Architecture Decisions. Resolve any deferred decisions now: ask about **shareability** (will team members run this?) to determine artifact format (file-based vs. code-based), and resolve the **specific platform offering** if not yet determined (e.g., Claude Code vs. Claude.ai, ADK vs. Gemini web). Infer **code comfort** from the specific offering (Claude Code = code-comfortable, ChatGPT = no-code).

**a. Start with the cookbook's platform reference.** Read the Hands-on AI Cookbook platform guide for the user's platform to find curated links to official documentation:

| User's platform | Cookbook reference page |
|---|---|
| Claude | `docs/platforms/claude/index.md` (and `docs/platforms/claude/agents/building-agents.md` for agents) |
| OpenAI | `docs/platforms/openai/index.md` (and `docs/platforms/openai/agents/building-agents.md` for agents) |
| Google Gemini | `docs/platforms/google-gemini/index.md` (and `docs/platforms/google-gemini/agents/building-agents.md` for agents) |
| M365 Copilot | `docs/platforms/m365-copilot/index.md` (and `docs/platforms/m365-copilot/agents/building-agents.md` for agents) |

These pages contain links to the platform's official documentation, SDK references, and setup guides — maintained as part of the cookbook.

**b. Verify currency via web search.** Use web search to confirm the documentation links are still current and to find any newer resources. Verify what's current vs. deprecated.

**c. Follow the current artifact format specifications.** When generating skills or agents, use the authoritative specification for the artifact type — fetched live when possible, with a bundled reference as fallback.

- **For each building block in the spec**, follow the Creation Tools Map from Step 3.5:

  **If a creation skill was matched for this block type:**

  1. Invoke it via the Skill tool, passing:
     - The building block's full spec from the Building Block Spec (name, purpose, inputs, outputs, decision logic, failure modes, which workflow steps it covers)
     - The relevant format reference (e.g., the fetched agentskills.io specification for skills, `references/agent-spec.md` for Claude Code agents)
     - Whether platform-specific extensions should be applied (based on Architecture Decisions)
     - This context: "This building block spec comes from an approved AI Building Block Spec (Business-First AI Framework, Step 3.1 Design). The intent, inputs, outputs, decision logic, and failure modes are already defined. Use this as your starting context."
  2. Let the creation skill run its full workflow. Do not skip or abbreviate any stage.
  3. After completion, move to the next building block. Later blocks may reference earlier ones.

  **If no creation skill was matched (inline generation):**

  1. **For skills:** Fetch the agentskills.io specification (live from `https://agentskills.io/specification`, fallback to `references/skill-spec.md`). Generate the skill following that spec. Apply platform-specific extensions as documented for the target platform.
  2. **For agents (Claude Code):** Read `references/agent-spec.md` for the subagent format. Generate the agent following that spec.
  3. **For agents (non-Claude):** Research the platform's current agent format via web search. Generate accordingly.
  4. **For other block types (MCP servers, hooks, commands, prompts):** Research the platform's current format via web search and generate accordingly.

**d. Generate artifacts.** The skill provides the *specs* (what each building block should do, its inputs/outputs/instructions from the Design phase). The model provides the *implementation* (how to build it on the user's platform, using the verified specification and platform documentation as authoritative sources).

#### Step 7 — Write SOP to Notion (if available)

After artifacts are generated, check if the Notion MCP server is accessible AND this workflow was registered during the Deconstruct step. If so, offer to write the workflow SOP to the Notion page.

After completing Construct, tell the user: "To generate the Run Guide, run `/business-first-ai:run-workflow` (or say *'Generate the Run Guide for my workflow'*)."

## Outputs

### Platform Artifacts

Prompts, skills, agents, orchestration configs, and connector setups in whatever format is appropriate to the user's chosen platform. Generated by the model based on the Building Block Spec and Architecture Decisions. For building blocks with a matched creation skill (discovered at runtime in Step 3.5), artifacts are built by delegating to that skill's full workflow. For building blocks without a matched creation skill, artifacts are generated inline following the relevant format specification (agentskills.io for skills, `references/agent-spec.md` for Claude Code agents, platform-specific formats via web search for others).

## Guidelines

- Use plain language; avoid jargon unless the user introduced it
- After generating platform artifacts, summarize what was produced and where each artifact was saved
- Do not start Construct without a loaded and approved Building Block Spec
- Web search is required for integration research and platform documentation verification
