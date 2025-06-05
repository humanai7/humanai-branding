import { useEffect } from 'react';
import Projects from './projects';
import YouTube from './youtube';
import People from './people';
import Contact from './contact';
import Footer from './footer';
import ScrollToTopButton from './scroll-to-top-button';

/**
 * Props interface for MainContent component
 */
interface MainContentProps {
  /** Currently active section identifier for scroll management */
  activeSection: string;
}

/**
 * Main content container component for HUMANAI portfolio website
 * Manages all page sections, scroll behavior, and layout with background effects
 * Automatically scrolls to sections when activeSection prop changes
 * @param activeSection - Current active section to scroll to and highlight
 * @returns JSX.Element - Complete main content layout with all sections
 */
export default function MainContent({ activeSection }: MainContentProps) {
  /**
   * Effect hook to handle automatic scrolling when active section changes
   * Provides smooth scrolling to target sections or top of page
   */
  useEffect(() => {
    // Handle section navigation with smooth scrolling
    if (activeSection && activeSection !== 'home') {
      const element = document.getElementById(activeSection);
      if (element) {
        // Scroll to specific section element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activeSection === 'home' || activeSection === 'about') {
      // Scroll to top for home or about sections
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]); // Re-run effect when activeSection changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative">
      {/* Global Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-lg"></div>
      <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl"></div>
      
      {/* Hero Section with About */}
      <section id="about" className="min-h-screen relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white">
              <p className="text-sm font-medium mb-4 opacity-90">WE LOVE TO CREATE - INTELLIGENTLY</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The future with bold{" "}
                <span className="text-teal-200">ideas</span> and flawless{" "}
                <span className="flex items-center gap-2">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  execution.
                </span>
              </h1>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Our AI specializes in vibrant branding and unique translations of your vision into immersive digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Explore Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content - HUMANAI Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-teal-900/50 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-emerald-500/20 hover:scale-105 hover:shadow-3xl hover:border-emerald-400/40 transition-all duration-300 cursor-pointer">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <img 
                    src="/logo.png" 
                    alt="HUMANAI Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-widest">H U M A N A I</h2>
                  <p className="text-white/90">AI-Powered Creator</p>
                  <p className="text-white/80 text-sm mt-2 leading-relaxed">
                    Transforming digital experiences through intelligent web development and AI-powered content creation.
                  </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 mx-auto mb-2 text-white">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm font-medium">AI Integration</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 mx-auto mb-2 text-white">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Fast Delivery</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 mx-auto mb-2 text-white">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Creative Solutions</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 mx-auto mb-2 text-white">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Precision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 relative overflow-hidden">
        <Projects />
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="py-8 relative overflow-hidden">
        <YouTube />
      </section>

      {/* People Section */}
      <section id="people" className="py-8 relative overflow-hidden">
        <People />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 relative overflow-hidden">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}