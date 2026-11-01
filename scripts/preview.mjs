import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

try {
  await stat(path.join(root, "index.html"));
} catch {
  console.error("Static output is missing. Run npm run build first.");
  process.exit(1);
}

http
  .createServer(async (request, response) => {
    try {
      if (!["GET", "HEAD"].includes(request.method)) {
        response.writeHead(405, { Allow: "GET, HEAD" }).end();
        return;
      }
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      const target = path.resolve(
        root,
        `.${pathname.replace(/\/$/, "") || "/index"}`,
      );
      if (!target.startsWith(`${root}${path.sep}`) || pathname.includes("\0")) {
        response.writeHead(400).end("Bad request");
        return;
      }
      let file;
      for (const candidate of [
        target,
        `${target}.html`,
        path.join(target, "index.html"),
      ]) {
        if (
          await stat(candidate).then(
            (value) => value.isFile(),
            () => false,
          )
        ) {
          file = candidate;
          break;
        }
      }
      const status = file ? 200 : 404;
      file ??= path.join(root, "404.html");
      const body = await readFile(file);
      response.writeHead(status, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(request.method === "HEAD" ? undefined : body);
    } catch {
      response.writeHead(400).end("Bad request");
    }
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Static preview: http://127.0.0.1:${port}`);
    console.log(
      "Serving out/ with extensionless HTML routes. Stop with Ctrl+C.",
    );
  });
