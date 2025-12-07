import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import GamesPage from './pages/GamesPage';
import LearningPage from './pages/LearningPage';
import MentorsPage from './pages/MentorsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StreamingPage from './pages/StreamingPage';
import TournamentPage from './pages/TournamentPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    console.log('Navigating to:', page); // debug
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard />;
      case 'games':
        return <GamesPage />;
      case 'learning':
        return <LearningPage />;
      case 'mentors':
        return <MentorsPage />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupPage onNavigate={handleNavigate} />;
      case 'stream':
        return <StreamingPage onNavigate={handleNavigate} />;
      case 'tournaments':
        return <TournamentPage/>;
      case 'community':
        return <CommunityPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  const showNavAndFooter = currentPage !== 'login' && currentPage !== 'signup';

  return (
    <div className="min-h-screen bg-black">
      {showNavAndFooter && <Navbar currentPage={currentPage} onNavigate={handleNavigate} />}
      <div className={showNavAndFooter ? 'pt-20' : ''}>{renderPage()}</div>
      {showNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
