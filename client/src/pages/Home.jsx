import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center pt-32 px-6 min-h-screen text-white relative max-w-7xl mx-auto py-16"
    >
      {/* Diagonal Background Overlay
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-50"></div> */}

      {/* Content Wrapper with Diagonal Section */}
      <div className="container relative px-6 py-16 sm:px-12 md:flex md:items-center md:justify-between z-10 space-y-10 md:space-y-0">
        {/* Left Section: Text with Dynamic Effects */}
        {/* <div className="md:w-1/2 space-y-6 text-center md:text-left"> */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white animate-slide-in-left">
            Hi, I'm <span className="text-blue-300">Dhruvi</span>
          </h1>
          <h2 className="text-2xl text-gray-300 animate-slide-in-left delay-300">
            Full Stack Developer | MERN Stack Enthusiast
          </h2>
          <p className="text-lg text-gray-200 animate-slide-in-left delay-600">
            Passionate about building scalable applications and elegant UIs.
            Let’s connect and build something amazing!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 animate-slide-in-left delay-900">
            <a
              href="#contact"
              className="bg-blue-950 hover:bg-blue-900 text-white py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="/Dhruvi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-900 text-blue-400 hover:bg-blue-900 hover:text-white py-3 px-6 rounded-lg transition duration-300"
            >
              View Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-400 mt-6 animate-slide-in-left delay-1200">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section: Profile Image with Hover Zoom */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-90 h-90 rounded-full overflow-hidden group shadow-lg">
            <img
              src="/dhruvi.png" // Replace with your profile image
              alt="Dhruvi"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-40 group-hover:opacity-0 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Animated Diagonal Section */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#030f1a] to-transparent"></div>
    </section>
  );
};

export default Home;
