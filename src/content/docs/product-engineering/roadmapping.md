---
title: Roadmaps & Prioritization
description: How to decide what to build first — product roadmaps and prioritization frameworks like RICE, MoSCoW, and Impact/Effort explained for non-technical readers
date: 2026-02-16
author: James Gray
---A product roadmap is a plan of what you'll build over time. Prioritization is how you decide the order. Together, they answer the question every team faces: "We have more ideas than capacity — what do we work on first?"

## What a Roadmap Is (and Isn't)

A roadmap **is** a communication tool that shows the direction the product is heading and the major initiatives planned along the way. It helps stakeholders understand what's coming, why it matters, and roughly when to expect it.

A roadmap **is not** a promise of exact delivery dates. The further out you look, the less certain any plan becomes. Treating a roadmap as a contract leads to teams cutting corners to hit dates rather than delivering quality.

## Types of Roadmaps

| Type | How It's Organized | Best For |
|------|-------------------|----------|
| **Time-based** | Quarters or months with specific features mapped to timeframes | Teams with predictable capacity and external commitments (launches, partnerships) |
| **Theme-based** | Grouped by strategic theme ("Improve onboarding," "Scale infrastructure") without fixed dates | Teams where the sequence matters more than the timing |
| **Outcome-based** | Organized around measurable outcomes ("Reduce churn by 20%") with flexible approaches | Teams focused on results rather than specific features |

Most teams start with time-based roadmaps because they're intuitive. Outcome-based roadmaps are harder to build but more resilient — if one approach to reducing churn doesn't work, the roadmap doesn't break, you just try a different approach.

## Prioritization Frameworks

When everything feels important, frameworks give you a structured way to compare options and make defensible decisions.

### RICE

RICE scores each initiative on four dimensions and produces a single number for comparison.

| Factor | What It Measures | How to Estimate |
|--------|-----------------|----------------|
| **Reach** | How many people will this affect in a given time period? | Number of users/customers per quarter |
| **Impact** | How much will it affect each person? | Score: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal |
| **Confidence** | How sure are you about the above estimates? | Percentage: 100% = high, 80% = medium, 50% = low |
| **Effort** | How many person-months will this take? | Estimate in person-months |

**Formula:** RICE Score = (Reach × Impact × Confidence) / Effort

**Worked example:**

| Initiative | Reach | Impact | Confidence | Effort | Score |
|-----------|-------|--------|------------|--------|-------|
| Push notifications | 5,000 | 2 | 80% | 2 | **4,000** |
| Admin dashboard redesign | 50 | 3 | 90% | 4 | **34** |
| Search improvements | 3,000 | 1 | 60% | 1 | **1,800** |

Push notifications score highest because they reach many users with meaningful impact at reasonable effort. The admin dashboard helps fewer people despite high impact per person. RICE makes this comparison explicit rather than leaving it to intuition.

### MoSCoW

MoSCoW sorts items into four buckets. It's useful for a single release or project where you need to agree on what's in and what's out.

| Category | Meaning | Example |
|----------|---------|---------|
| **Must have** | Non-negotiable. The release fails without these. | User authentication, core data model |
| **Should have** | Important but not critical. Can ship without them if needed. | Email notifications, export to CSV |
| **Could have** | Nice to have. Include if time allows. | Dark mode, keyboard shortcuts |
| **Won't have** | Explicitly out of scope for this release (may be revisited later). | Multi-language support, mobile app |

The power of MoSCoW is in the "Won't have" category. Making explicit decisions about what you're *not* doing prevents scope creep and gives the team permission to focus.

### Impact/Effort Matrix

The simplest framework: a 2×2 grid with Impact on one axis and Effort on the other.

| | Low Effort | High Effort |
|---|-----------|-------------|
| **High Impact** | **Do first** — Quick wins with big payoff | **Plan carefully** — Worth it, but invest in good requirements |
| **Low Impact** | **Fill in gaps** — Do when capacity allows | **Avoid** — High cost, low return |

The matrix works well for quick triage — sorting a backlog in a planning meeting, for example. It's less precise than RICE but faster to apply and easier for non-technical stakeholders to participate in.

## Saying No

Prioritization is really about what you *don't* build. Every "yes" is an implicit "not yet" to everything else. The hardest part of product management isn't generating ideas — it's choosing which good ideas to defer.

**Practical tips for saying no (or "not yet"):**

- **Tie decisions to strategy.** "This is a great idea, but it doesn't move our top metric this quarter" is easier to hear than "no."
- **Make trade-offs visible.** "We can do A or B this sprint, but not both. Which matters more?" gives stakeholders agency without overcommitting the team.
- **Revisit regularly.** "Won't have" doesn't mean "never." Roadmaps evolve. Items that were deprioritized may become urgent as conditions change.

## The AI Connection

AI changes the effort equation — and that reshuffles priorities.

When AI coding agents can build features in hours that previously took weeks, the Impact/Effort matrix shifts. Initiatives that were in the "High Impact / High Effort" quadrant (plan carefully) may move to "High Impact / Low Effort" (do first). This means:

- **Roadmaps need re-evaluation.** Features that were deprioritized due to high effort may now be quick wins. Teams that understand prioritization frameworks can systematically reassess their backlogs with AI capabilities in mind.
- **Experimentation becomes cheaper.** When building something costs a few hours instead of a sprint, you can try more ideas and kill the ones that don't work. This favors outcome-based roadmaps — try multiple approaches to a goal and see what moves the metric.
- **The bottleneck shifts to decisions.** With AI accelerating the build phase, the limiting factor becomes knowing *what* to build. Prioritization skills become more valuable, not less.

## Related

- [Product Requirements](requirements.md) — the PRD for each prioritized initiative
- [Stakeholder Management](stakeholder-management.md) — getting buy-in on priorities and communicating trade-offs
- [Software Development Lifecycle](sdlc.md) — how prioritized work flows through sprints
- [Automation](../use-cases/automation/index.md) — automating repetitive work that AI makes low-effort
