---
title: Skills
description: The Skill building block — reusable routines the AI discovers and loads dynamically when relevant to a task
---

# Skills

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What Skills Are

**Skills** are folders containing instructions, scripts, and resources that the AI discovers and loads dynamically when relevant to a task. They encapsulate a specific capability — instructions, context, and output format bundled together — so you don't have to re-explain the same task every time.

Skills are now an open standard and being adopted broadly across platforms. Think of them as upgraded prompts: they package a prompt with its context into something reusable, shareable, and automatically invocable.

## Key Characteristics

- **Encapsulates a specific capability** — instructions, context, and output format bundled together
- **Dynamically loaded or directly invoked** — the AI discovers and loads skills automatically when relevant, or you invoke them with a slash command (`/plugin-name:command`)
- **Reusable across conversations** — write once, use every time the task comes up
- **Shareable** — skills can be distributed to others through plugins or file sharing
- **Becoming an open standard** — the skill format is being adopted across compatible platforms

## When to Use a Skill

Use a skill when:

- You find yourself writing the same prompt repeatedly
- A workflow step is well-defined enough to package as a repeatable routine
- Consistency matters — the output should follow the same structure every time
- You want others to be able to run the same task with the same quality

A good rule of thumb: if you give an AI the same instructions more than three times, it's time to package those instructions as a skill.

!!! info "Skills vs. Agents"
    A skill is a **routine** — it does one thing well when invoked. An agent is **autonomous** — it decides what to do, which tools to use, and when to invoke skills. Think of skills as tools in a toolbox and agents as the person using the toolbox.

## Platform Implementations

Agent Skills are an **open standard** — the same `SKILL.md` format works across platforms. Each platform reads skill files from its own directory, but the file format is identical:

| Platform | Skill Directory | Notes |
|----------|----------------|-------|
| **[Claude Code](https://code.claude.com/docs/en/skills)** | `.claude/skills/` | Also installable via plugins (`/plugin install`) |
| **[Cursor](https://cursor.com/docs/context/skills)** | `.cursor/skills/`, `.claude/skills/`, `.codex/skills/`, or `.agents/skills/` | Reads from Claude and Codex directories too — no need to move files |
| **[Codex CLI](https://developers.openai.com/codex/skills)** | `.agents/skills/` | Same SKILL.md format |
| **[Gemini CLI](https://geminicli.com/docs/cli/skills/)** | `.gemini/skills/` or `.agents/skills/` | Same SKILL.md format |
| **[VS Code Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills)** | `.github/skills/` or `.agents/skills/` | Same SKILL.md format |

!!! info "Cross-platform convention"
    `.agents/skills/` is a shared convention recognized by Cursor, Codex CLI, Gemini CLI, and VS Code Copilot. Place your skills there to make them available across multiple platforms from one location.

## Anatomy of a Skill

A skill is a folder containing:

```
skill-name/
├── SKILL.md          # Instructions — what the skill does and how
└── references/       # Optional context files the skill needs
    ├── style-guide.md
    └── template.md
```

The `SKILL.md` file contains the instructions. The `references/` folder holds any context the skill needs — style guides, templates, examples, or data.

On Claude Code, skills with `user_invocable: true` and a `command:` field in their frontmatter can be invoked directly as slash commands.

## How to Add Skills to Your Platform

Skills are plain-text Markdown — no compiled code, no special format. Getting them into your platform takes two steps: get the files, then place them where your platform looks.

### Step 1: Get the skill files

**Option A: Install a plugin (Claude Code)**

```bash
/plugin install business-first-ai@handsonai
```

This installs the skills automatically into your project's `.claude/skills/` directory.

**Option B: Download from GitHub**

Browse the [plugins directory on GitHub](https://github.com/jamesgray-ai/handsonai-plugins/tree/main/plugins), find the skill folder you want, and download it. Each skill is a folder containing a `SKILL.md` file and an optional `references/` directory.

### Step 2: Place them in your platform's skill directory

| Platform | Where to put skills |
|----------|-------------------|
| **Claude Code** | `.claude/skills/` in your project root (or use plugin install) |
| **Cursor** | `.cursor/skills/` in your project root — but also reads from `.claude/skills/`, `.codex/skills/`, and `.agents/skills/` automatically |
| **Codex CLI** | `.agents/skills/` in your project root |
| **Gemini CLI** | `.gemini/skills/` or `.agents/skills/` in your project root |
| **VS Code Copilot** | `.github/skills/` or `.agents/skills/` in your project root |

!!! tip "Already using Claude Code or Codex?"
    If you already have skills installed for Claude Code (`.claude/skills/`) or Codex (`.codex/skills/`), **Cursor picks them up automatically** — no copying or moving required. This means installing a plugin in Claude Code makes those skills available in Cursor too.

### Step 3: Verify

Invoke the skill by name in your AI tool. For example, in Claude Code: `/business-first-ai:discover`. In other platforms, reference the skill name in your prompt — the platform discovers it automatically from the skill directory.

## Skill, Project, or Prompt?

| Approach | Best For | Example |
|----------|----------|---------|
| **Prompt** | One-off or infrequent tasks | "Summarize this PDF" |
| **Project** | Recurring context without rigid steps | Client research workspace |
| **Skill** | Repeatable process with consistent format and standards | Weekly status report generation |

## Guides

| Guide | Description |
|-------|-------------|
| [Discover Your Best Claude Skills](../../platforms/claude/skills/skills-discovery-meta-prompt.md) | Guided process to identify your highest-value skill candidates |

## Related

- [Agentic Building Blocks](../index.md) — Skills in the context of all seven building blocks
- [AI Use Cases](../../use-cases/index.md) — what teams build with skills, organized by six primitives
- [Prompts](../prompts/index.md) — the foundation that skills build on
- [Agents](../agents/index.md) — autonomous systems that invoke skills as part of multi-step workflows
- [Agents & Skills](../../use-the-cookbook/build/index.md) — pre-built skills you can download or install
