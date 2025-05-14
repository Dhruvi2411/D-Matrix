import React from "react";

const projects = [
  {
    title: "🛠 Maintenance System",
    desc: "Complaint-based device repair tracking system for faculties & admins with role-based access.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    link: "https://sciaran-iu3s.onrender.com/",
  },
  {
    title: "🔐 DigiLegacy",
    desc: "Secure digital will & asset manager with encryption and Google OAuth.",
    tech: ["React", "Express.js", "MongoDB", "OAuth2", "Encryption"],
    link: "https://your-digilegacy-link.com",
  },
  {
    title: "📱 Portfolio Website",
    desc: "My own responsive portfolio designed with React, Tailwind & animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://your-portfolio.com",
  },
  {
    title: "👨‍💼 Java EMS",
    desc: "Java-based CLI app for employee records using OOP & data structures.",
    tech: ["Java", "OOP", "Collections", "Exception Handling"],
    link: "#",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-300">
        <span className="inline-block border-b-4 border-blue-700">
          Projects
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-white/30 rounded-2xl p-6 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition duration-300 group hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold text-white group-hover:text-white/85 transition mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-cyan-600 px-2 py-1 rounded-md text-cyan-200 bg-cyan-600/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-cyan-300 hover:underline"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
