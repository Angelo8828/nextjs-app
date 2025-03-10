import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-12 px-6">
      <Hero />
      <TechStack />
      <Contributions />
      <Contact />
    </div>
  );
}
