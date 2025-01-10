import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import Image from '/images/image.png'
import Store from '/images/store.png'
import Meme from '/images/meme.png'
import Tube from '/images/tube.png'
import Bank from '/images/bank.png'
import Linked from '/images/linked.png'
import Todo from '/images/todo.png'
import Form from '/images/stepform.png'
import Sola from '/images/sola.png'

function Home() {
  const projects = [
    {
      name: "Nuel's Store",
      description: "An e-commerce platform for gadgets. (sign up first to use)",
      link: "https://github.com/Royaltechsis/Nuel-Store",
      image: Store, // Placeholder for project image
      preview: "https://nuel-store-git-main-osenibunmi2023gmailcoms-projects.vercel.app/login",
      techStack: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS", "JavaScript"], // Add tech stack here
    },
    {
      name: "Easy Banking Landing Page",
      description: "Landing page for an easy banking service. (Static landign  page design ",
      link: "https://github.com/Royaltechsis/easy-banking-landing-page",
      image: Bank, // Placeholder for project image
      techStack: ["React", "Tailwind Css", "JavaScript"],
      preview: 'https://easy-banking-landing-page-kappa.vercel.app/',
    },
    {
      name: "Oluwasola Ajao and Company (Chartered Accountants)",
      description: "A website for Oluwasola Ajaa and co",
      preview: "https://oluwasolaajaoco.com/",
      image: Sola, // Placeholder for project image
      techStack: ["WordPress"],
    },
    {
      name: "My Tube",
      description: "A YouTube Video feed made with React.",
      link: "https://github.com/Royaltechsis/my-tube",
      image: Tube, // Placeholder for project image
      techStack: ["React", "Tailwind CSS", "YouTube API", "JavaScript"],
      preview: "my-tube-inky.vercel.app",
    },
    {
      name: "Meme Generator",
      description: "Create and share memes easily.",
      link: "https://github.com/Royaltechsis/meme-generator",
      image: Meme, // Placeholder for project image
      techStack: ["React", "CSS", "JavaScript"],
      preview: "meme-generator-lovat-seven.vercel.app",
    },
    {
      name: "Oseni's LinkedIn Clone",
      description: "A LinkedIn clone with Google Auth.",
      link: "https://github.com/Royaltechsis/Oseni-s-LinkedIn-Clone",
      image: Linked, // Placeholder for project image
      techStack: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
      preview: "osenis-linked-in-clone.vercel.app",
    },
    {
      name: "To-do-list",
      description: "A to-do list website.",
      link: "https://github.com/Royaltechsis/to-do-list-project",
      image: Todo, // Placeholder for project image
      techStack: ["React", "JavaScript"],
      preview: "to-do-list-project-lyart.vercel.app",
    },
    {
      name: "Multi-Step Form",
      description: "A dynamic multi-step form implementation.",
      link: "https://github.com/Royaltechsis/multi-step-form",
      image: Form, // Placeholder for project image
      techStack: ["React", "Tailwind CSS", "TypeScript"],
      preview: "multi-step-form-bay-theta.vercel.app",
    },
    {
      name: "Stellanova",
      description: "An innovative project for Stellanova.",
      link: "https://github.com/Royaltechsis/stellanova",
      image: "https://via.placeholder.com/300", // Placeholder for project image
      techStack: ["Php","Tailwind CSS"],
    },
  ];

 
  
  const strenghts = [
    { strenght: "Critical Thinking" },
    { strenght: "Problem Solving" },
    { strenght: "Teamwork" },
    { strenght: "Open-Mindedness" },
    { strenght: "Adaptability" },
  ];

  const skills = [
    { name: "HTML", level: 99 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "React Native", level: 65 },
    { name: "TailwindCSS", level: 99 },
    { name: "Next.js", level: 60 },
    { name: "Wordpress", level: 90 },
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

{/* education and experience  */}


<section className="mb-10">
  <h2 className="text-4xl font-bold mb-6 text-center">Strengths</h2>
  <div className="flex flex-wrap gap-4 justify-center">
    {strenghts.map((item, index) => (
      <div
        key={index}
        className="px-6 py-3 bg-gray-800 text-gray-200 rounded-full shadow-md"
      >
        {item.strenght}
      </div>
    ))}
  </div>
</section>

      {/* Project Grid */}
      <section>
        <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-200">{project.name}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-blue-700 text-white rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.link}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          {project.preview && (
            <a
              href={project.preview}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Social Links */}
      <footer className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Connect with me:</h2>
        <div className="flex justify-center space-x-6 mt-4">
      <a
        href="https://github.com/Royaltechsis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-gray-400"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/oseni-oluwabunmi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-blue-400"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/royaltechsis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-pink-400"
      >
        <FaInstagram size={24} />
      </a>
    </div>

      </footer>
    </div>
  );
}

export default Home;
