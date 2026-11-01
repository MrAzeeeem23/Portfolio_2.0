import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";


function SkillsMarquee({
  Skills,
  gradient = false,
  gradientColor = "black",
  gradientWidth = 100,
  speed = 50,
  direction = "right",
}) {
  return (
    <div className="w-full my-4 transform overflow-hidden">
      <Marquee
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
        pauseOnHover={false}
        speed={speed}
        direction={direction}
      >
        {Skills.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={`${icon.Link},theme=dark`}
              alt={icon.Name}
              className="h-10 sm:h-10 md:h-14 lg:h-16 w-auto object-contain grayscale-0"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default SkillsMarquee;
