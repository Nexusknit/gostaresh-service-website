import "dotenv/config";

import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const serverEntryUrl = new URL("./.output/server/index.mjs", import.meta.url);
const serverEntryPath = fileURLToPath(serverEntryUrl);

if (!existsSync(serverEntryPath)) {
  console.error(
    "[server] Build output missing. Run `npm run build` before starting."
  );
  process.exit(1);
}

const entry = await import(serverEntryUrl.href);
const handler = entry.default || entry.handler;

if (typeof handler !== "function") {
  console.error(
    "[server] Failed to load Nitro handler from .output/server/index.mjs"
  );
  process.exit(1);
}

const port = Number(process.env.PORT || process.env.NITRO_PORT) || 3000;
const host = process.env.HOST || process.env.NITRO_HOST || "0.0.0.0";

createServer(handler).listen(port, host, () => {
  console.log(`[server] listening on http://${host}:${port}`);
});
