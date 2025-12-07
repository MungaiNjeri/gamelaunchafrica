import { useState } from "react";
import { Users, Flame, Star, PlusCircle } from "lucide-react";

export default function CommunityPage() {
  // TAB STATE
  const [activeTab, setActiveTab] = useState("all");

  // THEME
  const THEME = {
    neon: "#39FF14",
    accentGradient: "linear-gradient(90deg, #39FF14, #0fa)",
  };

  // SAMPLE POSTS
  const samplePosts = [
    {
      id: 1,
      user: "Achieng",
      tag: "New Gamer",
      text: "I just started playing Ghost of Tsushima yesterday. Any tips?",
      likes: 12,
    },
    {
      id: 2,
      user: "Tunde",
      tag: "Pro Player",
      text: "Hosting a Tekken tournament this Saturday — Lagos players pull up!",
      likes: 88,
    },
    {
      id: 3,
      user: "Zuri",
      tag: "Streamer",
      text: "Any Kenyan gamers here streaming Apex Legends today?",
      likes: 41,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black pt-24 px-4 pb-10">
      {/* PAGE HEADER */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-4xl font-extrabold text-white">
          Community{" "}
          <span style={{ color: THEME.neon }}>
            Hub
          </span>
        </h1>
        <p className="text-gray-400 mt-2">
          Connect with gamers across Africa — share tips, updates, wins and journeys.
        </p>
      </div>

      {/* TABS */}
      <div className="max-w-6xl mx-auto mb-8 flex gap-4 overflow-x-auto no-scrollbar">
        {[
          { id: "all", icon: Users, label: "All Posts" },
          { id: "trending", icon: Flame, label: "Trending" },
          { id: "newbies", icon: Star, label: "New Gamers" },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition border"
              style={{
                borderColor: isActive ? THEME.neon : "rgba(255,255,255,0.15)",
                background: isActive ? "rgba(57,255,20,0.10)" : "rgba(255,255,255,0.05)",
                color: isActive ? THEME.neon : "white",
              }}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* CREATE POST BUTTON */}
      <div className="max-w-6xl mx-auto mb-6 flex justify-end">
        <button
          className="flex items-center gap-2 px-6 py-3 text-black font-bold rounded-xl transition"
          style={{
            background: THEME.accentGradient,
          }}
        >
          <PlusCircle className="w-5 h-5" />
          Create Post
        </button>
      </div>

      {/* POSTS LIST */}
      <div className="max-w-6xl mx-auto space-y-6">
        {samplePosts.map((post) => (
          <div
            key={post.id}
            className="p-5 rounded-2xl shadow-lg border transition"
            style={{
              borderColor: "rgba(57,255,20,0.25)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-white">{post.user}</h2>
              <span
                className="text-sm px-3 py-1 rounded-full"
                style={{
                  background: "rgba(57,255,20,0.15)",
                  color: THEME.neon,
                }}
              >
                {post.tag}
              </span>
            </div>

            <p className="text-gray-300">{post.text}</p>

            <div className="mt-3 text-sm text-gray-400">
              ❤️ {post.likes} likes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
