import { defineConfig, type Plugin } from "vite";
import moonbit from "vite-plugin-moonbit";
import { resolve } from "node:path";
import type { IncomingMessage } from "node:http";

const MBT_ID = "mbt:f4ah6o/mhx-tmpx-sample/main";

function exportRenderBody(): Plugin {
  return {
    name: "export-render-body",
    enforce: "post",
    transform(code, id) {
      if (!id.includes(MBT_ID)) return null;
      const renderBody = code.match(/function\s+(f4ah6o\$mhx\$45\$tmpx\$45\$sample\$main\$\$render_body)\s*\(/);
      if (!renderBody) {
        this.warn(`export-render-body: render_body not found for ${id}`);
        return null;
      }
      const exportCode =
        `\nexport function render_body() {\n` +
        `  return ${renderBody[1]}();\n` +
        `}\n`;
      return code + exportCode;
    },
  };
}

function demoApi(): Plugin {
  return {
    name: "demo-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url) return next();
        const url = new URL(req.url, "http://localhost");
        if (url.pathname === "/hello") {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end("<div>Hello from Vite server!</div>");
          return;
        }
        if (url.pathname === "/search") {
          if (req.method === "POST") {
            const body = await readBody(req);
            const data = new URLSearchParams(body);
            const q = data.get("q") || "";
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(renderSearchResults(q));
            return;
          }
          const q = url.searchParams.get("q") || "";
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(renderSearchResults(q));
          return;
        }
        next();
      });
    },
  };
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => resolve(body));
  });
}

function renderSearchResults(q: string): string {
  if (!q) return "<em>No query provided.</em>";
  const items = [q, `${q} alpha`, `${q} beta`].map((item) => `<li>${item}</li>`);
  return `<div><strong>Results for:</strong> ${q}</div><ul>${items.join("")}</ul>`;
}

export default defineConfig({
  plugins: [
    moonbit({
      root: resolve(__dirname, ".."),
      target: "js",
    }),
    exportRenderBody(),
    demoApi(),
  ],
});
