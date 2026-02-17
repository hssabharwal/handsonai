---
title: Agentic Coding
description: Skills for AI-assisted coding workflows — feature PRDs, specs, and implementation planning
---

# Agentic Coding

Skills for AI-assisted coding workflows. This plugin helps you go from idea to spec before you build. Start with a **Vision Brief** to capture a fuzzy idea in plain language, then turn it into a structured **PRD** (Product Requirements Document) with user stories, acceptance criteria, and GitHub issue tracking. The two skills are designed to flow together — the Vision Brief feeds directly into the PRD — but each works standalone too. It's the "discover and define" step that plugs into the broader development lifecycle alongside `/feature-dev` and test-driven development.

## Install

```bash
/plugin install agentic-coding@handsonai
```

## Slash Commands

| Command | Skill |
|---------|-------|
| `/agentic-coding:vision-brief` | `writing-vision-briefs` |
| `/agentic-coding:feature-prd` | `writing-feature-prds` |

## Components

### Skills

---

#### `writing-vision-briefs`

**Command:** `/agentic-coding:vision-brief`

**What it does:** Guides you through capturing a fuzzy idea as a structured Vision Brief — a business-focused artifact that clarifies the problem, users, vision, capabilities, and success criteria in plain language. Then assesses the scope of your vision and breaks it into buildable features, so you know exactly what to build first.

**When to use it:** Use this when you have an early-stage idea that isn't ready for a full spec. If you're not sure what you want to build, or you need help articulating the problem and desired outcome, start here before writing a PRD.

**How it works:**

1. **Discover** — Claude asks six questions one at a time: What's the problem? Who feels it? What does the ideal outcome look like? What must the solution do? How will you know it's working? What constraints exist? Multiple-choice options are offered where possible to reduce cognitive load
2. **Refine** — Claude presents the draft Vision Brief and iterates with you until it captures the idea accurately
3. **Scope** — Claude assesses the size of your vision. A big idea might contain multiple features that need to be built separately. Claude breaks the vision into **epics** (major themes) and **features** (individual buildable pieces), creates GitHub issues to track each epic, and recommends which feature to build first
4. **Handoff** — Claude saves the brief (with the feature breakdown) to `specs/[name]-vision.md` and tells you to run `/agentic-coding:feature-prd` for your first feature

**How visions become features:**

A vision can be big — "modernize our onboarding" might contain several features. This skill breaks it down so you can build one piece at a time:

```
Your Vision ("Modernize customer onboarding")
  ├── Epic 1: Self-Service Signup (GitHub issue #10)
  │     ├── Feature: Email verification step     ← build this first
  │     ├── Feature: Profile setup wizard
  │     └── Feature: Welcome tutorial
  └── Epic 2: Admin Dashboard (GitHub issue #11)
        ├── Feature: User activity feed
        └── Feature: Onboarding progress tracker
```

Each **feature** becomes its own PRD in Step 1. You build and ship one feature at a time. If your vision is small enough to be a single feature, Claude skips the breakdown and moves straight to the handoff.

**Example prompts:**

    "I have an idea for improving how we onboard new customers"
    → Discovers the vision, breaks it into epics and features, recommends where to start

    "I'm thinking about adding some kind of notification system"
    → Asks clarifying questions, scopes the work, identifies individual features

    "What if we could let users customize their dashboard?"
    → Captures the vision — if it's small enough, skips breakdown and hands off directly

**What you'll get:** A Vision Brief at `specs/[name]-vision.md` with a clear problem statement, user description, vision, key capabilities, success criteria, constraints, and a feature breakdown showing exactly what to build and in what order.

**Next step:** Run `/agentic-coding:feature-prd` for your first feature and tell Claude which feature from the breakdown you're starting with. Claude will pull context from the Vision Brief and scope the PRD to that one feature — so you go from idea to spec without repeating yourself.

**Platform compatibility:** Claude Code &#10003;

---

#### `writing-feature-prds`

**Command:** `/agentic-coding:feature-prd`

**What it does:** Guides you through creating a well-defined feature PRD for **one specific feature** before implementation. Produces a structured spec file with summary, motivation, user stories, approach, changes, and acceptance criteria — then creates a GitHub issue to track the work.

**When to use it:** Use this when you know which feature you're building and need a detailed spec. If you're coming from a Vision Brief, pick one feature from your breakdown and spec it out here. If you're starting fresh with a small, focused idea, you can start here directly — but if the idea is bigger than one feature, Claude will suggest running [`/agentic-coding:vision-brief`](#writing-vision-briefs) first to break it down.

**How it works:**

1. **Define** — Claude checks if you're coming from a Vision Brief. If so, it pulls context from the brief and scopes to your chosen feature. If not, it asks four questions: What feature? What problem? Who are the users? What should happen? Then creates a PRD file at `specs/[feature-name].md`
2. **Stress-test** — Claude reviews the draft critically, checking for missing edge cases, ambiguous acceptance criteria, incomplete scope, and unresolved questions. You iterate until the PRD is solid
3. **Track** — Claude creates a GitHub issue with a `type:feature` label linking to the PRD (and referencing the epic issue if this feature came from a Vision Brief breakdown)
4. **Handoff** — Claude tells you to move to plan mode, where it will explore your codebase and design the implementation approach before writing any code

**Example prompts:**

    "Write a PRD for email verification from specs/onboarding-vision.md"
    → Reads the Vision Brief, scopes to the email verification feature, creates the PRD

    "I want to build a new feature for user authentication"
    → Walks through all 4 phases: define, stress-test, create issue, handoff

    "Create a spec for adding dark mode support"
    → Creates a PRD at specs/dark-mode.md with user stories and
      acceptance criteria

    "Use the Vision Brief at specs/onboarding-vision.md as the starting point"
    → Pre-populates the PRD from your Vision Brief — no repeat questions

**What you'll get:** A structured PRD file in `specs/`, a GitHub issue with `type:feature` label linking to the PRD, and a clear handoff to `/feature-dev` for implementation.

**Platform compatibility:** Claude Code &#10003;

---

## Feature Development Lifecycle

This table shows how the Agentic Coding plugin fits into a complete feature development lifecycle — from early idea through to shipped code. Each step lists the command or skill that powers it and which plugin provides it.

You don't need every step for every task. Skip Step 0 if you already know what you want to build. Skip to Step 3 for small edits. Use only the steps that fit your situation.

| Step | What happens | Command / Skill / Agent | Plugin |
|------|-------------|------------------------|--------|
| **0. Discover** | Capture a fuzzy idea as a Vision Brief, then break it into epics and features you can build one at a time | `/agentic-coding:vision-brief` | `agentic-coding` (Hands-on AI) |
| **1. Define** | Turn the Vision Brief (or a new idea) into a PRD with user stories, acceptance criteria, and a GitHub issue to track the feature | `/agentic-coding:feature-prd` | `agentic-coding` (Hands-on AI) |
| **2. Plan** | Enter **plan mode** — Claude explores the codebase, designs the architecture, and converts the PRD into bite-sized implementation tasks for your approval | `code-explorer` agent, `code-architect` agent, `writing-plans` skill | `feature-dev` + `superpowers` (Anthropic) |
| **3. Implement** | Build the feature with codebase-aware guidance, test-driven development, and automatic security warnings on unsafe patterns | `/feature-dev` command + `test-driven-development` skill + `security-guidance` hook | `feature-dev` + `superpowers` + `security-guidance` (Anthropic) |
| **4. Verify** | Prove it works with actual passing build/test output | `verification-before-completion` skill | `superpowers` (Anthropic) |
| **5. Review** | Automated code review + specialized review agents (test coverage, code simplification, silent failures, security, type design) | `requesting-code-review` skill + `code-reviewer` agent + `pr-review-toolkit` agents | `superpowers` + `feature-dev` + `pr-review-toolkit` (Anthropic) |
| **6. Ship** | Commit, push, and open a PR that references the issue | `/commit-push-pr` command | `commit-commands` (Anthropic) |

!!! info "How plugins work together"
    Steps 0-1 come from the **Agentic Coding** plugin (this page). Steps 2-6 come from Anthropic's official plugins that ship with Claude Code. Install only the plugins you need — each step works independently.

    The key handoff: Step 0 produces a Vision Brief and breaks it into features → Step 1 takes one feature and writes a PRD for it → Step 2 reads the PRD and generates the implementation plan. Each artifact feeds the next. You repeat Steps 1-6 for each feature in the breakdown.

    **Agents vs. skills vs. hooks:** Skills are step-by-step workflows Claude follows. Agents are specialists Claude delegates to via the Task tool. Hooks run automatically in the background (like `security-guidance` warning about unsafe code patterns as you edit files).

## Feature Development Workflow Template

To teach Claude Code this workflow automatically in every session, copy the template below into your project's `CLAUDE.md` file. Replace the placeholder comments with your project-specific details.

````markdown
## Feature Development Workflow

For non-trivial changes, follow this workflow. Skip to step 3 for small edits.

### 0. Discover — `/agentic-coding:vision-brief`

For fuzzy or early-stage ideas, use the `/agentic-coding:vision-brief` slash command to create a Vision Brief before writing a PRD. It:
- Walks you through the problem, users, vision, capabilities, and success criteria in plain language
- Assesses the scope — is this one feature or multiple?
- Breaks bigger visions into **epics** (major themes) and **features** (individual buildable pieces)
- Creates `type:epic` GitHub issues for each epic
- Recommends which feature to build first
- Saves everything to `specs/[name]-vision.md`

If the vision is small enough to be a single feature, the breakdown is skipped.

**Skip this step if** you already know exactly what single feature you want to build. Go straight to Step 1.

### 1. Define — `/agentic-coding:feature-prd`

Use the `/agentic-coding:feature-prd` slash command to create a PRD for **one feature**. It will:
- Check if you're coming from a Vision Brief — if so, scope the PRD to your chosen feature
- If starting fresh, gather requirements (and redirect to Step 0 if the idea is too big for one feature)
- Create a PRD at `specs/<feature-name>.md` using the template
- Stress-test the PRD for edge cases and ambiguity
- Create a GitHub issue linking back to the PRD (and referencing the epic issue if applicable)

For early-stage ideas that need exploration, use the `brainstorming` superpowers skill first to validate the approach before writing a PRD.

**Skip specs for:** Bug fixes, trivial changes, urgent hotfixes.

### 2. Plan (plan mode)

After the PRD is approved, **enter plan mode** to design the implementation before writing any code. In plan mode, Claude explores your codebase, designs the approach, and presents a plan for your approval — no code is written until you say go.

- For complex features, use the `code-explorer` agent (from `feature-dev`) to trace execution paths and map dependencies, then the `code-architect` agent to design the architecture before planning
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

**Safety net:** The `security-guidance` plugin (Anthropic) runs a hook that automatically warns about potential security issues (command injection, XSS, unsafe patterns) when editing files.

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
| Code Reviewer | `feature-dev:code-reviewer` | Review for bugs, security vulnerabilities, and logic errors |
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
| `/agentic-coding:vision-brief` | Capture a fuzzy idea as a structured Vision Brief |
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
| Code Reviewer | `feature-dev:code-reviewer` | Review for bugs, security vulnerabilities, logic errors |
| Test Analyzer | `pr-review-toolkit:pr-test-analyzer` | Verify test coverage completeness |
| Code Simplifier | `pr-review-toolkit:code-simplifier` | Simplify for clarity and maintainability |
| Silent Failure Hunter | `pr-review-toolkit:silent-failure-hunter` | Find suppressed errors and bad fallbacks |
| Type Design Analyzer | `pr-review-toolkit:type-design-analyzer` | Review type invariants and encapsulation |
| Comment Analyzer | `pr-review-toolkit:comment-analyzer` | Verify comment accuracy and usefulness |

### Codebase Analysis Agents (via Task tool)

| Agent | Identifier | Purpose |
|-------|-----------|---------|
| Code Explorer | `feature-dev:code-explorer` | Trace execution paths, map architecture, document dependencies |
| Code Architect | `feature-dev:code-architect` | Design feature architecture with implementation blueprints |

## Quick Reference

| Step | Action | Tools |
|------|--------|-------|
| 0. Discover | Capture idea as Vision Brief, break into epics + features | `/agentic-coding:vision-brief` (skip if single feature is clear) |
| 1. Define | Create PRD + issue for one feature | `/agentic-coding:feature-prd` (use `brainstorming` for early ideas) |
| 2. Plan | Enter plan mode, explore codebase, create plan | `code-explorer` + `code-architect` agents, `writing-plans` skill |
| 3. Implement | Build with TDD | `/feature-dev` + `test-driven-development` + `security-guidance` hook |
| 4. Verify | Prove it works | `verification-before-completion` |
| 5. Review | Quality gate | `requesting-code-review` + `code-reviewer` + review agents |
| 6. Ship | Commit, push, PR | `/commit-push-pr` + `/revise-claude-md` |
````

!!! tip "Plugins used in this workflow"
    This template references commands from these plugins:

    - **`agentic-coding@handsonai`** — `/agentic-coding:vision-brief` (step 0), `/agentic-coding:feature-prd` (step 1)
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
