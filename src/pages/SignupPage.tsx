import { useState } from 'react';
import { Gamepad2, Mail, Lock, User } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

interface SignupPageProps {
  onNavigate?: (page: string) => void;
}

export default function SignupPage({ onNavigate }: SignupPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup attempt:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-green-900/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiMxYTFhMWEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative z-10 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gamepad2 className="w-10 h-10 text-green-500" />
            <span className="text-3xl font-bold">
              <span className="text-white">GameLaunch</span>
              <span className="text-green-500"> Africa</span>
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
          <p className="text-gray-400">Join the African gaming community</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 bg-gray-800 border-gray-700 rounded text-purple-600 focus:ring-purple-600"
                required
              />
              <label className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <button type="button" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </button>
              </label>
            </div>

            <Button type="submit" variant="secondary" className="w-full">
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-400">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="px-4 py-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg text-white transition-colors"
              >
                Google
              </button>
              <button
                type="button"
                className="px-4 py-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg text-white transition-colors"
              >
                GitHub
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate?.('login')}
            className="text-green-500 hover:text-green-400 font-semibold transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
