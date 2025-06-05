import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 p-8 lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-white/20 rounded w-full mb-2"></div>
                <div className="h-3 bg-white/20 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-purple-300 font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
              our creative showcase
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Featured <span className="text-purple-300">Projects</span>
            </h1>
            <p className="text-purple-100 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Discover our latest innovations in AI-powered web development and creative digital solutions.
            </p>
            <div className="flex justify-center mt-8">
              <div className="text-sm text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full">
                {projects?.length || 0} projects completed
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <div key={project.id} className="group relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-300/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                      <p className="text-purple-100/80 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs rounded-full font-medium border border-purple-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-purple-200/80">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{Math.floor(Math.random() * 50) + 1}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span className="text-purple-300">Active</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date().toLocaleDateString()}</span>
                      </div>
                    </div>

                    <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-purple-400/30 hover:border-purple-300">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Floating accent */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse ${
                  index % 3 === 0 ? 'bg-yellow-400' : 
                  index % 3 === 1 ? 'bg-pink-400' : 'bg-cyan-400'
                }`}></div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 mx-auto group">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}