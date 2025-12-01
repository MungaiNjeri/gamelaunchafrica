import { User, BookOpen, Trophy, Heart, TrendingUp, Calendar } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Dashboard() {
  const userStats = [
    { icon: BookOpen, label: 'Courses Completed', value: '12', change: '+3 this month' },
    { icon: Trophy, label: 'Achievements', value: '24', change: '+5 this week' },
    { icon: Heart, label: 'Favorite Games', value: '8', change: '2 new' },
    { icon: Calendar, label: 'Days Active', value: '45', change: 'Streak!' }
  ];

  const recentActivity = [
    { action: 'Completed tutorial', title: 'Unity Basics for Beginners', time: '2 hours ago' },
    { action: 'Saved game', title: 'African Legends', time: '1 day ago' },
    { action: 'Connected with', title: 'John Okafor (Mentor)', time: '2 days ago' },
    { action: 'Unlocked achievement', title: 'Quick Learner', time: '3 days ago' }
  ];

  const recommendedCourses = [
    {
      title: 'Game Design Fundamentals',
      progress: 40,
      thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    },
    {
      title: 'Unity 3D Development',
      progress: 15,
      thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg'
    },
    {
      title: 'Character Animation',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Gamer!</h1>
          <p className="text-gray-400">Here's what's happening with your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <Card key={index}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
              <div className="text-xs text-green-500 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
              <div className="space-y-4">
                {recommendedCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-950 rounded-lg hover:bg-gray-900 transition-colors">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-24 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{course.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-green-500 h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400">{course.progress}%</span>
                      </div>
                    </div>
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      {course.progress > 0 ? 'Continue' : 'Start'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Profile</h2>
                <Button variant="outline" className="text-sm">Edit Profile</Button>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-green-500 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-gray-400 mb-4">Aspiring Game Developer</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Unity</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Beginner</span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">2D Games</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="border-l-2 border-purple-600 pl-4 pb-4 last:pb-0">
                    <div className="text-sm text-gray-400 mb-1">{activity.time}</div>
                    <div className="text-sm">
                      <span className="text-gray-300">{activity.action}</span>
                      <div className="font-semibold text-white mt-1">{activity.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="primary" className="w-full">
                  Find a Mentor
                </Button>
                <Button variant="outline" className="w-full">
                  Browse Games
                </Button>
                <Button variant="outline" className="w-full">
                  Explore Tutorials
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
