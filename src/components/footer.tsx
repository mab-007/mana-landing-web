import { Logo } from "./logo";

const cols = [
  { title: "Product", links: ["Send money", "The card", "Pay bills"] },
  { title: "Company", links: ["Careers", "Press", "Contact"] },
  { title: "Support", links: ["Help center", "hello@mana.app", "Security", "Status"] },
];

export function Footer() {
  return (
    <footer className="bg-gabi-900 text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              The financial home for Filipinos abroad. Free remittance, real
              banking, built for the way you support family.
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

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-white/40">
            Mana is a financial technology company, not a bank. Banking services
            provided by our partner bank, Member FDIC. The Mana debit card is
            issued by our card partner pursuant to a license. Save is a yield
            feature on your USD wallet, is not a deposit account, and is not
            FDIC-insured at the Save layer; the rate is current, may change, and
            is not guaranteed. Sending and FX services are provided under
            applicable money-transmitter licenses.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-sm text-white/40 sm:flex-row sm:items-center">
            <p>© 2026 Mana, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Licenses</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
