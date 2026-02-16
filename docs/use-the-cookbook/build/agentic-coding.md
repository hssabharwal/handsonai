---
title: Agentic Coding
description: Skills for AI-assisted coding workflows — feature PRDs, specs, and implementation planning
---

# Agentic Coding

Skills for AI-assisted coding workflows. This plugin helps you define requirements before you build — creating structured PRDs (Product Requirements Documents) with user stories, acceptance criteria, and GitHub issue tracking. It's the "define" step that plugs into the broader development lifecycle alongside `/feature-dev` and test-driven development.

## Install

```bash
/plugin install agentic-coding@handsonai
```

## Slash Commands

| Command | Skill |
|---------|-------|
| `/agentic-coding:feature-prd` | `writing-feature-prds` |

## Components

### Skills

---

#### `writing-feature-prds`

**Command:** `/agentic-coding:feature-prd`

**What it does:** Guides you through creating a well-defined feature PRD before implementation. Produces a structured spec file with summary, motivation, user stories, approach, changes, and acceptance criteria — then creates a GitHub issue to track the work.

**When to use it:** Use this when you're starting a new feature, when requirements are unclear or need to be formalized, or when you want a spec that multiple people (or future you) can reference during implementation.

**How it works:**

1. **Define** — Claude asks four questions: What feature? What problem? Who are the users? What should happen? Then creates a PRD file at `specs/[feature-name].md` using a structured template
2. **Stress-test** — Claude reviews the draft critically, checking for missing edge cases, ambiguous acceptance criteria, incomplete scope, and unresolved questions. You iterate until the PRD is solid
3. **Create issue** — Claude creates a GitHub issue with a `type:feature` label, linking to the PRD file and summarizing key acceptance criteria
4. **Handoff** — Claude tells you to run `/feature-dev` to begin implementation, referencing the spec and issue number

**Example prompts:**

    "I want to build a new feature for user authentication"
    → Walks through all 4 phases: define, stress-test, create issue, handoff

    "Create a spec for adding dark mode support"
    → Creates a PRD at specs/dark-mode.md with user stories and
      acceptance criteria

    "New feature: webhook notifications when a deployment fails"
    → Asks clarifying questions, produces a PRD, creates a GitHub issue

**What you'll get:** A structured PRD file in `specs/`, a GitHub issue with `type:feature` label linking to the PRD, and a clear handoff to `/feature-dev` for implementation.

**Platform compatibility:** Claude Code &#10003;

---

## Real-World Workflow Example

This plugin is step 1 of the feature development workflow used to build this cookbook. The full workflow — from PRD through planning, implementation, review, and shipping — lives in the repository's `CLAUDE.md` as a working example you can adapt.

:material-github: [View the Feature Development Workflow in CLAUDE.md](https://github.com/jamesgray-ai/handsonai/blob/main/CLAUDE.md#feature-development-workflow){ .md-button }

The workflow uses `/agentic-coding:feature-prd` as the entry point (step 1), then hands off to Anthropic's official plugins for the remaining steps:

| Step | What happens | Plugin |
|------|-------------|--------|
| 1. Define | Write a PRD with requirements, user stories, and acceptance criteria | `agentic-coding@handsonai` |
| 2. Plan | Guided codebase exploration and architecture design | `feature-dev` (Anthropic) |
| 3. Implement | Write the code | — |
| 4. Verify | Run build/test suite | — |
| 5. Review | PR review with specialized agents | `pr-review-toolkit` (Anthropic) |
| 6. Ship | Commit, push, open PR | `commit-commands` (Anthropic) |

Each step works independently — you don't need all plugins to use the workflow.

## FAQ

**How is this different from just telling Claude what to build?**
A PRD forces you to think through requirements, edge cases, and acceptance criteria *before* writing code. This prevents scope creep, reduces rework, and gives you a reference document during implementation and review.

**Do I need all the plugins referenced in the workflow?**
No. The `/agentic-coding:feature-prd` skill works standalone. The workflow shows how it fits into a full development lifecycle with Anthropic's official plugins, but you can use any combination — or just the steps that apply to your project.

**Where do PRDs get saved?**
By default, `specs/[feature-name].md`. The skill respects your repo conventions — if your `CLAUDE.md` specifies a different spec location, or if `docs/specs/` exists, it adapts automatically.

**Can I use this for bug fixes?**
You can, but it's overkill for most bugs. Skip to step 3 for small fixes. PRDs are most valuable for new features or changes where requirements need to be formalized.
