export function Layout({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <html class="h-full">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/tailwind.css" />
        <script src="/htmx.js" defer></script>
      </head>
      <body class="h-full">
        <main class="max-w-screen-md mx-auto flex flex-col gap-8">
          <div class="w-full max-w-screen-md mx-auto">
            <header class="w-full flex items-center p-8" hx-boost>
              <h1>
                <a href="/" class="btn btn-secondary btn-outline">
                  Hello Bun!
                </a>
              </h1>
              <nav class="ml-auto">
                <a href="/about" class="btn btn-ghost">
                  About
                </a>
              </nav>
            </header>
          </div>
          <section>{children}</section>
          <footer class="text-center mt-auto p-12 text-sm text-base-content/60">
            <p>
              <em>
                Built with{" "}
                <a
                  href="https://bun.sh"
                  class="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bun
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  class="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  TailwindCSS
                </a>{" "}
                and{" "}
                <a
                  href="https://daisyui.com"
                  class="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  DaisyUI
                </a>
              </em>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
