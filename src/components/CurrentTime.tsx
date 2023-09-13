import { Loading } from "./Loading";

export function CurrentTime() {
  const time = new Date();
  return (
    <section className="flex items-center justify-center h-64 max-w-screen-md mx-auto">
      <data className="stat" value={time.toUTCString()}>
        <div className="stat-title">Current local time</div>
        <div className="stat-value">{time.toLocaleTimeString()}</div>
      </data>

      <button
        hx-get="/time"
        hx-trigger="click"
        hx-target="closest section"
        className="btn btn-secondary btn-outline"
      >
        Reload
      </button>
      <div id="time-loader" className="htmx-indicator">
        <Loading />
      </div>
    </section>
  );
}
