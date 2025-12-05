import { useState } from "react";
import { Star, Play, MessageCircle, Video, Upload, Settings, Flame, Users } from "lucide-react";

interface StreamingPageProps {
  onNavigate?: (page: string) => void;
}

export default function StreamingPage({ onNavigate }: StreamingPageProps) {
  const [currentStream, setCurrentStream] = useState({
    title: "Epic Safari Battle Royale",
    streamer: "KenyaGamerX",
    game: "Savanna Warriors",
    description:
      "Join KenyaGamerX in this epic live battle! Watch strategies unfold and connect with fans.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  });

  // Working placeholder images
  const recommendedStreams = [
    {
      title: "African Legends Arena",
      streamer: "GamerQueenKE",
      thumbnail: "https://images.unsplash.com/photo-1603297631961-c9a71b37a1a6",
    },
    {
      title: "Safari Quest",
      streamer: "PixelHunter",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      title: "Jungle Adventures",
      streamer: "GameKingKE",
      thumbnail: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
    },
  ];

  const categories = [
    { name: "Battle Royale", icon: Flame },
    { name: "Adventure", icon: Play },
    { name: "Strategy", icon: Star },
    { name: "Casual", icon: Users },
  ];

  const upcomingStreamers = [
    { name: "NairobianNinja", game: "Desert Blitz", time: "Starting in 1 hour" },
    { name: "QueenAisha", game: "Lagos Raid", time: "Today at 8 PM" },
  ];

  const topStreamers = [
    { name: "KingZulu", views: "12.4K watching" },
    { name: "MamaGamer", views: "9.1K watching" },
    { name: "JoziHero", views: "5.7K watching" },
  ];

  const VideoPlayer = ({ url }: { url: string }) => (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
      <video src={url} controls className="w-full h-full object-cover" autoPlay />
    </div>
  );

  const StreamInfo = ({ stream }: any) => (
    <div className="mt-4 bg-gray-900 p-4 rounded-lg shadow-inner">
      <h3 className="text-xl font-semibold">{stream.title}</h3>
      <p className="text-gray-400 mb-2">
        {stream.game} • by {stream.streamer}
      </p>
      <p className="text-gray-300">{stream.description}</p>
    </div>
  );

  const ChatSidebar = () => (
    <div className="flex flex-col gap-3 h-96 overflow-y-auto">
      <p className="text-gray-300">
        <span className="text-green-500 font-bold">Gamer1:</span> Whoa, that was epic!
      </p>
      <p className="text-gray-300">
        <span className="text-green-500 font-bold">Gamer2:</span> Let’s gooo!
      </p>
      <p className="text-gray-300">
        <span className="text-green-500 font-bold">Gamer3:</span> Love this strategy!
      </p>
    </div>
  );

  const RecommendedStreams = ({ streams, onSelect }: any) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {streams.map((s: any, i: number) => (
        <div
          key={i}
          onClick={() =>
            onSelect({
              ...s,
              videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
              game: s.title,
              description: `Join ${s.streamer} live!`,
            })
          }
          className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition transform shadow-md"
        >
          <img src={s.thumbnail} alt={s.title} className="w-full h-36 object-cover" />
          <div className="p-2">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-gray-400 text-sm">{s.streamer}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HEADER */}
      <section className="py-6 px-6 md:px-12 bg-gradient-to-r from-green-700 via-green-900 to-black shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{currentStream.title}</h1>
        <p className="text-gray-300 mb-4">{currentStream.game} • Live by {currentStream.streamer}</p>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg font-semibold transition">
            <Play size={20} /> Watch Live
          </button>

          <button
            onClick={() => onNavigate && onNavigate("home")}
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            Back Home
          </button>
        </div>
      </section>

      {/* MAIN STREAM VIEW */}
      <div className="flex flex-col lg:flex-row mt-6 px-6 md:px-12 gap-6">
        <div className="flex-1">
          <VideoPlayer url={currentStream.videoUrl} />
          <StreamInfo stream={currentStream} />
        </div>

        <div className="w-full lg:w-80 bg-gray-900 p-4 rounded-xl shadow-inner">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageCircle /> Live Chat
          </h2>
          <ChatSidebar />
        </div>
      </div>

      {/* LIVE CATEGORIES */}
      <section className="mt-12 px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Live Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-800 cursor-pointer">
              <cat.icon size={28} className="text-green-500" />
              <span className="text-lg">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING STREAMERS */}
      <section className="mt-12 px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Streamers</h2>
        <div className="space-y-3">
          {upcomingStreamers.map((u, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{u.name}</h4>
                <p className="text-gray-400">{u.game}</p>
              </div>
              <span className="text-green-500 text-sm">{u.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TOP STREAMERS */}
      <section className="mt-12 px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Top Streamers</h2>
        <div className="space-y-3">
          {topStreamers.map((t, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-green-500">{t.views}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RECOMMENDED STREAMS */}
      <div className="mt-12 px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star /> Recommended Streams
        </h2>
        <RecommendedStreams streams={recommendedStreams} onSelect={setCurrentStream} />
      </div>

      {/* START STREAMING */}
      <section className="mt-16 px-6 md:px-12 py-12 bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Video size={30} /> Start Streaming on GameLaunch Africa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/50 p-6 rounded-xl shadow border border-gray-800">
            <Upload size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Create a Stream</h3>
            <p className="text-gray-300">Set your title, category, and description.</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl shadow border border-gray-800">
            <Settings size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Configure OBS/Software</h3>
            <p className="text-gray-300">Use our Stream Key & RTMP URL to go live.</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl shadow border border-gray-800">
            <Play size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Go Live!</h3>
            <p className="text-gray-300">Your stream will appear on the platform instantly.</p>
          </div>
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-bold">
          Start Streaming
        </button>
      </section>

      {/* HOW TO STREAM */}
      <section className="mt-16 px-6 md:px-12 pb-20">
        <h2 className="text-3xl font-bold mb-4">How to Stream (Step-by-Step)</h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Download OBS Studio or Streamlabs OBS</li>
          <li>Log in to GameLaunch Africa</li>
          <li>Go to Dashboard → “Create Stream”</li>
          <li>Copy your Stream Key & RTMP URL</li>
          <li>Paste into OBS Settings → Stream</li>
          <li>Click “Start Streaming”</li>
          <li>Your stream instantly appears in the Live section</li>
        </ul>
      </section>
    </div>
  );
}
