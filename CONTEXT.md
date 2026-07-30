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

---

## "Refresh memory" — the protocol

When Ahmed says **refresh memory**, do all of this before responding:

1. Fetch this file and `DECISIONS.md` from the raw URLs above.
2. Open the tracker in his Chrome and read his live state out of localStorage. Use the Chrome MCP, navigate to the tracker, then run:

```js
JSON.stringify({
  start:  localStorage.getItem('lab.startDate.v1'),
  done:   JSON.parse(localStorage.getItem('lab.sprint.done.v1') || '{}'),
  notes:  JSON.parse(localStorage.getItem('lab.notes.v1')       || '{}'),
  builds: JSON.parse(localStorage.getItem('lab.build.state.v1') || '{}'),
  pipe:   JSON.parse(localStorage.getItem('lab.pipeline.v1')    || '[]'),
  money:  JSON.parse(localStorage.getItem('lab.money.v1')       || '{}')
});
```

3. Map the `done` and `notes` keys back to tasks. Both are keyed `"<day>-<taskIndex>"` against the `SPRINT` array in `ship.html` — e.g. `"1-0"` is Day 1, task 1.
4. Report where he actually is, what he decided along the way (the notes), and what the next concrete step is.
5. If any note holds a real decision worth keeping, append it to `DECISIONS.md` as the next DXXX and add a row to the Decisions index below.

**Cache warning:** GitHub Pages serves HTML with a short cache. After pushing a change to `ship.html`, a normal reload can still show the old file for several minutes — use a hard reload or a `?v=` cache-buster when verifying.

## Decision notes in the tracker

Every one of the 127 sprint tasks has a text box under it for capturing what was decided and why. Saved to `localStorage['lab.notes.v1']` as you type, keyed the same way as the checkboxes. Filled boxes get an indigo left border. A **Copy all** button at the top of the Sprint tab exports every note as markdown grouped by day.

Division of labour that matters:

- **Tracker notes** = raw capture, in the moment, low friction. Might be one line.
- **`DECISIONS.md`** = the considered version, with the bet and the falsifier. Written when the decision is real.

Not everything in the notes needs to graduate to `DECISIONS.md`. Most will not.

## Decisions index

| ID | Date | Decision | Status | Revisit |
|---|---|---|---|---|
| D001 | 2026-07-30 | Three verticals: Renovation/Landscaping/Roofing (anchor), HVAC/Plumbing/Electrical, Auto repair/Detailing. No 4th. | Active | Day 27 |

## Working preferences

- Concise and direct. No padding, no restating the question.
- Flag the trap before he hits it, not after.
- Decision log format: **Decision / Why / The bet / What would make me wrong / Revisit.** Append-only — supersede, never edit.
- Do not re-litigate settled decisions unless one of their stated falsifiers has actually been hit.
- He comes here daily for decisions that need data or structured thinking. Bring the analysis and a recommendation, not a menu of options.
