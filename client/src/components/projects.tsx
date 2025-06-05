import { useQuery } from "@tanstack/react-query";
import { Clock, ExternalLink, Github, Star, ArrowRight  } from "lucide-react";
import type { Project } from "@shared/schema";

/**
 * Projects portfolio component for HUMANAI website
 * Displays a grid of featured projects with technology stacks and interactive elements
 * Fetches project data from API and renders with loading states and hover animations
 * @returns JSX.Element - Complete projects section with grid layout
 */
export default function Projects() {
  // Fetch projects data using TanStack Query for caching and state management
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"], // Cache key for project data
  });

  // Show loading skeleton while projects data is being fetched
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Loading state header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h1>
        
        {/* Loading skeleton grid matching the actual layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 animate-pulse">
              {/* Skeleton elements for project card content */}
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-300 text-lg">
          Explore our portfolio of successful AI-powered web solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {projects?.map((project, index) => (
          <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:shadow-lg hover:bg-slate-800/70 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="flex space-x-2 ml-4">
                <button className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-all">
                  <Github className="w-4 h-4 text-emerald-400" />
                </button>
                <button className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-all">
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-xs rounded-full font-medium border border-emerald-500/30 hover:scale-110 hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:text-emerald-200 transition-all duration-300 cursor-pointer">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>Featured</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>2024</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto group">
          View All Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}