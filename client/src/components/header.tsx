import { useState } from 'react';
import { Search, Sparkles, Menu, X, Home, FolderOpen, Youtube, Users, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSearch?: (query: string) => void;
  onSectionChange?: (section: string) => void;
}

export default function Header({ activeSection, onSearch, onSectionChange }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-black border-b border-white/10 w-full relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
      
      <div className="relative z-10 flex items-center justify-between px-6 py-4">
        {/* Left side - Enhanced Brand */}
        <div className="flex items-center space-x-4 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20">
              <img src="/humanai_logo.png" alt="HUMANAI" className="w-7 h-7 object-contain" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              HUMANAI
            </h1>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span>AI-Powered Creative Studio</span>
            </div>
          </div>
        </div>

        {/* Center - Enhanced Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5 group-hover:text-white transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, team members, content..."
                className="w-full pl-12 pr-6 py-3.5 bg-transparent text-white placeholder:text-gray-400 text-sm focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400 border border-white/20">⌘K</kbd>
              </div>
            </div>
          </form>
        </div>

        {/* Right side - Clean */}
        <div className="flex items-center">
          {/* Empty space for clean look */}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </header>
  );
}