import { FaHtml5, FaJsSquare, FaBootstrap, FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiCplusplus, SiTailwindcss, SiDatabricks } from "react-icons/si";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: FaHtml5,
      name: "HTML",
      description: "The backbone of web content.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 2,
      logo: FaJsSquare,
      name: "JavaScript",
      description: "Dynamic language for interactive web apps.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 3,
      logo: FaBootstrap,
      name: "Bootstrap",
      description: "A responsive design framework.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 4,
      logo: FaJava,
      name: "Java",
      description: "Robust language for software development.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 5,
      logo: RiReactjsLine,
      name: "ReactJS",
      description: "Build dynamic and scalable UIs.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 6,
      logo: SiTailwindcss,
      name: "Tailwind CSS",
      description: "Utility-first CSS for rapid styling.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 7,
      logo: SiCplusplus,
      name: "C++",
      description: "A powerful language for high-performance apps.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
    {
      id: 8,
      logo: SiDatabricks,
      name: "DSA",
      description: "Mastering Data Structures and Algorithms.",
      videoLink: "#",
      sourceCodeLink: "#",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-200 py-16 px-6"
    >
      {/* Header */}
      <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 animate-pulse">
        Portfolio
      </h1>
      <p className="text-lg text-center text-gray-700 mt-4">
        A showcase of skills, tools, and technologies in my development journey.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-screen-2xl mx-auto">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-0 group-hover:opacity-20 transition duration-500 rounded-3xl"></div>

            {/* Icon with Bounce Animation */}
            <div className="flex justify-center">
              <item.logo className="text-8xl text-purple-500 mb-6 animate-bounce group-hover:animate-spin group-hover:text-pink-500 transition duration-300" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 group-hover:text-blue-600 transition duration-300">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-center text-gray-600 mb-8">{item.description}</p>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <a
                href={item.videoLink}
                className="relative px-6 py-2 text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg overflow-hidden transition group hover:from-purple-500 hover:to-pink-500 hover:shadow-pink-500/50 animate-pulse"
              >
                Watch Video
              </a>
              <a
                href={item.sourceCodeLink}
                className="relative px-6 py-2 text-purple-500 font-semibold border-2 border-purple-500 rounded-full shadow-lg overflow-hidden transition group hover:bg-purple-500 hover:text-white hover:shadow-purple-500/50"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
