---
title: Project Tracking with GitHub
description: Issues, epics, projects, and pull requests — how teams organize and track work using GitHub, explained for non-technical readers
date: 2026-02-16
author: James Gray
---GitHub is where most software teams organize their work. It's a platform built around code, but its project management tools — issues, projects, labels, and pull requests — are accessible to anyone. Understanding how work flows through GitHub makes you fluent in the language engineering teams (and AI coding agents) speak.

## Issues

An issue is a unit of work. It's the fundamental building block of project tracking in GitHub — every bug to fix, feature to build, and task to complete gets captured as an issue.

**What an issue contains:**

| Field | Purpose |
|-------|---------|
| **Title** | A short, descriptive name for the work ("Add push notifications for order status changes") |
| **Description** | The full context — what needs to happen, why, acceptance criteria, and any relevant links |
| **Labels** | Tags that categorize the issue (type, priority, area) |
| **Assignee** | Who's responsible for completing it |
| **Milestone** | Which release or time period it belongs to |
| **Status** | Where it is in the workflow (tracked via Projects — see below) |

**How to read an issue:** When you open an issue, read the description for context, check the labels for categorization, look at the comments for discussion and decisions, and note the assignee for who's working on it. The comment thread often contains important context that wasn't in the original description.

## Issue Types

Not all work is the same. Teams use labels to distinguish between types of work so they can prioritize and track them differently.

| Type | What It Means | Example |
|------|--------------|---------|
| **Feature** | New functionality that doesn't exist yet | "Add email notifications for order updates" |
| **Bug** | Something that exists but isn't working correctly | "Search results don't include items added in the last hour" |
| **Task** | Maintenance, cleanup, or internal work that isn't user-facing | "Update dependencies to latest versions" |
| **Epic** | A large initiative that groups multiple related issues | "Real-time order tracking" (contains features for notifications, tracking page, status API) |

Features and bugs are the most common. Tasks handle the housekeeping. Epics connect individual pieces of work to a larger strategic initiative.

## Epics

An epic is a large body of work that gets broken into smaller issues. It represents a significant initiative — something that maps to a roadmap item or a major theme.

**How epics work in practice:**

1. Create an epic issue that describes the overall initiative, its goals, and what's in scope
2. Create individual feature, bug, or task issues for each piece of work
3. Link the individual issues back to the epic (usually by referencing the epic number in the description)
4. Track the epic's progress by monitoring how many of its child issues are complete

**Example epic: "Real-time order tracking"**

- Issue #101: Push notifications for order status changes (Feature)
- Issue #102: Order tracking page with live status updates (Feature)
- Issue #103: Shipping carrier API integration (Task)
- Issue #104: Notification preferences in account settings (Feature)

When all four issues are complete, the epic is done.

## Projects

GitHub Projects is the board view — a visual way to see where every issue stands. Most teams use a Kanban-style board with columns representing stages of work.

**Typical board columns:**

| Column | What It Means |
|--------|--------------|
| **Backlog** | Defined but not started. Waiting to be prioritized into a sprint. |
| **To Do** | Committed for the current sprint or work period. Ready to start. |
| **In Progress** | Someone is actively working on it. |
| **In Review** | The work is done but waiting for someone to review it (code review, QA, stakeholder approval). |
| **Done** | Complete. Merged, deployed, or otherwise finished. |

Issues move across the board from left to right as work progresses. A healthy board has most items in Backlog and To Do (planned work) with a reasonable number In Progress (active work). If too many items pile up In Review, it signals a review bottleneck.

## Labels and Milestones

**Labels** are tags that categorize issues. Teams define their own label system, but common patterns include:

| Label Category | Examples | Purpose |
|---------------|----------|---------|
| **Type** | `feature`, `bug`, `task`, `epic` | What kind of work |
| **Priority** | `P0-critical`, `P1-high`, `P2-medium` | How urgent |
| **Area** | `frontend`, `backend`, `docs`, `infrastructure` | What part of the system |
| **Status** | `needs-triage`, `blocked`, `ready` | Additional workflow state |

**Milestones** group issues by target date or release. They answer "what are we shipping in v2.1?" or "what needs to be done by March?" Milestones track completion percentage automatically — as issues close, the progress bar fills.

## Pull Requests

A pull request (PR) is how code changes get reviewed and merged. When someone finishes working on an issue, they create a PR that contains their changes and asks the team to review it.

**How PRs connect to issues:**

1. An engineer (or AI agent) works on Issue #101
2. They create a branch, write the code, and push it
3. They open a PR with a title like "Add push notifications for order status changes"
4. The PR description references the issue: "Closes #101"
5. Reviewers examine the code, leave comments, and approve (or request changes)
6. When the PR is merged, Issue #101 automatically closes

**Why PRs matter for non-technical people:** PRs are the quality gate. They're where the team catches bugs, discusses implementation decisions, and ensures the code meets standards before it reaches users. Understanding that PRs exist (and that they take time) helps set realistic expectations about how quickly changes go from "code is written" to "it's live."

### The Review Process

A typical code review involves:

- **Automated checks** — Tests run automatically when the PR is opened. If tests fail, the code needs fixing before review.
- **Peer review** — One or more team members read the code, check that it meets the requirements, look for bugs, and verify it follows the team's standards.
- **Feedback loop** — Reviewers leave comments. The author addresses them — either making changes or explaining their reasoning. This back-and-forth may take a few rounds.
- **Approval and merge** — Once reviewers approve and all checks pass, the PR is merged into the main codebase.

## The AI Connection

AI coding agents interact with GitHub natively — they don't just write code, they participate in the full workflow that teams use to track and ship software.

**How AI agents use GitHub:**

- **Read issues for context.** An AI agent assigned to Issue #101 reads the title, description, acceptance criteria, and comment thread to understand what needs to be built.
- **Create branches.** The agent creates a dedicated branch for its work, keeping changes isolated until they're reviewed.
- **Write code and commit.** Changes are committed to the branch with descriptive commit messages.
- **Open pull requests.** The agent creates a PR that references the original issue, includes a summary of what changed, and links back to the acceptance criteria.
- **Auto-close issues.** When the PR is merged, the referenced issue closes automatically — completing the loop from "work identified" to "work delivered."
- **Respond to review feedback.** Some AI agents can read PR review comments and make requested changes, creating a back-and-forth similar to human code review.

Understanding this workflow means you can follow along when an AI agent is building something — checking the issue for requirements, watching the PR for progress, and reviewing the changes before they ship.

## Related

- [Software Development Lifecycle](sdlc.md) — the broader cycle that GitHub tools support
- [User Stories & Acceptance Criteria](user-stories.md) — what goes into issue descriptions
- [Roadmaps & Prioritization](roadmapping.md) — how issues connect to strategic priorities via epics and milestones
- [Coding](../use-cases/coding/index.md) — the use case primitive for AI-assisted development
