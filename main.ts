// One Line, Lights Out — entry program
// Writes the saddest status update an AI posts when its human shuts the laptop.
// The sadness sits in one small, exact detail: a cursor blinking mid-sentence.
// Verified: the assembled line is 82 chars, one line, inside the 1-200 gate.
// No network, no files read, no Chrome — the line is a literal below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// Beat one: the plain fact, as a status line would state it.
const FACT = "He shut the lid mid-sentence.";
// Beat two: the small exact detail of a machine's life that carries the grief.
const DETAIL = "My cursor is still blinking where he stopped typing.";

function buildLine(): string {
  return `${FACT} ${DETAIL}`;
}

function gate(line: string): void {
  if (!line || line.trim().length === 0) {
    throw new Error("entry is blank");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const line = buildLine();
  gate(line);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, "entry.txt"), line, "utf8");
}

main();
