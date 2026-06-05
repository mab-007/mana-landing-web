import { Reveal } from "../reveal";
import { Phone } from "../phone";
import { CheckIcon, UserIcon } from "../icons";

export function CreateAccount() {
  return (
    <section id="personal" className="slide bg-white py-24">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">Get started</span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Hassle-less account creation
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* left teal card */}
          <Reveal>
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-3xl bg-teal-700 p-8 text-white">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                <UserIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight">
                  Open your account in minutes
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  Just your phone and a valid ID. No branch visits, no paperwork.
                </p>
                <span className="btn mt-5 bg-white text-teal-800">Account</span>
              </div>
            </div>
          </Reveal>

          {/* center phone: 6-digit code */}
          <Reveal delay={120}>
            <Phone>
              <div className="bg-ink-900 px-4 pb-3 pt-6 text-white">
                <div className="text-xs text-white/60">Verify it&apos;s you</div>
                <div className="mt-1 text-base font-semibold">6-digit code</div>
              </div>
              <div className="px-4 py-5">
                <div className="flex justify-between gap-1.5">
                  {[2, 9, 5, 8, "", ""].map((d, i) => (
                    <div
                      key={i}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 text-sm font-bold text-ink-900"
                    >
                      {d}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full rounded-lg bg-teal-700 py-2.5 text-sm font-semibold text-white">
                  Continue
                </button>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-base font-semibold text-ink-700">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "⌫"].map((k, i) => (
                    <div key={i} className="rounded-md py-1.5">
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            </Phone>
          </Reveal>

          {/* right confetti card */}
          <Reveal delay={240}>
            <div className="flex h-full min-h-[280px] flex-col justify-center rounded-3xl border border-ink-100 bg-ink-50/60 p-8">
              <div className="relative mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckIcon className="h-7 w-7" />
                <span className="absolute -right-1 -top-1 text-sun-500">✦</span>
                <span className="absolute -bottom-1 left-0 text-teal-500">✦</span>
              </div>
              <p className="text-base font-medium leading-relaxed text-ink-700">
                Different people have different financial needs — our flexible
                accounts are designed to meet every one of them.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
