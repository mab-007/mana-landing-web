import { Reveal } from "../reveal";
import { Phone } from "../phone";
import { ArrowRightIcon, CheckIcon } from "../icons";

const items = [
  {
    t: "Lands in minutes",
    b: "Real-time delivery over InstaPay — even on weekends and holidays.",
  },
  {
    t: "Confirmed before it sends",
    b: "We verify the recipient's name with their bank so money never goes to the wrong account.",
  },
  {
    t: "She knows the moment it arrives",
    b: "Your recipient gets a text and an in-app confirmation — no more wondering if it went through.",
  },
];

export function SendMoney() {
  return (
    <section id="send" className="slide bg-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* phone: review screen */}
        <Reveal className="order-2 flex justify-center lg:order-1">
          <Phone className="w-[280px]">
            <div className="bg-white px-4 pb-5 pt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-gabi-900">
                <ArrowRightIcon className="h-4 w-4 rotate-180" /> Review
              </div>
              <div className="mt-6 text-center">
                <div className="text-[10px] uppercase tracking-wider text-papel-400">
                  Mom receives
                </div>
                <div className="mt-1 text-3xl font-bold text-gabi-900">₱11,148</div>
                <div className="mt-1 text-[11px] text-papel-400">
                  You pay $200.00 · 1 USD = ₱55.74
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-success-50 px-3 py-2 text-center text-[11px] font-semibold text-success-600">
                Rate locked · account holder confirmed
              </div>
              <div className="mt-3 rounded-xl border border-papel-200 p-3">
                <div className="text-sm font-semibold text-gabi-900">
                  Lourdes Manalo
                </div>
                <div className="text-[11px] text-papel-400">
                  BPI ••••4521 · Cebu City
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl bg-tanglaw-400 py-2.5 text-sm font-semibold text-white">
                Send ₱11,148 to Mom
              </button>
            </div>
          </Phone>
        </Reveal>

        {/* copy + checklist */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Send money home</p>
            <h2 className="display mt-4 text-4xl text-gabi-900 sm:text-5xl">
              Free transfers that arrive in minutes — and you both know it landed.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-gabi-600">
              Send to any PH bank, GCash, or Maya with no fee and the real
              mid-market rate. We confirm the account holder before you send, and
              your recipient gets a text the moment it arrives.
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {items.map((it, i) => (
              <Reveal key={it.t} delay={i * 80}>
                <div className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-success-50 text-success-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gabi-900">{it.t}</h3>
                    <p className="mt-1 text-gabi-600">{it.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
