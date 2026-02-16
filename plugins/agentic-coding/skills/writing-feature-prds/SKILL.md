---
name: writing-feature-prds
description: Use when starting a new feature, defining requirements before implementation, or when the user says "new feature", "create a spec", "create a PRD", or "feature PRD".
user_invocable: true
command: feature-prd
---

# Feature PRD Workflow

Guide the user through creating a well-defined feature PRD (Product Requirements Document) before implementation.

## When to Use This Skill

- User wants to build a new feature
- User mentions "create a spec", "create a PRD", "new feature", or "feature PRD"
- User wants to define requirements before coding

## Workflow Overview

| Phase | Goal |
|-------|------|
| 1. Define | Create PRD in a `specs/` directory |
| 2. Stress-test | Review for gaps and ambiguities |
| 3. Create Issue | GitHub issue with `type:feature` label |
| 4. Handoff | User runs `/feature-dev` to implement |

---

## Phase 1: Define the Feature

Ask the user these questions to understand the feature:

1. **What feature are you building?** (one sentence)
2. **What problem does it solve?** (why does this need to exist?)
3. **Who are the users?** (user type for user stories)
4. **What should happen?** (key behaviors/requirements)

Then create a PRD file. Use this structure for the PRD:

### PRD Template

```markdown
# Feature: [Feature Name]

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

Once the PRD is finalized, create a GitHub issue:

```bash
gh issue create --title "[Feature] Feature Name" --label "type:feature" --body "..."
```

The issue body should include:
- Link to the PRD file
- Summary of the feature
- Key acceptance criteria (can reference PRD for full list)

---

## Phase 4: Handoff to Implementation

Tell the user:

> "The PRD and issue are ready. To implement, run:
> ```
> /feature-dev
> ```
> Then tell Claude: 'Implement specs/[feature-name].md (tracked in issue #XX)'"

---

## Quick Reference

See [workflow-checklist.md](references/workflow-checklist.md) for a condensed checklist.
