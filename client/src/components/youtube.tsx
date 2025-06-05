import { Play, Users, Eye, ThumbsUp, Calendar, ArrowRight, Youtube } from "lucide-react";

export default function YouTube() {
  const videos = [
    {
      id: 1,
      title: "Building AI-Powered Web Applications",
      description: "Learn how to integrate artificial intelligence into modern web development workflows.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "12:34",
      views: "24K",
      likes: "1.2K",
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "The Future of Creative Development",
      description: "Exploring cutting-edge tools and techniques for modern creative professionals.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "18:45",
      views: "31K",
      likes: "2.1K",
      publishedAt: "2024-01-10"
    },
    {
      id: 3,
      title: "Mastering React with TypeScript",
      description: "Advanced patterns and best practices for building scalable React applications.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "25:12",
      views: "45K",
      likes: "3.4K",
      publishedAt: "2024-01-05"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-red-300 font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
              content creation hub
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              YouTube <span className="text-red-300">Channel</span>
            </h1>
            <p className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto mb-6 lg:mb-8 px-4">
              Dive into our latest tutorials, insights, and creative processes. Join our community of developers and creators.
            </p>
            
            {/* Channel Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <div className="bg-red-500/20 rounded-lg px-6 py-3 backdrop-blur-sm border border-red-400/30">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-red-300" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">12.5K</div>
                    <div className="text-red-200 text-sm">Subscribers</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/20 rounded-lg px-6 py-3 backdrop-blur-sm border border-red-400/30">
                <div className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-red-300" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">250+</div>
                    <div className="text-red-200 text-sm">Videos</div>
                  </div>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                <Youtube className="w-5 h-5" />
                Subscribe Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-red-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                      25:12
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                <div className="text-white space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Latest: Mastering React with TypeScript</h3>
                    <p className="text-red-100/80 leading-relaxed">
                      Advanced patterns and best practices for building scalable React applications with TypeScript. 
                      Learn about type safety, performance optimization, and modern development workflows.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-red-200/80">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>45K views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      <span>3.4K likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>5 days ago</span>
                    </div>
                  </div>

                  <button className="bg-white text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 flex items-center gap-2 group">
                    Watch Now
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={video.id} className="group relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-red-300/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="relative aspect-video bg-gradient-to-br from-red-400 to-pink-400 group-hover:from-red-500 group-hover:to-pink-500 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-red-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-red-100/70 text-sm leading-relaxed line-clamp-3">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-red-200/60">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-red-400/30 hover:border-red-300">
                      Watch Video
                      <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Floating accent */}
                <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full animate-bounce ${
                  index % 3 === 0 ? 'bg-yellow-400' : 
                  index % 3 === 1 ? 'bg-orange-400' : 'bg-pink-400'
                }`}></div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Creative Community</h3>
              <p className="text-red-100/80 mb-6 max-w-2xl mx-auto">
                Get notified about new tutorials, behind-the-scenes content, and exclusive tips for AI-powered development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-red-300 text-red-300 hover:bg-red-300 hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  View All Videos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}