import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; onClick: () => void };
  ctaSecondary: { label: string; onClick: () => void };
}

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="bg-black text-white h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-12">
      
      {/* TEXT */}
      <div className="max-w-xl md:max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={ctaPrimary.onClick}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            {ctaPrimary.label}
          </button>

          <button
            onClick={ctaSecondary.onClick}
            className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-xl font-semibold transition duration-300"
          >
            {ctaSecondary.label}
          </button>
        </div>
      </div>

      {/* SINGLE IMAGE */}
      <div className="w-full max-w-md">
        <img
          src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=700&auto=format&fit=crop&q=80"
          alt="African Gamer"
          className="rounded-2xl shadow-2xl w-full h-96 md:h-[32rem] object-cover"
        />
      </div>
    </section>
  );
}
