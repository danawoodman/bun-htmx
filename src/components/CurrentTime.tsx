import { Loading } from "./Loading";

export function CurrentTime() {
  const time = new Date();
  return (
    <section class="flex items-center justify-center h-64 max-w-screen-md mx-auto">
      <data class="stat" value={time.toUTCString()}>
        <div class="stat-title">Current local time</div>
        <div class="stat-value">{time.toLocaleTimeString()}</div>
      </data>

      <button
        hx-get="/time"
        hx-trigger="click"
        hx-target="closest section"
        class="btn btn-secondary btn-outline"
      >
        Reload
      </button>
      <div id="time-loader" class="htmx-indicator">
        <Loading />
      </div>
    </section>
  );
}
