const steps = [
  {
    step: "01",
    title: "Create your account",
    body: "Sign up in minutes with your phone and a valid ID. No branch visits, no paperwork.",
  },
  {
    step: "02",
    title: "Add money",
    body: "Top up from your local bank, card, or paycheck. Your balance is held in US dollars.",
  },
  {
    step: "03",
    title: "Send or spend",
    body: "Send to family in the Philippines or spend with your MANA card — instantly, anywhere.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Up and running in three steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-3xl border border-ink-100 bg-white p-7">
              <div className="text-sm font-extrabold text-brand-600">{s.step}</div>
              <h3 className="mt-3 text-xl font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
