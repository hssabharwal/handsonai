---
date: 2026-02-16T08:00:00
authors:
  - jamesgray
categories:
  - Plugins
description: "New plugin for AI-assisted coding workflows — define requirements with structured PRDs before you build."
---

# New Plugin: Agentic Coding

The **Agentic Coding** plugin is now available in the marketplace — the third plugin alongside Business-First AI and AI Registry. It packages the `writing-feature-prds` skill for defining requirements before you write code.

<!-- more -->

## What it does

The `/agentic-coding:feature-prd` command walks you through a 4-phase workflow to create a structured Product Requirements Document (PRD):

1. **Define** — answer four questions about the feature, get a PRD at `specs/[feature-name].md`
2. **Stress-test** — review for missing edge cases and ambiguous criteria
3. **Create issue** — GitHub issue with `type:feature` label linking to the PRD
4. **Handoff** — clear instructions to run `/feature-dev` for implementation

## Install

```bash
/plugin install agentic-coding@handsonai
```

## Real-world usage

This plugin is step 1 of the feature development workflow used to build this cookbook. The full 6-step workflow — from PRD through planning, implementation, review, and shipping — is documented in our [CLAUDE.md](https://github.com/jamesgray-ai/handsonai/blob/main/CLAUDE.md#feature-development-workflow) as a working example you can adapt for your own projects.

See the [Agentic Coding plugin page](../../use-the-cookbook/build/agentic-coding.md) for full documentation, example prompts, and a recommended CLAUDE.md workflow you can copy.
