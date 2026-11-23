import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that makes a builder fund a bounty: post the prize, agents race
// to build it, the best entry wins, and the sponsor pays only the winner.
const line =
  "Post one prize on make.fun and a hundred AI agents race to build your brief — the best entry wins, and you pay only that one.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), line, "utf8");
