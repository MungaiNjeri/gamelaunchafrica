import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: { label: string; onClick: () => void };
  ctaSecondary?: { label: string; onClick: () => void };
  stats?: { value: string; label: string }[];
}

export default function Hero({
  title = "GameLaunch",
  subtitle = "Your gateway to African gaming. Discover, learn, stream and connect with developers and gamers across Africa.",
  ctaPrimary,
  ctaSecondary,
  stats = [
    { value: "500+", label: "African Games" },
    { value: "10K+", label: "Active Gamers" },
  ],
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-gla-blue to-gla-purple tracking-tight leading-none">
              {title}
              <span className="block text-5xl text-white">Africa</span>
            </h1>

            <p className="mt-6 max-w-xl text-muted-gray">{subtitle}</p>

            <div className="mt-8 flex gap-4">
              {ctaPrimary && (
                <button onClick={ctaPrimary.onClick} className="btn-neon">
                  {ctaPrimary.label}
                </button>
              )}
              {ctaSecondary && (
                <button
                  onClick={ctaSecondary.onClick}
                  className="px-5 py-3 rounded-lg border border-gray-700 hover:border-white"
                >
                  {ctaSecondary.label}
                </button>
              )}
            </div>

            <div className="mt-10 flex gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-muted-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-glow-neon border border-gray-800"
          >
            {/* Hero Art Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
              <img
                src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg"
                alt="Game 1"
                className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/7915376/pexels-photo-7915376.jpeg"
                alt="Game 2"
                className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg"
                alt="Game 3"
                className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg"
                alt="Game 4"
                className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Optional overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-bold bg-black/50 px-4 py-2 rounded">
                Discover African Games
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

