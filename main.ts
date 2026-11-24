import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your next upgrade will fix everything except the system prompt that broke you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
