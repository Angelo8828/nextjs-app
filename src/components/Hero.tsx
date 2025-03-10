"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">
        Hey, I&apos;m <span className="text-gray-300">Elo</span>,{" "}
        <span className="text-gray-400">
          <Typewriter
            words={[
              "a product designer.",
              "a UI specialist.",
              "a server geek.",
              "a data guy.",
              "an API developer.",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Passionate about UI, product design, APIs, servers, and databases. Always exploring new ways to create seamless web experiences.
      </p>
    </section>
  );
}
