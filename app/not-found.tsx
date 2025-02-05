import { FaRocket } from 'react-icons/fa';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
      {/* Animated Rocket Icon */}
      <div className="mb-6 animate-bounce">
        <FaRocket size={64} className="text-orange-600" />
      </div>
      <h1 className="text-5xl font-bold mb-4 tracking-tight">
        404 - Lost in Space
      </h1>
      <p className="mb-8 text-lg text-center">
        We couldn't locate the page you were looking for. It seems you've drifted off course in the cosmos.
      </p>
      <a
        href="/"
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-transform hover:scale-105"
      >
        Return to Base
      </a>
    </section>
  );
}
