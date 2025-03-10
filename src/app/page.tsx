import Hero from "@/components/Hero";
import Contributions from "@/components/Contributions";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900 px-6">
      <Hero />
      <Contributions />
      <TechStack />
      <Contact />
    </main>
  );
}
