# Content Calendar Planning — AI Building Block Spec

## Execution Pattern

**Skill-Powered Prompt** — A conversational prompt that orchestrates a collaborative planning session between James and AI. Skills handle the repeatable data operations (querying databases, committing entries). The prompt drives the creative reasoning (theme selection, channel mapping, sequencing). Human-in-the-loop at key decision points.

**Rationale:** This is a collaborative, conversational workflow where James and AI riff together on content strategy. The tool use (Notion reads/writes) is concentrated at the bookends (Steps 1-4 and Step 10), while the middle steps (5-9) are pure reasoning and dialogue. A full agent would over-automate the creative decisions that benefit from human judgment.

---

## Scenario Summary

| Field | Value |
|---|---|
| **Workflow Name** | Content Calendar Planning |
| **Description** | Plan and sequence content across LinkedIn, Substack Newsletter, X, and YouTube for a 2-week rolling window. Reviews performance, checks business priorities, proposes AI-generated weekly themes balanced across three content pillars, maps ideas to channels, and commits titled Post entries with planned dates to the Content Calendar and Posts databases. |
| **Outcome** | Approved 2-week content plan with Post entries committed to Notion |
| **Trigger** | Weekly (Sunday) |
| **Type** | Augmented |
| **Business Process** | Content Distribution (Marketing) |
| **Owner** | James Gray |

---

## Step-by-Step Decomposition

| Step | Name | Phase | Autonomy | Building Block(s) | Skill Candidate? | Human Gate? |
|---|---|---|---|---|---|---|
| 1 | Review recent content performance | Input Gathering | AI-Deterministic | Skill + MCP | `reviewing-content-performance` | No |
| 2 | Review content idea backlog | Input Gathering | AI-Deterministic | Skill + MCP | `reviewing-content-backlog` | No |
| 3 | Capture fresh ideas | Input Gathering | Human + AI-Assist | Existing Skill (`registering-content-ideas`) | Exists | Yes |
| 4 | Check upcoming business priorities | Input Gathering | AI-Deterministic | Skill + MCP | `checking-business-priorities` | No |
| 5 | Select ideas and set weekly themes | Planning | AI-Semi-Autonomous | Prompt (inline) | No | Yes |
| 6 | Map ideas to channels | Planning | AI-Semi-Autonomous | Prompt + Context | No | Yes |
| 7 | Create post plan | Planning | AI-Semi-Autonomous | Prompt + Context | No | No |
| 8 | Sequence and balance | Planning | AI-Semi-Autonomous | Prompt + Context | No | No |
| 9 | Refine and approve the plan | Approval | Human + AI-Assist | Prompt (conversational loop) | No | Yes |
| 10 | Commit content plan | Execution | AI-Deterministic | Skill + MCP | `committing-content-plan` | No |

### Autonomy Spectrum Summary

- **AI-Deterministic** (Steps 1, 2, 4, 10): Mechanical data operations — query or write databases, no judgment needed. Fully automated via skills.
- **AI-Semi-Autonomous** (Steps 5, 6, 7, 8): AI proposes, human reacts and approves. Driven by inline prompt instructions.
- **Human + AI-Assist** (Steps 3, 9): Human drives, AI supports. Step 3 uses existing skill. Step 9 is the critical approval gate.

---

## Skill Candidates

### 1. `reviewing-content-performance` (Step 1)

| Dimension | Detail |
|---|---|
| **Purpose** | Query the Posts database for recent published posts and summarize performance signals to inform content planning decisions. |
| **Inputs** | Lookback window (default: 14 days) |
| **Outputs** | Performance summary: top 3 performers (topic, channel, metrics), underperformers, "do more of / stop doing" signals. If no metrics data, returns qualitative guidance. |
| **Decision Logic** | Sort by Impressions desc, then Engagement Rate. Flag any post with 2x average impressions as a top performer. Flag any with <50% of average as underperformer. If no metrics data, return "No metrics available — qualitative review needed." |
| **Failure Modes** | No published posts in window → return empty summary with note. No metrics populated → flag dependency on Content Performance Collection workflow. |

### 2. `reviewing-content-backlog` (Step 2)

| Dimension | Detail |
|---|---|
| **Purpose** | Query the Content Calendar for all "Idea" entries and present a prioritized backlog summary with pillar balance analysis. |
| **Inputs** | None (always queries Status = "Idea") |
| **Outputs** | Backlog summary: total count, breakdown by Content Pillar (Master AI / Master Yourself / Build What Matters), list sorted by Priority then Date Added, timeliness flags, pillar imbalance warnings. |
| **Decision Logic** | Count ideas per pillar to surface imbalances. Flag any idea older than 30 days as potentially stale. Flag any with Priority = "Critical" or "High" as must-consider. Identify pillar with fewest ideas. |
| **Failure Modes** | Empty backlog → return "Backlog empty — Step 3 (Capture Fresh Ideas) is critical this week." |

### 3. `checking-business-priorities` (Step 4)

| Dimension | Detail |
|---|---|
| **Purpose** | Query the Cohorts database for upcoming launches and surface promotional content needs with recommended intensity levels. |
| **Inputs** | Lookahead window (default: 6 weeks) |
| **Outputs** | List of upcoming cohorts with: Name, Course, Start Date, weeks until start, recommended promotional intensity (light/medium/heavy). Summary of promotional content needs. |
| **Decision Logic** | 6+ weeks out = light (awareness content, 1 post/week). 3-5 weeks = medium (value-driven content, 2 posts/week). 1-2 weeks = heavy (urgency/enrollment-focused, 3+ posts/week). Active cohort = no promo needed. No upcoming cohorts = plan 100% organic. |
| **Failure Modes** | No upcoming cohorts → return "No upcoming launches — plan 100% organic content." |

### 4. `committing-content-plan` (Step 10)

| Dimension | Detail |
|---|---|
| **Purpose** | Write the approved content plan to both the Content Calendar and Posts databases. |
| **Inputs** | Approved plan containing: (1) Content ideas with pillar, effort, priority, planned date, and Content Calendar entry URL. (2) Posts with title, channel, source content link, planned date, and angle/hook notes. |
| **Outputs** | Confirmation with: count of Content Calendar entries updated, count of Post entries created, links to entries. |
| **Decision Logic** | For each content idea: update Status → "Planned", set Content Pillar, Effort, Priority, Planned Date. For each post: create entry in Posts DB with Post Title, Channel, Source Content relation (linked to Content Calendar entry), Planned Date, Status = "Draft", angle/hook in Notes field. Always validate Source Content relation is set before creating Post entries. |
| **Failure Modes** | API failure → retry once, then report which entries failed. Missing Source Content link → error, do not create orphan posts. Duplicate post detection → check for existing Draft post with same title and channel before creating. |

### Existing Skill: `registering-content-ideas` (Step 3)

Already deployed. Used when James adds new ideas to the Content Calendar during Step 3.

---

## Step Sequence and Dependencies

```
Step 1 (Performance) ──┐
Step 2 (Backlog) ──────┤──> Step 5 (Select & Theme) ──> Step 6 (Map Channels)
Step 3 (Fresh Ideas) ──┤                                     │
Step 4 (Priorities) ───┘                                     ▼
                                                        Step 7 (Post Plan)
                                                             │
                                                             ▼
                                                        Step 8 (Sequence)
                                                             │
                                                             ▼
                                                        Step 9 (Refine & Approve)
                                                             │
                                                             ▼
                                                        Step 10 (Commit)
```

**Parallel:** Steps 1, 2, 4 can run in parallel (independent data pulls). Step 3 benefits from Step 2 completing first.

**Sequential:** Steps 5 → 6 → 7 → 8 → 9 → 10 must run in sequence.

**Critical Path:** Steps 2 → 5 → 6 → 7 → 8 → 9 → 10

---

## Prerequisites

1. Content Calendar database exists with Status options: Idea, Planned, In Progress, In Review, Published
2. Posts database exists with Channel options and Source Content relation to Content Calendar
3. Cohorts database exists with Status options: Upcoming, Active, Completed
4. Content Pillar options set to: Master AI, Master Yourself, Build What Matters
5. Notion MCP server configured and accessible
6. `registering-content-ideas` skill deployed

---

## Context Inventory

| # | Artifact | Type | Used By | Status | Key Contents |
|---|---|---|---|---|---|
| 1 | Content Calendar DB | MCP Data Source | Steps 2, 3, 5, 10 | Exists | Status options: Idea, Planned, In Progress, In Review, Published. Content Pillars: Master AI, Master Yourself, Build What Matters. |
| 2 | Posts DB | MCP Data Source | Steps 1, 7, 8, 10 | Exists | Channels: LinkedIn Post, LinkedIn Newsletter, Substack Newsletter, Substack Note, X, YouTube, + others. Status: Draft, Scheduled, Published, Archived. |
| 3 | Cohorts DB | MCP Data Source | Step 4 | Exists | Status: Upcoming, Active, Completed. Key fields: Start Date, Course, Name. |
| 4 | Content pillar definitions | Context | Steps 5, 6, 9 | Exists | Master AI, Master Yourself, Build What Matters — with full descriptions |
| 5 | Channel cadence targets | Context | Steps 6, 8, 9 | Create inline | LinkedIn: 3/wk, Substack Newsletter: 3-5/wk, X article: 1/wk, YouTube: 1/wk |
| 6 | Channel-format fit rules | Context | Step 6 | Create inline | Substack: deep dives (800-2000 words). LinkedIn: insights (200-500 words). X: opinionated (500-1500 words). YouTube: tutorials (5-15 min). |
| 7 | Graymatter brand voice | Context | Steps 5, 6, 7 | Exists | "Curated intelligence for professionals overwhelmed by AI noise." |
| 8 | Business calendar | External | Step 4 | Exists | Google Calendar — checked manually |
| 9 | Performance benchmarks | Context | Step 1 | Needs Creation | To be built over time via Content Performance Collection workflow |

---

## Tools and Connectors

| Tool | Used By Steps | Purpose |
|---|---|---|
| Notion MCP Server | 1, 2, 3, 4, 10 | Query and write to Content Calendar, Posts, and Cohorts databases |
| `registering-content-ideas` skill | 3 | Register new content ideas to Content Calendar |
| `reviewing-content-performance` skill | 1 | Query Posts DB and summarize performance |
| `reviewing-content-backlog` skill | 2 | Query Content Calendar and present prioritized backlog |
| `checking-business-priorities` skill | 4 | Query Cohorts DB and surface promotional needs |
| `committing-content-plan` skill | 10 | Write approved plan to both Notion databases |

---

## Recommended Implementation Order

### Quick Wins (implement first)
1. **Baseline Workflow Prompt** — Get the conversational flow working end-to-end. Steps 5-9 are pure prompt logic and need no infrastructure.
2. **`reviewing-content-backlog`** — Simple query, high value. This is the most-used input step.
3. **`checking-business-priorities`** — Simple query, prevents missed promotional opportunities.

### Semi-Autonomous (implement second)
4. **`reviewing-content-performance`** — Depends on Posts DB having metrics data. Start with the "no metrics" fallback path, enhance when Content Performance Collection workflow is built.
5. **`committing-content-plan`** — The execution step. More complex (writes to two databases with relations). Build after the planning flow is validated.

### Future Enhancement
6. **`registering-content-ideas`** — Already exists and deployed. No work needed.
7. **Content Performance Collection workflow** — Separate workflow (Backlog). Unlocks the full potential of Step 1.

---

## Where to Run

**Claude Code** with Notion MCP server connected. The workflow prompt runs as a conversational session. Skills are stored in `.claude/skills/` and invoked during the conversation. The Notion MCP server provides database access for all read/write operations.

For frequent use (weekly Sunday session), set up as a **Claude Code project** with skills pre-loaded so the workflow starts instantly each week.
