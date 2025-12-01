import { Gamepad2, BookOpen, Users, Trophy, Star, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-green-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiMxYTFhMWEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎮 Welcome to the Future of African Gaming
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-green-500 bg-clip-text text-transparent">
            GameLaunch Africa
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your gateway to African gaming. Discover incredible games, learn from the best, connect with mentors, and join a thriving community of gamers and developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-lg" onClick={() => onNavigate?.('signup')}>
              Get Started
            </Button>
            <Button variant="outline" className="text-lg" onClick={() => onNavigate?.('games')}>
              Explore Games
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-green-500">Succeed</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join a platform built by African gamers, for African gamers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
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
            {featuredGames.map((game, index) => (
              <Card key={index} className="overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                    <span className="text-white font-semibold">{game.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{game.developer}</p>
                  <Button variant="secondary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-green-500 rounded-full mb-6">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Level Up?
          </h2>
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
