---
name: building-workflows
description: >
  This skill should be used when the user has a Workflow Definition and wants to design and build
  an AI workflow. The Design phase gathers architecture decisions, chooses an execution pattern
  and interaction mode, classifies steps, maps building blocks, identifies skill candidates, and
  configures agents. The Construct phase generates platform artifacts based on the chosen pattern
  and architecture decisions.
  This is Step 3 of the Business-First AI Framework (Design + Construct).
user_invocable: true
command: build-workflow
---

# Workflow Build

Take a Workflow Definition and produce the Build deliverables: an AI Building Block Spec (Design) and platform artifacts (Construct).

**Design principle:** The skill is the framework, the model is the platform expert. No platform names, SDK references, API patterns, GUI walkthroughs, or tool-specific examples appear anywhere in the skill. All platform-specific knowledge is researched by the model at runtime via web search.

## Workflow

### Design Phase

1. **Load Workflow Definition** — Read the Workflow Definition from `outputs/[workflow-name]-definition.md`. If the user specifies a file path, use that. Otherwise, look for the most recent Workflow Definition in `outputs/`.
2. **Confirm understanding** — Summarize the workflow name, step count, and outcome. Ask the user to confirm before proceeding.
3. **Architecture Decisions** — Before assessing execution patterns, gather the information needed to make platform-aware recommendations. Ask these questions one at a time, waiting for each answer before asking the next:

   **Fixed checklist (8 questions):**

   1. **Platform** — Which AI platform will this run on? (Let the user name their tool — do not present a fixed list of platforms.)
   2. **Deployment surface** — How will you access it — web browser, desktop app, or command-line tool?
   3. **Code comfort** — Comfortable with code, or no-code only?
   4. **Tool integrations** — What external tools or services does this workflow connect to?
      After the answer: **use web search** to research current integration options for the user's platform. Categorize each as:
      - Native/zero-config (built into the platform)
      - MCP or connector available (requires setup)
      - API integration possible (requires code/configuration)
      - Manual only (export/paste)

      Surface the mapping to the user immediately. **Web search is required** — if the environment doesn't support it, instruct the user to switch to a tool that does. No static mapping tables in the skill.
   5. **Shareability** — Will team members run this? What's their technical comfort?
   6. **Authenticated browser access** — Does any step require logging into a website through a browser?
   7. **Scheduled execution** — Does it need to run on a schedule without human triggering?
   8. **Data sensitivity** — Does it handle PII, financial, or regulated data?

   After all 8 questions: summarize as Architecture Decisions with rationale for each. Confirm with user.

   **AI-driven follow-up:** Review the Workflow Definition steps against the architecture decisions. Ask additional questions only where the answer would materially change a building block recommendation or surface a blocker. One at a time. Stop when no further questions are needed.

   **Downstream propagation — architecture decisions gate subsequent steps:**
   - No-code + no native connectors → cap at Skill-Powered Prompt
   - Scheduled execution + deployment surface doesn't support unattended runs → flag infrastructure needed (research options via web search)
   - Authenticated browser access → flag browser automation requirement
   - Data sensitivity → note compliance considerations
   - State which decisions influenced the execution pattern recommendation

4. **Execution pattern assessment** — Walk the user through the execution pattern spectrum:

   | Pattern | Description | Signals |
   |---------|-------------|---------|
   | **Prompt** | Single structured prompt with step-by-step instructions, all logic inline | Sequential steps, human provides inputs and makes decisions |
   | **Skill-Powered Prompt** | Prompt that invokes reusable skills for complex sub-routines | Repeatable sub-routines, moderate complexity, steps that recur across workflows |
   | **Single Agent** | One agent with tool access, capable of autonomous decisions | Tool use required, autonomous decisions, multi-step reasoning |
   | **Multi-Agent** | Specialized agents coordinating in a pipeline | Multiple expertise domains, parallel execution, review gates |

   Decision questions:
   1. Does the workflow require tool use? (web, files, APIs)
   2. Does it require autonomous decision-making?
   3. Are there steps with complex, reusable logic? → skill candidates
   4. Does it span multiple expertise domains?
   5. Would it benefit from parallel execution or review gates?

   Present the recommended pattern with reasoning. State which architecture decisions influenced the recommendation.

   **Interaction Mode** — After recommending the pattern, determine the interaction mode based on architecture decisions:

   | Mode | Description | Determined by |
   |------|-------------|---------------|
   | **Interactive** | Human and AI collaborate in real-time. AI pauses for input, review, and decisions at marked steps. | Web/desktop deployment, no scheduled execution |
   | **Autonomous** | AI executes end-to-end without human involvement during the run. | Scheduled/unattended execution, CLI |
   | **Hybrid** | Some steps run autonomously, others pause for human interaction. | Mix of automated and review steps |

   Present the recommended interaction mode with reasoning tied to the architecture decisions. Ask the user to confirm both the pattern and the interaction mode.

5. **Classify each step** — For every refined step, determine:
   - **Autonomy level**: Human / AI-Deterministic / AI-Semi-Autonomous / AI-Autonomous
   - **AI building block(s)**: Prompt, Context, Skill, Agent, MCP, Project
   - **Tools and connectors**: External tools, APIs, integrations needed (populated from the integration mapping in Architecture Decisions; manual-only integrations cap the step at Semi-Autonomous)
   - **Human-in-the-loop gates**: Where human review is recommended
   Present the mapping as a clear table. Walk through reasoning for non-obvious classifications. Ask if the user wants to adjust anything.

6. **Identify skill candidates** — Tag steps that should become skills. For each skill candidate, document:
   - Purpose (one sentence)
   - Inputs (what data the skill receives)
   - Outputs (what the skill produces)
   - Decision logic (key rules, criteria, frameworks)
   - Failure modes (what happens when inputs are missing or unexpected)

7. **Agent configuration** (when execution pattern is Single Agent or Multi-Agent) — For each agent the workflow needs, document:

   | Component | What to specify |
   |-----------|----------------|
   | **Name** | Unique agent name |
   | **Description** | Agent purpose and when it should be used |
   | **Instructions** | Mission, responsibilities, behavior, goals, tone & style, output format |
   | **Model** | Recommended model capability (reasoning-heavy, fast, etc.) |
   | **Tools** | Tools the agent can call (MCP servers, file access, web, APIs) |

   Plus: Context requirements and Goal (trigger/invocation pattern).
   For multi-agent: orchestration pattern, agent handoffs, human review gates.

8. **Generate AI Building Block Spec** — Write to `outputs/[workflow-name]-building-block-spec.md`. Includes:
   - Execution pattern recommendation (with interaction mode)
   - Architecture Decisions (with rationale, integration mapping, and constraints summary)
   - Step-by-step decomposition table with autonomy levels and building blocks
   - Autonomy spectrum summary
   - Skill candidate section with generation-ready detail
   - Agent configuration section (when agent-based)
   - Step sequence and dependencies
   - Prerequisites
   - Context inventory
   - Tools and connectors required
   - Recommended implementation order (quick wins → semi-autonomous → complex agent steps)
   - Where to Run recommendation

### Construct Phase

9. **Pattern-specific build path** — Based on the execution pattern, present ONLY the steps relevant to the user's pattern:

   **Prompt pattern:**
   1. Create context (from Context Inventory)
   2. Set up project workspace (if frequent use)
   3. Generate platform artifacts
   4. → Launch Guide

   **Skill-Powered Prompt pattern:**
   1. Create context (from Context Inventory)
   2. Set up project workspace (if frequent use)
   3. Build skills for tagged candidates
   4. Generate platform artifacts
   5. → Launch Guide

   **Single Agent pattern:**
   1. Create context (from Context Inventory)
   2. Build skills for tagged candidates
   3. Connect external tools (from Tools and Connectors section)
   4. Generate platform artifacts (agent config, skills, connectors)
   5. → Launch Guide

   **Multi-Agent pattern:**
   1. Create context (from Context Inventory)
   2. Build skills for tagged candidates
   3. Connect external tools (from Tools and Connectors section)
   4. Generate platform artifacts (agents, orchestrator, skills, connectors)
   5. → Launch Guide

10. **Check for existing skills and instructions** — Before generating artifacts:
    - Ask: "Did you build any skills for this workflow? If yes, list each skill name and which steps it covers."
    - Check the Context Inventory for existing prompt instructions, project instructions, or system prompts. These must be incorporated into the generated artifacts.
11. **Generate platform artifacts** — Based on the platform and code comfort from Architecture Decisions, use web search to research the platform's current recommended approach for building the needed artifacts (prompts, skills, agents, orchestration, connectors). Verify what's current vs. deprecated. Then generate artifacts using the platform's latest recommended tools and patterns. The skill provides the *specs* (what each building block should do, its inputs/outputs/instructions from the Design phase). The model provides the *implementation* (how to build it on the user's platform, researched at runtime).
12. **Write SOP to Notion (if available)** — After artifacts are generated, check if the Notion MCP server is accessible AND this workflow was registered during the Deconstruct step. If so, offer to write the workflow SOP to the Notion page.

13. **Launch Guide** — Walk the user through getting the workflow running. Use the platform, deployment surface, and code comfort from Architecture Decisions to tailor every instruction to their specific setup. Use web search to verify current platform steps. Write in plain language — assume no technical background unless code comfort was confirmed.

    The Launch Guide covers four sections:

    **A. What was built** — List every artifact produced, what it does, and where it was saved. Use a simple table:

    | Artifact | What it does | Location |
    |----------|-------------|----------|

    **B. Setup steps** — Numbered, platform-specific instructions for getting each artifact into the right place. Research the platform's current UI/workflow via web search. For each step:
    - Tell the user exactly where to go (menu paths, button names, URLs)
    - Tell them exactly what to do (paste, upload, configure, connect)
    - Tell them what they should see when it's working (confirmation messages, visual indicators)
    - If a step requires technical knowledge beyond the user's code comfort level, flag it and offer to walk through it interactively

    **C. First run** — A guided test run:
    - Provide a sample input the user can try (based on the workflow's Input Requirements from the spec)
    - Walk through what should happen at each step
    - Explain what good output looks like
    - List common first-run issues and how to fix them

    **D. What to do next** — Brief guidance on:
    - How to run the workflow again in the future (the repeatable trigger)
    - How to share it with team members (if shareability was flagged in Architecture Decisions)
    - When to revisit and improve (signs the workflow needs updating)

    Present the Launch Guide directly in the conversation. Also save it to `outputs/[workflow-name]-launch-guide.md` so the user has a reference they can follow later or share with teammates.

## Outputs

### `outputs/[workflow-name]-building-block-spec.md` — AI Building Block Spec (Design)

Includes:
- Execution pattern recommendation with reasoning and interaction mode
- Architecture Decisions (with rationale, integration mapping, and constraints summary)
- Scenario summary (workflow metadata)
- Step-by-step decomposition table (autonomy level, building blocks, skill candidate flag)
- Autonomy spectrum summary
- Skill candidates (with generation-ready detail)
- Agent configuration (when applicable)
- Step sequence and dependencies
- Prerequisites
- Context inventory
- Tools and connectors required
- Recommended implementation order
- Where to Run recommendation

### Platform Artifacts (Construct)

Prompts, skills, agents, orchestration configs, and connector setups in whatever format is appropriate to the user's chosen platform. Generated by the model based on the Building Block Spec and Architecture Decisions, using web search to determine the current recommended approach.

### `outputs/[workflow-name]-launch-guide.md` — Launch Guide (Construct)

Plain-language guide for getting the workflow running. Includes: artifact inventory, step-by-step setup instructions tailored to the user's platform, a guided first-run test with sample input, and next steps for ongoing use and team sharing.

## Guidelines

- Use plain language; avoid jargon unless the user introduced it
- After writing the Design output, tell the user: "AI Building Block Spec saved to `outputs/[name]-building-block-spec.md`."
- After generating platform artifacts, summarize what was produced and where each artifact was saved
- Summarize all deliverables at the end so the user has a clear inventory
