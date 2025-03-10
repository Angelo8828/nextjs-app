import { FaPhp, FaLaravel, FaSymfony, FaReact, FaVuejs, FaPython, FaLinux, FaDocker } from "react-icons/fa";
import { SiDjango, SiFlask, SiJavascript, SiTypescript, SiPostgresql } from "react-icons/si";

export default function TechStack() {
  return (
    <section className="w-full max-w-3xl text-center">
      <h2 className="text-2xl font-bold text-gray-100 mb-5">Tech Stack</h2>

      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-lg font-medium text-gray-300 mb-2">PHP</h3>
          <div className="flex justify-center gap-6 text-gray-400 text-4xl">
            <FaPhp title="PHP" />
            <FaLaravel title="Laravel" />
            <FaSymfony title="Symfony" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-300 mb-2">JavaScript</h3>
          <div className="flex justify-center gap-6 text-gray-400 text-4xl">
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <FaReact title="React" />
            <FaVuejs title="Vue.js" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-300 mb-2">Python</h3>
          <div className="flex justify-center gap-6 text-gray-400 text-4xl">
            <FaPython title="Python" />
            <SiDjango title="Django" />
            <SiFlask title="Flask" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-300 mb-2">Infra/DevOps</h3>
          <div className="flex justify-center gap-6 text-gray-400 text-4xl">
            <FaLinux title="Linux" />
            <FaDocker title="Docker" />
            <SiPostgresql title="PostgreSQL" />
          </div>
        </div>
      </div>
    </section>
  );
}
