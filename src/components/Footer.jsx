import { FaFacebook, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="border-gray-300" />
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-10">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Social Media Section */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-300 uppercase tracking-wide text-center">
              Stay Connected
            </h3>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
              >
                <FaFacebook
                  size={30}
                  className="text-gray-400 group-hover:text-blue-500 transition"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
              >
                <FaLinkedin
                  size={30}
                  className="text-gray-400 group-hover:text-blue-300 transition"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
              >
                <FaYoutube
                  size={30}
                  className="text-gray-400 group-hover:text-red-500 transition"
                />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
              >
                <FaTelegram
                  size={30}
                  className="text-gray-400 group-hover:text-blue-400 transition"
                />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 border-t border-gray-700"></div>

          {/* Footer Content */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
            <p className="text-sm text-gray-400">
              Designed with ❤️ by{" "}
              <span className="text-blue-500">Rustam Khan</span>
            </p>
          </div>

          {/* Decorative Line */}
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
