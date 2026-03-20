# Business-First AI

The Business-First AI Framework as executable Claude Code skills. Analyze AI workflow opportunities using individual or organizational lenses, deconstruct workflows into building blocks, design architectures, build platform artifacts, test quality, deploy with run guides, and continuously improve.

## Install

```
/plugin install business-first-ai@handsonai
```

## What's Included

### Agents

| Agent | Description |
|-------|-------------|
| `framework-orchestrator` | Orchestrates the end-to-end 7-step methodology |

### Skills

| Skill | Description |
|-------|-------------|
| `analyze` | Audit your workflows (individual or organizational lens) to find where AI creates the most value |
| `deconstruct` | Break a workflow into structured steps using the 6-question framework |
| `design` | Design the AI workflow architecture and produce an AI Building Block Spec |
| `build` | Generate platform-appropriate artifacts from the approved spec |
| `test` | Test workflow artifacts and evaluate output quality |
| `run` | Generate a Run Guide for deploying and testing the workflow |
| `improve` | Evaluate a running workflow for quality and evolution opportunities |

## Slash Commands

| Command | Skill |
|---------|-------|
| `/business-first-ai:analyze` | `analyze` -- Step 1 |
| `/business-first-ai:deconstruct` | `deconstruct` -- Step 2 |
| `/business-first-ai:design` | `design` -- Step 3 |
| `/business-first-ai:build` | `build` -- Step 4 |
| `/business-first-ai:test` | `test` -- Step 5 |
| `/business-first-ai:run` | `run` -- Step 6 |
| `/business-first-ai:improve` | `improve` -- Step 7 |

## Quick Start

1. **Analyze** -- Run `/business-first-ai:analyze` to audit your workflows and identify AI opportunities
2. **Deconstruct** -- Run `/business-first-ai:deconstruct` to break down your highest-impact workflow
3. **Design** -- Run `/business-first-ai:design` to design the AI workflow architecture
4. **Build** -- Run `/business-first-ai:build` to generate platform artifacts
5. **Test** -- Run `/business-first-ai:test` to validate output quality
6. **Run** -- Run `/business-first-ai:run` to get deployment instructions
7. **Improve** -- Run `/business-first-ai:improve` to evaluate and evolve the workflow

Outputs are saved to the `outputs/` folder.

## Worked Examples

The example agents, skills, and prompts (executive writing, editorial review, research, meeting prep, AI news) have moved to the [AI Workflow Examples](https://handsonai.info/use-the-cookbook/build/ai-workflow-examples/) plugin. Install with `/plugin install ai-workflow-examples@handsonai`.

## Full Documentation

[handsonai.info/business-first-ai-framework/skills/](https://handsonai.info/business-first-ai-framework/skills/)

## License

MIT
