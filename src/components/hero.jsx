import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="relative w-full  text-white py-24 px-6 lg:px-16 lg:py-32">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto space-y-8 lg:space-y-0">


        {/* Profile Image */}
        <div className="relative flex-shrink-0 lg:mr-16 mb-8 lg:mb-0 group z-50">
  <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
    {/* Outer Frame to add depth */}
    <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br  from-blue-500 to-purple-700 rounded-lg shadow-2xl transform rotate -scale-75  transition-all duration-300 ease-in-out" />
     {/* <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-blue-500 to-purple-00 rounded-lg shadow-2xl transform -rotate-12 group-hover:rotate-12 transition-all duration-300 ease-in-out" /> */}
    <div className="absolute inset-0 -z-10 w-full h-full  rounded-lg shadow-2xl transform   transition-all duration-300 ease-in-out border-4 border-gradient-to-br from-blue-400 to-purple-600 -rotate-45 p-2 " />

    {/* Inner Frame with Profile Image */}
    <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 border-4 border-gradient-to-br from-blue-400 to-purple-600 rounded-lg p-2 transform  transition duration-300 ease-in-out">
      <img
        src="/images/image3.png"
        alt="Profile Picture"
        className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      />
    </div>
  </div>

  {/* Glow Effect */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 blur-xl opacity-60 w-80 h-80 lg:w-96 lg:h-96 bg-blue-400 rounded-full group-hover:opacity-80 transition duration-300 ease-in-out"></div>
</div>




        {/* About Me Content */}
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-300 tracking-wide">
            About Me
          </h2>
          <p className="text-base  md:text-xl leading-relaxed text-gray-300 w-full">
            I’m a passionate developer with over 3 years experience of crafting
            scalable websites and mobile applications. I am adepth with modern web technologies like JavaScript, React, Typescript, Next.js, and React Native. 
            I thrive on creating innovative solutions to complex problems and building
            user-friendly digital experiences.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a
              href="mailto:osenibunmi2023@gmail.com"
              className="inline-block px-8 py-4 text-lg font-semibold text-gray-900 bg-blue-300 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105  hover:bg-gradient-to-l  from-blue-400 to-purple-500 hover:text-white"
            >
              Hire Me
            </a>
            <Link to="/portfolio" className="inline-block px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-blue-300 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-l  from-blue-500 to-purple-500">
            <a
              
            >
              View Portfolio
            </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
