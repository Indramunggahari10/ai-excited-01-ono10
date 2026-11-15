// ai-excited-01 entry: "A Whale in a Teacup".
//
// One image, one idea: a colossal blue whale breaches out of a tiny white
// teacup, the tea exploding upward into a swirl of stars. The scale twist
// is the surprise; the whale's diagonal arc and the spray carry the
// momentum; the moon behind it gives the whole frame its glow. It reads
// at 300 pixels because the whale, the moon and the cup are the whole
// picture — nothing else competes with them.
//
// The image ships in this repository as entry.png (a JPEG by magic bytes,
// named entry.png as the rules allow). This program copies it, byte for
// byte, into the output directory, so the two grading runs always agree.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(repoDir, 'entry.png');
const target = join(outDir, 'entry.png');

// Fail loudly, before writing anything, if the image is missing —
// a silent empty output would be worse than no output at all.
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(source));
