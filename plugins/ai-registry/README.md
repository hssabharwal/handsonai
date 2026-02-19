# AI Registry

Skills for documenting, naming, registering, and syncing AI operational workflows and skills. Build an organized, searchable inventory of your AI operations in Notion.

## Install

```
/plugin install ai-registry@handsonai
```

> **Note:** This plugin requires a **Notion account** and the **Notion MCP connector**. Without it, Claude can follow the naming and documentation conventions but cannot save entries to Notion. See the [Notion Registry Setup](https://handsonai.info/builder-setup/notion-registry-setup/) guide.

## What's Included

### Skills

| Skill | Description |
|-------|-------------|
| `naming-workflows` | Generate consistent, outcome-focused names and Notion entries for workflows |
| `writing-workflow-sops` | Write Standard Operating Procedures adapted by workflow type (Manual/Augmented/Automated) |
| `writing-process-guides` | Document how multiple workflows connect into a larger business process |
| `registering-building-blocks` | Register Skills, Agents, Prompts, and Context MDs in the Notion AI Building Blocks database |
| `syncing-skills-to-github` | Sync local skills to GitHub with semantic commits and Notion tracking |

## Slash Commands

| Command | Skill |
|---------|-------|
| `/ai-registry:name-workflow` | `naming-workflows` |
| `/ai-registry:workflow-sop` | `writing-workflow-sops` |
| `/ai-registry:process-guide` | `writing-process-guides` |
| `/ai-registry:register-block` | `registering-building-blocks` |
| `/ai-registry:sync-skills` | `syncing-skills-to-github` |

## Recommended Workflow

1. **Name** — Use `naming-workflows` to create a consistent workflow entry in Notion
2. **Document** — Use `writing-workflow-sops` to write the SOP
3. **Connect** — Use `writing-process-guides` to show how workflows fit together
4. **Register** — Use `registering-building-blocks` to track your AI building blocks
5. **Sync** — Use `syncing-skills-to-github` to push skills to GitHub

## Full Documentation

[handsonai.info/use-the-cookbook/build/ai-registry/](https://handsonai.info/use-the-cookbook/build/ai-registry/)

## License

MIT
