import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiCanva, SiCplusplus } from "react-icons/si";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 py-8 md:px-20 lg:px-40 my-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-2xl rounded-xl"
    >
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-10">
        About Me
      </h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-5">
          Introduction
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, I am{" "}
          <span className="text-blue-600 font-bold">Rustam Khan</span>, a
          passionate Frontend Developer with a love for crafting intuitive and
          engaging web solutions. My focus is on creating responsive and
          user-friendly experiences.
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-600 mb-5">
          Education & Training
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Matriculation:</strong> 1082/1100 from Ghazali Public School
            Jamrud, District Khyber, BISE Peshawar
          </li>
          <li>
            <strong>Intermediate:</strong> 1024/1100 from Afridi Model School &
            College, Bara, District Khyber, BISE Peshawar
          </li>
          <li>
            <strong>BSc:</strong> In progress at University of Engineering &
            Technology, Taxila (Software Engineering)
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-600 mb-5">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Programming Languages
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <SiCplusplus className="text-blue-500 text-xl" />
                <span>C++</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaJava className="text-red-600 text-xl" />
                <span>Java</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaJs className="text-yellow-500 text-xl" />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaHtml5 className="text-orange-500 text-xl" />
                <span>HTML</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCss3Alt className="text-blue-600 text-xl" />
                <span>CSS</span>
              </li>
            </ul>
          </div>

          {/* Tools & Frameworks */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Tools & Frameworks
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaReact className="text-blue-400 text-xl" />
                <span>React.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiRedux className="text-purple-500 text-xl" />
                <span>Redux Toolkit</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiNextdotjs className="text-black text-xl" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaBootstrap className="text-indigo-600 text-xl" />
                <span>Bootstrap</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiCanva className="text-blue-600 text-xl" />
                <span>Canva</span>
              </li>
            </ul>
          </div>

          {/* Additional Skills */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Other Skills
            </h3>
            <ul className="space-y-3">
              <li>WordPress Development</li>
              <li>Digital Marketing</li>
              <li>MS Word & PowerPoint</li>
              <li>Canva</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section>
        <h2 className="text-3xl font-semibold text-red-600 mb-5">
          Mission Statement
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          My mission is to create scalable, intuitive, and aesthetically
          pleasing digital solutions that elevate user experiences and
          contribute to technological innovation.
        </p>
      </section>
    </div>
  );
}

export default About;
