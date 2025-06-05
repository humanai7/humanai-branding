import { Code, Rocket, Target, ArrowRight, Trophy } from "lucide-react";

/**
 * About section component for HUMANAI portfolio website
 * Displays company information, services, statistics, and branding
 * Features responsive design with glassmorphism effects and hover animations
 * @returns JSX.Element - Complete about section with logo, services, and stats
 */
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-emerald-500/20 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* Header with Logo */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.png" 
                alt="HUMANAI Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-[0.2em] uppercase">
              HUMANAI
            </h1>
            <p className="text-emerald-300 text-lg mb-2">
              AI-Powered Creator
            </p>
            <p className="text-gray-300 text-base">
              Transforming digital experiences through intelligent web development and AI-powered content creation.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Integration</h3>
              <p className="text-sm text-gray-300">Intelligent automation and machine learning solutions</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-300">Quick turnaround times without compromising quality</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Precision</h3>
              <p className="text-sm text-gray-300">Accurate solutions tailored to your specific needs</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quality</h3>
              <p className="text-sm text-gray-300">Excellence in every project and deliverable</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 cursor-pointer">
              <p className="text-2xl font-bold text-emerald-400">150+</p>
              <p className="text-sm text-gray-300">Projects</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer">
              <p className="text-2xl font-bold text-blue-400">98%</p>
              <p className="text-sm text-gray-300">Success Rate</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer">
              <p className="text-2xl font-bold text-purple-400">24/7</p>
              <p className="text-sm text-gray-300">Support</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 cursor-pointer">
              <p className="text-2xl font-bold text-orange-400">5+</p>
              <p className="text-sm text-gray-300">Years</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}