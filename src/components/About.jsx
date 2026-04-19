// src/components/About.jsx
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaBrain,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiCanva,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTensorflow,
  SiWix,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  // Education Timeline Data
  const educationData = [
    {
      degree: "Matriculation",
      score: "1082/1100 (98.3%)",
      institution: "Ghazali Public School Jamrud",
      board: "BISE Peshawar",
      year: "2020",
      color: "from-green-500 to-emerald-500",
    },
    {
      degree: "Intermediate",
      score: "1024/1100 (93.1%)",
      institution: "Afridi Model School & College, Bara",
      board: "BISE Peshawar",
      year: "2022",
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Bachelor's in Software Engineering",
      score: "In Progress",
      institution: "University of Engineering & Technology, Taxila",
      year: "2024-Present",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Tech Stack Categories
  const techCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-cyan-400" />,
      skills: [
        { name: "React.js", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
        { name: "HTML5/CSS3", icon: FaHtml5, color: "text-orange-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <FaDatabase className="text-green-400" />,
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
      ],
    },
    {
      title: "CMS & Emerging Tech",
      icon: <FaBrain className="text-purple-400" />,
      skills: [
        { name: "WordPress", icon: FaWordpress, color: "text-blue-600" },
        { name: "Wix", icon: SiWix, color: "text-cyan-500" },
        { name: "AI/ML", icon: SiTensorflow, color: "text-orange-400" },
        { name: "Canva", icon: SiCanva, color: "text-blue-500" },
      ],
    },
  ];

  // Stats Data
  const statsData = [
    { label: "Projects Completed", value: "45+", icon: FaCode },
    { label: "Technologies", value: "20+", icon: FaReact },
    { label: "Happy Clients", value: "28+", icon: FaRocket },
    { label: "Learning", value: "AI/ML", icon: FaBrain },
  ];

  return (
    <div
      name="About"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know me, my journey, and what drives me to create amazing digital experiences
          </p>
        </motion.div>

        <div ref={ref} className="space-y-20">
          {/* Introduction Section with Glass Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hello, I'm{" "}
                  <span className="text-cyan-400 font-bold">Rustam Khan</span>,
                  a passionate Full-Stack Developer with a love for crafting
                  intuitive and engaging web solutions. With expertise in{" "}
                  <span className="text-cyan-400">MERN Stack</span>,{" "}
                  <span className="text-blue-400">Next.js</span>,{" "}
                  <span className="text-purple-400">WordPress</span>, and
                  expanding into{" "}
                  <span className="text-orange-400">Artificial Intelligence</span>,
                  I focus on creating scalable, responsive, and user-friendly
                  experiences that make a difference.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center group hover:border-cyan-500/50 transition-all duration-300"
              >
                <stat.icon className="text-3xl text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400" />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Education Journey
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: `linear-gradient(135deg, ${edu.color.split(' ')[1]}, ${edu.color.split(' ')[3]})` }}
                  ></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full group-hover:border-transparent transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center mb-4`}>
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{edu.score}</p>
                    <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.board}</p>
                    <div className="mt-3 text-xs text-gray-500">{edu.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <FaCode className="text-cyan-400" />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {techCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between group/skill"
                      >
                        <div className="flex items-center gap-3">
                          <skill.icon className={`text-xl ${skill.color}`} />
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "100%" } : {}}
                            transition={{ duration: 1, delay: 0.1 * skillIdx }}
                            className={`h-full bg-gradient-to-r ${skill.color.replace('text', 'from').replace('-400', '-500')} to-cyan-500 rounded-full`}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 text-center">
              <FaRocket className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mission Statement
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                My mission is to create scalable, intuitive, and aesthetically
                pleasing digital solutions that elevate user experiences and
                contribute to technological innovation. I'm committed to
                continuous learning and leveraging emerging technologies like
                AI to build smarter, more efficient applications.
              </p>
              <div className="mt-6 flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
