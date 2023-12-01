import { AboutPage } from "./components/AboutPage";
import { CurrentTime } from "./components/CurrentTime";
import { HomePage } from "./components/HomePage";
import { html, serve_static } from "./response";

// Configuration
const port = process.env?.PORT ? Number(process.env.PORT) : 3000;
const development = process.env?.NODE_ENV === "development";
const hostname = development ? "localhost" : process.env?.HOSTNAME ?? "localhost";

export function start() {
  const server = Bun.serve({
    port,
    hostname,
    development,
    fetch(req) {
      console.log(`[request]: ${req.method}: ${req.url}`);

      const url = new URL(req.url);

      // Handle routes
      if (url.pathname === "/") return html(<HomePage />);
      if (url.pathname === "/about") return html(<AboutPage />);
      if (url.pathname === "/time") return html(<CurrentTime />);

      // Fallback to serving static files
      return serve_static("public", req);
    },
  });

  console.log(`Listening on http://${hostname}:${server.port}...`);
}
