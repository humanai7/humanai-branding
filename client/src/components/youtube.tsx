import { Play, Eye, ArrowRight, ThumbsUp } from "lucide-react";

/**
 * YouTube channel section component for HUMANAI portfolio website
 * Displays channel statistics, featured videos, and engagement metrics
 * Features responsive video grid with hover effects and play buttons
 * @returns JSX.Element - Complete YouTube section with stats and video showcase
 */
export default function YouTube() {
  // Featured videos data configuration with titles, descriptions, and metrics
  const videos = [
    {
      id: 1,
      title: "AI-Powered Web Development in 2024",
      description: "Learn how artificial intelligence is revolutionizing modern web development practices",
      views: "12.5K",
      duration: "15:32",
      thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=225&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Building Responsive UIs with React",
      description: "Complete guide to creating beautiful, responsive user interfaces",
      views: "8.3K",
      duration: "22:15",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Machine Learning Integration Tutorial",
      description: "Step-by-step process for integrating ML models into web applications",
      views: "6.7K",
      duration: "18:45",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop&crop=center"
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
          Educational content on AI, web development, and creative technology
        </p>
      </div>

      {/* Channel Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">+195</p>
          <p className="text-sm text-gray-300">Subscribers</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">23.5K</p>
          <p className="text-sm text-gray-300">Total Views</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">32</p>
          <p className="text-sm text-gray-300">Videos</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer">
          <p className="text-2xl font-bold text-emerald-400">587</p>
          <p className="text-sm text-gray-300">Likes</p>
        </div>
      </div>

      {/* Featured Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {videos.map((video) => (
          <div key={video.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-500/20 hover:shadow-lg transition-all duration-300 group">
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
          </div>
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

        className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto group">
          Subscribe Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}