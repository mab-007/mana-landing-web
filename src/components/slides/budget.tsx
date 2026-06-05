import { Reveal } from "../reveal";
import { ArrowRightIcon } from "../icons";

export function Budget() {
  return (
    <section id="budget" className="slide bg-white py-24">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-2xl text-4xl text-ink-900 sm:text-5xl">
            Set your first budget
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            Track expenses, save smarter, and reach your financial goals — for
            yourself and your family back home.
          </p>
          <a href="#join" className="btn-primary mt-6">
            Explore budgets <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
          {/* pink donut card */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-papel-100 p-6">
              <p className="font-semibold text-ink-800">
                Get a detailed breakdown of where your money goes.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <div
                  className="grid h-32 w-32 place-items-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(#0A1228 0 35%, #E85D2C 35% 60%, #1F8B4D 60% 80%, #9B937F 80% 100%)",
                  }}
                >
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-papel-100 text-center">
                    <div>
                      <div className="text-base font-bold text-ink-900">$3,250</div>
                      <div className="text-[10px] text-papel-400">Total spent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* center photo card */}
          <Reveal delay={120}>
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-3xl bg-ink-900">
              <img
                src="/images/budget.jpg"
                alt="Customer reviewing her budget"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-ink-900/30" />
              <div className="absolute left-5 top-5 right-5">
                <p className="text-lg font-semibold text-white">
                  Stay updated — track every transaction.
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-white px-4 py-2.5 text-sm">
                <span className="flex items-center gap-2 font-semibold text-ink-900">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-success-50 text-success-600">
                    ₱
                  </span>
                  Food
                </span>
                <span className="font-bold text-ink-900">$150.00</span>
              </div>
            </div>
          </Reveal>

          {/* green goal card */}
          <Reveal delay={240}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-success-50 p-6">
              <p className="font-semibold text-ink-800">
                Track your budget to reach your goal.
              </p>
              <div className="mt-6 rounded-2xl bg-white p-4 shadow-soft">
                <div className="flex items-center justify-between text-xs text-papel-400">
                  <span>Budget this month</span>
                  <span className="font-semibold text-[#E85D2C]">$3,550</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-papel-200">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-tanglaw-400 to-[#E85D2C]" />
                </div>
                <p className="mt-2 text-[11px] text-papel-400">
                  You&apos;ve spent $2,660 of $3,550 this month.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
