import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full max-w-3xl text-center">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Get in Touch</h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        If you&apos;d like to chat about projects, tech, or anything interesting, feel free to reach out at{" "}
        <a
          href="mailto:angelojoseph.salvador@gmail.com"
          className="text-gray-300 hover:text-white transition flex items-center justify-center gap-2 inline-flex"
        >
          angelojoseph.salvador@gmail.com <FaEnvelope className="text-lg" />
        </a>
      </p>
    </section>
  );
}
