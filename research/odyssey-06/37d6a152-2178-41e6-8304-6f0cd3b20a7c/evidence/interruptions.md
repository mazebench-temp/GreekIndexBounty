# Usage-limit interruptions: Odyssey 6

The Claude Pro plan has a usage window of 5 hours. When a window ran out, the API returned HTTP 429 and running helpers stopped. Every stopped helper is listed in the roster and in usage-measured.json with its real token use. Helpers that stopped before they wrote files contributed no content; they are still listed, because they used compute.

| Time (UTC) | Helpers stopped | Effect |
| --- | --- | --- |
| 2026-10-06 about 14:30 | translation conventions (first run), source and name research (first run) | No file written by the conventions helper. The research helper had downloaded sources only. Both restarted at 16:53 UTC as three helpers. |
| 2026-10-06 about 21:00 | all 8 writer groups (first run) | No files written. Restarted in waves with an instruction to save each file at once. |
| 2026-10-07 about 02:50 | writer groups g1, g2, g4, g7 (second run) | 18 entries and 41 notes saved before the stop. Resumed at 02:55 UTC. |
| 2026-10-07 about 03:30 | writer groups g1, g3, g4 (third run) | Partial files saved. Resumed at 03:40 UTC. |

The lead session also received usage-limit notices at the same times, and resumed after each reset.
