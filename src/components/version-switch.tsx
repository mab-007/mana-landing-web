/** Tiny fixed pill to flip between the two landing-page versions. */
export function VersionSwitch({ current }: { current: "v0" | "v1" }) {
  const base =
    "px-3 py-1 rounded-full text-xs font-semibold transition-colors";
  return (
    <div className="fixed bottom-4 left-4 z-[60] flex items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1 shadow-soft backdrop-blur">
      <a
        href="/"
        className={`${base} ${current === "v0" ? "bg-gabi-900 text-white" : "text-gabi-700 hover:bg-papel-100"}`}
      >
        v0
      </a>
      <a
        href="/v1"
        className={`${base} ${current === "v1" ? "bg-gabi-900 text-white" : "text-gabi-700 hover:bg-papel-100"}`}
      >
        v1
      </a>
    </div>
  );
}
