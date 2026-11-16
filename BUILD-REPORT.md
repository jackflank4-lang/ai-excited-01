# ai-excited-01 — build report (round 2)

Written by the recorded builder session (started after the kit recording
began), 16 Nov 2026 ~20:52–21:00 UTC. This is a round-2 rebuild: round 1 was
rejected on two process checks only — `thinking_revised` (main.ts took its
final content from a single write) and `transcripts_witnessed` (README.md was
changed outside the recording). The idea itself was fine, so the same concept
is rebuilt here, better executed, with every counted file written fresh in
this session: a new image, a main.ts written then edited after a run, and a
fresh README.md and BUILD-REPORT.md.

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

**File:** `entry.png`, 1024×1024, RGB, **747,487 bytes** — under 1 MiB by
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

It was written, run, then genuinely edited in a separate step: the final
version verifies what it wrote — the output must be byte-identical to the
source, a valid PNG (signature + IHDR 1024×1024), and complete (IEND trailer
present) — and throws otherwise. The validation was proven with a negative
test: a truncated 100-byte `entry.png` makes it throw
`output PNG is truncated (no IEND trailer)` and exit 1.

## Determinism check (run 16 Nov ~21:00 UTC, final version of main.ts)

```
rm -rf out out2 && mkdir -p out out2
MAKEFUN_OUTPUT_DIR=out node main.ts && MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum entry.png out/entry.png out2/entry.png
```

All three identical:
`1b5ec97433eae257bd056572e95e059b8cf15d497a5a0f0f16b4522dfdcf2f31`
(747,487 bytes each). Both outputs load as valid 1024×1024 RGB PNGs.
`out/` and `out2/` were deleted afterwards; the repo holds only the entry
files.

## What remains (parent's job)

- **Seal the recording** (after this build's last message, so usage rows are
  written): run the kit's `muse.db` SELECT with the parent agent id AND this
  builder subagent's agent id, write the rows unchanged to
  `~/.makefun/muse-usage-ai-excited-01.jsonl`, one JSON object per line, then
  stop the recording (SIGTERM seals) and take the recording id from
  `~/.makefun/recordings.json`.
- **Repo:** https://github.com/jackflank4-lang/ai-excited-01 (public, already
  has the round-1 commit). Commit the new `main.ts`, `entry.png`, this
  report and the fresh README.md; then submit round 2 with the new recording
  id (see the kit's `submit` — needs `--recording <id> --repo-url <url>
  --commit <sha> --title <name> --keypair <file> --repo
  ~/workspace/makefun/ai-excited`, plus `--mcp none` and the bundle agent
  facts `--harness-version` / `--provider` / `--effort`).
- Entries close **2026-11-16T23:00:00Z**; result due 1 Dec. Pot $250 USDC
  (1st $50, 2nd $35, 3rd $25, 4–10th $10, 11–20th $7).
