import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/slides/how-it-works";
import { Remittance } from "./components/slides/remittance";
import { SendMoney } from "./components/slides/send-money";
import { Save } from "./components/slides/save";
import { Card } from "./components/slides/card";
import { WhyMana } from "./components/slides/why-mana";
import { Cta } from "./components/slides/cta";
import { Footer } from "./components/footer";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Remittance />
        <SendMoney />
        <Save />
        <Card />
        <WhyMana />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
