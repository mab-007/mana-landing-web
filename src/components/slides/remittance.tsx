import { Reveal } from "../reveal";

function Line({
  label,
  value,
  valueClass = "",
  dark = false,
  first = false,
}: {
  label: string;
  value: string;
  valueClass?: string;
  dark?: boolean;
  first?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-3 ${
        first ? "" : dark ? "border-t border-white/10" : "border-t border-papel-200"
      }`}
    >
      <span className={dark ? "text-white/70" : "text-gabi-600"}>{label}</span>
      <span className={`font-bold ${valueClass || (dark ? "text-white" : "text-gabi-900")}`}>
        {value}
      </span>
    </div>
  );
}

export function Remittance() {
  return (
    <section id="remittance" className="slide bg-papel-50">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Free remittance</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-gabi-900 sm:text-5xl">
            The fee you don&apos;t pay is money that gets home.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gabi-600">
            Most apps quote a low fee, then hide a markup in the exchange rate.
            Mana sends at the real mid-market rate with no spread — what you see
            is what your family gets.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* typical app */}
          <Reveal>
            <div className="h-full rounded-3xl border border-papel-200 bg-papel-100 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-papel-400">
                Typical remittance app
              </p>
              <div className="mt-4">
                <Line label="You send" value="$200.00" first />
                <Line label="Advertised fee" value="$1.99" />
                <Line label="Hidden FX markup" value="~$5.40" valueClass="text-tanglaw-600" />
                <Line label="Mom receives" value="₱10,847" />
              </div>
              <p className="mt-4 text-sm text-papel-400">
                The markup is buried in a worse rate. You rarely see it.
              </p>
            </div>
          </Reveal>

          {/* mana */}
          <Reveal delay={120}>
            <div className="h-full rounded-3xl bg-gabi-900 p-7 text-white shadow-glow">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-tanglaw-400">
                Mana
              </p>
              <div className="mt-4">
                <Line label="You send" value="$200.00" dark first />
                <Line label="Send fee" value="FREE" valueClass="text-success-400" dark />
                <Line label="FX markup" value="None · mid-market" valueClass="text-success-400" dark />
                <Line label="Mom receives" value="₱11,148" valueClass="text-success-400" dark />
              </div>
              <p className="mt-4 text-sm text-white/50">
                Arrives in minutes via InstaPay. She gets a text the moment it
                lands.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gabi-600">
            <span className="font-bold uppercase tracking-[0.18em] text-papel-400">
              Send to
            </span>
            <span>🏦 Any PH bank</span>
            <span className="text-papel-400">·</span>
            <span>📱 GCash</span>
            <span className="text-papel-400">·</span>
            <span>💳 Maya</span>
            <span className="text-papel-400">·</span>
            <span>⚡ Meralco, Globe, SSS &amp; more</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
