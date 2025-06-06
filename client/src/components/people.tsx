import { Star, MapPin, ArrowRight, Mail, Linkedin, Github, Instagram, Youtube } from "lucide-react";
/**
 * People/Team section component for HUMANAI portfolio website
 * Displays CEO profile card and team statistics with interactive hover effects
 * Features responsive grid layout with CEO card on left and stats grid on right
 * @returns JSX.Element - Complete team section with CEO profile and statistics
 */
export default function People() {
  // Team member data configuration (currently featuring CEO profile)
  const team = [
    {
      id: 1,
      name: "Kondal Reddy Ameerpet",
      role: "Full Stack Developer",
      bio: "Great things begin with a dream-dare to make them real.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Docker", "AWS"],
      rating: 4.8,
      image: "/kondal.png"
    },
    {
      id: 2,
      name: "Nishanth Naidu",
      role: "Full Stack Developer",
      bio: "Expert in modern web technologies and cloud architecture",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Docker", "AWS"],
      rating: 4.8,
      image: "/nishanth.png"
    },
    {
      id: 3,
      name: "Pranay Reddy Yelti",
      role: "Data Engineer",
      bio: "Designs and builds scalable data pipelines and infrastructure to support analytics, machine learning, and real-time data processing.",
      skills: ["Python", "SQL", "Apache Spark", "AWS", "Data Warehousing"],
      rating: 4.9,
      image: "/pranay.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Team
        </h1>
        <p className="text-gray-300 text-lg">
          Meet the talented professionals behind HUMANAI's innovative solutions
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:h-[600px]">
        {/* Left Side - CEO Card */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-emerald-500/20 rounded-2xl p-8 text-white relative overflow-hidden backdrop-blur-sm h-full flex flex-col hover:scale-105 hover:shadow-2xl hover:border-emerald-400/40 transition-all duration-300 cursor-pointer">
          {/* CEO Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            Founder & CEO
          </div>

          {/* Profile Image */}
          <div className="text-center mb-4">
            <div className="relative inline-block">
              <img
                src="/dileep.png"
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-teal-500"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                5+ years
              </div>
            </div>
          </div>

          {/* CEO Info */}
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold mb-2 text-white">Dileep Reddy Naredla</h3>
            <p className="text-emerald-300 mb-3">Master of Science (MS) in Computer Science</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Visionary leader specializing in AI-powered solutions and building innovative digital experiences that transform businesses.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mb-4 text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">CHARLOTTE, NC</span>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-4">
            {/* <div className="text-center">
              <p className="text-2xl font-bold text-white">3</p>
              <p className="text-gray-300 text-sm">Projects</p>
            </div> */}
            {/* <div className="text-center">
              <p className="text-2xl font-bold flex items-center justify-center text-white">
                4.9 <Star className="w-5 h-5 text-yellow-400 ml-1 fill-current" />
              </p>
              <p className="text-gray-300 text-sm">Rating</p>
            </div> */}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">Strategic Leadership</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">AI Innovation</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">React</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">Vue</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">Node.js</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">Python</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">MongoDB</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">PostgreSQL</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">AWS</span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-sm text-emerald-300">GCP</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
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

          {/* Connect Button */}
          <div className="mt-auto">
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-emerald-700 hover:to-teal-700 transition-all">
              Connect
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side - Vertical Stats */}
        <div className="flex flex-col justify-between h-full space-y-4">
          <div className="text-center p-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 backdrop-blur-sm flex-1 flex flex-col justify-center hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 cursor-pointer">
            <p className="text-4xl font-bold text-emerald-400">4+</p>
            <p className="text-gray-300 text-lg">Team Members</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 backdrop-blur-sm flex-1 flex flex-col justify-center hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer">
            <p className="text-4xl font-bold text-blue-400">11</p>
            <p className="text-gray-300 text-lg">Specializations</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 backdrop-blur-sm flex-1 flex flex-col justify-center hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer">
            <p className="text-4xl font-bold text-purple-400">4.9</p>
            <p className="text-gray-300 text-lg">Efficiency</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 backdrop-blur-sm flex-1 flex flex-col justify-center hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 cursor-pointer">
            <p className="text-4xl font-bold text-orange-400">5+</p>
            <p className="text-gray-300 text-lg">Years Exp</p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {team.map((member) => (
          <div key={member.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:shadow-lg hover:scale-105 hover:bg-slate-800/70 hover:border-emerald-400/40 transition-all duration-300 cursor-pointer">
            <div className="text-center mb-4">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-300 font-medium mb-2">{member.role}</p>
              <div className="flex items-center justify-center mb-3">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium text-gray-300">{member.rating}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
              {member.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {member.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-xs rounded-full font-medium border border-emerald-500/30">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-center space-x-3">
              <button className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-all">
                <Mail className="w-4 h-4 text-emerald-400" />
              </button>
              <button className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-all">
                <Linkedin className="w-4 h-4 text-emerald-400" />
              </button>
              <button className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-all">
                <Github className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Join Team Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-2xl p-8 text-center backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
        <p className="text-gray-300 mb-6">We're always looking for talented individuals to join our mission</p>
        <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto group">
          View Open Positions
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}