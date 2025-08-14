"use client";
import NavBar from "@/components/Header/NavBar";
import AboutMe from "./AboutMe";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillsAndServices from "./SkillsAndServices";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-black overflow-x-auto">
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <AboutMe />
      <SkillsAndServices />
      <ContactSection />
    </div>
    </>
  );
}
