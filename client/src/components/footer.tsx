import { Heart,
  Code,
  Github,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Zap
} from "lucide-react";
import humanaiLogo from "@assets/humanai-final-tranparent-logo_1749148793272.png";

/**
 * Footer component for HUMANAI portfolio website
 * Features dark theme with emerald gradients, navigation links, and social media integration
 * Includes scroll-to-top functionality and company information
 */
export default function Footer() {


  /**
   * Handles navigation to different sections with smooth scrolling
   * @param sectionId - ID of the target section element
   */
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Trigger section change event
      setTimeout(() => {
        const event = new CustomEvent('sectionChange', { detail: sectionId });
        window.dispatchEvent(event);
      }, 500);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20 relative overflow-hidden border-t border-emerald-500/20">
      {/* Animated gradient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center shadow-lg border border-emerald-500/30 backdrop-blur-sm">
                <img src={humanaiLogo} alt="HUMANAI" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  HUMANAI
                </div>
                <div className="text-emerald-300 text-sm">AI-Powered Web & Content Creator</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming ideas into reality through the perfect fusion of human creativity and artificial intelligence. 
              Building the future of digital experiences, one innovation at a time.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-sm">Charlotte, NC</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail
                onClick={() => {
                  window.location.href = "mailto:humanai7.enquiries@gmail.com?subject=Let's Connect";
                }}
                className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-sm">humanai7.enquiries@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Github 
              onClick={() => window.open("https://github.com/humanai7/humanai-branding", "_blank")}
              className="w-6 h-6 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram
              onClick={() => window.open("https://www.instagram.com/humanai.insta", "_blank")}
              className="w-6 h-6 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Youtube
              onClick={() => {
                window.open("https://www.youtube.com/@HUMANAI.youtube", "_blank", "noopener,noreferrer")
              }}
              className="w-6 h-6 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Mail
              onClick={() => {
                window.location.href = "mailto:humanai7.enquiries@gmail.com?subject=Let's Connect";
              }}
              className="w-6 h-6 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Navigation</h4>
            <div className="space-y-3">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Team', id: 'people' },
                { name: 'YouTube', id: 'youtube' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-left hover:translate-x-2 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Services</h4>
            <div className="space-y-3">
              {[
                'AI Web Development',
                'Content Automation',
                'ML Integration',
                'Technical Consulting',
                'Digital Strategy'
              ].map((service, index) => (
                <div
                  key={index}
                  className="text-gray-300 text-sm hover:text-emerald-400 transition-colors duration-300 cursor-default"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-emerald-500/20 pt-8">
          <div className="text-gray-400 text-sm text-center">
            <p>&copy; 2025 HUMANAI. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-400" /> and <Code className="w-4 h-4 mx-1 text-emerald-400" />, powered by AI <Zap className="w-4 h-4 ml-1 text-yellow-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
