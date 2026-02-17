---
name: writing-vision-briefs
description: Use when a user has a fuzzy idea they want to explore before writing a formal PRD. Captures the essence of an idea as a Vision Brief — a structured, business-focused artifact that feeds directly into the feature-prd workflow.
user_invocable: true
command: vision-brief
---

# Vision Brief Workflow

Guide the user through capturing a fuzzy idea as a structured Vision Brief — a business-focused artifact that clarifies what they want to build and why, before diving into technical specs.

## When to Use This Skill

- User has an early-stage idea that isn't ready for a PRD yet
- User says things like "I have an idea," "I'm thinking about," "what if we," or "I want to explore"
- User needs help articulating what they want to build in plain language
- User wants to validate an idea before committing to a full spec

## Workflow Overview

| Phase | Goal |
|-------|------|
| 1. Discover | Ask questions one at a time to understand the idea |
| 2. Refine | Present the draft Vision Brief, iterate until solid |
| 3. Scope | Assess the size — is this one feature or multiple? Break it down |
| 4. Handoff | Save everything and guide the user to their first feature PRD |

---

## Phase 1: Discover

Ask the user questions **one at a time**. Use multiple-choice options when possible to reduce cognitive load. Wait for each answer before asking the next question.

### Question sequence

**Question 1 — The Problem:**
> "What's the pain point or missed opportunity you're trying to address? In a sentence or two, what frustrates you (or your users) today?"

**Question 2 — Who Feels It:**
> "Who specifically experiences this problem? What's their role or situation?"

Offer multiple-choice options based on common user types if the context suggests them. For example:
- (a) End users / customers
- (b) Internal team members
- (c) Administrators / managers
- (d) Someone else — describe them

**Question 3 — The Vision:**
> "Imagine this problem is solved. What does the ideal outcome look like? Don't describe a solution — describe the result."

**Question 4 — Key Capabilities:**
> "What 3-5 things must the solution be able to do? Write them from the user's perspective — 'I can...' or 'Users can...'"

If the user gives a vague answer, help them break it down:
> "Let me help break that down. It sounds like you need: [a], [b], and [c]. What am I missing?"

**Question 5 — Success:**
> "How will you know it's working? Think business outcomes — what changes for the better?"

**Question 6 — Constraints:**
> "What's already in place? Any boundaries I should know about — budget, timeline, existing tools, audience size?"

If the user says "none" or "not sure," that's fine — note it in the brief and move on.

### Tone guidelines

- Use plain language. No technical jargon (no "architecture," "components," "data flow," "API").
- Be encouraging and conversational. This is ideation, not interrogation.
- If the user gives a long, rambling answer, reflect it back concisely: "So the core problem is [X] — does that capture it?"
- If the user is struggling, offer examples: "For instance, some people describe success as 'we cut response time in half' or 'customers stop asking the same question.' What would yours be?"

---

## Phase 2: Refine

After gathering all answers, draft a Vision Brief using the template in [vision-brief-template.md](references/vision-brief-template.md).

Present the draft to the user:

> "Here's your Vision Brief. Read through it and tell me what needs adjusting — I'll refine until it feels right."

Iterate until the user is satisfied. Common refinements:
- Tightening the problem statement
- Adding or removing capabilities
- Clarifying who the users really are
- Sharpening the success criteria

---

## Phase 3: Scope

After the Vision Brief is solid, assess the size of the work. A vision often contains multiple features — building everything at once would be too much. This phase breaks the vision into pieces the user can build one at a time.

### Assess the scope

Review the Vision Brief's **Key Capabilities** section and ask:

> "Let's figure out the scope. Looking at your vision, I see [N] capabilities. Some visions are small enough to build as a single feature. Bigger visions need to be broken into smaller pieces so you can build and ship them one at a time.
>
> Let me break this down for you."

### How to break it down

Use this hierarchy:

| Level | What it means | Example |
|-------|--------------|---------|
| **Vision** | The big-picture outcome you described | "Modernize customer onboarding" |
| **Epic** | A major chunk of work within the vision — too big to build at once, but a clear theme | "Self-service signup flow" or "Admin dashboard" |
| **Feature** | One specific, buildable piece — small enough to plan and implement in a focused sprint | "Email verification step" or "Progress indicator" |

**Rules for good features:**
- Each feature is independently useful — it delivers value on its own, even if other features aren't built yet
- Each feature can be described in one sentence
- Each feature could be built and shipped without waiting for the others
- A feature is NOT a single button or field — it's a complete, working behavior from the user's perspective

### Present the breakdown

Present the breakdown as a simple outline:

> "Here's how I'd break your vision into buildable pieces:
>
> **Epic 1: [Epic Name]**
>
> - Feature 1a: [one-sentence description]
> - Feature 1b: [one-sentence description]
>
> **Epic 2: [Epic Name]**
>
> - Feature 2a: [one-sentence description]
> - Feature 2b: [one-sentence description]
>
> Each feature becomes its own spec that we'll plan and build separately. Does this breakdown feel right? Want to add, combine, or split anything?"

**If the vision is small** (1-3 capabilities that naturally form a single feature):

> "This vision is focused enough to build as a single feature — no need to break it into smaller pieces. Let's move straight to writing the spec."

In this case, there are no epics. Skip the epic issue creation and go directly to Phase 4 handoff with one feature.

### Iterate the breakdown

Work with the user until they're happy with the breakdown. Common adjustments:
- Splitting a feature that's still too big ("That's really two things — X and Y")
- Combining features that don't make sense alone ("These only work together, let's merge them")
- Reordering to identify what to build first
- Moving a feature between epics

### Recommend a starting point

Once the breakdown is approved, recommend which feature to build first:

> "I'd suggest starting with **[Feature Name]** because [reason — e.g., 'it's the foundation the other features build on' or 'it delivers the most value with the least effort' or 'it's the simplest way to validate the idea']."
>
> "Which feature would you like to start with?"

### Create epic issues

For each epic in the breakdown, create a GitHub issue to track it:

```bash
gh issue create --title "[Epic] Epic Name" --label "type:epic" --body "..."
```

The epic issue body should include:
- Link to the Vision Brief file
- The full feature breakdown for that epic (as a checklist)
- Note that individual feature issues will reference this epic

---

## Phase 4: Handoff

### Save the Vision Brief

Choose the output location based on what exists in the repo:
1. If a `specs/` directory exists, use `specs/[name]-vision.md`
2. If a `docs/specs/` directory exists, use `docs/specs/[name]-vision.md`
3. If the repo's CLAUDE.md specifies a spec output location, use that (with `-vision` suffix)
4. Otherwise, create `specs/[name]-vision.md`

**Include the feature breakdown in the Vision Brief.** After the Open Questions section, add:

```markdown
## Feature Breakdown

### Epic 1: [Epic Name] (issue #XX)
- [ ] Feature 1a: [one-sentence description]
- [ ] Feature 1b: [one-sentence description]

### Epic 2: [Epic Name] (issue #XX)
- [ ] Feature 2a: [one-sentence description]
- [ ] Feature 2b: [one-sentence description]

**Recommended starting feature:** [Feature Name] — [reason]
```

If the vision is a single feature (no epics), omit this section.

### Guide the user to the next step

**If the vision was broken into features:**

> "Your Vision Brief and feature breakdown are saved at `specs/[name]-vision.md`. I've created epic issues to track the big picture.
>
> The next step is writing a detailed spec for your first feature: **[Feature Name]**. Run:
> ```
> /agentic-coding:feature-prd
> ```
> Then tell Claude: *'Write a PRD for [Feature Name] from the Vision Brief at specs/[name]-vision.md (epic issue #XX)'*
>
> You'll repeat this for each feature in the breakdown — one PRD at a time, one feature at a time."

**If the vision is a single feature:**

> "Your Vision Brief is saved at `specs/[name]-vision.md`. This is focused enough to build as a single feature. Run:
> ```
> /agentic-coding:feature-prd
> ```
> Then tell Claude: *'Use the Vision Brief at specs/[name]-vision.md as the starting point.'*"

---

## Quick Reference

See [vision-brief-template.md](references/vision-brief-template.md) for the template structure.

### How visions become features

```
Vision Brief
  → Scope assessment
    → Epic(s) — tracked as GitHub issues with type:epic
      → Feature(s) — each one gets its own PRD in Step 1
        → PRD → Plan → Implement → Ship
```

### Vision Brief → PRD mapping

When writing a PRD for a single feature from a Vision Brief, these sections map directly:

| Vision Brief Section | Maps to PRD Input |
|---------------------|-------------------|
| The Problem | "What problem does it solve?" |
| Who Feels It | "Who are the users?" |
| The Vision | "What feature are you building?" |
| Key Capabilities | "What should happen?" (scoped to this feature) |
| What Success Looks Like | Acceptance criteria seed |
| Constraints & Context | Open questions / scope |
