import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "Door open 47 minutes: I have abandoned the food and am now cooling the whole kitchen, which did not ask.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
