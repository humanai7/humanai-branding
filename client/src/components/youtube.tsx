import { Play, Eye, ArrowRight, ThumbsUp } from "lucide-react";

/**
 * YouTube channel section component for HUMANAI portfolio website
 * Displays channel statistics, featured videos, and engagement metrics
 */
export default function YouTube() {
  const videos = [
    {
      id: 1,
      title: "VANARASENA constructs Ayodhya Ram Mandir",
      description: "What if the Vanara Sena built the Ayodhya Ram Mandir? Witness an awe-inspiring AI-generated animation where VANARASENA construct the Ram Mandir in Ayodhya—bringing an epic mythological imagination to reel life!",
      views: "1223",
      duration: "1:38",
      thumbnail: "/vanarasena.png",
      url: "https://youtu.be/6vGHKGp3nYg?si=YQ0_BLzEHgBRiBIu"
    },
    {
      id: 2,
      title: "Hanuman Jayanti | Jai Sri Ram 🕉️✨",
      description: "Celebrate the divine spirit of Hanuman Jayanti 2025 with this ultra-realistic cinematic tribute to Lord Hanuman, the symbol of strength, devotion, and protection.",
      views: "2.0K",
      duration: "24 sec",
      thumbnail: "/hanuman.png",
      url: "https://youtube.com/shorts/rVsX37XPQ8E?si=4X3GdQWHWCW3Z_e7"
    },
    {
      id: 3,
      title: "Happy Ram Navami 🕉️✨",
      description: "On this sacred day, we bring you divine recreations of Lord Rama, Goddess Sita, Lord Hanuman using AI!",
      views: "3.5K",
      duration: "31 sec",
      thumbnail: "/rama-navami.png",
      url: "https://youtube.com/shorts/vo7eHi463FE?si=yk-TXQjhUFFwX0Pl"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          YouTube Channel
        </h1>
        <p className="text-gray-300 text-lg">
          Entertainment content on AI, web development, and creative technology.
        </p>
      </div>

      {/* Channel Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">+195</p>
          <p className="text-sm text-gray-300">Subscribers</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">23.5K</p>
          <p className="text-sm text-gray-300">Total Views</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">32</p>
          <p className="text-sm text-gray-300">Videos</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">587</p>
          <p className="text-sm text-gray-300">Likes</p>
        </div>
      </div>

      {/* Featured Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-500/20 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">{video.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  <span>98%</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="bg-gradient-to-r from-slate-800/50 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-emerald-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">Subscribe for More Content</h3>
        <p className="text-gray-300 mb-6">Get notified when we publish new tutorials and tech insights</p>
        <button
          onClick={() =>
            window.open("https://www.youtube.com/@HUMANAI.youtube", "_blank", "noopener,noreferrer")
          }
          className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto group"
        >
          Subscribe Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
