import { Github, Linkedin, Twitter, Mail, MapPin, ArrowRight, Star, Code2, Palette, Zap } from "lucide-react";

export default function People() {
  const ceo = {
    id: 1,
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Visionary leader specializing in AI-powered solutions and building innovative digital experiences that transform businesses.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    location: "San Francisco, CA",
    skills: ["Strategic Leadership", "AI Innovation", "Product Vision", "Team Building"],
    social: {
      github: "alexchen-dev",
      linkedin: "alexchen",
      twitter: "alexchen_ai"
    },
    experience: "8+ years",
    projects: 75,
    rating: 4.9
  };

  const team = [
    {
      id: 2,
      name: "Maya Rodriguez",
      role: "Creative Director",
      bio: "Transforms complex ideas into beautiful, intuitive user experiences with a focus on accessibility.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      location: "Austin, TX",
      skills: ["Design Systems", "Figma", "CSS", "Animation"],
      social: {
        github: "maya-design",
        linkedin: "mayarodriguez",
        twitter: "maya_creates"
      },
      experience: "7+ years",
      projects: 38,
      rating: 4.8
    },
    {
      id: 3,
      name: "Jordan Kim",
      role: "Full-Stack Engineer",
      bio: "Builds scalable architectures and loves solving complex problems with elegant code solutions.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      location: "Seattle, WA",
      skills: ["TypeScript", "GraphQL", "Docker", "AWS"],
      social: {
        github: "jordankim",
        linkedin: "jordan-kim-dev",
        twitter: "jordan_codes"
      },
      experience: "4+ years",
      projects: 31,
      rating: 4.9
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "DevOps Specialist",
      bio: "Ensures seamless deployment and monitoring of applications with cutting-edge infrastructure.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      location: "Toronto, ON",
      skills: ["Kubernetes", "CI/CD", "Monitoring", "Security"],
      social: {
        github: "priya-devops",
        linkedin: "priyapatel",
        twitter: "priya_deploys"
      },
      experience: "6+ years",
      projects: 45,
      rating: 4.7
    }
  ];

  return (
    <div className="bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header and CEO Side by Side Layout */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 lg:mb-16">
            {/* Header Section - Left Side */}
            <div className="lg:w-3/5 flex-shrink-0">
              <div className="text-left">
                <p className="text-cyan-300 font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
                  meet our creative minds
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                  Our <span className="text-cyan-300">Team</span>
                </h1>
                <p className="text-cyan-100 text-base sm:text-lg mb-6 lg:mb-8">
                  A diverse group of talented individuals passionate about creating exceptional digital experiences through AI and innovation.
                </p>
                
                {/* Team Stats */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-cyan-500/20 rounded-lg px-4 py-3 backdrop-blur-sm border border-cyan-400/30">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-cyan-300" />
                      <div className="text-left">
                        <div className="text-white font-bold text-lg">156+</div>
                        <div className="text-cyan-200 text-sm">Projects</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-500/20 rounded-lg px-4 py-3 backdrop-blur-sm border border-cyan-400/30">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-cyan-300" />
                      <div className="text-left">
                        <div className="text-white font-bold text-lg">22+</div>
                        <div className="text-cyan-200 text-sm">Years Combined</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-500/20 rounded-lg px-4 py-3 backdrop-blur-sm border border-cyan-400/30">
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-cyan-300" />
                      <div className="text-left">
                        <div className="text-white font-bold text-lg">4.8★</div>
                        <div className="text-cyan-200 text-sm">Avg Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Section - Right Side */}
            <div className="lg:w-2/5 flex-shrink-0">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-300/50 relative overflow-hidden h-full">
                {/* CEO Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  CEO
                </div>
                
                {/* Avatar Section */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-3 ring-cyan-300/60 shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {ceo.experience}
                  </div>
                </div>

                {/* CEO Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {ceo.name}
                  </h3>
                  <p className="text-cyan-300 font-medium text-sm mb-2">{ceo.role}</p>
                  <p className="text-cyan-100/80 text-sm leading-relaxed">{ceo.bio}</p>
                </div>

                {/* Location & Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-2 text-cyan-200/80 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{ceo.location}</span>
                  </div>

                  <div className="flex justify-center gap-4 text-xs text-cyan-200/60">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">{ceo.projects}</div>
                      <div>Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold flex items-center gap-1 text-lg">
                        {ceo.rating}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div>Rating</div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {ceo.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-cyan-500/30 text-cyan-200 text-xs rounded-full font-medium border border-cyan-400/40">
                        {skill}
                      </span>
                    ))}
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium">
                      +{ceo.skills.length - 2}
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2 mb-4">
                  <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>

                {/* Contact Button */}
                <a 
                  href={`mailto:humanai.enq@gmail.com?subject=Connection Request - ${ceo.name}&body=Hi ${ceo.name},%0D%0A%0D%0AI would like to connect with you regarding potential collaboration opportunities.%0D%0A%0D%0ABest regards`}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg"
                >
                  Connect
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="mb-12 lg:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {team.map((member, index) => (
                  <div key={member.id} className="group relative">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-300/50 transition-all duration-500 hover:transform hover:scale-105">
                        {/* Avatar Section */}
                        <div className="relative mb-4">
                          <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-2 ring-cyan-300/30 group-hover:ring-cyan-300/60 transition-all duration-300">
                            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {member.experience}
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center mb-3">
                          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-cyan-300 font-medium text-xs mb-2">{member.role}</p>
                          <p className="text-cyan-100/70 text-xs leading-relaxed line-clamp-2">{member.bio}</p>
                        </div>

                        {/* Location & Stats */}
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center justify-center gap-1 text-cyan-200/80 text-xs">
                            <MapPin className="w-3 h-3" />
                            <span>{member.location}</span>
                          </div>

                          <div className="flex justify-center gap-4 text-xs text-cyan-200/60">
                            <div className="text-center">
                              <div className="text-white font-bold text-xs">{member.projects}</div>
                              <div>Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-bold flex items-center gap-1 text-xs">
                                {member.rating}
                                <Star className="w-2 h-2 text-yellow-400 fill-yellow-400" />
                              </div>
                              <div>Rating</div>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {member.skills.slice(0, 2).map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-200 text-xs rounded-full font-medium border border-cyan-400/30">
                                {skill}
                              </span>
                            ))}
                            {member.skills.length > 2 && (
                              <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium">
                                +{member.skills.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-2 mb-3">
                          <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                            <Github className="w-3 h-3" />
                          </button>
                          <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                            <Linkedin className="w-3 h-3" />
                          </button>
                          <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                            <Twitter className="w-3 h-3" />
                          </button>
                          <button className="p-1 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded transition-all">
                            <Mail className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Contact Button */}
                        <a 
                          href={`mailto:humanai7.enquiries@gmail.com?subject=Connection Request - ${member.name}&body=Hi ${member.name},%0D%0A%0D%0AI would like to connect with you regarding potential collaboration opportunities.%0D%0A%0D%0ABest regards`}
                          className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 hover:text-white py-2 px-3 rounded text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 group/btn border border-cyan-400/30 hover:border-cyan-300"
                        >
                          Connect
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>

                      {/* Floating accent */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse ${
                        index % 4 === 0 ? 'bg-yellow-400' : 
                        index % 4 === 1 ? 'bg-pink-400' : 
                        index % 4 === 2 ? 'bg-green-400' : 'bg-orange-400'
                      }`}></div>
                    </div>
                ))}
            </div>
          </div>

          {/* Join Team Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-cyan-100/80 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and creating exceptional digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-cyan-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  Send Resume
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}