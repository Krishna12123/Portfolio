import React from "react";
import Skill from "./skill";
import myPhoto from "../assets/portphoto.png";
import { motion } from "motion/react"
export default function Portfolio() {
  return (
    <div  initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    className="bg-black text-white min-h-screen font-sans">
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
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6">
      <section className=" mt-40 ">
        <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Krishna Shukla</h2>
        <p className="mt-4 text-gray-400">
          Full-Stack Developer | Building clean web experiences
        </p>
        <motion.a
          href="#projects"
          className="mt-6 inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
          whileHover={{ scale: 1.55 , duration: 1.5}}
        >
          View Work
        </motion.a>
      
      </section>
      <div>
        <img src={myPhoto} alt="Krishna Shukla" className="w-70 h-70 mt-20 rounded-full mx-0"/>
      </div></div>
      {/* About */}
      <section id="about" className="py-20 px-30 mt-40 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a Full-Stack Developer skilled in React, Tailwind, JavaScript, and Django. I
          focus on building responsive and clean UI websites.
        </p>
      </section>
      

      {/* Skills */}
      <motion.h2 className="text-2xl font-semibold mb-4 text-center"
       initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1}}

      >Skills</motion.h2>


<motion.div
  className="flex flex-wrap gap-10 items-center justify-center mt-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {["React", "Tailwind", "JavaScript", "Django", "C", "C++", "Python"].map(
    (skill) => (
      <motion.div
        key={skill}
        whileHover={{
          scale: 1.2,
          y: -10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
      >
        <Skill name={skill} />
      </motion.div>
    )
  )}
</motion.div>
      {/* Projects */}{/*project is created component later*/ }
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10 mt-30">
          Project Showcase
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
       
            <div className="bg-gray-900 p-6 rounded-xl hover:scale-125 h-80 transition" >
              <h3 className="font-bold text-lg mb-2 text-center">Project 1</h3>
              <p className="text-gray-400 mt-20 text-2xl">
                E-Commerce website name KR Coffee built with React and Django, featuring a clean UI and responsive design with animation.
              </p>
            </div>
          
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact me :- 9926227246</h2>
        <p className="text-gray-400 mb-4">wwwkrishnashukla9@gmail.com</p>
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
