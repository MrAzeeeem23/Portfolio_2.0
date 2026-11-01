"use client";
import NavBar from "@/components/Header/NavBar";
import AboutMe from "./AboutMe";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import MySkill from "./MySkill";
import ProjectSection from "./ProjectSection";
import SkillsAndServices from "./SkillsAndServices";
import Experience from './Experience';

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-black overflow-x-auto">
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <AboutMe />
      <Experience />
      <SkillsAndServices />
      {/* <MySkill /> */}
      <ContactSection />
    </div>
    </>
  );
}
