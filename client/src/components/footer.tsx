import { Heart, Code, Zap, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/humanai_logo.png" alt="HumanAI" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="text-2xl font-bold font-space text-gray-900">
                  HUMANAI
                </div>
                <div className="text-gray-600 text-sm font-inter">AI-Powered Creator</div>
              </div>
            </div>
            <p className="text-gray-600 font-inter leading-relaxed mb-6">
              Pushing the boundaries of what's possible when human creativity meets artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-300 shadow-md border border-gray-200">
                <Github className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300 shadow-md border border-gray-200">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors duration-300 shadow-md border border-gray-200">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-space font-semibold text-gray-900 mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'YouTube', id: 'youtube' },
                { name: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 font-inter"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-space font-semibold text-gray-900 mb-6 text-lg">Services</h4>
            <div className="space-y-3">
              {[
                'AI Web Development',
                'Content Automation',
                'ML Integration',
                'Technical Consulting'
              ].map((service, index) => (
                <div
                  key={index}
                  className="text-gray-600 font-inter"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 text-sm font-inter text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 HUMANAI. All rights reserved.</p>
              <p className="mt-1 flex items-center justify-center md:justify-start">
                Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> and <Code className="w-4 h-4 mx-1 text-blue-500" />, powered by AI
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-white p-3 rounded-xl text-gray-600 hover:text-purple-600 transition-all duration-300 shadow-lg border border-gray-200 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
