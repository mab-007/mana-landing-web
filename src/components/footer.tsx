import { Logo } from "./logo";

const cols = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#how", label: "How it works" },
      { href: "#rates", label: "Rates" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              The financial home for Filipinos abroad. Send, hold, and spend —
              all in one app.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-ink-900">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-500 transition-colors hover:text-ink-900"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-6 text-sm text-ink-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} MANA. All rights reserved.</p>
          <p className="max-w-xl text-xs text-ink-400">
            MANA is not a bank. Banking and payment services are provided through
            licensed partners. Product details are illustrative while in early
            access.
          </p>
        </div>
      </div>
    </footer>
  );
}
