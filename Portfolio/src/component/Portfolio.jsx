import React from "react";
import Skill from "./skill";
export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Krishna Shukla</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="ml-45 mt-40 ">
        <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Krishna Shukla</h2>
        <p className="mt-4 text-gray-400">
          Full-Stack Developer | Building clean web experiences
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
        >
          View Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-30 mt-40 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a Full-Stack Developer skilled in React, Tailwind, JavaScript, and Django. I
          focus on building responsive and clean UI websites.
        </p>
      </section>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
      <div className="flex flex-wrap  gap-20 items-center justify-center mt-20 ">
        <Skill name = "React"/>
        <Skill name = "Tailwind"/>
        <Skill name = "JavaScript"/>
        <Skill name = "Django"/>  
        <Skill name = "C"/>
        <Skill name = "C++"/>   
       
        <Skill name = "Python"/>
      </div>


      {/* Projects */}{/*project is created component later*/ }
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10 mt-30">
          Project Showcase
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
       
            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition" >
              <h3 className="font-bold text-lg mb-2">Project 1</h3>
              <p className="text-gray-400 text-sm">
                E-Commerce website name KR Coffee built with React and Django, featuring a clean UI and responsive design with animation.
              </p>
            </div>
          
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact me :- 9926227246</h2>
        <p className="text-gray-400 mb-4">wwwkrishnashukla9@email.com</p>
        <div className="space-x-4">
          <a href="https://github.com/Krishna12123" className="hover:text-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/krishna-shukla-a46b64379/" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Krishna Shukla. All rights reserved.
      </footer>
    </div>
  );
}
