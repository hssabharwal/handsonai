# Business-First AI

The Business-First AI Framework as executable Claude Code skills. Analyze AI workflow opportunities, deconstruct workflows into building blocks, and build AI-powered workflows.

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
| `analyzing-workflows` | Audit your workflows to find where AI creates the most value |
| `deconstructing-workflows` | Break a workflow into structured steps using the 5-question framework |
| `building-workflows` | Design execution patterns and generate prompts, skills, and agents |

## Slash Commands

| Command | Skill |
|---------|-------|
| `/business-first-ai:analyze` | `analyzing-workflows` — Step 1 |
| `/business-first-ai:deconstruct` | `deconstructing-workflows` — Step 2 |
| `/business-first-ai:build-workflow` | `building-workflows` — Step 3 |

## Quick Start

1. **Analyze** — Run `/business-first-ai:analyze` to audit your workflows and identify AI opportunities
2. **Deconstruct** — Run `/business-first-ai:deconstruct` to break down your highest-impact workflow
3. **Build** — Run `/business-first-ai:build-workflow` to design and generate the AI workflow

Outputs are saved to the `outputs/` folder.

## Worked Examples

The example agents, skills, and prompts (executive writing, editorial review, research, meeting prep, AI news) have moved to the [AI Workflow Examples](https://handsonai.info/use-the-cookbook/build/ai-workflow-examples/) plugin. Install with `/plugin install ai-workflow-examples@handsonai`.

## Full Documentation

[handsonai.info/use-the-cookbook/build/business-first-ai/](https://handsonai.info/use-the-cookbook/build/business-first-ai/)

## License

MIT
