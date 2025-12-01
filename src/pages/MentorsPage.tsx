import { useState } from 'react';
import { MapPin, Briefcase, Star, MessageCircle, Search, Filter } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');

  const expertiseAreas = ['All', 'Unity', 'Unreal Engine', 'Game Design', '3D Art', 'Programming', 'Sound Design'];

  const mentors = [
    {
      name: 'Adewale Johnson',
      title: 'Senior Game Developer',
      company: 'Lagos Game Studio',
      location: 'Lagos, Nigeria',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      expertise: ['Unity', 'Game Design', 'Mobile Games'],
      rating: 4.9,
      sessions: 156,
      bio: 'Building games in Africa for over 10 years. Passionate about mentoring the next generation.',
      experience: '10+ years'
    },
    {
      name: 'Fatima Nkrumah',
      title: 'Lead Programmer',
      company: 'Accra Interactive',
      location: 'Accra, Ghana',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      expertise: ['Programming', 'Unity', 'C#'],
      rating: 4.8,
      sessions: 142,
      bio: 'Specialized in technical implementation and code optimization for African game studios.',
      experience: '8+ years'
    },
    {
      name: 'Sipho Dlamini',
      title: '3D Artist & Animator',
      company: 'Cape Town Studios',
      location: 'Cape Town, South Africa',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      expertise: ['3D Art', 'Animation', 'Blender'],
      rating: 4.9,
      sessions: 98,
      bio: 'Creating stunning 3D art that tells African stories. Love sharing my craft with aspiring artists.',
      experience: '7+ years'
    },
    {
      name: 'Chioma Eze',
      title: 'Sound Designer',
      company: 'African Audio Lab',
      location: 'Nairobi, Kenya',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      expertise: ['Sound Design', 'Music Production', 'Audio Engineering'],
      rating: 4.7,
      sessions: 87,
      bio: 'Blending traditional African sounds with modern game audio. Helping developers create unique soundscapes.',
      experience: '6+ years'
    },
    {
      name: 'Kwame Mensah',
      title: 'Game Designer',
      company: 'Kumasi Games',
      location: 'Kumasi, Ghana',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      expertise: ['Game Design', 'Level Design', 'Narrative'],
      rating: 4.8,
      sessions: 124,
      bio: 'Crafting engaging gameplay experiences. Focused on making games that resonate with African audiences.',
      experience: '9+ years'
    },
    {
      name: 'Amara Okonkwo',
      title: 'Technical Artist',
      company: 'Abuja Digital Arts',
      location: 'Abuja, Nigeria',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
      expertise: ['Unreal Engine', '3D Art', 'VFX'],
      rating: 4.9,
      sessions: 103,
      bio: 'Bridging the gap between art and technology. Specializing in real-time rendering and shader development.',
      experience: '8+ years'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesExpertise = selectedExpertise === 'all' ||
                            mentor.expertise.some(exp => exp.toLowerCase() === selectedExpertise.toLowerCase());
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your <span className="text-green-500">Mentor</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Connect with experienced African game developers and industry professionals
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search mentors by name, expertise, or role..."
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
          {expertiseAreas.map((expertise) => (
            <button
              key={expertise}
              onClick={() => setSelectedExpertise(expertise.toLowerCase())}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedExpertise === expertise.toLowerCase()
                  ? 'bg-gradient-to-r from-purple-600 to-green-500 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {expertise}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredMentors.length}</span> mentors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-purple-600"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">{mentor.title}</p>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                    <span className="text-white font-semibold">{mentor.rating}</span>
                    <span className="text-gray-400">({mentor.sessions} sessions)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Briefcase className="w-4 h-4" />
                  <span>{mentor.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{mentor.location}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 flex-1">{mentor.bio}</p>

              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-400">Experience: <span className="text-white">{mentor.experience}</span></span>
              </div>

              <Button variant="secondary" className="w-full flex items-center justify-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Request Session</span>
              </Button>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">No mentors found matching your criteria</p>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedExpertise('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}

        <Card className="mt-12 text-center bg-gradient-to-r from-purple-900/20 to-green-900/20 border-purple-600">
          <h2 className="text-2xl font-bold mb-4">Want to Become a Mentor?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Share your knowledge and experience with aspiring game developers across Africa. Make an impact on the next generation.
          </p>
          <Button variant="secondary">
            Apply as Mentor
          </Button>
        </Card>
      </div>
    </div>
  );
}
