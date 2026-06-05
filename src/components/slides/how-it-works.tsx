import { Reveal } from "../reveal";
import { SendIcon, PercentIcon, CardIcon, DocIcon } from "../icons";
import type { ComponentType, SVGProps } from "react";

const cards: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  tag: string;
}[] = [
  {
    icon: SendIcon,
    title: "Send money home",
    body: "Free transfers to any PH bank, GCash, or Maya. Real-time delivery, mid-market rate, and your recipient confirms when it lands.",
    tag: "$0 fee, every time",
  },
  {
    icon: PercentIcon,
    title: "Earn 5% on Save",
    body: "Turn on Save and your whole USD balance earns yield — liquid, no lock-up, withdraw to spend or send any time.",
    tag: "5.00% APY · opt-in",
  },
  {
    icon: CardIcon,
    title: "Spend on a card",
    body: "A virtual debit card for Apple Pay and Google Pay. Tap to pay anywhere, no FX surprises when you visit home, cashback on every swipe.",
    tag: "Up to 4% APY for cardholders",
  },
  {
    icon: DocIcon,
    title: "Pay PH bills",
    body: "Pay Meralco, Globe, Smart, PLDT, SSS, PhilHealth, and Pag-IBIG directly — no more wiring cash for someone to walk to the payment center.",
    tag: "Government contributions, too",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="slide bg-white">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">How Mana works</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-gabi-900 sm:text-5xl">
            One account for everything you do across two countries.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-gabi-600">
            Send, save, spend, and pay the bills back home — without juggling four
            apps and a relative&apos;s bank account.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-papel-200 bg-papel-50 p-7 transition-transform duration-200 hover:-translate-y-1">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-tanglaw-50 text-tanglaw-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-gabi-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-gabi-600">{c.body}</p>
                  <p className="mt-5 text-sm font-bold text-tanglaw-400">{c.tag}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
