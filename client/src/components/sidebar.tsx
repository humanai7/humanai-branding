import { FolderOpen, Youtube, Users, Mail, Home, ChevronRight } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const navigation = [
    { 
      id: 'about', 
      label: 'About', 
      icon: Home, 
      color: 'from-emerald-500 to-teal-500',
      description: 'AI-Powered Studio'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: FolderOpen, 
      color: 'from-purple-500 to-indigo-500',
      description: 'Creative Showcase'
    },
    { 
      id: 'youtube', 
      label: 'YouTube', 
      icon: Youtube, 
      color: 'from-red-500 to-pink-500',
      description: 'Content Hub'
    },
    { 
      id: 'people', 
      label: 'Team', 
      icon: Users, 
      color: 'from-cyan-500 to-blue-500',
      description: 'Creative Minds'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: Mail, 
      color: 'from-slate-500 to-gray-500',
      description: 'Get In Touch'
    }
  ];

  return (
    <aside className="h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black border-r border-white/10 flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      {/* Scrollable Navigation */}
      <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide pt-2">
        <div className="pt-6 px-2 pb-2 lg:p-6">
          {/* Navigation Items */}
          <nav className="space-y-1 lg:space-y-3">
            {navigation.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full group relative transition-all duration-300 min-h-[60px] lg:min-h-[auto] ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* Glow effect for active item */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl lg:rounded-2xl blur-lg opacity-20`}></div>
                )}
                
                <div className={`relative flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl lg:rounded-2xl border transition-all duration-300 justify-center lg:justify-start ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} bg-opacity-20 border-white/30 shadow-lg`
                    : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                }`}>
                  {/* Icon */}
                  <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? `bg-gradient-to-br ${item.color} shadow-lg`
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    <Icon className={`w-5 h-5 lg:w-5 lg:h-5 transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`} />
                  </div>

                  {/* Content - Hidden on small screens */}
                  <div className="flex-1 text-left hidden lg:block">
                    <div className={`font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-xs transition-colors duration-300 ${
                      isActive ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-400'
                    }`}>
                      {item.description}
                    </div>
                  </div>

                  {/* Arrow - Hidden on small screens */}
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 hidden lg:block ${
                    isActive 
                      ? 'text-white translate-x-1' 
                      : 'text-gray-500 group-hover:text-gray-300 group-hover:translate-x-1'
                  }`} />
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 lg:h-8 bg-gradient-to-b from-white to-gray-300 rounded-r-full"></div>
                )}
              </button>
            );
          })}
          </nav>
        </div>
      </div>

      {/* Right glow line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
    </aside>
  );
}