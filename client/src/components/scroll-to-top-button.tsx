import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating scroll-to-top button component
 * Appears in bottom-right corner when user scrolls down
 * Provides smooth scrolling back to top and section navigation
 */
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Handle scroll events to show/hide button based on scroll position
   */
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user has scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  /**
   * Smoothly scrolls to top and triggers About section display
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger section change to about after scroll
    setTimeout(() => {
      const event = new CustomEvent('sectionChange', { detail: 'about' });
      window.dispatchEvent(event);
    }, 500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-full text-white hover:from-emerald-700 hover:to-teal-700 hover:scale-110 transition-all duration-300 shadow-lg group backdrop-blur-sm border border-emerald-500/30"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}