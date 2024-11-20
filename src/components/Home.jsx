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
} from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className="w-full px-4 mx-auto md:px-10 h-auto">
      <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mt-20">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-44">
          <span className="text-xl font-semibold">Welcome to My Feed</span>
          <div className="flex flex-col items-center md:items-start space-y-2 text-2xl md:text-4xl mt-6">
            <h1 className="font-semibold">
              Hello, I am a
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h1>
          </div>
          <p className="text-sm md:text-md text-justify mt-4 max-w-2xl mx-auto md:mx-0">
            I am Rustam Khan, a Frontend Web Developer, WordPress Developer, and
            Digital Marketer. I specialize in creating responsive, user-friendly
            websites using modern technologies and have expertise in customizing
            WordPress for diverse needs. With a strong foundation in digital
            marketing, I aim to deliver impactful online solutions that drive
            results.
          </p>

          <div className="flex flex-col items-center md:items-start space-y-6 mt-6">
            <div>
              <h1 className="font-bold text-lg text-gray-800">Available on</h1>
              <ul className="flex space-x-5 mt-2">
                <li className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700 transform hover:scale-125 duration-300">
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li className="text-2xl cursor-pointer text-blue-500 hover:text-blue-600 transform hover:scale-125 duration-300">
                  <a href="https://www.linkedIn.com/" target="_blank">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="text-2xl cursor-pointer text-red-600 hover:text-red-700 transform hover:scale-125 duration-300">
                  <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutube />
                  </a>
                </li>
                <li className="text-2xl cursor-pointer text-blue-400 hover:text-blue-500 transform hover:scale-125 duration-300">
                  <a href="https://www.telegram.com/" target="_blank">
                    <FaTelegram />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Currently Working on
              </h1>
              <div className="flex flex-wrap gap-4 mt-4">
                <FaHtml5 className="text-3xl md:text-4xl text-orange-500 hover:scale-110 duration-200 transform hover:translate-y-1" />
                <FaCss3Alt className="text-3xl md:text-4xl text-blue-500 hover:scale-110 duration-200 transform hover:translate-y-1" />
                <FaJsSquare className="text-3xl md:text-4xl text-yellow-500 hover:scale-110 duration-200 transform hover:translate-y-1" />
                <FaBootstrap className="text-3xl md:text-4xl text-purple-600 hover:scale-110 duration-200 transform hover:translate-y-1" />
                <RiReactjsLine className="text-3xl md:text-4xl text-blue-400 hover:scale-110 duration-200 transform hover:translate-y-1" />
                <RiTailwindCssFill className="text-3xl md:text-4xl text-teal-500 hover:scale-110 duration-200 transform hover:translate-y-1" />
                <FaJava className="text-3xl md:text-4xl text-red-600 hover:scale-110 duration-200 transform hover:translate-y-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Enhanced Profile Image) */}
        <div className="w-full md:w-1/2 flex justify-center relative mt-6 md:mt-0">
          <div className="relative group">
            <img
              src="/profile.png"
              alt="Profile"
              className="rounded-full shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[22rem] lg:h-[22rem] absolute bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 absolute bg-gradient-to-bl from-blue-500 via-teal-500 to-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-black/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm sm:text-md md:text-lg font-medium mb-4">
                Passionate Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-40" />
    </div>
  );
}

export default Home;
