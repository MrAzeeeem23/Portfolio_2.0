import Container from "@/components/container/Container";
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = [
  {
    title: "E commerce website",
    name: "Beats Store",
    descriptioin:
      "This project is a full-stack e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js) and various other technologies. The application provides a platform for users to browse, search, and purchase products.",
    liveLink: "https://beats-store-ak.onrender.com/",
    GitHubLink: "https://github.com/MrAzeeeem23/SP-Project-E-Commerce-",
  },
  {
    title: "AI video Genrator",
    name: "Pi Chat",
    descriptioin:
      "This project is a AI Manim Video generator Agent, Build using Python, FastAPI, Manim Library for backend and for frontend i have used Next.Js",
    GitHubLink: "https://github.com/MrAzeeeem23/PiChat",
  },
  {
    title: "Blogging App",
    name: "Expressly",
    descriptioin:
      "This is a Bloggin app build using MERN Stack and appwrite which is a BaaS platform Backend as a servide",
    liveLink: "https://expresslygit.vercel.app/",
    GitHubLink: "https://github.com/MrAzeeeem23/MyBlogging",
  },
  {
    title: "AI chat Chrom Extension",
    name: "Quick Ask",
    descriptioin:
      "A Quick ChatBot extention for you quick problems like CHAT GPT",
  },
  {
    title: "See More On GitHub",
    name: "GitHub",
    GitHubLink: "https://github.com/MrAzeeeem23",
  },
];

function ProjectSection() {
  const [indexDev, setIndexDev] = useState(null);

  const handleOpen = (index) => {
    setIndexDev(indexDev === index ? null : index);
  };

  return (
    <Container>
      <div id="ProjectSection" className="min-h-screen text-white">
        <h1 className="text-center py-12 uppercase opacity-60 text-lg sm:text-xl md:text-2xl">
          Projects
        </h1>

        <div className="flex flex-col w-full">
          {Projects.map((Pro, index) => (
            <div
              key={index}
              onClick={() => handleOpen(index)}
              className={`border-b flex justify-between items-center custom-cursor border-white max-w-screen-lg mx-auto w-full px-4 transition-all duration-500 overflow-hidden ${
                indexDev === index ? "h-58 sm-h-56" : "h-24 sm:h-33"
              }`}
            >
              <div
                className={`py-4 px-2 transition-all duration-200 ${
                  indexDev === index
                    ? "translate-x-0 sm:translate-x-4"
                    : "hover:translate-x-0   sm:hover:translate-x-4"
                }`}
              >
                <p className="uppercase opacity-60 text-sm sm:text-base">
                  {Pro.title}
                </p>
                <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-semibold">
                  {Pro.name}
                </h1>
                <div
                  className={`${
                    indexDev === index ? "flex" : "hidden"
                  } transition-all duration-200 text-sm sm:text-sx sm:w-2xl mt-3 opacity-70 mb-4 text-justify`}
                >
                  <p>{Pro.descriptioin}</p>
                </div>
              </div>
              <div className="flex cursor-pointer ml-4">
                {Pro.GitHubLink && (
                  <a
                    href={Pro.GitHubLink}
                    target="_blank"
                    className="p-2 mr-2 border border-white rounded-full"
                  >
                    <Github size={25} />
                  </a>
                )}
                {Pro.liveLink && (
                  <a
                    href={Pro.GitHubLink}
                    target="_blank"
                    className="p-2 mr-2 border border-white rounded-full"
                  >
                    <ExternalLink size={25} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProjectSection;
