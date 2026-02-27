---
title: Builder Stack Setup Guide
description: Step-by-step checklist for setting up your complete AI builder toolkit — AI platform accounts, developer tools, and workflow management
---

# Builder Stack Setup Guide

Building with AI means more than using a chatbot — you'll read code, modify files, run commands, and connect AI tools to real workflows. This guide sets up everything you need in three parts:

1. **AI Platform Setup** — your accounts, personalization, memory, and connections (~45 min)
2. **Builder Tools** — the developer tools that connect AI to real work (~90 min)
3. **AI Workflow Management** — a system for tracking your workflows and AI building blocks (~20 min)

Complete Parts 1 and 2 to get started. Part 3 is recommended once you're building workflows regularly. Budget **2–3 hours** total, split across two sittings if you prefer.

## At a Glance

### Part 1: AI Platform Setup (~45 min)

| Step | What | Time | Status |
|------|------|------|--------|
| 1 | [AI Platform Accounts + Apps](#step-1-ai-platform-accounts-apps) | ~15 min | Required |
| 2 | [Personalization / Custom Instructions](#step-2-personalization-custom-instructions) | ~15 min | Recommended |
| 3 | [Memory Systems](#step-3-memory-systems) | ~10 min | Recommended |
| 4 | [MCP Connections](#step-4-mcp-connections) | ~15 min | Recommended |

### Part 2: Builder Tools (~90 min)

| Step | What | Time | Status |
|------|------|------|--------|
| 5 | [Terminal Basics](#step-5-terminal-basics) | ~15 min | Required |
| 6 | [AI Code Editor + Extensions](#step-6-ai-code-editor-extensions) | ~15 min | Required |
| 7 | [Git](#step-7-git) | ~10 min | Required |
| 8 | [GitHub](#step-8-github) | ~15 min | Required |
| 9 | [AI Coding CLIs](#step-9-ai-coding-clis) | ~15 min | Recommended |
| 10 | [Voice to Text](#step-10-voice-to-text) | ~10 min | Recommended |
| 11 | [Hands-on AI Skills](#step-11-hands-on-ai-skills) | ~10 min | Recommended |
| 12 | [Hands-on AI MCP Server](#step-12-hands-on-ai-mcp-server) | ~5 min | Recommended |

### Part 3: AI Workflow Management (~20 min)

| Step | What | Time | Status |
|------|------|------|--------|
| 13 | [AI Registry Setup](#step-13-ai-registry-setup) | ~20 min | Recommended |

---

## Part 1: AI Platform Setup

## Step 1: AI Platform Accounts + Apps

**What:** Sign up for AI platforms and install every app they offer — desktop, mobile, and web.
**Time:** ~15 minutes
**Requires:** Nothing — this is where you start.

Each platform gives you a web interface, a desktop app, and a mobile app. Install all of them for whichever platforms you subscribe to — you'll use different tools in different situations. Most people use multiple paid platforms to maximize their learning.

[:octicons-arrow-right-24: Go to AI Platforms guide](ai-platforms.md)

**You're done when:** You've signed in and installed the available apps for each platform you subscribe to.

- [ ] Claude — web, desktop, and mobile
- [ ] ChatGPT — web, desktop, and mobile (recommended)
- [ ] Gemini — web and mobile (recommended)
- [ ] Microsoft 365 Copilot — web, desktop, and mobile (recommended)

---

## Step 2: Personalization / Custom Instructions

**What:** Maximize performance by telling your AI platform about yourself so every conversation starts with context about you.
**Time:** ~15 minutes
**Requires:** Step 1 (AI Platform Accounts)

Custom instructions give your AI platform background on your role, industry, and preferences — so you don't repeat yourself every conversation.

[:octicons-arrow-right-24: Go to Platform Configuration guide — Personalization](ai-platform-config.md#step-2-personalization-custom-instructions)

**You're done when:** You've added personalization or custom instructions to at least one AI platform.

- [ ] Personalization / custom instructions — configured

---

## Step 3: Memory Systems

**What:** Enable memory so your AI platform remembers context across conversations.
**Time:** ~10 minutes
**Requires:** Step 1 (AI Platform Accounts)

Memory lets your AI platform build up knowledge about you over time — preferences, project context, and key facts — so each conversation picks up where the last left off.

[:octicons-arrow-right-24: Go to Platform Configuration guide — Memory](ai-platform-config.md#step-3-memory-systems)

**You're done when:** Memory is enabled on at least one AI platform.

- [ ] Memory — enabled

---

## Step 4: MCP Connections

**What:** Connect your AI platform to external tools and data sources using MCP (Model Context Protocol) or platform-specific integrations.
**Time:** ~15 minutes
**Requires:** Step 1 (AI Platform Accounts)

MCP lets your AI platform read from and write to external tools — think of it as giving your AI access to your actual work environment. This becomes essential once you start building workflows.

[:octicons-arrow-right-24: Go to Platform Configuration guide — MCP](ai-platform-config.md#step-4-mcp-connections-optional)

**You're done when:** You've connected at least one external tool or MCP server.

- [ ] MCP / integrations — connected

---

## Part 2: Builder Tools

## Step 5: Terminal Basics

**What:** Learn to navigate your computer's command line — Terminal on Mac, PowerShell on Windows.
**Time:** ~15 minutes
**Requires:** Nothing — this is where Part 2 starts.

Every tool in this stack runs through the terminal. You don't need to be an expert — just comfortable opening it, navigating folders, and running commands.

[:octicons-arrow-right-24: Go to Terminal Basics guide](terminal-basics.md)

**You're done when:** You can open a terminal, run `pwd`, and navigate to a folder with `cd`.

- [ ] Terminal Basics — complete

---

## Step 6: AI Code Editor + Extensions

**What:** Install and configure Cursor or VS Code with AI model integration.
**Time:** ~15 minutes
**Requires:** Step 5 (Terminal Basics)

Your editor is where you'll read, write, and edit code. This guide covers Cursor (has AI built in) and VS Code (free), plus AI extensions for Claude Code, OpenAI Codex, and Gemini Code Assist.

[:octicons-arrow-right-24: Go to Editor Setup guide](editor-setup.md)

**You're done when:** You can open your editor, navigate files and folders, and see at least one AI extension installed.

- [ ] AI Code Editor — installed
- [ ] AI extensions — installed

---

## Step 7: Git

**What:** Install Git — a version control tool that tracks the changes you make to your AI building blocks.
**Time:** ~10 minutes
**Requires:** Step 5 (Terminal Basics)

Git ensures you never lose your work — every version is saved, and you can always recover or refine what you've built.

[:octicons-arrow-right-24: Go to Git Installation guide](git-install.md)

**You're done when:** Opening your terminal and typing `git --version` prints a version number.

- [ ] Git — installed

---

## Step 8: GitHub

**What:** Create a GitHub account, enable 2FA, and create a repository for your work.
**Time:** ~15 minutes
**Requires:** Steps 6 (Editor) and 7 (Git)

GitHub is where your files live in the cloud — backed up, versioned, and accessible from any machine.

[:octicons-arrow-right-24: Go to GitHub Setup guide](github-setup.md)

**You're done when:** You can download (clone) a project from GitHub into your editor.

- [ ] GitHub — account created and connected

---

## Step 9: AI Coding CLIs

**What:** Install and authenticate the CLI tool for your platform — Claude Code, Gemini CLI, or equivalent.
**Time:** ~15 minutes
**Requires:** Steps 6 (Editor) and 7 (Git)

AI coding CLIs let you use AI directly from your terminal — no browser needed. Claude Code is the primary CLI used throughout this cookbook. The guide also covers OpenAI Codex CLI and Gemini CLI as alternatives.

[:octicons-arrow-right-24: Go to CLI Setup Guide](cli.md)

**You're done when:** Running `claude --version` prints a version number, and typing `claude` starts a conversation with Claude in your terminal.

- [ ] Claude Code CLI — installed and authenticated
- [ ] OpenAI Codex CLI — installed (optional)
- [ ] Gemini CLI — installed (optional)

---

## Step 10: Voice to Text

**What:** Configure system voice input or install a dedicated voice-to-text tool (Wispr Flow recommended).
**Time:** ~10 minutes
**Requires:** Nothing — this step is fully independent.

Voice input can speed up how you write prompts, notes, and messages. This is recommended for anyone who thinks faster than they type.

[:octicons-arrow-right-24: Go to Voice to Text Setup guide](voice-to-text-setup.md)

**You're done when:** You can dictate text into any input field on your computer.

- [ ] Voice to Text — set up

---

## Step 11: Hands-on AI Skills

**What:** Supercharge your work with agent skills that help you build faster.
**Time:** ~10 minutes
**Requires:** Step 9 (AI Coding CLIs) — plugin commands run inside Claude Code

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

## Step 12: Hands-on AI MCP Server

**What:** Access the Hands-on AI knowledge base where you do your work by adding a connector in your AI tool.
**Time:** ~5 minutes
**Requires:** Step 1 (AI Platform Accounts)

The Hands-on AI MCP server gives your AI platform access to the cookbook's reference material — building blocks, patterns, use cases, and more — right inside your conversations.

[:octicons-arrow-right-24: Go to MCP Server Connection Guide](../mcp-server/index.md)

**You're done when:** You can ask your AI platform a question about the cookbook and get an answer from the MCP server.

- [ ] Hands-on AI MCP server — connected

---

## Part 3: AI Workflow Management

Keeping track of your workflows and the AI building blocks that power them is essential to change management and scaling your operations.

## Step 13: AI Registry Setup

**What:** Get a free Notion account (or other database system), duplicate the AI Registry template, and connect Notion to your AI tool.
**Time:** ~20 minutes
**Requires:** Step 1 (AI Platform Accounts)

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

With your builder stack in place, you're ready to start building with AI.

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
