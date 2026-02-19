---
title: Prompt
description: Understand how prompts work as a building block — the structured instructions that drive your AI workflow.
---

# Prompt

> **Part of:** [Build Workflows](index.md)

!!! tip "New to prompts as a building block?"
    See [Agentic Building Blocks > Prompts](../../agentic-building-blocks/prompts/index.md) for prompt engineering guidance and cross-platform techniques.

## What This Is

A prompt is a structured set of instructions that tells an AI tool how to execute your workflow. During the [Construct](index.md#32-construct) phase, the model generates a prompt tailored to your platform and execution pattern — you don't need to write it from scratch.

This page explains how prompts work as a building block and how they fit into the Build process.

## How Prompts Fit into Build

The [Design](design.md) phase produces your AI Building Block Spec — the blueprint for what to build. During Construct, the model uses that spec to generate platform-appropriate artifacts, which typically include a workflow prompt.

| Execution pattern | What gets generated |
|---|---|
| **Prompt** | A self-contained prompt you paste into any AI tool |
| **Skill-Powered Prompt** | A prompt that references your skills by name instead of spelling out every step |
| **Single Agent / Multi-Agent** | Agent configurations with embedded instructions — the prompt logic lives inside the agent definition |

If you built skills in the [Skills](skills.md) step, the generated prompt references them — each skill invocation replaces what would otherwise be a long block of inline instructions. If you didn't build skills, every step is spelled out in full.

## What a Good Workflow Prompt Contains

Whether the model generates it or you write it yourself, an effective workflow prompt includes:

- **Title and Purpose** — workflow name, description, outcome, when to use
- **Instructions** — numbered steps, each labeled as (AI) or (Human), with decision logic for branching steps
- **Input Requirements** — what the user provides when running the prompt, with format specs
- **Context Requirements** — what reference materials, files, or data to attach
- **Output Format** — what the prompt produces, with structure specs

The prompt should be self-contained (someone unfamiliar with the analysis can use it), specific enough to produce consistent results, and ready for version control.

## How Skills Shorten Prompts

**Before (inline in prompt):**
> Step 5: Extract key findings from the research. For each finding, identify the source, the claim, the supporting evidence, and the confidence level. Format as a structured table...

**After (with skill):**
> Step 5: Extract key findings from the research output.

The skill handles the complexity. The prompt stays clean and focused on workflow sequencing.

!!! tip "Register and commit"
    After generating any prompt artifact, register it in your [AI Registry](../../use-the-cookbook/build/ai-registry.md) Notion database and commit the file to your GitHub repository. This applies to all building blocks you create — prompts, skills, and agents.

## The Design Prompt Template

The [Design](design.md) page includes a prompt template you can paste into any AI tool to run the full Design phase. The Construct phase — including prompt generation — is handled by the `building-workflows` skill or by continuing the conversation after Design completes.

For the full Design prompt template, see [Design Your AI Workflow](design.md#the-prompt).

## What's Next

After Construct generates your platform artifacts, the [Launch Guide](index.md#33-launch) walks you through getting everything running. Test on a real scenario and iterate.

For next steps on building agents or connecting external tools, see [Agents](agents.md) and [MCP](mcp.md).
