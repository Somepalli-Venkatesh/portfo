import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Project Images
import Connectify from "../assets/images/Connectify.png";
import invigilation from "../assets/images/Invigilation.png";
import Gemini from "../assets/images/Gemini.png";
import Youtube from "../assets/images/Youtube.png";
import Ai_Sumz from "../assets/images/Ai_Sumz.png";

const Project = () => {
  const projects = [
    {
      img: Connectify,
      name: "Connectify",
      github_link: "https://github.com/Somepalli-Venkatesh/Connectify",
      live_link: "https://connectify-m2ma.vercel.app/",
      tech_stack: ["Next js","stream","Tailwind css"],
    },
    {
      img: invigilation,
      name: "Invigilation",
      github_link: "https://github.com/Somepalli-Venkatesh/Invigilation",
      live_link: "https://invigilation-ss44.vercel.app/",
      tech_stack: ["React JS", "Mongodb", "express js","Node.js"],
    },
    {
      img: Gemini,
      name: "Gemini Clone",
      github_link: "https://github.com/Somepalli-Venkatesh/Gemini",
      live_link: "https://gemini-ivory-five.vercel.app/",
      tech_stack: ["React Js","Gemini API","HTML"],
    },
    {
      img: Youtube,
      name: "Youtube Clone",
      github_link: "https://github.com/Somepalli-Venkatesh/project1",
      live_link: "https://project1-gilt-tau.vercel.app/",
      tech_stack: ["React", "YouTube API", "Redux Toolkit"],
    },
    {
      img: Ai_Sumz,
      name: "Ai_Sumz",
      github_link: "https://github.com/Somepalli-Venkatesh/ai_sumz",
      tech_stack: ["React", "OpenAI API", "Redux Toolkit"],
    },
  ];

  return (
    <section id="projects" className="py-20 text-white bg-black">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-orange-500">Projects</span>
        </h3>
        <p className="text-yellow-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-gradient-to-br from-black via-red-800 to-red-900 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                  {/* Image */}
                  <div>
                    <img
                      src={project_info.img}
                      alt={project_info.name}
                      className="rounded-lg w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <h3 className="text-2xl font-semibold my-4 text-white">
                      {project_info.name}
                    </h3>

                    {/* Tech Stack - Initially Hidden, Reveals on Hover */}
                    <div className="tech-stack opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible mt-2 text-sm transition-all duration-300 ease-in-out">
                      <p className="font-semibold text-green-400 mb-2">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project_info.tech_stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs shadow-md transition-transform duration-300 transform hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-orange-500 px-4 py-2 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-orange-600"
                      >
                        <i className="fab fa-github mr-2"></i> Github
                      </a>
                      {project_info.live_link && (
                        <a
                          href={project_info.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-orange-500 px-4 py-2 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-orange-600"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
