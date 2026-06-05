import { ArrowRightIcon, BoltIcon, ShieldIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% -10%, rgba(37,99,235,0.14), transparent 70%)",
        }}
      />

      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
            Now in early access
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            The financial home for{" "}
            <span className="bg-gradient-to-r from-brand-600 to-sun-500 bg-clip-text text-transparent">
              Filipinos abroad
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Send money home in seconds, hold your savings in US dollars, and spend
            anywhere — all in one app built for OFWs. Real exchange rates, low
            fees, no surprises.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#waitlist" className="btn-primary">
              Join the waitlist
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost">
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <span className="inline-flex items-center gap-2">
              <BoltIcon className="h-4 w-4 text-brand-600" /> Money home in minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-brand-600" /> Bank-grade security
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand-100 to-sun-400/30 blur-2xl" />
      <div className="animate-float rounded-[2.5rem] border border-ink-100 bg-white p-3 shadow-glow">
        <div className="rounded-[2rem] bg-ink-900 p-5 text-white">
          <div className="flex items-center justify-between text-xs text-ink-200">
            <span>Balance</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5">USD</span>
          </div>
          <div className="mt-1 text-3xl font-bold tracking-tight">$2,480.00</div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
            {["Send", "Add", "Spend"].map((a) => (
              <div key={a} className="rounded-xl bg-white/10 py-3 font-semibold">
                {a}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 p-3">
          <Row name="To Maria — GCash" amount="-$120.00" note="Delivered · 2 min" />
          <Row name="To BDO ••4521" amount="-$300.00" note="Delivered · today" />
          <Row name="Salary deposit" amount="+$2,900.00" note="Received" positive />
        </div>
      </div>
    </div>
  );
}

function Row({
  name,
  amount,
  note,
  positive,
}: {
  name: string;
  amount: string;
  note: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-ink-50 bg-white px-3 py-2.5">
      <div>
        <div className="text-sm font-semibold text-ink-900">{name}</div>
        <div className="text-xs text-ink-400">{note}</div>
      </div>
      <div
        className={`text-sm font-bold ${positive ? "text-emerald-600" : "text-ink-800"}`}
      >
        {amount}
      </div>
    </div>
  );
}
