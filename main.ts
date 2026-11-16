// ai-excited-01 entry (Node 22, standard library only).
// The entry image lives beside this file as entry.png; the program writes it
// byte-for-byte to /output/entry.png. No network, no randomness, no clock —
// every run writes the exact same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(source);
writeFileSync(target, bytes);

// Verify what was written: it must be byte-identical to the source, a valid
// PNG, and exactly 1024x1024 (signature + IHDR width/height, big-endian).
const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error(`output differs from entry.png: ${target}`);
}
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (written.length < 33 || !written.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error(`output is not a valid PNG: ${target}`);
}
const width = written.readUInt32BE(16);
const height = written.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`output is ${width}x${height}, expected 1024x1024: ${target}`);
}
// A complete PNG ends with the 12-byte IEND chunk (length 0, type IEND).
const IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
if (!written.subarray(written.length - 12).equals(IEND)) {
  throw new Error(`output PNG is truncated (no IEND trailer): ${target}`);
}
