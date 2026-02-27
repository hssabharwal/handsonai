---
title: AI Platform Configuration
description: Configure personalization, memory, and MCP connections on your AI platform for the best experience
---

# AI Platform Configuration

Once you have your AI platform accounts set up ([Step 1](ai-platforms.md)), configure them for the best experience. These three settings — personalization, memory, and MCP connections — make your AI platform more useful over time by giving it context about you, helping it remember past conversations, and connecting it to external tools.

---

## Step 2: Personalization / Custom Instructions

**What:** Tell your AI platform about yourself so every conversation starts with context about you.
**Time:** ~15 minutes
**Requires:** Step 1 (AI Platform Accounts)

=== "Claude"

    1. Click your initials (lower-left) → **Settings**
    2. Find **"What preferences should Claude consider in responses?"**
    3. Enter your preferences and click **Save**

    **Starter template:**

    > I'm a [your role] in [your industry]. I'm learning to build AI-powered workflows and agents. I prefer concise answers with practical examples. When I ask about technical concepts, explain them in business terms first, then provide the technical details.

    For a complete walkthrough, see the cookbook's [Claude Personalization Setup Guide](../platforms/claude/getting-started/claude-personalization-setup.md).

    **Official docs:** [Claude Support — Personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

=== "ChatGPT"

    1. Click your profile picture (bottom-left) → **Customize ChatGPT**
    2. Fill in both sections:
        - **What would you like ChatGPT to know about you?** — your role, industry, what you're working on
        - **How would you like ChatGPT to respond?** — tone, length, format preferences
    3. Click **Save**

    **Starter template:**

    > I'm a [your role] in [your industry]. I'm learning to build AI-powered workflows and agents. I prefer concise answers with practical examples. When I ask about technical concepts, explain them in business terms first, then provide the technical details.

    **Official docs:** [OpenAI Help — Custom Instructions](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

=== "Gemini (personal)"

    1. Go to [gemini.google.com](https://gemini.google.com) → click your profile picture → **Settings**
    2. Find **Personalization** and review your preferences
    3. Gemini automatically builds a profile from your conversations over time

    **Starter template** (paste into your first conversation):

    > I'm a [your role] in [your industry]. I'm learning to build AI-powered workflows and agents. I prefer concise answers with practical examples. When I ask about technical concepts, explain them in business terms first, then provide the technical details. Please remember this for future conversations.

    **Official docs:** [Gemini Help — Personalization in Gemini](https://support.google.com/gemini/answer/15637730)

=== "Gemini (Workspace)"

    If you use Gemini through Google Workspace (work or school account), personalization works differently — your admin controls which features are available.

    1. Go to [gemini.google.com](https://gemini.google.com) → **Settings**
    2. Look for **Profile** — you can set your preferred name, job title, and industry
    3. If your admin has enabled it, you can also connect data sources (Outlook, OneDrive, conversation history)

    **Note:** Automated memory may not be available on Workspace accounts. You can manually save preferences by telling Gemini "remember that I prefer..." in conversation.

    **Official docs:** [Gemini Enterprise — Configure personalization](https://docs.cloud.google.com/gemini/enterprise/docs/configure-personalization)

**You're done when:** You've added personalization or custom instructions to at least one AI platform.

- [ ] Personalization / custom instructions — configured

---

## Step 3: Memory Systems

**What:** Enable memory so your AI platform remembers context across conversations.
**Time:** ~10 minutes
**Requires:** Step 1 (AI Platform Accounts)

=== "Claude"

    1. Click your initials (lower-left) → **Settings**
    2. Find **Memory** and toggle it on
    3. Claude will remember key facts you share across standalone chats

    Memory also works per-project — Claude remembers project-specific context separately.

    **Official docs:** [Claude Support — Memory and chat search](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context)

=== "ChatGPT"

    1. Click your profile picture → **Settings** → **Personalization**
    2. Toggle **Memory** to on
    3. ChatGPT will now remember relevant details from your conversations

    You can view and manage memories at any time: **Settings → Personalization → Manage Memory**.

    **Official docs:** [OpenAI Help — Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)

=== "Gemini (personal)"

    1. Go to **Settings** (gear icon or profile menu)
    2. Look for **Saved Info** or memory-related settings
    3. Review and enable as desired

    Gemini automatically builds memory from your conversations over time. You can also tell Gemini to "remember that I prefer..." to save specific preferences.

    **Official docs:** [Gemini Help — Personalization and memory](https://support.google.com/gemini/answer/15637730)

=== "Gemini (Workspace)"

    If you use Gemini through Google Workspace, automated memory may not be available — your admin controls which features are enabled.

    1. Go to **Settings** → check for any **Saved Info** or memory options
    2. If available, review and enable as desired
    3. If not available, you can manually tell Gemini "remember that I prefer..." in conversation — but it may not persist across sessions

    **Note:** Workspace memory features depend on your organization's admin settings. If you don't see memory options, check with your IT admin.

    **Official docs:** [Gemini Enterprise — Configure personalization](https://docs.cloud.google.com/gemini/enterprise/docs/configure-personalization)

**You're done when:** Memory is enabled on at least one AI platform.

- [ ] Memory — enabled

---

## Step 4: MCP Connections

**What:** Connect your AI platform to external tools and data sources using MCP (Model Context Protocol) or platform-specific integrations.
**Time:** ~15 minutes
**Requires:** Step 1 (AI Platform Accounts)

MCP lets your AI platform read from and write to external tools — think of it as giving your AI access to your actual work environment. This becomes essential once you start building workflows.

=== "Claude"

    Claude supports MCP connections across Claude.ai, Claude Desktop, and Cowork.

    **Claude.ai (web):** Connect remote MCP servers and 50+ built-in connectors (Slack, Notion, Google Drive, etc.).

    1. Go to **Settings → Connectors**
    2. Browse the connector directory or click **Add custom connector** to enter a remote MCP server URL
    3. Enable connectors per conversation via the **+** button → **Connectors**

    **Claude Desktop:** Supports both the connectors above and local MCP servers running on your machine.

    1. Install [Claude Desktop](https://claude.ai/download) if you haven't already
    2. Connect the Hands-on AI Cookbook MCP server for course reference material:

    [:octicons-arrow-right-24: MCP Server Connection Guide](../mcp-server/index.md)

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

**You're done when:** You've connected at least one external tool or MCP server.

- [ ] MCP / integrations — connected (optional)
