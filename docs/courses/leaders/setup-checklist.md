---
title: Setup Checklist — Agentic AI for Leaders
description: Complete setup guide for the Agentic AI for Leaders course — developer tools, AI platform accounts, personalization, memory, and MCP connections
---

# Setup Checklist

Everything you need to set up before Session 1. Work through the steps in order — later steps build on earlier ones. Budget **2–3 hours** total, split across two sittings if you prefer.

[:material-download: Download Printable Checklist (PDF)](../../assets/pdfs/leaders-setup-checklist.pdf){ .md-button }

## At a Glance

| Step | What | Time | Status |
|------|------|------|--------|
| **Part 1 — Builder Stack** | | | |
| 1 | [Terminal Basics](#step-1-terminal-basics) | ~15 min | Required |
| 2 | [Code Editor + Extensions](#step-2-code-editor-extensions) | ~15 min | Required |
| 3 | [Git](#step-3-git) | ~10 min | Required |
| 4 | [GitHub](#step-4-github) | ~15 min | Required |
| 5 | [AI Coding CLIs](#step-5-ai-coding-clis) | ~15 min | Required |
| 6 | [AI Registry + Plugins](#step-6-ai-registry-plugins-optional) | ~20 min | Optional |
| 7 | [Voice to Text](#step-7-voice-to-text-optional) | ~10 min | Optional |
| **Part 2 — AI Platform Setup** | | | |
| 8 | [AI Platform Accounts](#step-8-ai-platform-accounts) | ~10 min | Required |
| 9 | [Personalization / Custom Instructions](#step-9-personalization-custom-instructions) | ~15 min | Recommended |
| 10 | [Memory Systems](#step-10-memory-systems) | ~10 min | Recommended |
| 11 | [MCP Connections](#step-11-mcp-connections-optional) | ~15 min | Optional |

---

## Part 1 — Builder Stack

These steps install the developer tools you'll use throughout the course. Each step has a detailed guide — follow the link, complete the setup, then come back here and check the box.

### Step 1: Terminal Basics

**What:** Learn to open and navigate the command line on your computer.

[:octicons-arrow-right-24: Go to Terminal Basics guide](../../builder-setup/terminal-basics.md)

- [ ] I can open a terminal and see a prompt (`$`, `%`, or `>`)
- [ ] Running `pwd` (Mac) or `Get-Location` (Windows) shows my current directory

??? tip "Stuck? Ask AI for help"
    > I'm learning to use the terminal on [Mac / Windows] and ran into this issue: [describe what happened]. What does this mean and what should I try?

---

### Step 2: Code Editor + Extensions

**What:** Install Cursor or VS Code and add AI coding extensions.

[:octicons-arrow-right-24: Go to Editor Setup guide](../../builder-setup/editor-setup.md)

- [ ] I can open my editor and see files in the sidebar
- [ ] At least one AI extension installed (Claude Code, Codex, or Gemini Code Assist)

??? tip "Stuck? Ask AI for help"
    > I'm setting up [Cursor / VS Code] on [Mac / Windows] and running into this issue: [describe what's happening]. What should I try next?

---

### Step 3: Git

**What:** Install Git for version control.

[:octicons-arrow-right-24: Go to Git Installation guide](../../builder-setup/git-install.md)

- [ ] Running `git --version` in my terminal shows a version number

??? tip "Stuck? Ask AI for help"
    > I'm trying to install Git on [Mac / Windows] and getting this error: [paste error]. What should I try next?

---

### Step 4: GitHub

**What:** Create a GitHub account and clone a repository.

[:octicons-arrow-right-24: Go to GitHub Setup guide](../../builder-setup/github-setup.md)

- [ ] I have a GitHub account
- [ ] I can clone a repository and see the files in my editor
- [ ] Running `git status` in the cloned repo shows `On branch main`

??? tip "Stuck? Ask AI for help"
    > I'm trying to clone a GitHub repository in [Cursor / VS Code] on [Mac / Windows] and getting this error: [paste error]. What should I try?

---

### Step 5: AI Coding CLIs

**What:** Install Claude Code (required) and optionally other AI coding CLIs.

[:octicons-arrow-right-24: Go to CLI Setup guide](../../builder-setup/cli.md)

- [ ] Running `claude --version` shows a version number
- [ ] Running `claude` starts a conversation in my terminal

??? tip "Stuck? Ask AI for help"
    > I'm trying to install Claude Code on [Mac / Windows] and getting this error: [paste error]. What should I try next?

---

### Step 6: AI Registry + Plugins (Optional)

**What:** Set up the Notion AI Registry and install Claude Code plugins.

[:octicons-arrow-right-24: Go to AI Registry Setup guide](../../builder-setup/notion-registry-setup.md)

- [ ] Notion AI Registry template duplicated to my workspace
- [ ] Plugin marketplace registered (`/plugin marketplace add jamesgray-ai/handsonai`)
- [ ] Business-First AI plugin installed (`/plugin install business-first-ai@handsonai`)

??? tip "Stuck? Ask AI for help"
    > I'm setting up the AI Registry in Notion and running into this issue: [describe what's happening]. What should I check?

---

### Step 7: Voice to Text (Optional)

**What:** Set up voice dictation for hands-free AI input.

[:octicons-arrow-right-24: Go to Voice to Text Setup guide](../../builder-setup/voice-to-text-setup.md)

- [ ] I can dictate text into any input field on my computer

??? tip "Stuck? Ask AI for help"
    > I'm setting up [Wispr Flow / Claude Desktop Quick Entry] on [Mac / Windows] for voice-to-text and running into this issue: [describe what's happening]. What should I check?

---

## Part 2 — AI Platform Setup

These steps configure your AI accounts for the best experience in the course. You only need **one** platform set up — use whichever you prefer.

### Step 8: AI Platform Accounts

**What:** Create an account on at least one AI platform with a paid subscription.

=== "ChatGPT"

    1. Go to [chat.openai.com](https://chat.openai.com) and sign up (or sign in)
    2. Upgrade to **ChatGPT Plus** ($20/month) or **ChatGPT Team** for the full feature set
    3. Confirm you can start a new conversation and get a response

    **Official docs:** [OpenAI Help Center — Getting started](https://help.openai.com/en/collections/3742473-chatgpt)

=== "Claude"

    1. Go to [claude.ai](https://claude.ai) and sign up (or sign in)
    2. Upgrade to **Claude Pro** ($20/month) or **Claude Max** for extended usage
    3. Confirm you can start a new conversation and get a response

    **Official docs:** [Claude Support — Getting started](https://support.claude.com)

=== "Gemini (personal)"

    1. Go to [gemini.google.com/subscriptions](https://gemini.google/subscriptions/) and sign in with your Google account
    2. Upgrade to **Gemini Advanced** ($20/month via Google One AI Premium) for the full feature set
    3. Confirm you can start a new conversation and get a response

    **Official docs:** [Gemini Help Center](https://support.google.com/gemini)

=== "Gemini (Workspace)"

    1. Go to [Google Workspace AI](https://workspace.google.com/solutions/ai/) to explore Gemini for your organization
    2. Your Workspace admin enables Gemini — check with IT if you don't have access
    3. Once enabled, access Gemini at [gemini.google.com](https://gemini.google.com) with your work account

    **Official docs:** [Google Workspace AI solutions](https://workspace.google.com/solutions/ai/)

=== "Gemini (Enterprise)"

    1. Go to [Gemini for Google Cloud](https://cloud.google.com/gemini-enterprise) to explore enterprise options
    2. Your Google Cloud admin provisions Gemini Enterprise — check with IT if you don't have access
    3. Once enabled, access Gemini through Google Cloud Console and integrated Google services

    **Official docs:** [Gemini Enterprise](https://cloud.google.com/gemini-enterprise)

- [ ] I have a paid AI platform account and can start conversations

---

### Step 9: Personalization / Custom Instructions

**What:** Tell your AI platform about yourself so every conversation starts with context about you.

=== "ChatGPT"

    1. Click your profile picture (bottom-left) → **Customize ChatGPT**
    2. Fill in both sections:
        - **What would you like ChatGPT to know about you?** — your role, industry, what you're working on
        - **How would you like ChatGPT to respond?** — tone, length, format preferences
    3. Click **Save**

    **Starter template:**

    > I'm a [your role] in [your industry]. I'm learning to build AI-powered workflows and agents. I prefer concise answers with practical examples. When I ask about technical concepts, explain them in business terms first, then provide the technical details.

    **Official docs:** [OpenAI Help — Custom Instructions](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

=== "Claude"

    1. Click your initials (lower-left) → **Settings**
    2. Find **"What preferences should Claude consider in responses?"**
    3. Enter your preferences and click **Save**

    **Starter template:**

    > I'm a [your role] in [your industry]. I'm learning to build AI-powered workflows and agents. I prefer concise answers with practical examples. When I ask about technical concepts, explain them in business terms first, then provide the technical details.

    For a complete walkthrough, see the cookbook's [Claude Personalization Setup Guide](../../platforms/claude/getting-started/claude-personalization-setup.md).

    **Official docs:** [Claude Support — Personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

=== "Gemini (personal account)"

    1. Go to [gemini.google.com](https://gemini.google.com) → click your profile picture → **Settings**
    2. Find **Personalization** and review your preferences
    3. Gemini automatically builds a profile from your conversations over time

    **Starter template** (paste into your first conversation):

    > I'm a [your role] in [your industry]. I'm learning to build AI-powered workflows and agents. I prefer concise answers with practical examples. When I ask about technical concepts, explain them in business terms first, then provide the technical details. Please remember this for future conversations.

    **Official docs:** [Gemini Help — Personalization in Gemini](https://support.google.com/gemini/answer/15637730)

=== "Gemini (Workspace account)"

    If you use Gemini through Google Workspace (work or school account), personalization works differently — your admin controls which features are available.

    1. Go to [gemini.google.com](https://gemini.google.com) → **Settings**
    2. Look for **Profile** — you can set your preferred name, job title, and industry
    3. If your admin has enabled it, you can also connect data sources (Outlook, OneDrive, conversation history)

    **Note:** Automated memory may not be available on Workspace accounts. You can manually save preferences by telling Gemini "remember that I prefer..." in conversation.

    **Official docs:** [Gemini Enterprise — Configure personalization](https://docs.cloud.google.com/gemini/enterprise/docs/configure-personalization)

- [ ] I've added personalization / custom instructions to my AI platform

??? tip "Stuck? Ask AI for help"
    > I'm trying to set up custom instructions in [ChatGPT / Claude / Gemini] and can't find the setting. I'm on [web / desktop / mobile]. Where do I go?

---

### Step 10: Memory Systems

**What:** Enable memory so your AI platform remembers context across conversations.

=== "ChatGPT"

    1. Click your profile picture → **Settings** → **Personalization**
    2. Toggle **Memory** to on
    3. ChatGPT will now remember relevant details from your conversations

    You can view and manage memories at any time: **Settings → Personalization → Manage Memory**.

    **Official docs:** [OpenAI Help — Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)

=== "Claude"

    1. Click your initials (lower-left) → **Settings**
    2. Find **Memory** and toggle it on
    3. Claude will remember key facts you share across standalone chats

    Memory also works per-project — Claude remembers project-specific context separately.

    **Official docs:** [Claude Support — Memory and chat search](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context)

=== "Gemini (personal account)"

    1. Go to **Settings** (gear icon or profile menu)
    2. Look for **Saved Info** or memory-related settings
    3. Review and enable as desired

    Gemini automatically builds memory from your conversations over time. You can also tell Gemini to "remember that I prefer..." to save specific preferences.

    **Official docs:** [Gemini Help — Personalization and memory](https://support.google.com/gemini/answer/15637730)

=== "Gemini (Workspace account)"

    If you use Gemini through Google Workspace, automated memory may not be available — your admin controls which features are enabled.

    1. Go to **Settings** → check for any **Saved Info** or memory options
    2. If available, review and enable as desired
    3. If not available, you can manually tell Gemini "remember that I prefer..." in conversation — but it may not persist across sessions

    **Note:** Workspace memory features depend on your organization's admin settings. If you don't see memory options, check with your IT admin.

    **Official docs:** [Gemini Enterprise — Configure personalization](https://docs.cloud.google.com/gemini/enterprise/docs/configure-personalization)

- [ ] Memory is enabled on my AI platform

??? tip "Stuck? Ask AI for help"
    > I'm trying to enable memory in [ChatGPT / Claude / Gemini] but can't find the toggle. I'm on [web / desktop / mobile] with a [Free / Plus / Pro] plan. Where do I look?

---

### Step 11: MCP Connections (Optional)

**What:** Connect your AI platform to external tools and data sources using MCP (Model Context Protocol) or platform-specific integrations.

=== "Claude"

    Claude supports MCP connections across Claude.ai, Claude Desktop, and Cowork.

    **Claude.ai (web):** Connect remote MCP servers and 50+ built-in connectors (Slack, Notion, Google Drive, etc.).

    1. Go to **Settings → Connectors**
    2. Browse the connector directory or click **Add custom connector** to enter a remote MCP server URL
    3. Enable connectors per conversation via the **+** button → **Connectors**

    **Claude Desktop:** Supports both the connectors above and local MCP servers running on your machine.

    1. Install [Claude Desktop](https://claude.ai/download) if you haven't already
    2. Connect the Hands-on AI Cookbook MCP server for course reference material:

    [:octicons-arrow-right-24: MCP Server Connection Guide](../../mcp-server/index.md)

    **Cowork:** Accesses your connectors, local MCP servers, and file system automatically. No extra setup needed beyond what you've configured in Claude Desktop.

    **Official docs:**

    - [Claude Support — Custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)
    - [Claude Support — Local MCP servers on Claude Desktop](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
    - [Claude Support — Getting started with Cowork](https://support.claude.com/en/articles/13345190-getting-started-with-cowork)

=== "ChatGPT"

    ChatGPT connects to external tools through **Connected Apps** (plugins and integrations).

    1. Click your profile picture → **Settings** → **Connected apps**
    2. Browse available integrations (Google Drive, Notion, Zapier, etc.)
    3. Click **Connect** on the apps you use

    **Official docs:** [OpenAI Help — Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)

=== "Gemini"

    Gemini connects to Google services and third-party tools through **Extensions**.

    1. Go to **Settings** → **Extensions**
    2. Enable the extensions you want (Google Workspace, Maps, YouTube, Flights, Hotels)
    3. Some extensions are on by default for Gemini Advanced users

    **Official docs:** [Gemini Help — Extensions](https://support.google.com/gemini/answer/13695044)

- [ ] I've connected at least one external tool or MCP server (optional)

??? tip "Stuck? Ask AI for help"
    > I'm trying to connect [tool name] to [ChatGPT / Claude / Gemini] and running into this issue: [describe what's happening]. What should I check?

---

## What's Next?

You're all set for the course. Here's what to do next:

- **Bookmark this page** — come back to check off steps as you complete them
- **Start Session 1** — you'll use these tools right away

Having trouble with any step? Bring your questions to the first session — we'll troubleshoot together.

[:octicons-arrow-right-24: Back to course overview](index.md)
