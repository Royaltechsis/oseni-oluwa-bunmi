import React from 'react';
import Beyond from '../components/beyond';
import Hero from '../components/hero';
import Experience from '../components/experience';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Education from '../components/education';


function Resume() {

  // Data for hobbies
  const hobbies = [
    "Volunteering as a mentor for tech bootcamps and programs.",
    "Creating educational content for social media platforms.",
    "Exploring user experience and interface design trends.",
    "Learning about personal development and goal-setting tools.",
  ];

  // Data for soft skills
  const softSkills = [
    "Creative Problem-Solving",
    "Communication & Collaboration",
    "Time Management",
    "Attention to Detail",
    "Adaptability",
    "Critical Thinking",
  ];

 

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center w-full">
      <div className="w-full  px-6 flex flex-col items-center justify-center">
        {/* Header */}
        <header className="text-center mt-8 ">
          <h1 className="text-5xl font-bold text-blue-400">Oseni Oluwabunmi</h1>
          <p className="text-xl mt-2">Software Developer</p>
        </header>
  
        <Hero />
  
        <Experience/>



        
  
        <section className='max-w-5xl'>
          <Education />
        </section>
  
        {/* Soft Skills */}
        <section className='max-w-5xl'>
          <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center ">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="p-3 bg-gray-800 rounded-lg text-center shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </section>
  
        {/* Hobbies & Interests */}
        <section className="mb-12 w-full ">
          <Beyond />
        </section>
  
        {/* Footer */}
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
    </div>
  );
  
}

export default Resume;
