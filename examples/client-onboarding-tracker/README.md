# Client Onboarding Tracker — Example Artifacts

This folder contains pre-built example artifacts demonstrating the traceability chain from a rough business idea to implementation-ready requirements. These artifacts were created using the [Agentic Coding](../../plugins/agentic-coding/) plugin's vision brief and feature PRD skills.

## The Traceability Chain

```
Rough idea → Vision Brief → Epic → Feature PRDs → Feature Issues
```

1. **Idea:** "A tool that walks new clients through setup, collects their information, assigns tasks, and makes sure nothing falls through the cracks."
2. **Vision Brief:** [`vision-brief.md`](./vision-brief.md) — Structured product vision with problem statement, stakeholders, alternatives considered, capabilities, and a 5-feature breakdown
3. **Epic:** [#132 — [Epic] Client Onboarding](https://github.com/jamesgray-ai/handsonai/issues/132) — GitHub issue tracking the full initiative with a feature checklist
4. **Feature PRD (Feature 1):** [`guided-intake-flow-prd.md`](./guided-intake-flow-prd.md) — Complete PRD for the guided intake flow with user stories, acceptance criteria, error states, and success metrics
5. **Feature Issue:** [#133 — [Feature] Guided Intake Flow](https://github.com/jamesgray-ai/handsonai/issues/133) — GitHub issue for the first feature, linked to the epic
6. **Feature PRD (Feature 2):** [`task-assignment-engine-prd.md`](./task-assignment-engine-prd.md) — Complete PRD for the task assignment engine, demonstrating how a second feature builds on the first

## How These Were Created

| Step | Skill | Input | Output |
|------|-------|-------|--------|
| Vision Brief | `/agentic-coding:writing-vision-briefs` | 3-sentence business idea | `vision-brief.md` + Epic issue |
| Feature PRD (Feature 1) | `/agentic-coding:writing-feature-prds` | Vision brief + Feature 1 | `guided-intake-flow-prd.md` + Feature issue |
| Feature PRD (Feature 2) | `/agentic-coding:writing-feature-prds` | Vision brief + Feature 2 | `task-assignment-engine-prd.md` + Feature issue |

## Using These as Reference

These examples show what "good" looks like at each stage:

- **Vision brief** — Specific problem (30% drop-off, $3K/client), clearly defined users and stakeholders, alternatives considered with justification for building, prioritized capabilities, honest risks, dependencies, and future considerations parking lot
- **PRDs** — Scoped to one feature, user stories with `[MUST]`/`[SHOULD]`/`[COULD]` acceptance criteria, non-functional requirements, error states table, success metrics with instrumentation events, UI/UX requirements, design constraints, verification steps, and revision history
- **Feature 2 PRD** — Shows how a downstream feature references its dependency on Feature 1 and includes event-driven design constraints
- **GitHub tracking** — Epic contains the full feature checklist; each feature issue links back to the epic and its PRD

Try it yourself: start with your own rough idea and run `/agentic-coding:writing-vision-briefs` to see the collaborative conversation in action.
