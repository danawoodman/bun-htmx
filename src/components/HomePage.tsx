import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { Loading } from "./Loading";

export function HomePage() {
  const title = "Hello Bun";
  return (
    <Layout title={title}>
      <>
        <Hero title={title}>
          <>
            <p class="py-6 text-lg">
              This is an example of a Bun and it's built in HTTP server app
              using TailwindCSS and DaisyUI.
            </p>
            <nav class="flex items-center gap-6 mx-auto">
              <a
                href="https://github.com/danawoodman/bun-htmx"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                Check Out the Code on GitHub
              </a>
              <a href="/about" class="btn btn-ghost" hx-boost>
                About
              </a>
            </nav>
            <p class="text-sm text-base-content/80 mt-8">
              <em>
                The about link above and the top menu uses{" "}
                <code class="text-accent">hx-boost</code> to do client-side
                navigation.
              </em>
            </p>
          </>
        </Hero>
        {/* The delay is to show the loading indicator, otherwise it would probably render to fast to notice */}
        <div
          hx-trigger="load delay:2s"
          hx-get="/time"
          hx-swap="innerHTML"
          class="flex items-center justify-center h-64"
        >
          <Loading />
        </div>
      </>
    </Layout>
  );
}
