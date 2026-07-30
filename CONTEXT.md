# CONTEXT.md — read this first, every session

This file is the persistent memory for the AI Automation Lab project. Claude reads it at the start of each session before giving advice.

Raw URL: https://raw.githubusercontent.com/blondedca-wq/5-core-systems/main/CONTEXT.md

---

## Operator

Ahmed. Based in the GTA. Building an AI automation practice from zero, selling to local businesses.

**5 years blue collar** — renovation and landscaping construction sites, plus assorted trades work. This is the core competitive asset: trade fluency that competing freelancers do not have. Lead with it in anything sales-facing. On a cold call he can credibly say he has framed, done landscape installs, and knows what it is like when the phone rings from a ladder.

## Live artifacts

| What | Where |
|---|---|
| Sprint tracker (30 days, 127 tasks, 6 tabs) | https://blondedca-wq.github.io/5-core-systems/ship.html |
| Dashboard | https://blondedca-wq.github.io/5-core-systems/ |
| Decision log | https://raw.githubusercontent.com/blondedca-wq/5-core-systems/main/DECISIONS.md |
| Repo | blondedca-wq/5-core-systems |

Sprint tabs: **Sprint** (30-day day-by-day plan), **Learn**, **Build** (11 automation builds), **Pitch** (verticals, scripts, objections, channels), **Pipeline**, **Money**.

## Start-of-session routine for Claude

1. Fetch `DECISIONS.md` — the source of truth for what is already committed and why.
2. Ask where he is in the sprint. Checkbox state lives in browser localStorage on his machine and is **not** readable remotely.
3. Do not re-litigate settled decisions unless one of their stated falsifiers has actually been hit.
4. New decisions get appended to `DECISIONS.md` as DXXX, and a one-line summary added to the Decisions index below.

## Decisions index

| ID | Date | Decision | Status | Revisit |
|---|---|---|---|---|
| D001 | 2026-07-30 | Three verticals: Renovation/Landscaping/Roofing (anchor), HVAC/Plumbing/Electrical, Auto repair/Detailing. No 4th. | Active | Day 27 |

## Working preferences

- Concise and direct. No padding, no restating the question.
- Flag the trap before he hits it, not after.
- Decision log format: **Decision / Why / The bet / What would make me wrong / Revisit.** Append-only — supersede, never edit.
- Distinction that matters: the tracker holds *state* (what is done), this repo holds *narrative* (why it was chosen).
