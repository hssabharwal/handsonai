---
title: Agent Programming Frameworks
description: SDKs and frameworks for building AI agents programmatically across platforms
---

# Agent Programming Frameworks

These are SDKs and frameworks for building agents programmatically — writing code to define agent behavior, tool use, and orchestration logic. For no-code and low-code approaches, see the platform-specific [Building Agents guides](#related).

## Frameworks

| Framework | Provider | Languages | Links |
|-----------|----------|-----------|-------|
| **Claude Agent SDK** | Anthropic | Python, TypeScript | [Cookbook guide](../../platforms/claude/agents/building-agents.md) &middot; <a href="https://platform.claude.com/docs/en/agent-sdk/overview" target="_blank">Docs</a> |
| **OpenAI Agents SDK** | OpenAI | Python, TypeScript | [Cookbook guide](../../platforms/openai/agents/building-agents.md) &middot; <a href="https://developers.openai.com/api/docs/guides/agents-sdk" target="_blank">Docs</a> |
| **Google Agent Development Kit (ADK)** | Google | Python | [Cookbook guide](../../platforms/google-gemini/agents/building-agents.md) &middot; <a href="https://docs.cloud.google.com/agent-builder/agent-development-kit/overview" target="_blank">Docs</a> |
| **LangGraph** | LangChain | Python, JavaScript | <a href="https://www.langchain.com/langgraph" target="_blank">langchain.com/langgraph</a> |
| **Microsoft Agent Framework** | Microsoft | Python, .NET (C#) | <a href="https://github.com/microsoft/agent-framework" target="_blank">GitHub</a> |
| **Microsoft 365 Agents SDK** | Microsoft | .NET, Python, TypeScript | [Cookbook guide](../../platforms/m365-copilot/agents/building-agents.md) &middot; <a href="https://github.com/microsoft/Agents" target="_blank">GitHub</a> &middot; <a href="https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/m365-agents-sdk" target="_blank">Docs</a> |
| **CrewAI** | CrewAI | Python | <a href="https://www.crewai.com/" target="_blank">crewai.com</a> |

## Agent-to-Agent (A2A) Protocol

The <a href="https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/" target="_blank">Agent-to-Agent (A2A) protocol</a> is an open standard for agent interoperability. It defines how agents built with different frameworks can discover each other, negotiate capabilities, and collaborate on tasks — regardless of which SDK or platform they were built on.

A2A complements MCP: where [MCP](../mcp/index.md) connects agents to **tools and data**, A2A connects **agents to other agents**.

<a href="https://google.github.io/A2A/" target="_blank">A2A specification and documentation</a>

## Related

- [Agent Capability Patterns](./capability-patterns/index.md) — architectural patterns that make agents effective
- [Multi-Agent Collaboration](./capability-patterns/multi-agent-collaboration.md) — patterns for coordinating multiple agents
- [Agents by Platform](./index.md) — no-code and low-code options alongside code-first approaches
- [MCP](../mcp/index.md) — the protocol that connects agents to tools and data
