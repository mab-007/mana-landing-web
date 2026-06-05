import { ArrowRightIcon } from "./icons";

// "Send & spend with" partners for the liquid marquee row.
const partners = [
  "GCash",
  "Maya",
  "BPI",
  "BDO",
  "UnionBank",
  "Visa",
  "Mastercard",
  "Meralco",
  "GrabPay",
  "PLDT",
];

export function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-x-hidden">
        <div className="pb-16 pt-40 md:pb-24 lg:pb-28 lg:pt-72">
          {/* hero copy */}
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-2xl lg:text-left">
              <p className="eyebrow justify-center lg:justify-start">
                For Filipinos abroad
              </p>
              <h1 className="display mt-6 text-balance text-5xl text-gabi-900 md:text-6xl xl:text-7xl">
                Send home free. Bank for real.
              </h1>
              <p className="mt-7 max-w-xl text-balance text-lg text-gabi-600">
                One app for the way you support family — send money home with no
                fee, earn 5% on your dollars, and spend with a card made for two
                countries.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a href="#join" className="btn-primary h-12 px-6 text-base">
                  Get the app
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="#how" className="btn-ghost h-12 px-6 text-base">
                  See how it works
                </a>
              </div>
            </div>
          </div>

          {/* full-bleed currency backdrop (rounded panel) */}
          <div className="absolute inset-1 -z-0 overflow-hidden rounded-3xl border border-gabi-900/10 sm:inset-2 lg:rounded-[3rem]">
            <img
              src="/images/hero-bg.jpg"
              alt=""
              aria-hidden
              className="size-full object-cover"
            />
            {/* cream wash so the navy headline stays readable on the left */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, #FAF6EF 0%, #FAF6EF 38%, rgba(250,246,239,0.78) 55%, rgba(250,246,239,0.35) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(250,246,239,0.85) 0%, transparent 40%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* "Send & spend with" liquid marquee */}
      <section className="pb-4">
        <div className="group relative m-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-papel-200 md:pr-6">
              <p className="text-end text-sm font-medium text-papel-400">
                Send &amp; spend with
              </p>
            </div>
            <div className="marquee-mask relative w-full overflow-hidden py-6 md:w-[calc(100%-11rem)]">
              <div className="flex w-max animate-marquee items-center gap-14">
                {[...partners, ...partners].map((p, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap font-serif text-xl font-semibold text-gabi-400"
                  >
                    {p}
                  </span>
                ))}
              </div>
              {/* faded edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-papel-50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-papel-50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
