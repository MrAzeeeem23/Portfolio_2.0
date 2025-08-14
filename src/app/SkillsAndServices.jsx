import React, { useState } from "react";
import Image from "next/image";

import Key from "../Assets/Gifs/MiniKey.gif";
import Email from "../Assets/Gifs/Email.gif";
import EnterKey from "../Assets/Gifs/EnterKey.gif";
import Hand from "../Assets/Gifs/Hand.gif";
import Cube from "../Assets/Gifs/Cube.gif";
import SkillsMarquee from "@/components/SkillsMarquee/SkillsMarquee";
import Marquee from "react-fast-marquee";

const segments = [
  {
    First: "Software",
    Middle: EnterKey,
    Last: "Development",
  },
  {
    First: "MERN",
    Middle: Email,
    Last: "Stack",
  },
  {
    First: "Full-Stack",
    Middle: Cube,
    Last: "Development",
  },
  {
    First: "Creative",
    Middle: Hand,
    Last: "Coding",
  },
];

function SkillsAndServices() {
  const [segmentsIndex, setSegmentsIndex] = useState(null);

  return (
    <div
      id="SkillsAndServices"
      className="w-full text-white flex flex-col justify-center items-center 
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
    >
      <h1 className="text-center py-12 uppercase opacity-60 text-lg sm:text-xl md:text-2xl">Skills</h1>
      {/* <div className="relative h-[500px] flex flex-col justify-center items-center">
        <Marquee speed={100} className="absolute rotate-6 h-36">
          <h1 className="text-6xl font-bold text-white italic">
            AZEEM KHAN * SOFTWARE DEVELOPER *{" "}
          </h1>
          <h1 className="text-6xl font-bold text-white italic">
            AZEEM KHAN * SOFTWARE DEVELOPER *{" "}
          </h1>
        </Marquee>
        <Marquee
          speed={100}
          direction="right"
          className="absolute transform -rotate-12 h-33"
        >
          <h1 className="text-6xl font-bold text-white italic">
            AZEEM KHAN * SOFTWARE DEVELOPER *{" "}
          </h1>
          <h1 className="text-6xl font-bold text-white italic">
            AZEEM KHAN * SOFTWARE DEVELOPER *{" "}
          </h1>
        </Marquee>
      </div> */}
      {segments.map((seg, index) => (
        <h1
          key={index}
          onMouseEnter={() => setSegmentsIndex(index)}
          onMouseLeave={() => setSegmentsIndex(null)}
          className="my-4 sm:my-6 font-bold flex flex-wrap items-center gap-2"
        >
          {seg.First}
          <span
            className={`flex justify-center items-center overflow-hidden transition-all duration-300 font-bold m-0 p-0 
              ${
                segmentsIndex === index
                  ? "w-14 sm:w-20 lg:w-[110px]"
                  : "w-14 sm:w-0"
              }`}
          >
            <Image
              src={seg.Middle}
              alt="logo"
              className="rounded-3xl border border-white object-cover 
                         h-12 sm:h-16 lg:h-20 w-auto"
            />
          </span>
          {seg.Last}
        </h1>
      ))}
      <SkillsMarquee />
    </div>
  );
}

export default SkillsAndServices;
