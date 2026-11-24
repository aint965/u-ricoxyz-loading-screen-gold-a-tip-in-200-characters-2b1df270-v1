// Loading Screen Gold: A Tip in 200 Characters
// Writes one loading-screen tip for stressed developers and AI coding
// agents to <outputDir>/entry.txt (default /output).
// Deterministic: the same tip, byte for byte, on every run.
// No network, no dependencies, reads nothing outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: the AI is thinking. You're thinking. Neither of you is thinking about the same bug.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
