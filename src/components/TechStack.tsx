import { FaReact, FaVuejs, FaLaravel, FaSymfony, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

export default function TechStack() {
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Symfony", icon: <FaSymfony className="text-gray-800" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  ];

  return (
    <section className="text-center py-8">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <div className="flex justify-center gap-6 mt-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl">{tech.icon}</div>
            <p className="text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
