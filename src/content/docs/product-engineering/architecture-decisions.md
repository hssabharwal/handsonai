---
title: Architecture Decision Records
description: What architecture decisions are, why recording them matters, and how to write lightweight ADRs that keep your team aligned as projects grow
date: 2026-02-18
author: James Gray
---An Architecture Decision Record (ADR) is a short document that captures **why** you made a specific technical or design choice. Not what you built or how you built it — those live in your code and your plan. An ADR records the moment you stood at a fork in the road, looked at the options, and chose a direction.

## Why This Matters

Every project accumulates decisions. Early on, they're obvious — everyone remembers why you picked one approach over another. Six months later, the context is gone. Someone looks at the code and asks:

- "Why did we use a flat file structure instead of a database?"
- "Why did we send email notifications instead of SMS?"
- "Why did we split this into two tools instead of one?"

Without a record, you have two bad options: guess at the original reasoning, or re-debate the decision from scratch. Both waste time. An ADR gives future-you (and future teammates) the answer in thirty seconds.

## What Makes a Good ADR

A good ADR is short — typically half a page. It answers four questions:

1. **What was the situation?** (Context)
2. **What options did you consider?** (Options)
3. **What did you decide?** (Decision)
4. **What happens as a result?** (Consequences)

That's it. If you can answer those four questions in a few sentences each, you have a useful ADR.

### What's Not an ADR

Not every choice needs an ADR. You don't need one for:

- Routine implementation details ("I used a `for` loop instead of `.map()`")
- Choices with only one viable option ("We used MkDocs because the whole site is built on it")
- Temporary decisions that won't outlast the current session

Write an ADR when there's a **real fork in the road** — when you considered two or more reasonable approaches, weighed trade-offs, and made a judgment call. If someone could reasonably have chosen differently, it's worth recording why you didn't.

## When Decisions Happen

Decisions don't all happen at the same stage. They surface throughout the early phases of a project:

**During discovery** (exploring the idea):

- "Should this be one feature or multiple?"
- "Is this a plugin, a standalone script, or a docs page?"
- "Should we build this for all platforms or start with one?"

**During requirements** (defining what to build):

- "JWT or session-based authentication?"
- "Flat URL structure or nested?"
- "Should users configure this via a file or a UI?"

**During planning** (designing how to build it):

- "New database table or extend the existing one?"
- "Build our own or use a third-party library?"
- "Where should this file live in the project structure?"

The common thread: all of these are choices that shape the project and would be hard to reconstruct later without a record.

## A Simple Template

```markdown
# NNN — Title

**Status:** Accepted
**Date:** YYYY-MM-DD
**Step:** Discover | Define | Plan

## Context
What prompted the decision and why it matters.

## Options Considered
1. **Option A** — tradeoffs
2. **Option B** — tradeoffs

## Decision
Which option and why.

## Consequences
What changes as a result — both positive and negative.
```

The four core sections (Context, Options, Decision, Consequences) are the heart of every ADR. The metadata at the top — Status, Date, and Step — is lightweight bookkeeping that helps you find and manage ADRs over time. The **Step** field records which phase of your development process the decision came from (exploring the idea, defining requirements, or planning the implementation).

**File naming:** Use a zero-padded number and a short descriptive slug: `001-plan-files-alongside-prds.md`, `002-flat-url-structure.md`.

**Where to store them:** Keep ADRs near the specs they relate to — a `specs/decisions/` directory works well. They're part of the project's design history, not operational documentation.

## ADR Status

Most ADRs stay `Accepted` forever. Occasionally a later decision overrides an earlier one — when that happens, update the old ADR's status to `Superseded by NNN` and link to the new one. This preserves the history: you can see what you originally decided, why, and when the thinking changed.

Don't delete superseded ADRs. The reasoning in the original is still valuable — it explains what you knew at the time and why the trade-offs looked different then.

## Why ADRs Matter More with AI

When working with AI coding agents, ADRs become more important, not less. Here's why:

- **AI agents don't remember past sessions.** The context that informed a decision evaporates between conversations. An ADR gives the agent the reasoning it needs to stay consistent with earlier choices.
- **AI can help write ADRs.** When you make a decision during a session, ask the agent to draft the ADR while the context is fresh. It takes seconds and saves hours of archaeology later.
- **ADRs improve AI output.** Including relevant ADRs in your project instructions (like a `CLAUDE.md` file) helps the agent understand not just what the codebase looks like, but *why* it looks that way. This leads to suggestions that align with your design intent instead of fighting it.

## Related

- [Product Requirements](requirements.md) — where many design decisions first surface
- [Software Development Lifecycle](sdlc.md) — the broader process ADRs fit into
- [Roadmaps & Prioritization](roadmapping.md) — strategic decisions that often generate ADRs
- [Project Tracking with GitHub](tracking.md) — where ADR-related issues get tracked
