---
date: 2026-02-16
authors:
  - jamesgray
categories:
  - Plugins
description: "New Vision Brief skill captures fuzzy ideas and breaks them into epics and features before you write a PRD."
---

# New Skill: Vision Briefs — From Idea to Buildable Features

The Agentic Coding plugin now includes a **Vision Brief** skill that adds a "Step 0: Discover" phase to the feature development workflow. If you have a fuzzy idea but aren't ready to write a PRD, this is where you start.

<!-- more -->

## What it does

The `/agentic-coding:vision-brief` command walks you through four phases:

1. **Discover** — six plain-language questions to understand your problem, users, vision, and success criteria
2. **Refine** — iterate on the draft Vision Brief until it captures what you mean
3. **Scope** — assess the size of the work and break bigger visions into **epics** and **features**, each tracked as GitHub issues
4. **Handoff** — save everything to `specs/[name]-vision.md` and guide you to your first feature PRD

For smaller ideas that are already one feature, the scoping step is skipped and you go straight to the PRD.

## Updated feature development lifecycle

The full workflow is now a 7-step lifecycle: **Discover → Define → Plan → Implement → Verify → Review → Ship**. The [Agentic Coding plugin page](../../use-the-cookbook/build/agentic-coding.md) includes an updated lifecycle table, skill documentation, and a copyable CLAUDE.md template you can drop into any project.

## Install or update

```bash
/plugin install agentic-coding@handsonai
```

Plugin version bumped to **1.2.0**.
