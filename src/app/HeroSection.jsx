import React, { useState, useEffect } from "react";
import Iridescence from "@/components/UI/Iridescence";
import { Github, Linkedin } from "lucide-react";
import BlurText from "@/components/Typography/BlurText";

const HeroHeading = [
  "Self-Taught Software Developer",
  "Turning Coffee into Scalable Solutions",
  "Open for Collaboration & Learning",
];

function HeroSection() {
  const [heading, setHeading] = useState(HeroHeading[0]); 

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setHeading(HeroHeading[index]);
      index = (index + 1) % HeroHeading.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex justify-center text-white">
      <div className="h-screen w-full absolute z-0 p-3">
        <Iridescence
          color={[0.6, 0.5, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={0.6}
          className="rounded-3xl"
        />
      </div>

      {/* Main heading with re-triggered animation */}
      <div className="absolute left-1 top-44 py-12 px-6">
        <BlurText
          key={heading}
          text={heading}
          delay={70}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 font-semibold"
        />
      </div>

      <div className="flex absolute bottom-3 left-3 w-64 sm:w-sm md:w-lg pt-8 pb-20 bg-black rounded-tr-3xl px-6 inner-curves">
        <BlurText
          text="Code meets creativity. That's me"
          delay={200}
          animateBy="words"
          direction="bottom"
          className="text-5xl mb-8"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row-reverse justify-between items-center absolute bottom-3 right-3 py-12 px-6">
        <a
          href="https://github.com/MrAzeeeem23"
          className="m-2 border border-white rounded-full p-4 backdrop-blur-3xl transition-all hover:scale-110"
        >
          <Github size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/azeem-khan62"
          className="m-2 border border-white rounded-full p-4 backdrop-blur-3xl transition-all hover:scale-110"
        >
          <Linkedin size={30} />
        </a>
      </div>

      {/* Inner curve styles */}
      <style jsx>{`
        .inner-curves::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at top right, transparent 40px, black 40px);
          transform: translate(0, -40px);
          pointer-events: none;
        }
        .inner-curves::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at top right, transparent 40px, black 40px);
          transform: translate(40px, 0);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
