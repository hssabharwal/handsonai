---
name: writing-feature-prds
description: Use when starting a new feature, defining requirements before implementation, or when the user says "new feature", "create a spec", "create a PRD", or "feature PRD".
user_invocable: true
command: feature-prd
---

# Feature PRD Workflow

Guide the user through creating a well-defined feature PRD (Product Requirements Document) before implementation.

**Important:** A PRD describes **one feature** — a single, buildable piece of work. If the user's idea is bigger than one feature (multiple epics, many capabilities), they should run `/agentic-coding:vision-brief` first to break it down. This skill takes one feature as input, not an entire vision.

## When to Use This Skill

- User wants to build a new feature
- User mentions "create a spec", "create a PRD", "new feature", or "feature PRD"
- User wants to define requirements before coding
- User has completed a Vision Brief and is ready to spec out one of the features from the breakdown

## Workflow Overview

| Phase | Goal |
|-------|------|
| 1. Define | Create PRD in a `specs/` directory |
| 2. Stress-test | Review for gaps and ambiguities |
| 3. Track | GitHub issue with `type:feature` label |
| 4. Handoff | Move to plan mode for implementation planning |

---

## Phase 1: Define the Feature

**First, figure out where the user is coming from:**

**Path A — Coming from a Vision Brief (recommended flow):**
If the user references a Vision Brief or a specific feature from a breakdown (e.g., "Write a PRD for email verification from specs/onboarding-vision.md"):

1. Read the Vision Brief
2. Find the specific feature in the Feature Breakdown section
3. Pre-populate the PRD from the Vision Brief's context, scoped to that one feature
4. Confirm with the user: "I'm writing the PRD for **[Feature Name]** from your Vision Brief. I've pulled in the problem, users, and relevant capabilities. Anything you'd change before I draft the full PRD?"

**Path B — Starting fresh (no Vision Brief):**
If the user doesn't mention a Vision Brief:

1. Ask: "Do you have a Vision Brief for this idea? If so, point me to it and I'll use it as a head start. If not, no worries — I'll walk you through the questions."
2. If they provide one, follow Path A above
3. If they don't have one, check the scope: does their idea sound like one feature, or something bigger?
    - If it sounds like one feature, proceed with the questions below
    - If it sounds bigger (multiple capabilities, multiple user types, multiple workflows), suggest they start with a Vision Brief first: "This sounds like it might be bigger than one feature. Want to run `/agentic-coding:vision-brief` first to break it into pieces? That way we can spec each piece clearly."

Ask the user these questions to understand the feature:

1. **What feature are you building?** (one sentence)
2. **What problem does it solve?** (why does this need to exist?)
3. **Who are the users?** (user type for user stories)
4. **What should happen?** (key behaviors/requirements)

Then create a PRD file. Use this structure for the PRD:

### PRD Template

```markdown
# Feature: [Feature Name]

**Epic:** [Epic Name] (issue #XX) — omit if standalone feature
**Vision Brief:** specs/[name]-vision.md — omit if no Vision Brief exists

## Summary
One-sentence description of the feature.

## Motivation
Why this feature needs to exist. What problem it solves.

## User Stories
- As a [user type], I want [goal] so that [benefit].

## Approach
High-level technical approach and key design decisions.

## Changes
List of files/components to create or modify.

## Acceptance Criteria
1. [Yes/no verifiable statement about expected behavior]
2. [Another verifiable statement]

## Open Questions
- [Any unresolved decisions or questions]
```

### Output Location

Choose the PRD location based on what exists in the repo:
1. If a `specs/` directory exists, use `specs/[feature-name].md`
2. If a `docs/specs/` directory exists, use `docs/specs/[feature-name].md`
3. If the repo's CLAUDE.md specifies a spec output location, use that
4. Otherwise, create `specs/[feature-name].md`

### Acceptance Criteria Rules

Write acceptance criteria following these rules:
- Use numbered list (not checkboxes)
- Write yes/no verifiable statements
- Focus on *what*, not *how*
- Use active voice ("Error message is displayed" not "User sees error")
- Include concrete expected values when possible

---

## Phase 2: Stress-Test the PRD

After drafting the PRD, review it critically:

> "Let me review this PRD critically. What edge cases are missing? Which acceptance criteria are ambiguous?"

Check for:
- Missing edge cases
- Ambiguous acceptance criteria
- Incomplete scope definitions
- Unclear success metrics
- Unresolved open questions

Iterate with the user until the PRD is solid.

---

## Phase 3: Create GitHub Issue

Once the PRD is finalized, create a GitHub issue to track the feature. A GitHub issue is a to-do item in your project that links back to the PRD so you can track progress, leave comments, and close it when the feature ships.

```bash
gh issue create --title "[Feature] Feature Name" --label "type:feature" --body "..."
```

The issue body should include:
- Link to the PRD file
- Summary of the feature
- Key acceptance criteria (can reference PRD for full list)
- **If this feature belongs to an epic:** Reference the epic issue (e.g., "Part of #XX") so the feature is linked to the bigger picture

---

## Phase 4: Handoff to Planning

The PRD defines *what* to build. The next step is planning *how* to build it — Claude will enter **plan mode** to explore the codebase, design the approach, and break the work into implementation tasks before writing any code.

Tell the user:

> "Your PRD and issue are ready. The next step is planning the implementation. Tell Claude:
>
> *'Plan the implementation for specs/[feature-name].md (tracked in issue #XX)'*
>
> Claude will enter plan mode — it'll explore your codebase, design the approach, and present an implementation plan for your approval before writing any code."

---

## Quick Reference

See [workflow-checklist.md](references/workflow-checklist.md) for a condensed checklist.
