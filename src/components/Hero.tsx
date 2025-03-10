export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 leading-tight">
        Hey, I'm <span className="text-gray-300">[Your Name]</span> 👋
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl">
        A developer with 10 years of experience crafting <span className="font-medium text-gray-300">scalable applications</span>
        with a focus on <span className="font-medium text-gray-300">clean code</span>,
        <span className="font-medium text-gray-300"> great user experiences</span>,
        and <span className="font-medium text-gray-300"> thoughtful product design</span>.
      </p>
    </section>
  );
}
