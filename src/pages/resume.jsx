import React from 'react';
import Beyond from '../components/beyond';
import Hero from '../components/hero';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Education from '../components/education';


function Resume() {
  // Data for experiences
  const experiences = [
    {
        title: "Freelance Ecommerce Developer",
        company: null,
        location: "Remote",
        date: "2024 - Present",
        responsibilities: [
          "Designed and developed responsive and user-friendly e-commerce platforms tailored to client needs.",
          "Integrated payment gateways, inventory management systems, and third-party APIs to ensure seamless functionality.",
          "Collaborated with clients to create customized solutions for enhanced user experience and performance optimization.",
          "Provided ongoing support and maintenance, including updates to UI/UX and troubleshooting technical issues.",
          "Developed strategies to boost brand visibility and engagement through innovative website features and digital marketing integration.",
          "developed a functional admin dashboard for managming products, orders, and customer data.",
          "Oversaw website updates to align with promotional strategies and brand goals.",
        ],
    },
    {
        title: "Freelance Developer",
        company: "Oluwasola Ajao & Co. (Chartered Accountant and Tax Practitioner)",
        location: "Port Harcourt, Nigeria",
        date: "2023 - Present",
        responsibilities: [
          "Designed and developed a dynamic and responsive website tailored to the firm's brand and services.",
          "Created a professional blog section to showcase tax tips, financial advice, and industry insights.",
          "Integrated SEO strategies to improve website visibility and attract targeted traffic.",
          "Implemented a secure contact form for client inquiries and feedback.",
          "Ensured cross-browser compatibility and optimized the website for both desktop and mobile devices.",
          "Collaborated with stakeholders to align the website's functionality and content with the firm's goals.",
          "Provided post-launch support, including regular updates and maintenance for the website and blog.",
          "Optimized page speed and performance for a seamless user experience.",
        ],
    },
    {
        title: "Front End Developer",
        company: "Grearn Africa",
        location: "Remote",
        date: "2024 - Present",
        responsibilities: [
          "Collaborated with a cross-functional team to develop user-friendly and responsive mobile applications.",
          "Built reusable UI components and ensured seamless integration with backend APIs.",
          "Implemented clean, maintainable, and scalable code using modern front-end frameworks and libraries.",
          "Optimized app performance to ensure smooth functionality on both iOS and Android platforms.",
          "Designed intuitive and visually appealing interfaces, aligning with the company’s branding and user requirements.",
          "Conducted thorough testing and debugging to ensure high-quality code and a seamless user experience.",
          "Utilized version control systems like Git for efficient team collaboration and code management.",
          "Participated in agile workflows, including sprint planning and daily standups, to ensure timely delivery of features.",
          "Provided post-launch support and resolved issues reported by users to enhance app reliability.",
          "Collaborated with the UX/UI design team to translate wireframes and prototypes into functional applications.",
        ],
    }
  ];

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
  
        {/* Relevant Experiences */}
        <section className="mb-12 sm:my-20 max-w-5xl">
          <h2 className="text-3xl sm:text-5xl font-semibold my-10 text-white text-center">Relevant Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-400">
                  {exp.company} {exp.location && `| ${exp.location}`} | {exp.date}
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 max-h-40 overflow-y-auto">
                  {exp.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
  
        <section className='max-w-5xl'>
          <Education />
        </section>
  
        {/* Soft Skills */}
        <section className='max-w-5xl'>
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">Soft Skills</h2>
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
