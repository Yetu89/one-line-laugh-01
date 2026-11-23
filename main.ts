// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Writes a single funny one-liner (max 200 characters, no trailing newline)
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt for local testing).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I told my password manager to remember everything, and now neither of us can get into my bank account.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
