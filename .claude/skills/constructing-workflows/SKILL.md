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

If the user chooses path 2, skip Steps 3-7 and go directly to the Run phase. Tell the user: "To generate the Run Guide, run `/business-first-ai:run-workflow` (or say *'Generate the Run Guide for my workflow'*)."

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

#### Step 4 — Check for Existing Skills and Instructions

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

- **When generating skills:**
  1. **Fetch the live spec first.** Use web fetch to load the agentskills.io specification from `https://agentskills.io/specification`. This is the authoritative source and may have been updated since the bundled reference was written.
  2. **Fall back to the bundled reference.** If web fetch is unavailable or fails, read `references/skill-spec.md` — a snapshot of the agentskills.io specification.
  3. **Layer Claude Code extensions.** If the target platform is Claude Code, also apply the Claude Code-specific fields documented in the "Claude Code Extensions" section of `references/skill-spec.md`. These are additions to the standard — they do not replace any fields defined by agentskills.io. For the latest Claude Code skill features, also consult the [Claude Code skills documentation](https://code.claude.com/docs/en/skills).

- **When generating agents for Claude Code:** Read `references/agent-spec.md` for the Claude Code subagent format. There is no cross-platform agent spec — agent formats are platform-specific. For non-Claude platforms, research the platform's current agent format via web search.

**d. Generate artifacts.** The skill provides the *specs* (what each building block should do, its inputs/outputs/instructions from the Design phase). The model provides the *implementation* (how to build it on the user's platform, using the verified specification and platform documentation as authoritative sources).

#### Step 7 — Write SOP to Notion (if available)

After artifacts are generated, check if the Notion MCP server is accessible AND this workflow was registered during the Deconstruct step. If so, offer to write the workflow SOP to the Notion page.

After completing Construct, tell the user: "To generate the Run Guide, run `/business-first-ai:run-workflow` (or say *'Generate the Run Guide for my workflow'*)."

## Outputs

### Platform Artifacts

Prompts, skills, agents, orchestration configs, and connector setups in whatever format is appropriate to the user's chosen platform. Generated by the model based on the Building Block Spec and Architecture Decisions. Skills follow the agentskills.io specification (fetched live from `https://agentskills.io/specification`, or from `references/skill-spec.md` as fallback). Agents follow the target platform's format (for Claude Code, see `references/agent-spec.md`).

## Guidelines

- Use plain language; avoid jargon unless the user introduced it
- After generating platform artifacts, summarize what was produced and where each artifact was saved
- Do not start Construct without a loaded and approved Building Block Spec
- Web search is required for integration research and platform documentation verification
