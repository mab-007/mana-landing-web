import { Reveal } from "../reveal";
import { ArrowRightIcon } from "../icons";

const fan = [
  { rot: -15, x: -320, bg: "bg-pink-200", title: "Pay due bills instantly with one click." },
  { rot: -8, x: -165, bg: "bg-indigo-200", title: "Track your spending with weekly summaries." },
  { rot: 8, x: 165, bg: "bg-emerald-200", title: "Smart, AI-powered budgeting." },
  { rot: 15, x: 320, bg: "bg-orange-200", title: "Quick & secure bank transfer options." },
];

export function OpenAccount() {
  return (
    <section id="open" className="slide bg-white py-24">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-2xl text-4xl text-ink-900 sm:text-5xl">
            Open your MANA account now
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            MANA lets you manage everything seamlessly. Open your account now for
            instant access — it&apos;s free.
          </p>
          <a href="#join" className="btn-primary mt-6">
            Open an account for free <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>

        {/* fanned cards */}
        <Reveal delay={160}>
          <div className="relative mx-auto mt-16 hidden h-72 max-w-4xl md:block">
            {fan.map((c, i) => (
              <div
                key={i}
                className={`absolute left-1/2 top-6 h-60 w-44 rounded-3xl ${c.bg} p-4 text-left shadow-soft`}
                style={{ transform: `translateX(${c.x}px) rotate(${c.rot}deg)` }}
              >
                <div className="h-10 w-10 rounded-full bg-white/70" />
                <p className="mt-3 text-sm font-semibold text-ink-800">{c.title}</p>
              </div>
            ))}

            {/* center highlighted card */}
            <div className="absolute left-1/2 top-0 z-10 h-64 w-48 -translate-x-1/2 rounded-3xl bg-gradient-to-b from-pink-300 to-pink-200 p-5 text-left shadow-glow">
              <p className="text-sm font-bold uppercase tracking-wide text-ink-900">
                Set your card spending limit easily.
              </p>
              <div className="mt-4 grid place-items-center">
                <div
                  className="grid h-24 w-24 place-items-center rounded-full"
                  style={{ background: "conic-gradient(#ef5b4c 0 62%, #ffffff 62% 100%)" }}
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-center">
                    <div>
                      <div className="text-base font-bold text-ink-900">$300</div>
                      <div className="text-[9px] text-ink-500">of $500</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-full bg-white py-2 text-center text-xs font-semibold text-ink-700">
                Edit limit
              </div>
            </div>
          </div>

          {/* mobile fallback */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:hidden">
            {fan.map((c, i) => (
              <div key={i} className={`rounded-2xl ${c.bg} p-4 text-left`}>
                <p className="text-sm font-semibold text-ink-800">{c.title}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
