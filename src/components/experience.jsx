function Experience() {
    const experiences = [
      {
        title: "Full Stack Developer",
        company: "Maitech Studio",
        location: "Remote",
        date: "2025- Present",
        responsibilities: [
          "Designed the layout and user interface of the web application using Wordpress and Elementor.",
          "Developed the website and modified plugins using PHP",
          "Implemented responsive design principles to ensure the application is mobile-friendly and accessible across various devices.",
          "Collaborated with the design team to create visually appealing and user-friendly interfaces.",
          "Integrated third-party APIs and services to enhance application functionality.",
          "Conducted thorough testing and debugging to ensure high-quality code and a seamless user experience.",
          "Worked effecrively with the project manager to meet client specif needs and deadlines.",
          "Built custom features using PHP"
        ]
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
          "Provided post-launch support and resolved issues reported by users to enhance app reliability.",
          "Collaborated with the UX/UI design team to translate wireframes and prototypes into functional applications.",
        ],
      },
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
          "Developed a functional admin dashboard for managing products, orders, and customer data.",
          "Overseeing website updates to align with promotional strategies and brand goals.",
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
      
    ];
  
    return (
      <section className="relative w-full min-h-screen bg-gray-900 text-white mb-12">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center py-10">
          Relevant Experiences
        </h2>
        <div className="relative flex">
         
  
          {/* Timeline Slides */}
          <div className="w-full snap-y snap-mandatory overflow-y-scroll sm:h-screen">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="snap-start flex flex-col items-center justify-center min-h-screen  sm:px-10"
              >
                <div className="w-full max-w-xl sm:max-w-4xl bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                  <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">
                    {exp.company} {exp.location && `| ${exp.location}`} | {exp.date}
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                    {exp.responsibilities.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;
  