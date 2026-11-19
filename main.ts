// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: this repository's POST.json names the
// post's address, and this program's only job is to hand that file to the
// grader by writing it into the output directory byte for byte. The house
// reads the post from X, builds the dossier (first picture, then text) and
// hands it to the judge; nothing this program writes about the post is
// judged, so it writes nothing else.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

const raw = readFileSync(source, 'utf8');

function postUrlOf(value: unknown): string | null {
  if (typeof value !== 'object' || value === null) return null;
  const url = (value as { url?: unknown }).url;
  return typeof url === 'string' && url.startsWith('https://') ? url : null;
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  console.error(`POST.json at ${source} is not valid JSON`);
  process.exit(1);
}

if (postUrlOf(post) === null) {
  console.error(`POST.json at ${source} names no https post address`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, raw);
