import { useEffect, useState, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/header";
import MainContent from "@/components/main-content";

/**
 * Main application component for HUMANAI portfolio website
 * Manages global state, section navigation, search functionality, and layout
 * Provides context for React Query, tooltips, and toast notifications
 * @returns JSX.Element - Complete application with header, content, and providers
 */
function App() {
  // State for tracking currently active section (defaults to 'about')
  const [activeSection, setActiveSection] = useState('about');
  
  // State for managing search query input
  const [searchQuery, setSearchQuery] = useState('');
  // Reference to main content container for scroll management
  const mainContentRef = useRef<HTMLDivElement>(null);

  /**
   * Handles navigation between different sections of the website
   * Updates active section state and performs smooth scrolling to target element
   * @param section - Target section identifier to navigate to
   */
  const handleSectionChange = (section: string) => {
    console.log('App: Changing section from', activeSection, 'to', section);
    
    // Update active section state
    setActiveSection(section);
    
    // Scroll to the target section element with smooth animation
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' || section === 'home') {
      // For about/home sections, scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * Handles search functionality with intelligent section navigation
   * Analyzes search query and automatically navigates to relevant sections
   * @param query - User's search input string
   */
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
    
    // Intelligent search routing based on query keywords
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
  }, []);

  useEffect(() => {
    console.log('App: Active section changed to:', activeSection);
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
            {/* Main Content Area - full width */}
            <div className="flex-1 overflow-hidden">
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
