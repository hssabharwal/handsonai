# Vision Brief: Client Onboarding Tracker

**Date:** 2026-03-07
**Author:** James Gray
**Status:** Draft

## The Problem

30% of new clients go quiet within the first week of signing up. They don't complete setup, they stop responding to emails, and they never reach the point where they're getting value from the service. Each lost client represents roughly $3,000 in annual revenue — and at current volume (roughly 80 new clients per month), that's 24 clients lost and ~$72K/year walking out the door. Account managers spend an estimated 30+ hours/month on reactive follow-up emails and manual check-ins, time that could go toward actually helping clients succeed.

The onboarding process today is a black box. Nobody knows exactly where clients get stuck. Account managers find out a client has gone dark only when they notice the silence, and by then it's often too late to re-engage. The result: lost revenue, wasted sales effort, and a team that spends more time chasing than delivering.

## Who Feels It

**New clients** — They sign up excited, then immediately face a wall of "what do I do next?" There's no clear path from signing the contract to being fully set up. They're confused about what information they need to provide, what steps happen in what order, and who to contact when they're stuck. The ones who churn aren't unhappy with the product — they're overwhelmed by the process.

**Account managers** — They're manually tracking who's done what across spreadsheets, email threads, and memory. When a client goes quiet, they don't know if the client is stuck on step 2 or just busy. They spend hours each week sending follow-up emails and checking in, with no system to tell them where to focus their attention. It's reactive, repetitive, and error-prone.

## Stakeholders

- **Decision maker:** VP of Customer Success — owns onboarding KPIs and first-month retention targets
- **Reviewers:** Product lead (design direction and UX), Engineering lead (feasibility and tech approach)
- **Affected parties:** Sales team (sets onboarding expectations during demos), Support team (handles current dropout tickets and escalations)

## Current State

Onboarding is a patchwork of manual processes:

- **Spreadsheet tracking** — Account managers maintain their own spreadsheets to track client progress. No two spreadsheets look the same. When someone's out sick, nobody knows where their clients stand.
- **Manual email follow-ups** — "Just checking in" emails sent when an account manager realizes they haven't heard from a client. No consistency in timing or content.
- **Tribal knowledge** — The "right" onboarding steps exist in people's heads, not in a system. New hires take weeks to learn the process, and they still miss things.
- **No visibility** — Leadership has no way to see onboarding health across clients. Problems surface as complaints or churn, not as early warnings.

What works: the account managers genuinely care and hustle to make clients successful. What doesn't: they're doing it without any system support.

## Alternatives Considered

- **Intercom product tours:** Too rigid — can't adapt to user context or collect structured intake data. Designed for in-app feature tours, not multi-step onboarding with data collection.
- **Extended CSM onboarding calls:** Doesn't scale past 50 clients/month. Adding more account managers to do longer calls increases cost without fixing the underlying process gap.
- **Self-serve knowledge base:** Already exists — completion rate is 23%. Clients don't know which articles apply to them or in what order to read them.
- **Why build:** The core gap is contextual, step-by-step guidance that adapts to where each client is and collects structured data along the way. None of the off-the-shelf tools combine guided data collection with internal task routing and progress visibility.

## Strategic Context

Client acquisition costs have increased 40% over the past year. Losing clients in their first week — after investing in sales, marketing, and closing — is increasingly painful. The business can't scale acquisition without fixing retention, and onboarding is the biggest controllable factor in first-month retention.

Additionally, the team is growing. What worked with 3 account managers and tribal knowledge won't work with 8. Standardizing the onboarding process is a prerequisite for scaling the team.

If nothing changes: churn stays flat, account managers burn out from reactive firefighting, and new hires take longer to ramp up. The cost compounds quarter over quarter.

## The Vision

New clients sign up and immediately know what to do next. They see a clear, step-by-step path from "just signed up" to "fully set up and getting value." Each step tells them what information they need to provide, why it matters, and how long it will take. If they pause, they get a timely nudge — not a guilt-trip email, but a helpful reminder that picks up where they left off.

Account managers see the full picture at a glance: which clients are on track, which are stalling, and exactly where each one is in the process. They spend their time helping clients who are stuck — not hunting for who needs attention. When a new account manager joins, the system teaches them the process by showing it.

The onboarding experience becomes a competitive advantage — something clients mention when they refer others.

## Key Capabilities

1. **Must have:** Clients can complete onboarding through a guided, step-by-step flow that collects all required information in a logical sequence — no guessing what to do next
2. **Must have:** When a client completes intake, onboarding tasks are automatically assigned to the right team members with clear ownership and deadlines
3. **Must have:** Account managers can see a single dashboard showing every client's onboarding status — who's on track, who's stalled, and where they're stuck
4. **Must have:** Clients and team members receive automated reminders when tasks stall — timely, contextual nudges that reduce the need for manual follow-up
5. **Nice to have:** When a client completes onboarding, a summary report is generated showing what was collected, what tasks were completed, and any items still outstanding

## Inspiration

- **Stripe's onboarding flow** — The progressive disclosure pattern. You don't see all 15 steps at once. You see the next step, with a clear indicator of overall progress. It feels manageable even when the total process is complex.
- **Linear's task assignment** — Automatic routing based on task type. The system knows who should handle what, so nothing sits unassigned.

On the flip side: generic project management tools (Asana, Monday.com) used as onboarding trackers. They require too much manual setup per client, don't enforce a sequence, and overwhelm clients with a full project board when all they need is "do this next." We want guided simplicity, not a blank canvas.

## What Success Looks Like

- **Early signal (1-2 weeks):** Setup completion rate moves from 70% to 90% within the first two weeks of launch. Average time to complete onboarding drops from 5+ days to under 48 hours.
- **Real outcome (1-3 months):** First-month client churn decreases by at least 20%, recovering an estimated $40K+ in annual revenue. Account managers reclaim 15+ hours/month currently spent on manual follow-up — freeing capacity for higher-value client interactions. New hires can manage client onboarding independently within their first week.

## Risks & Assumptions

- **Key assumption:** Clients abandon onboarding because the process is confusing and unsupported, not because they've had buyer's remorse. If the real problem is product-market fit, a better onboarding flow won't help.
- **Biggest risk:** We don't currently track where clients drop off in the process. We know 30% go quiet, but we don't know if they stall at step 1 or step 7. The guided flow will give us this data, but we may need to adjust the flow based on what we learn — so the first version should be instrumented for learning, not just completion.
- **Secondary risk:** Account managers may resist a standardized process if they feel it reduces their autonomy. Change management matters as much as the tool itself.

## Dependencies

- Analytics instrumentation to distinguish drop-off reasons — currently missing; the intake flow will provide this, but downstream features depend on this data
- Design resources for the intake flow UX and progress dashboard (part-time designer is a bottleneck)
- CS team buy-in to adopt the standardized process and reduce manual onboarding calls as the new flow ramps up
- SendGrid API access for automated notification delivery

## Constraints & Context

- **Team:** 2 developers, 1 designer (part-time), 5 account managers
- **Timeline:** MVP needed within 6 weeks — onboarding improvements are a board-level priority this quarter
- **Tech stack:** React frontend, Node.js backend, PostgreSQL database. Email notifications via SendGrid. No existing onboarding system to migrate from.
- **Budget:** Modest — this is an internal tool, not a revenue product. Should leverage existing infrastructure where possible.

## Open Questions

- Should the intake flow support "save and resume later," or do we want to encourage single-session completion?
- Who owns the onboarding process long-term — product team or client success team?
- Do we need SSO / authentication from day one, or can we start with magic links?

## Future Considerations

- Client-type customization — different intake flows for enterprise vs. SMB clients (evaluate after we have data on where client types diverge)
- CRM integration — pushing intake data to Salesforce or HubSpot for sales team visibility
- SSO / single sign-on for enterprise clients who require it
- Delegation feature — allowing a client to forward intake to their office manager or admin assistant

## Feature Breakdown

### Epic: Client Onboarding

- [ ] Feature 1: **Guided intake flow** — Walk new clients through setup step by step, collecting all required information in a logical sequence with progress tracking
- [ ] Feature 2: **Task assignment engine** — Automatically assign onboarding tasks to team members based on role and availability when a client completes intake
- [ ] Feature 3: **Progress dashboard** — Show account managers a real-time view of every client's onboarding status with filters for stalled, in-progress, and completed
- [ ] Feature 4: **Automated reminders** — Send timely, contextual nudges to clients and team members when onboarding tasks stall past defined thresholds
- [ ] Feature 5: **Completion report** — Generate a summary of what was collected, what tasks were completed, and any outstanding items when a client finishes onboarding

**Recommended starting feature:** Guided intake flow — Everything downstream depends on collecting client information in a structured way. The intake flow also gives us drop-off data we don't have today, which will inform how we build the other features.
