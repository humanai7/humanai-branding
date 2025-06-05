import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm font-space">H7</span>
            </div>
            <span className="text-xl font-bold font-space text-gray-900">
              HumanAI7
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Profile' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'youtube', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-600 hover:text-purple-600 font-medium font-space transition-all duration-300 rounded-lg hover:bg-purple-50"
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold font-space rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Connect
            </button>
          </div>

          <button 
            className="md:hidden p-3 text-gray-600 hover:text-purple-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Clean Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {[
                { id: 'home', label: 'Profile' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'youtube', label: 'Gallery' },
                { id: 'contact', label: 'Contact' }
              ].map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left p-4 rounded-xl text-gray-600 hover:text-purple-600 font-medium font-space transition-all duration-300 hover:bg-purple-50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold font-space rounded-xl transition-all duration-300 shadow-md"
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
