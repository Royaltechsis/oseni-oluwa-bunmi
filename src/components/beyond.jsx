import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const beyond = [
  {
    title: "Personal Interests",
    image: "https://via.placeholder.com/300x200",
    items: [
      "Active participant in Taekwondo, constantly striving for discipline and personal growth.",
      "Avid reader with a passion for personal development, exploring themes like goal-setting and productivity.",
      "Food enthusiast who enjoys exploring diverse cuisines and cultures.",
      "Continuous learner with a thirst for knowledge, regularly engaging in research on technology and design trends.",
    ],
  },
  {
    title: "Achievements in Debate & Robotics",
    image: "/images/robotics.jpg",
    items: [
      'Winner of the *"I Beg to Differ"* debate competition in 2022, showcasing exceptional critical thinking and public speaking skills.',
      "Team leader in the *Great Debate* competition, where my team emerged as champions.",
      "Led my team in the First Lego League (FFL) Robotics Competitions (2020-2023), achieving two-time national championship status through innovation and teamwork.",
    ],
  },
  {
    title: "Volunteerism & Mentorship",
    image: "/images/volunteer.jpg",
    items: [
      "Volunteered as a tech tutor at the Almapario Summer Creative Camp, mentoring young minds in coding and technology.",
      "Provided paid tutoring services, sharing knowledge in programming, web development, and digital tools with aspiring developers.",
      "Created educational content for social media to inspire and educate a wider audience on technology and personal growth.",
    ],
  },
];

const BeyondSwiper = () => {
  const [expandedCard, setExpandedCard] = useState(null);

return (
    <div className="py-4 bg-gray-900 text-white  items-center sm:my-20 my-10 space-y-8 w-full">
        {/* Catchy Heading */}
        <h2 className="sm:text-4xl text-2xl font-bold text-center my-4 sm:my-10 text-blue-300">
            Explore My Journey Beyond Web Development
        </h2>

        <div className="w-full max-w-screen-lg mx-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="w-full"
            >
                {beyond.map((section, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full h-[350px] flex flex-col justify-between">
                            {/* Image */}
                            <div className="h-40 overflow-hidden">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <h3 className="text-xl font-bold text-blue-200 mb-2">
                                    {section.title}
                                </h3>

                                {/* Conditionally Render Content */}
                                {expandedCard === index ? (
                                    <div className="overflow-y-auto max-h-40 text-sm text-gray-300 space-y-2 px-2">
                                        <ul className="list-disc pl-4">
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className="ml-2">{item}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="mt-4 text-sm text-blue-400 underline"
                                            onClick={() => setExpandedCard(null)}
                                        >
                                            Show Less
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-sm text-gray-400 line-clamp-3">
                                            {section.items[0]}{" "}
                                            <span className="font-semibold">...</span>
                                        </p>
                                        <button
                                            className="mt-4 text-sm text-blue-400 underline"
                                            onClick={() => setExpandedCard(index)}
                                        >
                                            Read More
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
);
};

export default BeyondSwiper;
