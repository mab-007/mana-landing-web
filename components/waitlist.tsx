"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";

/**
 * Waitlist form.
 *
 * There is no backend yet. This form is wired for **Netlify Forms** — when the
 * site is deployed to Netlify, submissions are captured automatically (see the
 * `data-netlify` attribute + hidden `form-name` input below). On any other host
 * it simply shows the success state. To use a different provider (Formspree,
 * Mailchimp, your own API), change the `encode`/`fetch` call in `onSubmit`.
 */
const FORM_NAME = "waitlist";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, email }),
      });
      setStatus("done");
    } catch {
      // No backend configured for this host — still confirm to the user.
      setStatus("done");
    }
  }

  return (
    <section id="waitlist" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-ink-900 px-6 py-14 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 0%, rgba(37,99,235,0.45), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be first to make MANA your financial home
            </h2>
            <p className="mt-4 text-lg text-ink-200">
              Join the waitlist and we&apos;ll reach out the moment your spot opens
              up. No spam, ever.
            </p>

            {status === "done" ? (
              <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-5 py-3 text-emerald-300">
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
                {/* Required for Netlify Forms detection */}
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary shrink-0 disabled:opacity-70"
                >
                  {status === "loading" ? "Joining…" : "Join"}
                  {status !== "loading" && <ArrowRightIcon className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
