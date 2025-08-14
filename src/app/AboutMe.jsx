import React from "react";
import Image from "next/image";
import Photo from "../Assets/Photo.jpg";
import BlurText from "@/components/Typography/BlurText";

function AboutMe() {
  return (
    <div
      id="AboutMe"
      className="min-h-screen text-white max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center px-4"
    >
      <div className="flex-shrink-0 mx-0 md:mx-6 mb-6 md:mb-0">
        <Image
          src={Photo}
          alt="Photo"
          className="w-full max-w-[460px] h-auto object-cover grayscale rounded-4xl"
        />
      </div>

      <div className="flex flex-col justify-between items-center gap-16 text-center md:text-left max-w-xl">
        <BlurText
          text=" I’m Azeem Khan, a passionate developer dedicated to crafting dynamic,
          responsive, and user-centered applications using modern technologies."
          delay={100}
          animateBy="words"
          direction="top"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
        />
        <a
          href="#ContactSection"
          className="border-2 border-white px-4 py-2 text-lg sm:text-xl rounded-full text-white transition-all duration-300 hover:bg-white hover:text-black mx-auto md:mx-0"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
