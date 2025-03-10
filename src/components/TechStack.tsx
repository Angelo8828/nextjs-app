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
    <section className="py-10 max-w-3xl text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Tech Stack</h2>
      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg">
            <div className="text-4xl">{tech.icon}</div>
            <p className="mt-2 text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
