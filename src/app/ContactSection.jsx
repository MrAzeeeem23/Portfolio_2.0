import React from "react";
import Iridescence from "@/components/UI/Iridescence";

function ContactSection() {
  return (
    <div
      id="ContactSection"
      className="relative h-screen w-full flex justify-center items-center overflow-hidden"
    >
        <div className="absolute inset-0 z-0 mx-4 md:mx-22 my-22">
          <Iridescence
            color={[0.5, 0.4, 0.8]}
            mouseReact={false}
            amplitude={0.1}
            speed={1}
            className="w-full h-[400px] rounded-4xl"
          />
        </div>
        <div className="absolute inset-0 bg-[url('../Assets/Distortion.png')] bg-cover bg-center z-10 mx-4 md:mx-22 my-22 rounded-4xl"></div>
        <div className="relative z-20 px-10 mx-4 md:mx-22 my-22">
          <h1 className="text-white text-5xl md:text-7xl ">
            Wanna Create Something{" "}
            <span className="text-white font-bold">Awesome</span> Together?
          </h1>
        <div className="my-12">
            <a href="mailto:azeemkh528@gmail.com" className="border-2 border-white px-4 py-2 text-2xl rounded-full text-white transition-all duration-300 hover:bg-white hover:text-black ">Let's Connect</a>
        </div>
        </div>
    </div>
  );
}

export default ContactSection;
