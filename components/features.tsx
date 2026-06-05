import { CardIcon, ScaleIcon, SendIcon, WalletIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

const features: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}[] = [
  {
    icon: SendIcon,
    title: "Send money home instantly",
    body: "Cash out to GCash, Maya, any Philippine bank, or for over-the-counter pickup. Most transfers land in minutes, not days.",
  },
  {
    icon: WalletIcon,
    title: "Hold your money in US dollars",
    body: "Keep your savings in a stable USD balance, protected from peso swings. Convert and send only when the rate is right.",
  },
  {
    icon: CardIcon,
    title: "Spend anywhere",
    body: "A card that works wherever you live and travel — with no hidden foreign-exchange markup on every swipe.",
  },
  {
    icon: ScaleIcon,
    title: "Real rates, honest fees",
    body: "You always get the mid-market exchange rate, and the exact fee is shown before you confirm. What you see is what they get.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Everything in one app</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            One account for your money across borders
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Whether you&apos;re supporting family back home or building your own
            future abroad, MANA keeps it all in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
