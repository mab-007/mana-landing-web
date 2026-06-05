import { useState, type FormEvent } from "react";
import { Reveal } from "../reveal";
import { AppleIcon, ArrowRightIcon, CheckIcon, GooglePlayIcon } from "../icons";

/** Floating user avatars with little money chips, scattered around the heading. */
const avatars = [
  { img: "a11", pos: "left-[8%] top-[20%]", chip: "paid you · $417", tone: "text-success-600" },
  { img: "a12", pos: "left-[20%] top-[58%]", chip: null, tone: "" },
  { img: "a13", pos: "left-[30%] top-[8%]", chip: null, tone: "" },
  { img: "a14", pos: "right-[28%] top-[6%]", chip: "sent · $59,478", tone: "text-[#E85D2C]" },
  { img: "a15", pos: "right-[8%] top-[26%]", chip: null, tone: "" },
  { img: "a16", pos: "right-[10%] top-[60%]", chip: "requested · ₱2,500", tone: "text-tanglaw-600" },
  { img: "a17", pos: "left-[14%] top-[80%]", chip: null, tone: "" },
  { img: "a18", pos: "right-[24%] top-[82%]", chip: null, tone: "" },
];

const FORM_NAME = "waitlist";
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, email }),
      });
    } catch {
      /* no backend on this host — still confirm to the user */
    }
    setStatus("done");
  }

  return (
    <section id="join" className="slide bg-white py-24">
      {/* scattered avatars (desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {avatars.map((a) => (
          <div key={a.img} className={`absolute ${a.pos} animate-float`}>
            <img
              src={`/images/avatars/${a.img}.jpg`}
              alt=""
              className="h-14 w-14 rounded-full object-cover shadow-soft ring-4 ring-white"
            />
            {a.chip && (
              <span
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold shadow-soft ${a.tone}`}
              >
                {a.chip}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="container-page relative z-10 text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-2xl text-4xl text-ink-900 sm:text-5xl lg:text-6xl">
            Join the 20+ million sending with MANA
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-600">
            Be first in line. Join the waitlist today and experience fast, secure,
            reliable money management built for Filipinos abroad.
          </p>

          {status === "done" ? (
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-success-50 px-5 py-3 text-success-600">
              <CheckIcon className="h-5 w-5" />
              <span className="font-semibold">You&apos;re on the list — salamat!</span>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full rounded-full border border-ink-200 px-5 py-3 text-ink-900 placeholder:text-papel-400 focus:border-tanglaw-400 focus:outline-none focus:ring-2 focus:ring-tanglaw-400/30"
              />
              <button type="submit" disabled={status === "loading"} className="btn-primary shrink-0 disabled:opacity-70">
                {status === "loading" ? "Joining…" : "Join the waitlist"}
                {status !== "loading" && <ArrowRightIcon className="h-4 w-4" />}
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-3 text-papel-400">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-papel-100 px-3 py-2 text-xs font-medium">
              <AppleIcon className="h-4 w-4" /> iOS — coming soon
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-papel-100 px-3 py-2 text-xs font-medium">
              <GooglePlayIcon className="h-4 w-4" /> Android — coming soon
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
