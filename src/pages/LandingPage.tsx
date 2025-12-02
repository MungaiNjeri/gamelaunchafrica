import { Gamepad2, BookOpen, Users, Trophy, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Hero from '../components/Hero';
import GameCard from '../components/Gamecard';

interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Gamepad2,
      title: 'Discover African Games',
      description: 'Explore games created by talented African developers and studios'
    },
    {
      icon: BookOpen,
      title: 'Learn & Grow',
      description: 'Access tutorials, guides, and resources to level up your gaming skills'
    },
    {
      icon: Users,
      title: 'Find Mentors',
      description: 'Connect with experienced African game developers and industry professionals'
    },
    {
      icon: Trophy,
      title: 'Showcase Your Work',
      description: 'Share your games and projects with a passionate gaming community'
    }
  ];

  const stats = [
    { value: '500+', label: 'African Games' },
    { value: '10K+', label: 'Active Gamers' },
    { value: '200+', label: 'Mentors' },
    { value: '50+', label: 'Countries' }
  ];

  const featuredGames = [
    {
      title: 'African Legends',
      developer: 'Lagos Game Studio',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
      rating: 4.8
    },
    {
      title: 'Savanna Warriors',
      developer: 'Cape Town Devs',
      image: 'https://images.pexels.com/photos/7915376/pexels-photo-7915376.jpeg',
      rating: 4.6
    },
    {
      title: 'Nairobi Nights',
      developer: 'East African Games',
      image: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg',
      rating: 4.9
    }
  ];

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <Hero
        title="GameLaunch Africa"
        subtitle="Your gateway to African gaming. Discover incredible games, learn from the best, connect with mentors, and join a thriving community of gamers and developers."
        ctaPrimary={{ label: 'Get Started', onClick: () => onNavigate?.('signup') }}
        ctaSecondary={{ label: 'Explore Games', onClick: () => onNavigate?.('games') }}
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-green-500">Succeed</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Join a platform built by African gamers, for African gamers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-green-500 rounded-xl mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Games</h2>
              <p className="text-gray-400">Discover what's trending in African gaming</p>
            </div>
            <Button variant="outline" onClick={() => onNavigate?.('games')}>
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-green-500 rounded-full mb-6">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Level Up?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of African gamers and developers on their journey to success
          </p>
          <Button variant="secondary" className="text-lg" onClick={() => onNavigate?.('signup')}>
            Create Your Account
          </Button>
        </div>
      </section>

    </div>
  );
}
