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

## Feature Development Workflow Template

Copy this into your project's `CLAUDE.md` to get a complete feature development workflow. Replace the placeholder comments with your project-specific details.

````markdown
## Feature Development Workflow

For non-trivial changes, follow this workflow. Skip to step 3 for small edits.

### 1. Define — `/agentic-coding:feature-prd`

Use the `/agentic-coding:feature-prd` slash command to create a PRD. It will:
- Gather requirements and explore existing code
- Create a PRD at `specs/<feature-name>.md` using the template
- Stress-test the PRD for edge cases and ambiguity
- Create a GitHub issue linking back to the PRD

For early-stage ideas that need exploration, use the `brainstorming` superpowers skill first to validate the approach before writing a PRD.

**Skip specs for:** Bug fixes, trivial changes, urgent hotfixes.

### 2. Plan

After the spec is approved, create an implementation plan before writing code:
- The `writing-plans` superpowers skill converts specs into bite-sized tasks with exact file paths, code snippets, and commands
- Plans are saved to `.claude/plans/<feature-name>.md`
- **Always save the plan file before starting implementation** — even if the plan was provided inline or from a prior session, persist it first
- For features needing workspace isolation, use `using-git-worktrees` to create a clean worktree before starting

### 3. Implement — `/feature-dev`

Use the `/feature-dev` slash command, referencing the spec and issue:
```
/feature-dev specs/feature-name.md (issue #123)
```

**Implementation approach:**
- Use the `test-driven-development` superpowers skill: write a failing test first, then write minimal code to pass, then refactor. No production code without a failing test.
- For long implementations, use `executing-plans` to work through the plan in batches with review checkpoints between each batch.
- For plans with independent tasks, use `dispatching-parallel-agents` to implement multiple tasks concurrently.

**When things break:**
- Use `systematic-debugging` for any test failure or unexpected behavior — 4-phase structured debugging instead of guessing. Stops after 3 failed fixes to rethink the approach.

### 4. Verify

Before claiming work is complete, use the `verification-before-completion` superpowers skill. It enforces evidence-based completion — must show actual passing output from:

```
# Replace with your project's build/test commands, e.g.:
# npm test
# pytest
# mkdocs build --strict
```

No "should work" or "seems correct" — only verified passing output.

### 5. Review — Quality Gate

**Automated code review:**
- Use `requesting-code-review` superpowers skill to dispatch a code review subagent against the implementation
- When receiving PR feedback, use `receiving-code-review` to evaluate feedback technically rather than blindly accepting all suggestions

**Review agents** — run via the Task tool before shipping:

**Always run:**

| Agent | Task tool identifier | Purpose |
|-------|---------------------|---------|
| Test Analyzer | `pr-review-toolkit:pr-test-analyzer` | Verify test coverage and identify gaps |
| Code Simplifier | `pr-review-toolkit:code-simplifier` | Simplify code for clarity and maintainability |

**Run if applicable:**

| Agent | Task tool identifier | When to use |
|-------|---------------------|-------------|
| Silent Failure Hunter | `pr-review-toolkit:silent-failure-hunter` | Changes include error handling, catch blocks, or fallbacks |
| Type Design Analyzer | `pr-review-toolkit:type-design-analyzer` | New types or interfaces introduced |
| Comment Analyzer | `pr-review-toolkit:comment-analyzer` | Significant documentation or comments added |

### 6. Ship — `/commit-push-pr`

Use the `/commit-push-pr` slash command to commit, push, and open a PR in one step. The PR should reference the issue number so it auto-closes on merge.

For structured merge decisions (merge locally vs PR vs keep branch), use the `finishing-a-development-branch` superpowers skill.

After shipping, use `/revise-claude-md` to capture any session learnings.

## Issue Types

| Type | Label | Use For |
|------|-------|---------|
| Feature | `type:feature` | New functionality, references spec file |
| Bug | `type:bug` | Unexpected behavior, no spec needed |
| Task | `type:task` | Refactoring, cleanup, no spec needed |
| Epic | `type:epic` | Groups related features |

## Requirements Format

When writing acceptance criteria:
- Use numbered list (not checkboxes)
- Write yes/no verifiable statements
- Focus on *what*, not *how*
- Use active voice ("Error message is displayed" not "User sees error")
- Include concrete expected values when possible

## Slash Commands

### Core Workflow

| Command | Description |
|---------|-------------|
| `/agentic-coding:feature-prd` | Create a feature PRD, stress-test it, and open a GitHub issue |
| `/feature-dev` | Guided feature development with codebase understanding |
| `/commit` | Create a git commit |
| `/commit-push-pr` | Commit, push, and open a PR |
| `/revise-claude-md` | Capture session learnings back into CLAUDE.md |

### Review & Quality

| Command | Description |
|---------|-------------|
| `/review-pr` | Comprehensive PR review using specialized agents |
| `/code-review` | Code review a pull request |

### Superpowers Skills

Skills from the `superpowers` plugin, invoked automatically based on context:

| Skill | When it activates |
|-------|-------------------|
| `brainstorming` | Before creative work — explores intent, proposes approaches, validates design |
| `writing-plans` | After spec approval — converts specs into bite-sized implementation tasks |
| `using-git-worktrees` | Starting feature work that needs workspace isolation |
| `test-driven-development` | During implementation — enforces RED→GREEN→REFACTOR cycle |
| `executing-plans` | Long implementations — works through plan in batches with review checkpoints |
| `dispatching-parallel-agents` | Multiple independent tasks that can be worked concurrently |
| `systematic-debugging` | Any bug or test failure — structured 4-phase debugging |
| `verification-before-completion` | Before claiming done — requires actual passing evidence |
| `requesting-code-review` | After implementation — dispatches automated code review subagent |
| `receiving-code-review` | After PR feedback — enforces technical evaluation of suggestions |
| `finishing-a-development-branch` | After verification — structured merge/PR decision |

### Review Agents (via Task tool)

| Agent | Identifier | Purpose |
|-------|-----------|---------|
| Test Analyzer | `pr-review-toolkit:pr-test-analyzer` | Verify test coverage completeness |
| Code Simplifier | `pr-review-toolkit:code-simplifier` | Simplify for clarity and maintainability |
| Silent Failure Hunter | `pr-review-toolkit:silent-failure-hunter` | Find suppressed errors and bad fallbacks |
| Type Design Analyzer | `pr-review-toolkit:type-design-analyzer` | Review type invariants and encapsulation |
| Comment Analyzer | `pr-review-toolkit:comment-analyzer` | Verify comment accuracy and usefulness |

## Quick Reference

| Step | Action | Tools |
|------|--------|-------|
| 1. Define | Create PRD + issue | `/agentic-coding:feature-prd` (use `brainstorming` for early ideas) |
| 2. Plan | Create implementation plan | `writing-plans` superpowers skill |
| 3. Implement | Build with TDD | `/feature-dev` + `test-driven-development` |
| 4. Verify | Prove it works | `verification-before-completion` |
| 5. Review | Quality gate | `requesting-code-review` + review agents |
| 6. Ship | Commit, push, PR | `/commit-push-pr` + `/revise-claude-md` |
````

!!! tip "Plugins used in this workflow"
    This template references commands from these plugins:

    - **`agentic-coding@handsonai`** — `/agentic-coding:feature-prd` (step 1)
    - **`feature-dev`** (Anthropic official) — `/feature-dev` (step 3)
    - **`superpowers`** (Anthropic official) — `brainstorming`, `writing-plans`, `test-driven-development`, `systematic-debugging`, `verification-before-completion`, `requesting-code-review`, `receiving-code-review`, `finishing-a-development-branch`
    - **`pr-review-toolkit`** (Anthropic official) — review agents (step 5)
    - **`commit-commands`** (Anthropic official) — `/commit`, `/commit-push-pr` (step 6)
    - **`claude-md-management`** (Anthropic official) — `/revise-claude-md` (step 6)

    Each step works independently — install only the plugins you need.

## See It in Action

This workflow is how we build the Hands-on AI Cookbook. Our `CLAUDE.md` is a filled-in version of the template above, with project-specific verify commands (`mkdocs build --strict`), implementation guidelines, and content conventions.

:material-github: [View our CLAUDE.md on GitHub](https://github.com/jamesgray-ai/handsonai/blob/main/CLAUDE.md#feature-development-workflow){ .md-button }

## FAQ

**How is this different from just telling Claude what to build?**
A PRD forces you to think through requirements, edge cases, and acceptance criteria *before* writing code. This prevents scope creep, reduces rework, and gives you a reference document during implementation and review.

**Do I need all the plugins referenced in the template?**
No. The `/agentic-coding:feature-prd` skill works standalone. The template shows how it fits into a full development lifecycle with Anthropic's official plugins, but you can use any combination — or just the steps that apply to your project.

**Where do PRDs get saved?**
By default, `specs/[feature-name].md`. The skill respects your repo conventions — if your `CLAUDE.md` specifies a different spec location, or if `docs/specs/` exists, it adapts automatically.

**Can I use this for bug fixes?**
You can, but it's overkill for most bugs. Skip to step 3 for small fixes. PRDs are most valuable for new features or changes where requirements need to be formalized.

**What do I need to customize in the template?**
Just the verify commands in step 4 — replace the placeholder with your project's build/test commands. Everything else works out of the box.
