import { useState, type FormEvent } from "react";
import { Reveal } from "../reveal";
import { ArrowRightIcon, CheckIcon } from "../icons";

const FORM_NAME = "waitlist";
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function Cta() {
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
    <section id="join" className="slide bg-gabi-900 text-white">
      <div className="container-page mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="display text-4xl text-white sm:text-5xl">
            Be first to bank with Mana.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/70">
            We&apos;re launching in California in 2026. Add your name and we&apos;ll
            tell you the day it&apos;s ready.
          </p>

          {status === "done" ? (
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-success-400">
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
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder:text-white/40 focus:border-tanglaw-400 focus:outline-none focus:ring-2 focus:ring-tanglaw-400/40"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary shrink-0 disabled:opacity-70"
              >
                {status === "loading" ? "Joining…" : "Join the waitlist"}
                {status !== "loading" && <ArrowRightIcon className="h-4 w-4" />}
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/40">
            No spam. One email when we launch — that&apos;s it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
