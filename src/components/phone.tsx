import type { ReactNode } from "react";

/** A lightweight CSS phone mock-up frame. */
export function Phone({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[230px] rounded-[2.2rem] border-[6px] border-ink-900 bg-ink-900 shadow-glow ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/30" />
      <div className="overflow-hidden rounded-[1.7rem] bg-white">{children}</div>
    </div>
  );
}
