# Business-First AI

The Business-First AI Framework as executable Claude Code skills. Analyze AI workflow opportunities using individual or organizational lenses, deconstruct workflows into building blocks, and build AI-powered workflows.

## Install

```
/plugin install business-first-ai@handsonai
```

## What's Included

### Agents

| Agent | Description |
|-------|-------------|
| `framework-orchestrator` | Orchestrates the end-to-end Analyze → Deconstruct → Build process |

### Skills

| Skill | Description |
|-------|-------------|
| `analyzing-workflows` | Audit your workflows (individual or organizational lens) to find where AI creates the most value |
| `deconstructing-workflows` | Break a workflow into structured steps using the 5-question framework |
| `designing-workflows` | Design the AI workflow architecture and produce an AI Building Block Spec |
| `constructing-workflows` | Generate platform-appropriate artifacts from the approved spec |
| `running-workflows` | Generate a Run Guide for deploying and testing the workflow |

## Slash Commands

| Command | Skill |
|---------|-------|
| `/business-first-ai:analyze` | `analyzing-workflows` — Step 1 |
| `/business-first-ai:deconstruct` | `deconstructing-workflows` — Step 2 |
| `/business-first-ai:design-workflow` | `designing-workflows` — Step 3.1: Design |
| `/business-first-ai:construct-workflow` | `constructing-workflows` — Step 3.2: Construct |
| `/business-first-ai:run-workflow` | `running-workflows` — Step 3.3: Run |

## Quick Start

1. **Analyze** — Run `/business-first-ai:analyze` to audit your workflows and identify AI opportunities
2. **Deconstruct** — Run `/business-first-ai:deconstruct` to break down your highest-impact workflow
3. **Design** — Run `/business-first-ai:design-workflow` to design the AI workflow architecture
4. **Construct** — Run `/business-first-ai:construct-workflow` to generate platform artifacts
5. **Run** — Run `/business-first-ai:run-workflow` to get deployment instructions

Outputs are saved to the `outputs/` folder.

## Worked Examples

The example agents, skills, and prompts (executive writing, editorial review, research, meeting prep, AI news) have moved to the [AI Workflow Examples](https://handsonai.info/use-the-cookbook/build/ai-workflow-examples/) plugin. Install with `/plugin install ai-workflow-examples@handsonai`.

## Full Documentation

[handsonai.info/use-the-cookbook/build/business-first-ai/](https://handsonai.info/use-the-cookbook/build/business-first-ai/)

## License

MIT
