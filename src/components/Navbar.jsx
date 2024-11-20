// src/components/Navbar.jsx
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contacts" },
  ];

  return (
    <>
      {/* Navbar Header */}
      <div className="w-full px-4 md:px-10 lg:px-20 shadow-lg h-16 fixed top-0 left-0 z-50 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-full">
          {/* Logo and Name Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/profile.png"
              className="h-12 w-12 rounded-full transition-all duration-300 transform hover:scale-110"
              alt="Profile"
            />
            <h1 className="font-semibold text-xl text-white cursor-pointer">
              Rusta<span className="text-yellow-400 text-2xl">m</span> Khan
              <p className="text-sm text-gray-100">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="cursor-pointer text-white font-semibold text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer text-white"
          >
            {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </div>

      {/* Full-screen Overlay Menu for Mobile */}
      {menu && (
        <div className="fixed inset-0 bg-gradient-to-b from-green-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center z-50 text-white text-2xl font-semibold">
          <div
            onClick={() => setMenu(false)}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <IoCloseSharp
              size={32}
              className="hover:text-yellow-400 transition-transform transform hover:scale-110"
            />
          </div>
          <ul className="space-y-6">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="cursor-pointer text-yellow-300 font-semibold text-2xl hover:text-white transition-transform transform hover:scale-110 bg-opacity-20 p-3 rounded-lg"
                onClick={() => setMenu(false)}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
