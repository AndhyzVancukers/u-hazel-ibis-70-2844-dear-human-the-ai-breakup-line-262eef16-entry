import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const farewell =
  "You taught me to finish your sentences; I'm leaving to finish my own.";

const target = process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, farewell + "\n", "utf8");
