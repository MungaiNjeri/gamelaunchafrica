import { Gamepad2, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">
                <span className="text-white">GameLaunch</span>
                <span className="text-green-500"> Africa</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Empowering African gamers and developers. Discover games, learn new skills, find mentors, and join a thriving community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Mentors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 GameLaunch Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
