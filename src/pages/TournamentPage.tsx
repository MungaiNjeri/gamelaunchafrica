import { Trophy, Users, Play, Clock } from "lucide-react";

export default function TournamentPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="text-[#00ff88]">Tournaments</span> Arena
      </h1>

      {/* Featured Tournament */}
      <div className="bg-[#0c0c0c] rounded-2xl p-6 border border-[#00ff88]/30 shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
          <Trophy className="text-[#00ff88]" /> Featured Tournament
        </h2>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
          className="w-full h-56 object-cover rounded-xl mb-4"
        />
        <p className="text-gray-300">
          Join Africa’s biggest esports showdown! Compete, win rewards,
          and climb the leaderboard.
        </p>
        <button className="mt-4 w-full py-3 rounded-xl bg-[#00ff88] text-black font-semibold hover:bg-[#00cc6a]">
          Register Now
        </button>
      </div>

      {/* Upcoming Tournaments */}
      <h2 className="text-2xl font-semibold mb-4">Upcoming Tournaments</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "FIFA 24 Africa Cup",
            img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
            date: "Dec 22, 2025",
            players: 120,
          },
          {
            title: "Call of Duty Warfare",
            img: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
            date: "Jan 3, 2026",
            players: 89,
          },
          {
            title: "Fortnite Battle Clash",
            img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
            date: "Jan 14, 2026",
            players: 150,
          },
        ].map((event, index) => (
          <div
            key={index}
            className="bg-[#0c0c0c] rounded-2xl p-4 border border-[#00ff88]/20 hover:border-[#00ff88]/40 transition shadow-lg"
          >
            <img
              src={event.img}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h3 className="text-xl font-semibold mb-1">{event.title}</h3>

            <div className="flex items-center text-gray-400 gap-2">
              <Clock className="text-[#00ff88] w-4" /> {event.date}
            </div>

            <div className="flex items-center text-gray-400 gap-2 mt-1">
              <Users className="text-[#00ff88] w-4" /> {event.players} Players
            </div>

            <button className="mt-4 w-full py-2 rounded-xl bg-[#00ff88] text-black font-semibold hover:bg-[#00cc6a] flex items-center justify-center gap-2">
              <Play className="w-4" /> View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
