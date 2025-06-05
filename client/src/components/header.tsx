import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

/**
 * Header component props interface defining required and optional functionality
 */
interface HeaderProps {
  /** Currently active section identifier for navigation highlighting */
  activeSection: string;
  /** Optional callback function to handle search queries */
  onSearch?: (query: string) => void;
  /** Optional callback function to handle section navigation changes */
  onSectionChange?: (section: string) => void;
}

/**
 * Main header component for HUMANAI portfolio website
 * Provides navigation, search functionality, and mobile responsive design
 * @param activeSection - Current active section for highlighting navigation
 * @param onSearch - Optional search handler function
 * @param onSectionChange - Optional section change handler function
 * @returns JSX.Element - Rendered header component
 */
export default function Header({ activeSection, onSearch, onSectionChange }: HeaderProps) {
  // State for managing search input value
  const [searchQuery, setSearchQuery] = useState('');
  // State for controlling mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Handles search form submission and validates input
   * @param e - React form event object
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Only trigger search if handler exists and query has content
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  // Navigation menu items configuration with IDs and display labels
  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'people', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b border-emerald-500/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onSectionChange?.('about');
              }}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="HUMANAI Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-lg font-bold text-white tracking-[0.2em] whitespace-nowrap uppercase">HUMANAI</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange?.(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-teal-200'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Search - Only on larger screens */}
            <form onSubmit={handleSearch} className="hidden xl:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 z-10 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-48 pl-10 pr-4 py-2 border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                />
              </div>
            </form>

            {/* Contact Us Button */}
            <button
              onClick={() => onSectionChange?.('contact')}
              className="bg-gradient-to-r from-emerald-600/80 to-teal-600/80 hover:from-emerald-600 hover:to-teal-600 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 border border-emerald-500/30 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-emerald-500/20 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-4 mb-4">
              <div className="relative">
                <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 z-10 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange?.(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-teal-200 bg-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}