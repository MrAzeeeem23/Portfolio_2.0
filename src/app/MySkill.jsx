import React from 'react'
import SkillsMarquee from "@/components/SkillsMarquee/SkillsMarquee";
import { useRef } from "react";


const Skills = [
    {
      Name: "React",
      Link: "https://skillicons.dev/icons?i=react",
    },
    {
      Name: "Next.Js",
      Link: "https://skillicons.dev/icons?i=nextjs",
    },
    {
      Name: "javaScrpt",
      Link: "https://skillicons.dev/icons?i=js",
    },
    {
      Name: "MongoDB",
      Link: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      Name: "Express Js",
      Link: "https://skillicons.dev/icons?i=expressjs",
    },
    {
      Name: "Node",
      Link: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      Name: "Java",
      Link: "https://skillicons.dev/icons?i=java",
    },
    {
      Name: "SpringBoot",
      Link: "https://skillicons.dev/icons?i=spring",
    },
    {
      Name: "Postman",
      Link: "https://skillicons.dev/icons?i=postman",
    },
    {
      Name: "GCP",
      Link: "https://skillicons.dev/icons?i=gcp",
    },
    {
      Name: "GitHub",
      Link: "https://skillicons.dev/icons?i=github",
    },
    {
      Name: "git",
      Link: "https://skillicons.dev/icons?i=git",
    },
    {
      Name: "Intelij",
      Link: "https://skillicons.dev/icons?i=idea",
    },
    {
      Name: "mysql",
      Link: "https://skillicons.dev/icons?i=mysql",
    },
    {
      Name: "netlify",
      Link: "https://skillicons.dev/icons?i=netlify",
    },
    {
      Name: "npm",
      Link: "https://skillicons.dev/icons?i=npm",
    },
    {
      Name: "postgres",
      Link: "https://skillicons.dev/icons?i=postgres",
    },
    {
      Name: "powershell",
      Link: "https://skillicons.dev/icons?i=powershell",
    },
    {
      Name: "python",
      Link: "https://skillicons.dev/icons?i=py",
    },
    {
      Name: "redux",
      Link: "https://skillicons.dev/icons?i=redux",
    },
    {
      Name: "tailwind",
      Link: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      Name: "vercel",
      Link: "https://skillicons.dev/icons?i=vercel",
    },
    {
      Name: "vite	",
      Link: "https://skillicons.dev/icons?i=vite",
    },
    {
      Name: "vscode",
      Link: "https://skillicons.dev/icons?i=vscode",
    },
  ];
  

function MySkill() {
  return (
    <div className='h-[400px] overflow-hidden'>
        <div className='flex flex-col justify-center items-center transform rotate-45 mt-4'>
            <h1 className='text-white text-2xl font-semibold'>FrontEnd</h1>
            <SkillsMarquee Skills={Skills} />
        </div>
        <div className='flex flex-col justify-center items-center transform rotate-45 mt-4'>
            <h1 className='text-white text-2xl font-semibold'>FrontEnd</h1>
            <SkillsMarquee Skills={Skills} direction="left"/>
        </div>
        <div className='flex flex-col justify-center items-center transform rotate-45 mt-4'>
            <h1 className='text-white text-2xl font-semibold'>FrontEnd</h1>
            <SkillsMarquee Skills={Skills} />
        </div>
    </div>
  )
}

export default MySkill