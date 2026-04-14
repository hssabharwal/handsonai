---
title: GitHub Setup Guide
description: Create a GitHub account, create your first repository, clone it, and learn core Git concepts for AI development
schema_type: HowTo
howto_steps:
  - name: Create a GitHub account
    text: Go to github.com, click Sign up, follow the prompts, and verify your email address.
  - name: Create a repository
    text: Click the + menu, select New repository, name it, add a README, and click Create repository.
  - name: Install GitHub CLI
    text: Install gh via Homebrew (macOS), winget (Windows), or apt (Linux), then run gh auth login to connect your GitHub account.
  - name: Clone a repository
    text: Open the Command Palette (Cmd/Ctrl + Shift + P), type Git Clone, paste the repository URL, and choose a local folder.
---## What Is GitHub?

GitHub is a website where people store and share code projects. If Git tracks your changes locally (like a save history on your computer), GitHub is where that history lives in the cloud — backed up, shareable, and accessible from anywhere.

As you build with AI, you'll create prompts, skills, agents, and project files that become the foundation of your workflows. GitHub is where those files live in the cloud — backed up, versioned, and accessible from any machine. Think of it as your portfolio and safety net in one place. Your files are stored in *repositories* (project folders that Git tracks), and you work with them by *cloning* — making a local copy on your computer.

This guide walks you through creating a GitHub account, creating your first repository, and cloning it to your computer.

## Prerequisites

- Email address for GitHub account
- Cursor or VS Code installed (see [Editor Setup Guide](../editor-setup/))
- Git installed (see [Git Installation Guide](../git-install/))

## 1. Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Follow the prompts to create your account
4. Verify your email address

**Already have an account and a repository?** Skip to step 3.

## 2. Create a Repository

1. From GitHub, click the **+** button (top-right corner) → **New repository**
2. Enter a repository name (e.g., `my-ai-projects`)
3. Add an optional description
4. Select **Private** (recommended for personal work)
5. Check **Add a README file**
6. Click **Create repository**

You'll land on your new repository's page with a README file. The URL in your browser (e.g., `https://github.com/your-username/my-ai-projects`) is what you'll use to clone it in the next step.

## 3. Install GitHub CLI

The GitHub CLI (`gh`) is required for cloning repos from Claude Desktop's Code tab and for letting Cursor or Claude Code authenticate with GitHub programmatically. Install it before cloning.

### macOS

```bash
brew install gh
```

### Windows

```powershell
winget install --id GitHub.cli
```

### Linux (Debian/Ubuntu)

```bash
sudo apt install gh
```

For other Linux distributions, see the [official install instructions](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

### Authenticate

```bash
gh auth login
```

Follow the browser prompts to connect your GitHub account.

### Verify

```bash
gh --version
gh auth status
```

`gh auth status` should show you are logged in to `github.com` as your username.

**Official docs:** [GitHub CLI manual](https://cli.github.com/manual/)

## 4. Clone a Repository

Download (clone) a repository from GitHub using whichever tool you're working in.

### In Cursor or VS Code

1. Open the Command Palette (Cmd/Ctrl + Shift + P)
2. Type **Git: Clone**
3. Paste the repository URL (e.g., `https://github.com/username/project-name.git`)
4. Choose a local folder location
5. Open the cloned repository when prompted

### In Claude Desktop (Code tab)

If you're working in the Claude Desktop app without a separate code editor, you can clone a repo by asking Claude to do it for you. Because you installed and authenticated the GitHub CLI in the previous step, Claude can use `gh` on your behalf.

1. Open **Claude Desktop** and click the **Code** tab
2. Start a new session and pick (or create) a local folder you want the repo cloned into
3. In the chat box, paste a prompt like:

   > Clone `https://github.com/username/project-name.git` into this folder.

4. Approve the command when Claude asks for permission to run `gh repo clone` (or `git clone`)
5. When it finishes, open Finder (macOS) or File Explorer (Windows) and navigate to the folder you chose — you should see the cloned repo there

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

<details>
<summary>Ask AI for help</summary>

If you're stuck, paste this into ChatGPT, Claude, or Gemini:

> I'm trying to clone a GitHub repository in [Cursor / VS Code] on [Mac / Windows] and getting this error: [paste the error message]. I have Git installed and a GitHub account. What should I try?

</details>
## Next Steps

- Try cloning a public repository to practice the workflow

## Resources

- [GitHub Docs](https://docs.github.com)
- [GitHub CLI manual](https://cli.github.com/manual/)
