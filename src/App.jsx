import React from 'react';
import './index.css'; // Ensure this includes Tailwind CSS imports
import Image from './image.png'
import Store from './store.png'
import Meme from './meme.png'
import Tube from './tube.png'
import Bank from './bank.png'
import Gpt from './gpt.png'
import Linked from './linked.png'
import Todo from './todo.png'
import Form from './stepform.png'

function App() {
  const projects = [
    {
      name: "Nuel's Store",
      description: "An e-commerce platform for gadgets.",
      link: "https://github.com/Royaltechsis/Nuel-Store",
      image: Store, // Placeholder for project image
    },
    {
      name: "My Tube",
      description: "A YouTube clone with React.",
      link: "https://github.com/Royaltechsis/my-tube",
      image: Tube, // Placeholder for project image
    },
    {
      name: "Meme Generator",
      description: "Create and share memes easily.",
      link: "https://github.com/Royaltechsis/meme-generator",
      image: Meme, // Placeholder for project image
    },
    {
      name: "Oseni's LinkedIn Clone",
      description: "A LinkedIn clone with google auth ",
      link: "https://github.com/Royaltechsis/Oseni-s-LinkedIn-Clone",
      image: Linked, // Placeholder for project image
    },
     {
      name: "To-do-list",
      description: " A to do list website ",
      link: "https://github.com/Royaltechsis/to-do-list-project",
      image: Todo, // Placeholder for project image
    },
    {
      name: "Web 3 Bridge ChatGPT Clone",
      description: "ChatGPT integration ",
      link: "https://github.com/Royaltechsis/web-3-bridge-chat-gpt-clone-assignment",
      image: Gpt, // Placeholder for project image
    },
    {
      name: "Easy Banking Landing Page",
      description: "Landing page for an easy banking service.",
      link: "https://github.com/Royaltechsis/easy-banking-landing-page",
      image: Bank, // Placeholder for project image
    },
    
    {
      name: "Multi-Step Form",
      description: "A dynamic multi-step form implementation.",
      link: "https://github.com/Royaltechsis/multi-step-form",
      image: Form, // Placeholder for project image
    },{
      name: "Stellanova",
      description: "An innovative project for Stellanova.",
      link: "https://github.com/Royaltechsis/stellanova",
      image: "https://via.placeholder.com/300", // Placeholder for project image
    },
  ];

  const skills = [
    { name: "HTML", level: 99 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "React Native", level: 65 },
    { name: "TailwindCSS", level: 99 },
    { name: "Next.js", level: 60 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center mb-10">
        <div className="md:w-1/2 md:mr-10 mt-5 md:mt-0">
          <img
            src={Image} // Placeholder for profile image
            alt="Profile"
            className="rounded-full mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-2">Oseni Oluwabunmi</h1>
          <p className="text-xl font-light">Software Developer</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Skills:</h2>
            <div className="mt-2">
              {skills.map(skill => (
                <div key={skill.name} className="mb-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className={`bg-blue-500 h-2 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Project Grid */}
      <section>
        <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-200">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <footer className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Connect with me:</h2>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://www.instagram.com/royaltechsis" className="text-white hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/Royaltechsis" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/oseni-oluwabunmi/" className="text-white hover:text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
