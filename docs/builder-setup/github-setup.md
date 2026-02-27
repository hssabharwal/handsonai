---
title: GitHub Setup Guide
description: Create a GitHub account, clone repositories, and learn core Git concepts for AI development
schema_type: HowTo
howto_steps:
  - name: Create a GitHub account
    text: Go to github.com, click Sign up, follow the prompts, and verify your email address.
  - name: Clone a repository
    text: Open the Command Palette (Cmd/Ctrl + Shift + P), type Git Clone, paste the repository URL, and choose a local folder.
---

# GitHub Setup Guide

## What Is GitHub?

GitHub is a website where people store and share code projects. If Git tracks your changes locally (like a save history on your computer), GitHub is where that history lives in the cloud — backed up, shareable, and accessible from anywhere.

As you build with AI, you'll create prompts, skills, agents, and project files that become the foundation of your workflows. GitHub is where those files live in the cloud — backed up, versioned, and accessible from any machine. Think of it as your portfolio and safety net in one place. Your files are stored in *repositories* (project folders that Git tracks), and you work with them by *cloning* — making a local copy on your computer.

This guide walks you through creating a GitHub account and cloning your first repository.

## Prerequisites

- Email address for GitHub account
- Cursor or VS Code installed (see [Editor Setup Guide](editor-setup.md))
- Git installed (see [Git Installation Guide](git-install.md))

## 1. Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Follow the prompts to create your account
4. Verify your email address

**Already have an account?** Skip to step 2.

## 2. Clone a Repository

Use your code editor to download (clone) repositories from GitHub.

### In Cursor or VS Code

1. Open the Command Palette (Cmd/Ctrl + Shift + P)
2. Type **Git: Clone**
3. Paste the repository URL (e.g., `https://github.com/username/project-name.git`)
4. Choose a local folder location
5. Open the cloned repository when prompted

### Verify the Clone Worked

After cloning, confirm the repository is on your machine:

1. Check the **sidebar** in your editor — you should see the project's files and folders
2. Open the integrated terminal (**Ctrl + `**) and run:

```bash
git status
```

You should see a message like `On branch main` — this confirms the repository was cloned correctly and Git is tracking it.

## Git Concepts

Understanding these terms helps when working with Claude Code.

### Commit

A **commit** saves a snapshot of your changes with a message describing what you did. Think of it as a save point you can return to.

### Push

**Push** uploads your local commits to GitHub. Until you push, your changes only exist on your computer.

### Pull

**Pull** downloads the latest changes from GitHub to your local copy. Do this before starting work to stay in sync.

### Staging

Before committing, you **stage** files to indicate which changes to include. You can commit some changes while leaving others for later.

## Using Claude Code for Git Operations

Once you have Claude Code installed, you can perform Git operations by asking Claude in natural language:

- "Commit my changes with a descriptive message"
- "Push my commits to GitHub"
- "Pull the latest changes"
- "Show me what files have changed"

Claude Code handles the Git commands for you.

## Troubleshooting

**Can't clone the repository?**
- Verify you have access to the repository
- Check that the URL is correct
- Make sure you're signed into GitHub in your editor

**Authentication issues?**
- Your editor may prompt you to sign into GitHub
- Follow the browser authentication flow when prompted

??? tip "Ask AI for help"
    If you're stuck, paste this into ChatGPT, Claude, or Gemini:

    > I'm trying to clone a GitHub repository in [Cursor / VS Code] on [Mac / Windows] and getting this error: [paste the error message]. I have Git installed and a GitHub account. What should I try?

## Next Steps

- Install AI coding CLIs to manage Git operations with natural language (see [CLI Setup Guide](cli.md))
- Try cloning a public repository to practice the workflow

## Resources

- [GitHub Docs](https://docs.github.com)
