import type { ReactNode } from "react";
import { Reveal } from "../reveal";
import { Phone } from "../phone";
import { ShieldIcon, FingerprintIcon } from "../icons";

const chips = [
  "Make quick, secure bank transfers anytime on MANA's trusted platform.",
  "Easily generate virtual cards for safe online payments.",
  "Schedule payments effortlessly for convenience and control.",
  "Pay your bills back home quickly and securely.",
];

export function Security() {
  return (
    <section id="save" className="slide bg-ink-900 py-24 text-white">
      <div className="container-page">
        {/* top chips */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {chips.map((c, i) => (
            <Reveal key={c} delay={i * 80}>
              <div className="h-full rounded-xl bg-white/8 p-4 text-sm text-white/80 ring-1 ring-white/10">
                {c}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <Feature
              icon={<ShieldIcon className="h-6 w-6" />}
              title="Strict identity checks"
              body="MANA enforces strict identity verification to protect your account and personal information at every step."
            />
          </Reveal>

          <Reveal delay={120}>
            <Phone className="border-white/10">
              <div className="bg-white px-4 pb-6 pt-6 text-ink-900">
                <div className="flex items-center justify-between text-[10px] text-papel-400">
                  <span>9:41</span>
                  <span>Get card +</span>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-2xl font-bold">$1,255.29</div>
                  <div className="text-[10px] text-papel-400">Primary card</div>
                </div>
                <div className="mt-4 h-24 rounded-xl bg-gradient-to-tr from-ink-900 to-ink-600" />
                <div className="mt-4 flex justify-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-tanglaw-50 text-tanglaw-400">
                    <FingerprintIcon className="h-7 w-7" />
                  </span>
                </div>
              </div>
            </Phone>
          </Reveal>

          <Reveal delay={240}>
            <Feature
              icon={<FingerprintIcon className="h-6 w-6" />}
              title="Biometric security"
              body="Advanced biometric security ensures your account is protected with fingerprint or face unlock."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-xs">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-tanglaw-200">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
    </div>
  );
}
