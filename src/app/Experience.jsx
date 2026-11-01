import React, { useState } from "react";
import Container from "@/components/container/Container";
import { Plus } from "lucide-react";

const experienceData = [
  {
    company: "Datavison",
    role: "Java Full Stack Developer",
    period: "Dec 2025 - Present",
    summary:
      "Built responsive UI components, improved performance and accessibility, and collaborated with designers to ship features.",
    tech: ["Java", "Spring-boot", "Angular", "React"],
  },
  {
    company: "Infrathrone",
    role: "Full Stack Developer",
    period: "Aug 2025 - Dec 2025",
    summary:
      "Implemented design system primitives, created reusable components, and reduced bundle size by 18%.",
    tech: ["NextJs", "Tailwind", "React", "Supabase", "MERN-Stack", "GCP"],
  },
  {
    company: "Freelance",
    role: "Freelance Developer",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Delivered landing pages and small apps; focused on UX, performance and cross-browser compatibility.",
    tech: ["HTML", "CSS", "Vanilla JS"],
  },
];

function Experience() {

  const [indexDiv, setIndexDev] = useState(null);

  const handleIndex = (index) => {
    setIndexDev(indexDiv === index ? null : index);
  };

  return (
    <Container>
      <div id="Experience" className="text-white pb-12">
        <h1 className="text-center py-12 uppercase opacity-60 text-lg sm:text-xl md:text-2xl">
          Experience
        </h1>

        <div className="flex flex-col w-full max-w-screen-lg mx-auto border-t border-white">
          {experienceData.map((exp, index) => {
            const isOpen = indexDiv === index;

            return (
              <div key={index} className="border-b border-white px-4">
                <button
                  type="button"
                  onClick={() => handleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-panel-${index}`}
                  className="group w-full flex justify-between items-center gap-4 py-6 sm:py-8 text-left custom-cursor"
                >
                  <div
                    className={`px-2 transition-all duration-200 ${
                      isOpen
                        ? "translate-x-0 sm:translate-x-4"
                        : "sm:group-hover:translate-x-4"
                    }`}
                  >
                    <p className="uppercase opacity-60 text-sm sm:text-base">
                      {exp.company}
                    </p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
                      {exp.role}
                    </h2>
                    <time className="md:hidden inline-block mt-3 border border-white rounded-full px-3 py-1 text-xs uppercase whitespace-nowrap">
                      {exp.period}
                    </time>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <time className="hidden md:inline-block border border-white rounded-full px-4 py-1 text-sm uppercase whitespace-nowrap">
                      {exp.period}
                    </time>
                    <span
                      className={`p-2 border border-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black ${
                        isOpen ? "rotate-45 bg-white text-black" : ""
                      }`}
                    >
                      <Plus size={25} />
                    </span>
                  </div>
                </button>

                {/* Animates to the content's natural height, so nothing gets clipped */}
                <div
                  id={`experience-panel-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-2 sm:px-6 pb-8">
                      <p className="text-sm sm:text-base opacity-70 max-w-2xl text-justify">
                        {exp.summary}
                      </p>
                      <ul className="flex flex-wrap gap-2 mt-5">
                        {exp.tech.map((t) => (
                          <li
                            key={t}
                            className="border border-white/60 rounded-full px-3 py-1 text-xs sm:text-sm transition-all duration-300 hover:bg-white hover:text-black"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Experience;
