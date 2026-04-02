---
title: User Stories & Acceptance Criteria
description: How to write user stories and acceptance criteria — the building blocks of product requirements that also serve as an AI agent's test plan
date: 2026-02-16
author: James Gray
---User stories and acceptance criteria are the building blocks of product requirements. A user story describes what someone needs. Acceptance criteria define how you know you've delivered it. Together, they turn broad requirements into buildable, testable pieces of work.

## User Stories

A user story captures a requirement from the perspective of the person who benefits from it. The standard format is:

> **As a** [type of user], **I want** [goal], **so that** [reason].

The three parts force you to think about three things that matter:

- **Who** needs this (not all users are the same)
- **What** they need (the capability, not the implementation)
- **Why** they need it (the value it delivers)

### Good vs. Bad Stories

| Bad Story | Why It's Bad | Better Story |
|-----------|-------------|--------------|
| "As a user, I want notifications" | No specific user, no goal, no reason | "As a customer, I want to receive push notifications for order status changes, so that I don't have to keep checking the app" |
| "Build a search feature" | Not a user story at all — it's a task description | "As a support agent, I want to search customer accounts by email or phone number, so that I can find their account quickly during a call" |
| "As a user, I want a fast database" | Technical implementation, not user need | "As a customer, I want search results to appear within 2 seconds, so that I can find products without waiting" |

### What Makes a Good Story

- **Independent** — Can be built and delivered on its own, without depending on other stories being finished first
- **Valuable** — Delivers something the user cares about (not just a technical task)
- **Testable** — You can demonstrate that it works (or doesn't)
- **Small enough to complete in a sprint** — If it's too big, break it down

## Acceptance Criteria

Acceptance criteria are the yes/no statements that define "done." They remove ambiguity by making expectations explicit and testable. Without them, "done" means something different to every person on the team.

### Format Options

**Numbered checklist** — Simple and direct. Each item is a verifiable statement.

> 1. Push notification is sent within 5 minutes of order status change
> 2. Notification includes the order number and new status
> 3. Tapping the notification opens the order detail screen
> 4. Users who disabled notifications do not receive them
> 5. Notification is not sent if the customer is currently viewing the order

**Given/When/Then** — More structured. Useful when the behavior depends on specific conditions.

> **Given** a customer has an active order and notifications enabled,
> **When** the order status changes to "Shipped,"
> **Then** a push notification is sent within 5 minutes containing the order number and tracking link.

Both formats work. Pick the one that communicates more clearly for your team. The numbered checklist is often easier for non-technical stakeholders. Given/When/Then is common in engineering teams because it maps well to automated tests.

### Vague vs. Testable Criteria

| Vague | Why It's Vague | Testable |
|-------|---------------|----------|
| "Page loads quickly" | What's "quickly"? | "Page loads in under 2 seconds on a 4G connection" |
| "Error handling should be good" | What does "good" mean? | "Invalid email displays 'Please enter a valid email address' below the field" |
| "Works on mobile" | Which devices? What counts as "works"? | "Layout renders correctly on screens 320px wide and larger, with no horizontal scrolling" |
| "Should be secure" | Every stakeholder defines this differently | "Passwords are hashed using bcrypt. Sessions expire after 30 minutes of inactivity" |

### How Many Criteria Per Story

A well-scoped user story typically has **3 to 7 acceptance criteria**. Fewer than 3 usually means you haven't thought through edge cases. More than 7 usually means the story is too big and should be split.

## The Specificity Ladder

Requirements get more specific as they move from strategy to implementation:

| Level | What It Is | Example |
|-------|-----------|---------|
| **Epic** | A large initiative spanning multiple stories | "Real-time order tracking" |
| **User Story** | One piece of user-facing functionality | "As a customer, I want push notifications for order status changes" |
| **Acceptance Criteria** | Yes/no conditions that define "done" | "Notification is sent within 5 minutes of status change" |
| **Test Case** | A specific scenario to verify one criterion | "Change order status to 'Shipped' → verify notification received in < 5 min with correct order number" |

Each level serves a different audience. Executives think in epics. Product managers work in stories. Engineers and QA need acceptance criteria and test cases. AI coding agents work best with acceptance criteria — they're specific enough to implement against and verify.

## The AI Connection

Acceptance criteria become the AI agent's test plan.

When an AI coding agent works from a user story with clear acceptance criteria, it follows a loop:

1. Read the acceptance criteria to understand what "done" means
2. Write code to implement the story
3. Check each criterion — does the code satisfy it?
4. If not, iterate — fix the code and check again

This is the same loop a human engineer follows, but AI agents execute it literally. They don't fill in gaps with assumptions the way a human might. If a criterion says "notification is sent within 5 minutes," the agent implements that. If the criterion doesn't mention what happens when the user is offline, the agent may not handle it.

**Better criteria = better AI output.** The specificity of your acceptance criteria directly controls the quality of AI-generated code. Vague criteria produce code that "works" in the happy path but fails on edge cases. Precise criteria produce code that handles the cases you care about.

## Related

- [Product Requirements](requirements.md) — the PRD that user stories break down from
- [Software Development Lifecycle](sdlc.md) — where stories fit in the sprint cycle
- [Project Tracking with GitHub](tracking.md) — how stories become issues that move across a board
- [Agents](../agentic-building-blocks/agents/index.md) — AI agents that implement and verify against acceptance criteria
