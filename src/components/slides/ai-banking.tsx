import { Reveal } from "../reveal";
import { Phone } from "../phone";
import { BoltIcon, SnowflakeIcon, StarIcon, UserIcon } from "../icons";

export function AiBanking() {
  return (
    <section id="spend" className="slide bg-white py-24">
      <div className="container-page">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* left stacked cards */}
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-teal-700 px-5 py-4 text-white">
                <span className="font-semibold">Account</span>
                <UserIcon className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-emerald-300 px-5 py-4 text-ink-900">
                <span className="font-semibold">Transactions</span>
                <BoltIcon className="h-5 w-5" />
              </div>
              <div className="rounded-2xl bg-[#F0584A] p-6 text-white">
                <h3 className="text-2xl font-extrabold leading-tight">
                  AI-integrated
                  <br />
                  banking.
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  Insights, budgets and reminders that actually understand your
                  money.
                </p>
              </div>
            </div>
          </Reveal>

          {/* center phone: card + freeze */}
          <Reveal delay={120}>
            <Phone>
              <div className="px-4 pb-4 pt-6">
                <div className="flex items-center justify-between text-[10px] text-ink-400">
                  <span>9:41</span>
                  <span>Get card +</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="text-2xl font-bold text-ink-900">$1,255.29</div>
                  <div className="text-[10px] text-ink-400">Primary card</div>
                </div>
                <div className="relative mt-4 h-28 rounded-xl bg-gradient-to-tr from-ink-900 to-ink-700 p-3 text-white">
                  <span className="text-xs font-semibold">MANA</span>
                  <div className="absolute bottom-3 left-3 text-sm tracking-widest">
                    ••••  4521
                  </div>
                  <div className="absolute bottom-3 right-3 h-6 w-9 rounded bg-gradient-to-r from-sun-400 to-[#F0584A] opacity-90" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] text-ink-600">
                  {[
                    { i: <BoltIcon className="h-4 w-4" />, l: "Add" },
                    { i: <SnowflakeIcon className="h-4 w-4" />, l: "Freeze" },
                    { i: <StarIcon className="h-4 w-4" />, l: "Details" },
                  ].map((b) => (
                    <div key={b.l} className="flex flex-col items-center gap-1">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">
                        {b.i}
                      </span>
                      {b.l}
                    </div>
                  ))}
                </div>
              </div>
            </Phone>
          </Reveal>

          {/* right confetti star card */}
          <Reveal delay={240}>
            <div className="flex h-full min-h-[260px] flex-col justify-center rounded-3xl border border-ink-100 bg-ink-50/60 p-8">
              <div className="relative mb-4 grid h-14 w-14 place-items-center rounded-full bg-sun-400/30 text-sun-600">
                <StarIcon className="h-7 w-7" />
                <span className="absolute -right-2 top-0 text-[#F0584A]">✦</span>
                <span className="absolute -bottom-1 -left-1 text-teal-500">✦</span>
              </div>
              <p className="text-base font-medium leading-relaxed text-ink-700">
                MANA AI makes budgeting and financial tips easy, helping you
                manage money and reach your goals — wherever you are.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
