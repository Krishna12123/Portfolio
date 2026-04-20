import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Krishna Shukla</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Krishna Shukla</h2>
        <p className="mt-4 text-gray-400">
          Frontend Developer | Building clean web experiences
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
        >
          View Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a developer skilled in HTML, CSS, Tailwind, and JavaScript. I
          focus on building responsive and clean UI websites.
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "Tailwind", "JavaScript", "Git"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="font-bold text-lg mb-2">Project {project}</h3>
              <p className="text-gray-400 text-sm">
                Short description of your project. Explain what it does.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">your@email.com</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">GitHub</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
