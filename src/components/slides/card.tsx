import { Reveal } from "../reveal";
import { PercentIcon, ShieldIcon, UserIcon } from "../icons";
import type { ComponentType, SVGProps } from "react";

const features: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  t: string;
  b: string;
}[] = [
  {
    icon: PercentIcon,
    t: "Earn up to 4% APY",
    b: "Spend on the card and unlock a higher rate on your Save balance.",
  },
  {
    icon: ShieldIcon,
    t: "No FX surprises abroad",
    b: "Real exchange rates when you travel home. Cashback on every swipe, both countries.",
  },
  {
    icon: UserIcon,
    t: "Family cards",
    b: "Give Mom or Dad a card on your account. You set the limit and see every charge.",
  },
];

export function Card() {
  return (
    <section id="card" className="slide bg-gabi-900 text-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">The Mana card</p>
            <h2 className="display mt-4 text-4xl text-white sm:text-5xl">
              A card built for two countries.
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/70">
              Virtual and ready in minutes. Add it to Apple Pay or Google Pay and
              tap to pay — at home or back home.
            </p>
          </Reveal>

          <div className="mt-8 space-y-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.t} delay={i * 80}>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-tanglaw-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{f.t}</h3>
                      <p className="mt-1 text-white/70">{f.b}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* card visual */}
        <Reveal delay={120} className="flex justify-center">
          <div className="relative aspect-[1.586] w-[360px] max-w-full rotate-[-4deg] rounded-3xl bg-gradient-to-br from-gabi-600 via-gabi-800 to-gabi-900 p-6 shadow-glow ring-1 ring-white/10">
            <div className="absolute right-6 top-6 h-7 w-11 rounded bg-gradient-to-r from-tanglaw-400 to-tanglaw-600 opacity-90" />
            <span className="font-serif text-2xl font-semibold">Mana</span>
            <div className="absolute bottom-14 left-6 h-8 w-11 rounded-md bg-white/20" />
            <div className="absolute bottom-6 left-6 text-lg tracking-[0.2em] text-white/90">
              •••• •••• •••• 4521
            </div>
            <div className="absolute bottom-6 right-6 text-xs text-white/60">
              MARIA S.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
