import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import GlobalReach from "@/components/sections/GlobalReach";
import Features from "@/components/sections/Features";
import RFQ from "@/components/sections/RFQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <About />
      <Products />
      <GlobalReach />
      <Features />
      <RFQ />
      <Contact />
    </div>
  );
}
