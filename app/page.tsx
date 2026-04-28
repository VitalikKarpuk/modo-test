import { Nav } from "@/app/components/sections/nav";
import { Hero } from "@/app/components/sections/hero";
import { Partners } from "@/app/components/sections/partners";
import { Products } from "@/app/components/sections/products";
import { Explorers } from "@/app/components/sections/explorers";
import { AgenticStack } from "@/app/components/sections/agentic-stack";
import { Footer } from "@/app/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <Products />
      <Explorers />
      <AgenticStack />
      <Footer />
    </>
  );
}
