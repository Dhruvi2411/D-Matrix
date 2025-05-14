import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };
  return (
    <footer id="footer" className="py-6 mt-10">
      <hr className="text-gray-800" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="font-bold hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="font-bold hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="font-bold hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-bold hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            Contact
          </button>
        </div>
        <div className="mb-4 md:mb-0 text-center md:text-left">

          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-gray-400 transition text-2xl" />
            </a>
            <a
              href="https://instagram.com/_.dhruvi._16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-gray-400 transition text-2xl" />
            </a>
          </div>

          <h2 className="text-lg font-semibold text-gray-400">
            D-Matrix © {new Date().getFullYear()}
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
