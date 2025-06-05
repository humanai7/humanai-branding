import { useEffect, useState, useRef } from 'react';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import YouTube from './youtube';
import People from './people';
import Contact from './contact';
import ScrollToTop from './scroll-to-top';

interface MainContentProps {
  activeSection: string;
}

export default function MainContent({ activeSection }: MainContentProps) {
  const [refreshKey, setRefreshKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('MainContent: Active section changed to:', activeSection);
    setRefreshKey(prev => prev + 1);
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'youtube':
        return <YouTube />;
      case 'people':
        return <People />;
      case 'contact':
      case 'messages':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div ref={containerRef} className="min-h-full" id="main-content">
      <ScrollToTop trigger={activeSection} />
      <div key={`${activeSection}-${refreshKey}`} className="min-h-screen">
        {renderContent()}
      </div>
    </div>
  );
}