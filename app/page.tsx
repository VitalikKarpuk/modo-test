import { Nav } from "@/app/components/sections/nav";
import { Hero } from "@/app/components/sections/hero";
import { Partners } from "@/app/components/sections/partners";
import { Products } from "@/app/components/sections/products";
import { Showcase } from "@/app/components/sections/showcase";
import { EnterpriseStack } from "@/app/components/sections/enterprise-stack";
import { WhyModo } from "@/app/components/sections/why-modo";
import { FinalCTA } from "@/app/components/sections/final-cta";
import { Footer } from "@/app/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <Products />
      <Showcase />
      <EnterpriseStack />
      <WhyModo />
      <FinalCTA />
      <Footer />
    </>
  );
}
