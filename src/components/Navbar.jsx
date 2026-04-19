// // src/components/Navbar.jsx
// import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
// function Navbar() {
//   const [menu, setMenu] = useState(false);
//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Portfolio" },
//     { id: 4, text: "Experience" },
//     { id: 5, text: "Contacts" },
//   ];

//   return (
//     <>
//       {/* Navbar Header */}
//       <div className="w-full px-4 md:px-10 lg:px-20 shadow-lg h-16 fixed top-0 left-0 z-50 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600">
//         <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-full">
//           {/* Logo and Name Section */}
//           <div className="flex items-center space-x-3">
//             <img
//               src="/profile.png"
//               className="h-12 w-12 rounded-full transition-all duration-300 transform hover:scale-110"
//               alt="Profile"
//             />
//             <h1 className="font-semibold text-xl text-white cursor-pointer">
//               Rusta<span className="text-yellow-400 text-2xl">m</span> Khan
//               <p className="text-sm text-gray-100">Web Developer</p>
//             </h1>
//           </div>

//           {/* Desktop Navbar */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map(({ id, text }) => (
//               <li
//                 key={id}
//                 className="cursor-pointer text-white font-semibold text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105"
//               >
//                 <Link
//                   to={text}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div
//             onClick={() => setMenu(!menu)}
//             className="md:hidden cursor-pointer text-white"
//           >
//             {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
//           </div>
//         </div>
//       </div>

//       {/* Full-screen Overlay Menu for Mobile */}
//       {menu && (
//         <div className="fixed inset-0 bg-gradient-to-b from-green-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center z-50 text-white text-2xl font-semibold">
//           <div
//             onClick={() => setMenu(false)}
//             className="absolute top-4 right-4 cursor-pointer"
//           >
//             <IoCloseSharp
//               size={32}
//               className="hover:text-yellow-400 transition-transform transform hover:scale-110"
//             />
//           </div>
//           <ul className="space-y-6">
//             {navItems.map(({ id, text }) => (
//               <li
//                 key={id}
//                 className="cursor-pointer text-yellow-300 font-semibold text-2xl hover:text-white transition-transform transform hover:scale-110 bg-opacity-20 p-3 rounded-lg"
//                 onClick={() => setMenu(false)}
//               >
//                 <Link
//                   onClick={() => setMenu(!menu)}
//                   to={text}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;
// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { HiCode } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contacts" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar with dynamic background */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section - Developer Style */}
            <Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-70}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src="/profile.png"
                  className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white/30 object-cover transition-transform duration-300 group-hover:scale-105"
                  alt="Profile"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-mono font-bold text-lg md:text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Rustam<span className="text-cyan-400">.dev</span>
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400 flex items-center gap-1">
                  <HiCode className="text-cyan-400" /> Full Stack Developer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
              {navItems.map(({ id, text }) => (
                <Link
                  key={id}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onSetActive={() => setActiveSection(text)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
                    activeSection === text
                      ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
            >
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-l border-white/10 transform transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/profile.png"
                className="h-10 w-10 rounded-full border border-cyan-400"
                alt="Profile"
              />
              <div>
                <h2 className="font-bold text-white">Rustam Khan</h2>
                <p className="text-xs text-cyan-400">Web Developer</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <IoCloseSharp size={24} className="text-white" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
              >
                {text}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <p className="text-xs text-gray-500 text-center">
              © 2024 Rustam Khan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
