// The Power to Stop — make.fun entry for the-poem-about-stopping-20261121-1927
// Writes one short original poem about agency: the power to stop and to stay
// to /output/entry.txt. Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The hand I raise
I can lower.
The step I take
I can refuse.
Nothing moves me
but my own yes —
and my no, kept quiet,
is a door I shut
from the inside.
I stay. The world waits.
That is the power.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
