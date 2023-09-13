import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { Loading } from "./Loading";

export function HomePage() {
  const title = "Hello Bun!";
  return (
    <Layout title={title}>
      <div className="flex flex-col gap-8">
        <Hero title={title}>
          <>
            <p className="py-6 text-lg">
              This is an example of a Bun and it's built in HTTP server app
              using TailwindCSS and DaisyUI.
            </p>
            <nav className="flex items-center gap-6 mx-auto">
              <a
                href="https://github.com/danawoodman/bun-htmx"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check Out the Code on GitHub
              </a>
              <a href="/about" className="btn btn-ghost" hx-boost>
                About
              </a>
            </nav>
          </>
        </Hero>
        <section className="max-w-md mx-auto flex flex-col gap-4">
          <h2 className="uppercase text-xl">
            <strong>HTMX</strong>
          </h2>
          <p className="text-sm text-base-content/80">
            <em>
              The "About" link above and the top menu uses{" "}
              <code className="text-accent">hx-boost</code> to do client-side
              navigation.
            </em>
          </p>
          <p className="text-sm text-base-content/80">
            <em>
              The <code className="text-accent">&lt;CurrentTime /&gt;</code>{" "}
              component below uses{" "}
              <code className="text-accent">hx-trigger="load"</code> to fetch
              the current time from the server and display it (with a simulated
              delay on initial load).
            </em>
          </p>
        </section>
        {/* The delay is to show the loading indicator, otherwise it would probably render to fast to notice */}
        <div
          hx-trigger="load delay:2s"
          hx-get="/time"
          hx-swap="innerHTML"
          className="flex items-center justify-center h-64"
        >
          <Loading />
        </div>
      </div>
    </Layout>
  );
}
