import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Rates } from "@/components/rates";
import { FAQ } from "@/components/faq";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Rates />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
