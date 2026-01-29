import http from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 8787;

const mhxRoot = join(__dirname, "..", "mhx.mbt");
const mhxDist = join(mhxRoot, "dist");
const mhxWrapper = join(mhxRoot, "npm", "index.js");

function requireMhxDist() {
  if (!existsSync(mhxDist)) {
    console.error("mhx dist not found. Build it first:");
    console.error("  moon -C ../mhx.mbt build --target js");
    process.exit(1);
  }
}

function buildPageHtml() {
  const result = spawnSync(
    "moon",
    ["-C", __dirname, "run", "src/main", "--target", "js"],
    { encoding: "utf8" }
  );
  if (result.status !== 0) {
    console.error(result.stderr || "failed to run moon");
    process.exit(1);
  }
  return result.stdout;
}

function parseForm(body) {
  const pairs = body.split("&").filter(Boolean);
  const data = new Map();
  for (const pair of pairs) {
    const [k, v] = pair.split("=");
    const key = decodeURIComponent(k || "");
    const val = decodeURIComponent(v || "");
    if (key) data.set(key, val);
  }
  return data;
}

function renderSearchResults(q) {
  if (!q) return "<em>No query provided.</em>";
  const items = [q, q + " alpha", q + " beta"].map(
    (item) => `<li>${item}</li>`
  );
  return `<div><strong>Results for:</strong> ${q}</div><ul>${items.join("")}</ul>`;
}

requireMhxDist();
const pageHtml = buildPageHtml();

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);

  if (url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(pageHtml);
    return;
  }

  if (url.pathname === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<div>Hello from server!</div>");
    return;
  }

  if (url.pathname === "/search") {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const data = parseForm(body);
        const q = data.get("q") || "";
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(renderSearchResults(q));
      });
      return;
    }
    const q = url.searchParams.get("q") || "";
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(renderSearchResults(q));
    return;
  }

  if (url.pathname.startsWith("/mhx/dist/") || url.pathname.startsWith("/dist/")) {
    const rel = url.pathname.startsWith("/mhx/dist/")
      ? url.pathname.replace("/mhx/dist/", "")
      : url.pathname.replace("/dist/", "");
    const filePath = join(mhxDist, rel);
    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    const contentType = rel.endsWith(".js")
      ? "text/javascript; charset=utf-8"
      : "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    let content = readFileSync(filePath, "utf8");
    if (rel === "mhx_ffi.js") {
      const exportFn = /export\\s+function\\s+(\\w+)/g;
      const names = [];
      content = content.replace(exportFn, (_match, name) => {
        names.push(name);
        return `function ${name}`;
      });
      content += `\\n;globalThis.mhx_ffi = { ${names.join(", ")} };\\n`;
    }
    if (rel === "index.js") {
      content += `\n;globalThis.mhx = {\n` +
        `  init_mhx: globalThis.f4ah6o$mhx$core$$init_mhx,\n` +
        `  handle_event: globalThis.f4ah6o$mhx$core$$handle_event,\n` +
        `  version: globalThis.f4ah6o$mhx$$version,\n` +
        `};\n` +
        `globalThis.mhx_callbacks = {\n` +
        `  on_fetch_success: globalThis.f4ah6o$mhx$network$$on_fetch_success,\n` +
        `  on_fetch_error: globalThis.f4ah6o$mhx$network$$on_fetch_error,\n` +
        `  on_mutation_observed: globalThis.f4ah6o$mhx$core$$on_mutation_observed,\n` +
        `};\n`;
    }
    res.end(content);
    return;
  }

  if (url.pathname === "/mhx/mhx_ffi.js") {
    const filePath = join(mhxDist, "mhx_ffi.js");
    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    let content = readFileSync(filePath, "utf8");
    const exportFn = /export\\s+function\\s+(\\w+)/g;
    const names = [];
    content = content.replace(exportFn, (_match, name) => {
      names.push(name);
      return `function ${name}`;
    });
    content += `\\n;globalThis.mhx_ffi = { ${names.join(", ")} };\\n`;
    res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
    res.end(content);
    return;
  }

  if (url.pathname === "/mhx/index.js") {
    const filePath = join(mhxDist, "index.js");
    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    let content = readFileSync(filePath, "utf8");
    content += `\n;globalThis.mhx = {\n` +
      `  init_mhx: globalThis.f4ah6o$mhx$core$$init_mhx,\n` +
      `  handle_event: globalThis.f4ah6o$mhx$core$$handle_event,\n` +
      `  version: globalThis.f4ah6o$mhx$$version,\n` +
      `};\n` +
      `globalThis.mhx_callbacks = {\n` +
      `  on_fetch_success: globalThis.f4ah6o$mhx$network$$on_fetch_success,\n` +
      `  on_fetch_error: globalThis.f4ah6o$mhx$network$$on_fetch_error,\n` +
      `  on_mutation_observed: globalThis.f4ah6o$mhx$core$$on_mutation_observed,\n` +
      `};\n`;
    res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
    res.end(content);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("not found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
