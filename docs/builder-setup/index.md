---
title: Builder Tools Setup Guide
description: Step-by-step checklist for setting up your developer toolkit — terminal, editor, Git, CLIs, and workflow management
---

# Builder Tools Setup Guide

Building with AI means more than using a chatbot — you'll read code, modify files, run commands, and connect AI tools to real workflows. This guide sets up the developer tools and workflow management you need.

!!! info "AI platform setup is in the Platforms section"
    Before starting here, make sure you've set up at least one AI platform — account, apps, personalization, memory, and connections. Each platform has its own Getting Started checklist:

    [:octicons-arrow-right-24: Claude](../platforms/claude/getting-started/index.md) · [:octicons-arrow-right-24: OpenAI](../platforms/openai/getting-started/index.md) · [:octicons-arrow-right-24: Gemini](../platforms/google-gemini/getting-started/index.md) · [:octicons-arrow-right-24: M365 Copilot](../platforms/m365-copilot/getting-started/index.md)

## At a Glance

### Builder Tools (~90 min)

| What | Time | Status |
|------|------|--------|
| [Terminal Basics](#terminal-basics) | ~15 min | Required |
| [AI Code Editor + Extensions](#ai-code-editor-extensions) | ~15 min | Required |
| [Git](#git) | ~10 min | Required |
| [GitHub](#github) | ~15 min | Required |
| [Voice to Text](#voice-to-text) | ~10 min | Recommended |
| [Hands-on AI Skills](#hands-on-ai-skills) | ~10 min | Recommended |
| [Hands-on AI MCP Server](#hands-on-ai-mcp-server) | ~5 min | Recommended |

### AI Workflow Management (~20 min)

| What | Time | Status |
|------|------|--------|
| [AI Registry Setup](#ai-registry-setup) | ~20 min | Recommended |

---

## Builder Tools

## Terminal Basics

**What:** Learn to navigate your computer's command line — Terminal on Mac, PowerShell on Windows.
**Time:** ~15 minutes
**Requires:** Nothing — this is where you start.

Every tool in this stack runs through the terminal. You don't need to be an expert — just comfortable opening it, navigating folders, and running commands.

[:octicons-arrow-right-24: Go to Terminal Basics guide](terminal-basics.md)

**You're done when:** You can open a terminal, run `pwd`, and navigate to a folder with `cd`.

- [ ] Terminal Basics — complete

---

## AI Code Editor + Extensions

**What:** Install and configure Cursor or VS Code with AI model integration.
**Time:** ~15 minutes
**Requires:** Terminal Basics

Your editor is where you'll read, write, and edit code. This guide covers Cursor (has AI built in) and VS Code (free), plus AI extensions for Claude Code, OpenAI Codex, and Gemini Code Assist.

[:octicons-arrow-right-24: Go to Editor Setup guide](editor-setup.md)

**You're done when:** You can open your editor, navigate files and folders, and see at least one AI extension installed.

- [ ] AI Code Editor — installed
- [ ] AI extensions — installed

---

## Git

**What:** Install Git — a version control tool that tracks the changes you make to your AI building blocks.
**Time:** ~10 minutes
**Requires:** Terminal Basics

Git ensures you never lose your work — every version is saved, and you can always recover or refine what you've built.

[:octicons-arrow-right-24: Go to Git Installation guide](git-install.md)

**You're done when:** Opening your terminal and typing `git --version` prints a version number.

- [ ] Git — installed

---

## GitHub

**What:** Create a GitHub account, enable 2FA, and create a repository for your work.
**Time:** ~15 minutes
**Requires:** Editor and Git

GitHub is where your files live in the cloud — backed up, versioned, and accessible from any machine.

[:octicons-arrow-right-24: Go to GitHub Setup guide](github-setup.md)

**You're done when:** You can download (clone) a project from GitHub into your editor.

- [ ] GitHub — account created and connected

---

## Voice to Text

**What:** Configure system voice input or install a dedicated voice-to-text tool (Wispr Flow recommended).
**Time:** ~10 minutes
**Requires:** Nothing — this step is fully independent.

Voice input can speed up how you write prompts, notes, and messages. This is recommended for anyone who thinks faster than they type.

[:octicons-arrow-right-24: Go to Voice to Text Setup guide](voice-to-text-setup.md)

**You're done when:** You can dictate text into any input field on your computer.

- [ ] Voice to Text — set up

---

## Hands-on AI Skills

**What:** Supercharge your work with agent skills that help you build faster.
**Time:** ~10 minutes
**Requires:** AI Coding CLIs — plugin commands run inside Claude Code

On Claude (Cowork and Claude Code), you can access packaged skills and agents via plugins. For other platforms (Cursor, Codex CLI, Gemini CLI, VS Code Copilot), you can download skills from the [GitHub repo](https://github.com/jamesgray-ai/handsonai-plugins) and add them manually — see [How to Add Skills to Your Platform](../agentic-building-blocks/skills/index.md#how-to-add-skills-to-your-platform) for step-by-step instructions for each tool.

!!! tip "These commands run inside Claude Code"
    The `/plugin` commands below are typed inside a Claude Code session, not in a regular terminal. Start Claude Code first by typing `claude` in your terminal, then run the `/plugin` commands.

**1. Add the plugin marketplace.** Register the Hands-on AI marketplace so Claude Code knows where to find plugins. You only need to do this once:

```bash
/plugin marketplace add jamesgray-ai/handsonai-plugins
```

**2. Install plugins.** With the marketplace added, install plugins to give Claude domain expertise:

```bash
/plugin install business-first-ai@handsonai
```

The **Business-First AI** plugin includes agents and skills for analyzing AI opportunities, deconstructing workflows, and building with AI. Browse all available plugins on the [Plugin Marketplace](../use-the-cookbook/build/index.md).

See the [Using Plugins](../use-the-cookbook/build/using-plugins.md) guide for the full walkthrough.

!!! info "Using skills in Claude.ai (web)"
    After installing plugins, agents and skills work automatically in **Claude Code** and **Cowork**. However, if you want to use skills in **Claude.ai** (the web interface), there's an extra step: you need to zip each skill folder and upload it manually through Settings > Capabilities > Upload skill. See the [Using Skills in Claude.ai](../use-the-cookbook/build/using-plugins.md#using-skills-in-claudeai-web) guide for step-by-step instructions.

**You're done when:** You've installed at least one plugin.

- [ ] Plugin marketplace — registered
- [ ] Business-First AI plugin — installed

---

## Hands-on AI MCP Server

**What:** Access the Hands-on AI knowledge base where you do your work by adding a connector in your AI tool.
**Time:** ~5 minutes
**Requires:** An AI platform account

The Hands-on AI MCP server gives your AI platform access to the cookbook's reference material — building blocks, patterns, use cases, and more — right inside your conversations.

[:octicons-arrow-right-24: Go to MCP Server Connection Guide](../mcp-server/index.md)

**You're done when:** You can ask your AI platform a question about the cookbook and get an answer from the MCP server.

- [ ] Hands-on AI MCP server — connected

---

## AI Workflow Management

Keeping track of your workflows and the AI building blocks that power them is essential to change management and scaling your operations.

## AI Registry Setup

**What:** Get a free Notion account (or other database system), duplicate the AI Registry template, and connect Notion to your AI tool.
**Time:** ~20 minutes
**Requires:** An AI platform account

The AI Registry is a Notion workspace template that gives you a structured system for tracking your workflows, AI building blocks, and connected applications. Once it's connected, Claude can name workflows, write SOPs (Standard Operating Procedures), and register skills directly in Notion.

[:octicons-arrow-right-24: Go to AI Registry Setup guide](notion-registry-setup.md)

After setting up the registry, install the AI Registry plugin so Claude can read from and write to your Notion workspace:

```bash
/plugin install ai-registry@handsonai
```

**You're done when:** You've duplicated the template and connected Notion to your AI tool.

- [ ] AI Registry — Notion template duplicated and connected
- [ ] AI Registry plugin — installed

---

## What's Next?

With your builder tools in place, you're ready to start building with AI.

<div class="grid cards" markdown>

-   :material-lightbulb:{ .lg .middle } **Learn the Building Blocks**

    ---

    Understand the seven components of every AI workflow — models, prompts, context, projects, skills, agents, and MCP (connections to external tools).

    [:octicons-arrow-right-24: Agentic Building Blocks](../agentic-building-blocks/index.md)

-   :material-puzzle-outline:{ .lg .middle } **Install Plugins**

    ---

    Pre-built Claude Code agents and skills you can install in one command.

    [:octicons-arrow-right-24: Plugin Marketplace](../use-the-cookbook/build/index.md)

-   :material-school:{ .lg .middle } **Take a Course**

    ---

    Structured learning that walks you through building with AI step by step.

    [:octicons-arrow-right-24: Learn with James](../courses/index.md)

</div>
