import Link from "next/link";

export default function Contact() {
  return (
    <section className="text-center py-8">
      <p className="text-lg">Want to collaborate? Let’s talk! 🚀</p>
      <Link
        href="mailto:angelojoseph.salvador@gmail.com"
        className="text-blue-600 hover:underline text-lg mt-2 inline-block"
      >
        Contact Me?
      </Link>
    </section>
  );
}
