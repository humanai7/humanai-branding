import { useEffect, useState, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import MainContent from "@/components/main-content";

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    // Initialize from localStorage or default to 'about'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('activeSection') || 'about';
    }
    return 'about';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = (section: string) => {
    console.log('App: Changing section from', activeSection, 'to', section);
    
    // Scroll to top immediately before changing section
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
    
    setActiveSection(section);
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeSection', section);
    }
    
    // Force scroll to top again after state change
    requestAnimationFrame(() => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
      }
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
    
    // Basic search functionality - navigate to relevant sections based on search terms
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('project')) {
      handleSectionChange('projects');
    } else if (lowerQuery.includes('about') || lowerQuery.includes('profile')) {
      handleSectionChange('about');
    } else if (lowerQuery.includes('youtube') || lowerQuery.includes('video')) {
      handleSectionChange('youtube');
    } else if (lowerQuery.includes('people') || lowerQuery.includes('team') || lowerQuery.includes('connect')) {
      handleSectionChange('people');
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('message')) {
      handleSectionChange('messages');
    }
  };

  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Listen for storage changes to sync across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'activeSection' && e.newValue) {
        setActiveSection(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Scroll to top when active section changes
  useEffect(() => {
    console.log('App: Active section changed to:', activeSection);
    
    // Multiple scroll reset attempts for reliability
    const scrollToTop = () => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
        mainContentRef.current.scrollTo(0, 0);
      }
      
      // Also try scrolling the window and document
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll to ensure DOM is updated
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 100);
  }, [activeSection]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="h-screen bg-slate-900 flex flex-col">
          {/* Fixed Header across entire width */}
          <div className="fixed top-0 left-0 right-0 z-50 h-16">
            <Header 
              activeSection={activeSection} 
              onSearch={handleSearch}
              onSectionChange={handleSectionChange}
            />
          </div>
          
          {/* Main Layout below header */}
          <div className="flex flex-1 pt-16">
            {/* Fixed Sidebar - minimized on mobile */}
            <div className="fixed left-0 top-16 bottom-0 w-16 lg:w-80 z-40">
              <Sidebar 
                activeSection={activeSection} 
                onSectionChange={handleSectionChange} 
              />
            </div>
            
            {/* Main Content Area - scrollable and flexible */}
            <div className="flex-1 ml-16 lg:ml-80 overflow-hidden">
              <div ref={mainContentRef} className="h-full overflow-y-auto" id="main-scroll-container">
                <MainContent activeSection={activeSection} />
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
