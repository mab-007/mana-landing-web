import { Logo } from "./logo";

const cols = [
  {
    title: "Account",
    links: ["Personal accounts", "Joint accounts", "Savings", "Pro for freelance"],
  },
  {
    title: "Legal",
    links: ["All legal documents", "Privacy policy", "Terms of service", "Manage cookies"],
  },
  {
    title: "Customer support",
    links: ["Support hub", "Customer help", "Fees, rates & charges", "Contact us", "Trust & safety"],
  },
  {
    title: "Company",
    links: ["About MANA", "Careers", "Ethics statement", "Press"],
  },
];

export function Footer() {
  return (
    <footer className="no-snap bg-ink-900 text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              The financial home for Filipinos abroad. Send, hold, and spend — all
              in one app.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-white">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} MANA. All rights reserved.</p>
          <p className="max-w-xl text-xs">
            MANA is not a bank. Banking and payment services are provided through
            licensed partners. Product details are illustrative while in early
            access.
          </p>
        </div>
      </div>
    </footer>
  );
}
