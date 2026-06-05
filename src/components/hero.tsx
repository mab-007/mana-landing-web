import { ArrowRightIcon, BoltIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="slide min-h-[680px] bg-ink-900 py-0 text-white">
      {/* full-bleed background photo + overlays */}
      <img
        src="/images/hero.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,14,26,0.96) 0%, rgba(7,14,26,0.86) 30%, rgba(7,14,26,0.5) 60%, rgba(7,14,26,0.7) 100%)",
        }}
      />

      <div className="container-wide relative z-10 grid w-full items-center gap-10 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        {/* left: headline */}
        <div>
          <h1 className="display text-5xl text-white sm:text-7xl lg:text-8xl">
            Redefine
            <br />
            how you send
            <br />
            <span className="text-teal-300">money home</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            For Filipinos who want more from their money — there&apos;s MANA. Hold
            US dollars, send home in seconds, and spend anywhere. Open an account
            free, in a tap.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#join" className="btn-light px-8 py-3.5 text-base">
              Open an account
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#send"
              className="btn border border-white/30 px-8 py-3.5 text-base text-white hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* right: cohesive glass panel */}
        <div className="hidden justify-self-end lg:block">
          <div className="w-[380px] rounded-3xl border border-white/15 bg-white/10 p-3 shadow-glow backdrop-blur-md">
            <PanelRow>
              <div className="flex items-center gap-3">
                <AvatarStack />
                <span className="text-sm font-semibold">4+ saved accounts</span>
              </div>
              <ArrowRightIcon className="h-4 w-4 text-white/60" />
            </PanelRow>

            <PanelRow>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-teal-400 to-sun-400 text-ink-900">
                  <BoltIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">MANA AI</div>
                  <div className="text-xs text-white/60">Your personal finance assistant</div>
                </div>
              </div>
            </PanelRow>

            <PanelRow>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F0584A] text-white">
                  <DocIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Bills & Utilities</div>
                  <div className="text-xs text-white/60">5 due bills</div>
                </div>
              </div>
              <span className="text-sm font-bold text-teal-300">$1,224.00</span>
            </PanelRow>

            {/* app dock */}
            <div className="mt-3 flex items-center justify-around rounded-2xl bg-white/5 p-3">
              {[<SendGlyph />, <CardGlyph />, <WalletGlyph />, <ScanGlyph />].map(
                (g, i) => (
                  <span
                    key={i}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white/90"
                  >
                    {g}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* trust strip pinned bottom-left */}
      <div className="container-wide absolute inset-x-0 bottom-6 z-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <BoltIcon className="h-4 w-4 text-teal-300" /> Money home in minutes
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-white/40" /> Mid-market rates
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-white/40" /> Bank-grade security
          </span>
        </div>
      </div>
    </section>
  );
}

function PanelRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 last:mb-0">
      {children}
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {["a11", "a13", "a16"].map((a) => (
        <img
          key={a}
          src={`/images/avatars/${a}.jpg`}
          alt=""
          className="h-7 w-7 rounded-full object-cover ring-2 ring-ink-900/40"
        />
      ))}
    </div>
  );
}

/* small inline glyphs for the dock + rows */
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};
function DocIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...p}>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4M9 13h6M9 17h6" />
    </svg>
  );
}
function SendGlyph(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...p} className="h-5 w-5">
      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}
function CardGlyph(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...p} className="h-5 w-5">
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M2 10h20" />
    </svg>
  );
}
function WalletGlyph(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...p} className="h-5 w-5">
      <path d="M3 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M3 7l13-3v3M17 13h.01" />
    </svg>
  );
}
function ScanGlyph(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...p} className="h-5 w-5">
      <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M4 12h16" />
    </svg>
  );
}
