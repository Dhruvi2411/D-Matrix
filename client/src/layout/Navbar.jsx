import React, { useState, useEffect } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const closeMenu = () => setMobileMenu(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "project", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const getLinkClass = (id) =>
    `transition cursor-pointer ${
      activeSection === id
        ? "text-[#003566] font-semibold border-b-2 border-[#003566]"
        : "hover:text-gray-500 text-white"
    }`;

  return (
    <nav id="navbar" className="fixed left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" onClick={() => scrollToSection("home")}>
          <img
            src="/wlogo.png"
            className="w-32 h-auto cursor-pointer"
            alt="Logo"
            draggable={false}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {["home", "about", "project", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={getLinkClass(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-blue-950 text-3xl focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#0A0E1A]/90 backdrop-blur-md p-6">
          <ul className="space-y-4 text-lg font-medium">
            {["home", "about", "project", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={getLinkClass(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
