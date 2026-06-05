import type { ReactNode } from "react";
import { AppleIcon, GooglePlayIcon, ShieldIcon } from "./icons";
import { Phone } from "./phone";

export function Hero() {
  return (
    <section id="top" className="slide min-h-[640px] bg-papel-50">
      <div className="container-wide grid items-center gap-12 pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:pt-20">
        {/* left: copy */}
        <div>
          <p className="eyebrow">For Filipinos abroad</p>

          <h1 className="display mt-5 text-5xl text-gabi-900 sm:text-6xl lg:text-7xl">
            Send home free.
            <br />
            Bank for real.
            <br />
            <span className="text-tanglaw-400">Built for OFWs.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-gabi-600">
            One app for the way you support family — send money home with no fee,
            earn 5% on your dollars, and spend with a card made for two countries.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <StoreBadge
              icon={<AppleIcon className="h-6 w-6" />}
              top="Download on the"
              bottom="App Store"
            />
            <StoreBadge
              icon={<GooglePlayIcon className="h-6 w-6" />}
              top="Get it on"
              bottom="Google Play"
            />
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-papel-400">
            <ShieldIcon className="h-4 w-4 text-gabi-400" />
            Bank-level security · Funds held with our partner bank, FDIC insured
          </p>
        </div>

        {/* right: phone wallet mock-up */}
        <div className="flex justify-center lg:justify-end">
          <WalletPhone />
        </div>
      </div>
    </section>
  );
}

function StoreBadge({
  icon,
  top,
  bottom,
}: {
  icon: ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <span className="relative inline-flex items-center gap-3 rounded-2xl bg-gabi-900 px-5 py-3 text-white transition-transform hover:-translate-y-0.5">
      <span className="absolute -top-2 right-3 rounded-full bg-tanglaw-400 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
        Coming soon
      </span>
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-white/70">{top}</span>
        <span className="block text-base font-semibold">{bottom}</span>
      </span>
    </span>
  );
}

function WalletPhone() {
  return (
    <div className="animate-float">
      <Phone className="w-[280px]">
        <div className="bg-white px-4 pb-4 pt-6">
          {/* status + greeting */}
          <div className="flex items-center justify-between text-[10px] text-papel-400">
            <span>9:41</span>
            <span>•••</span>
          </div>
          <div className="mt-1 text-lg font-bold text-gabi-900">Maria</div>

          {/* USD wallet card */}
          <div className="mt-3 rounded-2xl bg-gabi-900 p-4 text-white">
            <div className="text-[10px] uppercase tracking-wider text-white/50">
              USD Wallet
            </div>
            <div className="mt-1 text-3xl font-bold">
              $1,247
              <span className="text-lg text-white/60">.50</span>
            </div>
            <div className="mt-1 text-[10px] text-white/50">
              ≈ ₱69,520 · 1 USD = ₱55.74
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="rounded-lg bg-tanglaw-400 py-2 text-xs font-semibold">
                + Add money
              </button>
              <button className="rounded-lg bg-white/10 py-2 text-xs font-semibold">
                Send
              </button>
            </div>
          </div>

          {/* people you send to */}
          <div className="mt-4">
            <div className="text-[10px] uppercase tracking-wider text-papel-400">
              People you send to
            </div>
            <div className="mt-2 flex justify-between">
              {[
                { i: "LM", n: "Mom", c: "bg-tanglaw-100 text-tanglaw-600" },
                { i: "JS", n: "Kuya Jay", c: "bg-gabi-100 text-gabi-600" },
                { i: "RC", n: "Tita Rose", c: "bg-success-50 text-success-600" },
              ].map((p) => (
                <div key={p.n} className="flex flex-col items-center gap-1">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${p.c}`}
                  >
                    {p.i}
                  </span>
                  <span className="text-[9px] text-papel-400">{p.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* save + card */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-papel-200 p-3">
              <div className="text-[9px] uppercase tracking-wide text-papel-400">
                Save · 5%
              </div>
              <div className="text-sm font-bold text-gabi-900">$520.00</div>
            </div>
            <div className="rounded-xl border border-papel-200 p-3">
              <div className="text-[9px] uppercase tracking-wide text-papel-400">
                Card
              </div>
              <div className="text-sm font-bold text-gabi-900">$84.20</div>
            </div>
          </div>

          {/* bottom nav */}
          <div className="mt-4 flex justify-between border-t border-papel-100 pt-3 text-[9px] text-papel-400">
            {["Home", "Send", "Card", "Save", "More"].map((t, i) => (
              <span key={t} className={i === 0 ? "font-semibold text-tanglaw-400" : ""}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </Phone>
    </div>
  );
}
