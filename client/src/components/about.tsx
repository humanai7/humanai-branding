import { Brain, Cpu, Lightbulb, Rocket, Users, Target, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Section - Side by Side Layout */}
      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <p className="text-emerald-300 font-medium tracking-wide uppercase text-sm">
                  we love to create - intelligently
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  The future with bold
                  <br />
                  <span className="text-emerald-300">ideas</span> and flawless
                  <br />
                  <span className="flex items-center gap-2">
                    <ArrowRight className="text-emerald-300 w-10 h-10" />
                    execution.
                  </span>
                </h1>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Our AI specializes in vibrant branding and unique translations of your vision into immersive digital experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 group">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-emerald-300 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-300 hover:text-emerald-900 transition-all duration-300 flex items-center gap-2 group">
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
                  <div className="w-24 h-24 bg-black rounded-full mx-auto flex items-center justify-center">
                    <img src="/humanai_logo.png" alt="HUMANAI" className="w-16 h-16 object-contain" />
                  </div>
                  
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">HUMANAI</h3>
                    <p className="text-white/90 mb-4">AI-Powered Creator</p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Transforming digital experiences through intelligent web development and AI-powered content creation.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Brain className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-xs text-white font-medium">AI Integration</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Rocket className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-xs text-white font-medium">Fast Delivery</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Lightbulb className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-xs text-white font-medium">Creative Solutions</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Target className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-xs text-white font-medium">Precision</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}