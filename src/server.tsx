import { AboutPage } from "./components/AboutPage";
import { CurrentTime } from "./components/CurrentTime";
import { HomePage } from "./components/HomePage";
import { html, serve_static } from "./response";

// Configuration
const port = process.env?.PORT ? Number(process.env.PORT) : 3333;
const development = process.env?.NODE_ENV === "development";

export function start() {
  const server = Bun.serve({
    port,
    development,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") return html(<HomePage />);
      if (url.pathname === "/about") return html(<AboutPage />);
      if (url.pathname === "/time") return html(<CurrentTime />);
      return serve_static("public", req);
    },
  });
  console.log(`Listening on http://localhost:${server.port} ...`);
  return server;
}
