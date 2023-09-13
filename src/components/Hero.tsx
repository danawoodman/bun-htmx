export function Hero({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <section class="hero bg-base-200 py-32 rounded-3xl">
      <div class="hero-content text-center">
        <div class="max-w-md flex flex-col gap-6">
          <h1 class="text-6xl">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
