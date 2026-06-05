import { Reveal } from "../reveal";

export function WhyMana() {
  return (
    <section id="why" className="slide bg-papel-50">
      <div className="container-page mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow justify-center">Why we built Mana</p>
          <h2 className="display mt-5 text-3xl text-gabi-900 sm:text-4xl lg:text-[2.75rem]">
            Every month, you hold up a household in two currencies. The apps you
            use treat it like a transaction.
          </h2>
          <p className="mt-6 font-serif text-2xl font-medium italic text-tanglaw-400">
            We treat it like the responsibility it is.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gabi-600">
            Mana is built for the nurse in Daly City, the engineer in San Diego,
            and everyone sending love home — by people who grew up watching it
            happen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
