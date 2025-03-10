import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-900 px-6">
      <Hero />
      <TechStack />
      <Contributions />
      <Contact />
    </main>
  );
}
