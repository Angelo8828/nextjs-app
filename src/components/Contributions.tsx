export default function Contributions() {
  return (
    <section className="py-10 max-w-3xl text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Community Contributions</h2>
      <p className="text-gray-600 mt-2">
        I love giving back to the tech community. You can find my contributions on:
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://github.com/yourusername" target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
          GitHub
        </a>
        <a href="https://www.openstreetmap.org/user/yourusername" target="_blank" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
          OpenStreetMap
        </a>
        <a href="https://en.wikipedia.org/wiki/User:yourusername" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          Wikipedia
        </a>
      </div>
    </section>
  );
}
