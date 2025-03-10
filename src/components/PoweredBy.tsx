"use client";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiVercel } from "react-icons/si";

export default function PoweredBy() {
  return (
    <section className="mt-12 text-center text-gray-400 text-sm">
      <p className="mb-2">Powered by</p>
      <div className="flex justify-center gap-6 text-2xl">
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-gray-300" />
          <span className="text-xs mt-1">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-400" />
          <span className="text-xs mt-1">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiVercel className="text-gray-300" />
          <span className="text-xs mt-1">Vercel</span>
        </div>
      </div>
    </section>
  );
}
