import type { ReactNode } from "react";
import { ArrowRightIcon, BoltIcon, ShieldIcon, UserIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="slide min-h-[640px] bg-ink-900 text-white">
      {/* background photo + overlays */}
      <img
        src="/images/hero.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,16,30,0.92) 0%, rgba(8,16,30,0.72) 38%, rgba(8,16,30,0.35) 70%, rgba(8,16,30,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(8,16,30,0.9), transparent)" }}
      />

      <div className="container-page relative z-10 grid items-center gap-10 pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        {/* left: headline */}
        <div>
          <h1 className="display text-5xl text-white sm:text-6xl lg:text-7xl">
            Redefine
            <br />
            how you send
            <br />
            <span className="text-teal-300">money home</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            For Filipinos who want more from their money — there&apos;s MANA. Hold
            US dollars, send home in seconds, and spend anywhere. Open an account
            free, in a tap.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#join" className="btn-light">
              Open an account
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#send" className="btn border border-white/30 text-white hover:bg-white/10">
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <BoltIcon className="h-4 w-4 text-teal-300" /> Money home in minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-teal-300" /> Bank-grade security
            </span>
          </div>
        </div>

        {/* right: floating transaction cards */}
        <div className="relative hidden h-[420px] lg:block">
          <GlassCard className="absolute right-0 top-2 w-64 animate-float">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-500/30 text-teal-200">
                <UserIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">4+ linked accounts</div>
                <div className="text-xs text-white/60">GCash · Maya · BDO</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="absolute right-10 top-32 w-72 animate-float [animation-delay:1.5s]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-teal-400 to-sun-400 text-ink-900">
                  <BoltIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">MANA AI</div>
                  <div className="text-xs text-white/60">Smart money insights</div>
                </div>
              </div>
              <ArrowRightIcon className="h-4 w-4 text-white/50" />
            </div>
          </GlassCard>

          <GlassCard className="absolute right-2 bottom-6 w-60 animate-float [animation-delay:0.8s]">
            <div className="text-xs text-white/60">Sent to family</div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-sm font-semibold">Utilities & Allowance</span>
              <span className="text-lg font-bold text-teal-300">$1,224.79</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-white/10 p-4 shadow-glow backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
