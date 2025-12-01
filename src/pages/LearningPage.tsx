import { useState } from 'react';
import { BookOpen, Video, FileText, Clock, Users, Star, Search } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

export default function LearningPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Game Design', 'Programming', 'Art & Animation', '3D Modeling', 'Sound Design'];

  const courses = [
    {
      title: 'Introduction to Game Development',
      instructor: 'Adewale Johnson',
      description: 'Learn the fundamentals of game development from an African perspective',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      duration: '8 hours',
      lessons: 24,
      students: 1250,
      rating: 4.9,
      category: 'Game Design',
      type: 'video'
    },
    {
      title: 'Unity for Beginners',
      instructor: 'Fatima Nkrumah',
      description: 'Master Unity game engine with practical African-themed projects',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      duration: '12 hours',
      lessons: 36,
      students: 2100,
      rating: 4.8,
      category: 'Programming',
      type: 'video'
    },
    {
      title: '2D Character Design',
      instructor: 'Kwame Mensah',
      description: 'Create compelling 2D characters inspired by African culture',
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
      duration: '6 hours',
      lessons: 18,
      students: 890,
      rating: 4.7,
      category: 'Art & Animation',
      type: 'video'
    },
    {
      title: 'Game Monetization Strategies',
      instructor: 'Amara Okonkwo',
      description: 'Learn how to monetize your games in African markets',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
      duration: '4 hours',
      lessons: 12,
      students: 560,
      rating: 4.6,
      category: 'Game Design',
      type: 'article'
    },
    {
      title: 'Blender 3D Basics',
      instructor: 'Sipho Dlamini',
      description: 'Introduction to 3D modeling for game development',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      duration: '10 hours',
      lessons: 30,
      students: 1450,
      rating: 4.8,
      category: '3D Modeling',
      type: 'video'
    },
    {
      title: 'Game Audio Production',
      instructor: 'Chioma Eze',
      description: 'Create immersive soundscapes with African instruments',
      image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg',
      duration: '7 hours',
      lessons: 21,
      students: 720,
      rating: 4.9,
      category: 'Sound Design',
      type: 'video'
    }
  ];

  const tutorials = [
    {
      title: 'Building Your First Mobile Game',
      author: 'Lagos Game Dev',
      readTime: '15 min',
      type: 'Tutorial'
    },
    {
      title: 'Optimizing Games for Low-End Devices',
      author: 'African Tech Tips',
      readTime: '10 min',
      type: 'Guide'
    },
    {
      title: 'Publishing Games in Africa',
      author: 'GameLaunch Team',
      readTime: '12 min',
      type: 'Article'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-green-500">Resources</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Master game development with courses and tutorials by African experts
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search courses, tutorials, or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>
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

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden p-0 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                    <span className="text-white font-semibold">{course.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      {course.type === 'video' ? <Video className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                      <span>{course.type === 'video' ? 'Video Course' : 'Article'}</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">by {course.instructor}</p>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <Button variant="secondary" className="w-full">
                    Start Learning
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-4">No courses found matching your search</p>
              <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Tutorials & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {tutorial.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">by {tutorial.author}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.readTime}</span>
                  </span>
                  <Button variant="outline" className="text-sm px-4 py-2">
                    Read
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
