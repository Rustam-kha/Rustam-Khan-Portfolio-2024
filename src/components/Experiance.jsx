// src/components/Experience.jsx
import {
  FaCode,
  FaWordpress,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { SiCodealpha, SiMongodb, SiExpress, SiReact, SiNextdotjs } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Professional Experience Data
  const professionalExperiences = [
    {
      id: 1,
      title: "Web Development Intern",
      company: "CodeAlpha",
      location: "Remote",
      period: "3 Months",
      date: "2024",
      type: "Internship",
      icon: SiCodealpha,
      iconColor: "from-blue-500 to-cyan-500",
      description: [
        "Completed intensive web development training program",
        "Built responsive web applications using modern technologies",
        "Collaborated on real-world projects with industry mentors",
        "Gained hands-on experience in full-stack development",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      achievements: ["Successfully delivered 5+ projects", "Received outstanding performer recognition"],
    },
    {
      id: 2,
      title: "Junior WordPress Developer",
      company: "Logic Lumen System",
      location: "Peshawar, Pakistan (Onsite)",
      period: "1.5 Months Summer Internship",
      date: "2025",
      type: "Internship",
      icon: FaWordpress,
      iconColor: "from-blue-600 to-cyan-600",
      description: [
        "Worked onsite as a Junior WordPress Developer",
        "Customized WordPress themes and plugins for client requirements",
        "Collaborated with senior developers on live projects",
        "Gained practical experience in CMS development and deployment",
      ],
      technologies: ["WordPress", "PHP", "Elementor", "WooCommerce", "CSS/HTML"],
      achievements: ["Assisted in 3 client projects", "Learned professional workflow practices"],
    },
    {
      id: 3,
      title: "WordPress Freelance Developer",
      company: "Self-Employed / Freelance",
      location: "Remote",
      period: "2023 - Present",
      date: "2023-Present",
      type: "Freelance",
      icon: FaLaptopCode,
      iconColor: "from-purple-500 to-pink-500",
      description: [
        "Designed and developed custom WordPress websites for multiple clients",
        "Provided ongoing maintenance and support for client websites",
        "Implemented responsive designs and optimized performance",
        "Managed client relationships and delivered projects on time",
      ],
      technologies: ["WordPress", "Elementor", "WPBakery", "Wix", "SEO"],
      achievements: ["Successfully delivered 10+ client projects", "5-star client satisfaction rating"],
    },
  ];

  // Technical Skills (based on your expertise)
  const technicalSkills = [
    { name: "MERN Stack", level: 85, icon: FaCode, color: "from-green-500 to-teal-500" },
    { name: "Next.js", level: 75, icon: SiNextdotjs, color: "from-gray-600 to-gray-400" },
    { name: "WordPress", level: 90, icon: FaWordpress, color: "from-blue-600 to-cyan-600" },
    { name: "React.js", level: 85, icon: SiReact, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js/Express", level: 80, icon: SiExpress, color: "from-green-600 to-green-500" },
    { name: "MongoDB", level: 75, icon: SiMongodb, color: "from-green-700 to-green-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      name="Experience"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My path from learning to building real-world solutions
          </p>
        </motion.div>

        <div ref={ref}>
          {/* Timeline Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative mb-20"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

            {professionalExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.iconColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.iconColor} flex items-center justify-center shadow-lg`}>
                          <exp.icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-cyan-400 text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      {exp.achievements && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p className="text-xs text-cyan-400 mb-2">🏆 Key Achievements:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <span key={i} className="text-xs text-gray-400 flex items-center gap-1">
                                <span className="text-green-500">✓</span> {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Animated Border on Hover */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.iconColor} transition-all duration-500 ${
                      hoveredCard === exp.id ? "w-full" : "w-0"
                    }`}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Technical Proficiency
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                        <skill.icon className="text-white text-lg" />
                      </div>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.1 * idx }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Work Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
              <FaUsers className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Client Success Stories</h3>
              <p className="text-gray-300 mb-4">
                Successfully delivered custom WordPress solutions for 10+ clients worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold">100%</span>
                  <span className="text-gray-400 ml-2">Client Satisfaction</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold">15+</span>
                  <span className="text-gray-400 ml-2">Projects Completed</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold">5★</span>
                  <span className="text-gray-400 ml-2">Rating Average</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
