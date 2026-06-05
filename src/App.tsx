import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { CreateAccount } from "./components/slides/create-account";
import { AiBanking } from "./components/slides/ai-banking";
import { Security } from "./components/slides/security";
import { Budget } from "./components/slides/budget";
import { Spending } from "./components/slides/spending";
import { Accounts } from "./components/slides/accounts";
import { OpenAccount } from "./components/slides/open-account";
import { Join } from "./components/slides/join";
import { Footer } from "./components/footer";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CreateAccount />
        <AiBanking />
        <Security />
        <Budget />
        <Spending />
        <Accounts />
        <OpenAccount />
        <Join />
      </main>
      <Footer />
    </>
  );
}
