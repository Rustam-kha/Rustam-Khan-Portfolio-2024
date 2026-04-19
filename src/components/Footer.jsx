// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaTerminal } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: SiLeetcode, href: "https://leetcode.com", label: "LeetCode", color: "hover:text-yellow-500" },
    { icon: FaEnvelope, href: "mailto:rustam@example.com", label: "Email", color: "hover:text-red-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaTerminal className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-mono font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Rustam<span className="text-cyan-400">.dev</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
              Building scalable web applications with modern technologies. Let's create something amazing together.
            </p>
            {/* Animated Status */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-400">Available for work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:border-cyan-400/50`}
                  aria-label={label}
                >
                  <Icon size={18} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>
            {/* Mock Terminal Signature */}
            <div className="bg-black/50 rounded-lg p-3 border border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-500">
                <span>$</span>
                <span className="text-green-400">echo</span>
                <span className="text-cyan-400">"Built with"</span>
                <FaHeart className="text-red-400 text-[10px]" />
                <span className="text-cyan-400">"React & Tailwind"</span>
              </div>
              <div className="text-gray-500 mt-1">© {currentYear} Rustam Khan</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>
            Designed & Developed with{" "}
            <FaHeart className="inline text-red-500 animate-pulse" /> by Rustam Khan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
