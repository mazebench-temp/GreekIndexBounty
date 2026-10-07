# Runtime record: Odyssey 6

This file records the runtime that produced the submission. The values come from the Claude Code app and from the API response metadata in the session transcripts.

| Field | Value |
| --- | --- |
| Provider | Anthropic |
| Model (policy label) | Opus 5.5 |
| Model ID (API) | `claude-opus-5-5` (from the `model` field of every assistant message in the lead and helper transcripts) |
| Runtime | Claude Code desktop app, Code tab (Claude Agent SDK) |
| Runtime version | Claude Code 2.1.286 (`claude --version`) |
| Lead session (transcript) | `32fc4ffc-8e54-4a2d-abb1-879fc33cde90` |
| Lead session (app record) | `local_7395514f-8c1c-49fd-9ffe-1b7ba10fffaa`, created 2026-10-06T14:01:35Z |
| Effort setting | `high` (app session record) |
| Thinking mode / budget | Not exposed as a setting by the runtime |
| Helper agents | Started from the lead with the Agent tool. They inherit the lead model (`claude-opus-5-5`). Their transcripts record the same model ID. |
| Plan | Claude Pro subscription. Usage-limit windows stopped helpers several times; see interruptions.md. |

## How usage was measured

`usage-measured.json` is produced by a script that reads the lead transcript and each helper transcript. It sums the `usage` fields of the assistant messages and counts each API message once. It records no prompt or reply text.

- `inputTokens` follows the Anthropic API convention: it excludes cache reads and cache writes. Those are listed separately.
- `agentSeconds` for each agent is the span from its first to its last transcript record.
- Records with the model label `<synthetic>` are client-side notices of a usage-limit error (HTTP 429). They are not model output, and they carry zero tokens.
- No dollar cost is available for a subscription plan, so `costUsd` is null.
