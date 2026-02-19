# Skill Specification — agentskills.io Format

When generating skills, follow this format exactly. Skills are directories containing a `SKILL.md` file with YAML frontmatter and a markdown body.

## File Structure

```
skill-name/
├── SKILL.md          # Required — skill definition
└── references/       # Optional — reference files the skill reads at runtime
    └── *.md
```

## YAML Frontmatter (Required)

```yaml
---
name: skill-name          # Required. Lowercase, hyphens only, max 64 chars. Must match directory name.
description: >            # Required. Max 1024 chars. Starts with "This skill should be used when..."
  This skill should be used when the user wants to [trigger description].
  [What the skill does]. [What it produces].
user_invocable: true      # Optional. Set to true if the user can invoke this skill directly via /skill-name.
license: MIT              # Optional. Default: MIT.
compatibility:            # Optional. Platform compatibility.
  platforms:
    - claude-code
metadata:                 # Optional. Arbitrary key-value pairs.
  version: "1.0.0"
---
```

### Field Rules

| Field | Required | Rules |
|-------|----------|-------|
| `name` | Yes | Lowercase, hyphens only, max 64 chars, must match directory name |
| `description` | Yes | Max 1024 chars. Start with "This skill should be used when..." for discoverability. Describe trigger conditions, what the skill does, and what it produces. |
| `user_invocable` | No | `true` if users invoke directly. Omit or `false` if only called by agents/other skills. |
| `command` | **No — deprecated** | Do NOT include this field. It is no longer supported. |

## Markdown Body

The body follows the frontmatter and defines the skill's behavior.

### Structure

```markdown
# Skill Title

One-line description of what the skill does.

## Workflow

Step-by-step instructions the model follows when executing the skill.
Number each step. Be explicit about inputs, decisions, and outputs.

## Outputs

### `outputs/filename.md` — Description

List every file the skill produces, with the path template and contents.

## Guidelines

- Behavioral rules and constraints
- Tone and style guidance
- Edge case handling
```

### Writing Guidelines

- **Workflow steps are instructions to the model**, not documentation for the user. Write them as directives: "Read the file", "Present a table", "Ask the user to confirm".
- **Be specific about file paths** — use `outputs/[workflow-name]-artifact.md` templates.
- **Separate concerns** — Design decisions go in the Workflow. Output format goes in Outputs. Behavioral rules go in Guidelines.
- **No platform-specific content in the skill body** — the skill defines *what* to do. The model provides *how* based on the user's platform.

## Example

```yaml
---
name: writing-status-reports
description: >
  This skill should be used when the user wants to generate a weekly status
  report from project data. Collects updates from configured sources, synthesizes
  key themes, and produces a formatted status report.
user_invocable: true
---
```

```markdown
# Writing Status Reports

Generate a weekly status report from project data sources.

## Workflow

1. **Identify sources** — Ask the user which project tracking tools they use (Jira, Linear, GitHub, etc.).
2. **Collect updates** — Read the last 7 days of activity from each source.
3. **Synthesize themes** — Group updates into categories: Completed, In Progress, Blocked, Upcoming.
4. **Draft report** — Write the status report using the format in Outputs.
5. **Review** — Present the draft and ask the user to confirm or adjust.

## Outputs

### `outputs/status-report-YYYY-MM-DD.md` — Weekly Status Report

Includes: date range, category sections, key metrics, blockers, next week priorities.

## Guidelines

- Use plain language; avoid jargon
- Keep each bullet to one sentence
- Flag blockers prominently
```
