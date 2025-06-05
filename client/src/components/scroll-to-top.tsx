import { useEffect } from 'react';

interface ScrollToTopProps {
  trigger: string | number;
  containerId?: string;
  behavior?: 'auto' | 'smooth' | 'instant';
}

export default function ScrollToTop({ trigger, containerId, behavior = 'instant' }: ScrollToTopProps) {
  useEffect(() => {
    const scrollToTop = () => {
      if (containerId) {
        // Scroll specific container
        const container = document.getElementById(containerId);
        if (container) {
          container.scrollTop = 0;
        }
      } else {
        // Scroll the main content area
        const mainContentContainer = document.getElementById('main-scroll-container');
        if (mainContentContainer) {
          mainContentContainer.scrollTop = 0;
        } else {
          window.scrollTo({ top: 0, left: 0, behavior });
        }
      }
    };

    // Immediate scroll
    scrollToTop();

    // Additional scroll after a brief delay to handle dynamic content
    const timeoutId = setTimeout(scrollToTop, 50);

    return () => clearTimeout(timeoutId);
  }, [trigger, containerId, behavior]);

  return null;
}