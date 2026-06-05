"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

const faqs = [
  {
    q: "What is MANA?",
    a: "MANA is a financial app built for Filipinos living and working abroad. Hold your money in US dollars, send it home in minutes, and spend with a card — all in one place.",
  },
  {
    q: "How fast do transfers reach the Philippines?",
    a: "Most transfers to GCash, Maya, and major Philippine banks arrive within minutes. Cash pickup is available at partner locations nationwide.",
  },
  {
    q: "What does it cost?",
    a: "You always get the mid-market exchange rate, and a single, transparent fee is shown before you confirm any transfer. No hidden markups.",
  },
  {
    q: "Is my money safe?",
    a: "Yes. MANA uses bank-grade security and works with regulated partners to safeguard your funds and your data.",
  },
  {
    q: "When can I sign up?",
    a: "We're rolling out access in waves. Join the waitlist and we'll let you know the moment your spot is ready.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink-100 rounded-3xl border border-ink-100 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink-900">{f.q}</span>
                  <PlusIcon
                    className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-ink-600">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
