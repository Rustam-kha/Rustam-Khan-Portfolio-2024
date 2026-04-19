
// src/components/Home.jsx
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiWix,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  const [stats, setStats] = useState({ projects: 0, experience: 0, clients: 0 });

  // Animated stats counter
  useEffect(() => {
    const counters = [
      { key: "projects", target: 45, duration: 2000 },
      { key: "experience", target: 3, duration: 2000 },
      { key: "clients", target: 28, duration: 2000 },
    ];

    counters.forEach(({ key, target, duration }) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    });
  }, []);

  // Expanded skill set based on your expertise
  const frontendSkills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500" },
    { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "text-teal-500" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: FaDatabase, name: "SQL", color: "text-blue-400" },
    { icon: FaPython, name: "Python", color: "text-yellow-400" },
    { icon: FaJava, name: "Java", color: "text-red-500" },
  ];

  const otherSkills = [
    { icon: FaWordpress, name: "WordPress", color: "text-blue-600" },
    { icon: SiWix, name: "Wix", color: "text-cyan-500" },
    { icon: SiTensorflow, name: "AI/ML", color: "text-orange-400" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-600", bg: "hover:bg-blue-600/20" },
    { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:text-blue-500", bg: "hover:bg-blue-500/20" },
    { icon: FaYoutube, href: "https://youtube.com", color: "hover:text-red-600", bg: "hover:bg-red-600/20" },
    { icon: FaTelegram, href: "https://telegram.com", color: "hover:text-blue-400", bg: "hover:bg-blue-400/20" },
  ];

  return (
    <div name="Home" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Particles Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-400">Available for Work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Rustam Khan
              </span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "Next.js Expert",
                  "WordPress Developer",
                  "Wix Specialist",
                  "Python Developer",
                  "AI Enthusiast 🤖",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop={true}
                className="text-cyan-400 font-semibold"
              />
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
              Full-stack developer with 3+ years of experience building scalable web applications. 
              Specialized in MERN stack, Next.js, and WordPress customization. Currently expanding 
              into AI and machine learning to create smarter solutions.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Projects", value: stats.projects, suffix: "+" },
                { label: "Experience", value: stats.experience, suffix: " years" },
                { label: "Clients", value: stats.clients, suffix: "+" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map(({ icon: Icon, href, color, bg }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${color} ${bg} transition-all duration-300`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Profile with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="Rustam Khan"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg"
              >
                <RiReactjsLine className="text-white text-2xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-5 -left-5 p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
              >
                <SiNextdotjs className="text-white text-2xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-8 p-3 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg"
              >
                <FaNodeJs className="text-white text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Animated Marquee */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Frontend Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 text-center">Frontend Development</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {frontendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <skill.icon className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">Backend & Database</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {backendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <skill.icon className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">CMS & Emerging Tech</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {otherSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <skill.icon className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
