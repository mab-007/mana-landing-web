import { HalideHero } from "./halide-hero";
import { HowItWorks } from "../components/slides/how-it-works";
import { Remittance } from "../components/slides/remittance";
import { SendMoney } from "../components/slides/send-money";
import { Save } from "../components/slides/save";
import { Card } from "../components/slides/card";
import { WhyMana } from "../components/slides/why-mana";
import { Cta } from "../components/slides/cta";
import { Footer } from "../components/footer";
import { VersionSwitch } from "../components/version-switch";

export function V1() {
  return (
    <>
      <HalideHero />
      <main>
        <HowItWorks />
        <Remittance />
        <SendMoney />
        <Save />
        <Card />
        <WhyMana />
        <Cta />
      </main>
      <Footer />
      <VersionSwitch current="v1" />
    </>
  );
}
