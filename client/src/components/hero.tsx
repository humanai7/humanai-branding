import { Code, Sparkles, Brain, BarChart3, Star, Trophy, Target, Zap, Users, Clock } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Good morning, HUMANAI</h1>
            <p className="text-gray-600 mt-1">You have 3 active projects today</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, skills..."
                className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 shadow-sm"
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">HA</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Projects</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-3xl font-bold">+12</span>
                  <span className="text-blue-200 text-sm">24% vs last week</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Active Clients</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-3xl font-bold">+24</span>
                  <span className="text-purple-200 text-sm">14% vs last week</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm font-medium">Completed</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-3xl font-bold">+6</span>
                  <span className="text-pink-200 text-sm">30% vs last week</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium">AI Models</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-3xl font-bold">+8</span>
                  <span className="text-emerald-200 text-sm">12% vs last week</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Overview */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Performance</h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium">Teamwork</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-xl text-sm font-medium">Creative</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium">Solving</button>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                Performance analytics visualization
              </p>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Skills Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Web Development</p>
                    <p className="text-sm text-gray-500">Expert Level</p>
                  </div>
                </div>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI Integration</p>
                    <p className="text-sm text-gray-500">Advanced</p>
                  </div>
                </div>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Creative Design</p>
                    <p className="text-sm text-gray-500">Expert Level</p>
                  </div>
                </div>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Mini Games Section */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">E-commerce Platform</h4>
                <Code className="w-5 h-5" />
              </div>
              <p className="text-pink-100 text-sm mb-4">Full-stack development with React & Node.js</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-medium transition-all">
                View Project
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">AI Chat Bot</h4>
                <Brain className="w-5 h-5" />
              </div>
              <p className="text-orange-100 text-sm mb-4">Machine learning powered customer service</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-medium transition-all">
                View Project
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">Analytics Dashboard</h4>
                <BarChart3 className="w-5 h-5" />
              </div>
              <p className="text-blue-100 text-sm mb-4">Real-time data visualization platform</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-medium transition-all">
                View Project
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">Mobile App</h4>
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-purple-100 text-sm mb-4">Cross-platform mobile application</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-medium transition-all">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Quest */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Daily Goals</h3>
              <button className="text-blue-500 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Complete 2 Projects</p>
                  <p className="text-sm text-gray-500">+150 Exp</p>
                </div>
                <div className="text-sm text-blue-600 font-medium">1/2 Completed</div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Deploy 2 Applications</p>
                  <p className="text-sm text-gray-500">+250 Exp</p>
                </div>
                <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">Claim Reward</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SC</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Project Successfully Completed</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">AI Model Training Complete</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs">NC</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">New Client Onboarded</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}