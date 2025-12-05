import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";
import Button from "./Button";

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage = "home", onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "games", label: "Games" },
    { id: "learning", label: "Learning" },
    { id: "mentors", label: "Mentors" },
    { id: "stream", label: "Streaming" },
    { id: "tournaments", label: "Tournaments" },
    { id: "dashboard", label: "Dashboard" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavigation("home")}
          >
            <Gamepad2 className="w-8 h-8 text-neon-green group-hover:scale-110 transition" />
            <span className="text-2xl font-bold">
              <span className="text-white">GameLaunch</span>
              <span className="text-neon-green"> Africa</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition ${
                  currentPage === item.id
                    ? "text-neon-green"
                    : "text-gray-300 hover:text-white hover:scale-105"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="px-3 py-1 text-sm rounded-lg"
              onClick={() => handleNavigation("login")}
            >
              Login
            </Button>
            <Button
              variant="primary"
              className="px-3 py-1 text-sm rounded-lg"
              onClick={() => handleNavigation("signup")}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                  currentPage === item.id
                    ? "bg-neon-green/20 text-neon-green"
                    : "text-gray-300 hover:bg-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full px-3 py-1 text-sm rounded-lg"
                onClick={() => handleNavigation("login")}
              >
                Login
              </Button>
              <Button
                variant="primary"
                className="w-full px-3 py-1 text-sm rounded-lg"
                onClick={() => handleNavigation("signup")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
