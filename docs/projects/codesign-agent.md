# CoDesign Agent

<p class="project-meta"><strong>Platform:</strong> iOS · iPadOS · macOS &nbsp; <strong>Stack:</strong> SwiftUI · SwiftData · OpenAI-compatible API</p>

## Overview

CoDesign Agent is an iOS and iPadOS AI workspace for the early stages of open-ended innovation projects. It helps users clarify a vague idea into a structured, actionable, and reviewable project brief through guided questioning, local project state, and visible reasoning artifacts.

It is designed for course projects, innovation proposals, product concept validation, and the research phase before prototyping.

## Motivation

Early project ideas often fail for reasons that a generic chat interface does not resolve: the scope is too broad, the user is unclear, constraints are implicit, evaluation criteria are missing, and risks remain unexamined. CoDesign Agent treats these as project-state problems rather than one-off prompt-writing problems.

## What I Built

The application embeds language-model capabilities inside a complete mobile workflow. Instead of presenting an empty chat box, it maintains a structured project record, asks targeted follow-up questions, extracts decisions from conversation, visualizes how the idea is evolving, and exports the result in reusable formats.

## System Architecture

The app uses a Mock / Live dual-mode architecture:

1. **SwiftUI presentation layer** — adaptive project, questioning, review, and export interfaces.
2. **SwiftData persistence layer** — local projects, sessions, answers, extracted fields, and revision state.
3. **AI service layer** — an OpenAI-compatible Chat Completions client with mock responses for offline development.
4. **Structured extraction layer** — converts model output into typed project fields instead of storing only free-form messages.
5. **Export layer** — prepares PDF, Markdown, JSON, and `.codesign` project packages.

## Core Features

- LLM-driven questioning based on missing or ambiguous project information.
- Structured extraction into goals, users, constraints, metrics, risks, and next actions.
- Local project state management and resumable work sessions.
- Thinking-tree visualization for reasoning paths and design alternatives.
- Human-in-the-loop controls for accepting, editing, or rejecting AI suggestions.
- PDF, Markdown, JSON, and `.codesign` export.
- Mock mode for UI development and live mode for real model integration.

## Technical Implementation

SwiftUI drives the multi-surface interface across iPhone, iPad, and macOS. SwiftData models persistent project entities and their relationships, allowing the interface to remain local-first and resumable. The AI integration is isolated behind a service boundary so mock and live providers share the same application flow.

Model responses are treated as untrusted input. Structured fields are decoded, validated, and presented for user confirmation before they become durable project state. This keeps the user in control and prevents a fluent response from silently rewriting the project brief.

The export system separates the canonical project model from each presentation format. Markdown and JSON preserve editable structure, PDF provides a shareable artifact, and `.codesign` supports round-tripping the complete workspace state.

## Demo

Interface captures and a short workflow recording will be added after the core interaction flow stabilizes.

## Challenges

- Keeping conversation, extracted structure, and persistent state consistent.
- Designing questions that reduce uncertainty without turning the workflow into a rigid form.
- Presenting model reasoning without overstating reliability.
- Supporting both compact iPhone layouts and information-dense iPad or macOS workspaces.
- Making exports reproducible across evolving project schemas.

## Reflection

CoDesign Agent is not a simple AI chat interface. It demonstrates complex SwiftUI interface development, SwiftData modeling, LLM API integration, structured extraction, project-state management, human-in-the-loop interaction design, and multi-format export as one coherent product system.

The central design lesson is that useful AI software depends less on adding a chat surface and more on defining state, checkpoints, user authority, and recoverable workflows around the model.

## Links

- Repository: to be added
- Demo: to be added
- Design notes: [Interaction Design](../notes/hci/interaction-design.md)

