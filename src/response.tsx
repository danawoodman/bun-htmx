/**
 * Helpers for returning HTTP Responses.
 */
import { NotFoundPage } from "./components/NotFoundPage";

/**
 * Serve any matching file in the public directory.
 * If nothing matches, return a 404.
 */
export function serve_static(static_dir: string, req: Request): Response {
  const url = new URL(req.url);
  const file = Bun.file(`${static_dir}${url.pathname}`);
  if (file.size === 0) return html(<NotFoundPage />, 404);
  return new Response(file);
}

/**
 * Return an HTML response with the given status code and JSX component.
 */
export function html(component_html: string, status = 200): Response {
  return new Response(component_html, {
    status,
    headers: { "Content-Type": "text/html" },
  });
}
