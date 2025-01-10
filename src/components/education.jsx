import React from 'react';

function Education(){
     const edu = [
    {
      institution: "Federal University of Technology, Akure (FUTA)",
      program:" B.Tech Software Engineering",
      duration: "2023 - Present",
    },
    {
      institution: "Web3Bridge Cohort XI ",
      program: " Senior Web 2 developer Certification",
      duration: "2024",
    },
    {
      institution: "Web3Bridge Cohort XII ",
      program: " WEB 3 developer Certification",
      duration: "2025 till present ",
    },
    {
      institution: "She Codes Africa Mentorship Program",
      program: "Backend-End Developer Certification ",
      duration: "2024 till present ",
    
    },
    {
        institution: "D'Online Harvest Academy",
        program: "JuniorFront-end Developer Certificate",
        duration: "2020 - Present",
      },
    {
      institution: "Google Developer Student Club (GDSC) Hackathon Finalist",
      duration: "2024",
    },
   
  ];
    return(
        <>
        <section className="mb-10">
            <h2 className="text-4xl font-bold mb-6 text-center">Education </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {edu.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col bg-gray-800 p-5 rounded-lg shadow-md transform transition-transform hover:scale-105"
                >
                    <h3 className="text-xl font-semibold text-gray-200">{item.institution}</h3>
                    <h4 className="text-lg font-semibold text-gray-300">{item.program}</h4>
                    <p className="text-gray-400 mt-2">{item.duration || "Duration not specified"}</p>
                </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Education