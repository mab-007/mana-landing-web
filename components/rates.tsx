import { CheckIcon } from "./icons";

const rows = [
  { label: "Transfer fee", mana: "Flat, low fee", others: "$10–$25 + cuts" },
  { label: "Exchange rate", mana: "Mid-market rate", others: "Marked-up rate" },
  { label: "Delivery speed", mana: "Minutes", others: "1–5 business days" },
  { label: "Hold balance in USD", mana: "Yes", others: "No" },
  { label: "Spend with a card", mana: "Yes", others: "No" },
];

export function Rates() {
  return (
    <section id="rates" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Keep more of what you send</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            More money reaches home
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Traditional remittance services hide their margin in poor exchange
            rates and layered fees. MANA shows you everything upfront — so more of
            every dollar lands in your family&apos;s hands.
          </p>
          <a href="#waitlist" className="btn-primary mt-8">
            Join the waitlist
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft">
          <div className="grid grid-cols-3 bg-ink-900 text-sm font-semibold text-white">
            <div className="px-5 py-4" />
            <div className="px-5 py-4 text-center">MANA</div>
            <div className="px-5 py-4 text-center text-ink-300">Traditional</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 items-center text-sm ${
                i % 2 ? "bg-ink-50/50" : "bg-white"
              }`}
            >
              <div className="px-5 py-4 font-medium text-ink-700">{r.label}</div>
              <div className="px-5 py-4 text-center font-semibold text-brand-700">
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-brand-600" />
                  {r.mana}
                </span>
              </div>
              <div className="px-5 py-4 text-center text-ink-400">{r.others}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
