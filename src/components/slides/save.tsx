import { Reveal } from "../reveal";

const bullets = [
  {
    t: "Yield on your whole balance",
    b: "Turn it on once. Every dollar in your wallet starts earning — no separate account to fund.",
  },
  {
    t: "Liquid, always",
    b: "No lock-up and no minimum. Send or spend the moment your family needs you.",
  },
  {
    t: "Plain-language terms",
    b: "We explain exactly how the yield works and where it comes from. No fine-print surprises.",
  },
];

export function Save() {
  return (
    <section id="save" className="slide bg-papel-100">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        {/* 5% APY card */}
        <Reveal>
          <div className="rounded-4xl bg-white p-12 text-center shadow-soft">
            <p className="eyebrow justify-center">Mana Save</p>
            <div className="mt-4 font-serif font-semibold leading-none text-success-600">
              <span className="text-8xl">5</span>
              <span className="text-3xl"> % APY</span>
            </div>
            <p className="mt-3 text-sm text-papel-400">Current rate · may change</p>
          </div>
        </Reveal>

        {/* copy */}
        <div>
          <Reveal>
            <h2 className="display text-4xl text-gabi-900 sm:text-5xl">
              Your dollars should earn while they wait to go home.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {bullets.map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="border-l-2 border-tanglaw-400 pl-4">
                  <h3 className="font-semibold text-gabi-900">{b.t}</h3>
                  <p className="mt-1 text-gabi-600">{b.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
