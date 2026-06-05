import { Reveal } from "../reveal";
import { ArrowRightIcon } from "../icons";

export function Spending() {
  return (
    <section id="send" className="slide bg-pink-100 py-24">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-2xl text-4xl text-[#F0584A] sm:text-5xl">
            Super powers for spending online
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-700">
            Unlock superpowers for spending online with MANA — secure
            transactions, smart tools, and seamless experiences every time.
          </p>
          <a href="#join" className="btn-primary mt-6">
            Explore more <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>

        {/* 3D-ish card stack */}
        <Reveal delay={160}>
          <div className="relative mx-auto mt-14 h-64 w-72">
            {/* holder */}
            <div className="absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 rounded-3xl bg-gradient-to-b from-ink-100 to-ink-200 shadow-soft" />
            {/* back card (coral) */}
            <div className="absolute bottom-16 left-1/2 h-44 w-60 -translate-x-1/2 -rotate-6 rounded-2xl bg-gradient-to-tr from-[#F0584A] to-[#ff8a7a] p-4 text-left text-white shadow-glow">
              <span className="text-sm font-bold">MANA</span>
            </div>
            {/* front card (gold) */}
            <div className="absolute bottom-8 left-1/2 h-44 w-60 -translate-x-1/2 rotate-3 rounded-2xl bg-gradient-to-tr from-sun-400 to-sun-500 p-4 text-left text-ink-900 shadow-glow">
              <span className="text-sm font-extrabold tracking-tight">MANA</span>
              <div className="absolute bottom-4 left-4 text-xs tracking-widest opacity-80">
                ••••  9921
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
