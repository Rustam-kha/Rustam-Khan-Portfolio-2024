import { FaHtml5, FaJsSquare, FaReact, FaJava } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss } from "react-icons/si";

function Experience() {
  const experiences = [
    {
      id: 1,
      skill: "HTML & CSS",
      duration: "1 Year",
      logo: FaHtml5,
      description:
        "Crafted responsive, accessible web designs with a mobile-first approach.",
      progress: "100%",
    },
    {
      id: 2,
      skill: "JavaScript",
      duration: "6 Months",
      logo: FaJsSquare,
      description:
        "Built interactive, dynamic web pages with vanilla JavaScript and ES6.",
      progress: "75%",
    },
    {
      id: 3,
      skill: "C++",
      duration: "1 Year",
      logo: SiCplusplus,
      description:
        "Mastered algorithms and data structures for problem-solving and competitive programming.",
      progress: "85%",
    },
    {
      id: 4,
      skill: "Java",
      duration: "3 Months",
      logo: FaJava,
      description:
        "Developed OOP-based applications, focusing on performance and scalability.",
      progress: "60%",
    },
    {
      id: 5,
      skill: "Tailwind CSS",
      duration: "1 Month",
      logo: SiTailwindcss,
      description:
        "Created modern, responsive, and custom-tailored layouts with Tailwind CSS.",
      progress: "50%",
    },
    {
      id: 6,
      skill: "React",
      duration: "5 Months",
      logo: FaReact,
      description:
        "Developed dynamic single-page applications with React and Redux.",
      progress: "80%",
    },
  ];

  return (
    <>
      <hr className="py-6" />
      <div
        name="Experience"
        className="min-h-screen bg-gradient-to-r from-teal-50 via-white to-indigo-50 py-16 px-6 relative"
      >
        {/* Screen Header */}
        <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-700 mb-20">
          My Experience Path
        </h1>

        {/* Skills Bubbles */}
        <div className="flex justify-center items-center gap-16 flex-wrap py-16">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative group flex flex-col items-center justify-center"
            >
              {/* Skill Icon */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <exp.logo className="text-4xl" />
              </div>

              {/* Skill Name */}
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {exp.skill}
              </h2>
              <p className="text-sm text-teal-600 font-medium">
                {exp.duration}
              </p>

              {/* Progress bar */}
              <div className="w-24 mt-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-teal-500"
                  style={{ width: exp.progress }}
                ></div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                <p className="text-center p-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Glowing Background Orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-teal-300 to-indigo-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 bg-gradient-to-bl from-indigo-300 to-pink-300 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </>
  );
}

export default Experience;
