import { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'games', label: 'Games' },
    { id: 'learning', label: 'Learning' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'dashboard', label: 'Dashboard' }
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('home')}>
            <Gamepad2 className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold">
              <span className="text-white">GameLaunch</span>
              <span className="text-green-500"> Africa</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-green-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => handleNavigation('login')}>
              Login
            </Button>
            <Button variant="secondary" onClick={() => handleNavigation('signup')}>
              Sign Up
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" onClick={() => handleNavigation('login')}>
                Login
              </Button>
              <Button variant="secondary" className="w-full" onClick={() => handleNavigation('signup')}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
