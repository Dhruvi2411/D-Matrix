import React from "react";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex flex-col bg-gray-900 rounded-2xl shadow-2xl shadow-white/10 p-8">
        <h2 className="text-4xl font-bold text-blue-200 mb-8">
          <span className="inline-block border-b-4 border-blue-900">
            About Me
          </span>
        </h2>

        <p className="text-gray-400 leading-relaxed mb-2 text-justify">
          Hi! 👋 I'm{" "}
          <span className="font-semibold text-white">Dhruvi Mangaroliya</span>,
          a dedicated full-stack developer and a final-year student at{" "}
          <span className="text-gray-50 font-medium">
            A D Patel Institute of Technology
          </span>
          . I’m passionate about building responsive, accessible, and scalable
          web applications.
        </p>

        <p className="text-gray-400 leading-relaxed mb-2 text-justify">
          I specialize in the{" "}
          <span className="text-gray-50 font-medium">MERN stack</span> (MongoDB,
          Express.js, React.js, Node.js), and love clean, modular backend
          structures with role-based access and real-world workflows. My current
          project,{" "}
          <span className="italic font-medium text-gray-50">
            Maintenance System
          </span>
          , manages device complaints and repair workflows for faculty and admin
          roles in educational institutions.
        </p>

        {/* <p className="text-gray-400 leading-relaxed mb-2 text-justify">
          I’m also diving into{" "}
          <span className="text-gray-50 font-medium">Spring Boot</span> to
          broaden my backend expertise. My ultimate goal? To become a developer
          who builds secure, reliable, and impactful solutions! 💻✨
        </p> */}

        <p className="text-gray-400 leading-relaxed text-justify">
          When I'm not coding, I'm probably vibing with some late-night
          debugging or designing interfaces that just feel ✨ right. I love
          learning new tools and tech and always aim to make things a little
          better than yesterday. 🚀
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-200 mb-8 border-b-4 border-blue-900 inline-block">
          What I Know
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Skills */}
          <div className="p-4 border rounded-xl border-white/30 bg-gray-900 w-full">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["C/C++", "Java(Core)", "DSA", "Software Engineering"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="border px-2 py-1 rounded-sm text-sm w-fit border-gray-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Frontend */}
          <div className="p-4 border rounded-xl border-white/30 bg-gray-900 w-full">
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "Javascript", "Tailwind", "ReactJs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="border px-2 py-1 rounded-sm text-sm w-fit border-gray-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Backend */}
          <div className="p-4 border rounded-xl border-white/30 bg-gray-900 w-full">
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["NodeJs", "ExpressJs", "Java"].map((item) => (
                <span
                  key={item}
                  className="border px-2 py-1 rounded-sm text-sm w-fit border-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="p-4 border rounded-xl border-white/30 bg-[#111827] w-full">
            <h3 className="text-lg font-semibold mb-2">Database</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB", "PostgreSQL"].map((db) => (
                <span
                  key={db}
                  className="border px-2 py-1 rounded-sm text-sm w-fit border-gray-400"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
