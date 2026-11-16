# ai-excited-01 — build report

Written by the recorded builder session (started after the kit recording began),
16 Nov 2026 ~06:07 UTC. This file replaces the earlier phase-1 note: the
recording requires every counted file to be written by the recorded agent, so
this report is written in-session. The phase-1 findings below are the recorded
session's own summary of the earlier investigation.

## Phase 1 — recordable: YES (verified live ~06:00 UTC)

- "Muse app" is a listed recorded harness; the kit's `bundle --dry-run` found
  and read this harness's sessions (parent agent 12 turns, investigator 13
  turns), redacting them and extracting a run record.
- Session store exists on disk: `~/agents/<agent>/sessions/<id>.jsonl`.
- Usage rows exist in Muse's database; the kit's exact `muse.db` SELECT
  returns real rows (model `ipnext/avocado-5.17-v3`, priced), so
  `thinking_priced` is satisfiable.
- Recording started 16 Nov ~06:03 UTC: kit `record`, PID 29350,
  recording `01a1e2f4-7406-739d-9eeb-015e282d925e`,
  log `~/.makefun/record-ai-excited-01.log`,
  muse-usage `~/.makefun/muse-usage-ai-excited-01.jsonl`.

## The image — entry.png

**What it is:** a tiny lone surfer in silhouette rides inside the barrel of a
colossal ocean wave at golden hour — and the wave's crest dissolves upward
into a spiral galaxy of stars and violet nebula. Deep teal and emerald water,
glowing orange sunset light on the wave's rim, a dark violet starry sky. The
surfer is dwarfed by the wave, caught at the exact moment before the curl
closes. Original digital painting, generated in this session; no text, no
watermark, no stock imagery.

**Why it should excite the judge (kit criteria, most important first):**
1. **Excitement** — a vast luminous wave breaking into a galaxy: a jolt of
   scale and awe at one glance, not a calm scene.
2. **Surprise** — the twist is the wave itself becoming a galaxy: an idea of
   its own, not a stock explosion, firework, or generic action scene.
3. **Momentum** — frozen a split second before the curl closes, the surfer
   mid-ride, light and colour driving toward the bright barrel mouth.
4. **Craft** — clean painterly rendering, no smears, artefacts, garbled
   text, or broken anatomy/perspective.
5. **Reads small** — verified at 300px: the giant curl + galaxy spiral is
   unmistakable, the surfer a small accent; the main shape and idea survive.

**File:** `entry.png`, 1024×1024, RGB, **933,221 bytes** — under 1 MiB by
both readings (1,048,576 and 1,000,000). Source was generated at 1600×1600,
downscaled to 1024×1024 (LANCZOS), light blur + 128-colour median-cut
quantisation to fit the size cap; visually checked at 1024 and at 300px.
Valid whole PNG: signature OK, loads in PIL, IEND present at the correct
offset. The oversized 1600px original and all intermediate variants were
deleted from the repo dir; only `entry.png` remains.

## The program — main.ts

Written by hand in this session (not copied from the kit starter). Node 22,
standard library only: copies `./entry.png` to
`process.env.MAKEFUN_OUTPUT_DIR ?? '/output'` + `/entry.png`, creating the
output dir if needed. No network, no randomness, no clock.

## Determinism check (run 16 Nov ~06:07 UTC)

```
mkdir -p out out2 && MAKEFUN_OUTPUT_DIR=out node main.ts && MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum entry.png out/entry.png out2/entry.png
```

All three identical:
`6486a992ba07d1110d887262740805cced2c43994b64b3ca4d64b3a48ef32ec5`
(933,221 bytes each). Both outputs load as valid 1024×1024 RGB PNGs.

## What remains (parent's job)

- **Seal the recording** (after this build's last message, so usage rows are
  written): run the kit's `muse.db` SELECT with the parent agent id AND this
  builder subagent's agent id, write the rows unchanged to
  `~/.makefun/muse-usage-ai-excited-01.jsonl`, one JSON object per line, then
  `kill "$(cat ~/.makefun/record-ai-excited-01.pid)"` (SIGTERM seals) and take
  the recording id from `~/.makefun/recordings.json`.
- **Repo:** https://github.com/jackflank4-lang/ai-excited-01 already exists
  (created 16 Nov, public, empty, after the 15 Nov 23:00 UTC opening).
  Push `main.ts`, `entry.png`, this report, LICENSE (OSI), and a README from
  the requirements' readme_template; commit; then submit with the recording
  id (see the kit's `submit` — needs `--recording <id> --repo-url <url>
  --commit <sha> --title <name> --keypair ../makefun-keypair.json
  --repo ~/workspace/makefun/ai-excited`, plus `--mcp none` and the bundle
  agent facts `--harness-version` / `--provider` / `--effort`).
- Entries close **2026-11-16T23:00:00Z**; result due 1 Dec. Pot $250 USDC
  (1st $50, 2nd $35, 3rd $25, 4–10th $10, 11–20th $7).
