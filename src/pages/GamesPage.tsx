import { useState } from 'react';
import { Star, Search, Filter } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Action', 'Adventure', 'Puzzle', 'Strategy', 'RPG', 'Casual'];

  const games = [
    {
      title: 'African Legends',
      developer: 'Lagos Game Studio',
      description: 'Epic action-adventure set in ancient African kingdoms',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
      rating: 4.8,
      category: 'Action',
      players: '1.2K'
    },
    {
      title: 'Savanna Warriors',
      developer: 'Cape Town Devs',
      description: 'Strategic battle game featuring African wildlife',
      image: 'https://images.pexels.com/photos/7915376/pexels-photo-7915376.jpeg',
      rating: 4.6,
      category: 'Strategy',
      players: '850'
    },
    {
      title: 'Nairobi Nights',
      developer: 'East African Games',
      description: 'Explore the vibrant streets of Nairobi',
      image: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg',
      rating: 4.9,
      category: 'Adventure',
      players: '2.1K'
    },
    {
      title: 'Rhythm of Africa',
      developer: 'Accra Studios',
      description: 'Music and rhythm game celebrating African beats',
      image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg',
      rating: 4.7,
      category: 'Casual',
      players: '1.5K'
    },
    {
      title: 'Desert Quest',
      developer: 'Sahara Games',
      description: 'Puzzle adventure through the African desert',
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
      rating: 4.5,
      category: 'Puzzle',
      players: '680'
    },
    {
      title: 'Kings & Kingdoms',
      developer: 'Abuja Interactive',
      description: 'Build and manage your African empire',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      rating: 4.8,
      category: 'Strategy',
      players: '1.8K'
    },
    {
      title: 'Spirit Guardians',
      developer: 'Zulu Entertainment',
      description: 'RPG adventure featuring African mythology',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      rating: 4.9,
      category: 'RPG',
      players: '2.4K'
    },
    {
      title: 'Urban Runner',
      developer: 'Johannesburg Pixels',
      description: 'Fast-paced parkour through African cities',
      image: 'https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg',
      rating: 4.4,
      category: 'Action',
      players: '920'
    },
    {
      title: 'Safari Tales',
      developer: 'Nairobi Games Co',
      description: 'Educational adventure for the whole family',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg',
      rating: 4.6,
      category: 'Adventure',
      players: '1.1K'
    }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.developer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover <span className="text-green-500">African Games</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore incredible games crafted by talented African developers
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search games or developers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-gradient-to-r from-purple-600 to-green-500 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredGames.length}</span> games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <Card key={index} className="overflow-hidden p-0 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-green-500 fill-green-500" />
                  <span className="text-white font-semibold">{game.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {game.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{game.developer}</p>
                <p className="text-gray-300 text-sm mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{game.players} players</span>
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">No games found matching your search</p>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
