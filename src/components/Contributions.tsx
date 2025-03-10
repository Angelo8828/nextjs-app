import { FaGithub, FaWikipediaW } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";

export default function Contributions() {
  return (
    <section className="w-full max-w-3xl text-center">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Contributions</h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        I love giving back to the community by sharing code on{" "}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition flex items-center justify-center gap-2 inline-flex"
        >
          GitHub <FaGithub className="text-xl" />
        </a>,
        mapping the world on{" "}
        <a
          href="https://www.openstreetmap.org/user/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition flex items-center justify-center gap-2 inline-flex"
        >
          OpenStreetMap <SiOpenstreetmap className="text-xl" />
        </a>,
        and improving knowledge on{" "}
        <a
          href="https://en.wikipedia.org/wiki/User:your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition flex items-center justify-center gap-2 inline-flex"
        >
          Wikipedia <FaWikipediaW className="text-xl" />
        </a>.
      </p>
    </section>
  );
}
