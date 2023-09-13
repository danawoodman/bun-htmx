import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { Loading } from "./Loading";

export function HomePage() {
  const title = "Hello Bun";
  return (
    <Layout title={title}>
      <div class="flex flex-col gap-8">
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
          </>
        </Hero>
        <section class="max-w-md mx-auto flex flex-col gap-4">
          <h2 class="uppercase text-xl">
            <strong>HTMX</strong>
          </h2>
          <p class="text-sm text-base-content/80">
            <em>
              The "About" link above and the top menu uses{" "}
              <code class="text-accent">hx-boost</code> to do client-side
              navigation.
            </em>
          </p>
          <p class="text-sm text-base-content/80">
            <em>
              The <code class="text-accent">&lt;CurrentTime /&gt;</code>{" "}
              component below uses{" "}
              <code class="text-accent">hx-trigger="load"</code> to fetch the
              current time from the server and display it (with a simulated
              delay on initial load).
            </em>
          </p>
        </section>
        {/* The delay is to show the loading indicator, otherwise it would probably render to fast to notice */}
        <div
          hx-trigger="load delay:2s"
          hx-get="/time"
          hx-swap="innerHTML"
          class="flex items-center justify-center h-64"
        >
          <Loading />
        </div>
      </div>
    </Layout>
  );
}
