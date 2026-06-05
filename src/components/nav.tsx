import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#personal", label: "Personal" },
  { href: "#send", label: "Send" },
  { href: "#save", label: "Save" },
  { href: "#spend", label: "Spend" },
  { href: "#company", label: "Company" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // the hero is light (cream), so nav text is always navy; only the
  // background switches to a frosted cream bar once you scroll.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-papel-200 bg-papel-50/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between">
        <a href="#top" aria-label="MANA home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gabi-600 transition-colors hover:text-gabi-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#join" className="text-sm font-semibold text-gabi-800">
            Log in
          </a>
          <a href="#join" className="btn-primary">
            Open account
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-papel-200 text-gabi-800 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-papel-200 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-700 hover:bg-papel-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Open account
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
